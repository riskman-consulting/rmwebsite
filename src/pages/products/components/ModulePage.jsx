import React from "react";
import { Helmet } from "react-helmet-async";
import { PRODUCTS, getModule } from "../productsData";
import ModuleHero from "./ModuleHero";
import ModuleChallenges from "./ModuleChallenges";
import ModuleCapabilities from "./ModuleCapabilities";
import ModuleScreens from "./ModuleScreens";
import ModuleLifecycle from "./ModuleLifecycle";
import ModuleOutputs from "./ModuleOutputs";
import ModuleRoles from "./ModuleRoles";
import ModuleFaqs from "./ModuleFaqs";
import ModuleCta from "./ModuleCta";
import RelatedModules from "./RelatedModules";

const product = PRODUCTS[0];

/**
 * Jump links in the hero, in the order the sections appear. The screens link
 * only appears for modules that actually carry screenshots.
 */
const buildSections = (mod) => [
  { id: "why", label: "Why it exists" },
  { id: "capabilities", label: "Capabilities" },
  ...(mod.screens?.length ? [{ id: "screens", label: "Screens" }] : []),
  { id: "how-it-works", label: "How it works" },
  { id: "outputs", label: "Outputs" },
  { id: "who", label: "Who uses it" },
  { id: "faqs", label: "FAQs" },
];

/**
 * Shared shell for every RiskMan GRC module page. Each module's route file is a
 * thin wrapper passing its slug, so the five pages stay in step and a content
 * change only has to happen in `productsData.js`.
 */
const ModulePage = ({ slug }) => {
  const mod = getModule(product.slug, slug);
  if (!mod) return null;

  const canonical = `https://www.riskman.in${product.path}/${mod.slug}`;

  // FAQ rich result — the questions are already on the page, so marking them
  // up costs nothing and keeps the module eligible for the FAQ treatment.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mod.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{`${mod.name} | ${product.name} | RiskMan Consulting`}</title>
        <meta name="description" content={`${mod.tagline}. ${mod.summary}`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${mod.name} | ${product.name}`} />
        <meta property="og:description" content={mod.tagline} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <ModuleHero product={product} mod={mod} sections={buildSections(mod)} />
      <ModuleChallenges mod={mod} />
      <ModuleCapabilities mod={mod} />
      {mod.screens?.length > 0 && <ModuleScreens mod={mod} />}
      <ModuleLifecycle mod={mod} />
      <ModuleOutputs mod={mod} />
      <ModuleRoles mod={mod} />
      <ModuleFaqs mod={mod} />
      <ModuleCta mod={mod} />
      <RelatedModules product={product} currentSlug={mod.slug} />
    </div>
  );
};

export default ModulePage;
