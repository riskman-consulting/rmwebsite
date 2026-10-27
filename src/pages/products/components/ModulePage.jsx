import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PRODUCTS, getModule } from "../productsData";
import { moduleSeo } from "../productsSeo";
import { useModuleVideoStore } from "../../../store/moduleVideo";
import ModuleHero from "./ModuleHero";
import ModuleChallenges from "./ModuleChallenges";
import ModuleCapabilities from "./ModuleCapabilities";
import ModuleScreens from "./ModuleScreens";
import ModuleVideos from "./ModuleVideos";
import ModuleLifecycle from "./ModuleLifecycle";
import ModuleFlow from "./ModuleFlow";
import ModuleOutputs from "./ModuleOutputs";
import ModuleRoles from "./ModuleRoles";
import ModuleFaqs from "./ModuleFaqs";
import ModuleCta from "./ModuleCta";
import RelatedModules from "./RelatedModules";

const product = PRODUCTS[0];

/**
 * Jump links in the hero, in the order the sections appear. The screens link
 * only appears for modules that carry screens. Videos get no link: when a
 * module has them they open the page, above these links.
 */
const buildSections = (mod) => [
  { id: "why", label: "The challenge" },
  { id: "capabilities", label: "Capabilities" },
  ...(mod.screens?.length ? [{ id: "screens", label: "Screens" }] : []),
  { id: "how-it-works", label: "How it works" },
  { id: "outputs", label: "Outputs" },
  { id: "who", label: "Roles" },
  { id: "faqs", label: "FAQs" },
];

/**
 * Shared shell for every RiskMan GRC module page. Each module's route file is a
 * thin wrapper passing its slug, so the pages stay in step and a content
 * change only has to happen in `productsData.js`.
 */
const ModulePage = ({ slug }) => {
  const mod = getModule(product.slug, slug);
  const videos = useModuleVideoStore((state) => state.videosByModule[slug]);
  const fetchModuleVideos = useModuleVideoStore((state) => state.fetchModuleVideos);

  // Videos come from Sanity and are optional — until they load, or if the
  // module has none, the page renders without the section.
  useEffect(() => {
    if (mod) fetchModuleVideos(slug);
  }, [mod, slug, fetchModuleVideos]);

  if (!mod) return null;

  const hasVideos = videos?.length > 0;

  // Same tags generate-meta bakes into this route's static HTML
  const seo = moduleSeo(product, mod);

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        {/* JSON-LD is baked into the static HTML by generate-meta; adding
            it here too would give crawlers every schema twice. */}
      </Helmet>

      {/* A module with Sanity videos opens on them — the video is the hero */}
      {hasVideos && <ModuleVideos product={product} mod={mod} videos={videos} />}
      <ModuleHero
        product={product}
        mod={mod}
        sections={buildSections(mod)}
        belowVideoHero={hasVideos}
      />
      <ModuleChallenges mod={mod} />
      <ModuleCapabilities mod={mod} />
      {mod.screens?.length > 0 && <ModuleScreens mod={mod} />}
      {/* A module with a detailed `flow` shows it in place of the short step list */}
      {mod.flow?.length ? <ModuleFlow mod={mod} /> : <ModuleLifecycle mod={mod} />}
      <ModuleOutputs mod={mod} />
      <ModuleRoles mod={mod} />
      <ModuleFaqs mod={mod} />
      <ModuleCta mod={mod} />
      <RelatedModules product={product} currentSlug={mod.slug} />
    </div>
  );
};

export default ModulePage;
