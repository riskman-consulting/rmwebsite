import React, { useState } from 'react';

const MultiStakeholderImperative = () => {
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const forces = [
    {
      icon: "💰",
      title: "Investor Expectations",
      description: "Global institutional investors increasingly integrate ESG factors into investment decisions, with sustainable assets exceeding trillions globally.",
      accent: "gold"
    },
    {
      icon: "📜",
      title: "Regulatory Acceleration",
      description: "Jurisdictions worldwide mandate ESG disclosures—from the EU's CSRD to India's BRSR and SEC climate rules.",
      accent: "accent"
    },
    {
      icon: "🛒",
      title: "Customer Preferences",
      description: "Both B2B and B2C customers are prioritizing sustainable suppliers and products within their procurement ecosystems.",
      accent: "primary"
    },
    {
      icon: "👥",
      title: "Talent & Society",
      description: "Top talent increasingly seeks employers with genuine sustainability commitments and transparent impact reporting.",
      accent: "goldSoft"
    }
  ];

  const maturityLevels = [
    {
      level: 1,
      title: "Compliance Driven",
      subtitle: "Reactive & Ad-Hoc",
      description: "ESG activities limited to regulatory compliance. No formal strategy or integration with business operations.",
      icon: "📋",
      color: "from-slate-400 to-slate-500",
      textColor: "text-slate-600 dark:text-slate-400",
      borderColor: "border-slate-400/30"
    },
    {
      level: 2,
      title: "Aware & Emerging",
      subtitle: "Basic Framework",
      description: "Organization recognizes ESG importance. Beginning to develop initial policies and assign basic responsibilities.",
      icon: "🌱",
      color: "from-brandNavy to-brandPrimary",
      textColor: "text-brandPrimary dark:text-brandGold",
      borderColor: "border-brandPrimary/30"
    },
    {
      level: 3,
      title: "Managed & Strategic",
      subtitle: "Systematic Approach",
      description: "ESG integrated into business strategy. Clear governance structures and performance tracking systems in place.",
      icon: "⚙️",
      color: "from-brandPrimary to-brandNavy",
      textColor: "text-brandPrimary dark:text-brandGold",
      borderColor: "border-brandPrimary/40"
    },
    {
      level: 4,
      title: "Integrated & Optimized",
      subtitle: "Value Creation Focus",
      description: "ESG excellence drives competitive advantage. Sustainability is embedded across all primary business functions.",
      icon: "🚀",
      color: "from-brandPrimary to-brandAccent",
      textColor: "text-brandAccent dark:text-brandGold",
      borderColor: "border-brandAccent/40"
    },
    {
      level: 5,
      title: "Leading & Transformative",
      subtitle: "Industry Pioneer",
      description: "Organization sets industry standards. ESG drives transformation, innovation, and sustainable model evolution.",
      icon: "💎",
      color: "from-brandAccent to-brandGold",
      textColor: "text-brandGold",
      borderColor: "border-brandGold/50"
    }
  ];

  return (
    <section className="py-20 overflow-hidden lg:py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Forces Grid Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Market Dynamics
          </span>
          <h3 className="mb-6 text-4xl font-black lg:text-5xl font-heading text-brandDark dark:text-surfaceLight">
            The Multi-Stakeholder Imperative
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-brandDark/70 dark:text-surfaceLight/70">
            Multiple market forces are converging to make ESG excellence a core business necessity.
          </p>
        </div>

        {/* Business Signals Grid */}
        <div className="grid max-w-6xl gap-8 mx-auto mb-32 md:grid-cols-2">
          {forces.map((force, index) => (
            <div key={index} className="relative p-8 transition-all duration-300 border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center text-3xl shadow-inner w-14 h-14 bg-bgLight dark:bg-bgDark rounded-2xl">
                  {force.icon}
                </div>
                <div className="px-3 py-1 border rounded-full bg-brandPrimary/5 dark:bg-brandGold/5 border-brandPrimary/10 dark:border-brandGold/20">
                  <span className="text-[10px] font-bold text-brandPrimary dark:text-brandGold tracking-widest uppercase">Business Signal</span>
                </div>
              </div>
              <h4 className="mb-4 text-xl font-black uppercase text-brandDark dark:text-white font-heading">{force.title}</h4>
              <p className="text-sm leading-relaxed text-brandDark/70 dark:text-surfaceLight/70">{force.description}</p>
            </div>
          ))}
        </div>

        {/* Maturity Ladder Section */}
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-3xl font-black lg:text-4xl font-heading text-brandDark dark:text-surfaceLight">
            ESG Maturity Ladder
          </h3>
          <p className="max-w-2xl mx-auto font-medium text-brandDark/60 dark:text-surfaceLight/60">
            A structured pathway from basic compliance to competitive advantage.
          </p>
        </div>

        {/* Staircase Visualization */}
        <div className="mx-auto mb-20 max-w-7xl">
          <div className="flex flex-col items-end justify-center gap-4 lg:flex-row">
            {maturityLevels.map((maturity, index) => {
              const isActive = hoveredLevel === maturity.level || selectedLevel === maturity.level;
              
              return (
                <button
                  key={maturity.level}
                  onClick={() => setSelectedLevel(selectedLevel === maturity.level ? null : maturity.level)}
                  onMouseEnter={() => setHoveredLevel(maturity.level)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className={`relative flex-1 w-full transition-all duration-500 group ${isActive ? 'z-10 scale-105' : 'opacity-80'}`}
                  style={{ height: `${120 + (index * 40)}px` }}
                >
                  <div className={`h-full p-6 border-2 rounded-t-3xl bg-gradient-to-br ${maturity.color} ${maturity.borderColor} flex flex-col items-center justify-between shadow-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 transition-opacity opacity-0 bg-white/5 group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-white rounded-full shadow-lg dark:bg-bgDark">
                      {maturity.icon}
                    </div>

                    <div className="relative z-10 text-center">
                      <div className={`text-4xl font-black mb-1 ${isActive ? 'text-white' : 'text-white/40'}`}>{maturity.level}</div>
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">{maturity.title}</h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedLevel && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            {(() => {
              const data = maturityLevels.find(m => m.level === selectedLevel);
              return (
                <div className={`p-10 rounded-[32px] border-2 bg-surfaceLight dark:bg-surfaceDark ${data.borderColor} shadow-2xl relative overflow-hidden`}>
                   <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${data.color} flex items-center justify-center text-4xl shadow-xl`}>
                        {data.icon}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h4 className={`text-3xl font-black uppercase mb-1 ${data.textColor}`}>Level {data.level}: {data.title}</h4>
                        <p className="text-brandDark/40 dark:text-surfaceLight/40 text-xs font-bold uppercase tracking-[4px] mb-4">{data.subtitle}</p>
                        <p className="text-lg italic leading-relaxed text-brandDark/70 dark:text-surfaceLight/70">
                          "{data.description}"
                        </p>
                      </div>
                      <button onClick={() => setSelectedLevel(null)} className="absolute top-6 right-6 text-brandDark/20 dark:text-white/20 hover:text-brandAccent">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                   </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-brandDark text-brandGold font-black text-sm uppercase tracking-[3px] rounded-full border-2 border-brandGold/30 hover:bg-brandPrimary hover:text-white hover:border-brandPrimary transition-all shadow-2xl">
            Assess Your Maturity Level
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultiStakeholderImperative;