import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import {
  BarChart3,
  FileCheck,
  Search,
  PieChart,
  ArrowRight,
  ChevronDown,
  Database,
  Scale,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import HeroSection from './HeroSection';
import StrategicSection from './StrategicSection';
import TestingSection from './TestingSection';
import IndependentSection from './IndependentSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const FinancialAuditPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const auditPlanning = [
    { title: "Risk Scoping", d: "Precise identification of high-impact financial areas to focus audit efforts." },
    { title: "Materiality Assessment", d: "Establishing benchmarks that align with stakeholder expectations and regulatory needs." },
    { title: "Resource Allocation", d: "Deploying senior expertise to critical audit segments for high-level oversight." },
  ];

  const fieldwork = [
    { title: "Sub-ledger Reconstruction", d: "Ensuring granular accuracy across all accounts for complete financial visibility.", icon: <Database size={20} /> },
    { title: "Algorithmic Sampling", d: "Utilizing statistical models to detect anomalies across full transaction populations.", icon: <TrendingUp size={20} /> },
    { title: "Control Integration", d: "Validating the reliability of financial reporting systems and internal protocols.", icon: <ShieldCheck size={20} /> },
  ];

  const faqs = [
    { q: "What standards guide your financial audits?", a: "We strictly adhere to US GAAS and PCAOB standards where applicable to the organization." },
    { q: "How do you handle material misstatements?", a: "We work transparently with leadership to identify, investigate, and remediate errors during the audit phase." },
    { q: "Can you audit multi-jurisdictional Organizations?", a: "Yes, we specialize in consolidating complex financial data across diverse operational regions." },
    { q: "What is the role of technology in your audit?", a: "We use advanced data analytics to perform 100% data testing rather than traditional limited sampling." },
    { q: "How long does a standard audit take?", a: "Timelines vary by complexity but are strictly managed to meet all filing deadlines." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark dark:bg-bgDark dark:text-white">
      <Helmet>
        <title>Financial Statement Audit Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers independent financial statement audit services adhering to US GAAS and PCAOB standards, providing organizations with credible assurance over financial reporting." />
        <link rel="canonical" href="https://www.riskman.in/services/cpa-us-assurance/financial-statement-audits" />
      </Helmet>
      {/* 1. HERO SECTION */}
       <HeroSection/>

      {/* 2. STRATEGIC AUDIT PLANNING */}
      <StrategicSection/>

      {/* 3. FIELDWORK & TESTING (Horizontal Steps) */}
      <TestingSection/>

      {/* 4. INDEPENDENT OPINION */}
     <IndependentSection/>

      {/* 5. FAQ SECTION */}
      <FAQSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

    </div>
  );
};

export default FinancialAuditPage;