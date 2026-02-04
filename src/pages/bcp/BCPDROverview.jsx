import React from "react";

const BCPDROverview = () => {
  return (
    <section className="border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT – VISUAL */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-borderLight dark:border-borderDark shadow-sm">
              <img
                src="/images/bcp-dr-overview.jpg"
                alt="Business Continuity and Disaster Recovery Overview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-2xl font-semibold font-heading md:text-3xl text-brandDark dark:text-brandAccent">
              Business Continuity &amp; Disaster Recovery Overview
            </h2>

            <p className="mb-5 font-sans text-base leading-relaxed md:text-lg text-brandNavy dark:text-brandLight">
              Business Continuity Planning (BCP) and Disaster Recovery (DR) are
              structured disciplines designed to ensure the continuity and
              stability of business operations during and after disruptive
              events. In today’s dynamic business environment, organizations
              face increasing exposure to operational, technology, and external
              risks that can significantly impact service delivery.
            </p>

            <p className="font-sans text-sm leading-relaxed md:text-base text-brandPrimary dark:text-brandLight/80">
              A well-defined BCP and DR framework enables organizations to
              anticipate disruptions, protect critical functions, and respond
              effectively to incidents while minimizing operational, financial,
              regulatory, and reputational impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BCPDROverview;
