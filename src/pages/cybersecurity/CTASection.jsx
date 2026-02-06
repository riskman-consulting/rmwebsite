// CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden md:py-32 bg-surfaceLight dark:bg-surfaceDark">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-brandPrimary/20 blur-3xl animate-pulse"></div>
          <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-brandAccent/20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 overflow-hidden shadow-2xl bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark dark:from-brandNavy dark:to-brandDark rounded-3xl lg:p-16">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full shadow-2xl bg-brandAccent">
                <svg className="w-12 h-12 text-brandDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
                Elevate Your Security Strategy
              </h2>

              {/* Description */}
              <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-gray-200">
                RiskMan provides the independent oversight and technical expertise needed to protect your mission-critical infrastructure from cyber threats.
              </p>

              {/* CTA Button */}
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 shadow-2xl group bg-brandAccent text-brandDark rounded-xl hover:bg-brandGold hover:shadow-brandAccent/50 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Our Experts Today
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">OWASP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Independent Auditors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;