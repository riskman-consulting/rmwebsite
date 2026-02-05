// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent Shapes */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-72 h-72 bg-brandGold/10 blur-3xl"></div>

      <div className="container relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandAccent/10 border-brandAccent/30">
              <svg className="w-4 h-4 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white">ISO 27001 Certification Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
              Elevate Security with{' '}
              <span className="text-brandAccent">ISO 27001</span>{' '}
              Excellence
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 sm:text-xl">
              Strengthen your security posture, protect critical assets, and build stakeholder trust through our expert-led ISO 27001 readiness and certification frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link 
                to="/iso-overview" 
                className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-white rounded-lg shadow-lg group text-brandPrimary hover:bg-brandLight hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                View ISO Overview
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold transition-all duration-300 rounded-lg shadow-lg group bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                Get ISO 27001 Consultation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;