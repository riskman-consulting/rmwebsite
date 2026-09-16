import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

/** Who sits in the module day to day, and what each of them comes for. */
const ModuleRoles = ({ mod }) => (
  <section
    id="who"
    className="py-14 md:py-20 scroll-mt-[200px] bg-bgLight dark:bg-bgDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="Who uses it"
        title="Built for the people accountable for it"
        lead="Each role sees the same record from the angle it needs — without a separate file being maintained for each of them."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
        {mod.roles.map((role, index) => (
          <motion.article
            key={role.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
            className="p-6 transition-colors duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent"
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10">
              <Users className="w-5 h-5 text-brandPrimary dark:text-brandGold" />
            </span>
            <h3 className="mb-2 text-[15px] font-bold leading-snug font-heading text-brandDark dark:text-white">
              {role.role}
            </h3>
            <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
              {role.text}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ModuleRoles;
