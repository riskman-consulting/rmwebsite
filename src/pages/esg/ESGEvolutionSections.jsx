// // import React from 'react';

// // const ESGEvolutionTimeline = () => {
// //   const timelineData = [
// //     {
// //       period: "2000 - 2010",
// //       phase: "COMPLIANCE",
// //       icon: "📋",
// //       color: "from-red-500 to-red-600",
// //       bgColor: "bg-red-50 dark:bg-red-900/20",
// //       borderColor: "border-red-200 dark:border-red-800",
// //       features: [
// //         "Regulatory focus",
// //         "Risk mitigation",
// //         "Reporting burden"
// //       ]
// //     },
// //     {
// //       period: "2010 - 2020",
// //       phase: "STRATEGY",
// //       icon: "📈",
// //       color: "from-blue-500 to-blue-600",
// //       bgColor: "bg-blue-50 dark:bg-blue-900/20",
// //       borderColor: "border-blue-200 dark:border-blue-800",
// //       features: [
// //         "Business integration",
// //         "Stakeholder value",
// //         "Efficiency gains"
// //       ]
// //     },
// //     {
// //       period: "2020+",
// //       phase: "VALUE CREATION",
// //       icon: "🚀",
// //       color: "from-green-500 to-green-600",
// //       bgColor: "bg-green-50 dark:bg-green-900/20",
// //       borderColor: "border-green-200 dark:border-green-800",
// //       features: [
// //         "Competitive advantage",
// //         "Innovation driver",
// //         "Enterprise value"
// //       ]
// //     }
// //   ];

// //   return (
// //     <section className="py-20 bg-white dark:bg-surfaceDark">
// //       <div className="container">
// //         <div className="mb-12 text-center">
// //           <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-white">
// //             ESG Evolution Timeline
// //           </h3>
// //           <p className="text-gray-600 dark:text-gray-400">
// //             Three Phases of ESG Evolution from Compliance to Value Creation
// //           </p>
// //         </div>

// //         {/* Timeline Container */}
// //         <div className="mx-auto max-w-7xl">
// //           {/* Desktop Timeline */}
// //           <div className="relative hidden gap-8 md:grid md:grid-cols-3">
// //             {/* Connecting Line */}
// //             <div className="absolute left-0 right-0 z-0 h-1 top-24 bg-gradient-to-r from-red-500 via-blue-500 to-green-500"></div>

// //             {timelineData.map((item, index) => (
// //               <div key={index} className="relative z-10">
// //                 {/* Timeline Node */}
// //                 <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
// //                   <span className="text-3xl">{item.icon}</span>
// //                 </div>

// //                 {/* Card */}
// //                 <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
// //                   {/* Period */}
// //                   <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
// //                     {item.period}
// //                   </div>

// //                   {/* Phase */}
// //                   <h4 className="mb-6 text-2xl font-bold font-heading text-brandDark dark:text-white">
// //                     {item.phase}
// //                   </h4>

// //                   {/* Features */}
// //                   <ul className="space-y-3">
// //                     {item.features.map((feature, idx) => (
// //                       <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
// //                         <svg className="flex-shrink-0 w-5 h-5 text-brandPrimary" fill="currentColor" viewBox="0 0 20 20">
// //                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                         </svg>
// //                         <span>{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Mobile Timeline */}
// //           <div className="space-y-8 md:hidden">
// //             {timelineData.map((item, index) => (
// //               <div key={index} className="relative">
// //                 {/* Connecting Line */}
// //                 {index !== timelineData.length - 1 && (
// //                   <div className={`absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b ${item.color} z-0`}></div>
// //                 )}

// //                 <div className="relative z-10 flex gap-4">
// //                   {/* Timeline Node */}
// //                   <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
// //                     <span className="text-2xl">{item.icon}</span>
// //                   </div>

