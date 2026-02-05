import { ClipboardCheck } from 'lucide-react'
import React from 'react'

function ServicesSection() {
  return (
    
    <section className="py-20 bg-brandDark text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">RiskMan SOC 1 Services</h2>
              <div className="space-y-6">
                {[
                  { t: "Scope Definition", d: "Aligned to financial reporting impact and customer expectations." },
                  { t: "Readiness Assessment", d: "Identify control gaps across processing, access, and change management." },
                  { t: "Remediation Guidance", d: "Documentation support and evidence coaching for your teams." },
                  { t: "Audit Coordination", d: "Seamless examination coordination with independent auditors." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-brandGold font-bold">{i+1}.</span>
                    <div>
                      <h5 className="font-bold">{s.t}</h5>
                      <p className="text-sm text-gray-400">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-10 rounded-3xl bg-brandNavy border border-white/10 relative">
                <h3 className="font-heading text-2xl font-bold mb-4 text-brandGold">Outcomes You Can Expect</h3>
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "A mature SOC 1 posture translates into lower audit friction, higher confidence from customer finance leaders, and stronger positioning in competitive RFPs."
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center space-x-4">
                  <ClipboardCheck className="text-brandGold h-12 w-12" />
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Repeatable Asset, Not A One-Off Effort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServicesSection