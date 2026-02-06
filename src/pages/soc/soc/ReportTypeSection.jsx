import React from 'react'
import { useNavigate } from 'react-router-dom'

function ReportTypeSection() {
    const navigator = useNavigate()
  return (
     <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">SOC Report Types at a Glance</h2>
          <div className="overflow-x-auto rounded-2xl border border-borderLight dark:border-borderDark shadow-2xl">
            <table className="w-full text-left border-collapse bg-surfaceLight dark:bg-surfaceDark">
              <thead>
                <tr className="bg-brandPrimary text-white">
                  <th className="p-6 font-heading uppercase tracking-wider">Report Type</th>
                  <th className="p-6 font-heading uppercase tracking-wider">Primary Focus</th>
                  <th className="p-6 font-heading uppercase tracking-wider">Typical Audience</th>
                  <th className="p-6 font-heading uppercase tracking-wider">Key Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderLight dark:divide-borderDark">
                {[
                  { type: "SOC 1", focus: "Controls impacting customer financial reporting", audience: "CFOs, controllers, external auditors", outcome: "Reduced audit friction, SOX support" },
                  { type: "SOC 2", focus: "Security and Trust Services Criteria", audience: "CISOs, risk and compliance teams", outcome: "Deeper assurance on security and resilience" },
                  { type: "SOC 3", focus: "High-level public assurance", audience: "Customers, partners, market", outcome: "Visible proof of robust controls" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-brandLight/50 dark:hover:bg-brandDark/50 transition-colors">
                    <td onClick={()=>navigator(`soc-${i+1}`)} className="p-6 font-bold cursor-pointer text-brandPrimary dark:text-brandGold">{row.type}</td>
                    <td className="p-6">{row.focus}</td>
                    <td className="p-6 text-gray-500 dark:text-gray-400">{row.audience}</td>
                    <td className="p-6 font-semibold">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
  )
}

export default ReportTypeSection