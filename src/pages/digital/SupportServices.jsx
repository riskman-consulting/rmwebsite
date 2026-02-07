// import React from 'react';

// const SupportServices = () => {
//   return (
//     <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
//       {/* SECTION 1: HERO SECTION */}
//       <section className="relative py-20 lg:py-32 bg-gradient-to-b from-brandLight to-bgLight dark:from-surfaceDark dark:to-bgDark">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <div className="max-w-4xl">
//             <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
//               Sustaining Long-Term Success with <span className="text-brandPrimary dark:text-brandGold">Support Services</span> 
//             </h1>
//             <p className="mb-10 text-lg leading-relaxed md:text-xl opacity-90">
//               RiskMan ensures seamless transitions through rigorous testing, proactive change management, and continuous process optimization to maximize the lasting value of your digital investments. 
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="px-8 py-4 font-bold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark">
//                  with Us 
//               </button>
//               <button className="px-8 py-4 font-bold transition-all border-2 rounded-md border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark">
//                 Our Other Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: DEVELOPMENT TESTING & UAT */}
//       <section className="py-20 border-y border-borderLight dark:border-borderDark">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <div className="flex flex-col gap-12 lg:flex-row">
//             <div className="lg:w-1/3">
//               <h2 className="mb-4 text-3xl font-bold font-heading">Development Testing & UAT </h2>
//               <p className="opacity-80">Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols. </p>
//             </div>
//             <div className="grid grid-cols-1 gap-8 lg:w-2/3 md:grid-cols-2">
//               <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//                 <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Scenario-Based UAT </h3>
//                 <p className="text-sm opacity-80 text-balance">Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs. </p>
//               </div>
//               <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//                 <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Real-Time Defect Triaging </h3>
//                 <p className="text-sm opacity-80">Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment. </p>
//               </div>
//               <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//                 <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Test Case Coverage [cite: 170]</h3>
//                 <p className="text-sm opacity-80">Prepare exhaustive test cases and track coverage meticulously to ensure no technical or business requirement goes unverified.</p>
//               </div>
//               <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//                 <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">System Integration Testing </h3>
//                 <p className="text-sm opacity-80">Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: CHANGE MANAGEMENT & ADOPTION */}
//       <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <h2 className="mb-4 text-3xl font-bold text-center font-heading">Change Management & Adoption </h2>
//           <p className="max-w-3xl mx-auto mb-12 text-center opacity-80">Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement. </p>
          
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               { title: "Change Impact Analysis", desc: "Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles.", id: 176, p: 177 },
//               { title: "Training & Communication", desc: "Support your teams with detailed SOPs, targeted training sessions, and clear communication plans for a smooth transition period.", id: 178, p: 179 },
//               { title: "Stakeholder Readiness", desc: "Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared for the upcoming system changes.", id: 180, p: 181 },
//               { title: "Adoption KPI Monitoring", desc: "Track real-time usage metrics and key performance indicators to measure how effectively the organization is embracing new tools.", id: 182, p: 183 }
//             ].map((item) => (
//               <div key={item.id} className="p-8 transition-all border group bg-bgLight dark:bg-bgDark rounded-2xl hover:-translate-y-2 border-borderLight dark:border-borderDark">
//                 <h4 className="mb-4 font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{item.title}</h4>
//                 <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: POST GO-LIVE HYPERCARE & CONTINUOUS IMPROVEMENT */}
//       <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             <div>
//               <h2 className="mb-8 text-3xl font-bold font-heading">Post Go-Live Hypercare </h2>
//               <div className="space-y-8">
//                 <div className="flex gap-4">
//                   <div className="w-1 h-12 bg-brandGold"></div>
//                   <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Hypercare Transition Models </strong> Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations. </p>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-1 h-12 bg-brandGold"></div>
//                   <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Issue Trend Analytics </strong> Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability and performance. </p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="mb-8 text-3xl font-bold font-heading">Continuous Improvement </h2>
//               <div className="space-y-8">
//                 <div className="flex gap-4">
//                   <div className="w-1 h-12 bg-brandAccent"></div>
//                   <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">End-User Feedback Loops </strong> Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs. </p>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-1 h-12 bg-brandAccent"></div>
//                   <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">Value Realization Reports </strong> Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits. </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 5: CTA */}
//       <section className="py-20 text-center">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <h2 className="mb-6 text-3xl font-bold font-heading md:text-5xl">Ready to Sustain Your Success? </h2>
//           <p className="mb-10 text-xl opacity-80">Ensure a smooth digital future with RiskMan’s dedicated Support Services.</p>
//           <button className="px-12 py-4 font-bold transition-transform rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
//            Partner with Us 
//           </button>
//         </div>
//       </section>

