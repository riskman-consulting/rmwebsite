import { BarChart, CheckCircle, LayoutDashboard, Search, Target, TrendingUp } from "lucide-react";

export const processIntegrity = [
    { 
      title: "Workflow Benchmarking", 
      desc: "Comparing actual performance against 'Gold Standard' models to identify areas of excellence.",
      icon: <Target className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Deviation Analysis", 
      desc: "Identifying where and why processes are failing to maintain structural integrity.",
      icon: <Search className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "SOP Audits", 
      desc: "Ensuring Standard Operating Procedure documentation remains current and effective.",
      icon: <CheckCircle className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const metrics = [
    { title: "KPI Development", d: "Designing metrics that truly reflect operational health.", icon: <BarChart size={20}/> },
    { title: "Real-time Dashboards", d: "Providing a live view of quality across departments.", icon: <LayoutDashboard size={20}/> },
    { title: "Trend Prediction", d: "Using historical data to anticipate future quality dips.", icon: <TrendingUp size={20}/> }
  ];

  export const faqs = [
    { q: "What is the scope of RiskMan’s Quality Assurance?", a: "We look at everything from service delivery and internal workflows to product integrity across the entire enterprise." },
    { q: "How does QA differ from QC?", a: "Quality Assurance (QA) focuses on the process and preventing defects, while Quality Control (QC) focuses on the final output and identifying defects." },
    { q: "Can QA reduce operational costs?", a: "Yes, by eliminating waste and reducing the need for 're-work,' a robust QA framework significantly improves the bottom line." },
    { q: "Do you use Six Sigma or Lean methodologies?", a: "We integrate the best of these frameworks into a custom approach tailored to each organization’s specific infrastructure." },
    { q: "How does QA impact customer satisfaction?", a: "Consistent high-quality execution leads to increased stakeholder loyalty, verified trust, and reduced churn." }
  ];