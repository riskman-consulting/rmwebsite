import React, { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  X,
  Info,
  Share2,
  BookmarkPlus,
  Sparkles,
  ChevronRight,
  Clock
} from "lucide-react"

import IIALogoImg from "../../assets/iia-logo/iia-logo.png";

/* ================= UTILITY FUNCTIONS ================= */

const parseEventEndDate = (dateString) => {
  try {
    const yearMatch = dateString.match(/\d{4}/)
    if (!yearMatch) return null
    const year = yearMatch[0]

    const monthMatch = dateString.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i)
    if (!monthMatch) return null
    const monthName = monthMatch[0]

    const dayMatch = dateString.match(/(\d+)[–-](\d+)|(\d+)/)
    if (!dayMatch) return null
    
    const endDay = dayMatch[2] || dayMatch[3] || dayMatch[1]
    const dateStr = `${monthName} ${endDay}, ${year}`
    const date = new Date(dateStr)
    date.setHours(23, 59, 59, 999)
    
    return date
  } catch (error) {
    console.error('Error parsing date:', dateString, error)
    return null
  }
}

const isEventUpcoming = (event) => {
  const endDate = parseEventEndDate(event.date)
  if (!endDate) return true
  const now = new Date()
  return endDate >= now
}

const calculateTimeRemaining = (dateString) => {
  try {
    const yearMatch = dateString.match(/\d{4}/)
    if (!yearMatch) return null
    const year = yearMatch[0]

    const monthMatch = dateString.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i)
    if (!monthMatch) return null
    const monthName = monthMatch[0]

    const dayMatch = dateString.match(/(\d+)/)
    if (!dayMatch) return null
    const startDay = dayMatch[1]

    const startDate = new Date(`${monthName} ${startDay}, ${year}`)
    startDate.setHours(0, 0, 0, 0)
    
    const now = new Date()
    const diff = startDate - now

    if (diff < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds, isLive: false }
  } catch (error) {
    return null
  }
}

/* ================= DATA ================= */
export const UPCOMING_EVENTS = [
  {
    category: "Conference",
    title: "IIA-Bangalore Conference",
    date: "12–13 February 2026",
    location: "Bangalore, India",
  },
  // {
  //   category: "Conference",
  //   title: "IIA-Chennai Conference",
  //   date: "27–28 February 2026",
  //   location: "Chennai, India",
  // },
  {
    category: "Conference",
    title: "IIA-Kolkata Conference",
    date: "14 March 2026",
    location: "Kolkata, India",
  },
  {
    category: "Conference",
    title: "IIA-Hyderabad Conference",
    date: "11 April 2026",
    location: "Hyderabad, India",
  },
];

/* ================= SUB-COMPONENTS ================= */

const CountdownTimer = ({ dateString }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(dateString))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(dateString))
    }, 1000)
    return () => clearInterval(timer)
  }, [dateString])

  if (!timeLeft) return null

  if (timeLeft.isLive) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
        <div className="relative flex items-center justify-center w-2 h-2">
          <div className="absolute w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="relative w-2 h-2 bg-white rounded-full"></div>
        </div>
        <span className="text-xs font-bold tracking-wide text-white uppercase">Event Live Now</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hrs" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center p-2 border rounded-xl bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700 shadow-sm"
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
    <div className="absolute transition duration-500 -inset-1 bg-gradient-to-r from-brandGold to-brandGoldDark rounded-2xl blur opacity-20 group-hover/logo:opacity-40"></div>
    <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition-transform duration-300 bg-white dark:bg-slate-900 rounded-2xl group-hover/logo:scale-105 shadow-sm">
      <img
        src={IIALogoImg}
        alt="IIA India Logo"
        className="object-contain w-10 h-10 p-1"
      />
    </div>
  </div>
)

/**
 * Dynamically pick grid class based on event count so we never have orphan columns
 * 1 → 1-col, 2 → 2-col, 3 → 3-col, 4+ → 2-col on sm / 4-col on lg
 */
const getGridClass = (count) => {
  if (count === 1) return "grid gap-6 max-w-sm mx-auto"
  if (count === 2) return "grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto"
  if (count === 3) return "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  return "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
}

