import React from 'react';
import { Users, Landmark, Globe, CheckCircle2 } from 'lucide-react';

import meetingImg from "../../../assets/images/financial-advisory/strategic-meeting.png";

const Framework = () => {
  const pillars = [
    {
      title: "Character & Capacity",
      desc: "Evaluating the borrower’s reputation and financial ability to repay.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Capital & Collateral",
      desc: "Analyzing equity stakes and the quality of assets pledged as security.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Conditions",
      desc: "Assessing external economic factors that may impact credit performance.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="framework" className="relative overflow-hidden transition-colors duration-300 py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-brandNavy/30">
              <img 
                src={meetingImg}
                alt="Business Meeting" 
                className="object-cover w-full h-full transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-brandPrimary/20 dark:bg-brandDark/40 mix-blend-multiply"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute hidden max-w-xs p-6 bg-white border border-gray-100 shadow-xl -bottom-8 -right-8 dark:bg-surfaceDark rounded-xl dark:border-brandNavy/30 md:block animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full dark:bg-green-900/30">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Credit Score</p>
                  <p className="text-xl font-bold text-brandDark dark:text-white">Excellent</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Methodology</h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              The 5 C’s Framework
            </h3>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              Our methodology prioritizes the core pillars of credit integrity to provide a holistic view of borrower risk profiles.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-sm w-14 h-14 dark:bg-surfaceDark dark:border-brandNavy/30 group-hover:bg-brandPrimary group-hover:border-brandPrimary">
                    <div className="transition-colors text-brandPrimary dark:text-brandAccent group-hover:text-white">
                      {pillar.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
