import { Database, EyeOff, FileSearch, History, Network, ShieldAlert } from "lucide-react";

  export const fraudDetection = [
    { 
      title: "Forensic Accounting", 
      desc: "Detailed examination of financial records to trace misappropriated funds and identify embezzlement patterns.",
      icon: <FileSearch className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Whistleblower Response", 
      desc: "Independent investigation of internal allegations to ensure transparency while protecting reputation.",
      icon: <EyeOff className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Asset Tracing", 
      desc: "Global capabilities to locate and recover diverted assets through meticulous transaction mapping.",
      icon: <History className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const digitalForensics = [
    { title: "Data Breach Investigations", d: "Rapid analysis to determine the source, scope, and impact of unauthorized access.", icon: <ShieldAlert size={20}/> },
    { title: "Evidence Preservation", d: "Court-admissible collection of electronic data from servers, cloud, and mobile.", icon: <Database size={20}/> },
    { title: "Cyber Fraud Analytics", d: "Utilizing AI-driven patterns to detect sophisticated digital manipulation.", icon: <Network size={20}/> }
  ];

  export const faqs = [
    { q: "How does RiskMan ensure the confidentiality of a sensitive internal investigation?", a: "We utilize encrypted communication channels and restricted 'need-to-know' access protocols to protect sensitive data and organizational reputation throughout the process." },
    { q: "What types of Organizations typically require forensic services?", a: "Any entity facing complex financial structures, regulatory scrutiny, or digital threats benefit from our specialized investigative and forensic expertise." },
    { q: "Can RiskMan assist in recovering lost financial assets?", a: "Yes, our forensic accountants specialize in tracing complex fund flows across jurisdictions to identify and help recover diverted capital." },
    { q: "Is the evidence gathered by RiskMan admissible in legal proceedings?", a: "Absolutely. We maintain a strict chain of custody and follow international forensic standards to ensure all findings are court-admissible." },
    { q: "How quickly can RiskMan respond to a suspected data breach?", a: "Our rapid response team is equipped to initiate digital preservation and forensic triage within hours of an incident report." }
  ];