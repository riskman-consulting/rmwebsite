import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const PHASES = [
  {
    step: 1,
    title: "Scope",
    description: `Conduct interviews with process owners to understand current "as-is" processes and identify key concern areas. Document processes and validate understanding while preparing comprehensive audit work programs for all specific areas.`,
    color: "from-brandPrimary to-brandNavy",
    accent: "#004080",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    )
  },
  {
    step: 2,
    title: "Analyze",
    description: "Review processes to identify and source risks, prioritizing them based on likelihood and potential business impact. Evaluate control design for efficiency and effectiveness, benchmarking against leading practices.",
    color: "from-brandNavy to-brandPrimary",
    accent: "#003366",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    step: 3,
    title: "Test & Recommend",
    description: "Determine testing approaches and sample sizes, utilizing data analytics tools for large and complex data sets. Articulate exceptions and deficiencies, quantifying business impact to prioritize critical gaps.",
    color: "from-brandPrimary to-brandAccent",
    accent: "#FFC000",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    step: 4,
    title: "Design & Implement",
    description: "Formulate remediation action plans and finalize the content of recommendations for senior management discussion. Support recommendations with clear findings and conclusions, ensuring management acceptance.",
    color: "from-brandAccent to-brandGold",
    accent: "#FFB800",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    step: 5,
    title: "Sustain",
    description: "Monitor the implementation of recommendations and follow up on action points from previous reports. Ensure long-term value by maintaining a continuous focus on process improvement and business benefits.",
    color: "from-brandGold to-brandPrimary",
    accent: "#FFB800",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

export default function CustomizedApproachSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 240;

  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section className="relative px-6 overflow-hidden py-14 bg-bgLight dark:bg-bgDark md:py-20 lg:py-24">
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#004080_1.5px,transparent_1.5px)] [background-size:60px_60px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto lg:px-20 max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto mb-20 text-center lg:mb-32">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border border-brandPrimary/20"
          >
            Operational Cycle
          </motion.span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl text-brandDark dark:text-white font-heading">
            Our <span className="italic text-brandPrimary">Customized</span> Approach
          </h2>
          <p className="text-lg font-light leading-relaxed text-slate-500 dark:text-slate-400">
            A tailored methodology to evaluate risks and enhance operational effectiveness across your organization's unique landscape.
          </p>
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT: INTERACTIVE CIRCLE */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              <circle 
                cx="50%" cy="50%" r={radius} 
                className="stroke-slate-200 dark:stroke-slate-800" 
                fill="none" strokeWidth="1" 
              />
              <motion.circle
                cx="50%" cy="50%" r={radius}
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeIndex + 1) / PHASES.length }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004080" />
                  <stop offset="100%" stopColor="#FFC000" />
                </linearGradient>
              </defs>
            </svg>

            <LayoutGroup>
              {PHASES.map((phase, index) => {
                const pos = getPosition(index, PHASES.length);
                const isActive = activeIndex === index;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="absolute z-20 group focus:outline-none"
                    style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <motion.div 
                          layoutId="pulse"
                          className={`absolute -inset-4 rounded-full bg-gradient-to-br ${phase.color} opacity-20 blur-xl`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      )}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 shadow-lg 
                        ${isActive ? `bg-gradient-to-br ${phase.color} border-white text-white scale-110` 
                                  : "bg-white dark:bg-surfaceDark border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-brandPrimary"}`}
                      >
                        {phase.icon}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </LayoutGroup>

            {/* CENTER HUB */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center justify-center bg-white border rounded-full shadow-2xl w-44 h-44 dark:bg-surfaceDark border-slate-100 dark:border-slate-800 backdrop-blur-sm">
                <span className="text-5xl font-black text-brandPrimary dark:text-brandAccent">0{PHASES[activeIndex].step}</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Phase</span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT PANEL */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative p-8 lg:p-14 bg-white dark:bg-surfaceDark border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                {/* Background Large Number */}
                <div className="absolute -right-4 -top-10 text-[12rem] font-black text-slate-50 dark:text-white/[0.02] leading-none select-none pointer-events-none">
                  {PHASES[activeIndex].step}
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${PHASES[activeIndex].color} text-white mb-8 text-[10px] font-bold uppercase tracking-widest`}>
                    Step 0{PHASES[activeIndex].step}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl text-brandDark dark:text-white">
                    {PHASES[activeIndex].title}
                  </h3>
                  <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    {PHASES[activeIndex].description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <button className="px-8 py-4 font-bold text-white transition-transform bg-brandDark dark:bg-brandAccent dark:text-brandDark rounded-xl hover:-translate-y-1">
                      Detailed Analysis
                    </button>
                    <button 
                      onClick={() => setActiveIndex((activeIndex + 1) % PHASES.length)}
                      className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase group text-brandPrimary dark:text-brandAccent"
                    >
                      Next Phase <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-2 gap-6 mt-20 lg:grid-cols-4">
          {[
            { label: "Efficiency", value: "+42%" },
            { label: "Gaps Found", value: "100%" },
            { label: "Client ROI", value: "4.8x" },
            { label: "Governance", value: "AAA" }
          ].map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: i * 0.1 }}
              className="p-8 text-center bg-white border rounded-3xl dark:bg-surfaceDark border-slate-100 dark:border-slate-800"
            >
              <div className="mb-1 text-3xl font-bold text-brandPrimary dark:text-brandAccent">{m.value}</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}