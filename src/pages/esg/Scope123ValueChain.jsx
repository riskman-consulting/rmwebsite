import React, { useState } from "react";

const Scope123ValueChain = () => {
  const [hoveredSource, setHoveredSource] = useState(null);

  const ghgGases = ["CO₂", "CH₄", "N₂O", "HFCs", "PFCs", "SF₆", "NF₃"];

  const scopeData = {
    scope1: {
      title: "Scope 1",
      subtitle: "Direct Operations",
      color: "#10b981",
      accent: "bg-emerald-500",
      light: "bg-emerald-50",
      border: "border-emerald-200",
      description: "Emissions from sources you physically own or control.",
      sources: [
        { icon: "🚗", label: "Company Fleet", desc: "Owned vehicles & mobile assets" },
        { icon: "🏭", label: "Facilities", desc: "Manufacturing plants & offices" },
        { icon: "🔥", label: "Boilers", desc: "Direct combustion of fuels" },
        { icon: "💨", label: "Fugitive", desc: "AC/Refrigerant gas leaks" },
      ],
    },
    scope2: {
      title: "Scope 2",
      subtitle: "Indirect Energy",
      color: "#06b6d4",
      accent: "bg-cyan-500",
      light: "bg-cyan-50",
      border: "border-cyan-200",
      description: "Emissions from the generation of purchased energy.",
      sources: [
        { icon: "⚡", label: "Electricity", desc: "Purchased grid power usage" },
        { icon: "♨️", label: "Steam/Heat", desc: "Purchased thermal energy" },
        { icon: "❄️", label: "Cooling", desc: "Purchased chilled water" },
        { icon: "🖥️", label: "Data Centers", desc: "IT infrastructure energy" },
      ],
    },
    scope3: {
      title: "Scope 3",
      subtitle: "Value Chain",
      color: "#f59e0b",
      accent: "bg-amber-500",
      light: "bg-amber-50",
      border: "border-amber-200",
      description: "Indirect emissions from upstream and downstream activities.",
      sources: [
        { icon: "📦", label: "Supply Chain", desc: "Raw materials and services" },
        { icon: "✈️", label: "Travel", desc: "Employee business flights" },
        { icon: "🚚", label: "Logistics", desc: "Third-party transportation" },
        { icon: "♻️", label: "End of Life", desc: "Waste & product disposal" },
      ],
    },
  };

  return (
    <section className="min-h-screen pb-10 text-slate-900 bg-slate-50 font-sans">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-800">
            Emissions <span className="text-emerald-600">Value Chain</span>
          </h1>
          <p className="text-lg text-slate-500">Scope 1, 2, and 3 Greenhouse Gas Protocol</p>
        </div>

        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl ring-1 ring-slate-200">
          {/* Atmospheric Layer (Gas Bubbles) */}
          <div className="relative p-10 overflow-hidden bg-slate-900">
            <div className="relative z-10 flex flex-wrap justify-center gap-5">
              {ghgGases.map((gas, i) => (
                <div 
                  key={gas} 
                  className="flex items-center justify-center min-w-[90px] px-6 py-3 text-sm font-bold text-white transition-all border rounded-full bg-white/5 border-white/10 backdrop-blur-md animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {gas.split(/(\d+)/).map((p, idx) => /\d/.test(p) ? <sub key={idx}>{p}</sub> : p)}
                </div>
              ))}
            </div>
          </div>

          {/* Main Scopes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50">
            {Object.entries(scopeData).map(([key, data]) => (
              <div key={key} className="relative p-6 border-r border-slate-200 last:border-r-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg text-white font-black text-xl ${data.accent}`}>
                    {key.slice(-1)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{data.title}</h3>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">{data.subtitle}</span>
                  </div>
                </div>

                {/* --- Hover Content Box --- */}
                <div className="h-20 mb-4 transition-all duration-300">
                  {hoveredSource?.scopeKey === key ? (
                    <div className={`p-3 rounded-xl border animate-fadeIn ${data.light} ${data.border}`}>
                      <div className="flex items-start gap-2">
                        <span className="text-xl">{hoveredSource.icon}</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{hoveredSource.label}</p>
                          <p className="text-[10px] leading-tight text-slate-600">{hoveredSource.desc}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-500 italic px-2">
                      {data.description}
                    </p>
                  )}
                </div>

                {/* Source Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {data.sources.map((src) => (
                    <div 
                      key={src.label}
                      onMouseEnter={() => setHoveredSource({ ...src, scopeKey: key })}
                      onMouseLeave={() => setHoveredSource(null)}
                      className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm transition-all cursor-help hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                    >
                      <div className="mb-1 text-xl">{src.icon}</div>
                      <div className="text-[11px] font-bold text-slate-700">{src.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Distribution Bar */}
          <div className="p-8 bg-white border-t border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-2/3">
                <div className="flex h-4 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-50">
                  <div className="h-full bg-emerald-500" style={{ width: '10%' }} />
                  <div className="h-full bg-cyan-500" style={{ width: '8%' }} />
                  <div className="h-full bg-amber-500" style={{ width: '82%' }} />
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <span>Scope 1 (10%)</span>
                  <span>Scope 2 (8%)</span>
                  <span>Scope 3 (82%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Scope123ValueChain;