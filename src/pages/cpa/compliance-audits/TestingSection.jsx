import { CheckCircle2, FileCheck, Search, ShieldCheck, ShieldCheckIcon } from 'lucide-react'
import React from 'react'

function TestingSection() {
  return (
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Verification & Substantive Testing</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">Our audits provide empirical evidence of compliance, shielding the organization from penalties and reputational damage.</p>
              <div className="space-y-4">
                {[
                  { t: "Data Integrity Audits", d: "Ensuring reporting data is accurate and untampered.", icon: <Search size={20}/> },
                  { t: "Operational Spot-checks", d: "Verifying that field activities match documented policies.", icon: <CheckCircle2 size={20}/> },
                  { t: "Reporting Validation", d: "Confirming all filings meet specific regulatory formats.", icon: <FileCheck size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-surfaceDark border border-white/5 rounded-xl">
                    <div className="text-brandAccent">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{item.t}</h5>
                      <p className="text-xs text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-12 bg-brandPrimary/10 border border-brandAccent/20 rounded-[3rem] text-center">
                 <ShieldCheck className="mx-auto mb-6 text-brandAccent" size={64} />
                 <h3 className="text-2xl font-bold mb-4">Secure License to Operate</h3>
                 <p className="text-gray-400 text-sm italic">"We identify and close compliance gaps before they escalate, ensuring your organizational standing remains impeccable."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TestingSection