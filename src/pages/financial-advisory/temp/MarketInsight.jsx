import React from 'react';

const MarketInsight = () => {
  const issues = [
    "Geopolitical tensions, economic downturns & financial developments overseas",
    "Evolving regulatory prescriptions",
    "Changing competitive landscape",
    "Market volatility",
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
    <section className="transition-colors duration-300 py-14 md:py-20 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Side: Problem Statement */}
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight font-heading md:text-4xl">
              Why Expert Financial Advisory is <br />
              <span className="text-brandPrimary dark:text-brandGold">More Critical Than Ever</span>
            </h2>
            
            <p className="mb-8 font-sans text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Expert corporate financial advisory has become increasingly important due to the complex and rapidly 
              changing business environment, both in the domestic & global fronts. 
            </p>

            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider uppercase font-heading text-brandPrimary dark:text-brandAccent">
                Major Challenges Today
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {strategies.map((item, index) => (
              <div 
                key={index} 
                className="p-6 transition-all border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:shadow-lg dark:hover:border-brandGold/40"
              >
                <h4 className="mb-2 font-bold font-heading text-brandPrimary dark:text-brandGold">{item.title}</h4>
                <p className="font-sans text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
            
            <div className="p-6 mt-4 border sm:col-span-2 bg-brandPrimary/5 dark:bg-brandPrimary/20 border-brandPrimary/20 dark:border-brandPrimary/30 rounded-xl">
              <p className="font-sans italic font-medium text-center text-brandPrimary dark:text-brandAccent">
                "Business enterprises that leverage expert advisories effectively are better positioned to thrive in a rapidly evolving landscape."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketInsight;