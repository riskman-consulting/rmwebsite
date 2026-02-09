import React from 'react';
import { motion } from 'framer-motion';
import rbiaRiskAdvisoryImage from "../../assets/images/rbia/rbia-risk-advisory.png";

export default function RbiaRiskAdvisorySection() {
  return (
    <section className="relative px-4 overflow-hidden py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brandPrimary/5 via-transparent to-brandAccent/5 dark:from-brandPrimary/10 dark:to-brandAccent/5" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="absolute left-[-10%] top-1/4 w-[40%] h-[40%] bg-brandPrimary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* HEADER - More compact margin */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-brandAccent/10 text-brandAccent border border-brandAccent/20"
          >
            Core Service
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl font-heading text-brandDark dark:text-white">
            Risk-Based Internal Audit <br className="hidden md:block" /> 
            <span className="text-brandPrimary dark:text-brandAccent">(RBIA)</span> under Risk Advisory
          </h2>

          <div className="w-24 h-1.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-brandDark/80 dark:text-brandLight/80">
            We act as a value-adding partner to management by protecting revenue, strengthening internal controls, and ensuring rigorous statutory compliance through practical, risk-based insights.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded bg-brandPrimary text-white dark:bg-brandPrimary/20 dark:text-brandAccent">
              Methodology
            </div>

            <h3 className="text-3xl font-bold leading-tight md:text-4xl font-heading text-brandDark dark:text-white">
              Proven ‘Risk-Based’ <br /> Internal Audit Framework
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-brandDark/70 dark:text-brandLight/70">
              Our methodology is field-tested and derived from global best practices, consistent with the <span className="font-semibold text-brandPrimary dark:text-brandAccent">International Standards for the Professional Practice of Internal Auditing</span>.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Aligned with International Auditing Standards",
                "Supported by global knowledge databases",
                "Customized to specific organizational risk profiles"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-brandDark/80 dark:text-brandLight/90">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brandAccent" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brandPrimary/20 to-brandAccent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative p-2 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl shadow-2xl overflow-hidden">
              {/* Top Decorative bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brandPrimary via-brandAccent to-brandGold" />
              
              <img
                src={rbiaRiskAdvisoryImage}
                alt="Risk-Based Internal Audit Framework"
                className="w-full h-auto rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Floating Overlay Element for "Premium" look */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 dark:bg-brandDark/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brandPrimary dark:text-brandAccent">
                  RBIA Standard v2.0
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}