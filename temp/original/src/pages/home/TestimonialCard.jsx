function TestimonialCard({ data }) {
  return (
    <div className="relative rounded-3xl bg-white dark:bg-surfaceDark p-8 shadow-xl border border-gray-200 dark:border-borderDark">

      {/* Quote */}
      <div className="absolute top-6 right-6 text-brandGold/10 dark:text-brandAccent/10">
        <Quote size={72} fill="currentColor" />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={data.image}
          alt={data.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-black text-brandDark dark:text-white">
            {data.name}
          </h3>
          <p className="text-sm font-bold text-brandGold dark:text-brandAccent">
            {data.role}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className="text-lg font-semibold italic leading-relaxed text-brandDark dark:text-white/80 mb-8">
        “{data.text}”
      </p>

      {/* Footer */}
      <div className="flex justify-end">
        <div className="w-10 h-10 rounded-full border-2 border-brandGold/20 flex items-center justify-center text-brandGold dark:border-brandAccent/20 dark:text-brandAccent">
          <ArrowUpRight size={18} />
        </div>
      </div>

    </div>
  )
}
