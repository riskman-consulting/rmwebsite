import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ModuleBreadcrumb from "./ModuleBreadcrumb";

/**
 * Module hero — breadcrumb, name, one-line positioning, the overview, two
 * calls to action and a short "at a glance" table. The "On this page" links
 * below act as the page's contents.
 *
 * `belowVideoHero`: the module has Sanity videos, so ModuleVideos opens the
 * page instead. That section owns the breadcrumb and the page's h1, so this
 * one drops the breadcrumb and steps its title down to h2.
 */
const ModuleHero = ({ product, mod, sections, belowVideoHero = false }) => {
  const Heading = belowVideoHero ? "h2" : "h1";

  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div
        className={`container pb-10 md:pb-14 ${
          belowVideoHero ? "pt-10 md:pt-14" : "pt-6 md:pt-8"
        }`}
      >
        {!belowVideoHero && <ModuleBreadcrumb product={product} mod={mod} />}

        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Heading
              className={` text-brandDark dark:text-white ${
                belowVideoHero
                  ? "text-2xl font-bold leading-tight md:text-[30px]"
                  : "text-3xl font-bold leading-[1.15] sm:text-[32px] md:text-[38px]"
              }`}
            >
              {mod.name}
            </Heading>

            <p className="mt-3 max-w-[62ch] text-base font-medium leading-snug sm:text-lg [text-wrap:balance] text-brandPrimary dark:text-brandGold">
              {mod.tagline}
            </p>

            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed sm:text-base text-gray-800 dark:text-white/80">
              {mod.overview}
            </p>

            <div className="flex flex-col gap-3 mt-7 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent"
              >
                Request a demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-2 py-2.5 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandGold hover:underline underline-offset-4"
              >
                Talk to a specialist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pt-2">
            <h2 className="mb-3 text-sm font-semibold text-brandNavy/60 dark:text-white/50">
              At a glance
            </h2>
            <dl className="border-t divide-y border-borderLight dark:border-borderDark divide-borderLight dark:divide-borderDark">
              {mod.atAGlance.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-3"
                >
                  <dt className="text-sm text-brandNavy/60 dark:text-white/50">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-semibold leading-snug text-brandDark dark:text-white/85">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <nav
          aria-label="On this page"
          className="flex flex-wrap items-baseline mt-10 text-sm gap-x-5 gap-y-2 md:mt-12"
        >
          <span className="text-brandNavy/50 dark:text-white/40">On this page:</span>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-medium transition-colors text-brandNavy/80 dark:text-white/70 hover:text-brandPrimary dark:hover:text-brandGold hover:underline underline-offset-4"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ModuleHero;
