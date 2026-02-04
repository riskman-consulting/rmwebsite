// ===================================
// ERMAdvantagesSection.jsx
// Enterprise Risk Assessment Advantages
// ===================================

import React from "react";
import { motion } from "framer-motion";
import ermImage from "../../assets/images/erm/erm-1.png";

const advantages = [
  {
    title: "Holistic Risk View",
    description:
      "Provides a comprehensive, organization-wide perspective on all potential threats and interconnections.",
  },
  {
    title: "Improved Decision-Making",
    description:
      "Empowers leadership to make better-informed strategic choices based on detailed risk data.",
  },
  {
    title: "Improved Resource Allocation",
    description:
      "Ensures that time, capital, and manpower are directed toward managing the most critical areas of the business.",
  },
  {
    title: "Convert Risks into Opportunities",
    description:
      "Transforms potential threats into a competitive advantage by identifying ways to innovate through uncertainty.",
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Focuses on building a business model that can withstand evolving industry complexities over time.",
  },
  {
    title: "Resilience & Business Continuity",
    description:
      "Strengthens the organization’s ability to recover quickly from disruptions and maintain essential operations.",
  },
  {
    title: "Facilitates Innovation & Growth",
    description:
      "Creates a secure framework that allows the company to pursue new growth initiatives with calculated confidence.",
  },
  {
    title: "Protection of Reputation",
    description:
      "Safeguards the brand’s value and stakeholder trust by proactively managing risks that could lead to public fallout.",
  },
];

const ERMAdvantagesSection = () => {
  return (
    <section className="relative overflow-hidden bg-bgLight py-24 dark:bg-bgDark">
      <div className="container relative z-10">

        {/* Top Row */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* Left: Heading + Description */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-heading text-3xl font-semibold leading-tight text-brandDark dark:text-brandLight md:text-4xl"
            >
              Enterprise Risk Assessment <span className="text-brandPrimary dark:text-brandAccent">Advantages</span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 h-1 w-20 origin-left rounded-full bg-brandAccent dark:bg-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-xl text-lg leading-relaxed text-brandNavy/80 dark:text-brandLight/70"
            >
              A robust Enterprise Risk Assessment serves as a cornerstone for organizational
              resilience, transforming potential threats into structured pathways for sustainable growth.
            </motion.p>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Subtle frame */}
            <div className="absolute -inset-4 rounded-2xl bg-brandPrimary/5 dark:bg-white/70" />

            <img
              src={ermImage}
              alt="Enterprise Risk Assessment Advantages"
              className="relative z-10 rounded-2xl border border-borderLight shadow-xl dark:border-borderDark"
            />
          </motion.div>

        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-borderLight bg-surfaceLight p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-brandAccent opacity-0 transition group-hover:opacity-100 dark:bg-brandAccent" />

              <h3 className="mb-3 font-heading text-lg font-semibold text-brandDark dark:text-brandLight">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-brandNavy/80 dark:text-brandLight/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ERMAdvantagesSection;
