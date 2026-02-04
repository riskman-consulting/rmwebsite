import React from 'react';

const StrategicPMO = () => {
  return (
    <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight transition-colors duration-300">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mastering Digital Complexity with <span className="text-brandPrimary dark:text-brandGold">Strategic PMO</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              RiskMan Consulting drives transformation through governance-led execution, bridging the gap between strategy and realization with milestone tracking and rigorous project ownership.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GOVERNANCE MANAGEMENT */}
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-4">Governance Management</h2>
          <p className="mb-12 opacity-80 text-lg">Establish structural integrity and proactive control through systematic oversight and defined protocols.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border-l-4 border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark shadow-sm">
              <h3 className="font-bold mb-2">Centralized RAID Log Maintenance</h3>
              <p className="text-sm opacity-80">Track Risks, Assumptions, Issues, and Dependencies in a unified repository to ensure complete operational visibility.</p>
            </div>
            <div className="p-6 border-l-4 border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark shadow-sm">
              <h3 className="font-bold mb-2">Escalation & Resolution Protocols</h3>
              <p className="text-sm opacity-80">Implement defined matrices and resolution workflows to address critical project hurdles and maintain steady progress.</p>
            </div>
            <div className="p-6 border-l-4 border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark shadow-sm">
              <h3 className="font-bold mb-2">Governance Calendar</h3>
              <p className="text-sm opacity-80">Utilize structured review checkpoints to maintain consistent oversight, accountability, and alignment across all project workstreams.</p>
            </div>
            <div className="p-6 border-l-4 border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark shadow-sm">
              <h3 className="font-bold mb-2">Compliance & Documentation</h3>
              <p className="text-sm opacity-80">Conduct rigorous audits to ensure all project artifacts and documentation align perfectly with corporate governance standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT LIFECYCLE OWNERSHIP */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-4">Project Lifecycle Ownership</h2>
          <p className="mb-10 opacity-80 max-w-2xl">Maintain end-to-end accountability from initial concept to formal closure for consistent value delivery.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
              <span className="text-brandPrimary dark:text-brandGold font-heading text-3xl font-bold">01</span>
              <div>
                <h3 className="font-bold text-xl mb-2 text-brandNavy dark:text-brandGold">Concept-to-Close Governance</h3>
                <p className="opacity-80">Drive seamless execution through every phase, ensuring total accountability from project initiation through formal sign-off.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
              <span className="text-brandPrimary dark:text-brandGold font-heading text-3xl font-bold">02</span>
              <div>
                <h3 className="font-bold text-xl mb-2 text-brandNavy dark:text-brandGold">Milestone Health Tracking</h3>
                <p className="opacity-80">Monitor delivery of velocity by tracking project health against key milestones to identify and mitigate delays early.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
              <span className="text-brandPrimary dark:text-brandGold font-heading text-3xl font-bold">03</span>
              <div>
                <h3 className="font-bold text-xl mb-2 text-brandNavy dark:text-brandGold">Integrated Performance Monitoring</h3>
                <p className="opacity-80">Synchronize timeline, cost, and scope tracking to provide a holistic view of project integrity and performance.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-surfaceLight dark:bg-surfaceDark rounded-lg border border-borderLight dark:border-borderDark">
              <span className="text-brandPrimary dark:text-brandGold font-heading text-3xl font-bold">04</span>
              <div>
                <h3 className="font-bold text-xl mb-2 text-brandNavy dark:text-brandGold">Closure & Documentation</h3>
                <p className="opacity-80">Systematically capture lessons learned and finalize closure documentation to preserve institutional knowledge for future digital initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESOURCE PLANNING & RISK STRATEGY */}
      <section className="py-20 bg-brandPrimary text-white dark:bg-brandDark dark:text-brandLight border-y border-borderDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Resource Planning & Tracking</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-brandGold">Role-Based Allocation Matrix</h4>
                  <p className="text-sm opacity-90">Deploy specialized matrices to map the right talent to specific project roles, ensuring high-quality task execution.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brandGold">Capacity Forecasting Tools</h4>
                  <p className="text-sm opacity-90">Use utilization heatmaps and advanced forecasting to predict resource needs and prevent team burnout or bottlenecks.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-brandGold">Risk Mitigation Strategies</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Scoring & Prioritization Models</h4>
                  <p className="text-sm opacity-90">Apply quantitative models to score and prioritize risks, focusing resources on the most critical project impacts.</p>
                </div>
                <div>
                  <h4 className="font-bold">Structured Steering Dashboards</h4>
                  <p className="text-sm opacity-90">Provide leadership with real-time visibility through professional steering decks and interactive dashboards for data-backed decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Strategy?</h2>
          <p className="text-xl mb-10 opacity-80">Bridge the execution gap with RiskMan's governance-driven expertise.</p>
          <button className="bg-brandGold hover:bg-brandAccent text-brandDark font-bold py-4 px-12 rounded-md transition-transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* SECTION 6: FAQ SECTION */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Strategic PMO FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How does RAID management work?", a: "It centrally tracks Risks, Assumptions, Issues, and Dependencies for proactive resolution." },
              { q: "Can PMO improve ROI?", a: "Yes, by integrating timeline, cost, and scope monitoring to prevent wastage." },
              { q: "What tools do you use for tracking?", a: "Utilization of heatmaps and capacity forecasting tools for resource optimization." },
              { q: "What is project health tracking?", a: "A milestone-based system to monitor project status and compliance." }
            ].map((faq, idx) => (
              <details key={idx} className="group p-6 bg-bgLight dark:bg-bgDark rounded-lg border border-borderLight dark:border-borderDark cursor-pointer">
                <summary className="font-bold text-brandPrimary dark:text-brandGold list-none flex justify-between items-center">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 opacity-80 border-t border-borderLight dark:border-borderDark pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default StrategicPMO;