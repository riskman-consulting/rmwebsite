import React from 'react';

const StrategicImperative = () => {
  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-brandDark dark:text-white">
            Sustainability & ESG: The Strategic Imperative
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Sustainability is no longer a peripheral concern—it has become a core determinant of enterprise value, 
            competitive resilience, and long-term business viability. Environmental, Social, and Governance (ESG) 
            criteria now fundamentally shape how organizations are evaluated by investors, regulators, customers, 
            and society at large.
          </p>
        </div>

        {/* Evolution Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="mb-8 text-3xl font-bold text-center font-heading text-brandDark dark:text-white">
            The Evolution from Compliance to Value Creation
          </h3>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-700 dark:text-gray-300">
            The ESG landscape has undergone a profound transformation. What began as voluntary corporate social 
            responsibility initiatives has evolved into a sophisticated framework that directly influences capital 
            allocation, operational excellence, and strategic positioning.
          </p>

          {/* Evolution Cards */}
          <div className="space-y-6">
            {/* Compliance Era */}
            <div className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg dark:bg-red-900/30">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                    Compliance Era
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Organizations focused primarily on meeting minimum regulatory requirements, treating ESG 
                    as a risk mitigation exercise with limited strategic integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Integration */}
            <div className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                    Strategy Integration
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Forward-thinking enterprises began embedding sustainability into business strategy, recognizing 
                    the link between ESG performance and operational efficiency, brand value, and stakeholder trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Creation Paradigm */}
            <div className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg dark:bg-green-900/30">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                    Value Creation Paradigm
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Today's leading organizations view ESG as a driver of innovation, market differentiation, 
                    and sustainable competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicImperative;