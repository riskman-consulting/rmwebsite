import React, { useEffect, useState } from "react";
import { NAVIGATION_DATA } from "./constants";
import { Link, useLocation } from "react-router-dom";

export const MegaMenu = ({ menuKey }) => {
  const [activePath, setActivePath] = useState(null);
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
    default:
      return null;
  }

  useEffect(() => {
    setActivePath(null);
  }, [menuKey]);

  /* =======================
     CONTENT-DRIVEN GRID
  ======================= */
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
      "
    >
      <div className={`grid ${gridCols} gap-x-12 gap-y-8`}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="transition-opacity duration-300"
          >
            {section.title && (
              <h3 className="mb-4 text-xs font-black tracking-widest uppercase text-brandPrimary/80 dark:text-brandGold/80">
                {section.title}
              </h3>
            )}

            <ul className="space-y-3">
              {section.items.map((item) => {
                const hasSubmenus = item.submenus && item.submenus.length > 0;
                const [basePath, hashPart] = String(item.path || "").split("#");
                const targetHash = hashPart ? `#${hashPart}` : "";
                const isSameBase =
                  basePath &&
                  (location.pathname === basePath ||
                    location.pathname.startsWith(`${basePath}/`));
                const isHashActive =
                  !!hashPart &&
                  location.pathname === basePath &&
                  location.hash === targetHash;
                const isRouteActive = !hashPart && isSameBase;
                const isOpen = activePath === item.path;
                const isActive = isOpen || isHashActive || isRouteActive;
                const submenuId = `submenu-${item.path
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;
                const activePillClass =
                  "inline-flex items-center px-3 py-1 rounded-full bg-brandAccent/10 dark:bg-brandGold/15 text-brandPrimary dark:text-brandGold font-bold";

                return (
                  <li key={item.path}>
                    {hasSubmenus ? (
                      <div className="flex items-center justify-between min-w-0 gap-3">
                        <Link
                          to={item.path}
                          className={`
                            flex-1 min-w-0 whitespace-normal leading-snug
                            text-[13px] font-semibold transition-colors
                            ${
                              isActive
                                ? "text-brandPrimary dark:text-brandGold"
                                : "text-brandDark dark:text-brandLight"
                            }
                          `}
                        >
                          {isActive ? (
                            <span className={activePillClass}>{item.label}</span>
                          ) : (
                            item.label
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setActivePath((prev) =>
                              prev === item.path ? null : item.path
                            )
                          }
                          aria-expanded={isOpen}
                          aria-controls={submenuId}
                          className={`
                            flex items-center justify-center w-6 h-6 flex-shrink-0 transition-colors
                            ${
                              isActive
                                ? "text-brandPrimary dark:text-brandGold"
                                : "text-brandDark/70 dark:text-brandLight/70"
                            }
                          `}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isOpen ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`
                          flex items-center justify-between min-w-0 whitespace-normal leading-snug
                          text-[13px] font-semibold transition-colors
                          ${
                            isActive
                              ? "text-brandPrimary dark:text-brandGold"
                              : "text-brandDark dark:text-brandLight"
                          }
                        `}
                      >
                        {isActive ? (
                          <span className={activePillClass}>{item.label}</span>
                        ) : (
                          item.label
                        )}
                      </Link>
                    )}

                    {hasSubmenus && isOpen && (
                      <ul
                        id={submenuId}
                        className="pl-4 mt-3 space-y-2 border-l-2 border-brandPrimary/30 dark:border-brandGold/30"
                      >
                        {item.submenus.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={`${sub.path}`}
                              className="block text-[13px] font-medium
                                text-brandDark/70 dark:text-brandLight/70
                                hover:text-brandPrimary dark:hover:text-brandGold"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
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
