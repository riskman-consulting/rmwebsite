import rbiaRiskAdvisoryImage from "../../assets/images/rbia/rbia-risk-advisory.png";

export default function RbiaRiskAdvisorySection() {
  return (
    <section className="relative px-4 overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-brandPrimary/6 via-transparent to-brandAccent/6 dark:from-brandPrimary/12 dark:to-brandAccent/8" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px] dark:opacity-[0.05] dark:bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" />

      {/* DECORATIVE GLOW */}
      <div className="absolute left-0 rounded-full top-40 w-96 h-96 bg-brandPrimary/8 blur-3xl dark:bg-brandPrimary/12" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandAccent/15 text-brandAccent border border-brandAccent/25 dark:bg-brandAccent/25 dark:border-brandAccent/30">
            Core Service
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Risk-Based Internal Audit (RBIA) under Risk Advisory
          </h2>

          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />

          <p className="max-w-3xl mx-auto text-base leading-relaxed md:text-lg text-brandDark/90 dark:text-brandLight/90">
            Our RBIA services provide independent, risk-based assurance and practical insights across financial, operational, and compliance areas. We act as a value-adding partner to management by protecting revenue, strengthening internal controls, and ensuring rigorous statutory compliance.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid items-center gap-16 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/25 dark:bg-brandPrimary/25 dark:text-brandAccent dark:border-brandPrimary/30">
              Methodology
            </div>

            <h3 className="text-3xl font-bold leading-tight md:text-4xl font-heading text-brandDark dark:text-white">
              Our 'Risk-Based' Internal Audit Framework
            </h3>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-brandPrimary to-brandAccent" />

            <p className="max-w-xl text-base leading-relaxed md:text-lg text-brandDark/85 dark:text-brandLight/85">
              Our Internal Audit services are supported by a consistent, substantially field tested 'risk-based' methodology derived from our experiences on multiple Internal audits and is consistent with the International Standards for the Professional Practice of Internal Auditing. Our methodology is linked to a number of supporting knowledge tools and databases. This methodology is aligned to our overarching methodology.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end group">
            <div className="absolute inset-0 bg-gradient-to-br from-brandAccent/20 to-brandPrimary/20 rounded-2xl blur-2xl opacity-60 group-hover:blur-3xl" />

            <div className="relative w-full max-w-xl p-6 bg-white border shadow-2xl rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl">
              <div className="absolute top-0 left-6 w-24 h-1.5 rounded-full bg-gradient-to-r from-brandAccent to-brandGold shadow-lg" />

              <img
                src={rbiaRiskAdvisoryImage}
                alt="Risk-Based Internal Audit Framework"
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
