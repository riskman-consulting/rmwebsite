import React from 'react';
import { motion } from 'framer-motion';

const strategyPoints = [
  {
    title: "Conventional vs. Modern",
    subtitle: "Strategic Evolution",
    text: "Modern RBIA transcends narrow financial compliance. It proactively addresses emerging complexities like cybersecurity and ESG, ensuring audit value increases while operational costs stabilize.",
  },
  {
    title: "Key Drivers for Change",
    subtitle: "Market Adaptation",
    text: "Rising governance demands and AI-driven risks necessitate a transition to RBIA. This shift ensures proactive management of modern threats while securing organizational digital infrastructure.",
  },
  {
    title: "Value vs. Cost Dynamics",
    subtitle: "ROI Optimization",
    text: "As audit services mature, integrating frameworks with business objectives scales coverage. This evolution transforms internal audits from a cost center into a high-return strategic asset.",
  },
];

export default function StrategyPlanSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-20 dark:opacity-10"
          style={{ backgroundImage: "url('/images/rbia-strategy-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bgLight via-bgLight/80 to-bgLight dark:from-bgDark dark:via-bgDark/80 dark:to-bgDark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#brandPrimary_0%,transparent_70%)] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandPrimary/20 dark:text-brandAccent border-brandPrimary/20"
          >
            Strategic Framework
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-5xl font-heading text-brandDark dark:text-white"
          >
            Risk-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Internal Audit</span> Plan
          </motion.h2>
          
          <div className="w-24 h-1 mb-6 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />
          
          <p className="max-w-2xl text-lg leading-relaxed text-brandDark/70 dark:text-brandLight/70">
            Transitioning to RBIA drives deeper organizational value through proactive risk management and strategic alignment.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {strategyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative p-8 overflow-hidden border shadow-xl group bg-white/50 dark:bg-surfaceDark/50 backdrop-blur-md border-borderLight dark:border-borderDark rounded-3xl"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold group-hover:w-full transition-all duration-500 ease-in-out" />
              
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-tighter font-bold text-brandAccent/80">
                    {point.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-brandDark dark:text-white">
                    {point.title}
                  </h3>
                </div>
                <span className="text-5xl italic font-black transition-opacity duration-300 opacity-10 group-hover:opacity-30">
                  0{index + 1}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-brandDark/80 dark:text-brandLight/80">
                {point.text}
              </p>

              {/* Minimalistic footer icon/element */}
              <div className="flex items-center gap-2 pt-6 border-t border-borderLight/50 dark:border-borderDark/50">
                <div className="w-2 h-2 rounded-full bg-brandAccent" />
                <span className="text-xs font-medium tracking-widest uppercase text-brandDark/50 dark:text-brandLight/50">
                  Efficiency Phase
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}