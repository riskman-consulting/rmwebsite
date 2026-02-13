import { HelpCircle } from 'lucide-react'
import React from 'react'

function FaqSection() {
  return (
    <section className="py-14 md:py-20 container px-6 lg:px-20 max-w-4xl">
        <h2 className="font-heading text-4xl font-bold mb-12 flex items-center">
          <HelpCircle className="mr-4 text-brandGold" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "When Is SOC 1 More Appropriate Than SOC 2?", a: "SOC 1 is appropriate when your services can materially affect customers’ financial statements, and their auditors rely on your controls." },
            { q: "How Does SOC 1 Support Our Customers’ SOX Programs?", a: "Your SOC 1 report allows customer auditors to rely on your controls instead of re-testing them extensively in your environment." },
            { q: "Do All Services We Offer Need to Be in Scope?", a: "No. Scope is limited to services and systems that impact customers’ financial reporting, agreed with auditors and key clients." },
            { q: "What Is Typical SOC 1 Control Areas?", a: "Processing accuracy and completeness, logical access, change management, incident handling, and reconciliations for in-scope systems." },
            { q: "Is SOC 1 A One-Time Project?", a: "No. It is an annual cycle that embeds control discipline into ongoing operations and relationships with customers’ auditors." }
          ].map((faq, i) => (
            <details key={i} className="group p-6 bg-surfaceLight dark:bg-surfaceDark rounded-xl border border-borderLight dark:border-borderDark">
              <summary className="list-none font-bold text-lg cursor-pointer flex justify-between items-center group-open:text-brandPrimary dark:group-open:text-brandGold">
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