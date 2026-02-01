import React from "react";

const ISO22301BCMAlignment = () => {
  return (
    <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container py-16 md:py-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            ISO 22301 Alignment &amp; Business Continuity Management
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            The Business Continuity approach is aligned with global best practices
            and ISO 22301 standards, ensuring a structured, auditable, and
            continuously improving Business Continuity Management System (BCMS).
          </p>
        </div>

        {/* PDCA + CLAUSE GRID */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* LEFT – PDCA MODEL */}
          <div className="p-8 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Plan – Do – Check – Act (PDCA)
            </h3>

            <ul className="space-y-3 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>
                <strong>Plan:</strong> Define business continuity objectives,
                identify risks, and establish continuity strategies.
              </li>
              <li>
                <strong>Do:</strong> Implement business continuity procedures and
                recovery strategies across critical functions.
              </li>
              <li>
                <strong>Check:</strong> Monitor, test, and evaluate BCMS
                effectiveness through exercises and audits.
              </li>
              <li>
                <strong>Act:</strong> Address nonconformities and drive continual
                improvement of the BCMS.
              </li>
            </ul>
          </div>

          {/* RIGHT – ISO CLAUSE OVERVIEW */}
          <div className="p-8 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Key ISO 22301 Focus Areas
            </h3>

            <ul className="space-y-3 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Context of the Organization &amp; Scope Definition</li>
              <li>• Leadership Commitment and Governance</li>
              <li>• Risk Assessment and Business Impact Analysis</li>
              <li>• Operational Planning and Continuity Procedures</li>
              <li>• Exercising, Testing, and Performance Evaluation</li>
              <li>• Corrective Actions and Continual Improvement</li>
            </ul>
          </div>

        </div>

        {/* MATURITY MODEL */}
        <div className="grid items-center gap-12 mt-16 lg:grid-cols-2">

          {/* CONTENT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              BCP Maturity Model
            </h3>
            <p className="font-sans text-sm leading-relaxed md:text-base text-brandPrimary dark:text-brandLight/80">
              The maturity model provides a structured view of the organization’s
              current, short-term, and long-term Business Continuity capabilities
              across governance, risk assessment, business impact analysis,
              strategy development, and crisis management.
            </p>
          </div>

          {/* VISUAL */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark">
            <img
              src="/images/bcp-maturity-model.jpg"
              alt="BCP Maturity Model"
              className="object-cover w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ISO22301BCMAlignment;
