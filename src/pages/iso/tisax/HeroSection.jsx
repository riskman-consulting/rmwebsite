import { ArrowLeft, Car } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/iso/tisax/hero.png";

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

      {/* Automotive precision accent */}
      <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark to-transparent"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full border-l border-brandAccent/20 skew-x-12 bg-surfaceDark"></div>
      </div>

      <div className="container relative z-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <Car className="w-6 h-6 text-brandAccent" />
            <span className="text-brandGold font-bold tracking-widest uppercase text-sm">
              Automotive Supply Chain Security
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
            The Gold Standard for{" "}
            <span className="text-brandAccent">Automotive Security</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            RiskMan provides expert guidance for TISAX compliance, ensuring your
            information security practices meet the rigorous and specific
            demands of the global automotive supply chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-all">
              <ArrowLeft className="w-4 h-4" />
              Return To Main
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-lg shadow-brandAccent/20">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;