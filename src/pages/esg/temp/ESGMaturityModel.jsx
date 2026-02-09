import React, { useState } from 'react';

/**
 * ESGMaturityModel Component
 * Visualizes the five stages of ESG maturity from Initial to Transformative.
 * Sources: [cite: 874-883]
 */
export default function ESGMaturityModel() {
  const [activeStage, setActiveStage] = useState(2); // Default to stage 3 (index 2)

  const stages = [
    {
      id: 1,
      name: "INITIAL",
      color: "#94A3B8",
      characteristics: "Ad hoc ESG activities; reactive compliance; minimal data.",
      details: ["Reactive approach", "Compliance driven", "Fragmented data sets"]
    },
    {
      id: 2,
      name: "DEVELOPING",
      color: "#64748B",
      characteristics: "Formalized policies; basic metrics; initial engagement.",
      details: ["Policy formalization", "Basic KPI tracking", "Emerging stakeholder focus"]
    },
    {
      id: 3,
      name: "DEFINED",
      color: "#0D4F6B",
      characteristics: "Integrated into operations; standardized governance.",
      details: ["Standardized frameworks", "Operational integration", "Clear accountability"]
    },
    {
      id: 4,
      name: "ADVANCED",
      color: "#1A7A8C",
      characteristics: "Mature practices; proactive management; framework alignment.",
      details: ["Proactive risk mgmt", "Strategic alignment", "External assurance ready"]
    },
    {
      id: 5,
      name: "TRANSFORMATIVE",
      color: "#2E9CAF",
      characteristics: "Industry-leading; embedded in culture; driving innovation.",
      details: ["Cultural embodiment", "Innovation catalyst", "Value creation leader"]
    }
  ];

  return (
    <div className="py-12 px-6 bg-white rounded-3xl shadow-sm font-sans max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG Maturity Model</h2>
        <p className="text-slate-500 text-sm uppercase tracking-widest">Stage-based progression toward ESG Excellence</p>
      </div>

      {/* Maturity Curve Visual */}
      <div className="relative mb-12 px-4">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2"></div>
        <div className="flex justify-between relative z-10">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(index)}
              className="group flex flex-col items-center focus:outline-none"
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  activeStage === index ? 'scale-125 shadow-lg' : 'scale-100 hover:scale-110'
                }`}
                style={{ 
                  backgroundColor: activeStage === index ? stage.color : 'white',
                  borderColor: stage.color,
                  color: activeStage === index ? 'white' : stage.color
                }}
              >
                <span className="font-bold">{stage.id}</span>
              </div>
              <span className={`mt-4 text-[10px] font-bold tracking-tighter transition-colors ${
                activeStage === index ? 'text-slate-900' : 'text-slate-400'
              }`}>
                {stage.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div 
        className="p-8 rounded-2xl border-t-8 transition-all duration-500 shadow-md bg-slate-50"
        style={{ borderTopColor: stages[activeStage].color }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2" style={{ color: stages[activeStage].color }}>
              Stage {stages[activeStage].id}: {stages[activeStage].name}
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed italic">
              "{stages[activeStage].characteristics}"
            </p>
          </div>
          <div className="flex-1 border-l border-slate-200 md:pl-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Dimensions</h4>
            <div className="grid grid-cols-1 gap-2">
              {stages[activeStage].details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stages[activeStage].color }}></div>
                  <span className="text-sm text-slate-600 font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-[10px] text-slate-400 mt-8">
        📊 VISUAL: ESG MATURITY MODEL - Five-stage maturity curve showing progression from Initial to Transformative.
      </p>
    </div>
  );
}