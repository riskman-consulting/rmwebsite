import React from "react";
import bcpImg from "../../assets/images/bcp/bcp-resilent.png"
 
 
const BCPOverview = () => {
  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container grid items-center lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl font-bold text-brandDark dark:text-white">
            Resilient Business Continuity & Disaster Recovery
          </h2>
 
          <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
            RiskMan provides tailored BCP and DR frameworks to safeguard
            organizations against unforeseen disruptions. Our strategic
            foresight and meticulous analysis ensure operational stability,
            mitigating risks through proactive strategy formulation to fortify
            your organization’s longevity in today’s dynamic landscape.
          </p>
        </div>
 
        <div className="p-8 bg-white shadow dark:bg-brandNavy/30 rounded-3xl">
          <img src={bcpImg} className="object-contain w-full" />
        </div>
      </div>
    </section>
  );
};
 
export default BCPOverview;
 
 