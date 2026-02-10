import { CheckCircle2, ShieldCheck } from 'lucide-react'
import React from 'react'

function CompetitiveSection() {
  return (
      <section className="py-20 bg-brandDark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Competitive Advantages of Compliance</h2>
              <p className="text-gray-400 mb-8">Achieving recognized international standards provides measurable value that extends beyond simple regulatory checkboxes for high-performing organizations.</p>
              <div className="space-y-6">
                {[
                  { t: "Trust Building", d: "Demonstrates a verified commitment to security for partners and global clients." },
                  { t: "Risk Reduction", d: "Minimizes the likelihood of data breaches and significant legal or financial liabilities." },
                  { t: "Operational Efficiency", d: "Streamlines internal processes and reduces resource waste." },
                  { t: "Market Access", d: "Essential for securing lucrative contracts in sectors like automotive or finance." }
                ].map((adv, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brandAccent shrink-0" />
                    <div>
                      <h5 className="font-bold text-brandGold">{adv.t}</h5>
                      <p className="text-sm text-gray-300">{adv.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brandPrimary/20 rounded-2xl border border-brandAccent/30 flex items-center justify-center p-12">
                <div className="text-center">
                  <ShieldCheck className="w-32 h-32 text-brandAccent mx-auto mb-6 opacity-50" />
                  <p className="text-2xl font-heading font-light italic">"Secure your global partnerships and data assets with precision."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CompetitiveSection