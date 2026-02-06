// import React from 'react';

// const MultiStakeholderImperative = () => {
//   const forces = [
//     {
//       icon: "💰",
//       title: "Investor Expectations",
//       description:
//         "Global institutional investors increasingly integrate ESG factors into investment decisions, with sustainable investment assets exceeding trillions of US dollars globally.",
//       accent: "gold",
//     },
//     {
//       icon: "📜",
//       title: "Regulatory Acceleration",
//       description:
//         "Jurisdictions worldwide are mandating ESG disclosures—from the EU's CSRD to India's BRSR requirements, California's climate laws, and SEC climate disclosure rules.",
//       accent: "accent",
//     },
//     {
//       icon: "🛒",
//       title: "Customer & Consumer Preferences",
//       description:
//         "Both B2B and B2C customers are prioritizing sustainable suppliers and products.",
//       accent: "primary",
//     },
//     {
//       icon: "👥",
//       title: "Talent & Societal Expectations",
//       description:
//         "Top talent increasingly seeks employers with genuine sustainability commitments.",
//       accent: "goldSoft",
//     },
//   ];

//   const getAccent = (accent) => {
//     const accents = {
//       gold: {
//         badge: "bg-brandGold/15 text-brandGold",
//         icon: "bg-brandGold text-brandDark",
//         bar: "from-brandGold/50 to-brandGold/10",
//       },
//       accent: {
//         badge: "bg-brandAccent/15 text-brandAccent",
//         icon: "bg-brandAccent text-brandDark",
//         bar: "from-brandAccent/50 to-brandAccent/10",
//       },
//       primary: {
//         badge: "bg-brandPrimary/15 text-brandPrimary",
//         icon: "bg-brandPrimary text-white",
//         bar: "from-brandPrimary/50 to-brandPrimary/10",
//       },
//       goldSoft: {
//         badge: "bg-brandGold/10 text-brandGold",
//         icon: "bg-brandGold text-brandDark",
//         bar: "from-brandGold/40 to-brandGold/5",
//       },
//     };
//     return accents[accent] || accents.primary;
//   };

//   return (
//     <section className="py-20 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
//             The Multi-Stakeholder Imperative
//           </h3>
//           <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
//             Multiple forces are converging to make ESG excellence a business imperative
//           </p>
//         </div>

//         {/* Forces Grid */}
//         <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
//           {forces.map((force, index) => {
//             const accent = getAccent(force.accent);
//             return (
//               <div
//                 key={index}
//                 className="relative p-8 transition-all duration-300 border shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1 border-borderLight dark:border-borderDark bg-white/90 dark:bg-surfaceDark/90"
//               >
//                 <div className={`absolute left-8 right-8 top-4 h-1 rounded-full bg-gradient-to-r ${accent.bar}`} />

//                 {/* Icon */}
//                 <div className={`w-16 h-16 ${accent.icon} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
//                   <span className="text-3xl">{force.icon}</span>
//                 </div>

//                 {/* Title */}
//                 <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${accent.badge}`}>
//                   Business Signal
//                 </div>
//                 <h4 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                   {force.title}
//                 </h4>

//                 {/* Description */}
//                 <p className="leading-relaxed text-gray-700 dark:text-gray-300">
//                   {force.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* ESG as Enterprise Risk Management */}
//         <div className="max-w-4xl mx-auto mt-20">
//           <div className="p-8 border shadow-xl bg-white/90 dark:bg-surfaceDark/90 rounded-2xl border-borderLight dark:border-borderDark">
//             <div className="flex items-start gap-6">
//               <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-md bg-brandAccent rounded-xl">
//                 <span className="text-3xl">🛡️</span>
//               </div>
//               <div>
//                 <h4 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                   ESG as Enterprise Risk Management
//                 </h4>
//                 <p className="leading-relaxed text-gray-700 dark:text-gray-300">
//                   Sustainability considerations are now integral to enterprise risk management frameworks. 
//                   Climate-related risks—both physical and transitional—can materially impact business continuity, 
//                   asset valuations, and long-term strategic viability.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MultiStakeholderImperative;


import React, { useState } from 'react';

