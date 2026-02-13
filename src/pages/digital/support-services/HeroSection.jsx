import React from "react";
import bg from "../../../assets/images/digital/support-service.png";

function HeroSection() {
  return (
    <section
      className="relative py-24 bg-center bg-cover lg:py-36"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      <div className="container relative px-6 mx-auto lg:px-20">
        <div className="max-w-3xl p-8 border shadow-2xl bg-white/10 backdrop-blur-md rounded-xl border-white/20">
          
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Sustaining Long-Term Success with{" "}
            <span className="text-brandGold">Support Services</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
            RiskMan ensures seamless transitions through rigorous testing,
            proactive change management, and continuous process optimization
            to maximize the lasting value of your digital investments.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 font-semibold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1">
              Work with Us
            </button>

            <button className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black">
              Our Other Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;