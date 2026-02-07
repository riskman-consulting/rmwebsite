import React, { useState } from 'react';

const ESGValueCreation = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);

  const quadrants = {
    risk: {
      title: "Risk Mitigation",
      subtitle: "Protect & Defend",
      icon: "🛡️",
      color: "#004080", // brandPrimary
      description: "Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.",
      values: [
        { icon: "📋", text: "Regulatory Compliance Assurance" },
        { icon: "🌡️", text: "Climate Risk Assessment" },
        { icon: "⚠️", text: "Reputational Risk Management" },
        { icon: "🔒", text: "Supply Chain Resilience" }
      ]
    },
    operational: {
      title: "Operational Excellence",
      subtitle: "Optimize & Improve",
      icon: "⚙️",
      color: "#003366", // brandNavy
      description: "Drive efficiency, reduce costs, and improve operational performance through sustainable practices.",
      values: [
        { icon: "⚡", text: "Energy Efficiency & Cost Reduction" },
        { icon: "♻️", text: "Waste Reduction & Circularity" },
        { icon: "💧", text: "Resource Optimization" },
        { icon: "📊", text: "Process Automation & Data Quality" }
      ]
    },
    stakeholder: {
      title: "Stakeholder Value",
      subtitle: "Engage & Trust",
      icon: "👥",
      color: "#FFC000", // brandAccent
      description: "Build trust and strengthen relationships with investors, employees, customers, and communities.",
      values: [
        { icon: "💰", text: "Investor Confidence & ESG Ratings" },
        { icon: "🏆", text: "Talent Attraction & Retention" },
        { icon: "⭐", text: "Customer Loyalty & Brand Trust" },
        { icon: "🤝", text: "Community Relations" }
      ]
    },
    growth: {
      title: "Strategic Growth",
      subtitle: "Innovate & Expand",
      icon: "🚀",
      color: "#FFB800", // brandGold
      description: "Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.",
      values: [
        { icon: "🌱", text: "Sustainable Product Innovation" },
        { icon: "🌍", text: "New Market Access & Green Revenue" },
        { icon: "💡", text: "Business Model Transformation" },
        { icon: "🏅", text: "Competitive Differentiation" }
      ]
    }
  };

  const kpis = [
    { label: "Compliance Incidents", value: "↓40%", color: "#004080" },
    { label: "Operating Costs", value: "↓25%", color: "#003366" },
    { label: "ESG Rating Score", value: "↑35%", color: "#FFC000" },
    { label: "Green Revenue", value: "↑20%", color: "#FFB800" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-bgLight dark:bg-bgDark overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Value Creation Framework
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-surfaceLight text-4xl lg:text-6xl leading-tight mb-8">
            The RiskMan <br /> Value Proposition
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-brandDark/70 dark:text-surfaceLight/70 font-sans leading-relaxed">
            RiskMan delivers measurable, sustainable value through an integrated approach 
            to ESG advisory, implementation, and reporting.
          </p>
        </div>

        {/* Interactive Matrix Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Axis Labels - Desktop */}
          <div className="hidden lg:block">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[4px] text-brandPrimary/30 dark:text-brandGold/30 uppercase">
              ← Defensive | Offensive →
            </div>
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-[10px] font-black tracking-[4px] text-brandPrimary/30 dark:text-brandGold/30 uppercase">
              Internal Focus
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 text-[10px] font-black tracking-[4px] text-brandPrimary/30 dark:text-brandGold/30 uppercase">
              External Focus
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {Object.entries(quadrants).map(([key, data]) => (
              <div
                key={key}
                onMouseEnter={() => setActiveQuadrant(key)}
                onMouseLeave={() => setActiveQuadrant(null)}
                className={`p-8 rounded-[32px] border-2 transition-all duration-500 cursor-pointer min-h-[380px] flex flex-col justify-between ${
                  activeQuadrant === key 
                  ? 'bg-surfaceLight dark:bg-surfaceDark shadow-2xl scale-[1.02]' 
                  : 'bg-bgLight dark:bg-bgDark border-transparent opacity-80'
                }`}
                style={{ borderColor: activeQuadrant === key ? data.color : 'transparent' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                      style={{ backgroundColor: data.color }}
                    >
                      {data.icon}
                    </div>
                    <div className="text-right">
                      <h4 className="font-heading font-black text-xl text-brandDark dark:text-white uppercase">{data.title}</h4>
                      <p className="text-[10px] font-bold tracking-widest text-brandPrimary dark:text-brandGold uppercase">{data.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-brandDark/70 dark:text-surfaceLight/70 leading-relaxed mb-8 italic">
                    {data.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-xl border border-borderLight dark:border-borderDark group hover:bg-white transition-all">
                      <span className="text-lg">{v.icon}</span>
                      <span className="text-[10px] font-bold text-brandDark dark:text-surfaceLight uppercase leading-tight">{v.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Central Hub - Desktop Only */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
               <div className="w-40 h-40 rounded-full bg-brandDark border-4 border-surfaceLight dark:border-bgDark shadow-2xl flex flex-col items-center justify-center text-center p-4">
                  <span className="text-[8px] font-black text-brandGold tracking-widest uppercase mb-1">Sustainable</span>
                  <span className="text-sm font-black text-white leading-tight">ENTERPRISE VALUE</span>
                  <div className="w-10 h-0.5 bg-brandGold/30 my-2" />
                  <span className="text-[8px] font-bold text-white/50 uppercase">ESG Integrated</span>
               </div>
            </div>
          </div>
        </div>

        {/* KPI Performance Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className="p-8 bg-surfaceLight dark:bg-surfaceDark rounded-3xl border border-borderLight dark:border-borderDark shadow-lg text-center group hover:scale-105 transition-all"
              >
                <div 
                  className="text-4xl lg:text-5xl font-black mb-2 transition-transform group-hover:scale-110"
                  style={{ color: kpi.color }}
                >
                  {kpi.value}
                </div>
                <div className="text-[10px] font-bold tracking-[3px] text-brandDark/40 dark:text-surfaceLight/40 uppercase">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Footer Attribution */}
        <div className="mt-16 pt-8 border-t border-borderLight dark:border-borderDark text-center">
          <p className="text-[10px] font-bold text-brandDark/30 dark:text-surfaceLight/30 uppercase tracking-[4px]">
            RiskMan Consulting LLP | Integrated Sustainability Value Framework
          </p>
        </div>
      </div>
    </section>
  );
};

export default ESGValueCreation;