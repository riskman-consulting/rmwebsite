import { HelpCircle } from 'lucide-react'
import React from 'react'

function FaqSection() {
  return (
    <section className="py-24 container max-w-4xl">
        <h2 className="font-heading text-4xl font-bold mb-12 flex items-center">
          <HelpCircle className="mr-4 text-brandGold" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "Why Should Organizations Prioritize SOC Now?", a: "SOC is a baseline expectation for enterprise customers and regulators, directly affecting revenue, risk exposure, and board-level assurance." },
            { q: "How Do SOC Reports Support the Board and Audit Committee?", a: "They provide an independent view of control design and effectiveness, supporting conversations on risk appetite and third-party reliance." },
            { q: "Is SOC Only Relevant for Technology Companies?", a: "No, any service organization impacting customer financials or handling sensitive data benefits from SOC assurance." },
            { q: "How Often Do Reports Need Updating?", a: "Most organizations renew SOC reports annually to remain acceptable to customers and regulators." },
            { q: "Does SOC Overlap with Other Standards Like ISO 27001?", a: "There is an overlap. SOC complements frameworks like ISO 27001 and can often reuse similar controls and artefacts." }
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