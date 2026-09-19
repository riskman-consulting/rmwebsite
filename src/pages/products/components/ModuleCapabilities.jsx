import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * What the module actually does. Each capability leads with the outcome and
 * then lists the specifics underneath, so the card reads at two depths — a
 * skim for the reviewer, the detail for the practitioner.
 */
const ModuleCapabilities = ({ mod }) => (
  <section
    id="capabilities"
    className="py-14 md:py-20 scroll-mt-[200px] bg-surfaceLight dark:bg-surfaceDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="Capabilities"
        title={`What ${mod.shortName} does`}
        lead={mod.description}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-6">
        {mod.capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
              className="flex flex-col h-full p-6 transition-all duration-300 border group bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent hover:shadow-lg"
            >
              <span className="flex items-center justify-center w-12 h-12 mb-5 transition-colors duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                <Icon className="w-6 h-6 transition-colors duration-300 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
              </span>

              <h3 className="mb-2 text-base font-bold leading-snug font-heading md:text-lg text-brandDark dark:text-white">
                {cap.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                {cap.text}
              </p>

              <ul className="pt-4 mt-auto space-y-2 border-t border-borderLight dark:border-borderDark">
                {cap.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13px] font-semibold leading-snug text-brandDark/80 dark:text-white/70"
                  >
                    <span className="w-1.5 h-1.5 mt-[7px] rounded-full flex-shrink-0 bg-brandAccent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ModuleCapabilities;