// //                   {/* Card */}
// //                   <div className={`flex-1 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-lg`}>
// //                     <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
// //                       {item.period}
// //                     </div>
// //                     <h4 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
// //                       {item.phase}
// //                     </h4>
// //                     <ul className="space-y-2">
// //                       {item.features.map((feature, idx) => (
// //                         <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
// //                           <svg className="flex-shrink-0 w-4 h-4 text-brandPrimary" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                           </svg>
// //                           <span>{feature}</span>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ESGEvolutionTimeline;


// import React from 'react';

// const ESGEvolutionTimeline = () => {
//   const timelineData = [
//     {
//       period: "2000 - 2010",
//       phase: "COMPLIANCE",
//       icon: "📋",
//       color: "from-brandNavy to-brandPrimary",
//       bgColor: "bg-surfaceLight dark:bg-surfaceDark",
//       borderColor: "border-borderLight dark:border-borderDark",
//       glowColor: "shadow-brandNavy/20",
//       features: [
//         "Regulatory focus",
//         "Risk mitigation",
//         "Reporting burden"
//       ]
//     },
//     {
//       period: "2010 - 2020",
//       phase: "STRATEGY",
//       icon: "📈",
//       color: "from-brandPrimary to-brandNavy",
//       bgColor: "bg-surfaceLight dark:bg-surfaceDark",
//       borderColor: "border-borderLight dark:border-borderDark",
//       glowColor: "shadow-brandPrimary/20",
//       features: [
//         "Business integration",
//         "Stakeholder value",
//         "Efficiency gains"
//       ]
//     },
//     {
//       period: "2020+",
//       phase: "VALUE CREATION",
//       icon: "🚀",
//       color: "from-brandAccent to-brandGold",
//       bgColor: "bg-surfaceLight dark:bg-surfaceDark",
//       borderColor: "border-borderLight dark:border-borderDark",
//       glowColor: "shadow-brandAccent/20",
//       features: [
//         "Competitive advantage",
//         "Innovation driver",
//         "Enterprise value"
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="mb-16 text-center">
//           <h3 className="mb-4 text-4xl font-bold font-heading text-brandDark dark:text-brandLight">
//             ESG Evolution Timeline
//           </h3>
//           <p className="max-w-2xl mx-auto text-lg text-brandDark/70 dark:text-brandLight/70">
//             Three Phases of ESG Evolution from Compliance to Value Creation
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="mx-auto max-w-7xl">
//           {/* Desktop Timeline */}
//           <div className="relative hidden gap-8 md:grid md:grid-cols-3">
//             {/* Connecting Line */}
//             <div className="absolute left-0 right-0 z-0 h-1 top-24 bg-gradient-to-r from-brandNavy via-brandPrimary to-brandAccent opacity-30 dark:opacity-50"></div>

//             {timelineData.map((item, index) => (
//               <div key={index} className="relative z-10">
//                 {/* Timeline Node */}
//                 <div className={`w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} transform hover:scale-110 transition-all duration-300 border-4 border-white dark:border-surfaceDark`}>
//                   <span className="text-4xl">{item.icon}</span>
//                 </div>

//                 {/* Card */}
//                 <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2`}>
//                   {/* Period */}
//                   <div className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">
//                     {item.period}
//                   </div>

//                   {/* Phase */}
//                   <h4 className="mb-8 text-2xl font-bold font-heading text-brandDark dark:text-brandLight">
//                     {item.phase}
//                   </h4>

//                   {/* Features */}
//                   <ul className="space-y-4">
//                     {item.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-brandDark/80 dark:text-brandLight/80">
//                         <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         <span className="leading-relaxed">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Timeline */}
//           <div className="space-y-12 md:hidden">
//             {timelineData.map((item, index) => (
//               <div key={index} className="relative">
//                 {/* Connecting Line */}
//                 {index !== timelineData.length - 1 && (
//                   <div className={`absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-30 dark:opacity-50 z-0`}></div>
//                 )}

