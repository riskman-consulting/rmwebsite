import React from "react";

const HeroIntroduction = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="mb-6 text-3xl font-semibold leading-tight font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-brandAccent">
              Business Continuity Planning &amp; <br />
              Disaster Recovery Implementation
            </h1>

            <p className="mb-6 font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
              RiskMan supports MG Motors Pvt. Ltd. in strengthening organizational
              resilience through structured Business Continuity Planning (BCP)
              and Disaster Recovery (DR). In an environment of increasing
              disruption and uncertainty, effective continuity planning is
              essential to safeguard operations, manage risks, and ensure
              sustained business performance.
            </p>

            <p className="font-sans text-sm leading-relaxed md:text-base text-brandPrimary dark:text-brandLight/80">
              This initiative focuses on understanding critical business
              functions, assessing operational and technology risks, and
              designing robust recovery frameworks aligned with global best
              practices.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark shadow-sm">
              <img
                src="/images/bcp-hero-resilience.jpg"
                alt="Business Continuity and Disaster Recovery"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Accent block */}
            <div className="absolute hidden w-32 h-32 -bottom-6 -left-6 md:block bg-brandAccent/90 rounded-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroIntroduction;
