
 
 <section className="z-10 py-20 border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl">
              Our <span className="text-brandPrimary dark:text-brandGold">Change Management</span> Approach
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">
              We manage the people side of change so RiskMan is adopted smoothly and delivers sustained value across the organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📊",
                title: "Change Impact Assessment",
                desc: "Analyzes how new processes and systems affect roles, behaviors, and departmental workflows.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "👥",
                title: "Stakeholder Identification and Engagement",
                desc: "Identifies key stakeholders, assesses their influence and impact, and defines engagement strategies.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "📢",
                title: "Communication Planning",
                desc: "Develops targeted messages, channels, and timelines to keep all audiences informed and aligned.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: "🎓",
                title: "Training and Enablement",
                desc: "Designs and delivers focused training, SOPs, and job aids to support user readiness and competence.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "🛡️",
                title: "Resistance Management",
                desc: "Monitors adoption, addresses concerns through feedback loops, and manages resistance proactively.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "🔄",
                title: "Sustain and Reinforce Change",
                desc: "Tracks adoption metrics, recognizes early adopters, and embeds improvements into ongoing business practices.",
                color: "from-teal-500 to-teal-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden transition-all duration-300 border-2 shadow-lg group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-8">
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-3xl transition-transform rounded-full shadow-inner bg-gradient-to-br from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-bgDark group-hover:scale-110">
                    {item.icon}
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-brandNavy dark:text-brandGold group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {item.title}
                  </h3>
                  
                  <p className="leading-relaxed opacity-80">
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
