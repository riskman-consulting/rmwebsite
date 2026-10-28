


import React from 'react';
import { ArrowRight, Compass, Target, Shield } from 'lucide-react';
import compassImg from "../../../assets/images/financial-advisory/strategic-compass.jpg"
import { useNavigate } from 'react-router-dom';

const PolicyHero = () => {
  const navigator=useNavigate();
  return (
    <section className="relative py-16 overflow-hidden lg:py-28 bg-brandDark transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={compassImg}
          alt="Strategic Compass" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandDark/80 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-brandAccent" />
            <span className="text-sm font-medium tracking-wide uppercase text-brandAccent">Strategic Direction</span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-heading">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Credit Policy</span> Framework
          </h1>
          
          <p className="max-w-2xl text-xl leading-relaxed text-gray-200">
            RiskMan formulates structured policies to identify, measure, and control credit risk, ensuring your activities align with long-term enterprise goals.
          </p>
          
          <div className="flex flex-col gap-4 pt-8 sm:flex-row">
            <button onClick={()=>navigator("/services/financial-advisory")} className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-full shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/40">
              Know About Financial Advisory <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={()=>navigator("/contact")} className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-full bg-brandPrimary hover:bg-white/10 border-white/30">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyHero;
