import React from 'react';

const ToolEvaluation = () => {
    return (

<section className="bg-white py-14 md:py-20 dark:bg-surfaceDark">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
              Tool Evaluation & <span className="text-brandPrimary dark:text-brandGold">Optimization</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-70">
              Select and refine your digital ecosystem through data-backed assessment and strategic feasibility analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Comparative Tool Evaluation", 
                desc: "Perform side-by-side assessments of digital solutions to identify the best fit for your specific organizational requirements.",
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Cost-Benefit & POC", 
                desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.",
                icon: "💰",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                title: "Vendor Scorecarding", 
                desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.",
                icon: "📊",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                title: "Integration Feasibility", 
                desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.",
                icon: "🔗",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Accent on Hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="mb-4 text-4xl">{item.icon}</div>
                
                <h3 className="mb-3 text-xl font-bold text-brandPrimary dark:text-brandGold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export default ToolEvaluation