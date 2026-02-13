// ===================================
// HeroSection.jsx
// Financial Advisory Hero Section (Using Local Image)
// ===================================

import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/financial-advisory/financial-advisory.png";

const HeroSection = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-white md:py-12 dark:bg-bgDark">

      {/* Soft Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/5 via-transparent to-brandPrimary/5 dark:from-brandAccent/10 dark:to-transparent" />

      <div className="relative px-6 mx-auto lg:px-20 max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 mb-6 text-xs font-semibold tracking-widest uppercase bg-white border rounded-full border-borderLight text-brandPrimary dark:border-borderDark dark:bg-surfaceDark dark:text-brandAccent"
            >
              Financial Advisory & Strategy
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold leading-tight font-heading text-brandDark dark:text-white md:text-3xl lg:text-4xl"
            >
              Building Financial Strength
              <br />
              For Future-Ready Organisations
            </motion.h1>

            {/* Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-1 mx-auto mt-8 rounded-full bg-brandPrimary dark:bg-brandAccent md:mx-0"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-xl mt-10 text-lg leading-relaxed text-slate-600 dark:text-brandLight/70 md:text-xl"
            >
              Our advisory approach focuses on helping businesses make informed
              financial decisions through structured analysis, risk awareness,
              and practical execution strategies. We support organisations in
              strengthening capital planning, improving financial visibility,
              and preparing for sustainable long-term expansion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 mt-12 sm:flex-row"
            >
              <button className="px-8 py-4 text-sm font-semibold text-white transition rounded-full shadow-lg bg-brandPrimary hover:shadow-xl dark:bg-brandAccent">
                Explore Advisory Services
              </button>

              <button className="px-8 py-4 text-sm font-semibold transition border rounded-full border-borderLight text-slate-900 hover:bg-slate-50 dark:border-borderDark dark:text-brandLight dark:hover:bg-surfaceDark">
                Connect With Our Experts
              </button>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-xl rounded-2xl">

              {/* ✅ Your Local Image */}
              <img
                src={image}
                alt="Financial analytics report with coins calculator and chart"
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brandPrimary/20 via-transparent to-transparent" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;