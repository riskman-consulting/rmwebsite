import { HelpCircle } from 'lucide-react'
import React from 'react'

function FaqSection() {
  return (
    <section className="container max-w-4xl py-16">
        <h2 className="flex items-center mb-12 text-4xl font-bold font-heading">
          <HelpCircle className="mr-4 text-brandGold" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "What Is the Difference Between SOC 1, SOC 2 and SOC 3?", a: "SOC 1 covers controls relevant to your customers’ financial reporting. SOC 2 covers security, availability, processing integrity, confidentiality and privacy. SOC 3 is a general-use summary of a SOC 2 examination that can be shared publicly." },
            { q: "What Is the Difference Between Type 1 and Type 2 Reports?", a: "A Type 1 report assesses whether controls are suitably designed at a point in time. A Type 2 report also tests whether those controls operated effectively over a period, typically 6 to 12 months." },
            { q: "Who Issues the SOC Report?", a: "SOC reports are issued by an independent licensed CPA firm. RiskMan prepares you for the examination, helps remediate gaps and coordinates with the CPA firm through fieldwork." },
            { q: "How Do We Know Which SOC Report We Need?", a: "Start from who is asking and why. Customers’ financial auditors usually ask for SOC 1, while customers assessing security and data handling usually ask for SOC 2." },
            { q: "Is SOC a One-Time Exercise?", a: "No. Most customers expect a current report every year, so SOC is run as an annual cycle with ongoing evidence collection and control monitoring." }
          ].map((faq, i) => (
            <details key={i} className="p-6 border group bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark">
              <summary className="flex items-center justify-between text-lg font-bold list-none cursor-pointer group-open:text-brandPrimary dark:group-open:text-brandGold">
                {faq.q}
                <span className="transition-transform group-open:rotate-180">+</span>
              </summary>
              <p className="pt-4 mt-4 leading-relaxed text-gray-600 border-t dark:text-gray-400 border-borderLight dark:border-borderDark">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
  )
}

export default FaqSection
