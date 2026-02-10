import { BarChart3, Database, Eye, FileCode, LineChart, Scale, Search, ShieldCheck } from "lucide-react";

export const pillars = [
    { title: "Ethical Oversight", desc: "Establish frameworks to ensure AI systems are unbiased, fair, and transparent in their automated decision-making.", icon: <Scale className="w-8 h-8 text-brandAccent" /> },
    { title: "AI Risk Assessment", desc: "Identify unique vulnerabilities in AI models, including data poisoning, algorithmic bias, and security exploits.", icon: <ShieldCheck className="w-8 h-8 text-brandAccent" /> },
    { title: "Data Quality Management", desc: "Ensure the data used to train and operate AI systems is accurate, secure, and legally compliant.", icon: <Database className="w-8 h-8 text-brandAccent" /> },
    { title: "Performance Monitoring", desc: "Implement continuous tracking to ensure AI systems behave as intended and do not 'drift' over time.", icon: <LineChart className="w-8 h-8 text-brandAccent" /> },
  ];

  export const roadmap = [
    { title: "AI Scoping", desc: "Identifying all AI systems and use cases within the organization that fall under the management framework.", icon: <Search className="w-6 h-6" /> },
    { title: "Policy Development", desc: "Creating high-level AI policies that align with organizational values and legal requirements.", icon: <FileCode className="w-6 h-6" /> },
    { title: "Internal Audit", desc: "Conducting rigorous reviews of AI development processes to identify gaps in security or ethics.", icon: <Eye className="w-6 h-6" /> },
    { title: "Stakeholder Reporting", desc: "Providing leadership with clear insights into AI performance and compliance status.", icon: <BarChart3 className="w-6 h-6" /> },
  ];

 export const faqs = [
    { q: "What is ISO 42001?", a: "The international standard for establishing, implementing, and maintaining an Artificial Intelligence Management System (AIMS)." },
    { q: "Who needs this certification?", a: "Any organization developing, providing, or using AI-based products or services in their operations." },
    { q: "Does it cover Generative AI?", a: "Yes, the framework is designed to be applicable to all types of AI, including Large Language Models (LLMs)." },
    { q: "How does it handle AI bias?", a: "It requires formal processes for identifying and mitigating bias in both training data and algorithms." },
    { q: "Is it compatible with ISO 27001?", a: "Yes, it is designed to integrate seamlessly with ISO 27001 and other management standards." }
  ];