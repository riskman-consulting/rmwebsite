import { ExternalLink, HelpCircle } from 'lucide-react'
import React from 'react'

function FaqSection() {
  return (
     <section className="py-24 container">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-heading text-3xl font-bold mb-10 flex items-center">
            <HelpCircle className="mr-3 text-brandGold" /> Frequently Asked Questions
          </h2>
          <div className="divide-y divide-borderLight dark:divide-borderDark">
            {[
              { q: "Is SOC 3 Enough on Its Own for Enterprise Customers?", a: "Generally no. Enterprise customers still request SOC 2 or SOC 1 for detailed assessment; SOC 3 is a complementary public signal." },
              { q: "Can We Publish SOC 3 On Our Public Website?", a: "Yes. SOC 3 is designed for unrestricted distribution and is commonly posted on websites and marketing materials." },
              { q: "How Does SOC 3 Relate to SOC 2?", a: "SOC 3 usually relies on the same underlying controls and criteria as SOC 2 but presents them in summarized form." },
              { q: "What Level of Detail Does SOC 3 Include?", a: "It includes an overview of services, applicable Trust Services Criteria, and the auditor’s opinion, without detailed testing procedures." },
              { q: "How Often Should SOC 3 Be Refreshed?", a: "Typically every year, aligned with your SOC examination cycle, to maintain credibility." }
            ].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="list-none font-bold text-lg cursor-pointer flex justify-between items-center group-open:text-brandPrimary dark:group-open:text-brandGold">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* FINAL CTA CARD */}
        <div className="bg-gradient-to-br from-brandPrimary to-brandNavy rounded-[3rem] p-10 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Make Independent Assurance Part of Your Brand Story</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Use SOC 3 to communicate that your controls are examined and trusted—without overwhelming stakeholders with technical detail.
            </p>
            <button className="bg-white text-brandPrimary hover:bg-brandGold hover:text-brandDark px-12 py-5 rounded-full font-black text-lg transition-all flex items-center mx-auto">
              Plan Your SOC 3 Rollout <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
          {/* Subtle branding accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandGold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>
      </section>
  )
}

export default FaqSection