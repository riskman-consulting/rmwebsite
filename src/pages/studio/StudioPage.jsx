import { Studio } from 'sanity'
import config from '../../sanity.config'

/**
 * Embedded Sanity Studio, mounted at /cms.
 *
 * Rendered outside the site chrome (header/footer) so the Studio gets the
 * full viewport and handles its own routing under the `/cms` basePath.
 */
export default function StudioPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, height: '100dvh', width: '100vw' }}>
      <Studio config={config} unstable_globalStyles />
    </div>
  )
}
