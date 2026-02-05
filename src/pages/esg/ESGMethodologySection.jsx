import React, { useState } from 'react';

const ESGMethodologySection = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const lifecyclePhases = [
    {
      number: 1,
      title: 'ASSESS',
      subtitle: 'Maturity Assessment & Gap Analysis',
      color: '#1565C0',
      icon: '📊',
      description: 'Comprehensive evaluation of your organization\'s current ESG position across governance, strategy, data, reporting, and culture dimensions. Establishes baseline metrics and identifies improvement opportunities.',
      activities: ['ESG Maturity Assessment', 'Gap Analysis', 'Stakeholder Mapping', 'Peer Benchmarking', 'Risk Identification']
    },
    {
      number: 2,
      title: 'DESIGN',
      subtitle: 'Strategy & Roadmap Development',
      color: '#00897B',
      icon: '🎯',
      description: 'Development of tailored ESG strategy aligned with business objectives. Creates prioritized roadmap with clear milestones, resource requirements, and success metrics.',
      activities: ['Materiality Analysis', 'Target Setting', 'Roadmap Creation', 'Business Case Development', 'Framework Selection']
    },
    {
      number: 3,
      title: 'BUILD',
      subtitle: 'Governance & Infrastructure',
      color: '#7B1FA2',
      icon: '🏗️',
      description: 'Establishment of robust governance structures, data collection systems, and process frameworks. Builds the foundation for sustainable ESG program execution.',
      activities: ['Governance Framework', 'Data Architecture', 'Policy Development', 'Control Design', 'Technology Selection']
    },
    {
      number: 4,
      title: 'IMPLEMENT',
      subtitle: 'Rollout & Change Management',
      color: '#F57C00',
      icon: '🚀',
      description: 'Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.',
      activities: ['Phased Rollout', 'Training Programs', 'Change Management', 'Pilot Programs', 'Stakeholder Engagement']
    },
    {
      number: 5,
      title: 'OPERATE',
      subtitle: 'Manage, Report & Engage',
      color: '#C62828',
      icon: '⚙️',
      description: 'Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.',
      activities: ['Performance Monitoring', 'Disclosure & Reporting', 'Ratings Management', 'Stakeholder Communication', 'Assurance Preparation']
    },
    {
      number: 6,
      title: 'OPTIMIZE',
      subtitle: 'Review, Improve & Innovate',
      color: '#0D4F6B',
      icon: '🔄',
      description: 'Continuous improvement through performance review, emerging trend analysis, and innovation. Drives the cycle back to assessment for sustained excellence.',
      activities: ['Performance Review', 'Trend Analysis', 'Best Practice Updates', 'Innovation Initiatives', 'Continuous Improvement']
    }
  ];

  const maturityStages = [
    { stage: '1. INITIAL', characteristics: 'Ad hoc ESG activities; reactive compliance; minimal data' },
    { stage: '2. DEVELOPING', characteristics: 'Formalized policies; basic metrics; initial engagement' },
    { stage: '3. DEFINED', characteristics: 'Integrated into operations; standardized governance' },
    { stage: '4. ADVANCED', characteristics: 'Mature practices; proactive management; framework alignment' },
    { stage: '5. TRANSFORMATIVE', characteristics: 'Industry-leading; embedded in culture; driving innovation' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-bgLight to-white dark:from-bgDark dark:to-surfaceDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="relative inline-block mb-5">
            <span className="text-xs sm:text-sm font-bold text-brandPrimary dark:text-brandAccent tracking-[2px] uppercase">
              Our Approach
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
          </div>
          
          <h2 className="font-heading font-extrabold text-brandDark dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
            RiskMan's Global ESG Program Methodology
          </h2>
          
          <p className="max-w-4xl mx-auto font-serif text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
            RiskMan delivers enterprise-grade ESG programs that combine strategic vision with practical execution excellence.
          </p>
        </div>

        {/* Lifecycle Overview */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold text-center font-heading sm:text-3xl text-brandDark dark:text-white">
            End-to-End ESG Lifecycle Coverage
          </h3>
          
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-400">
            Our comprehensive approach addresses every stage of the ESG journey—from initial assessment through sustained performance optimization.
          </p>

          {/* Lifecycle Phases Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lifecyclePhases.map((phase, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
                className={`bg-white dark:bg-surfaceDark rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 border-2 ${
                  selectedPhase === index
                    ? 'scale-105 shadow-2xl'
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
                style={{ 
                  borderColor: selectedPhase === index ? phase.color : 'transparent'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full shadow-lg"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{phase.icon}</span>
                      <h4 className="text-lg font-bold" style={{ color: phase.color }}>
                        {phase.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {selectedPhase === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-[fadeIn_0.3s_ease-out]">
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {phase.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full text-white font-medium"
                          style={{ backgroundColor: phase.color }}
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Integration Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full shadow-xl bg-gradient-to-br from-brandDark to-brandPrimary dark:from-brandNavy dark:to-brandPrimary">
              <span className="text-3xl">🎯</span>
              <div className="text-left">
                <div className="text-xs font-semibold tracking-wide uppercase opacity-90">Integrated</div>
                <div className="text-lg font-bold">ESG Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 1: ESG Maturity Assessment */}
        <div className="mb-20">
          <h3 className="relative pl-6 mb-4 text-2xl font-bold font-heading sm:text-3xl md:text-4xl text-brandDark dark:text-white">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[70%] bg-gradient-to-b from-brandAccent to-brandPrimary rounded-full" />
            Phase 1: ESG Maturity Assessment
          </h3>
          
          <p className="max-w-4xl mb-8 text-gray-600 dark:text-gray-400">
            Every engagement begins with a comprehensive assessment of your organization's current ESG position. Our proprietary maturity model evaluates capabilities across five dimensions:
          </p>

          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
            {[
              { title: 'Governance & Leadership', desc: 'Board oversight, executive accountability, organizational structure, policy frameworks' },
              { title: 'Strategy & Integration', desc: 'Materiality analysis, target setting, business strategy alignment' },
              { title: 'Data & Technology', desc: 'Data collection infrastructure, quality controls, systems integration' },
              { title: 'Reporting & Disclosure', desc: 'Framework alignment, disclosure quality, assurance readiness' },
              { title: 'Culture & Capability', desc: 'Organizational awareness, skill development, change management' }
            ].map((dimension, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white border-l-4 shadow-md dark:bg-surfaceDark rounded-xl hover:shadow-xl hover:-translate-y-1 border-l-brandAccent"
              >
                <h4 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                  {index + 1}. {dimension.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {dimension.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Maturity Stages */}
          <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-surfaceDark dark:to-brandDark rounded-2xl lg:p-10">
            <h4 className="mb-6 text-xl font-bold text-center text-brandDark dark:text-white">
              ESG Maturity Model: Five-Stage Progression
            </h4>
            
            <div className="space-y-4">
              {maturityStages.map((stage, index) => (
                <div
                  key={index}
                  className="p-5 transition-all duration-300 bg-white border-l-4 shadow-md dark:bg-surfaceDark rounded-xl hover:shadow-lg hover:-translate-x-2"
                  style={{ 
                    borderLeftColor: `hsl(${200 + index * 20}, 70%, ${40 + index * 10}%)` 
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full shrink-0"
                      style={{ 
                        backgroundColor: `hsl(${200 + index * 20}, 70%, ${40 + index * 10}%)` 
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1 font-bold text-brandDark dark:text-white">
                        {stage.stage}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {stage.characteristics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Country Execution */}
        <div className="p-10 text-white bg-gradient-to-br from-brandDark to-brandNavy dark:from-surfaceDark dark:to-brandDark rounded-2xl lg:p-14">
          <h3 className="mb-6 text-2xl font-bold font-heading sm:text-3xl">
            Multi-Country, Multi-Regulation Execution
          </h3>
          
          <p className="mb-8 leading-relaxed text-white/90">
            For multinational organizations, ESG implementation presents unique challenges. Regulatory requirements vary significantly across jurisdictions—from the EU's comprehensive CSRD to India's BRSR, from Singapore's sustainability reporting requirements to emerging frameworks across the Middle East.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: '🌍',
                title: 'Centralized Governance, Localized Execution',
                desc: 'Global policies with region-specific adaptations'
              },
              {
                icon: '📡',
                title: 'Regulatory Intelligence',
                desc: 'Continuous monitoring of evolving ESG regulations across jurisdictions'
              },
              {
                icon: '📊',
                title: 'Harmonized Reporting',
                desc: 'Collect once, report many approaches for multiple disclosure requirements'
              },
              {
                icon: '🔗',
                title: 'Cross-Border Coordination',
                desc: 'Managing value chain emissions across international operations'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-md border-white/20 rounded-xl hover:bg-white/15"
              >
                <span className="block mb-4 text-4xl">{item.icon}</span>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ESGMethodologySection;