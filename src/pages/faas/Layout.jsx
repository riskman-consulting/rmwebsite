import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";
import { FAAS_BASE_PATH, FAAS_GROUPS } from "./faasData";

// Six full group titles don't fit beside the brand in one row, so the desktop
// tabs use each group's short label; the mobile dropdown shows the full title.
const NAV_ITEMS = FAAS_GROUPS.map((group) => ({
  to: group.path,
  label: group.navLabel,
  short: group.navShort,
}));

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="FAAS" basePath={FAAS_BASE_PATH} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
