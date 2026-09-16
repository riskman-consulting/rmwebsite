import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "./productsData";

const product = PRODUCTS[0];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{`${product.name} | RiskMan Consulting`}</title>
        <meta name="description" content={product.summary} />
        <link rel="canonical" href={`https://www.riskman.in${product.path}`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-surfaceLight dark:bg-surfaceDark">
        <div className="container py-14 md:py-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase rounded-full text-brandPrimary dark:text-brandGold bg-brandPrimary/10 dark:bg-brandGold/10"
          >
            Products
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-3xl font-black leading-tight font-heading sm:text-4xl xl:text-5xl lg:whitespace-nowrap text-brandDark dark:text-white"
          >
            RiskMan{" "}
            <span className="text-brandPrimary dark:text-brandGold">
              GRC
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mb-10 text-lg leading-relaxed md:text-xl text-brandNavy/70 dark:text-white/60"
          >
            {product.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {product.modules.map((mod) => (
              <Link
                key={mod.slug}
                to={`${product.path}/${mod.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-200 border rounded-full border-borderLight dark:border-borderDark text-brandDark dark:text-white/80 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
              >
                {mod.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
              What is inside RiskMan GRC
            </h2>
            <p className="text-lg text-brandNavy/70 dark:text-white/60">
              Five modules on one data model — the audit plan, the controls, the
              policies, the actions and the risk register all read from the same
              source.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {product.modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                >
                  <Link
                    to={`${product.path}/${mod.slug}`}
                    className="flex flex-col h-full p-6 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent"
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-5 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                      <Icon className="w-6 h-6 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                      {mod.name}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                      {mod.summary}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-auto text-xs font-black tracking-wide uppercase text-brandPrimary dark:text-brandGold">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
