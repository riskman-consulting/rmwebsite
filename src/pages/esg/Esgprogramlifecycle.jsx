// import React, { useState } from 'react';

// const ESGProgramLifecycle = () => {
//   const [activePhase, setActivePhase] = useState(null);

//   const phaseData = {
//     1: {
//       title: "ASSESS",
//       subtitle: "Maturity Assessment & Gap Analysis",
//       color: "#1565C0",
//       description: "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, reporting, and culture dimensions. Establishes baseline metrics and identifies improvement opportunities.",
//       activities: ["ESG Maturity Assessment", "Gap Analysis", "Stakeholder Mapping", "Peer Benchmarking", "Risk Identification"]
//     },
//     2: {
//       title: "DESIGN",
//       subtitle: "Strategy & Roadmap Development",
//       color: "#00897B",
//       description: "Development of tailored ESG strategy aligned with business objectives. Creates prioritized roadmap with clear milestones, resource requirements, and success metrics.",
//       activities: ["Materiality Analysis", "Target Setting", "Roadmap Creation", "Business Case Development", "Framework Selection"]
//     },
//     3: {
//       title: "BUILD",
//       subtitle: "Governance & Infrastructure",
//       color: "#7B1FA2",
//       description: "Establishment of robust governance structures, data collection systems, and process frameworks. Builds the foundation for sustainable ESG program execution.",
//       activities: ["Governance Framework", "Data Architecture", "Policy Development", "Control Design", "Technology Selection"]
//     },
//     4: {
//       title: "IMPLEMENT",
//       subtitle: "Rollout & Change Management",
//       color: "#F57C00",
//       description: "Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.",
//       activities: ["Phased Rollout", "Training Programs", "Change Management", "Pilot Programs", "Stakeholder Engagement"]
//     },
//     5: {
//       title: "OPERATE",
//       subtitle: "Manage, Report & Engage",
//       color: "#C62828",
//       description: "Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.",
//       activities: ["Performance Monitoring", "Disclosure & Reporting", "Ratings Management", "Stakeholder Communication", "Assurance Preparation"]
//     },
//     6: {
//       title: "OPTIMIZE",
//       subtitle: "Review, Improve & Innovate",
//       color: "#0D4F6B",
//       description: "Continuous improvement through performance review, emerging trend analysis, and innovation. Drives the cycle back to assessment for sustained excellence.",
//       activities: ["Performance Review", "Trend Analysis", "Best Practice Updates", "Innovation Initiatives", "Continuous Improvement"]
//     }
//   };

//   const handlePhaseClick = (phaseNum) => {
//     setActivePhase(phaseNum);
//   };

//   return (
//     <section className="py-20 bg-white dark:bg-surfaceDark">
//       <div className="container">
//         <div className="mb-12 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
//             RiskMan's Global ESG Program Methodology
//           </h2>
//           <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
//             RiskMan delivers enterprise-grade ESG programs that combine strategic vision with practical execution excellence
//           </p>
//         </div>

//         <div className="mb-8 text-center">
//           <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
//             ESG Program Lifecycle
//           </h3>
//           <p className="text-gray-600 dark:text-gray-400">
//             End-to-End Methodology for Sustainable Transformation
//           </p>
//         </div>

//         {/* Lifecycle Diagram */}
//         <div className="max-w-4xl mx-auto mb-8">
//           <svg viewBox="0 0 500 500" className="w-full h-auto">
//             <defs>
//               {/* Gradients */}
//               <linearGradient id="assessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#1565C0"/>
//                 <stop offset="100%" stopColor="#0D47A1"/>
//               </linearGradient>
//               <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#00897B"/>
//                 <stop offset="100%" stopColor="#00695C"/>
//               </linearGradient>
//               <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#7B1FA2"/>
//                 <stop offset="100%" stopColor="#6A1B9A"/>
//               </linearGradient>
//               <linearGradient id="implementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#F57C00"/>
//                 <stop offset="100%" stopColor="#E65100"/>
//               </linearGradient>
//               <linearGradient id="operateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#C62828"/>
//                 <stop offset="100%" stopColor="#B71C1C"/>
//               </linearGradient>
//               <linearGradient id="optimizeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#0D4F6B"/>
//                 <stop offset="100%" stopColor="#1B2B3A"/>
//               </linearGradient>
//               <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#0D4F6B"/>
//                 <stop offset="100%" stopColor="#1A7A8C"/>
//               </linearGradient>

//               <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
//                 <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
//               </filter>
//               <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                 <feMerge>
//                   <feMergeNode in="coloredBlur"/>
//                   <feMergeNode in="SourceGraphic"/>
//                 </feMerge>
//               </filter>
//             </defs>

