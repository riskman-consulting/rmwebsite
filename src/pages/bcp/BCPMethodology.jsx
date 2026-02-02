import React from "react";

const phases = [
  {
    title: "Initiation",
    desc: "We establish the project scope, secure management support, and identify stakeholders and required resources.",
  },
  {
    title: "Analysis",
    desc: "Impact questionnaires and structured analysis rank systems using Maximum Tolerable Downtime (MTD).",
  },
  {
    title: "Recovery",
    desc: "Business Recovery Plans restore facilities, supply chains, users, and supporting technologies.",
  },
  {
    title: "Strategy",
    desc: "Multiple outage scenarios are modeled to design service recovery strategies and fallback centers.",
  },
  {
    title: "Documentation",
    desc: "Formal Business Resumption, IT Contingency, Cyber Response, and Emergency plans are created.",
  },
  {
    title: "Validation",
    desc: "Walk-throughs, checklist testing, and simulations validate recovery effectiveness.",
  },
  {
    title: "Maintenance",
    desc: "Ongoing monitoring, reviews, and awareness training keep teams prepared.",
  },
];

const BCPMethodology = () => {
  return (
    <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-brandDark dark:text-white">
            RiskMan’s 7-Phase BCP/DR Delivery Lifecycle
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our structured methodology ensures operational resilience through a
            comprehensive lifecycle designed for measurable recovery readiness.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-white dark:bg-brandNavy/30 border border-borderLight dark:border-borderDark rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              {/* Phase Number Badge */}
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-brandPrimary text-white flex items-center justify-center font-bold shadow">
                {i + 1}
              </div>

              <h3 className="text-xl font-bold text-brandDark dark:text-white mt-4">
                Phase {i + 1}: {p.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BCPMethodology;
