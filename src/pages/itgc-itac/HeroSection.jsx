import React from 'react';
import bg from "../../assets/images/itac/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-brandDark overflow-hidden">
      
      {/* 1. VISUAL LAYER (RIGHT SIDE) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
        <div className="relative h-full w-full">
          <img 
            src={bg} 
            alt="IT Auditing Hero" 
            className="w-full h-full object-cover opacity-50 lg:opacity-80" 
          />
          {/* Transition Gradient - Gaps ko fill karne ke liye */}
          <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        {/* Accent Glows */}
        <div className="absolute top-1/4 -left-12 w-80 h-80 bg-brandAccent/10 blur-[100px] rounded-full" />
      </div>

      {/* 3. CONTENT AREA */}
      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          {/* Top Label Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded bg-brandAccent/10 border border-brandAccent/20">
             <div className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
             <span className="text-brandAccent text-[10px] font-black uppercase tracking-[0.2em]">
                IT Governance Framework
             </span>
          </div>

          <div className="space-y-6">
            {/* CONTENT REMAINS UNCHANGED */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.1]">
              Comprehensive IT Auditing with ITGC & ITAC Excellence
            </h1>

            <p className="max-w-2xl text-base md:text-xl text-white/80 leading-relaxed border-l-4 border-brandAccent pl-6">
              Empower your enterprise with expert IT General and Application Controls auditing to mitigate risks, ensure compliance, and drive operational excellence.
            </p>

            {/* CTA BUTTONS - Content same, design fixed */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/services" 
                className="px-8 py-4 font-bold text-brandDark bg-brandAccent rounded-sm transition-all duration-300 hover:bg-brandGold hover:-translate-y-1 shadow-lg shadow-brandAccent/20"
              >
                Explore Services
              </a>
              
              <a 
                href="/contact" 
                className="px-8 py-4 font-bold text-white border-2 border-white/20 rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-white/40"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SIDE DECORATION */}
      <div className="absolute right-8 bottom-0 h-32 w-[1px] bg-gradient-to-t from-brandAccent to-transparent hidden xl:block opacity-50" />
    </section>
  );
};

export default HeroSection;