//       {/* SECTION 6: FAQ */}
//       <section className="py-20 border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//         <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
//           <h2 className="mb-12 text-3xl font-bold font-heading">Frequently Asked Questions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
//             {[
//               { q: "How do you ensure high user adoption?", a: "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs." },
//                {q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs." },
//               { q: "How are system bugs managed?", a: "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority." },
//               { q: "What is regression testing?", a: "It confirms that new integrations or updates haven't negatively affected existing system functions." }
//             ].map((faq, idx) => (
//               <div key={idx} className="pb-6 border-b border-borderLight dark:border-borderDark">
//                 <h4 className="mb-3 font-bold text-brandPrimary dark:text-brandGold">{faq.q}</h4>
//                 <p className="text-sm leading-relaxed opacity-80">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default SupportServices;



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
                Partner with Us 
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
              <h2 className="mb-4 text-3xl font-bold font-heading">Development Testing & UAT</h2>
              <p className="opacity-80">Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:w-2/3 md:grid-cols-2">
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Scenario-Based UAT</h3>
                <p className="text-sm opacity-80 text-balance">Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs.</p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Real-Time Defect Triaging</h3>
                <p className="text-sm opacity-80">Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment.</p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Test Case Coverage</h3>
                <p className="text-sm opacity-80">Prepare exhaustive test cases and track coverage meticulously to ensure no technical or business requirement goes unverified.</p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">System Integration Testing</h3>
                <p className="text-sm opacity-80">Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: UAT APPROACH - TIMELINE STYLE */}
      <section className="py-20 bg-gradient-to-br from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-bgDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl">
              Our <span className="text-brandPrimary dark:text-brandGold">UAT Approach</span> for Development Testing
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">
              We structure User Acceptance Testing to validate that RiskMan meets business requirements and is ready for real‑world use.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brandPrimary via-brandGold to-brandAccent transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            {[
              {
                num: "01",
                title: "UAT Planning",
                desc: "Defines scope, objectives, roles, responsibilities, and identifies key business testers.",
                side: "left"
              },
              {
                num: "02",
                title: "Environment and Data Setup",
                desc: "Ensures UAT environment readiness and prepares realistic test data covering core scenarios.",
                side: "right"
              },
              {
                num: "03",
                title: "Test Case Design and Scenarios",
                desc: "Creates detailed test cases aligned to BRD requirements and critical business processes.",
                side: "left"
              },
              {
                num: "04",
                title: "Execution and Defect Logging",
                desc: "Guides business users to execute tests, record actual outcomes, and log defects with severity.",
                side: "right"
              },
              {
                num: "05",
                title: "Defect Triage and Re‑Testing",
                desc: "Collaborates with developers to resolve issues, prioritize fixes, and perform necessary regression tests.",
                side: "left"
              },
              {
                num: "06",
                title: "Sign‑Off and Reporting",
                desc: "Compiles UAT results, tracks closure of defects, and obtains formal go‑live approval from business owners.",
                side: "right"
              }
            ].map((item, idx) => (
              <div key={idx} className={`relative mb-12 lg:mb-20 flex items-center ${item.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="relative p-6 transition-all duration-300 border-2 shadow-lg group bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-1 hover:border-brandPrimary dark:hover:border-brandGold">
                    {/* Number Badge */}
                    <div className="absolute flex items-center justify-center w-12 h-12 font-bold text-white rounded-full shadow-lg -top-4 -left-4 bg-gradient-to-br from-brandPrimary to-brandGold">
                      {item.num}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot for Desktop */}
                <div className="absolute hidden w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 border-4 rounded-full lg:block left-1/2 top-1/2 bg-brandGold border-bgLight dark:border-bgDark"></div>

                {/* Spacer */}
                <div className="hidden w-5/12 lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CHANGE MANAGEMENT & ADOPTION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold text-center font-heading">Change Management & Adoption</h2>
          <p className="max-w-3xl mx-auto mb-12 text-center opacity-80">Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement.</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Change Impact Analysis", desc: "Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles." },
              { title: "Training & Communication", desc: "Support your teams with detailed SOPs, targeted training sessions, and clear communication plans for a smooth transition period." },
              { title: "Stakeholder Readiness", desc: "Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared for the upcoming system changes." },
              { title: "Adoption KPI Monitoring", desc: "Track real-time usage metrics and key performance indicators to measure how effectively the organization is embracing new tools." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 transition-all border group bg-bgLight dark:bg-bgDark rounded-2xl hover:-translate-y-2 border-borderLight dark:border-borderDark">
                <h4 className="mb-4 font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: CHANGE MANAGEMENT APPROACH - HEXAGON GRID */}
      <section className="py-20 border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl">
              Our <span className="text-brandPrimary dark:text-brandGold">Change Management</span> Approach
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">
              We manage the people side of change so RiskMan is adopted smoothly and delivers sustained value across the organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📊",
                title: "Change Impact Assessment",
                desc: "Analyzes how new processes and systems affect roles, behaviors, and departmental workflows.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "👥",
                title: "Stakeholder Identification and Engagement",
                desc: "Identifies key stakeholders, assesses their influence and impact, and defines engagement strategies.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "📢",
                title: "Communication Planning",
                desc: "Develops targeted messages, channels, and timelines to keep all audiences informed and aligned.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: "🎓",
                title: "Training and Enablement",
                desc: "Designs and delivers focused training, SOPs, and job aids to support user readiness and competence.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "🛡️",
                title: "Resistance Management",
                desc: "Monitors adoption, addresses concerns through feedback loops, and manages resistance proactively.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "🔄",
                title: "Sustain and Reinforce Change",
                desc: "Tracks adoption metrics, recognizes early adopters, and embeds improvements into ongoing business practices.",
                color: "from-teal-500 to-teal-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden transition-all duration-300 border-2 shadow-lg group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-8">
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-3xl transition-transform rounded-full shadow-inner bg-gradient-to-br from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-bgDark group-hover:scale-110">
                    {item.icon}
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {item.title}
                  </h3>
                  
                  <p className="leading-relaxed opacity-80">
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.color} rounded-full`}></div>
                </div>
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
              <h2 className="mb-8 text-3xl font-bold font-heading">Post Go-Live Hypercare</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Hypercare Transition Models</strong> Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Issue Trend Analytics</strong> Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability and performance.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold font-heading">Continuous Improvement</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">End-User Feedback Loops</strong> Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">Value Realization Reports</strong> Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 text-center">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-5xl">Ready to Sustain Your Success?</h2>
          <p className="mb-10 text-xl opacity-80">Ensure a smooth digital future with RiskMan's dedicated Support Services.</p>
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
              { q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs." },
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



// import {
//   Shield,
//   TestTube,
//   BarChart3,
//   Users,
//   Zap,
//   MessageSquare,
//   TrendingUp,
//   ArrowRight,
//   CheckCircle2,
//   ChevronDown
// } from "lucide-react"
// import { useState } from "react"

// const HeroSection = () => (
//   <section className="relative overflow-hidden bg-brand-dark">
//     {/* Background pattern */}
//     <div className="absolute inset-0 opacity-10">
//       <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand-gold blur-[120px]" />
//       <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-primary blur-[100px]" />
//     </div>

//     <div className="container relative py-24 lg:py-36">
//       <div className="grid items-center gap-12 lg:grid-cols-2">
//         <div>
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-brand-navy text-brand-gold border-brand-gold/20">
//             <Shield className="w-4 h-4" />
//             Enterprise Support Solutions
//           </div>
//           <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground font-heading md:text-5xl lg:text-6xl">
//             Sustaining Long-Term Success with{" "}
//             <span className="brand-gradient-text">Support Services</span>
//           </h1>
//           <p className="mb-10 text-lg leading-relaxed md:text-xl text-primary-foreground/70">
//             RiskMan ensures seamless transitions through rigorous testing,
//             proactive change management, and continuous process optimization.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="inline-flex items-center gap-2 px-8 py-4 font-bold transition-all rounded-lg shadow-lg bg-accent text-accent-foreground hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
//               Partner with Us
//               <ArrowRight className="w-5 h-5" />
//             </button>
//             <button className="px-8 py-4 font-bold transition-all border-2 rounded-lg border-primary-foreground/20 text-primary-foreground hover:border-brand-gold hover:text-brand-gold">
//               Our Other Services
//             </button>
//           </div>
//         </div>
//         <div className="justify-center hidden lg:flex">
//           <div className="relative">
//             {/* Stats cards floating */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { label: "Uptime SLA", value: "99.9%", icon: Zap },
//                 { label: "Tests Executed", value: "10K+", icon: TestTube },
//                 { label: "Clients Served", value: "200+", icon: Users },
//                 { label: "Faster Adoption", value: "3×", icon: TrendingUp }
//               ].map((stat, i) => (
//                 <div
//                   key={i}
//                   className={`p-6 rounded-2xl bg-brand-navy/80 backdrop-blur-sm border border-brand-gold/10 hover-lift ${
//                     i % 2 === 1 ? "mt-6" : ""
//                   }`}
//                 >
//                   <stat.icon className="w-6 h-6 mb-3 text-brand-gold" />
//                   <div className="text-2xl font-extrabold text-primary-foreground font-heading">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-primary-foreground/60">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

// const TestingSection = () => (
//   <section className="py-20 lg:py-28 bg-background">
//     <div className="container">
//       <div className="flex flex-col gap-16 lg:flex-row">
//         <div className="lg:w-5/12">
//           <div className="lg:sticky lg:top-24">
//             <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-accent/10 text-accent-foreground">
//               Quality Assurance
//             </span>
//             <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl text-foreground">
//               Development Testing & UAT
//             </h2>
//             <p className="text-lg leading-relaxed text-muted-foreground">
//               Guarantee system reliability through comprehensive scenario-based
//               validation and rigorous defect management protocols.
//             </p>
//             <div className="w-16 h-1 mt-6 rounded-full bg-accent" />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-6 lg:w-7/12 sm:grid-cols-2">
//           {[
//             {
//               icon: TestTube,
//               title: "Scenario-Based UAT",
//               desc:
//                 "Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs."
//             },
//             {
//               icon: Zap,
//               title: "Real-Time Defect Triaging",
//               desc:
//                 "Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment."
//             },
//             {
//               icon: CheckCircle2,
//               title: "Test Case Coverage",
//               desc:
//                 "Prepare exhaustive test cases and track coverage meticulously to ensure no requirement goes unverified."
//             },
//             {
//               icon: Shield,
//               title: "System Integration Testing",
//               desc:
//                 "Perform end-to-end integration and regression testing to confirm updates do not disrupt existing functionalities."
//             }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="group relative p-6 rounded-2xl border border-border bg-card hover-lift hover:shadow-[var(--shadow-card-hover)] hover:border-accent/30 transition-all duration-300"
//             >
//               <div className="flex items-center justify-center w-12 h-12 mb-5 transition-colors duration-300 rounded-xl bg-accent/10 text-brand-gold group-hover:bg-accent group-hover:text-accent-foreground">
//                 <item.icon className="w-6 h-6" />
//               </div>
//               <h3 className="mb-2 text-lg font-bold font-heading text-foreground">
//                 {item.title}
//               </h3>
//               <p className="text-sm leading-relaxed text-muted-foreground">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// )

// const UATApproachSection = () => (
//   <section className="py-20 lg:py-28 bg-secondary">
//     <div className="container">
//       <div className="mb-16 text-center">
//         <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-accent/10 text-accent-foreground">
//           Methodology
//         </span>
//         <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl text-foreground">
//           Our UAT Approach
//         </h2>
//         <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
//           Structured validation to ensure RiskMan meets business requirements
//           and is ready for real-world use.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
//         {[
//           {
//             num: "01",
//             title: "UAT Planning",
//             desc:
//               "Defines scope, objectives, roles, responsibilities, and identifies key business testers."
//           },
//           {
//             num: "02",
//             title: "Environment & Data Setup",
//             desc:
//               "Ensures UAT environment readiness and prepares realistic test data covering core scenarios."
//           },
//           {
//             num: "03",
//             title: "Test Case Design",
//             desc:
//               "Creates detailed test cases aligned to BRD requirements and critical business processes."
//           },
//           {
//             num: "04",
//             title: "Execution & Defect Logging",
//             desc:
//               "Guides business users to execute tests, record outcomes, and log defects with severity."
//           },
//           {
//             num: "05",
//             title: "Defect Triage & Re-Testing",
//             desc:
//               "Collaborates with developers to resolve issues, prioritize fixes, and perform regression tests."
//           },
//           {
//             num: "06",
//             title: "Sign-Off & Reporting",
//             desc:
//               "Compiles results, tracks defect closure, and obtains formal go-live approval."
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="relative p-8 transition-all duration-300 border group border-border bg-card hover:bg-accent/5"
//           >
//             <div className="mb-4 text-5xl font-extrabold transition-colors font-heading text-accent/20 group-hover:text-accent/40">
//               {item.num}
//             </div>
//             <h3 className="mb-3 text-lg font-bold font-heading text-foreground">
//               {item.title}
//             </h3>
//             <p className="text-sm leading-relaxed text-muted-foreground">
//               {item.desc}
//             </p>
//             <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 rounded-full group-hover:w-full bg-accent" />
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// const ChangeManagementSection = () => (
//   <section className="py-20 lg:py-28 bg-background">
//     <div className="container">
//       <div className="mb-16 text-center">
//         <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-accent/10 text-accent-foreground">
//           People & Process
//         </span>
//         <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl text-foreground">
//           Change Management & Adoption
//         </h2>
//         <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
//           Empower your workforce and drive high adoption rates through
//           structured impact analysis.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {[
//           {
//             icon: BarChart3,
//             title: "Change Impact Analysis",
//             desc:
//               "Role-based assessments identifying how digital shifts affect departments and roles."
//           },
//           {
//             icon: MessageSquare,
//             title: "Training & Communication",
//             desc:
//               "Detailed SOPs, targeted training sessions, and clear communication plans."
//           },
//           {
//             icon: Users,
//             title: "Stakeholder Readiness",
//             desc:
//               "Comprehensive assessments ensuring stakeholders are prepared for system changes."
//           },
//           {
//             icon: TrendingUp,
//             title: "Adoption KPI Monitoring",
//             desc:
//               "Real-time usage metrics measuring how effectively the organization embraces new tools."
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="group relative p-8 rounded-2xl border border-border bg-card hover-lift-lg hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 overflow-hidden"
//           >
//             <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] bg-accent/5 group-hover:bg-accent/10 transition-colors" />
//             <item.icon className="w-8 h-8 mb-6 text-brand-gold" />
//             <h4 className="mb-3 text-lg font-bold font-heading text-foreground">
//               {item.title}
//             </h4>
//             <p className="text-sm leading-relaxed text-muted-foreground">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// const ChangeApproachSection = () => (
//   <section className="py-20 lg:py-28 bg-brand-dark text-primary-foreground">
//     <div className="container">
//       <div className="mb-16 text-center">
//         <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase border rounded-full bg-brand-gold/10 text-brand-gold border-brand-gold/20">
//           Framework
//         </span>
//         <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl">
//           Our Change Management Approach
//         </h2>
//         <p className="max-w-2xl mx-auto text-lg text-primary-foreground/60">
//           Managing the people side of change so RiskMan delivers sustained
//           value.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {[
//           {
//             icon: BarChart3,
//             title: "Change Impact Assessment",
//             desc:
//               "Analyzes how new processes affect roles, behaviors, and departmental workflows."
//           },
//           {
//             icon: Users,
//             title: "Stakeholder Engagement",
//             desc:
//               "Identifies key stakeholders, assesses influence, and defines engagement strategies."
//           },
//           {
//             icon: MessageSquare,
//             title: "Communication Planning",
//             desc:
//               "Develops targeted messages, channels, and timelines to keep audiences aligned."
//           },
//           {
//             icon: CheckCircle2,
//             title: "Training & Enablement",
//             desc:
//               "Designs focused training, SOPs, and job aids to support user readiness."
//           },
//           {
//             icon: Shield,
//             title: "Resistance Management",
//             desc:
//               "Monitors adoption, addresses concerns through feedback loops proactively."
//           },
//           {
//             icon: TrendingUp,
//             title: "Sustain & Reinforce",
//             desc:
//               "Tracks adoption metrics, recognizes early adopters, embeds improvements."
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="p-8 transition-all duration-300 border group rounded-2xl bg-brand-navy/60 backdrop-blur-sm border-brand-gold/10 hover:border-brand-gold/30 hover-lift"
//           >
//             <div className="flex items-center justify-center mb-6 transition-colors w-14 h-14 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold/20">
//               <item.icon className="w-7 h-7 text-brand-gold" />
//             </div>
//             <h3 className="mb-3 text-lg font-bold font-heading text-primary-foreground">
//               {item.title}
//             </h3>
//             <p className="text-sm leading-relaxed text-primary-foreground/60">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// const HypercareSection = () => (
//   <section className="py-20 lg:py-28 bg-background">
//     <div className="container">
//       <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//         {/* Hypercare */}
//         <div className="p-10 rounded-3xl bg-brand-dark text-primary-foreground">
//           <h2 className="mb-8 text-3xl font-bold font-heading">
//             Post Go-Live Hypercare
//           </h2>
//           <div className="space-y-6">
//             {[
//               {
//                 title: "Hypercare Transition Models",
//                 desc:
//                   "Deploy structured 30/60/90-day support models to guide your organization through post-launch operations."
//               },
//               {
//                 title: "Issue Trend Analytics",
//                 desc:
//                   "Analyze ticket patterns to identify recurring problems and develop permanent solutions."
//               }
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 p-5 border rounded-xl bg-brand-navy/50 border-brand-gold/10"
//               >
//                 <div className="w-1 rounded-full shrink-0 bg-brand-gold" />
//                 <div>
//                   <h4 className="mb-1 font-bold text-brand-gold">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm leading-relaxed text-primary-foreground/70">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Continuous Improvement */}
//         <div className="p-10 border rounded-3xl bg-card border-border">
//           <h2 className="mb-8 text-3xl font-bold font-heading text-foreground">
//             Continuous Improvement
//           </h2>
//           <div className="space-y-6">
//             {[
//               {
//                 title: "End-User Feedback Loops",
//                 desc:
//                   "Establish direct channels for users to share insights, ensuring system evolutions are driven by operational needs."
//               },
//               {
//                 title: "Value Realization Reports",
//                 desc:
//                   "Generate detailed reports quantifying transformation success and highlighting realized business benefits."
//               }
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 p-5 border rounded-xl bg-secondary border-border"
//               >
//                 <div className="w-1 rounded-full shrink-0 bg-accent" />
//                 <div>
//                   <h4 className="mb-1 font-bold text-foreground">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm leading-relaxed text-muted-foreground">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

// const CTASection = () => (
//   <section className="relative py-20 overflow-hidden lg:py-28 bg-brand-dark">
//     <div className="absolute inset-0 opacity-20">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold blur-[200px]" />
//     </div>
//     <div className="container relative text-center">
//       <h2 className="mb-6 text-3xl font-bold font-heading text-primary-foreground md:text-5xl">
//         Ready to Sustain Your Success?
//       </h2>
//       <p className="mb-10 text-xl text-primary-foreground/60">
//         Ensure a smooth digital future with RiskMan's dedicated Support
//         Services.
//       </p>
//       <button className="inline-flex items-center gap-2 px-12 py-4 font-bold transition-all rounded-lg shadow-[var(--shadow-gold)] bg-accent text-accent-foreground hover:scale-[1.03] active:scale-[0.98]">
//         Partner with Us
//         <ArrowRight className="w-5 h-5" />
//       </button>
//     </div>
//   </section>
// )

// const FAQSection = () => {
//   const [openIdx, setOpenIdx] = useState(null)

//   const faqs = [
//     {
//       q: "How do you ensure high user adoption?",
//       a:
//         "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs."
//     },
//     {
//       q: "What is the goal of UAT?",
//       a:
//         "To validate the system against real business scenarios before go-live, ensuring it meets user needs."
//     },
//     {
//       q: "How are system bugs managed?",
//       a:
//         "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority."
//     },
//     {
//       q: "What is regression testing?",
//       a:
//         "It confirms that new integrations or updates haven't negatively affected existing system functions."
//     }
//   ]

//   return (
//     <section className="py-20 lg:py-28 bg-secondary">
//       <div className="container">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="mb-12 text-3xl font-bold text-center font-heading text-foreground">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="overflow-hidden transition-all border rounded-xl border-border bg-card"
//               >
//                 <button
//                   onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
//                   className="flex items-center justify-between w-full p-6 font-bold text-left transition-colors text-foreground hover:text-brand-gold"
//                 >
//                   <span>{faq.q}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${
//                       openIdx === idx ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openIdx === idx ? "max-h-40 pb-6 px-6" : "max-h-0"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed text-muted-foreground">
//                     {faq.a}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const SupportServices = () => (
//   <div className="min-h-screen bg-background text-foreground">
//     <HeroSection />
//     <TestingSection />
//     <UATApproachSection />
//     <ChangeManagementSection />
//     <ChangeApproachSection />
//     <HypercareSection />
//     <CTASection />
//     <FAQSection />
//   </div>
// )

// export default SupportServices
