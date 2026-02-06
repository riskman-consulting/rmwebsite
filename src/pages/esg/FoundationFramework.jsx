// import React from "react";

// const FoundationalFrameworks = () => {
//   const emissionsScopes = [
//     {
//       title: "Scope 1: Direct Emissions",
//       icon: "🏭",
//       color: "gold",
//       description: "Emissions from sources owned or controlled by the organization",
//       examples: [
//         "On-site fuel combustion (boilers, furnaces, vehicles)",
//         "Manufacturing and processing emissions",
//         "Fugitive emissions from refrigeration",
//         "Company-owned fleet operations",
//       ],
//       note: "Full operational control and maximum reduction potential",
//     },
//     {
//       title: "Scope 2: Indirect Energy Emissions",
//       icon: "⚡",
//       color: "accent",
//       description: "Emissions from purchased electricity, steam, heating, and cooling",
//       examples: [
//         "Grid electricity consumption across facilities",
//         "Purchased steam and district heating/cooling",
//         "Energy consumption in leased properties",
//         "Data center electricity usage",
//       ],
//       note: "Addressable through renewable energy procurement and efficiency",
//     },
//     {
//       title: "Scope 3: Value Chain Emissions",
//       icon: "🔗",
//       color: "primary",
//       description: "All other indirect emissions across the value chain",
//       examples: [
//         "Upstream: Purchased goods/services, transportation, capital goods",
//         "Downstream: Product use, end-of-life treatment, investments",
//         "Employee commuting and business travel",
//         "Franchises and leased assets",
//       ],
//       note: "Often 80%+ of total footprint; requires supply chain engagement",
//     },
//   ];

