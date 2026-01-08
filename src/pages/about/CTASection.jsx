import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function CTASection() {
  return (
    <section className="text-center transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white"
        >
          Partner With
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">RiskMan Today</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-400"
        >
          Strengthen governance, manage risk and drive sustainable growth with
          confidence.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="/contact" className="inline-block px-8 py-4 text-lg text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105">
            Schedule Consultation
          </a>
          <a href="/about" className="inline-block px-8 py-4 text-lg transition-all duration-300 border-2 rounded-full shadow-lg border-brandDark text-brandDark dark:border-brandAccent dark:text-brandAccent hover:bg-brandDark hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}