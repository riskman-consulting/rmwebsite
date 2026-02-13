import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from "../../components/ui/SectionComponents";

const GlobalModelDiagram = () => (
  <svg viewBox="0 0 520 320" className="w-full max-w-[520px] animate-evaporate">
    <defs>
      <linearGradient id="hqg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#001F3F" />
        <stop offset="100%" stopColor="#003366" />
      </linearGradient>
    </defs>
    {/* Central HQ */}
    <rect x="185" y="20" width="150" height="56" rx="8" className="fill-brandNavy dark:fill-[url(#hqg)] stroke-brandPrimary dark:stroke-brandAccent" strokeWidth="1.5" />
    <text x="260" y="44" textAnchor="middle" className="fill-white dark:fill-brandAccent" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">CENTRAL GOVERNANCE</text>
    <text x="260" y="60" textAnchor="middle" className="fill-slate-300 dark:fill-slate-400" fontSize="9" fontFamily="Inter, sans-serif">Global Policy Framework</text>
    {/* Connectors */}
    {[80, 260, 440].map((x, i) => (
      <g key={i}>
        <line x1="260" y1="76" x2={x} y2="120" className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="1.5" strokeDasharray="4,3" />
        <rect x={x - 65} y="120" width="130" height="50" rx="6" className="fill-brandPrimary dark:fill-[#003366] stroke-brandNavy dark:stroke-[#004080]" strokeWidth="1" />
        <text x={x} y="142" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600" fontFamily="Montserrat, sans-serif">
          {["AMERICAS", "EMEA", "APAC"][i]}
        </text>
        <text x={x} y="158" textAnchor="middle" className="fill-slate-200 dark:fill-slate-400" fontSize="8" fontFamily="Inter, sans-serif">Regional Adaptation</text>
        {/* Local entities */}
        {[-40, 0, 40].map((dx, j) => (
          <g key={j}>
            <line x1={x} y1="170" x2={x + dx} y2="200" className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="1" />
            <rect x={x + dx - 22} y="200" width="44" height="28" rx="4" className="fill-brandNavy dark:fill-[#001F3F] stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="1" />
            <text x={x + dx} y="218" textAnchor="middle" className="fill-white dark:fill-[#4A90C4]" fontSize="8" fontFamily="Inter, sans-serif">Entity {j + 1}</text>
          </g>
        ))}
      </g>
    ))}
    {/* Legend */}
    <rect x="20" y="270" width="480" height="40" rx="6" className="fill-slate-100 dark:fill-[#001F3F] stroke-slate-300 dark:stroke-[#004080]" strokeWidth="1" opacity="0.7" />
    <text x="40" y="294" className="fill-brandPrimary dark:fill-[#4A90C4]" fontSize="9" fontFamily="Inter, sans-serif">● Global Standards</text>
    <text x="180" y="294" className="fill-brandNavy dark:fill-brandAccent" fontSize="9" fontFamily="Inter, sans-serif">● Regional Customization</text>
    <text x="350" y="294" className="fill-slate-500 dark:fill-slate-400" fontSize="9" fontFamily="Inter, sans-serif">● Local Compliance</text>
  </svg>
);

export default function DeliverySection() {
  return (
    <SectionWrapper id="delivery">
      <div className="px-6 py-24 transition-colors duration-300 lg:px-20 bg-bgLight dark:bg-bgDark">
        <div className="max-w-6xl mx-auto">
          <SectionTag>Global Delivery Model</SectionTag>
          <SectionTitle>Scaling Governance Across Geographies</SectionTitle>
          <SectionDesc>
            RiskMan's delivery model is architected for complexity. We help multi-entity organizations maintain global 
            governance standards while respecting local regulatory requirements and operational nuances.
          </SectionDesc>

          <div className="flex justify-center mb-12">
            <GlobalModelDiagram />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Global–Local Balance", desc: "A unified policy backbone with jurisdiction-specific customization layers. We ensure global standards are met without losing local relevance.", icon: "🌐" },
              { title: "Ownership & Accountability", desc: "Clear RACI matrices and entity-wise ownership models. Every policy has a defined owner, reviewer, and approver — eliminating governance orphans.", icon: "👥" },
              { title: "Version Control & Change Management", desc: "Systematic version control, defined review cadences (annual / event-driven), and structured change management protocols to keep governance current.", icon: "📋" },
              { title: "Central vs Decentralized Governance", desc: "Flexible governance structures — from fully centralized to federated models — tailored to your organizational complexity and operating model.", icon: "⚖️" },
            ].map((c, i) => (
              <div key={i} className="p-8 transition-colors bg-white border shadow-sm dark:bg-gradient-to-br dark:from-brandDark dark:to-bgDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl hover:border-brandPrimary/50 dark:shadow-none">
                <div className="text-3xl mb-3.5">{c.icon}</div>
                <div className="text-[17px] font-bold text-brandDark dark:text-white mb-2.5 font-sans">{c.title}</div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
