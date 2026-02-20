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

import testingImage from "../../assets/images/cybersecurity/testing-image.png"

  const TechnicalTesting = () => {
  return (
     <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 lg:px-12 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Offensive Security</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark">Specialized Technical Testing</h2>
              <p className="mb-8 text-lg text-gray-600">
                Our experts conduct active testing of individual components or entire applications to identify and exploit potential vulnerabilities. This simulated adversary approach ensures your infrastructure can withstand sophisticated attacks.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Penetration Testing", desc: "Actively testing applications to determine if vulnerabilities can compromise sensitive data or infrastructure." },
                  { title: "Red Team Assessments", desc: "Simulated real-world attacks by an adversary to exploit enterprise-wide vulnerabilities." },
                  { title: "Resilience Testing", desc: "DoS and DDoS simulations to measure system capacity and prevent service downtime." },
                  { title: "Configuration Audits", desc: "Ensuring secure deployment of assets, including blocking unused ports and securing default credentials." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-full bg-brandPrimary/10 group-hover:bg-brandPrimary group-hover:text-white">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-brandDark">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-brandAccent rounded-2xl rotate-3"></div>
              <img src={testingImage} alt="Technical Testing" className="relative object-cover w-full border-4 border-white shadow-2xl rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

  );
 };

export default TechnicalTesting;