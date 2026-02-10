import { BarChart3, ClipboardCheck, Lock, Network, Settings, Share2, Zap } from "lucide-react";

export const roadmap = [
    { title: "Preparation", desc: "We help your organization understand specific assessment requirements and identify current security gaps through internal audits.", icon: <Settings className="w-8 h-8 text-brandAccent" /> },
    { title: "Assessment", desc: "Coordination with accredited auditors to review your information security practices in detail against the VDA ISA catalog.", icon: <ClipboardCheck className="w-8 h-8 text-brandAccent" /> },
    { title: "Evaluation", desc: "Receiving a comprehensive report that highlights organizational strengths and identifies critical areas for improvement.", icon: <BarChart3 className="w-8 h-8 text-brandAccent" /> },
    { title: "Exchange", desc: "Facilitating the sharing of your certified results with business partners through the secure and official ENX portal.", icon: <Share2 className="w-8 h-8 text-brandAccent" /> },
  ];

  export const challenges = [
    { title: "Requirement Clarity", desc: "Navigating the specific and often complex TISAX assessment levels (AL1, AL2, or AL3).", icon: <Lock className="text-brandGold" /> },
    { title: "Resource Management", desc: "Efficiently allocating internal staff and budget for necessary system and process improvements.", icon: <Zap className="text-brandGold" /> },
    { title: "Continuous Compliance", desc: "Implementing long-term strategies to stay compliant during regular industry reassessments.", icon: <Network className="text-brandGold" /> },
  ];

  export const faqs = [
    { q: "Who needs TISAX?", a: "Any company working in or with the automotive industry that handles sensitive data or intellectual property." },
    { q: "Does it involve an external audit?", a: "Yes, an accredited third-party auditor must review your organizational security practices." },
    { q: "How does it help with risk?", a: "It offers a trusted, standardized way to manage security risks and secure vital business data." },
    { q: "What if an organization fails the assessment?", a: "You must implement corrective actions to meet the required standards before the results are finalized." },
    { q: "Can it prevent cyberattacks?", a: "Yes, by significantly heightening security standards and reducing known system vulnerabilities." }
  ];