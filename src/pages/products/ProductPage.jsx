import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "./productsData";
import { productSeo } from "./productsSeo";
import DocSection from "./components/DocSection";
import ModuleCta from "./components/ModuleCta";

// Real product screens for the hero: a testing project behind, the action
// tracker in front
import heroBack from "../../assets/products/riskman-grc/control-testing/project-dashboard.png";
import heroFront from "../../assets/products/riskman-grc/atr/dashboard-01-analytics.png";

const product = PRODUCTS[0];
const seo = productSeo(product);
const moduleLink = (slug) => `${product.path}/${slug}`;

const FACTS = [
  { value: "6", label: "modules" },
  { value: "1", label: "platform for audit, risk and compliance" },
  { value: "0", label: "spreadsheets to reconcile" },
];

const REASONS = [
  {
    title: "A single source of record",
    text: "Plans, risks, controls and actions are held in one place, so every stakeholder works from the same version.",
  },
  {
    title: "A complete approval trail",
    text: "Every review and sign-off is recorded with the approver and the date, ready for examination by auditors and regulators.",
  },
  {
    title: "Evidence held with the work",
    text: "Documents are attached to the control or action they support, rather than circulated by email.",
  },
  {
    title: "Reporting from live data",
    text: "Dashboards and reports are generated from the underlying record, so reports and working files remain consistent.",
  },
];

const ROLES = [
  { role: "Chief Audit Executive and internal audit", text: "Plan audits on a risk basis, execute audits and testing, and report to the Audit Committee." },
  { role: "CFO, controllers and SOX / IFC teams", text: "Test internal financial controls across entities and complete the file within the reporting timetable." },
  { role: "Chief Risk Officer and risk owners", text: "Maintain a current risk register throughout the year, with named owners and mitigation plans." },
  { role: "Company Secretary and compliance", text: "Maintain board-approved policies with their versions, approvals and acknowledgements." },
  { role: "Process and control owners", text: "Respond to requests, upload evidence and close their actions from a single workspace." },
];

// The CTA reads `shortName` from a module; the product has one too
const ctaFor = { shortName: product.shortName };

const HeroImage = () => (
  <div className="relative">
    <div className="overflow-hidden border rounded-lg shadow-sm bg-surfaceLight border-borderLight dark:border-borderDark">
      <img
        src={heroBack}
        alt="RiskMan GRC control testing project showing controls in scope, testing progress, pass rate and open findings"
        width="1596"
        height="922"
        fetchpriority="high"
        className="block w-full h-auto"
      />
    </div>
    {/* Second screen overlaps the first from lg up; hidden on small screens */}
    <div className="absolute hidden w-[58%] overflow-hidden border rounded-lg shadow-lg lg:block -bottom-10 -left-8 bg-surfaceLight border-borderLight dark:border-borderDark">
      <img
        src={heroFront}
        alt="RiskMan GRC action tracker with total, open and overdue actions and the closure rate"
        width="1812"
        height="862"
        loading="lazy"
        className="block w-full h-auto"
      />
    </div>
  </div>
);

const ProductPage = () => {
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

      {/* Intro */}
      <section>
        <div className="container py-12 md:py-16 lg:pb-20">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-sm text-brandNavy/55 dark:text-white/45">Products</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-[32px] md:text-[38px] text-brandDark dark:text-white">
                {product.name}
              </h1>
              <p className="mt-3 text-base font-medium leading-snug sm:text-lg text-brandPrimary dark:text-brandGold [text-wrap:balance]">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed sm:text-base text-gray-800 dark:text-white/80">
                {product.summary}
              </p>

              <dl className="grid grid-cols-3 gap-4 mt-7 max-w-md">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="pl-3 border-l-2 border-brandAccent">
                    <dt className="sr-only">{fact.label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold text-brandDark dark:text-white">{fact.value}</span>
                      <span className="block text-xs leading-snug text-gray-600 dark:text-white/60">{fact.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-3 mt-8 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent"
                >
                  Request a demo
                </Link>
                <a
                  href="#modules"
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-2.5 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandGold hover:underline underline-offset-4"
                >
                  Explore the modules
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <DocSection
        id="modules"
        title="The modules"
        lead="Six modules on a single platform, sharing your entities, processes, users and approval configuration."
      >
        <ul className="border-t border-borderLight dark:border-borderDark">
          {product.modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <li key={mod.slug} className="border-b border-borderLight dark:border-borderDark">
                <Link to={moduleLink(mod.slug)} className="flex items-start gap-4 py-5 group">
                  <Icon aria-hidden="true" className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandPrimary dark:text-brandGold" />
                  <span className="flex-1">
                    <span className="block text-base font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                      {mod.name}
                    </span>
                    <span className="block mt-1 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
                      {mod.summary}
                    </span>
                  </span>
                  <ArrowRight className="flex-shrink-0 w-4 h-4 mt-1 transition-transform text-brandNavy/40 dark:text-white/40 group-hover:translate-x-0.5 group-hover:text-brandPrimary dark:group-hover:text-brandGold" />
                </Link>
              </li>
            );
          })}
        </ul>
      </DocSection>

      {/* Why */}
      <DocSection
        id="why"
        title="Why organisations choose RiskMan GRC"
        lead="Most governance activities already follow a defined process. What is usually missing is a single system in which that process is recorded."
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <article key={reason.title}>
              <h3 className="flex items-start gap-2 mb-1.5 text-base font-bold leading-snug text-brandDark dark:text-white">
                <Check className="flex-shrink-0 w-4 h-4 mt-1 text-brandPrimary dark:text-brandGold" strokeWidth={2.5} />
                {reason.title}
              </h3>
              <p className="pl-6 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">{reason.text}</p>
            </article>
          ))}
        </div>
      </DocSection>

      {/* Who */}
      <DocSection id="who" title="Who it is for" lead="Each team works in its own module while sharing a single, consistent record.">
        <dl className="border-t divide-y border-borderLight dark:border-borderDark divide-borderLight dark:divide-borderDark">
          {ROLES.map((r) => (
            <div key={r.role} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6">
              <dt className="text-base font-bold leading-snug text-brandDark dark:text-white">{r.role}</dt>
              <dd className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">{r.text}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <ModuleCta mod={ctaFor} />
    </div>
  );
};

export default ProductPage;
