import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MultiStakeholderImperative = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const forces = [
    { icon: "💰", title: "Investor Expectations", desc: "Global institutional investors integrate ESG into trillion-dollar decisions.", color: "border-brandGold" },
    { icon: "📜", title: "Regulatory Acceleration", desc: "Global mandates like CSRD, BRSR, and SEC are now business law.", color: "border-brandAccent" },
    { icon: "🛒", title: "Customer Preferences", desc: "B2B/B2C procurement now prioritizes sustainable supply chains.", color: "border-brandPrimary" },
    { icon: "👥", title: "Talent & Society", desc: "Top talent chooses employers with genuine impact reporting.", color: "border-brandNavy" }
  ];

  const maturityLevels = [
    { level: 1, title: "Compliance", icon: "📋", color: "bg-slate-500", desc: "Reactive & Ad-Hoc. Limited to basic regulatory requirements." },
    { level: 2, title: "Emerging", icon: "🌱", color: "bg-brandNavy", desc: "Organization recognizes ESG importance; initial policies forming." },
    { level: 3, title: "Strategic", icon: "⚙️", color: "bg-brandPrimary", desc: "Systematic integration into business strategy and governance." },
    { level: 4, title: "Optimized", icon: "🚀", color: "bg-brandAccent", desc: "ESG excellence drives competitive advantage across all functions." },
    { level: 5, title: "Transformative", icon: "💎", color: "bg-brandGold", desc: "Industry pioneer setting new standards and sustainable models." }
  ];

  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">
        
        {/* --- PART 1: THE NEXUS (FORCES) --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-heading text-brandDark dark:text-brandLight uppercase tracking-tighter">
            The Market <span className="text-brandAccent italic">Nexus</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
          {forces.map((force, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 bg-surfaceLight dark:bg-surfaceDark border-b-4 ${force.color} rounded-2xl shadow-xl shadow-black/5`}
            >
              <div className="text-3xl mb-4">{force.icon}</div>
              <h4 className="text-sm font-black text-brandDark dark:text-brandLight uppercase mb-2 tracking-tight">{force.title}</h4>
              <p className="text-xs text-brandDark/60 dark:text-brandLight/60 leading-relaxed">{force.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- PART 2: THE MODERN MATURITY WAVE --- */}
        <div className="bg-surfaceLight dark:bg-surfaceDark rounded-[3rem] p-8 md:p-12 border border-borderLight dark:border-borderDark shadow-2xl relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/10 blur-[100px] -z-0" />

          <div className="relative z-10">
            <div className="mb-12">
              <h3 className="text-2xl font-black font-heading text-brandDark dark:text-brandLight uppercase tracking-widest">
                ESG Maturity <span className="text-brandGold">Pathfinder</span>
              </h3>
              <p className="text-brandDark/50 dark:text-brandLight/50 text-sm font-medium">Click a phase to explore the transformation</p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="relative flex justify-between items-center mb-16 px-4">
              {/* Connector Line */}
              <div className="absolute h-1 bg-borderLight dark:bg-borderDark w-[90%] left-[5%] z-0" />
              <motion.div 
                className="absolute h-1 bg-brandAccent z-0"
                animate={{ width: `${(selectedLevel - 1) * 22.5}%` }}
                initial={{ width: 0 }}
              />

              {maturityLevels.map((m) => (
                <button
                  key={m.level}
                  onClick={() => setSelectedLevel(m.level)}
                  className="relative z-10 group"
                >
                  <motion.div 
                    animate={{ 
                      scale: selectedLevel === m.level ? 1.3 : 1,
                      backgroundColor: selectedLevel >= m.level ? '#FFC000' : '#003366'
                    }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-xl shadow-lg border-4 border-surfaceLight dark:border-surfaceDark transition-all"
                  >
                    {m.icon}
                  </motion.div>
                  <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-tighter whitespace-nowrap transition-colors ${selectedLevel === m.level ? 'text-brandAccent' : 'text-brandDark/40 dark:text-brandLight/40'}`}>
                    Level {m.level}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLevel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-8 items-center bg-bgLight/50 dark:bg-bgDark/50 p-8 rounded-[2rem]"
              >
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[2px] mb-4">
                    Stage {selectedLevel} Activation
                  </div>
                  <h4 className="text-4xl font-black font-heading text-brandDark dark:text-brandLight uppercase mb-4 tracking-tighter">
                    {maturityLevels[selectedLevel - 1].title}
                  </h4>
                  <p className="text-lg text-brandDark/70 dark:text-brandLight/70 italic leading-relaxed">
                    "{maturityLevels[selectedLevel - 1].desc}"
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                   <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-brandAccent/20 rounded-full animate-ping" />
                      <div className="relative w-full h-full bg-gradient-to-br from-brandNavy to-brandDark rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-brandAccent/50">
                        {maturityLevels[selectedLevel - 1].icon}
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* NEW UNIQUE SECTION: THE "SO WHAT?" CARD */}
        <div className="mt-12 p-8 bg-brandDark rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-brandGold/20">
          <div>
            <h4 className="text-brandGold font-black text-xl uppercase tracking-widest">Ready to move to Level 5?</h4>
            <p className="text-brandLight/60 text-sm">Our framework helps you bridge the gap between compliance and true value creation.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-brandAccent text-brandDark font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-xl">
            Download Roadmap →
          </button>
        </div>

      </div>
    </section>
  );
};

export default MultiStakeholderImperative;