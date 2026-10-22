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
        {/* lg+: four columns sized to their content, so neither the "IT Risk
            Management" heading nor the subscribe card gets squeezed. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.25fr)] gap-10 lg:gap-8 xl:gap-12 mb-14">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
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

            <p className="text-brandNavy/60 dark:text-brandLight/60 text-sm leading-relaxed max-w-md">
              RiskMan provides expert Assurance & Advisory services with major focus on Risk based internal audits, ERM, TPRM, SOC 1, SOC 2, BCP/DR, ITGC/ ITAC reviews, ISO certifications, ESG assessments, Credit rating advisory, Business valuations, Digital transformation, Concurrent audits, Policy and SOPs - helping businesses grow with confidence.
            </p>

            <div className="flex gap-4">
              <a href="mailto:contact@riskman.in" className="footer-icon" aria-label="Email RiskMan">
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/riskman-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="RiskMan on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.google.com/maps/place/RiskMan+Consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="RiskMan on Google Maps"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
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
            <h4 className="footer-heading">IT Risk Management</h4>
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

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 w-full max-w-md lg:max-w-none">
            <InsightsSubscribe />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-borderLight dark:border-borderDark flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-6">
          <p className="text-sm text-brandNavy/40 dark:text-brandLight/40">
            RiskMan © {new Date().getFullYear()}. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-brandNavy/60 dark:text-brandLight/60">
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
        aria-label="Scroll to top"
        className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brandLight dark:bg-surfaceDark shadow-lg border border-borderLight dark:border-borderDark flex items-center justify-center text-brandNavy dark:text-brandAccent hover:bg-brandNavy hover:text-white transition-all transform hover:-translate-y-1"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
