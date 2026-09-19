import React from "react";
import { motion } from "framer-motion";
import { FileCheck, Scale } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * The two questions a CA asks of any GRC tool: what comes out of it, and what
 * it is built against. Deliverables on the left, the governance references on
 * the right.
 */
const ModuleOutputs = ({ mod }) => (
  <section
    id="outputs"
    className="py-14 md:py-20 scroll-mt-[200px] bg-surfaceLight dark:bg-surfaceDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="Outputs and alignment"
        title="What comes out of it"
        lead="The artefacts the module produces, and the governance framework each one is built to support."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10">
              <FileCheck className="w-5 h-5 text-brandPrimary dark:text-brandGold" />
            </span>
            <h3 className="text-lg font-bold font-heading md:text-xl text-brandDark dark:text-white">
              Reports and artefacts
            </h3>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {mod.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 p-4 text-sm font-semibold leading-snug transition-colors duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent text-brandDark dark:text-white/85"
              >
                <span className="w-1.5 h-1.5 mt-[7px] rounded-full flex-shrink-0 bg-brandAccent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10">
              <Scale className="w-5 h-5 text-brandPrimary dark:text-brandGold" />
            </span>
            <h3 className="text-lg font-bold font-heading md:text-xl text-brandDark dark:text-white">
              Built around
            </h3>
          </div>

          <div className="space-y-3">
            {mod.standards.map((standard) => (
              <div
                key={standard.name}
                className="p-4 border md:p-5 bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl"
              >
                <h4 className="mb-1 text-sm font-black leading-snug md:text-[15px] text-brandPrimary dark:text-brandGold">
                  {standard.name}
                </h4>
                <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                  {standard.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-brandNavy/50 dark:text-white/40">
            References describe the governance context the module is designed
            to support. They are not a statement of certification, and do not
            substitute for professional judgement on your reporting obligations.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ModuleOutputs;
