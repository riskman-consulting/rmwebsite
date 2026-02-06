// import React from 'react';

// const ESGMaturityModel = () => {
//   const maturityStages = [
//     {
//       stage: 1,
//       title: "INITIAL",
//       color: "red",
//       characteristics: "Ad hoc ESG activities; reactive compliance; minimal data",
//       icon: "🌱"
//     },
//     {
//       stage: 2,
//       title: "DEVELOPING",
//       color: "orange",
//       characteristics: "Formalized policies; basic metrics; initial engagement",
//       icon: "📋"
//     },
//     {
//       stage: 3,
//       title: "DEFINED",
//       color: "yellow",
//       characteristics: "Integrated into operations; standardized governance",
//       icon: "📊"
//     },
//     {
//       stage: 4,
//       title: "ADVANCED",
//       color: "blue",
//       characteristics: "Mature practices; proactive management; framework alignment",
//       icon: "🚀"
//     },
//     {
//       stage: 5,
//       title: "TRANSFORMATIVE",
//       color: "green",
//       characteristics: "Industry-leading; embedded in culture; driving innovation",
//       icon: "🏆"
//     }
//   ];

//   const dimensions = [
//     {
//       icon: "⚖️",
//       title: "Governance & Leadership",
//       description: "Board oversight, executive accountability, organizational structure, policy frameworks"
//     },
//     {
//       icon: "🎯",
//       title: "Strategy & Integration",
//       description: "Materiality analysis, target setting, business strategy alignment"
//     },
//     {
//       icon: "💾",
//       title: "Data & Technology",
//       description: "Data collection infrastructure, quality controls, systems integration"
//     },
//     {
//       icon: "📄",
//       title: "Reporting & Disclosure",
//       description: "Framework alignment, disclosure quality, assurance readiness"
//     },
//     {
//       icon: "👥",
//       title: "Culture & Capability",
//       description: "Organizational awareness, skill development, change management"
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       red: "from-red-400 to-red-600",
//       orange: "from-orange-400 to-orange-600",
//       yellow: "from-yellow-400 to-yellow-600",
//       blue: "from-blue-400 to-blue-600",
//       green: "from-green-400 to-green-600"
//     };
//     return colors[color];
//   };

//   return (
//     <section className="py-20 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12 text-center">
//             <h3 className="mb-4 text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
//               Phase 1: ESG Maturity Assessment
//             </h3>
//             <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
//               Every engagement begins with a comprehensive assessment of your organization's current ESG position. 
//               Our proprietary maturity model evaluates capabilities across five dimensions:
//             </p>
//           </div>

//           {/* Five Dimensions */}
//           <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
//             {dimensions.map((dimension, index) => (
//               <div 
//                 key={index} 
//                 className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl"
//               >
//                 <div className="mb-4 text-4xl">{dimension.icon}</div>
//                 <h4 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
//                   {dimension.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   {dimension.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Maturity Progression */}
//           <div className="p-8 bg-white border shadow-xl dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
//             <h4 className="mb-8 text-xl font-bold text-center font-heading text-brandDark dark:text-white">
//               ESG Maturity Progression
//             </h4>

//             {/* Desktop View - Horizontal */}
//             <div className="hidden md:block">
//               <div className="relative">
//                 {/* Progress Bar */}
//                 <div className="absolute left-0 right-0 h-2 rounded-full top-12 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"></div>

//                 <div className="flex justify-between">
//                   {maturityStages.map((stage, index) => (
//                     <div key={index} className="relative z-10 flex flex-col items-center" style={{ width: '20%' }}>
//                       {/* Icon & Stage Number */}
//                       <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getColorClasses(stage.color)} flex flex-col items-center justify-center shadow-lg mb-4`}>
//                         <span className="mb-1 text-3xl">{stage.icon}</span>
//                         <span className="text-sm font-bold text-white">{stage.stage}</span>
//                       </div>

//                       {/* Title */}
//                       <div className="px-4 py-2 mb-3 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
//                         <h5 className="text-sm font-bold text-center text-brandDark dark:text-white">
//                           {stage.title}
//                         </h5>
//                       </div>

