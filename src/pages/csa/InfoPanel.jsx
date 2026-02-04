import React from "react"

const InfoPanel = ({ selectedZone, onClose, mode }) => {
  const getArchitectureContent = zone => {
    switch (zone) {
      case "governance":
        return {
          title: "Governing Body",
          subtitle: "Board & Audit Committee",
          color: "bg-yellow-500",
          desc:
            "High-level oversight of risk management framework effectiveness and alignment with corporate strategy.",
          points: [
            "Directs governing body activities.",
            "Ensures legal and ethical compliance.",
            "Delegates risk management responsibilities.",
            "Requires independent assurance from Internal Audit."
          ]
        }
      case "firstLine":
        return {
          title: "First Line",
          subtitle: "Operational Management",
          color: "bg-teal-600",
          desc:
            "Primary owners of risk. They execute daily business operations and implement internal control measures.",
          points: [
            "Owns and manages risks at the source.",
            "Executes Control Self-Assessments (CSA).",
            "Develops internal control procedures.",
            "Communicates risk status to the second line."
          ]
        }
      case "secondLine":
        return {
          title: "Second Line",
          subtitle: "Risk & Compliance",
          color: "bg-blue-900",
          desc:
            "Ensures the first line is managing risk effectively and provides independent challenge and expertise.",
          points: [
            "Provides CSA framework and methodology.",
            "Monitors policy adherence.",
            "Validates risk management effectiveness.",
            "Aggregates risk data for reporting."
          ]
        }
      case "thirdLine":
        return {
          title: "Third Line",
          subtitle: "Internal Audit",
          color: "bg-slate-700",
          desc:
            "Provides objective and independent assurance to the Board on the overall control environment.",
          points: [
            "Operates independently of management.",
            "Validates 1st and 2nd line effectiveness.",
            "Reviews CSA outcome quality.",
            "Reports directly to the Audit Committee."
          ]
        }
      default:
        return null
    }
  }

  const getLifecycleContent = phase => {
    switch (phase) {
      case "phase1":
        return {
          title: "Risk Identification",
          subtitle: "Phase 1",
          color: "bg-[#0D9488]",
          desc:
            "Defining the universe of risks and aligning them to the organizational taxonomy.",
          points: [
            "Define process universe and assessment scope.",
            "Apply risk taxonomy to categorize exposures.",
            "Assess inherent risk levels before controls.",
            "Identify emerging risks and regulatory changes."
          ]
        }
      case "phase2":
        return {
          title: "Control Mapping",
          subtitle: "Phase 2",
          color: "bg-[#0891B2]",
          desc:
            "Documenting and aligning control measures to specific risks for coverage analysis.",
          points: [
            "Document key controls and their attributes.",
            "Link controls to specific risk events.",
            "Assign clear ownership for each control.",
            "Evaluate the design adequacy of controls."
          ]
        }
      case "phase3":
        return {
          title: "Self-Assessment",
          subtitle: "Phase 3",
          color: "bg-[#2563EB]",
          desc:
            "Operational testing where owners certify the effectiveness of their control environment.",
          points: [
            "Conduct surveys and walkthroughs.",
            "Test operating effectiveness of controls.",
            "Identify gaps between desired and actual state.",
            "Evaluate control culture and awareness."
          ]
        }
      case "phase4":
        return {
          title: "Independent Review",
          subtitle: "Phase 4",
          color: "bg-[#1E3A5F]",
          desc:
            'The "Challenge" phase where risk functions validate management certifications.',
          points: [
            "Quality Assurance (QA) validation of results.",
            "Calibration sessions between 1st and 2nd lines.",
            "Independent challenge of management assertions.",
            "Adjustment of ratings based on evidence."
          ]
        }
      case "phase5":
        return {
          title: "Reporting",
          subtitle: "Phase 5",
          color: "bg-[#7C3AED]",
          desc:
            "Synthesizing assessment data into actionable intelligence for leadership.",
          points: [
            "Create risk heatmaps and dashboards.",
            "Develop Board and Committee reporting.",
            "Highlight key themes and systematic issues.",
            "Provide benchmarking across departments."
          ]
        }
      case "phase6":
        return {
          title: "Remediation",
          subtitle: "Phase 6",
          color: "bg-[#C9A227]",
          desc:
            "Continuous improvement through tracking and closing identified weaknesses.",
          points: [
            "Establish time-bound action plans.",
            "Track remediation progress to completion.",
            "Verify closure through follow-up testing.",
            "Update risk profiles based on new controls."
          ]
        }
      case "hub":
        return {
          title: "Continuous Improvement",
          subtitle: "Core Philosophy",
          color: "bg-slate-800",
          desc:
            "The center of the lifecycle ensuring the methodology evolves with the business.",
          points: [
            "Iterative feedback loop for methodology.",
            "Ongoing risk intelligence gathering.",
            "Dynamic risk profiling based on metrics.",
            "Cultivating a strong risk-aware culture."
          ]
        }
      default:
        return null
    }
  }

  const getOperatingModelContent = zone => {
    switch (zone) {
      case "pmo":
        return {
          title: "Global CSA PMO",
          subtitle: "Central Governance",
          color: "bg-[#1E3A5F]",
          desc:
            "The nerve center for the global CSA program, setting standards and methodology.",
          points: [
            "Sets global methodology and standards.",
            "Maintains standard templates and taxonomy.",
            "Consolidates global risk intelligence.",
            "Provides training and user support."
          ]
        }
      case "americas":
        return {
          title: "Americas Region",
          subtitle: "Regional Hub",
          color: "bg-[#0D9488]",
          desc:
            "Manages execution across US, Canada, and Latin America, ensuring SOX compliance.",
          points: [
            "Drives local execution of PMO standards.",
            "Ensures SOX compliance for listed entities.",
            "Coordinates LATAM risk activities.",
            "Manages regional stakeholder engagement."
          ]
        }
      case "emea":
        return {
          title: "EMEA Region",
          subtitle: "Regional Hub",
          color: "bg-[#7C3AED]",
          desc:
            "Regional hub for Europe, Middle East, and Africa, focusing on UK SOX and EU directives.",
          points: [
            "Oversees European operational risks.",
            "Aligns with UK SOX and EU regulations.",
            "Supports Middle East & Africa operations.",
            "Adapts global standards to local labor laws."
          ]
        }
      case "apac":
        return {
          title: "APAC Region",
          subtitle: "Regional Hub",
          color: "bg-[#2563EB]",
          desc:
            "Covers high-growth Asian markets, focusing on J-SOX, SEBI, and ANZ regulations.",
          points: [
            "Manages J-SOX and SEBI regulatory needs.",
            "Coordinates across Asia Pacific operations.",
            "Drives risk awareness in ANZ business units.",
            "Aggregates regional data for Global PMO."
          ]
        }
      case "cloud":
        return {
          title: "GRC Technology",
          subtitle: "Cloud Integration",
          color: "bg-[#3B82F6]",
          desc:
            "The technical backbone enabling real-time assessment and automated reporting.",
          points: [
            "Integrates multiple GRC tools (ServiceNow/SAP).",
            "Enables automated control monitoring.",
            "Provides real-time dashboards for executives.",
            "Ensures data integrity across the global program."
          ]
        }
      default:
        return null
    }
  }

  const getMaturityContent = level => {
    switch (level) {
      case "l1":
        return {
          title: "Level 1: Siloed",
          subtitle: "Initial / Ad-Hoc",
          color: "bg-slate-400",
          desc:
            "Assessment activities are manual, uncoordinated, and typically performed only when required by external auditors.",
          points: [
            "Manual spreadsheet-based assessments.",
            "Lack of common risk taxonomy.",
            "Inconsistent data quality and integrity.",
            "Purely reactive approach to risk."
          ]
        }
      case "l2":
        return {
          title: "Level 2: Standardized",
          subtitle: "Defined / Repeatable",
          color: "bg-[#0D9488]",
          desc:
            "The organization has documented processes and consistent templates, but execution remains regional and siloed.",
          points: [
            "Formal methodology documented.",
            "Consistent risk-control templates used.",
            "Defined calendar for assessments.",
            "Regional hubs beginning coordination."
          ]
        }
      case "l3":
        return {
          title: "Level 3: Integrated",
          subtitle: "Managed / Collaborative",
          color: "bg-[#2563EB]",
          desc:
            "Risk and control activities are integrated via a central GRC platform, allowing for better collaboration and tracking.",
          points: [
            "Central GRC platform for assessments.",
            "Cross-functional data sharing.",
            "Automated workflow for remediation.",
            "Clear linkage between risks and controls."
          ]
        }
      case "l4":
        return {
          title: "Level 4: Strategic",
          subtitle: "Predictive / Quantitative",
          color: "bg-[#7C3AED]",
          desc:
            "The program shifts toward quantitative metrics and predictive risk intelligence using real-time data feeds.",
          points: [
            "Continuous monitoring of key controls.",
            "Predictive risk indicators (KRIs).",
            "Data-driven decision making.",
            "Automated independent validation."
          ]
        }
      case "l5":
        return {
          title: "Level 5: Optimized",
          subtitle: "Resilient / World-Class",
          color: "bg-[#C9A227]",
          desc:
            "Risk management is a strategic differentiator, fully embedded in the culture and leveraging advanced AI/ML for real-time resilience.",
          points: [
            "Real-time risk profile adjustments.",
            "AI-driven anomaly detection in controls.",
            "Strategic agility based on risk intel.",
            "Full ownership and risk-aware culture."
          ]
        }
      default:
        return null
    }
  }

  let content = null
  if (selectedZone) {
    if (mode === "architecture") content = getArchitectureContent(selectedZone)
    else if (mode === "lifecycle") content = getLifecycleContent(selectedZone)
    else if (mode === "operatingModel")
      content = getOperatingModelContent(selectedZone)
    else if (mode === "maturityModel")
      content = getMaturityContent(selectedZone)
  }

  if (!content) {
    return (
      <div className="p-8 text-center border shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-slate-100">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 text-slate-400">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-brandAccent">
          Model Explorer
        </h3>
        <p className="text-sm leading-relaxed text-brandNavy dark:text-white">
          {mode === "architecture" &&
            "Explore organizational lines of defense."}
          {mode === "lifecycle" && "Follow the end-to-end assessment journey."}
          {mode === "operatingModel" && "View how the program scales globally."}
          {mode === "maturityModel" &&
            "Identify your current organizational capability level."}
          <br />
          <span className="block mt-2 text-xs font-medium">
            Click any element in the diagram to begin.
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden duration-300 border shadow-xl bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-slate-200 animate-in fade-in slide-in-from-right-4">
      <div
        className={`${content.color} px-6 py-4 flex items-center justify-between`}
      >
        <div className="text-white">
          <h3 className="text-lg font-bold leading-tight">{content.title}</h3>
          <p className="text-xs font-medium tracking-widest uppercase opacity-80">
            {content.subtitle}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-white transition-colors rounded-full bg-white/20 hover:bg-white/30"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <p className="pl-4 mb-6 text-sm italic leading-relaxed border-l-4 text-brandDark dark:text-white/70 border-slate-100">
          "{content.desc}"
        </p>
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-wider uppercase text-brandNavy dark:text-white/70">
            Activities & Scope
          </h4>
          <ul className="space-y-3">
            {content.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-brandNavy dark:text-brandAccent">
                  {i + 1}
                </div>
                <span className="text-sm leading-snug text-brandDark dark:text-white/70">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-6 mt-8 border-t border-slate-100">
          <button className="w-full py-2 text-xs font-bold tracking-wider uppercase transition-colors rounded-lg bg-slate-50 hover:bg-slate-100 text-brandNavy dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white/70">
            Access Methodology Guide
          </button>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
