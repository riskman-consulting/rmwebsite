import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FAAS_GROUPS } from "./faasData";
import SectionHeading from "../../components/ui/SectionHeading";

/**
 * The six groups, each card carrying its own scope list.
 *
 * The lists run to seven items in places, so they sit in two columns from sm
 * up — a single column turned the longer cards into a wall of ticks and left
 * the shorter ones looking unfinished next to them.
 */
const ServiceGroupsSection = () => (
  <section id="groups" className="py-14 md:py-20 scroll-mt-48 bg-bgLight dark:bg-bgDark">
    <div className="container">
      <SectionHeading
        eyebrow="The practice"
        title="What sits under FAAS"
        lead="Engage a single group or the full stack — the teams share one set of books, one reporting cadence, and one point of contact."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-6">
        {FAAS_GROUPS.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.slug}
              id={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
              /* scroll-mt clears the fixed global header plus the FAAS
                 sub-nav when something deep-links to this anchor */
              className="flex flex-col p-6 transition-all duration-300 border scroll-mt-48 group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl md:p-8 hover:shadow-xl hover:border-brandAccent"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="flex items-center justify-center flex-shrink-0 transition-all duration-300 w-14 h-14 rounded-xl bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:bg-brandAccent">
                  <Icon className="transition-colors duration-300 w-7 h-7 text-brandPrimary dark:text-brandGold group-hover:text-brandDark" />
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1.5 text-lg font-bold leading-snug font-heading sm:text-xl md:text-2xl text-brandDark dark:text-white">
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
                    {group.summary}
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-x-5 gap-y-2.5 pt-5 mb-6 border-t sm:grid-cols-2 border-borderLight dark:border-borderDark">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-[7px] rounded-full flex-shrink-0 bg-brandAccent" />
                    <span className="text-[13px] font-semibold leading-snug text-brandDark/80 dark:text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={group.path}
                className="inline-flex items-center gap-1.5 mt-auto text-xs font-black tracking-wide uppercase transition-colors text-brandPrimary dark:text-brandGold hover:opacity-80"
              >
                View {group.title}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceGroupsSection;
