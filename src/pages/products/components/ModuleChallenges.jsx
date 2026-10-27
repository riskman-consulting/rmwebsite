import React from "react";
import { Check } from "lucide-react";
import DocSection from "./DocSection";

/**
 * What typically breaks when the work runs on spreadsheets and email, followed
 * by what changes once it runs here.
 */
const ModuleChallenges = ({ mod }) => (
  <DocSection
    id="why"
    title="The challenge"
    lead="The expertise is rarely the problem. The difficulty is that the work is spread across workbooks, email threads and shared folders, and keeping them aligned becomes a task in itself."
  >
    <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
      {mod.challenges.map((item) => (
        <article key={item.title}>
          <h3 className="mb-1.5 text-base font-bold leading-snug text-brandDark dark:text-white">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
            {item.text}
          </p>
        </article>
      ))}
    </div>

    <div className="pl-5 mt-10 border-l-[3px] border-brandAccent">
      <h3 className="mb-3 text-base font-bold text-brandDark dark:text-white">
        What {mod.shortName} delivers
      </h3>
      <ul className="space-y-2">
        {mod.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex gap-2.5 text-[15px] leading-relaxed text-gray-800 dark:text-white/80"
          >
            <Check
              className="flex-shrink-0 w-4 h-4 mt-1 text-brandPrimary dark:text-brandGold"
              strokeWidth={2.5}
            />
            {outcome}
          </li>
        ))}
      </ul>
    </div>
  </DocSection>
);

export default ModuleChallenges;
