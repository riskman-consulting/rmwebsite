import { Activity, Clock, FileText, Repeat, ShieldAlert, TrendingUp, Users, Zap } from "lucide-react";

export const pillars = [
    { title: "Business Impact Analysis (BIA)", desc: "Identify critical functions and determine the potential consequences of their disruption to prioritize recovery.", icon: <Activity className="w-8 h-8 text-brandAccent" /> },
    { title: "Recovery Strategies", desc: "Develop tailored plans to restore operations within acceptable timeframes following a technical or environmental crisis.", icon: <Clock className="w-8 h-8 text-brandAccent" /> },
    { title: "Incident Response", desc: "Establish clear protocols and communication channels to manage emergencies as they unfold in real-time.", icon: <ShieldAlert className="w-8 h-8 text-brandAccent" /> },
    { title: "Continuous Improvement", desc: "Regularly test and update continuity plans to reflect changing business environments and emerging threats.", icon: <TrendingUp className="w-8 h-8 text-brandAccent" /> },
  ];

export  const steps = [
    { title: "Scoping The BCMS", desc: "Defining which parts of the organization are covered by the Business Continuity Management System.", icon: <Zap className="w-5 h-5 text-white" /> },
    { title: "Resource Allocation", desc: "Identifying the specific people, technology, and facilities required to maintain essential operations.", icon: <Users className="w-5 h-5 text-white" /> },
    { title: "Documentation And Training", desc: "Creating accessible continuity manuals and ensuring staff are fully trained to execute them.", icon: <FileText className="w-5 h-5 text-white" /> },
    { title: "Exercising And Testing", desc: "Conducting simulations and stress tests to validate recovery procedures before a real incident occurs.", icon: <Repeat className="w-5 h-5 text-white" /> },
  ];

 export const faqs = [
    { q: "What is ISO 22301?", a: "The international standard for implementing and maintaining a Business Continuity Management System (BCMS)." },
    { q: "What is a BIA?", a: "A process to determine the criticality of business activities and the impact of their disruption." },
    { q: "How does it differ from Disaster Recovery?", a: "DR focuses primarily on IT systems, while ISO 22301 covers the entire business operation." },
    { q: "What is an RTO?", a: "Recovery Time Objective—the targeted duration of time to restore a business process after disruption." },
    { q: "What is an RPO?", a: "Recovery Point Objective—the maximum age of files or data that must be recovered for operations." }
  ];