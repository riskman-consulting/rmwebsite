import { FileCheck, Globe, Map } from "lucide-react";

export const landscapeMapping = [
    { 
      title: "Framework Alignment", 
      desc: "Mapping operations for NIST, ISO, or industry-specific mandates to ensure structural integrity.",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "State & Federal Tracking", 
      desc: "Ensuring continuous compliance across all US governing bodies and evolving legal landscapes.",
      icon: <Globe className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Policy Synchronization", 
      desc: "Aligning internal policies with external legal requirements for seamless organizational adherence.",
      icon: <FileCheck className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const maturitySteps = [
    { title: "Training & Awareness", d: "Ensuring staff understand their compliance obligations through targeted education." },
    { title: "Automated Tracking", d: "Implementing software to monitor compliance in real-time across all departments." },
    { title: "Futureproofing", d: "Preparing for upcoming legislative shifts before they become active law." },
  ];

  export const faqs = [
    { q: "What types of compliance do you audit?", a: "We cover financial, environmental, labor, and industry-specific regulations across the US and international jurisdictions." },
    { q: "How does a compliance audit differ from a financial audit?", a: "Compliance audits focus on adhering to specific laws, rules, and regulations, whereas financial audits focus on the accuracy of financial reporting." },
    { q: "What happens if a gap is found?", a: "We provide a detailed remediation plan to bring the organization back into full standing quickly and efficiently." },
    { q: "Do you audit AI and digital compliance?", a: "Yes, we specialize in emerging regulations like the EU AI Act, NIST frameworks, and global digital privacy mandates." },
    { q: "Is this audit performed on-site?", a: "We offer both on-site and remote 'virtual' audits depending on the organization's needs and logistical requirements." }
  ];