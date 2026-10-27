import React from "react";
import { Plus } from "lucide-react";
import DocSection from "./DocSection";

/**
 * Questions that come up in evaluation, as native disclosure rows. The first
 * one starts open so the section does not read as a wall of closed rows.
 */
const ModuleFaqs = ({ mod }) => (
  <DocSection
    id="faqs"
    title="Frequently asked questions"
    lead="If your question is not covered here, please contact us and our team will answer it for your specific requirements."
  >
    <div className="border-t divide-y border-borderLight dark:border-borderDark divide-borderLight dark:divide-borderDark">
      {mod.faqs.map((faq, index) => (
        <details key={faq.q} open={index === 0} className="group">
          <summary className="flex items-start justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="text-base font-bold leading-snug text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
              {faq.q}
            </h3>
            <Plus
              aria-hidden="true"
              className="flex-shrink-0 w-4 h-4 mt-1 transition-transform duration-200 text-brandNavy/50 dark:text-white/50 group-open:rotate-45"
            />
          </summary>
          <p className="pb-5 pr-8 -mt-1 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  </DocSection>
);

export default ModuleFaqs;
