// // StrategicAuditing.jsx
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

import auditImage from "../../assets/images/cybersecurity/audit-analysis.png"

const StrategicAuditing = () => {
return (

<section className="relative py-14 md:py-20  overflow-hidden bg-white">
        <div className="container px-6 lg:px-20 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute transform -inset-4 bg-brandAccent/10 rounded-xl -rotate-3"></div>
                <img src={auditImage} alt="Strategic Auditing" className="relative object-cover w-full shadow-2xl rounded-xl" />
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Our Process</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark">Strategic Cyber Security Auditing</h2>
              <p className="mb-8 text-lg text-gray-600">
                We provide a systematic and independent assessment of your organization's security controls and policies. Our process evaluates the effectiveness of your protections against evolving cyber threats to ensure data integrity.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Comprehensive Assessment", desc: "Evaluating systems, functions, and processes to identify potential security gaps.", icon: Search },
                  { title: "Evidence-Based Reporting", desc: "All findings are substantiated by accurate, verifiable data and documentation.", icon: FileText },
                  { title: "Security Posture Improvement", desc: "We analyze your ability to prevent, detect, and respond to incidents effectively.", icon: Shield },
                  { title: "Compliance Assurance", desc: "Aligning your operations with industry standards and mandatory regulatory requirements.", icon: CheckCircle },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 transition-shadow border border-gray-100 bg-bgLight rounded-xl hover:shadow-lg">
                    <item.icon className="w-10 h-10 mb-4 text-brandPrimary" />
                    <h3 className="mb-2 font-bold text-brandDark">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
 };

export default StrategicAuditing;