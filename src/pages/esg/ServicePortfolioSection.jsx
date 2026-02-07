import React, { useState } from 'react';

const ServicePortfolioSection = () => {
  const [selectedService, setSelectedService] = useState('strategy');

  const services = [
    {
      id: 'strategy',
      number: '01',
      icon: '📊',
      title: 'Strategy & Materiality',
      subtitle: 'Strategic Foundation',
      color: '#004080', // brandPrimary
      description: 'Develop comprehensive ESG strategy through rigorous double materiality assessment and stakeholder engagement aligned with global frameworks.',
      offerings: [
        'Double Materiality Assessment',
        'Stakeholder Mapping & Engagement',
        'Peer Benchmarking',
        'SDG Alignment & Prioritization',
        'Strategic Roadmap Development'
      ]
    },
    {
      id: 'climate',
      number: '02',
      icon: '🌡️',
      title: 'Climate & GHG Management',
      subtitle: 'Decarbonization Excellence',
      color: '#003366', // brandNavy
      description: 'End-to-end climate program development, from complex GHG emissions measurement to the implementation of science-based targets.',
      offerings: [
        'Scope 1, 2, and 3 Inventorization',
        'TCFD-Aligned Risk Assessment',
        'SBTi Alignment & Submission',
        'Net-Zero Strategy Development',
        'Climate Scenario Modeling'
      ]
    },
    {
      id: 'reporting',
      number: '03',
      icon: '📋',
      title: 'Reporting & Disclosure',
      subtitle: 'Regulatory Precision',
      color: '#FFB800', // brandGold
      description: 'Navigate the complex global reporting landscape including CSRD, BRSR, and ISSB with institutional-grade precision.',
      offerings: [
        'CSRD / ESRS Implementation',
        'BRSR & SEBI Compliance',
        'ISSB (IFRS S1/S2) Readiness',
        'GRI & SASB Framework Support',
        'Assurance Readiness Support'
      ]
    },
    {
      id: 'governance',
      number: '04',
      icon: '⚖️',
      title: 'Governance & Controls',
      subtitle: 'Institutional Oversight',
      color: '#001F3F', // brandDark
      description: 'Design and implement robust governance structures and internal controls to ensure data integrity and board-level oversight.',
      offerings: [
        'Board Committee Design',
        'ESG Policy Architecture',
        'Internal Control Frameworks',
        'Data Governance Systems',
        'SOP & Manual Development'
      ]
    }
  ];

  const activeData = services.find(s => s.id === selectedService);

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Integrated Solutions
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-surfaceLight text-4xl lg:text-5xl uppercase leading-tight">
            Sustainability & <br /> <span className="text-brandPrimary underline decoration-brandAccent">ESG Service Portfolio</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">
          {/* Service Selector (Sidebar) */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`relative p-6 text-left rounded-2xl border-2 transition-all duration-300 group overflow-hidden ${
                  selectedService === service.id 
                  ? 'bg-brandDark border-brandPrimary shadow-xl translate-x-2' 
                  : 'bg-surfaceLight dark:bg-surfaceDark border-transparent hover:border-brandPrimary/30'
                }`}
              >
                {/* Active Indicator Bar */}
                {selectedService === service.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brandGold" />
                )}

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl transition-transform duration-500 ${selectedService === service.id ? 'scale-110' : 'grayscale group-hover:grayscale-0'}`}>
                      {service.icon}
                    </span>
                    <div>
                      <h4 className={`text-sm font-black uppercase tracking-tight ${selectedService === service.id ? 'text-white' : 'text-brandDark dark:text-surfaceLight'}`}>
                        {service.title}
                      </h4>
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${selectedService === service.id ? 'text-brandGold' : 'text-brandDark/40 dark:text-surfaceLight/40'}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xl font-black opacity-10 ${selectedService === service.id ? 'text-white' : 'text-brandDark dark:text-white'}`}>
                    {service.number}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Service Detail Display */}
          <div className="lg:w-2/3">
            <div className="h-full p-8 lg:p-14 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-center">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandPrimary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brandGold/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-bgLight dark:bg-bgDark flex items-center justify-center text-5xl shadow-inner">
                    {activeData.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-brandDark dark:text-white uppercase leading-none mb-2">
                      {activeData.title}
                    </h3>
                    <div className="h-1 w-20 bg-brandGold" />
                  </div>
                </div>

                <p className="text-xl text-brandDark/70 dark:text-surfaceLight/70 font-sans leading-relaxed mb-12 italic">
                  "{activeData.description}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.offerings.map((offering, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 p-5 bg-bgLight dark:bg-bgDark rounded-2xl border border-transparent hover:border-brandGold transition-all group"
                    >
                      <div className="w-2 h-2 rounded-full bg-brandGold group-hover:scale-150 transition-transform" />
                      <span className="text-xs font-bold text-brandDark dark:text-surfaceLight uppercase tracking-wide">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Excellence Bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 pt-12 border-t border-borderLight dark:border-borderDark">
          {[
            { label: 'Methodology', value: 'Proprietary Lifecycle' },
            { label: 'Compliance', value: 'Multi-Framework' },
            { label: 'Delivery', value: 'Integrated Excellence' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[3px] text-brandDark/40 dark:text-surfaceLight/40 mb-1">{item.label}</p>
              <p className="text-sm font-bold text-brandDark dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolioSection;