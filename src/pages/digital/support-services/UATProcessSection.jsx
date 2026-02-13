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
   
      
      {/* UAT Approach Section */}
      <section className="bg-surfaceLight dark:bg-surfaceDark md:py-10">
        <div className="container px-6 lg:px-20">
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

