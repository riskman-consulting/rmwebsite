
import React from 'react';
import { CheckCircle, Server, Users } from 'lucide-react';


const DataIntegritySection = () => {
  const features = [
    {
      title: "Validation Rules",
      description: "Verifying entry-stage validation to prevent duplicate or out-of-range data.",
      icon: <CheckCircle size={20} />
    },
    {
      title: "Interface Security",
      description: "Auditing automated data exchanges and encryption for data in-transit.",
      icon: <Server size={20} />
    },
    {
      title: "Maker-Checker Protocols",
      description: "Confirming segregation of duties for critical transaction processing.",
      icon: <Users size={20} />
    }
  ];

  return (
    <section className=" py-14 md:py-20 overflow-hidden bg-white dark:bg-brandDark">
      <div className="container px-6 lg:px-20 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
                Data Integrity & Input Controls
              </h2>
              <div className="w-20 h-1 mb-6 rounded-full bg-brandGold"></div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                We ensure your business applications process only accurate, authorized, and complete data sets.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 transition-colors border rounded-lg bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 hover:border-brandGold/30">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brandNavy/10 dark:bg-brandGold/10 text-brandNavy dark:text-brandGold">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-brandNavy dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl group">
              <div className="absolute inset-0 z-10 transition-colors duration-500 bg-brandNavy/20 dark:bg-brandNavy/40 group-hover:bg-transparent"></div>
              <img 
                src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/6d48936e5c9a4334bcef020c814b974d.jpg"
                alt="Data Integrity" 
                className="object-cover w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
              />
              {/* Decorative Elements */}
              <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-brandGold/20 blur-3xl"></div>
              <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-brandNavy/20 blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataIntegritySection;