import { BookOpen, Search, ShieldCheck } from 'lucide-react'
import React from 'react'

function OperationSection() {
  return (
     <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">Operational Resilience and Reporting</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Breach Notification", d: "Designs 72-hour incident response plans for immediate reporting to the Data Protection Board.", icon: <ShieldCheck className="mx-auto mb-4 text-brandPrimary" /> },
              { t: "Privacy by Design", d: "Embedding data protection into your product development lifecycle as a core functional requirement.", icon: <Search className="mx-auto mb-4 text-brandPrimary" /> },
              { t: "Employee Training", d: "Delivering high-level sensitization to internal teams to prevent human-error breaches.", icon: <BookOpen className="mx-auto mb-4 text-brandPrimary" /> }
            ].map((res, i) => (
              <div key={i} className="text-center p-8 hover:bg-brandLight rounded-2xl transition-colors">
                {res.icon}
                <h4 className="font-bold text-xl mb-2">{res.t}</h4>
                <p className="text-sm text-gray-600">{res.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OperationSection