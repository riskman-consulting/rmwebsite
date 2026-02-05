import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden text-white md:py-20 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandGold filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl">
            Optimize Your ITGC and ITAC Risk Strategy
          </h2>
          <p className="mb-10 text-lg leading-relaxed md:text-xl text-white/90">
            Partner with RiskMan to transform technical audits into strategic business advantages.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300 transform rounded-lg shadow-2xl bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 group"
          >
            Connect With Us
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;