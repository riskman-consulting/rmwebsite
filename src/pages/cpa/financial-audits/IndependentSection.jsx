import { FileCheck, PieChart, Search } from 'lucide-react'
import React from 'react'

function IndependentSection() {
  return (
     <section className="bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
               <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl text-brandDark dark:text-brandAccent">Independent Opinion & Reporting</h2>
               <p className="text-brandNavy dark:text-white/70">RiskMan delivers definitive audit opinions that serve as a bedrock of trust for investors and regulatory bodies.</p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
               {[
                 { t: "Transparent Disclosures", d: "Clear communication of financial health and potential risks.", icon: <FileCheck className="text-brandAccent" /> },
                 { t: "Concern Analysis", d: "Strategic evaluation of long-term financial viability and stability.", icon: <Search className="text-brandAccent" /> },
                 { t: "Issue Remediation", d: "Actionable feedback to improve future reporting cycles.", icon: <PieChart className="text-brandAccent" /> }
               ].map((item, i) => (
                 <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h5 className="mb-2 font-bold text-brandDark dark:text-white">{item.t}</h5>
                    <p className="text-xs leading-relaxed text-brandNavy dark:text-white/80">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default IndependentSection