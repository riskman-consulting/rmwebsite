import React from 'react';
import { Search, Shield, Globe } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="relative py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandNavy dark:text-white">
            Strategic Investigative Solutions
          </h2>
          <div className="w-24 h-1.5 bg-brandGold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Organizations today face sophisticated threats that demand more than just standard oversight. RiskMan delivers high-stakes investigative expertise to identify vulnerabilities and resolve misconduct with absolute precision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Corporate Fraud",
              desc: "Uncover financial irregularities and unethical behavior threatening operational stability."
            },
            {
              icon: Shield,
              title: "Digital Forensics",
              desc: "Secure critical evidence from digital environments to mitigate high-tech risks and breaches."
            },
            {
              icon: Globe,
              title: "Due Diligence",
              desc: "Navigate regulatory landscapes with deep insights into partners, vendors, and transactions."
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 transition-all bg-white border shadow-lg dark:bg-bgDark rounded-2xl hover:shadow-xl border-borderLight dark:border-borderDark group hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6 transition-colors w-14 h-14 bg-brandNavy/5 dark:bg-brandGold/10 rounded-xl group-hover:bg-brandGold group-hover:text-brandDark">
                <service.icon className="text-brandNavy dark:text-brandGold group-hover:text-brandDark" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-brandNavy dark:text-white">{service.title}</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
