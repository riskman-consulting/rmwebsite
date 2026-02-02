
import React from 'react';

const RBIALandscape = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark py-20 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="container">
        <div className="relative bg-white dark:bg-surfaceDark rounded-[2rem] shadow-2xl overflow-hidden border border-borderLight dark:border-borderDark">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-brandAccent"></span>
                <span className="text-brandPrimary dark:text-brandAccent text-sm font-bold uppercase tracking-widest">Industry Focus</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-brandDark dark:text-white leading-tight">
                Strategic Assessment of the <span className="text-brandPrimary dark:text-brandGold">Media Industry</span> Risk Landscape
              </h2>

              <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                PTI’s mission relies on trust and speed, facing risks like
                cybersecurity and editorial integrity. Risk-Based Internal Audit
                (RBIA) provides proactive, independent assurance across financial
                and operational areas. This focus protects revenue and strengthens
                governance, aligning audit efforts with PTI’s unique risk landscape
                and strategic objectives.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-bgLight dark:bg-brandNavy/20 border border-borderLight dark:border-borderDark">
                  <div className="w-10 h-10 rounded-lg bg-brandAccent flex items-center justify-center text-brandDark shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark dark:text-white">Editorial Integrity</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ensuring truth and accuracy in reporting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-bgLight dark:bg-brandNavy/20 border border-borderLight dark:border-borderDark">
                  <div className="w-10 h-10 rounded-lg bg-brandPrimary flex items-center justify-center text-brandAccent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark dark:text-white">Cyber Resilience</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Protecting digital assets and infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop" 
                alt="Media newsroom and professional working environment" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-transparent to-white dark:to-surfaceDark lg:to-transparent" />
              <div className="absolute inset-0 bg-brandPrimary/20 mix-blend-multiply" />
              
              {/* Floating Quote/Stat */}
              <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-64 p-6 bg-brandAccent rounded-2xl shadow-xl transform lg:rotate-3">
                <p className="text-brandDark font-black text-2xl tracking-tighter">TRUST & SPEED</p>
                <p className="text-brandDark/80 text-xs font-bold uppercase tracking-widest mt-1">Core Media Pillars</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIALandscape;
