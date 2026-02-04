// ===================================
// WhyChooseUsSection.jsx
// Why Choose Our Financial Advisory (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Business Context First Approach",
    desc: "We start by understanding your business model, industry pressures, and financial realities before suggesting any advisory direction.",
  },
  {
    title: "Independent & Practical Recommendations",
    desc: "Our advice is built around feasibility and execution practicality, ensuring strategies are realistic and implementable.",
  },
  {
    title: "Cross-Functional Financial Perspective",
    desc: "We evaluate financial decisions by connecting operations, risk exposure, funding cost, and long-term business objectives.",
  },
  {
    title: "Execution-Focused Advisory",
    desc: "Beyond strategy design, we help organisations translate financial plans into measurable action steps and track outcomes.",
  },
  {
    title: "Structured Risk Awareness",
    desc: "We help businesses anticipate financial and market uncertainties through structured scenario evaluation and planning.",
  },
  {
    title: "Long-Term Partnership Mindset",
    desc: "Our goal is not one-time advisory delivery but building lasting financial resilience and decision confidence.",
  },
];

const WhyChooseUsSection = () => {
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
            Why Organisations Trust Our Financial Advisory Approach
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
            Financial advisory creates real value only when it is aligned with
            business execution. Our focus is to combine financial expertise,
            practical experience, and structured decision frameworks to help
            organisations move forward with clarity and confidence.
          </motion.p>

        </div>

        {/* Differentiator Grid */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
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

export default WhyChooseUsSection;