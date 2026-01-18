
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
} from "react-icons/fa";


export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-brandDark dark:bg-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl font-bold text-white md:text-6xl font-heading">
            Partner with RiskMan Consulting for{" "}
            <span className="text-brandAccent">Unmatched Excellence</span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80 md:text-xl">
            Choose RiskMan Consulting for unparalleled expertise, innovative solutions, and a client-centric approach. Our proven track record in delivering tailored risk management, compliance, and cybersecurity services empowers businesses across industries to achieve resilience, efficiency, and sustainable growth. With a commitment to excellence and cutting-edge strategies, we transform challenges into opportunities, ensuring your success in a dynamic world.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Expert Guidance", "Proven Results", "24/7 Support"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#FFC000",
                }}
                className="px-6 py-3 text-sm font-semibold text-white border rounded-full bg-white/5 backdrop-blur-sm border-white/20"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-brandGold hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 border rounded-full border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};