const capabilities = [
  { icon: "🌍", text: "Global Delivery" },
  { icon: "🏭", text: "Industry Expertise" },
  { icon: "💻", text: "Tech Enabled" }
];
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ESGStakeholderEcosystem = () => {
  const [activeStakeholder, setActiveStakeholder] = useState('investors');

  const stakeholders = {
    investors: {
      title: "INVESTORS",
      icon: "🏦",
      color: "#004080",
      position: { cx: 300, cy: 80 },
      subtitle: "Capital Access",
      description: "ESG performance directly influences investment decisions, access to capital, and long-term enterprise valuation.",
      impact: ["ESG Ratings", "Capital Flow", "Cost of Capital"]
    },
    regulators: {
      title: "REGULATORS",
      icon: "📜",
      color: "#FFC000",
      position: { cx: 95, cy: 145 },
      subtitle: "Compliance",
      description: "Mandatory disclosures through global frameworks like CSRD and BRSR carry significant financial and legal consequences.",
      impact: ["Reporting Standards", "Legal Compliance", "Audit Ready"]
    },
    customers: {
      title: "CUSTOMERS",
      icon: "🛒",
      color: "#003366",
      position: { cx: 505, cy: 145 },
      subtitle: "Procurement",
      description: "B2B and B2C customers prioritize sustainable suppliers, cascading ESG requirements throughout global supply chains.",
      impact: ["Vendor Selection", "Brand Loyalty", "Sustainable Sourcing"]
    },
    employees: {
      title: "EMPLOYEES",
      icon: "👥",
      color: "#001F3F",
      position: { cx: 120, cy: 470 },
      subtitle: "Talent & Culture",
      description: "Strong ESG profiles enhance talent attraction, employee engagement, and long-term organizational productivity.",
      impact: ["Retention Rates", "Purpose-Driven Culture", "Engagement"]
    },
    society: {
      title: "SOCIETY",
      icon: "🌍",
      color: "#FFB800",
      position: { cx: 480, cy: 470 },
      subtitle: "License to Operate",
      description: "Communities and civil society grant the social license to operate based on transparency and environmental impact.",
      impact: ["Social License", "Community Trust", "Brand Reputation"]
    }
  };

  const getConnectionPath = (pos) => {
    const center = { x: 300, y: 290 };
    return `M${center.x},${center.y} Q${(center.x + pos.cx) / 2},${(center.y + pos.cy) / 2 - 20} ${pos.cx},${pos.cy}`;
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden flex items-center min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-black tracking-[4px] text-blue-700 dark:text-amber-500 uppercase mb-4 block">
            Integrated Excellence
          </motion.span>
          <h2 className="text-slate-900 dark:text-white font-black text-4xl lg:text-6xl uppercase tracking-tighter">
            STAKEHOLDER ECOSYSTEM
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: INTERACTIVE DIAGRAM */}
          <div className="lg:w-1/2 relative h-[500px] w-full max-w-[500px] flex items-center justify-center">
            <svg viewBox="0 0 600 560" className="w-full h-auto overflow-visible relative z-10">
              <defs>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Bidirectional Flow Paths */}
              {Object.keys(stakeholders).map(key => (
                <g key={`flow-${key}`}>
                  <path
                    d={getConnectionPath(stakeholders[key].position)}
                    fill="none"
                    stroke={stakeholders[key].color}
                    strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                    strokeDasharray="10, 15"
                    className="transition-all duration-500 animate-flow-out opacity-20"
                    style={{ opacity: activeStakeholder === key ? 0.8 : 0.1 }}
                  />
                  <path
                    d={getConnectionPath(stakeholders[key].position)}
                    fill="none"
                    stroke={stakeholders[key].color}
                    strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                    strokeDasharray="5, 12"
                    className="transition-all duration-500 animate-flow-in opacity-20"
                    style={{ opacity: activeStakeholder === key ? 0.8 : 0.1 }}
                  />
                </g>
              ))}

              {/* Anchored Organization Hub */}
              <g className="pointer-events-none">
                <circle cx="300" cy="290" r="75" fill="#001F3F" className="shadow-2xl" />
                <text x="300" y="278" textAnchor="middle" dominantBaseline="middle" className="fill-[#FFB800] text-[9px] font-black tracking-widest">RISKMAN</text>
                <text x="300" y="302" textAnchor="middle" dominantBaseline="middle" className="fill-white text-sm font-black uppercase tracking-tight">ORGANIZATION</text>
                <text x="300" y="320" textAnchor="middle" dominantBaseline="middle" className="fill-white/30 text-[7px] font-bold tracking-[3px]">ESG INTEGRATION</text>
              </g>

              {/* Interactive Stakeholder Nodes */}
              {Object.entries(stakeholders).map(([key, data]) => (
                <g 
                  key={key}
                  onMouseEnter={() => setActiveStakeholder(key)}
                  className="cursor-pointer group"
                >
                  <motion.circle 
                    cx={data.position.cx} cy={data.position.cy} r="48" 
                    fill={data.color}
                    animate={{ scale: activeStakeholder === key ? 1.12 : 1 }}
                    style={{ filter: activeStakeholder === key ? 'url(#nodeGlow)' : 'none' }}
                    className="transition-all duration-300"
                  />
                  <text x={data.position.cx} y={data.position.cy - 12} textAnchor="middle" dominantBaseline="middle" className="text-3xl pointer-events-none">{data.icon}</text>
                  <text x={data.position.cx} y={data.position.cy + 15} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[9px] font-black uppercase tracking-tighter pointer-events-none">{data.title}</text>
                  <text x={data.position.cx} y={data.position.cy + 28} textAnchor="middle" dominantBaseline="middle" className="fill-white/70 text-[6px] font-bold uppercase tracking-widest pointer-events-none">{data.subtitle}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* RIGHT SIDE: DYNAMIC COMMAND PANEL */}
          <div className="lg:w-1/2 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStakeholder}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-[50px] p-10 lg:p-14 border border-slate-200 dark:border-slate-800 shadow-2xl min-h-[500px] flex flex-col justify-center relative overflow-hidden"
              >
                {/* Accent Highlight */}
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: stakeholders[activeStakeholder].color }} />
                
                <div className="flex items-center gap-8 mb-10">
                  <div className="text-7xl p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-inner">
                    {stakeholders[activeStakeholder].icon}
                  </div>
                  <div>
                    <span className="text-blue-700 dark:text-amber-500 font-black text-sm uppercase tracking-[4px]">
                      {stakeholders[activeStakeholder].subtitle}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-black text-[#001F3F] dark:text-white uppercase leading-none mt-2">
                      {stakeholders[activeStakeholder].title}
                    </h3>
                  </div>
                </div>

                <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 italic mb-12 border-l-8 border-amber-400 pl-8 leading-relaxed font-sans">
                  "{stakeholders[activeStakeholder].description}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stakeholders[activeStakeholder].impact.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-[11px] font-black text-[#001F3F] dark:text-white uppercase tracking-tight">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes flowOut { from { stroke-dashoffset: 50; } to { stroke-dashoffset: 0; } }
        @keyframes flowIn { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 50; } }
        .animate-flow-out { animation: flowOut 3s linear infinite; }
        .animate-flow-in { animation: flowIn 5s linear infinite; }
      `}</style>
    </section>
  );
};

export default ESGStakeholderEcosystem;