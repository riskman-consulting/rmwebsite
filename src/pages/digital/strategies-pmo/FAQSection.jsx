import React from 'react'

function FAQSection() {
  return (
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-12 text-3xl font-bold text-center font-heading">Strategic PMO FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How does RAID management work?", a: "It centrally tracks Risks, Assumptions, Issues, and Dependencies for proactive resolution." },
              { q: "Can PMO improve ROI?", a: "Yes, by integrating timeline, cost, and scope monitoring to prevent wastage." },
              { q: "What tools do you use for tracking?", a: "Utilization of heatmaps and capacity forecasting tools for resource optimization." },
              { q: "What is project health tracking?", a: "A milestone-based system to monitor project status and compliance." }
            ].map((faq, idx) => (
              <details key={idx} className="p-6 border rounded-lg cursor-pointer group bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
                <summary className="flex items-center justify-between font-bold list-none text-brandPrimary dark:text-brandGold">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="pt-4 mt-4 border-t opacity-80 border-borderLight dark:border-borderDark">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection