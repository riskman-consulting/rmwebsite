import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigator=useNavigate();
  return (
    <section className=" py-14 md:py-20 bg-brandNavy dark:bg-brandDark">
      <div className="container px-6 lg:px-20">
        <div className="relative p-8 overflow-hidden text-center shadow-2xl bg-brandPrimary dark:bg-white/5 rounded-2xl md:p-16">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 rounded-full bg-brandGold/10 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">
              Ready to Secure Your Compliance Future?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-blue-100 dark:text-gray-300">
              Achieve full PCI DSS validation with RiskMan's expert guidance and technical implementation.
            </p>
            
            <button onClick={()=>navigator("/contact")} className="flex items-center justify-center gap-2 px-8 py-4 mx-auto text-lg font-bold transition-all rounded-lg shadow-lg bg-brandGold text-brandDark hover:bg-white hover:text-brandPrimary">
              Begin Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
