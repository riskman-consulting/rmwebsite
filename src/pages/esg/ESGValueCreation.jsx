import React, { useState } from 'react';

const ESGValueCreation = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);

  const quadrants = {
    risk: {
      title: "Risk Mitigation",
      subtitle: "Protect & Defend",
      icon: "🛡️",
      color: "#C62828",
      colorLight: "#FFEBEE",
      description: "Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.",
      values: [
        { icon: "📋", text: "Regulatory Compliance Assurance" },
        { icon: "🌡️", text: "Climate Risk Assessment" },
        { icon: "⚠️", text: "Reputational Risk Management" },
        { icon: "🔒", text: "Supply Chain Resilience" }
      ]
    },
    operational: {
      title: "Operational Excellence",
      subtitle: "Optimize & Improve",
      icon: "⚙️",
      color: "#2E7D32",
      colorLight: "#E8F5E9",
      description: "Drive efficiency, reduce costs, and improve operational performance through sustainable practices.",
      values: [
        { icon: "⚡", text: "Energy Efficiency & Cost Reduction" },
        { icon: "♻️", text: "Waste Reduction & Circularity" },
        { icon: "💧", text: "Resource Optimization" },
        { icon: "📊", text: "Process Automation & Data Quality" }
      ]
    },
    stakeholder: {
      title: "Stakeholder Value",
      subtitle: "Engage & Trust",
      icon: "👥",
      color: "#1565C0",
      colorLight: "#E3F2FD",
      description: "Build trust and strengthen relationships with investors, employees, customers, and communities.",
      values: [
        { icon: "💰", text: "Investor Confidence & ESG Ratings" },
        { icon: "🏆", text: "Talent Attraction & Retention" },
        { icon: "⭐", text: "Customer Loyalty & Brand Trust" },
        { icon: "🤝", text: "Community Relations & License to Operate" }
      ]
    },
    growth: {
      title: "Strategic Growth",
      subtitle: "Innovate & Expand",
      icon: "🚀",
      color: "#E65100",
      colorLight: "#FFF3E0",
      description: "Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.",
      values: [
        { icon: "🌱", text: "Sustainable Product Innovation" },
        { icon: "🌍", text: "New Market Access & Green Revenue" },
        { icon: "💡", text: "Business Model Transformation" },
        { icon: "🏅", text: "Competitive Differentiation" }
      ]
    }
  };

  const kpis = [
    { type: "risk", value: "↓40%", label: "Compliance Incidents", color: "#C62828" },
    { type: "operational", value: "↓25%", label: "Operating Costs", color: "#2E7D32" },
    { type: "stakeholder", value: "↑35%", label: "ESG Rating Score", color: "#1565C0" },
    { type: "growth", value: "↑20%", label: "Green Revenue", color: "#E65100" }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            The RiskMan Value Proposition
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            RiskMan delivers measurable, sustainable value to global organizations through our integrated ESG 
            advisory, implementation, and capabilities.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
              ESG Value Creation Framework
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrated approach to sustainable enterprise value through Environmental, Social & Governance excellence
            </p>
          </div>

          {/* Axis Labels */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="absolute top-0 transform -translate-x-1/2 -translate-y-8 left-1/2">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Defensive ← → Offensive
              </span>
            </div>
            <div className="absolute left-0 transform rotate-90 -translate-x-20 -translate-y-1/2 top-1/2">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Internal Focus
              </span>
            </div>
            <div className="absolute right-0 transform -rotate-90 translate-x-20 -translate-y-1/2 top-1/2">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                External Focus
              </span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Risk Mitigation (Top Left) */}
              <div
                className={`rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'risk' ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  backgroundColor: quadrants.risk.colorLight,
                  borderTop: `4px solid ${quadrants.risk.color}`
                }}
                onMouseEnter={() => setActiveQuadrant('risk')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${quadrants.risk.color}, ${quadrants.risk.color}dd)` }}
                  >
                    {quadrants.risk.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: quadrants.risk.color }}>
                      {quadrants.risk.title}
                    </h4>
                    <p className="text-xs text-gray-600">{quadrants.risk.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700">{quadrants.risk.description}</p>
                <div className="space-y-2">
                  {quadrants.risk.values.map((value, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 transition-colors rounded-lg bg-white/70 hover:bg-white">
                      <span className="text-lg">{value.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Excellence (Top Right) */}
              <div
                className={`rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'operational' ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  backgroundColor: quadrants.operational.colorLight,
                  borderTop: `4px solid ${quadrants.operational.color}`
                }}
                onMouseEnter={() => setActiveQuadrant('operational')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${quadrants.operational.color}, ${quadrants.operational.color}dd)` }}
                  >
                    {quadrants.operational.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: quadrants.operational.color }}>
                      {quadrants.operational.title}
                    </h4>
                    <p className="text-xs text-gray-600">{quadrants.operational.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700">{quadrants.operational.description}</p>
                <div className="space-y-2">
                  {quadrants.operational.values.map((value, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 transition-colors rounded-lg bg-white/70 hover:bg-white">
                      <span className="text-lg">{value.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stakeholder Value (Bottom Left) */}
              <div
                className={`rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'stakeholder' ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  backgroundColor: quadrants.stakeholder.colorLight,
                  borderTop: `4px solid ${quadrants.stakeholder.color}`
                }}
                onMouseEnter={() => setActiveQuadrant('stakeholder')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${quadrants.stakeholder.color}, ${quadrants.stakeholder.color}dd)` }}
                  >
                    {quadrants.stakeholder.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: quadrants.stakeholder.color }}>
                      {quadrants.stakeholder.title}
                    </h4>
                    <p className="text-xs text-gray-600">{quadrants.stakeholder.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700">{quadrants.stakeholder.description}</p>
                <div className="space-y-2">
                  {quadrants.stakeholder.values.map((value, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 transition-colors rounded-lg bg-white/70 hover:bg-white">
                      <span className="text-lg">{value.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Growth (Bottom Right) */}
              <div
                className={`rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'growth' ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  backgroundColor: quadrants.growth.colorLight,
                  borderTop: `4px solid ${quadrants.growth.color}`
                }}
                onMouseEnter={() => setActiveQuadrant('growth')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${quadrants.growth.color}, ${quadrants.growth.color}dd)` }}
                  >
                    {quadrants.growth.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: quadrants.growth.color }}>
                      {quadrants.growth.title}
                    </h4>
                    <p className="text-xs text-gray-600">{quadrants.growth.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700">{quadrants.growth.description}</p>
                <div className="space-y-2">
                  {quadrants.growth.values.map((value, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 transition-colors rounded-lg bg-white/70 hover:bg-white">
                      <span className="text-lg">{value.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Hub */}
              <div className="absolute z-10 flex flex-col items-center justify-center w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full shadow-2xl top-1/2 left-1/2 bg-gradient-to-br from-brandPrimary to-brandNavy">
                <span className="mb-1 text-xs font-semibold text-white">SUSTAINABLE</span>
                <span className="text-lg font-bold text-white">ENTERPRISE</span>
                <span className="text-lg font-bold text-white">VALUE</span>
                <span className="mt-1 text-xs text-white opacity-90">ESG Integration</span>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto mt-12 md:grid-cols-4">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="p-6 text-center transition-shadow bg-white shadow-lg dark:bg-surfaceDark rounded-xl hover:shadow-xl"
                style={{ borderTop: `4px solid ${kpi.color}` }}
              >
                <div className="mb-2 text-3xl font-bold" style={{ color: kpi.color }}>
                  {kpi.value}
                </div>
                <div className="text-xs tracking-wide text-gray-600 uppercase dark:text-gray-400">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-center text-gray-400">
          RiskMan Consulting LLP | Sustainability & ESG Practice
        </div>
      </div>
    </section>
  );
};

export default ESGValueCreation;