import React from "react";

const CTAContact = () => {
  return (
    <section className="bg-brandDark dark:bg-bgDark">
      <div className="container py-16 md:py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT – MESSAGE */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white font-heading md:text-3xl dark:text-brandAccent">
              Strengthen Your Business Continuity Readiness
            </h2>
            <p className="mb-6 font-sans text-base leading-relaxed md:text-lg text-brandLight">
              A structured Business Continuity framework helps organizations
              respond effectively to disruptions, protect critical operations,
              and meet regulatory and audit expectations. RiskMan supports
              organizations in building resilient, tested, and sustainable
              continuity programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 font-semibold transition rounded-xl bg-brandAccent text-brandDark hover:opacity-90">
                Connect with RiskMan
              </button>
              <button className="px-6 py-3 transition border rounded-xl border-brandAccent text-brandAccent hover:bg-brandAccent hover:text-brandDark">
                Request a BCP Discussion
              </button>
            </div>
          </div>

          {/* RIGHT – VISUAL */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-borderDark shadow-sm">
              <img
                src="/images/cta-bcp.jpg"
                alt="Business Continuity Readiness"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Accent block */}
            <div className="absolute hidden -bottom-6 -left-6 md:block w-28 h-28 bg-brandAccent rounded-xl" />
          </div>

        </div>

        {/* FOOT NOTE */}
        <div className="max-w-3xl mt-12 text-sm text-brandLight/70">
          <p>
            RiskMan delivers Business Continuity Planning and Disaster Recovery
            services aligned with organizational objectives, industry standards,
            and regulatory expectations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTAContact;
