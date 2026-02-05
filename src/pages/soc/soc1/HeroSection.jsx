import { ArrowRight, CheckCircle2, Star, Play, Shield, Landmark } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigator = useNavigate();
  
  return (
    <section className="relative pt-20 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300 border-b border-borderLight dark:border-borderDark">
      
      {/* 1. ADVANCED BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandPrimary/10 dark:bg-brandPrimary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-brandGold/10 dark:bg-brandGold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brandPrimary/20 dark:via-brandGold/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 2. LEFT SIDE: CONTENT */}
          <div className="text-left animate-fadeIn">
            {/* Branded Tag */}
            <div className="inline-flex items-center gap-2 py-2 px-4 mb-8 text-xs font-bold tracking-widest uppercase rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-sm animate-bounce-slow">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400">Financial Integrity</span>
              <span className="text-slate-300 mx-1">|</span>
              <span className="text-brandPrimary dark:text-brandGold">ICFR Assurance</span>
            </div>
            
            {/* Two-Line Title with Premium Gradient */}
            <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.1] text-brandDark dark:text-white tracking-tight">
              SOC 1 Assurance for <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent">
                  Financial Reporting
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brandPrimary/10 dark:bg-brandGold/20 -z-0"></span>
              </span> <br />
              Reliability.
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl font-medium">
              Reassure customer CFOs and auditors that outsourced processes supporting financial statements are controlled, tested, and independently verified.
            </p>
            
            {/* Interactive CTA Group */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button 
                onClick={() => navigator("/contact")}
                className="group bg-brandPrimary hover:bg-brandNavy text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl flex items-center gap-3 hover:-translate-y-1 active:translate-y-0"
              >
                Talk To A SOC 1 Advisor 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigator("/soc")} 
                className="bg-surfaceLight dark:bg-surfaceDark text-brandPrimary dark:text-brandGold border border-borderLight dark:border-borderDark px-10 py-5 rounded-2xl font-bold hover:bg-bgLight dark:hover:bg-brandDark transition-all shadow-lg hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
              >
                <Play className="w-5 h-5 fill-current" />
                Return To SOC Overview
              </button>
            </div>

            {/* Social Proof / Audit Trust Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-borderLight dark:border-borderDark">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brandPrimary/10 dark:bg-brandGold/10 rounded-xl">
                  <Landmark className="w-6 h-6 text-brandPrimary dark:text-brandGold" />
                </div>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                  Trusted by Global Finance & <br /> Banking Leaders
                </p>
              </div>
            </div>
          </div>

          {/* 3. RIGHT SIDE: INTERACTIVE IMAGE WITH FINANCIAL OVERLAYS */}
          <div className="relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-surfaceLight dark:border-surfaceDark shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] transform transition-all duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                alt="Financial Auditing Interface" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Audit Status Overlay */}
              <div className="absolute top-10 right-10 bg-white/90 dark:bg-surfaceDark/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 animate-float">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">ICFR Status</div>
                    <div className="text-2xl font-black text-brandPrimary dark:text-brandGold">Verified</div>
                  </div>
                </div>
              </div>

              {/* Floating Period Overlay */}
              <div className="absolute bottom-10 left-10 bg-brandPrimary/90 dark:bg-brandNavy/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Shield className="w-6 h-6 text-brandGold" />
                  </div>
                  <div>
                    <div className="text-white font-bold">SOC 1 Type II</div>
                    <div className="text-slate-300 text-xs font-medium">Reporting Period: 2026</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Aesthetic Blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brandPrimary/20 rounded-full blur-[80px] -z-10 group-hover:bg-brandPrimary/30 transition-colors" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brandGold/10 rounded-full blur-[80px] -z-10 group-hover:bg-brandGold/20 transition-colors" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;