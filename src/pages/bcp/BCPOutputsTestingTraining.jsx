import React from "react";

const BCPOutputsTestingTraining = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-16 md:py-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            BCP Outputs, Testing &amp; Training
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            Effective Business Continuity is supported by clearly defined
            deliverables, regular testing, and ongoing training to ensure plans
            remain current, practical, and executable during real-world
            disruptions.
          </p>
        </div>

        {/* OUTPUTS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* OUTPUTS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              BCP Outputs &amp; Documentation
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Business Continuity Management Policy</li>
              <li>• Business Impact Analysis (BIA)</li>
              <li>• Business Continuity Strategy</li>
              <li>• Business Continuity &amp; Disaster Recovery Plans</li>
              <li>• Crisis Communication &amp; Incident Response Plans</li>
            </ul>
          </div>

          {/* DASHBOARDING */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Dashboarding &amp; Metrics
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• BCP/DR dashboards and reporting metrics</li>
              <li>• Visibility into readiness and recovery capabilities</li>
              <li>• Management review and performance tracking</li>
            </ul>
          </div>

          {/* TESTING */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Exercising &amp; Testing
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Structured walkthrough exercises</li>
              <li>• Simulation and scenario-based testing</li>
              <li>• Evaluation of response effectiveness</li>
            </ul>
          </div>

          {/* TRAINING */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Training &amp; Awareness
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• BCP awareness and training programs</li>
              <li>• Role-based response training</li>
              <li>• Continuous staff preparedness initiatives</li>
            </ul>
          </div>

          {/* SCENARIO TESTING */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Scenario-Based Testing
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Cyber incident and malware infection scenarios</li>
              <li>• Natural disaster and flood zone scenarios</li>
              <li>• Emergency Operations Center response testing</li>
            </ul>
          </div>

          {/* MAINTENANCE */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Annual Maintenance &amp; Review
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Regular simulation exercises</li>
              <li>• Periodic internal audits and gap assessments</li>
              <li>• Supplier resilience and benchmarking reviews</li>
            </ul>
          </div>

        </div>

        {/* VISUAL */}
        <div className="mt-16">
          <div className="aspect-[16/6] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark">
            <img
              src="/images/bcp-testing-training.jpg"
              alt="BCP Outputs Testing and Training"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BCPOutputsTestingTraining;
