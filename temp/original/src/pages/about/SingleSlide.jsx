import React from "react";
import { ArrowRight } from "lucide-react";
import hero_image from "../../assets/images/about/hero_image-1.png"

export default function SingleSlide() {
  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-bgDark">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero_image}
          alt="Strategic consulting"
          className="w-full h-full object-cover object-[70%_center]"
        />

        {/* BRAND GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-surfaceDark via-surfaceDark/90 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* HEADING */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            RiskMan Consulting
            <br />
            <span className="block mt-3 font-medium text-brandGold">
              Your Partner in Sustainable Growth
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Strategic risk advisory driven by{" "}
            <strong className="text-white">propreneurs</strong>. We deliver
            customized solutions that secure sustainable growth and create
            enduring value for global enterprises.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider
                         text-white bg-brandPrimary hover:bg-brandNavy transition-all
                         border border-borderLight"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider
                         text-white border border-white/30 backdrop-blur-sm
                         hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* SOCIAL PROOF */}
          <div className="flex items-center gap-4 mt-16 md:mt-24">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-surfaceDark overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Expert"
                  />
                </div>
              ))}
            </div>

            <div className="text-white/90">
              <p className="text-sm font-bold uppercase tracking-tight">
                Enabling digital evolution
              </p>
              <p className="text-xs opacity-70">
                Securing global enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
