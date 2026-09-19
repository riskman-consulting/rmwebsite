import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { FAAS_GROUPS, FAAS_TAGLINE } from "./faasData";

/**
 * FAAS overview hero.
 *
 * Two columns from lg: the positioning on the left, and the six groups as a
 * working index on the right. The index replaces the row of pills that used to
 * sit under the copy — it repeated the sub-nav immediately above it, and gave
 * a visitor two identical lists to read before any content.
 */
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(55%_75%_at_90%_0%,rgba(0,64,128,0.07),transparent_60%)] dark:bg-[radial-gradient(55%_75%_at_90%_0%,rgba(255,184,0,0.08),transparent_60%)]"
      />

      <div className="container relative py-12 md:py-16 lg:py-20">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Positioning */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase rounded-full text-brandPrimary dark:text-brandGold bg-brandPrimary/10 dark:bg-brandGold/10"
            >
              Enterprise Services
            </motion.span>

            {/* Sized to wrap gracefully rather than being forced onto one
                line — the old nowrap rule needed three breakpoint-specific
                font sizes and still broke between 1024px and 1280px. */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-black leading-[1.1] font-heading sm:text-4xl xl:text-5xl text-brandDark dark:text-white"
            >
              Financial Accounting and{" "}
              <span className="text-brandPrimary dark:text-brandGold">
                Advisory Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="max-w-2xl mt-5 text-base leading-relaxed sm:text-lg md:text-xl text-brandNavy/70 dark:text-white/60"
            >
              From running the day-to-day finance function to standing up a CFO
              office, closing the books, and getting you audit- and deal-ready —
              six connected service groups under one team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col gap-3 mt-8 sm:flex-row sm:items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:opacity-90"
              >
                <Phone className="w-4 h-4" />
                Talk to our FAAS team
              </Link>
              <a
                href="#groups"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 border rounded-full border-borderLight dark:border-borderDark text-brandDark dark:text-white/85 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
              >
                See what sits under FAAS
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* The six groups as an index */}
          <motion.nav
            aria-label="FAAS service groups"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="lg:col-span-5"
          >
            <div className="p-2 border shadow-sm bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl">
              <h2 className="px-4 pt-4 pb-3 text-xs font-black tracking-[0.2em] uppercase text-brandNavy/50 dark:text-white/40">
                Six service groups
              </h2>
              <ul>
                {FAAS_GROUPS.map((group) => {
                  const Icon = group.icon;
                  return (
                    <li key={group.slug}>
                      <Link
                        to={group.path}
                        className="flex items-center gap-3 px-4 py-3 transition-colors rounded-xl group hover:bg-brandPrimary/5 dark:hover:bg-brandGold/5"
                      >
                        <span className="flex items-center justify-center flex-shrink-0 w-9 h-9 transition-colors duration-300 rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                          <Icon className="w-[18px] h-[18px] transition-colors duration-300 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                        </span>
                        <span className="flex-1 min-w-0 text-sm font-bold leading-snug font-heading text-brandDark dark:text-white">
                          {group.title}
                        </span>
                        <ArrowRight className="flex-shrink-0 w-4 h-4 transition-transform duration-300 text-brandNavy/30 dark:text-white/25 group-hover:translate-x-1 group-hover:text-brandPrimary dark:group-hover:text-brandGold" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        </div>
      </div>

      {/* Tagline band, carried over from the FAAS deck */}
      <div className="bg-brandAccent">
        <div className="container py-3.5">
          <p className="text-xs font-black tracking-[0.15em] text-center uppercase sm:text-sm text-brandDark">
            {FAAS_TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
