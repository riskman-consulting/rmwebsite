import React from 'react';
import { Shield, TrendingUp, BarChart3 } from 'lucide-react';

const AuditingPlan = () => {
  return (
    <section className="py-16 lg:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center font-heading md:text-4xl text-brandDark dark:text-white">
            Our Risk-based Internal Auditing Plan
          </h2>
          <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-700 dark:text-gray-300">
            The transition from traditional methods to a Risk-Based Internal Audit (RBIA) framework is driven by the need for deeper organizational value and proactive risk management.
          </p>

          {/* Three Column Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Conventional vs Modern */}
            <div className="p-8 transition-shadow duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-brandPrimary/10">
                <Shield className="w-6 h-6 text-brandPrimary" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                Conventional vs. Modern Auditing
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Modern Risk-Based Internal Audit (RBIA) transcends traditional, narrow financial compliance. It proactively addresses emerging complexities like cybersecurity, ethical conduct (ESG), and digital integrity. This integrated approach provides strategic management insights, ensuring audit value increases while operational costs are reduced as the organization matures.
              </p>
            </div>

            {/* Key Drivers */}
            <div className="p-8 transition-shadow duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-brandAccent/10">
                <TrendingUp className="w-6 h-6 text-brandGold" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                Key Drivers for Change
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                PTI faces increasing complexity from global operations and diverse revenues. Rising governance demands and technological shifts, including AI and cybersecurity risks, necessitate a transition to RBIA. This shift ensures proactive management of modern threats while meeting transparency expectations and securing PTI's digital infrastructure.
              </p>
            </div>

            {/* Value vs Cost */}
            <div className="p-8 transition-shadow duration-300 bg-white border shadow-lg dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-brandPrimary/10">
                <BarChart3 className="w-6 h-6 text-brandPrimary" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                Value vs. Cost Dynamics
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                As audit services mature, integrating frameworks with business objectives scales out value and coverage. Growth optimizes controls and prevents losses, reducing audit costs as a percentage of operations. This evolution ensures a higher return on investment, transforming internal audits from a cost center into a strategic asset for the organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditingPlan;