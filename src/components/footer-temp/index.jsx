import React from "react";
import { Mail, Linkedin, MapPin, ChevronUp } from "lucide-react";
import { ENTERPRISE_SERVICES, IT_RISK_SERVICES } from "./data";
import { Link } from "react-router-dom";
import InsightsSubscribe from "../common/Subscriber";

const Footer = () => {
  return (
    <footer className="bg-bgLight dark:bg-surfaceDark pt-16 md:pt-20 pb-10 border-t border-borderLight dark:border-borderDark">

      <div className="container mx-auto px-6 lg:px-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-4 space-y-6">
            <Link to="/" className="flex w-[140px] h-[48px]">
              <img
                className="object-contain w-full h-full dark:hidden"
                src="/rm.png"
                alt="Riskman"
              />
              <img
                className="hidden object-contain w-full h-full dark:block"
                src="/riskman-logo-white.svg"
                alt="Riskman"
              />
            </Link>

            <p className="text-brandNavy/60 dark:text-brandLight/60 text-sm md:text-base leading-relaxed max-w-md">
              RiskMan provides expert Assurance & Advisory services with major focus on Risk based internal audits, ERM, TPRM, SOC 1, SOC 2, BCP/DR, ITGC/ ITAC reviews, ISO certifications, ESG assessments, Credit rating advisory, Business valuations, Digital transformation, Concurrent audits, Policy and SOPs - helping businesses grow with confidence.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="mailto:contact@riskman.in" className="footer-icon">
                <Mail size={18} />
              </Link>
              <Link to="https://www.linkedin.com/company/riskman-consulting" className="footer-icon">
                <Linkedin size={18} />
              </Link>
              <Link to="https://www.google.com/maps/place/RiskMan+Consulting" className="footer-icon">
                <MapPin size={18} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1 lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="footer-heading">Enterprise Services</h4>
              <ul className="space-y-3">
                {ENTERPRISE_SERVICES.map((s, idx) => (
                  <li key={idx}>
                    <Link to={s.path} className="footer-link">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">IT Risk Mgmt</h4>
              <ul className="space-y-3">
                {IT_RISK_SERVICES.map((s, idx) => (
                  <li key={idx}>
                    <Link to={s.path} className="footer-link">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-4">
            <InsightsSubscribe />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-borderLight dark:border-borderDark flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="text-sm text-brandNavy/40 dark:text-brandLight/40">
            RiskMan © 2026. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-brandNavy/60 dark:text-brandLight/60">
            <Link to="/privacy-policy" className="hover:text-brandAccent transition">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-brandAccent transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-brandAccent transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 md:bottom-10 right-6 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brandLight dark:bg-surfaceDark shadow-lg border border-borderLight dark:border-borderDark flex items-center justify-center text-brandNavy dark:text-brandAccent hover:bg-brandNavy hover:text-white transition-all transform hover:-translate-y-1"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;