import React from 'react';

const SupportServices = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-brandLight to-bgLight dark:from-surfaceDark dark:to-bgDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
              Sustaining Long-Term Success with <span className="text-brandPrimary dark:text-brandGold">Support Services</span> 
            </h1>
            <p className="mb-10 text-lg leading-relaxed md:text-xl opacity-90">
              RiskMan ensures seamless transitions through rigorous testing, proactive change management, and continuous process optimization to maximize the lasting value of your digital investments. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 font-bold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark">
                 with Us 
              </button>
              <button className="px-8 py-4 font-bold transition-all border-2 rounded-md border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark">
                Our Other Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEVELOPMENT TESTING & UAT */}
      <section className="py-20 border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold font-heading">Development Testing & UAT </h2>
              <p className="opacity-80">Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols. </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:w-2/3 md:grid-cols-2">
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Scenario-Based UAT </h3>
                <p className="text-sm opacity-80 text-balance">Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs. </p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Real-Time Defect Triaging </h3>
                <p className="text-sm opacity-80">Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment. </p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Test Case Coverage [cite: 170]</h3>
                <p className="text-sm opacity-80">Prepare exhaustive test cases and track coverage meticulously to ensure no technical or business requirement goes unverified.</p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">System Integration Testing </h3>
                <p className="text-sm opacity-80">Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHANGE MANAGEMENT & ADOPTION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold text-center font-heading">Change Management & Adoption </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center opacity-80">Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement. </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Change Impact Analysis", desc: "Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles.", id: 176, p: 177 },
              { title: "Training & Communication", desc: "Support your teams with detailed SOPs, targeted training sessions, and clear communication plans for a smooth transition period.", id: 178, p: 179 },
              { title: "Stakeholder Readiness", desc: "Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared for the upcoming system changes.", id: 180, p: 181 },
              { title: "Adoption KPI Monitoring", desc: "Track real-time usage metrics and key performance indicators to measure how effectively the organization is embracing new tools.", id: 182, p: 183 }
            ].map((item) => (
              <div key={item.id} className="p-8 transition-all border group bg-bgLight dark:bg-bgDark rounded-2xl hover:-translate-y-2 border-borderLight dark:border-borderDark">
                <h4 className="mb-4 font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: POST GO-LIVE HYPERCARE & CONTINUOUS IMPROVEMENT */}
      <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold font-heading">Post Go-Live Hypercare </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Hypercare Transition Models </strong> Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Issue Trend Analytics </strong> Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability and performance. </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold font-heading">Continuous Improvement </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">End-User Feedback Loops </strong> Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">Value Realization Reports </strong> Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 text-center">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-5xl">Ready to Sustain Your Success? </h2>
          <p className="mb-10 text-xl opacity-80">Ensure a smooth digital future with RiskMan’s dedicated Support Services.</p>
          <button className="px-12 py-4 font-bold transition-transform rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
           Partner with Us 
          </button>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-12 text-3xl font-bold font-heading">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { q: "How do you ensure high user adoption?", a: "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs." },
               {q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs." },
              { q: "How are system bugs managed?", a: "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority." },
              { q: "What is regression testing?", a: "It confirms that new integrations or updates haven't negatively affected existing system functions." }
            ].map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-borderLight dark:border-borderDark">
                <h4 className="mb-3 font-bold text-brandPrimary dark:text-brandGold">{faq.q}</h4>
                <p className="text-sm leading-relaxed opacity-80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportServices;