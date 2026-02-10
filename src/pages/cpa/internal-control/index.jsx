import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Settings2, 
  Users, 
  Zap, 
  Search, 
  RotateCcw, 
  ArrowLeft, 
  ChevronDown, 
  Lock, 
  Eye,
  LineChart
} from 'lucide-react';

const InternalControlReviewPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const envAnalysis = [
    { title: "Governance Mapping", d: "Aligning control activities with corporate strategy to ensure unified mission goals.", icon: <Settings2 className="text-brandAccent" /> },
    { title: "Accountability Frameworks", d: "Defining clear, immutable roles for risk ownership across all departments.", icon: <Users className="text-brandAccent" /> },
    { title: "Culture Assessment", d: "Evaluating the institutional commitment to integrity and ethical operations.", icon: <ShieldCheck className="text-brandAccent" /> },
  ];

  const defenseSystem = [
    { 
      title: "Preventative Measures", 
      type: "Stops Errors Before They Occur",
      items: ["Segregation of Duties", "Automated Authorizations", "Spending Limit Enforcements"],
      icon: <Lock className="text-brandPrimary" />
    },
    { 
      title: "Detective Measures", 
      type: "Identifies Errors Immediately",
      items: ["Continuous Monitoring", "Audit Trail Verification", "Real-time Detection"],
      icon: <Eye className="text-brandPrimary" />
    }
  ];

  const faqs = [
    { q: "What are internal controls?", a: "They are the rules and procedures implemented to ensure financial integrity and prevent organizational fraud." },
    { q: "How does SOX impact our control reviews?", a: "We align our reviews with Sarbanes-Oxley requirements to ensure leadership meets legal accountability standards." },
    { q: "What is the difference between preventative and detective controls?", a: "Preventative stops errors; detective identifies errors that have already occurred for immediate correction." },
    { q: "Can controls be fully automated?", a: "Many can, and RiskMan helps Organizations transition to automated 'continuous' control environments." },
    { q: "How often should controls be reviewed?", a: "We recommend annual reviews or updates following any major operational shift." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandPrimary rounded-full blur-[150px]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brandAccent text-xs font-bold uppercase mb-6 tracking-widest">
              <Zap size={14} className="animate-pulse" /> Operational Excellence
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Optimizing Institutional <span className="text-brandAccent">Control Environments</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
              RiskMan empowers Organizations to identify structural vulnerabilities and implement robust control activities that prevent fraud and enhance operational performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-all">
                <ArrowLeft size={18} /> Back To Assurance
              </button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl shadow-brandAccent/20">
                Discuss Your Controls
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTROL ENVIRONMENT ANALYSIS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Control Environment Analysis</h2>
            <p className="text-gray-600">A resilient organization begins with a disciplined control culture that cascades from the top level down.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {envAnalysis.map((item, idx) => (
              <div key={idx} className="p-8 bg-brandLight rounded-2xl border border-transparent hover:border-brandPrimary transition-all text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREVENTATIVE & DETECTIVE (Dual Layer) */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-brandGold">Preventative & Detective Measures</h2>
            <p className="text-gray-300">Our dual-layered defense system protects institutional assets at every stage of the operational lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {defenseSystem.map((sys, i) => (
              <div key={i} className="p-10 bg-surfaceDark rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {i === 0 ? <Lock size={200} /> : <Eye size={200} />}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brandPrimary/20 rounded-lg flex items-center justify-center mb-6">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{sys.title}</h3>
                  <p className="text-brandAccent text-sm font-medium mb-6 uppercase tracking-widest">{sys.type}</p>
                  <ul className="space-y-3">
                    {sys.items.map((li, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RISK ASSESSMENT & REMEDIATION */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Risk Assessment & Remediation</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Organizations must proactively evolve their controls to meet the challenges of a rapidly changing digital landscape.</p>
              <div className="grid gap-4">
                {[
                  { t: "Gap Identification", d: "Pinpointing weaknesses in current structures.", icon: <Search className="text-brandPrimary" size={20}/> },
                  { t: "Efficiency Calibration", d: "Removing redundant controls that slow down operations.", icon: <LineChart className="text-brandPrimary" size={20}/> },
                  { t: "Remediation Roadmaps", d: "Step-by-step guides to fortifying defenses.", icon: <RotateCcw className="text-brandPrimary" size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-borderLight rounded-xl">
                    <div className="p-2 bg-brandLight rounded-lg">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{item.t}</h5>
                      <p className="text-xs text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-brandLight p-12 rounded-[3rem] border-2 border-dashed border-brandPrimary/20 text-center">
                 <h3 className="font-heading text-2xl font-bold text-brandDark mb-4 italic">Competitive Operational Advantage</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8">
                   "We transform internal controls from a necessary compliance burden into a tool for sustainable institutional growth."
                 </p>
                 <button className="bg-brandDark text-white px-10 py-4 rounded-full font-bold hover:bg-brandNavy transition-all shadow-lg">
                   Initiate A Control Review
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center text-brandNavy">Control Environment FAQ</h2>
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
      <section className="py-20">
        <div className="container text-center">
          <div className="bg-brandPrimary rounded-3xl p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Build A Resilient Organization</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
              Secure your operational foundations today. Partner with RiskMan for sophisticated audit and control frameworks.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl">
              Discuss Your Controls
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-xs font-normal text-gray-400 lowercase ml-2">Internal Controls</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | SOX & Internal Governance Compliance</p>
        </div>
      </footer>
    </div>
  );
};

export default InternalControlReviewPage;