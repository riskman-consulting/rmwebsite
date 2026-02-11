/* ================================
   EXISTING POLICIES
================================ */

import AntiBriberyAndAntiCorruptionPolicy from "./new-policies/Anti-Bribery and Anti-Corruption Policy.pdf";
import AntiMoneyLaunderingPolicy from "./new-policies/Anti-Money Laundering Policy.pdf";
import CodeOfConduct from "./new-policies/Code of Conduct.pdf";
import HealthAndSafety from "./new-policies/Health and Safety.pdf";
import HumanRightPolicy from "./new-policies/Human Right Policy.pdf";
import InformationSecurityPolicy from "./new-policies/Information Security Policy.pdf";
import POSH from "./new-policies/POSH.pdf";
import WhistleblowerPolicy from "./new-policies/Whistleblower Policy.pdf";

export const existingPolicies = {
  antiBriberyAndAntiCorruption: AntiBriberyAndAntiCorruptionPolicy,
  antiMoneyLaundering: AntiMoneyLaunderingPolicy,
  codeOfConduct: CodeOfConduct,
  healthAndSafety: HealthAndSafety,
  humanRightPolicy: HumanRightPolicy,
  informationSecurityPolicy: InformationSecurityPolicy,
  posh: POSH,
  whistleblowerPolicy: WhistleblowerPolicy,
};

/* ================================
   NEW POLICIES
================================ */

// import ClientAcceptancePolicy from "./exisiting-policies/Client Acceptance Policy.pdf";
import CodeOfEthics from "./exisiting-policies/Code of Ethics.pdf";
// import ComplianceManagementPolicy from "./new_policies/Compliance Management Policy.docx";
import CorporateGovernancePolicy from "./exisiting-policies/Corporate Governance Policy.pdf";
import DataPrivacyPolicy from "./exisiting-policies/Data Privacy Policy.pdf";
// import QualityAssurancePolicy from "./new_policies/Quality Assurance Policy.docx";
// import RiskManagementPolicy from "./new_policies/Risk Management Policy.docx";
// import { policies } from './../../pages/governance/governanceData';

export const newPolicies = {
  // clientAcceptancePolicy: ClientAcceptancePolicy,
  codeOfEthics: CodeOfEthics,
  corporateGovernancePolicy: CorporateGovernancePolicy,
  dataPrivacyPolicy: DataPrivacyPolicy,
};

/* ================================
   OPTIONAL: COMBINED EXPORT
================================ */

const policies = {
  existing: existingPolicies,
  new: newPolicies,
};

export default policies;
