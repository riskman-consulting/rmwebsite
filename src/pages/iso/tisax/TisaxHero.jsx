import { ArrowLeft, Car } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/tisax/hero.png";

function HeroSection() {
  return (
    <section
      className="relative py-14 md:py-20 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Automotive precision accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 grayscale">
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark to-transparent"></div>
        <div className="absolute right-0 w-1/2 h-full -translate-y-1/2 skew-x-12 border-l top-1/2 border-brandAccent/20 bg-surfaceDark"></div>
      </div>

      <div className="container relative px-6 lg:px-20 z-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <Car className="w-6 h-6 text-brandAccent" />
            <span className="text-sm font-bold tracking-widest uppercase text-brandGold">
              Automotive Supply Chain Security
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight font-heading lg:text-7xl">
            The Gold Standard for{" "}
            <span className="text-brandAccent">Automotive Security</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            RiskMan provides expert guidance for TISAX compliance, ensuring your
            information security practices meet the rigorous and specific
            demands of the global automotive supply chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-transparent border rounded-md border-white/20 hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
              Return To Main
            </button>

            <button className="px-8 py-4 font-bold transition-all rounded-md shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold shadow-brandAccent/20">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;