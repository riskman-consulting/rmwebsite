import React from 'react';

const FoundationalFrameworks = () => {
  const emissionsScopes = [
    {
      title: "Scope 1: Direct Emissions",
      icon: "🏭",
      color: "green",
      description: "Emissions from sources owned or controlled by the organization",
      examples: [
        "On-site fuel combustion (boilers, furnaces, vehicles)",
        "Manufacturing and processing emissions",
        "Fugitive emissions from refrigeration",
        "Company-owned fleet operations"
      ],
      note: "Full operational control and maximum reduction potential"
    },
    {
      title: "Scope 2: Indirect Energy Emissions",
      icon: "⚡",
      color: "teal",
      description: "Emissions from purchased electricity, steam, heating, and cooling",
      examples: [
        "Grid electricity consumption across facilities",
        "Purchased steam and district heating/cooling",
        "Energy consumption in leased properties",
        "Data center electricity usage"
      ],
      note: "Addressable through renewable energy procurement and efficiency"
    },
    {
      title: "Scope 3: Value Chain Emissions",
      icon: "🔗",
      color: "orange",
      description: "All other indirect emissions across the value chain",
      examples: [
        "Upstream: Purchased goods/services, transportation, capital goods",
        "Downstream: Product use, end-of-life treatment, investments",
        "Employee commuting and business travel",
        "Franchises and leased assets"
      ],
      note: "Often 80%+ of total footprint; requires supply chain engagement"
    }
  ];

  const ghgProtocol = [
    {
      title: "Corporate Standard",
      icon: "📊",
      description: "Requirements for companies preparing GHG emissions inventories at the corporate level"
    },
    {
      title: "Scope 3 Standard",
      icon: "🔄",
      description: "Comprehensive guidance for measuring value chain emissions across 15 categories"
    },
    {
      title: "Boundary Setting",
      icon: "🎯",
      description: "Principles for establishing organizational and operational boundaries"
    },
    {
      title: "Quality Principles",
      icon: "✨",
      description: "Relevance, completeness, consistency, transparency, and accuracy"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-500",
        text: "text-green-700 dark:text-green-300",
        iconBg: "bg-green-500"
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-500",
        text: "text-teal-700 dark:text-teal-300",
        iconBg: "bg-teal-500"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-500",
        text: "text-orange-700 dark:text-orange-300",
        iconBg: "bg-orange-500"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Foundational ESG & Sustainability Frameworks
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, 
            comparability, and credibility. RiskMan's approach integrates these foundational standards 
            to deliver comprehensive, internationally aligned sustainability solutions.
          </p>
        </div>

        {/* UN SDGs Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="p-8 bg-white border shadow-xl dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  United Nations Sustainable Development Goals (SDGs)
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity's 
                  most pressing challenges—from poverty eradication and quality education to climate action and 
                  responsible consumption.
                </p>
              </div>
            </div>

            <h4 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
              Enterprise SDG Alignment
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <span className="text-lg text-blue-600 dark:text-blue-400">✓</span>
                </div>
                <div>
                  <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Materiality-Driven Prioritization</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Identifying which SDGs are most relevant to your industry and value chain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <span className="text-lg text-blue-600 dark:text-blue-400">✓</span>
                </div>
                <div>
                  <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Value Chain Integration</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mapping SDG contributions across your entire value chain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <span className="text-lg text-blue-600 dark:text-blue-400">✓</span>
                </div>
                <div>
                  <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Impact Measurement</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Establishing quantifiable metrics connecting business performance to SDG outcomes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <span className="text-lg text-blue-600 dark:text-blue-400">✓</span>
                </div>
                <div>
                  <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Strategic Integration</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Embedding SDG considerations into corporate strategy and capital allocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GHG Accounting Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="mb-8 text-2xl font-bold text-center md:text-3xl font-heading text-brandDark dark:text-white">
            GHG Accounting & Climate Measurement
          </h3>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-700 dark:text-gray-300">
            Greenhouse gas emissions measurement is fundamental to climate action. Understanding your organization's 
            carbon footprint is essential for setting meaningful targets, identifying reduction opportunities, and 
            meeting disclosure requirements.
          </p>

          {/* Understanding Emissions Scopes */}
          <h4 className="mb-6 text-xl font-bold font-heading text-brandDark dark:text-white">
            Understanding Emissions Scopes
          </h4>
          <div className="space-y-6">
            {emissionsScopes.map((scope, index) => {
              const colorClasses = getColorClasses(scope.color);
              return (
                <div key={index} className={`${colorClasses.bg} ${colorClasses.border} border-l-4 rounded-lg p-6 shadow-lg`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colorClasses.iconBg} rounded-lg flex items-center justify-center shadow-md`}>
                      <span className="text-2xl">{scope.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h5 className={`text-xl font-heading font-bold mb-2 ${colorClasses.text}`}>
                        {scope.title}
                      </h5>
                      <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                        {scope.description}
                      </p>
                      <ul className="mb-4 space-y-2">
                        {scope.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="mt-1 text-brandPrimary">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <span className="text-xl">💡</span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{scope.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GHG Protocol */}
        <div className="max-w-6xl mx-auto">
          <div className="p-8 bg-white border shadow-xl dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
              The GHG Protocol
            </h3>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              The GHG Protocol provides the globally accepted standard for measuring and managing greenhouse gas 
              emissions. It serves as the foundation for nearly all corporate climate reporting frameworks and 
              regulatory requirements worldwide.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {ghgProtocol.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 transition-shadow bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:shadow-md">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg shadow-md bg-brandPrimary">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h5 className="mb-2 font-semibold text-brandDark dark:text-white">{item.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationalFrameworks;