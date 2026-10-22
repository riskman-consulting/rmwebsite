import { useCallback, useEffect, useRef, useState } from 'react'
import { set, useClient } from 'sanity'
import { Button, Card, Flex, Stack, Text } from '@sanity/ui'
import { UploadIcon } from '@sanity/icons'

/** Files above this size are re-encoded before upload. */
export const MAX_VIDEO_MB = 25

// ffmpeg.wasm core (~30 MB) is fetched only when an editor actually compresses
// a video, so neither the site nor the Studio bundle carries it.
const FFMPEG_CORE_URL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm'

let ffmpegPromise = null

const loadFfmpeg = () => {
    if (!ffmpegPromise) {
        ffmpegPromise = (async () => {
            const [{ FFmpeg }, { toBlobURL }] = await Promise.all([
                import('@ffmpeg/ffmpeg'),
                import('@ffmpeg/util'),
            ])
            const ffmpeg = new FFmpeg()
            await ffmpeg.load({
                coreURL: await toBlobURL(`${FFMPEG_CORE_URL}/ffmpeg-core.js`, 'text/javascript'),
                wasmURL: await toBlobURL(`${FFMPEG_CORE_URL}/ffmpeg-core.wasm`, 'application/wasm'),
            })
            return ffmpeg
        })().catch((err) => {
            // Let the next attempt retry instead of reusing a failed load
            ffmpegPromise = null
            throw err
        })
    }
    return ffmpegPromise
}

/**
 * Re-encode to H.264/AAC MP4, capped at 1280px wide, with the moov atom up
 * front so the browser can start playback before the whole file arrives.
 */
const compressVideo = async (source, fileName, onProgress) => {
    const { fetchFile } = await import('@ffmpeg/util')
    const ffmpeg = await loadFfmpeg()

    const handleProgress = ({ progress }) =>
        onProgress(Math.min(Math.max(progress, 0), 1))
    ffmpeg.on('progress', handleProgress)

    const dot = fileName.lastIndexOf('.')
    const input = `input${dot > -1 ? fileName.slice(dot) : '.mp4'}`
    const output = 'output.mp4'

    try {
        // `source` is a File or the URL of an asset already in Sanity
        await ffmpeg.writeFile(input, await fetchFile(source))
        await ffmpeg.exec([
            '-i', input,
            '-vf', "scale='min(1280,iw)':-2",
            '-c:v', 'libx264',
            '-preset', 'veryfast',
            '-crf', '28',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-movflags', '+faststart',
            output,
        ])
        const data = await ffmpeg.readFile(output)
        const name = fileName.replace(/\.[^.]+$/, '') + '.mp4'
        return new File([data], name, { type: 'video/mp4' })
    } finally {
        ffmpeg.off('progress', handleProgress)
        await ffmpeg.deleteFile(input).catch(() => {})
        await ffmpeg.deleteFile(output).catch(() => {})
    }
}

const toMb = (bytes) => (bytes / 1024 / 1024).toFixed(1)

const isTooLarge = (bytes) => bytes > MAX_VIDEO_MB * 1024 * 1024

/**
 * File input for module videos. Keeps Sanity's default file field (preview,
 * replace, remove) and adds an upload button that compresses anything over
 * MAX_VIDEO_MB first. If compression fails or does not make the file smaller,
 * the original is uploaded instead so the editor is never left stuck.
 *
 * A large video that arrived through the default picker or drag-and-drop
 * (which skip compression) gets a "Compress now" prompt instead.
 */
