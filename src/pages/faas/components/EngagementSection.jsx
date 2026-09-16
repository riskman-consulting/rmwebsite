import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * How an engagement starts. Deliberately the same four steps on every FAAS
 * page — it describes the practice, not the group, so a visitor who lands on
 * a single service page still sees how the work begins.
 *
 * NOTE FOR REVIEW: this describes the standard engagement path. Confirm the
 * steps and the language with the FAAS delivery leads before go-live.
 */
const STEPS = [
  {
    title: "Scoping review",
    text: "A short review of the current close, the controls around it and the reporting that comes off it — enough to say where the gaps actually are.",
  },
  {
    title: "Scope and plan",
    text: "What we take on, what stays with you, the calendar it runs to and who owns each deliverable, agreed in writing before anything moves.",
  },
  {
    title: "Transition",
    text: "Knowledge transfer, access, templates and a parallel run where it matters, so the handover does not land in the middle of a reporting cycle.",
  },
  {
    title: "Run and report",
    text: "Delivery to the agreed calendar with a standing review — what was delivered, what slipped, and what needs a decision from you.",
  },
];

/**
 * `tone` keeps the card, the section and the ring around each step number in
 * step with each other. Passing a bare background class is not enough: cards
 * on a band of their own colour disappear, and the ring that lifts the step
 * number off the card edge has to match whatever the section sits on.
 */
const TONES = {
  page: {
    section: "bg-bgLight dark:bg-bgDark",
    card: "bg-surfaceLight dark:bg-surfaceDark",
    ring: "border-bgLight dark:border-bgDark",
  },
  surface: {
    section: "bg-surfaceLight dark:bg-surfaceDark",
    card: "bg-bgLight dark:bg-bgDark",
    ring: "border-surfaceLight dark:border-surfaceDark",
  },
};

const EngagementSection = ({ tone = "page" }) => {
  const t = TONES[tone] || TONES.page;

  return (
  <section className={`py-14 md:py-20 ${t.section}`}>
    <div className="container">
      <SectionHeading
        eyebrow="Working together"
        title="How an engagement starts"
        lead="No group begins with a long transition. The first weeks are about establishing what is actually happening today, then agreeing what changes."
      />

      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
        {STEPS.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
            className={`relative p-6 pt-8 transition-colors duration-300 border ${t.card} border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent`}
          >
            <span className={`absolute top-0 flex items-center justify-center w-10 h-10 text-sm font-black -translate-y-1/2 border-4 rounded-full left-6 ${t.ring} bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark`}>
              {index + 1}
            </span>
            <h3 className="mb-2 text-base font-bold leading-snug font-heading lg:text-lg text-brandDark dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">
              {step.text}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
  );
};

export default EngagementSection;
