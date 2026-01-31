// ===================================
// ExperienceAchievementsSection.jsx
// Experience & Advisory Impact Snapshot (Original Content)
// ===================================

import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Multi-Sector Advisory Experience",
    desc: "Delivered financial advisory support across manufacturing, infrastructure, consumer businesses, and capital-intensive industries.",
  },
  {
    title: "Transaction & Funding Support Exposure",
    desc: "Supported organisations in funding discussions, credit evaluation preparation, and financial restructuring planning.",
  },
  {
    title: "Project Financial Evaluation Expertise",
    desc: "Assisted businesses in evaluating project viability through structured financial modelling and risk-aligned feasibility assessment.",
  },
  {
    title: "Business Expansion Financial Planning",
    desc: "Enabled organisations to plan expansion strategies while maintaining financial stability and capital efficiency.",
  },
];

const impactStats = [
  { value: "Multiple", label: "Industry Segments Served" },
  { value: "Complex", label: "Financial Problem Solving Engagements" },
  { value: "Long-Term", label: "Client Relationship Focus" },
  { value: "Structured", label: "Decision Framework Approach" },
];

const ExperienceAchievementsSection = () => {
  return (
    <section className="bg-slate-50 py-10 md:py-12 dark:bg-bgDark">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-slate-900 dark:text-brandLight md:text-4xl"
          >
            Experience That Supports Confident Financial Decisions
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
            Our advisory experience is built on working with organisations facing
            real financial challenges. We focus on practical outcomes, structured
            evaluation frameworks, and long-term financial stability rather than
            one-time advisory outputs.
          </motion.p>

        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {impactStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-borderLight bg-white p-8 text-center shadow-sm dark:border-borderDark dark:bg-surfaceDark"
            >
              <div className="text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                {item.value}
              </div>

              <p className="mt-3 text-sm text-slate-600 dark:text-brandLight/70">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Achievement Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
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

export default ExperienceAchievementsSection;
