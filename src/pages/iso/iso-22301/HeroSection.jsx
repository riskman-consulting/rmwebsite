import { ArrowLeft } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/iso/iso-22301/hero.png";

function HeroSection() {
  return (
    <section
      className="relative text-white py-24 lg:py-36 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brandPrimary/10 skew-x-12 transform translate-x-20"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Guarantee Operational{" "}
            <span className="text-brandAccent">Resilience and Continuity</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
            RiskMan specializes in ISO 22301 frameworks, helping your organization
            prepare for, respond to, and recover from disruptive incidents
            efficiently and with minimal impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back To Main Page
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-lg shadow-brandAccent/20">
              Talk To Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;