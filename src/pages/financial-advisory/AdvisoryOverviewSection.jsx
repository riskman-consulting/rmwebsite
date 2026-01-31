// ===================================
// AdvisoryOverviewSection.jsx
// Financial Advisory Service Overview (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Capital Planning",
    desc: "Supporting businesses in structuring capital efficiently by balancing cost, flexibility, and long-term sustainability objectives.",
  },
  {
    title: "Financial Risk Visibility",
    desc: "Identifying financial exposure areas and building structured mitigation strategies aligned with business realities.",
  },
  {
    title: "Funding Strategy Guidance",
    desc: "Evaluating multiple funding routes and recommending options based on business lifecycle, cash flow profile, and market conditions.",
  },
  {
    title: "Decision Support Analytics",
    desc: "Providing data-backed financial insights that help leadership teams make confident and timely strategic decisions.",
  },
];

const AdvisoryOverviewSection = () => {
  return (
    <section className="bg-slate-50 py-10 md:py-12 dark:bg-bgDark">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Financial Advisory Designed Around Real Business Needs
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-brandPrimary dark:bg-brandAccent"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 text-lg leading-relaxed text-slate-600 dark:text-brandLight/70"
          >
            Our financial advisory services are built to address practical
            business challenges rather than theoretical models. We work closely
            with organisations to understand operational realities, financial
            constraints, and growth ambitions before recommending structured
            financial strategies that are both achievable and scalable.
          </motion.p>

        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-borderLight bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
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

export default AdvisoryOverviewSection;
