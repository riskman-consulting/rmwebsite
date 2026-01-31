import React from 'react';

const ValuePillars = () => {
  const pillars = [
    {
      title: "Industry Expertise",
      desc: "Deep knowledge across food & beverage, power, steel forging, and other key sectors[cite: 5, 35].",
    },
    {
      title: "Independent Assessment",
      desc: "Unbiased credit and business evaluations to identify positives and mitigate negatives[cite: 6, 14, 18].",
    },
    {
      title: "Customised Strategy",
      desc: "Tailored financial roadmaps designed for specific corporate goals and capex requirements[cite: 7, 26].",
    },
    {
      title: "End-to-End Advisory",
      desc: "Full-lifecycle support from initial feasibility studies to final implementation[cite: 8, 26, 43].",
    },
    {
      title: "Strong Ring Fencing",
      desc: "Innovative debt management structures that protect assets and optimize security[cite: 9, 21, 22].",
    }
  ];

  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-300">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brandDark dark:text-white mb-6">
            The Foundation of Our <span className="text-brandPrimary dark:text-brandGold">Advisory Excellence</span>
          </h2>
          <p className="font-sans text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            In the business journey of exploring resources and funding options at optimum cost, evaluating M&A and divestment strategies, or trying out expansions—our team delivers most meaningful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="p-8 border border-borderLight dark:border-borderDark rounded-xl hover:shadow-2xl hover:border-brandPrimary/30 dark:hover:border-brandGold/30 transition-all duration-300 bg-bgLight dark:bg-bgDark group"
            >
              <div className="w-12 h-12 bg-brandPrimary/10 dark:bg-brandGold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brandPrimary dark:group-hover:bg-brandGold transition-colors duration-300">
                <span className="text-brandPrimary dark:text-brandGold group-hover:text-white dark:group-hover:text-brandDark font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-brandDark dark:text-white mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
          
          {/* Summary Box */}
          <div className="p-8 bg-brandNavy dark:bg-brandPrimary rounded-xl flex flex-col justify-center border border-transparent">
             <h3 className="font-heading text-xl font-bold text-white mb-4 italic">
               "Expert corporate financial advisory is more critical than ever"[cite: 28].
             </h3>
             <p className="text-white/80 font-sans text-sm">
               Leveraging expert advisories effectively allows business enterprises to thrive in a rapidly evolving domestic and global landscape[cite: 29, 32].
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;