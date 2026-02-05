import { Calendar, CheckCircle2, Headphones, Search, ToolCase } from 'lucide-react'
import React from 'react'

function SupportSection() {
  return (
    <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-12">How RiskMan Supports SOC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Search />, title: "Readiness", desc: "Gap assessment against SOC 1, SOC 2, and SOC 3 expectations." },
              { icon: <ToolCase />, title: "Remediation", desc: "Prioritized control improvements across processes and technology." },
              { icon: <Headphones />, title: "Audit Support", desc: "Coordination with CPA firms and management of walkthroughs." },
              { icon: <Calendar />, title: "Ongoing Program", desc: "Annual cycles, continuous evidence, and control health checks." }
            ].map((step, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-brandGold">
                <div className="absolute -left-[11px] top-0 bg-brandGold rounded-full p-1 text-brandDark">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SupportSection