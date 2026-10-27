import React from "react";
import DocSection from "./DocSection";

/** Who works in the module day to day, and what each of them does there. */
const ModuleRoles = ({ mod }) => (
  <DocSection
    id="who"
    title="Roles and responsibilities"
    lead="Every role works on the same record, and each sees the part for which it is accountable."
  >
    <dl className="border-t divide-y border-borderLight dark:border-borderDark divide-borderLight dark:divide-borderDark">
      {mod.roles.map((role) => (
        <div
          key={role.role}
          className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
        >
          <dt className="text-base font-bold leading-snug text-brandDark dark:text-white">
            {role.role}
          </dt>
          <dd className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
            {role.text}
          </dd>
        </div>
      ))}
    </dl>
  </DocSection>
);

export default ModuleRoles;
