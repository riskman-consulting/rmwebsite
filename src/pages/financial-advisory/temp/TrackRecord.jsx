import React from 'react';

const TrackRecord = () => {
  const sectors = [
    "Food & Beverage",
    "Power",
    "Construction",
    "Steel Forging",
    "Retail",
    "Footwear"
  ];

  return (
    <section className="py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 lg:px-12">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Stats/Years Experience */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute w-32 h-32 rounded-full -top-10 -left-10 bg-brandAccent/10 blur-2xl"></div>
              <h2 className="mb-6 text-3xl font-extrabold font-heading md:text-4xl text-brandDark dark:text-white">
                Our <span className="text-brandPrimary dark:text-brandGold">Accomplishments</span>
              </h2>
              <p className="mb-8 font-sans text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                RiskMan, over the last five years, has successfully completed multiple financial advisory assignments and received commendations from counterparties. 
              </p>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-brandPrimary dark:text-brandGold">5+</span>
                <span className="text-lg font-bold tracking-wider uppercase font-heading text-brandDark dark:text-white">Years of Excellence</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Delivering quality financial guidance since inception. </p>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="lg:col-span-7">
            <div className="p-8 border bg-bgLight dark:bg-bgDark md:p-12 rounded-3xl border-borderLight dark:border-borderDark">
              <h3 className="flex items-center gap-3 mb-8 text-xl font-bold font-heading text-brandDark dark:text-white">
                <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10l-2 2m2-2l2 2m7-2l2 2m-2-2l-2 2" />
                </svg>
                Diverse Sector Expertise 
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {sectors.map((sector, index) => (
                  <div 
                    key={index} 
                    className="p-4 text-center transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl group hover:border-brandPrimary dark:hover:border-brandGold"
                  >
                    <p className="font-sans font-semibold transition-colors text-brandDark dark:text-gray-200 group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                      {sector}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8 mt-10 border-t border-borderLight dark:border-borderDark">
                <p className="font-sans italic leading-relaxed text-gray-600 dark:text-gray-400">
                  Assignments encompassed Credit Rating Advisory, Business Valuation, Project Feasibility Report Compilation, and Debt Structuring. 
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrackRecord;