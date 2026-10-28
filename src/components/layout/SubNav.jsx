import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Shared section sub-navigation (CPA, SOC, ISO, ...), so every section bar has
 * the same height, type scale and alignment.
 *
 * `sticky top-[123px]` parks it directly under the global fixed header (43px
 * banner + 80px navbar) and keeps it in normal flow, so pages need no top
 * padding to clear it. It is deliberately not `fixed w-screen`: 100vw includes
 * the scrollbar, which pushed the centred .container ~8px right of the page
 * content below.
 *
 * items: [{ to: "/services/soc-services/soc-1", label: "SOC 1", short?: "..." }]
 * `short` is shown on the desktop tabs when the full labels would not fit in
 * one row; the mobile dropdown always shows the full label.
 */
function SubNav({ title, basePath, items }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // The more tabs there are, the wider the screen needs to be before they fit
  // beside the title in one row; below that the dropdown is used. Full class
  // strings are listed so Tailwind keeps them.
  const bp =
    items.length > 6
      ? { show: "xl:flex", hide: "xl:hidden" }
      : items.length > 4
        ? { show: "lg:flex", hide: "lg:hidden" }
        : { show: "md:flex", hide: "md:hidden" };

  // Close the mobile dropdown after navigating.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-[123px] z-40 border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
      <div className="container flex items-center justify-between gap-4 py-4">
        <div
          onClick={() => navigate(basePath)}
          className="flex-shrink-0 text-base font-black tracking-tighter cursor-pointer sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
        >
          {title}
        </div>

        <div className={`items-center justify-end hidden gap-2 ${bp.show}`}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) => `
                whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-200
                ${isActive
                  ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
                  : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
                }
              `}
            >
              {item.short || item.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`p-2 text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 ${bp.hide}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`border-t border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark ${bp.hide}`}>
          <div className="container flex flex-col gap-2 py-4">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) => `
                  px-4 py-3 rounded-lg font-bold transition-colors duration-200
                  ${isActive
                    ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
                    : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default SubNav;
