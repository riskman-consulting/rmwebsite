import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import heroImage from "../../../assets/images/iso/ISO22301.png";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigator = useNavigate()
  return (
    <section className="relative py-16 overflow-hidden lg:py-28 bg-brandDark">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Business Continuity Meeting" 
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/90 to-brandDark/60"></div>
      </div>

      <div className="container relative z-10 grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-8 duration-700 animate-in slide-in-from-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-brandAccent" />
            <span className="text-xs font-bold tracking-wider uppercase text-brandAccent">ISO 22301 Business Continuity</span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl font-heading">
            Guarantee <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Operational Resilience</span> and Continuity
          </h1>
          
          <p className="max-w-xl text-lg leading-relaxed text-gray-300">
            RiskMan specializes in ISO 22301 frameworks, helping your organization prepare for, respond to, and recover from disruptive incidents efficiently and with minimal impact.
          </p>
          
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button onClick={()=>navigator("/contact")} className="group bg-brandAccent hover:bg-brandGold text-brandDark font-bold px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,192,0,0.3)] flex items-center justify-center gap-2">
              Talk To Experts
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={()=>navigator("/services")} className="px-8 py-4 font-semibold text-white transition-colors border rounded-lg border-white/30 hover:bg-white/10 backdrop-blur-sm">
              Back To Main Page
            </button>
          </div>
        </div>

        <div className="relative hidden duration-700 delay-200 md:block animate-in slide-in-from-right">
          <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-white/10 group">
            <img 
              src={heroImage} 
              alt="RiskMan Team" 
              className="w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-brandAccent/20 blur-3xl"></div>
          <div className="absolute w-40 h-40 rounded-full -bottom-10 -left-10 bg-brandPrimary/40 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
