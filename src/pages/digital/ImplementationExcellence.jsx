import React,{useState} from 'react';
// import { 
//   CheckCircle, 
//   BarChart3, 
//   Settings, 
//   Database, 
//   FileText, 
//   ArrowRight, 
//   ChevronDown, 
//   ChevronUp,
//   Users,
//   Layers,
//   Search,
//   Zap,
//   ClipboardCheck,
//   RefreshCw
// } from 'lucide-react';

import {
    FileText,
    CheckCircle,
    GitBranch,
    ListChecks,
    Users,
    Database,
    Filter,
    ArrowRightLeft,
    ShieldCheck,
    UploadCloud,
    SearchCheck,
    LifeBuoy,
    ChevronDown
} from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion';

import bg from "../../assets/images/digital/implementation.png";
import businessImg from "../../assets/images/digital/business-process-re-engineering.jpg"
import brdImg from "../../assets/images/digital/brd-solution-design.jpg";





    const tabs = [
        { id: 'brd', label: 'BRD Finalization Approach', icon: FileText },
        { id: 'migration', label: 'Master Data Migration Approach', icon: Database },
    ];

    const brdSteps = [
        {
            title: "Objective",
            desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits.",
            icon: FileText
        },
        {
            title: "Scope Finalization",
            desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity.",
            icon: list => <Filter size={24} />
        },
        {
            title: "As‑Is and To‑Be Process Flow",
            desc: "Documents current workflows and visualizes improved future‑state processes.",
            icon: GitBranch
        },
        {
            title: "Functional / Non‑Functional Requirements",
            desc: "Lists detailed system features and business rules, along with performance expectations.",
            icon: ListChecks
        },
        {
            title: "Committee Discussion and Sign‑Off",
            desc: "Facilitates review with governance bodies and captures formal approval.",
            icon: Users
        }
    ];

    const migrationSteps = [
        {
            title: "Data Profiling and Cleansing",
            desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues.",
            icon: Filter
        },
        {
            title: "Mapping Legacy Fields to New Structure",
            desc: "Converts old data fields to the new model using robust transformation logic.",
            icon: ArrowRightLeft
        },
        {
            title: "Master Data Approval and Sign‑Off",
            desc: "Includes final validation by designated owners and formal approval of data readiness.",
            icon: ShieldCheck
        },
        {
            title: "Data Upload to New System",
            desc: "Shares the approved database with the technical team for secure upload.",
            icon: UploadCloud
        },
        {
            title: "Validation and Reconciliation",
            desc: "Compares migrated data with source records to confirm completeness and accuracy.",
            icon: SearchCheck
        },
        {
            title: "Post‑Migration Support",
            desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system.",
            icon: LifeBuoy
        }
    ];


    
    
    const ImplementationExcellence = () => {
      
      const [openIndex, setOpenIndex] = useState(null);
      const [activeTab, setActiveTab] = useState('brd');
      
      const activeSteps = activeTab === 'brd' ? brdSteps : migrationSteps;

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
    

      <section
      className="relative py-24 bg-center bg-cover lg:py-36"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40"></div>

      {/* subtle bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div className="container relative px-6 mx-auto lg:px-12">
        <div className="max-w-3xl p-8 border shadow-2xl rounded-xl bg-white/10 backdrop-blur-md border-white/20">
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Accelerating Value Realization with{" "}
            <span className="text-brandGold">
              Implementation Excellence
            </span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
            RiskMan delivers implementation excellence through rigorous tool
            optimization, process re-engineering, and structured data migration
            frameworks to ensure your digital transformation succeeds.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/contact" className="px-8 py-4 font-semibold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1">
              Book a Consultation
            </Link>

            <Link to="/services" className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black">
              Our Other Services
            </Link>
          </div>

        </div>
      </div>
    </section>

      {/* SECTION 2: TOOL EVALUATION & OPTIMIZATION - Modern Card Grid */}
      <section className="bg-white py-14 md:py-20 dark:bg-surfaceDark">
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
                className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
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

     

       <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="order-2 lg:w-1/2 lg:order-1">
              <img 
                src={businessImg}
                alt="Business Process Re-engineering" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 lg:w-1/2 lg:order-2">
              <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-brandLight text-brandPrimary">
                Efficiency First
              </div>
              <h2 className="mb-6 text-2xl md:text-3xl text-brandDark dark:text-brandAccent">Business Process Re-engineering</h2>
              <p className="mb-8 text-lg text-brandNavy dark:text-white/70">
                Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations.
              </p>

              <div className="space-y-6">
                {[
                  { title: "AS-IS/TO-BE Workflows", desc: "Map current state processes and design optimized future-state models to drive significant operational improvements." },
                  { title: "Simplification & Automation", desc: "Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output." },
                  { title: "Root Cause Analysis", desc: "Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations." },
                  { title: "Process Documentation", desc: "Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-brandAccent" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-brandNavy dark:text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BRD & SOLUTION DESIGN - Bento Box Layout */}
      {/* <section className="py-24 bg-white dark:bg-brandNavy">
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
      </section> */}

      {/* SECTION 5: BRD FINALIZATION APPROACH - Horizontal Flow */}
      {/* <section className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-brandNavy via-brandPrimary to-brandNavy dark:from-brandDark dark:via-brandNavy dark:to-brandDark">
      
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
          
         
          <div className="relative">
          
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
                 
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 mx-auto mb-6 transition-all duration-300 transform rounded-full bg-gradient-to-br from-brandGold to-brandAccent group-hover:scale-110 group-hover:shadow-2xl">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                  </div>
                  
                 
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
      </section> */}


       <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
            <div className="lg:w-1/2">
              <img 
                src={brdImg}
                alt="BRD & Solution Design" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl md:text-4xl">BRD & Solution Design</h2>
              <p className="mb-8 text-lg text-brandNavy dark:text-white/70">
                Bridge the gap between business needs and technical execution through structured requirements and validation.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Functional Documentation", desc: "Draft structured requirements covering both functional and non-functional needs." },
                  { title: "Readiness Checkpoints", desc: "Execute business readiness checkpoints to confirm organization preparedness." },
                  { title: "Stakeholder Walkthroughs", desc: "Conduct validation walkthroughs with key stakeholders to ensure alignment." },
                  { title: "Traceability & Change Logs", desc: "Maintain comprehensive traceability matrices and change logs." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border shadow-sm rounded-lig border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
                    <FileText className="w-6 h-6 mb-3 text-brandPrimary dark:text-brandAccent" />
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-brandPrimary dark:text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DATA MANAGEMENT & MIGRATION - Phase Cards */}
      <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mx-auto mb-16 text-center ">
            <h2 className="mb-4 text-3xl font-black font-heading md:text-4xl">
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
                className="relative overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
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
      {/* <section className="py-24 bg-white dark:bg-brandNavy">
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
                 
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-2xl font-black text-white transition-all duration-300 rounded-full bg-gradient-to-br from-brandPrimary to-brandGold dark:from-brandGold dark:to-brandAccent group-hover:scale-110">
                    {item.step}
                  </div>
                  
                 
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

                
                  <div className="flex-shrink-0 hidden transition-transform duration-300 md:block group-hover:translate-x-2">
                    <svg className="w-8 h-8 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
             
                <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-brandPrimary to-brandGold dark:from-brandGold dark:to-brandAccent group-hover:w-full"></div>
              </div>
            ))}
          </div>

        
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
      </section> */}

      {/* <section className="bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
           
            <div>
              <h3 className="inline-block pb-2 mb-6 text-2xl font-bold border-b-2 text-brandPrimary dark:text-brandAccent border-brandAccent">BRD Finalization Approach</h3>
              <p className="mb-8 text-brandNavy dark:text-white/70">We ensure every RiskMan implementation starts with a well‑defined and fully approved Business Requirements Document (BRD) that aligns all stakeholders.</p>
              
              <div className="relative pl-8 space-y-6 border-l-2 border-gray-200">
                {[
                  { title: "Objective", desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits." },
                  { title: "Scope Finalization", desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity." },
                  { title: "As‑Is and To‑Be Process Flow", desc: "Documents current workflows and visualizes improved future‑state processes." },
                  { title: "Functional / Non‑Functional Requirements", desc: "Lists detailed system features and business rules, along with performance expectations." },
                  { title: "Committee Discussion and Sign‑Off", desc: "Facilitates review with governance bodies and captures formal approval." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-brandAccent flex items-center justify-center text-brandDark font-bold text-xs">
                      {idx + 1}
                    </div>
                    <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
                    <p className="text-sm text-brandNavy dark:text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="inline-block pb-2 mb-6 text-2xl font-bold border-b-2 text-brandPrimary dark:text-brandAccent border-brandAccent">Master Data Migration Approach</h3>
              <p className="mb-8 text-brandPrimary dark:text-white/70">We follow a structured, governed methodology to migrate legacy data into RiskMan with accuracy, integrity, and traceability.</p>
              
              <div className="relative pl-8 space-y-6 border-l-2 border-gray-200">
                {[
                  { title: "Data Profiling and Cleansing", desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues." },
                  { title: "Mapping Legacy Fields to New Structure", desc: "Converts old data fields to the new model using robust transformation logic." },
                  { title: "Master Data Approval and Sign‑Off", desc: "Includes final validation by designated owners and formal approval of data readiness." },
                  { title: "Data Upload to New System", desc: "Shares the approved database with the technical team for secure upload." },
                  { title: "Validation and Reconciliation", desc: "Compares migrated data with source records to confirm completeness and accuracy." },
                  { title: "Post‑Migration Support", desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-brandAccent flex items-center justify-center text-white font-bold text-xs">
                      {idx + 1}
                    </div>
                    <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
                    <p className="text-sm text-brandNavy dark:text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
 <section className="relative py-20 overflow-hidden bg-surfaceLight dark:bg-bgDark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brandPrimary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-brandAccent/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white"
                    >
                        Implementation Methodology
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300"
                    >
                        We ensure every RiskMan implementation starts with a structured, governed approach to requirements and data.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "relative px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 font-semibold text-lg border-2",
                                    isActive
                                        ? "bg-brandPrimary border-brandPrimary text-white shadow-lg shadow-brandPrimary/25 scale-105"
                                        : "bg-white dark:bg-surfaceDark border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brandPrimary/50 hover:text-brandPrimary dark:hover:text-brandPrimary"
                                )}
                            >
                                <Icon size={20} />
                                {tab.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute w-3 h-3 rotate-45 -translate-x-1/2 -bottom-3 left-1/2 bg-brandPrimary"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-8 bg-white border shadow-xl dark:bg-surfaceDark/50 rounded-3xl md:p-12 border-slate-100 dark:border-white/5"
                        >
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {activeSteps.map((step, idx) => {
                                    const Icon = step.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative group"
                                        >
                                            <div className="absolute inset-0 transition-transform duration-300 transform bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:scale-105 group-hover:-rotate-1" />

                                            <div className="relative flex flex-col h-full p-6 transition-colors bg-white border border-slate-100 dark:border-white/5 rounded-2xl dark:bg-surfaceDark hover:border-brandPrimary/30 dark:hover:border-brandAccent/30">
                                                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-transform duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                                                    {/* Handle both component and functional icons if necessary, but here reusing standard lucide icons */}
                                                    {typeof Icon === 'function' ? (React.isValidElement(Icon({})) ? Icon({}) : <Icon size={24} />) : <Icon size={24} />}
                                                </div>

                                                <div className="absolute text-6xl font-bold pointer-events-none select-none top-6 right-6 text-slate-100 dark:text-white/5">
                                                    {idx + 1}
                                                </div>

                                                <h4 className="relative z-10 mb-3 text-xl font-bold text-brandDark dark:text-white">
                                                    {step.title}
                                                </h4>
                                                <p className="relative z-10 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>

      {/* <section className="py-24 bg-gradient-to-br from-surfaceLight via-bgLight to-surfaceLight dark:from-surfaceDark dark:via-bgDark dark:to-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="relative overflow-hidden border shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent rounded-3xl border-brandPrimary dark:border-brandGold">
            
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
      </section> */}

      {/* SECTION 8: FAQ SECTION - Modern Accordion Style */}
      <section className="py-24 bg-white dark:bg-brandDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Frequently Asked <span className="text-brandPrimary dark:text-brandGold">Questions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-70">
              Get answers to common questions about our implementation excellence services
            </p>
          </div>
          
          {/* <div className="max-w-4xl mx-auto space-y-4">
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
          </div> */}

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
  ].map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className="transition-all duration-300 border bg-bgLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold"
      >
        {/* QUESTION */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="flex items-start w-full gap-4 p-6 text-left"
        >
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-brandGold/10">
            <span className="text-2xl">{faq.icon}</span>
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold text-brandPrimary dark:text-brandGold">
              {faq.q}
            </h4>
          </div>

          {/* ARROW */}
          <ChevronDown
            className={`mt-1 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-brandGold" : "text-gray-400"
            }`}
          />
        </button>

        {/* ANSWER */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 leading-relaxed opacity-70">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  })}
</div>


          {/* Additional Help CTA */}
          <div className="max-w-4xl p-8 mx-auto mt-12 text-center border bg-gradient-to-r from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/5 rounded-2xl border-brandGold/20">
            <h3 className="mb-3 text-2xl font-bold text-brandPrimary dark:text-brandGold">
              Still have questions?
            </h3>
            <p className="mb-6 opacity-70">
              Our team is here to help you with any queries about implementation excellence
            </p>
            <Link to="/contact" className="px-8 py-3 font-bold transition-all duration-300 transform border-2 rounded-full border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark hover:scale-105">
              Contact Support Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ImplementationExcellence;