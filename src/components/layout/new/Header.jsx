import Navbar from "./NavBar";


const menus = {
  mainNav: [
    { label: "About", type: "mega", key: "about", path: "/about" },
    { label: "Services", type: "mega", key: "services", path: "/services" },
    { label: "Tech Solutions", type: "link", key: "solutions", path: "/solutions" },
    { label: "Event and Journey", type: "link", key: "events", path: "/events" },
    { label: "Knowledge Hub", type: "link", key: "insights", path: "/insights" },
    { label: "Careers", type: "link", key: "careers", path: "/careers" },
    { label: "Contact US", type: "link", key: "contact", path: "/contact" },
  ],
  aboutMegaMenu: [
    {
      items: [
        { label: "Co-founding Partners", path: "/about#co-founders" },
        { label: "Alliance Partners", path: "/about#alliance-partners" },
        { label: "Service Leaders", path: "/about#service-leaders" },
        { label: "RiskMan Team", path: "/about#riskman-teams" },
      ],
    },
  ],
  servicesMegaMenu: [
    {
      title: "ENTERPRISE SERVICES",
      items: [
        {
          label: "Risk Advisory",
          path: "/services/risk-advisory",
          submenus: [
            { id: "rbia", title: "RBIA" },
            { id: "erm", title: "TPRM" },
            { id: "sox-icofr-ifc", title: "SOX / ICOFR / IFC" },
            { id: "csa", title: "CSA" },
            { id: "concurrent-audits", title: "Concurrent Audits" },
            { id: "formulation-of-policies-and-sops", title: "Formulation of Policies and SOPs" },
            { id: "risk-frameworks", title: "Risk Frameworks" },
          ],
        },
        {
          label: "Digital Transformation",
          submenus: [
            { label: "Strategic PMO", path: "/services/digital-transformation/strategic-pmo" },
            { label: "Implementation", path: "/services/digital-transformation/implementation" },
            { label: "Support Services", path: "/services/digital-transformation/support-services" },
          ],
        },
        { label: "ESG Services", path: "/services/esg-services" },
        { label: "Financial Advisory", path: "/services/financial-advisory" },
        { label: "AI & Technology - AI RMF by NIST", path: "/services/ai-and-technology" },
        { label: "Forensic and Investigation", path: "/services/forensic-investigation" },
      ],
    },
    {
      title: "IT RISK MANAGEMENT",
      items: [
        {
          label: "SOC",
          path: "/services/soc-services",
          submenus: [
            { label: "SOC-1", path: "/services/soc/soc-1" },
            { label: "SOC-2", path: "/services/soc/soc-2" },
            { label: "SOC-3", path: "/services/soc/soc-3" },
          ],
        },
        {
          label: "ISO and TISAX",
          path: "/services/iso-certifications",
          submenus: [
            { label: "ISO-27001", path: "/services/iso/iso-27001" },
            { label: "ISO-22301", path: "/services/iso/iso-22301" },
            { label: "ISO-42001", path: "/services/iso/iso-42001" },
            { label: "ISO-31000", path: "/services/iso/iso-31000" },
            { label: "TISAX", path: "/services/iso/tisax" },
          ],
        },
        { label: "PCI DSS", path: "/services/pci-dss-compliance" },
        { label: "ITGC and ITAC", path: "/services/itgc-itac" },
        { label: "BCP and DR", path: "/services/bcp-dr" },
        { label: "Cyber Security", path: "/services/cybersecurity" },
        {
          label: "Data Privacy & Protection",
          path: "/services/data-privacy",
          submenus: [
            { label: "DPDP", path: "/services/data-privacy/dpdp" },
            { label: "GDPR", path: "/services/data-privacy/gdpr" },
            { label: "Other Regulatory compliances", path: "/services/data-privacy/other" },
          ],
        },
      ],
    },
    {
      title: "CSA",
      items: [{ label: "US Assurance Support Services", path: "/services/us-assurance-support-services" }],
    },
  ],
  industriesMegaMenu: [
    {
      title: "Core Industries",
      items: [
        { label: "Banking & Insurance", path: "/industries/banking-insurance" },
        { label: "Healthcare", path: "/industries/healthcare" },
        { label: "Energy & Utilities", path: "/industries/energy-utilities" },
        { label: "Manufacturing", path: "/industries/manufacturing" },
        { label: "Travel & Logistics", path: "/industries/travel-logistics" },
      ],
    },
    {
      title: "Technology & Digital",
      items: [
        { label: "Media & Communication", path: "/industries/media-communication" },
        { label: "Education & EdTech", path: "/industries/education-edtech" },
        { label: "E-Commerce", path: "/industries/ecommerce" },
      ],
    },
    {
      title: "Specialized Sectors",
      items: [
        { label: "Hospitality", path: "/industries/hospitality" },
        { label: "Automobiles", path: "/industries/automobiles" },
        { label: "Retail Consumer", path: "/industries/retail-consumer" },
      ],
    },
  ],
  // insightsMegaMenu is small → can be simple link or small menu if needed
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surfaceLight dark:bg-surfaceDark border-b border-borderLight dark:border-borderDark">
      <Navbar mainNav={menus.mainNav} menus={menus} />
    </header>
  );
}
