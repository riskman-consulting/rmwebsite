/**
 * Keeps <head> free of duplicate SEO tags.
 *
 * Every page is served with the tags baked into its HTML at build time
 * (index.html, or dist/<route>/index.html from scripts/generate-meta.mjs).
 * Pages created after the build — e.g. a new blog post — fall back to the
 * homepage HTML, whose canonical is "https://www.riskman.in/".
 *
 * react-helmet-async adds its own tags (marked data-rh="true") but never
 * removes those static ones, so the page ends up with two canonicals and two
 * descriptions, and crawlers/SEO tools read the first: the homepage's.
 *
 * This watches <head> and, whenever Helmet has written a tag, removes the
 * static tag with the same key so only the page's own value remains.
 */

const tagKey = (el) => {
  if (el.tagName === "LINK") {
    const rel = el.getAttribute("rel");
    return rel === "canonical" ? "link:canonical" : null;
  }
  if (el.tagName === "META") {
    const name = el.getAttribute("name");
    if (name) return `meta:name:${name}`;
    const prop = el.getAttribute("property");
    if (prop) return `meta:property:${prop}`;
  }
  return null;
};

function dedupe() {
  const head = document.head;
  if (!head) return;

  const helmetKeys = new Set();
  head.querySelectorAll("link[data-rh], meta[data-rh]").forEach((el) => {
    const key = tagKey(el);
    if (key) helmetKeys.add(key);
  });
  if (helmetKeys.size === 0) return;

  head.querySelectorAll("link[rel='canonical']:not([data-rh]), meta:not([data-rh])").forEach((el) => {
    const key = tagKey(el);
    if (key && helmetKeys.has(key)) el.remove();
  });
}

export function startHeadTagDedupe() {
  if (typeof document === "undefined" || typeof MutationObserver === "undefined") return;
  dedupe();
  new MutationObserver(dedupe).observe(document.head, { childList: true });
}
