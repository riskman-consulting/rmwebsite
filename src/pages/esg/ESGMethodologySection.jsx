import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ESGStakeholderEcosystem = () => {
  const [activeStakeholder, setActiveStakeholder] = useState(null);

  const stakeholders = {
    investors: {
      title: "INVESTORS",
      icon: "🏦",
      color: "#004080",
      position: { cx: 300, cy: 80 },
      subtitle: "Capital Access",
      description: "ESG performance directly influences investment decisions and access to capital.",
    },
    regulators: {
      title: "REGULATORS",
      icon: "📜",
      color: "#FFC000",
      position: { cx: 95, cy: 145 },
      subtitle: "Compliance",
      description: "Mandatory disclosures through CSRD and BRSR carry financial consequences.",
    },
    customers: {
      title: "CUSTOMERS",
      icon: "🛒",
      color: "#003366",
      position: { cx: 505, cy: 145 },
      subtitle: "Procurement",
      description: "B2B customers prioritize sustainable suppliers within their ecosystems.",
    },
    employees: {
      title: "EMPLOYEES",
      icon: "👥",
      color: "#001F3F",
      position: { cx: 120, cy: 470 },
      subtitle: "Talent & Culture",
      description: "Strong ESG profiles enhance talent engagement and long-term productivity.",
    },
    society: {
      title: "SOCIETY",
      icon: "🌍",
      color: "#FFB800",
      position: { cx: 480, cy: 470 },
      subtitle: "License to Operate",
      description: "ESG performance impacts reputation and foundational stakeholder trust.",
    }
  };

  const getConnectionPath = (pos) => {
    const center = { x: 300, y: 290 };
    return `M${center.x},${center.y} Q${(center.x + pos.cx) / 2},${(center.y + pos.cy) / 2 - 20} ${pos.cx},${pos.cy}`;
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F5] dark:bg-[#001F3F] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h3 className="mb-6 text-4xl lg:text-5xl  font-black text-[#001F3F] dark:text-white uppercase tracking-tight">
            Stakeholder Ecosystem
          </h3>
          <div className="h-1.5 w-24 bg-[#FFB800] mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative p-4 lg:p-12 shadow-2xl bg-white dark:bg-[#003366] rounded-[40px] border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 600 560" className="w-full h-auto overflow-visible relative z-10">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Bidirectional Flow Paths */}
            {Object.keys(stakeholders).map(key => (
              <g key={`path-${key}`}>
                <path
                  d={getConnectionPath(stakeholders[key].position)}
                  fill="none"
                  stroke={stakeholders[key].color}
                  strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                  strokeDasharray="10, 15"
                  className="transition-all duration-500 animate-flow-out"
                  style={{ opacity: activeStakeholder === key ? 0.8 : 0.1 }}
                />
                <path
                  d={getConnectionPath(stakeholders[key].position)}
                  fill="none"
                  stroke={stakeholders[key].color}
                  strokeWidth={activeStakeholder === key ? "3" : "1.5"}
                  strokeDasharray="4, 12"
                  className="transition-all duration-500 animate-flow-in"
                  style={{ opacity: activeStakeholder === key ? 0.8 : 0.1 }}
                />
              </g>
            ))}

            {/* Anchored Organization Hub */}
            <g className="pointer-events-none">
              <circle cx="300" cy="290" r="75" fill="#001F3F" className="shadow-2xl" />
              <text x="300" y="278" textAnchor="middle" dominantBaseline="middle" className="fill-[#FFB800] text-[10px] font-bold tracking-widest uppercase">RISKMAN</text>
              <text x="300" y="302" textAnchor="middle" dominantBaseline="middle" className="fill-white text-sm font-black uppercase tracking-tight">ORGANIZATION</text>
              <text x="300" y="320" textAnchor="middle" dominantBaseline="middle" className="fill-white/30 text-[7px] font-bold tracking-[3px]">ESG INTEGRATION</text>
            </g>

            {/* Stakeholder Nodes */}
            {Object.entries(stakeholders).map(([key, data]) => (
              <g 
                key={key}
                onMouseEnter={() => setActiveStakeholder(key)}
                onMouseLeave={() => setActiveStakeholder(null)}
                className="cursor-pointer group"
              >
                <motion.circle 
                  cx={data.position.cx} 
                  cy={data.position.cy} 
                  r="48" 
                  fill={data.color}
                  animate={{ scale: activeStakeholder === key ? 1.12 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ filter: activeStakeholder === key ? 'url(#glow)' : 'none' }}
                />
                <text x={data.position.cx} y={data.position.cy - 12} textAnchor="middle" dominantBaseline="middle" className="text-3xl pointer-events-none select-none">{data.icon}</text>
                <text x={data.position.cx} y={data.position.cy + 15} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[9px] font-black uppercase tracking-tighter pointer-events-none select-none">{data.title}</text>
              </g>
            ))}
          </svg>

          {/* Fixed Floating Badge */}
          <AnimatePresence>
            {activeStakeholder && (
              <motion.div
                key="badge"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute z-50 pointer-events-none"
                style={{
                  left: `${(stakeholders[activeStakeholder].position.cx / 600) * 100}%`,
                  top: `${(stakeholders[activeStakeholder].position.cy / 560) * 100}%`,
                  transform: 'translate(-50%, -155%)'
                }}
              >
                <div className="bg-white dark:bg-[#001F3F] border-2 rounded-2xl p-4 w-56 shadow-2xl text-center" style={{ borderColor: stakeholders[activeStakeholder].color }}>
                  <div className="text-[10px] font-black text-[#004080] dark:text-[#FFB800] uppercase mb-1 tracking-widest">{stakeholders[activeStakeholder].subtitle}</div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium leading-snug">{stakeholders[activeStakeholder].description}</p>
                  
                  {/* Badge Pointer */}
                  <div 
                    className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px]" 
                    style={{ borderTopColor: stakeholders[activeStakeholder].color }} 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowOut { from { stroke-dashoffset: 50; } to { stroke-dashoffset: 0; } }
        @keyframes flowIn { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 50; } }
        .animate-flow-out { animation: flowOut 3s linear infinite; }
        .animate-flow-in { animation: flowIn 5s linear infinite; }
      `}</style>
    </section>
  );
};

export default ESGStakeholderEcosystem;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ESGCommandCenter = () => {
//   const [activeID, setActiveID] = useState('investors');

//   const stakeholders = {
//     investors: {
//       title: "Investors",
//       icon: "🏦",
//       color: "#004080",
//       accent: "#60A5FA",
//       summary: "Capital Access & Valuation",
//       details: "ESG performance is no longer a 'nice-to-have'—it's a fundamental metric for risk assessment. Institutional investors utilize ESG scores to determine cost of capital and portfolio inclusion.",
//       offerings: ["TCFD Alignment", "Portfolio Carbon Footprinting", "Investor Grade Reporting"]
//     },
//     regulators: {
//       title: "Regulators",
//       icon: "📜",
//       color: "#FFC000",
//       accent: "#B45309",
//       summary: "Compliance & Disclosure",
//       details: "The regulatory landscape is shifting from voluntary to mandatory. Frameworks like CSRD and BRSR require rigorous, auditable data trails.",
//       offerings: ["BRSR Core Compliance", "CSRD Gap Analysis", "Regulatory Roadmap"]
//     },
//     customers: {
//       title: "Customers",
//       icon: "🛒",
//       color: "#003366",
//       accent: "#38BDF8",
//       summary: "Procurement & B2B Trust",
//       details: "Supply chain decarbonization is a top priority for global B2B buyers. Suppliers must demonstrate net-zero pathways to remain in the ecosystem.",
//       offerings: ["Scope 3 Analysis", "Supplier Sustainability Audits", "Green Branding"]
//     },
//     employees: {
//       title: "Employees",
//       icon: "👥",
//       color: "#0b2e4f",
//       accent: "#94A3B8",
//       summary: "Talent & Culture",
//       details: "Modern talent prioritizes purpose-driven organizations. ESG integration is a primary driver for retention and long-term workforce productivity.",
//       offerings: ["DE&I Frameworks", "ESG Training & Upskilling", "Internal KPIs"]
//     },
//     society: {
//       title: "Society",
//       icon: "🌍",
//       color: "#FFB800",
//       accent: "#D97706",
//       summary: "License to Operate",
//       details: "A company's social license depends on its perceived contribution to the global commons. Reputation is tied directly to environmental stewardship.",
//       offerings: ["Community Impact Assessment", "SROI Modeling", "Impact Reporting"]
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#F8FAFC] dark:bg-[#001F3F] p-4 lg:p-12 flex items-center justify-center font-sans">
//       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
//         {/* LEFT COLUMN: THE VISUAL HUB (Fixed-ish) */}
//         <div className="lg:col-span-7 bg-white dark:bg-[#002B55] rounded-[2rem] p-8 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
//           <div className="mb-8">
//             <h2 className="text-3xl font-black text-[#001F3F] dark:text-white uppercase tracking-tighter">
//               Stakeholder <span className="text-[#FFB800]">Ecosystem</span>
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-2 uppercase tracking-widest">Select a node to explore impact</p>
//           </div>

//           <div className="relative">
//             <svg viewBox="0 0 600 500" className="w-full h-auto overflow-visible">
//               {/* Central Hub */}
//               <circle cx="300" cy="250" r="60" className="fill-[#001F3F] dark:fill-white/10" />
//               <text x="300" y="255" textAnchor="middle" className="fill-[#FFB800] text-[12px] font-black uppercase tracking-widest">RISKMAN</text>
              
//               {/* Connections & Nodes */}
//               {Object.entries(stakeholders).map(([id, data], index) => {
//                 const angle = (index * (360 / 5) - 90) * (Math.PI / 180);
//                 const x = 300 + 180 * Math.cos(angle);
//                 const y = 250 + 180 * Math.sin(angle);
//                 const isActive = activeID === id;

//                 return (
//                   <g key={id} onClick={() => setActiveID(id)} className="cursor-pointer">
//                     {/* Path */}
//                     <motion.line 
//                       x1="300" y1="250" x2={x} y2={y} 
//                       stroke={isActive ? data.color : "#CBD5E1"} 
//                       strokeWidth={isActive ? "3" : "1"} 
//                       strokeDasharray={isActive ? "none" : "4 4"}
//                       initial={false}
//                       animate={{ opacity: isActive ? 1 : 0.3 }}
//                     />
//                     {/* Node */}
//                     <motion.circle 
//                       cx={x} cy={y} r="45" 
//                       fill={isActive ? data.color : "white"}
//                       stroke={data.color}
//                       strokeWidth="2"
//                       animate={{ scale: isActive ? 1.1 : 1 }}
//                       className="shadow-lg"
//                     />
//                     <text x={x} y={y - 8} textAnchor="middle" className="text-2xl">{data.icon}</text>
//                     <text x={x} y={y + 18} textAnchor="middle" className={`text-[9px] font-bold uppercase tracking-tight ${isActive ? 'fill-white' : 'fill-slate-600'}`}>
//                       {data.title}
//                     </text>
//                   </g>
//                 );
//               })}
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: THE DETAIL PANEL */}
//         <div className="lg:col-span-5 flex flex-col">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeID}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white dark:bg-[#003366] h-full rounded-[2rem] p-10 shadow-2xl border-t-4"
//               style={{ borderTopColor: stakeholders[activeID].color }}
//             >
//               <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-black tracking-[0.2em] text-[#001F3F] dark:text-[#FFB800] uppercase mb-6">
//                 Module: {stakeholders[activeID].title}
//               </div>
              
//               <h3 className="text-4xl font-black text-[#001F3F] dark:text-white mb-4 leading-none uppercase">
//                 {stakeholders[activeID].summary}
//               </h3>
              
//               <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
//                 {stakeholders[activeID].details}
//               </p>

//               <div className="space-y-4">
//                 <h4 className="text-sm font-bold text-[#001F3F] dark:text-white uppercase tracking-widest border-b border-slate-100 dark:border-white/10 pb-2">
//                   Key Deliverables
//                 </h4>
//                 {stakeholders[activeID].offerings.map((item, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
//                     <span className="text-slate-700 dark:text-slate-200 font-bold text-sm tracking-tight capitalize">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-12">
//                 <button className="w-full py-4 bg-[#001F3F] dark:bg-white text-white dark:text-[#001F3F] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#FFB800] hover:text-[#001F3F] transition-all duration-300">
//                   Request Module Framework
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ESGCommandCenter;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const StrategicTimeline = () => {
//   const [expandedStage, setExpandedStage] = useState(0);

//   const stages = [
//     {
//       title: "Foundational Compliance",
//       period: "Stage 01",
//       description: "Establishing the baseline. Focus on regulatory adherence and risk mitigation.",
//       details: "Mapping CSRD/BRSR requirements, establishing data governance, and conducting initial double-materiality assessments.",
//       impact: "Regulatory Safety & License to Operate"
//     },
//     {
//       title: "Strategic Integration",
//       period: "Stage 02",
//       description: "Moving beyond reporting to embedding ESG into core business operations.",
//       details: "Operationalizing decarbonization pathways, supply chain engagement, and aligning executive incentives with ESG KPIs.",
//       impact: "Operational Efficiency & Cost Reduction"
//     },
//     {
//       title: "Sustainable Value Creation",
//       period: "Stage 03",
//       description: "ESG as a competitive moat and driver of long-term financial performance.",
//       details: "Green product innovation, access to sustainable finance (ESG Bonds), and premium brand positioning in B2B markets.",
//       impact: "Market Leadership & Capital Premium"
//     }
//   ];

//   return (
//     <section className="py-24 bg-white dark:bg-[#001F3F]">
//       <div className="container px-4 mx-auto">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-black text-[#001F3F] dark:text-white uppercase tracking-tighter">Strategic Imperative</h2>
//           <p className="text-slate-500 mt-4 uppercase tracking-[0.3em] text-xs font-bold">The Evolution of Corporate Resilience</p>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Connecting Gradient Line */}
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-white/10 -translate-y-1/2 hidden lg:block" />
//           <motion.div 
//             className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#004080] to-[#FFB800] -translate-y-1/2 hidden lg:block"
//             initial={{ width: "0%" }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
//             {stages.map((stage, idx) => (
//               <div key={idx} className="relative group">
//                 {/* Node */}
//                 <motion.div 
//                   onClick={() => setExpandedStage(idx)}
//                   className={`w-16 h-16 rounded-full mx-auto mb-8 flex items-center justify-center cursor-pointer transition-all duration-500 border-4 ${
//                     expandedStage === idx 
//                     ? 'bg-[#004080] border-[#FFB800] shadow-[0_0_25px_rgba(255,184,0,0.4)]' 
//                     : 'bg-white dark:bg-[#002B55] border-slate-200 dark:border-slate-700'
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <span className={`font-black text-sm ${expandedStage === idx ? 'text-white' : 'text-slate-400'}`}>
//                     0{idx + 1}
//                   </span>
//                 </motion.div>

//                 {/* Preview Content */}
//                 <div className="text-center px-4">
//                   <h4 className="font-black text-[#001F3F] dark:text-white uppercase tracking-tight mb-2">
//                     {stage.title}
//                   </h4>
//                   <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">
//                     {stage.description}
//                   </p>
//                 </div>

//                 {/* Deep Dive Card */}
//                 <AnimatePresence>
//                   {expandedStage === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       className="mt-8 p-6 bg-[#F8FAFC] dark:bg-[#003366] rounded-2xl border border-[#004080]/20 shadow-xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-80 z-20"
//                     >
//                       <div className="text-[10px] font-black text-[#FFB800] uppercase mb-2">Focus Area</div>
//                       <p className="text-slate-700 dark:text-slate-200 text-sm mb-4 leading-relaxed italic">"{stage.details}"</p>
//                       <div className="pt-4 border-t border-slate-200 dark:border-white/10">
//                         <span className="text-[10px] font-bold text-[#004080] dark:text-blue-400 uppercase tracking-widest block mb-1 text-center">Outcome</span>
//                         <div className="text-xs font-black text-[#001F3F] dark:text-white text-center uppercase leading-tight">
//                           {stage.impact}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default StrategicTimeline