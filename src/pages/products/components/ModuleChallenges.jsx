import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * The case for the module — what typically breaks when the work is run on
 * spreadsheets and email, set against what changes once it is run here.
 */
const ModuleChallenges = ({ mod }) => (
  <section
    id="why"
    className="py-14 md:py-20 scroll-mt-[200px] bg-bgLight dark:bg-bgDark"
  >
    <div className="container">
      <SectionHeading
        eyebrow="The case for it"
        title="Where this work usually breaks"
        lead="Not because teams lack rigour — because the record of the work is spread across workbooks, mailboxes and shared drives, and nothing keeps them in step."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Challenges */}
        <div className="space-y-4 lg:col-span-7">
          {mod.challenges.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex gap-4 p-5 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl md:p-6"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-xl bg-brandAccent/15">
                <AlertTriangle className="w-5 h-5 text-brandAccent" />
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-bold leading-snug font-heading md:text-lg text-brandDark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed md:text-[15px] text-brandNavy/70 dark:text-white/60">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-brandDark dark:bg-surfaceDark dark:border dark:border-borderDark lg:sticky lg:top-[210px]">
            <h3 className="mb-6 text-lg font-bold leading-snug font-heading md:text-xl text-white">
              What changes with {mod.shortName}
            </h3>
            <ul className="space-y-4">
              {mod.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-brandAccent">
                    <Check className="w-3 h-3 text-brandDark" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80 md:text-[15px]">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ModuleChallenges;
