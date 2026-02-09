import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Rocket, Zap, Users, ArrowRight } from 'lucide-react';

const ValuePropositionSection = () => {
  const [activeTab, setActiveTab] = useState('defensive');

  const valueData = {
    defensive: {
      title: "Defensive Value Creation",
      subtitle: "Protect & Preserve",
      description: "Shielding enterprise value from regulatory, reputational, and operational threats.",
      color: "brandPrimary",
      pillars: [
        {
          title: "Risk Mitigation",
          icon: <ShieldCheck className="w-8 h-8" />,
          points: ["Regulatory Compliance Assurance", "Climate Risk Management", "Supply Chain Resilience", "Crisis Management"]
        },
        {
          title: "Operational Excellence",
          icon: <Zap className="w-8 h-8" />,
          points: ["Resource Cost Reduction", "Waste Minimization", "ESG Data Quality", "Sustainable Procurement"]
        }
      ]
    },
    offensive: {
      title: "Offensive Value Creation",
      subtitle: "Innovate & Grow",
      description: "Leveraging ESG as a strategic lever to unlock new markets and drive innovation.",
      color: "brandAccent",
      pillars: [
        {
          title: "Strategic Growth",
          icon: <Rocket className="w-8 h-8" />,
          points: ["Access to Green Markets", "Sustainable Product Innovation", "Premium Brand Positioning", "M&A Synergy"]
        },
        {
          title: "Stakeholder Value",
          icon: <Users className="w-8 h-8" />,
          points: ["Lower Cost of Capital", "Talent Attraction", "Investor Transparency", "Social License to Operate"]
        }
      ]
    }
  };

  return (
    <section className="relative py-24 bg-bgLight dark:bg-bgDark overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none transition-colors duration-1000 ${activeTab === 'defensive' ? 'bg-blue-500/20' : 'bg-orange-500/20'} blur-[120px]`} />

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 mb-6 text-xs font-black tracking-[0.3em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary"
          >
            Impact Framework
          </motion.span>
          <h2 className="mb-6 text-4xl font-black md:text-6xl text-brandDark dark:text-white uppercase">
            Driving <span className="text-brandPrimary">Enterprise Value</span>
          </h2>
          <p className="text-lg text-brandDark/60 dark:text-white/60">
            RiskMan's ESG methodology creates a dual-track engine for sustainable growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="relative flex p-1.5 bg-white dark:bg-white/5 backdrop-blur-xl border border-brandDark/10 dark:border-white/10 rounded-full shadow-2xl">
            {Object.keys(valueData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                  activeTab === tab ? 'text-white' : 'text-brandDark/50 dark:text-white/50'
                }`}
              >
                {valueData[tab].subtitle}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 z-[-1] bg-brandDark dark:bg-brandPrimary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {valueData[activeTab].pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative p-10 bg-white dark:bg-white/5 border border-brandDark/5 dark:border-white/10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 transition-transform duration-500 rounded-2xl bg-brandPrimary/10 text-brandPrimary group-hover:scale-110 group-hover:rotate-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase text-brandDark dark:text-white">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brandPrimary transition-all group-hover/item:scale-150" />
                      <span className="text-base font-medium transition-colors text-brandDark/70 dark:text-white/70 group-hover/item:text-brandDark dark:group-hover/item:text-white">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Corner Accent */}
                <ArrowRight className="absolute transition-all opacity-0 bottom-8 right-8 text-brandPrimary group-hover:opacity-100 group-hover:translate-x-2" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Simplified Footer Bar */}
        <motion.div 
          layout
          className="mt-16 p-6 bg-brandDark rounded-[2rem] border border-white/10 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl">💡</div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Strategic Synthesis: <span className="text-white/50 font-medium normal-case tracking-normal">Protecting today, growing tomorrow.</span>
            </p>
          </div>
          <div className="flex gap-3">
            {['ROI Driven', 'Impact Scalable'].map(tag => (
              <span key={tag} className="px-4 py-2 text-[10px] font-black text-brandPrimary uppercase tracking-widest bg-white/5 rounded-lg border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;