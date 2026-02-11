import { Database, ShieldCheck, TrendingUp } from "lucide-react";

export const auditPlanning = [
    { title: "Risk Scoping", d: "Precise identification of high-impact financial areas to focus audit efforts." },
    { title: "Materiality Assessment", d: "Establishing benchmarks that align with stakeholder expectations and regulatory needs." },
    { title: "Resource Allocation", d: "Deploying senior expertise to critical audit segments for high-level oversight." },
  ];

  export const fieldwork = [
    { title: "Sub-ledger Reconstruction", d: "Ensuring granular accuracy across all accounts for complete financial visibility.", icon: <Database size={20} /> },
    { title: "Algorithmic Sampling", d: "Utilizing statistical models to detect anomalies with unprecedented depth.", icon: <TrendingUp size={20} /> },
    { title: "Control Integration", d: "Validating the reliability of financial reporting systems and internal protocols.", icon: <ShieldCheck size={20} /> },
  ];

  export const faqs = [
    { q: "What standards guide your financial audits?", a: "We strictly adhere to US GAAS and PCAOB standards where applicable to the organization." },
    { q: "How do you handle material misstatements?", a: "We work transparently with leadership to identify, investigate, and remediate errors during the audit phase." },
    { q: "Can you audit multi-jurisdictional Organizations?", a: "Yes, we specialize in consolidating complex financial data across diverse operational regions." },
    { q: "What is the role of technology in your audit?", a: "We use advanced data analytics to perform 100% data testing rather than traditional limited sampling." },
    { q: "How long does a standard audit take?", a: "Timelines vary by complexity but are strictly managed to meet all filing deadlines." }
  ];