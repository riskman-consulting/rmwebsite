import React from "react";

const WhyBCPBusinessNeed = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-16 md:py-20">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
            Why Business Continuity Planning is Critical
          </h2>
          <p className="font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
            Recent internal audits and industry observations highlight Business
            Continuity as a key risk area for automotive organizations. Increasing
            dependence on digital systems, interconnected supply chains, and
            complex operations makes proactive continuity planning essential.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT – CONTENT */}
          <div>
            <ul className="space-y-4 font-sans text-sm md:text-base text-brandPrimary dark:text-brandLight/80">
              <li>
                • Internal Audit (2020–21, QIV) identified Business Continuity
                risks requiring structured mitigation.
              </li>
              <li>
                • Automotive organizations face heightened exposure to IT system
                failures, cyber incidents, infrastructure outages, and supplier
                disruptions.
              </li>
              <li>
                • Unplanned disruptions can lead to production delays, safety
                concerns, regulatory impact, and reputational damage.
              </li>
              <li>
                • BCP enables organizations to maintain operational stability
                while responding effectively to unforeseen events.
              </li>
            </ul>
          </div>

          {/* RIGHT – VISUAL */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark shadow-sm">
              <img
                src="/images/why-bcp-critical.jpg"
                alt="Why Business Continuity Planning is Critical"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Accent */}
            <div className="absolute hidden -top-6 -right-6 md:block w-28 h-28 bg-brandAccent/90 rounded-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyBCPBusinessNeed;