const MaturityLadder = () => {
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const maturityLevels = [
    {
      level: 1,
      title: "Compliance Driven",
      subtitle: "Reactive & Ad-Hoc",
      description: "ESG activities limited to regulatory compliance. No formal strategy or integration with business operations.",
      characteristics: [
        "Minimal ESG reporting",
        "Reactive to regulations",
        "No dedicated resources",
        "Limited stakeholder engagement"
      ],
      challenges: [
        "High regulatory risk",
        "Missed opportunities",
        "Reputational exposure"
      ],
      height: "h-32",
      intensity: "opacity-60",
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      iconBg: "bg-red-500",
      textColor: "text-red-600 dark:text-red-400",
      icon: "📋"
    },
    {
      level: 2,
      title: "Aware & Emerging",
      subtitle: "Basic Framework",
      description: "Organization recognizes ESG importance. Beginning to develop policies and assign responsibilities.",
      characteristics: [
        "ESG policy development",
        "Initial data collection",
        "Basic reporting framework",
        "Growing awareness"
      ],
      challenges: [
        "Inconsistent practices",
        "Limited integration",
        "Resource constraints"
      ],
      height: "h-40",
      intensity: "opacity-70",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500",
      textColor: "text-orange-600 dark:text-orange-400",
      icon: "🌱"
    },
    {
      level: 3,
      title: "Managed & Strategic",
      subtitle: "Systematic Approach",
      description: "ESG integrated into business strategy. Clear governance structures and performance tracking in place.",
      characteristics: [
        "Strategic ESG integration",
        "KPI tracking systems",
        "Stakeholder engagement",
        "Regular reporting"
      ],
      challenges: [
        "Scaling initiatives",
        "Demonstrating ROI",
        "Cross-functional alignment"
      ],
      height: "h-48",
      intensity: "opacity-80",
      color: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-500/30",
      iconBg: "bg-yellow-500",
      textColor: "text-yellow-600 dark:text-yellow-500",
      icon: "⚙️"
    },
    {
      level: 4,
      title: "Integrated & Optimized",
      subtitle: "Value Creation Focus",
      description: "ESG excellence drives competitive advantage. Sustainability embedded across all business functions.",
      characteristics: [
        "Full value chain integration",
        "Innovation catalyst",
        "Advanced analytics",
        "Industry leadership"
      ],
      challenges: [
        "Continuous improvement",
        "Evolving standards",
        "Global coordination"
      ],
      height: "h-56",
      intensity: "opacity-90",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500",
      textColor: "text-green-600 dark:text-green-400",
      icon: "🚀"
    },
    {
      level: 5,
      title: "Leading & Transformative",
      subtitle: "Industry Pioneer",
      description: "Organization sets industry standards. ESG drives transformation, innovation, and sustainable business model evolution.",
      characteristics: [
        "Industry thought leadership",
        "Transformative innovation",
        "Ecosystem influence",
        "Long-term value creation"
      ],
      challenges: [
        "Maintaining leadership",
        "Pioneering new frontiers",
        "Systemic change advocacy"
      ],
      height: "h-64",
      intensity: "opacity-100",
      color: "from-brandAccent/30 to-brandGold/30",
      borderColor: "border-brandAccent/40",
      iconBg: "bg-gradient-to-br from-brandAccent to-brandGold",
      textColor: "text-brandAccent dark:text-brandGold",
      icon: "💎"
    }
  ];

  const handleLevelClick = (level) => {
    setSelectedLevel(selectedLevel === level ? null : level);
  };

  return (
    <section className="py-20 bg-white dark:bg-bgDark">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-heading text-brandDark dark:text-brandLight">
            ESG Maturity Model
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brandDark/70 dark:text-brandLight/70">
            A structured pathway from compliance to competitive advantage
          </p>
        </div>

        {/* Staircase Visualization */}
        <div className="mx-auto mb-20 max-w-7xl">
          <div className="relative">
            {/* Desktop Staircase */}
            <div className="items-end justify-center hidden gap-4 lg:flex">
              {maturityLevels.map((maturity, index) => {
                const isHovered = hoveredLevel === maturity.level;
                const isSelected = selectedLevel === maturity.level;
                const isActive = isHovered || isSelected;

                return (
                  <button
                    key={maturity.level}
                    onClick={() => handleLevelClick(maturity.level)}
                    onMouseEnter={() => setHoveredLevel(maturity.level)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    className={`relative flex-1 ${maturity.height} ${maturity.intensity} transition-all duration-500 group
                      ${isActive ? 'scale-105 z-10' : 'scale-100'}
                    `}
                  >
                    {/* Step Block */}
                    <div className={`h-full rounded-t-2xl border-2 ${maturity.borderColor} bg-gradient-to-br ${maturity.color} 
                      backdrop-blur-sm p-4 flex flex-col items-center justify-between
                      hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent group-hover:via-white/10" />

                      {/* Level Badge */}
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full ${maturity.iconBg} 
                        border-4 border-white dark:border-bgDark flex items-center justify-center text-2xl shadow-lg z-10`}>
                        {maturity.icon}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center flex-1 mt-8 text-center">
                        <div className={`text-3xl font-bold mb-2 ${maturity.textColor}`}>
                          {maturity.level}
                        </div>
                        <h3 className="mb-1 text-sm font-bold text-brandDark dark:text-brandLight">
                          {maturity.title}
                        </h3>
                        <p className="text-xs text-brandDark/60 dark:text-brandLight/60">
                          {maturity.subtitle}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      {index < maturityLevels.length - 1 && (
                        <div className="absolute z-20 transform -translate-y-1/2 -right-3 top-1/2">
                          <svg className={`w-6 h-6 ${maturity.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Base Line */}
                    <div className={`h-1 mt-2 rounded-full bg-gradient-to-r ${maturity.color.replace('/20', '/40')}`} />
                  </button>
                );
              })}
            </div>

            {/* Mobile Staircase */}
            <div className="flex flex-col gap-4 lg:hidden">
              {maturityLevels.map((maturity) => {
                const isSelected = selectedLevel === maturity.level;

                return (
                  <button
                    key={maturity.level}
                    onClick={() => handleLevelClick(maturity.level)}
                    className={`w-full transition-all duration-300 ${
                      isSelected ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <div className={`rounded-xl border-2 ${maturity.borderColor} bg-gradient-to-br ${maturity.color} p-4`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${maturity.iconBg} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                          {maturity.icon}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className={`text-2xl font-bold ${maturity.textColor}`}>
                              {maturity.level}
                            </span>
                            <h3 className="text-sm font-bold text-brandDark dark:text-brandLight">
                              {maturity.title}
                            </h3>
                          </div>
                          <p className="text-xs text-brandDark/60 dark:text-brandLight/60">
                            {maturity.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Information Panel */}
        {selectedLevel && (
          <div className="max-w-5xl mx-auto duration-500 animate-in fade-in slide-in-from-bottom-4">
            {(() => {
              const maturity = maturityLevels.find(m => m.level === selectedLevel);
              return (
                <div className={`rounded-2xl border-2 ${maturity.borderColor} bg-gradient-to-br ${maturity.color} p-8 shadow-2xl backdrop-blur-sm`}>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${maturity.iconBg} flex items-center justify-center text-4xl shadow-xl flex-shrink-0`}>
                      {maturity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className={`text-4xl font-bold ${maturity.textColor}`}>
                          Level {maturity.level}
                        </span>
                        <h3 className="text-2xl font-bold text-brandDark dark:text-brandLight">
                          {maturity.title}
                        </h3>
                      </div>
                      <p className="mb-4 text-lg text-brandDark/80 dark:text-brandLight/80">
                        {maturity.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedLevel(null)}
                      className="p-2 transition-colors rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
                    >
                      <svg className="w-6 h-6 text-brandDark dark:text-brandLight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Characteristics */}
                    <div>
                      <h4 className="mb-4 text-lg font-bold text-brandDark dark:text-brandLight">
                        Key Characteristics
                      </h4>
                      <ul className="space-y-2">
                        {maturity.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className={`flex-shrink-0 w-5 h-5 mt-0.5 ${maturity.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-brandDark/80 dark:text-brandLight/80">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="mb-4 text-lg font-bold text-brandDark dark:text-brandLight">
                        Common Challenges
                      </h4>
                      <ul className="space-y-2">
                        {maturity.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className={`flex-shrink-0 w-5 h-5 mt-0.5 ${maturity.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span className="text-brandDark/80 dark:text-brandLight/80">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-brandDark/70 dark:text-brandLight/70">
            {selectedLevel 
              ? "Understanding your current maturity level is the first step toward ESG excellence" 
              : "Click any level to explore detailed characteristics and challenges"}
          </p>
          <button className="px-8 py-3 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-brandPrimary to-brandNavy rounded-xl hover:shadow-xl hover:scale-105">
            Assess Your Maturity Level
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaturityLadder;