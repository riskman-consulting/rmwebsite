// ===================================
// EngagementProcessSection.jsx
// Our Financial Advisory Engagement Process (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Business & Financial Understanding",
    desc: "We begin by understanding business operations, financial structure, growth priorities, and key risk exposure areas.",
  },
  {
    step: "02",
    title: "Data Analysis & Financial Diagnostics",
    desc: "We evaluate financial performance, funding mix, cost structure, and cash flow behaviour to identify improvement opportunities.",
  },
  {
    step: "03",
    title: "Strategy Design & Scenario Evaluation",
    desc: "We develop financial strategy options and evaluate multiple scenarios to ensure decision flexibility under different market conditions.",
  },
  {
    step: "04",
    title: "Execution Planning & Implementation Support",
    desc: "We translate strategy into structured action plans and support implementation through financial structuring and documentation alignment.",
  },
  {
    step: "05",
    title: "Performance Tracking & Continuous Improvement",
    desc: "We monitor financial outcomes post-implementation and refine strategy based on performance trends and market developments.",
  },
];

const EngagementProcessSection = () => {
  return (
    <section className="py-10 bg-white md:py-12 dark:bg-bgDark">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Our Structured Financial Advisory Engagement Approach
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
            Our advisory engagement is designed to move from understanding to
            execution. We follow a structured, transparent, and measurable
            process that helps organisations take financial decisions with
            clarity and confidence.
          </motion.p>

        </div>

        {/* Process Timeline Grid */}
        <div className="grid gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative p-8 transition border shadow-sm rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
            >

              {/* Step Number */}
              <div className="mb-4 text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-brandLight">
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

export default EngagementProcessSection;