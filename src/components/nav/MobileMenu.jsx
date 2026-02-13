import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { NAVIGATION_DATA } from "./constants";

/**
 * MobileMenu.jsx
 * A slide-out navigation drawer with accordion-style nesting for mobile devices.
 */
export const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedKey, setExpandedKey] = useState(null);

  const toggleSection = (key) => {
    setExpandedKey(expandedKey === key ? null : key);
  };

  const getSections = (key) => {
    return NAVIGATION_DATA[`${key}MegaMenu`] || [];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end lg:hidden">
      {/* Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-brandDark/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <div className="relative flex flex-col w-full max-w-[320px] h-full bg-white dark:bg-bgDark shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header Area */}
        <div className="flex items-center justify-between p-5 border-b border-borderLight dark:border-borderDark">
          <Link to="/" onClick={onClose} className="w-32">
            <img src="/rm.png" alt="Logo" className="dark:hidden object-contain" />
            <img src="/riskman-logo-white.svg" alt="Logo" className="hidden dark:block object-contain" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brandPrimary/10 text-brandDark dark:text-brandLight transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-grow overflow-y-auto py-4 px-2">
          {NAVIGATION_DATA.mainNav.map((item) => {
            const isMega = item.type === "mega";
            const isExpanded = expandedKey === item.key;

            return (
              <div key={item.label} className="mb-1">
                {isMega ? (
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="flex-1 p-4 text-[15px] font-bold text-brandDark dark:text-brandLight hover:text-brandPrimary"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => toggleSection(item.key)}
                        className={`p-4 transition-transform duration-300 ${isExpanded ? "rotate-180 text-brandPrimary" : "text-brandDark/40"}`}
                      >
                        <ChevronDown size={20} />
                      </button>
                    </div>

                    {/* Accordion Content */}
                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-6 animate-in slide-in-from-top-2 duration-300">
                        {getSections(item.key).map((section, sIdx) => (
                          <div key={sIdx} className="space-y-3">
                            {section.title && (
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-brandPrimary/60 dark:text-brandGold/60 px-2">
                                {section.title}
                              </h4>
                            )}
                            <div className="space-y-1">
                              {section.items.map((subItem, siIdx) => (
                                <div key={siIdx} className="flex flex-col">
                                  <Link
                                    to={subItem.path}
                                    onClick={onClose}
                                    className="flex items-center gap-2 p-2 text-[14px] font-semibold text-brandDark/80 dark:text-brandLight/80 hover:text-brandPrimary"
                                  >
                                    <ChevronRight size={14} className="text-brandPrimary/40" />
                                    {subItem.label}
                                  </Link>
                                  
                                  {/* Deep Submenus (Optional for Mobile) */}
                                  {subItem.submenus && (
                                    <div className="ml-6 mt-1 flex flex-wrap gap-2">
                                      {subItem.submenus.map((sub) => (
                                        <Link
                                          key={sub.id}
                                          to={sub.path}
                                          onClick={onClose}
                                          className="text-[11px] px-3 py-1.5 rounded-lg bg-brandPrimary/5 dark:bg-white/5 text-brandDark/60 dark:text-brandLight/60 border border-transparent hover:border-brandPrimary/20"
                                        >
                                          {sub.title}
                                        </Link>
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
                ) : (
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="block p-4 text-[15px] font-bold text-brandDark dark:text-brandLight hover:bg-brandPrimary/5 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-borderLight dark:border-borderDark bg-gray-50 dark:bg-white/5">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-3 w-full py-4 bg-brandDark dark:bg-brandGold text-white dark:text-brandDark font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
          >
            <Phone size={18} />
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;