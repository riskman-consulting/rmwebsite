import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/financial-advisory";

const NAV_ITEMS = [
  { to: `${BASE}/credit-risk-assessment`, label: "Credit Risk Assessment" },
  { to: `${BASE}/credit-policy-framework`, label: "Credit Policy Framework" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="Financial Advisory" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
