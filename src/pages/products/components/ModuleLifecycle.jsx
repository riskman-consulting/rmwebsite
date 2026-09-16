import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * The cycle the module runs, step by step. A left rail on mobile so the
 * sequence stays readable in a narrow column; a numbered grid from md up,
 * where the steps can sit side by side without crowding.
 */
const ModuleLifecycle = ({ mod }) => (
  <section
    id="how-it-works"
    className="py-14 md:py-20 scroll-mt-[200px] bg-bgLight dark:bg-bgDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="How it works"
        title="The cycle it runs"
        lead="Each stage hands the next one its inputs, so the work moves forward on a defined path instead of being reassembled at every handover."
      />

      {/* Mobile — vertical rail */}
      <ol className="relative pl-10 space-y-8 md:hidden">
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-px bg-borderLight dark:bg-borderDark"
        />
        {mod.lifecycle.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-10 flex items-center justify-center w-8 h-8 text-xs font-black rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark">
              {index + 1}
            </span>
            <h3 className="mb-1.5 text-base font-bold font-heading text-brandDark dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      {/* md and up — numbered cards */}
      <ol className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
        {mod.lifecycle.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
            className="relative p-6 pt-8 transition-colors duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent"
          >
            {/* Step number, half-seated on the card's top edge */}
            <span className="absolute flex items-center justify-center w-10 h-10 text-sm font-black -translate-y-1/2 border-4 rounded-full top-0 left-6 border-bgLight dark:border-bgDark bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark">
              {index + 1}
            </span>
            <h3 className="mb-2 text-base font-bold leading-snug font-heading lg:text-lg text-brandDark dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
              {step.text}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default ModuleLifecycle;
