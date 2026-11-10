import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/digital-transformation";

const NAV_ITEMS = [
  { to: `${BASE}/strategic-pmo`, label: "Strategic PMO" },
  { to: `${BASE}/implementation`, label: "Implementation" },
  { to: `${BASE}/support-services`, label: "Support Services" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="Digital Transformation" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
