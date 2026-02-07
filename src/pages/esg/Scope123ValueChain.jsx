import React, { useState } from "react";

const Scope123ValueChain = () => {
  const [hoveredScope, setHoveredScope] = useState(null);
  const [hoveredSource, setHoveredSource] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);

  const scopeData = {
    scope1: {
      title: "SCOPE 1",
      subtitle: "Direct Emissions",
      color: "#004080", // brandPrimary
      percentage: "10%",
      description: "Direct GHG emissions from sources owned or controlled by the organization.",
      sources: [
        { icon: "🚗", label: "Company Fleet", desc: "Vehicles owned or operated by the company" },
        { icon: "🏭", label: "Stationary", desc: "Boilers, furnaces, turbines on-site" },
        { icon: "🔥", label: "On-site Fuel", desc: "Natural gas, diesel, propane combustion" },
        { icon: "💨", label: "Fugitive", desc: "Leaks from equipment, pipelines" },
        { icon: "⚙️", label: "Process", desc: "Chemical processing emissions" },
        { icon: "❄️", label: "Refrigerants", desc: "HVAC and cooling system leaks" },
      ],
    },
    scope2: {
      title: "SCOPE 2",
      subtitle: "Indirect Energy",
      color: "#003366", // brandNavy
      percentage: "8%",
      description: "Indirect GHG emissions from purchased electricity, steam, heating, and cooling.",
      sources: [
        { icon: "⚡", label: "Electricity", desc: "Grid electricity consumption" },
        { icon: "♨️", label: "Steam", desc: "Purchased steam for operations" },
        { icon: "🌡️", label: "Heating/Cooling", desc: "District heating and cooling" },
        { icon: "🖥️", label: "Data Centers", desc: "IT infrastructure energy" },
      ],
    },
    scope3: {
      title: "SCOPE 3",
      subtitle: "Value Chain",
      color: "#FFB800", // brandGold
      percentage: "82%",
      description: "Indirect emissions in the value chain (upstream and downstream).",
      sources: [
        { icon: "📦", label: "Purchased Goods", desc: "Raw materials and services" },
        { icon: "🚚", label: "Transport", desc: "Upstream transportation" },
        { icon: "🏗️", label: "Capital Goods", desc: "Equipment and buildings" },
        { icon: "✈️", label: "Business Travel", desc: "Employee air and rail travel" },
        { icon: "🚶", label: "Commuting", desc: "Employee commutes" },
        { icon: "🗑️", label: "Waste", desc: "Waste disposal operations" },
      ],
    },
  };

  const SourceCard = ({ source, scopeKey, color }) => {
    const isSelected =
      selectedSource?.scopeKey === scopeKey &&
      selectedSource?.source?.label === source.label;

    return (
      <button
        onMouseEnter={() => setHoveredSource({ scopeKey, source })}
        onMouseLeave={() => setHoveredSource(null)}
        onClick={() => setSelectedSource(isSelected ? null : { scopeKey, source })}
        className={`p-4 border-2 rounded-xl transition-all duration-300 flex flex-col items-center bg-white dark:bg-surfaceDark hover:-translate-y-1 ${
          isSelected ? "border-brandGold shadow-lg" : "border-transparent hover:shadow-md"
        }`}
      >
        <div className="text-3xl mb-2">{source.icon}</div>
        <div className="text-[10px] font-black uppercase tracking-tighter text-brandDark dark:text-surfaceLight text-center leading-tight">
          {source.label}
        </div>
      </button>
    );
  };

  const ScopeSection = ({ scopeKey, data }) => {
    const isScopeActive = hoveredScope === scopeKey;
    
    // logic to determine what text to show in the "Score Card" info panel
    const displaySource =
      selectedSource?.scopeKey === scopeKey
        ? selectedSource.source
        : hoveredSource?.scopeKey === scopeKey
        ? hoveredSource.source
        : null;

    return (
      <div
        onMouseEnter={() => setHoveredScope(scopeKey)}
        onMouseLeave={() => setHoveredScope(null)}
        className={`relative p-6 rounded-[32px] border-2 transition-all duration-500 bg-surfaceLight dark:bg-surfaceDark ${
          isScopeActive ? "shadow-2xl scale-[1.02]" : "border-transparent shadow-md"
        }`}
        style={{ borderColor: isScopeActive ? data.color : "transparent" }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl"
              style={{ backgroundColor: data.color }}
            >
              {scopeKey.replace("scope", "")}
            </div>
            <div>
              <h3 className="font-heading font-black text-brandDark dark:text-white uppercase leading-none">{data.title}</h3>
              <p className="text-[10px] font-bold text-brandDark/40 dark:text-surfaceLight/40 uppercase tracking-widest">{data.subtitle}</p>
            </div>
          </div>
          <span className="text-sm font-black text-brandDark/20 dark:text-white/20">{data.percentage}</span>
        </div>

        {/* Dynamic Info Panel (The Score Card) */}
        <div className="min-h-[90px] mb-6 p-4 rounded-2xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark transition-all duration-300">
          {displaySource ? (
            <div className="animate-in fade-in zoom-in-95">
              <div className="text-xs font-black text-brandPrimary dark:text-brandGold uppercase mb-1">
                {displaySource.label}
              </div>
              <p className="text-[11px] text-brandDark/70 dark:text-surfaceLight/70 leading-relaxed italic">
                {displaySource.desc}
              </p>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center text-center opacity-40">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                Hover or Click a source <br /> to see details
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.sources.map((s) => (
            <SourceCard key={s.label} source={s} scopeKey={scopeKey} color={data.color} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            GHG Protocol Framework
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-white text-4xl lg:text-5xl uppercase leading-tight mb-6">
            Emissions Across The Value Chain
          </h2>
        </div>

        {/* Value Chain Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(scopeData).map(([key, data]) => (
            <ScopeSection key={key} scopeKey={key} data={data} />
          ))}
        </div>

        {/* Global Distribution Bar */}
        <div className="p-8 lg:p-12 bg-brandDark rounded-[40px] shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandPrimary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h4 className="text-center text-white/40 text-[10px] font-black uppercase tracking-[5px] mb-8">
            Typical Corporate Emissions Distribution
          </h4>
          
          <div className="flex h-12 w-full rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl">
            <div className="flex items-center justify-center text-[10px] font-black text-white bg-brandPrimary w-[10%] border-r border-white/10">10%</div>
            <div className="flex items-center justify-center text-[10px] font-black text-white bg-brandNavy w-[8%] border-r border-white/10">8%</div>
            <div className="flex items-center justify-center text-[10px] font-black text-brandDark bg-brandGold w-[82%]">82%</div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[
              { color: "#004080", label: "Scope 1" },
              { color: "#003366", label: "Scope 2" },
              { color: "#FFB800", label: "Scope 3" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope123ValueChain;