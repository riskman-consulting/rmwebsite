import { motion } from "framer-motion";
import { TIMELINE_DATA } from "./data";


export default function Timeline({ perspective = "first" }) {
  const data = TIMELINE_DATA[perspective];

  return (
    <section className="relative bg-[#f5f5f4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-slate-800">
            How it Began
          </h2>
          <p className="text-slate-500 mt-2">
            A history of professional progress
          </p>
        </div>

        {/* Diagonal Line */}
        <div className="absolute left-0 right-0 top-[260px] h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent rotate-[-12deg]" />

        {/* Timeline Items */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-28">
          {data.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="bg-white shadow-xl max-w-lg w-full p-6 relative">
                  {/* Year */}
                  <span className="text-sm text-slate-400 font-medium">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-slate-800 mt-1">
                    {item.title}
                  </h3>

                  {/* Image */}
                  <div className="mt-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover grayscale"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-1 text-sm text-slate-500">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>— {ach}</li>
                    ))}
                  </ul>

                  {/* Icon Marker */}
                  <div className="absolute -top-6 left-6 bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                    <Icon size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
