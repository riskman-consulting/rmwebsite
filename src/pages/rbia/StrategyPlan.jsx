export default function StrategyPlanSection() {
  return (
    <section className="relative px-3 overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 dark:opacity-20"
        style={{ backgroundImage: "url('/images/rbia-strategy-bg.png')" }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-bgLight/95 dark:bg-bgDark/95" />
      <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/8 via-transparent to-brandAccent/6 dark:from-brandPrimary/15 dark:to-brandAccent/8" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px] dark:opacity-[0.05] dark:bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" />

      {/* DECORATIVE GLOWS */}
      <div className="absolute rounded-full top-24 right-16 w-72 h-72 bg-brandAccent/8 blur-3xl dark:bg-brandAccent/12" />
      <div className="absolute rounded-full bottom-24 left-16 w-96 h-96 bg-brandPrimary/8 blur-3xl dark:bg-brandPrimary/12" />

      {/* CONTENT */}
      <div className="container relative z-10 px-4 mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/25 dark:bg-brandPrimary/25 dark:text-brandAccent dark:border-brandPrimary/30">
            Strategic Framework
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Our Risk-based Internal Auditing Plan
          </h2>

          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />

          <p className="max-w-3xl mx-auto text-base leading-relaxed md:text-lg text-brandDark/90 dark:text-brandLight/90">
            The transition from traditional methods to a Risk-Based Internal Audit (RBIA) framework is driven by the need for deeper organizational value and proactive risk management.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-3">
          {[
            {
              title: "Conventional vs. Modern Auditing",
              text:
                "Modern Risk-Based Internal Audit (RBIA) transcends traditional, narrow financial compliance. It proactively addresses emerging complexities like cybersecurity, ethical conduct (ESG), and digital integrity. This integrated approach provides strategic management insights, ensuring audit value increases while operational costs are reduced as the organization matures.",
            },
            {
              title: "Key Drivers for Change",
              text:
                "Organizations face increasing complexity from global operations and diverse revenues. Rising governance demands and technological shifts, including AI and cybersecurity risks, necessitate a transition to RBIA. This shift ensures proactive management of modern threats while meeting transparency expectations and securing organizational digital infrastructure.",
            },
            {
              title: "Value vs. Cost Dynamics",
              text:
                "As audit services mature, integrating frameworks with business objectives scales out value and coverage. Growth optimizes controls and prevents losses, reducing audit costs as a percentage of operations. This evolution ensures a higher return on investment, transforming internal audits from a cost center into a strategic asset for the organization.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="relative h-full p-8 transition-all bg-white border shadow-lg rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl hover:border-brandAccent/40"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-brandAccent via-brandGold to-brandAccent" />

              <div className="absolute flex items-center justify-center w-12 h-12 text-lg font-bold rounded-full shadow-lg -top-4 -right-4 bg-brandAccent text-brandDark">
                {index + 1}
              </div>

              <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                {item.title}
              </h3>

              <p className="leading-relaxed text-brandDark/85 dark:text-brandLight/85">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
