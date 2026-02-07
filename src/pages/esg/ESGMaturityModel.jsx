import React from "react";

const ESGMaturityModel = () => {
  const maturityStages = [
    {
      stage: 1,
      title: "INITIAL",
      color: "from-slate-400 to-slate-600",
      accent: "border-slate-400",
      characteristics: "Ad hoc ESG activities; reactive compliance; minimal data and reporting.",
      icon: "🌱",
    },
    {
      stage: 2,
      title: "DEVELOPING",
      color: "from-brandNavy to-brandPrimary",
      accent: "border-brandPrimary",
      characteristics: "Formalized policies; basic metrics; initial stakeholder engagement and awareness.",
      icon: "📋",
    },
    {
      stage: 3,
      title: "DEFINED",
      color: "from-brandPrimary to-brandNavy",
      accent: "border-brandPrimary",
      characteristics: "Integrated into business operations; standardized governance and tracking systems.",
      icon: "📊",
    },
    {
      stage: 4,
      title: "ADVANCED",
      color: "from-brandPrimary to-brandAccent",
      accent: "border-brandAccent",
      characteristics: "Mature practices; proactive management; full alignment with global frameworks.",
      icon: "🚀",
    },
    {
      stage: 5,
      title: "TRANSFORMATIVE",
      color: "from-brandAccent to-brandGold",
      accent: "border-brandGold",
      characteristics: "Industry-leading; ESG embedded in culture; driving innovation and enterprise value.",
      icon: "🏆",
    },
  ];

  const dimensions = [
    {
      icon: "⚖️",
      title: "Governance & Leadership",
      description: "Board oversight, executive accountability, organizational structure, and policy frameworks.",
    },
    {
      icon: "🎯",
      title: "Strategy & Integration",
      description: "Materiality analysis, target setting, and business strategy alignment.",
    },
    {
      icon: "💾",
      title: "Data & Technology",
      description: "Data collection infrastructure, quality controls, and systems integration.",
    },
    {
      icon: "📄",
      title: "Reporting & Disclosure",
      description: "Framework alignment, disclosure quality, and assurance readiness.",
    },
    {
      icon: "👥",
      title: "Culture & Capability",
      description: "Organizational awareness, skill development, and change management.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brandPrimary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
              Phase 1: ESG Maturity Assessment
            </span>
            <h2 className="mb-6 text-4xl font-black leading-tight font-heading text-brandDark dark:text-surfaceLight lg:text-5xl">
              Assessing Your Organization's <br /> Sustainability Journey
            </h2>
            <p className="max-w-3xl mx-auto font-sans text-lg text-brandDark/70 dark:text-surfaceLight/70">
              Every engagement begins with a comprehensive assessment of your current ESG position across five critical dimensions to establish a clear baseline.
            </p>
          </div>

          {/* Dimensions Grid */}
          <div className="grid gap-6 mb-24 md:grid-cols-2 lg:grid-cols-5">
            {dimensions.map((dim, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {dim.icon}
                </div>
                <h4 className="mb-3 text-sm font-bold tracking-wider uppercase font-heading text-brandDark dark:text-white">
                  {dim.title}
                </h4>
                <p className="text-xs leading-relaxed text-brandDark/60 dark:text-surfaceLight/60">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>

          {/* Maturity Model Visualization */}
          <div className="p-10 border shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-400 via-brandPrimary to-brandGold" />
            
            <h3 className="mb-16 text-xl font-bold text-center font-heading text-brandDark dark:text-white uppercase tracking-[3px]">
              ESG Maturity Progression
            </h3>

            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="relative flex justify-between">
                {/* Connecting Progress Line */}
                <div className="absolute left-0 right-0 h-0.5 top-12 bg-borderLight dark:bg-borderDark z-0" />

                {maturityStages.map((stage, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center w-1/5 px-4 text-center group">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${stage.color} flex flex-col items-center justify-center shadow-xl mb-6 border-4 border-surfaceLight dark:border-surfaceDark transition-transform duration-500 group-hover:scale-110`}>
                      <span className="mb-1 text-3xl">{stage.icon}</span>
                      <span className="text-[10px] font-black text-white/90">STAGE {stage.stage}</span>
                    </div>

                    <div className={`inline-block px-4 py-1 mb-4 rounded-full border ${stage.accent} bg-white dark:bg-bgDark shadow-sm`}>
                      <h5 className="text-xs font-black tracking-widest uppercase text-brandDark dark:text-white">
                        {stage.title}
                      </h5>
                    </div>

                    <p className="text-[11px] font-medium leading-relaxed text-brandDark/60 dark:text-surfaceLight/60">
                      {stage.characteristics}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="space-y-6 lg:hidden">
              {maturityStages.map((stage, index) => (
                <div key={index} className="flex gap-6 p-6 border bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex flex-col items-center justify-center text-white shadow-lg`}>
                    <span className="text-2xl">{stage.icon}</span>
                  </div>
                  <div>
                    <h5 className="mb-2 text-sm font-black tracking-widest uppercase text-brandDark dark:text-white">
                      {stage.stage}. {stage.title}
                    </h5>
                    <p className="text-xs text-brandDark/60 dark:text-surfaceLight/60">
                      {stage.characteristics}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 CTA/Note */}
          <div className="mt-16 p-12 text-white shadow-2xl rounded-[32px] bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 transition-transform duration-700 translate-x-1/2 -translate-y-1/2 rounded-full bg-brandGold/10 blur-3xl group-hover:scale-125" />
            
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-black tracking-widest uppercase font-heading">
                Phase 2: Customized ESG Roadmap
              </h3>
              <p className="max-w-4xl mb-10 leading-relaxed text-white/80">
                Based on assessment findings, we develop a tailored ESG roadmap that balances ambition with practicality, addressing priority initiatives, phased timelines, and resource requirements.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Priority Initiatives", "Focus on high-impact quick wins"],
                  ["Phased Timeline", "Clear implementation milestones"],
                  ["Resource Planning", "Budget and technology needs"],
                  ["Success Metrics", "Quantifiable KPIs and tracking"],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold text-brandGold">✓</span>
                    <div>
                      <h5 className="mb-1 text-xs font-black tracking-widest uppercase">{title}</h5>
                      <p className="text-[11px] text-white/60">{desc}</p>
                    </div>
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