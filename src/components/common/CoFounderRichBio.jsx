import React from "react";
import { Award, Briefcase, TrendingUp, Target } from "lucide-react";

export function CoFounderRichBio({
  badge,
  summaryBlocks,
  expertise,
  highlightsTitle,
  highlights,
  certTitle,
  certifications,
  philosophyBlocks
}) {
  return (
    <>
      {/* LEFT COLUMN */}
      <div className="space-y-6">

        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brandGold/10">
            <Briefcase className="w-5 h-5 text-brandGold" />
          </div>
          <div className="inline-block px-4 py-2 text-sm font-semibold border rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border-brandGold/30">
            {badge}
          </div>
        </div>

        {/* Summary Blocks */}
        {summaryBlocks.map((text, i) => (
          <div key={i} className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandGold">
            <p className="text-base leading-relaxed text-brandDark/90 dark:text-white/90">
              {text}
            </p>
          </div>
        ))}

        {/* Core Expertise */}
        <div className="p-6 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandPrimary/10">
              <Target className="w-5 h-5 text-brandPrimary dark:text-brandAccent" />
            </div>
            <h4 className="text-base font-bold">Core Expertise</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {expertise.map((item) => (
              <span key={item} className="px-3 py-2 text-xs font-medium border rounded-lg bg-brandPrimary/5 border-brandPrimary/20">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="p-6 border rounded-2xl bg-gradient-to-br from-brandGold/5 to-brandPrimary/5 border-brandGold/30">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-brandGold" />
            <h4 className="text-base font-bold">{highlightsTitle}</h4>
          </div>

          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        {/* Certifications */}
        <div className="p-6 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <Award className="w-5 h-5 text-brandGold" />
            <h4 className="text-base font-bold">{certTitle}</h4>
          </div>

          <ul className="space-y-3 text-sm">
            {certifications.map((c, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-2 h-2 mt-1.5 rounded-full bg-brandGold" />
                <div>
                  <strong>{c.title}</strong>
                  {c.org && (
                    <span className="block text-xs opacity-70">{c.org}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Philosophy */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 border-brandPrimary">
          {philosophyBlocks.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}