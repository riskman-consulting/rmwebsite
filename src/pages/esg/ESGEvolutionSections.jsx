// import React from 'react';

// const ESGEvolutionTimeline = () => {
//   const timelineData = [
//     {
//       period: "2000 - 2010",
//       phase: "COMPLIANCE",
//       icon: "📋",
//       color: "from-brandNavy to-brandPrimary",
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
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h3 className="mb-4 text-4xl font-black font-heading text-brandDark dark:text-surfaceLight">
//             ESG Evolution Timeline
//           </h3>
//           <p className="max-w-2xl mx-auto font-sans text-lg text-brandDark/70 dark:text-surfaceLight/70">
//             The three distinct phases of ESG evolution, moving from a necessity of compliance to a powerful driver of enterprise value.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="mx-auto max-w-7xl">
//           {/* Desktop Timeline */}
//           <div className="relative hidden gap-6 md:grid md:grid-cols-3">
//             {timelineData.map((item, index) => (
//               <div key={index} className="relative group">
//                 {/* Connecting Line to next card */}
//                 {index < timelineData.length - 1 && (
//                   <div className={`absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r ${item.color} opacity-30 dark:opacity-50 hidden lg:block z-0`} />
//                 )}

//                 {/* Card Container */}
//                 <div className="relative z-10 h-full p-6 transition-all duration-500 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 group-hover:border-brandAccent/50">
                  
//                   {/* Icon Node */}
//                   <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
//                     <span className="text-3xl">{item.icon}</span>
//                   </div>

//                   {/* Period Label */}
//                   <div className="mb-2 text-xs font-bold tracking-[2px] uppercase text-brandPrimary dark:text-brandAccent">
//                     {item.period}
//                   </div>

//                   {/* Phase Title */}
//                   <h4 className="pr-12 mb-6 text-2xl font-black font-heading text-brandDark dark:text-surfaceLight">
//                     {item.phase}
//                   </h4>

//                   {/* Features List */}
//                   <ul className="space-y-3">
//                     {item.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-sm font-medium text-brandDark/80 dark:text-surfaceLight/80">
//                         <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
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
//           <div className="px-4 space-y-8 md:hidden">
//             {timelineData.map((item, index) => (
//               <div key={index} className="relative">
//                 {/* Vertical Connecting Line */}
//                 {index < timelineData.length - 1 && (
//                   <div className={`absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b ${item.color} opacity-40`} />
//                 )}

//                 <div className="relative p-6 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl">
//                   <div className={`absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-surfaceDark`}>
//                     <span className="text-2xl">{item.icon}</span>
//                   </div>

