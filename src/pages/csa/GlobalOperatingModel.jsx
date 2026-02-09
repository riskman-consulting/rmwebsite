import React from 'react';
import { Globe, ShieldCheck, Zap, BarChart3, RotateCcw, Search, ChevronRight } from 'lucide-react';

export default function GlobalOperatingModel() {
  const lifecyclePhases = [
    {
      phase: "1. Risk Identification",
      activities: "Process universe mapping, risk taxonomy alignment, inherent risk assessment, and scoping determination",
      icon: <Search className="text-brandPrimary dark:text-brandAccent" size={24} />
    },
    {
      phase: "2. Control Mapping",
      activities: "Control inventory development, risk-control linkage, control classification (preventive/detective/corrective), and ownership assignment",
      icon: <Globe className="text-brandPrimary dark:text-brandAccent" size={24} />
    },
    {
      phase: "3. Self-Assessment",
      activities: "First Line control owner completion of design and effectiveness assessments, evidence documentation, and gap identification",
      icon: <ShieldCheck className="text-brandPrimary dark:text-brandAccent" size={24} />
    },
    {
      phase: "4. Independent Review",
      activities: "Second Line validation, quality assurance reviews, challenge sessions, and assessment calibration",
      icon: <Zap className="text-brandPrimary dark:text-brandAccent" size={24} />
    },
    {
      phase: "5. Reporting",
      activities: "Executive dashboards, Board/Audit Committee reporting, trend analysis, and risk heatmap generation",
      icon: <BarChart3 className="text-brandPrimary dark:text-brandAccent" size={24} />
    },
    {
      phase: "6. Remediation",
      activities: "Action plan development, ownership assignment, timeline tracking, closure validation, and root cause analysis",
      icon: <RotateCcw className="text-brandPrimary dark:text-brandAccent" size={24} />
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-4xl md:text-5xl font-heading font-extrabold text-brandDark dark:text-brandAccent leading-tight">
            RiskMan's Global CSA <br />
            <span className="text-brandPrimary dark:text-white">Operating Model</span>
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-brandNavy/80 dark:text-white/70 font-sans">
            RiskMan has developed a proven, scalable CSA operating model specifically designed for 
            complex global organizations operating across multiple geographies, regulatory regimes, 
            and business models. Our approach balances global consistency with local adaptability—ensuring 
            standardized governance while respecting regional nuances.
          </p>
        </div>

        {/* Centralized Governance Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brandAccent"></div>
            <h3 className="text-2xl font-heading font-bold text-brandDark dark:text-white">
              Centralized Governance, Localized Execution
            </h3>
          </div>
          
          <p className="mb-10 text-brandNavy/90 dark:text-white/80 leading-relaxed max-w-3xl">
            Our operating model establishes a central CSA Program Management Office (PMO) that defines 
            methodology, standards, and reporting requirements, while regional execution hubs manage 
            day-to-day assessment activities.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Consistent Methodology", color: "border-teal-500", text: "Standardized assessment frameworks, rating scales, and documentation requirements across all units and regions." },
              { title: "Regulatory Customization", color: "border-brandPrimary", text: "Tailored control libraries and assessment criteria reflecting jurisdiction-specific requirements (SOX, SEBI, etc.)." },
              { title: "Cultural Sensitivity", color: "border-brandAccent", text: "Assessment facilitation approaches adapted to local organizational cultures and communication norms." },
              { title: "Language Localization", color: "border-brandNavy", text: "Assessment materials and reporting available in local languages to maximize First Line engagement." }
            ].map((card, i) => (
              <div key={i} className={`p-6 bg-surfaceLight dark:bg-surfaceDark border-t-4 ${card.color} shadow-sm rounded-xl hover:shadow-md transition-all`}>
                <h4 className="mb-3 font-heading font-bold text-brandDark dark:text-white">{card.title}</h4>
                <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* End-to-End CSA Lifecycle - Step Layout */}
        <div className="mb-20">
          <h3 className="mb-4 text-2xl font-heading font-bold text-brandDark dark:text-brandAccent">
            End-to-End CSA Lifecycle
          </h3>
          <p className="mb-10 text-brandNavy/80 dark:text-white/70">
            RiskMan's CSA methodology follows a rigorous, repeatable lifecycle that ensures 
            comprehensive coverage and sustainable value creation:
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lifecyclePhases.map((item, index) => (
              <div key={index} className="group relative p-8 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent transition-all duration-300">
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-3 bg-brandLight dark:bg-brandNavy/40 rounded-lg group-hover:bg-brandAccent/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-heading font-black opacity-5 text-brandDark dark:text-white">0{index + 1}</span>
                </div>
                <h4 className="mb-3 font-heading font-bold text-brandDark dark:text-white uppercase tracking-tight">
                  {item.phase}
                </h4>
                <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60 font-sans">
                  {item.activities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Integration - Modern Callout */}
        <div className="p-10 rounded-3xl bg-brandDark dark:bg-surfaceDark border border-borderDark relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="mb-6 text-3xl font-heading font-bold text-brandAccent">
              Technology & GRC Integration
            </h3>
            <p className="mb-10 text-white/80 max-w-2xl text-lg">
              RiskMan's CSA programs are designed for seamless integration with leading GRC platforms, ensuring a technology-enabled approach.
            </p>

            <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-12">
              {[
                "Automated workflow orchestration for assessment distribution",
                "Real-time dashboards providing control health visibility",
                "Integration with ERM risk registers for unified mapping",
                "Issue and action tracking with automated escalation",
                "Analytics-driven insights and predictive indicators"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brandAccent/20 flex items-center justify-center group-hover:bg-brandAccent transition-colors">
                    <ChevronRight size={14} className="text-brandAccent group-hover:text-brandDark" />
                  </div>
                  <p className="text-white/70 font-sans group-hover:text-white transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandPrimary opacity-10 blur-[100px] -mr-48 -mt-48"></div>
        </div>

      </div>
    </section>
  );
}