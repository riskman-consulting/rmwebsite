import React, { useState } from "react";

const ESGProgramLifecycle = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phaseData = {
    1: {
      title: "ASSESS",
      subtitle: "Maturity & Gap Analysis",
      color: "#004080", // brandPrimary
      description:
        "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, and reporting dimensions. Establishes baseline metrics and identifies improvement opportunities.",
      activities: [
        "Maturity Assessment",
        "Gap Analysis",
        "Stakeholder Mapping",
        "Risk Identification",
      ],
    },
    2: {
      title: "DESIGN",
      subtitle: "Strategy & Roadmap",
      color: "#003366", // brandNavy
      description:
        "Development of tailored ESG strategy aligned with business objectives. Creates a prioritized roadmap with clear milestones, resource requirements, and success metrics.",
      activities: [
        "Materiality Analysis",
        "Target Setting",
        "Roadmap Creation",
        "Business Case",
      ],
    },
    3: {
      title: "BUILD",
      subtitle: "Governance & Infrastructure",
      color: "#001F3F", // brandDark
      description:
        "Establishment of robust governance structures, data collection systems, and process frameworks to build a foundation for sustainable execution.",
      activities: [
        "Governance Framework",
        "Data Architecture",
        "Policy Development",
        "Control Design",
      ],
    },
    4: {
      title: "IMPLEMENT",
      subtitle: "Rollout & Training",
      color: "#FFC000", // brandAccent
      description:
        "Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.",
      activities: [
        "Phased Rollout",
        "Training Programs",
        "Change Management",
        "Pilot Programs",
      ],
    },
    5: {
      title: "OPERATE",
      subtitle: "Manage & Report",
      color: "#FFB800", // brandGold
      description:
        "Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.",
      activities: [
        "Performance Monitoring",
        "Disclosure & Reporting",
        "Ratings Management",
        "Assurance Prep",
      ],
    },
    6: {
      title: "OPTIMIZE",
      subtitle: "Review & Innovate",
      color: "#F5F5F5", // brandLight (used as text/accent)
      description:
        "Continuous improvement through performance review, emerging trend analysis, and innovation to drive sustained excellence.",
      activities: [
        "Performance Review",
        "Trend Analysis",
        "Best Practice Updates",
        "Innovation",
      ],
    },
  };

  const handlePhaseClick = (phaseNum) => {
    setActivePhase((prev) => (prev === phaseNum ? null : phaseNum));
  };

  return (
    <section className="py-24 bg-surfaceLight dark:bg-bgDark overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Integrated Excellence
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-surfaceLight text-4xl lg:text-5xl leading-tight mb-6">
            Global ESG Program Methodology
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brandDark/70 dark:text-surfaceLight/70">
            A proprietary end-to-end lifecycle designed to transform 
            sustainability into a core driver of enterprise value.
          </p>
        </div>

        {/* Diagram + Details Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Circular SVG Diagram */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-[500px] animate-fade-in">
              <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer Dashed Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="235"
                  fill="none"
                  stroke="#004080"
                  strokeWidth="1"
                  strokeDasharray="10,5"
                  className="opacity-20 animate-spin-slow"
                  style={{ animationDuration: "120s" }}
                />

                {/* Phase Arcs */}
                {[
                  { d: "M 250 60 A 190 190 0 0 1 415 155", id: 1, label: "ASSESS", color: "#004080" },
                  { d: "M 415 155 A 190 190 0 0 1 415 345", id: 2, label: "DESIGN", color: "#003366" },
                  { d: "M 415 345 A 190 190 0 0 1 250 440", id: 3, label: "BUILD", color: "#001F3F" },
                  { d: "M 250 440 A 190 190 0 0 1 85 345", id: 4, label: "IMPLEMENT", color: "#FFC000" },
                  { d: "M 85 345 A 190 190 0 0 1 85 155", id: 5, label: "OPERATE", color: "#FFB800" },
                  { d: "M 85 155 A 190 190 0 0 1 250 60", id: 6, label: "OPTIMIZE", color: "#004080" },
                ].map((phase) => (
                  <g
                    key={phase.id}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handlePhaseClick(phase.id)}
                    opacity={activePhase && activePhase !== phase.id ? "0.3" : "1"}
                  >
                    <path
                      d={phase.d}
                      fill="none"
                      stroke={phase.color}
                      strokeWidth="60"
                      strokeLinecap="round"
                      className="hover:stroke-brandAccent transition-colors"
                    />
                    <text
                      x="250"
                      y="250"
                      textAnchor="middle"
                      className="fill-white text-[10px] font-black tracking-widest pointer-events-none"
                      transform={`rotate(${60 * (phase.id - 1) + 30 - 90}, 250, 250) translate(0, -185)`}
                    >
                      {phase.label}
                    </text>
                  </g>
                ))}

                {/* Center Core */}
                <circle cx="250" cy="250" r="85" fill="#001F3F" filter="url(#glow)" />
                <circle cx="250" cy="250" r="75" fill="none" stroke="#FFC000" strokeWidth="2" strokeDasharray="5,3" opacity="0.4" />
                <text x="250" y="240" textAnchor="middle" className="fill-brandGold text-[10px] font-bold tracking-widest uppercase">Integrated</text>
                <text x="250" y="265" textAnchor="middle" className="fill-white text-3xl font-black">ESG</text>
                <text x="250" y="285" textAnchor="middle" className="fill-white/70 text-[10px] font-medium tracking-[4px]">EXCELLENCE</text>
              </svg>
            </div>
          </div>

          {/* Details Panel */}
          <div className="flex flex-col justify-center h-full">
            <div className={`p-10 rounded-[32px] border-2 transition-all duration-500 min-h-[400px] flex flex-col justify-center ${
              activePhase 
              ? 'bg-white dark:bg-surfaceDark border-brandGold shadow-2xl' 
              : 'bg-bgLight dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark'
            }`}>
              {activePhase ? (
                <div className="animate-fade-in-up">
                  <div className="flex items-center gap-5 mb-8">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl"
                      style={{ backgroundColor: phaseData[activePhase].color }}
                    >
                      {activePhase}
                    </div>
                    <div>
                      <h4 className="font-heading text-2xl font-black text-brandDark dark:text-white uppercase">
                        {phaseData[activePhase].title}
                      </h4>
                      <p className="text-sm font-bold tracking-wider text-brandPrimary dark:text-brandGold">
                        {phaseData[activePhase].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-brandDark/70 dark:text-surfaceLight/70 mb-10 leading-relaxed italic">
                    {phaseData[activePhase].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phaseData[activePhase].activities.map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-bgLight dark:bg-bgDark rounded-xl border border-borderLight dark:border-borderDark">
                        <span className="w-2 h-2 rounded-full bg-brandGold" />
                        <span className="text-sm font-bold text-brandDark dark:text-surfaceLight">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-6 opacity-20">🖱️</div>
                  <h4 className="text-xl font-bold text-brandDark/40 dark:text-surfaceLight/40 uppercase tracking-[4px]">
                    Select a Phase
                  </h4>
                  <p className="mt-4 text-sm text-brandDark/30 dark:text-surfaceLight/30">
                    Interact with the diagram to explore our methodology.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGProgramLifecycle;