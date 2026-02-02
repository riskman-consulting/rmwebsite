import React from "react";


const BCPOverview = () => {
  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-bold text-brandDark dark:text-white">
            Resilient Business Continuity & Disaster Recovery
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            RiskMan provides tailored BCP and DR frameworks to safeguard
            organizations against unforeseen disruptions. Our strategic
            foresight and meticulous analysis ensure operational stability,
            mitigating risks through proactive strategy formulation to fortify
            your organization’s longevity in today’s dynamic landscape.
          </p>
        </div>

        <div className="bg-white dark:bg-brandNavy/30 p-8 rounded-3xl shadow">
          <img src={"https://c8.alamy.com/comp/HFFB3F/overview-brief-summary-description-conclusion-concept-HFFB3F.jpg"} className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BCPOverview;
