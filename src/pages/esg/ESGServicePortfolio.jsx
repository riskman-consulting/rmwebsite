// import React, { useState } from 'react';

// const ESGServicePortfolio = () => {
//   const [activeService, setActiveService] = useState(null);

//   const services = {
//     strategy: {
//       number: 1,
//       title: "ESG Strategy & Materiality",
//       icon: "📊",
//       color: "#1565C0",
//       gradient: "from-blue-600 to-blue-700",
//       description: "Develop comprehensive ESG strategy through rigorous double materiality assessment, stakeholder engagement, and strategic target setting aligned with global frameworks.",
//       offerings: [
//         "Double Materiality",
//         "Stakeholder Mapping",
//         "Peer Benchmarking",
//         "SDG Alignment",
//         "Target Setting",
//         "Roadmap Development"
//       ]
//     },
//     climate: {
//       number: 2,
//       title: "Climate Risk & GHG Management",
//       icon: "🌡️",
//       color: "#2E7D32",
//       gradient: "from-green-600 to-green-700",
//       description: "Comprehensive climate risk assessment and GHG emissions management supporting your net-zero journey through science-based approaches.",
//       offerings: [
//         "Scope 1-2-3 Inventory",
//         "TCFD Implementation",
//         "SBTi Alignment",
//         "Net-Zero Roadmap",
//         "Climate Scenarios",
//         "Carbon Strategy"
//       ]
//     },
//     reporting: {
//       number: 3,
//       title: "ESG Reporting & Disclosure",
//       icon: "📋",
//       color: "#00838F",
//       gradient: "from-teal-600 to-teal-700",
//       description: "Navigate complex global disclosure requirements with expert guidance ensuring compliance and stakeholder confidence.",
//       offerings: [
//         "CSRD/ESRS",
//         "BRSR Reporting",
//         "GRI Standards",
//         "ISSB (IFRS S1/S2)",
//         "CDP Response",
//         "Integrated Reporting"
//       ]
//     },
//     governance: {
//       number: 4,
//       title: "ESG Governance & Operating Model",
//       icon: "⚖️",
//       color: "#37474F",
//       gradient: "from-gray-700 to-gray-800",
//       description: "Design and implement robust governance structures with clear accountability, decision-making frameworks, and performance management.",
//       offerings: [
//         "Board Oversight",
//         "Committee Design",
//         "Policy Frameworks",
//         "RACI Development",
//         "Performance Mgmt",
//         "Incentive Alignment"
//       ]
//     },
//     controls: {
//       number: 5,
//       title: "Internal Controls & Assurance",
//       icon: "🔒",
//       color: "#7B1FA2",
//       gradient: "from-purple-600 to-purple-700",
//       description: "Build assurance-ready ESG programs with robust COSO-aligned internal controls, data governance, and verification processes.",
//       offerings: [
//         "COSO Controls",
//         "Data Governance",
//         "Control Testing",
//         "Gap Remediation",
//         "Assurance Prep",
//         "SOC Readiness"
//       ]
//     },
//     capability: {
//       number: 6,
//       title: "ESG Capability Building",
//       icon: "🎓",
//       color: "#E65100",
//       gradient: "from-orange-600 to-orange-700",
//       description: "Build lasting internal capabilities through comprehensive training programs tailored to executives, practitioners, and operational teams.",
//       offerings: [
//         "Executive Immersion",
//         "Board Education",
//         "Practitioner Cert",
//         "Framework Training",
//         "Role-Based Programs",
//         "Train-the-Trainer"
//       ]
//     }
//   };

//   const capabilities = [
//     { icon: "🌍", text: "Global Delivery" },
//     { icon: "🏭", text: "Industry Expertise" },
//     { icon: "💻", text: "Technology Enabled" },
//     { icon: "🤝", text: "Partnership Approach" }
//   ];

//   const handleServiceClick = (serviceKey) => {
//     setActiveService((prev) => (prev === serviceKey ? null : serviceKey));
//   };

//   const handleClearService = () => {
//     setActiveService(null);
//   };

