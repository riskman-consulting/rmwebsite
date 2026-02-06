import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { ShieldCheck, FileText, Globe } from "lucide-react";

function Layout() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between py-4">
          {/* Brand Logo Placeholder */}
          <div onClick={() => navigate("")} className="text-2xl font-black tracking-tighter font-heading text-brandPrimary dark:text-brandGold">
            ISO's
          </div>

          {/* Links */}
          <div className="flex items-center gap-1 text-sm sm:gap-4">
            <NavItem to="iso-27001"
              label="ISO-27001" />
            <NavItem to="iso-27701"
              label="ISO-27701" />
            <NavItem to="iso-22301"
              label="ISO-22301" />
            <NavItem to="iso-31000"
              label="ISO-31000" />
            <NavItem to="iso-42001"
              label="ISO-42001" />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

// Helper component for cleaner link logic
const NavItem = ({ to, icon = "", label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200
      ${isActive
        ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
        : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </NavLink>
);

export default Layout;