import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ESGStakeholderEcosystem = () => {
  const [activeStakeholder, setActiveStakeholder] = useState('investors');

  const stakeholders = {
    investors: {
      title: "INVESTORS",
      icon: "🏦",
      color: "#004080", // brandPrimary
      position: { cx: 300, cy: 75 },
      subtitle: "Capital Access",
      description: "ESG performance directly influences investment decisions, access to capital, and long-term enterprise valuation.",
      impact: ["ESG Ratings", "Capital Flow", "Cost of Capital"]
    },
    regulators: {
      title: "REGULATORS",
      icon: "📜",
      color: "#FFC000", // brandAccent
      position: { cx: 85, cy: 160 },
      subtitle: "Compliance",
      description: "Mandatory disclosures through global frameworks like CSRD and BRSR carry significant financial and legal consequences.",
      impact: ["Reporting Standards", "Legal Compliance", "Audit Ready"]
    },
    customers: {
      title: "CUSTOMERS",
      icon: "🛒",
      color: "#003366", // brandNavy
      position: { cx: 515, cy: 160 },
      subtitle: "Procurement",
      description: "B2B and B2C customers prioritize sustainable suppliers, cascading ESG requirements throughout global supply chains.",
      impact: ["Vendor Selection", "Brand Loyalty", "Sustainable Sourcing"]
    },
    employees: {
      title: "EMPLOYEES",
      icon: "👥",
      color: "#001F3F", // brandDark
      position: { cx: 130, cy: 460 },
      subtitle: "Talent & Culture",
      description: "Strong ESG profiles enhance talent attraction, employee engagement, and long-term organizational productivity.",
      impact: ["Retention Rates", "Purpose-Driven Culture", "Engagement"]
    },
    society: {
      title: "SOCIETY",
      icon: "🌍",
      color: "#FFB800", // brandGold
      position: { cx: 470, cy: 460 },
      subtitle: "License to Operate",
      description: "Communities and civil society grant the social license to operate based on transparency and environmental impact.",
      impact: ["Social License", "Community Trust", "Brand Reputation"]
    }
  };

  const center = { x: 300, y: 290 };

  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark min-h-screen flex items-center overflow-hidden transition-colors duration-500 font-sans">
      <div className="container mx-auto">
        
        {/* Header - Made title smaller as requested */}
        <div className="mb-12 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[4px] text-brandPrimary dark:text-brandGold uppercase block mb-2 font-heading"
          >
            Integrated Excellence
          </motion.span>
          <h2 className="text-3xl lg:text-4xl font-black text-brandDark dark:text-brandLight tracking-tight font-heading leading-tight uppercase">
            STAKEHOLDER <span className="text-brandGold">ECOSYSTEM</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT: SVG WITH BIDIRECTIONAL ANIMATION */}
          <div className="lg:w-3/5 relative flex justify-center items-center">
            <svg viewBox="0 0 600 560" className="w-full h-auto max-w-[550px] overflow-visible">
              <defs>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* BIDIRECTIONAL PATHS */}
              {Object.entries(stakeholders).map(([key, data]) => {
                const isActive = activeStakeholder === key;
                return (
                  <g key={`path-${key}`}>
                    {/* Outward Flow Path (Enterprise -> Stakeholder) */}
                    <path
                      d={`M ${center.x} ${center.y} L ${data.position.cx} ${data.position.cy}`}
                      stroke={isActive ? data.color : "currentColor"}
                      strokeWidth={isActive ? 2 : 1}
                      strokeDasharray="5 8"
                      className={`${isActive ? 'flow-out' : 'text-brandDark/10 dark:text-brandGold/10'}`}
                      fill="none"
                    />
                    {/* Inward Flow Path (Stakeholder -> Enterprise) */}
                    {isActive && (
                      <path
                        d={`M ${data.position.cx} ${data.position.cy} L ${center.x} ${center.y}`}
                        stroke={data.color}
                        strokeWidth={1.5}
                        strokeDasharray="5 8"
                        className="flow-in"
                        fill="none"
                        opacity="0.6"
                      />
                    )}
                  </g>
                );
              })}

              {/* CENTER HUB */}
              <g>
                <circle cx={center.x} cy={center.y} r="75" className="fill-brandDark dark:fill-surfaceDark stroke-brandGold/20 stroke-[4]" />
                <text x={center.x} y={center.y - 12} textAnchor="middle" className="fill-brandGold text-[10px] font-bold tracking-[3px] font-heading uppercase">RISKMAN</text>
                <text x={center.x} y={center.y + 12} textAnchor="middle" className="fill-white text-base font-black font-heading uppercase">ORGANIZATION</text>
                <text x={center.x} y={center.y + 28} textAnchor="middle" className="fill-white/40 text-[8px] font-bold tracking-[2px] uppercase">ESG INTEGRATION</text>
              </g>

              {/* STAKEHOLDER NODES */}
              {Object.entries(stakeholders).map(([key, data]) => (
                <g 
                  key={key} 
                  className="cursor-pointer" 
                  onMouseEnter={() => setActiveStakeholder(key)}
                >
                  <motion.circle
                    cx={data.position.cx}
                    cy={data.position.cy}
                    r="45"
                    fill={activeStakeholder === key ? data.color : '#001A33'}
                    animate={{ scale: activeStakeholder === key ? 1.05 : 1 }}
                    className="transition-colors duration-300 stroke-white/10 stroke-1"
                    style={{ filter: activeStakeholder === key ? 'url(#nodeGlow)' : 'none' }}
                  />
                  <text x={data.position.cx} y={data.position.cy - 10} textAnchor="middle" className="text-2xl">
                    {data.icon}
                  </text>
                  <text x={data.position.cx} y={data.position.cy + 15} textAnchor="middle" className="fill-white text-[10px] font-bold font-heading">
                    {data.title}
                  </text>
                  <text x={data.position.cx} y={data.position.cy + 28} textAnchor="middle" className="fill-white/70 text-[7px] font-semibold tracking-wider">
                    {data.subtitle}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* RIGHT: CONTENT PANEL (Original Text) */}
          <div className="lg:w-2/5 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStakeholder}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-surfaceLight dark:bg-surfaceDark p-8 rounded-3xl border border-borderLight dark:border-borderDark shadow-xl relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1.5" 
                  style={{ backgroundColor: stakeholders[activeStakeholder].color }}
                />

                <div className="flex items-center gap-5 mb-6">
                  <div className="text-5xl p-4 bg-brandLight dark:bg-brandDark rounded-2xl shadow-inner">
                    {stakeholders[activeStakeholder].icon}
                  </div>
                  <div>
                    <span className="text-brandPrimary dark:text-brandGold font-bold text-[10px] tracking-[2px] uppercase font-heading">
                      {stakeholders[activeStakeholder].subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-brandDark dark:text-brandLight font-heading uppercase">
                      {stakeholders[activeStakeholder].title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-brandDark/80 dark:text-brandLight/80 leading-relaxed italic border-l-4 border-brandGold pl-6 mb-8">
                  "{stakeholders[activeStakeholder].description}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {stakeholders[activeStakeholder].impact.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-3 bg-brandLight/50 dark:bg-brandDark/30 rounded-xl border border-borderLight dark:border-borderDark"
                    >
                      <div className="w-2 h-2 rounded-full bg-brandGold" />
                      <span className="text-[11px] font-bold text-brandDark dark:text-brandLight uppercase tracking-tight">
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
        @keyframes flowOut {
          from { stroke-dashoffset: 26; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowIn {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 26; }
        }
        .flow-out {
          animation: flowOut 1.5s linear infinite;
        }
        .flow-in {
          animation: flowIn 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ESGStakeholderEcosystem;