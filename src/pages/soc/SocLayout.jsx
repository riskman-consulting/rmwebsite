import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/soc-services";

const NAV_ITEMS = [
  { to: `${BASE}/soc-1`, label: "SOC 1" },
  { to: `${BASE}/soc-2`, label: "SOC 2" },
  { to: `${BASE}/soc-3`, label: "SOC 3" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="SOC Assurance" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
