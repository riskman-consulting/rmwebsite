// ===================================
// FinalCTASection.jsx
// Final Conversion Call To Action (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-brandPrimary py-10 md:py-12 dark:bg-surfaceDark">
      
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          Ready To Strengthen Your Financial Decision Framework?
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 h-1 w-24 rounded-full bg-white/70"
        />

        {/* Description — ORIGINAL */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          Whether you are planning expansion, evaluating funding options, or
          strengthening financial resilience, our advisory team is ready to
          support your next phase of business growth with structured,
          execution-focused financial strategies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-brandPrimary shadow-lg transition hover:shadow-xl">
            Schedule Advisory Discussion
          </button>

          <button className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
            Download Service Overview
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTASection;
