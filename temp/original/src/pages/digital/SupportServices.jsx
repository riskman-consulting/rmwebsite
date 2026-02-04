import React from 'react';

const SupportServices = () => {
  return (
    <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight transition-colors duration-300">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-brandLight to-bgLight dark:from-surfaceDark dark:to-bgDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sustaining Long-Term Success with <span className="text-brandPrimary dark:text-brandGold">Support Services</span> 
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              RiskMan ensures seamless transitions through rigorous testing, proactive change management, and continuous process optimization to maximize the lasting value of your digital investments. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandGold hover:bg-brandAccent text-brandDark font-bold py-4 px-8 rounded-md transition-all shadow-lg">
                 with Us 
              </button>
              <button className="border-2 border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold font-bold py-4 px-8 rounded-md hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark transition-all">
                Our Other Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEVELOPMENT TESTING & UAT */}
      <section className="py-20 border-y border-borderLight dark:border-borderDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl font-bold mb-4">Development Testing & UAT </h2>
              <p className="opacity-80">Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols. </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
                <h3 className="font-bold text-brandPrimary dark:text-brandGold mb-2">Scenario-Based UAT </h3>
                <p className="text-sm opacity-80 text-balance">Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs. </p>
              </div>
              <div className="p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
                <h3 className="font-bold text-brandPrimary dark:text-brandGold mb-2">Real-Time Defect Triaging </h3>
                <p className="text-sm opacity-80">Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment. </p>
              </div>
              <div className="p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
                <h3 className="font-bold text-brandPrimary dark:text-brandGold mb-2">Test Case Coverage [cite: 170]</h3>
                <p className="text-sm opacity-80">Prepare exhaustive test cases and track coverage meticulously to ensure no technical or business requirement goes unverified.</p>
              </div>
              <div className="p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
                <h3 className="font-bold text-brandPrimary dark:text-brandGold mb-2">System Integration Testing </h3>
                <p className="text-sm opacity-80">Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHANGE MANAGEMENT & ADOPTION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-4 text-center">Change Management & Adoption </h2>
          <p className="mb-12 opacity-80 text-center max-w-3xl mx-auto">Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement. </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Change Impact Analysis", desc: "Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles.", id: 176, p: 177 },
              { title: "Training & Communication", desc: "Support your teams with detailed SOPs, targeted training sessions, and clear communication plans for a smooth transition period.", id: 178, p: 179 },
              { title: "Stakeholder Readiness", desc: "Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared for the upcoming system changes.", id: 180, p: 181 },
              { title: "Adoption KPI Monitoring", desc: "Track real-time usage metrics and key performance indicators to measure how effectively the organization is embracing new tools.", id: 182, p: 183 }
            ].map((item) => (
              <div key={item.id} className="group p-8 bg-bgLight dark:bg-bgDark rounded-2xl transition-all hover:-translate-y-2 border border-borderLight dark:border-borderDark">
                <h4 className="font-bold mb-4 text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{item.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: POST GO-LIVE HYPERCARE & CONTINUOUS IMPROVEMENT */}
      <section className="py-20 bg-brandNavy text-white dark:bg-brandDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Post Go-Live Hypercare </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block text-brandGold mb-1">Hypercare Transition Models </strong> Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block text-brandGold mb-1">Issue Trend Analytics </strong> Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability and performance. </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Continuous Improvement </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block text-brandAccent mb-1">End-User Feedback Loops </strong> Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block text-brandAccent mb-1">Value Realization Reports </strong> Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Ready to Sustain Your Success? </h2>
          <p className="text-xl mb-10 opacity-80">Ensure a smooth digital future with RiskMan’s dedicated Support Services.</p>
          <button className="bg-brandGold hover:bg-brandAccent text-brandDark font-bold py-4 px-12 rounded-md transition-transform hover:scale-105 shadow-xl">
           Partner with Us 
          </button>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark border-t border-borderLight dark:border-borderDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { q: "How do you ensure high user adoption?", a: "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs." },
               {q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs." },
              { q: "How are system bugs managed?", a: "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority." },
              { q: "What is regression testing?", a: "It confirms that new integrations or updates haven't negatively affected existing system functions." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-borderLight dark:border-borderDark pb-6">
                <h4 className="font-bold text-brandPrimary dark:text-brandGold mb-3">{faq.q}</h4>
                <p className="opacity-80 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportServices;