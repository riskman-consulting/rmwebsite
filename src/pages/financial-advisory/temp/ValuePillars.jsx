import React from 'react';

const ValuePillars = () => {
  const pillars = [
    {
      title: "Industry Expertise",
      desc: "Deep knowledge across food & beverage, power, steel forging, and other key sectors.",
    },
    {
      title: "Independent Assessment",
      desc: "Unbiased credit and business evaluations to identify positives and mitigate negatives.",
    },
    {
      title: "Customised Strategy",
      desc: "Tailored financial roadmaps designed for specific corporate goals and capex requirements.",
    },
    {
      title: "End-to-End Advisory",
      desc: "Full-lifecycle support from initial feasibility studies to final implementation.",
    },
    {
      title: "Strong Ring Fencing",
      desc: "Innovative debt management structures that protect assets and optimize security.",
    }
  ];

  return (
    <section className="py-20 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 lg:px-20">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
            The Foundation of Our <span className="text-brandPrimary dark:text-brandGold">Advisory Excellence</span>
          </h2>
          <p className="font-sans text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            In the business journey of exploring resources and funding options at optimum cost, evaluating M&A and divestment strategies, or trying out expansions—our team delivers most meaningful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="p-8 transition-all duration-300 border border-borderLight dark:border-borderDark rounded-xl hover:shadow-2xl hover:border-brandPrimary/30 dark:hover:border-brandGold/30 bg-bgLight dark:bg-bgDark group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors duration-300 rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandPrimary dark:group-hover:bg-brandGold">
                <span className="text-xl font-bold text-brandPrimary dark:text-brandGold group-hover:text-white dark:group-hover:text-brandDark">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                {pillar.title}
              </h3>
              <p className="font-sans leading-relaxed text-gray-600 dark:text-gray-400">
                {pillar.desc}
              </p>
            </div>
          ))}
          
          {/* Summary Box */}
          <div className="flex flex-col justify-center p-8 border border-transparent bg-brandNavy dark:bg-brandPrimary rounded-xl">
             <h3 className="mb-4 text-xl italic font-bold text-white font-heading">
               "Expert corporate financial advisory is more critical than ever".
             </h3>
             <p className="font-sans text-sm text-white/80">
               Leveraging expert advisories effectively allows business enterprises to thrive in a rapidly evolving domestic and global landscape.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;