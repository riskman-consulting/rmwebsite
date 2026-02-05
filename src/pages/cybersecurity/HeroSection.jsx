// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brandDark dark:bg-bgDark overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,192,0,0.03) 2px, rgba(255,192,0,0.03) 4px)`,
          }}></div>
        </div>
      </div>

      {/* Diagonal Overlay */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path d="M0,400 L1200,200 L1200,800 L0,800 Z" fill="rgba(255,192,0,0.05)" />
          <path d="M0,500 L1200,300 L1200,800 L0,800 Z" fill="rgba(0,64,128,0.1)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-4 h-4 rounded-full top-20 right-20 bg-brandAccent animate-ping"></div>
      <div className="absolute w-3 h-3 rounded-full top-40 right-40 bg-brandGold animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-5 h-5 rounded-full bottom-32 left-32 bg-brandAccent/50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Security Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 mb-8 border rounded-full bg-brandAccent/10 backdrop-blur-sm border-brandAccent/30">
            <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold tracking-wide text-white">ELITE CYBERSECURITY SERVICES</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl font-heading">
            Empowering{' '}
            <span className="relative inline-block">
              <span className="text-brandAccent">Resilience</span>
              <svg className="absolute left-0 w-full -bottom-2" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-brandAccent"/>
              </svg>
            </span>
            {' '}Through Proactive Defense
          </h1>

          {/* Description */}
          <p className="max-w-3xl mb-10 text-xl leading-relaxed text-gray-200">
            RiskMan delivers standardized, rigorous cybersecurity audits to detect vulnerabilities, ensure regulatory compliance, and strengthen your organization's overall security posture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-12 sm:flex-row">
            <Link 
              to="/services" 
              className="relative inline-flex items-center justify-center gap-3 px-8 py-5 overflow-hidden text-lg font-bold transition-all duration-300 rounded-lg shadow-2xl group bg-brandAccent text-brandDark hover:scale-105 hover:shadow-brandAccent/50"
            >
              <span className="relative z-10">Service Inquiry</span>
              <svg className="relative z-10 w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-brandGold group-hover:scale-x-100"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg group hover:bg-white hover:text-brandDark"
            >
              Contact RiskMan
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '500+', label: 'Audits Completed' },
              { value: '99.9%', label: 'Detection Rate' },
              { value: '24/7', label: 'Threat Monitoring' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-brandAccent">{stat.value}</div>
                <div className="text-sm font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;