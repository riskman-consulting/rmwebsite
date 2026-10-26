import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "./productsData";
import { productSeo } from "./productsSeo";

const product = PRODUCTS[0];
const seo = productSeo(product);

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        {/* JSON-LD is baked into the static HTML by generate-meta; adding
            it here too would give crawlers every schema twice. */}
      </Helmet>

      {/* Intro */}
      <section>
        <div className="container py-12 md:py-16">
          <p className="mb-3 text-sm text-brandNavy/55 dark:text-white/45">Products</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-[32px] md:text-[38px] text-brandDark dark:text-white">
            {product.name}
          </h1>
          <p className="max-w-3xl mt-4 text-lg leading-relaxed text-gray-800 dark:text-white/80">
            {product.summary}
          </p>
          <div className="flex flex-col gap-3 mt-7 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="border-t border-borderLight dark:border-borderDark">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
            <header className="lg:col-span-4">
              <h2 className="text-2xl font-bold leading-tight md:text-[30px] text-brandDark dark:text-white">
                What is inside
              </h2>
              <p className="mt-3 text-[15px] md:text-base leading-relaxed text-gray-800 dark:text-white/80">
                Six modules on one data model. The audit plan, the controls,
                the SOX programme, the policies, the actions and the risk
                register all read from the same source.
              </p>
            </header>

            <ul className="border-t lg:col-span-8 border-borderLight dark:border-borderDark">
              {product.modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <li key={mod.slug} className="border-b border-borderLight dark:border-borderDark">
                    <Link
                      to={`${product.path}/${mod.slug}`}
                      className="flex items-start gap-4 py-5 group"
                    >
                      <Icon
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandPrimary dark:text-brandGold"
                      />
                      <span className="flex-1">
                        <span className="block text-base font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                          {mod.name}
                        </span>
                        <span className="block mt-1 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
                          {mod.summary}
                        </span>
                      </span>
                      <ArrowRight className="flex-shrink-0 w-4 h-4 mt-1 transition-transform text-brandNavy/40 dark:text-white/40 group-hover:translate-x-0.5 group-hover:text-brandPrimary dark:group-hover:text-brandGold" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
