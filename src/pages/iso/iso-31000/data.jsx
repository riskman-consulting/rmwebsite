import { BarChart, Eye, PieChart, RefreshCw, Scale, ShieldAlert, Target,Map } from "lucide-react";

export const framework = [
    { title: "Identification", desc: "Proactively finding and describing risks that could affect your organizational objectives or project outcomes.", icon: <Eye className="w-8 h-8 text-brandAccent" /> },
    { title: "Analysis", desc: "Understanding the nature of risk and determining the level of impact and likelihood to prioritize responses.", icon: <BarChart className="w-8 h-8 text-brandAccent" /> },
    { title: "Evaluation", desc: "Comparing risk analysis results against your organization's risk criteria to decide which risks require treatment.", icon: <Scale className="w-8 h-8 text-brandAccent" /> },
    { title: "Treatment", desc: "Selecting and implementing options for addressing risks, such as mitigation, avoidance, or strategic transfer.", icon: <ShieldAlert className="w-8 h-8 text-brandAccent" /> },
  ];

  export const process = [
    { title: "Context Establishment", desc: "Defining external and internal parameters to be considered when managing risk for your specific industry.", icon: <Map className="w-6 h-6" /> },
    { title: "Detailed Assessment", desc: "Performing a deep dive into operations to uncover hidden vulnerabilities and potential opportunities.", icon: <Target className="w-6 h-6" /> },
    { title: "Strategic Reporting", desc: "Providing management with a clear, visual risk profile to guide investment and resource allocation.", icon: <PieChart className="w-6 h-6" /> },
    { title: "Monitoring And Review", desc: "Establishing a continuous cycle of risk oversight to adapt to new threats in a changing market.", icon: <RefreshCw className="w-6 h-6" /> },
  ];

  export const faqs = [
    { q: "What is ISO 31000?", a: "An international standard providing guidelines and principles on managing risk effectively across an enterprise." },
    { q: "Is this a certifiable standard?", a: "ISO 31000 is a guideline and not for accredited certification, but for internal implementation and maturity." },
    { q: "How does it help leadership?", a: "It provides a systematic and logical approach to making decisions under conditions of uncertainty." },
    { q: "What is a \"Risk Appetite\"?", a: "The amount and type of risk an organization is willing to pursue or retain in pursuit of its goals." },
    { q: "How is it different from ISO 27001?", a: "ISO 31000 is for general enterprise risk; ISO 27001 is specific to information security risk." }
  ];