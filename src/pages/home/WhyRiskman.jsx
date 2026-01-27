import React from "react";
import {Link} from "react-router-dom";
import whyRiskMan from "../../assets/images/home/whyChooseRiskMan.webp";
 
const FeatureCard = ({ icon, title, description }) => (
<div className="bg-bgLight dark:bg-bgDark text-brandPrimary dark:text-white border border-borderLight dark:border-borderDark hover:border-brandDark dark:hover:border-brandAccent rounded-2xl p-6 h-[180px] flex flex-col justify-center shadow-lg">
<div className="text-[#E6C87A] text-2xl mb-3">{icon}</div>
<h3 className="mb-2 text-lg font-semibold">{title}</h3>
<p className="text-sm leading-relaxed text-brandNavy dark:text-white/70">{description}</p>
</div>
);
 
export default function WhyChooseRiskMan() {
  return (
<section className="px-6 py-16 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Header */}
<div className="max-w-3xl mx-auto mb-20 text-center">
<h1 className="mb-4 text-4xl font-bold text-brandDark dark:text-white">
          Why <span className="text-brandAccent">Choose</span> RiskMan?
</h1>
<p className="text-brandNavy dark:text-white/70">
          Strategic risk management led by industry veterans to ensure your
          business remains resilient, compliant, and ahead of the curve.
</p>
</div>
 
      {/* Main Grid */}
<div className="grid items-center max-w-6xl grid-cols-3 mx-auto mb-16">
        {/* Left Cards */}
<div className="z-10 flex flex-col gap-4">
<FeatureCard
            icon="🌐"
            title="Global Footprint"
            description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
          />
<FeatureCard
            icon="💼"
            title="Enriched Domain Expertise"
            description=" Our leadership brings decades of experience from Big 4 firms, global banks, and top-tier rating agencies"
          />
</div>
 
        {/* Center Image – OVERLAPS BOTH SIDES */}
<div className="relative z-20 flex justify-center">
<div className="border-[5px] border-[#C9A24D] rounded-[28px] rotate-[-16deg] shadow-2xl 
                          -mx-24 overflow-hidden bg-transparent">
<img
              src={whyRiskMan}
              alt="Why RiskMan"
              className="w-[340px] h-auto block rounded-[20px]"
            />
</div>
</div>
 
        {/* Right Cards */}
<div className="z-10 flex flex-col gap-4">
<FeatureCard
            icon="⚡"
            title="Agile & Lean Approach"
            description="We don’t overcomplicate. We focus on process improvement and real business benefits through an agile implementation model."
          />
<FeatureCard
            icon="🛡️"
            title="Predictable Engagement"
            description="We operate on an all-inclusive, fixed-price model with a 100% on-time project completion track record."
          />
</div>
</div>

      {/* CTA Button - Centered Below */}
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="
            bg-brandNavy dark:bg-brandAccent 
            text-white dark:text-brandDark
            px-10 py-4 
            rounded-full
            text-base font-semibold
            shadow-lg hover:shadow-xl
            hover:scale-105 
            hover:bg-[#0a1929] dark:hover:bg-[#d4ae5e]
            transition-all duration-300
            inline-flex items-center gap-2
          "
        >
          Contact Our Experts 
          <span className="text-lg">→</span>
        </Link>
      </div>
</section>
  );
}