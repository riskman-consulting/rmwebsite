import React from 'react';
import internalAudit from "../../assets/images/rbia/internal-audit.png"

const RBIAFramework = () => {
  return (
    <section className="bg-surfaceLight dark:bg-surfaceDark py-20 lg:py-32 border-t border-borderLight dark:border-borderDark transition-colors duration-300">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT — Visual Card */}
          <div className="relative order-2 lg:order-1">
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-borderLight dark:border-borderDark bg-gradient-to-b from-gray-100 to-gray-200 dark:from-brandNavy/40 dark:to-brandNavy/10 p-8">

              {/* Image Frame */}
              <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
                <img 
                  src={internalAudit}
                  alt="RBIA Framework Diagram"
                  className="w-full h-full   object-cover "
                  loading="lazy"
                />
              </div>

              {/* Badge (matches screenshot position) */}
              <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark flex items-center gap-4">
                
                <div className="w-12 h-12 rounded-full bg-brandPrimary flex items-center justify-center text-brandAccent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                </div>

                <div>
                  <div className="font-bold text-brandDark dark:text-white">
                    Statutory Excellence
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Global Compliance Standards
                  </div>
                </div>

              </div>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brandAccent/10 rounded-full blur-3xl" />
          </div>


          {/* RIGHT — Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-block h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
            
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brandDark dark:text-white leading-tight">
              Risk-Based Internal Audit (RBIA)
              <br className="hidden md:block" /> 
              <span className="text-brandPrimary dark:text-brandGold">
                under Risk Advisory
              </span>
            </h2>

            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-brandPrimary/20 pl-6 italic">
                Our RBIA services provide independent, risk-based assurance and
                practical insights across financial, operational, and compliance
                areas. We act as a value-adding partner to management by protecting
                revenue, strengthening internal controls, and ensuring rigorous
                statutory compliance.
              </p>
            </div>


            {/* Framework Card */}
            <div className="mt-16 bg-brandLight dark:bg-brandNavy/20 p-8 rounded-3xl border border-borderLight dark:border-borderDark relative overflow-hidden group">
              
              <h2 className="font-heading text-2xl font-bold text-brandDark dark:text-white mb-4">
                Our ‘Risk-Based’ Internal Audit Framework
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our Internal Audit services are supported by a consistent,
                substantially field tested ‘risk-based’ methodology derived from our
                experiences on multiple Internal audits and is consistent with the
                International Standards for the Professional Practice of Internal
                Auditing.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RBIAFramework;
