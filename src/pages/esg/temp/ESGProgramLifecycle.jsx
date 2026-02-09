import React, { useState } from 'react';

const ESGProgramLifecycle = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phaseData = {
    1: {
      title: "ASSESS",
      subtitle: "Maturity Assessment & Gap Analysis",
      color: "#1565C0",
      description: "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, reporting, and culture dimensions. Establishes baseline metrics and identifies improvement opportunities.",
      activities: ["ESG Maturity Assessment", "Gap Analysis", "Stakeholder Mapping", "Peer Benchmarking", "Risk Identification"]
    },
    2: {
      title: "DESIGN",
      subtitle: "Strategy & Roadmap Development",
      color: "#00897B",
      description: "Development of tailored ESG strategy aligned with business objectives. Creates prioritized roadmap with clear milestones, resource requirements, and success metrics.",
      activities: ["Materiality Analysis", "Target Setting", "Roadmap Creation", "Business Case Development", "Framework Selection"]
    },
    3: {
      title: "BUILD",
      subtitle: "Governance & Infrastructure",
      color: "#7B1FA2",
      description: "Establishment of robust governance structures, data collection systems, and process frameworks. Builds the foundation for sustainable ESG program execution.",
      activities: ["Governance Framework", "Data Architecture", "Policy Development", "Control Design", "Technology Selection"]
    },
    4: {
      title: "IMPLEMENT",
      subtitle: "Rollout & Change Management",
      color: "#F57C00",
      description: "Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.",
      activities: ["Phased Rollout", "Training Programs", "Change Management", "Pilot Programs", "Stakeholder Engagement"]
    },
    5: {
      title: "OPERATE",
      subtitle: "Manage, Report & Engage",
      color: "#C62828",
      description: "Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.",
      activities: ["Performance Monitoring", "Disclosure & Reporting", "Ratings Management", "Stakeholder Communication", "Assurance Preparation"]
    },
    6: {
      title: "OPTIMIZE",
      subtitle: "Review, Improve & Innovate",
      color: "#0D4F6B",
      description: "Continuous improvement through performance review, emerging trend analysis, and innovation. Drives the cycle back to assessment for sustained excellence.",
      activities: ["Performance Review", "Trend Analysis", "Best Practice Updates", "Innovation Initiatives", "Continuous Improvement"]
    }
  };

  return (
    <div className="bg-slate-50 p-8 rounded-3xl font-sans max-w-5xl mx-auto shadow-sm">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0D4F6B]">ESG Program Lifecycle</h2>
        <p className="text-slate-500">RiskMan's End-to-End Methodology for Sustainable Transformation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* SVG Lifecycle Circle */}
        <div className="relative">
          <svg viewBox="0 0 500 500" className="w-full h-auto">
            <circle cx="250" cy="250" r="230" fill="none" stroke="#E8EDF0" strokeWidth="2" strokeDasharray="8,4" className="animate-spin-slow" />
            
            {/* Center Hub */}
            <circle cx="250" cy="250" r="90" fill="#0D4F6B" className="shadow-lg" />
            <text x="250" y="245" textAnchor="middle" fill="white" className="text-xs font-semibold">INTEGRATED</text>
            <text x="250" y="265" textAnchor="middle" fill="white" className="text-lg font-bold">ESG</text>
            
            {/* Interactive Phase Circles (Simplified for React) */}
            {Object.entries(phaseData).map(([num, data]) => {
              const angle = (num - 1) * 60 - 60;
              const x = 250 + 180 * Math.cos((angle * Math.PI) / 180);
              const y = 250 + 180 * Math.sin((angle * Math.PI) / 180);
              
              return (
                <g key={num} onClick={() => setActivePhase(num)} className="cursor-pointer group">
                  <circle cx={x} cy={y} r="25" fill={data.color} className="transition-transform group-hover:scale-110" />
                  <text x={x} y={y + 5} textAnchor="middle" fill="white" className="font-bold text-sm">{num}</text>
                  <text x={x} y={y + 40} textAnchor="middle" fill={data.color} className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">{data.title}</text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Info Panel */}
        <div className="bg-white p-6 rounded-2xl shadow-xl min-h-[350px] border-l-8 transition-all" 
             style={{ borderColor: activePhase ? phaseData[activePhase].color : '#CBD5E1' }}>
          {activePhase ? (
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" 
                      style={{ backgroundColor: phaseData[activePhase].color }}>{activePhase}</span>
                <div>
                  <h3 className="text-2xl font-bold">{phaseData[activePhase].title}</h3>
                  <p className="text-slate-500 text-sm">{phaseData[activePhase].subtitle}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">{phaseData[activePhase].description}</p>
              <div className="flex flex-wrap gap-2">
                {phaseData[activePhase].activities.map((act, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-white text-xs font-medium" 
                        style={{ backgroundColor: phaseData[activePhase].color }}>{act}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <span className="text-5xl mb-4">👆</span>
              <p>Click on a phase to explore the methodology</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ESGProgramLifecycle;