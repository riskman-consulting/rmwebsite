import { useNavigate } from "react-router-dom";
import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from "../../components/ui/SectionComponents";

export default function WhySection() {
  const navigator = useNavigate()
  return (
    <SectionWrapper id="why">
      <div className="px-6 py-24 transition-colors duration-300 lg:px-20 bg-bgLight dark:bg-bgDark">
        <div className="max-w-6xl mx-auto">
          <SectionTag>Differentiated Positioning</SectionTag>
          <SectionTitle>Why RiskMan</SectionTitle>
          <SectionDesc>
            We are not a documentation vendor. We are a governance partner. RiskMan brings the strategic depth 
            of quality execution of the execution agility of a specialist firm — purpose-built for enterprise governance.
          </SectionDesc>

          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Professional Standards", desc: "Our team brings 18+ years of experience from multiple global consulting firms. Every deliverable meets the highest professional standards.", icon: "🏛️" },
              { title: "Governance-First Thinking", desc: "We don't start with templates — we start with understanding your governance objectives, risk landscape, and regulatory context. Frameworks are tailored, not copied.", icon: "🎯" },
              { title: "Industry-Agnostic, Context-Aware", desc: "Deep expertise across BFSI, Manufacturing, Energy, Technology, Healthcare, and Retail — with the ability to adapt frameworks to any sector's unique requirements.", icon: "🔄" },
              { title: "Technology-Enabled", desc: "From policy management platforms to automated review workflows — we leverage technology to make governance sustainable, scalable, and real-time.", icon: "⚡" },
              { title: "Execution, Not Just Advisory", desc: "We don't just recommend — we design, implement, train, and embed governance into your organization's DNA. End-to-end delivery is our standard.", icon: "🚀" },
              { title: "Long-Term Partnership", desc: "Governance is a journey, not a project. RiskMan stands as your ongoing governance partner — adapting frameworks as your business evolves.", icon: "🤝" },
            ].map((c, i) => (
              <div key={i} className="relative p-8 overflow-hidden transition-colors bg-white border shadow-sm dark:bg-gradient-to-br dark:from-brandDark dark:to-bgDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl hover:border-brandPrimary/50 group dark:shadow-none">
                <div className="absolute -top-2.5 -right-2.5 text-6xl opacity-[0.06] group-hover:opacity-[0.1] transition-opacity">{c.icon}</div>
                <div className="text-2xl mb-3.5">{c.icon}</div>
                <div className="text-[17px] font-bold text-brandDark dark:text-white mb-2.5 font-sans">{c.title}</div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden text-center shadow-xl bg-gradient-to-br from-brandNavy to-brandPrimary rounded-2xl p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,192,0,0.1)_0%,_transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-heading text-[clamp(24px,3vw,34px)] font-bold text-white mb-4">
                Ready to Strengthen Your Governance Foundation?
              </h3>
              <p className="text-[15px] text-brandLight/80 max-w-xl mx-auto mb-7 leading-relaxed">
                Let's discuss how RiskMan can help you design, implement, and sustain a world-class 
                policy and SOP framework tailored to your organization.
              </p>
              <button onClick={()=>navigator("/contact")} className="py-4 font-sans text-base font-semibold transition-all bg-white border-none cursor-pointer text-brandNavy px-9 rounded-xl hover:bg-brandAccent hover:text-brandDark hover:shadow-lg">
                Schedule a Governance Assessment →
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
