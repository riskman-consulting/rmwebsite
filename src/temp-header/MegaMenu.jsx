import React, { useState } from "react";
import { NAVIGATION_DATA } from "./constants";
import { Link, useLocation } from "react-router-dom";

export const MegaMenu = ({ menuKey }) => {
  const [openSubmenuPath, setOpenSubmenuPath] = useState(null);
  const location = useLocation();

  let sections = [];

  switch (menuKey) {
    case "services":
      sections = NAVIGATION_DATA.servicesMegaMenu;
      break;
    case "about":
      sections = NAVIGATION_DATA.aboutMegaMenu;
      break;
    case "industries":
      sections = NAVIGATION_DATA.industriesMegaMenu;
      break;
    case "governance":
      sections = NAVIGATION_DATA.governanceMegaMenu;
      break;
    case "events":
      sections = NAVIGATION_DATA.eventsMegaMenu;
      break;
    case "solutions":
      sections = NAVIGATION_DATA.solutionsMegaMenu;
      break;
    case "sources":
      sections = NAVIGATION_DATA.sourcesMegaMenu;
      break;
    default:
      return null;
  }

  const gridCols =
    sections.length === 1
      ? "grid-cols-1"
      : sections.length === 2
      ? "grid-cols-2"
      : sections.length === 3
      ? "grid-cols-3"
      : "grid-cols-4";

  return (
    <div
      className="
        mt-3
        rounded-xl
        shadow-2xl
        border
        bg-surfaceLight/95 dark:bg-surfaceDark/95
        backdrop-blur-md
        border-borderLight dark:border-borderDark
        p-6
        w-max
        max-w-[90vw]
        z-[9999]
      "
    >
      <div className={`grid ${gridCols} gap-x-12 gap-y-8`}>
        {sections.map((section, idx) => (
          <div key={idx} className="transition-opacity duration-300">
            {section.title && (
              <h3 className="mb-4 text-xs font-black tracking-widest uppercase text-brandPrimary/80 dark:text-brandGold/80">
                {section.title}
              </h3>
            )}

            <ul className="space-y-3">
              {section.items.map((item) => {
                const hasSubmenus = item.submenus && item.submenus.length > 0;
                const isSubmenuOpen = openSubmenuPath === item.path;
                
                // Detection for Active URL
                const isUrlActive = location.pathname === item.path || (location.pathname + location.hash) === item.path;

                return (
                  <li key={item.path} className="group">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        to={item.path}
                        className={`
                          flex-1 text-[15px] font-semibold transition-all duration-300 relative
                          ${isUrlActive 
                            ? "text-brandPrimary dark:text-brandGold drop-shadow-[0_0_8px_rgba(var(--brandPrimary-rgb),0.4)]" 
                            : "text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandGold"
                          }
                        `}
                      >
                        {/* Active Indicator Bar (No Underline) */}
                        {isUrlActive && (
                          <span className="absolute w-1 h-4 -translate-y-1/2 rounded-full -left-3 top-1/2 bg-brandPrimary dark:bg-brandGold animate-pulse" />
                        )}
                        {item.label}
                      </Link>

                      {hasSubmenus && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenSubmenuPath(isSubmenuOpen ? null : item.path);
                          }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${
                            isSubmenuOpen 
                              ? "bg-brandPrimary/10 dark:bg-brandGold/10 rotate-90" 
                              : "hover:bg-brandPrimary/5 dark:hover:bg-brandGold/5"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 ${isSubmenuOpen ? "text-brandPrimary dark:text-brandGold" : "text-brandDark/50 dark:text-brandLight/50"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* SubMenu rendering logic */}
                    {hasSubmenus && isSubmenuOpen && (
                      <ul className="pl-4 mt-3 space-y-2 duration-200 origin-top border-l-2 border-brandPrimary/20 dark:border-brandGold/20 animate-in fade-in zoom-in-95">
                        {item.submenus.map((sub) => {
                          const isSubUrlActive = location.pathname === sub.path || (location.pathname + location.hash) === sub.path;
                          return (
                            <li key={sub.id}>
                              <Link
                                to={`${sub.path}`}
                                className={`block text-[13px] font-medium transition-colors ${
                                  isSubUrlActive
                                    ? "text-brandPrimary dark:text-brandGold font-bold"
                                    : "text-brandDark/70 dark:text-brandLight/70 hover:text-brandPrimary dark:hover:text-brandGold"
                                }`}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;