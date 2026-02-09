import React from 'react';
import { CheckCircle } from 'lucide-react';

import businessImg from "../../../assets/images/digital/business-process-re-engineering.jpg"


const BusinessProcessReengineering = () => {
    return (
 <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="order-2 lg:w-1/2 lg:order-1">
              <img 
                src={businessImg}
                alt="Business Process Re-engineering" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 lg:w-1/2 lg:order-2">
              <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-brandLight text-brandPrimary">
                Efficiency First
              </div>
              <h2 className="mb-6 text-2xl md:text-3xl text-brandDark dark:text-brandAccent">Business Process Re-engineering</h2>
              <p className="mb-8 text-lg text-brandNavy dark:text-white/70">
                Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations.
              </p>

              <div className="space-y-6">
                {[
                  { title: "AS-IS/TO-BE Workflows", desc: "Map current state processes and design optimized future-state models to drive significant operational improvements." },
                  { title: "Simplification & Automation", desc: "Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output." },
                  { title: "Root Cause Analysis", desc: "Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations." },
                  { title: "Process Documentation", desc: "Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-brandAccent" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-brandNavy dark:text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default BusinessProcessReengineering