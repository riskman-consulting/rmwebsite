



import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Layout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen z-[100] bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          {/* Brand Logo */}
          <div 
            onClick={() => navigate("")} 
            className="text-base font-black tracking-tighter cursor-pointer sm:text-xl font-heading text-brandPrimary dark:text-brandGold"
          >
            Risk Assurance & Advisory
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-2 lg:flex xl:gap-4">
            <NavItem to="rbia" label="RBIA" />
            <NavItem to="erm" label="ERM" />
            <NavItem to="tprm" label="TPRM" />
            <NavItem to="sox-icofr-ifc" label="SOX/ICOFR/IFC" />
            <NavItem to="csa" label="CSA" />
            <NavItem to="concurrent-audits" label="Concurrent Audits" />
            <NavItem to="formulation-of-policies-and-sops" label="Policies & SOPs" />
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
              <MobileNavItem to="rbia" label="RBIA" onClick={closeMobileMenu} />
              <MobileNavItem to="erm" label="ERM" onClick={closeMobileMenu} />
              <MobileNavItem to="tprm" label="TPRM" onClick={closeMobileMenu} />
              <MobileNavItem to="sox-icofr-ifc" label="SOX/ICOFR/IFC" onClick={closeMobileMenu} />
              <MobileNavItem to="csa" label="CSA" onClick={closeMobileMenu} />
              <MobileNavItem to="concurrent-audits" label="Concurrent Audits" onClick={closeMobileMenu} />
              <MobileNavItem to="formulation-of-policies-and-sops" label="Policies & SOPs" onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </nav>

      {/* Page Content - Add top padding to account for fixed nav */}
      <main className=" animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

// Desktop Navigation Item
const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg
      text-xs xl:text-sm
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