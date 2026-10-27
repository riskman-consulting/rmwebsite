import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PRODUCTS, PRODUCTS_BASE_PATH } from "./productsData";

/**
 * Product section shell.
 *
 * The sub-nav carries the product name on the left and its modules as tabs on
 * the right — the same pattern as the FAAS and Risk Advisory layouts.
 * `sticky top-[123px]` parks it under the global fixed header (43px banner +
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
      <nav className="sticky top-[123px] z-40 border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div /* px-4 matches .container's own 16px padding-inline, so the brand lines
             up with the page heading and the last tab lines up with the right
             edge of the page content. xl:px-10 inset the bar by 24px. */
          className="container flex items-center justify-between gap-4 px-4 py-4 mx-auto">
          {/* Product name */}
          <div
            onClick={() => navigate(product.path)}
            className="flex-shrink-0 text-base font-bold cursor-pointer sm:text-lg text-brandDark dark:text-white"
          >
            RiskMan GRC
          </div>

          {/* Desktop module tabs */}
          <div className="items-center justify-end flex-1 hidden min-w-0 gap-1 lg:flex min-[1100px]:gap-2 flex-wrap">
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
            <div className="container flex flex-col gap-1 px-4 py-3 mx-auto">
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
 * Desktop tab. Six module names do not fit on one row below ~1100px, so the
 * tab carries the short form (ERM, RBIA, ATR) below that and the full name
 * above — rather than wrapping the bar onto a second line.
 *
 * The switch is deliberately not at xl (1280px): a 1920px screen at 150%
 * scaling gives a ~1280px viewport, and browser chrome (Edge's window inset,
 * scrollbar) decides which side of 1280 it lands on, so Chrome and Edge showed
 * different labels on the same machine. .container caps at 1200px, so the
 * full labels fit well before 1280.
 */
const NavItem = ({ to, label, compact }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) => `
      flex flex-shrink-0 whitespace-nowrap items-center px-1.5 min-[1100px]:px-2.5 py-1.5 rounded-md
      text-[13px] min-[1100px]:text-sm font-medium
      transition-colors duration-150
      ${isActive
        ? "bg-brandPrimary/10 text-brandPrimary font-semibold dark:bg-brandGold/15 dark:text-brandGold"
        : "text-brandNavy/70 dark:text-white/65 hover:text-brandPrimary dark:hover:text-brandGold hover:bg-brandPrimary/5 dark:hover:bg-white/5"
      }
    `}
  >
    <span className="min-[1100px]:hidden">{compact || label}</span>
    <span className="hidden min-[1100px]:inline">{label}</span>
  </NavLink>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center px-3 py-2.5 rounded-md
      text-base font-medium
      transition-colors duration-150
      ${isActive
        ? "bg-brandPrimary/10 text-brandPrimary font-semibold dark:bg-brandGold/15 dark:text-brandGold"
        : "text-brandNavy/75 dark:text-white/70 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {label}
  </NavLink>
);

export default Layout;
