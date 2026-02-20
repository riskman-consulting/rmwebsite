import { Globe, Zap } from 'lucide-react'
import React from 'react'
import { empowermentSteps } from './data'

function EmpowermentSection() {
  return (
    
         <section className="py-20 bg-brandLight">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Consent and Principal Empowerment</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">The DPDP Act requires Organizations to implement transparent and revocable consent mechanisms across all digital touchpoints.</p>
              <div className="space-y-4">
                {empowermentSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm border-l-4 border-brandAccent">
                    <Zap className="text-brandAccent shrink-0 mt-1" size={18} />
                    <div>
                      <h5 className="font-bold text-brandDark">{step.title}</h5>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video bg-brandNavy rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden">
                <Globe className="absolute -right-20 -bottom-20 text-brandAccent/10 w-80 h-80" />
                <h3 className="text-brandGold text-3xl font-heading font-black mb-4">India Mandate</h3>
                <p className="text-white text-lg font-light italic">"Valid, informed, and granular consent is no longer an option—it is the foundation of trust."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EmpowermentSection