import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * A slim band of contextual links placed above a page's CTA: from an advisory
 * service page to the RiskMan GRC module that runs the same work as software
 * (module pages link back through `relatedServices` in productsData.js), or to
 * blog posts on the same subject. Gives search engines and readers a path
 * between related pages, with anchor text that says where it leads.
 *
 * Blog links use the post's Sanity slug — the build's SEO report flags the
 * link as broken if a slug changes.
 */
const RelatedLinks = ({ intro, links = [] }) => (
  <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
    <div className="container flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between md:gap-8">
      <p className="max-w-3xl text-[15px] leading-relaxed text-gray-800 dark:text-white/80">{intro}</p>
      <ul className="flex flex-col flex-shrink-0 gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandGold hover:underline underline-offset-4"
            >
              {link.label}
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RelatedLinks;
