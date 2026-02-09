import React from 'react'

function ManagementSection() {
  return (
     <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold text-center font-heading">Change Management & Adoption </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center opacity-80">Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement. </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Change Impact Analysis", desc: "Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles.", id: 176, p: 177 },
              { title: "Training & Communication", desc: "Support your teams with detailed SOPs, targeted training sessions, and clear communication plans for a smooth transition period.", id: 178, p: 179 },
              { title: "Stakeholder Readiness", desc: "Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared for the upcoming system changes.", id: 180, p: 181 },
              { title: "Adoption KPI Monitoring", desc: "Track real-time usage metrics and key performance indicators to measure how effectively the organization is embracing new tools.", id: 182, p: 183 }
            ].map((item) => (
              <div key={item.id} className="p-8 transition-all border group bg-bgLight dark:bg-bgDark rounded-2xl hover:-translate-y-2 border-borderLight dark:border-borderDark">
                <h4 className="mb-4 font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ManagementSection