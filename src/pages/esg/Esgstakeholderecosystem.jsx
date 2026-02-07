import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ESGStakeholderEcosystem = () => {
  const [activeStakeholder, setActiveStakeholder] = useState(null);

  const stakeholders = {
    investors: {
      title: "Investors",
      icon: "🏦",
      color: "#004080",
      position: { cx: 300, cy: 80 },
      subtitle: "Capital Access",
      description: "ESG performance directly influences investment decisions and access to capital.",
    },
    regulators: {
      title: "Regulators",
      icon: "📜",
      color: "#FFC000",
      position: { cx: 95, cy: 145 },
      subtitle: "Compliance",
      description: "Mandatory disclosures through CSRD and BRSR carry financial consequences.",
    },
    customers: {
      title: "Customers",
      icon: "🛒",
      color: "#003366",
      position: { cx: 505, cy: 145 },
      subtitle: "Procurement",
      description: "B2B customers prioritize sustainable suppliers within their procurement ecosystems.",
    },
    employees: {
      title: "Employees",
      icon: "👥",
      color: "#001F3F",
      position: { cx: 120, cy: 470 },
      subtitle: "Talent & Culture",
      description: "Strong ESG profiles enhance talent engagement and long-term productivity.",
    },
    society: {
      title: "Society",
      icon: "🌍",
      color: "#FFB800",
      position: { cx: 480, cy: 470 },
      subtitle: "License to Operate",
      description: "ESG performance impacts reputation and foundational stakeholder trust.",
    }
  };

  const getConnectionPath = (key) => {
    const center = { x: 300, y: 290 };
    const pos = stakeholders[key].position;
    return `M${center.x},${center.y} Q${(center.x + pos.cx) / 2},${(center.y + pos.cy) / 2 - 20} ${pos.cx},${pos.cy}`;
  };

  return (
    <section className="py-20 lg:py-32 bg-bgLight dark:bg-bgDark overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h3 className="mb-6 text-4xl lg:text-5xl font-black font-heading text-brandDark dark:text-surfaceLight uppercase">
            ESG Stakeholder Ecosystem
          </h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Visual Container */}
          <div className="p-4 lg:p-12 shadow-2xl bg-surfaceLight dark:bg-surfaceDark rounded-[40px] border border-borderLight dark:border-borderDark relative">
            
            {/* SVG Diagram Layer */}
            <svg viewBox="0 0 600 560" className="w-full h-auto drop-shadow-xl overflow-visible relative z-10">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Bidirectional Animated Paths */}
              {Object.keys(stakeholders).map(key => (
                <g key={`path-group-${key}`}>
                  {/* Outer Flow (Org -> Stakeholder) */}
                  <path
                    d={getConnectionPath(key)}
                    fill="none"
                    stroke={stakeholders[key].color}
                    strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                    strokeDasharray="10, 15"
                    className="transition-all duration-500 animate-flow-out"
                    style={{ opacity: activeStakeholder === key ? 1 : 0.2 }}
                  />
                  {/* Inner Flow (Stakeholder -> Org) */}
                  <path
                    d={getConnectionPath(key)}
                    fill="none"
                    stroke={stakeholders[key].color}
                    strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                    strokeDasharray="4, 12"
                    className="transition-all duration-500 animate-flow-in"
                    style={{ opacity: activeStakeholder === key ? 1 : 0.2 }}
                  />
                </g>
              ))}

              {/* Central Organization Hub */}
              <g className="pointer-events-none">
                <circle cx="300" cy="290" r="75" fill="#001F3F" className="shadow-2xl" />
                <text x="300" y="280" textAnchor="middle" className="fill-brandGold text-[10px] font-bold tracking-widest uppercase">RiskMan</text>
                <text x="300" y="305" textAnchor="middle" className="fill-white text-sm font-black tracking-tight uppercase">Organization</text>
              </g>

              {/* Stakeholder Circular Nodes */}
              {Object.entries(stakeholders).map(([key, data]) => (
                <g 
                  key={key}
                  onMouseEnter={() => setActiveStakeholder(key)}
                  onMouseLeave={() => setActiveStakeholder(null)}
                  className="cursor-pointer group"
                >
                  <circle 
                    cx={data.position.cx} 
                    cy={data.position.cy} 
                    r="48" 
                    fill={data.color}
                    className="transition-all duration-500 ease-out"
                    style={{ 
                      transform: activeStakeholder === key ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: `${data.position.cx}px ${data.position.cy}px`,
                      filter: activeStakeholder === key ? 'url(#glow)' : 'none'
                    }}
                  />
                  <text x={data.position.cx} y={data.position.cy - 10} textAnchor="middle" className="text-3xl pointer-events-none select-none">{data.icon}</text>
                  <text x={data.position.cx} y={data.position.cy + 15} textAnchor="middle" className="fill-white text-[10px] font-black uppercase pointer-events-none select-none">{data.title}</text>
                </g>
              ))}
            </svg>

            {/* HOVER BADGES LAYER (Framer Motion) */}
            <AnimatePresence>
              {Object.entries(stakeholders).map(([key, data]) => (
                activeStakeholder === key && (
                  <motion.div
                    key={`badge-${key}`}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute z-50 pointer-events-none"
                    style={{
                      left: `${(data.position.cx / 600) * 100}%`,
                      top: `${(data.position.cy / 560) * 100}%`,
                      transform: 'translate(-50%, -150%)' 
                    }}
                  >
                    <div className="bg-white dark:bg-brandDark border-2 shadow-2xl rounded-2xl p-4 w-52 text-center relative"
                         style={{ borderColor: data.color }}>
                      <div className="text-[10px] font-black text-brandPrimary dark:text-brandGold uppercase mb-1 tracking-widest">
                        {data.subtitle}
                      </div>
                      <p className="text-[11px] text-brandDark/80 dark:text-surfaceLight leading-snug font-medium">
                        {data.description}
                      </p>
                      
                      {/* Badge Triangle Pointer */}
                      <div 
                        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px]"
                        style={{ borderTopColor: data.color }}
                      />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowOut {
          from { stroke-dashoffset: 50; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowIn {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 50; }
        }
        .animate-flow-out { animation: flowOut 4s linear infinite; }
        .animate-flow-in { animation: flowIn 6s linear infinite; }
      `}</style>
    </section>
  );
};

export default ESGStakeholderEcosystem;