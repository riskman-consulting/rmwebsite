/**
 * Root Studio config for the Sanity CLI (`npx sanity schema validate`,
 * `sanity dataset export`, migrations, etc.).
 *
 * The actual config lives in src/sanity.config.js, which is also what the
 * embedded Studio at /cms imports — so both always stay in sync.
 */
export { default } from './src/sanity.config'
