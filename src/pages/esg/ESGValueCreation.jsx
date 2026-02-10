import React, { useState } from 'react';

const ESGValueCreation = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);

  const quadrants = {
    risk: {
      title: "Risk Mitigation",
      subtitle: "Protect & Defend",
      icon: "🛡️",
      color: "from-blue-900 to-blue-700",
      solid: "#1e3a8a",
      description: "Identify and mitigate ESG risks to protect enterprise value and ensure business continuity.",
      values: ["Regulatory Compliance", "Climate Risk Assessment", "Reputational Management", "Supply Chain Resilience"]
    },
    operational: {
      title: "Operational Excellence",
      subtitle: "Optimize & Improve",
      icon: "⚙️",
      color: "from-slate-900 to-slate-700",
      solid: "#0f172a",
      description: "Drive efficiency and reduce costs through sustainable operational performance.",
      values: ["Energy Efficiency", "Waste Circularity", "Resource Optimization", "Data Quality"]
    },
    stakeholder: {
      title: "Stakeholder Value",
      subtitle: "Engage & Trust",
      icon: "👥",
      color: "from-amber-500 to-orange-600",
      solid: "#f59e0b",
      description: "Strengthen relationships with investors, employees, customers, and communities.",
      values: ["ESG Rating Growth", "Talent Retention", "Brand Loyalty", "Community Relations"]
    },
    growth: {
      title: "Strategic Growth",
      subtitle: "Innovate & Expand",
      icon: "🚀",
      color: "from-yellow-400 to-amber-500",
      solid: "#fbbf24",
      description: "Unlock market opportunities and create competitive advantage through innovation.",
      values: ["Product Innovation", "Green Revenue", "Model Transformation", "Market Differentiation"]
    }
  };

  const kpis = [
    { label: "Compliance Incidents", value: "↓40%", color: "text-blue-900" },
    { label: "Operating Costs", value: "↓25%", color: "text-slate-900" },
    { label: "ESG Rating Score", value: "↑35%", color: "text-amber-600" },
    { label: "Green Revenue", value: "↑20%", color: "text-yellow-600" }
  ];

  return (
    <section className="relative  overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, size: '40px 40px' }} />

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[4px] uppercase rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            Value Creation Framework
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            The RiskMan <span className="text-blue-700 italic">Value</span> Proposition
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            Measurable, sustainable value delivered through an integrated approach to ESG advisory and reporting.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Axis Labels */}
          <div className="hidden lg:flex absolute -top-10 inset-x-0 justify-between px-10 text-[9px] font-bold tracking-[3px] text-slate-400 uppercase">
            <span>← Defensive</span>
            <span>Offensive →</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {Object.entries(quadrants).map(([key, data]) => (
              <div
                key={key}
                onMouseEnter={() => setActiveQuadrant(key)}
                onMouseLeave={() => setActiveQuadrant(null)}
                className={`group p-8 rounded-[2.5rem] border transition-all duration-500 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl 
                  ${activeQuadrant === key ? 'border-transparent scale-[1.02] z-30' : 'border-slate-100 dark:border-slate-800 opacity-90'}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-xl bg-gradient-to-br ${data.color}`}>
                      {data.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none mb-1">{data.title}</h4>
                      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{data.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="mb-8 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {data.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 mt-auto">
                    {data.values.map((val, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.solid }} />
                        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 hidden md:block">
              <div className="w-36 h-36 rounded-full bg-slate-900 border-[6px] border-slate-50 dark:border-slate-950 shadow-2xl flex flex-col items-center justify-center text-center p-4">
                <span className="text-[7px] font-black text-amber-500 tracking-[2px] uppercase mb-1">Sustainable</span>
                <span className="text-[11px] font-black text-white leading-tight uppercase">Enterprise<br/>Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:translate-y-[-4px] transition-all">
              <div className={`text-4xl font-black mb-1 ${kpi.color}`}>{kpi.value}</div>
              <div className="text-[9px] font-bold tracking-[2px] text-slate-400 uppercase">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center opacity-30">
          <p className="text-[9px] font-bold uppercase tracking-[5px] text-slate-900 dark:text-white">
            RiskMan Consulting LLP | Integrated Framework
          </p>
        </div>
      </div>
    </section>
  );
};

export default ESGValueCreation;