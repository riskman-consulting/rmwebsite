import rbiaSamplePlanImage from "../../assets/images/rbia/rbia-sample-ia.png";

export default function SampleIASection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-brandPrimary/6 via-transparent to-brandAccent/6 dark:from-brandPrimary/12 dark:to-brandAccent/8" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px] dark:opacity-[0.05] dark:bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" />

      {/* DECORATIVE GLOW */}
      <div className="absolute right-0 rounded-full top-24 w-96 h-96 bg-brandAccent/10 blur-3xl dark:bg-brandAccent/15" />

      {/* CONTENT */}
      <div className="container relative z-10 px-4 mx-auto lg:px-20">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/25 dark:bg-brandPrimary/25 dark:text-brandAccent dark:border-brandPrimary/30">
            Planning Template
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Our Sample IA Plan
          </h2>

          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />

          <p className="max-w-3xl mx-auto text-base leading-relaxed md:text-lg text-brandDark/90 dark:text-brandLight/90">
            Our sample plan identifies high-risk areas like revenue and payroll, providing tailored audit programs to strengthen controls, ensure compliance, and others that are based on your business needs.
          </p>
        </div>

        {/* DOCUMENT */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-brandAccent/15 to-brandPrimary/15 rounded-3xl blur-2xl" />

          <div className="relative overflow-hidden bg-white border shadow-2xl rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 py-4 border-b md:px-10 border-borderLight dark:border-borderDark bg-surfaceLight/50 dark:bg-surfaceDark/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brandAccent/70" />
                <span className="text-sm font-semibold text-brandDark dark:text-white">
                  Internal Audit Planning Artifact
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-brandLight/30 dark:bg-brandDark/30" />
                <span className="w-2 h-2 rounded-full bg-brandLight/30 dark:bg-brandDark/30" />
                <span className="w-2 h-2 rounded-full bg-brandLight/30 dark:bg-brandDark/30" />
              </div>
            </div>

            {/* IMAGE */}
            <div className="p-6 md:p-10">
              <div className="overflow-hidden shadow-lg rounded-xl">
                <img
                  src={rbiaSamplePlanImage}
                  alt="Sample Internal Audit Plan"
                  className="w-full transition-transform duration-700"
                />
              </div>
            </div>

            {/* ACCENT BAR */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brandAccent via-brandGold to-brandAccent opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
