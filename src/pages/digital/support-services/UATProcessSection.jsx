// import React from 'react';
// import { motion } from 'framer-motion';

// const steps = [
//   { number: "01", title: "UAT Planning", description: "Defines scope, objectives, roles, responsibilities, and identifies key business testers." },
//   { number: "02", title: "Environment Setup", description: "Ensures UAT environment readiness and prepares realistic test data covering core scenarios." },
//   { number: "03", title: "Test Case Design", description: "Creates detailed test cases aligned to BRD requirements and critical business processes." },
//   { number: "04", title: "Execution & Logging", description: "Guides business users to execute tests, record actual outcomes, and log defects with severity." },
//   { number: "05", title: "Defect Triage", description: "Collaborates with developers to resolve issues, prioritize fixes, and perform necessary regression tests." },
//   { number: "06", title: "Sign‑Off & Reporting", description: "Compiles UAT results, tracks closure of defects, and obtains formal go‑live approval." }
// ];

// export const UATProcessSection = () => {
//   return (
//     <section className="relative py-24 overflow-hidden bg-brandLight dark:bg-bgDark">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
//         <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brandPrimary via-transparent to-transparent" />
//       </div>

//       <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
//             UAT Approach
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
//             A structured validation process ensuring RiskMan meets business requirements and is ready for real‑world use.
//           </p>
//         </div>

//         {/* Desktop Horizontal Stepper */}
//         <div className="hidden grid-cols-6 gap-4 lg:grid">
//           {steps.map((step, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group"
//             >
//               {/* Connecting Line */}
//               {index < steps.length - 1 && (
//                 <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-700 -z-10">
//                   <div className="h-full transition-transform duration-500 origin-left scale-x-0 bg-brandPrimary group-hover:scale-x-100" />
//                 </div>
//               )}
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="flex items-center justify-center w-16 h-16 mb-6 text-xl font-bold transition-all duration-300 bg-white border-4 rounded-full shadow-lg dark:bg-surfaceDark border-brandLight dark:border-gray-700 text-brandPrimary dark:text-brandAccent group-hover:border-brandPrimary dark:group-hover:border-brandAccent group-hover:scale-110">
//                   {step.number}
//                 </div>
//                 <h3 className="px-2 mb-3 text-lg font-bold text-brandDark dark:text-white">{step.title}</h3>
//                 <p className="px-2 text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Vertical Stepper */}
//         <div className="pl-4 ml-4 space-y-8 border-l-2 border-gray-200 lg:hidden dark:border-gray-700">
//           {steps.map((step, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="relative pl-8"
//             >
//               <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white dark:bg-surfaceDark border-4 border-brandPrimary flex items-center justify-center text-sm font-bold text-brandPrimary dark:text-brandAccent shadow-md">
//                 {step.number}
//               </div>
//               <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">{step.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UATProcessSection




import React, { useState } from 'react';

