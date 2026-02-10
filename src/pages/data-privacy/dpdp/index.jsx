import React, { useState } from 'react';
import { 
  Users, 
  Map, 
  ShieldCheck, 
  MessageSquare, 
  RefreshCw, 
  ArrowLeft, 
  ChevronDown, 
  Search, 
  Globe, 
  Zap,
  BookOpen
} from 'lucide-react';
import HeroSection from "./HeroSection"
import DataFiduciarySection from './DataFiduciarySection';
const DPDPCompliancePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const fiduciaryGovernance = [
    { 
      title: "Significant Data Fiduciary (SDF) Classification", 
      desc: "We evaluate your processing volume to determine if you meet SDF criteria requiring independent audits.",
      icon: <ShieldCheck className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Data Protection Officer (DPO) Appointment", 
      desc: "RiskMan assists in appointing a localized DPO as the primary contact for the Data Protection Board.",
      icon: <Users className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Inventory and Mapping", 
      desc: "Our teams conduct deep-asset discovery to create an immutable Record of Processing Activities (ROPA).",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
  ];

  const empowermentSteps = [
    { title: "Multilingual Consent Orchestration", desc: "Deploy notice frameworks in English and scheduled Indian languages for valid, informed consent." },
    { title: "Consent Manager Integration", desc: "Integrate specialized platforms allowing individuals to manage permissions via a unified interface." },
    { title: "Rights Fulfillment Portals", desc: "Build automated workflows for Data Principals to exercise rights of access, correction, and erasure." },
  ];

  const faqs = [
    { q: "Does DPDP apply to legacy data?", a: "Yes, Organizations must provide fresh notices for data collected prior to enforcement." },
    { q: "How do you handle data localization?", a: "We help navigate government notifications regarding restricted cross-border transfers." },
    { q: "What is a Data Processor?", a: "Any entity processing data on your behalf; we secure these roles through strict contracts." },
    { q: "Does the Act cover offline data?", a: "Only if it is digitized later or originally collected in digital form." },
    { q: "How often should we audit?", a: "Significant Data Fiduciaries must conduct periodic audits by an independent auditor." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
     <HeroSection/>

      {/* 2. DATA FIDUCIARY GOVERNANCE */}
      <DataFiduciarySection/>

      {/* 3. CONSENT AND EMPOWERMENT */}
      <section className="py-20 bg-brandLight">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Consent and Principal Empowerment</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">The DPDP Act requires Organizations to implement transparent and revocable consent mechanisms across all digital touchpoints.</p>
              <div className="space-y-4">
                {empowermentSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm border-l-4 border-brandAccent">
                    <Zap className="text-brandAccent shrink-0 mt-1" size={18} />
                    <div>
                      <h5 className="font-bold text-brandDark">{step.title}</h5>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video bg-brandNavy rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden">
                <Globe className="absolute -right-20 -bottom-20 text-brandAccent/10 w-80 h-80" />
                <h3 className="text-brandGold text-3xl font-heading font-black mb-4">India Mandate</h3>
                <p className="text-white text-lg font-light italic">"Valid, informed, and granular consent is no longer an option—it is the foundation of trust."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL RESILIENCE */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">Operational Resilience and Reporting</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Breach Notification", d: "Designs 72-hour incident response plans for immediate reporting to the Data Protection Board.", icon: <ShieldCheck className="mx-auto mb-4 text-brandPrimary" /> },
              { t: "Privacy by Design", d: "Embedding data protection into your product development lifecycle as a core functional requirement.", icon: <Search className="mx-auto mb-4 text-brandPrimary" /> },
              { t: "Employee Training", d: "Delivering high-level sensitization to internal teams to prevent human-error breaches.", icon: <BookOpen className="mx-auto mb-4 text-brandPrimary" /> }
            ].map((res, i) => (
              <div key={i} className="text-center p-8 hover:bg-brandLight rounded-2xl transition-colors">
                {res.icon}
                <h4 className="font-bold text-xl mb-2">{res.t}</h4>
                <p className="text-sm text-gray-600">{res.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Compliance FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surfaceDark rounded-xl border border-white/10 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brandAccent rounded-3xl p-12 lg:p-20 text-center text-brandDark relative shadow-2xl overflow-hidden border-2 border-brandGold">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tight">Secure Your Fiduciary Status</h2>
              <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
                Ensure Seamless DPDP Adherence. Partner with RiskMan to transform regulatory complexity into a streamlined, compliant ecosystem.
              </p>
              <button className="bg-brandDark text-white px-12 py-5 rounded-md font-black text-xl hover:bg-brandNavy transition-all shadow-xl">
                Request A Compliance Gap Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Specialized India DPDP Advisory</p>
        </div>
      </footer>
    </div>
  );
};

export default DPDPCompliancePage;