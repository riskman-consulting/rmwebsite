import React, { useState } from "react";

const Scope123ValueChain = () => {
  const [hoveredScope, setHoveredScope] = useState(null);
  const [hoveredSource, setHoveredSource] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);

  const ghgGases = ["CO₂", "CH₄", "N₂O", "HFCs", "PFCs", "SF₆", "NF₃"];

  const scopeData = {
    scope1: {
      title: "SCOPE 1",
      subtitle: "Direct Emissions",
      color: "#4CAF50",
      colorLight: "#E8F5E9",
      percentage: "~10%",
      description:
        "GHG emissions from sources owned or controlled by the organization",
      sources: [
        { icon: "🚗", label: "Company Fleet", desc: "Vehicles owned or operated by the company" },
        { icon: "🏭", label: "Stationary", desc: "Boilers, furnaces, turbines on-site" },
        { icon: "🔥", label: "On-site Fuel", desc: "Natural gas, diesel, propane combustion" },
        { icon: "💨", label: "Fugitive", desc: "Leaks from equipment, pipelines" },
        { icon: "⚙️", label: "Process", desc: "Chemical and physical processing emissions" },
        { icon: "❄️", label: "Refrigerants", desc: "HVAC and cooling system leaks" },
      ],
    },
    scope2: {
      title: "SCOPE 2",
      subtitle: "Indirect Energy",
      color: "#26A69A",
      colorLight: "#E0F2F1",
      percentage: "~8%",
      description:
        "GHG emissions from purchased electricity, steam, heating and cooling",
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
      color: "#FF9800",
      colorLight: "#FFF3E0",
      percentage: "~82%",
      description:
        "All other indirect emissions in the value chain (upstream and downstream)",
      sources: [
        { icon: "📦", label: "Purchased Goods", desc: "Raw materials and services" },
        { icon: "🚚", label: "Transport", desc: "Upstream transportation" },
        { icon: "🏗️", label: "Capital Goods", desc: "Equipment and buildings" },
        { icon: "✈️", label: "Business Travel", desc: "Employee air and rail travel" },
        { icon: "🚶", label: "Commuting", desc: "Employee commutes" },
        { icon: "🗑️", label: "Waste", desc: "Waste disposal operations" },
        { icon: "📤", label: "Distribution", desc: "Downstream transport" },
        { icon: "👤", label: "Product Use", desc: "End-user consumption" },
        { icon: "♻️", label: "End of Life", desc: "Product disposal and recycling" },
      ],
    },
  };

  const Cloud = ({ label, delay }) => (
    <div className="relative animate-cloud" style={{ animationDelay: `${delay}s` }}>
      <div className="relative w-16 h-10 rounded-full shadow-lg bg-gradient-to-b from-slate-500 to-slate-600">
        <div className="absolute w-6 h-6 rounded-full -top-2 left-2 bg-gradient-to-b from-slate-500 to-slate-600" />
        <div className="absolute w-5 h-5 rounded-full -top-1 right-3 bg-gradient-to-b from-slate-500 to-slate-600" />
      </div>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow">
        {label}
      </span>
    </div>
  );

  const ArrowFlow = ({ color, delay }) => (
    <div className="relative flex flex-col items-center h-14">
      <div className="relative w-1 overflow-hidden rounded-full h-9 bg-white/20">
        <span
          className="absolute inset-0 animate-flow"
          style={{
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            animationDelay: `${delay}s`,
          }}
        />
      </div>
      <div
        className="w-0 h-0 border-l-6 border-r-6 border-b-[10px] border-l-transparent border-r-transparent animate-arrowHead"
        style={{ borderBottomColor: color, animationDelay: `${delay}s` }}
      />
    </div>
  );

  const SourceCard = ({ source, scopeColor, scopeKey }) => {
    const isSelected =
      selectedSource?.scopeKey === scopeKey &&
      selectedSource?.source?.label === source.label;
    return (
      <button
        type="button"
        className={`flex flex-col items-center p-2 transition-all duration-300 bg-white rounded-lg shadow-sm cursor-pointer dark:bg-gray-800 hover:shadow-md hover:scale-[1.02] ${
          isSelected ? "ring-2 ring-brandAccent/50" : ""
        }`}
        onMouseEnter={() => setHoveredSource({ scopeKey, source })}
        onMouseLeave={() => setHoveredSource(null)}
        onClick={() =>
          setSelectedSource((prev) =>
            prev?.scopeKey === scopeKey && prev?.source?.label === source.label
              ? null
              : { scopeKey, source }
          )
        }
        style={{ borderColor: scopeColor }}
      >
        <span className="mb-1 text-2xl">{source.icon}</span>
        <span className="text-[10px] text-center text-gray-600 dark:text-gray-300 leading-tight">
          {source.label}
        </span>
      </button>
    );
  };

  const ScopeSection = ({ scopeKey, data }) => {
    const isActive =
      selectedSource?.scopeKey === scopeKey && selectedSource?.source;
    const displaySource =
      selectedSource?.scopeKey === scopeKey
        ? selectedSource?.source
        : hoveredSource?.scopeKey === scopeKey
          ? hoveredSource?.source
          : null;
    return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        hoveredScope === scopeKey ? "ring-2 shadow-xl scale-[1.01]" : "shadow-lg"
      }`}
      style={{
        borderTop: `4px solid ${data.color}`,
        ...(hoveredScope === scopeKey ? { "--tw-ring-color": data.color } : {}),
      }}
      onMouseEnter={() => setHoveredScope(scopeKey)}
      onMouseLeave={() => setHoveredScope(null)}
    >
      <div className="p-3 bg-white/90 dark:bg-gray-800/90">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white rounded-full shadow"
            style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
          >
            {scopeKey.replace("scope", "")}
          </div>
          <div>
            <h3 className="text-sm font-bold" style={{ color: data.color }}>
              {data.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{data.subtitle}</p>
          </div>
        </div>
        {displaySource && (
          <div className="p-2 mb-3 border rounded-lg border-borderLight/70 dark:border-borderDark/70 bg-white/80 dark:bg-gray-900/60">
            <div className="flex items-center gap-2">
              <span className="text-lg">{displaySource.icon}</span>
              <div>
                <p className="text-xs font-semibold text-brandDark dark:text-white">
                  {displaySource.label}
                </p>
                <p className="text-[10px] text-gray-600 dark:text-gray-300">
                  {displaySource.desc}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className={`grid gap-2 ${scopeKey === "scope3" ? "grid-cols-3" : "grid-cols-2"}`}>
          {data.sources.map((source, i) => (
            <SourceCard
              key={i}
              source={source}
              scopeColor={data.color}
              scopeKey={scopeKey}
            />
          ))}
        </div>
      </div>
      <div className="p-3" style={{ backgroundColor: data.colorLight }}>
        <p className="mb-1 text-xs text-gray-600 dark:text-gray-300">{data.description}</p>
        <span className="text-sm font-bold" style={{ color: data.color }}>
          {data.percentage} of footprint
        </span>
      </div>
    </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-200">
      <div className="container">
        <div className="py-6 text-center">
          <h1 className="mb-1 text-2xl font-semibold text-white md:text-3xl">
            GHG Emissions Across the Value Chain
          </h1>
          <p className="text-sm text-slate-300">
            Scope 1, 2 and 3 Greenhouse Gas Protocol Framework
          </p>
        </div>

        <div className="overflow-hidden border shadow-2xl rounded-3xl border-white/10">
          {/* Sky Area */}
          <div className="px-6 py-8 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {ghgGases.map((gas, i) => (
                <Cloud key={gas} label={gas} delay={i * 0.6} />
              ))}
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 mx-auto">
              {["#4CAF50", "#26A69A", "#FF9800"].map((color, i) => (
                <ArrowFlow key={color} color={color} delay={i * 0.6} />
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 bg-gradient-to-b from-slate-200 to-slate-300">
            {/* Scopes grid */}
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
              <ScopeSection scopeKey="scope1" data={scopeData.scope1} />
              <ScopeSection scopeKey="scope2" data={scopeData.scope2} />
              <ScopeSection scopeKey="scope3" data={scopeData.scope3} />
            </div>

            {/* Distribution bar */}
            <div className="p-4 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
              <h4 className="mb-3 text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
                Typical Corporate Emissions Distribution
              </h4>
              <div className="flex h-10 overflow-hidden rounded-lg shadow-inner">
                <div
                  className="flex items-center justify-center text-sm font-semibold text-white"
                  style={{ width: "10%", background: "linear-gradient(135deg, #4CAF50, #2E7D32)" }}
                >
                  10%
                </div>
                <div
                  className="flex items-center justify-center text-sm font-semibold text-white"
                  style={{ width: "8%", background: "linear-gradient(135deg, #26A69A, #00796B)" }}
                >
                  8%
                </div>
                <div
                  className="flex items-center justify-center text-sm font-semibold text-white"
                  style={{ width: "82%", background: "linear-gradient(135deg, #FF9800, #E65100)" }}
                >
                  82%
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
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
        </div>
      </div>

      <style>{`
        @keyframes cloudFloat {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes flowDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(3px); opacity: 1; }
        }
        .animate-cloud {
          animation: cloudFloat 5s ease-in-out infinite;
        }
        .animate-flow {
          animation: flowDown 2.5s ease-in-out infinite;
        }
        .animate-arrowHead {
          animation: arrowPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Scope123ValueChain;
