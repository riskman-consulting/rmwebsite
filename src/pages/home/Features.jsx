import React from "react";
import Strategic from "../../assets/images/home/strategy-bg.webp"

const StrategicSection = () => {
  return (
    <section className="relative py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandGold dark:via-brandAccent to-transparent" />

      {/* Decorative geometric shapes */}
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-brandGold/5 dark:bg-brandAccent/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 left-10 w-96 h-96 bg-brandNavy/5 dark:bg-brandAccent/10 blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-brandGold dark:bg-brandAccent" />
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-brandGold dark:text-brandAccent">
              Strategic Advisory
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Heading */}
            <div>
              <h2 className="mb-6 text-xl font-bold leading-[1.1] md:text-2xl lg:text-3xl text-brandDark dark:text-white">
                Strategic Risk Management & Advisory Services
                <br />
                {/* <span className="text-brandNavy dark:text-brandAccent">
                  Management
                </span> */}
              </h2>
              <div className="w-20 h-1 mb-8 bg-brandGold dark:bg-brandAccent" />

              {/* Image added here in the gap */}
              <div className="relative mt-8 overflow-hidden rounded-lg shadow-xl group">
                <img
                  src={Strategic}
                  alt="Strategic Risk Management and Business Advisory"
                  className="object-cover w-full transition-transform duration-500 h-96 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <p className="text-base leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
                At{" "}
                <span className="font-semibold text-brandDark dark:text-brandAccent">
                  RiskMan Consulting
                </span>
                , we specialize in delivering customized solutions that empower
                businesses to navigate uncertainties and achieve sustainable
                growth.
              </p>

              <p className="text-base leading-relaxed md:text-lg text-brandNavy dark:text-white/70">
                Our team of seasoned professionals combines deep industry
                expertise with an entrepreneurial mindset to provide strategic
                advisory services that drive value and resilience.
              </p>

              {/* Key Features */}
              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
                  <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
                    <span className="font-semibold text-brandDark dark:text-white">
                      Governance & Compliance:
                    </span>{" "}
                    Navigate complex regulatory environments with confidence
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
                  <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
                    <span className="font-semibold text-brandDark dark:text-white">
                      Financial Discipline:
                    </span>{" "}
                    Build sustainable frameworks for long-term success
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
                  <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
                    <span className="font-semibold text-brandDark dark:text-white">
                      Digital Assurance:
                    </span>{" "}
                    Integrate modern solutions into cohesive strategies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative p-8 border-l-4 md:p-10 bg-bgLight dark:bg-bgDark border-brandGold dark:border-brandAccent">
              <p className="text-lg leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
                Our approach integrates governance, risk, compliance, financial
                discipline, and digital assurance into a{" "}
                <span className="font-bold text-brandDark dark:text-brandAccent">
                  cohesive framework
                </span>{" "}
                — enabling leadership teams to make confident, informed
                decisions in a complex regulatory and economic environment.
              </p>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brandGold/30 dark:border-brandAccent/30" />
            </div>
          </div>

          {/* Stats or Key Points */}
          <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
            <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
              <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
                360°
              </div>
              <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                Holistic Approach
              </h3>
              <p className="text-sm text-brandNavy/70 dark:text-white/60">
                Comprehensive risk assessment and management
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
              <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
                24/7
              </div>
              <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                Continuous Support
              </h3>
              <p className="text-sm text-brandNavy/70 dark:text-white/60">
                Always-on advisory and strategic guidance
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
              <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
                100%
              </div>
              <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                Tailored Solutions
              </h3>
              <p className="text-sm text-brandNavy/70 dark:text-white/60">
                Customized strategies for your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSection;