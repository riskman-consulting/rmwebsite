import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Database,
  Zap,
  Users,
  Lock,
  ChevronDown,
  ArrowRight,
  Fingerprint,
  Scale,
  Settings2
} from 'lucide-react';
import HeroSection from './HeroSection';
import FrameworkSection from './FrameworkSection';
import HighSection from './HighSection';
import FAQSection from './FAQSection';
import TrustSection from './TrustSection';

const DataPrivacyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const complianceCards = [
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

  const outcomes = [
    { title: "Risk Mitigation", d: "Quantify and reduce exposure from shadow AI and unauthorized data flows.", icon: <ShieldCheck size={24} /> },
    { title: "Operational Efficiency", d: "Automate Data Subject Access Requests (DSAR) to lower manual overhead.", icon: <Settings2 size={24} /> },
    { title: "Digital Trust", d: "Demonstrate transparency to stakeholders through verifiable privacy controls.", icon: <Users size={24} /> }
  ];

  const faqs = [
    { q: "How does RiskMan support multi-jurisdictional compliance?", a: "We implement a 'Common Control Framework' mapping overlapping requirements across global laws to ensure efficiency." },
    { q: "Can you help with AI-related privacy risks?", a: "Yes, we provide AI Governance frameworks for data training sets and algorithmic transparency to mitigate emerging risks." },
    { q: "What is the first step in a privacy engagement?", a: "We begin with a comprehensive Data Discovery and Gap Analysis to identify current exposure and prioritize remediation." },
    { q: "Do you provide technology implementation?", a: "We consult on selecting and integrating Privacy-Enhancing Technologies (PETs) tailored specifically to your infrastructure." },
    { q: "How do you handle data breach protocols?", a: "We design 72-hour notification workflows to meet mandatory reporting timelines and ensure regulatory adherence." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INTEGRATED COMPLIANCE FRAMEWORKS */}
      <FrameworkSection />

      {/* 3. HIGH-VALUE PRIVACY OUTCOMES */}
      <HighSection />

      {/* 4. FUTURE-PROOF STRATEGY (Visual Section) */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-brandLight rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5">
              <Database size={400} />
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-brandDark">Future-Proof Your Data Strategy</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Contact RiskMan today to elevate your privacy program from a cost center to a strategic business enabler.
              </p>
              <button className="bg-brandPrimary text-white px-10 py-5 rounded-md font-black text-lg hover:bg-brandNavy transition-all shadow-xl flex items-center gap-3">
                Schedule A Consultation <Zap size={20} className="text-brandAccent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <FAQSection />

      {/* 6. MINI TRUST SECTION */}
      <TrustSection/>

      {/* 7. FOOTER */}
      <footer className="py-12 bg-white">
        <div className="container text-center">
          <div className="font-heading font-black text-2xl text-brandNavy mb-4">RISK<span className="text-brandAccent">MAN</span></div>
          <p className="text-gray-500 text-sm">International Data Privacy & Compliance Strategic Group</p>
        </div>
      </footer>
    </div>
  );
};

export default DataPrivacyPage;