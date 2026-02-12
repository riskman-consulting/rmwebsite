import React, { useState } from 'react';

const ServicePortfolioSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'strategy',
      number: 1,
      icon: '📊',
      title: 'ESG Strategy & Materiality',
      subtitle: 'Foundation for sustainable transformation',
      color: '#1565C0',
      description: 'Develop comprehensive ESG strategy through rigorous double materiality assessment, stakeholder engagement, and strategic target setting aligned with global frameworks.',
      offerings: [
        'Double Materiality',
        'Stakeholder Mapping',
        'Peer Benchmarking',
        'SDG Alignment',
        'Target Setting',
        'Roadmap Development'
      ]
    },
    {
      id: 'climate',
      number: 2,
      icon: '🌡️',
      title: 'Climate Risk & GHG Management',
      subtitle: 'Driving decarbonization excellence',
      color: '#2E7D32',
      description: 'Comprehensive climate program development from emissions measurement through decarbonization implementation.',
      offerings: [
        'GHG inventorization (Scope 1, 2, and 3) per GHG Protocol',
        'Climate risk assessment and scenario modeling (TCFD-aligned)',
        'Science-Based Targets initiative (SBTi) support',
        'Net-zero strategy and decarbonization roadmaps'
      ]
    },
    {
      id: 'reporting',
      number: 3,
      icon: '📋',
      title: 'ESG Reporting & Disclosure',
      subtitle: 'Transparent stakeholder communication',
      color: '#00838F',
      description: 'Navigate complex global disclosure requirements with expert guidance ensuring compliance and stakeholder confidence.',
      offerings: [
        'CSRD/ESRS compliance and reporting',
        'ISSB (IFRS S1/S2) implementation',
        'BRSR and regulatory compliance (India, US SEC)',
        'GRI Standards alignment',
        'CDP Response',
        'Integrated Reporting'
      ]
    },
    {
      id: 'governance',
      number: 4,
      icon: '⚖️',
      title: 'ESG Governance & Operating Model',
      subtitle: 'Building organizational accountability',
      color: '#37474F',
      description: 'Design and implement robust governance structures with clear accountability, decision-making frameworks, and performance management.',
      offerings: [
        'Board ESG oversight framework design',
        'ESG committee structure and charter development',
        'Policy framework development',
        'RACI Development',
        'Performance Management',
        'Incentive Alignment'
      ]
    },
    {
      id: 'controls',
      number: 5,
      icon: '🔒',
      title: 'Internal Controls & Assurance',
      subtitle: 'Assurance-ready ESG programs',
      color: '#7B1FA2',
      description: 'Prepare for the era of mandatory ESG assurance with controls designed for sustainability reporting.',
      offerings: [
        'COSO-aligned internal control framework for sustainability',
        'ESG data governance and quality management',
        'Assurance readiness assessment and remediation',
        'Limited and reasonable assurance preparation'
      ]
    }
  ];

  const capabilities = [
    { icon: '🌍', text: 'Global Delivery' },
    { icon: '🏭', text: 'Industry Expertise' },
    { icon: '💻', text: 'Technology Enabled' },
    { icon: '🤝', text: 'Partnership Approach' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
      <div className="container px-6 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="relative inline-block mb-5">
            <span className="text-xs sm:text-sm font-bold text-brandAccent tracking-[2px] uppercase">
              Comprehensive Solutions
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
          </div>
          
          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
            Sustainability & ESG Service Portfolio
          </h2>
          
          <p className="max-w-4xl mx-auto font-serif text-lg leading-relaxed sm:text-xl md:text-2xl text-white/90">
            RiskMan offers a comprehensive, modular service portfolio that can be deployed individually or as integrated solutions.
          </p>
        </div>

        {/* Service Architecture */}
        <div className="relative p-8 mb-12 shadow-2xl bg-white/95 dark:bg-surfaceDark/95 rounded-3xl lg:p-12">
          {/* Center Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-brandDark to-brandPrimary dark:from-brandNavy dark:to-brandPrimary rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white dark:border-surfaceDark animate-[pulse_3s_ease-in-out_infinite]">
                <span className="mb-2 text-4xl">🎯</span>
                <span className="text-xs font-semibold uppercase text-white/90">Integrated</span>
                <span className="text-base font-bold text-white">ESG</span>
                <span className="text-base font-bold text-white">Excellence</span>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
                  selectedService === service.id
                    ? 'scale-105 shadow-2xl ring-2'
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                  ringColor: selectedService === service.id ? service.color : 'transparent'
                }}
              >
                <div className="p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 text-2xl border rounded-full bg-white/20 backdrop-blur-md border-white/30"
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-white/25">
                          {service.number}
                        </span>
                        <h3 className="text-lg font-bold leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs opacity-90">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {selectedService === service.id && (
                    <div className="mt-4 pt-4 border-t border-white/30 animate-[fadeIn_0.3s_ease-out]">
                      <p className="mb-4 text-sm leading-relaxed opacity-95">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.offerings.map((offering, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 text-xs transition-colors rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
                          >
                            • {offering}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService !== service.id && (
                    <div className="mt-2 text-xs opacity-80">
                      Click to explore offerings →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities Bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center text-2xl shadow-md w-11 h-11 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-brandNavy dark:to-brandPrimary rounded-xl">
                  {capability.icon}
                </div>
                <span className="text-sm font-semibold text-brandDark dark:text-white">
                  {capability.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details in Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Additional Service Details */}
          {[
            {
              icon: '📊',
              title: 'ESG Strategy & Materiality Assessment',
              description: 'Establish the strategic foundation for your ESG program through rigorous materiality analysis and stakeholder-informed prioritization.',
              items: [
                'Double materiality assessment (impact and financial perspectives)',
                'Stakeholder mapping and engagement design',
                'Peer benchmarking and best practice analysis',
                'SDG alignment and impact prioritization'
              ]
            },
            {
              icon: '🌡️',
              title: 'Climate Risk & GHG Management',
              description: 'Comprehensive climate program development from emissions measurement through decarbonization implementation.',
              items: [
                'GHG inventorization (Scope 1, 2, and 3) per GHG Protocol',
                'Climate risk assessment and scenario modeling (TCFD-aligned)',
                'Science-Based Targets initiative (SBTi) support',
                'Net-zero strategy and decarbonization roadmaps'
              ]
            },
            {
              icon: '📋',
              title: 'ESG Reporting & Disclosure',
              description: 'Navigate the complex reporting landscape with confidence through multi-framework disclosure support.',
              items: [
                'CSRD/ESRS compliance and reporting',
                'ISSB (IFRS S1/S2) implementation',
                'BRSR and regulatory compliance (India, US SEC)',
                'GRI Standards and CDP alignment'
              ]
            },
            {
              icon: '⚖️',
              title: 'ESG Governance & Operating Model',
              description: 'Design and implement robust governance structures that embed ESG accountability throughout the organization.',
              items: [
                'Board ESG oversight framework design',
                'ESG committee structure and charter development',
                'Policy framework development',
                'Performance management systems'
              ]
            }
          ].map((detail, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white shadow-lg dark:bg-surfaceDark rounded-2xl hover:shadow-xl"
            >
              <span className="block mb-4 text-5xl">{detail.icon}</span>
              <h3 className="mb-3 text-2xl font-bold text-brandDark dark:text-white">
                {detail.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                {detail.description}
              </p>
              <ul className="space-y-3">
                {detail.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1 font-bold text-brandAccent shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4); }
          50% { box-shadow: 0 10px 60px rgba(212, 175, 55, 0.6); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ServicePortfolioSection;