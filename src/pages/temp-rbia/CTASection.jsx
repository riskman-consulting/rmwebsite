import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brandAccent via-brandGold to-brandAccent">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl text-brandDark">
            Ready to Strengthen Your Governance?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-brandDark/80">
            Partner with us to implement a risk-based audit plan that protects revenue and optimizes your internal controls effectively.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-brandDark hover:bg-brandNavy hover:shadow-xl hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;