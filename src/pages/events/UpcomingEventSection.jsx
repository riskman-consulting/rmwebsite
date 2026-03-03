import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Sparkles, Clock } from "lucide-react"

import IIALogoImg from "../../assets/iia-logo/iia-logo.png"
import { useEventsStore } from "../../store/event"

/* ================= UTILITY ================= */

const calculateTimeRemaining = (eventDate, endDate) => {
  const start = new Date(eventDate)
  const end = endDate ? new Date(endDate) : new Date(eventDate)
  const now = new Date()

  if (now >= start && now <= end) return { isLive: true }

  const diff = start - now
  if (diff <= 0) return null

  return {
    isLive: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

const formatDisplayDate = (eventDate, endDate) => {
  const start = new Date(eventDate)
  const opts = { day: "numeric", month: "long", year: "numeric" }
  if (!endDate) return start.toLocaleDateString("en-IN", opts)
  const end = new Date(endDate)
  if (start.toDateString() === end.toDateString())
    return start.toLocaleDateString("en-IN", opts)
  return `${start.toLocaleDateString("en-IN", { day: "numeric", month: "long" })} – ${end.toLocaleDateString("en-IN", opts)}`
}

const getGridClass = (count) => {
  if (count === 1) return "grid gap-6 max-w-sm mx-auto"
  if (count === 2) return "grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto"
  if (count === 3) return "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  return "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
}

/* ================= SUB-COMPONENTS ================= */

const CountdownTimer = ({ eventDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(eventDate, endDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(eventDate, endDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [eventDate, endDate])

  if (!timeLeft) return (
    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Event Concluded</span>
  )

  if (timeLeft.isLive) return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit">
      <div className="relative flex items-center justify-center w-2 h-2">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-ping" />
        <div className="relative w-2 h-2 bg-white rounded-full" />
      </div>
      <span className="text-xs font-bold tracking-wide text-white uppercase">Live Now</span>
    </div>
  )

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hrs" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center py-2 px-1 border rounded-xl bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700 shadow-sm"
        >
          <span className="text-base font-black tabular-nums text-brandGold leading-none mb-1">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

const IIALogo = () => (
  <div className="relative group/logo">
    <div className="absolute transition duration-500 -inset-1 bg-gradient-to-r from-brandGold to-brandGoldDark rounded-2xl blur opacity-20 group-hover/logo:opacity-40" />
    <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition-transform duration-300 bg-white dark:bg-slate-900 rounded-2xl group-hover/logo:scale-105 shadow-sm">
      <img src={IIALogoImg} alt="IIA India Logo" className="object-contain w-10 h-10 p-1" />
    </div>
  </div>
)

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-brandGold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brandGold/10"
  >
    {/* Top accent line */}
    <div className="h-1 w-full bg-gradient-to-r from-brandGold/30 via-brandGold to-brandGold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative flex flex-col h-full p-6 sm:p-7">
      {/* Logo + Category */}
      <div className="flex items-start justify-between mb-6">
        <IIALogo />
        {event.category && (
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brandGold/80 bg-brandGold/5 px-2 py-0.5 rounded-full border border-brandGold/20">
            {event.category}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-5 text-[15px] md:text-[17px] font-black leading-tight transition-colors duration-300 text-slate-900 dark:text-white group-hover:text-brandGold">
        {event.title}
      </h3>

      {/* Date & Location */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 p-2 rounded-lg bg-brandGold/5 border border-brandGold/15 text-brandGold">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">Date</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {formatDisplayDate(event.eventDate, event.endDate)}
            </p>
          </div>
        </div>

        {event.location && (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 p-2 rounded-lg bg-brandGold/5 border border-brandGold/15 text-brandGold">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">Location</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{event.location}</p>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 dark:border-slate-800 mb-5" />

      {/* Countdown */}
      <div className="mt-auto">
        <div className="flex items-center gap-1.5 mb-3">
          <Clock className="w-3 h-3 text-brandGold" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Time Remaining</span>
        </div>
        <CountdownTimer eventDate={event.eventDate} endDate={event.endDate} />
      </div>
    </div>

    {/* Bottom hover bar */}
    <div className="h-1 w-full bg-slate-100 dark:bg-slate-800">
      <div className="w-0 h-full transition-all duration-700 ease-in-out group-hover:w-full bg-gradient-to-r from-brandGold to-brandGoldDark" />
    </div>
  </motion.div>
)

/* ================= MAIN COMPONENT ================= */

const UpcomingEventsSection = () => {
  const { fetchUpcomingEvents, upcomingEvents } = useEventsStore()

  useEffect(() => {
    fetchUpcomingEvents()
  }, [])

  if (!upcomingEvents?.length) return null

  return (
    <div id="upcoming-events" className="relative py-24 overflow-hidden lg:py-32 bg-slate-50 dark:bg-surfaceDark">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandBlue/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#003366 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <div className="container relative px-6 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white border rounded-full shadow-sm dark:bg-slate-900 border-borderLight dark:border-borderDark"
          >
            <div className="p-1 rounded-full bg-brandGold/10 text-brandGold">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandGold">Strategic Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-black text-brandDark dark:text-white mb-6 tracking-tight leading-[1.1]"
          >
            Knowledge &{" "}
            <span className="italic text-brandGold font-heading">Networking</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed lg:text-xl text-slate-600 dark:text-slate-400"
          >
            Advance your career and stay ahead of global audit trends by joining
            our premier conferences and executive forums across the nation.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className={getGridClass(upcomingEvents.length)}>
          {upcomingEvents.map((event, idx) => (
            <EventCard
              key={event._id}
              event={event}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsSection
