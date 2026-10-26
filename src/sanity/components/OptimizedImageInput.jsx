import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { set, useClient } from 'sanity'
import { Button, Card, Flex, Stack, Text } from '@sanity/ui'
import { ImageIcon } from '@sanity/icons'

/** Images above this size are re-encoded even when they are already WebP. */
export const MAX_IMAGE_KB = 500

/** Wider images are scaled down to this — wider than any slot on the site. */
const MAX_WIDTH = 2560

const WEBP_QUALITY = 0.82

/**
 * An upload newer than this is treated as "just uploaded" and optimized
 * without asking. Older assets get a button, since a published page may still
 * be using them.
 */
const FRESH_MS = 5 * 60 * 1000

// Vector and animated formats would be damaged by a canvas re-encode
const SKIP_TYPES = new Set(['image/svg+xml', 'image/gif'])

// Shared by every input on the page: an asset opened in a gallery and in its
// own dialog at the same time must be converted once, and neither the WebP
// files this code uploads nor the originals they replaced are picked up again.
const inFlight = new Set()
const createdHere = new Set()
// Fresh uploads whose automatic conversion failed: not retried on their own,
// the button is still offered
const autoFailed = new Set()

const toKb = (bytes) => Math.round(bytes / 1024)

const formatOf = (mimeType = '') => mimeType.replace('image/', '').toUpperCase()

const needsWork = (asset) =>
    Boolean(asset) &&
    !SKIP_TYPES.has(asset.mimeType) &&
    !createdHere.has(asset._id) &&
    (asset.mimeType !== 'image/webp' || asset.size > MAX_IMAGE_KB * 1024)

const isFresh = (asset) => Date.now() - Date.parse(asset._createdAt) < FRESH_MS

/** WebP of the image at `url`, scaled to MAX_WIDTH at most. */
const convertToWebp = async (url, originalName) => {
    const source = await (await fetch(url)).blob()
    const bitmap = await createImageBitmap(source)
    const scale = Math.min(1, MAX_WIDTH / bitmap.width)
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close?.()

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', WEBP_QUALITY))
    // Safari falls back to PNG instead of failing
    if (!blob || blob.type !== 'image/webp') {
        throw new Error('This browser cannot create WebP images. Use Chrome, Edge or Firefox.')
    }
    const name = `${(originalName || 'image').replace(/\.[^.]+$/, '')}.webp`
    return new File([blob], name, { type: 'image/webp' })
}

/**
 * Keeps the image assets at `targets` ([{ path, ref }]) in WebP and under
 * MAX_IMAGE_KB. Fresh uploads are converted straight away; older ones are
 * returned in `pending` for the editor to convert with a button.
 */
const useImageOptimizer = (targets, onChange) => {
    const client = useClient({ apiVersion: '2024-01-01' })
    const [assets, setAssets] = useState({})
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)

    // The latest targets, so an async conversion can tell whether its image
    // is still on the field before writing to it
    const targetsRef = useRef(targets)
    targetsRef.current = targets

    const refKey = targets.map((t) => t.ref).join(',')

    useEffect(() => {
        const ids = refKey ? refKey.split(',') : []
        if (!ids.length) {
            setAssets({})
            return undefined
        }
        let live = true
        client
            .fetch('*[_id in $ids]{_id, _createdAt, url, mimeType, size, originalFilename}', { ids })
            .then((rows) => live && setAssets(Object.fromEntries(rows.map((row) => [row._id, row]))))
            .catch(() => live && setAssets({}))
        return () => {
            live = false
        }
    }, [client, refKey])

    const convert = useCallback(
        async (target, asset, { removeOriginal }) => {
            if (inFlight.has(asset._id)) return
            inFlight.add(asset._id)
            try {
                const file = await convertToWebp(asset.url, asset.originalFilename)
                // Already WebP and no smaller: nothing to gain
                if (asset.mimeType === 'image/webp' && file.size >= asset.size) {
                    createdHere.add(asset._id)
                    return
                }
                const uploaded = await client.assets.upload('image', file, { filename: file.name })
                createdHere.add(uploaded._id)

                const stillThere = targetsRef.current.some(
                    (t) => t.ref === asset._id && JSON.stringify(t.path) === JSON.stringify(target.path)
                )
                if (!stillThere) return
                onChange(set({ _type: 'reference', _ref: uploaded._id }, target.path))
                // The field may still show the old asset for a render or two
                createdHere.add(asset._id)

                // A file uploaded a moment ago is not used anywhere else. Wait
                // for the field change to save first; Sanity refuses to delete
                // an asset that is still referenced, so a failure is harmless.
                if (removeOriginal && uploaded._id !== asset._id) {
                    setTimeout(() => client.delete(asset._id).catch(() => {}), 4000)
                }
            } finally {
                inFlight.delete(asset._id)
            }
        },
        [client, onChange]
    )

    const run = useCallback(
        async (jobs, options) => {
            setError(null)
            for (const [index, { target, asset }] of jobs.entries()) {
                setStatus(
                    jobs.length > 1
                        ? `Converting image ${index + 1} of ${jobs.length} to WebP…`
                        : `Converting ${asset.originalFilename || 'image'} (${formatOf(asset.mimeType)}, ${toKb(asset.size)} KB) to WebP…`
                )
                try {
                    await convert(target, asset, options)
                } catch (err) {
                    console.error('Image conversion failed', err)
                    if (options.removeOriginal) autoFailed.add(asset._id)
                    setError(`${asset.originalFilename || 'An image'} was kept as it is: ${err.message}`)
                }
            }
            setStatus(null)
        },
        [convert]
    )

    const jobs = useMemo(
        () =>
            targets
                .map((target) => ({ target, asset: assets[target.ref] }))
                .filter(({ asset }) => needsWork(asset)),
        [targets, assets]
    )

    const isAuto = ({ asset }) => isFresh(asset) && !autoFailed.has(asset._id)
    const fresh = jobs.filter((job) => isAuto(job) && !inFlight.has(job.asset._id))
    const pending = jobs.filter((job) => !isAuto(job))

    // Fresh uploads: convert without asking. Re-checked when a run finishes,
    // so images added while one was running are not missed.
    const freshKey = fresh.map(({ asset }) => asset._id).join(',')
    useEffect(() => {
        if (freshKey && !status) run(fresh, { removeOriginal: true })
        // `fresh` is derived from freshKey
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freshKey, status])

    const convertPending = useCallback(() => run(pending, { removeOriginal: false }), [run, pending])

    return { status, error, pending, convertPending }
}

const StatusCards = ({ status, error }) => (
    <>
        {status && (
            <Card padding={3} radius={2} tone="primary">
                <Text size={1}>{status}</Text>
            </Card>
        )}
        {error && (
            <Card padding={3} radius={2} tone="caution">
                <Text size={1}>{error}</Text>
            </Card>
        )}
    </>
)

const SingleImageInput = (props) => {
    const { value, onChange, renderDefault } = props
    const ref = value?.asset?._ref
    const targets = useMemo(() => (ref ? [{ path: ['asset'], ref }] : []), [ref])
    const { status, error, pending, convertPending } = useImageOptimizer(targets, onChange)
    const asset = pending[0]?.asset

    return (
        <Stack space={3}>
            {renderDefault(props)}
            {!status && asset && (
                <Card padding={3} radius={2} tone="caution">
                    <Flex align="center" gap={3} wrap="wrap">
                        <Text size={1} style={{ flex: 1 }}>
                            This image is {formatOf(asset.mimeType)}, {toKb(asset.size)} KB. WebP loads faster on the site.
                        </Text>
                        <Button icon={ImageIcon} mode="ghost" tone="caution" text="Convert to WebP" onClick={convertPending} />
                    </Flex>
                </Card>
            )}
            <StatusCards status={status} error={error} />
        </Stack>
    )
}

const ImageArrayInput = (props) => {
    const { value, onChange, renderDefault } = props
    const refs = (value || [])
        .filter((item) => item?._key && item.asset?._ref)
        .map((item) => `${item._key}:${item.asset._ref}`)
        .join(',')
    const targets = useMemo(
        () =>
            refs
                ? refs.split(',').map((pair) => {
                      const [key, ref] = pair.split(':')
                      return { path: [{ _key: key }, 'asset'], ref }
                  })
                : [],
        [refs]
    )
    const { status, error, pending, convertPending } = useImageOptimizer(targets, onChange)

    return (
        <Stack space={3}>
            {renderDefault(props)}
            {!status && pending.length > 0 && (
                <Card padding={3} radius={2} tone="caution">
                    <Flex align="center" gap={3} wrap="wrap">
                        <Text size={1} style={{ flex: 1 }}>
                            {pending.length === 1 ? '1 image here is' : `${pending.length} images here are`} not WebP
                            or over {MAX_IMAGE_KB} KB. WebP loads faster on the site.
                        </Text>
                        <Button
                            icon={ImageIcon}
                            mode="ghost"
                            tone="caution"
                            text={pending.length === 1 ? 'Convert to WebP' : 'Convert all to WebP'}
                            onClick={convertPending}
                        />
                    </Flex>
                </Card>
            )}
            <StatusCards status={status} error={error} />
        </Stack>
    )
}

const isImageType = (type) => {
    for (let t = type; t; t = t.type) if (t.name === 'image') return true
    return false
}

/**
 * Studio-wide form input (registered in src/sanity.config.js). Every image
 * field and every array that holds images gets the optimizer; all other
 * fields render exactly as before.
 */
export const OptimizedImageInput = (props) => {
    const { schemaType } = props
    if (isImageType(schemaType)) return <SingleImageInput {...props} />
    if (schemaType?.jsonType === 'array' && schemaType.of?.some(isImageType)) {
        return <ImageArrayInput {...props} />
    }
    return props.renderDefault(props)
}
