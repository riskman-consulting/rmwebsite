// ===================================
// IndustryCoverageSection.jsx
// Industries & Business Segments Coverage (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Manufacturing & Engineering",
    desc: "Supporting capital planning, expansion financing, and cost structure optimisation for production-driven businesses.",
  },
  {
    title: "Infrastructure & Construction",
    desc: "Advising on project funding structures, long-term debt planning, and financial risk management for large-scale projects.",
  },
  {
    title: "Energy & Utilities",
    desc: "Helping organisations manage capital-intensive investments, regulatory financial planning, and long-term sustainability funding models.",
  },
  {
    title: "Consumer & Retail Businesses",
    desc: "Improving working capital efficiency, funding strategy, and growth expansion planning for market-driven businesses.",
  },
  {
    title: "Food & Processing Industries",
    desc: "Supporting financial structuring for capacity expansion, supply chain financing, and margin stability planning.",
  },
  {
    title: "Emerging & Growth-Stage Businesses",
    desc: "Providing structured financial planning support to help scale operations while maintaining financial discipline and risk control.",
  },
];

const IndustryCoverageSection = () => {
  return (
    <section className="py-10 bg-slate-50 md:py-12 dark:bg-bgDark">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Industry-Focused Financial Advisory Experience
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-1 mx-auto mt-6 rounded-full bg-brandPrimary dark:bg-brandAccent"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 text-lg leading-relaxed text-slate-600 dark:text-brandLight/70"
          >
            Different industries face unique financial challenges. Our advisory
            approach is tailored to sector-specific operating models, capital
            requirements, regulatory environments, and market behaviour to
            ensure practical and relevant financial strategies.
          </motion.p>

        </div>

        {/* Industry Grid */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="p-8 transition bg-white border shadow-sm rounded-2xl border-borderLight hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-brandLight">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-brandLight/70">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustryCoverageSection;