import React from 'react';

const ImplementationExcellence = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
      {/* SECTION 1: HERO SECTION - Modern Split Design */}
      <section className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-bgLight via-surfaceLight to-bgLight dark:from-bgDark dark:via-surfaceDark dark:to-bgDark">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandGold/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-80 h-80 bg-brandPrimary/5 dark:bg-brandGold/5 blur-3xl"></div>
        
        <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider uppercase rounded-full bg-brandGold/10 dark:bg-brandGold/20 text-brandPrimary dark:text-brandGold">
                Implementation Excellence
              </div>
              <h1 className="mb-6 text-5xl font-black leading-tight font-heading md:text-6xl lg:text-7xl">
                Accelerating <span className="relative inline-block">
                  <span className="relative z-10 text-brandPrimary dark:text-brandGold">Value</span>
                  <span className="absolute left-0 w-full h-3 bottom-2 bg-brandGold/20 -z-0"></span>
                </span> Realization
              </h1>
              <p className="mb-10 text-xl leading-relaxed opacity-80">
                RiskMan delivers implementation excellence through rigorous tool optimization, process re-engineering, and structured data migration frameworks to ensure your digital transformation succeeds.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 text-lg font-bold transition-all duration-300 transform rounded-lg shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105 hover:shadow-xl">
                  Book a Consultation
                </button>
                <button className="px-10 py-5 text-lg font-bold transition-all duration-300 transform border-2 rounded-lg border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark hover:scale-105">
                  Our Other Services
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image with Modern Frame */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/10 to-brandGold/10"></div>
                <img 
                  src="https://placehold.co/700x600/1a1a2e/ffd700?text=Implementation+Excellence" 
                  alt="Implementation Excellence - Digital Transformation" 
                  className="relative z-10 object-cover w-full h-auto"
                />
                {/* Floating Badge */}
                <div className="absolute z-20 p-4 rounded-lg shadow-xl bottom-8 left-8 bg-white/95 dark:bg-brandDark/95 backdrop-blur-sm">
                  <div className="text-3xl font-black text-brandPrimary dark:text-brandGold">99%</div>
                  <div className="text-sm font-semibold opacity-70">Success Rate</div>
                </div>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute w-24 h-24 border-4 -top-6 -left-6 rounded-tl-3xl border-brandGold/30"></div>
              <div className="absolute w-24 h-24 border-4 -bottom-6 -right-6 rounded-br-3xl border-brandPrimary/30 dark:border-brandGold/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOOL EVALUATION & OPTIMIZATION - Modern Card Grid */}
      <section className="py-24 bg-white dark:bg-brandNavy">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Tool Evaluation & <span className="text-brandPrimary dark:text-brandGold">Optimization</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-70">
              Select and refine your digital ecosystem through data-backed assessment and strategic feasibility analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Comparative Tool Evaluation", 
                desc: "Perform side-by-side assessments of digital solutions to identify the best fit for your specific organizational requirements.",
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Cost-Benefit & POC", 
                desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.",
                icon: "💰",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                title: "Vendor Scorecarding", 
                desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.",
                icon: "📊",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                title: "Integration Feasibility", 
                desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.",
                icon: "🔗",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative p-8 overflow-hidden transition-all duration-300 border group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Accent on Hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="mb-4 text-4xl">{item.icon}</div>
                
                <h3 className="mb-3 text-xl font-bold text-brandPrimary dark:text-brandGold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS PROCESS RE-ENGINEERING - Timeline Design */}
      <section className="py-24 bg-gradient-to-b from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-bgDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="grid items-start gap-16 lg:grid-cols-5">
            {/* Left Side - Sticky Header */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <h2 className="mb-6 text-4xl font-black font-heading md:text-5xl">
                Business Process <span className="text-brandPrimary dark:text-brandGold">Re-engineering</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed opacity-70">
                Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations.
              </p>
              <div className="flex items-center gap-3 p-4 border-l-4 border-brandGold bg-brandGold/5">
                <span className="text-3xl">⚡</span>
                <div>
                  <div className="font-bold text-brandPrimary dark:text-brandGold">Fast Implementation</div>
                  <div className="text-sm opacity-70">Average 30% time reduction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Process Cards with Timeline */}
            <div className="relative space-y-8 lg:col-span-3">
              {/* Timeline Line */}
              <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-brandGold via-brandPrimary to-brandGold dark:from-brandGold dark:via-brandGold dark:to-brandGold"></div>
              
              {[
                { 
                  title: "AS-IS/TO-BE Workflows", 
                  desc: "Map current state processes and design optimized future-state models to drive significant operational improvements.",
                  number: "01"
                },
                { 
                  title: "Simplification & Automation", 
                  desc: "Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output.",
                  number: "02"
                },
                { 
                  title: "Root Cause Analysis", 
                  desc: "Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations.",
                  number: "03"
                },
                { 
                  title: "Process Documentation", 
                  desc: "Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved.",
                  number: "04"
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 flex items-center justify-center w-8 h-8 transition-transform duration-300 transform -translate-x-3.5 bg-brandGold rounded-full group-hover:scale-125">
                    <div className="w-3 h-3 bg-white rounded-full dark:bg-brandDark"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 transition-all duration-300 border bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark group-hover:shadow-xl group-hover:border-brandGold">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-brandPrimary dark:text-brandGold">{item.title}</h4>
                      <span className="text-4xl font-black opacity-10">{item.number}</span>
                    </div>
                    <p className="leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BRD & SOLUTION DESIGN - Bento Box Layout */}
      <section className="py-24 bg-white dark:bg-brandNavy">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              BRD & <span className="text-brandPrimary dark:text-brandGold">Solution Design</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-70">
              Comprehensive documentation that transforms business needs into technical reality
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Large Featured Card */}
            <div className="relative p-10 overflow-hidden border md:col-span-2 lg:row-span-2 bg-gradient-to-br from-brandPrimary/10 to-brandGold/10 dark:from-brandGold/10 dark:to-brandPrimary/5 rounded-3xl border-borderLight dark:border-borderDark">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brandGold/10 blur-3xl"></div>
              <div className="relative">
                <div className="inline-block px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-brandGold/20 text-brandPrimary dark:text-brandGold">
                  Core Documentation
                </div>
                <h3 className="mb-6 text-3xl font-black text-brandPrimary dark:text-brandGold">
                  Functional Documentation
                </h3>
                <p className="mb-8 text-lg leading-relaxed opacity-80">
                  Draft structured requirements covering both functional and non-functional needs to provide a clear technical roadmap.
                </p>
                <ul className="space-y-3">
                  {[
                    "Business Requirements Analysis",
                    "Technical Specifications",
                    "System Architecture Design",
                    "Integration Requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brandGold/20">
                        <svg className="w-3 h-3 text-brandPrimary dark:text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-medium opacity-80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stakeholder Walkthroughs Card */}
            <div className="relative p-8 overflow-hidden transition-all duration-300 border group bg-bgLight dark:bg-bgDark rounded-3xl border-borderLight dark:border-borderDark hover:border-brandGold">
              <div className="mb-4 text-5xl">👥</div>
              <h3 className="mb-4 text-2xl font-bold text-brandPrimary dark:text-brandGold">
                Stakeholder Walkthroughs
              </h3>
              <p className="leading-relaxed opacity-70">
                Conduct validation walkthroughs with key stakeholders to ensure the proposed solution design meets all business expectations.
              </p>
              <div className="absolute bottom-0 right-0 w-24 h-24 transition-transform duration-300 transform rounded-tl-full bg-brandGold/5 group-hover:scale-110"></div>
            </div>

            {/* Stats Card */}
            <div className="relative p-8 overflow-hidden text-white border bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent rounded-3xl border-brandPrimary dark:border-brandGold">
              <div className="mb-6">
                <div className="text-5xl font-black">150+</div>
                <div className="text-sm tracking-wider uppercase opacity-80">BRDs Delivered</div>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-black">95%</div>
                <div className="text-sm tracking-wider uppercase opacity-80">Approval Rate</div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-4 rounded-tl-full border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BRD FINALIZATION APPROACH - Horizontal Flow */}
      <section className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-brandNavy via-brandPrimary to-brandNavy dark:from-brandDark dark:via-brandNavy dark:to-brandDark">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <div className="inline-block px-6 py-2 mb-4 text-sm font-bold tracking-wider uppercase border-2 rounded-full border-brandGold/30 bg-brandGold/10">
              Strategic Framework
            </div>
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              BRD <span className="text-brandGold">Finalization Approach</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl opacity-90">
              We ensure every RiskMan implementation starts with a well-defined and fully approved Business Requirements Document (BRD) that aligns all stakeholders.
            </p>
          </div>
          
          {/* Horizontal Step Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-0 right-0 hidden h-1 top-12 bg-gradient-to-r from-transparent via-brandGold to-transparent lg:block"></div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                { 
                  title: "Objective", 
                  desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits to set a clear direction.",
                  icon: "🎯"
                },
                { 
                  title: "Scope Finalization", 
                  desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity and expectation gaps.",
                  icon: "📋"
                },
                { 
                  title: "As-Is & To-Be Process", 
                  desc: "Documents current workflows and visualizes improved future-state processes to support informed decision-making.",
                  icon: "🔄"
                },
                { 
                  title: "Requirements", 
                  desc: "Lists detailed system features and business rules, along with performance, security, and usability expectations.",
                  icon: "📊"
                },
                { 
                  title: "Sign-Off", 
                  desc: "Facilitates review with governance bodies and captures formal approval, providing a structured baseline for delivery.",
                  icon: "✅"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Step Number Badge */}
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 mx-auto mb-6 transition-all duration-300 transform rounded-full bg-gradient-to-br from-brandGold to-brandAccent group-hover:scale-110 group-hover:shadow-2xl">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="p-6 text-center transition-all duration-300 border rounded-2xl bg-white/5 backdrop-blur-sm border-brandGold/20 group-hover:bg-white/10 group-hover:border-brandGold">
                    <div className="mb-2 text-sm font-bold tracking-wider uppercase opacity-60">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-brandGold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DATA MANAGEMENT & MIGRATION - Phase Cards */}
      <section className="py-24 bg-gradient-to-b from-bgLight to-surfaceLight dark:from-bgDark dark:to-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Data Management & <span className="text-brandPrimary dark:text-brandGold">Migration</span>
            </h2>
            <p className="max-w-2xl text-lg opacity-70">
              Ensure data integrity and seamless transitions with structured cleansing, mapping, and validation frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                phase: "Phase 1", 
                title: "Data Lifecycle Planning",
                desc: "Establish end-to-end strategic plans for managing data assets from extraction to integration.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10"
              },
              { 
                phase: "Phase 2", 
                title: "Cleansing & Validation",
                desc: "Implement rigorous frameworks to ensure only accurate, high-quality data reaches the new environment.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10"
              },
              { 
                phase: "Phase 3", 
                title: "Field-Level Mapping",
                desc: "Define precise transformation logic to maintain data consistency across disparate digital systems.",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500/10"
              },
              { 
                phase: "Phase 4", 
                title: "Defect Reconciliation",
                desc: "Utilize specialized logging tools to identify and resolve migration discrepancies in real time.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/10"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden transition-all duration-300 border group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-6">
                  {/* Phase Badge */}
                  <div className={`inline-block px-4 py-2 mb-4 text-sm font-bold rounded-full ${item.bgColor}`}>
                    {item.phase}
                  </div>
                  
                  <h4 className="mb-3 text-xl font-bold text-brandPrimary dark:text-brandGold">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm leading-relaxed opacity-70">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Effect Arrow */}
                <div className="absolute transition-opacity duration-300 opacity-0 bottom-4 right-4 group-hover:opacity-100">
                  <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MASTER DATA MIGRATION APPROACH - Accordion Steps */}
      <section className="py-24 bg-white dark:bg-brandNavy">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <div className="inline-block px-6 py-2 mb-4 text-sm font-bold tracking-wider uppercase border-2 rounded-full border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold">
              Migration Excellence
            </div>
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Master Data <span className="text-brandPrimary dark:text-brandGold">Migration Approach</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl opacity-70">
              We follow a structured, governed methodology to migrate legacy data into RiskMan with accuracy, integrity, and traceability.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { 
                step: "01", 
                title: "Data Profiling and Cleansing",
                desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues before migration.",
                icon: "🔍",
                stats: "99.9% accuracy rate"
              },
              { 
                step: "02", 
                title: "Mapping Legacy Fields to New Structure",
                desc: "Converts old data fields to the new model using robust transformation and validation logic.",
                icon: "🗺️",
                stats: "100% field coverage"
              },
              { 
                step: "03", 
                title: "Master Data Approval and Sign-Off",
                desc: "Includes final validation by designated owners and formal approval of data readiness.",
                icon: "✓",
                stats: "Stakeholder validated"
              },
              { 
                step: "04", 
                title: "Data Upload to New System",
                desc: "Shares the approved database with the technical team for secure upload into the new RiskMan environment.",
                icon: "⬆️",
                stats: "Zero-downtime deployment"
              },
              { 
                step: "05", 
                title: "Validation and Reconciliation",
                desc: "Compares migrated data with source records to confirm completeness and accuracy.",
                icon: "🔄",
                stats: "Automated verification"
              },
              { 
                step: "06", 
                title: "Post-Migration Support",
                desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system.",
                icon: "🛠️",
                stats: "30-day support window"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden transition-all duration-300 border group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold hover:shadow-xl"
              >
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
                  {/* Step Number */}
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-2xl font-black text-white transition-all duration-300 rounded-full bg-gradient-to-br from-brandPrimary to-brandGold dark:from-brandGold dark:to-brandAccent group-hover:scale-110">
                    {item.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-brandPrimary dark:text-brandGold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mb-2 leading-relaxed opacity-70">
                      {item.desc}
                    </p>
                    <div className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                      {item.stats}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex-shrink-0 hidden transition-transform duration-300 md:block group-hover:translate-x-2">
                    <svg className="w-8 h-8 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Progress Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-brandPrimary to-brandGold dark:from-brandGold dark:to-brandAccent group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 border bg-gradient-to-r from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/5 rounded-2xl border-brandGold/20">
              <div className="text-4xl">📊</div>
              <div className="text-left">
                <div className="text-2xl font-bold text-brandPrimary dark:text-brandGold">Data Migration Success Rate</div>
                <div className="text-sm opacity-70">Over 500 successful migrations across 150+ clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Modern Design */}
      <section className="py-24 bg-gradient-to-br from-surfaceLight via-bgLight to-surfaceLight dark:from-surfaceDark dark:via-bgDark dark:to-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="relative overflow-hidden border shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent rounded-3xl border-brandPrimary dark:border-brandGold">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 rounded-full w-80 h-80 bg-white/5 blur-3xl"></div>
            
            <div className="relative z-10 px-8 py-16 text-center text-white md:px-16">
              <div className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider uppercase border-2 rounded-full border-white/30 bg-white/10">
                Get Started Today
              </div>
              
              <h2 className="mb-6 text-4xl font-black font-heading md:text-5xl lg:text-6xl">
                Ready to Optimize Your <br className="hidden md:block" />
                <span className="text-brandGold dark:text-white">Implementation?</span>
              </h2>
              
              <p className="max-w-2xl mx-auto mb-10 text-xl opacity-90">
                Drive measurable impact with RiskMan's Accelerating Value Realization framework. Let's transform your business together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-12 py-5 text-lg font-bold transition-all duration-300 transform bg-white rounded-full shadow-xl text-brandPrimary dark:text-brandNavy hover:scale-105 hover:shadow-2xl">
                  Contact Our Experts
                </button>
                <button className="px-12 py-5 text-lg font-bold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-brandPrimary dark:hover:text-brandNavy hover:scale-105">
                  Download Brochure
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/20">
                <div>
                  <div className="mb-2 text-4xl font-black">500+</div>
                  <div className="text-sm tracking-wider uppercase opacity-80">Projects Delivered</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-black">150+</div>
                  <div className="text-sm tracking-wider uppercase opacity-80">Happy Clients</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-black">99%</div>
                  <div className="text-sm tracking-wider uppercase opacity-80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ SECTION - Modern Accordion Style */}
      <section className="py-24 bg-white dark:bg-brandNavy">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Frequently Asked <span className="text-brandPrimary dark:text-brandGold">Questions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-70">
              Get answers to common questions about our implementation excellence services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { 
                q: "What does process re-engineering include?", 
                a: "It covers digitization, automation plans, and bottleneck identification via root cause analysis.",
                icon: "🔄"
              },
              { 
                q: "How is data migration secured?", 
                a: "Through end-to-end lifecycle planning and rigorous cleansing and validation frameworks.",
                icon: "🔒"
              },
              { 
                q: "What is field-level mapping?", 
                a: "It is the transformation logic that ensures data fields align correctly between old and new systems.",
                icon: "🗺️"
              },
              { 
                q: "How do we handle scope changes?", 
                a: "We maintain a traceability matrix and detailed change logs to monitor all modifications.",
                icon: "📋"
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="transition-all duration-300 border group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-full bg-brandGold/10 group-hover:bg-brandGold/20">
                      <span className="text-2xl">{faq.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3 text-lg font-bold text-brandPrimary dark:text-brandGold">
                        {faq.q}
                      </h4>
                      <p className="leading-relaxed opacity-70">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="max-w-4xl p-8 mx-auto mt-12 text-center border bg-gradient-to-r from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/5 rounded-2xl border-brandGold/20">
            <h3 className="mb-3 text-2xl font-bold text-brandPrimary dark:text-brandGold">
              Still have questions?
            </h3>
            <p className="mb-6 opacity-70">
              Our team is here to help you with any queries about implementation excellence
            </p>
            <button className="px-8 py-3 font-bold transition-all duration-300 transform border-2 rounded-full border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark hover:scale-105">
              Contact Support Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ImplementationExcellence;