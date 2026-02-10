import React, { useState } from 'react';
import { 
  Globe2, 
  Map, 
  Stethoscope, 
  LayoutDashboard, 
  ShieldCheck, 
  ChevronDown, 
  ArrowLeft,
  Building2,
  Zap,
  Globe,
  FileText
} from 'lucide-react';

const OtherCompliancesPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stateFrameworks = [
    { 
      title: "CCPA/CPRA Alignment", 
      desc: "Implementing 'Do Not Sell or Share' mechanisms and sensitive data limitations for California residents.",
      icon: <ShieldCheck className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Multi-State Synchronization", 
      desc: "Creating a baseline standard covering Virginia (VCDPA), Colorado (CPA), and emerging state regulations.",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Notice at Collection", 
      desc: "Designing dynamic notices that inform consumers of data categories at the point of entry.",
      icon: <FileText className="w-8 h-8 text-brandAccent" />
    },
  ];

  const internationalMarkets = [
    { title: "Brazil LGPD Integration", d: "Mapping processes to the ten legal bases for South American operations.", icon: <Globe className="text-brandPrimary" /> },
    { title: "Middle East & APAC", d: "Localized expertise for Saudi Arabia (PDPL) and Singapore (PDPA).", icon: <Globe2 className="text-brandPrimary" /> },
    { title: "Unified Dashboard", d: "A 'single pane of glass' view to monitor compliance across dozens of jurisdictions.", icon: <LayoutDashboard className="text-brandPrimary" /> },
  ];

  const faqs = [
    { q: "What is the \"Right to Limit Use\" in CCPA?", a: "It allows consumers to restrict the use and disclosure of their Sensitive Personal Information (SPI) by an organization." },
    { q: "Does HIPAA apply to tech companies?", a: "Yes, if they handle Protected Health Information (PHI) as a 'Business Associate' for a healthcare provider or insurer." },
    { q: "How does LGPD differ from GDPR?", a: "While similar, LGPD has different legal bases, specific requirements for an 'Encarregado' (DPO), and different breach notification timelines." },
    { q: "What is PIPL?", a: "China’s Personal Information Protection Law, featuring strict data localization requirements and heavy penalties for non-compliance." },
    { q: "Do US laws require a DPO?", a: "Most US state laws do not strictly mandate a DPO by title, but they recommend a designated privacy lead to oversee compliance." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe2 className="absolute -right-20 top-0 w-[600px] h-[600px] text-brandAccent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandPrimary/30 border border-brandPrimary/50 text-blue-300 rounded-full text-xs font-bold uppercase mb-6 tracking-widest">
              Multi-Jurisdictional Privacy
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Unified Compliance for <span className="text-brandAccent">Global Privacy Mandates</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Streamline your international regulatory obligations by integrating CCPA, HIPAA, and regional data laws into a single, high-performance privacy management system.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all">
                <ArrowLeft className="w-4 h-4" /> Back To Main Page
              </button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl shadow-brandAccent/10">
                Request Global Strategy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. US STATE PRIVACY FRAMEWORKS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">US State Privacy Frameworks</h2>
            <p className="text-gray-600">Navigate a patchwork of state-level laws, starting with the foundational requirements of California’s privacy statutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stateFrameworks.map((item, idx) => (
              <div key={idx} className="p-8 border border-borderLight rounded-2xl hover:border-brandAccent transition-all hover:bg-brandLight group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY-SPECIFIC STANDARDS */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Industry-Specific Data Standards</h2>
              <p className="text-gray-300 mb-10 text-lg">Specialized controls for healthcare and finance that go beyond general privacy mandates.</p>
              <div className="grid gap-6">
                {[
                  { t: "HIPAA Safeguards", d: "Technical controls to protect Electronic Protected Health Information (ePHI).", icon: <Stethoscope className="text-brandAccent" /> },
                  { t: "GLBA Compliance", d: "Managing Non-Public Personal Information (NPI) through encryption.", icon: <Building2 className="text-brandAccent" /> },
                  { t: "Cross-Sectoral Mapping", d: "Identifying overlapping rules to eliminate redundant compliance tasks.", icon: <Zap className="text-brandAccent" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brandPrimary/20 rounded-xl border border-white/5">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-white">{item.t}</h5>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-1 bg-gradient-to-br from-brandAccent to-brandPrimary rounded-[2rem]">
                  <div className="bg-surfaceDark p-10 rounded-[1.9rem]">
                    <h3 className="text-brandGold text-2xl font-bold mb-4">Vertical Compliance</h3>
                    <p className="text-gray-300 font-light italic leading-relaxed">
                      "RiskMan identifies the intersection of industry regulations and privacy laws to ensure no data asset is left unprotected."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMERGING INTERNATIONAL MARKETS */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Emerging International Markets</h2>
            <p className="text-gray-600">Enter new markets without being stalled by localized requirements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {internationalMarkets.map((market, i) => (
              <div key={i} className="text-center p-10 bg-brandLight rounded-3xl border border-transparent hover:border-brandPrimary transition-all group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-brandPrimary group-hover:text-white transition-colors">
                  {market.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-brandDark">{market.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{market.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Global Privacy FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandNavy pr-4">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-20">
        <div className="container">
          <div className="bg-brandPrimary rounded-[3rem] p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brandAccent/20 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl lg:text-6xl font-bold mb-6">Simplify Your International Compliance</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Turn global regulatory fragmentation into a unified business advantage with RiskMan’s cross-border privacy expertise.
              </p>
              <button className="bg-brandGold text-brandDark px-12 py-5 rounded-md font-black text-xl hover:scale-105 transition-all shadow-xl">
                Start Your Global Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy uppercase">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-normal text-gray-400 lowercase ml-2">global division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | CCPA, HIPAA & Global Privacy Strategy</p>
        </div>
      </footer>
    </div>
  );
};

export default OtherCompliancesPage;