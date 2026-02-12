import { Lock, ShieldCheck } from 'lucide-react'
import React from 'react'

function InternationalSection() {
  return (
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="bg-surfaceDark p-10 lg:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-brandPrimary/5 skew-x-12 translate-x-1/2"></div>
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">International Data Sovereignty</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">Managing data flows across borders requires sophisticated legal and technical safeguards to ensure equivalent protection levels.</p>
                <div className="space-y-6">
                  {[
                    { t: "Transfer Impact Assessments (TIA)", d: "Required assessments for data moving to 'third countries'." },
                    { t: "Standard Contractual Clauses (SCCs)", d: "Implementing modular SCCs for controller-processor legalization." },
                    { t: "Adequacy Monitoring", d: "Strategy shifts for changing global jurisdictional statuses." }
                  ].map((info, i) => (
                    <div key={i} className="flex gap-4">
                      <ShieldCheck className="text-brandAccent shrink-0" />
                      <div>
                        <h5 className="font-bold text-brandGold">{info.t}</h5>
                        <p className="text-xs text-gray-400">{info.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 border-4 border-dashed border-brandAccent/20 rounded-full flex items-center justify-center animate-spin-slow">
                   <Lock size={80} className="text-brandAccent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default InternationalSection