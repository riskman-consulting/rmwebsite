import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FAAS_GROUPS } from "../faasData";

const RelatedGroups = ({ currentSlug }) => {
  const others = FAAS_GROUPS.filter((group) => group.slug !== currentSlug);

  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
          Other FAAS services
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {others.map((group) => {
            const Icon = group.icon;
            return (
              <Link
                key={group.slug}
                to={group.path}
                className="flex flex-col p-6 transition-all duration-300 border group bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent dark:hover:border-brandAccent hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                  <Icon className="w-6 h-6 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                </div>
                <h3 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
                  {group.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                  {group.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-auto text-xs font-black tracking-wide uppercase text-brandPrimary dark:text-brandGold">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedGroups;
