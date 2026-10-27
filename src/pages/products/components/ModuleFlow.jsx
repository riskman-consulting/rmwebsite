import React from "react";
import DocSection from "./DocSection";

/**
 * The full cycle for modules that carry a `flow`: phases, and inside each the
 * numbered steps with who does them and what they leave behind. Used in place
 * of ModuleLifecycle when the short step list is not enough to explain the
 * module. Numbering runs on across phases, so step 9 is step 9 wherever it sits.
 */
const ModuleFlow = ({ mod }) => {
  let counter = 0;

  return (
    <DocSection
      id="how-it-works"
      title="End-to-end process"
      lead={mod.flowLead || "Each step in sequence, with the responsible role and the output it produces."}
    >
      <div className="space-y-10">
        {mod.flow.map((phase) => (
          <div key={phase.title}>
            <div className="pb-3 mb-5 border-b border-borderLight dark:border-borderDark">
              <h3 className="text-lg font-bold leading-snug text-brandDark dark:text-white">
                {phase.title}
              </h3>
              {phase.text && (
                <p className="mt-1 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
                  {phase.text}
                </p>
              )}
            </div>

            <ol className="relative">
              {phase.steps.map((step, index) => {
                counter += 1;
                return (
                  <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
                    {index < phase.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[13px] top-8 bottom-0 w-px bg-borderLight dark:bg-borderDark"
                      />
                    )}
                    <span className="relative flex items-center justify-center flex-shrink-0 text-xs font-bold border rounded-full w-7 h-7 tabular-nums border-brandPrimary/40 dark:border-brandGold/40 text-brandPrimary dark:text-brandGold bg-bgLight dark:bg-bgDark">
                      {counter}
                    </span>
                    <div className="flex-1 pt-0.5">
                      <h4 className="mb-1 text-base font-bold leading-snug text-brandDark dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
                        {step.text}
                      </p>
                      {step.points?.length > 0 && (
                        <ul className="mt-2 space-y-1 text-sm leading-relaxed list-disc pl-5 marker:text-brandNavy/30 dark:marker:text-white/30 text-gray-800 dark:text-white/80">
                          {step.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {(step.who || step.result) && (
                        <dl className="flex flex-wrap mt-3 text-sm gap-x-6 gap-y-1">
                          {step.who && (
                            <div className="flex gap-1.5">
                              <dt className="text-brandNavy/60 dark:text-white/50">Who:</dt>
                              <dd className="font-medium text-brandDark dark:text-white/90">{step.who}</dd>
                            </div>
                          )}
                          {step.result && (
                            <div className="flex gap-1.5">
                              <dt className="text-brandNavy/60 dark:text-white/50">Result:</dt>
                              <dd className="font-medium text-brandDark dark:text-white/90">{step.result}</dd>
                            </div>
                          )}
                        </dl>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </DocSection>
  );
};

export default ModuleFlow;