//   const ghgProtocol = [
//     {
//       title: "Corporate Standard",
//       icon: "📊",
//       description:
//         "Requirements for companies preparing GHG emissions inventories at the corporate level",
//     },
//     {
//       title: "Scope 3 Standard",
//       icon: "🔄",
//       description:
//         "Comprehensive guidance for measuring value chain emissions across 15 categories",
//     },
//     {
//       title: "Boundary Setting",
//       icon: "🎯",
//       description:
//         "Principles for establishing organizational and operational boundaries",
//     },
//     {
//       title: "Quality Principles",
//       icon: "✨",
//       description:
//         "Relevance, completeness, consistency, transparency, and accuracy",
//     },
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       gold: {
//         bg: "bg-brandGold/10 dark:bg-brandGold/10",
//         border: "border-brandGold/50",
//         text: "text-brandGold",
//         iconBg: "bg-brandGold",
//       },
//       accent: {
//         bg: "bg-brandAccent/10 dark:bg-brandAccent/10",
//         border: "border-brandAccent/50",
//         text: "text-brandAccent",
//         iconBg: "bg-brandAccent",
//       },
//       primary: {
//         bg: "bg-brandPrimary/10 dark:bg-brandPrimary/10",
//         border: "border-brandPrimary/50",
//         text: "text-brandPrimary",
//         iconBg: "bg-brandPrimary",
//       },
//     };
//     return colors[color] || colors.primary;
//   };

//   return (
//     <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
//       {/* Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-brandGold/10 blur-[90px]" />
//         <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brandAccent/10 blur-[90px]" />
//         <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_0)] [background-size:26px_26px] dark:opacity-[0.07]" />
//       </div>
//       <div className="container">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brandPrimary/70 dark:text-brandGold/80">
//             Foundational Frameworks
//           </p>
//           <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
//             Foundational ESG & Sustainability Frameworks
//           </h2>
//           <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
//             Effective ESG programs are built upon globally recognized frameworks that provide structure, 
//             comparability, and credibility. RiskMan's approach integrates these foundational standards 
//             to deliver comprehensive, internationally aligned sustainability solutions.
//           </p>
//         </div>

//         {/* UN SDGs Section */}
//         <div className="max-w-6xl mx-auto mb-20">
//           <div className="p-8 border shadow-xl bg-white/90 dark:bg-surfaceDark/90 rounded-2xl border-borderLight dark:border-borderDark">
//             <div className="flex items-start gap-6 mb-6">
//               <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-md bg-gradient-to-br from-brandAccent to-brandGold rounded-xl">
//                 <span className="text-3xl">🎯</span>
//               </div>
//               <div>
//                 <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                   United Nations Sustainable Development Goals (SDGs)
//                 </h3>
//                 <p className="leading-relaxed text-gray-700 dark:text-gray-300">
//                   The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity's 
//                   most pressing challenges—from poverty eradication and quality education to climate action and 
//                   responsible consumption.
//                 </p>
//               </div>
//             </div>

//             <h4 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
//               Enterprise SDG Alignment
//             </h4>
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="flex items-start gap-3">
//                 <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-brandAccent/15">
//                   <span className="text-lg text-brandAccent">✓</span>
//                 </div>
//                 <div>
//                   <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Materiality-Driven Prioritization</h5>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Identifying which SDGs are most relevant to your industry and value chain</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-brandGold/15">
//                   <span className="text-lg text-brandGold">✓</span>
//                 </div>
//                 <div>
//                   <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Value Chain Integration</h5>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Mapping SDG contributions across your entire value chain</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-brandPrimary/15">
//                   <span className="text-lg text-brandPrimary">✓</span>
//                 </div>
//                 <div>
//                   <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Impact Measurement</h5>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Establishing quantifiable metrics connecting business performance to SDG outcomes</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-brandAccent/15">
//                   <span className="text-lg text-brandAccent">✓</span>
//                 </div>
//                 <div>
//                   <h5 className="mb-1 font-semibold text-brandDark dark:text-white">Strategic Integration</h5>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Embedding SDG considerations into corporate strategy and capital allocation</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* GHG Accounting Section */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <h3 className="mb-8 text-2xl font-bold text-center md:text-3xl font-heading text-brandDark dark:text-white">
//             GHG Accounting & Climate Measurement
//           </h3>
//           <p className="max-w-3xl mx-auto mb-12 text-center text-gray-700 dark:text-gray-300">
//             Greenhouse gas emissions measurement is fundamental to climate action. Understanding your organization's 
//             carbon footprint is essential for setting meaningful targets, identifying reduction opportunities, and 
//             meeting disclosure requirements.
//           </p>

//           {/* Understanding Emissions Scopes */}
//           <h4 className="mb-6 text-xl font-bold font-heading text-brandDark dark:text-white">
//             Understanding Emissions Scopes
//           </h4>
//           <div className="space-y-6">
//             {emissionsScopes.map((scope, index) => {
//               const colorClasses = getColorClasses(scope.color);
//               return (
//                 <div key={index} className={`${colorClasses.bg} ${colorClasses.border} border-l-4 rounded-xl p-6 shadow-lg bg-white/90 dark:bg-surfaceDark/90`}>
//                   <div className="flex items-start gap-4">
//                     <div className={`flex-shrink-0 w-12 h-12 ${colorClasses.iconBg} rounded-lg flex items-center justify-center shadow-md`}>
//                       <span className="text-2xl">{scope.icon}</span>
//                     </div>
//                     <div className="flex-1">
//                       <h5 className={`text-xl font-heading font-bold mb-2 ${colorClasses.text}`}>
//                         {scope.title}
//                       </h5>
//                       <p className="mb-4 italic text-gray-700 dark:text-gray-300">
//                         {scope.description}
//                       </p>
//                       <ul className="mb-4 space-y-2">
//                         {scope.examples.map((example, idx) => (
//                           <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
//                             <span className="mt-1 text-brandPrimary">•</span>
//                             <span>{example}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="flex items-center gap-2 p-3 rounded-lg bg-white/60 dark:bg-white/5">
//                         <span className="text-xl">💡</span>
//                         <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{scope.note}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* GHG Protocol */}
//         <div className="max-w-6xl mx-auto">
//           <div className="p-8 border shadow-xl bg-white/90 dark:bg-surfaceDark/90 rounded-2xl border-borderLight dark:border-borderDark">
//             <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
//               The GHG Protocol
//             </h3>
//             <p className="mb-8 text-gray-700 dark:text-gray-300">
//               The GHG Protocol provides the globally accepted standard for measuring and managing greenhouse gas 
//               emissions. It serves as the foundation for nearly all corporate climate reporting frameworks and 
//               regulatory requirements worldwide.
//             </p>
//             <div className="grid gap-6 md:grid-cols-2">
//               {ghgProtocol.map((item, index) => (
//                 <div key={index} className="flex items-start gap-4 p-4 transition-shadow border bg-brandPrimary/5 dark:bg-white/5 rounded-xl hover:shadow-md border-borderLight/60 dark:border-borderDark/60">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-lg shadow-md bg-brandPrimary">
//                     <span className="text-2xl">{item.icon}</span>
//                   </div>
//                   <div>
//                     <h5 className="mb-2 font-semibold text-brandDark dark:text-white">{item.title}</h5>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoundationalFrameworks;


import React, { useState } from "react";

const FoundationalFrameworks = () => {
  const [activeScope, setActiveScope] = useState(null);

  const emissionsScopes = [
    {
      title: "Scope 1: Direct Emissions",
      icon: "🏭",
      description: "Emissions from sources owned or controlled by the organization",
      examples: [
        "On-site fuel combustion (boilers, furnaces, vehicles)",
        "Manufacturing and processing emissions",
        "Fugitive emissions from refrigeration",
        "Company-owned fleet operations",
      ],
      note: "Full operational control and maximum reduction potential",
      percentage: "15-25%",
    },
    {
      title: "Scope 2: Indirect Energy Emissions",
      icon: "⚡",
      description: "Emissions from purchased electricity, steam, heating, and cooling",
      examples: [
        "Grid electricity consumption across facilities",
        "Purchased steam and district heating/cooling",
        "Energy consumption in leased properties",
        "Data center electricity usage",
      ],
      note: "Addressable through renewable energy procurement and efficiency",
      percentage: "10-20%",
    },
    {
      title: "Scope 3: Value Chain Emissions",
      icon: "🔗",
      description: "All other indirect emissions across the value chain",
      examples: [
        "Upstream: Purchased goods/services, transportation, capital goods",
        "Downstream: Product use, end-of-life treatment, investments",
        "Employee commuting and business travel",
        "Franchises and leased assets",
      ],
      note: "Often 80%+ of total footprint; requires supply chain engagement",
      percentage: "60-80%",
    },
  ];

  const ghgProtocol = [
    {
      title: "Corporate Standard",
      icon: "📊",
      description: "Requirements for companies preparing GHG emissions inventories at the corporate level",
    },
    {
      title: "Scope 3 Standard",
      icon: "🔄",
      description: "Comprehensive guidance for measuring value chain emissions across 15 categories",
    },
    {
      title: "Boundary Setting",
      icon: "🎯",
      description: "Principles for establishing organizational and operational boundaries",
    },
    {
      title: "Quality Principles",
      icon: "✨",
      description: "Relevance, completeness, consistency, transparency, and accuracy",
    },
  ];

  const sdgBenefits = [
    {
      title: "Materiality-Driven Prioritization",
      description: "Identifying which SDGs are most relevant to your industry and value chain",
    },
    {
      title: "Value Chain Integration",
      description: "Mapping SDG contributions across your entire value chain",
    },
    {
      title: "Impact Measurement",
      description: "Establishing quantifiable metrics connecting business performance to SDG outcomes",
    },
    {
      title: "Strategic Integration",
      description: "Embedding SDG considerations into corporate strategy and capital allocation",
    },
  ];

  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandPrimary dark:text-brandGold">
            Foundational Frameworks
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Foundational ESG & Sustainability Frameworks
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
            Effective ESG programs are built upon globally recognized frameworks that provide structure, 
            comparability, and credibility. RiskMan's approach integrates these foundational standards 
            to deliver comprehensive, internationally aligned sustainability solutions.
          </p>
        </div>

        {/* UN SDGs Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            {/* Header */}
            <div className="p-8 bg-brandPrimary dark:bg-brandNavy">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl">
                  <span className="text-4xl">🎯</span>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white font-heading">
                    United Nations Sustainable Development Goals (SDGs)
                  </h3>
                  <p className="leading-relaxed text-white/90">
                    The 17 UN Sustainable Development Goals represent a universal framework for addressing humanity's 
                    most pressing challenges—from poverty eradication and quality education to climate action and 
                    responsible consumption.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h4 className="mb-6 text-xl font-bold font-heading text-brandDark dark:text-white">
                Enterprise SDG Alignment
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                {sdgBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 border bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-brandAccent/20 dark:bg-brandGold/20">
                      <span className="text-lg text-brandAccent dark:text-brandGold">✓</span>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-brandDark dark:text-white">{benefit.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GHG Accounting Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-3 text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
              GHG Accounting & Climate Measurement
            </h3>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              Greenhouse gas emissions measurement is fundamental to climate action. Understanding your organization's 
              carbon footprint is essential for setting meaningful targets, identifying reduction opportunities, and 
              meeting disclosure requirements.
            </p>
          </div>

          {/* Understanding Emissions Scopes */}
          <h4 className="mb-6 text-xl font-bold font-heading text-brandDark dark:text-white">
            Understanding Emissions Scopes
          </h4>
          
          <div className="space-y-4">
            {emissionsScopes.map((scope, index) => {
              const isActive = activeScope === index;
              
              return (
                <div 
                  key={index} 
                  className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark"
                >
                  {/* Header */}
                  <div 
                    className="p-6 transition-colors cursor-pointer hover:bg-bgLight dark:hover:bg-bgDark"
                    onClick={() => setActiveScope(isActive ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1 gap-4">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-brandPrimary/10 dark:bg-brandAccent/10">
                          <span className="text-2xl">{scope.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="mb-1 text-lg font-bold font-heading text-brandDark dark:text-white">
                            {scope.title}
                          </h5>
                          <p className="text-sm italic text-gray-600 dark:text-gray-400">
                            {scope.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-brandAccent/20 dark:bg-brandGold/20 text-brandDark dark:text-brandGold">
                          {scope.percentage}
                        </span>
                        <svg 
                          className={`w-5 h-5 transition-transform text-brandPrimary dark:text-brandGold ${isActive ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isActive && (
                    <div className="px-6 pb-6 border-t border-borderLight dark:border-borderDark">
                      <div className="pt-6">
                        <h6 className="mb-3 font-semibold text-brandDark dark:text-white">Examples & Activities</h6>
                        <ul className="mb-4 space-y-2">
                          {scope.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0"></span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-start gap-2 p-4 border rounded-lg bg-brandAccent/5 dark:bg-brandGold/5 border-brandAccent/20 dark:border-brandGold/20">
                          <span className="flex-shrink-0 text-lg">💡</span>
                          <div>
                            <h6 className="mb-1 text-sm font-semibold text-brandDark dark:text-white">Key Insight</h6>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{scope.note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* GHG Protocol */}
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            {/* Header */}
            <div className="p-8 bg-brandDark dark:bg-brandNavy">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl">
                  <span className="text-3xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    The GHG Protocol
                  </h3>
                  <p className="text-sm text-white/80">Global Standard for Climate Accounting</p>
                </div>
              </div>
              <p className="leading-relaxed text-white/90">
                The GHG Protocol provides the globally accepted standard for measuring and managing greenhouse gas 
                emissions. It serves as the foundation for nearly all corporate climate reporting frameworks and 
                regulatory requirements worldwide.
              </p>
            </div>

            {/* Protocol Cards */}
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {ghgProtocol.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 border bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-brandPrimary/10 dark:bg-brandAccent/10">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-brandDark dark:text-white">{item.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            {/* <div className="px-8 py-4 border-t bg-brandAccent/5 dark:bg-brandGold/5 border-borderLight dark:border-borderDark">
              <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                <span className="font-bold text-brandDark dark:text-brandGold">RiskMan Consulting LLP</span> helps organizations implement GHG Protocol standards with precision and confidence
              </p>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-12 text-xs text-center text-gray-500 dark:text-gray-400">
          RiskMan Consulting LLP | Sustainability & ESG Practice
        </div> */}
      </div>
    </section>
  );
};

export default FoundationalFrameworks;
