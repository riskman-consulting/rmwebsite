

import React from 'react';
import { Link } from 'react-router-dom';


const CTASection = () => {

  return (
    <section className="relative py-14  md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/33f3e101f1c2421da1179fdd43b43aee.jpg"
          alt="Partnership" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandNavy/90 dark:bg-brandDark/95"></div>
      </div>
      
      <div className="container relative z-10 px-6 lg:px-20 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Optimize Your ITGC and ITAC Risk Strategy
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl text-slate-200">
          Partner with RiskMan to transform technical audits into strategic business advantages.
        </p>
        <Link to="/contact" className="inline-block px-10 py-4 text-lg font-bold transition-all transform rounded-full shadow-2xl bg-brandGold text-brandNavy hover:bg-amber-500 hover:-translate-y-1 shadow-brandGold/30">
          Connect With Us
        </Link>
      </div>
    </section>
  );
};

export default CTASection;