//                       {/* Characteristics */}
//                       <p className="text-xs leading-relaxed text-center text-gray-600 dark:text-gray-400">
//                         {stage.characteristics}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile View - Vertical */}
//             <div className="space-y-4 md:hidden">
//               {maturityStages.map((stage, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(stage.color)} flex flex-col items-center justify-center shadow-lg`}>
//                     <span className="text-2xl">{stage.icon}</span>
//                     <span className="text-xs font-bold text-white">{stage.stage}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h5 className="mb-1 text-sm font-bold text-brandDark dark:text-white">
//                       {stage.title}
//                     </h5>
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       {stage.characteristics}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Phase 2: Roadmap Development */}
//           <div className="p-8 mt-16 text-white shadow-xl bg-gradient-to-br from-brandPrimary to-brandNavy rounded-2xl">
//             <h3 className="mb-4 text-2xl font-bold font-heading">
//               Phase 2: Customized ESG Roadmap Development
//             </h3>
//             <p className="mb-6 leading-relaxed">
//               Based on assessment findings, we develop a tailored ESG roadmap that balances ambition with practicality. 
//               This roadmap addresses priority initiatives, phased implementation timelines, resource requirements, and 
//               success metrics.
//             </p>
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Priority Initiatives</h5>
//                   <p className="text-sm opacity-90">Focus on high-impact, achievable quick wins</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Phased Timeline</h5>
//                   <p className="text-sm opacity-90">Clear milestones and implementation phases</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Resource Planning</h5>
//                   <p className="text-sm opacity-90">Budget, staffing, and technology requirements</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Success Metrics</h5>
//                   <p className="text-sm opacity-90">Quantifiable KPIs and performance tracking</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ESGMaturityModel;


// import React from 'react';

// const ESGMaturityModel = () => {
//   const maturityStages = [
//     {
//       stage: 1,
//       title: "INITIAL",
//       color: "red",
//       characteristics: "Ad hoc ESG activities; reactive compliance; minimal data",
//       icon: "🌱"
//     },
//     {
//       stage: 2,
//       title: "DEVELOPING",
//       color: "orange",
//       characteristics: "Formalized policies; basic metrics; initial engagement",
//       icon: "📋"
//     },
//     {
//       stage: 3,
//       title: "DEFINED",
//       color: "yellow",
//       characteristics: "Integrated into operations; standardized governance",
//       icon: "📊"
//     },
//     {
//       stage: 4,
//       title: "ADVANCED",
//       color: "blue",
//       characteristics: "Mature practices; proactive management; framework alignment",
//       icon: "🚀"
//     },
//     {
//       stage: 5,
//       title: "TRANSFORMATIVE",
//       color: "green",
//       characteristics: "Industry-leading; embedded in culture; driving innovation",
//       icon: "🏆"
//     }
//   ];

//   const dimensions = [
//     {
//       icon: "⚖️",
//       title: "Governance & Leadership",
//       description: "Board oversight, executive accountability, organizational structure, policy frameworks"
//     },
//     {
//       icon: "🎯",
//       title: "Strategy & Integration",
//       description: "Materiality analysis, target setting, business strategy alignment"
//     },
//     {
//       icon: "💾",
//       title: "Data & Technology",
//       description: "Data collection infrastructure, quality controls, systems integration"
//     },
//     {
//       icon: "📄",
//       title: "Reporting & Disclosure",
//       description: "Framework alignment, disclosure quality, assurance readiness"
//     },
//     {
//       icon: "👥",
//       title: "Culture & Capability",
//       description: "Organizational awareness, skill development, change management"
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       red: "from-red-400 to-red-600",
//       orange: "from-orange-400 to-orange-600",
//       yellow: "from-yellow-400 to-yellow-600",
//       blue: "from-blue-400 to-blue-600",
//       green: "from-green-400 to-green-600"
//     };
//     return colors[color];
//   };

//   return (
//     <section className="py-20 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-12 text-center">
//             <h3 className="mb-4 text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
//               Phase 1: ESG Maturity Assessment
//             </h3>
//             <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
//               Every engagement begins with a comprehensive assessment of your organization's current ESG position. 
//               Our proprietary maturity model evaluates capabilities across five dimensions:
//             </p>
//           </div>

