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
    // <section className="relative py-20 overflow-hidden md:py-32 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
    //   {/* Decorative Grid */}
    //   <div className="absolute inset-0 opacity-10">
    //     <div className="absolute inset-0" style={{
    //       backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
    //       backgroundSize: '50px 50px'
    //     }}></div>
    //   </div>

    //   {/* Floating Shapes */}
    //   <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-brandAccent/10 blur-3xl animate-pulse"></div>
    //   <div className="absolute w-64 h-64 rounded-full bottom-20 left-20 bg-brandGold/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

    //   <div className="container relative">
    //     {/* Section Header */}
    //     <div className="max-w-3xl mx-auto mb-16 text-center">
    //       <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
    //         Operational Integrity and Governance
    //       </h2>
    //       <p className="text-xl leading-relaxed text-gray-200">
    //         We maintain the highest standards of independence and objectivity to build trust and ensure audit credibility. Our process provides clear communication to those charged with IT governance.
    //       </p>
    //     </div>

    //     {/* Features Grid */}
    //     <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
    //       {integrityFeatures.map((feature, index) => (
    //         <div 
    //           key={index}
    //           className="relative p-8 transition-all duration-300 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 hover:border-brandAccent/50"
    //         >
    //           {/* Glow Effect */}
    //           <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-br from-brandAccent/0 to-brandGold/0 group-hover:from-brandAccent/10 group-hover:to-brandGold/10 rounded-2xl"></div>

    //           <div className="relative">
    //             {/* Icon */}
    //             <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 shadow-xl bg-brandAccent rounded-xl text-brandDark group-hover:scale-110 group-hover:rotate-6">
    //               {feature.icon}
    //             </div>

    //             {/* Title */}
    //             <h3 className="mb-4 text-xl font-bold text-white font-heading">
    //               {feature.title}
    //             </h3>

    //             {/* Description */}
    //             <p className="leading-relaxed text-gray-300">
    //               {feature.description}
    //             </p>

    //             {/* Checkmark */}
    //             <div className="flex items-center gap-2 mt-6 text-brandAccent">
    //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //               </svg>
    //               <span className="text-sm font-semibold">Verified Standard</span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

     <section className="py-24 bg-white">
        <div className="container px-6 mx-auto text-center">
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