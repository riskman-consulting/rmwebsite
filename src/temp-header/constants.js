
 
export const NAVIGATION_DATA = {
  "mainNav": [
    { "label": "About", "type": "mega", "key": "about", "path": "/about" },
    { "label": "Services", "type": "mega", "key": "services", "path": "/services" },
    { "label": "Solutions", "type": "link", "path": "/solutions" },
    { "label": "Industries", "type": "mega", "key": "industries", "path": "/industries" },
    { "label": "Governance", "type": "mega", "key": "governance", "path": "/governance" },
    { "label": "Events & Journey", "type": "mega", "key": "events", "path": "/events-journey" },
    { "label": "Insights", "type": "link", "path": "/insights" },
    { "label": "Careers", "type": "link", "path": "/careers" }
  ],
  "servicesMegaMenu": [
    {
      "title": "Enterprise Services",
      "items": [
        {
          "label": "Risk Assurance and Advisory",
          "path": "/services/risk-assurance-advisory",
          "submenus": [
            { "id": "rbia", "title": "RBIA" },
            { "id": "erm", "title": "ERM" },
            { "id": "tprm", "title": "TPRM" },
            { "id": "sox-icofr-ifc", "title": "SOX/ICOFR/IFC" },
            { "id": "csa", "title": "CSA" },
            { "id": "concurrent-audits", "title": "Concurrent Audits" },
            { "id": "formulation-of-policies-and-sops", "title": "Formulation of Policies and SOPs" }
          ]
        },
        {
          "label": "Digital Transformation",
          "path": "/services/digital-transformation",
          "submenus": [
            { "id": "strategic-pmo", "title": "Strategic PMO" },
            { "id": "implementation", "title": "Implementation" },
            { "id": "support-services", "title": "Support Services" }
          ]
        },
        {
          "label": "ESG",
          "path": "/services/esg",
          "submenus": [
            { "id": "strategy-roadmap", "title": "ESG Strategy & Roadmap" },
            { "id": "reporting-disclosure", "title": "ESG Reporting & Disclosure" },
            { "id": "carbon-footprint", "title": "Carbon Footprint Assessment" },
            { "id": "sustainability-assurance", "title": "Sustainability Assurance" }
          ]
        },
        {
          "label": "Financial Advisory",
          "path": "/services/financial-advisory",
          "submenus": [
            { "id": "credit-risk", "title": "Credit Risk Assessment" },
            { "id": "portfolio-management", "title": "Credit Portfolio Management" },
            { "id": "loan-review", "title": "Loan Review & Monitoring" },
            { "id": "credit-policy", "title": "Credit Policy Framework" }
          ]
        },
        {
          "label": "AI & Technology",
          "path": "/services/ai-technology",
          "submenus": [
            { "id": "ai-rmf-nist", "title": "AI RMF by NIST" }
          ]
        },
        {
          "label": "Forensics and Investigation",
          "path": "/services/forensics-investigation"
        }
      ]
    },
    {
      "title": "IT Risk Management",
      "items": [
        {
          "label": "SOC Compliance",
          "path": "/services/soc-services",
          "submenus": [
            { "id": "soc-1", "title": "SOC 1" },
            { "id": "soc-2", "title": "SOC 2" },
            { "id": "soc-3", "title": "SOC 3" }
          ]
        },
        {
          "label": "ISO & TISAX Readiness",
          "path": "/services/iso-certifications",
          "submenus": [
            { "id": "iso-27001", "title": "ISO 27001" },
            { "id": "iso-27701", "title": "ISO 27701" },
            { "id": "iso-22301", "title": "ISO 22301" },
            { "id": "iso-42001", "title": "ISO 42001" },
            { "id": "iso-31000", "title": "ISO 31000" },
            { "id": "tisax", "title": "TISAX" }
          ]
        },
        { "label": "PCI DSS", "path": "/services/pci-dss-compliance" },
        { "label": "ITGC and ITAC", "path": "/services/itgc-itac" },
        { "label": "BCP/DR", "path": "/services/bcp-dr" },
        { "label": "Cyber Security", "path": "/services/cybersecurity" },
        {
          "label": "Data Privacy",
          "path": "/services/data-privacy",
          "submenus": [
            { "id": "dpdp", "title": "DPDP Compliance" },
            { "id": "gdpr", "title": "GDPR Compliance" },
            { "id": "regulatory", "title": "Other Regulatory Compliances" }
          ]
        }
      ]
    },
    {
      "title": "CPA Services",
      "items": [
        {
          "label": "US Assurance Support Services",
          "path": "/services/cpa-us-assurance",
          "submenus": [
            { "id": "financial-audits", "title": "Financial Statement Audits" },
            { "id": "internal-control", "title": "Internal Control Reviews" },
            { "id": "compliance-audits", "title": "Compliance Audits" },
            { "id": "quality-assurance", "title": "Quality Assurance" }
          ]
        }
      ]
    }
  ],
  "aboutMegaMenu": [
    {
      "items": [
        { "label": "Co-founding Partners", "path": "/about#co-founders" },
        { "label": "Alliance Partners", "path": "/about#alliance-partners" },
        { "label": "Service Leaders", "path": "/about#service-leaders" },
        { "label": "RiskMan Team", "path": "/about#riskman-teams" }
      ]
    }
  ],
  "industriesMegaMenu": [
    {
      "title": "Core Industries",
      "items": [
        { "label": "Banking & Insurance", "path": "/industries/banking-insurance" },
        { "label": "Healthcare", "path": "/industries/healthcare" },
        { "label": "Energy & Utilities", "path": "/industries/energy-utilities" },
        { "label": "Manufacturing", "path": "/industries/manufacturing" }
      ]
    },
    {
      "title": "Technology & Digital",
      "items": [
        { "label": "Media & Communication", "path": "/industries/media-communication" },
        { "label": "E-Commerce", "path": "/industries/ecommerce" }
      ]
    },
    {
      "title": "Specialized Sectors",
      "items": [
        { "label": "Hospitality", "path": "/industries/hospitality" },
        { "label": "Retail Consumer", "path": "/industries/retail-consumer" }
      ]
    }
  ],
  "governanceMegaMenu": [
    {
      "items": [
        { "label": "Corporate Governance", "path": "/governance/corporate" },
        { "label": "Board Advisory", "path": "/governance/board-advisory" },
        { "label": "Compliance Management", "path": "/governance/compliance" },
        { "label": "Risk Governance Framework", "path": "/governance/risk-framework" }
      ]
    }
  ],
  "eventsMegaMenu": [
    {
      "items": [
        { "label": "Upcoming Events", "path": "/events/upcoming" },
        { "label": "Past Events", "path": "/events/past" },
        { "label": "Company Journey", "path": "/events/journey" },
        { "label": "Milestones", "path": "/events/milestones" }
      ]
    }
  ]
};
 
 