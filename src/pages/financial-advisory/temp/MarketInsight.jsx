import React from 'react';

const MarketInsight = () => {
  const issues = [
    "Geopolitical tensions, economic downturns & financial developments overseas [cite: 30]",
    "Evolving regulatory prescriptions [cite: 30, 31]",
    "Changing competitive landscape [cite: 30]",
    "Market volatility [cite: 30]",
    "Domestic and global business environmental complexity "
  ];

  const strategies = [
    { 
      title: "Risk Mitigation", 
      desc: "Assessment of risks & suggesting mitigation strategies to handle volatility. " 
    },
    { 
      title: "Strategic Planning", 
      desc: "Framing out long-term business plans with essential 'Plan B' options. " 
    },
    { 
      title: "Market Navigation", 
      desc: "Advising ways to navigate new possibilities and global markets effectively. " 
    },
    { 
      title: "Operational Efficiency", 
      desc: "Optimisation of cost structure and support in boosting employee productivity. " 
    }
  ];

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Problem Statement */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Why Expert Financial Advisory is <br />
              <span className="text-brandPrimary dark:text-brandGold">More Critical Than Ever [cite: 28]</span>
            </h2>
            
            <p className="font-sans text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Expert corporate financial advisory has become increasingly important due to the complex and rapidly 
              changing business environment, both in the domestic & global fronts. 
            </p>

            <div className="space-y-4">
              <p className="font-heading text-brandPrimary dark:text-brandAccent font-semibold uppercase tracking-wider text-sm">
                Major Challenges Today[cite: 30]:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {issues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-brandGold rounded-full flex-shrink-0"></div>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Our Recommended Strategies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strategies.map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-xl hover:shadow-lg dark:hover:border-brandGold/40 transition-all"
              >
                <h4 className="font-heading text-brandPrimary dark:text-brandGold font-bold mb-2">{item.title}</h4>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
            
            <div className="sm:col-span-2 mt-4 p-6 bg-brandPrimary/5 dark:bg-brandPrimary/20 border border-brandPrimary/20 dark:border-brandPrimary/30 rounded-xl">
              <p className="font-sans text-brandPrimary dark:text-brandAccent italic text-center font-medium">
                "Business enterprises that leverage expert advisories effectively are better positioned to thrive in a rapidly evolving landscape. [cite: 32]"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketInsight;