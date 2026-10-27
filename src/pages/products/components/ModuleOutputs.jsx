import React from "react";
import { Check } from "lucide-react";
import DocSection from "./DocSection";

/**
 * What comes out of the module, and the regulations and frameworks it is built
 * around — the second as a two-column reference table.
 */
const ModuleOutputs = ({ mod }) => (
  <DocSection
    id="outputs"
    title="Outputs and compliance alignment"
    lead="The records the module produces, and the regulations and frameworks they support."
  >
    <h3 className="mb-4 text-base font-bold text-brandDark dark:text-white">
      Reports and records
    </h3>
    <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
      {mod.deliverables.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-[15px] leading-snug text-gray-800 dark:text-white/80"
        >
          <Check
            className="flex-shrink-0 w-4 h-4 mt-0.5 text-brandPrimary dark:text-brandGold"
            strokeWidth={2.5}
          />
          {item}
        </li>
      ))}
    </ul>

    <h3 className="mt-10 mb-3 text-base font-bold text-brandDark dark:text-white">
      Built around
    </h3>
    <dl className="border-t divide-y border-borderLight dark:border-borderDark divide-borderLight dark:divide-borderDark">
      {mod.standards.map((standard) => (
        <div
          key={standard.name}
          className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
        >
          <dt className="text-sm font-semibold leading-snug text-brandDark dark:text-white">
            {standard.name}
          </dt>
          <dd className="text-sm leading-relaxed text-gray-800 dark:text-white/80">
            {standard.note}
          </dd>
        </div>
      ))}
    </dl>

    <p className="mt-4 text-xs leading-relaxed text-brandNavy/50 dark:text-white/40">
      These references describe the context the module is designed to support.
      They are not a statement of certification, and do not replace
      professional judgement on your reporting obligations.
    </p>
  </DocSection>
);

export default ModuleOutputs;
