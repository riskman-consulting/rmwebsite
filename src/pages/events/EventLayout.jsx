import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/events";

const NAV_ITEMS = [
  { to: `${BASE}/upcoming-events`, label: "Upcoming Events" },
  { to: `${BASE}/past-events`, label: "Past Events" },
  { to: `${BASE}/accomplishments`, label: "Awards" },
  { to: `${BASE}/media-coverage`, label: "Culture At RiskMan" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="Events" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
