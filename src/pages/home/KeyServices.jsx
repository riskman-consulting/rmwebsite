import React from "react";
import { ArrowUpRight } from "lucide-react";
import riskAssessmentImage from '../../assets/images/home/risk-assessment-audit.png';
import operationalFinancialImage from '../../assets/images/home/operational-financial-audit.png';
import riskComplianceAuditImage from '../../assets/images/home/risk-compliance-audit.png';
import itCybersecurityImage from '../../assets/images/home/it-cybersecurity-audit.png';

const KeyServices = () => {
  const services = [
    {
      id: "01",
      title: "Risk & Assessment Audits",
      description:
        "We evaluate key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      image: riskAssessmentImage,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2L3 6v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V6l-9-4z" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Operational & Financial Audits",
      description:
        "Comprehensive audits focused on improving efficiency, financial accuracy, and governance controls.",
      image: operationalFinancialImage,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M3 3h18v18H3V3zm4 4h4v4H7V7zm6 0h4v10h-4V7z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Risk Compliance Audits",
      description:
        "Ensuring regulatory compliance and minimizing exposure to compliance-related risks.",
      image: riskComplianceAuditImage,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z" />
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "IT & Cybersecurity Audits",
      description:
        "Auditing IT systems and cybersecurity controls to protect digital assets and infrastructure.",
      image: itCybersecurityImage,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          <path d="M11 10h2v5h-2zm0-3h2v2h-2z" />
        </svg>
      ),
    },
  ];

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark"
    >
      <div className="container">
        {/* Centered Header */}
        <div className="mb-16 text-start">
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Key Services
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-brandDark dark:text-white">
            Comprehensive Audit Solutions
            <br />
            for Every Challenge
          </h2>

          <p className="max-w-3xl mb-8 text-lg text-brandNavy dark:text-white/70">
            Explore our specialized internal audit services designed to manage
            risk, enhance control, and ensure operational and regulatory
            excellence.
          </p>

          <button
            onClick={scrollTop}
            className="px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
          >
            Book Consultation
          </button>
        </div>

        {/* Balanced 2x2 Grid of Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden transition-all duration-300 border shadow-lg group rounded-3xl min-h-[320px] border-borderLight bg-surfaceLight hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 transition-transform duration-500 bg-center bg-cover group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-surfaceLight/95 via-surfaceLight/90 to-surfaceLight/85 dark:from-surfaceDark/95 dark:via-surfaceDark/90 dark:to-surfaceDark/85" />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                {/* Top Section */}
                <div>
                  {/* Number Badge & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-xl bg-brandDark/10 group-hover:bg-brandDark dark:bg-brandAccent/15 dark:group-hover:bg-brandAccent">
                      <div className="transition-colors duration-300 text-brandDark group-hover:text-white dark:text-brandAccent dark:group-hover:text-brandDark">
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-6xl font-bold select-none text-brandGold/20 dark:text-brandAccent/10">
                      {service.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-4 text-2xl font-bold md:text-3xl text-brandDark dark:text-white">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-brandNavy dark:text-white/70">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section - Arrow Button */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={scrollTop}
                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full border-brandGold hover:bg-brandGold hover:border-brandGold dark:border-brandAccent dark:hover:bg-brandAccent group/btn"
                  >
                    <ArrowUpRight
                      size={20}
                      className="transition-colors duration-300 text-brandDark dark:text-brandAccent group-hover/btn:text-white dark:group-hover/btn:text-brandDark"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;