import React, { useState } from 'react';

const ESGProgramLifecycle = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phaseData = {
    1: {
      title: "ASSESS",
      subtitle: "Maturity Assessment & Gap Analysis",
      color: "#004080",
      description: "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, reporting, and culture dimensions. Establishes baseline metrics and identifies improvement opportunities.",
      activities: ["ESG Maturity Assessment", "Gap Analysis", "Stakeholder Mapping", "Peer Benchmarking", "Risk Identification"]
    },
    2: {
      title: "DESIGN",
      subtitle: "Strategy & Roadmap Development",
      color: "#2E7D32",
      description: "Development of tailored ESG strategy aligned with business objectives. Creates prioritized roadmap with clear milestones, resource requirements, and success metrics.",
      activities: ["Materiality Analysis", "Target Setting", "Roadmap Creation", "Business Case Development", "Framework Selection"]
    },
    3: {
      title: "BUILD",
      subtitle: "Governance & Infrastructure",
      color: "#7B1FA2",
      description: "Establishment of robust governance structures, data collection systems, and process frameworks. Builds the foundation for sustainable ESG program execution.",
      activities: ["Governance Framework", "Data Architecture", "Policy Development", "Control Design", "Technology Selection"]
    },
    4: {
      title: "IMPLEMENT",
      subtitle: "Rollout & Change Management",
      color: "#FF9800",
      description: "Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.",
      activities: ["Phased Rollout", "Training Programs", "Change Management", "Pilot Programs", "Stakeholder Engagement"]
    },
    5: {
      title: "OPERATE",
      subtitle: "Manage, Report & Engage",
      color: "#C62828",
      description: "Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.",
      activities: ["Performance Monitoring", "Disclosure & Reporting", "Ratings Management", "Stakeholder Communication", "Assurance Preparation"]
    },
    6: {
      title: "OPTIMIZE",
      subtitle: "Review, Improve & Innovate",
      color: "#003366",
      description: "Continuous improvement through performance review, emerging trend analysis, and innovation. Drives the cycle back to assessment for sustained excellence.",
      activities: ["Performance Review", "Trend Analysis", "Best Practice Updates", "Innovation Initiatives", "Continuous Improvement"]
    }
  };

  const maturityStages = [
    { stage: '1. INITIAL', description: 'Ad hoc ESG activities; reactive compliance; minimal data' },
    { stage: '2. DEVELOPING', description: 'Formalized policies; basic metrics; initial engagement' },
    { stage: '3. DEFINED', description: 'Integrated into operations; standardized governance' },
    { stage: '4. ADVANCED', description: 'Mature practices; proactive management; framework alignment' },
    { stage: '5. TRANSFORMATIVE', description: 'Industry-leading; embedded in culture; driving innovation' }
  ];

  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
            RiskMan's Global ESG Program Methodology
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            RiskMan delivers enterprise-grade ESG programs that combine strategic vision with practical execution 
            excellence. Our methodology has been refined through engagements with multinational organizations across 
            diverse industries and regulatory environments.
          </p>
        </div>

        {/* Lifecycle Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            End-to-End ESG Lifecycle Coverage
          </h3>

          <div className="p-8 mb-8 bg-white shadow-xl dark:bg-bgDark rounded-2xl">
            {/* SVG Diagram */}
            <svg viewBox="0 0 500 500" className="w-full h-auto mb-8">
              <defs>
                <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004080"/>
                  <stop offset="100%" stopColor="#001F3F"/>
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
                </filter>
              </defs>

              {/* Outer ring */}
              <circle cx="250" cy="250" r="230" fill="none" stroke="#E8EDF0" strokeWidth="2" strokeDasharray="8,4"/>
              
              {/* Phase arcs */}
              {Object.entries(phaseData).map(([num, phase]) => {
                const angle = ((parseInt(num) - 1) * 60 - 90) * (Math.PI / 180);
                const nextAngle = (parseInt(num) * 60 - 90) * (Math.PI / 180);
                const radius = 195;
                
                const startX = 250 + radius * Math.cos(angle);
                const startY = 250 + radius * Math.sin(angle);
                const endX = 250 + radius * Math.cos(nextAngle);
                const endY = 250 + radius * Math.sin(nextAngle);
                
                return (
                  <g 
                    key={num}
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setActivePhase(parseInt(num))}
                  >
                    <path
                      d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
                      fill="none"
                      stroke={phase.color}
                      strokeWidth={activePhase === parseInt(num) ? "75" : "65"}
                      strokeLinecap="round"
                      opacity={activePhase && activePhase !== parseInt(num) ? 0.4 : 1}
                    />
                    <circle
                      cx={250 + (radius + 35) * Math.cos(angle + (nextAngle - angle) / 2)}
                      cy={250 + (radius + 35) * Math.sin(angle + (nextAngle - angle) / 2)}
                      r="18"
                      fill={phase.color}
                      filter="url(#shadow)"
                    />
                    <text
                      x={250 + (radius + 35) * Math.cos(angle + (nextAngle - angle) / 2)}
                      y={250 + (radius + 35) * Math.sin(angle + (nextAngle - angle) / 2)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="700"
                    >
                      {num}
                    </text>
                  </g>
                );
              })}

              {/* Center hub */}
              <g filter="url(#shadow)">
                <circle cx="250" cy="250" r="90" fill="url(#centerGrad)"/>
                <circle cx="250" cy="250" r="75" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
                <text x="250" y="235" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="white">
                  INTEGRATED
                </text>
                <text x="250" y="255" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="white">
                  ESG
                </text>
                <text x="250" y="275" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="white">
                  EXCELLENCE
                </text>
              </g>
            </svg>

            {/* Phase Details */}
            <div className={`p-6 rounded-xl transition-all duration-300 ${
              activePhase ? 'bg-gray-50 dark:bg-brandDark/30' : 'bg-gray-50/50 dark:bg-brandDark/10'
            }`}>
              {activePhase ? (
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full"
                      style={{ backgroundColor: phaseData[activePhase].color }}
                    >
                      {activePhase}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold font-heading text-brandDark dark:text-white">
                        {phaseData[activePhase].title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{phaseData[activePhase].subtitle}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {phaseData[activePhase].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {phaseData[activePhase].activities.map((activity, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                        style={{ backgroundColor: phaseData[activePhase].color }}
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-400 dark:text-gray-500">
                  Click on any phase to explore the ESG Program Lifecycle
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Maturity Model */}
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            Phase 1: ESG Maturity Assessment
          </h3>
          
          <p className="max-w-4xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            Every engagement begins with a comprehensive assessment of your organization's current ESG position. 
            Our proprietary maturity model evaluates capabilities across five dimensions:
          </p>

          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-5">
            {[
              'Governance & Leadership',
              'Strategy & Integration',
              'Data & Technology',
              'Reporting & Disclosure',
              'Culture & Capability'
            ].map((dimension, idx) => (
              <div 
                key={idx}
                className="p-4 text-center transition-colors duration-300 bg-white border-2 dark:bg-surfaceDark border-brandPrimary/20 dark:border-brandAccent/20 rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent"
              >
                <div className="mb-2 text-3xl">{['⚖️', '📊', '💻', '📋', '🎓'][idx]}</div>
                <p className="text-sm font-semibold text-brandDark dark:text-white">{dimension}</p>
              </div>
            ))}
          </div>

          {/* Maturity Stages */}
          <div className="overflow-hidden bg-white shadow-lg dark:bg-surfaceDark rounded-xl">
            <div className="p-4 bg-gradient-to-r from-brandDark to-brandPrimary dark:from-bgDark dark:to-brandNavy">
              <h4 className="text-xl font-bold text-center text-white font-heading">
                ESG Maturity Model - Five Stages
              </h4>
            </div>
            <div className="p-6">
              {maturityStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-lg mb-3 last:mb-0 ${
                    idx === 4 
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500' 
                      : 'bg-gray-50 dark:bg-brandDark/30'
                  }`}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white rounded-full bg-brandPrimary dark:bg-brandAccent">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-brandDark dark:text-white">{stage.stage}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Country Execution */}
        <div className="max-w-4xl p-8 mx-auto mt-16 border-l-4 bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary dark:border-brandAccent rounded-r-xl">
          <h4 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
            Multi-Country, Multi-Regulation Execution
          </h4>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            For multinational organizations, ESG implementation presents unique challenges. Regulatory requirements 
            vary significantly across jurisdictions—from the EU's comprehensive CSRD to India's BRSR, from Singapore's 
            sustainability reporting requirements to emerging frameworks across the Middle East.
          </p>
          <ul className="space-y-2">
            {[
              'Centralized Governance, Localized Execution: Global policies with region-specific adaptations',
              'Regulatory Intelligence: Continuous monitoring of evolving ESG regulations across jurisdictions',
              'Harmonized Reporting: Collect once, report many approaches for multiple disclosure requirements',
              'Cross-Border Coordination: Managing value chain emissions across international operations'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 text-brandPrimary dark:text-brandAccent">•</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ESGProgramLifecycle;