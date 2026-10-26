/**
 * Build-time meta tag injector — covers EVERY route.
 *
 * - Static routes (Home, About, Services, ISO, SOC, ESG, etc.): regex-extracts
 *   the <Helmet><title>/<meta description>/<link canonical> from each page's
 *   source file and bakes it into a per-route dist/<route>/index.html.
 *
 * - Dynamic routes (blog posts, industries): fetched from Sanity at build time.
 *
 * - Data-driven routes (RiskMan GRC product and module pages, FAAS groups):
 *   their pages build the title from a data file, so the meta is built here
 *   from the same data, bundled with esbuild because the data files import
 *   images that Node cannot load.
 *
 * Also writes dist/sitemap.xml from every canonical URL it prerenders, so a
 * new page reaches the sitemap without a hand edit.
 *
 * Page body: where the server build exists (dist-ssr/entry-server.js, built by
 * `npm run build`), each route whose content lives in code also gets its
 * rendered markup inside <div id="root">, so crawlers that do not run
 * JavaScript read the page's text. The browser still renders the app fresh
 * (src/main.jsx), so what visitors see does not change.
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
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.riskman.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/rm.png`;
// Real pixel size of public/rm.png — declared so crawlers size the card correctly.
const DEFAULT_OG_IMAGE_WIDTH = 1500;
const DEFAULT_OG_IMAGE_HEIGHT = 400;

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

  // Services — FAAS (the group pages are data-driven, see loadPageData)
  { route: "/services/faas", file: "pages/faas/FAASPage.jsx" },

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
  // Drop JSX comments  {/* ... */},  /* ... */ block comments and whole-line
  // // comments (a commented-out old <Helmet> must not win over the live one).
  // Only whole lines: a trailing // would also match the one in "https://".
  return src
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
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
/**
 * Placeholder pages — the route exists but the page has no content yet
 * ("Carbon Footprint Page", or nothing at all) and no menu links to it. Kept
 * out of the sitemap and marked noindex so search engines do not judge the
 * site by an empty page. Remove a route from here once its page is written.
 */
const NOINDEX_ROUTES = new Set([
  "/services/esg/strategy-roadmap",
  "/services/esg/reporting-disclosure",
  "/services/esg/carbon-footprint",
  "/services/esg/sustainability-assurance",
  "/services/financial-advisory/credit-portfolio-management",
  "/services/financial-advisory/loan-review-monitoring",
]);

const NOINDEX_TAG = '<meta name="robots" content="noindex, follow" />';

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
        // No token: the dataset is public and only published content belongs on the site
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

const CAREER_JOBS_QUERY = `*[_type == "careerPage"][0].jobOpenings[]{
  _key,
  title,
  "slug": slug.current,
  description,
  location,
  employmentType,
  datePosted,
  lastDate
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
function resolveOgImage(image) {
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

function buildBaseHead({ title, description, canonical, image, ogType = "website" }) {
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

function buildPostHead(post) {
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
  const description = trimTo(descRaw, 160);
  const image = industry.headerImage || DEFAULT_OG_IMAGE;
  return buildBaseHead({ title, description, canonical: url, image, ogType: "website" });
}

const slugifyJobTitle = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const jobSlug = (job) => job?.slug || slugifyJobTitle(job?.title) || job?._key || "";

function buildJobHead(job) {
  const slug = jobSlug(job);
  const url = `${SITE_URL}/careers/${slug}`;
  const title = `${job.title} | Careers at RiskMan Consulting`;
  const description = trimTo(
    job.description ||
      `Apply for the ${job.title} role at RiskMan Consulting${
        job.location ? ` in ${job.location}` : ""
      }.`,
    160
  );

  const jobJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.title,
    datePosted: job.datePosted || undefined,
    validThrough: job.lastDate || undefined,
    employmentType: job.employmentType || undefined,
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "RiskMan Consulting",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/rm.png`,
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: job.location },
        }
      : undefined,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
      { "@type": "ListItem", position: 3, name: job.title, item: url },
    ],
  };

  return `
    ${buildBaseHead({
      title,
      description,
      canonical: url,
      image: DEFAULT_OG_IMAGE,
      ogType: "website",
    })}
    <script type="application/ld+json">${JSON.stringify(jobJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  `.trim();
}

/* ------------------------------------------------------------------ *
 * Data-driven pages — products, modules and FAAS groups
 * ------------------------------------------------------------------ */

/**
 * Bundles the page data files into one Node module. Images become empty
 * imports and packages stay external (resolved from node_modules), so the
 * result is plain data plus the product SEO helpers the pages themselves use.
 */
