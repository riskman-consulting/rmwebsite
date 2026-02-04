

 
export const mainNav = [
  { label: "About", type: "mega", key: "about", path: "/about" },
  { label: "Services", type: "mega", key: "services", path: "/services" },
  { label: "Solutions", type: "link", path: "/solutions" },
  { label: "Industries", type: "mega", key: "industries", path: "/industries" },
  { label: "Governance", type: "mega", key: "governance", path: "/governance" },
  { label: "Events & Journey", type: "mega", key: "events", path: "/events-journey" },
  { label: "Insights", type: "link", path: "/insights" },
  { label: "Careers", type: "link", path: "/careers" }
];
 
export const servicesMegaMenu = [
  {
    title: "Enterprise Services",
    isSection: true,
    items: [
      {
        label: "Risk Assurance and Advisory",
        path: "/services/risk-assurance-advisory",
        hasSubmenu: true,
        submenu: [
          { label: "RBIA", path: "/services/risk-assurance-advisory/rbia" },
          { label: "ERM", path: "/services/risk-assurance-advisory/erm" },
          { label: "TPRM", path: "/services/risk-assurance-advisory/tprm" },
          { label: "SOX/ICOFR/IFC", path: "/services/risk-assurance-advisory/sox-icofr-ifc" },
          { label: "CSA", path: "/services/risk-assurance-advisory/csa" },
          { label: "Concurrent Audits", path: "/services/risk-assurance-advisory/concurrent-audits" },
          { label: "Formulation of Policies and SOPs", path: "/services/risk-assurance-advisory/policies-sops" }
        ]
      },
      {
        label: "Digital Transformation",
        path: "/services/digital-transformation",
        hasSubmenu: true,
        submenu: [
          { label: "Strategic PMO", path: "/services/digital-transformation/strategic-pmo" },
          { label: "Implementation", path: "/services/digital-transformation/implementation" },
          { label: "Support Services", path: "/services/digital-transformation/support-services" }
        ]
      },
      {
        label: "ESG",
        path: "/services/esg",
        hasSubmenu: true,
        submenu: [
          { label: "ESG Strategy & Roadmap", path: "/services/esg/strategy-roadmap" },
          { label: "ESG Reporting & Disclosure", path: "/services/esg/reporting-disclosure" },
          { label: "Carbon Footprint Assessment", path: "/services/esg/carbon-footprint" },
          { label: "Sustainability Assurance", path: "/services/esg/sustainability-assurance" }
        ]
      },
      {
        label: "Financial Advisory",
        path: "/services/financial-advisory",
        hasSubmenu: true,
        submenu: [
          { label: "Credit Risk Assessment", path: "/services/financial-advisory/credit-risk" },
          { label: "Credit Portfolio Management", path: "/services/financial-advisory/portfolio-management" },
          { label: "Loan Review & Monitoring", path: "/services/financial-advisory/loan-review" },
          { label: "Credit Policy Framework", path: "/services/financial-advisory/credit-policy" }
        ]
      }
    ]
  },
  {
    title: "IT Risk Management",
    isSection: true,
    items: [
      {
        label: "SOC Compliance",
        path: "/services/it-risk-management/soc",
        hasSubmenu: true,
        submenu: [
          { label: "SOC 1", path: "/services/it-risk-management/soc/soc1" },
          { label: "SOC 2", path: "/services/it-risk-management/soc/soc2" },
          { label: "SOC 3", path: "/services/it-risk-management/soc/soc3" }
        ]
      },
      {
        label: "ISO & TISAX Certifications",
        path: "/services/it-risk-management/iso-tisax",
        hasSubmenu: true,
        submenu: [
          { label: "ISO 27001", path: "/services/it-risk-management/iso/27001" },
          { label: "ISO 27701", path: "/services/it-risk-management/iso/27701" },
          { label: "ISO 22301", path: "/services/it-risk-management/iso/22301" },
          { label: "ISO 42001", path: "/services/it-risk-management/iso/42001" },
          { label: "ISO 31000", path: "/services/it-risk-management/iso/31000" },
          { label: "TISAX", path: "/services/it-risk-management/tisax" }
        ]
      },
      { label: "PCI DSS", path: "/services/it-risk-management/pci-dss" },
      { label: "ITGC and ITAC", path: "/services/it-risk-management/itgc-itac" },
      { label: "BCP/DR", path: "/services/it-risk-management/bcp-dr" },
      { label: "Cyber Security", path: "/services/it-risk-management/cyber-security" },
      {
        label: "Data Privacy",
        path: "/services/it-risk-management/data-privacy",
        hasSubmenu: true,
        submenu: [
          { label: "DPDP Compliance", path: "/services/it-risk-management/data-privacy/dpdp" },
          { label: "GDPR Compliance", path: "/services/it-risk-management/data-privacy/gdpr" }
        ]
      }
    ]
  },
  {
    title: "CPA Services",
    isSection: true,
    items: [
      {
        label: "US Assurance Support Services",
        path: "/services/cpa-us-assurance",
        hasSubmenu: true,
        submenu: [
          { label: "Financial Statement Audits", path: "/services/cpa/financial-audits" },
          { label: "Internal Control Reviews", path: "/services/cpa/internal-control" },
          { label: "Compliance Audits", path: "/services/cpa/compliance-audits" },
          { label: "Quality Assurance", path: "/services/cpa/quality-assurance" }
        ]
      }
    ]
  }
];
 
export const aboutMegaMenu = [
  { label: "Co-founding Partners", path: "/about/co-founders" },
  { label: "Alliance Partners", path: "/about/alliance-partners" },
  { label: "Service Leaders", path: "/about/service-leaders" },
  { label: "RiskMan Team", path: "/about/riskman-teams" }
];
 
export const industriesMegaMenu = [
  { label: "Banking & Insurance", path: "/industries/banking-insurance" },
  { label: "Healthcare", path: "/industries/healthcare" },
  { label: "Energy & Utilities", path: "/industries/energy-utilities" },
  { label: "Manufacturing", path: "/industries/manufacturing" },
  { label: "Media & Communication", path: "/industries/media-communication" },
  { label: "E-Commerce", path: "/industries/ecommerce" },
  { label: "Hospitality", path: "/industries/hospitality" },
  { label: "Retail Consumer", path: "/industries/retail-consumer" }
];
 
export const governanceMegaMenu = [
  { label: "Corporate Governance", path: "/governance/corporate" },
  { label: "Board Advisory", path: "/governance/board-advisory" },
  { label: "Compliance Management", path: "/governance/compliance" },
  { label: "Risk Governance Framework", path: "/governance/risk-framework" }
];
 
export const eventsMegaMenu = [
  { label: "Upcoming Events", path: "/events/upcoming" },
  { label: "Past Events", path: "/events/past" },
  { label: "Company Journey", path: "/events/journey" },
  { label: "Milestones", path: "/events/milestones" }
];
 
 