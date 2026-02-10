import { ShieldCheck, Users,Map } from "lucide-react";

export const fiduciaryGovernance = [
    { 
      title: "Significant Data Fiduciary (SDF) Classification", 
      desc: "We evaluate your processing volume to determine if you meet SDF criteria requiring independent audits.",
      icon: <ShieldCheck className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Data Protection Officer (DPO) Appointment", 
      desc: "RiskMan assists in appointing a localized DPO as the primary contact for the Data Protection Board.",
      icon: <Users className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Inventory and Mapping", 
      desc: "Our teams conduct deep-asset discovery to create an immutable Record of Processing Activities (ROPA).",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const empowermentSteps = [
    { title: "Multilingual Consent Orchestration", desc: "Deploy notice frameworks in English and scheduled Indian languages for valid, informed consent." },
    { title: "Consent Manager Integration", desc: "Integrate specialized platforms allowing individuals to manage permissions via a unified interface." },
    { title: "Rights Fulfillment Portals", desc: "Build automated workflows for Data Principals to exercise rights of access, correction, and erasure." },
  ]

  export const faqs = [
    { q: "Does DPDP apply to legacy data?", a: "Yes, Organizations must provide fresh notices for data collected prior to enforcement." },
    { q: "How do you handle data localization?", a: "We help navigate government notifications regarding restricted cross-border transfers." },
    { q: "What is a Data Processor?", a: "Any entity processing data on your behalf; we secure these roles through strict contracts." },
    { q: "Does the Act cover offline data?", a: "Only if it is digitized later or originally collected in digital form." },
    { q: "How often should we audit?", a: "Significant Data Fiduciaries must conduct periodic audits by an independent auditor." }
  ];