import React from 'react';

const ESGEvolutionTimeline = () => {
  const phases = [
    {
      years: "2000 - 2010",
      title: "COMPLIANCE",
      icon: "📋",
      color: "border-slate-400",
      textColor: "text-slate-600",
      points: [
        "Organizations focused primarily on meeting minimum regulatory requirements[cite: 13].",
        "ESG treated as a risk mitigation exercise with limited strategic integration[cite: 13].",
        "Characterized by reporting burdens and regulatory focus[cite: 17]."
      ]
    },
    {
      years: "2010 - 2020",
      title: "STRATEGY",
      icon: "📈",
      color: "border-blue-500",
      textColor: "text-blue-600",
      points: [
        "Embedding sustainability into business strategy[cite: 14].",
        "Recognizing links between ESG performance, operational efficiency, and brand value[cite: 14].",
        "Focused on stakeholder value and efficiency gains[cite: 17]."
      ]
    },
    {
      years: "2020+",
      title: "VALUE CREATION",
      icon: "🚀",
      color: "border-teal-500",
      textColor: "text-teal-600",
      points: [
        "ESG viewed as a driver of innovation and market differentiation[cite: 15].",
        "Sustainable competitive advantage and enterprise value growth[cite: 15, 17].",
        "Transformation from voluntary CSR to sophisticated frameworks influencing capital allocation[cite: 12]."
      ]
    }
  ];

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The Evolution from Compliance to Value Creation [cite: 11]
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            The ESG landscape has undergone a profound transformation, evolving from voluntary corporate social responsibility 
            into a sophisticated framework that directly influences strategic positioning[cite: 12].
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex items-start justify-between relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-slate-100 z-0"></div>
          
          {phases.map((phase, index) => (
            <div key={index} className="relative z-10 w-1/3 px-4 text-center">
              <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">
                {phase.years} [cite: 17]
              </div>
              <div className={`w-20 h-20 mx-auto rounded-full bg-white border-4 ${phase.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                {phase.icon} [cite: 17]
              </div>
              <h3 className={`text-xl font-bold ${phase.textColor} mb-4 tracking-tight`}>
                {phase.title} [cite: 17]
              </h3>
              <ul className="text-sm text-slate-600 text-left space-y-3">
                {phase.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-2">
                    <span className={`${phase.textColor} mt-1`}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xs font-bold text-slate-400 mb-2 uppercase">{phase.years} [cite: 17]</div>
              <div className={`w-16 h-16 rounded-full bg-white border-4 ${phase.color} flex items-center justify-center text-2xl mb-4`}>
                {phase.icon} [cite: 17]
              </div>
              <h3 className={`text-lg font-bold ${phase.textColor} mb-3`}>{phase.title} [cite: 17]</h3>
              <ul className="text-sm text-slate-600 space-y-2 text-center px-4">
                {phase.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-4 bg-slate-50 rounded-lg text-center italic text-xs text-slate-400">
          📊 VISUAL: ESG EVOLUTION TIMELINE - Horizontal timeline showing the three phases of ESG evolution[cite: 16].
        </div>
      </div>
    </section>
  );
};

export default ESGEvolutionTimeline;