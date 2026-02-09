import React from 'react'

function RiskSection() {
  return (
    <section className="py-20 text-white bg-brandPrimary dark:bg-brandDark dark:text-brandLight border-y border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold font-heading">Resource Planning & Tracking</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-brandGold">Role-Based Allocation Matrix</h4>
                  <p className="text-sm opacity-90">Deploy specialized matrices to map the right talent to specific project roles, ensuring high-quality task execution.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brandGold">Capacity Forecasting Tools</h4>
                  <p className="text-sm opacity-90">Use utilization heatmaps and advanced forecasting to predict resource needs and prevent team burnout or bottlenecks.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold font-heading text-brandGold">Risk Mitigation Strategies</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Scoring & Prioritization Models</h4>
                  <p className="text-sm opacity-90">Apply quantitative models to score and prioritize risks, focusing resources on the most critical project impacts.</p>
                </div>
                <div>
                  <h4 className="font-bold">Structured Steering Dashboards</h4>
                  <p className="text-sm opacity-90">Provide leadership with real-time visibility through professional steering decks and interactive dashboards for data-backed decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RiskSection