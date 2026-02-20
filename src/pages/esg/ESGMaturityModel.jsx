
import React, { useState } from "react";

const ESGMaturityModel = () => {
  const [activeStage, setActiveStage] = useState(null);

  const maturityStages = [
    {
      stage: 1,
      title: "Initial",
      color: "from-slate-400 to-slate-600",
      accent: "border-slate-400",
      shadow: "shadow-slate-200",
      characteristics: "Ad hoc ESG activities; reactive compliance; minimal data and reporting.",
      icon: "🌱",
    },
    {
      stage: 2,
      title: "Developing",
      color: "from-blue-600 to-indigo-700",
      accent: "border-blue-500",
      shadow: "shadow-blue-200",
      characteristics: "Formalized policies; basic metrics; initial stakeholder engagement.",
      icon: "📋",
    },
    {
      stage: 3,
      title: "Defined",
      color: "from-indigo-600 to-purple-700",
      accent: "border-indigo-500",
      shadow: "shadow-indigo-200",
      characteristics: "Integrated operations; standardized governance and tracking systems.",
      icon: "📊",
    },
    {
      stage: 4,
      title: "Advanced",
      color: "from-purple-600 to-pink-600",
      accent: "border-purple-500",
      shadow: "shadow-purple-200",
      characteristics: "Mature practices; proactive management; full framework alignment.",
      icon: "🚀",
    },
    {
      stage: 5,
      title: "Transformative",
      color: "from-amber-500 to-orange-600",
      accent: "border-amber-500",
      shadow: "shadow-amber-200",
      characteristics: "Industry-leading; ESG embedded in culture; driving innovation.",
      icon: "🏆",
    },
  ];

  const dimensions = [
    { icon: "⚖️", title: "Governance", desc: "Board oversight & policy frameworks." },
    { icon: "🎯", title: "Strategy", desc: "Materiality & business alignment." },
    { icon: "💾", title: "Technology", desc: "Data infrastructure & quality controls." },
    { icon: "📄", title: "Reporting", desc: "Disclosure quality & assurance." },
    { icon: "👥", title: "Culture", desc: "Change management & skill development." },
  ];

  return (
    <section className="relative py-16 overflow-hidden font-sans bg-slate-50 dark:bg-slate-950">
      {/* Decorative Gradient Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10 px-6 mx-auto lg:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="mt-16 mb-10 overflow-hidden relative p-1 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 rounded-[2.5rem] shadow-2xl">
          <div className="relative px-10 py-12 bg-slate-950/40 backdrop-blur-3xl rounded-[2.4rem]">

            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row">

              {/* Left content */}
              <div className="lg:w-1/2">
                <h3 className="mb-4 text-2xl font-black tracking-wider text-white uppercase">
                  Phase 1: ESG Baseline Assessment
                </h3>
                <p className="text-sm leading-relaxed text-blue-100/70">
                  We evaluate your current ESG posture across key dimensions to identify maturity, gaps,
                  and improvement opportunities.
                </p>
              </div>

              {/* Right grid — from dimensions */}
              <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                {dimensions.map((dim, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 transition-colors border rounded-xl bg-white/5 border-white/10 hover:bg-white/10"
                  >
                    <span className="text-lg text-amber-400">
                      {dim.icon}
                    </span>

                    <div>
                      <div className="text-[10px] font-bold text-white uppercase tracking-widest">
                        {dim.title}
                      </div>
                      <div className="text-[10px] text-blue-100/60 leading-tight">
                        {dim.desc}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Maturity Progression Visualization */}
        <div className="relative p-8 lg:p-12 overflow-hidden bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-2xl rounded-[3rem]">
          {/* Top Progress Bar Gradient */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-400 via-blue-600 to-amber-500" />

          <h3 className="mb-16 text-center text-sm font-black uppercase tracking-[4px] text-slate-400">
            Maturity Progression Model
          </h3>

          <div className="relative">
            {/* Desktop Path Line */}
            <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-slate-100 dark:bg-slate-800 lg:block" />

            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
              {maturityStages.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveStage(i)}
                  onMouseLeave={() => setActiveStage(null)}
                  className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 lg:w-1/5 ${activeStage !== null && activeStage !== i ? "opacity-40 grayscale-[0.5] scale-95" : "opacity-100 scale-100"
                    }`}
                >
                  {/* Circle Icon */}
                  <div className={`flex flex-col items-center justify-center w-24 h-24 mb-6 transition-all duration-500 border-4 rounded-full shadow-2xl bg-gradient-to-br border-white dark:border-slate-900 ${s.color} ${activeStage === i ? "scale-110 rotate-6" : ""}`}>
                    <span className="mb-1 text-3xl">{s.icon}</span>
                    <span className="text-[8px] font-black text-white/80 uppercase tracking-tighter">Stage {s.stage}</span>
                  </div>

                  {/* Title Badge */}
                  <div className={`px-4 py-1.5 mb-4 rounded-full border shadow-sm transition-colors ${s.accent} ${activeStage === i ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800"}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${activeStage === i ? "text-white" : "text-slate-800 dark:text-slate-100"}`}>
                      {s.title}
                    </span>
                  </div>

                  <p className="px-2 text-[11px] font-medium leading-relaxed text-slate-500">
                    {s.characteristics}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase 2 CTA - Redesigned for Impact */}
        <div className="mt-16 overflow-hidden relative p-1 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 rounded-[2.5rem] shadow-2xl">
          <div className="relative px-10 py-12 bg-slate-950/40 backdrop-blur-3xl rounded-[2.4rem]">
            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row">
              <div className="lg:w-1/2">
                <h3 className="mb-4 text-2xl font-black tracking-wider text-white uppercase">Phase 2: Customized ESG Roadmap</h3>
                <p className="text-sm leading-relaxed text-blue-100/70">
                  Based on findings, we develop a tailored roadmap balancing ambition with practicality—addressing resource needs and milestones.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                {["Priority Initiatives", "Phased Timelines", "Resource Plans", "Success Metrics"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 transition-colors border rounded-xl bg-white/5 border-white/10 hover:bg-white/10">
                    <span className="text-amber-400">★</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGMaturityModel;