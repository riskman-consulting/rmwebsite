import React from 'react';
import { Target, BarChart3, FileText, Users, TrendingUp } from 'lucide-react';

const CustomizedApproach = () => {
  const phases = [
    {
      number: 1,
      title: "Scope",
      description: "Conduct interviews with process owners to understand current \"as-is\" processes and identify key concern areas. Document processes and validate understanding while preparing comprehensive audit work programs for all specific areas.",
      icon: Target
    },
    {
      number: 2,
      title: "Analyze",
      description: "Review processes to identify and source risks, prioritizing them based on likelihood and potential business impact. Evaluate control design for efficiency and effectiveness, benchmarking against leading practices and regulatory standards.",
      icon: BarChart3
    },
    {
      number: 3,
      title: "Test and Recommend",
      description: "Determine testing approaches and sample sizes, utilizing data analytics tools for large and complex data sets. Articulate exceptions and deficiencies, quantifying business impact to prioritize critical gaps and weaknesses.",
      icon: FileText
    },
    {
      number: 4,
      title: "Design and Implement",
      description: "Formulate remediation action plans and finalize the content of recommendations for senior management discussion. Support recommendations with clear findings and conclusions, ensuring management acceptance of the proposed action plans.",
      icon: Users
    },
    {
      number: 5,
      title: "Sustain",
      description: "Monitor the implementation of recommendations and follow up on action points from previous reports. Ensure long-term value by maintaining a continuous focus on process improvement and real business benefits.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center font-heading md:text-4xl text-brandDark dark:text-white">
            Our Customized Approach for Your Needs
          </h2>
          <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-700 dark:text-gray-300">
            This approach provides a tailored methodology to evaluate risks and enhance operational effectiveness across your organization's unique landscape.
          </p>

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div 
                  key={index}
                  className="p-8 transition-shadow duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy rounded-xl">
                        {phase.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-brandAccent" />
                        <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-white">
                          Phase {phase.number}: {phase.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedApproach;