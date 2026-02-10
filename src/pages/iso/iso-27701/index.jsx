import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Globe, 
  Users, 
  Search, 
  Settings, 
  Activity, 
  ChevronDown, 
  ArrowLeft,
  ArrowRight,
  Fingerprint,
  Lock
} from 'lucide-react';
import HeroSection from './HeroSection';
import CoreSection from './CoreSection';
import LifeCycleSection from './LifeCycleSection';
import BenefitSection from './BenefitSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const ISO27701Page = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const coreComponents = [
    { title: "PIMS Implementation", desc: "Establish a Privacy Information Management System that complements and extends your existing security controls.", icon: <Fingerprint className="w-8 h-8 text-brandAccent" /> },
    { title: "PII Controller Roles", desc: "Define clear responsibilities for managing personal data based on your specific organizational functions and legal requirements.", icon: <Users className="w-8 h-8 text-brandAccent" /> },
    { title: "Risk-Based Privacy", desc: "Apply the same rigorous risk management principles to privacy as you do to general information security.", icon: <ShieldCheck className="w-8 h-8 text-brandAccent" /> },
    { title: "Regulatory Alignment", desc: "Ensure your data handling practices meet the requirements of international privacy laws across different jurisdictions.", icon: <Globe className="w-8 h-8 text-brandAccent" /> },
  ];

  const auditLifecycle = [
    { title: "Privacy Scoping", desc: "Defining the boundaries of personal data processing within your specific organizational environment and systems.", icon: <Search className="w-6 h-6" /> },
    { title: "Gap Assessment", desc: "Identifying discrepancies between current practices and ISO 27701 requirements to prioritize remediation.", icon: <Database className="w-6 h-6" /> },
    { title: "Control Integration", desc: "Implementing specific privacy controls to mitigate identified risks to data subjects and organizational compliance.", icon: <Settings className="w-6 h-6" /> },
    { title: "Continuous Monitoring", desc: "Establishing ongoing reviews to maintain compliance as privacy regulations and technologies continue to evolve.", icon: <Activity className="w-6 h-6" /> },
  ];

  const faqs = [
    { q: "What is ISO 27701?", a: "It is an international extension to ISO 27001 specifically focused on privacy information management systems." },
    { q: "Does an organization need ISO 27001 first?", a: "Yes, ISO 27701 is designed to be implemented on top of an existing ISO 27001 framework." },
    { q: "How does it help with GDPR?", a: "It provides a structured approach and evidence of compliance that aligns closely with many GDPR requirements." },
    { q: "Does RiskMan provide internal audits for this?", a: "Yes, we offer expert internal audit services to ensure your organization is ready for certification." },
    { q: "Is the certification permanent?", a: "No, it requires regular surveillance audits to maintain valid status and ensure ongoing compliance." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. CORE COMPONENTS */}
      <CoreSection/>

      {/* 3. AUDIT LIFECYCLE (Timeline Style) */}
      <LifeCycleSection/>

      {/* 4. STRATEGIC BENEFITS */}
     <BenefitSection/>

      {/* 5. FAQ SECTION */}
      <FAQSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container text-center">
          <div className="font-heading font-bold text-xl text-brandNavy mb-4">RiskMan</div>
          <p className="text-gray-500 text-sm">International Data Privacy & ISO 27701 Consulting Services</p>
        </div>
      </footer>
    </div>
  );
};

export default ISO27701Page;