//             {/* Outer ring */}
//             <circle cx="250" cy="250" r="230" fill="none" stroke="#E8EDF0" strokeWidth="2" strokeDasharray="8,4" className="animate-spin-slow" style={{ animationDuration: '60s' }}/>

//             {/* Phase arcs */}
//             <g className="cursor-pointer" onClick={() => handlePhaseClick(1)} opacity={activePhase && activePhase !== 1 ? "0.6" : "1"}>
//               <path d="M 250 55 A 195 195 0 0 1 419 152" fill="none" stroke="url(#assessGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="355" y="95" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(30, 355, 95)">ASSESS</text>
//             </g>

//             <g className="cursor-pointer" onClick={() => handlePhaseClick(2)} opacity={activePhase && activePhase !== 2 ? "0.6" : "1"}>
//               <path d="M 419 152 A 195 195 0 0 1 419 348" fill="none" stroke="url(#designGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="435" y="250" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(90, 435, 250)">DESIGN</text>
//             </g>

//             <g className="cursor-pointer" onClick={() => handlePhaseClick(3)} opacity={activePhase && activePhase !== 3 ? "0.6" : "1"}>
//               <path d="M 419 348 A 195 195 0 0 1 250 445" fill="none" stroke="url(#buildGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="355" y="410" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(-30, 355, 410)">BUILD</text>
//             </g>

//             <g className="cursor-pointer" onClick={() => handlePhaseClick(4)} opacity={activePhase && activePhase !== 4 ? "0.6" : "1"}>
//               <path d="M 250 445 A 195 195 0 0 1 81 348" fill="none" stroke="url(#implementGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="145" y="410" className="text-xs font-semibold fill-white" textAnchor="middle" transform="rotate(30, 145, 410)">IMPLEMENT</text>
//             </g>

//             <g className="cursor-pointer" onClick={() => handlePhaseClick(5)} opacity={activePhase && activePhase !== 5 ? "0.6" : "1"}>
//               <path d="M 81 348 A 195 195 0 0 1 81 152" fill="none" stroke="url(#operateGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="65" y="250" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(-90, 65, 250)">OPERATE</text>
//             </g>

//             <g className="cursor-pointer" onClick={() => handlePhaseClick(6)} opacity={activePhase && activePhase !== 6 ? "0.6" : "1"}>
//               <path d="M 81 152 A 195 195 0 0 1 250 55" fill="none" stroke="url(#optimizeGrad)" strokeWidth="65" strokeLinecap="round"/>
//               <text x="145" y="95" className="text-xs font-semibold fill-white" textAnchor="middle" transform="rotate(-30, 145, 95)">OPTIMIZE</text>
//             </g>

//             {/* Center hub */}
//             <g filter="url(#shadow)">
//               <circle cx="250" cy="250" r="90" fill="url(#centerGrad)" filter="url(#glow)"/>
//               <circle cx="250" cy="250" r="75" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
//               <text x="250" y="235" textAnchor="middle" className="text-xs font-semibold fill-white">INTEGRATED</text>
//               <text x="250" y="255" textAnchor="middle" className="text-lg font-bold fill-white">ESG</text>
//               <text x="250" y="275" textAnchor="middle" className="text-xs font-semibold fill-white">EXCELLENCE</text>
//             </g>

//             {/* Phase numbers */}
//             <g filter="url(#shadow)">
//               <circle cx="330" cy="70" r="18" fill="#1565C0"/>
//               <text x="330" y="76" textAnchor="middle" className="text-sm font-bold fill-white">1</text>

//               <circle cx="450" cy="250" r="18" fill="#00897B"/>
//               <text x="450" y="256" textAnchor="middle" className="text-sm font-bold fill-white">2</text>

//               <circle cx="330" cy="430" r="18" fill="#7B1FA2"/>
//               <text x="330" y="436" textAnchor="middle" className="text-sm font-bold fill-white">3</text>

//               <circle cx="170" cy="430" r="18" fill="#F57C00"/>
//               <text x="170" y="436" textAnchor="middle" className="text-sm font-bold fill-white">4</text>

//               <circle cx="50" cy="250" r="18" fill="#C62828"/>
//               <text x="50" y="256" textAnchor="middle" className="text-sm font-bold fill-white">5</text>

//               <circle cx="170" cy="70" r="18" fill="#0D4F6B"/>
//               <text x="170" y="76" textAnchor="middle" className="text-sm font-bold fill-white">6</text>
//             </g>
//           </svg>
//         </div>

