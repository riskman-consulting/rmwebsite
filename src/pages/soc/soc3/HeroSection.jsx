import { ArrowRight, CheckCircle2, Star, Play, Shield, Globe } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../../../assets/images/soc/soc-3.png"

const HeroSection = () => {
  const navigator = useNavigate();
  
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300 border-b border-borderLight dark:border-borderDark">
      
      {/* 1. ADVANCED BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandGold/10 dark:bg-brandGold/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-brandPrimary/10 dark:bg-brandPrimary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brandPrimary/20 dark:via-brandGold/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 2. LEFT SIDE: CONTENT */}
          <div className="text-left animate-fadeIn">
            {/* Branded Tag */}
            <div className="inline-flex items-center gap-2 py-2 px-4 mb-8 text-xs font-bold tracking-widest uppercase rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-sm animate-bounce-slow">
              <span className="flex h-2 w-2 rounded-full bg-brandGold animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400">Public Proof</span>
              <span className="text-slate-300 mx-1">|</span>
              <span className="text-brandPrimary dark:text-brandGold">Transparency</span>
            </div>
            
            {/* Two-Line Title with Premium Styling */}
            <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.1] text-brandDark dark:text-white tracking-tight">
              Public Proof of Your <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent">
                  Control Maturity
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brandGold/10 dark:bg-brandGold/20 -z-0"></span>
              </span> <br />
              to the Market.
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl font-medium">
              Share an independent, high-level SOC 3 report to signal strong controls to the market without exposing sensitive internal details.
            </p>
            
            {/* Interactive CTA Group */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button 
                onClick={() => navigator("/contact")}
                className="group bg-brandPrimary hover:bg-brandNavy text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl flex items-center gap-3 hover:-translate-y-1 active:translate-y-0"
              >
                Speak With Consultant 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigator("")} 
                className="bg-surfaceLight dark:bg-surfaceDark text-brandPrimary dark:text-brandGold border border-borderLight dark:border-borderDark px-10 py-5 rounded-2xl font-bold hover:bg-bgLight dark:hover:bg-brandDark transition-all shadow-lg hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
              >
                <Play className="w-5 h-5 fill-current" />
                View Full SOC Suite
              </button>
            </div>

           
          </div>

          {/* 3. RIGHT SIDE: INTERACTIVE IMAGE WITH PUBLIC ASSURANCE OVERLAYS */}
          <div className="relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-surfaceLight dark:border-surfaceDark shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] transform transition-all duration-700 hover:scale-[1.02]">
              <img 
                src={bg} 
                alt="Global Market Trust and Analytics" 
                className="w-full h-[600px] object-cover"
              />
              
              
            </div>
            
       
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;