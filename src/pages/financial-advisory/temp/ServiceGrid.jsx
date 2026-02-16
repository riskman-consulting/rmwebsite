import React from 'react';

const ServiceCatalog = () => {
  const services = [
    {
      title: "Credit Rating Advisory",
      description: "Independent credit assessment to identify Credit Positives and Negatives. We leverage positives through presentation and improvise negatives like capital structure and market reach to help enterprises get rated higher and access market borrowings.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Business Valuation",
      description: "Due diligence and valuation for businesses, units, or subsidiaries. We use realistic methods considering future free cash flow, unlocked asset value, and dividend yield to assist in organic or inorganic growth journeys.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Debt Structuring",
      description: "Evaluating potential net cash inflows and risk appetite to create market-acceptable debt structures. This ensures alignment of repayment and security with the financial profile, enabling widened lender bases and competitive sourcing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10l-2 2m2-2l2 2m7-2l2 2m-2-2l-2 2" />
        </svg>
      )
    },
    {
      title: "Project Feasibility Study",
      description: "360-degree project evaluation covering technical and market feasibility, optimum cost determination, and realistic debt-equity mix. We provide a roadmap for greenfield or expansion projects while minimizing implementation risk.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
            Our Financial <span className="text-brandPrimary dark:text-brandGold">Advisory Solutions</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-brandAccent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-transform duration-300 bg-brandPrimary/5 dark:bg-brandGold/5 text-brandPrimary dark:text-brandGold rounded-xl group-hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                    {service.title}
                  </h3>
                  <p className="font-sans leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalog;