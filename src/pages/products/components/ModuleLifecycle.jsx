import React from "react";
import DocSection from "./DocSection";

/** The cycle the module runs, as a numbered list joined by a rail. */
const ModuleLifecycle = ({ mod }) => (
  <DocSection
    id="how-it-works"
    title="How it works"
    lead="The key steps, in the order your team completes them."
  >
    <ol className="relative">
      {mod.lifecycle.map((step, index) => (
        <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
          {/* Rail between this step's number and the next one */}
          {index < mod.lifecycle.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[13px] top-8 bottom-0 w-px bg-borderLight dark:bg-borderDark"
            />
          )}
          <span className="relative flex items-center justify-center flex-shrink-0 text-xs font-bold border rounded-full w-7 h-7 tabular-nums border-brandPrimary/40 dark:border-brandGold/40 text-brandPrimary dark:text-brandGold bg-bgLight dark:bg-bgDark">
            {index + 1}
          </span>
          <div className="pt-0.5">
            <h3 className="mb-1 text-base font-bold leading-snug text-brandDark dark:text-white">
              {step.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
              {step.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </DocSection>
);

export default ModuleLifecycle;
