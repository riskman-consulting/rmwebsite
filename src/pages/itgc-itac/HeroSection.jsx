import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 rounded-full w-72 h-72 md:w-96 md:h-96 bg-brandAccent filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 md:w-96 md:h-96 bg-brandGold filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
            Comprehensive IT Auditing with ITGC & ITAC Excellence
          </h1>
          <p className="mb-10 text-lg leading-relaxed md:text-xl text-white/90">
            Empower your enterprise with expert IT General and Application Controls auditing to mitigate risks, ensure compliance, and drive operational excellence.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href="/services" 
              className="inline-block px-8 py-4 font-semibold transition-all duration-300 transform rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 hover:shadow-2xl"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-brandDark"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;