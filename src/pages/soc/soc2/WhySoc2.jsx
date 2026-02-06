import React from 'react'

function WhySoc2() {
  return (
     <section className="py-20 bg-brandDark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center underline decoration-brandGold decoration-4 underline-offset-8">
              Why SOC 2 Is Now a Sales Prerequisite
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Enterprise buyers make SOC 2 Type II a condition for onboarding.",
                "Shortens security due diligence and reduces long questionnaires.",
                "Signals a mature security posture to boards and investors.",
                "Supports vendor risk management and cyber insurance."
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-brandNavy/50 rounded-lg border border-white/10">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-brandGold rounded-full flex items-center justify-center text-brandDark font-bold text-xs">
                    {i+1}
                  </div>
                  <p className="text-gray-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  )
}

export default WhySoc2