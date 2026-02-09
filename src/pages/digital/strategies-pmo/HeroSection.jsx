import React from "react";
import bg from "../../../assets/images/digital/strategies.png";

function HeroSection() {
  return (
    <section
      className="relative py-24 lg:py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div className="relative container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        <div className="max-w-3xl p-8 border shadow-2xl rounded-xl bg-white/10 backdrop-blur-md border-white/20">
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Mastering Digital Complexity with{" "}
            <span className="text-brandGold">Strategic PMO</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
            RiskMan Consulting drives transformation through governance-led
            execution, bridging the gap between strategy and realization with
            milestone tracking and rigorous project ownership.
          </p>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;