/**
 * Search terms each important page is written for.
 *
 * Read by `scripts/generate-meta.mjs` at build time to check every page in the
 * SEO report (Sanity Studio → Analytics → SEO): is a primary term in the
 * title, the description and the h1, which alternative terms the page text
 * already covers, and whether any term is repeated so often it reads as
 * stuffing. Nothing here is written into the page — Google ignores the meta
 * keywords tag, so the terms have to appear in real copy to count.
 *
 * - primary: the terms the page should rank for. A page passes a location
 *   (title, description, h1) when any one of them appears there.
 * - alternatives: other names buyers and auditors search for the same thing.
 *   Use them in body copy and FAQs only where they are accurate; the report
 *   lists the ones missing as information, not as errors.
 *
 * Keep this file free of imports — Node loads it directly.
 */

const GRC = "/products/riskman-grc";

export const KEYWORD_MAP = {
  /* ------------------------------------------------------------------ */
  /* RiskMan GRC — software                                              */
  /* ------------------------------------------------------------------ */
  [GRC]: {
    primary: ["GRC software", "governance, risk and compliance software", "RiskMan GRC"],
    alternatives: [
      "GRC platform",
      "Governance, risk and compliance software",
      "GRC management software",
      "Enterprise GRC software",
      "Integrated GRC software",
      "Risk and compliance management software",
      "Audit, risk and compliance software",
    ],
  },
  [`${GRC}/enterprise-risk-management`]: {
    primary: ["enterprise risk management software", "ERM software"],
    alternatives: [
      "Risk management software",
      "Risk management system",
      "Risk register software",
      "Risk assessment software",
      "Enterprise risk assessment software",
      "Risk analysis software",
      "Risk monitoring software",
      "Risk mitigation software",
      "Corporate risk management software",
      "Business risk management software",
      "Risk management tool",
    ],
  },
  [`${GRC}/risk-based-internal-audit`]: {
    primary: ["risk-based internal audit software", "RBIA software"],
    alternatives: [
      "Internal audit software",
      "Internal audit management software",
      "Audit management software",
      "Audit management system",
      "Internal audit system",
      "Audit planning software",
      "Audit universe management software",
      "Audit execution software",
      "Audit workflow software",
      "Audit tracking software",
      "Audit programme management software",
    ],
  },
  [`${GRC}/control-testing`]: {
    primary: ["internal control testing software", "control testing software"],
    alternatives: [
      "Controls testing software",
      "Internal controls management software",
      "Control assessment software",
      "Control evaluation software",
      "Risk and control matrix (RCM) software",
      "RCM management software",
      "Internal financial control (IFC) testing software",
      "SOX control testing software",
      "Control effectiveness testing software",
    ],
  },
  [`${GRC}/action-taken-report`]: {
    primary: ["audit remediation software", "audit findings", "action taken report"],
    alternatives: [
      "Audit issue management software",
      "Audit finding tracking system",
      "Audit observation management software",
      "Audit follow-up software",
      "Remediation management software",
      "Corrective action tracking software",
      "Action plan management software",
      "Audit recommendation tracking software",
      "Audit closure management software",
      "Finding closure tracking software",
    ],
  },
  [`${GRC}/policy`]: {
    primary: ["policy management software", "SOP management software", "policy and SOP management software"],
    alternatives: [
      "Policy management system",
      "Policy lifecycle management software",
      "Standard operating procedure (SOP) management software",
      "Procedure management software",
      "Policy approval workflow software",
      "Policy review software",
      "Policy version control software",
      "Policy compliance software",
      "Policy governance software",
    ],
  },
  [`${GRC}/global-sox`]: {
    primary: ["SOX compliance software", "global SOX"],
    alternatives: [
      "SOX compliance management system",
      "SOX management software",
      "SOX audit software",
      "SOX testing software",
      "SOX control testing software",
      "SOX 404 compliance software",
      "Sarbanes-Oxley compliance software",
      "SOX evidence management software",
      "Financial compliance software",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Advisory services                                                   */
  /* ------------------------------------------------------------------ */
  "/": {
    primary: ["risk advisory", "RiskMan Consulting"],
    alternatives: ["internal audit", "GRC", "compliance", "cybersecurity", "ESG"],
  },
  "/services": {
    primary: ["risk advisory", "compliance services"],
    alternatives: ["internal audit", "SOX", "SOC", "ISO", "cybersecurity", "data privacy", "ESG", "forensic"],
  },
  "/services/risk-advisory": {
    primary: ["risk advisory", "risk assurance"],
    alternatives: ["enterprise risk management", "internal audit", "SOX", "internal controls", "third-party risk", "policies"],
  },
  "/services/risk-advisory/erm": {
    primary: ["enterprise risk management", "ERM"],
    alternatives: ["ERM consulting", "ERM framework", "risk assessment", "risk register", "risk appetite", "risk maturity"],
  },
  "/services/risk-advisory/rbia": {
    primary: ["risk-based internal audit", "RBIA"],
    alternatives: ["internal audit services", "audit plan", "audit universe", "outsourced", "co-sourced", "risk assessment"],
  },
  "/services/risk-advisory/sox-icofr-ifc": {
    primary: ["SOX", "ICOFR", "IFC"],
    alternatives: ["internal financial controls", "SOX compliance", "control testing", "risk and control matrix", "COSO"],
  },
  "/services/risk-advisory/formulation-of-policies-and-sops": {
    primary: ["policy and SOP", "policies and SOPs", "standard operating procedures"],
    alternatives: ["policy framework", "policy formulation", "governance", "procedures", "compliance"],
  },
  "/services/risk-advisory/csa": {
    primary: ["control self-assessment", "CSA"],
    alternatives: ["internal controls", "three lines", "control owners", "risk and control"],
  },
  "/services/risk-advisory/tprm": {
    primary: ["third-party risk management", "TPRM"],
    alternatives: ["vendor risk", "vendor onboarding", "due diligence", "continuous monitoring"],
  },
  "/services/risk-advisory/concurrent-audits": {
    primary: ["concurrent audit"],
    alternatives: ["internal audit", "continuous audit", "real-time", "banks"],
  },
  "/services/itgc-itac": {
    primary: ["ITGC", "ITAC"],
    alternatives: ["IT general controls", "application controls", "change management", "access controls"],
  },
  "/services/soc-services": {
    primary: ["SOC", "SOC 1", "SOC 2"],
    alternatives: ["SOC 3", "SOC report", "attestation", "service organization"],
  },
  "/services/iso-certifications/iso-27001": {
    primary: ["ISO 27001"],
    alternatives: ["ISMS", "information security", "certification", "audit"],
  },
  "/services/cybersecurity": {
    primary: ["cybersecurity"],
    alternatives: ["VAPT", "vulnerability", "penetration testing", "security audit"],
  },
  "/services/data-privacy/dpdp": {
    primary: ["DPDP"],
    alternatives: ["Digital Personal Data Protection", "data fiduciary", "consent", "data privacy"],
  },
  "/services/data-privacy/gdpr": {
    primary: ["GDPR"],
    alternatives: ["data protection", "data subject", "DPIA", "data privacy"],
  },
  "/services/esg": {
    primary: ["ESG"],
    alternatives: ["sustainability", "BRSR", "ESG reporting", "carbon"],
  },
  "/services/bcp-dr": {
    primary: ["business continuity", "disaster recovery"],
    alternatives: ["BCP", "ISO 22301", "business impact analysis", "resilience"],
  },
  "/services/pci-dss-compliance": {
    primary: ["PCI DSS", "PCI-DSS"],
    alternatives: ["cardholder data", "payment card", "compliance"],
  },
  "/services/forensics-investigation": {
    primary: ["forensic", "investigation"],
    alternatives: ["fraud", "due diligence", "digital forensics"],
  },
};

export default KEYWORD_MAP;
