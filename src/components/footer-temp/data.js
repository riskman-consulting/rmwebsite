
import React from 'react';


export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Our Story', href: '#story' },
      { label: 'Leadership', href: '#leadership' },
      { label: 'Global Presence', href: '#global' },
    ]
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Risk Advisory', href: '#risk-advisory' },
      { label: 'Cybersecurity', href: '#cyber' },
      { label: 'Digital Transformation', href: '#digital' },
    ]
  },
  {
    label: 'Tech Solutions',
    href: '#tech',
  },
  {
    label: 'Events & Journey',
    href: '#events',
  },
  {
    label: 'Governance',
    href: '#governance',
  },
  {
    label: 'Careers',
    href: '#careers',
  },
];

export const ENTERPRISE_SERVICES = [
  {name:"Risk Assurance and Advisory",path:"/services/risk-advisory"},
  {name:"Digital Transformation",path:"/services/digital-tran"},
  {name:"Sustainability & ESG",path:"/services/esg"},
  {name:"Financial Advisory",path:"/services/financial-advisory"},
  {name:"AI & Technology",path:"/services/ai-technology"},
  {name:"Forensics and Investigation",path:"/services/forensics-investigation"}
];

export const IT_RISK_SERVICES = [
  {name:"SOC Compliances",path:""},
  {name:"ISO & TISAX Readiness",path:"/services/iso-certifications"},
  {name:"PCI DSS",path:"/services/pci-dss"},
  {name:"ITGC and ITAC",path:"/services/itgc"},
  {name:"BCP/DR", path:"/services/bcp"},
  {name:"Cybersecurity",path:"/services/cybersecurity"},
  {name:"Data Privacy",path:"/services/data-privacy"}
];

export const SERVICES_DATA= [
  {
    title: "Risk Assurance and Advisory",
    description: "Navigate uncertainties with precision through our enterprise-grade risk assessment and management strategies.",
    icon: "Shield"
  },
  {
    title: "SOC Compliances",
    description: "Achieve and maintain SOC 1, SOC 2, and SOC 3 reporting standards with our expert-led guidance.",
    icon: "FileCheck"
  },
  {
    title: "Digital Transformation",
    description: "Leverage cutting-edge technology to reinvent your business processes and customer experiences.",
    icon: "Cpu"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with robust, multi-layered security protocols and 24/7 monitoring.",
    icon: "Lock"
  },
  {
    title: "Data Privacy",
    description: "Ensure global data protection compliance across GDPR, CCPA, and regional privacy laws.",
    icon: "UserCheck"
  },
  {
    title: "Sustainability & ESG",
    description: "Build a future-ready business by integrating environmental, social, and governance excellence.",
    icon: "Leaf"
  }
];