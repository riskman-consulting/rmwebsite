import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Rocket, Zap, Users } from 'lucide-react';

const ValuePropositionSection = () => {
  const [activeTab, setActiveTab] = useState('defensive');

  const valueData = {
    defensive: {
      subtitle: "Protect & Preserve",
      pillars: [
        {
          title: "Risk Mitigation",
          icon: <ShieldCheck className="w-6 h-6" />,
          points: ["Regulatory Compliance", "Climate Risk", "Supply Resilience", "Crisis Readiness"]
        },
        {
          title: "Operational Excellence",
          icon: <Zap className="w-6 h-6" />,
          points: ["Cost Reduction", "Waste Control", "ESG Data Quality", "Procurement"]
        }
      ]
    },
    offensive: {
      subtitle: "Innovate & Grow",
      pillars: [
        {
          title: "Strategic Growth",
          icon: <Rocket className="w-6 h-6" />,
          points: ["Green Markets", "Product Innovation", "Brand Premium", "M&A Synergy"]
        },
        {
          title: "Stakeholder Value",
          icon: <Users className="w-6 h-6" />,
          points: ["Lower Capital Cost", "Talent Magnet", "Investor Trust", "Social License"]
        }
      ]
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[11px] tracking-[0.35em] uppercase text-blue-400 font-black">
            Impact Framework
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase">
            Driving Enterprise Value
          </h2>
          <p className="mt-4 text-white/60 text-sm">
            Dual-track ESG value creation engine.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1">
            {Object.keys(valueData).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full transition
                  ${activeTab === tab ? "bg-blue-600 text-white" : "text-white/50 hover:text-white"}`}
              >
                {valueData[tab].subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {valueData[activeTab].pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    {pillar.icon}
                  </div>
                  <h3 className="font-black uppercase text-lg">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {pillar.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Strip */}
        <div className="mt-14 flex flex-wrap justify-between gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs uppercase tracking-wider">
          <span className="font-bold text-white/80">
            Protect Today • Grow Tomorrow
          </span>
          <div className="flex gap-3 text-blue-400 font-bold">
            <span>ROI Driven</span>
            <span>Impact Scalable</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;