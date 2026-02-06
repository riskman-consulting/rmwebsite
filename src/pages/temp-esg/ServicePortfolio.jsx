import React, { useState } from 'react';

const ServicePortfolio = () => {
  const [activeService, setActiveService] = useState(null);

  const services = {
    strategy: {
      icon: '📊',
      title: 'ESG Strategy & Materiality',
      subtitle: 'Foundation for sustainable transformation',
      color: '#004080',
      description: 'Develop comprehensive ESG strategy through rigorous double materiality assessment, stakeholder engagement, and strategic target setting aligned with global frameworks.',
      offerings: [
        'Double materiality assessment (impact and financial perspectives)',
        'Stakeholder mapping and engagement design',
        'Peer benchmarking and best practice analysis',
        'SDG alignment and impact prioritization'
      ],
      position: { top: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    climate: {
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
      ],
      position: { top: '30%', right: '5%' }
    },
    reporting: {
      icon: '📋',
      title: 'ESG Reporting & Disclosure',
      subtitle: 'Transparent stakeholder communication',
      color: '#003366',
      description: 'Navigate the complex reporting landscape with confidence through multi-framework disclosure support.',
      offerings: [
        'CSRD/ESRS compliance and reporting',
        'ISSB (IFRS S1/S2) implementation',
        'BRSR and regulatory compliance (India, US SEC)',
        'GRI Standards alignment'
      ],
      position: { bottom: '30%', right: '5%' }
    },
    governance: {
      icon: '⚖️',
      title: 'ESG Governance & Operating Model',
      subtitle: 'Building organizational accountability',
      color: '#7B1FA2',
      description: 'Design and implement robust governance structures that embed ESG accountability throughout the organization.',
      offerings: [
        'Board ESG oversight framework design',
        'ESG committee structure and charter development',
        'Policy framework development',
        'RACI and accountability matrices'
      ],
      position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    controls: {
      icon: '🔒',
      title: 'Internal Controls & Assurance',
      subtitle: 'Assurance-ready ESG programs',
      color: '#FF9800',
      description: 'Prepare for the era of mandatory ESG assurance with controls designed for sustainability reporting.',
      offerings: [
        'COSO-aligned internal control framework for sustainability',
        'ESG data governance and quality management',
        'Assurance readiness assessment and remediation',
        'Limited and reasonable assurance preparation'
      ],
      position: { bottom: '30%', left: '5%' }
    },
    capability: {
      icon: '🎓',
      title: 'ESG Capability Building',
      subtitle: 'Sustainable internal capabilities',
      color: '#C62828',
      description: 'Build lasting internal capabilities through comprehensive training programs tailored to executives, practitioners, and operational teams.',
      offerings: [
        'Executive immersion programs',
        'Board ESG education',
        'Practitioner certification',
        'Role-based training programs'
      ],
      position: { top: '30%', left: '5%' }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl">
            Sustainability & ESG Service Portfolio
          </h2>
          <p className="text-lg leading-relaxed text-brandLight/90">
            RiskMan offers a comprehensive, modular service portfolio that can be deployed individually or as 
            integrated solutions. Our services are designed to be scalable and globally deployable.
          </p>
        </div>

        {/* Hexagonal Architecture */}
        <div className="max-w-6xl p-8 mx-auto mb-12 bg-white shadow-2xl dark:bg-surfaceDark rounded-2xl">
          <div className="relative h-[600px] md:h-[700px]">
            {/* Center Hub */}
            <div className="absolute z-20 flex flex-col items-center justify-center w-40 h-40 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full shadow-2xl top-1/2 left-1/2 md:w-48 md:h-48 bg-gradient-to-br from-brandDark to-brandPrimary dark:from-bgDark dark:to-brandNavy dark:border-surfaceDark">
              <span className="mb-2 text-4xl">🎯</span>
              <span className="text-xs font-semibold text-white">Integrated</span>
              <span className="text-lg font-bold text-white">ESG</span>
              <span className="text-lg font-bold text-white">EXCELLENCE</span>
            </div>

            {/* Service Modules */}
            {Object.entries(services).map(([key, service]) => (
              <div
                key={key}
                className="absolute w-40 transition-all duration-300 cursor-pointer md:w-48 hover:scale-110 hover:z-30"
                style={service.position}
                onMouseEnter={() => setActiveService(key)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div 
                  className={`rounded-2xl p-4 shadow-lg ${
                    activeService === key ? 'shadow-2xl scale-110' : ''
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                  }}
                >
                  <div className="flex items-center justify-center mx-auto mb-3 text-3xl border bg-white/20 backdrop-blur-sm rounded-xl w-14 h-14 border-white/30">
                    {service.icon}
                  </div>
                  <h4 className="text-sm font-bold leading-tight text-center text-white font-heading">
                    {service.title}
                  </h4>
                </div>
                
                {/* Connection line */}
                <div 
                  className="absolute w-1 top-1/2 left-1/2 bg-white/30"
                  style={{
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: 'top center'
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Service Details Panel */}
          <div className={`mt-8 p-6 rounded-xl transition-all duration-300 ${
            activeService 
              ? 'bg-gray-50 dark:bg-brandDark/30 opacity-100' 
              : 'bg-gray-50/50 dark:bg-brandDark/10 opacity-70'
          }`}>
            {activeService ? (
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="flex items-center justify-center flex-shrink-0 text-3xl shadow-lg w-14 h-14 rounded-xl"
                    style={{ backgroundColor: services[activeService].color }}
                  >
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-heading text-brandDark dark:text-white">
                      {services[activeService].title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{services[activeService].subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {services[activeService].description}
                </p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {services[activeService].offerings.map((offering, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2 p-3 bg-white rounded-lg dark:bg-surfaceDark"
                    >
                      <span className="text-brandPrimary dark:text-brandAccent mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-400 dark:text-gray-500">
                Hover over a service module to see details
              </p>
            )}
          </div>
        </div>

        {/* Capabilities Bar */}
        <div className="max-w-6xl p-6 mx-auto bg-white shadow-lg dark:bg-surfaceDark rounded-xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: '🌍', text: 'Global Delivery' },
              { icon: '🏭', text: 'Industry Expertise' },
              { icon: '💻', text: 'Technology Enabled' },
              { icon: '🤝', text: 'Partnership Approach' }
            ].map((cap, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-3 text-3xl w-14 h-14 bg-gradient-to-br from-brandPrimary/20 to-brandNavy/20 dark:from-brandAccent/20 dark:to-brandGold/20 rounded-xl">
                  {cap.icon}
                </div>
                <span className="text-sm font-semibold text-brandDark dark:text-white">
                  {cap.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        {/* <p className="mt-6 text-xs text-center text-brandLight/60">
          RiskMan Consulting LLP | Sustainability & ESG Practice
        </p> */}
      </div>
    </section>
  );
};

export default ServicePortfolio;