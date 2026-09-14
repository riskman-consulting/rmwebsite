/**
 * Sanity connection settings.
 *
 * Values are read from the Vite env (`import.meta.env`, used by the app and the
 * embedded Studio at /cms) with a fallback to `process.env`, so that Sanity CLI
 * tooling — which loads this config in Node, where `import.meta.env` does not
 * exist — keeps working too.
 */
const browserEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {}

const nodeEnv = typeof process !== 'undefined' && process.env ? process.env : {}

function readEnv(...keys) {
  for (const key of keys) {
    const value = browserEnv[key] ?? nodeEnv[key]
    if (value !== undefined && value !== null && value !== '') return value
  }
  return undefined
}

export const projectId = assertValue(
  readEnv('VITE_SANITY_PROJECT_ID', 'SANITY_STUDIO_PROJECT_ID'),
  'Missing environment variable: VITE_SANITY_PROJECT_ID (or SANITY_STUDIO_PROJECT_ID)'
)

export const dataset = assertValue(
  readEnv('VITE_SANITY_DATA_SET', 'SANITY_STUDIO_DATASET'),
  'Missing environment variable: VITE_SANITY_DATA_SET (or SANITY_STUDIO_DATASET)'
)

export const apiVersion =
  readEnv('VITE_SANITY_API_VERSION', 'SANITY_STUDIO_API_VERSION') || '2024-01-01'

export const useCdn =
  String(readEnv('VITE_SANITY_ENBALE_CDN') ?? 'true') === 'true'

export const token = readEnv('VITE_SANITY_API_TOKEN')

function assertValue(value, errorMessage) {
  if (value === undefined || value === null || value === '') {
    throw new Error(errorMessage)
  }
  return value
}
