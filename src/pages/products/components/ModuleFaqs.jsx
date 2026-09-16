import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * Accordion of the questions that come up in evaluation. First answer is open
 * so the section does not read as a wall of closed rows.
 */
const ModuleFaqs = ({ mod }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      className="py-14 md:py-20 scroll-mt-[200px] bg-surfaceLight dark:bg-surfaceDark"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Questions"
          title="What teams ask before they commit"
          lead="If something here is not covered, the implementation team will answer it against your framework rather than in general terms."
        />

        <div className="max-w-3xl space-y-3">
          {mod.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark ${
                  isOpen
                    ? "border-brandAccent"
                    : "border-borderLight dark:border-borderDark"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex items-start justify-between w-full gap-4 p-5 text-left md:p-6"
                  >
                    <span className="text-[15px] md:text-base font-bold leading-snug font-heading text-brandDark dark:text-white">
                      {faq.q}
                    </span>
                    <span
                      className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-brandAccent rotate-45"
                          : "bg-brandPrimary/10 dark:bg-brandGold/10"
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 ${
                          isOpen
                            ? "text-brandDark"
                            : "text-brandPrimary dark:text-brandGold"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-5 pb-5 md:px-6 md:pb-6"
                  >
                    <p className="text-sm leading-relaxed md:text-[15px] text-brandNavy/70 dark:text-white/60">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModuleFaqs;
