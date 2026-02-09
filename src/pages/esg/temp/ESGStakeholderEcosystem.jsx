import React, { useState } from 'react';

/**
 * ESG Stakeholder Ecosystem Component
 * Visualizes the bidirectional value exchange between an organization and stakeholders.
 * Sources: [cite: 25-242]
 */
export default function ESGStakeholderEcosystem() {
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
    return `M${center.x},${center.y} Q${(center.x + pos.cx) / 2},${(center.y + pos.cy) / 2 - 20} ${pos.cx},${pos.cy}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-[#0D4F6B] mb-2">ESG Stakeholder Ecosystem</h1>
          <p className="text-slate-500 text-sm">The Multi-Stakeholder Imperative: Bidirectional Value Exchange</p>
        </div>

        {/* Main Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <svg viewBox="0 0 600 560" className="w-full h-auto">
            <defs>
              <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D4F6B" />
                <stop offset="100%" stopColor="#1B2B3A" />
              </linearGradient>
              <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
              </filter>
              <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background rings */}
            <circle cx="300" cy="290" r="220" fill="none" stroke="#E8EDF0" strokeWidth="2" strokeDasharray="8,4" />
            <circle cx="300" cy="290" r="160" fill="none" stroke="#E8EDF0" strokeWidth="1.5" />
            <circle cx="300" cy="290" r="100" fill="none" stroke="#E8EDF0" strokeWidth="1" strokeDasharray="4,4" />

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
                cx="300"
                cy="290"
                r="70"
                fill="url(#centerGradient)"
                filter="url(#glowFilter)"
                style={{ transform: activeStakeholder ? 'scale(0.95)' : 'scale(1)', transformOrigin: '300px 290px' }}
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
                className="cursor-pointer transition-transform duration-300"
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

            {/* Influence labels */}
            <g fontSize="9" fontStyle="italic" fill="#6B7B8C">
              <text x="330" y="175">ESG Performance ↑</text>
              <text x="230" y="160">↓ Capital</text>
              <text x="165" y="210">Compliance ↑</text>
              <text x="175" y="240">↓ Standards</text>
              <text x="400" y="210">↑ Sustainable</text>
              <text x="410" y="230">Products ↓</text>
              <text x="175" y="390">Purpose ↑</text>
              <text x="185" y="410">↓ Talent</text>
              <text x="395" y="390">↑ Trust</text>
              <text x="385" y="410">Impact ↓</text>
            </g>
          </svg>

          {/* Info Panel */}
          <div className={`mt-6 p-5 rounded-xl transition-all duration-300 ${activeStakeholder ? 'bg-slate-50 opacity-100' : 'bg-slate-50/50 opacity-70'}`}>
            {activeStakeholder ? (
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white"
                  style={{ backgroundColor: stakeholders[activeStakeholder].color }}
                >
                  {stakeholders[activeStakeholder].icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg" style={{ color: stakeholders[activeStakeholder].color }}>
                    {stakeholders[activeStakeholder].title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">{stakeholders[activeStakeholder].description}</p>
                  <div className="flex gap-2 mt-3">
                    {stakeholders[activeStakeholder].influence.map((inf, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs text-white"
                        style={{ backgroundColor: stakeholders[activeStakeholder].color }}
                      >
                        {inf}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-400 text-center text-sm">Hover over a stakeholder to see details</p>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h4 className="text-center text-sm font-semibold text-[#0D4F6B] mb-3">Bidirectional Value Exchange</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(stakeholders).map(([key, data]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></div>
                <span className="text-xs text-slate-600">{data.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-4">
          RiskMan Consulting LLP | Sustainability & ESG Practice [cite: 237]
        </p>
      </div>
    </div>
  );
}