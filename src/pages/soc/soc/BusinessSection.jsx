import { BarChart4 } from 'lucide-react'
import React from 'react'

function BusinessSection() {
  return (
     <section className="py-20 bg-brandDark text-white">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Business Value for Leadership</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Revenue enablement through access to customers that mandate SOC.",
              "Faster sales cycles with pre-answered security and control questions.",
              "Fewer questionnaires and site visits from customers and auditors.",
              "Lower incident likelihood via stronger, well-tested controls.",
              "Clearer accountability and process discipline across functions."
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <BarChart4 className="text-brandGold flex-shrink-0" />
                <span className="text-lg font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BusinessSection