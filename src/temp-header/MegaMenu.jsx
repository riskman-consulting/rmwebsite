import React, { useState } from "react";
import { NAVIGATION_DATA } from "./constants";

export const MegaMenu = ({ menuKey }) => {
  const [hoveredPath, setHoveredPath] = useState(null);

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
    default:
      return null;
  }

  const hasSubmenuHover = hoveredPath !== null;

  /* =======================
     COLUMN COUNT (CONTENT-DRIVEN)
  ======================= */
  const columnClass =
    sections.length <= 1
      ? "columns-1 max-w-md"
      : sections.length === 2
      ? "columns-2 max-w-3xl"
      : sections.length === 3
      ? "columns-3 max-w-5xl"
      : "columns-4 max-w-7xl";

  return (
    <>
      {/* BACKDROP BLUR - FIXED POSITIONING */}
      <div className="fixed inset-0 top-20 z-[45] bg-black/40 backdrop-blur-lg pointer-events-none" />

      {/* MEGA MENU CONTENT */}
      <div className="relative z-[46] border-b shadow-xl bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur-sm border-borderLight dark:border-borderDark">
        <div
          className={`mx-auto px-8 py-8 ${columnClass}`}
          style={{ columnGap: "3rem" }}
        >
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`mb-10 break-inside-avoid transition-opacity duration-300 ${
                hasSubmenuHover &&
                !section.items.some((i) => i.path === hoveredPath)
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              {section.title && (
                <h3 className="mb-4 text-xs font-black tracking-widest uppercase text-brandPrimary/80 dark:text-brandGold/80">
                  {section.title}
                </h3>
              )}

              <div className="space-y-3">
                {section.items.map((item) => {
                  const hasSubmenus =
                    item.submenus && item.submenus.length > 0;
                  const isHovered = hoveredPath === item.path;

                  return (
                    <div
                      key={item.path}
                      className="transition-all duration-200"
                      {...(hasSubmenus && {
                        onMouseEnter: () => setHoveredPath(item.path),
                        onMouseLeave: () => setHoveredPath(null),
                      })}
                    >
                      {/* PRIMARY ITEM */}
                      <a
                        href={item.path}
                        className={`flex items-center justify-between
                          text-[15px] font-semibold
                          transition-colors ${
                            hasSubmenus && isHovered
                              ? "text-brandPrimary dark:text-brandGold"
                              : "text-brandDark dark:text-brandLight"
                          }`}
                      >
                        {item.label}

                        {hasSubmenus && (
                          <svg
                            className={`w-4 h-4 transition-all duration-300 ${
                              isHovered
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-2"
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
                        )}
                      </a>

                      {/* SUBMENU */}
                      {hasSubmenus && (
                        <div
                          className={`mt-3 pl-4 border-l-2
                            border-brandPrimary/30 dark:border-brandGold/30
                            transition-all duration-300 ${
                              isHovered ? "block" : "hidden"
                            }`}
                        >
                          <ul className="space-y-2">
                            {item.submenus.map((sub) => (
                              <li key={sub.id}>
                                <a
                                  href={`#${sub.id}`}
                                  className="block text-[13px] font-medium
                                    text-brandDark/70 dark:text-brandLight/70
                                    hover:text-brandPrimary dark:hover:text-brandGold"
                                >
                                  {sub.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