//   return (
//     <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">
//         <div className="mb-10 text-center">
//           <h2 className="mb-4 text-3xl font-bold text-brandDark dark:text-brandAccent md:text-4xl font-heading">
//             Sustainability & ESG Service Portfolio
//           </h2>
//           <p className="max-w-3xl mx-auto text-brandPrimary dark:text-white/70">
//             RiskMan offers a comprehensive, modular service portfolio that can be deployed individually or as 
//             integrated solutions. Our services are designed to be scalable and globally deployable.
//           </p>
//         </div>

//         <div className="mb-10 text-center">
//           <h3 className="mb-2 text-2xl font-bold text-brandDark dark:text-white font-heading">
//             ESG Service Portfolio Architecture
//           </h3>
//           <p className="text-brandNavy dark:text-white/70">
//             Integrated, modular solutions driving sustainable enterprise transformation
//           </p>
//         </div>

//         {/* Diagram + Info Panel - Side by Side on Desktop */}
//         <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
//           {/* Diagram - Left Side */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-[650px]">
//               <div className="relative h-[700px]">
//                 {/* Center Hub */}
//                 <div className="absolute z-20 flex flex-col items-center justify-center w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full shadow-2xl top-1/2 left-1/2 bg-gradient-to-br from-brandPrimary to-brandNavy">
//                   <span className="mb-2 text-3xl">🎯</span>
//                   <span className="text-xs font-semibold text-white">Integrated</span>
//                   <span className="text-sm font-bold text-white">ESG Excellence</span>
//                 </div>

//                 {/* Connection Lines (SVG) */}
//                 <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
//                   <defs>
//                     <filter id="glow">
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                       <feMerge>
//                         <feMergeNode in="coloredBlur"/>
//                         <feMergeNode in="SourceGraphic"/>
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   {/* Strategy - Top */}
//                   <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#1565C0" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'strategy' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                   {/* Climate - Top Right */}
//                   <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#2E7D32" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'climate' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                   {/* Reporting - Bottom Right */}
//                   <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#00838F" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'reporting' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                   {/* Governance - Bottom */}
//                   <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#37474F" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'governance' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                   {/* Controls - Bottom Left */}
//                   <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#7B1FA2" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'controls' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                   {/* Capability - Top Left */}
//                   <line x1="50%" y1="50%" x2="15%" y2="25%" stroke="#E65100" strokeWidth="2" strokeDasharray="8,4" 
//                     opacity={activeService && activeService !== 'capability' ? "0.2" : "0.5"} className="transition-opacity duration-300"/>
//                 </svg>

//                 {/* Service Cards - Positioned Around Center */}
//                 {/* Strategy - Top Center */}
//                 <div
//                   className={`absolute top-0 left-1/2 -translate-x-1/2 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'strategy' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('strategy')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.strategy.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.strategy.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.strategy.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white">
//                       {services.strategy.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Climate - Top Right */}
//                 <div
//                   className={`absolute top-[15%] right-0 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'climate' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('climate')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.climate.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.climate.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.climate.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white">
//                       {services.climate.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Reporting - Bottom Right */}
//                 <div
//                   className={`absolute bottom-[15%] right-0 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'reporting' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('reporting')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.reporting.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.reporting.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.reporting.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white">
//                       {services.reporting.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Governance - Bottom Center */}
//                 <div
//                   className={`absolute bottom-0 left-1/2 -translate-x-1/2 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'governance' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('governance')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.governance.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.governance.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.governance.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white">
//                       {services.governance.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Controls - Bottom Left */}
//                 <div
//                   className={`absolute bottom-[15%] left-0 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'controls' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('controls')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.controls.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.controls.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.controls.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white">
//                       {services.controls.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Capability - Top Left */}
//                 <div
//                   className={`absolute top-[15%] left-0 transform transition-all duration-300 cursor-pointer z-10 ${
//                     activeService === 'capability' ? 'scale-110 z-30' : ''
//                   }`}
//                   onClick={() => handleServiceClick('capability')}
//                 >
//                   <div className={`w-48 h-40 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br ${services.capability.gradient} relative`}>
//                     <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-2 right-2 bg-white/25">
//                       {services.capability.number}
//                     </div>
//                     <div className="flex items-center justify-center mb-2 text-3xl border w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border-white/30">
//                       {services.capability.icon}
//                     </div>
//                     <h4 className="text-sm font-bold leading-tight text-center text-white dark:text-white/70">
//                       {services.capability.title}
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Info Panel - Right Side */}
//           <div className="w-full">
//             <div className="p-6 shadow-2xl bg-surfaceLight dark:bg-surfaceDark rounded-2xl">
//               <div className="flex items-center justify-between mb-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandDark dark:text-brandAccent">
//                   Service Details
//                 </p>
//                 {activeService && (
//                   <button
//                     type="button"
//                     onClick={handleClearService}
//                     className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-brandDark/70 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
              
