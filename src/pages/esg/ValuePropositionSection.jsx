// import React, { useState } from 'react';

// const ValuePropositionSection = () => {
//   const [hoveredQuadrant, setHoveredQuadrant] = useState(null);

//   const valueQuadrants = [
//     {
//       id: 'risk',
//       icon: '🛡️',
//       title: 'Risk Mitigation',
//       subtitle: 'Protect & Defend',
//       color: '#C62828',
//       bgGradient: 'from-red-50 to-red-100',
//       bgGradientDark: 'dark:from-red-950/20 dark:to-red-900/20',
//       description: 'Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.',
//       values: [
//         { icon: '📋', text: 'Regulatory Compliance Assurance' },
//         { icon: '🌡️', text: 'Climate Risk Assessment' },
//         { icon: '⚠️', text: 'Reputational Risk Management' },
//         { icon: '🔒', text: 'Supply Chain Resilience' }
//       ]
//     },
//     {
//       id: 'operational',
//       icon: '⚙️',
//       title: 'Operational Excellence',
//       subtitle: 'Optimize & Improve',
//       color: '#2E7D32',
//       bgGradient: 'from-green-50 to-green-100',
//       bgGradientDark: 'dark:from-green-950/20 dark:to-green-900/20',
//       description: 'Drive efficiency, reduce costs, and improve operational performance through sustainable practices.',
//       values: [
//         { icon: '⚡', text: 'Energy Efficiency & Cost Reduction' },
//         { icon: '♻️', text: 'Waste Reduction & Circularity' },
//         { icon: '💧', text: 'Resource Optimization' },
//         { icon: '📊', text: 'Process Automation & Data Quality' }
//       ]
//     },
//     {
//       id: 'stakeholder',
//       icon: '👥',
//       title: 'Stakeholder Value',
//       subtitle: 'Engage & Trust',
//       color: '#1565C0',
//       bgGradient: 'from-blue-50 to-blue-100',
//       bgGradientDark: 'dark:from-blue-950/20 dark:to-blue-900/20',
//       description: 'Build trust and strengthen relationships with investors, employees, customers, and communities.',
//       values: [
//         { icon: '💰', text: 'Investor Confidence & ESG Ratings' },
//         { icon: '🏆', text: 'Talent Attraction & Retention' },
//         { icon: '⭐', text: 'Customer Loyalty & Brand Trust' },
//         { icon: '🤝', text: 'Community Relations & License to Operate' }
//       ]
//     },
//     {
//       id: 'growth',
//       icon: '🚀',
//       title: 'Strategic Growth',
//       subtitle: 'Innovate & Expand',
//       color: '#E65100',
//       bgGradient: 'from-orange-50 to-orange-100',
//       bgGradientDark: 'dark:from-orange-950/20 dark:to-orange-900/20',
//       description: 'Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.',
//       values: [
//         { icon: '🌱', text: 'Sustainable Product Innovation' },
//         { icon: '🌍', text: 'New Market Access & Green Revenue' },
//         { icon: '💡', text: 'Business Model Transformation' },
//         { icon: '🏅', text: 'Competitive Differentiation' }
//       ]
//     }
//   ];

//   const kpiData = [
//     { label: 'Compliance Incidents', value: '↓40%', color: '#C62828' },
//     { label: 'Operating Costs', value: '↓25%', color: '#2E7D32' },
//     { label: 'ESG Rating Score', value: '↑35%', color: '#1565C0' },
//     { label: 'Green Revenue', value: '↑20%', color: '#E65100' }
//   ];

//   return (
//     <section className="py-20 bg-white lg:py-28 dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="mb-16 text-center lg:mb-20">
//           <div className="relative inline-block mb-5">
//             <span className="text-xs sm:text-sm font-bold text-brandPrimary dark:text-brandAccent tracking-[2px] uppercase">
//               Delivered Value
//             </span>
//             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
//           </div>
          
//           <h2 className="font-heading font-extrabold text-brandDark dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
//             The RiskMan Value Proposition
//           </h2>
          
//           <p className="max-w-4xl mx-auto font-serif text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
//             RiskMan delivers measurable, sustainable value to global organizations through our integrated ESG advisory, implementation, and capabilities.
//           </p>
//         </div>

