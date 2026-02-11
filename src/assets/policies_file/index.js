/* ================================
   EXISTING POLICIES
================================ */

import AntiBriberyAndAntiCorruptionPolicy from "./existing_policies/Anti-Bribery and Anti-Corruption Policy.docx";
import AntiMoneyLaunderingPolicy from "./existing_policies/Anti-Money Laundering Policy.docx";
import CodeOfConduct from "./existing_policies/Code of Conduct.docx";
import HealthAndSafety from "./existing_policies/Health and Safety.docx";
import HumanRightPolicy from "./existing_policies/Human Right Policy.docx";
import InformationSecurityPolicy from "./existing_policies/Information Security Policy.docx";
import POSH from "./existing_policies/POSH.docx";
import WhistleblowerPolicy from "./existing_policies/Whistleblower Policy.docx";

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

import ClientAcceptancePolicy from "./new_policies/Client Acceptance Policy.docx";
import CodeOfEthics from "./new_policies/Code of Ethics.docx";
import ComplianceManagementPolicy from "./new_policies/Compliance Management Policy.docx";
import CorporateGovernancePolicy from "./new_policies/Corporate Governance Policy.docx";
import DataPrivacyPolicy from "./new_policies/Data Privacy Policy.docx";
import QualityAssurancePolicy from "./new_policies/Quality Assurance Policy.docx";
import RiskManagementPolicy from "./new_policies/Risk Management Policy.docx";

export const newPolicies = {
  clientAcceptancePolicy: ClientAcceptancePolicy,
  codeOfEthics: CodeOfEthics,
  complianceManagementPolicy: ComplianceManagementPolicy,
  corporateGovernancePolicy: CorporateGovernancePolicy,
  dataPrivacyPolicy: DataPrivacyPolicy,
  qualityAssurancePolicy: QualityAssurancePolicy,
  riskManagementPolicy: RiskManagementPolicy,
};

/* ================================
   OPTIONAL: COMBINED EXPORT
================================ */

const policies = {
  existing: existingPolicies,
  new: newPolicies,
};

export default policies;