export const CompressedVideoInput = (props) => {
    const { onChange, renderDefault, value } = props
    const client = useClient({ apiVersion: '2024-01-01' })
    const inputRef = useRef(null)
    const [status, setStatus] = useState(null)
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [current, setCurrent] = useState(null)

    const busy = Boolean(status)
    const assetRef = value?.asset?._ref

    // Size and URL of the asset already on the field
    useEffect(() => {
        if (!assetRef) {
            setCurrent(null)
            return undefined
        }
        let live = true
        client
            .fetch(`*[_id == $id][0]{url, size, originalFilename}`, { id: assetRef })
            .then((asset) => live && setCurrent(asset))
            .catch(() => live && setCurrent(null))
        return () => {
            live = false
        }
    }, [client, assetRef])

    /**
     * Compress `source` if it is over the limit, then upload. `fallback` is
     * what to upload when compression fails or does not help — the original
     * File for a fresh pick, nothing for an asset that is already stored.
     */
    const processAndUpload = useCallback(
        async ({ source, name, size, fallback }) => {
            setError(null)
            let toUpload = fallback

            try {
                if (isTooLarge(size)) {
                    setStatus(`Compressing ${toMb(size)} MB video… keep this tab open.`)
                    setProgress(0)
                    try {
                        const compressed = await compressVideo(source, name, setProgress)
                        if (compressed.size < size) toUpload = compressed
                    } catch (err) {
                        console.error('Video compression failed', err)
                        setError(
                            fallback
                                ? 'Compression failed, uploading the original file instead.'
                                : 'Compression failed, the current video was kept.'
                        )
                    }
                }

                if (!toUpload) return

                setProgress(null)
                setStatus(`Uploading ${toMb(toUpload.size)} MB…`)
                const asset = await client.assets.upload('file', toUpload, {
                    filename: toUpload.name,
                    contentType: toUpload.type,
                })
                onChange(set({ _type: 'file', asset: { _type: 'reference', _ref: asset._id } }))
            } catch (err) {
                setError(`Upload failed: ${err.message}`)
            } finally {
                setStatus(null)
                setProgress(null)
            }
        },
        [client, onChange]
    )

    const handleFile = useCallback(
        (event) => {
            const file = event.target.files?.[0]
            event.target.value = ''
            if (!file) return
            processAndUpload({ source: file, name: file.name, size: file.size, fallback: file })
        },
        [processAndUpload]
    )

    const compressCurrent = useCallback(() => {
        if (!current?.url) return
        processAndUpload({
            source: current.url,
            name: current.originalFilename || 'video.mp4',
            size: current.size,
            fallback: null,
        })
    }, [current, processAndUpload])

    return (
        <Stack space={3}>
            {renderDefault(props)}

            <input
                ref={inputRef}
                type="file"
                accept="video/*"
                hidden
                onChange={handleFile}
            />
            <Button
                icon={UploadIcon}
                mode="ghost"
                text={`Upload video (auto-compress over ${MAX_VIDEO_MB} MB)`}
                disabled={busy}
                loading={busy}
                onClick={() => inputRef.current?.click()}
            />

            {!busy && current?.size && isTooLarge(current.size) && (
                <Card padding={3} radius={2} tone="caution">
                    <Flex align="center" gap={3} wrap="wrap">
                        <Text size={1} style={{ flex: 1 }}>
                            This video is {toMb(current.size)} MB, which is heavy for visitors to load.
                        </Text>
                        <Button mode="ghost" tone="caution" text="Compress now" onClick={compressCurrent} />
                    </Flex>
                </Card>
            )}

            {status && (
                <Card padding={3} radius={2} tone="primary">
                    <Stack space={3}>
                        <Text size={1}>{status}</Text>
                        {progress !== null && (
                            <Flex align="center" gap={2}>
                                <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.1)' }}>
                                    <div
                                        style={{
                                            width: `${Math.round(progress * 100)}%`,
                                            height: '100%',
                                            borderRadius: 3,
                                            background: 'currentColor',
                                            transition: 'width 0.3s',
                                        }}
                                    />
                                </div>
                                <Text size={1}>{Math.round(progress * 100)}%</Text>
                            </Flex>
                        )}
                    </Stack>
                </Card>
            )}

            {error && (
                <Card padding={3} radius={2} tone="caution">
                    <Text size={1}>{error}</Text>
                </Card>
            )}
        </Stack>
    )
}
