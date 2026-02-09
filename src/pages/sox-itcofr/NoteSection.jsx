import React from 'react'

function NoteSection() {
  return (
     <section className="py-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-yellow-900/20 dark:to-amber-900/20">
        <div className="container">
          <div className="p-8 border-l-4 rounded-lg shadow-lg bg-white/60 dark:bg-surfaceDark/60 backdrop-blur-sm border-brandAccent">
            <p className="flex items-center gap-3 text-lg font-semibold text-brandDark dark:text-white">
              <span className="text-2xl">📌</span>
              <span className="italic">
                Please note: SOX & ICOFR related sections will be added here after receiving related content reference.
              </span>
            </p>
          </div>
        </div>
      </section>
  )
}

export default NoteSection