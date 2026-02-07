// import React from "react";
// import { Calendar, MapPin, Flag, Shield, Users, Network } from "lucide-react";

// export default function UpcomingEventsSection() {
//   const upcomingEvents = [
//     {
//       icon: Flag,
//       category: "Conference",
//       title: "IIA-Bangalore Conference",
//       date: "12–13 February 2026",
//       location: "Bangalore, India",
//     },
//     {
//       icon: Shield,
//       category: "Conference",
//       title: "IIA-Chennai Conference",
//       date: "27–28 February 2026",
//       location: "Chennai, India",
//     },
//     {
//       icon: Users,
//       category: "Conference",
//       title: " IIA-Kolkata Conference",
//       date: "14 March 2026",
//       location: "Kolkata, India",
//     },
//     {
//       icon: Network,
//       category: "Conference",
//       title: "IIA-Hyderabad Conference",
//       date: "11 April 2026",
//       location: "Hyderabad, India",
//     },
//   ];

//   return (
//     <section
//       id="upcoming-events"
//       className="py-16 transition-colors duration-500 bg-surfaceLight dark:bg-surfaceDark"
//     >
//       <div className="container">

//         {/* ================= HEADER ================= */}
//         <div className="max-w-3xl mx-auto mb-20 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border rounded-full bg-surfaceLight/80 dark:bg-surfaceDark/40 border-borderLight dark:border-borderDark backdrop-blur-xl">
//             <Calendar className="w-4 h-4 text-brandGold" />
//             <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
//               What’s Next
//             </span>
//           </div>

//           <h2 className="mb-5 text-4xl font-black sm:text-5xl font-heading text-brandDark dark:text-white">
//             Upcoming Events
//           </h2>

//           <p className="text-lg text-brandDark/70 dark:text-white/60">
//             Join us at upcoming conferences and conversations across India.
//           </p>
//         </div>

//         {/* ================= EVENTS GRID ================= */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {upcomingEvents.map((event, i) => {
//             const Icon = event.icon;
//             return (
//               <div
//                 key={i}
//                 className="p-6 rounded-[2rem]
//                 bg-surfaceLight/80 dark:bg-surfaceDark/40
//                 border border-borderLight dark:border-borderDark
//                 transition-all duration-500
//                 hover:-translate-y-1 hover:border-brandGold/40"
//               >
//                 <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-brandGold/10 border-brandGold/30">
//                   <Icon className="w-7 h-7 text-brandGold" />
//                 </div>

//                 <span className="text-xs font-bold tracking-wide uppercase text-brandGold">
//                   {event.category}
//                 </span>

//                 <h3 className="mt-2 mb-4 text-xl font-bold text-brandDark dark:text-white">
//                   {event.title}
//                 </h3>

//                 <div className="space-y-2 text-sm text-brandDark/60 dark:text-white/60">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-brandGold" />
//                     {event.date}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4 text-brandGold" />
//                     {event.location}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useState } from "react"
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
  ChevronRight
} from "lucide-react"

import IIALogoImg from "../../assets/iia-logo/iia-logo.png";

