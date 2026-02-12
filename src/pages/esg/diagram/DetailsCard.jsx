import React from "react"

const DetailsCard = ({ stakeholder, onClear }) => {
  if (!stakeholder) return null

  return (
    <div className="w-full p-8 transition-all duration-500 transform bg-white shadow-2xl rounded-3xl border-slate-100 animate-in fade-in slide-in-from-right-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
          Stakeholder Details
        </span>
        <button
          onClick={onClear}
          className="px-6 py-2 text-[11px] font-bold tracking-[0.2em] text-slate-600 uppercase border-2 border-slate-300 rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
        >
          Clear
        </button>
      </div>

      {/* Title Section with LARGER Icon */}
      <div className="flex items-start gap-6 pb-8 mb-8 border-b-2 border-slate-100">
        <div
          className="flex items-center justify-center w-16 h-16 text-4xl font-black text-white rounded-full shadow-xl shrink-0"
          style={{ backgroundColor: stakeholder.color || '#455A64' }}
        >
          {stakeholder.iconText || stakeholder.name?.[0] || '?'}
        </div>
        <div className="flex-1 pt-2">
          <h2 className="mb-2 text-2xl font-black leading-tight capitalize text-slate-900">
            {stakeholder.name}
          </h2>
          <p className="capitalize text-slate-500">
            {stakeholder.title || stakeholder.subtitle}
          </p>
        </div>
      </div>

      {/* Description - LARGER TEXT */}
      <p className="mb-8 text-sm font-medium leading-relaxed text-slate-600">
        {stakeholder.description}
      </p>

      {/* Tags - BIGGER */}
      <div className="flex flex-wrap items-start justify-center gap-3 ">
        {(stakeholder.tags || stakeholder.labels || []).map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="px-6 py-2 text-base font-bold text-white transition-transform rounded-full shadow-md hover:scale-105"
            style={{ backgroundColor: stakeholder.color || '#455A64' }}
          >
            {tag} 
          </span>
        ))}
      </div>
    </div>
  )
}

export default DetailsCard