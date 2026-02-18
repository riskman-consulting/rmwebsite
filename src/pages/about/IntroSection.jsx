import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";

const IntroductionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  const stats = [
    { icon: Award, value: "100+", label: "Success Stories" },
    { icon: Users, value: "50+", label: "Expert Team" },
    { icon: TrendingUp, value: "15+", label: "Years Excellence" }
  ];

  return (
    <div className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      {/* ================= ABOUT SECTION ================= */}
      <section id="introduction" className="relative py-4 lg:pb-2 lg:pt-12 isolate">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:px-20 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div {...fadeInUp} className="lg:col-span-6">
            <span className="inline-block px-4 py-1 mb-8 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
              About RiskMan
            </span>

            {/* H1 - 32px (text-[32px]) */}
            <h2 className="mb-8 text-[32px] font-bold leading-tight text-brandDark dark:text-white">
              <span className="font-serif italic font-medium text-brandGold">
                Who
              </span>{" "}
              We Are
            </h2>

            <div className="max-w-xl space-y-6 text-base font-medium leading-relaxed text-brandDark/70 dark:text-white/70">
              <p>
                At RiskMan, we replace traditional consulting with{" "}
                <strong className="font-bold text-brandDark dark:text-white">(Professionals with entrepreneurship)</strong>.
                Our experienced team delivers customized, high-impact solutions
                designed for the complexities of global enterprises.
              </p>

              <p>
                Beyond strategy, we build long-term resilience—ensuring every
                engagement creates measurable, enduring value for stakeholders.
              </p>
            </div>

            {/* GLASS QUOTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 mt-10 border shadow-xl lg:p-8 rounded-2xl bg-white/10 dark:bg-brandNavy/30 backdrop-blur-xl border-brandGold/30 dark:border-brandAccent/30"
            >
              <div className="absolute top-0 left-0 w-1 h-16 rounded-r-full bg-brandGold" />
              <p className="text-sm italic font-semibold leading-snug lg:text-xl text-brandDark dark:text-white/90">
                "RiskMan is the trusted partner in your sustainable growth journey."
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6"
          >
            {/* Soft Background Glows */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-brandGold/20 blur-[140px]" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-brandPrimary/10 blur-[140px]" />

            {/* Image Container */}
            <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-brandGold/20 dark:border-brandAccent/20 group aspect-[16/10]">
              <img
                src="/images/Hero3.webp"
                alt="About RiskMan"
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/60 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;