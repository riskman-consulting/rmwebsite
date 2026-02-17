// import React, { useState } from 'react';

// const ApproachSection = () => {
//   const [hoveredBrd, setHoveredBrd] = useState(null);
//   const [hoveredMigration, setHoveredMigration] = useState(null);
//   const [hoveredUat, setHoveredUat] = useState(null);

//   const brdSteps = [
//     { 
//       title: "Objective", 
//       desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits." 
//     },
//     { 
//       title: "Scope Finalization", 
//       desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity." 
//     },
//     { 
//       title: "As‑Is and To‑Be Process Flow", 
//       desc: "Documents current workflows and visualizes improved future‑state processes." 
//     },
//     { 
//       title: "Functional / Non‑Functional Requirements", 
//       desc: "Lists detailed system features and business rules, along with performance expectations." 
//     },
//     { 
//       title: "Committee Discussion and Sign‑Off", 
//       desc: "Facilitates review with governance bodies and captures formal approval." 
//     }
//   ];

//   const migrationSteps = [
//     { 
//       title: "Data Profiling and Cleansing", 
//       desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues." 
//     },
//     { 
//       title: "Mapping Legacy Fields to New Structure", 
//       desc: "Converts old data fields to the new model using robust transformation logic." 
//     },
//     { 
//       title: "Master Data Approval and Sign‑Off", 
//       desc: "Includes final validation by designated owners and formal approval of data readiness." 
//     },
//     { 
//       title: "Data Upload to New System", 
//       desc: "Shares the approved database with the technical team for secure upload." 
//     },
//     { 
//       title: "Validation and Reconciliation", 
//       desc: "Compares migrated data with source records to confirm completeness and accuracy." 
//     },
//     { 
//       title: "Post‑Migration Support", 
//       desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system." 
//     }
//   ];

//   const uatSteps = [
//     {
//       title: "UAT Planning",
//       topDesc: "Define scope, objectives, roles, responsibilities, and schedule; identify key business testers.",
//       bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
//       color: "red"
//     },
//     {
//       title: "Environment and Data Set Up",
//       topDesc: "",
//       bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
//       color: "black"
//     },
//     {
//       title: "Test Case Design and Scenarios",
//       topDesc: "Create detailed test cases and scenarios aligned to business requirements (BRD).",
//       bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
//       color: "red"
//     },
//     {
//       title: "Execution and Defect Logging",
//       topDesc: "",
//       bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
//       color: "black"
//     },
//     {
//       title: "Defect Trigger and Re-Testing",
//       topDesc: "Collaborate with Developers to resolve issues, re-test fixes, and perform necessary regression testing.",
//       bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
//       color: "red"
//     },
//     {
//       title: "Sign off and Reporting",
//       topDesc: "",
//       bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
//       color: "black"
//     }
//   ];

//   return (
//     <div className="bg-bgLight dark:bg-bgDark">
   
      
//       {/* UAT Approach Section */}
//       <section className="bg-surfaceLight dark:bg-surfaceDark md:py-10">
//         <div className="container px-6 lg:px-20">
//           {/* Header */}
//           <div className="flex items-center mb-12 md:mb-16">
//             <div className="w-1.5 h-14 md:h-16 bg-brandPrimary dark:bg-brandAccent mr-4"></div>
//             <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl text-brandPrimary dark:text-brandAccent">
//               UAT APPROACH
//             </h2>
//           </div>

//           {/* Flow Diagram - Desktop */}
//           <div className="hidden lg:block">
//             <div className="relative">
//               {/* Arrow Flow */}
//               <div className="z-[100] pb-10 flex items-center">
//                 {uatSteps.map((step, idx) => (
//                   <div 
//                     key={idx} 
//                     className="relative flex-1 cursor-pointer group" 
//                     style={{ marginLeft: idx === 0 ? '0' : '-1.5rem' }}
//                     onMouseEnter={() => setHoveredUat(idx)}
//                     onMouseLeave={() => setHoveredUat(null)}
//                   >
//                     {/* Top Description - Shows on Hover */}
//                     {step.topDesc && (
//                       <div className={`absolute bottom-full left-0 right-0 mb-4 px-2 transition-all duration-300 ${
//                         hoveredUat === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
//                       }`}>
//                         <p className="p-3 mb-2 text-sm text-center bg-white border rounded-lg shadow-lg text-brandNavy dark:text-white/70 dark:bg-surfaceDark border-brandAccent">
//                           {step.topDesc}
//                         </p>
//                         <div className="flex justify-center">
//                           <svg width="2" height="20" className="text-brandAccent">
//                             <line x1="1" y1="0" x2="1" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
//                           </svg>
//                         </div>
//                       </div>
//                     )}