//         {/* Value Creation Framework */}
//         <div className="relative p-8 mb-12 shadow-xl bg-bgLight dark:bg-surfaceDark rounded-3xl lg:p-12">
//           {/* Axis Labels */}
//           <div className="hidden lg:block">
//             <div className="absolute text-xs font-semibold tracking-wider uppercase -translate-x-1/2 top-4 left-1/2 text-brandPrimary dark:text-brandAccent">
//               Defensive ← → Offensive
//             </div>
//             <div className="absolute text-xs font-semibold tracking-wider uppercase -rotate-90 -translate-y-1/2 left-4 top-1/2 text-brandPrimary dark:text-brandAccent">
//               Internal Focus
//             </div>
//             <div className="absolute text-xs font-semibold tracking-wider uppercase rotate-90 -translate-y-1/2 right-4 top-1/2 text-brandPrimary dark:text-brandAccent">
//               External Focus
//             </div>
//           </div>

//           {/* Value Matrix Grid */}
//           <div className="relative z-10 grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:mt-0">
//             {valueQuadrants.map((quadrant) => (
//               <div
//                 key={quadrant.id}
//                 onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
//                 onMouseLeave={() => setHoveredQuadrant(null)}
//                 className={`bg-gradient-to-br ${quadrant.bgGradient} ${quadrant.bgGradientDark} rounded-2xl p-8 min-h-[320px] cursor-pointer transition-all duration-500 border-2 ${
//                   hoveredQuadrant === quadrant.id
//                     ? 'scale-105 shadow-2xl z-20'
//                     : 'hover:scale-102 border-transparent'
//                 }`}
//                 style={{
//                   borderColor: hoveredQuadrant === quadrant.id ? quadrant.color : 'transparent'
//                 }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div
//                     className="flex items-center justify-center text-3xl shadow-lg w-14 h-14 rounded-xl"
//                     style={{
//                       background: `linear-gradient(135deg, ${quadrant.color}, ${quadrant.color}dd)`
//                     }}
//                   >
//                     {quadrant.icon}
//                   </div>
//                   <div>
//                     <h3
//                       className="text-xl font-bold"
//                       style={{ color: quadrant.color }}
//                     >
//                       {quadrant.title}
//                     </h3>
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       {quadrant.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
//                   {quadrant.description}
//                 </p>

//                 <div className="space-y-2">
//                   {quadrant.values.map((value, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg bg-white/70 dark:bg-surfaceDark/70 hover:bg-white/95 dark:hover:bg-surfaceDark/95 hover:translate-x-1"
//                     >
//                       <span className="text-lg">{value.icon}</span>
//                       <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
//                         {value.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Center Hub */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-brandDark to-brandPrimary dark:from-brandNavy dark:to-brandPrimary rounded-full flex flex-col items-center justify-center z-30 border-4 border-white dark:border-surfaceDark shadow-2xl animate-[pulse_3s_ease-in-out_infinite] hidden md:flex">
//             <span className="text-xs font-semibold tracking-wide uppercase text-white/90">Sustainable</span>
//             <span className="text-lg font-bold text-white">Enterprise</span>
//             <span className="text-lg font-bold text-white">Value</span>
//             <span className="mt-1 text-xs text-white/80">ESG Integration</span>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="grid grid-cols-2 gap-4 mb-16 lg:grid-cols-4 lg:gap-6">
//           {kpiData.map((kpi, index) => (
//             <div
//               key={index}
//               className="p-6 text-center transition-all duration-300 bg-white border-t-4 shadow-lg dark:bg-surfaceDark rounded-xl hover:shadow-2xl hover:-translate-y-2"
//               style={{ borderTopColor: kpi.color }}
//             >
//               <div
//                 className="mb-2 text-3xl font-bold sm:text-4xl"
//                 style={{ color: kpi.color }}
//               >
//                 {kpi.value}
//               </div>
//               <div className="text-xs tracking-wide text-gray-600 uppercase dark:text-gray-400">
//                 {kpi.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Value Points */}
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {[
//             {
//               icon: '📋',
//               title: 'Regulatory & Disclosure Excellence',
//               points: [
//                 'Multi-framework compliance readiness across CSRD, BRSR, ISSB, GRI, and emerging regulations',
//                 'Assurance-ready data and processes that withstand external scrutiny',
//                 'Internal controls aligned with emerging sustainability assurance standards'
//               ]
//             },
//             {
//               icon: '🤝',
//               title: 'Enhanced Stakeholder Confidence',
//               points: [
//                 'Improved ESG ratings through systematic performance enhancement',
//                 'Enhanced investor confidence supporting access to capital',
//                 'Improved employer brand attracting and retaining top talent'
//               ]
//             },
//             {
//               icon: '🌡️',
//               title: 'Climate Risk Mitigation & Resilience',
//               points: [
//                 'Comprehensive climate risk assessment across physical and transition dimensions',
//                 'Scenario analysis informing strategic planning and capital allocation',
//                 'Decarbonization roadmaps with credible, science-aligned targets'
//               ]
//             }
//           ].map((section, index) => (
//             <div
//               key={index}
//               className="p-8 transition-all duration-300 shadow-lg bg-gradient-to-br from-white to-bgLight dark:from-surfaceDark dark:to-brandDark rounded-2xl hover:shadow-xl"
//             >
//               <span className="block mb-4 text-5xl">{section.icon}</span>
//               <h3 className="mb-6 text-xl font-bold text-brandDark dark:text-white">
//                 {section.title}
//               </h3>
//               <ul className="space-y-4">
//                 {section.points.map((point, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
//                   >
//                     <span className="mt-1 font-bold text-brandAccent shrink-0">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { box-shadow: 0 10px 40px rgba(13, 79, 107, 0.4); }
//           50% { box-shadow: 0 10px 60px rgba(13, 79, 107, 0.6); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ValuePropositionSection;


import React, { useState } from 'react';

const ValuePropositionSection = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);

  const valueQuadrants = [
    {
      id: 'risk',
      icon: '🛡️',
      title: 'Risk Mitigation',
      subtitle: 'Protect & Defend',
      color: '#C62828',
      bgGradient: 'from-red-50 to-red-100',
      bgGradientDark: 'dark:from-red-950/20 dark:to-red-900/20',
      description: 'Identify, assess, and mitigate ESG-related risks to protect enterprise value and ensure business continuity.',
      values: [
        { icon: '📋', text: 'Regulatory Compliance Assurance' },
        { icon: '🌡️', text: 'Climate Risk Assessment' },
        { icon: '⚠️', text: 'Reputational Risk Management' },
        { icon: '🔒', text: 'Supply Chain Resilience' }
      ]
    },
    {
      id: 'operational',
      icon: '⚙️',
      title: 'Operational Excellence',
      subtitle: 'Optimize & Improve',
      color: '#2E7D32',
      bgGradient: 'from-green-50 to-green-100',
      bgGradientDark: 'dark:from-green-950/20 dark:to-green-900/20',
      description: 'Drive efficiency, reduce costs, and improve operational performance through sustainable practices.',
      values: [
        { icon: '⚡', text: 'Energy Efficiency & Cost Reduction' },
        { icon: '♻️', text: 'Waste Reduction & Circularity' },
        { icon: '💧', text: 'Resource Optimization' },
        { icon: '📊', text: 'Process Automation & Data Quality' }
      ]
    },
    {
      id: 'stakeholder',
      icon: '👥',
      title: 'Stakeholder Value',
      subtitle: 'Engage & Trust',
      color: '#1565C0',
      bgGradient: 'from-blue-50 to-blue-100',
      bgGradientDark: 'dark:from-blue-950/20 dark:to-blue-900/20',
      description: 'Build trust and strengthen relationships with investors, employees, customers, and communities.',
      values: [
        { icon: '💰', text: 'Investor Confidence & ESG Ratings' },
        { icon: '🏆', text: 'Talent Attraction & Retention' },
        { icon: '⭐', text: 'Customer Loyalty & Brand Trust' },
        { icon: '🤝', text: 'Community Relations & License to Operate' }
      ]
    },
    {
      id: 'growth',
      icon: '🚀',
      title: 'Strategic Growth',
      subtitle: 'Innovate & Expand',
      color: '#E65100',
      bgGradient: 'from-orange-50 to-orange-100',
      bgGradientDark: 'dark:from-orange-950/20 dark:to-orange-900/20',
      description: 'Unlock new market opportunities, drive innovation, and create competitive advantage through sustainability.',
      values: [
        { icon: '🌱', text: 'Sustainable Product Innovation' },
        { icon: '🌍', text: 'New Market Access & Green Revenue' },
        { icon: '💡', text: 'Business Model Transformation' },
        { icon: '🏅', text: 'Competitive Differentiation' }
      ]
    }
  ];

  const kpiData = [
    { label: 'Compliance Incidents', value: '↓40%', color: '#C62828' },
    { label: 'Operating Costs', value: '↓25%', color: '#2E7D32' },
    { label: 'ESG Rating Score', value: '↑35%', color: '#1565C0' },
    { label: 'Green Revenue', value: '↑20%', color: '#E65100' }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-bgLight lg:py-32 dark:bg-bgDark">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandAccent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandPrimary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container relative z-10">
        {/* ===== SECTION 1: HEADER ===== */}
        <div className="max-w-5xl px-4 mx-auto mb-16 text-center lg:mb-24">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brandAccent to-transparent" />
            <span className="px-6 text-sm font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandAccent">
              Delivered Value
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brandAccent to-transparent" />
          </div>
          
          <h2 className="mb-8 font-heading font-black text-brandDark dark:text-surfaceLight text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] leading-[1.1] tracking-tight">
            The RiskMan Value<br className="hidden sm:block" /> Proposition
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl leading-relaxed sm:text-2xl text-brandDark/70 dark:text-surfaceLight/70">
            RiskMan delivers measurable, sustainable value to global organizations through our integrated ESG advisory, implementation, and capabilities.
          </p>
        </div>

        {/* ===== SECTION 2: VALUE MATRIX FRAMEWORK ===== */}
        <div className="mb-16 lg:mb-24">
          <div className="relative p-4 shadow-2xl bg-gradient-to-br from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-brandNavy/20 rounded-3xl lg:p-10">
            
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute left-0 right-0 h-px top-1/2 bg-brandPrimary dark:bg-brandAccent" />
              <div className="absolute top-0 bottom-0 w-px left-1/2 bg-brandPrimary dark:bg-brandAccent" />
            </div>

            {/* Axis Labels - Desktop Only */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold tracking-[3px] uppercase text-brandPrimary dark:text-brandAccent whitespace-nowrap">
                ← Defensive • Offensive →
              </div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 -rotate-90 text-xs font-bold tracking-[3px] uppercase text-brandPrimary dark:text-brandAccent whitespace-nowrap origin-center">
                Internal
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 rotate-90 text-xs font-bold tracking-[3px] uppercase text-brandPrimary dark:text-brandAccent whitespace-nowrap origin-center">
                External
              </div>
            </div>

            {/* Value Quadrants Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              {valueQuadrants.map((quadrant) => (
                <div
                  key={quadrant.id}
                  onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                  onMouseLeave={() => setHoveredQuadrant(null)}
                  className={`
                    relative overflow-hidden
                    bg-gradient-to-br ${quadrant.bgGradient} ${quadrant.bgGradientDark}
                    rounded-2xl p-6 lg:p-8
                    min-h-[360px]
                    cursor-pointer
                    transition-all duration-500 ease-out
                    border-2
                    ${hoveredQuadrant === quadrant.id 
                      ? 'scale-[1.03] shadow-2xl z-20 -translate-y-1' 
                      : 'hover:scale-[1.01] border-transparent shadow-md'
                    }
                  `}
                  style={{
                    borderColor: hoveredQuadrant === quadrant.id ? quadrant.color : 'transparent'
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div 
                    className={`
                      absolute inset-0 opacity-0 transition-opacity duration-500 blur-2xl
                      ${hoveredQuadrant === quadrant.id ? 'opacity-10' : ''}
                    `}
                    style={{ backgroundColor: quadrant.color }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 pb-5 mb-5 border-b-2 border-surfaceLight/40 dark:border-surfaceDark/40">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-4xl transition-all duration-500 shadow-lg rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${quadrant.color}ee, ${quadrant.color}cc)`,
                          transform: hoveredQuadrant === quadrant.id ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                        }}
                      >
                        {quadrant.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="mb-1 text-xl font-extrabold lg:text-2xl"
                          style={{ color: quadrant.color }}
                        >
                          {quadrant.title}
                        </h3>
                        <p className="text-sm font-semibold text-brandDark/60 dark:text-surfaceLight/60">
                          {quadrant.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed lg:text-base text-brandDark/75 dark:text-surfaceLight/75">
                      {quadrant.description}
                    </p>

                    {/* Value Items */}
                    <div className="space-y-3">
                      {quadrant.values.map((value, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 transition-all duration-300 bg-surfaceLight/70 dark:bg-brandDark/30 rounded-xl hover:bg-surfaceLight dark:hover:bg-brandDark/50 hover:translate-x-1 hover:shadow-md group"
                        >
                          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                            {value.icon}
                          </span>
                          <span className="text-sm font-semibold lg:text-base text-brandDark dark:text-surfaceLight">
                            {value.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Hub Badge */}
            <div className="absolute z-30 hidden -translate-x-1/2 -translate-y-1/2 md:flex top-1/2 left-1/2">
              <div className="relative">
                {/* Outer Ring with Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-brandAccent/20 animate-ping" />
                
                {/* Main Badge */}
                <div className="relative flex flex-col items-center justify-center w-40 h-40 border-4 rounded-full shadow-2xl bg-gradient-to-br from-brandDark via-brandPrimary to-brandNavy border-surfaceLight dark:border-brandAccent/30">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-surfaceLight/80">
                    Sustainable
                  </span>
                  <span className="text-xl font-black leading-tight text-surfaceLight">
                    Enterprise
                  </span>
                  <span className="text-xl font-black leading-tight text-surfaceLight">
                    Value
                  </span>
                  <div className="w-16 h-px my-2 bg-brandAccent/50" />
                  <span className="text-[10px] font-semibold text-brandAccent">
                    ESG Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION 3: KPI METRICS ===== */}
        <div className="mb-16 lg:mb-24">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {kpiData.map((kpi, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 group"
              >
                {/* Top Accent Bar */}
                <div 
                  className="h-2 transition-all duration-500 group-hover:h-3"
                  style={{ backgroundColor: kpi.color }}
                />
                
                {/* Content */}
                <div className="p-6 text-center lg:p-8">
                  <div
                    className="mb-3 text-4xl font-black transition-transform duration-500 lg:text-5xl group-hover:scale-110"
                    style={{ color: kpi.color }}
                  >
                    {kpi.value}
                  </div>
                  <div className="text-xs font-bold tracking-wider uppercase lg:text-sm text-brandDark/70 dark:text-surfaceLight/70">
                    {kpi.label}
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 transition-opacity duration-500 rounded-tl-full opacity-5 group-hover:opacity-10"
                  style={{ backgroundColor: kpi.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTION 4: ADDITIONAL VALUE POINTS ===== */}
        <div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                icon: '📋',
                title: 'Regulatory & Disclosure Excellence',
                points: [
                  'Multi-framework compliance readiness across CSRD, BRSR, ISSB, GRI, and emerging regulations',
                  'Assurance-ready data and processes that withstand external scrutiny',
                  'Internal controls aligned with emerging sustainability assurance standards'
                ]
              },
              {
                icon: '🤝',
                title: 'Enhanced Stakeholder Confidence',
                points: [
                  'Improved ESG ratings through systematic performance enhancement',
                  'Enhanced investor confidence supporting access to capital',
                  'Improved employer brand attracting and retaining top talent'
                ]
              },
              {
                icon: '🌡️',
                title: 'Climate Risk Mitigation & Resilience',
                points: [
                  'Comprehensive climate risk assessment across physical and transition dimensions',
                  'Scenario analysis informing strategic planning and capital allocation',
                  'Decarbonization roadmaps with credible, science-aligned targets'
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 shadow-xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl hover:shadow-2xl hover:-translate-y-1 group"
              >
                {/* Top Gradient Border */}
                <div className="h-1.5 bg-gradient-to-r from-brandPrimary via-brandAccent to-brandPrimary" />
                
                {/* Content */}
                <div className="p-8 lg:p-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-5xl transition-all duration-500 bg-gradient-to-br from-brandPrimary/10 to-brandAccent/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                    {section.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-8 text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight font-heading">
                    {section.title}
                  </h3>
                  
                  {/* Points List */}
                  <ul className="space-y-5">
                    {section.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-base leading-relaxed transition-all duration-300 text-brandDark/75 dark:text-surfaceLight/75 hover:translate-x-1"
                      >
                        <span 
                          className="flex items-center justify-center flex-shrink-0 w-7 h-7 mt-0.5 text-sm font-black text-surfaceLight rounded-full bg-gradient-to-br from-brandPrimary to-brandAccent shadow-md"
                        >
                          {idx + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                      backgroundSize: '24px 24px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;