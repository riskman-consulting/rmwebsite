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
    <section className="bg-white py-14 md:py-20 dark:bg-brandNavy/20">
      <div className=" container max-w-6xl px-6 lg:px-12">
 
        {/* Header */}
        <div className="max-w-3xl">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
          <h2 className="text-3xl font-extrabold md:text-4xl text-brandDark dark:text-white">
            How BCP Ensures Business Continuity
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A structured Business Continuity framework delivers measurable
            protection across operations, revenue, compliance, and reputation.
          </p>
        </div>
 
        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="transition duration-300 bg-white border shadow-sm group dark:bg-brandNavy/30 border-borderLight dark:border-borderDark rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1"
            >
              {/* icon badge */}
              <div className="flex items-center justify-center mb-5 font-bold transition w-11 h-11 rounded-xl bg-brandAccent/15 text-brandPrimary group-hover:bg-brandPrimary group-hover:text-white">
                ✓
              </div>
 
              <h3 className="text-lg font-bold text-brandDark dark:text-white">
                {item.title}
              </h3>
 
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
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
 
 