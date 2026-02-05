import React, { useState } from 'react';

const ValuePropositionSection = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);

  const valueQuadrants = [
    {
      id: 'risk',
      icon: '🛡️',
      title: 'Risk Mitigation',
      subtitle: 'Protect & Defend',
      color: '#C62828',
      bgGradient: 'from-red-50 to-red-100',
      bgGradientDark: 'dark:from-red-950/20 dark:to-red-900/20',
      description: 'Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.',
      values: [
        { icon: '📋', text: 'Regulatory Compliance Assurance' },
        { icon: '🌡️', text: 'Climate Risk Assessment' },
        { icon: '⚠️', text: 'Reputational Risk Management' },
        { icon: '🔒', text: 'Supply Chain Resilience' }
      ]
    },
    {
      id: 'operational',
      icon: '⚙️',
      title: 'Operational Excellence',
      subtitle: 'Optimize & Improve',
      color: '#2E7D32',
      bgGradient: 'from-green-50 to-green-100',
      bgGradientDark: 'dark:from-green-950/20 dark:to-green-900/20',
      description: 'Drive efficiency, reduce costs, and improve operational performance through sustainable practices.',
      values: [
        { icon: '⚡', text: 'Energy Efficiency & Cost Reduction' },
        { icon: '♻️', text: 'Waste Reduction & Circularity' },
        { icon: '💧', text: 'Resource Optimization' },
        { icon: '📊', text: 'Process Automation & Data Quality' }
      ]
    },
    {
      id: 'stakeholder',
      icon: '👥',
      title: 'Stakeholder Value',
      subtitle: 'Engage & Trust',
      color: '#1565C0',
      bgGradient: 'from-blue-50 to-blue-100',
      bgGradientDark: 'dark:from-blue-950/20 dark:to-blue-900/20',
      description: 'Build trust and strengthen relationships with investors, employees, customers, and communities.',
      values: [
        { icon: '💰', text: 'Investor Confidence & ESG Ratings' },
        { icon: '🏆', text: 'Talent Attraction & Retention' },
        { icon: '⭐', text: 'Customer Loyalty & Brand Trust' },
        { icon: '🤝', text: 'Community Relations & License to Operate' }
      ]
    },
    {
      id: 'growth',
      icon: '🚀',
      title: 'Strategic Growth',
      subtitle: 'Innovate & Expand',
      color: '#E65100',
      bgGradient: 'from-orange-50 to-orange-100',
      bgGradientDark: 'dark:from-orange-950/20 dark:to-orange-900/20',
      description: 'Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.',
      values: [
        { icon: '🌱', text: 'Sustainable Product Innovation' },
        { icon: '🌍', text: 'New Market Access & Green Revenue' },
        { icon: '💡', text: 'Business Model Transformation' },
        { icon: '🏅', text: 'Competitive Differentiation' }
      ]
    }
  ];

  const kpiData = [
    { label: 'Compliance Incidents', value: '↓40%', color: '#C62828' },
    { label: 'Operating Costs', value: '↓25%', color: '#2E7D32' },
    { label: 'ESG Rating Score', value: '↑35%', color: '#1565C0' },
    { label: 'Green Revenue', value: '↑20%', color: '#E65100' }
  ];

  return (
    <section className="py-20 bg-white lg:py-28 dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="relative inline-block mb-5">
            <span className="text-xs sm:text-sm font-bold text-brandPrimary dark:text-brandAccent tracking-[2px] uppercase">
              Delivered Value
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
          </div>
          
          <h2 className="font-heading font-extrabold text-brandDark dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
            The RiskMan Value Proposition
          </h2>
          
          <p className="max-w-4xl mx-auto font-serif text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
            RiskMan delivers measurable, sustainable value to global organizations through our integrated ESG advisory, implementation, and capabilities.
          </p>
        </div>

        {/* Value Creation Framework */}
        <div className="relative p-8 mb-12 shadow-xl bg-bgLight dark:bg-surfaceDark rounded-3xl lg:p-12">
          {/* Axis Labels */}
          <div className="hidden lg:block">
            <div className="absolute text-xs font-semibold tracking-wider uppercase -translate-x-1/2 top-4 left-1/2 text-brandPrimary dark:text-brandAccent">
              Defensive ← → Offensive
            </div>
            <div className="absolute text-xs font-semibold tracking-wider uppercase -rotate-90 -translate-y-1/2 left-4 top-1/2 text-brandPrimary dark:text-brandAccent">
              Internal Focus
            </div>
            <div className="absolute text-xs font-semibold tracking-wider uppercase rotate-90 -translate-y-1/2 right-4 top-1/2 text-brandPrimary dark:text-brandAccent">
              External Focus
            </div>
          </div>

          {/* Value Matrix Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:mt-0">
            {valueQuadrants.map((quadrant) => (
              <div
                key={quadrant.id}
                onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                onMouseLeave={() => setHoveredQuadrant(null)}
                className={`bg-gradient-to-br ${quadrant.bgGradient} ${quadrant.bgGradientDark} rounded-2xl p-8 min-h-[320px] cursor-pointer transition-all duration-500 border-2 ${
                  hoveredQuadrant === quadrant.id
                    ? 'scale-105 shadow-2xl z-20'
                    : 'hover:scale-102 border-transparent'
                }`}
                style={{
                  borderColor: hoveredQuadrant === quadrant.id ? quadrant.color : 'transparent'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex items-center justify-center text-3xl shadow-lg w-14 h-14 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${quadrant.color}, ${quadrant.color}dd)`
                    }}
                  >
                    {quadrant.icon}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: quadrant.color }}
                    >
                      {quadrant.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {quadrant.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {quadrant.description}
                </p>

                <div className="space-y-2">
                  {quadrant.values.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg bg-white/70 dark:bg-surfaceDark/70 hover:bg-white/95 dark:hover:bg-surfaceDark/95 hover:translate-x-1"
                    >
                      <span className="text-lg">{value.icon}</span>
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                        {value.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-brandDark to-brandPrimary dark:from-brandNavy dark:to-brandPrimary rounded-full flex flex-col items-center justify-center z-30 border-4 border-white dark:border-surfaceDark shadow-2xl animate-[pulse_3s_ease-in-out_infinite] hidden md:flex">
            <span className="text-xs font-semibold tracking-wide uppercase text-white/90">Sustainable</span>
            <span className="text-lg font-bold text-white">Enterprise</span>
            <span className="text-lg font-bold text-white">Value</span>
            <span className="mt-1 text-xs text-white/80">ESG Integration</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 mb-16 lg:grid-cols-4 lg:gap-6">
          {kpiData.map((kpi, index) => (
            <div
              key={index}
              className="p-6 text-center transition-all duration-300 bg-white border-t-4 shadow-lg dark:bg-surfaceDark rounded-xl hover:shadow-2xl hover:-translate-y-2"
              style={{ borderTopColor: kpi.color }}
            >
              <div
                className="mb-2 text-3xl font-bold sm:text-4xl"
                style={{ color: kpi.color }}
              >
                {kpi.value}
              </div>
              <div className="text-xs tracking-wide text-gray-600 uppercase dark:text-gray-400">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Value Points */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              icon: '📋',
              title: 'Regulatory & Disclosure Excellence',
              points: [
                'Multi-framework compliance readiness across CSRD, BRSR, ISSB, GRI, and emerging regulations',
                'Assurance-ready data and processes that withstand external scrutiny',
                'Internal controls aligned with emerging sustainability assurance standards'
              ]
            },
            {
              icon: '🤝',
              title: 'Enhanced Stakeholder Confidence',
              points: [
                'Improved ESG ratings through systematic performance enhancement',
                'Enhanced investor confidence supporting access to capital',
                'Improved employer brand attracting and retaining top talent'
              ]
            },
            {
              icon: '🌡️',
              title: 'Climate Risk Mitigation & Resilience',
              points: [
                'Comprehensive climate risk assessment across physical and transition dimensions',
                'Scenario analysis informing strategic planning and capital allocation',
                'Decarbonization roadmaps with credible, science-aligned targets'
              ]
            }
          ].map((section, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 shadow-lg bg-gradient-to-br from-white to-bgLight dark:from-surfaceDark dark:to-brandDark rounded-2xl hover:shadow-xl"
            >
              <span className="block mb-4 text-5xl">{section.icon}</span>
              <h3 className="mb-6 text-xl font-bold text-brandDark dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1 font-bold text-brandAccent shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 10px 40px rgba(13, 79, 107, 0.4); }
          50% { box-shadow: 0 10px 60px rgba(13, 79, 107, 0.6); }
        }
      `}</style>
    </section>
  );
};

export default ValuePropositionSection;