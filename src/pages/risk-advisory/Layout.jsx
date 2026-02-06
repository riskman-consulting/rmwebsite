import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { ShieldCheck, FileText, Globe } from "lucide-react";

function Layout() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen z-[100]  bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed  w-screen z-50 bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-b border-borderLight dark:border-borderDark">
        <div className="container py-4 flex items-center justify-between">
          {/* Brand Logo Placeholder */}
          <div onClick={()=>navigate("")} className="font-heading font-black text-2xl text-brandPrimary dark:text-brandGold tracking-tighter">
            Risk Advisory's
          </div>

          {/* Links */}
          <div className="flex items-center gap-1 sm:gap-4">
            <NavItem to="rbia" icon={""} label="RBIA" />
            <NavItem to="erm" icon={""} label="ERM" />
            <NavItem to="tprm" icon={""} label="TPRM" />
            <NavItem to="sox-icofr-ifc" icon="" label="SOX/ICOFR/IFC" />
            <NavItem to="csa" icon="" label="CSA" />
            <NavItem to="concurrent-audits" icon="" label="Concurrent Audits" />
            <NavItem to="formulation-of-policies-and-sops" icon="" label="Formulation of Policies and SOPs" />
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
const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center text-[12px] gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200
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