import React, { useState } from 'react';

const ESGFrameworksSection = () => {
  const [activeScope, setActiveScope] = useState(null);

  const scopeData = {
    scope1: {
      title: 'SCOPE 1',
      subtitle: 'Direct Emissions',
      color: '#004080', // brandPrimary
      percentage: '~10%',
      description: 'GHG emissions from sources owned or controlled by the organization.',
      sources: [
        { icon: '🚗', label: 'Company Fleet', desc: 'Vehicles owned or operated by the company.' },
        { icon: '🏭', label: 'Stationary', desc: 'Boilers, furnaces, turbines on-site.' },
        { icon: '🔥', label: 'On-site Fuel', desc: 'Natural gas, diesel, propane combustion.' },
        { icon: '💨', label: 'Fugitive', desc: 'Leaks from equipment, pipelines.' },
        { icon: '⚙️', label: 'Process', desc: 'Chemical/physical processing emissions.' },
        { icon: '❄️', label: 'Refrigerants', desc: 'HVAC and cooling system leaks.' }
      ]
    },
    scope2: {
      title: 'SCOPE 2',
      subtitle: 'Indirect Energy',
      color: '#003366', // brandNavy
      percentage: '~8%',
      description: 'GHG emissions from purchased electricity, steam, heating and cooling.',
      sources: [
        { icon: '⚡', label: 'Electricity', desc: 'Grid electricity consumption.' },
        { icon: '♨️', label: 'Steam', desc: 'Purchased steam for operations.' },
        { icon: '🌡️', label: 'Heating/Cooling', desc: 'District heating and cooling.' },
        { icon: '🖥️', label: 'Data Centers', desc: 'IT infrastructure energy.' }
      ]
    },
    scope3: {
      title: 'SCOPE 3',
      subtitle: 'Value Chain',
      color: '#FFC000', // brandAccent
      percentage: '~82%',
      description: 'All other indirect emissions in the value chain (upstream & downstream).',
      sources: [
        { icon: '📦', label: 'Purchased Goods', desc: 'Raw materials and services.' },
        { icon: '🚚', label: 'Transport', desc: 'Upstream transportation.' },
        { icon: '🏗️', label: 'Capital Goods', desc: 'Equipment and buildings.' },
        { icon: '✈️', label: 'Business Travel', desc: 'Employee air/rail travel.' },
        { icon: '🚶', label: 'Commuting', desc: 'Employee commutes.' },
        { icon: '🗑️', label: 'Waste', desc: 'Waste disposal operations.' },
        { icon: '📤', label: 'Distribution', desc: 'Downstream transport.' },
        { icon: '👤', label: 'Product Use', desc: 'End-user consumption.' },
        { icon: '♻️', label: 'End of Life', desc: 'Product disposal/recycling.' }
      ]
    }
  };

  const sdgPrinciples = [
    'Materiality-Driven Prioritization: Identifying which SDGs are most relevant to your industry and value chain.',
    'Value Chain Integration: Mapping SDG contributions across your entire value chain.',
    'Impact Measurement: Establishing quantifiable metrics connecting business performance to SDG outcomes.',
    'Strategic Integration: Embedding SDG considerations into corporate strategy and capital allocation.'
  ];

  return (
    <section className="py-20 lg:py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-6 border rounded-full bg-brandPrimary/5 border-brandPrimary/10 dark:border-brandGold/20">
            <span className="text-xs font-bold tracking-[3px] uppercase text-brandPrimary dark:text-brandGold">
              Global Standards
            </span>
          </div>
          <h2 className="font-heading font-black text-brandDark dark:text-surfaceLight text-4xl lg:text-6xl leading-tight mb-8">
            Foundational ESG <br /> & Sustainability Frameworks
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-brandDark/70 dark:text-surfaceLight/70 font-sans leading-relaxed">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, comparability, and credibility.
          </p>
        </div>

        {/* UN SDGs Section */}
        <div className="mb-24">
          <div className="p-8 lg:p-14 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[32px] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
              <div className="lg:w-1/3">
                <div className="text-6xl mb-6 animate-bounce">🎯</div>
                <h3 className="font-heading font-bold text-3xl text-brandDark dark:text-surfaceLight mb-4">
                  United Nations Sustainable Development Goals (SDGs)
                </h3>
                <p className="text-brandDark/60 dark:text-surfaceLight/60 leading-relaxed">
                  The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity's most pressing challenges.
                </p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdgPrinciples.map((principle, index) => (
                  <div key={index} className="p-6 bg-bgLight dark:bg-bgDark rounded-2xl border border-transparent hover:border-brandGold transition-all duration-300 group">
                    <p className="text-sm text-brandDark/80 dark:text-surfaceLight/80 leading-relaxed">
                      <span className="font-bold text-brandPrimary dark:text-brandGold group-hover:underline">
                        {principle.split(':')[0]}:
                      </span>
                      {principle.split(':')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GHG Scopes Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h3 className="font-heading font-black text-brandDark dark:text-surfaceLight text-3xl lg:text-4xl mb-4">
                GHG Accounting & Climate Measurement
              </h3>
              <p className="text-brandDark/60 dark:text-surfaceLight/60">
                Understanding your carbon footprint across the entire value chain is essential for credible climate action.
              </p>
            </div>
            <div className="flex gap-4 p-2 bg-surfaceLight dark:bg-surfaceDark rounded-xl border border-borderLight dark:border-borderDark">
              {['scope1', 'scope2', 'scope3'].map((s) => (
                <button 
                  key={s}
                  onClick={() => setActiveScope(s)}
                  className={`px-6 py-2 rounded-lg font-bold text-xs tracking-widest uppercase transition-all ${
                    activeScope === s ? 'bg-brandPrimary text-white shadow-lg' : 'text-brandDark/40 dark:text-surfaceLight/40 hover:bg-bgLight dark:hover:bg-bgDark'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(scopeData).map(([key, data]) => (
              <div
                key={key}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden group ${
                  activeScope === key || !activeScope ? 'opacity-100 scale-100 shadow-xl' : 'opacity-40 scale-95 grayscale'
                }`}
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderColor: activeScope === key ? data.color : 'transparent'
                }}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-black text-2xl mb-1" style={{ color: data.color }}>{data.title}</h4>
                      <p className="text-xs font-bold text-brandDark/40 dark:text-surfaceLight/40 uppercase tracking-widest">{data.subtitle}</p>
                    </div>
                    <span className="text-2xl font-black opacity-20" style={{ color: data.color }}>{data.percentage}</span>
                  </div>

                  <p className="text-sm mb-8 text-brandDark/70 dark:text-surfaceLight/70 italic leading-relaxed">
                    {data.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {data.sources.map((source, i) => (
                      <div key={i} className="p-3 bg-bgLight dark:bg-bgDark rounded-xl hover:scale-105 transition-transform cursor-help group/item">
                        <span className="text-2xl block mb-2">{source.icon}</span>
                        <span className="text-[10px] font-bold text-brandDark/80 dark:text-surfaceLight/80 leading-tight block">{source.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual Background Decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03] transition-transform group-hover:scale-150" style={{ backgroundColor: data.color, borderRadius: '100% 0 0 0' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Global Distribution Bar */}
        <div className="p-8 bg-brandDark rounded-3xl border border-white/10 shadow-inner">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h4 className="text-white font-bold text-lg mb-1">Corporate Emissions</h4>
              <p className="text-white/40 text-xs tracking-widest uppercase font-bold">Typical Distribution</p>
            </div>
            <div className="flex-1 w-full">
              <div className="flex h-14 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
                <div className="flex items-center justify-center text-[10px] font-black text-white bg-brandPrimary w-[10%] border-r border-white/10">10%</div>
                <div className="flex items-center justify-center text-[10px] font-black text-white bg-brandNavy w-[8%] border-r border-white/10">8%</div>
                <div className="flex items-center justify-center text-[10px] font-black text-brandDark bg-brandGold w-[82%]">82%</div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-[10px] font-bold text-white/60 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandPrimary"/> Scope 1</span>
                <span className="text-[10px] font-bold text-white/60 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandNavy"/> Scope 2</span>
                <span className="text-[10px] font-bold text-white/60 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandGold"/> Scope 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGFrameworksSection;