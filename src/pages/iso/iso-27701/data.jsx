import { Activity, Database, Fingerprint, Globe, Search, Settings, ShieldCheck, Users } from "lucide-react";

export const coreComponents = [
    { title: "PIMS Implementation", desc: "Establish a Privacy Information Management System that complements and extends your existing security controls.", icon: <Fingerprint className="w-8 h-8 text-brandAccent" /> },
    { title: "PII Controller Roles", desc: "Define clear responsibilities for managing personal data based on your specific organizational functions and legal requirements.", icon: <Users className="w-8 h-8 text-brandAccent" /> },
    { title: "Risk-Based Privacy", desc: "Apply the same rigorous risk management principles to privacy as you do to general information security.", icon: <ShieldCheck className="w-8 h-8 text-brandAccent" /> },
    { title: "Regulatory Alignment", desc: "Ensure your data handling practices meet the requirements of international privacy laws across different jurisdictions.", icon: <Globe className="w-8 h-8 text-brandAccent" /> },
  ];

 export const auditLifecycle = [
    { title: "Privacy Scoping", desc: "Defining the boundaries of personal data processing within your specific organizational environment and systems.", icon: <Search className="w-6 h-6" /> },
    { title: "Gap Assessment", desc: "Identifying discrepancies between current practices and ISO 27701 requirements to prioritize remediation.", icon: <Database className="w-6 h-6" /> },
    { title: "Control Integration", desc: "Implementing specific privacy controls to mitigate identified risks to data subjects and organizational compliance.", icon: <Settings className="w-6 h-6" /> },
    { title: "Continuous Monitoring", desc: "Establishing ongoing reviews to maintain compliance as privacy regulations and technologies continue to evolve.", icon: <Activity className="w-6 h-6" /> },
  ];

 export const faqs = [
    { q: "What is ISO 27701?", a: "It is an international extension to ISO 27001 specifically focused on privacy information management systems." },
    { q: "Does an organization need ISO 27001 first?", a: "Yes, ISO 27701 is designed to be implemented on top of an existing ISO 27001 framework." },
    { q: "How does it help with GDPR?", a: "It provides a structured approach and evidence of compliance that aligns closely with many GDPR requirements." },
    { q: "Does RiskMan provide internal audits for this?", a: "Yes, we offer expert internal audit services to ensure your organization is ready for certification." },
    { q: "Is the certification permanent?", a: "No, it requires regular surveillance audits to maintain valid status and ensure ongoing compliance." }
  ];