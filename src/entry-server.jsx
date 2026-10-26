import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { ThemeProvider } from './components/context/ThemeContext.jsx'

/**
 * Build-time renderer. `scripts/generate-meta.mjs` calls this for every route
 * and writes the markup into that route's index.html, so the page's text is in
 * the HTML that crawlers fetch. Same tree as src/main.jsx, on a StaticRouter.
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <HelmetProvider context={{}}>
        <ThemeProvider>
          <App location={url} />
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  )
}
