import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLightbulb,
  FaUserShield,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";

export const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies",
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance Excellence",
      description: "Stay ahead of regulatory requirements and industry standards",
    },
    {
      icon: <FaUserShield />,
      title: "Cybersecurity",
      description: "Advanced threat protection and security frameworks",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Advisory",
      description: "Expert guidance for complex business challenges",
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes",
    },
    {
      icon: <FaShieldAlt />,
      title: "Global Strategy",
      description: "Cross-border compliance and resilience frameworks",
    },
  ];

  return (
    <section className="relative px-8 py-8 md:py-8 lg:pb-16 lg:pt-10 overflow-hidden bg-bgLight dark:bg-[#030712]">
      {/* Background Dots Pattern - Hidden on very small screens for performance */}
      <div className="absolute inset-0 opacity-[0.1] hidden sm:block" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #FFC000 0.5px, transparent 0)`, backgroundSize: '32px 32px' }} />

      {/* Main Wrapper: Responsive Padding (px-4 for mobile, lg:px-12 for desktop) */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* --- HEADER: Responsive Layout (Stack on mobile, Row on md+) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16 border-b border-borderLight dark:border-white/5 pb-10 md:pb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-brandAccent" />
              <span className="text-brandAccent font-bold text-[10px] md:text-[11px] tracking-widest uppercase">
                Why Choose Us
              </span>
            </div>
            {/* Responsive Heading: 3xl on mobile, 4xl on tablet, 5xl on desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brandDark dark:text-white leading-tight font-heading">
              Proven <span className="text-brandPrimary dark:text-brandAccent">Capabilities</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-sm md:text-base text-brandNavy/70 dark:text-slate-400 leading-relaxed">
              Industry-leading expertise backed by proven methodologies and cutting-edge technology for the global enterprise.
            </p>
          </motion.div>
        </div>

        {/* --- GRID: Fully Responsive (1 col mobile, 2 col tablet, 3 col desktop) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative h-full p-6 md:p-8 overflow-hidden bg-white dark:bg-white/[0.02] border border-borderLight dark:border-white/5 rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-brandAccent/40 sm:group-hover:-translate-y-1 group-hover:shadow-xl group-hover:bg-white/[0.05]">
                
                {/* Icon Container: Slightly smaller on mobile */}
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-5 md:mb-6 rounded-xl bg-brandPrimary/5 dark:bg-brandAccent/10 border border-brandPrimary/10 dark:border-brandAccent/20 text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-all duration-500">
                  <div className="text-xl md:text-2xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-brandDark dark:text-white tracking-tight group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brandNavy/60 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Index: Faded on mobile for cleaner look */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-[9px] md:text-[10px] text-brandNavy/10 dark:text-white/5">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};