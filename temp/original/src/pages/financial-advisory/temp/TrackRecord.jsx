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
    <section className="py-24 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stats/Years Experience */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-brandAccent/10 rounded-full blur-2xl"></div>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-6">
                Our <span className="text-brandPrimary dark:text-brandGold">Accomplishments</span>
              </h2>
              <p className="font-sans text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                RiskMan, over the last five years, has successfully completed multiple financial advisory assignments and received commendations from counterparties. 
              </p>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-brandPrimary dark:text-brandGold">5+</span>
                <span className="text-lg font-heading font-bold text-brandDark dark:text-white uppercase tracking-wider">Years of Excellence</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Delivering quality financial guidance since inception. </p>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="lg:col-span-7">
            <div className="bg-bgLight dark:bg-bgDark p-8 md:p-12 rounded-3xl border border-borderLight dark:border-borderDark">
              <h3 className="font-heading text-xl font-bold text-brandDark dark:text-white mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10l-2 2m2-2l2 2m7-2l2 2m-2-2l-2 2" />
                </svg>
                Diverse Sector Expertise 
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sectors.map((sector, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-xl text-center group hover:border-brandPrimary dark:hover:border-brandGold transition-all duration-300"
                  >
                    <p className="font-sans font-semibold text-brandDark dark:text-gray-200 group-hover:text-brandPrimary dark:group-hover:text-brandGold transition-colors">
                      {sector}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-borderLight dark:border-borderDark">
                <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed italic">
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