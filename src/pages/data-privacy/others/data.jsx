import { FileText, Globe, Globe2, LayoutDashboard, Map, ShieldCheck } from "lucide-react";

export const stateFrameworks = [
    { 
      title: "CCPA/CPRA Alignment", 
      desc: "Implementing 'Do Not Sell or Share' mechanisms and sensitive data limitations for California residents.",
      icon: <ShieldCheck className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Multi-State Synchronization", 
      desc: "Creating a baseline standard covering Virginia (VCDPA), Colorado (CPA), and emerging state regulations.",
      icon: <Map className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Notice at Collection", 
      desc: "Designing dynamic notices that inform consumers of data categories at the point of entry.",
      icon: <FileText className="w-8 h-8 text-brandAccent" />
    },
  ];

  export const internationalMarkets = [
    { title: "Brazil LGPD Integration", d: "Mapping processes to the ten legal bases for South American operations.", icon: <Globe className="text-brandPrimary" /> },
    { title: "Middle East & APAC", d: "Localized expertise for Saudi Arabia (PDPL) and Singapore (PDPA).", icon: <Globe2 className="text-brandPrimary" /> },
    { title: "Unified Dashboard", d: "A 'single pane of glass' view to monitor compliance across dozens of jurisdictions.", icon: <LayoutDashboard className="text-brandPrimary" /> },
  ];

  export const faqs = [
    { q: "What is the \"Right to Limit Use\" in CCPA?", a: "It allows consumers to restrict the use and disclosure of their Sensitive Personal Information (SPI) by an organization." },
    { q: "Does HIPAA apply to tech companies?", a: "Yes, if they handle Protected Health Information (PHI) as a 'Business Associate' for a healthcare provider or insurer." },
    { q: "How does LGPD differ from GDPR?", a: "While similar, LGPD has different legal bases, specific requirements for an 'Encarregado' (DPO), and different breach notification timelines." },
    { q: "What is PIPL?", a: "China’s Personal Information Protection Law, featuring strict data localization requirements and heavy penalties for non-compliance." },
    { q: "Do US laws require a DPO?", a: "Most US state laws do not strictly mandate a DPO by title, but they recommend a designated privacy lead to oversee compliance." }
  ];