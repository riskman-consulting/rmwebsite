// ===============================================
// OrganizationWideImplementationSection.jsx
// Our Organization-wide Implementation Approach
// ===============================================

import React from "react";
import { motion } from "framer-motion";

const OrganizationWideImplementationSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-bgDark">
      <div className="px-6 mx-auto lg:px-12 max-w-7xl">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-semibold text-center text-slate-900 dark:text-brandLight md:text-4xl"
        >
          Our Organization-wide Implementation Approach
        </motion.h2>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-24 h-1 mx-auto mb-8 origin-center rounded-full bg-brandPrimary dark:bg-brandAccent"
        />

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16 text-lg text-center text-slate-600 dark:text-brandLight/70"
        >
          RiskMan ensures that ERM is not a siloed exercise but a deeply embedded culture that
          empowers every level of your organization to manage risks proactively.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Collaborative Governance & Support",
              text:
                "We provide structured guidance and hands-on support to process owners to ensure consistent risk identification and assessment across all departments.",
            },
            {
              title: "Clarified Risk Ownership",
              text:
                "Our approach empowers your team to take direct responsibility for updating risk statuses and implementing specific mitigation actions.",
            },
            {
              title: "Continuous Oversight",
              text:
                "We facilitate regular risk discussions and review risk registers to ensure that all identified mitigation actions are closed promptly and effectively.",
            },
            {
              title: "Dynamic Variance Analysis",
              text:
                "We perform periodic reviews to analyze the reasons behind risk fluctuations and align them with your management’s specific benchmarks.",
            },
            {
              title: "Strategic Reporting & Strengthening",
              text:
                "By tracking the progress of mitigation initiatives, we strengthen the quality of risk reporting provided to the Board and senior leadership.",
            },
            {
              title: "Independent Effectiveness Monitoring",
              text:
                "We ensure long-term sustainability by establishing a process where internal audit teams periodically monitor the effectiveness of all implemented controls.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative p-6 overflow-hidden transition-all border shadow-sm group rounded-xl border-borderLight bg-slate-50 hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 top-0 h-1 transition opacity-0 bg-brandPrimary group-hover:opacity-100 dark:bg-brandAccent" />

              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-brandLight">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-brandLight/70">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OrganizationWideImplementationSection;
