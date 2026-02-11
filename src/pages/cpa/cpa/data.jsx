import { BarChart3, CheckCircle, Layers, Scale } from "lucide-react";

export const services = [
    {
      title: "Financial Statement Audits",
      desc: "Rigorous examination of financial disclosures to ensure transparency and compliance with evolving regulatory benchmarks.",
      icon: <BarChart3 className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Internal Control Reviews",
      desc: "Systematic evaluation of organizational protocols to eliminate inefficiencies and mitigate systemic risk factors effectively.",
      icon: <Layers className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Compliance Audits",
      desc: "Specialized assessments ensuring strict adherence to federal, state, and industry-specific legal mandates.",
      icon: <Scale className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive validation of operational processes to maintain superior performance standards and institutional resilience.",
      icon: <CheckCircle className="w-8 h-8 text-brandAccent" />
    }
  ];

  export const faqs = [
    { q: "What distinguishes RiskMan’s assurance approach?", a: "We prioritize intelligent assurance, moving beyond backward-looking verification to provide real-time, data-driven insights." },
    { q: "How do these services benefit large Organizations?", a: "They streamline reporting, reduce regulatory friction, and provide leadership with a clear view of enterprise-wide risk." },
    { q: "Are these services scalable?", a: "Yes, our frameworks are designed to adapt to the shifting complexity of global operational footprints." },
    { q: "How does RiskMan handle emerging regulatory changes?", a: "We maintain a proactive monitoring posture to ensure all assurance activities align with the latest US standards." },
    { q: "What is the typical engagement lifecycle?", a: "Engagements begin with a high-level risk assessment followed by tailored execution and continuous reporting phases." }
  ];