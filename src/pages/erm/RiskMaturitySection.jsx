// ===================================
// RiskMaturitySection.jsx
// The Path Ahead: Strengthening Your Risk Maturity
// ===================================

import React from "react";
import { motion } from "framer-motion";

const RiskMaturitySection = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-bgDark">
      <div className="px-6 mx-auto lg:px-12 max-w-7xl">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-semibold text-center text-slate-900 dark:text-brandLight md:text-4xl"
        >
          Strengthening Your Risk Maturity
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
          Our commitment extends beyond initial implementation to ensure your ERM framework
          evolves alongside your business and the changing global landscape.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Ongoing Risk Ownership & Evaluation",
              text:
                "Individual risk owners perform continuous assessments to ensure the ongoing effectiveness of mitigation measures and identify emerging threats.",
            },
            {
              title: "Independent Effectiveness Monitoring",
              text:
                "The Internal Audit team conducts periodic, independent reviews of controls to provide management with objective assurance of the system’s health.",
            },
            {
              title: "Annual Executive Status Reporting",
              text:
                "We deliver formal annual reports to the Risk Committee, detailing the status of existing risks and the progress of all current mitigation initiatives.",
            },
            {
              title: "Dynamic Landscape Reviews",
              text:
                "The risk universe is regularly updated and re-evaluated to account for evolving industry dynamics, regulatory changes, and business complexities.",
            },
            {
              title: "Strategic Oversight of Risks",
              text:
                "Management maintains a sharp focus on the \"Risks That Matter\" (RTMs) through annual progress oversight and high-level strategic alignment.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative p-6 overflow-hidden transition-all bg-white border shadow-sm group rounded-xl border-borderLight hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
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

export default RiskMaturitySection;
