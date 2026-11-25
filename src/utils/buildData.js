/**
 * Lists that the build fetched from Sanity and embedded in a prerendered page
 * (window.__RM_DATA__, written by scripts/generate-meta.mjs for /blogs and
 * /careers). The stores start from them, so the browser's first render shows
 * the same list as the HTML instead of "Loading…" until Sanity answers. The
 * stores still refetch, so newer content replaces it.
 */
export const buildData = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  const value = window.__RM_DATA__?.[key];
  return Array.isArray(value) ? value : fallback;
};
