import { ArrowLeft, ShieldCheck } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/iso/iso-27701/hero.png";

function HeroSection() {
  return (
    <section
      className="relative text-white py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandPrimary/30 border border-brandAccent/30 text-brandAccent text-sm font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            ISO 27701 Privacy Management
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Elevate Data Privacy to{" "}
            <span className="text-brandAccent">Global Standards</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
            RiskMan provides comprehensive ISO 27701 consulting to integrate
            privacy management into your existing security posture, protecting
            personally identifiable information and building stakeholder trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all">
              <ArrowLeft className="w-4 h-4" />
              Return To Services
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;