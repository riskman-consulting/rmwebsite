import { ArrowLeft, ShieldCheck } from "lucide-react";
import React from "react";
import bg from "../../assets/images/policies/policies.png"
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigator = useNavigate()
  return (
    <section
      className="relative py-20 overflow-hidden text-white lg:py-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      <div className="container relative z-10 px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-bold border rounded-full bg-brandPrimary/30 border-brandAccent/30 text-brandAccent">
            <ShieldCheck className="w-4 h-4" />
            Enterprise Governance Advisory
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-3xl font-bold leading-tight font-heading lg:text-5xl">
             Policies & SOPs: The Backbone of{" "}
            <span className="text-brandAccent">Enterprise Governance</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            Translating Board intent into operational discipline. RiskMan designs, implements, and sustains 
           governance frameworks that drive consistency, accountability, and control across entities and geographies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button onClick={()=>navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-white rounded-md text-brandDark hover:bg-brandLight">
              <ArrowLeft className="w-4 h-4" />
              Return To Services
            </button>

            <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all rounded-md bg-brandAccent text-brandDark hover:bg-brandGold">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;