import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './components/context/ThemeContext.jsx'

AOS.init()

const rootEl = document.getElementById('root')

const tree = (
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)

// Most routes arrive with their markup already in #root (prerendered at build
// time by scripts/generate-meta.mjs, for crawlers). Render fresh rather than
// hydrate: the browser-only state (saved theme, fetched data) can differ from
// the build-time render, and React 18 does not patch attribute mismatches
// during hydration. createRoot replaces the markup in a single commit.
createRoot(rootEl).render(tree)