//                 <div className="relative z-10 flex gap-6">
//                   {/* Timeline Node */}
//                   <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark`}>
//                     <span className="text-3xl">{item.icon}</span>
//                   </div>

//                   {/* Card */}
//                   <div className={`flex-1 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-lg`}>
//                     <div className="mb-2 text-xs font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">
//                       {item.period}
//                     </div>
//                     <h4 className="mb-6 text-xl font-bold font-heading text-brandDark dark:text-brandLight">
//                       {item.phase}
//                     </h4>
//                     <ul className="space-y-3">
//                       {item.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-brandDark/80 dark:text-brandLight/80">
//                           <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                           <span className="leading-relaxed">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ESGEvolutionTimeline;


import React from 'react';

const ESGEvolutionTimeline = () => {
  const timelineData = [
    {
      period: "2000 - 2010",
      phase: "COMPLIANCE",
      icon: "📋",
      color: "from-brandNavy to-brandPrimary",
      bgColor: "bg-surfaceLight dark:bg-surfaceDark",
      borderColor: "border-borderLight dark:border-borderDark",
      glowColor: "shadow-brandNavy/20",
      features: [
        "Regulatory focus",
        "Risk mitigation",
        "Reporting burden"
      ]
    },
    {
      period: "2010 - 2020",
      phase: "STRATEGY",
      icon: "📈",
      color: "from-brandPrimary to-brandNavy",
      bgColor: "bg-surfaceLight dark:bg-surfaceDark",
      borderColor: "border-borderLight dark:border-borderDark",
      glowColor: "shadow-brandPrimary/20",
      features: [
        "Business integration",
        "Stakeholder value",
        "Efficiency gains"
      ]
    },
    {
      period: "2020+",
      phase: "VALUE CREATION",
      icon: "🚀",
      color: "from-brandAccent to-brandGold",
      bgColor: "bg-surfaceLight dark:bg-surfaceDark",
      borderColor: "border-borderLight dark:border-borderDark",
      glowColor: "shadow-brandAccent/20",
      features: [
        "Competitive advantage",
        "Innovation driver",
        "Enterprise value"
      ]
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-4xl font-bold font-heading text-brandDark dark:text-brandLight">
            ESG Evolution Timeline
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-brandDark/70 dark:text-brandLight/70">
            Three Phases of ESG Evolution from Compliance to Value Creation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-7xl">
          {/* Desktop Timeline */}
          <div className="relative hidden gap-6 md:grid md:grid-cols-3">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2 relative overflow-hidden`}>
                  {/* Icon in top-right corner */}
                  <div className={`absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>

                  {/* Connecting Line to next card */}
                  {index < timelineData.length - 1 && (
                    <div className={`absolute top-8 -right-6 w-6 h-0.5 bg-gradient-to-r ${item.color} opacity-40 dark:opacity-60 hidden lg:block`}></div>
                  )}

                  {/* Period */}
                  <div className="mb-2 text-xs font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">
                    {item.period}
                  </div>

                  {/* Phase */}
                  <h4 className="pr-12 mb-4 text-xl font-bold font-heading text-brandDark dark:text-brandLight">
                    {item.phase}
                  </h4>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-brandDark/80 dark:text-brandLight/80">
                        <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="space-y-6 md:hidden">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-xl p-5 shadow-lg relative overflow-hidden`}>
                  {/* Icon in top-right corner */}
                  <div className={`absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  {/* Connecting Line to next card */}
                  {index < timelineData.length - 1 && (
                    <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b ${item.color} opacity-40 dark:opacity-60`}></div>
                  )}

                  {/* Period */}
                  <div className="mb-2 text-xs font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">
                    {item.period}
                  </div>

                  {/* Phase */}
                  <h4 className="pr-10 mb-4 text-lg font-bold font-heading text-brandDark dark:text-brandLight">
                    {item.phase}
                  </h4>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-brandDark/80 dark:text-brandLight/80">
                        <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGEvolutionTimeline;