
import React from 'react';
import{motion,AnimatePresence} from "framer-motion";

import { 
  Shield, 
  Lock, 
  Search, 
  FileText, 
  Activity, 
  Cpu, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

import emergingImage from "../../assets/images/cybersecurity/ai-security.png"


 const EmergingTechnology = () => {
  return (
 <section className="py-14 md:py-20 overflow-hidden text-white bg-brandNavy">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Future Proof</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading">Emerging Technology & Supply Chain</h2>
              <p className="mb-8 text-gray-300">
                RiskMan offers specialized audits for modern digital environments, including AI systems and blockchain infrastructure, to ensure resilience. We identify supply chain risks to safeguard your broader ecosystem.
              </p>
              <img src={emergingImage} alt="AI Security" className="w-full border shadow-lg rounded-xl border-white/10" />
            </div>

            <div className="grid gap-6 lg:w-2/3 sm:grid-cols-2">
              {[
                { title: "AI System Audits", desc: "Evaluating AI for security, ethical alignment, transparency, and resilience to adversarial manipulation.", icon: Cpu },
                { title: "Vendor Risk Management", desc: "Assessing third-party cybersecurity practices to identify and mitigate supply chain vulnerabilities.", icon: Globe },
                { title: "Blockchain Security", desc: "Structured assessments of smart contracts and infrastructure to verify cryptographic integrity and access controls.", icon: Lock },
                { title: "BOM Auditing", desc: "Ensuring transparency and integrity of components used in software, quantum, and AI systems.", icon: Server },
              ].map((item, idx) => (
                <div key={idx} className="p-8 transition-all border bg-brandDark/50 rounded-xl border-white/5 hover:bg-brandDark hover:border-brandAccent/30 group">
                  <item.icon className="w-10 h-10 mb-4 transition-transform text-brandAccent group-hover:scale-110" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default EmergingTechnology;