import { Fingerprint, Globe, Scale, Settings2, ShieldCheck, Users } from "lucide-react";

export const complianceCards = [
    {
      title: "DPDP Compliance",
      desc: "Align with India’s Digital Personal Data Protection Act through automated data mapping, consent orchestration, and robust fiduciary accountability.",
      icon: <Fingerprint className="w-8 h-8 text-brandAccent" />,
      tag: "India Focus"
    },
    {
      title: "GDPR Compliance",
      desc: "Navigate European mandates with privacy-by-design, cross-border transfer impact assessments, and outsourced DPO services.",
      icon: <Globe className="w-8 h-8 text-brandAccent" />,
      tag: "EU Standards"
    },
    {
      title: "Other Regulatory Compliances",
      desc: "Streamline adherence to CCPA/CPRA, HIPAA, and LGPD through centralized risk management and reporting dashboard.",
      icon: <Scale className="w-8 h-8 text-brandAccent" />,
      tag: "Global Reach"
    }
  ];

  export const outcomes = [
    { title: "Risk Mitigation", d: "Quantify and reduce exposure from shadow AI and unauthorized data flows.", icon: <ShieldCheck size={24} /> },
    { title: "Operational Efficiency", d: "Automate Data Subject Access Requests (DSAR) to lower manual overhead.", icon: <Settings2 size={24} /> },
    { title: "Digital Trust", d: "Demonstrate transparency to stakeholders through verifiable privacy controls.", icon: <Users size={24} /> }
  ];

  export const faqs = [
    { q: "How does RiskMan support multi-jurisdictional compliance?", a: "We implement a 'Common Control Framework' mapping overlapping requirements across global laws to ensure efficiency." },
    { q: "Can you help with AI-related privacy risks?", a: "Yes, we provide AI Governance frameworks for data training sets and algorithmic transparency to mitigate emerging risks." },
    { q: "What is the first step in a privacy engagement?", a: "We begin with a comprehensive Data Discovery and Gap Analysis to identify current exposure and prioritize remediation." },
    { q: "Do you provide technology implementation?", a: "We consult on selecting and integrating Privacy-Enhancing Technologies (PETs) tailored specifically to your infrastructure." },
    { q: "How do you handle data breach protocols?", a: "We design 72-hour notification workflows to meet mandatory reporting timelines and ensure regulatory adherence." }
  ];