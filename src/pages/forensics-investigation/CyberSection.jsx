import React from 'react';
import { Lock, Database, Search, FileText, ShieldCheck } from 'lucide-react';

const CyberSection = () => {
  const cyberImage = "https://public.youware.com/users-website-assets/prod/9ff22b8d-6a23-4340-a80f-898c8b5c261b/af15115dc5e542d3909d88f5b1f182fe";

  return (
    <section className="relative py-24 overflow-hidden text-white bg-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
          <div className="relative lg:w-1/2">
            <div className="absolute transform border-2 -inset-4 border-brandGold/30 rounded-2xl -rotate-3"></div>
            <img 
              src={cyberImage} 
              alt="Digital Forensics" 
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3] filter brightness-90 contrast-110"
            />
            <div className="absolute p-6 border shadow-2xl -right-6 -bottom-6 bg-brandDark rounded-xl border-brandGold/20 animate-pulse-custom">
              <Lock className="w-12 h-12 mb-2 text-brandGold" />
              <div className="font-mono text-2xl font-bold">SECURE</div>
              <div className="font-mono text-xs text-brandGold">EVIDENCE LOCKED</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4 space-x-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Database className="text-brandGold" size={24} />
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-brandGold">Cyber Intelligence</h3>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading">
              Digital Forensics and Cyber Incident Response
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              In an era of data-centric operations, our team secures critical evidence from digital environments to mitigate high-tech risks.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: Search, title: "Data Breach Investigations", desc: "Rapid forensic analysis to determine the source, scope, and impact of unauthorized data access." },
                { icon: FileText, title: "Evidence Preservation", desc: "Court-admissible collection of electronic data from servers, cloud platforms, and mobile devices." },
                { icon: ShieldCheck, title: "Cyber Fraud Analytics", desc: "Utilizing AI-driven patterns to detect sophisticated digital manipulation and identity-related crimes." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 transition-all border bg-brandDark/50 backdrop-blur-sm rounded-xl border-white/10 hover:border-brandGold/50 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 transition-colors rounded-lg bg-brandPrimary/30 group-hover:bg-brandGold group-hover:text-brandDark">
                      <item.icon className="text-brandGold group-hover:text-brandDark" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSection;
