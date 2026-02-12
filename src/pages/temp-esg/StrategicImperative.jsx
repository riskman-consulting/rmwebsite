import React, { useState } from 'react';

const StrategicImperative = () => {
  const [activePhase, setActivePhase] = useState(null);

  const evolutionPhases = [
    {
      period: '2000 - 2010',
      title: 'COMPLIANCE',
      icon: '📋',
      focus: 'Regulatory focus',
      characteristic: 'Risk mitigation',
      outcome: 'Reporting burden',
      color: 'bg-red-500/20 dark:bg-red-600/30'
    },
    {
      period: '2010 - 2020',
      title: 'STRATEGY',
      icon: '📈',
      focus: 'Business integration',
      characteristic: 'Stakeholder value',
      outcome: 'Efficiency gains',
      color: 'bg-yellow-500/20 dark:bg-yellow-600/30'
    },
    {
      period: '2020+',
      title: 'VALUE CREATION',
      icon: '🚀',
      focus: 'Competitive advantage',
      characteristic: 'Innovation driver',
      outcome: 'Enterprise value',
      color: 'bg-green-500/20 dark:bg-green-600/30'
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="mb-6 text-4xl font-bold text-center font-heading md:text-5xl text-brandDark dark:text-white">
            Sustainability & ESG: The Strategic Imperative
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Sustainability is no longer a peripheral concern—it has become a core determinant of enterprise value, 
            competitive resilience, and long-term business viability. Environmental, Social, and Governance (ESG) criteria 
            now fundamentally shape how organizations are evaluated by investors, regulators, customers, and society at large.
          </p>
        </div>

        {/* Evolution Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            The Evolution from Compliance to Value Creation
          </h3>
          
          <p className="max-w-4xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            The ESG landscape has undergone a profound transformation. What began as voluntary corporate social 
            responsibility initiatives has evolved into a sophisticated framework that directly influences capital 
            allocation, operational excellence, and strategic positioning.
          </p>

          {/* Timeline Visualization */}
          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 hidden h-1 top-24 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 md:block"></div>
            
            {/* Phase Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {evolutionPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    activePhase === index ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onMouseEnter={() => setActivePhase(index)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  {/* Period Badge */}
                  <div className="absolute z-10 -translate-x-1/2 -top-4 left-1/2">
                    <div className="px-4 py-2 rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent">
                      <span className="text-sm font-semibold text-white dark:text-brandDark whitespace-nowrap">
                        {phase.period}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`mt-8 ${phase.color} border-2 border-brandPrimary/20 dark:border-brandAccent/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                    activePhase === index ? 'border-brandPrimary dark:border-brandAccent shadow-2xl' : ''
                  }`}>
                    {/* Icon */}
                    <div className="mb-4 text-6xl text-center">{phase.icon}</div>
                    
                    {/* Title */}
                    <h4 className="mb-6 text-2xl font-bold text-center font-heading text-brandDark dark:text-white">
                      {phase.title}
                    </h4>

                    {/* Characteristics */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-lg text-brandPrimary dark:text-brandAccent">•</span>
                        <p className="text-gray-700 dark:text-gray-300">{phase.focus}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg text-brandPrimary dark:text-brandAccent">•</span>
                        <p className="text-gray-700 dark:text-gray-300">{phase.characteristic}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg text-brandPrimary dark:text-brandAccent">•</span>
                        <p className="text-gray-700 dark:text-gray-300">{phase.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Stakeholder Imperative */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="mb-8 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            The Multi-Stakeholder Imperative
          </h3>
          
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            Multiple forces are converging to make ESG excellence a business imperative:
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: '💰',
                title: 'Investor Expectations',
                description: 'Global institutional investors increasingly integrate ESG factors into investment decisions, with sustainable investment assets exceeding trillions of US dollars globally.'
              },
              {
                icon: '📜',
                title: 'Regulatory Acceleration',
                description: 'Jurisdictions worldwide are mandating ESG disclosures—from the EU\'s CSRD to India\'s BRSR requirements, California\'s climate laws, and SEC climate disclosure rules.'
              },
              {
                icon: '🛒',
                title: 'Customer & Consumer Preferences',
                description: 'Both B2B and B2C customers are prioritizing sustainable suppliers and products.'
              },
              {
                icon: '🏆',
                title: 'Talent & Societal Expectations',
                description: 'Top talent increasingly seeks employers with genuine sustainability commitments.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h4 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Risk Management */}
        <div className="max-w-4xl p-8 mx-auto mt-16 border-l-4 bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary dark:border-brandAccent rounded-r-xl">
          <h4 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
            ESG as Enterprise Risk Management
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Sustainability considerations are now integral to enterprise risk management frameworks. 
            Climate-related risks—both physical and transitional—can materially impact business continuity, 
            asset valuations, and long-term strategic viability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicImperative;