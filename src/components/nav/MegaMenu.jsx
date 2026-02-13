import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_DATA } from "./constants";
import { ChevronRight } from "lucide-react";

/**
 * MegaMenu.jsx
 * A high-performance, smooth dropdown menu with nested submenu support.
 */
export const MegaMenu = ({ menuKey }) => {
  const [openSubmenuPath, setOpenSubmenuPath] = useState(null);
  const location = useLocation();

  // Dynamically fetch sections based on the active key
  const sections = NAVIGATION_DATA[`${menuKey}MegaMenu`] || [];

  // Determine grid layout based on number of sections
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  }[sections.length] || "grid-cols-4";

  if (sections.length === 0) return null;

  return (
    <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
      {/* The 'pt-2' above acts as a hover bridge. 
        The container below uses glassmorphism for a premium feel.
      */}
      <div className="w-screen max-w-6xl p-8 rounded-3xl border shadow-2xl bg-white/95 dark:bg-surfaceDark/95 backdrop-blur-xl border-borderLight dark:border-borderDark">
        <div className={`grid ${gridCols} gap-x-12 gap-y-10`}>
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              {section.title && (
                <h3 className="mb-6 text-[11px] font-black tracking-[0.2em] uppercase text-brandPrimary/50 dark:text-brandGold/60">
                  {section.title}
                </h3>
              )}

              <ul className="space-y-1">
                {section.items.map((item) => {
                  const hasSubmenus = item.submenus && item.submenus.length > 0;
                  const isSubmenuOpen = openSubmenuPath === item.path;
                  const isUrlActive = location.pathname === item.path;

                  return (
                    <li key={item.path} className="group/item">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          to={item.path}
                          className={`flex-1 py-2 px-3 rounded-xl text-[14px] font-semibold transition-all duration-200 
                            ${isUrlActive 
                              ? "bg-brandPrimary/5 text-brandPrimary dark:text-brandGold" 
                              : "text-brandDark/80 dark:text-brandLight/80 hover:bg-brandPrimary/5 hover:text-brandPrimary dark:hover:text-brandGold"
                            }`}
                        >
                          {item.label}
                        </Link>

                        {hasSubmenus && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenSubmenuPath(isSubmenuOpen ? null : item.path);
                            }}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isSubmenuOpen 
                                ? "bg-brandPrimary/10 text-brandPrimary dark:text-brandGold" 
                                : "text-brandDark/30 hover:text-brandPrimary dark:hover:text-brandGold"
                            }`}
                          >
                            <ChevronRight 
                              size={14} 
                              className={`transition-transform duration-300 ${isSubmenuOpen ? "rotate-90" : ""}`} 
                            />
                          </button>
                        )}
                      </div>

                      {/* Nested Sub-Submenus */}
                      {hasSubmenus && isSubmenuOpen && (
                        <ul className="mt-2 ml-4 space-y-1 border-l-2 border-brandPrimary/10 dark:border-brandGold/10 animate-in slide-in-from-left-2 duration-300">
                          {item.submenus.map((sub) => {
                            const isSubActive = location.pathname === sub.path;
                            return (
                              <li key={sub.id}>
                                <Link
                                  to={sub.path}
                                  className={`block px-5 py-2 text-[13px] font-medium transition-colors rounded-r-lg
                                    ${isSubActive 
                                      ? "text-brandPrimary bg-brandPrimary/5 dark:text-brandGold" 
                                      : "text-brandDark/60 dark:text-brandLight/60 hover:text-brandPrimary dark:hover:text-brandGold hover:bg-brandPrimary/5"
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
    </div>
  );
};

export default MegaMenu;