async function loadPageData() {
  const { build } = await import("esbuild");
  const outFile = path.join(ROOT, "node_modules", ".cache", "generate-meta", "page-data.mjs");
  await build({
    stdin: {
      contents: `
        export { PRODUCTS } from "./src/pages/products/productsData.js";
        export { productSeo, moduleSeo } from "./src/pages/products/productsSeo.js";
        export { FAAS_GROUPS } from "./src/pages/faas/faasData.js";
      `,
      resolveDir: ROOT,
      loader: "js",
    },
    bundle: true,
    format: "esm",
    platform: "node",
    packages: "external",
    loader: { ".png": "empty", ".jpg": "empty", ".jpeg": "empty", ".webp": "empty", ".svg": "empty" },
    outfile: outFile,
    logLevel: "silent",
  });
  return import(`${pathToFileURL(outFile).href}?t=${Date.now()}`);
}

const jsonLdScripts = (schemas = []) =>
  schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");

/** Route, meta and JSON-LD for every data-driven page. */
function buildDataRoutes({ PRODUCTS, productSeo, moduleSeo, FAAS_GROUPS }) {
  const routes = [];

  for (const product of PRODUCTS) {
    routes.push({ route: product.path, ...productSeo(product) });
    for (const mod of product.modules) {
      routes.push({ route: `${product.path}/${mod.slug}`, ...moduleSeo(product, mod) });
    }
  }
  // /products renders the first product's page and canonicalises to it
  routes.push({ route: "/products", ...productSeo(PRODUCTS[0]) });

  for (const group of FAAS_GROUPS) {
    routes.push({
      route: group.path,
      title: `${group.title} | FAAS | RiskMan Consulting`,
      description: trimTo(`${group.summary} ${group.intro}`, 160),
      canonical: `${SITE_URL}${group.path}`,
      jsonLd: [],
    });
  }

  return routes;
}

/* ------------------------------------------------------------------ *
 * Sitemap
 * ------------------------------------------------------------------ */

/** Only canonical URLs on this site, once each — duplicates and redirects stay out. */
function createSitemap() {
  const urls = new Map();
  return {
    add(loc, lastmod) {
      if (!loc || !loc.startsWith(SITE_URL)) return;
      const date = lastmod ? new Date(lastmod) : null;
      urls.set(loc, date && !Number.isNaN(date.valueOf()) ? date.toISOString().slice(0, 10) : null);
    },
    toXml() {
      const entries = [...urls.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([loc, lastmod]) =>
          `  <url>\n    <loc>${escapeHtml(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`
        )
        .join("\n");
      return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
    },
    has(loc) {
      return urls.has(loc);
    },
    get size() {
      return urls.size;
    },
  };
}

/* ------------------------------------------------------------------ *
 * SEO report — read by the Analytics tab in Sanity Studio
 * ------------------------------------------------------------------ */

const htmlFiles = (dir) => {
  const out = [];
  for (const entry of fsSync.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "assets" && entry.name !== "images") out.push(...htmlFiles(full));
    } else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
};

const decode = (str = "") =>
  str.replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/**
 * Checks every page this build wrote and saves dist/seo-report.json: one row
 * per page with what a search engine reads from it, and the issues found.
 * Severity: "error" breaks indexing or the result snippet, "warning" costs
 * ranking or clicks, "info" is worth knowing but often intended.
 */
