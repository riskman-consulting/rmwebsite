import React from "react";
import { toTitleCase } from "../../../utils/titleCase";

/**
 * Section shell for the module pages. Heading and lead on the left, content on
 * the right, sections separated by a rule. Reads like product documentation:
 * no eyebrow labels, no entrance animation, one background throughout.
 *
 * `wide` drops the side column, for content that needs the full width
 * (screenshots).
 */
const DocSection = ({ id, title, lead, wide = false, children }) => (
  <section
    id={id}
    className="scroll-mt-[195px] border-t border-borderLight dark:border-borderDark"
  >
    <div className="container py-12 md:py-16">
      {wide ? (
        <>
          <header className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-brandDark dark:text-white">
              {toTitleCase(title)}
            </h2>
            {lead && (
              <p className="mt-3 text-base leading-relaxed text-gray-800 dark:text-white/80">
                {lead}
              </p>
            )}
          </header>
          {children}
        </>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4">
            <div className="lg:sticky lg:top-[205px]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-brandDark dark:text-white">
                {toTitleCase(title)}
              </h2>
              {lead && (
                <p className="mt-3 text-base leading-relaxed text-gray-800 dark:text-white/80">
                  {lead}
                </p>
              )}
            </div>
          </header>
          <div className="lg:col-span-8">{children}</div>
        </div>
      )}
    </div>
  </section>
);

export default DocSection;