//               {activeService ? (
//                 <div>
//                   <div className="flex items-center gap-4 mb-4">
//                     <div
//                       className="flex items-center justify-center text-3xl shadow-lg w-14 h-14 rounded-xl"
//                       style={{ backgroundColor: services[activeService].color }}
//                     >
//                       {services[activeService].icon}
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold font-heading text-brandDark dark:text-white">
//                         {services[activeService].title}
//                       </h4>
//                       <p className="text-sm text-gray-600 dark:text-brandAccent">
//                         Service Module {services[activeService].number}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="mb-4 text-gray-700 dark:text-gray-300">
//                     {services[activeService].description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {services[activeService].offerings.map((offering, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-xs font-medium text-white rounded-full"
//                         style={{ backgroundColor: services[activeService].color }}
//                       >
//                         {offering}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center min-h-[300px]">
//                   <p className="text-center text-gray-400">
//                     Click on a service module to see details
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Capabilities - Below Info Panel */}
//             <div className="grid grid-cols-2 gap-6 p-6 mt-6 shadow-lg bg-white/90 dark:bg-gray-900/90 rounded-2xl">
//               {capabilities.map((cap, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-12 h-12 text-2xl shadow-md bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl">
//                     {cap.icon}
//                   </div>
//                   <span className="text-sm font-semibold text-brandDark dark:text-white">
//                     {cap.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Grid Layout */}
//         <div className="grid grid-cols-2 gap-4 mt-10 lg:hidden">
//           {Object.entries(services).map(([key, service]) => (
//             <div
//               key={key}
//               className={`rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-br ${service.gradient}`}
//               onClick={() => handleServiceClick(key)}
//             >
//               <div className="mb-2 text-2xl text-center">{service.icon}</div>
//               <h4 className="text-xs font-bold leading-tight text-center text-white">
//                 {service.title}
//               </h4>
//             </div>
//           ))}
//         </div>

//         {/* Mobile Info Panel */}
//         <div className="mt-6 lg:hidden">
//           <div className="p-6 shadow-2xl bg-white/95 dark:bg-surfaceDark rounded-2xl">
//             {activeService ? (
//               <div>
//                 <div className="flex items-center gap-4 mb-4">
//                   <div
//                     className="flex items-center justify-center text-3xl shadow-lg w-14 h-14 rounded-xl"
//                     style={{ backgroundColor: services[activeService].color }}
//                   >
//                     {services[activeService].icon}
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold font-heading text-brandDark dark:text-white">
//                       {services[activeService].title}
//                     </h4>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       Service Module {services[activeService].number}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="mb-4 text-gray-700 dark:text-gray-300">
//                   {services[activeService].description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {services[activeService].offerings.map((offering, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs font-medium text-white rounded-full"
//                       style={{ backgroundColor: services[activeService].color }}
//                     >
//                       {offering}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <p className="text-center text-gray-400">
//                 Tap a service module to see details
//               </p>
//             )}
//           </div>
//         </div>

//         {/* <div className="mt-6 text-xs text-center text-gray-300">
//           RiskMan Consulting LLP | Sustainability & ESG Practice
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ESGServicePortfolio;




import React, { useState } from 'react';

