import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import buildingImg from "../../../assets/images/financial-advisory/building.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => { 
   const navigator=useNavigate();
  return (
    <section className="relative py-16 overflow-hidden transition-colors duration-300 lg:py-28 bg-brandDark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={buildingImg}
          alt="Corporate Finance" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 via-brandNavy/90 to-brandPrimary/70 dark:from-bgDark/95 dark:via-bgDark/90 dark:to-brandNavy/80 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-brandAccent/10 border-brandAccent/20 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-brandAccent" />
              <span className="text-sm font-medium tracking-wide uppercase text-brandAccent">Financial Advisory</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-heading">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Credit Risk</span> Assessment
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
              We provide quantitative and qualitative evaluations of creditworthiness to mitigate default probability and secure your institution against potential loss.
            </p>
            
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button onClick={()=>navigator("/contact")} className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/40">
                Consult Our Experts <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={()=>navigator("/services")} className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20">
                View Services
              </button>
            </div>

            {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white">98%</h3>
                <p className="text-sm text-gray-400">Accuracy Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">$50B+</h3>
                <p className="text-sm text-gray-400">Assets Analyzed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-sm text-gray-400">Monitoring</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
