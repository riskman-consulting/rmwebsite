import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { FAAS_BASE_PATH } from "../faasData";

/**
 * Group page hero.
 *
 * Copy on the left, photograph on the right where the group has one. A group
 * without artwork keeps the copy at reading width and gains a scope panel in
 * its place, so an image-less page still reads as designed rather than as a
 * page missing its picture.
 */
const GroupHero = ({ group }) => {
  const hasImage = Boolean(group.image);

  return (
    <section className="relative overflow-hidden border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(55%_75%_at_90%_0%,rgba(0,64,128,0.06),transparent_60%)] dark:bg-[radial-gradient(55%_75%_at_90%_0%,rgba(255,184,0,0.07),transparent_60%)]"
      />

      <div className="container relative py-10 md:py-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 mb-8 text-[11px] font-bold tracking-wide uppercase sm:text-xs text-brandNavy/50 dark:text-white/40"
        >
          <Link
            to="/services"
            className="hover:text-brandPrimary dark:hover:text-brandGold"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={FAAS_BASE_PATH}
            className="hover:text-brandPrimary dark:hover:text-brandGold"
          >
            FAAS
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brandPrimary dark:text-brandGold">
            {group.title}
          </span>
        </nav>

        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={hasImage ? "lg:col-span-7" : "lg:col-span-8"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brandPrimary/10 dark:bg-brandGold/10">
                <group.icon className="w-6 h-6 md:w-7 md:h-7 text-brandPrimary dark:text-brandGold" />
              </span>
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-brandNavy/50 dark:text-white/40">
                FAAS service group
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl font-black leading-[1.1] font-heading sm:text-4xl md:text-5xl text-brandDark dark:text-white"
            >
              {group.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-lg font-semibold leading-snug sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
            >
              {group.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 text-base leading-relaxed sm:text-lg text-brandNavy/70 dark:text-white/60"
            >
              {group.intro}
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
                <Phone className="w-4 h-4" />
                Talk to our team
              </Link>
              <a
                href="#coverage"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 border rounded-full border-borderLight dark:border-borderDark text-brandDark dark:text-white/85 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
              >
                What this covers
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {hasImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden shadow-xl lg:col-span-5 rounded-2xl aspect-[4/3] lg:aspect-[5/4] max-w-full bg-brandPrimary/5 dark:bg-brandGold/5"
            >
              <img
                src={group.image}
                alt={group.imageAlt}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
              />
            </motion.div>
          ) : (
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="p-6 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl">
                <h2 className="mb-4 text-xs font-black tracking-[0.2em] uppercase text-brandNavy/50 dark:text-white/40">
                  In scope
                </h2>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 mt-[7px] rounded-full flex-shrink-0 bg-brandAccent" />
                      <span className="text-sm font-semibold leading-snug text-brandDark dark:text-white/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default GroupHero;
