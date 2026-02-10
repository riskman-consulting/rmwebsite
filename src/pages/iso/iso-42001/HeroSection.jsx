import { ArrowLeft, Cpu } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/iso/iso-42001/hero.png";

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
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Techy background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-brandAccent/30 to-transparent"></div>
        <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-brandAccent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Governance for the{" "}
            <span className="text-brandAccent">Age Of AI</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
            RiskMan helps organizations implement ISO 42001, the world’s first AI
            management system standard, ensuring ethical, transparent, and
            secure AI development across the entire enterprise.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-transparent border border-white/20 hover:border-brandAccent px-8 py-4 rounded-md font-bold transition-all group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Explore All ISOs
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl shadow-brandAccent/10">
              Consult Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;