//         {/* Info Panel */}
//         <div className={`max-w-4xl mx-auto transition-all duration-300 ${activePhase ? 'opacity-100' : 'opacity-70'}`}>
//           <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
//             {activePhase ? (
//               <div>
//                 <div className="flex items-center gap-4 mb-4">
//                   <div 
//                     className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-lg"
//                     style={{ backgroundColor: phaseData[activePhase].color }}
//                   >
//                     {activePhase}
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold font-heading text-brandDark dark:text-white">{phaseData[activePhase].title}</h4>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">{phaseData[activePhase].subtitle}</p>
//                   </div>
//                 </div>
//                 <p className="mb-4 text-gray-700 dark:text-gray-300">{phaseData[activePhase].description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {phaseData[activePhase].activities.map((activity, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1 text-xs font-medium text-white rounded-full"
//                       style={{ backgroundColor: phaseData[activePhase].color }}
//                     >
//                       {activity}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <p className="text-center text-gray-400">Click on any phase to explore the ESG Program Lifecycle</p>
//             )}
//           </div>
//         </div>

//         {/* <div className="mt-6 text-xs text-center text-gray-400">
//           RiskMan Consulting LLP | Sustainability & ESG Practice
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ESGProgramLifecycle;



import React, { useState } from "react";

const ESGProgramLifecycle = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phaseData = {
    1: {
      title: "ASSESS",
      subtitle: "Maturity Assessment & Gap Analysis",
      color: "#1565C0",
      description:
        "Comprehensive evaluation of your organization's current ESG position across governance, strategy, data, reporting, and culture dimensions. Establishes baseline metrics and identifies improvement opportunities.",
      activities: [
        "ESG Maturity Assessment",
        "Gap Analysis",
        "Stakeholder Mapping",
        "Peer Benchmarking",
        "Risk Identification",
      ],
    },
    2: {
      title: "DESIGN",
      subtitle: "Strategy & Roadmap Development",
      color: "#00897B",
      description:
        "Development of tailored ESG strategy aligned with business objectives. Creates prioritized roadmap with clear milestones, resource requirements, and success metrics.",
      activities: [
        "Materiality Analysis",
        "Target Setting",
        "Roadmap Creation",
        "Business Case Development",
        "Framework Selection",
      ],
    },
    3: {
      title: "BUILD",
      subtitle: "Governance & Infrastructure",
      color: "#7B1FA2",
      description:
        "Establishment of robust governance structures, data collection systems, and process frameworks. Builds the foundation for sustainable ESG program execution.",
      activities: [
        "Governance Framework",
        "Data Architecture",
        "Policy Development",
        "Control Design",
        "Technology Selection",
      ],
    },
    4: {
      title: "IMPLEMENT",
      subtitle: "Rollout & Change Management",
      color: "#F57C00",
      description:
        "Systematic deployment of ESG initiatives across the organization. Focuses on change management, capability building, and stakeholder engagement.",
      activities: [
        "Phased Rollout",
        "Training Programs",
        "Change Management",
        "Pilot Programs",
        "Stakeholder Engagement",
      ],
    },
    5: {
      title: "OPERATE",
      subtitle: "Manage, Report & Engage",
      color: "#C62828",
      description:
        "Ongoing management of ESG programs, regular reporting to stakeholders, and continuous engagement with internal and external parties.",
      activities: [
        "Performance Monitoring",
        "Disclosure & Reporting",
        "Ratings Management",
        "Stakeholder Communication",
        "Assurance Preparation",
      ],
    },
    6: {
      title: "OPTIMIZE",
      subtitle: "Review, Improve & Innovate",
      color: "#0D4F6B",
      description:
        "Continuous improvement through performance review, emerging trend analysis, and innovation. Drives the cycle back to assessment for sustained excellence.",
      activities: [
        "Performance Review",
        "Trend Analysis",
        "Best Practice Updates",
        "Innovation Initiatives",
        "Continuous Improvement",
      ],
    },
  };

  const handlePhaseClick = (phaseNum) => {
    setActivePhase((prev) => (prev === phaseNum ? null : phaseNum));
  };

  const handleClearPhase = () => {
    setActivePhase(null);
  };

  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            RiskMan's Global ESG Program Methodology
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            RiskMan delivers enterprise-grade ESG programs that combine strategic vision with practical execution excellence
          </p>
        </div>

        <div className="mb-10 text-center">
          <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
            ESG Program Lifecycle
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            End-to-End Methodology for Sustainable Transformation
          </p>
        </div>

        {/* Diagram + Info Panel */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Diagram */}
          <div className="flex justify-center">
            <div className="w-full max-w-[520px]">
              <svg viewBox="0 0 500 500" className="w-full h-auto">
                <defs>
                  <linearGradient id="assessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1565C0" />
                    <stop offset="100%" stopColor="#0D47A1" />
                  </linearGradient>
                  <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00897B" />
                    <stop offset="100%" stopColor="#00695C" />
                  </linearGradient>
                  <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B1FA2" />
                    <stop offset="100%" stopColor="#6A1B9A" />
                  </linearGradient>
                  <linearGradient id="implementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F57C00" />
                    <stop offset="100%" stopColor="#E65100" />
                  </linearGradient>
                  <linearGradient id="operateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C62828" />
                    <stop offset="100%" stopColor="#B71C1C" />
                  </linearGradient>
                  <linearGradient id="optimizeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0D4F6B" />
                    <stop offset="100%" stopColor="#1B2B3A" />
                  </linearGradient>
                  <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0D4F6B" />
                    <stop offset="100%" stopColor="#1A7A8C" />
                  </linearGradient>

                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                  </filter>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="230"
                  fill="none"
                  stroke="#E8EDF0"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  className="animate-spin-slow"
                  style={{ animationDuration: "60s" }}
                />

                {/* Phase arcs */}
                <g className="cursor-pointer" onClick={() => handlePhaseClick(1)} opacity={activePhase && activePhase !== 1 ? "0.6" : "1"}>
                  <path d="M 250 55 A 195 195 0 0 1 419 152" fill="none" stroke="url(#assessGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="355" y="95" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(30, 355, 95)">ASSESS</text>
                </g>

                <g className="cursor-pointer" onClick={() => handlePhaseClick(2)} opacity={activePhase && activePhase !== 2 ? "0.6" : "1"}>
                  <path d="M 419 152 A 195 195 0 0 1 419 348" fill="none" stroke="url(#designGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="435" y="250" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(90, 435, 250)">DESIGN</text>
                </g>

                <g className="cursor-pointer" onClick={() => handlePhaseClick(3)} opacity={activePhase && activePhase !== 3 ? "0.6" : "1"}>
                  <path d="M 419 348 A 195 195 0 0 1 250 445" fill="none" stroke="url(#buildGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="355" y="410" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(-30, 355, 410)">BUILD</text>
                </g>

                <g className="cursor-pointer" onClick={() => handlePhaseClick(4)} opacity={activePhase && activePhase !== 4 ? "0.6" : "1"}>
                  <path d="M 250 445 A 195 195 0 0 1 81 348" fill="none" stroke="url(#implementGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="145" y="410" className="text-xs font-semibold fill-white" textAnchor="middle" transform="rotate(30, 145, 410)">IMPLEMENT</text>
                </g>

                <g className="cursor-pointer" onClick={() => handlePhaseClick(5)} opacity={activePhase && activePhase !== 5 ? "0.6" : "1"}>
                  <path d="M 81 348 A 195 195 0 0 1 81 152" fill="none" stroke="url(#operateGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="65" y="250" className="text-sm font-semibold fill-white" textAnchor="middle" transform="rotate(-90, 65, 250)">OPERATE</text>
                </g>

                <g className="cursor-pointer" onClick={() => handlePhaseClick(6)} opacity={activePhase && activePhase !== 6 ? "0.6" : "1"}>
                  <path d="M 81 152 A 195 195 0 0 1 250 55" fill="none" stroke="url(#optimizeGrad)" strokeWidth="65" strokeLinecap="round" />
                  <text x="145" y="95" className="text-xs font-semibold fill-white" textAnchor="middle" transform="rotate(-30, 145, 95)">OPTIMIZE</text>
                </g>

                {/* Center hub */}
                <g filter="url(#shadow)">
                  <circle cx="250" cy="250" r="90" fill="url(#centerGrad)" filter="url(#glow)" />
                  <circle cx="250" cy="250" r="75" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                  <text x="250" y="235" textAnchor="middle" className="text-xs font-semibold fill-white">INTEGRATED</text>
                  <text x="250" y="255" textAnchor="middle" className="text-lg font-bold fill-white">ESG</text>
                  <text x="250" y="275" textAnchor="middle" className="text-xs font-semibold fill-white">EXCELLENCE</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Info Panel */}
          <div className="w-full">
            <div className="p-6 shadow-lg bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandDark/60 dark:text-white/60">
                  Phase Details
                </p>
                {activePhase && (
                  <button
                    type="button"
                    onClick={handleClearPhase}
                    className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-borderLight dark:border-borderDark text-brandDark/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    Clear
                  </button>
                )}
              </div>
              {activePhase ? (
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full shadow-lg"
                      style={{ backgroundColor: phaseData[activePhase].color }}
                    >
                      {activePhase}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-heading text-brandDark dark:text-white">
                        {phaseData[activePhase].title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {phaseData[activePhase].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {phaseData[activePhase].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {phaseData[activePhase].activities.map((activity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-white rounded-full"
                        style={{ backgroundColor: phaseData[activePhase].color }}
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-400">
                  Click on any phase to explore the ESG Program Lifecycle
                </p>
              )}
            </div>
          </div>
        </div>

        {/* <div className="mt-6 text-xs text-center text-gray-400">
          RiskMan Consulting LLP | Sustainability & ESG Practice
        </div> */}
      </div>
    </section>
  );
};

export default ESGProgramLifecycle;