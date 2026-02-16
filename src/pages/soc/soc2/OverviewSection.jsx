
import { Server, Shield, Users,Lock } from 'lucide-react'
import React from 'react'

function OverviewSection() {
  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">SOC 2 In One View</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                SOC 2 focuses on security plus the selected Trust Services Criteria—availability, processing integrity, confidentiality, and privacy. Security is mandatory and included in every SOC 2 report.
              </p>
              <div className="p-4 rounded-lg bg-brandLight dark:bg-brandDark border-l-4 border-brandGold">
                <p className="italic font-medium">
                  "This framework is best suited for SaaS, cloud, data processing, and technology-driven services. The output is a detailed report for customers’ security and risk teams under NDA."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-brandPrimary dark:text-brandGold" />
                <h4 className="font-bold">SaaS</h4>
              </div>
              <div className="p-6 rounded-xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-center">
                <Server className="h-10 w-10 mx-auto mb-3 text-brandPrimary dark:text-brandGold" />
                <h4 className="font-bold">Cloud</h4>
              </div>
              <div className="p-6 rounded-xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-brandPrimary dark:text-brandGold" />
                <h4 className="font-bold">Data Centers</h4>
              </div>
              <div className="p-6 rounded-xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-center">
                <Lock className="h-10 w-10 mx-auto mb-3 text-brandPrimary dark:text-brandGold" />
                <h4 className="font-bold">Tech Services</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OverviewSection