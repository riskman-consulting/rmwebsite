import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_DATA } from "./constants";

export const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedKey, setExpandedKey] = useState(null);

  const toggleSection = (key) => {
    if (!key) return;
    setExpandedKey(expandedKey === key ? null : key);
  };

  const getSections = (key) => {
    switch (key) {
      case "services":
        return NAVIGATION_DATA.servicesMegaMenu;
      case "about":
        return NAVIGATION_DATA.aboutMegaMenu;
      case "industries":
        return NAVIGATION_DATA.industriesMegaMenu;
      case "governance":
        return NAVIGATION_DATA.governanceMegaMenu;
      case "events":
        return NAVIGATION_DATA.eventsMegaMenu;
      default:
        return [];
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* =======================
          BACKDROP
      ======================= */}
      <div
        className="absolute inset-0 bg-brandDark/50 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />

      {/* =======================
          SIDEBAR
      ======================= */}
      <div className="relative flex flex-col w-full h-full max-w-sm shadow-2xl bg-surfaceLight dark:bg-surfaceDark animate-in slide-in-from-right">

        {/* =======================
            HEADER WITH LOGO
        ======================= */}
        <div className="flex items-center justify-between p-6 border-b border-borderLight dark:border-borderDark">
          {/* Logo */}
          <Link to="/" onClick={onClose} className="flex items-center">
            <div className="flex items-center w-[140px] h-[36px]">
              <img
                src="/riskman-logo-white.svg"
                alt="RiskMan"
                className="hidden object-contain w-auto h-full dark:block"
                draggable={false}
              />
              <img
                src="/rm.png"
                alt="RiskMan"
                className="block object-contain w-auto h-full dark:hidden"
                draggable={false}
              />
            </div>
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 transition rounded-full hover:bg-brandPrimary/10"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-brandDark dark:text-brandLight" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* =======================
            CONTENT
        ======================= */}
        <div className="flex-grow p-4 space-y-2 overflow-y-auto">
          {NAVIGATION_DATA.mainNav.map((item) => {
            const isMegaMenu = item.type === "mega";
            const isExpanded = expandedKey === item.key;

            return (
              <div
                key={item.label}
                className="pb-2 border-b last:border-0 border-borderLight dark:border-borderDark"
              >
                {/* Main Menu Item */}
                {isMegaMenu ? (
                  // For mega menu items: separate clickable areas
                  <div className="flex items-center gap-2">
                    {/* Main link - navigates to page */}
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="flex-1 p-4 text-left transition rounded-xl hover:bg-brandPrimary/10"
                    >
                      <span
                        className={`font-semibold ${
                          isExpanded
                            ? "text-brandPrimary dark:text-brandGold"
                            : "text-brandDark dark:text-brandLight"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>

                    {/* Toggle button - opens dropdown */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSection(item.key);
                      }}
                      className="p-4 transition rounded-xl hover:bg-brandPrimary/10"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300
                          text-brandDark dark:text-brandLight
                          ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  // For regular items: clicking navigates and closes menu
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center justify-between w-full p-4 text-left transition rounded-xl hover:bg-brandPrimary/10"
                  >
                    <span className="font-semibold text-brandDark dark:text-brandLight">
                      {item.label}
                    </span>
                  </Link>
                )}

                {/* =======================
                    ACCORDION (Only for mega menu items)
                ======================= */}
                {isMegaMenu && isExpanded && (
                  <div className="px-4 py-3 mt-1 space-y-6 rounded-xl bg-bgLight dark:bg-bgDark animate-in slide-in-from-top-4">
                    {getSections(item.key || "").map((section, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        {section.title && (
                          <h4 className="text-[10px] font-black uppercase tracking-widest
                            text-brandDark/50 dark:text-brandLight/50">
                            {section.title}
                          </h4>
                        )}

                        <div className="space-y-4">
                          {section.items.map((subItem, siIdx) => (
                            <div key={siIdx} className="space-y-2">
                              <Link
                                to={subItem.path}
                                onClick={onClose}
                                className="block text-sm font-bold text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandGold"
                              >
                                {subItem.label}
                              </Link>

                              {subItem.submenus && (
                                <div className="flex flex-wrap gap-2 pl-2">
                                  {subItem.submenus.map((sub) => (
                                    <a
                                      key={sub.id}
                                      href={`#${sub.id}`}
                                      onClick={onClose}
                                      className="text-[11px] px-2 py-1 rounded
                                        bg-surfaceLight dark:bg-surfaceDark
                                        border border-borderLight dark:border-borderDark
                                        text-brandDark/60 dark:text-brandLight/60
                                        hover:border-brandPrimary dark:hover:border-brandGold
                                        transition-colors"
                                    >
                                      {sub.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =======================
            FOOTER CTA
        ======================= */}
        <div className="p-6 border-t border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-center w-full py-4 font-bold text-white transition shadow-lg rounded-2xl bg-brandPrimary hover:bg-brandNavy active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};