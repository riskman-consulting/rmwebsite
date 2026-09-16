import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** The rest of the suite, from inside a module page. */
const RelatedModules = ({ product, currentSlug }) => {
  const others = product.modules.filter((m) => m.slug !== currentSlug);

  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-end sm:justify-between md:mb-10">
          <div>
            <span className="inline-block mb-3 text-xs font-black tracking-[0.2em] uppercase text-brandPrimary dark:text-brandGold">
              The rest of the suite
            </span>
            <h2 className="text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
              Other {product.shortName} modules
            </h2>
          </div>
          <Link
            to={product.path}
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-brandPrimary dark:text-brandGold hover:opacity-80"
          >
            View the full product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {others.map((other, index) => {
            const OtherIcon = other.icon;
            return (
              <motion.div
                key={other.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
              >
                <Link
                  to={`${product.path}/${other.slug}`}
                  className="flex flex-col h-full p-6 transition-all duration-300 border group bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent hover:shadow-lg"
                >
                  <span className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                    <OtherIcon className="w-6 h-6 transition-colors duration-300 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                  </span>
                  <h3 className="mb-2 text-base font-bold leading-snug font-heading text-brandDark dark:text-white">
                    {other.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                    {other.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-auto text-xs font-black tracking-wide uppercase text-brandPrimary dark:text-brandGold">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedModules;
