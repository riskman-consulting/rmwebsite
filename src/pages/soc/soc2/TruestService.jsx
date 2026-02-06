import { CheckCircle } from 'lucide-react'
import React from 'react'

function TruestService() {
  return (
     <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">Trust Services Criteria</h2>
          <div className="h-1.5 w-24 bg-brandAccent mx-auto rounded-full" />
        </div>
        <div className="container">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Security", desc: "Protection against unauthorized access and use." },
              { title: "Availability", desc: "Uptime, resilience, disaster recovery capabilities." },
              { title: "Processing Integrity", desc: "Accurate, complete, timely, authorized processing." },
              { title: "Confidentiality", desc: "Protection of sensitive information from disclosure." },
              { title: "Privacy", desc: "Handling personal data in line with regulations." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-surfaceLight dark:bg-surfaceDark shadow-sm hover:shadow-xl transition-all border border-borderLight dark:border-borderDark flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10 flex items-center justify-center mb-6 text-brandPrimary dark:text-brandGold">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TruestService