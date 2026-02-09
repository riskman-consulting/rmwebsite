import React, { useState } from 'react';

/**
 * Scope123ValueChain Component
 * Visualizes GHG Emissions Scopes 1, 2, and 3 based on the GHG Protocol.
 * Sources: [cite: 257-471]
 */
export default function Scope123ValueChain() {
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

  const Cloud = ({ label }) => (
    <div className="relative group">
      <div className="w-16 h-10 bg-gradient-to-b from-slate-500 to-slate-600 rounded-full relative shadow-lg transition-transform group-hover:scale-110">
        <div className="absolute -top-2 left-2 w-6 h-6 bg-gradient-to-b from-slate-500 to-slate-600 rounded-full"></div>
        <div className="absolute -top-1 right-3 w-5 h-5 bg-gradient-to-b from-slate-500 to-slate-600 rounded-full"></div>
      </div>
      <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold drop-shadow">
        {label}
      </span>
    </div>
  );

  const SourceCard = ({ source }) => (
    <div
      className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center border border-slate-100"
      onMouseEnter={() => setHoveredSource(source)}
      onMouseLeave={() => setHoveredSource(null)}
    >
      <span className="text-xl mb-1">{source.icon}</span>
      <span className="text-[9px] text-center text-slate-600 leading-tight font-medium">{source.label}</span>
    </div>
  );

  const ScopeSection = ({ scopeKey, data }) => (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${hoveredScope === scopeKey ? 'ring-2 shadow-2xl scale-[1.02]' : 'shadow-lg'}`}
      style={{ borderTop: `4px solid ${data.color}`, ringColor: data.color }}
      onMouseEnter={() => setHoveredScope(scopeKey)}
      onMouseLeave={() => setHoveredScope(null)}
    >
      <div className="bg-white/95 p-4 min-h-[320px]">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
            style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
          >
            {scopeKey.replace('scope', '')}
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-tight" style={{ color: data.color }}>{data.title}</h3>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{data.subtitle}</p>
          </div>
        </div>
        <div className={`grid gap-2 ${scopeKey === 'scope3' ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {data.sources.map((source, i) => (
            <SourceCard key={i} source={source} />
          ))}
        </div>
      </div>
      <div className="p-4" style={{ backgroundColor: data.colorLight }}>
        <p className="text-[11px] text-slate-700 leading-relaxed mb-2 min-h-[32px]">{data.description}</p>
        <span className="text-xs font-bold" style={{ color: data.color }}>{data.percentage} of footprint</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans border-t-8 border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">GHG Emissions Across the Value Chain</h2>
          <p className="text-slate-500 text-sm font-medium">Scope 1, 2 & 3 Greenhouse Gas Protocol Framework [cite: 381]</p>
        </div>

        {/* GHG Gases Header */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {ghgGases.map((gas, i) => (
            <Cloud key={i} label={gas} />
          ))}
        </div>

        {/* Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ScopeSection scopeKey="scope1" data={scopeData.scope1} />
          <ScopeSection scopeKey="scope2" data={scopeData.scope2} />
          <ScopeSection scopeKey="scope3" data={scopeData.scope3} />
        </div>

        {/* Source Tooltip (Floating) */}
        {hoveredSource && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-bounce">
            <span className="text-2xl">{hoveredSource.icon}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest">{hoveredSource.label}</p>
              <p className="text-[10px] text-slate-300">{hoveredSource.desc}</p>
            </div>
          </div>
        )}

        {/* Distribution Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
          <h4 className="text-center text-sm font-bold text-slate-800 mb-6 uppercase tracking-widest">
            Typical Corporate Emissions Distribution [cite: 430]
          </h4>
          <div className="flex h-12 rounded-xl overflow-hidden shadow-inner mb-6">
            <div className="flex items-center justify-center text-white text-xs font-bold" style={{ width: '10%', background: '#4CAF50' }}>10%</div>
            <div className="flex items-center justify-center text-white text-xs font-bold" style={{ width: '8%', background: '#26A69A' }}>8%</div>
            <div className="flex items-center justify-center text-white text-xs font-bold" style={{ width: '82%', background: '#FF9800' }}>82%</div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div> Scope 1 - Direct Control [cite: 445]</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#26A69A]"></div> Scope 2 - Energy Procurement [cite: 449]</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#FF9800]"></div> Scope 3 - Value Chain Engagement [cite: 453]</div>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400 mt-8 font-medium">
          RiskMan Consulting LLP | Based on GHG Protocol Corporate Standard [cite: 459]
        </p>
      </div>
    </div>
  );
}