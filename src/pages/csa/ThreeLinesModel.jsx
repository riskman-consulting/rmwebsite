import React from 'react';

export default function ThreeLinesModel() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container max-w-6xl px-6 mx-auto lg:px-12">
        {/* Section Header */}
        <h2 className="mb-8 text-4xl font-bold text-brandDark dark:text-brandAccent">
          CSA Within the Three Lines Model
        </h2>

        <p className="mb-12 text-lg leading-relaxed text-brandNavy dark:text-white/70">
          The IIA's Three Lines Model provides the foundational governance architecture within 
          which effective CSA programs operate. RiskMan's approach ensures that CSA is not merely 
          a compliance activity but a strategic enabler of integrated risk governance across all 
          three lines.
        </p>

        {/* Three Lines Cards */}
        <div className="grid gap-8 mb-12 lg:grid-cols-3">
          {/* First Line */}
          <div className="overflow-hidden transition-shadow shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-xl">
            <div className="p-6 text-white bg-gradient-to-br from-teal-600 to-teal-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">FIRST LINE</span>
              </div>
              <h3 className="text-2xl font-bold">Risk Ownership & Control Accountability</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-brandNavy dark:text-white/70">
                The First Line—comprising business operations, process owners, and frontline 
                management—bears primary responsibility for identifying, assessing, and managing 
                risks within their domains.
              </p>
              <p className="mb-3 text-sm italic font-semibold text-brandDark dark:text-white">
                Through CSA, First Line personnel:
              </p>
              <ul className="space-y-2 text-sm text-brandNavy dark:text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandDark dark:text-brandAccent">✓</span>
                  <span>Document and validate controls operating within their processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandDark dark:text-brandAccent">✓</span>
                  <span>Assess control design adequacy against defined risk appetite and regulatory requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandDark dark:text-brandAccent">✓</span>
                  <span>Evaluate operating effectiveness through structured self-assessment protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandDark dark:text-brandAccent">✓</span>
                  <span>Identify control gaps, exceptions, and emerging risks requiring remediation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandDark dark:text-brandAccent">✓</span>
                  <span>Take ownership of remediation actions within defined timelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Line */}
          <div className="overflow-hidden transition-shadow shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-xl">
            <div className="p-6 text-white bg-gradient-to-br from-slate-700 to-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">SECOND LINE</span>
              </div>
              <h3 className="text-2xl font-bold">Independent Challenge & Oversight</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-brandNavy dark:text-white/70">
                Risk Management and Compliance functions—the Second Line—provide independent 
                challenge, methodology governance, and aggregated risk oversight.
              </p>
              <p className="mb-3 text-sm italic font-semibold text-brandDark dark:text-white">
                Second Line responsibilities in CSA include:
              </p>
              <ul className="space-y-2 text-sm text-brandNavy dark:text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Establishing CSA methodology, standards, and assessment criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Providing independent validation of First Line self-assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Aggregating CSA results for enterprise risk reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Monitoring remediation progress and escalating persistent gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Reporting to executive management and the Board on control health</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Line */}
          <div className="overflow-hidden transition-shadow shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:shadow-xl">
            <div className="p-6 text-white bg-gradient-to-br from-slate-600 to-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">THIRD LINE</span>
              </div>
              <h3 className="text-2xl font-bold">Risk-Based Assurance</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-brandNavy dark:text-white/70">
                Internal Audit—the Third Line—leverages CSA outputs to inform risk-based audit 
                planning, focus assurance efforts on areas of greatest concern, and provide 
                independent validation.
              </p>
              <p className="mb-3 text-sm italic font-semibold text-brandDark dark:text-white">
                A mature CSA program enables Internal Audit to:
              </p>
              <ul className="space-y-2 text-sm text-brandDark dark:text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Refine annual audit plans based on CSA-identified risk hotspots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Reduce duplicative testing by relying on validated First Line assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Focus audit resources on high-risk areas requiring independent verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brandNavy dark:text-brandAccent">✓</span>
                  <span>Provide the Board with integrated assurance perspectives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Governance Alignment Callout */}
        <div className="p-8 border-l-4 border-yellow-500 rounded-r-lg shadow-md bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-brandDark/10 dark:to-brandDark/20">
          <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">Governance Alignment</h3>
          <p className="italic leading-relaxed text-brandPrimary dark:text-white/70">
            RiskMan's CSA methodology ensures seamless integration across all three lines, creating 
            a unified control assurance ecosystem that satisfies regulatory expectations and Board 
            governance requirements.
          </p>
        </div>
      </div>
    </section>
  );
}


// import React, { useState } from "react";
// import ThreeLinesCSADiagram from "./ThreeLinesCSADiagram";
// import InfoPanel from "./InfoPanel";

// export default function ThreeLinesCSASection() {
//   const [selectedZone, setSelectedZone] = useState(null);

//   return (
//     <section className="py-12 bg-white dark:bg-slate-900">
//       <div className="container px-6 mx-auto">
//         <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
//           Visual Framework: Three Lines Model
//         </h2>

//         <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-start">
//           {/* Diagram */}
//           <ThreeLinesCSADiagram
//             activeZone={selectedZone}
//             onZoneClick={setSelectedZone}
//           />

//           {/* Info Panel */}
//           <InfoPanel
//             selectedZone={selectedZone}
//             onClose={() => setSelectedZone(null)}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
