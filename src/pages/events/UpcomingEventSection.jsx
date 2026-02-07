import React from "react";
import {
  Calendar,
  MapPin,
  ClipboardCheck,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const UPCOMING_EVENTS = [
  {
    icon: ClipboardCheck,
    category: "Audit Conference",
    title: "IIA-Bangalore Conference",
    date: "12–13 February 2026",
    location: "Bangalore, India",
    link: "#",
    status: "Filling Fast",
  },
  {
    icon: FileCheck2,
    category: "Audit Conference",
    title: "IIA-Chennai Conference",
    date: "27–28 February 2026",
    location: "Chennai, India",
    link: "#",
  },
  {
    icon: SearchCheck,
    category: "Technical Seminar",
    title: "IIA-Kolkata Conference",
    date: "14 March 2026",
    location: "Kolkata, India",
    link: "#",
  },
  {
    icon: ShieldCheck,
    category: "Governance Summit",
    title: "IIA-Hyderabad Conference",
    date: "11 April 2026",
    location: "Hyderabad, India",
    link: "#",
  },
];

const EventCard = ({ event }) => {
  const Icon = event.icon;
  
  return (
    <div className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-surfaceDark/60 border border-borderLight dark:border-borderDark transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandGold/10 hover:border-brandGold/40">
      {/* Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 transition-opacity opacity-0 -z-10 bg-brandGold/5 blur-3xl group-hover:opacity-100" />
      
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center justify-center border w-14 h-14 rounded-2xl bg-brandGold/10 border-brandGold/20 text-brandGold group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        {event.status && (
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-brandGold/10 text-brandGold border border-brandGold/20 rounded-full">
            {event.status}
          </span>
        )}
      </div>

      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brandGold/80">
        {event.category}
      </span>

      <h3 className="mt-3 mb-6 text-xl font-bold leading-tight transition-colors text-brandDark dark:text-white group-hover:text-brandGold">
        {event.title}
      </h3>

      <div className="space-y-3 mb-8 text-sm font-medium text-brandDark/60 dark:text-white/50">
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-brandGold" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-brandGold" />
          <span>{event.location}</span>
        </div>
      </div>

      <a 
        href={event.link} 
        className="inline-flex items-center gap-2 text-sm font-bold transition-all text-brandDark dark:text-white group/link hover:gap-4"
      >
        View Details 
        <ArrowRight className="w-4 h-4 text-brandGold transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  );
};

export default function UpcomingEventsSection() {
  return (
    <section id="upcoming-events" className="relative py-24 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-brandGold/5 blur-[120px] rounded-full -z-10" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/50 dark:bg-surfaceDark/40 border-borderLight dark:border-borderDark backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-brandGold animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brandGold">
                Calendar 2026
              </span>
            </div>
            <h2 className="text-4xl font-black sm:text-6xl font-heading text-brandDark dark:text-white">
              Upcoming <span className="text-brandGold">Audit</span> Events
            </h2>
          </div>
          
          <p className="max-w-xs text-sm font-medium text-center md:text-right text-brandDark/60 dark:text-white/50">
            Professional development and networking opportunities for the modern internal auditor.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING_EVENTS.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}