/**
 * Code-splits a page into its own chunk, so the first visit only downloads the
 * page being viewed instead of every page on the site.
 *
 * Unlike React.lazy, a page that has already been loaded renders synchronously.
 * That lets the app:
 *  - load the current route's chunk *before* the first render (main.jsx), so the
 *    prerendered HTML is swapped for the real page with no loading flash;
 *  - preload every page before build-time prerendering (entry-server.jsx), where
 *    renderToString cannot wait for a lazy component.
 */
const registry = [];

export function lazyPage(loader) {
  let Component = null;
  let promise = null;

  const preload = () => {
    if (!promise) {
      promise = loader().then((mod) => {
        Component = mod.default;
        return Component;
      });
    }
    return promise;
  };

  function LazyPage(props) {
    if (Component) return <Component {...props} />;
    // Suspend until the chunk arrives (caught by the <Suspense> around <Routes>)
    throw preload();
  }
  LazyPage.preload = preload;
  registry.push(preload);
  return LazyPage;
}

/** Loads every registered page (used by the build-time prerender). */
export const preloadAllPages = () => Promise.all(registry.map((load) => load()));
