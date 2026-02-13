// ===================================
// StrategyLifecycleSection.jsx
// Financial Strategy Across Business Lifecycle (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const lifecycleStages = [
  {
    phase: "01",
    title: "Capital & Funding Strategy",
    desc: "We evaluate optimal capital mix by analysing cost of funds, repayment flexibility, and alignment with business cash flow behaviour.",
  },
  {
    phase: "02",
    title: "Strategic Transactions & Restructuring",
    desc: "We support decision making around mergers, acquisitions, divestments, and financial restructuring with independent evaluation frameworks.",
  },
  {
    phase: "03",
    title: "Expansion & Investment Planning",
    desc: "We guide organisations in planning greenfield or brownfield expansion with strong financial viability and risk-aligned planning.",
  },
  {
    phase: "04",
    title: "Performance Monitoring & Optimisation",
    desc: "We help track financial performance post-implementation and refine strategies based on evolving market and business realities.",
  },
];

const StrategyLifecycleSection = () => {
  return (
    <section className="py-10 bg-slate-50 md:py-12 dark:bg-bgDark">
      <div className="px-6 mx-auto lg:px-20 max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Financial Strategy Across the Business Growth Journey
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
            Financial priorities evolve as businesses move through different
            growth stages. Our advisory framework is designed to support
            organisations from capital planning to expansion execution and
            performance optimisation using structured and measurable financial
            decision models.
          </motion.p>

        </div>

        {/* Timeline / Steps */}
        <div className="grid gap-10 mt-20 md:grid-cols-2">

          {lifecycleStages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white border shadow-sm rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark"
            >

              {/* Phase Number */}
              <div className="mb-4 text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                {item.phase}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-brandLight">
                {item.title}
              </h3>

              {/* Description */}
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

export default StrategyLifecycleSection;