const ApproachSection = () => {
  const [hoveredBrd, setHoveredBrd] = useState(null);
  const [hoveredMigration, setHoveredMigration] = useState(null);
  const [hoveredUat, setHoveredUat] = useState(null);

  const brdSteps = [
    { 
      title: "Objective", 
      desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits." 
    },
    { 
      title: "Scope Finalization", 
      desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity." 
    },
    { 
      title: "As‑Is and To‑Be Process Flow", 
      desc: "Documents current workflows and visualizes improved future‑state processes." 
    },
    { 
      title: "Functional / Non‑Functional Requirements", 
      desc: "Lists detailed system features and business rules, along with performance expectations." 
    },
    { 
      title: "Committee Discussion and Sign‑Off", 
      desc: "Facilitates review with governance bodies and captures formal approval." 
    }
  ];

  const migrationSteps = [
    { 
      title: "Data Profiling and Cleansing", 
      desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues." 
    },
    { 
      title: "Mapping Legacy Fields to New Structure", 
      desc: "Converts old data fields to the new model using robust transformation logic." 
    },
    { 
      title: "Master Data Approval and Sign‑Off", 
      desc: "Includes final validation by designated owners and formal approval of data readiness." 
    },
    { 
      title: "Data Upload to New System", 
      desc: "Shares the approved database with the technical team for secure upload." 
    },
    { 
      title: "Validation and Reconciliation", 
      desc: "Compares migrated data with source records to confirm completeness and accuracy." 
    },
    { 
      title: "Post‑Migration Support", 
      desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system." 
    }
  ];

  const uatSteps = [
    {
      title: "UAT Planning",
      topDesc: "Define scope, objectives, roles, responsibilities, and schedule; identify key business testers.",
      bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
      color: "red"
    },
    {
      title: "Environment and Data Set Up",
      topDesc: "",
      bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
      color: "black"
    },
    {
      title: "Test Case Design and Scenarios",
      topDesc: "Create detailed test cases and scenarios aligned to business requirements (BRD).",
      bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
      color: "red"
    },
    {
      title: "Execution and Defect Logging",
      topDesc: "",
      bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
      color: "black"
    },
    {
      title: "Defect Trigger and Re-Testing",
      topDesc: "Collaborate with Developers to resolve issues, re-test fixes, and perform necessary regression testing.",
      bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
      color: "red"
    },
    {
      title: "Sign off and Reporting",
      topDesc: "",
      bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
      color: "black"
    }
  ];

  return (
    <div className="bg-bgLight dark:bg-bgDark">
   
      {/* <section className="bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
        
            <div>
              <h3 className="inline-block pb-2 mb-6 text-2xl font-bold border-b-2 text-brandPrimary dark:text-brandAccent border-brandAccent">
                BRD Finalization Approach
              </h3>
              <p className="mb-8 text-brandNavy dark:text-white/70">
                We ensure every RiskMan implementation starts with a well‑defined and fully approved Business Requirements Document (BRD) that aligns all stakeholders.
              </p>
              
              <div className="relative pl-8 space-y-4 border-l-2 border-gray-200 dark:border-borderDark">
                {brdSteps.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredBrd(idx)}
                    onMouseLeave={() => setHoveredBrd(null)}
                  >
                    <div className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      hoveredBrd === idx 
                        ? 'bg-brandPrimary text-white scale-110' 
                        : 'bg-brandAccent text-brandDark'
                    }`}>
                      {idx + 1}
                    </div>
                    <h4 className={`text-lg font-bold transition-all duration-300 ${
                      hoveredBrd === idx 
                        ? 'text-brandAccent dark:text-brandAccent' 
                        : 'text-brandPrimary dark:text-white'
                    }`}>
                      {item.title}
                    </h4>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      hoveredBrd === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="pr-4 text-sm text-brandNavy dark:text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div>
              <h3 className="inline-block pb-2 mb-6 text-2xl font-bold border-b-2 text-brandPrimary dark:text-brandAccent border-brandAccent">
                Master Data Migration Approach
              </h3>
              <p className="mb-8 text-brandNavy dark:text-white/70">
                We follow a structured, governed methodology to migrate legacy data into RiskMan with accuracy, integrity, and traceability.
              </p>
              
              <div className="relative pl-8 space-y-4 border-l-2 border-gray-200 dark:border-borderDark">
                {migrationSteps.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredMigration(idx)}
                    onMouseLeave={() => setHoveredMigration(null)}
                  >
                    <div className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      hoveredMigration === idx 
                        ? 'bg-brandPrimary text-white scale-110' 
                        : 'bg-brandAccent text-brandDark'
                    }`}>
                      {idx + 1}
                    </div>
                    <h4 className={`text-lg font-bold transition-all duration-300 ${
                      hoveredMigration === idx 
                        ? 'text-brandAccent dark:text-brandAccent' 
                        : 'text-brandPrimary dark:text-white'
                    }`}>
                      {item.title}
                    </h4>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      hoveredMigration === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="pr-4 text-sm text-brandNavy dark:text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* UAT Approach Section */}
      <section className="bg-surfaceLight dark:bg-surfaceDark md:py-10">
        <div className="container">
          {/* Header */}
          <div className="flex items-center mb-12 md:mb-16">
            <div className="w-1.5 h-14 md:h-16 bg-brandPrimary dark:bg-brandAccent mr-4"></div>
            <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl text-brandPrimary dark:text-brandAccent">
              UAT APPROACH
            </h2>
          </div>

          {/* Flow Diagram - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Arrow Flow */}
              <div className="z-[100] pb-10 flex items-center">
                {uatSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative flex-1 cursor-pointer group" 
                    style={{ marginLeft: idx === 0 ? '0' : '-1.5rem' }}
                    onMouseEnter={() => setHoveredUat(idx)}
                    onMouseLeave={() => setHoveredUat(null)}
                  >
                    {/* Top Description - Shows on Hover */}
                    {step.topDesc && (
                      <div className={`absolute bottom-full left-0 right-0 mb-4 px-2 transition-all duration-300 ${
                        hoveredUat === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}>
                        <p className="p-3 mb-2 text-sm text-center bg-white border rounded-lg shadow-lg text-brandNavy dark:text-white/70 dark:bg-surfaceDark border-brandAccent">
                          {step.topDesc}
                        </p>
                        <div className="flex justify-center">
                          <svg width="2" height="20" className="text-brandAccent">
                            <line x1="1" y1="0" x2="1" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Arrow Box */}
                    <div 
                      className={`h-20 flex items-center justify-center text-white font-bold text-sm px-4 relative transition-all duration-300 ${
                        step.color === 'red' ? 'bg-[#8B0000]' : 'bg-brandDark'
                      } ${hoveredUat === idx ? 'shadow-xl scale-105 z-10' : ''}`}
                      style={{
                        clipPath: idx === 0 
                          ? 'polygon(0 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 0 100%)'
                          : idx === uatSteps.length - 1
                          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 1.5rem 50%)'
                          : 'polygon(0 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 0 100%, 1.5rem 50%)'
                      }}
                    >
                      <span className="leading-tight text-center">{step.title}</span>
                    </div>

                    {/* Bottom Description - Shows on Hover */}
                    {step.bottomDesc && (
                      <div className={`absolute top-full left-0 right-0 mt-4 px-2 transition-all duration-300 ${
                        hoveredUat === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}>
                        <div className="flex justify-center mb-2">
                          <svg width="2" height="20" className="text-[#8B0000]">
                            <line x1="1" y1="0" x2="1" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
                          </svg>
                        </div>
                        <p className="text-sm text-brandNavy dark:text-white/70 text-center bg-white dark:bg-surfaceDark p-3 rounded-lg shadow-lg border border-[#8B0000]">
                          {step.bottomDesc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Diagram - Mobile/Tablet */}
          <div className="space-y-6 lg:hidden">
            {uatSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredUat(idx)}
                onMouseLeave={() => setHoveredUat(null)}
                onClick={() => setHoveredUat(hoveredUat === idx ? null : idx)}
              >
                {/* Top Description - Shows on Hover/Tap */}
                {step.topDesc && (
                  <div className={`mb-4 transition-all duration-300 ${
                    hoveredUat === idx ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <p className="p-3 pl-4 text-sm bg-white border-l-2 rounded text-brandNavy dark:text-white/70 border-brandAccent dark:bg-bgDark">
                      {step.topDesc}
                    </p>
                  </div>
                )}

                {/* Step Box */}
                <div 
                  className={`${
                    step.color === 'red' ? 'bg-[#8B0000]' : 'bg-brandDark'
                  } text-white font-bold py-4 px-6 rounded-lg relative transition-all duration-300 ${
                    hoveredUat === idx ? 'shadow-xl scale-105' : ''
                  }`}
                >
                  <div className="absolute flex items-center justify-center w-6 h-6 text-xs -translate-y-1/2 rounded-full -left-3 top-1/2 bg-brandAccent text-brandDark">
                    {idx + 1}
                  </div>
                  <h4 className="text-center">{step.title}</h4>
                </div>

                {/* Bottom Description - Shows on Hover/Tap */}
                {step.bottomDesc && (
                  <div className={`mt-4 transition-all duration-300 ${
                    hoveredUat === idx ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <p className="text-sm text-brandNavy dark:text-white/70 pl-4 border-l-2 border-[#8B0000] bg-white dark:bg-bgDark p-3 rounded">
                      {step.bottomDesc}
                    </p>
                  </div>
                )}

                {/* Connector Arrow */}
                {idx < uatSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <svg width="2" height="24" className="text-brandAccent">
                      <line x1="1" y1="0" x2="1" y2="24" stroke="currentColor" strokeWidth="2"/>
                      <polygon points="1,24 5,18 -3,18" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachSection;

