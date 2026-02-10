import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Map, 
  Search, 
  TrendingUp, 
  ChevronDown, 
  ArrowLeft, 
  FileCheck, 
  Globe, 
  Laptop,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const ComplianceAuditsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const landscapeMapping = [
    { 
      title: "Framework Alignment", 
      desc: "Mapping operations for NIST, ISO, or industry-specific mandates to ensure structural integrity.",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "State & Federal Tracking", 
      desc: "Ensuring continuous compliance across all US governing bodies and evolving legal landscapes.",
      icon: <Globe className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Policy Synchronization", 
      desc: "Aligning internal policies with external legal requirements for seamless organizational adherence.",
      icon: <FileCheck className="w-8 h-8 text-brandAccent" />
    },
  ];

  const maturitySteps = [
    { title: "Training & Awareness", d: "Ensuring staff understand their compliance obligations through targeted education." },
    { title: "Automated Tracking", d: "Implementing software to monitor compliance in real-time across all departments." },
    { title: "Futureproofing", d: "Preparing for upcoming legislative shifts before they become active law." },
  ];

  const faqs = [
    { q: "What types of compliance do you audit?", a: "We cover financial, environmental, labor, and industry-specific regulations across the US and international jurisdictions." },
    { q: "How does a compliance audit differ from a financial audit?", a: "Compliance audits focus on adhering to specific laws, rules, and regulations, whereas financial audits focus on the accuracy of financial reporting." },
    { q: "What happens if a gap is found?", a: "We provide a detailed remediation plan to bring the organization back into full standing quickly and efficiently." },
    { q: "Do you audit AI and digital compliance?", a: "Yes, we specialize in emerging regulations like the EU AI Act, NIST frameworks, and global digital privacy mandates." },
    { q: "Is this audit performed on-site?", a: "We offer both on-site and remote 'virtual' audits depending on the organization's needs and logistical requirements." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[120px] -mr-20 -mt-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandAccent/10 border border-brandAccent/20 text-brandAccent rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
              Strategic Regulatory Oversight
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Strategic Compliance <span className="text-brandAccent">Oversight</span> for Organizations
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              RiskMan ensures Organizations maintain a perfect standing with regulators through rigorous compliance auditing and proactive risk mitigation across all jurisdictions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all shadow-lg">
                <ArrowLeft size={18} /> Return to Services
              </button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
                Speak with a Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY LANDSCAPE MAPPING */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Regulatory Landscape Mapping</h2>
            <p className="text-gray-600 text-lg">Organizations must navigate a dense web of overlapping regulations that vary by industry and geographic location.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {landscapeMapping.map((item, idx) => (
              <div key={idx} className="p-8 border border-borderLight rounded-2xl hover:border-brandPrimary transition-all bg-surfaceLight">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERIFICATION & SUBSTANTIVE TESTING */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Verification & Substantive Testing</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">Our audits provide empirical evidence of compliance, shielding the organization from penalties and reputational damage.</p>
              <div className="space-y-4">
                {[
                  { t: "Data Integrity Audits", d: "Ensuring reporting data is accurate and untampered.", icon: <Search size={20}/> },
                  { t: "Operational Spot-checks", d: "Verifying that field activities match documented policies.", icon: <CheckCircle2 size={20}/> },
                  { t: "Reporting Validation", d: "Confirming all filings meet specific regulatory formats.", icon: <FileCheck size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-surfaceDark border border-white/5 rounded-xl">
                    <div className="text-brandAccent">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{item.t}</h5>
                      <p className="text-xs text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-12 bg-brandPrimary/10 border border-brandAccent/20 rounded-[3rem] text-center">
                 <ShieldCheck className="mx-auto mb-6 text-brandAccent" size={64} />
                 <h3 className="text-2xl font-bold mb-4">Secure License to Operate</h3>
                 <p className="text-gray-400 text-sm italic">"We identify and close compliance gaps before they escalate, ensuring your organizational standing remains impeccable."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE MATURITY SCALING */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Compliance Maturity Scaling</h2>
            <p className="text-gray-600">Moving beyond basic adherence toward a mature, self-sustaining compliance culture.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {maturitySteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {i === 0 ? <Users size={24} /> : i === 1 ? <Laptop size={24} /> : <TrendingUp size={24} />}
                </div>
                <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Audit Knowledge Center</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4 animate-fadeIn">
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
          <div className="bg-brandDark rounded-3xl p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brandPrimary/20 to-transparent"></div>
            <div className="relative z-10">
              <AlertCircle className="mx-auto mb-6 text-brandAccent opacity-50" size={48} />
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Eliminate Regulatory Uncertainty</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
                Identify and close gaps before they escalate. Secure your license to operate with a professional RiskMan audit.
              </p>
              <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl hover:-translate-y-1">
                Begin Your Compliance Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-normal text-gray-400 lowercase ml-2">Compliance Division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Federal & Industry Compliance Auditing Group</p>
        </div>
      </footer>
    </div>
  );
};

// Generic Users icon fallback
const Users = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default ComplianceAuditsPage;