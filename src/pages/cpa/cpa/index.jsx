import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  Activity, 
  Building2, 
  Layers,
  Scale
} from 'lucide-react';

const USAssurancePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Financial Statement Audits",
      desc: "Rigorous examination of financial disclosures to ensure transparency and compliance with evolving regulatory benchmarks.",
      icon: <BarChart3 className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Internal Control Reviews",
      desc: "Systematic evaluation of organizational protocols to eliminate inefficiencies and mitigate systemic risk factors effectively.",
      icon: <Layers className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Compliance Audits",
      desc: "Specialized assessments ensuring strict adherence to federal, state, and industry-specific legal mandates.",
      icon: <Scale className="w-8 h-8 text-brandAccent" />
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive validation of operational processes to maintain superior performance standards and institutional resilience.",
      icon: <CheckCircle className="w-8 h-8 text-brandAccent" />
    }
  ];

  const faqs = [
    { q: "What distinguishes RiskMan’s assurance approach?", a: "We prioritize intelligent assurance, moving beyond backward-looking verification to provide real-time, data-driven insights." },
    { q: "How do these services benefit large Organizations?", a: "They streamline reporting, reduce regulatory friction, and provide leadership with a clear view of enterprise-wide risk." },
    { q: "Are these services scalable?", a: "Yes, our frameworks are designed to adapt to the shifting complexity of global operational footprints." },
    { q: "How does RiskMan handle emerging regulatory changes?", a: "We maintain a proactive monitoring posture to ensure all assurance activities align with the latest US standards." },
    { q: "What is the typical engagement lifecycle?", a: "Engagements begin with a high-level risk assessment followed by tailored execution and continuous reporting phases." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Building2 className="absolute -right-10 bottom-0 w-[500px] h-[500px] text-brandAccent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest mb-6">
              Institutional Integrity
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Advanced Assurance Solutions for <span className="text-brandAccent">Modern Organizations</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              RiskMan delivers high-fidelity assurance frameworks, integrating real-time oversight and rigorous standards to safeguard institutional integrity and enhance stakeholder confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandAccent text-brandDark px-10 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl">Explore Our Services</button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">Consult Our Experts</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTEGRATED SERVICE OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Integrated Service Overview</h2>
            <p className="text-gray-600">A holistic ecosystem of assurance services designed to mitigate complexity and fortify corporate governance across all operational layers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col p-8 border border-borderLight rounded-2xl hover:border-brandPrimary transition-all bg-surfaceLight group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-heading text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <button className="flex items-center gap-2 text-brandPrimary font-bold text-xs uppercase tracking-tighter hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRANSFORMATION (Governance Framework) */}
      <section className="py-24 bg-brandNavy text-white">
        <div className="container">
          <div className="bg-surfaceDark p-12 lg:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brandPrimary/10 -skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Strengthen Your Governance Framework</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Partner with RiskMan to transform your assurance processes into a strategic asset for sustainable growth. We move beyond simple verification to provide enterprise-wide clarity.
                </p>
                <button className="bg-brandAccent text-brandDark px-10 py-5 rounded-md font-black text-lg hover:bg-brandGold transition-all">
                  Request A Comprehensive Review
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-brandPrimary/20 rounded-2xl border border-white/10 text-center">
                    <Activity className="mx-auto mb-2 text-brandAccent" />
                    <span className="block text-2xl font-bold">Real-Time</span>
                    <span className="text-xs text-gray-400 uppercase">Oversight</span>
                  </div>
                  <div className="p-8 bg-brandPrimary/20 rounded-2xl border border-white/10 text-center mt-10">
                    <ShieldCheck className="mx-auto mb-2 text-brandAccent" />
                    <span className="block text-2xl font-bold">Rigorous</span>
                    <span className="text-xs text-gray-400 uppercase">Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Assurance FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-brandDark"
                >
                  <span className="pr-8">{faq.q}</span>
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

      {/* 5. MINI VALUE BAR */}
      <section className="py-12 bg-white border-y border-borderLight">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">US</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Standards Focused</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">H-F</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">High-Fidelity Assurance</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">RT</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Real-Time Insights</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">SG</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Sustainable Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA (Micro) */}
      <section className="py-16 bg-brandAccent">
        <div className="container text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-black text-brandDark mb-6">Safeguard Your Institutional Integrity Today</h2>
            <button className="bg-brandDark text-white px-12 py-4 rounded-full font-bold hover:bg-brandNavy transition-all shadow-lg">
                Contact A Specialist
            </button>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 bg-white">
        <div className="container text-center">
          <div className="font-heading font-black text-2xl text-brandNavy mb-4">RISK<span className="text-brandAccent">MAN</span></div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | US Assurance & Corporate Governance Group</p>
        </div>
      </footer>
    </div>
  );
};

export default USAssurancePage;