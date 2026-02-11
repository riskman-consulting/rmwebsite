import React from 'react';
import { Search, BarChart2, Scale, ShieldCheck } from 'lucide-react';

const Framework = () => {
  const steps = [
    {
      id: 1,
      title: "Identification",
      description: "Proactively finding and describing risks that could affect your organizational objectives or project outcomes.",
      icon: <Search className="w-6 h-6 text-brandGold" />,
      image: "https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/b51d73d24cde4b5db1aaccac057d67b1.jpg"
    },
    {
      id: 2,
      title: "Analysis",
      description: "Understanding the nature of risk and determining the level of impact and likelihood to prioritize responses.",
      icon: <BarChart2 className="w-6 h-6 text-brandGold" />,
      image: "https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/7be65078716f4a82a828f961c07eaf05.jpg"
    },
    {
      id: 3,
      title: "Evaluation",
      description: "Comparing risk analysis results against your organization's risk criteria to decide which risks require treatment.",
      icon: <Scale className="w-6 h-6 text-brandGold" />,
      image: "https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/29b81b2dccd840039c67a47db7980ac0.jpg"
    },
    {
      id: 4,
      title: "Treatment",
      description: "Selecting and implementing options for addressing risks, such as mitigation, avoidance, or strategic transfer.",
      icon: <ShieldCheck className="w-6 h-6 text-brandGold" />,
      image: "https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/97090b7e3fff4fb18e9d94e454459e02.jpg"
    }
  ];

  return (
    <section id="framework" className="py-24 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandGold">Our Methodology</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            The Risk Management Framework
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Effective risk management involves a systematic approach to identifying threats and converting them into actionable business intelligence for organizations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col overflow-hidden transition-all duration-300 border shadow-lg group bg-surfaceLight dark:bg-surfaceDark rounded-2xl hover:shadow-2xl border-borderLight dark:border-borderDark">
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 z-10 transition-colors bg-brandDark/20 group-hover:bg-brandDark/0"></div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center w-10 h-10 mb-4 transition-colors duration-300 rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandPrimary group-hover:text-white dark:group-hover:bg-brandGold dark:group-hover:text-brandDark">
                  {step.icon}
                </div>
                
                <h4 className="mb-2 text-lg font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                  {step.title}
                </h4>
                
                <p className="flex-1 text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
