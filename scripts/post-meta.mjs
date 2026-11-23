/**
 * Share-preview (SEO / Open Graph / Twitter) tags for blog posts, used by:
 *  - scripts/generate-meta.mjs — bakes them into dist/blog/<slug>/index.html at build time;
 *  - api/blog.js — builds them on request for posts published after the last deploy.
 *
 * Social crawlers (LinkedIn, Facebook, WhatsApp, X) don't run JavaScript, so
 * these tags must be in the HTML the server sends, not added by React.
 * Pure functions only: no file system, no network.
 */

export const SITE_URL = "https://www.riskman.in";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/rm.png`;
// Real pixel size of public/rm.png — declared so crawlers size the card correctly.
export const DEFAULT_OG_IMAGE_WIDTH = 1500;
export const DEFAULT_OG_IMAGE_HEIGHT = 400;

// Scheduled posts (publishedDate in the future) are left out until they go live
export const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && (!defined(publishedDate) || dateTime(publishedDate) <= dateTime(now()))]{
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

/** Same fields as POSTS_QUERY, for one post by slug (published only). */
export const POST_BY_SLUG_QUERY = POSTS_QUERY.replace(
  "defined(slug.current) &&",
  "slug.current == $slug &&"
).replace("]{", "][0]{");

/* ------------------------------------------------------------------ *
 * HTML head builders
 * ------------------------------------------------------------------ */
export const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const trimTo = (str, n) => {
  if (!str) return "";
  const s = String(str).replace(/\s+/g, " ").trim();
  if (s.length <= n) return s;
  const cut = s.slice(0, n - 1);
  const space = cut.lastIndexOf(" ");
  return `${(space > n * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:.\-–—]+$/, "")}…`;
};

/**
 * Resolves the OG image and its real pixel size.
 *
 * LinkedIn lays the preview card out from the declared og:image:width/height
 * before the file finishes downloading, so those numbers must match the actual
 * image or the card renders blank/cropped. Sanity assets are re-cropped to the
 * 1.91:1 ratio LinkedIn and X render as a large card; the fallback logo is
 * declared at its true size.
 */
export function resolveOgImage(image) {
  // Callers pass DEFAULT_OG_IMAGE explicitly as often as they omit it.
  if (!image || image === DEFAULT_OG_IMAGE) {
    return {
      url: DEFAULT_OG_IMAGE,
      width: DEFAULT_OG_IMAGE_WIDTH,
      height: DEFAULT_OG_IMAGE_HEIGHT,
      type: "image/png",
    };
  }

  if (/cdn\.sanity\.io/.test(image)) {
    const sep = image.includes("?") ? "&" : "?";
    // fm=jpg, not auto=format — LinkedIn's crawler does not reliably read WebP.
    return {
      url: `${image}${sep}w=1200&h=630&fit=crop&fm=jpg&q=80`,
      width: 1200,
      height: 630,
      type: "image/jpeg",
    };
  }

  // Unknown host — advertise the URL without lying about its dimensions.
  return { url: image, width: null, height: null, type: null };
}

export function buildBaseHead({ title, description, canonical, image, ogType = "website" }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeCanon = escapeHtml(canonical);
  const img = resolveOgImage(image);
  const safeImage = escapeHtml(img.url);

  return `
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDesc}" />
    <link rel="canonical" href="${safeCanon}" />

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="RiskMan Consulting" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:url" content="${safeCanon}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:image" content="${safeImage}" />
    <meta property="og:image:secure_url" content="${safeImage}" />
    ${img.width ? `<meta property="og:image:width" content="${img.width}" />` : ""}
    ${img.height ? `<meta property="og:image:height" content="${img.height}" />` : ""}
    ${img.type ? `<meta property="og:image:type" content="${img.type}" />` : ""}
    <meta property="og:image:alt" content="${safeTitle}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${safeImage}" />
  `.trim();
}

export function buildPostHead(post) {
  const url = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const title = trimTo(post.seoTitle || post.title, 60);
  const fullTitle = title.length <= 38 ? `${title} | RiskMan Consulting` : title;
  const description = trimTo(
    post.metaDescription ||
      post.shortDescription ||
      post.tldr ||
      `Read the latest insights from RiskMan Consulting: ${post.title}`,
    160
  );
  const image = post.mainImage || DEFAULT_OG_IMAGE;
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
    author: { "@type": "Person", name: post.author?.name || "Riskman" },
    publisher: {
      "@type": "Organization",
      name: "Riskman Consulting",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/rm.png` },
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
    ${buildBaseHead({ title: fullTitle, description, canonical: url, image, ogType: "article" })}
    ${keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : ""}
    ${published ? `<meta property="article:published_time" content="${escapeHtml(published)}" />` : ""}
    ${modified ? `<meta property="article:modified_time" content="${escapeHtml(modified)}" />` : ""}
    <script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  `.trim();
}


/* ------------------------------------------------------------------ *
 * Per-page HTML rewriter — strips generic SEO/OG/JSON-LD tags from
 * the template <head> and injects the per-route ones, plus the page
 * body when one was rendered.
 * ------------------------------------------------------------------ */
export function injectMeta(template, headHtml, bodyHtml = null) {
  let html = template;
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
  html = html.replace(/<\/head>/i, `${headHtml}\n  </head>`);
  // A function replacement, so "$&" or "$1" in page text is not read as a pattern
  if (bodyHtml) html = html.replace('<div id="root"></div>', () => `<div id="root">${bodyHtml}</div>`);
  return html;
}
