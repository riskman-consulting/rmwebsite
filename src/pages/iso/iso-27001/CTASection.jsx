// CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden md:py-24 bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark dark:from-brandDark dark:via-brandNavy dark:to-brandPrimary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute left-0 -translate-y-1/2 rounded-full top-1/2 w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
      <div className="absolute right-0 -translate-y-1/2 rounded-full top-1/2 w-96 h-96 bg-brandGold/10 blur-3xl"></div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-brandAccent/20">
            <svg className="w-10 h-10 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
            Secure Your Future Today
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 sm:text-xl">
            Ready to achieve global information security standards and enhance your organizational resilience?
          </p>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg shadow-2xl group bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/50 hover:scale-105"
          >
            Contact RiskMan Now
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Proven Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Global Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;