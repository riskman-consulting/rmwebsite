import React, { useState } from 'react';

const FoundationalFrameworks = () => {
  const [activeFramework, setActiveFramework] = useState(null);

  const frameworks = [
    {
      id: 'sdg',
      icon: '🎯',
      title: 'UN Sustainable Development Goals',
      shortTitle: 'SDGs',
      color: '#004080',
      description: 'The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity\'s most pressing challenges—from poverty eradication and quality education to climate action and responsible consumption.',
      features: [
        'Materiality-Driven Prioritization: Identifying which SDGs are most relevant to your industry and value chain',
        'Value Chain Integration: Mapping SDG contributions across your entire value chain',
        'Impact Measurement: Establishing quantifiable metrics connecting business performance to SDG outcomes',
        'Strategic Integration: Embedding SDG considerations into corporate strategy and capital allocation'
      ]
    },
    {
      id: 'ghg',
      icon: '🌡️',
      title: 'GHG Protocol & Climate Measurement',
      shortTitle: 'GHG Protocol',
      color: '#2E7D32',
      description: 'The GHG Protocol provides the globally accepted standard for measuring and managing greenhouse gas emissions. It serves as the foundation for nearly all corporate climate reporting frameworks and regulatory requirements worldwide.',
      features: [
        'Corporate Standard: Requirements for companies preparing GHG emissions inventories at the corporate level',
        'Scope 3 Standard: Comprehensive guidance for measuring value chain emissions across 15 categories',
        'Boundary Setting: Principles for establishing organizational and operational boundaries',
        'Quality Principles: Relevance, completeness, consistency, transparency, and accuracy'
      ]
    },
    {
      id: 'scopes',
      icon: '📊',
      title: 'Understanding Emissions Scopes',
      shortTitle: 'Emissions Scopes',
      color: '#FF9800',
      description: 'Greenhouse gas emissions measurement is fundamental to climate action. Understanding your organization\'s carbon footprint is essential for setting meaningful targets, identifying reduction opportunities, and meeting disclosure requirements.',
      scopes: [
        {
          scope: 'Scope 1',
          title: 'Direct Emissions',
          icon: '🏭',
          description: 'Emissions from sources owned or controlled by the organization',
          examples: ['On-site fuel combustion (boilers, furnaces, vehicles)', 'Manufacturing and processing emissions', 'Fugitive emissions from refrigeration', 'Company-owned fleet operations'],
          note: 'Full operational control and maximum reduction potential'
        },
        {
          scope: 'Scope 2',
          title: 'Indirect Energy Emissions',
          icon: '⚡',
          description: 'Emissions from purchased electricity, steam, heating, and cooling',
          examples: ['Grid electricity consumption across facilities', 'Purchased steam and district heating/cooling', 'Energy consumption in leased properties', 'Data center electricity usage'],
          note: 'Addressable through renewable energy procurement and efficiency'
        },
        {
          scope: 'Scope 3',
          title: 'Value Chain Emissions',
          icon: '🔗',
          description: 'All other indirect emissions across the value chain',
          examples: ['Upstream: Purchased goods/services, transportation, capital goods', 'Downstream: Product use, end-of-life treatment, investments', 'Employee commuting and business travel', 'Franchises and leased assets'],
          note: 'Often 80%+ of total footprint; requires supply chain engagement'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
            Foundational ESG & Sustainability Frameworks
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, 
            comparability, and credibility. RiskMan's approach integrates these foundational standards to 
            deliver comprehensive, internationally aligned sustainability solutions.
          </p>
        </div>

        {/* Framework Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {frameworks.map((framework) => (
            <div
              key={framework.id}
              className={`bg-white dark:bg-surfaceDark rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                activeFramework === framework.id ? 'ring-2 ring-offset-2 dark:ring-offset-bgDark' : ''
              }`}
              style={{ 
                ...(activeFramework === framework.id && { 
                  '--tw-ring-color': framework.color 
                }) 
              }}
            >
              {/* Card Header */}
              <div 
                className="p-6 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${framework.color}15, ${framework.color}05)` }}
                onClick={() => setActiveFramework(activeFramework === framework.id ? null : framework.id)}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="flex items-center justify-center w-16 h-16 text-3xl shadow-lg rounded-xl"
                    style={{ backgroundColor: framework.color }}
                  >
                    {framework.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-2xl font-bold font-heading text-brandDark dark:text-white">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click to {activeFramework === framework.id ? 'collapse' : 'expand'} details
                    </p>
                  </div>
                  <div className={`text-2xl transition-transform duration-300 ${activeFramework === framework.id ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeFramework === framework.id ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="p-6 border-t border-borderLight dark:border-borderDark">
                  <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                    {framework.description}
                  </p>

                  {framework.features && (
                    <div className="space-y-4">
                      <h4 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                        {framework.id === 'sdg' ? 'Enterprise SDG Alignment' : 'Key Components'}
                      </h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {framework.features.map((feature, index) => {
                          const [title, ...descParts] = feature.split(':');
                          const desc = descParts.join(':');
                          return (
                            <div 
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-brandDark/30"
                            >
                              <div 
                                className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full"
                                style={{ backgroundColor: framework.color }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <p className="mb-1 font-semibold text-brandDark dark:text-white">
                                  {title}
                                </p>
                                {desc && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {desc.trim()}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {framework.scopes && (
                    <div className="space-y-6">
                      {framework.scopes.map((scope, index) => (
                        <div 
                          key={index}
                          className="p-6 transition-colors duration-300 border-2 border-gray-200 dark:border-borderDark rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{scope.icon}</div>
                            <div className="flex-1">
                              <h5 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                                {scope.scope}: {scope.title}
                              </h5>
                              <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                                {scope.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="ml-16">
                            <ul className="mb-4 space-y-2">
                              {scope.examples.map((example, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="mt-1 text-brandPrimary dark:text-brandAccent">•</span>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{example}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="px-4 py-3 border-l-4 rounded-r bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary dark:border-brandAccent">
                              <p className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <span className="text-lg">💡</span>
                                <span>{scope.note}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="max-w-4xl p-6 mx-auto mt-12 border-l-4 bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary dark:border-brandAccent rounded-r-xl">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            <strong className="text-brandDark dark:text-white">Important:</strong> Greenhouse gas emissions 
            measurement is fundamental to climate action. Understanding your organization's carbon footprint across 
            all three scopes is essential for setting meaningful targets, identifying reduction opportunities, and 
            meeting disclosure requirements. The typical distribution shows that Scope 3 (value chain) emissions 
            often represent 80% or more of an organization's total footprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundationalFrameworks;