import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
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

if (rootEl.hasChildNodes()) {
  // react-snap has prerendered HTML — hydrate it
  hydrateRoot(rootEl, tree)
} else {
  // Dev mode or first-load fallback — render fresh
  createRoot(rootEl).render(tree)
}
