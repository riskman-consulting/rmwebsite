import React, { useState } from 'react';

const ValueCreationFramework = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);

  const quadrants = {
    risk: {
      title: "Risk Mitigation",
      subtitle: "Protect & Defend",
      icon: "🛡️",
      color: "#C62828",
      gradient: "from-red-500/20 to-red-600/20",
      description: "Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.",
      values: [
        { icon: "📋", text: "Regulatory Compliance Assurance" },
        { icon: "🌡️", text: "Climate Risk Assessment" },
        { icon: "⚠️", text: "Reputational Risk Management" },
        { icon: "🔒", text: "Supply Chain Resilience" }
      ],
      metric: { value: "↓40%", label: "Compliance Incidents" }
    },
    operational: {
      title: "Operational Excellence",
      subtitle: "Optimize & Improve",
      icon: "⚙️",
      color: "#2E7D32",
      gradient: "from-green-500/20 to-green-600/20",
      description: "Drive efficiency, reduce costs, and improve operational performance through sustainable practices.",
      values: [
        { icon: "⚡", text: "Energy Efficiency & Cost Reduction" },
        { icon: "♻️", text: "Waste Reduction & Circularity" },
        { icon: "💧", text: "Resource Optimization" },
        { icon: "📊", text: "Process Automation & Data Quality" }
      ],
      metric: { value: "↓25%", label: "Operating Costs" }
    },
    stakeholder: {
      title: "Stakeholder Value",
      subtitle: "Engage & Trust",
      icon: "👥",
      color: "#004080",
      gradient: "from-blue-500/20 to-blue-600/20",
      description: "Build trust and strengthen relationships with investors, employees, customers, and communities.",
      values: [
        { icon: "💰", text: "Investor Confidence & ESG Ratings" },
        { icon: "🏆", text: "Talent Attraction & Retention" },
        { icon: "⭐", text: "Customer Loyalty & Brand Trust" },
        { icon: "🤝", text: "Community Relations & License to Operate" }
      ],
      metric: { value: "↑35%", label: "ESG Rating Score" }
    },
    growth: {
      title: "Strategic Growth",
      subtitle: "Innovate & Expand",
      icon: "🚀",
      color: "#FF9800",
      gradient: "from-orange-500/20 to-orange-600/20",
      description: "Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.",
      values: [
        { icon: "🌱", text: "Sustainable Product Innovation" },
        { icon: "🌍", text: "New Market Access & Green Revenue" },
        { icon: "💡", text: "Business Model Transformation" },
        { icon: "🏅", text: "Competitive Differentiation" }
      ],
      metric: { value: "↑20%", label: "Green Revenue" }
    }
  };

  const capabilities = [
    {
      icon: "🌍",
      title: "Regulatory & Disclosure Excellence",
      description: "Multi-framework compliance readiness across CSRD, BRSR, ISSB, GRI, and emerging regulations. Assurance-ready data and processes that withstand external scrutiny."
    },
    {
      icon: "👥",
      title: "Enhanced Stakeholder Confidence",
      description: "Improved ESG ratings through systematic performance enhancement. Enhanced investor confidence supporting access to capital."
    },
    {
      icon: "🌡️",
      title: "Climate Risk Mitigation & Resilience",
      description: "Comprehensive climate risk assessment across physical and transition dimensions. Decarbonization roadmaps with credible, science-aligned targets."
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
            The RiskMan Value Proposition
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            RiskMan delivers measurable, sustainable value to global organizations through our integrated ESG 
            advisory, implementation, and capabilities.
          </p>
        </div>

        {/* Value Creation Matrix */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            ESG Value Creation Framework
          </h3>

          <div className="p-8 mb-8 bg-white shadow-xl dark:bg-surfaceDark rounded-2xl">
            {/* Axis Labels */}
            <div className="relative mb-4">
              <div className="mb-2 text-sm font-semibold text-center text-brandDark dark:text-white">
                DEFENSIVE ← → OFFENSIVE
              </div>
            </div>

            {/* Quadrants Grid */}
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Left Axis Label */}
              <div className="absolute hidden -rotate-90 -translate-y-1/2 md:block -left-8 top-1/2">
                <span className="text-xs font-semibold text-brandDark dark:text-white whitespace-nowrap">
                  INTERNAL FOCUS
                </span>
              </div>
              
              {/* Right Axis Label */}
              <div className="absolute hidden rotate-90 -translate-y-1/2 md:block -right-8 top-1/2">
                <span className="text-xs font-semibold text-brandDark dark:text-white whitespace-nowrap">
                  EXTERNAL FOCUS
                </span>
              </div>

              {/* Risk Mitigation - Top Left */}
              <div
                className={`bg-gradient-to-br ${quadrants.risk.gradient} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'risk' 
                    ? 'scale-105 shadow-2xl border-red-500' 
                    : 'border-red-300 dark:border-red-700 hover:scale-102 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveQuadrant('risk')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ backgroundColor: quadrants.risk.color }}
                  >
                    {quadrants.risk.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading" style={{ color: quadrants.risk.color }}>
                      {quadrants.risk.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{quadrants.risk.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  {quadrants.risk.description}
                </p>
                <div className="space-y-2">
                  {quadrants.risk.values.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/70 dark:bg-surfaceDark/70">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Excellence - Top Right */}
              <div
                className={`bg-gradient-to-br ${quadrants.operational.gradient} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'operational' 
                    ? 'scale-105 shadow-2xl border-green-500' 
                    : 'border-green-300 dark:border-green-700 hover:scale-102 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveQuadrant('operational')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ backgroundColor: quadrants.operational.color }}
                  >
                    {quadrants.operational.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading" style={{ color: quadrants.operational.color }}>
                      {quadrants.operational.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{quadrants.operational.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  {quadrants.operational.description}
                </p>
                <div className="space-y-2">
                  {quadrants.operational.values.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/70 dark:bg-surfaceDark/70">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stakeholder Value - Bottom Left */}
              <div
                className={`bg-gradient-to-br ${quadrants.stakeholder.gradient} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'stakeholder' 
                    ? 'scale-105 shadow-2xl border-blue-500' 
                    : 'border-blue-300 dark:border-blue-700 hover:scale-102 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveQuadrant('stakeholder')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ backgroundColor: quadrants.stakeholder.color }}
                  >
                    {quadrants.stakeholder.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading" style={{ color: quadrants.stakeholder.color }}>
                      {quadrants.stakeholder.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{quadrants.stakeholder.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  {quadrants.stakeholder.description}
                </p>
                <div className="space-y-2">
                  {quadrants.stakeholder.values.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/70 dark:bg-surfaceDark/70">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Growth - Bottom Right */}
              <div
                className={`bg-gradient-to-br ${quadrants.growth.gradient} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeQuadrant === 'growth' 
                    ? 'scale-105 shadow-2xl border-orange-500' 
                    : 'border-orange-300 dark:border-orange-700 hover:scale-102 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveQuadrant('growth')}
                onMouseLeave={() => setActiveQuadrant(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 text-2xl shadow-lg rounded-xl"
                    style={{ backgroundColor: quadrants.growth.color }}
                  >
                    {quadrants.growth.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading" style={{ color: quadrants.growth.color }}>
                      {quadrants.growth.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{quadrants.growth.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  {quadrants.growth.description}
                </p>
                <div className="space-y-2">
                  {quadrants.growth.values.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/70 dark:bg-surfaceDark/70">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Hub */}
              <div className="absolute z-10 flex flex-col items-center justify-center w-32 h-32 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full shadow-2xl top-1/2 left-1/2 md:w-40 md:h-40 bg-gradient-to-br from-brandDark to-brandPrimary dark:from-bgDark dark:to-brandNavy dark:border-surfaceDark">
                <span className="text-xs font-semibold text-white">SUSTAINABLE</span>
                <span className="text-lg font-bold text-white md:text-xl">ENTERPRISE</span>
                <span className="text-lg font-bold text-white md:text-xl">VALUE</span>
                <span className="mt-1 text-xs text-brandAccent">ESG Integration</span>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
              {Object.values(quadrants).map((q, idx) => (
                <div 
                  key={idx}
                  className="p-4 text-center bg-white border-t-4 shadow-md dark:bg-surfaceDark rounded-xl"
                  style={{ borderColor: q.color }}
                >
                  <div className="mb-2 text-3xl font-bold" style={{ color: q.color }}>
                    {q.metric.value}
                  </div>
                  <div className="text-xs tracking-wide text-gray-600 uppercase dark:text-gray-400">
                    {q.metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-6 transition-shadow duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl hover:shadow-xl border-borderLight dark:border-borderDark"
              >
                <div className="mb-4 text-4xl">{cap.icon}</div>
                <h4 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                  {cap.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCreationFramework;