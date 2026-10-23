import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import ModuleBreadcrumb from "./ModuleBreadcrumb";

/**
 * Module hero — breadcrumb, positioning line, the two calls to action and an
 * "at a glance" panel that answers who the module is for before the visitor
 * has to read a section. The jump links below it act as the page's contents.
 *
 * `belowVideoHero`: the module has Sanity videos, so ModuleVideos opens the
 * page instead. That section owns the breadcrumb and the page's h1, so this
 * one drops the breadcrumb and steps its title down to h2.
 */
const ModuleHero = ({ product, mod, sections, belowVideoHero = false }) => {
  const Icon = mod.icon;
  const Heading = belowVideoHero ? motion.h2 : motion.h1;

  return (
    <section className="relative overflow-hidden border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      {/* Soft brand wash — keeps the hero distinct from the sections below
          without introducing a second background colour. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_80%_at_85%_0%,rgba(0,64,128,0.07),transparent_60%)] dark:bg-[radial-gradient(60%_80%_at_85%_0%,rgba(255,184,0,0.08),transparent_60%)]"
      />

      {/* Opening the page, the breadcrumb sits close under the module tabs;
          below the video hero it keeps full section spacing. */}
      <div
        className={`container relative pb-10 md:pb-16 ${
          belowVideoHero ? "pt-10 md:pt-16" : "pt-6 md:pt-8"
        }`}
      >
        {!belowVideoHero && <ModuleBreadcrumb product={product} mod={mod} />}

        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — positioning */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brandPrimary/10 dark:bg-brandGold/10">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-brandPrimary dark:text-brandGold" />
              </span>
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-brandNavy/50 dark:text-white/40">
                {product.name} module
              </span>
            </motion.div>

            <Heading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              /* Below the video hero this is a section heading, not the page
                 title, so it takes SectionHeading's h2 size. */
              className={`font-heading text-brandDark dark:text-white ${
                belowVideoHero
                  ? "text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
                  : "text-3xl font-black leading-[1.1] sm:text-4xl md:text-5xl"
              }`}
            >
              {mod.name}
            </Heading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className={`mt-4 font-semibold leading-snug font-heading text-brandPrimary dark:text-brandGold ${
                belowVideoHero ? "text-base sm:text-lg md:text-xl" : "text-lg sm:text-xl md:text-2xl"
              }`}
            >
              {mod.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 text-base leading-relaxed sm:text-lg text-brandNavy/70 dark:text-white/60"
            >
              {mod.overview}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col gap-3 mt-8 sm:flex-row sm:items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:opacity-90"
              >
                <CalendarCheck className="w-4 h-4" />
                Request a demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 border rounded-full border-borderLight dark:border-borderDark text-brandDark dark:text-white/85 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
              >
                Talk to a specialist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — at a glance */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 border shadow-sm bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl md:p-7">
              <h2 className="mb-5 text-xs font-black tracking-[0.2em] uppercase text-brandNavy/50 dark:text-white/40">
                At a glance
              </h2>
              <dl className="divide-y divide-borderLight dark:divide-borderDark">
                {mod.atAGlance.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <dt className="text-xs font-bold tracking-wide uppercase sm:w-28 sm:flex-shrink-0 text-brandNavy/50 dark:text-white/40">
                      {row.label}
                    </dt>
                    <dd className="text-[15px] font-semibold leading-snug text-brandDark dark:text-white/85">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.aside>
        </div>

        {/* Jump links — the page's table of contents */}
        <motion.nav
          aria-label="On this page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 pb-1 mt-10 -mx-1 overflow-x-auto md:mt-12 md:flex-wrap md:overflow-visible"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex-shrink-0 px-4 py-2 mx-1 text-xs font-bold tracking-wide uppercase transition-colors border rounded-full border-borderLight dark:border-borderDark text-brandNavy/70 dark:text-white/60 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
            >
              {section.label}
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default ModuleHero;
