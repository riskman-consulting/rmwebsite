import React from 'react';

export default function ValueCreation() {
  const outcomes = [
    {
      metric: "30-50%",
      description: "Reduction in control-related audit findings",
      color: "from-teal-500 to-teal-600"
    },
    {
      metric: "40-60%",
      description: "Faster remediation cycle times",
      color: "from-blue-500 to-blue-600"
    },
    {
      metric: "25-35%",
      description: "Improvement in regulatory examination outcomes",
      color: "from-purple-500 to-purple-600"
    },
    {
      metric: "20-30%",
      description: "Reduction in control testing duplication",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container max-w-6xl px-6 lg:px-12 mx-auto">
        {/* Section Header */}
        <h2 className="mb-8 text-4xl font-bold text-brandDark dark:text-brandAccent">
          Tangible Value Creation
        </h2>

        <p className="mb-12 text-lg leading-relaxed text-brandNavy dark:text-white/70">
          RiskMan's CSA services are designed to deliver measurable, sustainable value that extends 
          far beyond compliance. Our clients consistently realize significant improvements across 
          multiple dimensions of their risk and control environment.
        </p>

        {/* Value Propositions */}
        <div className="grid gap-8 mb-12 lg:grid-cols-2">
          {/* Enhanced Risk Visibility */}
          <div className="p-8 transition-shadow shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-brandAccent-100 to-brandAccent-200">
                <svg className="w-8 h-8 text-brandDark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brandDark dark:text-white">
                Enhanced Risk Visibility & Transparency
              </h3>
            </div>
            <p className="leading-relaxed text-brandPrimary dark:text-white/70">
              CSA creates a structured data pipeline that provides executive leadership and the Board 
              with unprecedented visibility into control health across the enterprise. Real-time 
              dashboards and aggregated reporting enable informed decision-making based on current, 
              validated information rather than point-in-time audit snapshots.
            </p>
          </div>

          {/* Strengthened Control Ownership */}
          <div className="p-8 transition-shadow shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-brandDark-100 to-blue-200">
                <svg className="w-8 h-8 text-brandDark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brandDark dark:text-white">
                Strengthened Control Ownership & Accountability
              </h3>
            </div>
            <p className="leading-relaxed text-brandPrimary dark:text-white/70">
              By placing assessment responsibility with process owners, CSA fundamentally shifts the 
              organizational mindset around control management. First Line personnel become active 
              participants in risk management rather than passive recipients of audit findings. This 
              ownership culture drives proactive identification and remediation of control weaknesses.
            </p>
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-brandDark dark:text-white">
            Measurable Outcomes
          </h3>
          <p className="mb-8 leading-relaxed text-brandNavy dark:text-white/70">
            Organizations implementing mature CSA programs consistently report:
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="overflow-hidden transition-all shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${outcome.color} p-6 text-center`}>
                  <div className="mb-2 text-4xl font-bold text-white">
                    {outcome.metric}
                  </div>
                </div>
                <div className="p-6">
                  <p className="leading-relaxed text-center text-brandNavy dark:text-white/70">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Business Enablement */}
        <div className="p-8 shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-brandAccent-100 dark:to-brandAccent-200">
              <svg className="w-8 h-8 text-yellow-700 dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brandDark dark:text-white">
              Strategic Business Enablement
            </h3>
          </div>
          <p className="leading-relaxed text-brandNavy dark:text-white/70">
            Beyond risk mitigation, a well-designed CSA program becomes a strategic asset that enables 
            the organization to pursue growth opportunities with confidence. Organizations with mature 
            CSA capabilities demonstrate to regulators, investors, and partners that they possess the 
            governance infrastructure to manage complexity and scale responsibly.
          </p>
        </div>

        {/* RiskMan Difference Callout */}
        <div className="p-8 mt-12 border-l-4 border-yellow-500 rounded-r-lg shadow-md bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-brandDark/10 dark:to-brandDark/20">
          <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">The RiskMan Differentiator</h3>
          <p className="italic leading-relaxed text-brandNavy dark:text-white/70">
            We don't simply implement CSA programs—we transform them into strategic governance 
            capabilities that drive sustainable competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
}