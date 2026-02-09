import React from "react";
import bg from "../../../assets/images/digital/digil.png";

function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden lg:py-36">
      
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* soft gradient overlay (not too dark) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* right glow accent */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-brandGold/10 blur-3xl" />

      <div className="relative container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        <div className="max-w-3xl text-white">

          {/* badge */}
          <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-white/15 backdrop-blur border border-white/20">
            Digital Transformation Suite
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Elevate Your Enterprise Through{" "}
            <span className="text-brandGold">Digital Evolution</span>
          </h1>

          {/* accent divider */}
          <div className="w-24 h-1 mb-6 rounded bg-brandGold" />

          <p className="mb-10 text-lg leading-relaxed md:text-xl text-white/90">
            RiskMan empowers your transformation journey by combining
            governance-driven execution with technical implementation
            excellence to deliver measurable business impact.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/contact"
              className="px-8 py-4 font-semibold transition-all rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1"
            >
              Book a Consultation
            </a>

            <a
              href="/services"
              className="px-8 py-4 font-semibold transition-all border-2 rounded-md border-white/70 text-white hover:bg-white hover:text-black"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;