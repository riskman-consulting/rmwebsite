import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FAAS_GROUPS, FAAS_TAGLINE } from "./faasData";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      <div className="container py-14 md:py-20">
        {/* No max-width here — the h1 needs the full container to sit on one
            line. The paragraph below carries its own max-w-3xl instead. */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase rounded-full text-brandPrimary dark:text-brandGold bg-brandPrimary/10 dark:bg-brandGold/10"
          >
            Enterprise Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            /* Sized to fit the full title on ONE line from lg up: the .container
               caps at 1200px, and the title measures 899px at 32px and 1123px at
               40px. Below lg there is no width that keeps it on one line at a
               readable size, so it wraps there. */
            className="mb-6 text-3xl font-black leading-tight font-heading sm:text-4xl lg:text-[32px] xl:text-[40px] lg:whitespace-nowrap text-brandDark dark:text-white"
          >
            Financial Accounting and{" "}
            <span className="text-brandPrimary dark:text-brandGold">
              Advisory Services
            </span>{" "}
            <span className="whitespace-nowrap">(FAAS)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mb-10 text-lg leading-relaxed md:text-xl text-brandNavy/70 dark:text-white/60"
          >
            From running the day-to-day finance function to standing up a CFO
            office, closing the books, and getting you audit- and deal-ready —
            six connected service groups under one team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {FAAS_GROUPS.map((group) => (
              <Link
                key={group.slug}
                to={group.path}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-200 border rounded-full border-borderLight dark:border-borderDark text-brandDark dark:text-white/80 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
              >
                {group.title}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tagline band, carried over from the FAAS deck */}
      <div className="bg-brandAccent">
        <div className="container py-4">
          <p className="text-sm font-black tracking-[0.15em] text-center uppercase md:text-base text-brandDark">
            {FAAS_TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
