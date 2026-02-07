import React, { useState } from "react";

const FoundationalFrameworks = () => {
  const [activeScope, setActiveScope] = useState(null);

  const emissionsScopes = [
    {
      title: "Scope 1: Direct Emissions",
      icon: "🏭",
      description: "Emissions from sources owned or controlled by the organization",
      examples: [
        "On-site fuel combustion (boilers, furnaces, vehicles)",
        "Manufacturing and processing emissions",
        "Fugitive emissions from refrigeration",
        "Company-owned fleet operations",
      ],
      note: "Full operational control and maximum reduction potential",
      percentage: "15-25%",
    },
    {
      title: "Scope 2: Indirect Energy Emissions",
      icon: "⚡",
      description: "Emissions from purchased electricity, steam, heating, and cooling",
      examples: [
        "Grid electricity consumption across facilities",
        "Purchased steam and district heating/cooling",
        "Energy consumption in leased properties",
        "Data center electricity usage",
      ],
      note: "Addressable through renewable energy procurement and efficiency",
      percentage: "10-20%",
    },
    {
      title: "Scope 3: Value Chain Emissions",
      icon: "🔗",
      description: "All other indirect emissions across the value chain",
      examples: [
        "Upstream: Purchased goods/services, transportation, capital goods",
        "Downstream: Product use, end-of-life treatment, investments",
        "Employee commuting and business travel",
        "Franchises and leased assets",
      ],
      note: "Often 80%+ of total footprint; requires supply chain engagement",
      percentage: "60-80%",
    },
  ];

  const ghgProtocol = [
    {
      title: "Corporate Standard",
      icon: "📊",
      description: "Requirements for companies preparing GHG emissions inventories at the corporate level",
    },
    {
      title: "Scope 3 Standard",
      icon: "🔄",
      description: "Comprehensive guidance for measuring value chain emissions across 15 categories",
    },
    {
      title: "Boundary Setting",
      icon: "🎯",
      description: "Principles for establishing organizational and operational boundaries",
    },
    {
      title: "Quality Principles",
      icon: "✨",
      description: "Relevance, completeness, consistency, transparency, and accuracy",
    },
  ];

  const sdgBenefits = [
    {
      title: "Materiality-Driven Prioritization",
      description: "Identifying which SDGs are most relevant to your industry and value chain",
    },
    {
      title: "Value Chain Integration",
      description: "Mapping SDG contributions across your entire value chain",
    },
    {
      title: "Impact Measurement",
      description: "Establishing quantifiable metrics connecting business performance to SDG outcomes",
    },
    {
      title: "Strategic Integration",
      description: "Embedding SDG considerations into corporate strategy and capital allocation",
    },
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandPrimary dark:text-brandGold">
            Foundational Frameworks
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white uppercase tracking-tight">
            Foundational ESG & Sustainability Frameworks
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, 
            comparability, and credibility. RiskMan integrates these standards to deliver 
            comprehensive, internationally aligned sustainability solutions.
          </p>
        </div>

        {/* UN SDGs Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-3xl border-borderLight dark:border-borderDark shadow-xl">
            {/* Header */}
            <div className="p-8 bg-brandPrimary dark:bg-brandNavy">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 bg-white/10 rounded-2xl shadow-inner">
                  <span className="text-4xl">🎯</span>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white font-heading uppercase tracking-wide">
                    United Nations Sustainable Development Goals (SDGs)
                  </h3>
                  <p className="leading-relaxed text-white/90">
                    The 17 UN SDGs represent a universal framework for addressing humanity's 
                    most pressing challenges—from poverty to climate action.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h4 className="mb-8 text-xl font-bold font-heading text-brandDark dark:text-white uppercase tracking-widest text-center">
                Enterprise SDG Alignment
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                {sdgBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 border bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-brandAccent/20 dark:bg-brandGold/20">
                      <span className="text-lg text-brandPrimary dark:text-brandGold">✓</span>
                    </div>
                    <div>
                      <h5 className="mb-2 font-bold text-brandDark dark:text-white">{benefit.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GHG Accounting Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-white uppercase tracking-tight">
              GHG Accounting & Climate Measurement
            </h3>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              Understanding your carbon footprint is essential for setting targets, 
              identifying reduction opportunities, and meeting disclosure requirements.
            </p>
          </div>

          <div className="space-y-4">
            {emissionsScopes.map((scope, index) => {
              const isActive = activeScope === index;
              return (
                <div 
                  key={index} 
                  className={`overflow-hidden border transition-all duration-300 bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark ${isActive ? 'shadow-lg ring-1 ring-brandPrimary/20' : ''}`}
                >
                  <div 
                    className="p-6 transition-colors cursor-pointer hover:bg-bgLight dark:hover:bg-bgDark"
                    onClick={() => setActiveScope(isActive ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1 gap-5">
                        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-3xl">
                          {scope.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="mb-1 text-lg font-bold font-heading text-brandDark dark:text-white uppercase">
                            {scope.title}
                          </h5>
                          <p className="text-sm italic text-gray-500 dark:text-gray-400">
                            {scope.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="px-4 py-1 text-xs font-bold rounded-full bg-brandAccent/20 text-brandPrimary dark:text-brandGold border border-brandAccent/30">
                          {scope.percentage}
                        </span>
                        <svg 
                          className={`w-6 h-6 transition-transform text-brandPrimary dark:text-brandGold ${isActive ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <div className="px-8 pb-8 border-t border-borderLight dark:border-borderDark bg-bgLight/30 dark:bg-bgDark/30">
                      <div className="pt-8">
                        <h6 className="mb-4 text-sm font-bold text-brandDark dark:text-white uppercase tracking-widest">Examples & Activities</h6>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {scope.examples.map((example, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                              <span className="mt-1 w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0" />
                              <span>{example}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-start gap-3 p-5 border rounded-2xl bg-brandGold/10 dark:bg-brandGold/5 border-brandGold/30">
                          <span className="flex-shrink-0 text-xl">💡</span>
                          <div>
                            <h6 className="mb-1 text-sm font-bold text-brandDark dark:text-white uppercase tracking-tighter">Strategic Insight</h6>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{scope.note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* GHG Protocol Section */}
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-3xl border-borderLight dark:border-borderDark shadow-2xl">
            <div className="p-8 bg-brandDark dark:bg-brandDark/80">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl">
                  <span className="text-4xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-widest">
                    The GHG Protocol
                  </h3>
                  <p className="text-sm text-brandGold font-medium mt-1">Global Standard for Climate Accounting</p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <p className="mb-10 text-center leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                The GHG Protocol provides the globally accepted standard for measuring and managing emissions, 
                serving as the foundation for nearly all corporate climate reporting.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {ghgProtocol.map((item, index) => (
                  <div key={index} className="flex items-start gap-5 p-6 border bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandPrimary/40 transition-colors">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-brandPrimary/10 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="mb-2 font-bold text-brandDark dark:text-white uppercase text-sm tracking-wide">{item.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationalFrameworks;