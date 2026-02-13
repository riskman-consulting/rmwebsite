import React from 'react';
import { ShieldCheck, ArrowRight, Activity } from 'lucide-react';

import forensicImg from "../../assets/images/forensic/forensic.png"
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const heroImage = forensicImg

   const navigator=useNavigate()

  return (
    <section className="relative min-h-[90vh]  flex items-center overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brandNavy/10 to-transparent dark:from-brandNavy/20"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandGold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto lg:grid-cols-2 lg:px-20">
        
        {/* Text Content */}
        <div className="order-2 space-y-8 lg:order-1 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-surfaceDark border border-brandGold/30 px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-brandNavy dark:text-brandGold">
              Elite Investigative Protocols
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[1.1] text-brandNavy dark:text-white">
            Advanced Forensics and  <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-brandAccent">
            Investigation Services
            </span>
          </h1>
          
          <p className="max-w-xl pl-6 text-lg leading-relaxed text-gray-600 border-l-4 md:text-xl dark:text-gray-300 border-brandGold">
            Protect organizational integrity through rigorous investigative protocols. We provide the clarity and evidence needed to resolve complex internal and external threats.
          </p>
          
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button onClick={()=>navigator("/services")} className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all shadow-lg group bg-brandNavy hover:bg-brandPrimary rounded-xl hover:shadow-brandNavy/40">
              Explore Services 
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </button>
            <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all border-2 rounded-xl text-brandNavy dark:text-white border-brandNavy/10 dark:border-white/10 hover:bg-brandNavy/5 dark:hover:bg-white/5">
              Consult Experts
            </button>
          </div>

          <div className="flex items-center pt-8 space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-brandGold" size={18} />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="text-brandGold" size={18} />
              <span>Rapid Response</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden transition-transform duration-500 transform border-4 border-white shadow-2xl rounded-3xl dark:border-surfaceDark lg:rotate-2 hover:rotate-0">
            <div className="absolute inset-0 z-10 bg-brandNavy/20 mix-blend-multiply"></div>
            <img 
              src={heroImage} 
              alt="Forensic Investigation" 
              className="w-full h-auto object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-700"
            />
            
            {/* Floating Card */}
            {/* <div className="absolute z-20 hidden p-6 border shadow-lg bottom-8 left-8 right-8 bg-white/90 dark:bg-surfaceDark/90 backdrop-blur-md rounded-xl border-white/20 sm:block">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1 text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Active Cases</p>
                  <h3 className="text-2xl font-bold text-brandNavy dark:text-white">1,240+</h3>
                </div>
                <div className="px-2 py-1 text-xs font-bold text-green-600 bg-green-100 rounded dark:bg-green-900/30 dark:text-green-400">
                  +12% this month
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div className="w-3/4 h-full rounded-full bg-brandGold"></div>
              </div>
            </div> */}
          </div>
          
          {/* Decorative Dots */}
          <div className="absolute w-24 h-24 rounded-full -top-10 -right-10 bg-brandGold/20 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full -bottom-10 -left-10 bg-brandNavy/20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
