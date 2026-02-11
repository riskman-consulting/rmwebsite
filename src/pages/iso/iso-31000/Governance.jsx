import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Governance = () => {
  return (
    <section id="governance" className="py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute w-64 h-64 rounded-full -top-10 -left-10 bg-brandGold/20 blur-3xl"></div>
            <img 
              src="https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/ebac375bad404fbfa7c671b111515ac4.jpg" 
              alt="Corporate Governance" 
              className="relative z-10 w-full shadow-2xl rounded-2xl"
            />
            <div className="absolute z-20 max-w-xs p-6 border shadow-xl -bottom-6 -right-6 bg-brandDark rounded-xl border-brandGold/30">
              <p className="mb-1 text-4xl font-bold text-brandGold">100%</p>
              <p className="text-sm text-white">Commitment to organizational resilience and stability.</p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandGold">Value Proposition</h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Why Risk Governance Matters
            </h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              By adopting a formal risk framework, organizations can reduce the frequency of crises and improve their overall decision-making accuracy.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1 text-brandGold shrink-0" />
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Improved Governance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ensures that risk management is integrated into all organizational activities and strategic planning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1 text-brandGold shrink-0" />
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Increased Success Rate</h4>
                  <p className="text-gray-600 dark:text-gray-400">Minimizes negative surprises and improves the likelihood of achieving your core business goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1 text-brandGold shrink-0" />
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Enhanced Resilience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Prepares the organization to respond effectively to rapid changes and market disruptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
