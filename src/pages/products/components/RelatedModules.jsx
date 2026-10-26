import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** The rest of the suite, from inside a module page, as a plain link list. */
const RelatedModules = ({ product, currentSlug }) => {
  const others = product.modules.filter((m) => m.slug !== currentSlug);

  return (
    <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container py-12 md:py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
          <h2 className="text-xl font-bold md:text-2xl text-brandDark dark:text-white">
            Other {product.shortName} modules
          </h2>
          <Link
            to={product.path}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandGold hover:underline underline-offset-4"
          >
            View the full product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 border-t md:grid-cols-2 gap-x-10 border-borderLight dark:border-borderDark">
          {others.map((other) => (
            <li key={other.slug} className="border-b border-borderLight dark:border-borderDark">
              <Link
                to={`${product.path}/${other.slug}`}
                className="flex items-start justify-between gap-4 py-4 group"
              >
                <span>
                  <span className="block text-base font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                    {other.name}
                  </span>
                  <span className="block mt-1 text-sm leading-relaxed text-gray-800 dark:text-white/80">
                    {other.summary}
                  </span>
                </span>
                <ArrowRight className="flex-shrink-0 w-4 h-4 mt-1 transition-transform text-brandNavy/40 dark:text-white/40 group-hover:translate-x-0.5 group-hover:text-brandPrimary dark:group-hover:text-brandGold" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedModules;
