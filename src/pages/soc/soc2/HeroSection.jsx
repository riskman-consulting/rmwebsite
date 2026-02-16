import { ArrowRight, CheckCircle2, Star, Play, Shield, Lock } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import soc2Img from "../../../assets/images/soc/soc2/soc2.png"

const HeroSection = () => {
  const navigator = useNavigate();
  
  return (
    <section className="relative pt-20 pb-20 overflow-hidden transition-colors duration-300 border-b lg:pt-36 lg:pb-28 bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
      
      {/* 1. ADVANCED BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandPrimary/10 dark:bg-brandPrimary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-brandGold/10 dark:bg-brandGold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brandPrimary/20 dark:via-brandGold/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* 2. LEFT SIDE: CONTENT */}
          <div className="text-left animate-fadeIn">
            {/* Branded Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full shadow-sm bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark animate-bounce-slow">
              <span className="flex w-2 h-2 rounded-full bg-brandGold animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400">Compliance Excellence</span>
              <span className="mx-1 text-slate-300">|</span>
              <span className="text-brandPrimary dark:text-brandGold">Trust Principles</span>
            </div>
            
            {/* Two-Line Title with Premium Styling */}
            <h1 className="font-heading text-4xl md:text-3xl lg:text-4xl font-extrabold mb-8 leading-[1.1] text-brandDark dark:text-white tracking-tight">
              Demonstrate <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent">
                  Security & Resilience
                </span>
                <span className="absolute left-0 w-full h-3 bottom-2 bg-brandPrimary/10 dark:bg-brandGold/20 -z-0"></span>
              </span> <br />
              to Enterprise Buyers.
            </h1>
            
            <p className="max-w-xl mb-10 text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300">
              Show that your cloud and SaaS platforms operate with strong, tested controls across security, availability, confidentiality, and related trust principles.
            </p>
            
            {/* Interactive CTA Group */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button 
                onClick={() => navigator("/contact")}
                className="flex items-center gap-3 px-10 py-5 font-bold text-white transition-all shadow-2xl group bg-brandPrimary hover:bg-brandNavy rounded-2xl hover:-translate-y-1 active:translate-y-0"
              >
                Engage With SOC 2 Experts 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => navigator("/services/soc-services")} 
                className="flex items-center gap-3 px-10 py-5 font-bold transition-all border shadow-lg bg-surfaceLight dark:bg-surfaceDark text-brandPrimary dark:text-brandGold border-borderLight dark:border-borderDark rounded-2xl hover:bg-bgLight dark:hover:bg-brandDark hover:-translate-y-1 active:translate-y-0"
              >
                <Play className="w-5 h-5 fill-current" />
                Back To SOC Main Page
              </button>
            </div>

            {/* Social Proof / Security Trust Bar */}
            <div className="flex flex-col gap-6 pt-6 border-t sm:flex-row sm:items-center border-borderLight dark:border-borderDark">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brandPrimary/10 dark:bg-brandGold/10 rounded-xl">
                  <Lock className="w-6 h-6 text-brandPrimary dark:text-brandGold" />
                </div>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                  Meeting TSC Standards for <br /> Cloud & SaaS Providers
                </p>
              </div>
            </div>
          </div>

          {/* 3. RIGHT SIDE: INTERACTIVE IMAGE WITH SECURITY OVERLAYS */}
          <div className="relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-surfaceLight dark:border-surfaceDark shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] transform transition-all duration-700 hover:scale-[1.02]">
              <img 
                src={soc2Img}
                alt="Cybersecurity and Cloud Infrastructure" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating TSC Status Overlay */}
              <div className="absolute p-6 border shadow-2xl top-10 right-10 bg-white/90 dark:bg-surfaceDark/90 backdrop-blur-md rounded-3xl border-white/20 animate-float">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brandGold/20 text-brandGold">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">Trust Principles</div>
                    <div className="text-2xl font-black text-brandPrimary dark:text-brandGold">Validated</div>
                  </div>
                </div>
              </div>

              {/* Floating Audit Status Overlay */}
              <div className="absolute p-6 border shadow-2xl bottom-10 left-10 bg-brandPrimary/90 dark:bg-brandNavy/90 backdrop-blur-md rounded-3xl border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Shield className="w-6 h-6 text-brandGold" />
                  </div>
                  <div>
                    <div className="font-bold text-white">SOC 2 Type II</div>
                    <div className="text-xs font-medium text-slate-300">Audit-Ready Status: 2026</div>
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