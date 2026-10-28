import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from "../../components/ui/SectionComponents";

const ValueImpactDiagram = () => (
  <svg viewBox="0 0 500 260" className="w-full max-w-[500px]">
    {/* Before */}
    <rect x="10" y="10" width="210" height="240" rx="10" className="fill-slate-100 dark:fill-brandDark stroke-slate-300 dark:stroke-slate-600" strokeWidth="1" />
    <text x="115" y="38" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400" fontSize="12" fontWeight="700" fontFamily="Montserrat, sans-serif">BEFORE</text>
    {["Ambiguous processes", "Audit findings", "Inconsistent controls", "Siloed operations", "Compliance gaps"].map((t, i) => (
      <g key={i}>
        <circle cx="35" cy={70 + i * 36} r="5" className="fill-slate-400 dark:fill-slate-600" />
        <text x="50" y={74 + i * 36} className="fill-slate-700 dark:fill-slate-300" fontSize="10" fontFamily="Inter, sans-serif">{t}</text>
      </g>
    ))}
    {/* Arrow */}
    <polygon points="232,130 268,115 268,122 290,122 290,138 268,138 268,145" className="fill-brandPrimary dark:fill-brandAccent" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </polygon>
    {/* After */}
    <rect x="300" y="10" width="190" height="240" rx="10" className="fill-brandPrimary/10 dark:fill-brandNavy stroke-brandPrimary/30 dark:stroke-brandAccent/40" strokeWidth="1" />
    <text x="395" y="38" textAnchor="middle" className="fill-brandPrimary dark:fill-brandAccent" fontSize="12" fontWeight="700" fontFamily="Montserrat, sans-serif">AFTER</text>
    {["Standardized governance", "Audit readiness", "Unified controls", "Cross-entity alignment", "Regulatory confidence"].map((t, i) => (
      <g key={i}>
        <circle cx="320" cy={70 + i * 36} r="5" className="fill-brandPrimary dark:fill-brandAccent" />
        <text x="335" y={74 + i * 36} className="fill-brandDark dark:fill-white" fontSize="10" fontFamily="Inter, sans-serif">{t}</text>
      </g>
    ))}
  </svg>
);

export default function ValueSection() {
  return (
    <SectionWrapper id="value">
      <div className="py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <SectionTag>Business Value & Outcomes</SectionTag>
          <SectionTitle>From Documents to Business Enablers</SectionTitle>
          <SectionDesc>
            Policies and SOPs, when designed and managed well, go beyond compliance documentation. 
            They become active instruments of governance that drive measurable organizational outcomes.
          </SectionDesc>

          <div className="flex justify-center mb-12">
            <ValueImpactDiagram />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Stronger Risk Controls", desc: "Policies aligned with risk appetite ensure that risk mitigation is embedded in daily operations, not layered on after the fact." },
              { title: "Regulatory Confidence", desc: "Proactively designed frameworks reduce regulatory exposure and demonstrate governance maturity to regulators and auditors." },
              { title: "Operational Clarity", desc: "Standardized SOPs eliminate process ambiguity, reduce errors, and accelerate onboarding — driving efficiency at every level." },
              { title: "Decision-Making Speed", desc: "When roles, escalation paths, and authorities are documented clearly, decisions happen faster and with greater confidence." },
            ].map((c, i) => (
              <div key={i} className="h-full bg-white dark:bg-gradient-to-br dark:from-brandDark dark:to-bgDark border border-slate-200 dark:border-brandPrimary/30 border-t-[3px] border-t-brandPrimary dark:border-t-brandAccent rounded-2xl p-8 transition-colors hover:border-brandPrimary/50 shadow-sm dark:shadow-none">
                <div className="text-[17px] font-bold text-brandDark dark:text-white mb-2.5 font-sans">{c.title}</div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 mt-12 border shadow-lg bg-brandNavy dark:bg-gradient-to-br dark:from-brandDark dark:to-brandNavy border-brandPrimary/40 rounded-2xl">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-[1_1_400px]">
                <div className="mb-2 text-lg font-bold text-white font-heading">Process Maturity Impact</div>
                <p className="m-0 text-sm leading-relaxed text-slate-300 dark:text-slate-400">
                  Organizations with mature policy frameworks report significantly higher process maturity scores, 
                  fewer compliance incidents, and stronger performance in external audits and regulatory inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