//           {/* Five Dimensions */}
//           <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
//             {dimensions.map((dimension, index) => (
//               <div 
//                 key={index} 
//                 className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl"
//               >
//                 <div className="mb-4 text-4xl">{dimension.icon}</div>
//                 <h4 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
//                   {dimension.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   {dimension.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Maturity Progression */}
//           <div className="p-8 bg-white border shadow-xl dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
//             <h4 className="mb-8 text-xl font-bold text-center font-heading text-brandDark dark:text-white">
//               ESG Maturity Progression
//             </h4>

//             {/* Desktop View - Horizontal */}
//             <div className="hidden md:block">
//               <div className="relative">
//                 {/* Progress Bar */}
//                 <div className="absolute left-0 right-0 h-2 rounded-full top-12 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"></div>

//                 <div className="flex justify-between">
//                   {maturityStages.map((stage, index) => (
//                     <div key={index} className="relative z-10 flex flex-col items-center" style={{ width: '20%' }}>
//                       {/* Icon & Stage Number */}
//                       <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getColorClasses(stage.color)} flex flex-col items-center justify-center shadow-lg mb-4`}>
//                         <span className="mb-1 text-3xl">{stage.icon}</span>
//                         <span className="text-sm font-bold text-white">{stage.stage}</span>
//                       </div>

//                       {/* Title */}
//                       <div className="px-4 py-2 mb-3 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
//                         <h5 className="text-sm font-bold text-center text-brandDark dark:text-white">
//                           {stage.title}
//                         </h5>
//                       </div>

//                       {/* Characteristics */}
//                       <p className="text-xs leading-relaxed text-center text-gray-600 dark:text-gray-400">
//                         {stage.characteristics}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile View - Vertical */}
//             <div className="space-y-4 md:hidden">
//               {maturityStages.map((stage, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(stage.color)} flex flex-col items-center justify-center shadow-lg`}>
//                     <span className="text-2xl">{stage.icon}</span>
//                     <span className="text-xs font-bold text-white">{stage.stage}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h5 className="mb-1 text-sm font-bold text-brandDark dark:text-white">
//                       {stage.title}
//                     </h5>
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       {stage.characteristics}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Phase 2: Roadmap Development */}
//           <div className="p-8 mt-16 text-white shadow-xl bg-gradient-to-br from-brandPrimary to-brandNavy rounded-2xl">
//             <h3 className="mb-4 text-2xl font-bold font-heading">
//               Phase 2: Customized ESG Roadmap Development
//             </h3>
//             <p className="mb-6 leading-relaxed">
//               Based on assessment findings, we develop a tailored ESG roadmap that balances ambition with practicality. 
//               This roadmap addresses priority initiatives, phased implementation timelines, resource requirements, and 
//               success metrics.
//             </p>
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Priority Initiatives</h5>
//                   <p className="text-sm opacity-90">Focus on high-impact, achievable quick wins</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Phased Timeline</h5>
//                   <p className="text-sm opacity-90">Clear milestones and implementation phases</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Resource Planning</h5>
//                   <p className="text-sm opacity-90">Budget, staffing, and technology requirements</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">✓</span>
//                 <div>
//                   <h5 className="mb-1 font-semibold">Success Metrics</h5>
//                   <p className="text-sm opacity-90">Quantifiable KPIs and performance tracking</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default ESGMaturityModel



import React from "react";

