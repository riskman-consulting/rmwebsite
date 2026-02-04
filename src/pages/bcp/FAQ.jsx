import React from "react";

const FAQ = () => {
  return (
    <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container py-16 md:py-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            Common questions related to Business Continuity Planning (BCP) and
            Disaster Recovery (DR), based on organizational, audit, and
            operational considerations.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-4xl space-y-6">

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              What is the objective of Business Continuity Planning?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              The objective of Business Continuity Planning is to ensure that
              critical business functions can continue or be restored within
              acceptable timeframes during and after a disruptive event.
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              How is Business Impact Analysis (BIA) used in BCP?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              Business Impact Analysis identifies critical processes, assesses
              the impact of disruption over time, and defines recovery
              priorities, including Maximum Tolerable Downtime and recovery
              objectives.
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              What types of risks are addressed under BCP and DR?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              BCP and DR address a wide range of risks including IT system
              failures, cyber incidents, infrastructure disruptions, supplier
              failures, workforce unavailability, and natural or external events
              such as floods or pandemics.
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              How often should BCP plans be tested?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              BCP plans should be tested regularly through walkthroughs,
              simulations, and scenario-based exercises to validate effectiveness
              and identify areas for improvement.
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              How does ISO 22301 support Business Continuity?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              ISO 22301 provides a structured framework for establishing,
              implementing, monitoring, and continually improving a Business
              Continuity Management System aligned with global best practices.
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-2 text-base font-semibold font-heading text-brandDark dark:text-brandAccent">
              Why is training and awareness important in BCP?
            </h3>
            <p className="text-sm leading-relaxed text-brandPrimary dark:text-brandLight/80">
              Training and awareness ensure that employees understand their
              roles, responsibilities, and response procedures, enabling
              effective execution of BCP plans during actual incidents.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
