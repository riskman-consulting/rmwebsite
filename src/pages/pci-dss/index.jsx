import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Search, 
  Key, 
  Activity, 
  FileText, 
  ChevronDown, 
  ArrowRight,
  ShieldAlert,
  Server,
  Terminal,
  CreditCard
} from 'lucide-react';

const PCIDSSPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const complianceSections = [
    {
      title: "Build And Maintain Secure Networks",
      desc: "Organizations must establish a robust digital perimeter that prevents unauthorized access while facilitating legitimate business transactions.",
      items: [
        { t: "Network Security Controls", d: "Installing advanced configurations to shield cardholder data from external threats." },
        { t: "System Hardening", d: "Replacing vendor-supplied default passwords with unique, complex credentials." }
      ],
      icon: <NetworkIcon className="text-brandAccent" />
    },
    {
      title: "Protect Sensitive Cardholder Data",
      desc: "Securing account information requires a multi-layered defense strategy that protects data during storage and transit.",
      items: [
        { t: "Encryption Standards", d: "Rendering data unreadable to unauthorized entities via high-level cryptography." },
        { t: "Transmission Security", d: "Safeguarding data flows across open networks to maintain confidentiality." }
      ],
      icon: <CreditCard className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Vulnerability Management",
      desc: "Proactive defense mechanisms to counter evolving digital threats and patch internal system weaknesses.",
      items: [
        { t: "Malware Protection", d: "Deploying regularly updated anti-virus solutions across all systems." },
        { t: "Secure Development", d: "Integrating security into the software development lifecycle (SDLC)." }
      ],
      icon: <ShieldAlert className="w-8 h-8 text-brandAccent" />
    }
  ];

  const accessControl = [
    { title: "Implement Strong Access Control", desc: "Restricting access to cardholder data through role-based permissions and identity management.", icon: <Key size={24} /> },
    { title: "Monitor and Test Networks", desc: "Constant vigilance through audit trail monitoring and periodic penetration testing.", icon: <Activity size={24} /> },
    { title: "Formal Security Policy", desc: "Developing strategic documentation and conducting annual risk assessments for all personnel.", icon: <FileText size={24} /> },
  ];

  const faqs = [
    { q: "How does RiskMan help Organizations with network security?", a: "We manage the configuration of firewalls and network security controls to prevent unauthorized traffic from entering your cardholder environment." },
    { q: "Is it mandatory for Organizations to change default passwords?", a: "Yes, Requirement 2 mandates changing all vendor-supplied defaults to prevent common exploits used by malicious actors." },
    { q: "How does a Vulnerability Management Program work?", a: "It involves constant monitoring system weaknesses, regular anti-virus updates, and timely patching of software to prevent cyberattacks." },
    { q: "What is the \"Principle of Least Privilege\" in PCI DSS?", a: "It ensures that employees are only granted the minimum level of access necessary to perform their specific job functions." },
    { q: "Does RiskMan assist with physical security compliance?", a: "Yes, we provide frameworks to restrict physical access to data centers and ensure video monitoring and access logs are maintained." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-xs font-bold uppercase tracking-widest mb-8">
              <Lock size={14} /> PCI DSS Compliance Elite Advisory
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Master PCI DSS <span className="text-brandAccent">Compliance</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              RiskMan provides Organizations with elite advisory and technical frameworks to secure payment ecosystems, ensuring seamless adherence to all six PCI DSS control objectives.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-8 py-4 rounded-md font-bold hover:bg-brandNavy transition-all border border-brandPrimary shadow-lg">Explore Our Services</button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">Consult Our Experts</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE COMPLIANCE GRID (3-Column Layout) */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {complianceSections.map((sec, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-6 p-4 bg-brandLight w-fit rounded-2xl">{sec.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{sec.title}</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">{sec.desc}</p>
                <div className="space-y-4 mt-auto">
                  {sec.items.map((item, idx) => (
                    <div key={idx} className="p-4 bg-bgLight rounded-lg border-l-4 border-brandPrimary">
                      <h5 className="font-bold text-sm text-brandDark mb-1">{item.t}</h5>
                      <p className="text-xs text-gray-500">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL DEEP DIVE (Access Controls) */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Strong Access & Network Integrity</h2>
            <p className="text-gray-400">Ensuring only authorized personnel interact with critical payment systems through strictly defined operational needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accessControl.map((item, i) => (
              <div key={i} className="p-10 border border-white/10 rounded-3xl bg-surfaceDark hover:bg-brandPrimary/20 transition-all text-center">
                <div className="w-14 h-14 bg-brandAccent text-brandDark rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-heading text-xl font-bold mb-3 text-brandGold">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 6 OBJECTIVES OVERVIEW */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-brandLight rounded-2xl text-center"><Terminal className="mx-auto mb-2 text-brandPrimary" /> <span className="text-xs font-bold">Hardening</span></div>
                    <div className="p-8 bg-brandDark text-white rounded-2xl text-center mt-8"><Server className="mx-auto mb-2 text-brandAccent" /> <span className="text-xs font-bold">Safe Storage</span></div>
                    <div className="p-8 bg-brandPrimary text-white rounded-2xl text-center -mt-8"><ShieldCheck className="mx-auto mb-2" /> <span className="text-xs font-bold">Audit Logs</span></div>
                    <div className="p-8 bg-brandLight rounded-2xl text-center"><Activity className="mx-auto mb-2 text-brandPrimary" /> <span className="text-xs font-bold">Pentesting</span></div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Secure Your Organization's Compliance Future</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  RiskMan empowers Organizations to achieve full PCI DSS validation through expert guidance, technical implementation, and continuous security monitoring.
                </p>
                <button className="flex items-center gap-3 bg-brandDark text-white px-10 py-5 rounded-md font-black hover:bg-brandNavy transition-all shadow-xl">
                  Begin Your Assessment <ArrowRight size={20} className="text-brandAccent" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-brandLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center text-brandNavy">Payment Security FAQ</h2>
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
          <div className="bg-brandAccent rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandDark via-transparent to-transparent"></div>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-brandDark mb-6">Ready to Harden Your Payment Ecosystem?</h2>
            <p className="text-xl text-brandNavy mb-10 max-w-2xl mx-auto font-medium">
              Join leading Organizations who trust RiskMan for end-to-end PCI DSS compliance and data security.
            </p>
            <button className="bg-brandDark text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl">
              Secure Your Quote
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">RISKMAN</div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | PCI DSS 4.0 Compliance Specialists</p>
        </div>
      </footer>
    </div>
  );
};

// Custom Network Icon for PCI theme
const NetworkIcon = ({ className }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
);

export default PCIDSSPage;