//                   <div className="mb-1 text-xs font-bold tracking-widest text-brandPrimary dark:text-brandAccent">
//                     {item.period}
//                   </div>
//                   <h4 className="mb-4 text-xl font-black uppercase font-heading text-brandDark dark:text-surfaceLight">
//                     {item.phase}
//                   </h4>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3 text-sm text-brandDark/70 dark:text-surfaceLight/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
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
      color: "bg-brandNavy",
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
      color: "bg-brandPrimary",
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
      color: "bg-yellow-500",
      features: [
        "Competitive advantage",
        "Innovation driver",
        "Enterprise value"
      ]
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-gray-50 dark:bg-bgDark">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h3 className="mb-4 text-4xl font-black font-heading text-brandDark dark:text-surfaceLight">
            ESG Evolution Timeline
          </h3>
          <p className="max-w-2xl mx-auto font-sans text-lg text-gray-600 dark:text-surfaceLight/70">
            The three distinct phases of ESG evolution, moving from a necessity of compliance to a powerful driver of enterprise value.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden pt-8 pb-16 lg:block">
          {/* Main Container */}
          <div className="relative" style={{ height: '550px', minHeight: '550px' }}>
            
            {/* Widening Road - SVG */}
            <svg 
              className="absolute left-0 w-full" 
              style={{ height: '200px', bottom: '0' }}
              viewBox="0 0 1400 200" 
              preserveAspectRatio="none"
            >
              {/* Gray Road that widens */}
              <path
                d="M 0,150 L 0,180 L 1400,80 L 1400,20 Z"
                fill="#a1a1aa"
                opacity="0.85"
                className="dark:opacity-70"
              />
              
              {/* White dashed center line */}
              <path
                d="M 0,165 L 1400,50"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="30,20"
                opacity="0.9"
              />
            </svg>

            {/* Content Boxes & Dots */}
            <div className="relative h-full">
              
              {/* First Item - Left */}
              <div className="absolute" style={{ left: '8%', bottom: '160px' }}>
                {/* Content Box */}
                <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="mb-2 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                        {timelineData[0].period}
                      </div>
                      <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
                        {timelineData[0].phase}
                      </h4>
                    </div>
                    <div className={`${timelineData[0].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {timelineData[0].icon}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {timelineData[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Arrow pointing down */}
                  <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
                </div>

                {/* Dot on Road */}
                <div className="relative flex flex-col items-center">
                  <div className={`${timelineData[0].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-gray-400">STEP 1</div>
                </div>
              </div>

              {/* Second Item - Middle */}
              <div className="absolute" style={{ left: '42%', bottom: '130px' }}>
                {/* Content Box */}
                <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="mb-2 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                        {timelineData[1].period}
                      </div>
                      <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
                        {timelineData[1].phase}
                      </h4>
                    </div>
                    <div className={`${timelineData[1].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {timelineData[1].icon}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {timelineData[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
                </div>

                {/* Dot on Road */}
                <div className="relative flex flex-col items-center">
                  <div className={`${timelineData[1].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-gray-400">STEP 2</div>
                </div>
              </div>

              {/* Third Item - Right */}
              <div className="absolute" style={{ left: '76%', bottom: '100px' }}>
                {/* Content Box */}
                <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="mb-2 text-xs font-bold tracking-widest text-yellow-600 dark:text-yellow-500">
                        {timelineData[2].period}
                      </div>
                      <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
                        {timelineData[2].phase}
                      </h4>
                    </div>
                    <div className={`${timelineData[2].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {timelineData[2].icon}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {timelineData[2].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
                </div>

                {/* Dot on Road */}
                <div className="relative flex flex-col items-center">
                  <div className={`${timelineData[2].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-gray-400">STEP 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Timeline (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="relative" style={{ height: '600px' }}>
            {/* Road */}
            <svg 
              className="absolute bottom-0 left-0 w-full" 
              style={{ height: '180px' }}
              viewBox="0 0 1000 180" 
              preserveAspectRatio="none"
            >
              <path d="M 0,130 L 0,160 L 1000,70 L 1000,20 Z" fill="#9ca3af" opacity="0.8" />
              <path d="M 0,145 L 1000,45" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20,15" opacity="0.9" />
            </svg>

            <div className="relative h-full">
              {[0, 1, 2].map((index) => (
                <div 
                  key={index}
                  className="absolute" 
                  style={{ 
                    left: index === 0 ? '10%' : index === 1 ? '42%' : '74%',
                    bottom: index === 0 ? '140px' : index === 1 ? '120px' : '100px'
                  }}
                >
                  <div className="w-64 p-5 mb-5 bg-white shadow-xl dark:bg-surfaceDark rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="mb-1 text-xs font-bold tracking-wider text-brandPrimary dark:text-brandAccent">
                          {timelineData[index].period}
                        </div>
                        <h4 className="text-xl font-black text-brandDark dark:text-surfaceLight">
                          {timelineData[index].phase}
                        </h4>
                      </div>
                      <div className={`${timelineData[index].color} w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg`}>
                        {timelineData[index].icon}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {timelineData[index].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-surfaceLight/80">
                          <div className="flex-shrink-0 w-1 h-1 bg-yellow-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-200 -bottom-2 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`${timelineData[index].color} w-14 h-14 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg`}>
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-1 text-xs font-bold text-gray-400">STEP {index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative px-4 md:hidden">
          <div className="relative max-w-sm mx-auto">
            {/* Vertical Road */}
            <div className="absolute w-20 h-full transform -translate-x-1/2 bg-gray-400 opacity-50 left-1/2 dark:bg-gray-700"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-white"></div>

            {/* Timeline Items */}
            <div className="relative pt-8 pb-8 space-y-20">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                    <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-surfaceDark`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                  </div>

                  <div className="pt-10">
                    <div className="relative p-5 bg-white border border-gray-200 shadow-lg dark:bg-surfaceDark dark:border-borderDark rounded-xl">
                      <div className="mb-2 text-xs font-bold tracking-wider text-brandPrimary dark:text-brandAccent">
                        {item.period}
                      </div>
                      <h4 className="mb-3 text-lg font-black font-heading text-brandDark dark:text-surfaceLight">
                        {item.phase}
                      </h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-surfaceLight/70">
                            <div className="w-1 h-1 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute mt-2 text-xs font-bold text-gray-400 transform -translate-x-1/2 left-1/2">
                    STEP {index + 1}
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

export default ESGEvolutionTimeline;