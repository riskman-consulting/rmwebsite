// ===============================
// CTASection.jsx
// Ready to Secure Your Future?
// ===============================

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-16 bg-brandDark">
      <div className="container text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-brandAccent "
        >
          Ready to Secure Your Future?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-10 text-[15px] text-white/80"
        >
          Don&apos;t let uncertainty dictate your strategy. Partner with RiskMan to turn
          potential threats into a competitive advantage.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark"
          >
            Schedule a Consultation Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
