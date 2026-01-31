import React from 'react';

const SMEAdvisory = () => {
  const benefits = [
    "Guidance on organic growth and business expansion [cite: 58]",
    "Efficient financial planning & optimising cost structure [cite: 58]",
    "Budgeting, forecasting, and tax planning [cite: 58]",
    "Financial reporting and digital applications to optimise operation [cite: 58]",
    "Risk management and varied compliance support [cite: 58]"
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container">
        <div className="bg-surfaceLight dark:bg-surfaceDark rounded-3xl border border-borderLight dark:border-borderDark overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Visual/Heading Area */}
            <div className="lg:w-1/3 bg-brandNavy dark:bg-brandPrimary p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Support for <span className="text-brandAccent">Small Businesses</span>
              </h2>
              <p className="font-sans text-brandLight/80 text-lg leading-relaxed">
                Financial advisory services are highly beneficial for small businesses as well[cite: 57]. We provide the expertise needed to navigate both challenges and opportunities[cite: 59].
              </p>
            </div>

            {/* Right Column: Benefits Grid */}
            <div className="lg:w-2/3 p-10 lg:p-16">
              <h3 className="font-heading text-2xl font-bold text-brandDark dark:text-white mb-8">
                How We Empower Smaller Entities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 flex-shrink-0 w-5 h-5 bg-brandAccent rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-brandDark" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-sans text-gray-600 dark:text-gray-300 leading-snug">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-brandAccent/5 border-l-4 border-brandAccent rounded-r-xl">
                <p className="font-sans text-brandDark dark:text-brandAccent font-medium italic">
                  Financial advisors can be a valuable partner for small businesses, providing the guidance needed to run a successful enterprise[cite: 59].
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SMEAdvisory;