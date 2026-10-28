import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/data-privacy";

const NAV_ITEMS = [
  { to: `${BASE}/dpdp`, label: "DPDP Compliance" },
  { to: `${BASE}/gdpr`, label: "GDPR Compliance" },
  { to: `${BASE}/other`, label: "Other Regulatory Compliances" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="Data Privacy" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
