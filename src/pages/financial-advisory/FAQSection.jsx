// ===================================
// FAQSection.jsx
// Financial Advisory Frequently Asked Questions (Original Content)
// ===================================

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does financial advisory typically include?",
    a: "Financial advisory usually includes capital planning, funding strategy evaluation, financial risk review, project financial assessment, and decision support for expansion or restructuring initiatives.",
  },
  {
    q: "How can financial advisory improve business performance?",
    a: "Financial advisory improves performance by optimising capital usage, reducing funding cost, improving financial visibility, and supporting structured financial decision making.",
  },
  {
    q: "Is financial advisory only useful for large enterprises?",
    a: "No. Financial advisory is useful for growing businesses, mid-sized companies, and even early-stage organisations planning structured expansion or funding strategies.",
  },
  {
    q: "When should a company consider financial advisory support?",
    a: "Businesses usually consider financial advisory during expansion planning, major funding decisions, restructuring phases, or when financial risks and market uncertainty increase.",
  },
  {
    q: "How long does a financial advisory engagement usually take?",
    a: "Engagement duration depends on scope and complexity. Some focused assignments may take a few weeks, while strategic advisory engagements may run across multiple business cycles.",
  },
  {
    q: "How is financial advisory different from traditional consulting?",
    a: "Financial advisory is more focused on capital structure, funding strategy, financial risk exposure, and financial decision frameworks rather than only operational or process consulting.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-12 dark:bg-bgDark">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Frequently Asked Questions About Financial Advisory
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-brandPrimary dark:bg-brandAccent"
          />

        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-borderLight bg-surfaceLight shadow-sm dark:border-borderDark dark:bg-surfaceDark"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-brandLight">
                  {item.q}
                </span>

                <span className="text-xl font-bold text-brandPrimary dark:text-brandAccent">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-brandLight/70">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;
