import { ArrowLeft } from "lucide-react";
import React from "react";
import bg from "../../../assets/images/iso/iso-31000/hero.png";

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Subtle radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brandPrimary/20 via-transparent to-transparent"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Transform Uncertainty into{" "}
            <span className="text-brandAccent">Strategic Opportunity</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            RiskMan implements ISO 31000 principles to help your organization
            manage risks effectively, protect value, and support informed
            decision-making at every level.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all">
              <ArrowLeft className="w-4 h-4" />
              View Main Services
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
              Reach Out Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;