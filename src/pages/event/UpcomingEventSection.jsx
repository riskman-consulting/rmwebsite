import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Filter,
  Tag,
} from "lucide-react";

export default function UpcomingEvents() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  /* ---------------- DATA (unchanged) ---------------- */
  const events = [ /* SAME EVENTS ARRAY YOU SHARED */ ];

  const years = ["all", "2026", "2025"];
  const eventTypes = [...new Set(events.map((e) => e.type))];
  const types = ["all", ...eventTypes];

  const filteredEvents = events.filter((event) => {
    const yearMatch = selectedYear === "all" || event.year === selectedYear;
    const typeMatch = selectedType === "all" || event.type === selectedType;
    return yearMatch && typeMatch;
  });

  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            <Calendar className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              What’s Next
            </span>
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Upcoming Events & Activities
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Conferences, leadership meets, and conversations shaping the future
            of internal audit and risk management.
          </p>
        </div>

        {/* ================= FILTERS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-sm text-brandDark/60 dark:text-white/60">
            <Filter className="w-4 h-4" />
            Filter by
          </div>

          {/* Year */}
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                ${
                  selectedYear === year
                    ? "bg-brandGold text-brandDark"
                    : "bg-surfaceLight dark:bg-surfaceDark text-brandDark/70 dark:text-white/60 border border-borderLight dark:border-borderDark"
                }`}
            >
              {year === "all" ? "All Years" : year}
            </button>
          ))}

          {/* Type */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-full text-sm font-semibold
              bg-surfaceLight dark:bg-surfaceDark
              text-brandDark/70 dark:text-white/60
              border border-borderLight dark:border-borderDark
              focus:outline-none"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Types" : type}
              </option>
            ))}
          </select>
        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group rounded-[2.5rem] overflow-hidden
              bg-surfaceLight/80 dark:bg-surfaceDark/40
              border border-borderLight dark:border-borderDark
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
            >
              {/* Badges */}
              {event.status === "upcoming" && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-brandGold text-brandDark">
                  Upcoming
                </div>
              )}

              {event.role && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-brandGold/20 text-brandGold border border-brandGold/40">
                  {event.role}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full bg-brandGold/10 text-brandGold">
                  {event.type}
                </span>

                <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white line-clamp-2">
                  {event.title}
                </h3>

                {event.theme && (
                  <p className="mb-3 text-sm italic text-brandDark/60 dark:text-white/50">
                    “{event.theme}”
                  </p>
                )}

                <p className="mb-4 text-sm text-brandDark/70 dark:text-white/60 line-clamp-3">
                  {event.description}
                </p>

                {(event.highlights || event.focusAreas || event.keyTakeaways) && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-brandDark/50 dark:text-white/50">
                      <Tag className="w-3 h-3" />
                      Key Points
                    </div>
                    <ul className="space-y-1 text-xs text-brandDark/60 dark:text-white/60">
                      {(event.highlights ||
                        event.focusAreas ||
                        event.keyTakeaways)
                        ?.slice(0, 2)
                        .map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Meta */}
                <div className="space-y-2 mb-4 text-sm text-brandDark/60 dark:text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brandGold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brandGold" />
                    {event.location}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-bold text-brandGold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredEvents.length === 0 && (
          <div className="py-20 text-center text-brandDark/60 dark:text-white/60">
            <Calendar className="w-16 h-16 mx-auto mb-4 opacity-40" />
            <h3 className="text-xl font-bold mb-2">No Events Found</h3>
            <p>Try adjusting your filters.</p>
          </div>
        )}

        {/* ================= CTA ================= */}
        <div
          className="p-10 sm:p-14 rounded-[3rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          text-center"
        >
          <Users className="w-12 h-12 mx-auto mb-4 text-brandGold" />
          <h3 className="mb-4 text-2xl sm:text-3xl font-heading font-black text-brandDark dark:text-white">
            Want to Join Our Next Event?
          </h3>
          <p className="mb-6 text-brandDark/60 dark:text-white/60 max-w-2xl mx-auto">
            Subscribe and stay informed about upcoming conferences, leadership
            meets, and industry conversations.
          </p>
          <button className="px-10 py-4 font-bold rounded-full bg-brandGold text-brandDark hover:scale-105 transition-transform">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
