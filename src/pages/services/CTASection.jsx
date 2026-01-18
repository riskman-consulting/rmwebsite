import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-500">
      
      {/* Background Subtle Pattern - Adaptive Opacity */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Floating Background Glows - Using your Brand Colors */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandAccent/20 dark:bg-brandAccent/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brandPrimary/20 dark:bg-brandPrimary/10 blur-[120px] rounded-full" />

      {/* Main Content Wrapper */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Tag - High Contrast */}
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full border border-brandPrimary/20 dark:border-white/10 bg-brandPrimary/5 dark:bg-white/5 text-brandPrimary dark:text-brandAccent">
            Ready to Evolve?
          </div>

          {/* Title: Fixed text color (Dark mode: White, Light mode: Dark Navy) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brandDark dark:text-white leading-[1.15] mb-8 font-heading">
            Partner with RiskMan for <br className="hidden md:block" />
            <span className="text-brandPrimary dark:text-brandAccent italic">Unmatched Excellence</span>
          </h2>

          {/* Description: Adaptive Text Color */}
          <p className="max-w-3xl mx-auto text-sm md:text-lg leading-relaxed text-brandNavy/70 dark:text-white/60 mb-12">
            Empowering global enterprises with tailored risk management, compliance, and cybersecurity services. 
            We transform operational complexity into sustainable growth and resilience.
          </p>

          {/* Feature Pills: Clean Glassmorphism */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
            {["Expert Guidance", "Proven Results", "24/7 Support"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase text-brandDark dark:text-white/90 border border-brandPrimary/10 dark:border-white/10 rounded-full bg-brandPrimary/5 dark:bg-white/5 backdrop-blur-md hover:border-brandAccent transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons: Stack on mobile, Row on sm+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark hover:bg-brandDark dark:hover:bg-brandGold hover:scale-105 shadow-xl shadow-brandPrimary/20 dark:shadow-brandAccent/10"
            >
              Get Started
              <FaArrowRight className="text-[10px]" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-brandDark dark:text-white transition-all duration-300 border border-brandDark/20 dark:border-white/20 rounded-full bg-transparent hover:bg-brandDark/5 dark:hover:bg-white/5 backdrop-blur-md"
            >
              Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};