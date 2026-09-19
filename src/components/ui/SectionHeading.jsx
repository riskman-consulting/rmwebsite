import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section header for the module pages — an eyebrow, the heading and an
 * optional lead line. Keeps every section on the same rhythm so the page reads
 * as one document rather than a stack of blocks.
 */
const SectionHeading = ({ eyebrow, title, lead, align = "left" }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45 }}
    className={
      align === "center"
        ? "max-w-3xl mx-auto mb-10 text-center md:mb-14"
        : "max-w-3xl mb-10 md:mb-14"
    }
  >
    {eyebrow && (
      <span className="inline-block mb-3 text-xs font-black tracking-[0.2em] uppercase text-brandPrimary dark:text-brandGold">
        {eyebrow}
      </span>
    )}
    <h2 className="text-2xl font-bold leading-tight font-heading sm:text-3xl md:text-4xl text-brandDark dark:text-white">
      {title}
    </h2>
    {lead && (
      <p className="mt-4 text-base leading-relaxed sm:text-lg text-brandNavy/70 dark:text-white/60">
        {lead}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
