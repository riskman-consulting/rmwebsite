import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { FAAS_GROUPS } from "./faasData";

const ServiceGroupsSection = () => {
  return (
    <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
            What sits under FAAS
          </h2>
          <p className="text-lg text-brandNavy/70 dark:text-white/60">
            Engage a single group or the full stack — the teams share one set of
            books, one reporting cadence, and one point of contact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {FAAS_GROUPS.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.slug}
                id={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                /* scroll-mt clears the fixed global header plus the FAAS
                   sub-nav when something deep-links to this anchor */
                className="flex flex-col p-6 transition-all duration-300 border scroll-mt-48 group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex items-center justify-center flex-shrink-0 transition-all duration-300 w-14 h-14 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                    <Icon className="w-7 h-7 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold font-heading md:text-2xl text-brandDark dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <ul className="grid gap-2.5 mb-6">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0 text-brandAccent" />
                      <span className="text-[15px] text-brandDark/80 dark:text-white/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={group.path}
                  className="inline-flex items-center gap-1.5 mt-auto text-xs font-black tracking-wide uppercase text-brandPrimary dark:text-brandGold hover:gap-2.5 transition-all"
                >
                  View {group.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGroupsSection;
