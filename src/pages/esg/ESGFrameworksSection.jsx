import React, { useState } from 'react';

const ESGFrameworksSection = () => {
  const [activeScope, setActiveScope] = useState(null);

  const scopeData = {
    scope1: {
      title: 'SCOPE 1',
      subtitle: 'Direct Emissions',
      color: '#4CAF50',
      percentage: '~10%',
      description: 'GHG emissions from sources owned or controlled by the organization',
      sources: [
        { icon: '🚗', label: 'Company Fleet', desc: 'Vehicles owned or operated by the company' },
        { icon: '🏭', label: 'Stationary', desc: 'Boilers, furnaces, turbines on-site' },
        { icon: '🔥', label: 'On-site Fuel', desc: 'Natural gas, diesel, propane combustion' },
        { icon: '💨', label: 'Fugitive', desc: 'Leaks from equipment, pipelines' },
        { icon: '⚙️', label: 'Process', desc: 'Chemical/physical processing emissions' },
        { icon: '❄️', label: 'Refrigerants', desc: 'HVAC and cooling system leaks' }
      ]
    },
    scope2: {
      title: 'SCOPE 2',
      subtitle: 'Indirect Energy',
      color: '#26A69A',
      percentage: '~8%',
      description: 'GHG emissions from purchased electricity, steam, heating and cooling',
      sources: [
        { icon: '⚡', label: 'Electricity', desc: 'Grid electricity consumption' },
        { icon: '♨️', label: 'Steam', desc: 'Purchased steam for operations' },
        { icon: '🌡️', label: 'Heating/Cooling', desc: 'District heating and cooling' },
        { icon: '🖥️', label: 'Data Centers', desc: 'IT infrastructure energy' }
      ]
    },
    scope3: {
      title: 'SCOPE 3',
      subtitle: 'Value Chain',
      color: '#FF9800',
      percentage: '~82%',
      description: 'All other indirect emissions in the value chain (upstream & downstream)',
      sources: [
        { icon: '📦', label: 'Purchased Goods', desc: 'Raw materials and services' },
        { icon: '🚚', label: 'Transport', desc: 'Upstream transportation' },
        { icon: '🏗️', label: 'Capital Goods', desc: 'Equipment and buildings' },
        { icon: '✈️', label: 'Business Travel', desc: 'Employee air/rail travel' },
        { icon: '🚶', label: 'Commuting', desc: 'Employee commutes' },
        { icon: '🗑️', label: 'Waste', desc: 'Waste disposal operations' },
        { icon: '📤', label: 'Distribution', desc: 'Downstream transport' },
        { icon: '👤', label: 'Product Use', desc: 'End-user consumption' },
        { icon: '♻️', label: 'End of Life', desc: 'Product disposal/recycling' }
      ]
    }
  };

  const sdgPrinciples = [
    'Materiality-Driven Prioritization: Identifying which SDGs are most relevant to your industry and value chain',
    'Value Chain Integration: Mapping SDG contributions across your entire value chain',
    'Impact Measurement: Establishing quantifiable metrics connecting business performance to SDG outcomes',
    'Strategic Integration: Embedding SDG considerations into corporate strategy and capital allocation'
  ];

  const ghgProtocolPrinciples = [
    'Corporate Standard: Requirements for companies preparing GHG emissions inventories at the corporate level',
    'Scope 3 Standard: Comprehensive guidance for measuring value chain emissions across 15 categories',
    'Boundary Setting: Principles for establishing organizational and operational boundaries',
    'Quality Principles: Relevance, completeness, consistency, transparency, and accuracy'
  ];

  return (
    <section className="py-20 bg-white lg:py-28 dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="relative inline-block mb-5">
            <span className="text-xs sm:text-sm font-bold text-brandPrimary dark:text-brandAccent tracking-[2px] uppercase">
              Global Standards
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
          </div>
          
          <h2 className="font-heading font-extrabold text-brandDark dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
            Foundational ESG & Sustainability Frameworks
          </h2>
          
          <p className="max-w-4xl mx-auto font-serif text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, comparability, and credibility.
          </p>
        </div>

        {/* UN SDGs Section */}
        <div className="mb-20">
          <div className="p-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-surfaceDark dark:to-brandDark rounded-2xl lg:p-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🎯</span>
              <div>
                <h3 className="text-2xl font-bold font-heading sm:text-3xl text-brandDark dark:text-white">
                  United Nations Sustainable Development Goals (SDGs)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity's most pressing challenges.
                </p>
              </div>
            </div>

            <h4 className="mt-10 mb-6 text-xl font-bold text-brandPrimary dark:text-brandAccent">
              Enterprise SDG Alignment
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {sdgPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border-l-4 shadow-md dark:bg-surfaceDark rounded-xl hover:shadow-xl hover:-translate-y-1 border-l-brandAccent"
                >
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-brandPrimary dark:text-brandAccent">
                      {principle.split(':')[0]}:
                    </span>
                    {principle.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GHG Accounting Section */}
        <div className="mb-20">
          <h3 className="relative pl-6 mb-4 text-2xl font-bold font-heading sm:text-3xl md:text-4xl text-brandDark dark:text-white">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[70%] bg-gradient-to-b from-brandAccent to-brandPrimary rounded-full" />
            GHG Accounting & Climate Measurement
          </h3>
          
          <p className="max-w-4xl mb-12 text-gray-600 dark:text-gray-400">
            Greenhouse gas emissions measurement is fundamental to climate action. Understanding your organization's carbon footprint is essential for setting meaningful targets, identifying reduction opportunities, and meeting disclosure requirements.
          </p>

          {/* Scopes Explanation */}
          <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-3">
            {Object.entries(scopeData).map(([key, data]) => (
              <div
                key={key}
                onMouseEnter={() => setActiveScope(key)}
                onMouseLeave={() => setActiveScope(null)}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                  activeScope === key ? 'scale-105 shadow-2xl ring-2' : 'hover:scale-102'
                }`}
                style={{ 
                  borderTop: `4px solid ${data.color}`,
                  ringColor: activeScope === key ? data.color : 'transparent'
                }}
              >
                <div className="p-6 bg-white dark:bg-surfaceDark">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
                    >
                      {key.replace('scope', '')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: data.color }}>
                        {data.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{data.subtitle}</p>
                    </div>
                  </div>

                  <div className={`grid gap-2 ${key === 'scope3' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {data.sources.map((source, i) => (
                      <div
                        key={i}
                        className="p-2 text-center transition-all duration-300 rounded-lg bg-gray-50 dark:bg-brandDark hover:shadow-md hover:scale-105"
                      >
                        <span className="block mb-1 text-2xl">{source.icon}</span>
                        <span className="text-[10px] text-gray-600 dark:text-gray-300 leading-tight block">
                          {source.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4" style={{ backgroundColor: `${data.color}15` }}>
                  <p className="mb-1 text-xs text-gray-600 dark:text-gray-300">
                    {data.description}
                  </p>
                  <span className="text-sm font-bold" style={{ color: data.color }}>
                    {data.percentage} of footprint
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Distribution Bar */}
          <div className="p-6 bg-white shadow-lg dark:bg-surfaceDark rounded-xl">
            <h4 className="mb-4 text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
              Typical Corporate Emissions Distribution
            </h4>
            <div className="flex h-12 overflow-hidden rounded-lg shadow-inner">
              <div
                className="flex items-center justify-center text-sm font-semibold text-white"
                style={{ width: '10%', background: 'linear-gradient(135deg, #4CAF50, #2E7D32)' }}
              >
                10%
              </div>
              <div
                className="flex items-center justify-center text-sm font-semibold text-white"
                style={{ width: '8%', background: 'linear-gradient(135deg, #26A69A, #00796B)' }}
              >
                8%
              </div>
              <div
                className="flex items-center justify-center text-sm font-semibold text-white"
                style={{ width: '82%', background: 'linear-gradient(135deg, #FF9800, #E65100)' }}
              >
                82%
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Scope 1 - Direct Control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full" />
                <span>Scope 2 - Energy Procurement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span>Scope 3 - Value Chain Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* GHG Protocol */}
        <div className="p-10 text-white bg-gradient-to-br from-brandDark to-brandNavy dark:from-surfaceDark dark:to-brandDark rounded-2xl lg:p-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">📊</span>
            <h3 className="text-2xl font-bold font-heading sm:text-3xl">
              The GHG Protocol
            </h3>
          </div>

          <p className="mb-8 leading-relaxed text-white/90">
            The GHG Protocol provides the globally accepted standard for measuring and managing greenhouse gas emissions. It serves as the foundation for nearly all corporate climate reporting frameworks and regulatory requirements worldwide.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ghgProtocolPrinciples.map((principle, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-md border-white/20 rounded-xl hover:bg-white/15"
              >
                <p className="leading-relaxed text-white/95">
                  <span className="font-bold text-brandAccent">
                    {principle.split(':')[0]}:
                  </span>
                  {principle.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGFrameworksSection;