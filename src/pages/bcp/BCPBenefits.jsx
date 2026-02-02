import React from "react";

const items = [
  {
    title: "Minimize Disruptions",
    desc: "Mitigate risks from natural disasters and cyber-attacks to keep critical operations functional during crises.",
  },
  {
    title: "Safeguard Reputation",
    desc: "Maintain brand integrity through seamless continuity and dependable recovery execution.",
  },
  {
    title: "Compliance & Governance",
    desc: "Meet regulatory and governance obligations through structured continuity controls.",
  },
  {
    title: "Operational Resilience",
    desc: "Build adaptive capability to respond effectively under high-pressure scenarios.",
  },
  {
    title: "Protect Revenue Streams",
    desc: "Reduce downtime exposure and prevent avoidable financial losses.",
  },
  {
    title: "Enhance Stakeholder Confidence",
    desc: "Demonstrate preparedness and build long-term investor and customer trust.",
  },
  {
    title: "Competitive Advantage",
    desc: "Deliver consistent service reliability even during large-scale disruptions.",
  },
];

const BCPBenefitsGrid = () => {
  return (
    <section className="py-24 bg-white dark:bg-brandNavy/20">
      <div className="container max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-brandDark dark:text-white">
            How BCP Ensures Business Continuity
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A structured Business Continuity framework delivers measurable
            protection across operations, revenue, compliance, and reputation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group bg-white dark:bg-brandNavy/30 border border-borderLight dark:border-borderDark rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* icon badge */}
              <div className="w-11 h-11 rounded-xl bg-brandAccent/15 text-brandPrimary font-bold flex items-center justify-center mb-5 group-hover:bg-brandPrimary group-hover:text-white transition">
                ✓
              </div>

              <h3 className="text-lg font-bold text-brandDark dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BCPBenefitsGrid;
