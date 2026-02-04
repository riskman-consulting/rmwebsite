import React from 'react';

const DigitalTransformationHub = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 overflow-hidden lg:py-32">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
              Elevate Your Enterprise Through <span className="text-brandPrimary dark:text-brandGold">Digital Evolution</span> 
            </h1>
            <p className="mb-10 text-lg leading-relaxed md:text-xl opacity-90">
              RiskMan empowers your transformation journey by combining governance-driven execution with technical implementation excellence to deliver measurable business impact. 
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 font-bold transition-all transform rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1">
                Book a Consultation 
              </a>
              <a href="/services" className="px-8 py-4 font-bold transition-all border-2 rounded-md border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark">
                Our Other Services 
              </a>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full -z-10 bg-gradient-to-l from-brandPrimary/10 to-transparent dark:from-brandGold/5"></div>
      </section>

      {/* SECTION 2: CORE OFFERINGS OVERVIEW */}
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto text-center sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl">
            Explore Our Core Digital Transformation Offerings 
          </h2>
          <p className="max-w-4xl mx-auto text-lg opacity-80">
            RiskMan Consulting bridges the gap between strategy and execution through governance-led PMO, implementation excellence, and comprehensive support. 
          </p>
        </div>
      </section>

      {/* SECTION 3: SERVICE GRID (CARDS) */}
      <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <p className="mb-8 text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandGold">The services we offer are the following:</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Strategic PMO */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Strategic PMO </h3>
              <p className="mb-6 opacity-80">Establish rigorous governance and risk control across the entire project lifecycle to ensure milestone-driven success. </p>
              <a href="/strategic-pmo" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </a>
            </div>

            {/* Implementation Excellence */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Implementation Excellence </h3>
              <p className="mb-6 opacity-80">Accelerate value realization through optimized digital tools, process re-engineering, and seamless data migration. </p>
              <a href="/implementation-excellence" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </a>
            </div>

            {/* Support Services */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Support Services </h3>
              <p className="mb-6 opacity-80">Sustain long-term performance through structured change management, comprehensive user testing, and post-launch hypercare.</p>
              <a href="/support-services" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto text-center sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-5xl">Ready to Future-Proof Your Business? </h2>
          <p className="mb-10 text-xl opacity-90">Partner with RiskMan to bridge the gap between strategy and execution. </p>
          <button className="px-12 py-4 font-bold transition-transform transform rounded-full bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* SECTION 5: FAQ SECTION */}
      <section className="py-24 bg-bgLight dark:bg-bgDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-12 text-3xl font-bold text-center font-heading">Frequently Asked Questions </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            
            {[
              { q: "How do you handle RAID?", a: "Through centralized logs for Risks, Assumptions, Issues, and Dependencies with defined escalation. " },
              { q: "How is data migration managed?", a: "We provide field-level transformation logic, cleansing, and final data reconciliation. " },
              { q: "What is the UAT approach?", a: "Scenario-based user acceptance testing with real-time defect triaging and regression fixes. " },
              { q: "How are transformation risks mitigated?", a: "By utilizing proactive milestone reviews, health tracking, and impact scoring models. " },
              { q: "What is the BRD process?", a: "We finalize functional requirements through stakeholder validation and strict traceability matrices." }
            ].map((faq, index) => (
              <div key={index} className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h4 className="mb-2 text-lg font-bold text-brandPrimary dark:text-brandGold">{faq.q}</h4>
                <p className="leading-relaxed opacity-80">{faq.a}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalTransformationHub;