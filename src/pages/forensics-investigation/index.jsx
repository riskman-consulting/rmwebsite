import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Fingerprint, 
  Search, 
  Database, 
  FileSearch, 
  Lock, 
  History, 
  ArrowRight, 
  ChevronDown, 
  Gavel, 
  Network,
  EyeOff,
  ShieldCheck
} from 'lucide-react';

const ForensicsInvestigationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const fraudDetection = [
    { 
      title: "Forensic Accounting", 
      desc: "Detailed examination of financial records to trace misappropriated funds and identify embezzlement patterns.",
      icon: <FileSearch className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Whistleblower Response", 
      desc: "Independent investigation of internal allegations to ensure transparency while protecting reputation.",
      icon: <EyeOff className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Asset Tracing", 
      desc: "Global capabilities to locate and recover diverted assets through meticulous transaction mapping.",
      icon: <History className="w-8 h-8 text-brandAccent" />
    },
  ];

  const digitalForensics = [
    { title: "Data Breach Investigations", d: "Rapid analysis to determine the source, scope, and impact of unauthorized access.", icon: <ShieldAlert size={20}/> },
    { title: "Evidence Preservation", d: "Court-admissible collection of electronic data from servers, cloud, and mobile.", icon: <Database size={20}/> },
    { title: "Cyber Fraud Analytics", d: "Utilizing AI-driven patterns to detect sophisticated digital manipulation.", icon: <Network size={20}/> }
  ];

  const faqs = [
    { q: "How does RiskMan ensure the confidentiality of a sensitive internal investigation?", a: "We utilize encrypted communication channels and restricted 'need-to-know' access protocols to protect sensitive data and organizational reputation throughout the process." },
    { q: "What types of Organizations typically require forensic services?", a: "Any entity facing complex financial structures, regulatory scrutiny, or digital threats benefit from our specialized investigative and forensic expertise." },
    { q: "Can RiskMan assist in recovering lost financial assets?", a: "Yes, our forensic accountants specialize in tracing complex fund flows across jurisdictions to identify and help recover diverted capital." },
    { q: "Is the evidence gathered by RiskMan admissible in legal proceedings?", a: "Absolutely. We maintain a strict chain of custody and follow international forensic standards to ensure all findings are court-admissible." },
    { q: "How quickly can RiskMan respond to a suspected data breach?", a: "Our rapid response team is equipped to initiate digital preservation and forensic triage within hours of an incident report." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[150px] -mr-32 -mt-32"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandAccent/10 border border-brandAccent/30 text-brandAccent rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
              <Lock size={14} className="mr-1" /> Confidential Investigative Elite
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Advanced Forensics and <span className="text-brandAccent">Investigation</span> Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Protect organizational integrity through rigorous investigative protocols. We provide the clarity and evidence needed to resolve complex internal and external threats.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-10 py-4 rounded-md font-bold hover:bg-brandNavy transition-all shadow-xl">Explore Our Services</button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">Consult Our Experts</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC SOLUTIONS (Intro) */}
      <section className="py-20 bg-white border-b border-borderLight">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandDark tracking-tight">Strategic Investigative Solutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Organizations today face sophisticated threats that demand more than just standard oversight. RiskMan delivers high-stakes investigative expertise to identify vulnerabilities and resolve misconduct with absolute precision.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE FRAUD DETECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold shrink-0">Fraud and Misconduct Detection</h2>
            <div className="h-px bg-borderLight w-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fraudDetection.map((item, idx) => (
              <div key={idx} className="p-8 bg-brandLight rounded-2xl hover:bg-brandPrimary hover:text-white transition-all group">
                <div className="mb-6 group-hover:text-brandAccent transition-colors">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIGITAL FORENSICS (Modern Dark Section) */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Digital Forensics & Response</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">In an era of data-centric operations, our team secures critical evidence from digital environments to mitigate high-tech risks.</p>
              <div className="space-y-4">
                {digitalForensics.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-surfaceDark border border-white/5 rounded-xl hover:border-brandAccent transition-colors">
                    <div className="text-brandAccent shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 bg-gradient-to-br from-brandAccent/40 to-transparent rounded-[2.5rem]">
                <div className="bg-brandDark p-12 rounded-[2.4rem] text-center">
                  <Fingerprint size={80} className="text-brandAccent mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Evidence Preservation</h3>
                  <p className="text-gray-400 text-sm italic">"We maintain a strict chain of custody and follow international standards to ensure all digital findings are court-admissible."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DUE DILIGENCE & COMPLIANCE */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Integrity Due Diligence</h2>
            <p className="text-gray-600">Navigate complex regulatory landscapes by providing deep insights into partners, vendors, and high-value transactions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Background Intelligence", d: "Comprehensive screening to highlight red flags before they manifest as liabilities.", icon: <Search className="text-brandPrimary" /> },
              { t: "Regulatory Reviews", d: "Assessing internal controls against global standards to prevent bribery and corruption.", icon: <ShieldCheck className="text-brandPrimary" /> },
              { t: "Litigation Support", d: "Providing expert testimony and forensic reporting to bolster legal positions.", icon: <Gavel className="text-brandPrimary" /> }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Investigation Insights FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
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

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brandDark rounded-[3rem] p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-brandAccent">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Protect Your Organization</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Implement proactive safeguards and reactive excellence for all investigative requirements.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl flex items-center gap-3 mx-auto">
              Request A Confidential Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy uppercase">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-normal text-gray-400 lowercase ml-2">Forensics Unit</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Licensed Investigation & Forensic Accounting Group</p>
        </div>
      </footer>
    </div>
  );
};

export default ForensicsInvestigationPage;