import React, { useState } from 'react';
import { 
  Globe, 
  FileText, 
  Search, 
  ShieldCheck, 
  RotateCcw, 
  Trash2, 
  Share2, 
  ChevronDown, 
  ArrowLeft,
  Scale,
  Zap,
  Lock
} from 'lucide-react';

const GDPRCompliancePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const frameworks = [
    { 
      title: "Privacy Impact Assessments (DPIA)", 
      desc: "We identify and mitigate risks for high-stakes processing activities to meet Article 35 requirements.",
      icon: <Search className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Lawful Basis Optimization", 
      desc: "RiskMan evaluates operations to determine the most appropriate legal grounds, such as 'Contractual Necessity'.",
      icon: <Scale className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Article 30 Record Keeping", 
      desc: "We maintain detailed, evergreen inventories of processing activities for supervisory authority audits.",
      icon: <FileText className="w-8 h-8 text-brandAccent" />
    },
  ];

  const rights = [
    { title: "Automated DSAR Workflows", d: "Streamlining the Access Request process to meet the mandatory 30-day window.", icon: <Zap className="text-brandPrimary" /> },
    { title: "Right to Erasure Protocols", d: "Mapping data across servers to ensure 'Right to be Forgotten' requests are executed.", icon: <Trash2 className="text-brandPrimary" /> },
    { title: "Portability Solutions", d: "Establishing secure methods to move data in structured, machine-readable formats.", icon: <Share2 className="text-brandPrimary" /> },
  ];

  const faqs = [
    { q: "What is the 72-hour rule?", a: "Breach reports to supervisory authorities must occur within 72 hours of awareness." },
    { q: "Who needs a DPO?", a: "Organizations involved in large-scale monitoring or processing sensitive data." },
    { q: "Does GDPR apply to small Organizations?", a: "Yes, if they process the data of EU residents, regardless of the organization's size." },
    { q: "How do you manage sub-processors?", a: "Through due diligence and specific contractual flow-downs to ensure they adhere to primary controller standards." },
    { q: "Is a DPA mandatory?", a: "Yes, a Data Processing Agreement is required whenever a controller uses a processor." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandPrimary/30 border border-brandPrimary/50 text-blue-300 rounded-full text-xs font-bold uppercase mb-6 tracking-widest">
              <Globe size={14} className="animate-pulse" /> EU Privacy Standard
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Global GDPR Governance for <span className="text-brandAccent">Resilient Organizations</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Ensure seamless compliance with the EU’s gold standard for privacy through expert consulting, impact assessments, and cross-border transfer strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all">
                <ArrowLeft className="w-4 h-4" /> Back To Main Page
              </button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
                Consult A Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVANCED REGULATORY FRAMEWORKS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Advanced Regulatory Frameworks</h2>
            <p className="text-gray-600">Organizations operating within the EEA must adhere to a "high-water mark" of privacy demanding continuous monitoring.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((item, idx) => (
              <div key={idx} className="p-10 border border-borderLight rounded-2xl hover:border-brandAccent transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-brandAccent group-hover:h-full transition-all duration-300"></div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERNATIONAL DATA SOVEREIGNTY */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="bg-surfaceDark p-10 lg:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-brandPrimary/5 skew-x-12 translate-x-1/2"></div>
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">International Data Sovereignty</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">Managing data flows across borders requires sophisticated legal and technical safeguards to ensure equivalent protection levels.</p>
                <div className="space-y-6">
                  {[
                    { t: "Transfer Impact Assessments (TIA)", d: "Required assessments for data moving to 'third countries'." },
                    { t: "Standard Contractual Clauses (SCCs)", d: "Implementing modular SCCs for controller-processor legalization." },
                    { t: "Adequacy Monitoring", d: "Strategy shifts for changing global jurisdictional statuses." }
                  ].map((info, i) => (
                    <div key={i} className="flex gap-4">
                      <ShieldCheck className="text-brandAccent shrink-0" />
                      <div>
                        <h5 className="font-bold text-brandGold">{info.t}</h5>
                        <p className="text-xs text-gray-400">{info.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 border-4 border-dashed border-brandAccent/20 rounded-full flex items-center justify-center animate-spin-slow">
                   <Lock size={80} className="text-brandAccent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DATA SUBJECT RIGHTS */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Data Subject Rights Management</h2>
            <p className="text-gray-600">Highly responsive and automated internal infrastructure for rights fulfillment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rights.map((right, i) => (
              <div key={i} className="text-center p-8 bg-brandLight rounded-3xl border border-transparent hover:border-brandPrimary transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {right.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-brandDark">{right.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{right.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">GDPR Knowledge Center</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandNavy">{faq.q}</span>
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
          <div className="bg-brandDark rounded-[3rem] p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brandPrimary/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Strengthen Your European Footprint</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Leverage RiskMan’s deep expertise to build a GDPR-compliant framework that enhances stakeholder trust and enables global data flows.
              </p>
              <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all transform hover:-translate-y-1">
                Secure Your GDPR Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy uppercase">
            Risk<span className="text-brandAccent">Man</span> <span className="text-xs font-normal text-gray-400 lowercase ml-2">gdpr division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | EEA Data Sovereignty & GDPR Compliance</p>
        </div>
      </footer>
    </div>
  );
};

export default GDPRCompliancePage;