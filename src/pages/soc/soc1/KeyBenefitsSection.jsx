import { FileText, Landmark, ShieldCheck, Users2 } from 'lucide-react'
import React from 'react'

function KeyBenefitsSection() {
  return (
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Key Benefits for Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Landmark />, title: "Audit Ready", desc: "Easier to audit and work with large-scale enterprise customers." },
              { icon: <FileText />, title: "SOX Support", desc: "Supports statutory audit requirements, improving client retention." },
              { icon: <Users2 />, title: "Save Time", desc: "Reduce management time spent on bespoke control testing requests." },
              { icon: <ShieldCheck />, title: "Governance", desc: "Demonstrate disciplined governance over financial operations." }
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-xl hover:bg-bgLight dark:hover:bg-brandDark transition-colors group">
                <div className="text-brandPrimary dark:text-brandGold mb-4 transition-transform group-hover:scale-110">
                  {React.cloneElement(benefit.icon, { size: 32 })}
                </div>
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default KeyBenefitsSection