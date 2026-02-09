import { Activity, ClipboardList, Eye, FileText, Search, Shield, Wrench,Map } from "lucide-react";

export const features = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Process Walkthroughs",
      description: "Conducting detailed end-to-end walkthroughs to understand as-is processes and identify inherent risks."
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "Gap Analysis",
      description: "Reviewing existing policies against leading practices to prioritize and remediate control of weaknesses."
    },
    {
      icon: <Map className="w-7 h-7" />,
      title: "Control Mapping",
      description: "Designing risk-control matrices that align organizational objectives with specific financial and operational safeguards."
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: "Policy Formulation",
      description: "Developing Standard Operating Procedures (SOPs) to formalize internal controls and ensure consistent execution across departments."
    }
  ];

  export const testingItems = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Design Effectiveness",
      description: "Evaluating whether established controls are appropriately designed to prevent or detect significant financial misstatements."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Operating Effectiveness",
      description: "Performing detailed sample testing and data analytics to verify that controls function consistently in practice."
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "Remediation Support",
      description: "Collaborating with management to design actionable plans for correcting identified design or system deficiencies."
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Continuous Monitoring",
      description: "Implementing sustainment phases to follow up on action points and monitor the long-term health of controls."
    }
  ];

  export const faqs = [
    {
      question: "What is the primary difference between IFC and ICOFR?",
      answer: "IFC covers broader internal controls, while ICOFR specifically focuses on controls relevant to reliable financial reporting and statement preparation."
    },
    {
      question: "How does RiskMan approach SOX compliance?",
      answer: "We utilize a risk-based methodology, focusing on high-impact areas to ensure effective control designing and rigorous testing."
    },
    {
      question: "Does RiskMan help in designing IFC frameworks?",
      answer: "Yes, we specialize in designing IFC frameworks, including process documentation, risk identification, and control matrix development."
    },
    {
      question: "What industries do your SOX and IFC services cover?",
      answer: "We serve diverse sectors including manufacturing, technology, media, automobile, FMCG, and financial services."
    },
    {
      question: "How do we test the operating effectiveness of controls?",
      answer: "We use sampling and advanced data analytics to validate that controls operate as intended over a specific period."
    }
  ];