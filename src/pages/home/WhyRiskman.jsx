import React from "react"

const WhyRiskMan = () => {
  const items = [
    {
      title: "Customized Solutions",
      description:
        "Tailoring services to unique client needs ensuring optimal outcomes.",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Our unwavering dedication to understanding and addressing client goals ensures satisfaction and success.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Constantly evolving and refining our processes to stay ahead of industry trends and client expectations.",
    },
    {
      title: "Proven Track Record",
      description:
        "A solid history of delivering measurable results showcases our commitment to excellence.",
    },
    {
      title: "Innovative Approach",
      description:
        "Utilizing cutting-edge technologies and methodologies to provide forward-thinking solutions.",
    },
    {
      title: "Expertise and Experience",
      description:
        "Our seasoned professionals bring years of industry experience, guaranteeing top-tier solutions.",
    },
    {
      title: "Ethical Standards",
      description:
        "Upholding the highest levels of integrity and transparency in all interactions.",
    },
  ];

  return (
    <section
      className="relative w-full py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28"
    >
      {/* ✅ MATCH HEADER CONTAINER */}
      {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
      <div className="container">
        
        {/* HEADER */}
        <div className="text-left mb-14">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
            Why{" "}
            <span className="text-brandGold dark:text-brandAccent">
              RiskMan
            </span>
            ?
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 transition-all duration-300 border shadow-lg rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
            >
              <h3 className="mb-3 text-xl font-bold text-brandGold dark:text-brandAccent">
                {item.title}
              </h3>
              <p className="text-brandNavy dark:text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRiskMan;