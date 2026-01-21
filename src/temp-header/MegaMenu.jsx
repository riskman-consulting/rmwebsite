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
            className={`transition-opacity duration-300 ${
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

            <ul className="space-y-3">
              {section.items.map((item) => {
                const hasSubmenus =
                  item.submenus && item.submenus.length > 0;
                const isHovered = hoveredPath === item.path;

                return (
                  <li
                    key={item.path}
                    {...(hasSubmenus && {
                      onMouseEnter: () => setHoveredPath(item.path),
                      onMouseLeave: () => setHoveredPath(null),
                    })}
                  >
                    <a
                      href={item.path}
                      className={`
                        flex items-center justify-between
                        text-[15px] font-semibold
                        transition-colors
                        ${
                          hasSubmenus && isHovered
                            ? "text-brandPrimary dark:text-brandGold"
                            : "text-brandDark dark:text-brandLight"
                        }
                      `}
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

                    {hasSubmenus && isHovered && (
                      <ul className="pl-4 mt-3 space-y-2 border-l-2 border-brandPrimary/30 dark:border-brandGold/30">
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