const EventCard = ({ event, index, onClick, totalCount }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}
    onClick={() => onClick(event)}
    className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-brandGold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brandGold/10 cursor-pointer"
  >
    {/* Top accent line */}
    <div className="h-1 w-full bg-gradient-to-r from-brandGold/30 via-brandGold to-brandGold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {event.isFeatured && (
      <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-3 py-1 bg-brandGold text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
        <Star className="w-3 h-3 fill-current" />
        Featured
      </div>
    )}

    <div className="relative flex flex-col h-full p-6 sm:p-7">
      {/* Logo + Category row */}
      <div className="flex items-start justify-between mb-6">
        <IIALogo />
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brandGold/80 bg-brandGold/8 px-2 py-0.5 rounded-full border border-brandGold/20">
            {event.category}
          </span>
          {event.registrationStatus && (
            <span
              className={`text-[9px] font-bold uppercase tracking-wider ${
                event.registrationStatus === "Open"
                  ? "text-green-500"
                  : event.registrationStatus === "Limited"
                  ? "text-amber-500"
                  : "text-rose-500"
              }`}
            >
              {event.registrationStatus}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-5 text-[14px] md:text-[18px]  font-black leading-tight transition-colors duration-300  text-slate-900 dark:text-white group-hover:text-brandGold">
        {event.title}  
      </h3>

      {/* Date & Location */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 p-2 rounded-lg bg-brandGold/8 border border-brandGold/15 text-brandGold">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
              Date
            </p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {event.date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 p-2 rounded-lg bg-brandGold/8 border border-brandGold/15 text-brandGold">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
              Location
            </p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {event.location}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 dark:border-slate-800 mb-5" />

      {/* Countdown */}
      <div className="mt-auto">
        <div className="flex items-center gap-1.5 mb-3">
          <Clock className="w-3 h-3 text-brandGold" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Time Remaining
          </span>
        </div>
        <CountdownTimer dateString={event.date} />
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
  const [selectedEvent, setSelectedEvent] = useState(null)

  const upcomingEvents = useMemo(() => {
    return UPCOMING_EVENTS.filter(isEventUpcoming)
  }, [])

  if (upcomingEvents.length === 0) {
    return (
      <div
        id="upcoming-events"
        className="relative pt-16 pb-10 overflow-hidden lg:pt-24 lg:pb-14 bg-slate-50 dark:bg-surfaceDark"
      >
        <div className="container relative px-6 mx-auto lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white border rounded-full shadow-sm dark:bg-slate-900 border-borderLight dark:border-borderDark"
            >
              <div className="p-1 rounded-full bg-brandGold/10 text-brandGold">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandGold">
                Events
              </span>
            </motion.div>
            <h2 className="mb-4 text-3xl font-black lg:text-5xl text-brandDark dark:text-white">
              No Upcoming Events
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Check back soon for our next conference schedule.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      id="upcoming-events"
      className="relative pt-16 pb-10 overflow-hidden lg:pt-24 lg:pb-14 bg-slate-50 dark:bg-surfaceDark"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandBlue/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#003366 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative px-6 mx-auto lg:px-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10 text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-6 bg-white border rounded-full shadow-sm dark:bg-slate-900 border-borderLight dark:border-borderDark"
          >
            <div className="p-1 rounded-full bg-brandGold/10 text-brandGold">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandGold">
              Strategic Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-black text-brandDark dark:text-white mb-4 tracking-tight leading-[1.1]"
          >
            Knowledge &{" "}
            <span className="italic text-brandGold font-heading">
              Networking
            </span>
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

        {/* Events Grid — dynamically sized to avoid orphan columns */}
        <div className={getGridClass(upcomingEvents.length)}>
          {upcomingEvents.map((event, idx) => (
            <EventCard
              key={event.title}
              event={event}
              index={idx}
              onClick={setSelectedEvent}
              totalCount={upcomingEvents.length}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-6 mt-10"
        />
      </div>
    </div>
  )
}

export default UpcomingEventsSection