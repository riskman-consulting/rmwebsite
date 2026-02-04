import React from 'react';

const ImplementationExcellence = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 overflow-hidden lg:py-32">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
              Accelerating Value Realization with <span className="text-brandPrimary dark:text-brandGold">Implementation Excellence</span> 
            </h1>
            <p className="mb-10 text-lg leading-relaxed md:text-xl opacity-90">
              RiskMan delivers implementation excellence through rigorous tool optimization, process re-engineering, and structured data migration frameworks to ensure your digital transformation succeeds. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 font-bold transition-all rounded-md bg-brandGold hover:bg-brandAccent text-brandDark">
                Book a Consultation 
              </button>
              <button className="px-8 py-4 font-bold transition-all border-2 rounded-md border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark">
                Our Other Services 
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOOL EVALUATION & OPTIMIZATION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Tool Evaluation & Optimization </h2>
          <p className="mb-12 text-lg opacity-80">Select and refine your digital ecosystem through data-backed assessment and strategic feasibility analysis. </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Comparative Tool Evaluation", desc: "Perform side-by-side assessments of digital solutions to identify the best fit for your specific organizational requirements.", id: 105, p: 106 },
              { title: "Cost-Benefit & POC", desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.", id: 107, p: 108 },
              { title: "Vendor Scorecarding", desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.", id: 109, p: 110 },
              { title: "Integration Feasibility", desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.", id: 111, p: 112 }
            ].map((item) => (
              <div key={item.id} className="p-6 border shadow-sm bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark">
                <h3 className="mb-3 font-bold text-brandPrimary dark:text-brandGold">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS PROCESS RE-ENGINEERING */}
      <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col items-start gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold font-heading">Business Process Re-engineering </h2>
              <p className="opacity-80">Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations. </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:w-2/3 md:grid-cols-2">
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">AS-IS/TO-BE Workflows </h4>
                <p className="text-sm opacity-80">Map current state processes and design optimized future-state models to drive significant operational improvements. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Simplification & Automation </h4>
                <p className="text-sm opacity-80">Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output.</p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Root Cause Analysis </h4>
                <p className="text-sm opacity-80">Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Process Documentation </h4>
                <p className="text-sm opacity-80">Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DATA MANAGEMENT & MIGRATION */}
      <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Data Management & Migration </h2>
          <p className="max-w-2xl mb-12 opacity-90">Ensure data integrity and seamless transitions with structured cleansing, mapping, and validation frameworks. </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 1 </h4>
              <p className="text-sm">Data Lifecycle Planning: Establish end-to-end strategic plans for managing data assets from extraction to integration. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 2 </h4>
              <p className="text-sm">Cleansing & Validation: Implement rigorous frameworks to ensure only accurate, high-quality data reaches the new environment. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 3 </h4>
              <p className="text-sm">Field-Level Mapping: Define precise transformation logic to maintain data consistency across disparate digital systems. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 4 [cite: 131]</h4>
              <p className="text-sm">Defect Reconciliation: Utilize specialized logging tools to identify and resolve migration discrepancies in real time. </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTION DESIGN */}
      <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-12 text-3xl font-bold font-heading">BRD & Solution Design </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <h3 className="mb-4 text-xl font-bold">Functional Documentation </h3>
              <p className="opacity-80">Draft structured requirements covering both functional and non-functional needs to provide a clear technical roadmap. </p>
            </div>
            <div className="p-8 border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <h3 className="mb-4 text-xl font-bold">Stakeholder Walkthroughs [cite: 139]</h3>
              <p className="opacity-80">Conduct validation walkthroughs with key stakeholders to ensure the proposed solution design meets all business expectations. </p>
            </div>
          </div>
          <div className="p-10 mt-20 text-center border bg-brandGold/10 dark:bg-brandGold/5 rounded-3xl border-brandGold/20">
            <h2 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-brandGold">Ready to Optimize Your Implementation? </h2>
           <p className="max-w-2xl mx-auto mb-8 opacity-90">Drive measurable impact with RiskMan's Accelerating Value Realization framework. </p>
            <button className="px-12 py-4 font-bold text-white transition-transform rounded-full bg-brandDark dark:bg-brandGold dark:text-brandDark hover:scale-105">
             Contact Our Experts 
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ SECTION */}
      <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          [cite_start]<h2 className="mb-12 text-3xl font-bold font-heading">Implementation FAQ </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { q: "What does process re-engineering include?", a: "It covers digitization, automation plans, and bottleneck identification via root cause analysis.", id: 147, p: 148 },
              { q: "How is data migration secured?", a: "Through end-to-end lifecycle planning and rigorous cleansing and validation frameworks.", id: 149, p: 150 },
              { q: "What is field-level mapping?", a: "It is the transformation logic that ensures data fields align correctly between old and new systems.", id: 151, p: 152 },
              { q: "How do we handle scope changes?", a: "We maintain a traceability matrix and detailed change logs to monitor all modifications.", id: 153, p: 154 }
            ].map((faq) => (
              <div key={faq.id} className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h4 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">{faq.q}</h4>
                <p className="text-sm leading-relaxed opacity-80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ImplementationExcellence;