import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../components/layout/SubNav";

const BASE = "/services/risk-advisory";

const NAV_ITEMS = [
  { to: `${BASE}/rbia`, label: "RBIA" },
  { to: `${BASE}/erm`, label: "ERM" },
  { to: `${BASE}/tprm`, label: "TPRM" },
  { to: `${BASE}/sox-icofr-ifc`, label: "SOX/ICOFR/IFC" },
  { to: `${BASE}/csa`, label: "CSA" },
  { to: `${BASE}/concurrent-audits`, label: "Concurrent Audits" },
  { to: `${BASE}/formulation-of-policies-and-sops`, label: "Policies & SOPs" },
];

function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <SubNav title="Risk Assurance & Advisory" basePath={BASE} items={NAV_ITEMS} />

      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
