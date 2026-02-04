import React from "react";

const BCPDRFrameworkPhases = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-16 md:py-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            BCP / DR Framework &amp; Implementation Phases
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            The Business Continuity and Disaster Recovery framework follows a
            structured, phased approach to ensure systematic identification,
            mitigation, and recovery of critical business functions.
          </p>
        </div>

        {/* PHASE GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* PHASE I */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase I – Project Initiation
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Establish the need and scope of BCP</li>
              <li>• Obtain management support</li>
              <li>• Identify stakeholders and resources</li>
              <li>• Develop project management work plan</li>
            </ul>
          </div>

          {/* PHASE II */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase II – Business Impact Analysis (BIA)
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Identify critical business processes</li>
              <li>• Analyze operational and system impacts</li>
              <li>• Determine Maximum Tolerable Downtime (MTD)</li>
              <li>• Rank processes based on recovery priority</li>
            </ul>
          </div>

          {/* PHASE III */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase III – Recovery Strategy
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Assess recovery options for facilities and systems</li>
              <li>• Define risk reduction measures</li>
              <li>• Develop recovery strategies for people, processes, and technology</li>
            </ul>
          </div>

          {/* PHASE IV */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase IV – Plan Design &amp; Development
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Define scope, assumptions, and outage scenarios</li>
              <li>• Develop response and recovery procedures</li>
              <li>• Identify alternate sites and emergency locations</li>
              <li>• Prepare business and facility recovery plans</li>
            </ul>
          </div>

          {/* PHASE V */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase V – Implementation
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Implement Business Resumption and DR plans</li>
              <li>• Establish crisis communication mechanisms</li>
              <li>• Integrate IT and cyber incident response plans</li>
            </ul>
          </div>

          {/* PHASE VI */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase VI – Testing
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Conduct walkthroughs and checklist testing</li>
              <li>• Perform simulation exercises</li>
              <li>• Evaluate response effectiveness</li>
            </ul>
          </div>

          {/* PHASE VII */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark lg:col-span-3">
            <h3 className="mb-3 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Phase VII – Awareness, Training &amp; Maintenance
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• BCP awareness and training programs</li>
              <li>• Ongoing monitoring and plan updates</li>
              <li>• Periodic reviews and continuous improvement</li>
            </ul>
          </div>

        </div>

        {/* FRAMEWORK VISUAL */}
        <div className="mt-16">
          <div className="aspect-[16/6] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark">
            <img
              src="/images/bcp-framework-phases.jpg"
              alt="BCP DR Framework Phases"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BCPDRFrameworkPhases;
