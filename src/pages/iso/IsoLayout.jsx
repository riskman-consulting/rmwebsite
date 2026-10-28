import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/iso-certifications";

const NAV_ITEMS = [
  { to: `${BASE}/iso-27001`, label: "ISO 27001" },
  { to: `${BASE}/iso-27701`, label: "ISO 27701" },
  { to: `${BASE}/iso-22301`, label: "ISO 22301" },
  { to: `${BASE}/iso-31000`, label: "ISO 31000" },
  { to: `${BASE}/iso-42001`, label: "ISO 42001" },
  { to: `${BASE}/tisax`, label: "TISAX" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="ISO Standards" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
