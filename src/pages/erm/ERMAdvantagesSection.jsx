// ===================================
// ERMAdvantagesSection.jsx
// Enterprise Risk Assessment Advantages
// ===================================

import React from "react";
import { motion } from "framer-motion";
import ermImage from "../../assets/images/erm/erm-1.jpg";

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
    <section className="relative overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container relative z-10 px-6 lg:px-20">

        {/* Top Row */}
        <div className="grid items-center grid-cols-1 gap-16 mb-20 md:grid-cols-2">

          {/* Left: Heading + Description */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-semibold leading-tight font-heading text-brandDark dark:text-brandLight md:text-4xl"
            >
              Enterprise Risk Assessment <span className="text-brandPrimary dark:text-brandAccent">Advantages</span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-20 h-1 mb-6 origin-left rounded-full bg-brandAccent dark:bg-white"
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
              className="relative z-10 border shadow-xl rounded-2xl border-borderLight dark:border-borderDark"
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
              className="relative p-6 overflow-hidden transition-all border shadow-sm group rounded-xl border-borderLight bg-surfaceLight hover:-translate-y-1 hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 top-0 h-1 transition opacity-0 bg-brandAccent group-hover:opacity-100 dark:bg-brandAccent" />

              <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandLight">
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
