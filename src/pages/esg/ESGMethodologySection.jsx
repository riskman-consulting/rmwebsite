import React, { useState } from 'react';

const ESGMethodologySection = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const lifecyclePhases = [
    {
      number: 1,
      title: 'ASSESS',
      subtitle: 'Maturity & Gap Analysis',
      color: '#004080', // brandPrimary
      icon: '📊',
      description: 'Comprehensive evaluation of your organization\'s current ESG position across governance, strategy, and data dimensions.',
      activities: ['Maturity Assessment', 'Gap Analysis', 'Stakeholder Mapping', 'Risk Identification']
    },
    {
      number: 2,
      title: 'DESIGN',
      subtitle: 'Strategy & Roadmap',
      color: '#003366', // brandNavy
      icon: '🎯',
      description: 'Development of tailored ESG strategy aligned with business objectives and prioritized milestones.',
      activities: ['Materiality Analysis', 'Target Setting', 'Roadmap Creation', 'Business Case']
    },
    {
      number: 3,
      title: 'BUILD',
      subtitle: 'Governance & Infrastructure',
      color: '#001F3F', // brandDark
      icon: '🏗️',
      description: 'Establishment of robust governance structures, data architecture, and process frameworks.',
      activities: ['Governance Framework', 'Data Architecture', 'Policy Development', 'Control Design']
    },
    {
      number: 4,
      title: 'IMPLEMENT',
      subtitle: 'Rollout & Training',
      color: '#FFC000', // brandAccent
      icon: '🚀',
      description: 'Systematic deployment of ESG initiatives with a focus on change management and capability building.',
      activities: ['Phased Rollout', 'Training Programs', 'Change Management', 'Pilot Programs']
    },
    {
      number: 5,
      title: 'OPERATE',
      subtitle: 'Manage & Report',
      color: '#FFB800', // brandGold
      icon: '⚙️',
      description: 'Ongoing management of ESG programs, regular reporting, and engagement with external parties.',
      activities: ['Performance Monitoring', 'Disclosure', 'Ratings Management', 'Assurance Prep']
    },
    {
      number: 6,
      title: 'OPTIMIZE',
      subtitle: 'Review & Innovate',
      color: '#F5F5F5', // brandLight
      icon: '🔄',
      description: 'Continuous improvement through performance review, trend analysis, and innovation initiatives.',
      activities: ['Performance Review', 'Trend Analysis', 'Best Practice Updates', 'Innovation']
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border rounded-full bg-brandPrimary/5 border-brandPrimary/10 dark:border-brandGold/20">
            <span className="text-xs font-bold tracking-[3px] uppercase text-brandPrimary dark:text-brandGold">
              Our Methodology
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black leading-tight font-heading text-brandDark dark:text-surfaceLight lg:text-6xl">
            RiskMan's Global ESG <br /> Program Methodology
          </h2>
          <p className="max-w-3xl mx-auto font-sans text-xl leading-relaxed text-brandDark/70 dark:text-surfaceLight/70">
            We deliver enterprise-grade ESG programs that combine strategic vision with practical execution excellence.
          </p>
        </div>

        {/* Lifecycle Phases Grid */}
        <div className="grid grid-cols-1 gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
          {lifecyclePhases.map((phase, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
              className={`group relative p-8 bg-surfaceLight dark:bg-surfaceDark border-2 rounded-[32px] transition-all duration-500 cursor-pointer overflow-hidden ${
                selectedPhase === index ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-xl border-transparent'
              }`}
              style={{ borderColor: selectedPhase === index ? phase.color : 'transparent' }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="flex items-center justify-center text-2xl transition-transform shadow-lg w-14 h-14 rounded-2xl group-hover:rotate-6"
                    style={{ backgroundColor: phase.color, color: phase.number > 3 ? '#001F3F' : '#F5F5F5' }}
                  >
                    {phase.icon}
                  </div>
                  <span className="text-5xl font-black opacity-5" style={{ color: phase.color }}>0{phase.number}</span>
                </div>

                <h4 className="mb-2 text-2xl font-extrabold uppercase font-heading text-brandDark dark:text-white">
                  {phase.title}
                </h4>
                <p className="mb-4 text-xs font-bold tracking-widest text-brandPrimary dark:text-brandGold">
                  {phase.subtitle}
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${selectedPhase === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="mb-6 text-sm leading-relaxed text-brandDark/70 dark:text-surfaceLight/70">
                    {phase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {phase.activities.map((act, i) => (
                      <span key={i} className="px-3 py-1 bg-bgLight dark:bg-bgDark text-[10px] font-bold rounded-full border border-borderLight dark:border-borderDark text-brandDark dark:text-surfaceLight/60">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {!selectedPhase && (
                  <div className="mt-4 text-[10px] font-black uppercase tracking-tighter text-brandPrimary dark:text-brandGold animate-pulse">
                    Click to explore phase details →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Country Execution Section */}
        <div className="relative p-10 lg:p-16 bg-brandDark rounded-[40px] shadow-2xl overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-brandAccent/5 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h3 className="mb-6 text-3xl font-black tracking-tight text-white uppercase font-heading lg:text-4xl">
                Multi-Country, Multi-Regulation Execution
              </h3>
              <p className="mb-8 leading-relaxed text-white/70">
                For multinational organizations, we navigate jurisdiction-specific adaptations—from the EU's CSRD to India's BRSR—ensuring centralized governance with localized precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 transition-all border bg-white/5 rounded-2xl border-white/10 hover:bg-white/10">
                  <span className="block mb-2 text-2xl">🌍</span>
                  <p className="text-[11px] font-bold text-brandGold uppercase">Centralized Governance</p>
                </div>
                <div className="p-4 transition-all border bg-white/5 rounded-2xl border-white/10 hover:bg-white/10">
                  <span className="block mb-2 text-2xl">📡</span>
                  <p className="text-[11px] font-bold text-brandGold uppercase">Regulatory Intelligence</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center w-full border lg:w-1/2 aspect-video rounded-3xl bg-gradient-to-br from-brandPrimary/20 to-brandAccent/10 border-white/10 group">
                <div className="absolute inset-0 bg-brandGold/5 animate-pulse rounded-3xl" />
                <div className="relative z-10 text-center">
                   <div className="mb-2 text-5xl font-black text-brandGold">INTEGRATED</div>
                   <div className="text-white font-black text-3xl tracking-[10px] uppercase">EXCELLENCE</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGMethodologySection;