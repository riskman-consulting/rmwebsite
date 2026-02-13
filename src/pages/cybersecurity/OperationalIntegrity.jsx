// OperationalIntegrity.jsx
import React from 'react';

const integrityFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Professional Independence",
    description: "Our auditors remain free from bias or conflict of interest to provide unbiased judgments."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Executive Transparency",
    description: "We deliver clear, precise reports and executive summaries translated into relevant business risks."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Confidentiality",
    description: "All audit data and findings are protected through strict NDAs and secure communication channels."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quality Control",
    description: "Multi-level reviews ensure the completeness, accuracy, and integrity of all findings and recommendations."
  }
];

const OperationalIntegrity = () => {
  return (
    

     <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 lg:px-20 mx-auto text-center">
          <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Trust & Governance</h2>
          <h2 className="mb-16 text-4xl font-bold font-heading text-brandDark">Operational Integrity and Governance</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Professional Independence", desc: "Our auditors remain free from bias or conflict of interest to provide unbiased judgments." },
              { title: "Executive Transparency", desc: "We deliver clear, precise reports and executive summaries translated into relevant business risks." },
              { title: "Confidentiality", desc: "All audit data and findings are protected through strict NDAs and secure communication channels." },
              { title: "Quality Control", desc: "Multi-level reviews ensure the completeness, accuracy, and integrity of all findings and recommendations." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 transition-all border border-gray-100 rounded-xl bg-bgLight hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl font-bold text-white rounded-full shadow-lg bg-brandPrimary shadow-brandPrimary/30">
                  {idx + 1}
                </div>
                <h3 className="mb-4 text-xl font-bold text-brandDark">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default OperationalIntegrity;