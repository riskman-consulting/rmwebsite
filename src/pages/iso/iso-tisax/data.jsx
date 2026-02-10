import { AlertTriangle, Car, Cpu, RefreshCw, ShieldCheck,Lock } from "lucide-react";

export const services = [
    { title: "ISO 27001 (Information Security)", desc: "Deploy a risk-based approach to protect your most sensitive corporate data assets and operational information systems.", icon: <ShieldCheck className="w-8 h-8 text-brandAccent" />, path: "iso-27001" },
    { title: "ISO 27701 (Privacy Management)", desc: "Establish a Privacy Information Management System to handle personal identifiable information with global regulatory compliance and transparency.", icon: <Lock className="w-8 h-8 text-brandAccent" />, path: "iso-27701" },
    { title: "ISO 22301 (Business Continuity)", desc: "Ensure operational resilience and rapid recovery during unforeseen technical, environmental, or logistical disruptions to maintain service availability.", icon: <RefreshCw className="w-8 h-8 text-brandAccent" />, path: "iso-22301" },
    { title: "ISO 42001 (AI Management)", desc: "Implement the world’s first AI management standard to ensure ethical, transparent, and secure Artificial Intelligence development across your enterprise.", icon: <Cpu className="w-8 h-8 text-brandAccent" />, path: "iso-42001" },
    { title: "ISO 31000 (Risk Management)", desc: "Proactively identify and mitigate enterprise-wide vulnerabilities and uncertainties before they impact your organizational bottom line or reputation.", icon: <AlertTriangle className="w-8 h-8 text-brandAccent" />, path: "iso-31000" },
    { title: "TISAX (Automotive Security)", desc: "Secure your position in the automotive supply chain with industry-mandated security assessment exchanges and rigorous information security audits.", icon: <Car className="w-8 h-8 text-brandAccent" />, path: "tisax" },
  ];

export  const roadmap = [
    { step: "01", title: "Scoping And Survey", desc: "We define your audit boundaries and identify high-risk areas to ensure focused protection and representative sampling." },
    { step: "02", title: "Strategic Planning", desc: "RiskMan creates a detailed work plan, allocating technical resources and specific timings for a seamless execution." },
    { step: "03", title: "Evidence Fieldwork", desc: "Our experts gather evidence through document reviews, interviews, and observations to validate your actual security posture." },
    { step: "04", title: "Analysis And Reporting", desc: "We identify gaps and provide clear recommendations for achieving and maintaining full certification readiness." },
  ];

 export const faqs = [
    { q: "What is the difference between ISO 27001 and TISAX?", a: "ISO is a general security standard, while TISAX is specifically tailored for information security in the automotive industry." },
    { q: "How long does a typical implementation take?", a: "It varies by scope, but RiskMan optimizes timelines through detailed resource allocation and expert-led project management." },
    { q: "What are the primary steps in the audit process?", a: "The process involves scoping, planning, fieldwork, analysis of evidence, and final reporting to management." },
    { q: "Can non-compliance lead to financial loss?", a: "Yes, through lost contracts, legal issues, fines, and increased operational expenses related to remediation." },
    { q: "What is the \"Exchange\" in TISAX?", a: "It is a mechanism to share your security assessment results with authorized business partners via the ENX portal." }
  ];