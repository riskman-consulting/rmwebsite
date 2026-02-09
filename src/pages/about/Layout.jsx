import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 64;

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Smooth scroll with navbar offset
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          NAV_HEIGHT;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const goSection = (hash) => {
    setOpen(false);
    navigate(`/about${hash}`);
  };

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">

      {/* NAV */}
      <nav className="fixed w-full z-50 h-16 backdrop-blur-md
        bg-surfaceLight/80 dark:bg-surfaceDark/80
        border-b border-gray-200 dark:border-gray-800">

        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer font-black text-xl tracking-wide
            text-brandPrimary dark:text-brandGold"
          >
            About
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavItem to="#introduction" label="Overview" go={goSection} />
            <NavItem to="#mission-vision" label="Vision & Mission" go={goSection} />
            <NavItem to="#riskman-teams" label="RiskMan Teams" go={goSection} />
            <NavItem to="#co-founders" label="Co-founders" go={goSection} />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brandPrimary dark:text-brandGold"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300
          ${open ? "max-h-80 py-4" : "max-h-0"}
          overflow-hidden`}>

          <div className="flex flex-col gap-4 px-6 text-sm font-semibold">
            <MobileNavItem to="#introduction" label="Overview" go={goSection}/>
            <MobileNavItem to="#mission-vision" label="Vision & Mission" go={goSection}/>
            <MobileNavItem to="#riskman-teams" label="RiskMan Teams" go={goSection}/>
            <MobileNavItem to="#co-founders" label="Co-founders" go={goSection}/>
          </div>
        </div>
      </nav>

      {/* PAGE */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({ to, label, go }) {
  const { hash } = useLocation();
  const active = hash === to;

  return (
    <button
      onClick={() => go(to)}
      className={`relative hover:text-brandPrimary dark:hover:text-brandGold
        transition duration-200
        ${active ? "text-brandPrimary dark:text-brandGold" : ""}
      `}
    >
      {label}
      {active && (
        <span className="absolute -bottom-2 left-0 w-full h-[2px]
          bg-brandPrimary dark:bg-brandGold rounded"/>
      )}
    </button>
  );
}

function MobileNavItem({ to, label, go }) {
  const { hash } = useLocation();
  const active = hash === to;

  return (
    <button
      onClick={() => go(to)}
      className={`text-left py-2 border-b border-gray-200 dark:border-gray-800
        ${active ? "text-brandPrimary dark:text-brandGold font-bold" : ""}
      `}
    >
      {label}
    </button>
  );
}

export default Layout;