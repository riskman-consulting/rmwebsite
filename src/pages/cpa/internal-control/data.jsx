import { Eye, Lock, Settings2, ShieldCheck, Users } from "lucide-react";

export const envAnalysis = [
    { title: "Governance Mapping", d: "Aligning control activities with corporate strategy to ensure unified mission goals.", icon: <Settings2 className="text-brandAccent" /> },
    { title: "Accountability Frameworks", d: "Defining clear, immutable roles for risk ownership across all departments.", icon: <Users className="text-brandAccent" /> },
    { title: "Culture Assessment", d: "Evaluating the institutional commitment to integrity and ethical operations.", icon: <ShieldCheck className="text-brandAccent" /> },
  ];

  export const defenseSystem = [
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

  export const faqs = [
    { q: "What are internal controls?", a: "They are the rules and procedures implemented to ensure financial integrity and prevent organizational fraud." },
    { q: "How does SOX impact our control reviews?", a: "We align our reviews with Sarbanes-Oxley requirements to ensure leadership meets legal accountability standards." },
    { q: "What is the difference between preventative and detective controls?", a: "Preventative stops errors; detective identifies errors that have already occurred for immediate correction." },
    { q: "Can controls be fully automated?", a: "Many can, and RiskMan helps Organizations transition to automated 'continuous' control environments." },
    { q: "How often should controls be reviewed?", a: "We recommend annual reviews or updates following any major operational shift." }
  ];