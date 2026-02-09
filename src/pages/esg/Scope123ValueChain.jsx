import React, { useState, useMemo } from "react";

const Scope123ValueChain = () => {
  const [activeItem, setActiveItem] = useState(null);

  const ghgGases = ["CO₂", "CH₄", "N₂O", "HFCs", "PFCs", "SF₆", "NF₃"];

  const scopeData = {
    scope1: {
      title: "Scope 1",
      subtitle: "Direct Operations",
      color: "#10b981", // Emerald-500
      accent: "bg-emerald-500",
      light: "bg-emerald-50",
      border: "border-emerald-200",
      description: "Emissions from sources you physically own or control.",
      sources: [
        { icon: "🚗", label: "Company Fleet", desc: "Owned vehicles" },
        { icon: "🏭", label: "On-site Facilities", desc: "Manufacturing plants" },
        { icon: "🔥", label: "Boilers/Furnaces", desc: "Direct combustion" },
        { icon: "💨", label: "Fugitive Leaks", desc: "AC/Refrigerant leaks" },
      ],
    },
    scope2: {
      title: "Scope 2",
      subtitle: "Indirect Energy",
      color: "#06b6d4", // Cyan-500
      accent: "bg-cyan-500",
      light: "bg-cyan-50",
      border: "border-cyan-200",
      description: "Emissions from the generation of purchased energy.",
      sources: [
        { icon: "⚡", label: "Electricity", desc: "Purchased grid power" },
        { icon: "♨️", label: "Steam/Heat", desc: "Purchased heating" },
        { icon: "❄️", label: "Cooling", desc: "Purchased chilled water" },
      ],
    },
    scope3: {
      title: "Scope 3",
      subtitle: "Value Chain",
      color: "#f59e0b", // Amber-500
      accent: "bg-amber-500",
      light: "bg-amber-50",
      border: "border-amber-200",
      description: "Indirect emissions from upstream and downstream activities.",
      sources: [
        { icon: "📦", label: "Purchased Goods", desc: "Supply chain" },
        { icon: "✈️", label: "Business Travel", desc: "Employee flights" },
        { icon: "🚚", label: "Logistics", desc: "Third-party transport" },
        { icon: "♻️", label: "End of Life", desc: "Product disposal" },
      ],
    },
  };

  return (
    <section className="min-h-screen py-16 text-slate-900 bg-slate-50 font-sans">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-slate-200 text-slate-600">
            ESG Reporting Framework
          </span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-800">
            Emissions <span className="text-emerald-600">Value Chain</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">
            Mapping Greenhouse Gas Protocol Scopes across your organization's entire lifecycle.
          </p>
        </div>

        {/* The Main Visualization Card */}
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl ring-1 ring-slate-200">
          
          {/* Top Atmospheric Layer (Gases) */}
          <div className="relative p-8 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#334155,transparent)]" />
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              {ghgGases.map((gas, i) => (
                <div 
                  key={gas} 
                  className="px-4 py-2 text-sm font-bold text-white transition-all border rounded-full bg-white/10 border-white/20 backdrop-blur-md animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {gas}
                </div>
              ))}
            </div>
            
            {/* Connection Arrows */}
            <div className="grid grid-cols-3 gap-8 mt-12 mb-2 justify-items-center">
                {[scopeData.scope1, scopeData.scope2, scopeData.scope3].map((s, i) => (
                    <div key={i} className={`w-1 h-12 rounded-full ${s.accent} opacity-50 animate-bounce`} />
                ))}
            </div>
          </div>

          {/* Scopes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-100">
            {Object.entries(scopeData).map(([key, data]) => (
              <div 
                key={key}
                onMouseEnter={() => setActiveItem(key)}
                className={`group p-6 transition-all duration-500 border-r border-slate-200 last:border-r-0 hover:bg-white`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg text-white font-black text-xl ${data.accent} transform group-hover:rotate-12 transition-transform`}>
                    {key.slice(-1)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{data.title}</h3>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-tighter">{data.subtitle}</span>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {data.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {data.sources.map((src) => (
                    <div 
                      key={src.label}
                      className={`p-3 rounded-xl border transition-all cursor-default ${data.light} ${data.border} hover:shadow-md hover:scale-105`}
                    >
                      <div className="mb-1 text-xl">{src.icon}</div>
                      <div className="text-[11px] font-bold text-slate-700 leading-tight">{src.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Distribution Legend */}
          <div className="p-8 bg-white border-t border-slate-200">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="w-full md:w-2/3">
                <div className="flex justify-between mb-2 text-xs font-bold text-slate-500 uppercase">
                  <span>Impact Distribution</span>
                  <span>Total Footprint 100%</span>
                </div>
                <div className="flex h-4 overflow-hidden rounded-full bg-slate-100 outline outline-4 outline-slate-50">
                  <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: '10%' }} />
                  <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: '8%' }} />
                  <div className="h-full bg-amber-500 transition-all duration-1000" style={{ width: '82%' }} />
                </div>
              </div>
              
              <div className="flex gap-6">
                <LegendItem color="bg-emerald-500" label="S1" val="10%" />
                <LegendItem color="bg-cyan-500" label="S2" val="8%" />
                <LegendItem color="bg-amber-500" label="S3" val="82%" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400 text-xs">
          *Percentages represent average industrial corporate distributions. Actual data may vary by sector.
        </div>
      </div>
    </section>
  );
};

const LegendItem = ({ color, label, val }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-sm font-bold text-slate-700">{label}</span>
    <span className="text-sm text-slate-400">{val}</span>
  </div>
);

export default Scope123ValueChain;