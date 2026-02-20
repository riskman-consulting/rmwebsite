import React from 'react';

function StrategicFoundation() {
  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl px-6 lg:px-12 mx-auto">
        {/* Section Header */}
        <h2 className="mb-8 text-4xl font-bold text-brandDark dark:text-brandAccent">
          Control Self-Assessment: Strategic Foundation
        </h2>

        {/* Introduction */}
        <p className="mb-8 text-lg leading-relaxed text-brandNavy dark:text-white/70">
          In an era defined by regulatory complexity, operational volatility, and heightened 
          stakeholder expectations, Control Self-Assessment (CSA) has emerged as a cornerstone 
          of modern risk governance. Far more than a compliance exercise, CSA represents a 
          fundamental shift in how leading organizations embed risk awareness, control 
          accountability, and continuous improvement into their operational DNA.
        </p>

        {/* Strategic Imperative Callout */}
        <div className="p-8 mb-12 border-l-4 border-yellow-500 rounded-r-lg shadow-md bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
          <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">Strategic Imperative</h3>
          <p className="italic leading-relaxed text-brandPrimary dark:text-white/70">
            CSA transforms risk management from a periodic audit activity into a continuous, 
            organization-wide discipline that drives accountability at every level of the enterprise.
          </p>
        </div>

        {/* Defining CSA */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white">
            Defining CSA in the Modern Enterprise
          </h3>
          <p className="mb-4 leading-relaxed text-brandNavy dark:text-white/70">
            Control Self-Assessment is a structured, facilitated process through which management 
            and process owners systematically evaluate the design adequacy and operating effectiveness 
            of controls within their areas of responsibility. Unlike traditional audit-led assurance, 
            CSA places primary accountability where it belongs—with the business functions that own 
            and operate the underlying processes.
          </p>
          <p className="leading-relaxed text-brandNavy dark:text-white/70">
            When executed effectively, CSA delivers continuous risk intelligence that enables 
            proactive identification of control gaps, emerging risks, and process vulnerabilities 
            before they manifest as control failures, regulatory findings, or operational disruptions.
          </p>
        </div>

        {/* Why CSA Matters Now */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white">
            Why CSA Matters Now
          </h3>
          <p className="mb-6 leading-relaxed text-brandNavy dark:text-white/70">
            The contemporary business landscape has fundamentally altered the risk calculus for 
            organizations worldwide. Regulatory bodies across jurisdictions—from the SEC and FCA 
            to SEBI and APRA—increasingly expect demonstrable evidence of first-line risk ownership. 
            Simultaneously, Boards and Audit Committees demand granular visibility into control 
            effectiveness across complex, geographically dispersed operations.
          </p>

          {/* Key Points Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 transition-shadow border rounded-lg shadow-sm bg-surfaceLight dark:bg-surfaceDark border-slate-200 hover:shadow-md">
              <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-brandAccent">Regulatory Expectations</h4>
              <p className="text-brandNavy dark:text-white/70">
                Global regulators mandate evidence of active first-line engagement in risk and 
                control assessment, moving beyond reliance on second and third-line assurance alone.
              </p>
            </div>

            <div className="p-6 transition-shadow border rounded-lg shadow-sm bg-surfaceLight dark:bg-surfaceDark border-slate-200 hover:shadow-md">
              <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-brandAccent">Operational Resilience</h4>
              <p className="text-brandNavy dark:text-white/70">
                Organizations must demonstrate robust control environments that can withstand 
                operational shocks, cyber threats, supply chain disruptions, and market volatility.
              </p>
            </div>

            <div className="p-6 transition-shadow border rounded-lg shadow-sm bg-surfaceLight dark:bg-surfaceDark border-slate-200 hover:shadow-md">
              <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-brandAccent">Enterprise Risk Culture</h4>
              <p className="text-brandNavy dark:text-white/70">
                Sustainable risk management requires embedding risk awareness into daily 
                operations—CSA is the mechanism through which this cultural transformation occurs.
              </p>
            </div>

            <div className="p-6 transition-shadow border rounded-lg shadow-sm bg-surfaceLight dark:bg-surfaceDark border-slate-200 hover:shadow-md">
              <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-brandAccent">Board Governance</h4>
              <p className="text-brandNavy dark:text-white/70">
                Audit Committees require timely, reliable insights into control health across 
                the organization—CSA provides the structured data pipeline to support informed 
                governance oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default StrategicFoundation;