/* ================= DATA ================= */
export const UPCOMING_EVENTS = [
    {
      category: "Conference",
      title: "IIA-Bangalore Conference",
      date: "12–13 February 2026",
      location: "Bangalore, India",
    },
    {
      category: "Conference",
      title: "IIA-Chennai Conference",
      date: "27–28 February 2026",
      location: "Chennai, India",
    },
    {
      category: "Conference",
      title: " IIA-Kolkata Conference",
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

const IIALogo = () => (
  <div className="relative group/logo">
    <div className="absolute transition duration-500 -inset-1 bg-gradient-to-r from-brandGold to-brandGoldDark rounded-2xl blur opacity-20 group-hover/logo:opacity-40"></div>
    <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition-transform duration-300 bg-white dark:bg-slate-900 rounded-2xl group-hover/logo:scale-105">
      <img
        src={IIALogoImg}
        alt="IIA India Logo"
        className="object-contain w-full h-full"
      />
    </div>
  </div>
)

const EventCard = ({ event, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}
    className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-brandGold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brandGold/5"
  >
    {event.isFeatured && (
      <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-3 py-1 bg-brandGold text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
        <Star className="w-3 h-3 fill-current" />
        Featured
      </div>
    )}

    <div className="relative flex flex-col h-full p-8">
      <IIALogo />

      <div className="flex-grow mt-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brandGold/80">
            {event.category}
          </span>
          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              event.registrationStatus === "Open"
                ? "text-green-500"
                : event.registrationStatus === "Limited"
                ? "text-amber-500"
                : "text-rose-500"
            }`}
          >
            {event.registrationStatus}
          </span>
        </div>

        <h3 className="mb-6 text-2xl font-bold leading-tight transition-colors duration-300 text-slate-900 dark:text-white group-hover:text-brandGold">
          {event.title}
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-800 text-brandGold border-slate-100 dark:border-slate-700">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-0.5 uppercase tracking-wider">
                Date & Time
              </p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {event.date}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-800 text-brandGold border-slate-100 dark:border-slate-700">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-0.5 uppercase tracking-wider">
                Location
              </p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {event.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => onClick(event)}
          className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group/btn"
        >
          <span className="relative">
            Explore Agenda
            <span className="absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left scale-x-0 bg-brandGold group-hover/btn:scale-x-100" />
          </span>
          <motion.div
            whileHover={{ x: 4 }}
            className="p-1 text-white rounded-full bg-slate-900 dark:bg-white dark:text-slate-900"
          >
            <ArrowRight className="w-3 h-3" />
          </motion.div>
        </button>
      </div> */}
    </div>
    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800">
      <div className="w-0 h-full transition-all duration-700 ease-in-out group-hover:w-full bg-brandGold" />
    </div>
  </motion.div>
)

const EventDrawer = ({ event, onClose }) => (
  <AnimatePresence>
    {event && (
      <div className="fixed inset-0 z-[110] flex items-center justify-center sm:justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative flex flex-col w-full h-full max-w-xl overflow-y-auto bg-white shadow-2xl dark:bg-slate-900"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
              Event Details
            </h2>
            <button
              onClick={onClose}
              className="p-2 transition-colors rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="relative h-64 overflow-hidden rounded-3xl group/hero">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover/hero:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-brandGold text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  {event.category}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {event.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2 text-brandGold">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Schedule
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {event.date}
                </p>
              </div>
              <div className="p-5 border rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2 text-brandGold">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Venue
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {event.location}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-brandGold" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  About the event
                </h4>
              </div>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {event.description}
                <br />
                <br />
                The Institute of Internal Auditors (IIA) India is pleased to
                invite you to this exclusive gathering of internal audit
                professionals. This event will provide a platform for
                networking, learning best practices, and staying ahead of
                emerging trends in governance, risk, and compliance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex-1 min-w-[140px] py-4 px-6 bg-brandBlue text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brandBlue/90 transition-colors shadow-lg shadow-brandBlue/10">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                <button className="p-4 transition-colors border rounded-2xl border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brandGold">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-4 transition-colors border rounded-2xl border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brandGold">
                  <BookmarkPlus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 mt-auto bg-slate-50 dark:bg-slate-800/50">
            <p className="text-xs italic text-center text-slate-400">
              Empowering Internal Audit Professionals for a Dynamic World.
            </p>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

/* ================= MAIN COMPONENT ================= */

const UpcomingEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="relative py-24 overflow-hidden lg:py-32 bg-slate-50 dark:bg-surfaceDark">
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

      <div className="container relative px-6 mx-auto">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white border rounded-full shadow-sm dark:bg-slate-900 border-borderLight dark:border-borderDark"
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
            className="text-3xl lg:text-5xl font-black text-brandDark dark:text-white mb-6 tracking-tight leading-[1.1]"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING_EVENTS.map((event, idx) => (
            <EventCard
              key={event.id}
              event={event}
              index={idx}
              onClick={setSelectedEvent}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-6 mt-20"
        >
          {/* <div className="w-24 h-px bg-gradient-to-r from-transparent via-brandGold/40 to-transparent" /> */}
          {/* <button className="flex items-center gap-4 px-10 py-4 text-sm font-bold tracking-wide transition-all duration-300 bg-white border rounded-full shadow-xl group border-slate-200 dark:border-slate-800 dark:bg-slate-900 text-slate-900 dark:text-white shadow-black/5 hover:border-brandGold">
            View All Past Events
            <ChevronRight className="w-4 h-4 transition-transform text-brandGold group-hover:translate-x-1" />
          </button> */}
        </motion.div>
      </div>

      {/* <EventDrawer
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      /> */}
    </div>
  )
}

export default UpcomingEventsSection
