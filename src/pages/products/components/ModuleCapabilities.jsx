import React from "react";
import DocSection from "./DocSection";

/**
 * What the module does, as a list of features separated by rules. `points` is
 * optional, so a feature that is explained in one paragraph does not need
 * filler bullets.
 */
const ModuleCapabilities = ({ mod }) => (
  <DocSection
    id="capabilities"
    title={`What ${mod.shortName} does`}
    lead={mod.description}
  >
    <div className="divide-y divide-borderLight dark:divide-borderDark">
      {mod.capabilities.map((cap) => {
        const Icon = cap.icon;
        return (
          <article key={cap.title} className="py-6 first:pt-0 last:pb-0">
            <h3 className="flex items-center gap-2.5 mb-2 text-base font-bold leading-snug text-brandDark dark:text-white">
              {Icon && (
                <Icon
                  aria-hidden="true"
                  className="flex-shrink-0 w-[18px] h-[18px] text-brandPrimary dark:text-brandGold"
                />
              )}
              {cap.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
              {cap.text}
            </p>
            {cap.points?.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc pl-5 marker:text-brandNavy/30 dark:marker:text-white/30 text-gray-800 dark:text-white/80">
                {cap.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  </DocSection>
);

export default ModuleCapabilities;
