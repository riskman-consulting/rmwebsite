/**
 * Build-time meta tag injector — covers EVERY route.
 *
 * - Static routes (Home, About, Services, ISO, SOC, ESG, etc.): regex-extracts
 *   the <Helmet><title>/<meta description>/<link canonical> from each page's
 *   source file and bakes it into a per-route dist/<route>/index.html.
 *
 * - Dynamic routes (blog posts, industries): fetched from Sanity at build time.
 *
 * Why: react-helmet-async writes tags client-side. Social crawlers (FB,
 * LinkedIn, WhatsApp) don't run JS, so they only see whatever's in the
 * static HTML they fetch. This pre-bakes per-route HTML so every shared
 * URL shows the right preview.
 *
 * No browser, no Puppeteer — pure Node + Sanity API + filesystem. Works
 * on Vercel without any system libs.
 */

import { createClient } from "@sanity/client";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.riskman.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/rm.png`;

/* ------------------------------------------------------------------ *
 * Load .env for local dev (Vercel injects process.env directly)
 * ------------------------------------------------------------------ */
const envFile = path.join(ROOT, ".env");
if (fsSync.existsSync(envFile)) {
  const raw = fsSync.readFileSync(envFile, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const [, key, valueRaw] = m;
    if (process.env[key]) continue;
    process.env[key] = valueRaw.replace(/^["']|["']$/g, "");
  }
}

/* ------------------------------------------------------------------ *
 * Static route manifest. Each entry maps a route to its source file
 * — the script regex-extracts <Helmet> meta from that file.
 * ------------------------------------------------------------------ */
const STATIC_ROUTES = [
  { route: "/", file: "pages/home/Home.jsx" },
  { route: "/about", file: "pages/about/About.jsx" },
  { route: "/services", file: "pages/services/Services.jsx" },
  { route: "/contact", file: "pages/contact/Contact.jsx" },
  { route: "/careers", file: "pages/careers/index.jsx" },
  { route: "/industries", file: "pages/industries/IndustriesList.jsx" },
  { route: "/blogs", file: "pages/blogs/BlogList.jsx" },
  { route: "/insights", file: "pages/blogs/BlogList.jsx" },
  { route: "/newsletter", file: "pages/newsletter/NewsletterList.jsx" },
  { route: "/privacy-policy", file: "pages/resources/Privacy.jsx" },
  { route: "/terms", file: "pages/resources/Terms.jsx" },
  { route: "/governance", file: "pages/governance/Governance.jsx" },
  { route: "/solutions", file: "pages/tech-solutions/TechSolutions.jsx" },

  // Events
  { route: "/events", file: "pages/events/Events.jsx" },
  { route: "/events/upcoming-events", file: "pages/events/upcoming-events/index.jsx" },
  { route: "/events/past-events", file: "pages/events/past-events/index.jsx" },
  { route: "/events/accomplishments", file: "pages/events/accomplishment/index.jsx" },
  { route: "/events/company-journey", file: "pages/events/CompanyTimelineSection.jsx" },
  { route: "/events/media-coverage", file: "pages/events/media-coverage/index.jsx" },

  // Services — Risk Advisory
  { route: "/services/risk-advisory", file: "pages/risk-advisory/RiskAdvisoryPage.jsx" },
  { route: "/services/risk-advisory/csa", file: "pages/csa/CSAPage.jsx" },
  { route: "/services/risk-advisory/erm", file: "pages/erm/ERMPage.jsx" },
  { route: "/services/risk-advisory/rbia", file: "pages/rbia/RBIAPage.jsx" },
  { route: "/services/risk-advisory/tprm", file: "pages/tprm/TPRMPage.jsx" },
  { route: "/services/risk-advisory/sox-icofr-ifc", file: "pages/sox-itcofr/index.jsx" },
  { route: "/services/risk-advisory/concurrent-audits", file: "pages/concurrent-audit/index.jsx" },
  { route: "/services/risk-advisory/formulation-of-policies-and-sops", file: "pages/policies/index.jsx" },

  // Services — SOC
  { route: "/services/soc-services", file: "pages/soc/soc/SocPage.jsx" },
  { route: "/services/soc-services/soc-1", file: "pages/soc/soc1/Soc1Page.jsx" },
  { route: "/services/soc-services/soc-2", file: "pages/soc/soc2/Soc2Page.jsx" },
  { route: "/services/soc-services/soc-3", file: "pages/soc/soc3/Soc3Page.jsx" },

  // Services — ISO
  { route: "/services/iso-certifications", file: "pages/iso/iso/index.jsx" },
  { route: "/services/iso-certifications/iso-27001", file: "pages/iso/iso-27001/index.jsx" },
  { route: "/services/iso-certifications/iso-27701", file: "pages/iso/iso-27701/index.jsx" },
  { route: "/services/iso-certifications/iso-22301", file: "pages/iso/iso-22301/index.jsx" },
  { route: "/services/iso-certifications/iso-31000", file: "pages/iso/iso-31000/index.jsx" },
  { route: "/services/iso-certifications/iso-42001", file: "pages/iso/iso-42001/index.jsx" },
  { route: "/services/iso-certifications/tisax", file: "pages/iso/tisax/index.jsx" },

  // Services — ESG
  { route: "/services/esg", file: "pages/esg/ESGPage.jsx" },
  { route: "/services/esg/strategy-roadmap", file: "pages/esg/strategy-roadmap/index.jsx" },
  { route: "/services/esg/reporting-disclosure", file: "pages/esg/reporting-disclosure/index.jsx" },
  { route: "/services/esg/carbon-footprint", file: "pages/esg/carbon-footprint/index.jsx" },
  { route: "/services/esg/sustainability-assurance", file: "pages/esg/sustainability-assurance/index.jsx" },

  // Services — Digital Transformation
  { route: "/services/digital-transformation", file: "pages/digital/DigitalTransformationPage.jsx" },
  { route: "/services/digital-transformation/strategic-pmo", file: "pages/digital/StrategicPMO.jsx" },
  { route: "/services/digital-transformation/implementation", file: "pages/digital/implementation-excellence/index.jsx" },
  { route: "/services/digital-transformation/support-services", file: "pages/digital/support-services/index.jsx" },

  // Services — Financial Advisory
  { route: "/services/financial-advisory", file: "pages/financial-advisory/temp/FinancialAdvisoryPage.jsx" },
  { route: "/services/financial-advisory/credit-risk-assessment", file: "pages/financial-advisory/credit-risk-assessment/CreditRiskAssessmentPage.jsx" },
  { route: "/services/financial-advisory/credit-portfolio-management", file: "pages/financial-advisory/credit-portfolio-management/index.jsx" },
  { route: "/services/financial-advisory/loan-review-monitoring", file: "pages/financial-advisory/loan-review-monitoring/index.jsx" },
  { route: "/services/financial-advisory/credit-policy-framework", file: "pages/financial-advisory/credit-policy-framework/CreditPolicyFrameworkPage.jsx" },

  // Services — Data Privacy
  { route: "/services/data-privacy", file: "pages/data-privacy/data-privacy/index.jsx" },
  { route: "/services/data-privacy/dpdp", file: "pages/data-privacy/dpdp/index.jsx" },
  { route: "/services/data-privacy/gdpr", file: "pages/data-privacy/gdpr/index.jsx" },
  { route: "/services/data-privacy/other", file: "pages/data-privacy/others/index.jsx" },

  // Services — CPA US Assurance
  { route: "/services/cpa-us-assurance", file: "pages/cpa/cpa/index.jsx" },
  { route: "/services/cpa-us-assurance/financial-statement-audits", file: "pages/cpa/financial-audits/index.jsx" },
  { route: "/services/cpa-us-assurance/internal-control-reviews", file: "pages/cpa/internal-control/index.jsx" },
  { route: "/services/cpa-us-assurance/compliance-audits", file: "pages/cpa/compliance-audits/index.jsx" },
  { route: "/services/cpa-us-assurance/quality-assurance", file: "pages/cpa/quality-assurance/index.jsx" },

  // Services — Standalone
  { route: "/services/bcp-dr", file: "pages/bcp-dr/BCPPage.jsx" },
  { route: "/services/cybersecurity", file: "pages/cybersecurity/CybersecurityPage.jsx" },
  { route: "/services/forensics-investigation", file: "pages/forensics-investigation/index.jsx" },
  { route: "/services/ai-technology", file: "pages/AITechnology/AiTechnology.jsx" },
  { route: "/services/itgc-itac", file: "pages/itgc-itac/ITGCITACPage.jsx" },
  { route: "/services/pci-dss-compliance", file: "pages/pci-dss/index.jsx" },
];

/* ------------------------------------------------------------------ *
 * Helmet extraction (regex — fast, no AST parser needed)
 * ------------------------------------------------------------------ */
function stripComments(src) {
  // Drop JSX comments  {/* ... */}  and /* ... */ block comments
  return src
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "");
}

function decodeHtmlEntities(str = "") {
  return String(str)
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function readHelmetMeta(sourceAbsPath) {
  if (!fsSync.existsSync(sourceAbsPath)) return null;
  const src = stripComments(fsSync.readFileSync(sourceAbsPath, "utf8"));
  const helmetMatch = src.match(/<Helmet[^>]*>([\s\S]*?)<\/Helmet>/);
  if (!helmetMatch) return null;
  const block = helmetMatch[1];

  const titleMatch = block.match(/<title>([\s\S]*?)<\/title>/);
  const descMatch = block.match(
    /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/
  );
  const canonMatch = block.match(
    /<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/
  );

  return {
    title: titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : null,
    description: descMatch
      ? decodeHtmlEntities(descMatch[1].trim())
      : null,
    canonical: canonMatch ? canonMatch[1].trim() : null,
  };
}

/* ------------------------------------------------------------------ *
 * Fallback meta for routes that don't (yet) have a <Helmet> block
 * ------------------------------------------------------------------ */
const FALLBACK_META = {
  "/solutions":
    {
      title: "Technology Solutions | RiskMan Consulting",
      description:
        "Explore RiskMan's portfolio of technology-led GRC, audit, and compliance solutions designed for modern enterprises.",
    },
  "/services/iso-certifications/iso-27701":
    {
      title: "ISO 27701 Privacy Information Management | RiskMan Consulting",
      description:
        "ISO 27701 certification advisory for privacy information management — establish accountable, auditable data privacy practices aligned with GDPR and DPDP.",
    },
};

/* ------------------------------------------------------------------ *
 * Sanity client + queries
 * ------------------------------------------------------------------ */
const requiredEnv = ["VITE_SANITY_PROJECT_ID", "VITE_SANITY_DATA_SET"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(
      `[generate-meta] Missing required env var: ${key}. Skipping dynamic-route prerender (static routes still generated).`
    );
  }
}

const client =
  process.env.VITE_SANITY_PROJECT_ID && process.env.VITE_SANITY_DATA_SET
    ? createClient({
        projectId: process.env.VITE_SANITY_PROJECT_ID,
        dataset: process.env.VITE_SANITY_DATA_SET,
        apiVersion: process.env.VITE_SANITY_API_VERSION || "2024-01-01",
        useCdn: true,
        token: process.env.VITE_SANITY_API_TOKEN || undefined,
      })
    : null;

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

const INDUSTRIES_QUERY = `*[_type == "industry" && defined(slug.current)]{
  "slug": slug.current,
  title,
  subtitle,
  description,
  "headerImage": headerImage.asset->url
}`;

/* ------------------------------------------------------------------ *
 * HTML head builders
 * ------------------------------------------------------------------ */
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

function buildBaseHead({ title, description, canonical, image, ogType = "website" }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeCanon = escapeHtml(canonical);
  const safeImage = escapeHtml(image || DEFAULT_OG_IMAGE);

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
    <meta property="og:image:alt" content="${safeTitle}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${safeImage}" />
  `.trim();
}

