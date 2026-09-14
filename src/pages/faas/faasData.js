import {
  Wallet,
  Briefcase,
  TrendingUp,
  FileSearch,
  Factory,
  ShieldCheck,
} from "lucide-react";

// Hero imagery. Only groups with a genuinely matching photo carry one — the
// hero layout falls back to full-width text when `image` is null, so a group
// without artwork still reads as finished rather than broken.
import strategicLeadershipImg from "../../assets/images/hero-section/contact/consultation-team.webp";
import transactionReadinessImg from "../../assets/images/hero-section/about/about-us.webp";
import costingPlantFinanceImg from "../../assets/images/hero-section/industry/manufacturing.webp";
// Sourced from Unsplash (Unsplash License — free for commercial use, no
// attribution required). Swap for RiskMan's own photography when available.
import managedServicesImg from "../../assets/images/faas/managed-services.jpg";
import financialAdvisoryImg from "../../assets/images/faas/financial-advisory.jpg";
import complianceAssuranceImg from "../../assets/images/faas/compliance-assurance.jpg";

export const FAAS_BASE_PATH = "/services/faas";

/**
 * Financial Accounting and Advisory Services (FAAS)
 *
 * Six service groups, each with its own page under /services/faas/<slug>.
 * This array is the single source for the FAAS sub-nav, the overview page
 * grid, and every group page — so a new group only has to be added here
 * (plus a thin route file + a <Route> in App.jsx).
 *
 * `id` is kept as the anchor used on the overview page.
 */
export const FAAS_GROUPS = [
  {
    id: "managed-services",
    slug: "managed-services",
    path: `${FAAS_BASE_PATH}/managed-services`,
    title: "Managed Services",
    image: managedServicesImg,
    imageAlt:
      "Two colleagues reviewing financial paperwork and laptops at a desk",
    navLabel: "Managed Services",
    icon: Wallet,
    summary:
      "End-to-end ownership of the day-to-day finance function, run by a dedicated team.",
    intro:
      "We take over the transactional finance stack — payables, receivables, the close, and the reporting that comes off it — and run it to an agreed calendar. You keep the decisions; we keep the books moving.",
    items: [
      "Accounts Receivable (AR)",
      "Accounts Payable (AP)",
      "Record-to-Report (R2R)",
      "Financial Reporting & MIS",
      "Banking and Treasury",
      "Financial Planning and Analysis (FP&A)",
      "Fixed Asset Management",
    ],
  },
  {
    id: "strategic-leadership",
    slug: "strategic-leadership",
    path: `${FAAS_BASE_PATH}/strategic-leadership`,
    title: "Strategic Leadership",
    image: strategicLeadershipImg,
    imageAlt: "Finance team working through a plan around a meeting table",
    navLabel: "Strategic Leadership",
    icon: Briefcase,
    summary:
      "Senior finance leadership on demand, without carrying a full-time hire.",
    intro:
      "Senior finance capability sized to what you actually need — a CFO for two days a month, a controller through a transition, or a team to stand the finance function up from scratch.",
    items: [
      "Virtual / Fractional / Interim CFO",
      "Controller Services",
      "Finance Function Setup & Transformation",
      "Performance Management",
      "Management Reporting & MIS",
    ],
  },
  {
    id: "financial-advisory",
    slug: "financial-advisory",
    path: `${FAAS_BASE_PATH}/financial-advisory`,
    title: "Financial Advisory",
    image: financialAdvisoryImg,
    imageAlt:
      "Laptop showing a financial analytics dashboard with charts and metrics",
    navLabel: "Financial Advisory",
    icon: TrendingUp,
    summary:
      "Valuation, funding and feasibility support for capital and growth decisions.",
    intro:
      "Support for the decisions that move capital — what the business is worth, how the debt should be structured, whether a project stands up, and how a rating agency will read it.",
    items: [
      "Corporate Valuation",
      "Debt Structuring",
      "Project Feasibility Study",
      "Credit Rating Advisory",
    ],
  },
  {
    id: "transaction-audit-readiness",
    slug: "transaction-audit-readiness",
    path: `${FAAS_BASE_PATH}/transaction-audit-readiness`,
    title: "Transaction & Audit Readiness",
    image: transactionReadinessImg,
    imageAlt: "Advisers shaking hands across a table after agreeing a deal",
    navLabel: "Transaction & Audit Readiness",
    icon: FileSearch,
    summary:
      "Getting the books, controls and disclosures ready before a deal or an audit begins.",
    intro:
      "The work that happens before the auditor or the acquirer arrives: finding what they will question, fixing it, and assembling the support so the process runs on schedule.",
    items: [
      "Financial Due Diligence",
      "Pre-Audit Health Checks",
      "Process & Control Readiness",
      "Financial Reporting Readiness",
      "Transaction / Deal Support",
      "Statutory Reporting Support",
    ],
  },
  {
    id: "costing-plant-finance",
    slug: "costing-plant-finance",
    path: `${FAAS_BASE_PATH}/costing-plant-finance`,
    title: "Costing & Plant Finance",
    image: costingPlantFinanceImg,
    imageAlt: "Production line on a manufacturing plant floor",
    navLabel: "Costing & Plant Finance",
    icon: Factory,
    summary:
      "Plant-floor costing and margin visibility for manufacturing operations.",
    intro:
      "Costing built for how the plant actually runs — a framework that holds up order to order, standards you can vary against, and margin visibility down to the shop floor.",
    items: [
      "Costing Framework Development",
      "MTO Costing",
      "Standard & Actual Costing",
      "Inventory Valuation",
      "Cost & Margin Analysis",
      "Shop-Floor Profitability Analysis",
      "Cost Optimization",
    ],
  },
  {
    id: "compliance-assurance",
    slug: "compliance-assurance",
    path: `${FAAS_BASE_PATH}/compliance-assurance`,
    title: "Compliance & Assurance",
    image: complianceAssuranceImg,
    imageAlt:
      "Hand signing off a set of printed financial documents",
    navLabel: "Compliance & Assurance",
    icon: ShieldCheck,
    summary:
      "Technical accounting positions and regulatory reporting you can stand behind.",
    intro:
      "Where the accounting question is genuinely hard, we document the position, tie it to the standard, and make sure the reporting around it holds up to review.",
    items: [
      "Technical Accounting Advisory",
      "Regulatory Compliance Support",
      "Financial Reporting Assurance",
    ],
  },
];

export const FAAS_TAGLINE = "Professional, creative with the whole-hearted";

export const getFaasGroup = (slug) =>
  FAAS_GROUPS.find((group) => group.slug === slug);

export default FAAS_GROUPS;
