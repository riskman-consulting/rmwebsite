import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import iso31000Img from "../../../assets/images/iso/iso31000hero.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const  navigator = useNavigate()
  return (
    <section id="home" className="relative flex items-center min-h-screen pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={iso31000Img} 
          alt="Strategic Chess Board" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 to-brandNavy/80 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-brandGold" />
            <span className="text-sm font-medium tracking-wide text-brandLight">ISO 31000 Certified Consulting</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl font-heading">
            Transform Uncertainty into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-brandAccent">Strategic Opportunity</span>
          </h1>
          
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            RiskMan implements ISO 31000 principles to help your organization manage risks effectively, protecting value and supporting informed decision-making at every level of the enterprise.
          </p>
          
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button onClick={()=>navigator("/services")} className="inline-flex px-4 py-4 text-lg rounded-full bg-brandAccent">
              View Main Services
              <ArrowRight size={18} />
            </button>
            <button onClick={()=>navigator("/contact")}className="flex items-center justify-center gap-3 px-8 py-4 font-medium text-white transition-all duration-300 border rounded-lg border-white/30 hover:bg-white/10 backdrop-blur-sm">
              Reach Out Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
