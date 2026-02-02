import React from 'react';
import { FileText } from 'lucide-react';
import rbiaSamplePlanIAImg from "../../assets/images/rbia/rbia-sample-ia.png"

const SampleIAPlan = () => {
  return (
    <section className="py-16 bg-white lg:py-24 dark:bg-surfaceDark">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center font-heading md:text-4xl text-brandDark dark:text-white">
            Our Sample IA Plan
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-700 dark:text-gray-300">
            Our sample plan identifies high-risk areas like revenue and payroll, providing tailored audit programs to strengthen controls, ensure compliance, and others that are based on your business needs.
          </p>
          
          {/* Sample Plan Image - IMAGE 2 */}
          <div className="relative">
            {/* Replace with your actual IA plan image */}
            <img 
              src={rbiaSamplePlanIAImg} 
              alt="Sample Internal Audit Plan" 
              className="w-full h-auto shadow-2xl rounded-xl"
            />
            
            {/* Placeholder if image doesn't exist */}
            {/* <div className="absolute inset-0 flex items-center justify-center border bg-gradient-to-br from-brandLight to-white dark:from-surfaceDark dark:to-bgDark rounded-xl border-borderLight dark:border-borderDark">
              <div className="p-12 text-center">
                <FileText className="w-24 h-24 mx-auto mb-6 text-brandPrimary" />
                <p className="mb-2 text-2xl font-semibold text-brandDark dark:text-white">Sample Internal Audit Plan</p>
                <p className="mb-4 text-gray-600 dark:text-gray-400">Comprehensive Coverage Matrix</p>
                <div className="inline-block px-6 py-3 rounded-lg bg-brandPrimary/10">
                  <p className="text-sm text-brandDark dark:text-white">IMAGE 2: Sample IA Plan</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Replace with /images/rbia-sample-ia-plan.jpg</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleIAPlan;