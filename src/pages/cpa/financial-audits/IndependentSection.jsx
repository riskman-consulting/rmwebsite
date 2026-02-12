import { FileCheck, PieChart, Search } from 'lucide-react'
import React from 'react'

function IndependentSection() {
  return (
     <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Independent Opinion & Reporting</h2>
               <p className="text-gray-600">RiskMan delivers definitive audit opinions that serve as a bedrock of trust for investors and regulatory bodies.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { t: "Transparent Disclosures", d: "Clear communication of financial health and potential risks.", icon: <FileCheck className="text-brandAccent" /> },
                 { t: "Concern Analysis", d: "Strategic evaluation of long-term financial viability and stability.", icon: <Search className="text-brandAccent" /> },
                 { t: "Issue Remediation", d: "Actionable feedback to improve future reporting cycles.", icon: <PieChart className="text-brandAccent" /> }
               ].map((item, i) => (
                 <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h5 className="font-bold mb-2">{item.t}</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default IndependentSection