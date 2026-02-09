import React from 'react'

function ImprovementSection() {
  return (
    <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold font-heading">Post Go-Live Hypercare </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Hypercare Transition Models </strong> Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandGold"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandGold">Issue Trend Analytics </strong> Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability and performance. </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold font-heading">Continuous Improvement </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">End-User Feedback Loops </strong> Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs. </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-brandAccent"></div>
                  <p className="text-sm opacity-90"><strong className="block mb-1 text-brandAccent">Value Realization Reports </strong> Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ImprovementSection