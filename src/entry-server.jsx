import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { ThemeProvider } from './components/context/ThemeContext.jsx'
import { preloadAllPages } from './utils/lazyPage.jsx'
import { useBlogStore } from './store/blog'
import { useCareerStore } from './store/career'

/** Pages are code-split; load them all once before rendering any route. */
export const preload = preloadAllPages

/**
 * Loads the Sanity data that listing pages render from (blog posts, open
 * jobs) into their stores, so /blogs and /careers can be prerendered with
 * their links. Returns how many of each arrived; generate-meta prerenders a
 * listing only when its list is not empty, so a failed fetch never bakes an
 * empty state into the HTML.
 */
export async function prefetch() {
  await Promise.allSettled([
    useBlogStore.getState().fetchPosts(),
    useCareerStore.getState().fetchCareerPage(),
  ])
  // On the server, zustand's hook renders the store's *initial* state (its
  // getServerSnapshot), not the current one, so the fetched lists are copied
  // into it. This process only renders HTML; the browser is unaffected.
  Object.assign(useBlogStore.getInitialState(), { posts: useBlogStore.getState().posts })
  Object.assign(useCareerStore.getInitialState(), { jobOpenings: useCareerStore.getState().jobOpenings })
  return {
    posts: useBlogStore.getState().posts?.length || 0,
    jobs: useCareerStore.getState().jobOpenings?.length || 0,
    // Embedded in the page by generate-meta, so the browser starts from it
    data: {
      "/blogs": { posts: useBlogStore.getState().posts || [] },
      "/careers": { jobOpenings: useCareerStore.getState().jobOpenings || [] },
    },
  }
}

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
