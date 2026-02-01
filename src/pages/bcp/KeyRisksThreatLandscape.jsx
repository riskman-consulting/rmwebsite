import React from "react";

const KeyRisksThreatLandscape = () => {
  return (
    <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container py-16 md:py-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            Key Risks &amp; Threat Landscape
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            Automotive organizations are exposed to a wide range of operational,
            technology, people, and external risks that can disrupt critical
            business functions. The following risks have been identified as key
            threat areas impacting business continuity.
          </p>
        </div>

        {/* RISK GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* IT & NETWORK RISKS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              IT &amp; Network Risks
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• IT Applications Loss</li>
              <li>• Network Connection Loss</li>
              <li>• Network / IT Equipment Failure</li>
              <li>• Power Outage</li>
            </ul>
          </div>

          {/* INFRASTRUCTURE & FACILITY RISKS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Infrastructure &amp; Facility Risks
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Fire / Explosion</li>
              <li>• Key Equipment Failure</li>
              <li>• Onsite Security Issues</li>
              <li>• Transportation Disruptions</li>
            </ul>
          </div>

          {/* CYBER & SYSTEMIC RISKS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Cyber &amp; Systemic Risks
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Cybersecurity Threats</li>
              <li>• Data Protection Weaknesses</li>
              <li>• Remote Access Vulnerabilities</li>
              <li>• System Availability Issues</li>
            </ul>
          </div>

          {/* SUPPLIER & THIRD-PARTY RISKS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Supplier &amp; Third-Party Risks
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Supplier Failure</li>
              <li>• Third-Party Dependency Risks</li>
              <li>• Limited Contingency Arrangements</li>
            </ul>
          </div>

          {/* PEOPLE & OPERATIONAL RISKS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              People &amp; Operational Risks
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Workforce Availability Challenges</li>
              <li>• Limited Awareness of Emerging Threats</li>
              <li>• Onsite Acts of Violence</li>
            </ul>
          </div>

          {/* NATURAL & EXTERNAL EVENTS */}
          <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
            <h3 className="mb-4 text-lg font-semibold font-heading text-brandDark dark:text-brandAccent">
              Natural &amp; External Events
            </h3>
            <ul className="space-y-2 text-sm text-brandPrimary dark:text-brandLight/80">
              <li>• Earthquake</li>
              <li>• Flood</li>
              <li>• Epidemic / Pandemic</li>
            </ul>
          </div>

        </div>

        {/* VISUAL STRIP */}
        <div className="mt-16">
          <div className="aspect-[16/6] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark">
            <img
              src="/images/key-risks-landscape.jpg"
              alt="Key Risks and Threat Landscape"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyRisksThreatLandscape;
