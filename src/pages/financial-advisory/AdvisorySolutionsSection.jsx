// ===================================
// AdvisorySolutionsSection.jsx
// Core Financial Advisory Solutions (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Credit Profile & Rating Advisory",
    desc: "Helping organisations strengthen credit positioning through financial structure review, documentation support, and rating interaction preparation.",
  },
  {
    title: "Business Valuation & Financial Assessment",
    desc: "Providing structured valuation insights for strategic decisions such as investment, partnership, restructuring, or transaction evaluation.",
  },
  {
    title: "Debt Structuring & Optimisation",
    desc: "Designing debt frameworks that balance cost efficiency, repayment flexibility, and long-term balance sheet strength.",
  },
  {
    title: "Project Financial Feasibility",
    desc: "Assessing project viability through cash flow modelling, risk evaluation, funding planning, and scenario sensitivity analysis.",
  },
  {
    title: "Working Capital Strategy",
    desc: "Improving liquidity stability by optimising receivable cycles, inventory funding, and short-term financing structures.",
  },
  {
    title: "Financial Restructuring Support",
    desc: "Supporting organisations in restructuring financial obligations to improve sustainability and operational continuity.",
  },
];

const AdvisorySolutionsSection = () => {
  return (
    <section className="py-10 bg-white md:py-12 dark:bg-bgDark">
      <div className="px-6 mx-auto lg:px-20 max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Core Financial Advisory Solutions That Support Business Decisions
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
            Our financial advisory solutions are designed to address practical
            financial decision challenges faced by organisations across growth,
            expansion, restructuring, and performance improvement phases.
            Each solution is tailored to align with business goals, financial
            position, and market conditions.
          </motion.p>

        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="p-8 transition border shadow-sm rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
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

export default AdvisorySolutionsSection;