import React, { useState } from 'react';

const Scope123ValueChain = () => {
  const [hoveredScope, setHoveredScope] = useState(null);
  const [hoveredSource, setHoveredSource] = useState(null);

  const ghgGases = ['CO₂', 'CH₄', 'N₂O', 'HFCs', 'PFCs', 'SF₆', 'NF₃'];

  const scopeData = {
    scope1: {
      title: 'SCOPE 1',
      subtitle: 'Direct Emissions',
      color: '#4CAF50',
      colorLight: '#E8F5E9',
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
      colorLight: '#E0F2F1',
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
      colorLight: '#FFF3E0',
      percentage: '~82%',
      description: 'All other indirect emissions in the value chain (upstream & downstream)',
      sources: [
        { icon: '📦', label: 'Purchased Goods', desc: 'Raw materials and services', type: 'upstream' },
        { icon: '🚚', label: 'Transport', desc: 'Upstream transportation', type: 'upstream' },
        { icon: '🏗️', label: 'Capital Goods', desc: 'Equipment and buildings', type: 'upstream' },
        { icon: '✈️', label: 'Business Travel', desc: 'Employee air/rail travel', type: 'other' },
        { icon: '🚶', label: 'Commuting', desc: 'Employee commutes', type: 'other' },
        { icon: '🗑️', label: 'Waste', desc: 'Waste disposal operations', type: 'other' },
        { icon: '📤', label: 'Distribution', desc: 'Downstream transport', type: 'downstream' },
        { icon: '👤', label: 'Product Use', desc: 'End-user consumption', type: 'downstream' },
        { icon: '♻️', label: 'End of Life', desc: 'Product disposal/recycling', type: 'downstream' }
      ]
    }
  };

  const Cloud = ({ label }) => (
    <div className="relative">
      <div className="relative w-16 h-10 rounded-full shadow-lg bg-gradient-to-b from-slate-500 to-slate-600">
        <div className="absolute w-6 h-6 rounded-full -top-2 left-2 bg-gradient-to-b from-slate-500 to-slate-600"></div>
        <div className="absolute w-5 h-5 rounded-full -top-1 right-3 bg-gradient-to-b from-slate-500 to-slate-600"></div>
      </div>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow">
        {label}
      </span>
    </div>
  );

  const SourceCard = ({ source, scopeColor }) => (
    <div
      className="flex flex-col items-center p-2 transition-all duration-300 bg-white rounded-lg shadow-sm cursor-pointer dark:bg-gray-800 hover:shadow-md hover:scale-105"
      onMouseEnter={() => setHoveredSource(source)}
      onMouseLeave={() => setHoveredSource(null)}
    >
      <span className="mb-1 text-2xl">{source.icon}</span>
      <span className="text-[10px] text-center text-gray-600 dark:text-gray-300 leading-tight">{source.label}</span>
    </div>
  );

  const ScopeSection = ({ scopeKey, data }) => (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${hoveredScope === scopeKey ? 'ring-2 shadow-xl scale-[1.02]' : 'shadow-lg'}`}
      style={{ borderTop: `4px solid ${data.color}`, ...(hoveredScope === scopeKey ? { '--tw-ring-color': data.color } : {}) }}
      onMouseEnter={() => setHoveredScope(scopeKey)}
      onMouseLeave={() => setHoveredScope(null)}
    >
      {/* Header */}
      <div className="p-3 bg-white/90 dark:bg-gray-800/90">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white rounded-full shadow"
            style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
          >
            {scopeKey.replace('scope', '')}
          </div>
          <div>
            <h3 className="text-sm font-bold" style={{ color: data.color }}>{data.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{data.subtitle}</p>
          </div>
        </div>
        {/* Sources grid */}
        <div className={`grid gap-2 ${scopeKey === 'scope3' ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {data.sources.map((source, i) => (
            <SourceCard key={i} source={source} scopeColor={data.color} />
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="p-3" style={{ backgroundColor: data.colorLight }}>
        <p className="mb-1 text-xs text-gray-600 dark:text-gray-300">{data.description}</p>
        <span className="text-sm font-bold" style={{ color: data.color }}>{data.percentage} of footprint</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-200">
      <div className="container">
        {/* Header */}
        <div className="py-6 text-center">
          <h1 className="mb-1 text-2xl font-semibold text-white md:text-3xl">GHG Emissions Across the Value Chain</h1>
          <p className="text-sm text-slate-300">Scope 1, 2 & 3 Greenhouse Gas Protocol Framework</p>
        </div>

        {/* GHG Clouds */}
        <div className="flex flex-wrap justify-center gap-4 px-4 mb-4">
          {ghgGases.map((gas, i) => (
            <Cloud key={i} label={gas} />
          ))}
        </div>

        {/* Emission arrows */}
        <div className="flex justify-around px-20 py-2">
          {['#4CAF50', '#26A69A', '#FF9800'].map((color, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-l-transparent border-r-transparent" style={{ borderBottomColor: '#4a5a6a' }}></div>
              <div className="w-1 h-8" style={{ background: `linear-gradient(to bottom, ${color}, #4a5a6a)` }}></div>
            </div>
          ))}
        </div>

        {/* Scope badges */}
        <div className="flex justify-around px-20 pb-4">
          {Object.entries(scopeData).map(([key, data]) => (
            <div
              key={key}
              className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-lg"
              style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}cc)` }}
            >
              {key.replace('scope', '')}
            </div>
          ))}
        </div>

        {/* Main diagram area */}
        <div className="p-6 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-3xl">
          {/* Tooltip */}
          {hoveredSource && (
            <div className="fixed z-50 max-w-xs p-3 text-white rounded-lg shadow-xl top-4 right-4 bg-slate-800 animate-fadeIn">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{hoveredSource.icon}</span>
                <span className="font-semibold">{hoveredSource.label}</span>
              </div>
              <p className="text-sm text-slate-300">{hoveredSource.desc}</p>
            </div>
          )}

          {/* Scopes grid */}
          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
            <ScopeSection scopeKey="scope1" data={scopeData.scope1} />
            <ScopeSection scopeKey="scope2" data={scopeData.scope2} />
            <ScopeSection scopeKey="scope3" data={scopeData.scope3} />
          </div>

          {/* Distribution bar */}
          <div className="p-4 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
            <h4 className="mb-3 text-sm font-semibold text-center text-gray-700 dark:text-gray-300">Typical Corporate Emissions Distribution</h4>
            <div className="flex h-10 overflow-hidden rounded-lg shadow-inner">
              <div className="flex items-center justify-center text-sm font-semibold text-white" style={{ width: '10%', background: 'linear-gradient(135deg, #4CAF50, #2E7D32)' }}>
                10%
              </div>
              <div className="flex items-center justify-center text-sm font-semibold text-white" style={{ width: '8%', background: 'linear-gradient(135deg, #26A69A, #00796B)' }}>
                8%
              </div>
              <div className="flex items-center justify-center text-sm font-semibold text-white" style={{ width: '82%', background: 'linear-gradient(135deg, #FF9800, #E65100)' }}>
                82%
              </div>
            </div>
            <div className="flex justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Scope 1 - Direct Control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Scope 2 - Energy Procurement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Scope 3 - Value Chain Engagement</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-xs text-center text-gray-500">
            RiskMan Consulting LLP | Based on GHG Protocol Corporate Standard
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </section>
  );
};

export default Scope123ValueChain;