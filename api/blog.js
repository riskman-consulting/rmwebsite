/**
 * Share previews for blog posts published after the last deploy.
 *
 * At build time scripts/generate-meta.mjs writes dist/blog/<slug>/index.html
 * with each post's title, description and image (og:/twitter: tags). A post
 * published later has no such file, so the site used to answer with the
 * homepage HTML — and LinkedIn, Facebook, WhatsApp and X, which don't run
 * JavaScript, showed the homepage logo instead of the post's image.
 *
 * vercel.json sends /blog/:slug and /insights/:slug here only when no
 * prerendered file exists (Vercel serves static files before rewrites). This
 * fetches the post from Sanity and returns the normal app page (index.html)
 * with the post's tags in <head>. Visitors see the same page as before; the
 * app still renders in the browser.
 */
import { POST_BY_SLUG_QUERY, buildPostHead, injectMeta } from "../scripts/post-meta.mjs";

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID;
const DATASET = process.env.VITE_SANITY_DATA_SET;
const API_VERSION = process.env.VITE_SANITY_API_VERSION || "2024-01-01";

let templateCache = null;

/**
 * The deployed app shell, fetched once per function instance. app-shell.html
 * is the empty shell (dist/index.html now carries the prerendered homepage);
 * index.html is the fallback for a deploy made before it existed.
 */
async function getTemplate(origin) {
  if (templateCache) return templateCache;
  let res = await fetch(`${origin}/app-shell.html`);
  if (!res.ok) res = await fetch(`${origin}/index.html`);
  if (!res.ok) throw new Error(`app shell: HTTP ${res.status}`);
  templateCache = await res.text();
  return templateCache;
}

async function getPost(slug) {
  if (!PROJECT_ID || !DATASET) return null;
  const params = new URLSearchParams({
    query: POST_BY_SLUG_QUERY,
    $slug: JSON.stringify(slug),
  });
  const res = await fetch(
    `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}?${params}`
  );
  if (!res.ok) return null;
  const { result } = await res.json();
  return result || null;
}

export default async function handler(req, res) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const origin = `https://${host}`;
  const slug = String(req.query.slug || "").slice(0, 200);

  let template;
  try {
    template = await getTemplate(origin);
  } catch {
    // Without the app shell we cannot build the page; let the browser load it.
    res.setHeader("Cache-Control", "no-store");
    res.writeHead(302, { Location: "/blogs" });
    return res.end();
  }

  let post = null;
  try {
    if (slug) post = await getPost(slug);
  } catch {
    post = null;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (!post?.slug) {
    // Unknown or scheduled post: the app shows its own "Article not found" page
    res.setHeader("Cache-Control", "public, max-age=0, s-maxage=60");
    return res.status(200).send(template);
  }

  // Cached at the edge for 5 minutes, so edits in Sanity show up quickly
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=86400");
  return res.status(200).send(injectMeta(template, buildPostHead(post)));
}
