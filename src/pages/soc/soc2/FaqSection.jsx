import { HelpCircle } from 'lucide-react'
import React from 'react'

function FaqSection() {
  return (
     <section className=" py-14 md:py-20 container px-6 lg:px-20 max-w-4xl">
        <h2 className="font-heading text-4xl font-bold mb-12 flex items-center">
          <HelpCircle className="mr-4 text-brandGold" /> Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            { q: "Why Do Enterprise Customers Insist on SOC 2 Type II?", a: "Type II proves that controls not only exist but have operated effectively over time, which is crucial for always-on services." },
            { q: "Can We Limit SOC 2 Scope to Specific Products?", a: "Yes. You can scope SOC 2 to particular services or environments, clearly described in the system description." },
            { q: "Does SOC 2 Cover Data Residency and Privacy Laws?", a: "Privacy criteria can address personal data handling; however, SOC 2 should be aligned with specific regulatory requirements separately." },
            { q: "What Are Common Gaps Found During SOC 2 Readiness?", a: "Missing policies, inconsistent access reviews, manual processes lacking evidence, and incomplete vendor risk management are typical gaps." },
            { q: "How Do We Maintain SOC 2 Between Audits?", a: "By operating controls continuously, regularly reviewing evidence, and tracking remediation of issues throughout the year." }
          ].map((faq, i) => (
            <details key={i} className="group p-6 bg-surfaceLight dark:bg-surfaceDark rounded-xl border border-borderLight dark:border-borderDark">
              <summary className="list-none font-bold text-lg cursor-pointer flex justify-between items-center group-open:text-brandPrimary dark:group-open:text-brandGold transition-colors">
                {faq.q}
                <span className="transition-transform group-open:rotate-180">+</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-borderLight dark:border-borderDark pt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
  )
}

export default FaqSection