//                     {/* Arrow Box */}
//                     <div 
//                       className={`h-20 flex items-center justify-center text-white font-bold text-sm px-4 relative transition-all duration-300 ${
//                         step.color === 'red' ? 'bg-[#8B0000]' : 'bg-brandDark'
//                       } ${hoveredUat === idx ? 'shadow-xl scale-105 z-10' : ''}`}
//                       style={{
//                         clipPath: idx === 0 
//                           ? 'polygon(0 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 0 100%)'
//                           : idx === uatSteps.length - 1
//                           ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 1.5rem 50%)'
//                           : 'polygon(0 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 0 100%, 1.5rem 50%)'
//                       }}
//                     >
//                       <span className="leading-tight text-center">{step.title}</span>
//                     </div>

//                     {/* Bottom Description - Shows on Hover */}
//                     {step.bottomDesc && (
//                       <div className={`absolute top-full left-0 right-0 mt-4 px-2 transition-all duration-300 ${
//                         hoveredUat === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
//                       }`}>
//                         <div className="flex justify-center mb-2">
//                           <svg width="2" height="20" className="text-[#8B0000]">
//                             <line x1="1" y1="0" x2="1" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
//                           </svg>
//                         </div>
//                         <p className="text-sm text-brandNavy dark:text-white/70 text-center bg-white dark:bg-surfaceDark p-3 rounded-lg shadow-lg border border-[#8B0000]">
//                           {step.bottomDesc}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Flow Diagram - Mobile/Tablet */}
//           <div className="space-y-6 lg:hidden">
//             {uatSteps.map((step, idx) => (
//               <div 
//                 key={idx} 
//                 className="relative cursor-pointer"
//                 onMouseEnter={() => setHoveredUat(idx)}
//                 onMouseLeave={() => setHoveredUat(null)}
//                 onClick={() => setHoveredUat(hoveredUat === idx ? null : idx)}
//               >
//                 {/* Top Description - Shows on Hover/Tap */}
//                 {step.topDesc && (
//                   <div className={`mb-4 transition-all duration-300 ${
//                     hoveredUat === idx ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
//                   }`}>
//                     <p className="p-3 pl-4 text-sm bg-white border-l-2 rounded text-brandNavy dark:text-white/70 border-brandAccent dark:bg-bgDark">
//                       {step.topDesc}
//                     </p>
//                   </div>
//                 )}

//                 {/* Step Box */}
//                 <div 
//                   className={`${
//                     step.color === 'red' ? 'bg-[#8B0000]' : 'bg-brandDark'
//                   } text-white font-bold py-4 px-6 rounded-lg relative transition-all duration-300 ${
//                     hoveredUat === idx ? 'shadow-xl scale-105' : ''
//                   }`}
//                 >
//                   <div className="absolute flex items-center justify-center w-6 h-6 text-xs -translate-y-1/2 rounded-full -left-3 top-1/2 bg-brandAccent text-brandDark">
//                     {idx + 1}
//                   </div>
//                   <h4 className="text-center">{step.title}</h4>
//                 </div>

//                 {/* Bottom Description - Shows on Hover/Tap */}
//                 {step.bottomDesc && (
//                   <div className={`mt-4 transition-all duration-300 ${
//                     hoveredUat === idx ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
//                   }`}>
//                     <p className="text-sm text-brandNavy dark:text-white/70 pl-4 border-l-2 border-[#8B0000] bg-white dark:bg-bgDark p-3 rounded">
//                       {step.bottomDesc}
//                     </p>
//                   </div>
//                 )}

//                 {/* Connector Arrow */}
//                 {idx < uatSteps.length - 1 && (
//                   <div className="flex justify-center my-4">
//                     <svg width="2" height="24" className="text-brandAccent">
//                       <line x1="1" y1="0" x2="1" y2="24" stroke="currentColor" strokeWidth="2"/>
//                       <polygon points="1,24 5,18 -3,18" fill="currentColor"/>
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ApproachSection;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  Database,
  FileText,
  Bug,
  CheckCircle2,
  GitCommit,
  Flag
} from 'lucide-react';

// --- Data ---
const uatSteps = [
  {
    id: 1,
    title: "UAT Planning",
    topDesc: "Define scope, objectives, roles, responsibilities, and schedule; identify key business testers.",
    bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
    icon: ClipboardList
  },
  {
    id: 2,
    title: "Environment and Data Set Up",
    topDesc: "Prepare the staging environment to mirror production as closely as possible.",
    bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
    icon: Database
  },
  {
    id: 3,
    title: "Test Case Design and Scenarios",
    topDesc: "Create detailed test cases and scenarios aligned to business requirements (BRD).",
    bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
    icon: FileText
  },
  {
    id: 4,
    title: "Execution and Defect Logging",
    topDesc: "Execute the planned test cases systematically and document results.",
    bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
    icon: Bug
  },
  {
    id: 5,
    title: "Defect Trigger and Re-Testing",
    topDesc: "Collaborate with Developers to resolve issues, re-test fixes, and perform necessary regression testing.",
    bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
    icon: GitCommit
  },
  {
    id: 6,
    title: "Sign off and Reporting",
    topDesc: "Finalize the testing phase and prepare for production deployment.",
    bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
    icon: CheckCircle2
  }
];

