import { Lock } from 'lucide-react'
import React from 'react'

function BenefitSection() {
  return (
     <section className="py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Strategic Benefits for Organizations</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">Modern leadership must view privacy as a fundamental pillar of business integrity rather than just a legal obligation for global organizations.</p>
              <div className="space-y-4">
                {[
                  { t: "Enhanced Brand Trust", d: "Demonstrate a top-down commitment to protecting client and employee privacy through verified standards." },
                  { t: "Reduced Liability", d: "Minimize the risk of legal action and regulatory scrutiny stemming from data breaches." },
                  { t: "Streamlined Operations", d: "Harmonize privacy and security efforts to reduce redundant documentation." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-brandLight transition-colors">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brandAccent flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-brandDark">{item.t}</h5>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="w-full aspect-square bg-brandNavy rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandAccent via-transparent to-transparent"></div>
                  <Lock className="w-48 h-48 text-brandAccent/20 absolute" />
                  <div className="relative z-10 text-center p-12">
                    <h3 className="text-brandGold text-5xl font-black mb-4 italic">PII</h3>
                    <p className="text-white font-heading text-xl">Secured & Compliant</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BenefitSection