import React from 'react'

function ValueSection() {
  return (
        <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid gap-4">
                {[
                  { t: "Customer Assurance", d: "Provide clients with confidence that you can deliver critical services even during a major disaster.", color: "border-l-brandAccent" },
                  { t: "Regulatory Compliance", d: "Meet industry-specific requirements for uptime and service availability, avoiding legal penalties.", color: "border-l-brandPrimary" },
                  { t: "Competitive Advantage", d: "Position your organization as a reliable partner compared to less-prepared competitors.", color: "border-l-brandAccent" }
                ].map((val, i) => (
                  <div key={i} className={`p-6 border-l-4 ${val.color} bg-bgLight rounded-r-lg shadow-sm`}>
                    <h5 className="font-bold text-lg mb-1">{val.t}</h5>
                    <p className="text-gray-600 text-sm">{val.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">The Value of Continuity Planning</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Organizations that prioritize resilience are better positioned to protect their market share and maintain client confidence during periods of global or local instability.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ValueSection