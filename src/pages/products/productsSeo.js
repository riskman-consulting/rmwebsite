/**
 * Search metadata for the product pages.
 *
 * Shared by the pages' <Helmet> and by `scripts/generate-meta.mjs`, which
 * bakes the same tags into each route's static HTML at build time — so what a
 * crawler reads without JavaScript matches what the browser renders. Keep this
 * file free of asset and component imports: it is also bundled for Node.
 */

export const SITE_URL = "https://www.riskman.in";

const ORGANIZATION = {
  "@type": "Organization",
  name: "RiskMan Consulting",
  url: SITE_URL,
  logo: `${SITE_URL}/rm.png`,
};

/** Cuts at a word boundary so the snippet Google shows does not end mid-word. */
const trimTo = (text, max = 160) => {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

/** Google shows about 60 characters of a title: add the brand only if it fits. */
const withBrand = (title, brand) =>
  `${title} | ${brand}`.length <= 60 ? `${title} | ${brand}` : title;

const breadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const productSeo = (product) => {
  const canonical = `${SITE_URL}${product.path}`;
  const description = trimTo(product.summary);

  return {
    title: withBrand(product.seoTitle || product.name, "RiskMan Consulting"),
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        url: canonical,
        publisher: ORGANIZATION,
      },
      breadcrumb([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Products", url: `${SITE_URL}/products` },
        { name: product.name, url: canonical },
      ]),
    ],
  };
};

export const moduleSeo = (product, mod) => {
  const canonical = `${SITE_URL}${product.path}/${mod.slug}`;
  const description = trimTo(`${mod.summary} ${mod.description}`);

  return {
    title: withBrand(mod.seoTitle || mod.name, product.name),
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `${product.name} ${mod.name}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        url: canonical,
        isPartOf: { "@type": "SoftwareApplication", name: product.name, url: `${SITE_URL}${product.path}` },
        publisher: ORGANIZATION,
      },
      breadcrumb([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Products", url: `${SITE_URL}/products` },
        { name: product.name, url: `${SITE_URL}${product.path}` },
        { name: mod.name, url: canonical },
      ]),
      // The questions are already on the page, so marking them up costs
      // nothing and keeps the page eligible for the FAQ treatment.
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: mod.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
};
