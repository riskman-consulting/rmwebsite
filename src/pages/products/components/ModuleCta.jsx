import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** Closing call to action, kept to one line of copy and two links. */
const ModuleCta = ({ mod }) => (
  <section className="border-t border-borderLight dark:border-borderDark">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 gap-6 p-6 border-l-[3px] md:p-8 lg:grid-cols-12 lg:items-center lg:gap-12 bg-surfaceLight dark:bg-surfaceDark border-brandAccent rounded-r-lg">
        <div className="lg:col-span-8">
          <h2 className="text-2xl lg:text-[1.75rem] font-heading font-bold leading-snug text-brandDark dark:text-white">
            See {mod.shortName} Applied to Your Organisation
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-gray-800 dark:text-white/80">
            Schedule a one-hour session with our team. We will demonstrate
            {mod.shortName} using your own processes and controls, so you can
            assess how a complete cycle would work for your organisation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent"
          >
            Book a Walkthrough
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-2 py-2.5 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandGold hover:underline underline-offset-4"
          >
            Ask a Question
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ModuleCta;
