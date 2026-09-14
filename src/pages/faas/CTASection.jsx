import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <div className="p-8 text-center border md:p-14 rounded-3xl bg-brandPrimary/5 dark:bg-brandGold/5 border-borderLight dark:border-borderDark">
          <h2 className="max-w-3xl mx-auto mb-4 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
            Not sure which group you need?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-brandNavy/70 dark:text-white/60">
            Most engagements start with a short review of your current close,
            controls and reporting. We will tell you where the gaps are before
            you commit to anything.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:opacity-90"
          >
            Talk to our FAAS team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
