import React from 'react'

function SupportSection() {
  return (
    
     <section className=" py-14 md:py-20 bg-brandLight dark:bg-brandDark/50">
        <div className="container px-6 lg:px-12">
          <h2 className="font-heading text-4xl font-bold mb-12">RiskMan SOC 2 Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Readiness Reviews", desc: "Governance, access, change control, and incident response audits." },
              { title: "Remediation", desc: "Prioritised plans aligned with your product roadmap." },
              { title: "Evidence Strategy", desc: "Repeatable audit strategies that are less disruptive." },
              { title: "Ongoing Advisory", desc: "Keep SOC 2 aligned with evolving customer expectations." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="h-2 w-full bg-brandAccent mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <h4 className="font-bold text-xl mb-4 group-hover:text-brandPrimary dark:group-hover:text-brandGold transition-colors">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SupportSection