import { BrainCircuit, Globe, Users } from 'lucide-react'
import React from 'react'

function BenefitSection() {
  return (
      <section className="py-24 bg-brandDark text-white relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-center">Strategic Benefits for Organizations</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { t: "Trust And Transparency", d: "Build confidence with users, employees, and regulators regarding your organization's use of AI.", icon: <Users size={40} className="text-brandAccent mb-4" /> },
              { t: "Innovation Security", d: "Protect your intellectual property and AI investments from emerging cyber threats and model theft.", icon: <BrainCircuit size={40} className="text-brandAccent mb-4" /> },
              { t: "Regulatory Readiness", d: "Stay ahead of global AI laws, such as the EU AI Act, and avoid costly non-compliance.", icon: <Globe size={40} className="text-brandAccent mb-4" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-10 rounded-3xl bg-surfaceDark border border-borderDark text-center hover:bg-brandPrimary/20 transition-all">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-4 text-brandGold">{benefit.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BenefitSection