/**
 * Build-time meta tag injector.
 *
 * Reads dist/index.html and writes a copy at dist/blog/<slug>/index.html
 * for every Sanity blog post, replacing the head's title/description/OG
 * tags with post-specific values.
 *
 * Why this exists: react-helmet-async writes tags client-side, which
 * crawlers (Facebook, LinkedIn, WhatsApp) don't execute. Pre-injecting
 * the tags into static HTML solves share previews without needing a
 * headless browser (which Vercel can't run).
 */

import { createClient } from "@sanity/client";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.riskman.in";

// Local-dev convenience: load .env if it exists and vars aren't already set
// (Vercel populates process.env directly, so this is a no-op there).
const envFile = path.join(ROOT, ".env");
if (fsSync.existsSync(envFile)) {
  const raw = fsSync.readFileSync(envFile, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const [, key, valueRaw] = m;
    if (process.env[key]) continue;
    const value = valueRaw.replace(/^["']|["']$/g, "");
    process.env[key] = value;
  }
}

const requiredEnv = ["VITE_SANITY_PROJECT_ID", "VITE_SANITY_DATA_SET"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(
      `[generate-meta] Missing required env var: ${key}. Skipping prerender.`
    );
    process.exit(0); // exit clean so build still succeeds
  }
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATA_SET,
  apiVersion: process.env.VITE_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
  token: process.env.VITE_SANITY_API_TOKEN || undefined,
});

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  title,
  seoTitle,
  metaDescription,
  shortDescription,
  tldr,
  "mainImage": mainImage.asset->url,
  canonicalUrl,
  publishedDate,
  lastUpdated,
  _createdAt,
  _updatedAt,
  primaryKeyword,
  secondaryKeywords,
  tags,
  author->{ name }
}`;

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const trimTo = (str, n) => {
  if (!str) return "";
  const s = String(str).replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
};

function buildHead(post) {
  const url = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const title = trimTo(post.seoTitle || post.title, 70);
  const fullTitle = `${title} | RiskMan Consulting`;
  const description = trimTo(
    post.metaDescription ||
      post.shortDescription ||
      post.tldr ||
      `Read the latest insights from RiskMan Consulting: ${post.title}`,
    170
  );
  const image = post.mainImage || `${SITE_URL}/rm.png`;
  const published = post.publishedDate || post._createdAt;
  const modified = post.lastUpdated || post._updatedAt || published;
  const keywords = [
    post.primaryKeyword,
    ...(Array.isArray(post.secondaryKeywords) ? post.secondaryKeywords : []),
    ...(Array.isArray(post.tags) ? post.tags : []),
  ]
    .filter(Boolean)
    .join(", ");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    datePublished: published || undefined,
    dateModified: modified || undefined,
    author: {
      "@type": "Person",
      name: post.author?.name || "Riskman",
    },
    publisher: {
      "@type": "Organization",
      name: "Riskman Consulting",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/rm.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: keywords || undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return `
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    ${keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : ""}
    <link rel="canonical" href="${escapeHtml(url)}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="RiskMan Consulting" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(image)}" />
    <meta property="og:image:alt" content="${escapeHtml(title)}" />
    ${published ? `<meta property="article:published_time" content="${escapeHtml(published)}" />` : ""}
    ${modified ? `<meta property="article:modified_time" content="${escapeHtml(modified)}" />` : ""}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />

    <script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  `.trim();
}

/**
 * Replace the contents of <head> between the existing meta block and the
 * closing </head> tag. We strip the generic site-wide SEO/OG tags and
 * insert post-specific ones, keeping <meta charset>, viewport, favicons,
 * and the Vite-injected asset links (CSS/JS).
 *
 * Strategy: drop everything from the first SEO-ish tag up to (but not
 * including) the first <script type="module"> or <link rel="stylesheet">
 * (which Vite injects for the bundle). Then inject the per-post head.
 */
function injectMeta(template, postHead) {
  let html = template;

  // Remove existing per-page SEO tags (we'll replace them).
  const tagsToStrip = [
    /<title>[\s\S]*?<\/title>/i,
    /<meta\s+name="description"[^>]*>/gi,
    /<meta\s+name="keywords"[^>]*>/gi,
    /<link\s+rel="canonical"[^>]*>/gi,
    /<meta\s+property="og:[^"]*"[^>]*>/gi,
    /<meta\s+name="twitter:[^"]*"[^>]*>/gi,
    /<meta\s+property="article:[^"]*"[^>]*>/gi,
    /<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/gi,
  ];
  for (const re of tagsToStrip) html = html.replace(re, "");

  // Insert the per-post head right before </head>.
  return html.replace(/<\/head>/i, `${postHead}\n  </head>`);
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  let template;
  try {
    template = await fs.readFile(indexPath, "utf8");
  } catch {
    console.error(
      `[generate-meta] dist/index.html not found. Did vite build run?`
    );
    process.exit(1);
  }

  let posts;
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (e) {
    console.error(`[generate-meta] Sanity fetch failed: ${e.message}`);
    process.exit(0); // build still succeeds with site-wide fallback meta
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    console.warn(`[generate-meta] No posts found. Nothing to prerender.`);
    return;
  }

  let written = 0;
  for (const post of posts) {
    if (!post?.slug) continue;
    const outDir = path.join(DIST, "blog", post.slug);
    const outFile = path.join(outDir, "index.html");
    const html = injectMeta(template, buildHead(post));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, html, "utf8");
    written++;
  }

  console.log(
    `[generate-meta] Wrote ${written} per-post HTML file${written === 1 ? "" : "s"} into dist/blog/`
  );
}

main().catch((e) => {
  console.error(`[generate-meta] Fatal: ${e.stack || e.message}`);
  // Don't fail the deploy; site still works with the index.html fallback.
  process.exit(0);
});
