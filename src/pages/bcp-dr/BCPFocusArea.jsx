import React from "react";
 
const areas = [
  {
    title: "Identify Critical Functions",
    desc: "Facilitate identification and prioritization of business-critical functions with impact assessments for mitigation clarity.",
  },
  {
    title: "Optimize Workforce Strategy",
    desc: "Define essential personnel hierarchy and employee protection policies during crisis scenarios.",
  },
  {
    title: "Strengthen Cybersecurity",
    desc: "Enable secure remote work and reinforce data protection controls against cyber threats.",
  },
  {
    title: "Technology Infrastructure",
    desc: "Plan rerouting to alternate sites and safeguard critical data during transitions.",
  },
  {
    title: "Refine Communications",
    desc: "Strengthen customer, internal, and partner coordination channels for contingency execution.",
  },
  {
    title: "Culture & Governance",
    desc: "Build leadership-workforce continuity governance and operational response boards.",
  },
  {
    title: "Third-Party Management",
    desc: "Develop contingency strategies for high-risk vendors and concentrated dependencies.",
  },
];
 
const BCPFocusAreas = () => {
  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="max-w-6xl px-6 lg:px-20">
 
        {/* Header */}
        <div className="max-w-3xl">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
          <h2 className="text-3xl font-extrabold md:text-4xl text-brandDark dark:text-white">
            Strategic Areas of Focus for Implementing BCP/DR
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We focus on mission-critical domains where structured preparedness
            significantly reduces disruption and accelerates recovery.
          </p>
        </div>
 
        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {areas.map((item, i) => (
            <div
              key={item.title}
              className="transition duration-300 bg-white border shadow-sm group dark:bg-brandNavy/30 border-borderLight dark:border-borderDark rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className="flex items-center justify-center w-10 h-10 mb-5 font-bold transition rounded-xl bg-brandPrimary/10 text-brandPrimary group-hover:bg-brandPrimary group-hover:text-white">
                {i + 1}
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
 
export default BCPFocusAreas;
 
 