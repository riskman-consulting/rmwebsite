import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Customized Solutions",
    desc: "Tailored engagement models aligned to your business strategy and risk profile.",
  },
  {
    title: "Deep Domain Expertise",
    desc: "Leadership experience across Big 4, global banks, and rating agencies.",
  },
  {
    title: "Agile & Lean Execution",
    desc: "Focused delivery with measurable outcomes, not unnecessary complexity.",
  },
  {
    title: "Fixed Price Engagements",
    desc: "All-inclusive pricing models with zero hidden costs.",
  },
  {
    title: "Client-Centric Partnership",
    desc: "We stay engaged throughout your transformation journey.",
  },
  {
    title: "Proven Track Record",
    desc: "100% on-time project completion across multiple geographies.",
  },
];

const ValueSection = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark py-20">
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest
              text-brandPrimary bg-brandAccent/10 border border-brandAccent/20 rounded-full">
              Our Value Proposition
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-extrabold
              text-brandDark dark:text-white mb-6">
              How RiskMan Creates
              <span className="text-brandAccent"> Sustainable Value</span>
            </h2>

            <p className="text-brandPrimary/80 dark:text-brandLight/70
              text-lg leading-relaxed mb-8 max-w-xl">
              We go beyond traditional consulting by combining deep risk expertise,
              practical execution, and long-term partnership thinking.
            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2
                bg-brandDark text-white
                px-6 py-3 rounded-lg
                text-sm font-semibold
                hover:bg-brandPrimary transition-colors"
            >
              Speak to Our Experts
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-surfaceLight dark:bg-surfaceDark
                  border border-borderLight dark:border-borderDark
                  rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={18} className="text-brandAccent mt-1" />
                  <h3 className="font-heading text-lg font-bold
                    text-brandDark dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed
                  text-brandPrimary/80 dark:text-brandLight/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueSection;
