import React, { useState } from "react";

const ESGProgramLifecycle = () => {
  const [activePhase, setActivePhase] = useState(null);
  const [hoverPhase, setHoverPhase] = useState(null);

  const phaseData = {
    1: { title: "ASSESS", subtitle: "Maturity & Gap Analysis", color: "#004080",
      description: "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, and reporting dimensions.",
      activities: ["Maturity Assessment","Gap Analysis","Stakeholder Mapping","Risk Identification"] },
    2: { title: "DESIGN", subtitle: "Strategy & Roadmap", color: "#003366",
      description: "Development of tailored ESG strategy aligned with business objectives.",
      activities: ["Materiality Analysis","Target Setting","Roadmap Creation","Business Case"] },
    3: { title: "BUILD", subtitle: "Governance & Infrastructure", color: "#001F3F",
      description: "Establishment of robust governance structures and ESG systems.",
      activities: ["Governance Framework","Data Architecture","Policy Development","Control Design"] },
    4: { title: "IMPLEMENT", subtitle: "Rollout & Training", color: "#FFC000",
      description: "Deployment of ESG initiatives with change management.",
      activities: ["Phased Rollout","Training Programs","Change Management","Pilot Programs"] },
    5: { title: "OPERATE", subtitle: "Manage & Report", color: "#FFB800",
      description: "Ongoing ESG operations and reporting.",
      activities: ["Performance Monitoring","Disclosure & Reporting","Ratings Management","Assurance Prep"] },
    6: { title: "OPTIMIZE", subtitle: "Review & Innovate", color: "#004080",
      description: "Continuous improvement and ESG innovation.",
      activities: ["Performance Review","Trend Analysis","Best Practice Updates","Innovation"] },
  };

  const phases = [
    { d: "M 250 60 A 190 190 0 0 1 415 155", id: 1 },
    { d: "M 415 155 A 190 190 0 0 1 415 345", id: 2 },
    { d: "M 415 345 A 190 190 0 0 1 250 440", id: 3 },
    { d: "M 250 440 A 190 190 0 0 1 85 345", id: 4 },
    { d: "M 85 345 A 190 190 0 0 1 85 155", id: 5 },
    { d: "M 85 155 A 190 190 0 0 1 250 60", id: 6 },
  ];

  const handleClick = (id) => {
    setActivePhase((p) => (p === id ? null : id));
  };

  return (
    <section className="py-24 bg-surfaceLight dark:bg-bgDark">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= SVG ================= */}
        <div className="flex justify-center">
          <svg viewBox="0 0 500 500" className="w-full max-w-[520px]">

            <circle
              cx="250" cy="250" r="235"
              fill="none"
              stroke="#004080"
              strokeWidth="1"
              strokeDasharray="10,5"
              className="opacity-20"
            />

            {phases.map((p) => {
              const isActive = activePhase === p.id;
              const isHover = hoverPhase === p.id;
              const dim = activePhase && !isActive;

              return (
                <g
                  key={p.id}
                  onClick={() => handleClick(p.id)}
                  onMouseEnter={() => setHoverPhase(p.id)}
                  onMouseLeave={() => setHoverPhase(null)}
                  className="cursor-pointer"
                >
                  {/* invisible thick hit area */}
                  <path
                    d={p.d}
                    stroke="transparent"
                    strokeWidth="80"
                    fill="none"
                  />

                  {/* visible arc */}
                  <path
                    d={p.d}
                    fill="none"
                    stroke={phaseData[p.id].color}
                    strokeWidth={isHover || isActive ? 70 : 60}
                    strokeLinecap="round"
                    opacity={dim ? 0.25 : 1}
                    style={{
                      transition: "all .25s ease"
                    }}
                  />

                  {/* label */}
                  <text
                    x="250"
                    y="250"
                    textAnchor="middle"
                    className="fill-white text-[10px] font-bold pointer-events-none"
                    transform={`rotate(${60*(p.id-1)+30-90},250,250) translate(0,-185)`}
                  >
                    {phaseData[p.id].title}
                  </text>
                </g>
              );
            })}

            {/* center */}
            <circle cx="250" cy="250" r="85" fill="#001F3F" />
            <text x="250" y="250" textAnchor="middle"
              className="fill-white text-3xl font-black">ESG</text>
          </svg>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="p-10 rounded-3xl border shadow-xl bg-white dark:bg-surfaceDark min-h-[380px]">

          {activePhase ? (
            <>
              <h3 className="text-2xl font-black mb-2">
                {phaseData[activePhase].title}
              </h3>

              <p className="text-sm font-semibold mb-4 text-brandPrimary">
                {phaseData[activePhase].subtitle}
              </p>

              <p className="mb-6 opacity-80">
                {phaseData[activePhase].description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {phaseData[activePhase].activities.map((a,i)=>(
                  <div key={i}
                    className="p-3 rounded-xl border text-sm font-semibold">
                    • {a}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center opacity-50 font-bold">
              Hover / Click a phase
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ESGProgramLifecycle;