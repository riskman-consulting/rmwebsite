import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * Everything the group covers, one card per line of service. Three columns
 * from lg so a seven-item group does not run down the page as a single strip.
 */
const CapabilityGrid = ({ group }) => (
  <section
    id="coverage"
    className="py-14 md:py-20 scroll-mt-48 bg-bgLight dark:bg-bgDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="Scope"
        title="What this covers"
        lead={group.summary}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {group.items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
            className="flex items-start gap-3 p-5 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent hover:shadow-lg"
          >
            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brandAccent/15">
              <Check className="w-3.5 h-3.5 text-brandAccent" strokeWidth={3} />
            </span>
            <span className="text-[15px] font-semibold leading-snug text-brandDark dark:text-white/85">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilityGrid;
