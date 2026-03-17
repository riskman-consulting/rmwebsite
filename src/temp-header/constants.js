

export const NAVIGATION_DATA = {
    "mainNav": [
        { "label": "About", "type": "mega", "key": "about", "path": "/about" },
        { "label": "Services", "type": "mega", "key": "services", "path": "/services" },
        // { "label": "Tech Solutions", "type": "mega", "key": "solutions", "path": "/solutions" },
        { "label": "Events & Journey", "type": "mega", "key": "events", "path": "/events" },
        // { "label": "Knowledge Hub", "type": "link", "path": "/insights" },
        { "label": "Careers", "type": "link", "path": "/careers" },
//    { "label": "Industries", "type": "mega", "key": "industries", "path": "/industries" },     
        { "label": "Governance", "type": "link", "path": "/governance" }
    ],
    "servicesMegaMenu": [
        {
            "title": "Enterprise Services",
            "items": [
                {
                    "label": "Risk Assurance and Advisory",
                    "path": "/services/risk-advisory",
                    "submenus": [
                        { "id": "rbia", "title": "RBIA","path":"/services/risk-advisory/rbia" },
                        { "id": "erm", "title": "ERM","path":"/services/risk-advisory/erm" },
                        { "id": "tprm", "title": "TPRM","path":"/services/risk-advisory/tprm" },
                        { "id": "sox-icofr-ifc", "title": "SOX/ICOFR/IFC","path":"/services/risk-advisory/sox-icofr-ifc" },
                        { "id": "csa", "title": "CSA","path":"/services/risk-advisory/csa" },
                        { "id": "concurrent-audits", "title": "Concurrent Audits","path":"/services/risk-advisory/concurrent-audits" },
                        { "id": "formulation-of-policies-and-sops", "title": "Policies and SOPs","path":"/services/risk-advisory/formulation-of-policies-and-sops" }
                    ]
                },
                {
                    "label": "Digital Transformation",
                    "path": "/services/digital-transformation",
                    "submenus": [
                        { "id": "strategic-pmo", "title": "Strategic PMO","path":"/services/digital-transformation/strategic-pmo" },
                        { "id": "implementation", "title": "Implementation","path":"/services/digital-transformation/implementation" },
                        { "id": "support-services", "title": "Support Services","path":"/services/digital-transformation/support-services" }
                    ]
                },
                {
                    "label": "Sustainability & ESG",
                    "path": "/services/esg",
                    // "submenus": [
                    //     { "id": "strategy-roadmap", "title": "ESG Strategy & Roadmap", "path":"/services/esg/strategy-roadmap"},
                    //     { "id": "reporting-disclosure", "title": "ESG Reporting & Disclosure","path":"/services/esg/reporting-disclosure" },
                    //     { "id": "carbon-footprint", "title": "Carbon Footprint Assessment" ,"path":"/services/esg/carbon-footprint" },
                    //     { "id": "sustainability-assurance", "title": "Sustainability Assurance","path":"/services/esg/sustainability-assurance" }
                    // ]
                },
                {
                    "label": "Financial Advisory",
                    "path": "/services/financial-advisory",
                    "submenus": [
                        { "id": "credit-risk", "title": "Credit Risk Assessment" ,"path":"/services/financial-advisory/credit-risk-assessment"},
                        { "id": "portfolio-management", "title": "Credit Portfolio Management" ,"path":"/services/financial-advisory/portfolio-management"},
                        { "id": "loan-review", "title": "Loan Review & Monitoring","path":"/services/financial-advisory/loan-review" },
                        { "id": "credit-policy", "title": "Credit Policy Framework", "path":"/services/financial-advisory/credit-policy" }
                    ]
                },
                {
                    "label": "AI & Technology",
                    "path": "/services/ai-technology",
                    "submenus": [
                        { "id": "ai-rmf-nist", "title": "AI RMF by NIST", "path":"/services/ai-technology/ai-rmf-nist"}
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
                        { "id": "soc-1", "title": "SOC 1", "path":"/services/soc-services/soc-1"},
                        { "id": "soc-2", "title": "SOC 2", "path":"/services/soc-services/soc-2" },
                        { "id": "soc-3", "title": "SOC 3" ,"path":"/services/soc-services/soc-3"}
                    ]
                },
                {
                    "label": "ISO & TISAX Readiness",
                    "path": "/services/iso-certifications",
                    "submenus": [
                        { "id": "iso-27001", "title": "ISO 27001", "path":"/services/iso-certifications/iso-27001"},
                        { "id": "iso-27701", "title": "ISO 27701", "path":"/services/iso-certifications/iso-27701"},
                        { "id": "iso-22301", "title": "ISO 22301", "path":"/services/iso-certifications/iso-22301"},
                        { "id": "iso-42001", "title": "ISO 42001" ,"path":"/services/iso-certifications/iso-42001"},
                        { "id": "iso-31000", "title": "ISO 31000" ,"path":"/services/iso-certifications/iso-31000"},
                        { "id": "tisax", "title": "TISAX", "path":"/services/iso-certifications/tisax"}
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
                        { "id": "dpdp", "title": "DPDP Compliance", "path":"/services/data-privacy/dpdp"},
                        { "id": "gdpr", "title": "GDPR Compliance" ,"path":"/services/data-privacy/gdpr"},
                        { "id": "regulatory", "title": "Other Regulatory Compliances", "path":"/services/data-privacy/regulatory"}
                    ]
                }
            ]
        },
        {
            "title": "CPA Firm - Support Services",
            "items": [
                {
                    "label": "US Assurance Support Services",
                    "path": "/services/cpa-us-assurance",
                    "submenus": [
                        { "id": "financial-audits", "title": "Financial Statement Audits",path:"/services/cpa-us-assurance/financial-statement-audits" },
                        { "id": "internal-control", "title": "Internal Control Reviews",path:"/services/cpa-us-assurance/internal-control-reviews" },
                        // { "id": "compliance-audits", "title": "Compliance Audits",path:"/services/cpa-us-assurance/compliance-audits" },
                        // { "id": "quality-assurance", "title": "Quality Assurance",path:"/services/cpa-us-assurance/quality-assurance" }
                    ]
                }
            ]
        }
    ],
    "aboutMegaMenu": [

        {
            "title": "Who We Are",
            "items": [
                { "label": "Company Overview", "path": "/about#introduction" },
                { "label": "Vision & Mission", "path": "/about#mission-vision" },
                // { "label": "Leadership Team", "path": "/about#leadership" }
            ]
        },
        {
            "title": "Our People",
            "items": [
                { "label": "Co-founding Partners", "path": "/about#co-founders" },
                { "label": "Service Leaders", "path": "/about#service-leaders" },
                { "label": "RiskMan Team", "path": "/about#riskman-teams" }
            ]
        },
        {
            "title": "Alliances",
            "items": [
                { "label": "Alliance Partners", "path": "/about#alliance-partners" },
                // { "label": "Global Network", "path": "/about#global-network" }
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
                { "label": "Accomplishment", "path": "/events/#accomplishment" },
                // {"label":"","path":"/events/#emerging-risk-assurance"},
                { "label": "Upcoming Events", "path": "/events/#upcoming-events" },
                {"label":"Past Events","path":"/events/#past-events"},
                { "label": "Culture at RiskMan", "path": "/events/#moment-that-matters" }
            ]
        }
    ],

    "solutionsMegaMenu": [
        {
            "title": "Tech Solutions",
            "items": [
                { "label": "US Assurance - Audit Management", "path": "/solutions" },
            ]
        }
    ]
};
