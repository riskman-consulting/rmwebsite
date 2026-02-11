import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from "../../components/ui/SectionComponents";

const GovernancePyramid = () => (
  <svg viewBox="0 0 500 380" className="w-full max-w-[480px] animate-float drop-shadow-xl">
    <defs>
      <linearGradient id="gp1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brandDark)" className="stop-brandDark" />
        <stop offset="100%" stopColor="var(--color-brandNavy)" className="stop-brandNavy" />
      </linearGradient>
      <linearGradient id="gp2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brandNavy)" className="stop-brandNavy" />
        <stop offset="100%" stopColor="var(--color-brandPrimary)" className="stop-brandPrimary" />
      </linearGradient>
      <linearGradient id="gp3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brandPrimary)" className="stop-brandPrimary" />
        <stop offset="100%" stopColor="#2D5F8A" />
      </linearGradient>
      <linearGradient id="gp4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2D5F8A" />
        <stop offset="100%" stopColor="#4A90C4" />
      </linearGradient>
      
      {/* Light Mode Gradients - using CSS variables or classes would be ideal, but for SVG we use currentcolor or specific IDs */}
      <style>{`
        .dark .stop-brandDark { stop-color: #001F3F; }
        .dark .stop-brandNavy { stop-color: #003366; }
        .dark .stop-brandPrimary { stop-color: #004080; }
        
        /* Light mode overrides */
        :root .stop-brandDark { stop-color: #003366; }
        :root .stop-brandNavy { stop-color: #004080; }
        :root .stop-brandPrimary { stop-color: #2D5F8A; }
      `}</style>
    </defs>
    {/* Pyramid layers */}
    <polygon points="250,30 320,120 180,120" fill="url(#gp1)" className="fill-brandNavy dark:fill-[url(#gp1)]">
      <animate attributeName="opacity" from="0" to="1" dur="0.6s" fill="freeze" />
    </polygon>
    <polygon points="175,130 325,130 370,220 130,220" fill="url(#gp2)" className="fill-brandPrimary dark:fill-[url(#gp2)]">
      <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="0.2s" fill="freeze" />
    </polygon>
    <polygon points="125,230 375,230 420,320 80,320" fill="url(#gp3)" className="fill-[#2D5F8A] dark:fill-[url(#gp3)]">
      <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="0.4s" fill="freeze" />
    </polygon>
    <rect x="55" y="330" width="390" height="40" rx="4" fill="url(#gp4)" className="fill-[#4A90C4] dark:fill-[url(#gp4)]">
      <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="0.6s" fill="freeze" />
    </rect>
    {/* Labels */}
    <text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif">BOARD</text>
    <text x="250" y="183" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif">POLICIES</text>
    <text x="250" y="283" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif">SOPs & PROCEDURES</text>
    <text x="250" y="356" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif">DAY-TO-DAY EXECUTION</text>
    {/* Side labels */}
    <text x="20" y="85" className="fill-brandPrimary dark:fill-brandAccent" fontSize="10" fontFamily="Inter, sans-serif">Strategic</text>
    <text x="20" y="356" className="fill-brandPrimary dark:fill-brandAccent" fontSize="10" fontFamily="Inter, sans-serif">Operational</text>
    <line x1="30" y1="95" x2="30" y2="340" className="stroke-brandPrimary dark:stroke-brandAccent" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow)" />
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-brandPrimary dark:fill-brandAccent"/></marker></defs>
  </svg>
);

const StatCard = ({ num, label }) => (
  <div className="bg-white dark:bg-gradient-to-br dark:from-brandDark dark:to-brandNavy border border-slate-200 dark:border-brandPrimary/30 rounded-xl p-7 text-center flex-1 min-w-[160px] hover:border-brandPrimary/50 dark:hover:border-brandAccent/50 transition-colors duration-300 shadow-sm dark:shadow-none">
    <div className="text-3xl font-extrabold leading-none text-brandPrimary dark:text-brandAccent font-heading">{num}</div>
    <div className="mt-2 font-sans text-xs tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
  </div>
);

export default function OverviewSection() {
  return (
    <SectionWrapper id="overview-detail">
      <div className="px-6 py-24 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
        <div className="max-w-6xl mx-auto">
          <SectionTag>Executive Overview</SectionTag>
          <SectionTitle>Governance Through Policies & SOPs</SectionTitle>
          <SectionDesc>
            Policies define the "what" and "why" — strategic boundaries set by leadership. SOPs define the "how" — 
            standardized operational procedures that ensure consistent execution. Together, they form the connective tissue 
            between boardroom decisions and frontline operations.
          </SectionDesc>

          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="p-8 mb-6 transition-colors bg-white border shadow-sm dark:bg-gradient-to-br dark:from-brandDark dark:to-bgDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl hover:border-brandPrimary/50 dark:shadow-none">
                <div className="mb-3 text-xs font-bold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">POLICIES</div>
                <div className="text-[17px] font-bold text-brandDark dark:text-white mb-2.5 font-sans">Strategic Governance Layer</div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Policies articulate organizational intent, risk appetite, and compliance boundaries. 
                  They set the tone for enterprise behavior and provide the framework within which all 
                  operational decisions are made — ensuring alignment from the Board to every business unit.
                </p>
              </div>
              <div className="p-8 transition-colors bg-white border shadow-sm dark:bg-gradient-to-br dark:from-brandDark dark:to-bgDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl hover:border-brandPrimary/50 dark:shadow-none">
                <div className="mb-3 text-xs font-bold tracking-widest uppercase text-brandGold">SOPs</div>
                <div className="text-[17px] font-bold text-brandDark dark:text-white mb-2.5 font-sans">Operational Execution Layer</div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  SOPs translate policy directives into step-by-step processes. They standardize execution, 
                  minimize ambiguity, and establish accountability at the activity level — ensuring that governance 
                  is not aspirational but operational.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <GovernancePyramid />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <StatCard num="100+" label="Policies Designed Across Industries" />
            <StatCard num="150+" label="SOPs Standardized Globally" />
            <StatCard num="10+" label="Countries Covered" />
            <StatCard num="40+" label="Regulatory Frameworks Mapped" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
