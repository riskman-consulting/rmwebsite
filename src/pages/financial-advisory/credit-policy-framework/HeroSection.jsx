


import React from 'react';
import { ArrowRight, Compass, Target, Shield } from 'lucide-react';
import compassImg from "../../../assets/images/financial-advisory/strategic-compass.jpg"
import { useNavigate } from 'react-router-dom';

const PolicyHero = () => {
  const navigator=useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={compassImg}
          alt="Strategic Compass" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandDark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brandDark/50 to-bgLight dark:to-bgDark"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8 text-center animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-brandAccent" />
            <span className="text-sm font-medium tracking-wide uppercase text-brandAccent">Strategic Direction</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl font-heading">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Credit Policy</span> Framework
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-200">
            RiskMan formulates structured policies to identify, measure, and control credit risk, ensuring your activities align with long-term enterprise goals.
          </p>
          
          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
            <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-full shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/40">
              Know about Financial Advisory <ArrowRight className="w-5 h-5" />
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
