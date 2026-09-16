import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PRODUCTS, PRODUCTS_BASE_PATH } from "./productsData";

/**
 * Product section shell.
 *
 * The sub-nav carries the product name on the left and its modules as pills on
 * the right — the same pattern as the FAAS and Risk Advisory layouts.
 * `sticky top-[128px]` parks it under the global fixed header (48px banner +
 * 80px navbar).
 *
 * Only one product ships today, so the nav shows that product's modules. Once
 * there is a second product this should read the product from the route.
 */
const product = PRODUCTS[0];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen z-[100] bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <nav className="sticky top-[128px] z-40 border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div /* px-4 matches .container's own 16px padding-inline, so the brand lines
             up with the page heading and the last pill lines up with the right
             edge of the page content. xl:px-10 inset the bar by 24px. */
          className="container flex items-center justify-between gap-4 px-4 py-4 mx-auto">
          {/* Product name */}
          <div
            onClick={() => navigate(product.path)}
            className="flex-shrink-0 text-base font-black tracking-tighter cursor-pointer sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
          >
            RiskMan GRC
          </div>

          {/* Desktop module pills */}
          <div className="items-center justify-end flex-1 hidden min-w-0 gap-1 lg:flex xl:gap-2 flex-wrap">
            {product.modules.map((mod) => (
              <NavItem
                key={mod.slug}
                to={`${product.path}/${mod.slug}`}
                label={mod.navLabel}
                compact={mod.shortName}
              />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 transition-colors rounded-lg lg:hidden dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="border-t lg:hidden border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <div className="container flex flex-col gap-2 px-4 py-4 mx-auto">
              {product.modules.map((mod) => (
                <MobileNavItem
                  key={mod.slug}
                  to={`${product.path}/${mod.slug}`}
                  label={mod.navLabel}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

/**
 * Desktop pill. Five module names do not fit on one row below 1280px, so the
 * pill carries the short form (ERM, RBIA, ATR) up to xl and the full name from
 * xl up — rather than wrapping the bar onto a second line.
 */
const NavItem = ({ to, label, compact }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) => `
      flex flex-shrink-0 whitespace-nowrap items-center gap-2 px-1.5 xl:px-3 py-2 rounded-lg
      text-[11px] xl:text-xs
      font-extrabold tracking-wide
      transition-all duration-200
      border border-brandPrimary dark:border-brandGold
      ${isActive
        ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
        : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    <span className="xl:hidden">{compact || label}</span>
    <span className="hidden xl:inline">{label}</span>
  </NavLink>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-3 rounded-lg
      text-sm
      font-extrabold tracking-wide
      transition-all duration-200
      border border-brandPrimary dark:border-brandGold
      ${isActive
        ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
        : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {label}
  </NavLink>
);

export default Layout;
