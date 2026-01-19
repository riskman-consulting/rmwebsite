import React from "react";
import { Link } from "react-router-dom";
import WhyChooseRiskManImage from "../../assets/images/home/whyChoose.png";

const FeatureCard = ({ title, description, index }) => (
  <div
    className="group relative p-6 transition-all duration-500 border shadow-lg rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-xl dark:hover:border-brandAccent"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-brandGold dark:bg-brandAccent"></div>
    </div>

    <h3 className="mb-3 text-lg font-bold transition-colors duration-300 font-heading text-brandNavy group-hover:text-brandGold dark:text-brandAccent dark:group-hover:text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy/80 dark:text-white/70 group-hover:text-brandNavy dark:group-hover:text-white/90">
      {description}
    </p>
  </div>
);

const WhyRiskMan = () => {
  const items = [
    {
      title: "Customized Solutions",
      description: "Tailoring services to unique client needs ensuring optimal outcomes and maximum value delivery."
    },
    {
      title: "Client-Centric Focus",
      description: "Our unwavering dedication to understanding and addressing client goals with personalized attention."
    },
    {
      title: "Continuous Improvement",
      description: "Constantly evolving our processes to stay ahead of industry trends and deliver excellence."
    },
    {
      title: "Proven Track Record",
      description: "A solid history of delivering measurable results and excellence across diverse industries."
    },
  ];

  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2);

  return (
    <section className="relative w-full py-20 overflow-hidden transition-colors duration-300 px-7 bg-bgLight dark:bg-bgDark">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-64 h-64 rounded-full -top-32 -left-32 bg-brandGold/10 blur-3xl dark:bg-brandAccent/5"></div>
        <div className="absolute w-96 h-96 rounded-full -bottom-48 -right-48 bg-brandNavy/10 blur-3xl dark:bg-brandAccent/5"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-20 text-center animate-fade-in">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy/70 dark:text-brandAccent">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl font-heading text-brandDark dark:text-white">
            Why Global Leaders Partner with{" "}
            <span className="relative inline-block text-brandGold dark:text-brandAccent">
              RiskMan
              <svg className="absolute bottom-0 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 7C50 3 100 1 200 4" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              </svg>
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT: 3 COLUMNS */}
        <div className="grid items-center gap-8 lg:grid-cols-3 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col order-2 gap-6 lg:order-1">
            {leftItems.map((item, i) => (
              <FeatureCard key={i} title={item.title} description={item.description} index={i} />
            ))}
          </div>

          {/* CENTER COLUMN: IMAGE & CTA */}
          <div className="relative flex flex-col items-center order-1 lg:order-2">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100">
              <div className="absolute inset-0 rounded-full bg-brandGold/20 dark:bg-brandAccent/20 blur-3xl"></div>
            </div>

            <div className="relative z-10 transition-transform duration-700 hover:scale-105 hover:rotate-1">
              <img
                src={WhyChooseRiskManImage}
                alt="Why Choose RiskMan - Professional Excellence"
                className="w-full max-w-[380px] h-auto drop-shadow-2xl rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* CTA BUTTON */}
            <div className="mt-12 lg:absolute lg:-bottom-16">
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 px-10 py-4 overflow-hidden text-sm font-bold text-white transition-all duration-300 rounded-full shadow-xl group bg-brandNavy hover:bg-brandDark hover:scale-105 hover:shadow-2xl dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
              >
                <span className="relative z-10">Connect With Us</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 transition-transform duration-300 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col order-3 gap-6">
            {rightItems.map((item, i) => (
              <FeatureCard key={i} title={item.title} description={item.description} index={i + 3} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyRiskMan;