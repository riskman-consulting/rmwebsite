import React, { useState } from 'react';
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
    { title: "Algorithmic Sampling", d: "Utilizing statistical models to detect anomalies with unprecedented depth.", icon: <TrendingUp size={20} /> },
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
    <div className="font-sans bg-bgLight text-brandDark">
      
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

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-normal text-gray-400 lowercase ml-2">auditing division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | GAAS & PCAOB Independent Auditing</p>
        </div>
      </footer>
    </div>
  );
};

export default FinancialAuditPage;