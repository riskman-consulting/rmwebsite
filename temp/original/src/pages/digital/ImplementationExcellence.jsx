import React from 'react';

const ImplementationExcellence = () => {
  return (
    <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight transition-colors duration-300">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Accelerating Value Realization with <span className="text-brandPrimary dark:text-brandGold">Implementation Excellence</span> 
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              RiskMan delivers implementation excellence through rigorous tool optimization, process re-engineering, and structured data migration frameworks to ensure your digital transformation succeeds. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandGold hover:bg-brandAccent text-brandDark font-bold py-4 px-8 rounded-md transition-all">
                Book a Consultation 
              </button>
              <button className="border-2 border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold font-bold py-4 px-8 rounded-md hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark transition-all">
                Our Other Services 
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOOL EVALUATION & OPTIMIZATION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-4">Tool Evaluation & Optimization </h2>
          <p className="mb-12 opacity-80 text-lg">Select and refine your digital ecosystem through data-backed assessment and strategic feasibility analysis. </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Comparative Tool Evaluation", desc: "Perform side-by-side assessments of digital solutions to identify the best fit for your specific organizational requirements.", id: 105, p: 106 },
              { title: "Cost-Benefit & POC", desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.", id: 107, p: 108 },
              { title: "Vendor Scorecarding", desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.", id: 109, p: 110 },
              { title: "Integration Feasibility", desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.", id: 111, p: 112 }
            ].map((item) => (
              <div key={item.id} className="p-6 bg-bgLight dark:bg-bgDark rounded-xl shadow-sm border border-borderLight dark:border-borderDark">
                <h3 className="font-bold text-brandPrimary dark:text-brandGold mb-3">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS PROCESS RE-ENGINEERING */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl font-bold mb-4">Business Process Re-engineering </h2>
              <p className="opacity-80">Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations. </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="font-bold mb-2">AS-IS/TO-BE Workflows </h4>
                <p className="text-sm opacity-80">Map current state processes and design optimized future-state models to drive significant operational improvements. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="font-bold mb-2">Simplification & Automation </h4>
                <p className="text-sm opacity-80">Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output.</p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="font-bold mb-2">Root Cause Analysis </h4>
                <p className="text-sm opacity-80">Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="font-bold mb-2">Process Documentation </h4>
                <p className="text-sm opacity-80">Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DATA MANAGEMENT & MIGRATION */}
      <section className="py-20 bg-brandNavy dark:bg-brandDark text-white">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-4">Data Management & Migration </h2>
          <p className="mb-12 opacity-90 max-w-2xl">Ensure data integrity and seamless transitions with structured cleansing, mapping, and validation frameworks. </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surfaceDark/50 rounded-lg">
              <h4 className="font-bold text-brandGold mb-2 text-lg italic">Phase 1 </h4>
              <p className="text-sm">Data Lifecycle Planning: Establish end-to-end strategic plans for managing data assets from extraction to integration. </p>
            </div>
            <div className="p-6 bg-surfaceDark/50 rounded-lg">
              <h4 className="font-bold text-brandGold mb-2 text-lg italic">Phase 2 </h4>
              <p className="text-sm">Cleansing & Validation: Implement rigorous frameworks to ensure only accurate, high-quality data reaches the new environment. </p>
            </div>
            <div className="p-6 bg-surfaceDark/50 rounded-lg">
              <h4 className="font-bold text-brandGold mb-2 text-lg italic">Phase 3 </h4>
              <p className="text-sm">Field-Level Mapping: Define precise transformation logic to maintain data consistency across disparate digital systems. </p>
            </div>
            <div className="p-6 bg-surfaceDark/50 rounded-lg">
              <h4 className="font-bold text-brandGold mb-2 text-lg italic">Phase 4 [cite: 131]</h4>
              <p className="text-sm">Defect Reconciliation: Utilize specialized logging tools to identify and resolve migration discrepancies in real time. </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTION DESIGN */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-12">BRD & Solution Design </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surfaceLight dark:bg-surfaceDark rounded-2xl border border-borderLight dark:border-borderDark">
              <h3 className="font-bold text-xl mb-4">Functional Documentation </h3>
              <p className="opacity-80">Draft structured requirements covering both functional and non-functional needs to provide a clear technical roadmap. </p>
            </div>
            <div className="p-8 bg-surfaceLight dark:bg-surfaceDark rounded-2xl border border-borderLight dark:border-borderDark">
              <h3 className="font-bold text-xl mb-4">Stakeholder Walkthroughs [cite: 139]</h3>
              <p className="opacity-80">Conduct validation walkthroughs with key stakeholders to ensure the proposed solution design meets all business expectations. </p>
            </div>
          </div>
          <div className="mt-20 p-10 bg-brandGold/10 dark:bg-brandGold/5 rounded-3xl border border-brandGold/20 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4 text-brandDark dark:text-brandGold">Ready to Optimize Your Implementation? </h2>
           <p className="mb-8 opacity-90 max-w-2xl mx-auto">Drive measurable impact with RiskMan's Accelerating Value Realization framework. </p>
            <button className="bg-brandDark text-white dark:bg-brandGold dark:text-brandDark font-bold py-4 px-12 rounded-full transition-transform hover:scale-105">
             Contact Our Experts 
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ SECTION */}
      <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          [cite_start]<h2 className="font-heading text-3xl font-bold mb-12">Implementation FAQ </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "What does process re-engineering include?", a: "It covers digitization, automation plans, and bottleneck identification via root cause analysis.", id: 147, p: 148 },
              { q: "How is data migration secured?", a: "Through end-to-end lifecycle planning and rigorous cleansing and validation frameworks.", id: 149, p: 150 },
              { q: "What is field-level mapping?", a: "It is the transformation logic that ensures data fields align correctly between old and new systems.", id: 151, p: 152 },
              { q: "How do we handle scope changes?", a: "We maintain a traceability matrix and detailed change logs to monitor all modifications.", id: 153, p: 154 }
            ].map((faq) => (
              <div key={faq.id} className="p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
                <h4 className="font-bold text-brandPrimary dark:text-brandGold mb-2">{faq.q}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ImplementationExcellence;