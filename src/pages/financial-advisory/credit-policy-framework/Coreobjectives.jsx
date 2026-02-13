import React from 'react';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';

import strategicImg from "../../../assets/images/financial-advisory/strategic.png"
import assetImg from "../../../assets/images/financial-advisory/asset.png";
import riskImg from "../../../assets/images/financial-advisory/risk.png";

const PolicyObjectives = () => {
  const objectives = [
    {
      title: "Strategic Alignment",
      desc: "Ensuring credit activities remain consistent with the enterprise’s overarching direction.",
      icon: <Target className="w-10 h-10 text-brandPrimary" />,
      image: strategicImg
    },
    {
      title: "Asset Quality",
      desc: "Implementing principles to achieve specific earning objectives and maintaining high-performing portfolios.",
      icon: <TrendingUp className="w-10 h-10 text-green-500" />,
      image: assetImg
    },
    {
      title: "Risk Tolerance",
      desc: "Formally demarcating the institution's tolerance levels in relation to total credit exposure.",
      icon: <AlertTriangle className="w-10 h-10 text-brandAccent" />,
      image: riskImg
    }
  ];

  return (
    <section className="transition-colors duration-300 py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Our Goals</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Core Objectives of Credit Policy
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A well-defined framework acts as the blueprint for asset quality, guiding every stage of the credit lifecycle toward profitability.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {objectives.map((obj, index) => (
            <div key={index} className="relative overflow-hidden transition-all duration-500 shadow-xl group rounded-2xl hover:shadow-2xl">
              <div className="absolute inset-0">
                <img src={obj.image} alt={obj.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-brandDark/80 to-transparent opacity-90"></div>
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 border bg-white/10 backdrop-blur-md rounded-xl border-white/20 group-hover:bg-white group-hover:scale-110">
                  {obj.icon}
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">{obj.title}</h4>
                <p className="leading-relaxed text-gray-300 transition-colors group-hover:text-white">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyObjectives;
