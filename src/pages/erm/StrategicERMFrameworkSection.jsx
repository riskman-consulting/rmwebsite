// =======================================
// StrategicERMFrameworkSection.jsx
// Strategic ERM Framework: Scope & Deliverables
// =======================================

import React from "react";
import { motion } from "framer-motion";

const StrategicERMFrameworkSection = () => {
  return (
    <section className="bg-white py-24 dark:bg-bgDark">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
        >
        Our Scope and Deliverables
        </motion.h2>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 h-1 w-24 origin-center rounded-full bg-brandPrimary dark:bg-brandAccent"
        />

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center text-lg text-slate-600 dark:text-brandLight/70"
        >
          RiskMan partners with your organization to build a resilient future by implementing a
          comprehensive Enterprise Risk Management framework that identifies, assesses, and
          mitigates critical business threats.
        </motion.p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Scope of Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-borderLight bg-slate-50 p-8 shadow-sm dark:border-borderDark dark:bg-surfaceDark"
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-brandLight">
              Scope of Services
            </h3>

            <p className="mb-4 text-slate-600 dark:text-brandLight/70">
              RiskMan to be engaged for the following:
            </p>

            <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-brandLight/70">
              <li>Develop ERM policy</li>
              <li>Advise to develop risk assessment criteria</li>
              <li>
                Assessment of various risks & controls in place based on process walkthroughs
                across the entity including Corporate Strategy and Entity level controls
              </li>
              <li>
                Interviewing key stakeholders and review documentation around key enterprise
                level risks
              </li>
              <li>
                Documenting key risks for management reporting and recommending control
                measures (if needed)
              </li>
            </ul>
          </motion.div>

          {/* Key Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-borderLight bg-slate-50 p-8 shadow-sm dark:border-borderDark dark:bg-surfaceDark"
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-brandLight">
              Key Deliverables
            </h3>

            <p className="mb-4 text-slate-600 dark:text-brandLight/70">
              We provide the following deliverables for your services:
            </p>

            <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-brandLight/70">
              <li>Proposed ERM framework and manual</li>
              <li>
                List of enterprise level key risks (i.e., Risks that Matter)
              </li>
              <li>Current state and Mitigation plans (if any)</li>
              <li>Recommendations</li>
              <li>Representing quarterly risk committee meetings</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StrategicERMFrameworkSection;
