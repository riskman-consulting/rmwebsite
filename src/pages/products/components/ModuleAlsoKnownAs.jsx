import React from "react";
import DocSection from "./DocSection";

/**
 * "Also known as": the other names buyers use when they search for this kind
 * of software, with a short paragraph that explains how the module covers
 * them. Reads `alsoKnownAs` ({ text, terms }) from a module or the product;
 * renders nothing when it is absent.
 */
const ModuleAlsoKnownAs = ({ mod }) => {
  const aka = mod.alsoKnownAs;
  if (!aka?.terms?.length) return null;

  return (
    <DocSection
      id="also-known-as"
      title="Also known as"
      lead="Different teams use different names for the same kind of software."
    >
      <p className="text-[15px] leading-relaxed text-gray-800 dark:text-white/80">{aka.text}</p>
      <ul className="flex flex-wrap gap-2 mt-5" aria-label="Other names for this software">
        {aka.terms.map((term) => (
          <li
            key={term}
            className="px-3 py-1.5 text-sm font-medium border rounded-md text-brandNavy dark:text-white/85 border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark"
          >
            {term}
          </li>
        ))}
      </ul>
    </DocSection>
  );
};

export default ModuleAlsoKnownAs;
