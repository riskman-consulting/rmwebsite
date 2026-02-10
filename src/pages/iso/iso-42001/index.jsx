import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Scale, 
  Database, 
  LineChart, 
  Eye, 
  FileCode, 
  Search, 
  BarChart3, 
  ChevronDown, 
  ArrowLeft,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import HeroSection from './HeroSection';
import PillarsSection from './PillarsSection';
import RoadMapSection from './RoadMapSection';
import BenefitSection from './BenefitSection';
import FaqSection from '../iso-31000/FaqSection';
import CTASection from './CTASection';

const ISO42001Page = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const pillars = [
    { title: "Ethical Oversight", desc: "Establish frameworks to ensure AI systems are unbiased, fair, and transparent in their automated decision-making.", icon: <Scale className="w-8 h-8 text-brandAccent" /> },
    { title: "AI Risk Assessment", desc: "Identify unique vulnerabilities in AI models, including data poisoning, algorithmic bias, and security exploits.", icon: <ShieldCheck className="w-8 h-8 text-brandAccent" /> },
    { title: "Data Quality Management", desc: "Ensure the data used to train and operate AI systems is accurate, secure, and legally compliant.", icon: <Database className="w-8 h-8 text-brandAccent" /> },
    { title: "Performance Monitoring", desc: "Implement continuous tracking to ensure AI systems behave as intended and do not 'drift' over time.", icon: <LineChart className="w-8 h-8 text-brandAccent" /> },
  ];

  const roadmap = [
    { title: "AI Scoping", desc: "Identifying all AI systems and use cases within the organization that fall under the management framework.", icon: <Search className="w-6 h-6" /> },
    { title: "Policy Development", desc: "Creating high-level AI policies that align with organizational values and legal requirements.", icon: <FileCode className="w-6 h-6" /> },
    { title: "Internal Audit", desc: "Conducting rigorous reviews of AI development processes to identify gaps in security or ethics.", icon: <Eye className="w-6 h-6" /> },
    { title: "Stakeholder Reporting", desc: "Providing leadership with clear insights into AI performance and compliance status.", icon: <BarChart3 className="w-6 h-6" /> },
  ];

  const faqs = [
    { q: "What is ISO 42001?", a: "The international standard for establishing, implementing, and maintaining an Artificial Intelligence Management System (AIMS)." },
    { q: "Who needs this certification?", a: "Any organization developing, providing, or using AI-based products or services in their operations." },
    { q: "Does it cover Generative AI?", a: "Yes, the framework is designed to be applicable to all types of AI, including Large Language Models (LLMs)." },
    { q: "How does it handle AI bias?", a: "It requires formal processes for identifying and mitigating bias in both training data and algorithms." },
    { q: "Is it compatible with ISO 27001?", a: "Yes, it is designed to integrate seamlessly with ISO 27001 and other management standards." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. AI MANAGEMENT PILLARS */}
      <PillarsSection/>

      {/* 3. IMPLEMENTATION ROADMAP */}
      <RoadMapSection/>

      {/* 4. STRATEGIC BENEFITS */}
      <BenefitSection/>

      {/* 5. FAQ SECTION */}
      <FaqSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-brandPrimary" />
            <span className="font-heading font-black text-xl tracking-tighter text-brandNavy">RISKMAN AI</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | ISO 42001 Management Frameworks</p>
        </div>
      </footer>
    </div>
  );
};

// Simple icon wrapper for the benefits section
const Globe = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Users = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default ISO42001Page;