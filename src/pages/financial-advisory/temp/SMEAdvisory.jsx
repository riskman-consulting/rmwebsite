import React from 'react';

const SMEAdvisory = () => {
  const benefits = [
    "Guidance on organic growth and business expansion",
    "Efficient financial planning & optimising cost structure",
    "Budgeting, forecasting, and tax planning",
    "Financial reporting and digital applications to optimise operation",
    "Risk management and varied compliance support"
  ];

  return (
    <section className="py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-12">
        <div className="overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl border-borderLight dark:border-borderDark">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Visual/Heading Area */}
            <div className="flex flex-col justify-center p-10 lg:w-1/3 bg-brandNavy dark:bg-brandPrimary lg:p-16">
              <h2 className="mb-6 text-3xl font-bold text-white font-heading md:text-4xl">
                Support for <span className="text-brandAccent">Small Businesses</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-brandLight/80">
                Financial advisory services are highly beneficial for small businesses as well. We provide the expertise needed to navigate both challenges and opportunities.
              </p>
            </div>

            {/* Right Column: Benefits Grid */}
            <div className="p-10 lg:w-2/3 lg:p-16">
              <h3 className="mb-8 text-2xl font-bold font-heading text-brandDark dark:text-white">
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
                    <p className="font-sans leading-snug text-gray-600 dark:text-gray-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 mt-12 border-l-4 bg-brandAccent/5 border-brandAccent rounded-r-xl">
                <p className="font-sans italic font-medium text-brandDark dark:text-brandAccent">
                  Financial advisors can be a valuable partner for small businesses, providing the guidance needed to run a successful enterprise.
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