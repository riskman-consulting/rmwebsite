// src/pages/industries/IndustriesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaBuilding,
  FaShoppingCart,
  FaHeartbeat,
  FaMicrochip,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import industries from "../../data/industries-master-list.json";


/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* =======================
   INDUSTRY ICON MAP
======================= */
const industryIcons = {
  automobiles: <FaIndustry className="text-3xl" />,
  "banking-insurance": <FaBuilding className="text-3xl" />,
  ecommerce: <FaShoppingCart className="text-3xl" />,
  healthcare: <FaHeartbeat className="text-3xl" />,
  "it-consulting": <FaMicrochip className="text-3xl" />,
  manufacturing: <FaIndustry className="text-3xl" />,
  "retail-consumer": <FaShoppingCart className="text-3xl" />,
  "travel-logistics": <FaUsers className="text-3xl" />,
};

/* =======================
   INDUSTRY CARD
======================= */
const IndustryCard = ({ industry, index }) => {
  const icon =
    industryIcons[industry.id] || <FaIndustry className="text-3xl" />;

  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/industries/${industry.id}`}>
        <motion.div
          className="relative h-full overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

          {/* Image Section */}
          {industry.headerImage && (
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 z-10 bg-brandDark/40" />
              <motion.img
                src={industry.headerImage}
                alt={industry.title}
                className="object-cover w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 p-6 space-y-4">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
              {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
              {industry.title}
            </h3>

            {/* Summary */}
            <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 line-clamp-3">
              {industry.summary}
            </p>

            {/* Learn More */}
            <div className="pt-4 transition-colors duration-300 border-t border-borderLight dark:border-borderDark group-hover:border-brandPrimary/30 dark:group-hover:border-brandAccent/30">
              <div className="flex items-center gap-2 font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover:translate-x-1">
                Explore Industry
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function IndustriesList() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* <BackgroundGrid /> */}
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[50vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-bgLight/60 dark:bg-bgDark/70" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
            alt="Industries"
            className="object-cover w-full h-full grayscale opacity-30 dark:opacity-40"
          />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-lg font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent"
            >
              Industry Expertise
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white"
            >
              Industries
              <br />
              <span className="text-brandPrimary dark:text-brandAccent">We Serve</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-xl leading-relaxed text-brandNavy dark:text-gray-400 md:text-2xl"
            >
              Sector-focused expertise delivering risk, compliance, and resilience
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRIES GRID ================= */}
      <section className="relative transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Tailored <span className="text-brandPrimary dark:text-brandAccent">Industry Solutions</span>
            </h2>
            <p className="max-w-3xl text-base text-brandNavy dark:text-gray-400 text-start">
              Designed for sector-specific regulatory, operational, and strategic challenges
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE RISKMAN ================= */}
      <section className="relative transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold text-start md:text-5xl text-brandDark dark:text-white"
          >
            Industry-Specific
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Excellence</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Deep Domain Knowledge",
                desc: "Specialized expertise in sector regulations and challenges",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Best Practice Frameworks",
                desc: "Industry-proven methodologies and compliance standards",
              },
              {
                icon: <FaCheckCircle className="text-3xl" />,
                title: "Sector Leadership",
                desc: "Trusted advisors to leading organizations across industries",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-8 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative text-center transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Ready to Transform Your
              <br />
              <span className="text-brandPrimary dark:text-brandAccent">Industry Resilience?</span>
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-brandNavy dark:text-gray-400">
              Partner with RiskMan for industry-leading risk management and compliance solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Deep Domain Knowledge", "Best Practice Frameworks", "Sector Leadership"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    className="px-6 py-3 font-semibold border rounded-full bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-sm border-borderLight dark:border-borderDark text-brandDark dark:text-white"
                    whileHover={{
                      y: -2,
                      borderColor: "#FFC000",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>

            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
                whileTap={{ scale: 0.98 }}
              >
                Discuss Your Industry Needs
                <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}