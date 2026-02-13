

import React from 'react';
import { Activity, FileText } from 'lucide-react';


const BusinessContinuitySection = () => {
  return (
    <section className=" py-14 md:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 lg:px-20 mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
            Business Continuity & Statutory Compliance
            <span className="absolute left-0 w-1/2 h-1 rounded-full -bottom-2 bg-brandGold"></span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-300">
            We align your IT strategy with legal requirements and disaster recovery readiness.
          </p>
        </div>
        
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden shadow-xl h-80 rounded-2xl">
            <img 
              src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/c90ba5a1bb674779960616401e950dd1.jpg"
              alt="Business Continuity" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-brandNavy/30 dark:bg-brandNavy/50"></div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white border-l-4 shadow-md dark:bg-slate-800 rounded-xl border-brandGold">
              <h3 className="flex items-center gap-2 mb-2 text-xl font-bold text-brandNavy dark:text-white">
                <Activity className="text-brandGold" /> Resilience Testing
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Evaluating BCP/DR plans through drill reports and impact analyses.
              </p>
            </div>
            
            <div className="p-6 bg-white border-l-4 shadow-md dark:bg-slate-800 rounded-xl border-brandNavy dark:border-brandPrimary">
              <h3 className="flex items-center gap-2 mb-2 text-xl font-bold text-brandNavy dark:text-white">
                <FileText className="text-brandNavy dark:text-brandPrimary" /> Regulatory Alignment
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Ensuring adherence to industry-specific statutory requirements and exception management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContinuitySection;