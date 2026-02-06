import React from "react";

const StrategicImperative = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-32 h-72 w-72 rounded-full bg-brandGold/10 blur-[90px]" />
        <div className="absolute -bottom-24 -left-32 h-72 w-72 rounded-full bg-brandAccent/10 blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#000_1px,transparent_0)] [background-size:26px_26px] dark:opacity-[0.08]" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brandPrimary/70 dark:text-brandGold/80">
            Strategic Imperative
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-brandDark dark:text-white">
            Sustainability & ESG: The Strategic Imperative
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Sustainability is no longer a peripheral concern—it has become a core
            determinant of enterprise value, competitive resilience, and
            long-term business viability. Environmental, Social, and Governance
            (ESG) criteria now fundamentally shape how organizations are
            evaluated by investors, regulators, customers, and society at large.
          </p>
        </div>

        {/* Evolution Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-white">
              The Evolution from Compliance to Value Creation
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              The ESG landscape has undergone a profound transformation. What
              began as voluntary corporate social responsibility initiatives has
              evolved into a sophisticated framework that directly influences
              capital allocation, operational excellence, and strategic
              positioning.
            </p>
          </div>

          {/* Evolution Cards */}
          <div className="relative grid gap-6 lg:grid-cols-3">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-brandPrimary/40 via-brandGold/40 to-brandPrimary/10 lg:block" />

            {[
              {
                step: "01",
                title: "Compliance Era",
                description:
                  "Organizations focused primarily on meeting minimum regulatory requirements, treating ESG as a risk mitigation exercise with limited strategic integration.",
                accent: "bg-brandGold/15 text-brandGold",
              },
              {
                step: "02",
                title: "Strategy Integration",
                description:
                  "Forward-thinking enterprises began embedding sustainability into business strategy, recognizing the link between ESG performance and operational efficiency, brand value, and stakeholder trust.",
                accent: "bg-brandAccent/15 text-brandAccent",
              },
              {
                step: "03",
                title: "Value Creation Paradigm",
                description:
                  "Today's leading organizations view ESG as a driver of innovation, market differentiation, and sustainable competitive advantage.",
                accent: "bg-brandPrimary/15 text-brandPrimary",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="relative p-6 transition-all duration-300 border shadow-lg rounded-2xl border-borderLight bg-white/90 hover:-translate-y-1 hover:shadow-2xl dark:border-borderDark dark:bg-surfaceDark/90"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold ${card.accent}`}
                  >
                    {card.step}
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicImperative;
