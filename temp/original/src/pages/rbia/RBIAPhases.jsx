
import React from 'react';

const RBIAPhases = () => {
  const phases = [
    {
      title: "Phase 1: Scope",
      text: "Conduct interviews with process owners to understand current 'as-is' processes and identify key concern areas. Document processes and validate understanding while preparing comprehensive audit work programs for all specific areas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      ),
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: "Phase 2: Analyze",
      text: "Review processes to identify and source risks, prioritizing them based on likelihood and potential business impact. Evaluate control design for efficiency and effectiveness, benchmarking against leading practices and regulatory standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      color: "bg-brandAccent/20 text-brandGold dark:bg-brandGold/10 dark:text-brandAccent"
    },
    {
      title: "Phase 3: Test and Recommend",
      text: "Determine testing approaches and sample sizes, utilizing data analytics tools for large and complex data sets. Articulate exceptions and deficiencies, quantifying business impact to prioritize critical gaps and weaknesses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
      title: "Phase 4: Design and Implement",
      text: "Formulate remediation action plans and finalize the content of recommendations for senior management discussion. Support recommendations with clear findings and conclusions, ensuring management acceptance of the proposed action plans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      color: "bg-brandPrimary/10 text-brandPrimary dark:bg-brandNavy/40 dark:text-blue-300"
    },
    {
      title: "Phase 5: Sustain",
      text: "Monitor the implementation of recommendations and follow up on action points from previous reports. Ensure long-term value by maintaining a continuous focus on process improvement and real business benefits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    }
  ];

  return (
    <section className="bg-surfaceLight dark:bg-surfaceDark py-20 lg:py-32 transition-colors duration-300 overflow-hidden">
      <div className="container max-w-5xl relative">
        {/* Background decorative text */}
        <div className="absolute top-0 right-0 text-[12rem] font-black text-brandDark/[0.02] dark:text-white/[0.01] leading-none select-none translate-x-1/4 -translate-y-1/4">
          PROCESS
        </div>

        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/30 text-brandPrimary dark:text-brandAccent text-xs font-bold uppercase tracking-widest mb-6">
            Methodology
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-brandDark dark:text-white leading-tight">
            Our Customized <span className="text-brandPrimary dark:text-brandAccent">Approach</span> for Your Needs
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive, field-tested internal audit methodology that ensures high-impact results and long-term sustainability.
          </p>
        </div>

        <div className="grid gap-12">
          {phases.map((phase, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col md:flex-row gap-8 md:gap-12 p-10 rounded-[2.5rem] bg-bgLight dark:bg-brandNavy/10 border border-borderLight dark:border-borderDark hover:shadow-2xl hover:shadow-brandPrimary/10 transition-all duration-500"
            >
              {/* Decorative side number */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-surfaceDark border-4 border-bgLight dark:border-brandNavy text-brandPrimary dark:text-brandAccent font-black shadow-lg">
                {i + 1}
              </div>

              {/* Illustration Icon */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className={`w-24 h-24 rounded-3xl ${phase.color} shadow-inner flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 relative`}>
                  {/* Subtle pulsing background behind icon */}
                  <div className="absolute inset-0 bg-current opacity-5 rounded-3xl animate-ping scale-75" />
                  {phase.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="md:hidden w-8 h-8 rounded-full bg-brandAccent text-brandDark font-bold flex items-center justify-center text-sm">
                    {i+1}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {phase.text}
                </p>
              </div>

              {/* Visual Flow Connector (Desktop only) */}
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute bottom-[-4rem] left-[6.5rem] w-0.5 h-16 bg-gradient-to-b from-brandAccent/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Closing CTA Box */}
        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-brandPrimary to-brandNavy relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to start Phase 1?</h3>
              <p className="text-white/80 text-lg">Schedule your initial discovery session with our senior risk partners today.</p>
            </div>
            <button className="flex-shrink-0 px-10 py-5 rounded-2xl bg-brandAccent text-brandDark font-black text-lg hover:bg-brandGold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brandAccent/20">
              Book Discovery Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIAPhases;
