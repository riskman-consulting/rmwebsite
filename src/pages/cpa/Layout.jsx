import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/cpa-us-assurance";

const NAV_ITEMS = [
  { to: `${BASE}/financial-statement-audits`, label: "Financial Statement Audits" },
  { to: `${BASE}/internal-control-reviews`, label: "Internal Control Reviews" },
  // { to: `${BASE}/compliance-audits`, label: "Compliance Audits" },
  // { to: `${BASE}/quality-assurance`, label: "Quality Assurance" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="US Assurance Support" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