function buildPostHead(post) {
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

function flattenPortableText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((block) => {
        if (typeof block === "string") return block;
        if (block?._type === "block" && Array.isArray(block.children)) {
          return block.children.map((c) => c?.text || "").join(" ");
        }
        return "";
      })
      .filter(Boolean)
      .join(" ");
  }
  return "";
}

function buildIndustryHead(industry) {
  const url = `${SITE_URL}/industries/${industry.slug}`;
  const title = `${industry.title} Industry Solutions | RiskMan Consulting`;
  const descRaw =
    flattenPortableText(industry.description) ||
    flattenPortableText(industry.subtitle) ||
    `Specialised risk advisory and compliance services for the ${industry.title} sector.`;
  const description = trimTo(descRaw, 170);
  const image = industry.headerImage || DEFAULT_OG_IMAGE;
  return buildBaseHead({ title, description, canonical: url, image, ogType: "website" });
}

/* ------------------------------------------------------------------ *
 * Per-page HTML rewriter — strips generic SEO/OG/JSON-LD tags from
 * the template <head> and injects the per-route ones.
 * ------------------------------------------------------------------ */
function injectMeta(template, headHtml) {
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
  return html.replace(/<\/head>/i, `${headHtml}\n  </head>`);
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */
async function main() {
  const indexPath = path.join(DIST, "index.html");
  let template;
  try {
    template = await fs.readFile(indexPath, "utf8");
  } catch {
    console.error(`[generate-meta] dist/index.html not found. Did vite build run?`);
    process.exit(1);
  }

  let written = 0;
  let skipped = 0;

  // 1) Static routes — extract from page source files
  for (const { route, file } of STATIC_ROUTES) {
    const sourcePath = path.join(SRC, file);
    let meta = readHelmetMeta(sourcePath);

    if (!meta || !meta.title) {
      const fb = FALLBACK_META[route];
      if (fb) {
        meta = { title: fb.title, description: fb.description, canonical: null };
        console.log(
          `[generate-meta] Using fallback meta for ${route} (no Helmet in ${file})`
        );
      } else {
        console.warn(
          `[generate-meta] Skipping ${route} — no <Helmet><title> found in ${file}`
        );
        skipped++;
        continue;
      }
    }

    const canonical =
      meta.canonical || `${SITE_URL}${route === "/" ? "/" : route}`;
    const description =
      meta.description ||
      "Risk advisory, regulatory compliance, cybersecurity and digital transformation expertise for resilient, future-ready organisations.";

    const head = buildBaseHead({
      title: meta.title,
      description,
      canonical,
      image: DEFAULT_OG_IMAGE,
      ogType: "website",
    });

    const outFile =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.replace(/^\//, ""), "index.html");

    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, injectMeta(template, head), "utf8");
    written++;
  }

  // 2) Dynamic routes — blog posts
  if (client) {
    try {
      const posts = await client.fetch(POSTS_QUERY);
      for (const post of posts || []) {
        if (!post?.slug) continue;
        const head = buildPostHead(post);
        // /blog/<slug>
        const outFileBlog = path.join(DIST, "blog", post.slug, "index.html");
        await fs.mkdir(path.dirname(outFileBlog), { recursive: true });
        await fs.writeFile(outFileBlog, injectMeta(template, head), "utf8");
        // /insights/<slug> — same content, alternate URL
        const outFileInsights = path.join(DIST, "insights", post.slug, "index.html");
        await fs.mkdir(path.dirname(outFileInsights), { recursive: true });
        await fs.writeFile(outFileInsights, injectMeta(template, head), "utf8");
        written += 2;
      }
      console.log(`[generate-meta] Prerendered ${posts?.length || 0} blog posts`);
    } catch (e) {
      console.error(`[generate-meta] Blog fetch failed: ${e.message}`);
    }

    // 3) Dynamic routes — industries
    try {
      const industries = await client.fetch(INDUSTRIES_QUERY);
      for (const industry of industries || []) {
        if (!industry?.slug) continue;
        const head = buildIndustryHead(industry);
        const outFile = path.join(DIST, "industries", industry.slug, "index.html");
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await fs.writeFile(outFile, injectMeta(template, head), "utf8");
        written++;
      }
      console.log(
        `[generate-meta] Prerendered ${industries?.length || 0} industry pages`
      );
    } catch (e) {
      console.error(`[generate-meta] Industries fetch failed: ${e.message}`);
    }
  }

  // 4) 404 page — Vercel serves dist/404.html when no other route matches.
  //    Without it a stray URL renders Vercel's raw NOT_FOUND screen instead
  //    of the app's own Not Found route.
  const notFoundHead = `${buildBaseHead({
    title: "Page Not Found | RiskMan Consulting",
    description:
      "The page you are looking for does not exist or has been moved. Explore RiskMan Consulting's risk advisory, compliance and cybersecurity services.",
    canonical: `${SITE_URL}/404`,
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
  })}
    <meta name="robots" content="noindex, follow" />`;
  await fs.writeFile(
    path.join(DIST, "404.html"),
    injectMeta(template, notFoundHead),
    "utf8"
  );
  written++;

  console.log(
    `[generate-meta] Done. Wrote ${written} HTML files${
      skipped > 0 ? `, skipped ${skipped} routes (no Helmet meta)` : ""
    }.`
  );
}

main().catch((e) => {
  console.error(`[generate-meta] Fatal: ${e.stack || e.message}`);
  // Don't fail the deploy; site still works with the index.html fallback.
  process.exit(0);
});
