import React from 'react';
import { Activity, CheckCircle } from 'lucide-react';

const FraudSection = () => {
  const fraudImage = "https://public.youware.com/users-website-assets/prod/9ff22b8d-6a23-4340-a80f-898c8b5c261b/a2c5f9ff022442b99be18037b98347f4";

  return (
    <section className="py-14 lg:py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="relative lg:w-1/2 group">
            <div className="absolute transition-transform transform -inset-4 bg-brandGold/20 rounded-2xl rotate-3 group-hover:rotate-2"></div>
            <img 
              src={fraudImage} 
              alt="Corporate Fraud Detection" 
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3] transform transition-transform group-hover:scale-[1.01]"
            />
            <div className="absolute hidden max-w-xs p-6 border-l-4 rounded-lg shadow-xl bottom-8 left-8 bg-surfaceLight dark:bg-surfaceDark border-brandGold md:block">
              <div className="flex items-center mb-2 space-x-3">
                <Activity className="text-brandGold" />
                <span className="font-bold text-brandNavy dark:text-white">Fraud Detection</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Uncovering financial irregularities with precision.</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4 space-x-3">
              <div className="p-2 rounded-lg bg-brandNavy/10 dark:bg-brandGold/10">
                <Activity className="text-brandNavy dark:text-brandGold" size={24} />
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-brandGold">Financial Integrity</h3>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandNavy dark:text-white">
              Corporate Fraud and Misconduct Detection
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              We deploy advanced methodologies to uncover financial irregularities and unethical behavior that threaten your operational stability.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Forensic Accounting", desc: "Detailed examination of financial records to trace misappropriated funds and identify embezzlement patterns." },
                { title: "Whistleblower Response", desc: "Independent investigation of internal allegations to ensure transparency while protecting organizational reputation." },
                { title: "Asset Tracing", desc: "Global capabilities to locate and recover diverted assets through meticulous transaction mapping and digital footprints." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 space-x-4 transition-colors border border-transparent rounded-lg hover:bg-white dark:hover:bg-surfaceDark hover:border-borderLight dark:hover:border-borderDark">
                  <div className="mt-1 min-w-[24px]">
                    <CheckCircle className="text-brandGold" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-brandNavy dark:text-white">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudSection;
