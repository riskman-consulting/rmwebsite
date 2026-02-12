import { FileText, Scale, Search, Share2, Trash2, Zap } from "lucide-react";

export const frameworks = [
    { 
      title: "Privacy Impact Assessments (DPIA)", 
      desc: "We identify and mitigate risks for high-stakes processing activities to meet Article 35 requirements.",
      icon: <Search className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Lawful Basis Optimization", 
      desc: "RiskMan evaluates operations to determine the most appropriate legal grounds, such as 'Contractual Necessity'.",
      icon: <Scale className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Article 30 Record Keeping", 
      desc: "We maintain detailed, evergreen inventories of processing activities for supervisory authority audits.",
      icon: <FileText className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const rights = [
    { title: "Automated DSAR Workflows", d: "Streamlining the Access Request process to meet the mandatory 30-day window.", icon: <Zap className="text-brandPrimary" /> },
    { title: "Right to Erasure Protocols", d: "Mapping data across servers to ensure 'Right to be Forgotten' requests are executed.", icon: <Trash2 className="text-brandPrimary" /> },
    { title: "Portability Solutions", d: "Establishing secure methods to move data in structured, machine-readable formats.", icon: <Share2 className="text-brandPrimary" /> },
  ];

  export const faqs = [
    { q: "What is the 72-hour rule?", a: "Breach reports to supervisory authorities must occur within 72 hours of awareness." },
    { q: "Who needs a DPO?", a: "Organizations involved in large-scale monitoring or processing sensitive data." },
    { q: "Does GDPR apply to small Organizations?", a: "Yes, if they process the data of EU residents, regardless of the organization's size." },
    { q: "How do you manage sub-processors?", a: "Through due diligence and specific contractual flow-downs to ensure they adhere to primary controller standards." },
    { q: "Is a DPA mandatory?", a: "Yes, a Data Processing Agreement is required whenever a controller uses a processor." }
  ];