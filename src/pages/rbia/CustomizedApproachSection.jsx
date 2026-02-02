import { ShieldCheck, BarChart3, Users, Settings } from "lucide-react";

export default function CustomizedApproachSection() {
  return (
    <section className="relative px-4 overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-brandPrimary/6 via-transparent to-brandAccent/6 dark:from-brandPrimary/12 dark:to-brandAccent/8" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px] dark:opacity-[0.05] dark:bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" />

      {/* DECORATIVE GLOW */}
      <div className="absolute right-0 rounded-full top-32 w-96 h-96 bg-brandAccent/8 blur-3xl dark:bg-brandAccent/12" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/25 dark:bg-brandPrimary/25 dark:text-brandAccent dark:border-brandPrimary/30">
            Our Approach
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            A Customized, Risk-Focused Engagement Model
          </h2>

          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />

          <p className="max-w-3xl mx-auto text-base leading-relaxed md:text-lg text-brandDark/90 dark:text-brandLight/90">
            We recognize that no two organizations are the same. Our engagement model is designed to adapt to your operational realities, risk appetite, and strategic priorities.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col h-full p-8 transition-all bg-white border shadow-lg rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:shadow-xl hover:-translate-y-1">
            <ShieldCheck className="w-10 h-10 mb-6 text-brandAccent" />
            <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-white">
              Risk-Led Planning
            </h4>
            <p className="text-sm leading-relaxed text-brandDark/85 dark:text-brandLight/85">
              Audit focus areas are prioritized based on enterprise-wide and process-level risk assessments.
            </p>
          </div>

          <div className="flex flex-col h-full p-8 transition-all bg-white border shadow-lg rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:shadow-xl hover:-translate-y-1">
            <BarChart3 className="w-10 h-10 mb-6 text-brandPrimary" />
            <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-white">
              Data-Driven Insights
            </h4>
            <p className="text-sm leading-relaxed text-brandDark/85 dark:text-brandLight/85">
              We use analytics and trend analysis to identify anomalies, control gaps, and improvement opportunities.
            </p>
          </div>

          <div className="flex flex-col h-full p-8 transition-all bg-white border shadow-lg rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:shadow-xl hover:-translate-y-1">
            <Users className="w-10 h-10 mb-6 text-brandAccent" />
            <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-white">
              Stakeholder Collaboration
            </h4>
            <p className="text-sm leading-relaxed text-brandDark/85 dark:text-brandLight/85">
              Continuous engagement with management ensures alignment, transparency, and actionable outcomes.
            </p>
          </div>

          <div className="flex flex-col h-full p-8 transition-all bg-white border shadow-lg rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:shadow-xl hover:-translate-y-1">
            <Settings className="w-10 h-10 mb-6 text-brandGold" />
            <h4 className="mb-3 text-lg font-bold text-brandDark dark:text-white">
              Scalable Execution
            </h4>
            <p className="text-sm leading-relaxed text-brandDark/85 dark:text-brandLight/85">
              Audit scope and intensity scale dynamically with business changes and emerging risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
