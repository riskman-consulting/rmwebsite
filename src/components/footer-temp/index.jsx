import React from "react";
import { ChevronUp } from "lucide-react";
import { ENTERPRISE_SERVICES, IT_RISK_SERVICES } from "./data";
import { PRODUCTS } from "../../pages/products/productsData";
import { Link } from "react-router-dom";
import InsightsSubscribe from "../common/Subscriber";

const grc = PRODUCTS[0];

const FooterColumn = ({ title, children }) => (
  <div>
    <h4 className="footer-heading">{title}</h4>
    <ul className="space-y-2.5">{children}</ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t bg-bgLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container">

        {/* Brand and link columns */}
        <div className="grid grid-cols-1 gap-10 pt-14 pb-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex w-[130px] h-[44px]">
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

            <p className="max-w-sm mt-4 text-sm leading-relaxed text-brandNavy/70 dark:text-brandLight/60">
              Risk, assurance and advisory for companies in India and abroad.
              We also build RiskMan GRC, our software for audit, controls,
              SOX and risk.
            </p>

            <ul className="mt-5 space-y-1.5 text-sm">
              <li>
                <a href="mailto:contact@riskman.in" className="footer-link">
                  contact@riskman.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/riskman-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/RiskMan+Consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services">
            {ENTERPRISE_SERVICES.map((s) => (
              <li key={s.name}>
                <Link to={s.path} className="footer-link">
                  {s.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="IT risk">
            {IT_RISK_SERVICES.map((s) => (
              <li key={s.name}>
                <Link to={s.path} className="footer-link">
                  {s.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={grc.name}>
            {grc.modules.map((mod) => (
              <li key={mod.slug}>
                <Link to={`${grc.path}/${mod.slug}`} className="footer-link">
                  {mod.name}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-borderLight dark:border-borderDark">
          <InsightsSubscribe />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-6 pb-20 text-sm border-t md:pb-6 md:flex-row md:items-center md:justify-between border-borderLight dark:border-borderDark">
          <p className="text-sm text-brandNavy/55 dark:text-brandLight/45">
            © {new Date().getFullYear()} RiskMan Consulting. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Use
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed z-40 flex items-center justify-center w-10 h-10 transition-colors border rounded-full bottom-6 right-6 md:bottom-8 md:right-8 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark text-brandNavy dark:text-brandAccent hover:bg-brandNavy hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark"
      >
        <ChevronUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
