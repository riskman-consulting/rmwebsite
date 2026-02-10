import React from "react";
import bg from "../../../assets/images/iso/iso/hero.png";

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
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Accent glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brandAccent rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Master Compliance with{" "}
            <span className="text-brandAccent">
              Strategic Security Frameworks
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
            RiskMan empowers global organizations to navigate complex regulatory
            landscapes through specialized ISO and TISAX frameworks, ensuring
            robust data protection and operational integrity.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
              View All Services
            </button>

            <button className="border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">
              Book A Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;