import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar } from "react-icons/fi";

const EventsStorySection = ({ events }) => {
  return (
    <section className="bg-surfaceLight dark:bg-surfaceDark">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: index * 0.05 }}
          className="relative"
        >
          {/* ================= HERO IMAGE ================= */}
          <div className="relative h-[70vh] w-full overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 object-cover w-full h-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/90 via-[#001A33]/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex items-end h-full">
              <div className="container pb-16">
                <span className="inline-block mb-4 bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                  {event.type || "Experience"}
                </span>

                <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  {event.title}
                </h2>

                <div className="flex flex-wrap gap-6 mt-6 text-sm font-black tracking-widest uppercase">
                  <span className="flex items-center gap-2 text-[#FFC000]">
                    <FiMapPin /> {event.location}
                  </span>
                  <span className="flex items-center gap-2 text-white/70">
                    <FiCalendar /> {event.date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="container grid py-20 lg:grid-cols-12 gap-14">
            {/* LEFT: Narrative */}
            <div className="lg:col-span-5">
              <p className="text-lg text-[#001F3F]/80 dark:text-white/70 leading-relaxed italic mb-10">
                “{event.shortDesc}”
              </p>

              <div className="space-y-4">
                {Array.isArray(event.fullDesc) &&
                  event.fullDesc.slice(0, 5).map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FFC000]" />
                      <p className="text-[#001F3F]/80 dark:text-white/80 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* RIGHT: Visible Gallery */}
            <div className="lg:col-span-7">
              {event.gallery && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {event.gallery.slice(0, 6).map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-[4/3] overflow-hidden rounded-3xl border border-[#003366]/10 dark:border-white/10 shadow-lg"
                    >
                      <img
                        src={img}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#FFC000]/40 to-transparent" />
        </motion.div>
      ))}
    </section>
  );
};

export default EventsStorySection;