async function writeSeoReport(sitemap) {
  const pages = [];
  for (const file of htmlFiles(DIST)) {
    const rel = path.relative(DIST, file).replace(/\\/g, "/");
    if (rel === "404.html") continue;
    const route = `/${rel.replace(/(^|\/)index\.html$/, "")}`.replace(/\/$/, "") || "/";
    const html = fsSync.readFileSync(file, "utf8");
    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
    const description = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
    const noindex = /<meta name="robots" content="noindex/.test(html);
    const body = html.includes('<div id="root"></div>') ? "" : html.split('<div id="root">')[1] || "";
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => {
        try {
          return JSON.parse(m[1])["@type"];
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    const words = body
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;

    pages.push({
      route,
      title,
      description,
      canonical,
      selfCanonical: canonical === `${SITE_URL}${route === "/" ? "/" : route}`,
      noindex,
      inSitemap: sitemap.has(canonical),
      prerendered: Boolean(body),
      h1: (body.match(/<h1[\s>]/g) || []).length,
      words: body ? words : null,
      schemas,
      ogImage: /property="og:image"/.test(html),
    });
  }

  // Duplicates only matter between pages that each claim to be the original
  const indexable = pages.filter((p) => p.selfCanonical && !p.noindex);
  const count = (key) =>
    indexable.reduce((acc, p) => acc.set(p[key], (acc.get(p[key]) || 0) + 1), new Map());
  const titleCount = count("title");
  const descCount = count("description");

  for (const page of pages) {
    const issues = [];
    const add = (severity, text) => issues.push({ severity, text });
    // A noindex page is not judged on anything else: search engines skip it
    if (page.noindex) {
      add("info", "Hidden from search (noindex) — placeholder page");
      page.issues = issues;
      continue;
    }
    if (!page.title) add("error", "No title");
    else if (page.title.length > 60) add("warning", `Title is ${page.title.length} characters; Google shows about 60`);
    else if (page.title.length < 25) add("warning", `Title is only ${page.title.length} characters`);
    if (!page.description) add("error", "No meta description");
    else if (page.description.length < 70) add("warning", `Description is only ${page.description.length} characters`);
    if (!page.canonical) add("error", "No canonical URL");
    if (!page.selfCanonical) add("info", `Duplicate of ${page.canonical.replace(SITE_URL, "")}`);
    else {
      if (!page.inSitemap) add("warning", "Not in the sitemap");
      if (titleCount.get(page.title) > 1) add("warning", "Same title as another page");
      if (descCount.get(page.description) > 1) add("warning", "Same description as another page");
      if (!page.prerendered) add("info", "Text loads in the browser (content comes from Sanity)");
      if (page.prerendered && page.h1 !== 1) add("warning", page.h1 ? `${page.h1} main headings (h1); use one` : "No main heading (h1)");
      if (page.prerendered && page.words < 300) add("warning", `Only ${page.words} words of text`);
      if (!page.schemas.length) add("info", "No structured data");
    }
    page.issues = issues;
  }

  const scored = pages.filter((p) => p.selfCanonical && !p.noindex);
  const clean = scored.filter((p) => !p.issues.some((i) => i.severity !== "info")).length;
  const report = {
    generatedAt: new Date().toISOString(),
    site: SITE_URL,
    score: scored.length ? Math.round((clean / scored.length) * 100) : 0,
    totals: {
      pages: pages.length,
      indexable: scored.length,
      inSitemap: sitemap.size,
      prerendered: pages.filter((p) => p.prerendered).length,
      withStructuredData: scored.filter((p) => p.schemas.length).length,
      errors: pages.reduce((n, p) => n + p.issues.filter((i) => i.severity === "error").length, 0),
      warnings: pages.reduce((n, p) => n + p.issues.filter((i) => i.severity === "warning").length, 0),
    },
    pages: pages.sort((a, b) => a.route.localeCompare(b.route)),
  };
  await fs.writeFile(path.join(DIST, "seo-report.json"), JSON.stringify(report), "utf8");
  console.log(
    `[generate-meta] Wrote seo-report.json: score ${report.score}, ${report.totals.errors} errors, ${report.totals.warnings} warnings`
  );
}

/* ------------------------------------------------------------------ *
 * Page body prerender
 * ------------------------------------------------------------------ */

/**
 * Routes whose content comes from Sanity. Rendered at build time they would
 * carry their empty state ("No insights found", "Article not found") into the
 * HTML, so they keep the empty root and render in the browser as before.
 * "/" must stay here: dist/index.html is also the fallback page that Vercel
 * serves for blog, industry and job URLs created after the build.
 */
const CLIENT_ONLY_ROUTES = [
  /^\/$/,
  /^\/about$/,
  /^\/services$/,
  /^\/blogs?(\/|$)/,
  /^\/insights(\/|$)/,
  /^\/newsletter$/,
  /^\/careers(\/|$)/,
  /^\/events(\/|$)/,
  /^\/industries\//,
];

const isClientOnly = (route) => CLIENT_ONLY_ROUTES.some((re) => re.test(route));

/** Loads the server build, or returns null so the script still writes meta. */
async function loadRenderer() {
  const entry = path.join(ROOT, "dist-ssr", "entry-server.js");
  if (!fsSync.existsSync(entry)) {
    console.warn("[generate-meta] dist-ssr/entry-server.js not found — page bodies not prerendered.");
    return null;
  }
  try {
    const { render } = await import(pathToFileURL(entry).href);
    return render;
  } catch (e) {
    console.error(`[generate-meta] Could not load the server build: ${e.message}`);
    return null;
  }
}

/**
 * Renders one route to markup. React's dev warnings (which the browser shows
 * too) are silenced so the build log stays readable; a route that throws is
 * reported and left with an empty root.
 */
function renderBody(render, route) {
  if (!render || isClientOnly(route)) return null;
  const { error, warn } = console;
  console.error = () => {};
  console.warn = () => {};
  try {
    return render(route);
  } catch (e) {
    error(`[generate-meta] Body render failed for ${route}: ${e.message}`);
    return null;
  } finally {
    console.error = error;
    console.warn = warn;
  }
}

/* ------------------------------------------------------------------ *
 * Per-page HTML rewriter — strips generic SEO/OG/JSON-LD tags from
 * the template <head> and injects the per-route ones, plus the page
 * body when one was rendered.
 * ------------------------------------------------------------------ */
function injectMeta(template, headHtml, bodyHtml = null) {
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
  let bodies = 0;
  const sitemap = createSitemap();
  const render = await loadRenderer();

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

    // A canonical written as a JSX expression is not a URL — use the route's own
    const canonical = meta.canonical?.startsWith(SITE_URL)
      ? meta.canonical
      : `${SITE_URL}${route === "/" ? "/" : route}`;
    const noindex = NOINDEX_ROUTES.has(route);
    if (!noindex) sitemap.add(canonical);
    // Search results show about 160 characters of the description
    const description = trimTo(
      meta.description ||
        "Risk advisory, regulatory compliance, cybersecurity and digital transformation expertise for resilient, future-ready organisations.",
      160
    );

    const head = `${buildBaseHead({
      title: meta.title,
      description,
      canonical,
      image: DEFAULT_OG_IMAGE,
      ogType: "website",
    })}${noindex ? `\n    ${NOINDEX_TAG}` : ""}`;

    const outFile =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.replace(/^\//, ""), "index.html");

    const body = renderBody(render, route);
    if (body) bodies++;

    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, injectMeta(template, head, body), "utf8");
    written++;
  }

  // 1b) Data-driven routes — products, modules, FAAS groups
  try {
    const data = await loadPageData();
    const routes = buildDataRoutes(data);
    for (const { route, title, description, canonical, jsonLd } of routes) {
      const head = `${buildBaseHead({ title, description, canonical, image: DEFAULT_OG_IMAGE })}
    ${jsonLdScripts(jsonLd)}`;
      const outFile = path.join(DIST, route.replace(/^\//, ""), "index.html");
      const body = renderBody(render, route);
      if (body) bodies++;
      await fs.mkdir(path.dirname(outFile), { recursive: true });
      await fs.writeFile(outFile, injectMeta(template, head, body), "utf8");
      sitemap.add(canonical);
      written++;
    }
    console.log(`[generate-meta] Prerendered ${routes.length} product and FAAS pages`);
  } catch (e) {
    console.error(`[generate-meta] Product / FAAS meta failed: ${e.message}`);
  }

  // 2) Dynamic routes — blog posts
  if (client) {
    try {
      const posts = await client.fetch(POSTS_QUERY);
      for (const post of posts || []) {
        if (!post?.slug) continue;
        const head = buildPostHead(post);
        sitemap.add(
          post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`,
          post.lastUpdated || post._updatedAt || post.publishedDate
        );
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
        sitemap.add(`${SITE_URL}/industries/${industry.slug}`);
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

    // 3b) Dynamic routes — job openings (/careers/<slug>). Expired roles are
    //     skipped: their page renders an "applications closed" state anyway.
    try {
      const jobs = await client.fetch(CAREER_JOBS_QUERY);
      const now = new Date();
      const openJobs = (jobs || []).filter(
        (job) => job?.title && (!job.lastDate || new Date(job.lastDate) >= now)
      );
      for (const job of openJobs) {
        const slug = jobSlug(job);
        if (!slug) continue;
        const outFile = path.join(DIST, "careers", slug, "index.html");
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await fs.writeFile(outFile, injectMeta(template, buildJobHead(job)), "utf8");
        sitemap.add(`${SITE_URL}/careers/${slug}`, job.datePosted);
        written++;
      }
      console.log(`[generate-meta] Prerendered ${openJobs.length} job pages`);
    } catch (e) {
      console.error(`[generate-meta] Career jobs fetch failed: ${e.message}`);
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
    ${NOINDEX_TAG}`;
  await fs.writeFile(
    path.join(DIST, "404.html"),
    // Any unmatched path renders the app's Not Found page
    injectMeta(template, notFoundHead, renderBody(render, "/404")),
    "utf8"
  );
  written++;

  // 5) Sitemap — replaces the copy Vite took from public/, which stays as the
  //    fallback if this script fails before reaching here.
  await fs.writeFile(path.join(DIST, "sitemap.xml"), sitemap.toXml(), "utf8");
  console.log(`[generate-meta] Wrote sitemap.xml with ${sitemap.size} URLs`);
  console.log(`[generate-meta] Prerendered the page body of ${bodies} routes`);

  // 6) SEO report — after every page is written
  try {
    await writeSeoReport(sitemap);
  } catch (e) {
    console.error(`[generate-meta] SEO report failed: ${e.message}`);
  }

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
