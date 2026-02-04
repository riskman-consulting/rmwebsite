// ===============================
// CTASection.jsx
// Ready to Secure Your Future?
// ===============================

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-semibold text-brandAccent md:text-4xl"
        >
          Ready to Secure Your Future?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-lg text-white/80"
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
            className="inline-flex items-center justify-center rounded-lg bg-brandAccent hover:bg-brandGold px-8 py-3 text-sm font-medium text-slate-900 transition "
          >
            Schedule a Consultation Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
