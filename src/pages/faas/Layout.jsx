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
        <div className="container flex items-center justify-between gap-4 px-4 lg:px-4 xl:px-10 py-4 mx-auto">
          {/* Brand */}
          <div
            onClick={() => navigate(FAAS_BASE_PATH)}
            className="flex-shrink-0 text-base font-black tracking-tighter cursor-pointer sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
          >
            FAAS
          </div>

          {/* Desktop Navigation */}
          {/* The six FAAS labels are far longer than Risk Advisory's, so they
              will not fit one line next to the brand. They wrap to a second
              row rather than scroll — a scroll container slices a pill in half
              against the brand, which reads as broken. */}
          <div
            className="items-center justify-end flex-1 hidden min-w-0 gap-1 lg:flex xl:gap-2 flex-wrap"
          >
            {FAAS_GROUPS.map((group) => (
              <NavItem key={group.slug} to={group.path} label={group.navLabel} />
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
const NavItem = ({ to, label }) => (
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
    {label}
  </NavLink>
);

// Mobile Navigation Item
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