// --- Variation 3: Interactive Process Flow ---
const ProcessView = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => (prev + 1) % uatSteps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + uatSteps.length) % uatSteps.length);

  const ActiveIcon = uatSteps[activeStep].icon;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Desktop Navigation */}
      <div className="hidden md:grid grid-cols-6 gap-2 mb-8">
        {uatSteps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 group ${
                activeStep === index
                  ? 'bg-brandDark dark:bg-brandAccent text-brandAccent dark:text-brandDark shadow-lg scale-105 z-10'
                  : 'bg-surfaceLight dark:bg-surfaceDark text-brandPrimary dark:text-brandLight/60 hover:bg-brandLight dark:hover:bg-brandNavy/40 border border-borderLight dark:border-borderDark'
              }`}
            >
              <StepIcon className={`w-5 h-5 ${activeStep === index ? 'animate-pulse-custom' : ''}`} />
              <span className="text-[10px] font-bold text-center leading-tight uppercase tracking-wide font-heading">
                {step.title}
              </span>

              {/* Connector Line */}
              {index < uatSteps.length - 1 && (
                <div className={`absolute top-1/2 -right-1 w-2 h-0.5 hidden lg:block ${
                  activeStep > index ? 'bg-brandAccent' : 'bg-borderLight dark:bg-borderDark'
                }`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-between bg-surfaceLight dark:bg-surfaceDark p-4 rounded-2xl shadow-sm border border-borderLight dark:border-borderDark">
          <button
            onClick={prevStep}
            className="p-2 rounded-full hover:bg-brandLight dark:hover:bg-brandNavy/40 text-brandDark dark:text-brandAccent transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center font-bold">←</span>
          </button>

          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-brandPrimary/60 dark:text-brandLight/50 uppercase tracking-wider font-heading">
              Step {activeStep + 1} of {uatSteps.length}
            </span>
            <span className="text-sm font-bold text-brandDark dark:text-brandLight truncate max-w-[200px] font-heading">
              {uatSteps[activeStep].title}
            </span>
          </div>

          <button
            onClick={nextStep}
            className="p-2 rounded-full hover:bg-brandLight dark:hover:bg-brandNavy/40 text-brandDark dark:text-brandAccent transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center font-bold">→</span>
          </button>
        </div>

        {/* Mobile Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {uatSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'w-6 bg-brandAccent'
                  : 'w-1.5 bg-borderLight dark:bg-borderDark'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Active Content Card */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-surfaceLight dark:bg-surfaceDark rounded-3xl overflow-hidden shadow-2xl border border-borderLight dark:border-borderDark grid md:grid-cols-2"
          >
            {/* Left: Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-brandLight dark:from-bgDark to-surfaceLight dark:to-surfaceDark">
              <div className="inline-flex items-center gap-2 text-brandAccent font-bold tracking-wider text-sm mb-6 font-heading">
                <span className="w-8 h-0.5 bg-brandAccent" />
                STEP 0{activeStep + 1}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-brandDark dark:text-brandLight mb-6 font-heading">
                {uatSteps[activeStep].title}
              </h3>

              <p className="text-lg text-brandPrimary dark:text-brandLight/90 mb-8 leading-relaxed">
                {uatSteps[activeStep].topDesc}
              </p>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-brandAccent/10 dark:bg-brandAccent/10 border border-brandAccent/20 dark:border-brandAccent/20">
                <CheckCircle2 className="w-6 h-6 text-brandAccent flex-shrink-0 mt-1" />
                <p className="text-brandPrimary dark:text-brandLight/80 text-sm">
                  {uatSteps[activeStep].bottomDesc}
                </p>
              </div>
            </div>

            {/* Right: Visual Panel */}
            <div className="relative bg-brandDark dark:bg-bgDark p-8 md:p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandAccent to-transparent" />
              </div>

              <div className="relative z-10 w-full max-w-xs aspect-square">
                <div className="absolute inset-0 border-2 border-brandAccent/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-brandAccent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ActiveIcon
                    className="w-32 h-32 text-brandAccent drop-shadow-[0_0_15px_rgba(255,192,0,0.5)] animate-float"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProcessView;