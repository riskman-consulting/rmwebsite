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
    <section className="relative px-4 overflow-hidden py-20 bg-bgLight dark:bg-bgDark">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-10 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/rbia-strategy-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bgLight via-bgLight/80 to-bgLight dark:from-bgDark dark:via-bgDark/80 dark:to-bgDark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#brandPrimary_0%,transparent_70%)] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandPrimary/20 dark:text-brandAccent border border-brandPrimary/20"
          >
            Strategic Framework
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-brandDark dark:text-white mb-6"
          >
            Risk-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Internal Audit</span> Plan
          </motion.h2>
          
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-brandAccent to-brandGold mb-6" />
          
          <p className="max-w-2xl text-lg text-brandDark/70 dark:text-brandLight/70 leading-relaxed">
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
              className="group relative p-8 bg-white/50 dark:bg-surfaceDark/50 backdrop-blur-md border border-borderLight dark:border-borderDark rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold group-hover:w-full transition-all duration-500 ease-in-out" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-tighter font-bold text-brandAccent/80">
                    {point.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-brandDark dark:text-white leading-tight">
                    {point.title}
                  </h3>
                </div>
                <span className="text-5xl font-black opacity-10 group-hover:opacity-30 transition-opacity duration-300 italic">
                  0{index + 1}
                </span>
              </div>

              <p className="text-brandDark/80 dark:text-brandLight/80 leading-relaxed mb-6">
                {point.text}
              </p>

              {/* Minimalistic footer icon/element */}
              <div className="pt-6 border-t border-borderLight/50 dark:border-borderDark/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brandAccent" />
                <span className="text-xs font-medium text-brandDark/50 dark:text-brandLight/50 uppercase tracking-widest">
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