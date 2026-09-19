import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FAAS_BASE_PATH, FAAS_GROUPS } from "./faasData";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close the mobile dropdown after navigating to another group.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen z-[100] bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Sub navigation. `sticky top-[128px]` parks it directly under the
          global fixed header (48px banner + 80px navbar). */}
      <nav className="sticky top-[128px] z-40 border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div /* px-4 matches .container's own 16px padding-inline, so the brand lines
             up with the page heading and the last pill lines up with the right
             edge of the page content. xl:px-10 inset the bar by 24px. */
          className="container flex items-center justify-between gap-4 px-4 py-4 mx-auto">
          {/* Brand */}
          <div
            onClick={() => navigate(FAAS_BASE_PATH)}
            className="flex-shrink-0 text-base font-black tracking-tighter cursor-pointer sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
          >
            FAAS
          </div>

          {/* Desktop navigation. Six full titles cannot share a row with the
              brand below 1280px, so each pill carries the short label up to xl
              and the full title from xl up — one clean row at every desktop
              width instead of a second row of pills. */}
          <div className="items-center justify-end flex-1 hidden min-w-0 gap-1.5 lg:flex xl:gap-2">
            {FAAS_GROUPS.map((group) => (
              <NavItem
                key={group.slug}
                to={group.path}
                label={group.navLabel}
                compact={group.navShort}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 transition-colors rounded-lg lg:hidden dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t lg:hidden border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <div className="container flex flex-col gap-2 px-4 py-4 mx-auto">
              {FAAS_GROUPS.map((group) => (
                <MobileNavItem
                  key={group.slug}
                  to={group.path}
                  label={group.navLabel}
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

// Desktop Navigation Item
const NavItem = ({ to, label, compact }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) => `
      flex flex-shrink-0 whitespace-nowrap items-center gap-2 px-3 xl:px-3.5 py-2 rounded-full
      text-[11px] xl:text-xs
      font-extrabold tracking-wide
      transition-all duration-200 border
      ${isActive
        ? "bg-brandPrimary text-white border-brandPrimary shadow-sm dark:bg-brandGold dark:text-brandDark dark:border-brandGold"
        : "border-borderLight dark:border-borderDark text-brandNavy/70 dark:text-white/60 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    <span className="xl:hidden">{compact || label}</span>
    <span className="hidden xl:inline">{label}</span>
  </NavLink>
);

// Mobile Navigation Item
const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-3 rounded-xl
      text-sm
      font-extrabold tracking-wide
      transition-all duration-200 border
      ${isActive
        ? "bg-brandPrimary text-white border-brandPrimary shadow-sm dark:bg-brandGold dark:text-brandDark dark:border-brandGold"
        : "border-borderLight dark:border-borderDark text-brandNavy/80 dark:text-white/70 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {label}
  </NavLink>
);

export default Layout;