const ESGServicePortfolio = () => {
  const [activeService, setActiveService] = useState(null);

  const services = {
    strategy: {
      number: 1,
      title: "ESG Strategy & Materiality",
      icon: "📊",
      color: "#1565C0",
      gradient: "from-blue-600 to-blue-700",
      description: "Develop comprehensive ESG strategy through rigorous double materiality assessment, stakeholder engagement, and strategic target setting aligned with global frameworks.",
      offerings: [
        "Double Materiality",
        "Stakeholder Mapping",
        "Peer Benchmarking",
        "SDG Alignment",
        "Target Setting",
        "Roadmap Development"
      ]
    },
    climate: {
      number: 2,
      title: "Climate Risk & GHG Management",
      icon: "🌡️",
      color: "#2E7D32",
      gradient: "from-green-600 to-green-700",
      description: "Comprehensive climate risk assessment and GHG emissions management supporting your net-zero journey through science-based approaches.",
      offerings: [
        "Scope 1-2-3 Inventory",
        "TCFD Implementation",
        "SBTi Alignment",
        "Net-Zero Roadmap",
        "Climate Scenarios",
        "Carbon Strategy"
      ]
    },
    reporting: {
      number: 3,
      title: "ESG Reporting & Disclosure",
      icon: "📋",
      color: "#00838F",
      gradient: "from-teal-600 to-teal-700",
      description: "Navigate complex global disclosure requirements with expert guidance ensuring compliance and stakeholder confidence.",
      offerings: [
        "CSRD/ESRS",
        "BRSR Reporting",
        "GRI Standards",
        "ISSB (IFRS S1/S2)",
        "CDP Response",
        "Integrated Reporting"
      ]
    },
    governance: {
      number: 4,
      title: "ESG Governance & Operating Model",
      icon: "⚖️",
      color: "#37474F",
      gradient: "from-gray-700 to-gray-800",
      description: "Design and implement robust governance structures with clear accountability, decision-making frameworks, and performance management.",
      offerings: [
        "Board Oversight",
        "Committee Design",
        "Policy Frameworks",
        "RACI Development",
        "Performance Mgmt",
        "Incentive Alignment"
      ]
    },
    controls: {
      number: 5,
      title: "Internal Controls & Assurance",
      icon: "🔒",
      color: "#7B1FA2",
      gradient: "from-purple-600 to-purple-700",
      description: "Build assurance-ready ESG programs with robust COSO-aligned internal controls, data governance, and verification processes.",
      offerings: [
        "COSO Controls",
        "Data Governance",
        "Control Testing",
        "Gap Remediation",
        "Assurance Prep",
        "SOC Readiness"
      ]
    },
    capability: {
      number: 6,
      title: "ESG Capability Building",
      icon: "🎓",
      color: "#E65100",
      gradient: "from-orange-600 to-orange-700",
      description: "Build lasting internal capabilities through comprehensive training programs tailored to executives, practitioners, and operational teams.",
      offerings: [
        "Executive Immersion",
        "Board Education",
        "Practitioner Cert",
        "Framework Training",
        "Role-Based Programs",
        "Train-the-Trainer"
      ]
    }
  };

  const serviceKeys = Object.keys(services);

  const capabilities = [
    { icon: "🌍", text: "Global Delivery" },
    { icon: "🏭", text: "Industry Expertise" },
    { icon: "💻", text: "Technology Enabled" },
    { icon: "🤝", text: "Partnership Approach" }
  ];

  const handleServiceClick = (serviceKey) => {
    setActiveService((prev) => (prev === serviceKey ? null : serviceKey));
  };

  const handleClearService = () => {
    setActiveService(null);
  };

  /* ── Diagram card positions (percentage-based for responsiveness) ── */
  const cardPositions = {
    strategy:   { top: '0%',  left: '50%', translate: '-translate-x-1/2' },
    climate:    { top: '15%', right: '0%', translate: '' },
    reporting:  { bottom: '15%', right: '0%', translate: '' },
    governance: { bottom: '0%', left: '50%', translate: '-translate-x-1/2' },
    controls:   { bottom: '15%', left: '0%', translate: '' },
    capability: { top: '15%', left: '0%', translate: '' },
  };

  /* SVG line endpoints for each service (percentage-based) */
  const lineEndpoints = {
    strategy:   { x: '50%', y: '14%',  color: '#1565C0' },
    climate:    { x: '82%', y: '27%',  color: '#2E7D32' },
    reporting:  { x: '82%', y: '73%',  color: '#00838F' },
    governance: { x: '50%', y: '86%',  color: '#37474F' },
    controls:   { x: '18%', y: '73%',  color: '#7B1FA2' },
    capability: { x: '18%', y: '27%',  color: '#E65100' },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 lg:px-20">

        {/* ── Header ── */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl text-brandDark dark:text-brandAccent font-heading">
            Sustainability & ESG Service Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-brandPrimary dark:text-white/70">
            RiskMan offers a comprehensive, modular service portfolio that can be deployed individually or as
            integrated solutions. Our services are designed to be scalable and globally deployable.
          </p>
        </div>

        <div className="mb-8 text-center sm:mb-10">
          <h3 className="mb-2 text-xl font-bold sm:text-2xl text-brandDark dark:text-white font-heading">
            ESG Service Portfolio Architecture
          </h3>
          <p className="text-sm sm:text-base text-brandNavy dark:text-white/70">
            Integrated, modular solutions driving sustainable enterprise transformation
          </p>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP LAYOUT: Diagram + Info Panel
            Only visible on lg+ screens
        ══════════════════════════════════════════ */}
        <div className="hidden lg:grid items-start gap-8 xl:gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── Diagram (Left) ── */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[620px] aspect-square">

              {/* Center Hub */}
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square flex flex-col items-center justify-center border-4 border-white rounded-full shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy">
                <span className="mb-1 text-2xl xl:text-3xl">🎯</span>
                <span className="text-[9px] xl:text-[10px] font-semibold text-white">Integrated</span>
                <span className="text-[11px] xl:text-xs font-bold text-white">ESG Excellence</span>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {serviceKeys.map((key) => (
                  <line
                    key={key}
                    x1="50%" y1="50%"
                    x2={lineEndpoints[key].x}
                    y2={lineEndpoints[key].y}
                    stroke={lineEndpoints[key].color}
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    opacity={activeService && activeService !== key ? 0.15 : 0.5}
                    className="transition-opacity duration-300"
                  />
                ))}
              </svg>

              {/* Service Cards — positioned with percentage-based insets */}
              {serviceKeys.map((key) => {
                const service = services[key];
                const pos = cardPositions[key];
                const isActive = activeService === key;

                return (
                  <div
                    key={key}
                    className={`
                      absolute z-10 cursor-pointer
                      transition-all duration-300 ease-out
                      ${pos.translate}
                      ${isActive ? 'scale-110 z-30' : 'hover:scale-105'}
                    `}
                    style={{
                      top: pos.top,
                      bottom: pos.bottom,
                      left: pos.left,
                      right: pos.right,
                      width: '30%',
                    }}
                    onClick={() => handleServiceClick(key)}
                  >
                    <div className={`
                      w-full aspect-[1.2/1] rounded-2xl p-3 xl:p-4 shadow-xl
                      flex flex-col items-center justify-center
                      bg-gradient-to-br ${service.gradient}
                      relative
                      ${isActive ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' : ''}
                    `}>
                      <div className="absolute top-1.5 right-1.5 xl:top-2 xl:right-2 w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center text-[9px] xl:text-xs font-bold text-white rounded-full bg-white/25">
                        {service.number}
                      </div>
                      <div className="flex items-center justify-center mb-1.5 xl:mb-2 text-xl xl:text-3xl w-10 h-10 xl:w-14 xl:h-14 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                        {service.icon}
                      </div>
                      <h4 className="text-[10px] xl:text-sm font-bold leading-tight text-center text-white">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Info Panel (Right) ── */}
          <div className="w-full lg:sticky lg:top-24">
            <div className="p-5 border shadow-2xl xl:p-6 bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandDark dark:text-brandAccent">
                  Service Details
                </p>
                {activeService && (
                  <button
                    type="button"
                    onClick={handleClearService}
                    className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-brandDark/70 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              {activeService ? (
                <div>
                  <div className="flex items-center gap-3 mb-4 xl:gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl shadow-lg xl:text-3xl xl:w-14 xl:h-14 rounded-xl"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold xl:text-xl font-heading text-brandDark dark:text-white">
                        {services[activeService].title}
                      </h4>
                      <p className="text-xs text-gray-600 xl:text-sm dark:text-brandAccent">
                        Service Module {services[activeService].number}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-gray-700 xl:text-base dark:text-gray-300">
                    {services[activeService].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].offerings.map((offering, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-white rounded-full"
                        style={{ backgroundColor: services[activeService].color }}
                      >
                        {offering}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[250px] xl:min-h-[300px]">
                  <p className="text-center text-gray-400 dark:text-gray-500">
                    Click on a service module to see details
                  </p>
                </div>
              )}
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-4 p-5 mt-6 border shadow-lg xl:gap-6 xl:p-6 bg-white/90 dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex items-center gap-2.5 xl:gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-xl shadow-md xl:w-12 xl:h-12 xl:text-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl">
                    {cap.icon}
                  </div>
                  <span className="text-xs font-semibold xl:text-sm text-brandDark dark:text-white">
                    {cap.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE & TABLET LAYOUT
            Visible on screens < lg
        ══════════════════════════════════════════ */}
        <div className="lg:hidden">

          {/* Service Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {serviceKeys.map((key) => {
              const service = services[key];
              const isActive = activeService === key;

              return (
                <div
                  key={key}
                  className={`
                    rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg cursor-pointer
                    transition-all duration-300
                    bg-gradient-to-br ${service.gradient}
                    ${isActive ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-surfaceLight dark:ring-offset-surfaceDark scale-[1.03]' : ''}
                  `}
                  onClick={() => handleServiceClick(key)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-10 h-10 mb-2 text-xl border rounded-lg sm:text-2xl sm:w-12 sm:h-12 bg-white/20 sm:rounded-xl backdrop-blur-sm border-white/30">
                      {service.icon}
                    </div>
                    <h4 className="text-[11px] sm:text-xs font-bold leading-tight text-white">
                      {service.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Info Panel */}
          <div className="mt-5 sm:mt-6">
            <div className="p-5 border shadow-2xl sm:p-6 bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-brandDark dark:text-brandAccent">
                  Service Details
                </p>
                {activeService && (
                  <button
                    type="button"
                    onClick={handleClearService}
                    className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full border border-gray-300 dark:border-gray-700 text-brandDark/70 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              {activeService ? (
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 text-2xl shadow-lg w-11 h-11 sm:w-14 sm:h-14 rounded-xl"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold sm:text-xl font-heading text-brandDark dark:text-white">
                        {services[activeService].title}
                      </h4>
                      <p className="text-[11px] sm:text-sm text-gray-600 dark:text-brandAccent">
                        Service Module {services[activeService].number}
                      </p>
                    </div>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 dark:text-gray-300">
                    {services[activeService].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {services[activeService].offerings.map((offering, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white rounded-full"
                        style={{ backgroundColor: services[activeService].color }}
                      >
                        {offering}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-10 sm:py-14">
                  <p className="text-sm text-center text-gray-400 dark:text-gray-500">
                    Tap a service module to see details
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Capabilities */}
          <div className="grid grid-cols-2 gap-3 p-4 mt-5 border shadow-lg sm:gap-4 sm:p-5 sm:mt-6 bg-white/90 dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            {capabilities.map((cap, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center justify-center flex-shrink-0 text-lg rounded-lg shadow-md w-9 h-9 sm:w-11 sm:h-11 sm:text-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 sm:rounded-xl">
                  {cap.icon}
                </div>
                <span className="text-[11px] sm:text-sm font-semibold text-brandDark dark:text-white">
                  {cap.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGServicePortfolio;