import React from "react";

import strategyBg from "../../assets/images/home/strategy-bg.png";

const StrategicSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${strategyBg})` }}
      />

      {/* Overlay (same surface logic as cards) */}
      <div className="absolute inset-0 bg-gradient-to-br from-surfaceLight/95 via-surfaceLight/90 to-surfaceLight/85 dark:from-surfaceDark/95 dark:via-surfaceDark/90 dark:to-surfaceDark/85" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Section Label */}
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Strategic Advisory
          </p>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
            Strategic Risk Management
            <br />
            & Advisory Services
          </h2>

          {/* Description */}
          <p className="mb-6 text-lg leading-relaxed text-brandNavy dark:text-white/70">
            At <span className="font-semibold">RiskMan Consulting</span>, we
            specialize in delivering customized solutions that empower
            businesses to navigate uncertainties and achieve sustainable growth.
            Our team of seasoned professionals combines deep industry expertise
            with an entrepreneurial mindset to provide strategic advisory
            services that drive value and resilience.
          </p>

          {/* Divider */}
          <div className="w-24 h-[2px] mb-8 bg-brandGold dark:bg-brandAccent" />

          {/* Supporting Text */}
          <p className="max-w-3xl text-brandNavy dark:text-white/70 leading-relaxed">
            Our approach integrates governance, risk, compliance, financial
            discipline, and digital assurance into a cohesive framework —
            enabling leadership teams to make confident, informed decisions in a
            complex regulatory and economic environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicSection;
