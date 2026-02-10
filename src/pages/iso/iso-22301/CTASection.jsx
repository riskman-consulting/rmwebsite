import React from 'react';
import { ArrowRight } from 'lucide-react';
import ctaImage from "../../../assets/images/iso/CTA.png";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-bgLight">
      <div className="container px-4 mx-auto md:px-6">
        <div className="relative overflow-hidden shadow-2xl bg-brandPrimary rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center p-12 md:p-16">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">
                Prepare Your Business for the Unexpected
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-blue-100">
                Build a resilient organization that thrives under pressure with RiskMan’s expert continuity and recovery consulting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 font-semibold text-white transition-colors border rounded-lg border-white/30 hover:bg-white/10">
                  Schedule Consultation
                </button>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <img 
                src={ctaImage} 
                alt="Expert Consultation" 
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-brandPrimary/40 lg:bg-gradient-to-r lg:from-brandPrimary lg:to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