const ESGMaturityModel = () => {
  const maturityStages = [
    {
      stage: 1,
      title: "INITIAL",
      color: "red",
      characteristics: "Ad hoc ESG activities; reactive compliance; minimal data",
      icon: "🌱",
    },
    {
      stage: 2,
      title: "DEVELOPING",
      color: "orange",
      characteristics: "Formalized policies; basic metrics; initial engagement",
      icon: "📋",
    },
    {
      stage: 3,
      title: "DEFINED",
      color: "yellow",
      characteristics: "Integrated into operations; standardized governance",
      icon: "📊",
    },
    {
      stage: 4,
      title: "ADVANCED",
      color: "blue",
      characteristics:
        "Mature practices; proactive management; framework alignment",
      icon: "🚀",
    },
    {
      stage: 5,
      title: "TRANSFORMATIVE",
      color: "green",
      characteristics:
        "Industry-leading; embedded in culture; driving innovation",
      icon: "🏆",
    },
  ];

  const dimensions = [
    {
      icon: "⚖️",
      title: "Governance & Leadership",
      description:
        "Board oversight, executive accountability, organizational structure, policy frameworks",
    },
    {
      icon: "🎯",
      title: "Strategy & Integration",
      description:
        "Materiality analysis, target setting, business strategy alignment",
    },
    {
      icon: "💾",
      title: "Data & Technology",
      description:
        "Data collection infrastructure, quality controls, systems integration",
    },
    {
      icon: "📄",
      title: "Reporting & Disclosure",
      description:
        "Framework alignment, disclosure quality, assurance readiness",
    },
    {
      icon: "👥",
      title: "Culture & Capability",
      description:
        "Organizational awareness, skill development, change management",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "from-red-500 to-red-700",
      orange: "from-orange-500 to-orange-700",
      yellow: "from-yellow-500 to-yellow-600",
      blue: "from-blue-500 to-blue-700",
      green: "from-green-500 to-green-700",
    };
    return colors[color];
  };

  return (
    <section className="relative py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* HEADER */}
          <div className="text-center">
            <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-white">
              Phase 1: ESG Maturity Assessment
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Every engagement begins with a comprehensive assessment of your
              organization's current ESG position. Our proprietary maturity
              model evaluates capabilities across five dimensions:
            </p>
          </div>

          {/* DIMENSIONS */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dimensions.map((dimension, index) => (
              <div
                key={index}
                className="relative p-8 transition-all duration-300 border shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="mb-4 text-4xl animate-float">
                  {dimension.icon}
                </div>
                <h4 className="mb-3 text-lg font-bold font-heading text-brandDark dark:text-white">
                  {dimension.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {dimension.description}
                </p>
              </div>
            ))}
          </div>

          {/* MATURITY MODEL */}
          <div className="p-10 border shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
            <h4 className="mb-12 text-xl font-bold text-center font-heading text-brandDark dark:text-white">
              ESG Maturity Progression
            </h4>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute left-0 right-0 h-1 rounded-full top-[4.75rem] bg-gradient-to-r from-red-500 via-brandAccent to-green-500 opacity-80" />

                <div className="flex justify-between">
                  {maturityStages.map((stage, index) => (
                    <div
                      key={index}
                      className="relative z-10 flex flex-col items-center w-1/5 text-center"
                    >
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${getColorClasses(
                          stage.color
                        )} flex flex-col items-center justify-center shadow-xl mb-5 animate-evaporate`}
                      >
                        <span className="mb-1 text-3xl">
                          {stage.icon}
                        </span>
                        <span className="text-xs font-bold text-white">
                          {stage.stage}
                        </span>
                      </div>

                      <div className="px-4 py-2 mb-3 bg-white rounded-lg shadow-md dark:bg-bgDark">
                        <h5 className="text-sm font-bold text-brandDark dark:text-white">
                          {stage.title}
                        </h5>
                      </div>

                      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                        {stage.characteristics}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="space-y-6 md:hidden">
              {maturityStages.map((stage, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border shadow bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark"
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(
                      stage.color
                    )} flex flex-col items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{stage.icon}</span>
                    <span className="text-xs font-bold text-white">
                      {stage.stage}
                    </span>
                  </div>

                  <div>
                    <h5 className="mb-1 text-sm font-bold text-brandDark dark:text-white">
                      {stage.title}
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {stage.characteristics}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHASE 2 */}
          <div className="p-12 text-white shadow-2xl rounded-3xl bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark">
            <h3 className="mb-4 text-2xl font-bold font-heading">
              Phase 2: Customized ESG Roadmap Development
            </h3>
            <p className="mb-8 leading-relaxed opacity-95">
              Based on assessment findings, we develop a tailored ESG roadmap
              that balances ambition with practicality. This roadmap addresses
              priority initiatives, phased implementation timelines, resource
              requirements, and success metrics.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["Priority Initiatives", "Focus on high-impact, achievable quick wins"],
                ["Phased Timeline", "Clear milestones and implementation phases"],
                ["Resource Planning", "Budget, staffing, and technology requirements"],
                ["Success Metrics", "Quantifiable KPIs and performance tracking"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl text-brandGold">✓</span>
                  <div>
                    <h5 className="mb-1 font-semibold">{title}</h5>
                    <p className="text-sm opacity-90">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGMaturityModel;
