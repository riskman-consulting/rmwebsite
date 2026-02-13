import React from 'react'

function RiskmanEnablement() {
  return (
     <section className="py-14 md:py-20 container px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl font-bold mb-4">RiskMan SOC 3 Enablement</h2>
          <p className="text-gray-500">Strategically mapping your compliance to your brand narrative.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { t: "Strategic Alignment", d: "Align SOC 3 scope with existing examinations and trust messaging." },
            { t: "Auditor Coordination", d: "Coordination so the report reflects your strengths accurately." },
            { t: "Presentation Advisory", d: "Advise how and where to present SOC 3 in communications." },
            { t: "Narrative Integration", d: "Integrate SOC 3 into a broader assurance and trust story." }
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl font-heading font-black text-brandPrimary/5 dark:text-brandGold/5 absolute -top-8 left-0 group-hover:text-brandGold/20 transition-colors">0{i+1}</div>
              <h4 className="font-bold text-lg mb-3 relative z-10">{step.t}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default RiskmanEnablement