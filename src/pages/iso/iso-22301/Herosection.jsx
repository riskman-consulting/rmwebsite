import React from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import heroImage from "../../../assets/images/iso/ISO22301.png";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigator = useNavigate()
  return (
    <section className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-brandDark">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Business Continuity Meeting" 
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/90 to-brandDark/60"></div>
      </div>

      <div className="container relative z-10 grid items-center gap-12  mx-auto lg:px-20 md:grid-cols-2">
        <div className="space-y-8 duration-700 animate-in slide-in-from-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-brandAccent" />
            <span className="text-xs font-bold tracking-wider uppercase text-brandAccent">ISO 22301 Certified Solutions</span>
          </div>
          
          <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl font-heading">
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

          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">99.9%</span>
              <span className="text-sm text-gray-400">Uptime Guarantee</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-sm text-gray-400">Expert Support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-sm text-gray-400">Clients Secured</span>
            </div>
          </div>
        </div>

        <div className="relative hidden duration-700 delay-200 md:block animate-in slide-in-from-right">
          <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-white/10 group">
            <div className="absolute inset-0 z-10 transition-colors duration-500 bg-brandAccent/20 group-hover:bg-transparent"></div>
            <img 
              src={heroImage} 
              alt="RiskMan Team" 
              className="w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
            />
            
            {/* Floating Card */}
            <div className="absolute z-20 p-6 shadow-lg bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-xl animate-float">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-brandDark">System Status: Protected</h3>
                  <p className="mt-1 text-sm text-gray-600">Your business continuity plan is active and monitoring for potential threats.</p>
                </div>
              </div>
            </div>
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
