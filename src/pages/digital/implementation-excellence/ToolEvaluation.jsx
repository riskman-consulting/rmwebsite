import React from 'react';
import { Search, Calculator, ClipboardCheck, Plug } from 'lucide-react';

const ToolEvaluation = () => {
    return (

<section className="py-16 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl">
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
                icon: Search,
                gradient: "from-brandPrimary to-brandGold"
              },
              { 
                title: "Cost-Benefit & POC", 
                desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.",
                icon: Calculator,
                gradient: "from-brandPrimary to-brandGold"
              },
              { 
                title: "Vendor Scorecarding", 
                desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.",
                icon: ClipboardCheck,
                gradient: "from-brandPrimary to-brandGold"
              },
              { 
                title: "Integration Feasibility", 
                desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.",
                icon: Plug,
                gradient: "from-brandPrimary to-brandGold"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative h-full p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Accent on Hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                  <item.icon size={24} />
                </div>
                
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