import React, { useState } from 'react';

const ESGStakeholderEcosystem = () => {
  const [activeStakeholder, setActiveStakeholder] = useState(null);

  const stakeholders = {
    investors: {
      title: "Investors",
      icon: "💰",
      color: "#1565C0",
      position: { cx: 300, cy: 80 },
      subtitle: "Capital Access",
      description: "ESG performance directly influences investment decisions, access to capital, and financing terms. Over $35 trillion in global AUM now integrates ESG factors.",
      influence: ["ESG Ratings", "Capital Flow"]
    },
    regulators: {
      title: "Regulators",
      icon: "📜",
      color: "#F57C00",
      position: { cx: 95, cy: 145 },
      subtitle: "Compliance",
      description: "Global regulatory bodies mandate ESG disclosures through CSRD, BRSR, SEC rules. Non-compliance carries financial and reputational consequences.",
      influence: ["Requirements", "Standards"]
    },
    customers: {
      title: "Customers",
      icon: "🛒",
      color: "#2E7D32",
      position: { cx: 505, cy: 145 },
      subtitle: "Procurement",
      description: "B2B and B2C customers increasingly prioritize sustainable suppliers. Supply chain ESG requirements cascade throughout vendor ecosystems.",
      influence: ["Demand", "Preferences"]
    },
    employees: {
      title: "Employees",
      icon: "👥",
      color: "#7B1FA2",
      position: { cx: 120, cy: 470 },
      subtitle: "Talent & Culture",
      description: "Top talent seeks employers with genuine sustainability commitments. Strong ESG profiles enhance engagement, retention, and productivity.",
      influence: ["Purpose", "Values"]
    },
    society: {
      title: "Society",
      icon: "🌐",
      color: "#1A7A8C",
      position: { cx: 480, cy: 470 },
      subtitle: "License to Operate",
      description: "Communities and civil society grant social license to operate. ESG performance impacts reputation, brand value, and stakeholder trust.",
      influence: ["Trust", "Impact"]
    }
  };

  const getConnectionPath = (stakeholder) => {
    const center = { x: 300, y: 290 };
    const pos = stakeholders[stakeholder].position;
    return `M${center.x},${center.y} Q${(center.x + pos.cx)/2},${(center.y + pos.cy)/2 - 20} ${pos.cx},${pos.cy}`;
  };

  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            ESG Stakeholder Ecosystem
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            The Multi-Stakeholder Imperative: Bidirectional Value Exchange
          </p>
        </div>

        {/* Main Diagram */}
        <div className="max-w-4xl p-8 mx-auto mb-6 shadow-xl bg-bgLight dark:bg-bgDark rounded-2xl">
          <svg viewBox="0 0 600 560" className="w-full h-auto">
            <defs>
              <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D4F6B"/>
                <stop offset="100%" stopColor="#1B2B3A"/>
              </linearGradient>
              <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15"/>
              </filter>
              <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Background rings */}
            <circle cx="300" cy="290" r="220" fill="none" stroke="#E8EDF0" strokeWidth="2" strokeDasharray="8,4"/>
            <circle cx="300" cy="290" r="160" fill="none" stroke="#E8EDF0" strokeWidth="1.5"/>
            <circle cx="300" cy="290" r="100" fill="none" stroke="#E8EDF0" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Connection lines */}
            {Object.keys(stakeholders).map(key => (
              <g key={`connection-${key}`}>
                <path
                  d={getConnectionPath(key)}
                  fill="none"
                  stroke={stakeholders[key].color}
                  strokeWidth={activeStakeholder === key ? "4" : "2"}
                  strokeDasharray="6,4"
                  opacity={activeStakeholder && activeStakeholder !== key ? 0.3 : 0.7}
                  className="transition-all duration-300"
                />
              </g>
            ))}

            {/* Center Organization */}
            <g filter="url(#dropShadow)">
              <circle 
                cx="300" cy="290" r="70" 
                fill="url(#centerGradient)"
                filter="url(#glowFilter)"
                className="transition-transform duration-300"
              />
              <text x="300" y="270" textAnchor="middle" fontSize="28">🏢</text>
              <text x="300" y="298" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">ORGANIZATION</text>
              <text x="300" y="318" textAnchor="middle" fill="white" fontSize="10" opacity="0.85">ESG Integration</text>
            </g>

            {/* Stakeholder nodes */}
            {Object.entries(stakeholders).map(([key, data]) => (
              <g 
                key={key}
                className="transition-transform duration-300 cursor-pointer"
                style={{ 
                  transform: activeStakeholder === key ? 'scale(1.1)' : 'scale(1)',
                  transformOrigin: `${data.position.cx}px ${data.position.cy}px`
                }}
                onMouseEnter={() => setActiveStakeholder(key)}
                onMouseLeave={() => setActiveStakeholder(null)}
                filter="url(#dropShadow)"
              >
                <circle 
                  cx={data.position.cx} 
                  cy={data.position.cy} 
                  r="50" 
                  fill={data.color}
                  opacity={activeStakeholder && activeStakeholder !== key ? 0.6 : 1}
                  className="transition-opacity duration-300"
                />
                <text x={data.position.cx} y={data.position.cy - 12} textAnchor="middle" fontSize="24">{data.icon}</text>
                <text x={data.position.cx} y={data.position.cy + 10} textAnchor="middle" fill="white" fontSize="11" fontWeight="600">{data.title.toUpperCase()}</text>
                <text x={data.position.cx} y={data.position.cy + 26} textAnchor="middle" fill="white" fontSize="9" opacity="0.9">{data.subtitle}</text>
              </g>
            ))}
          </svg>

          {/* Info Panel */}
          <div className={`mt-6 p-5 rounded-xl transition-all duration-300 ${activeStakeholder ? 'bg-slate-50 dark:bg-slate-800 opacity-100' : 'bg-slate-50/50 dark:bg-slate-800/50 opacity-70'}`}>
            {activeStakeholder ? (
              <div className="flex items-start gap-4">
                <div 
                  className="flex items-center justify-center text-2xl rounded-full w-14 h-14"
                  style={{ backgroundColor: stakeholders[activeStakeholder].color }}
                >
                  {stakeholders[activeStakeholder].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold" style={{ color: stakeholders[activeStakeholder].color }}>
                    {stakeholders[activeStakeholder].title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{stakeholders[activeStakeholder].description}</p>
                  <div className="flex gap-2 mt-3">
                    {stakeholders[activeStakeholder].influence.map((inf, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs text-white rounded-full"
                        style={{ backgroundColor: stakeholders[activeStakeholder].color }}
                      >
                        {inf}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-center text-gray-400">Hover over a stakeholder to see details</p>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="max-w-4xl p-4 mx-auto bg-white shadow-lg dark:bg-surfaceDark rounded-xl">
          <h4 className="mb-3 text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">Bidirectional Value Exchange</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(stakeholders).map(([key, data]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{data.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-xs text-center text-gray-400">
          RiskMan Consulting LLP | Sustainability & ESG Practice
        </p>
      </div>
    </section>
  );
};

export default ESGStakeholderEcosystem;


// import CompleteDiagram from "./diagram";

// import React from 'react'

// function Esgstakeholderecosystem() {
//   return (
//     <CompleteDiagram />
//   )
// }

// export default Esgstakeholderecosystem
