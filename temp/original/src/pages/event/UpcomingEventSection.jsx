import React from "react";
import { Calendar, MapPin, Flag, Shield, Users, Network } from "lucide-react";
 
export default function UpcomingEventsSection() {
  const upcomingEvents = [
    {
      icon: Flag,
      category: "Conference",
      title: "Bangalore Conference",
      date: "12–13 February 2026",
      location: "Bangalore, India",
    },
    {
      icon: Shield,
      category: "Conference",
      title: "Chennai Conference",
      date: "27–28 February 2026",
      location: "Chennai, India",
    },
    {
      icon: Users,
      category: "Conference",
      title: "Kolkata Conference",
      date: "14 March 2026",
      location: "Kolkata, India",
    },
    {
      icon: Network,
      category: "Conference",
      title: "Hyderabad Conference",
      date: "11 April 2026",
      location: "Hyderabad, India",
    },
  ];
 
  return (
    <section
      id="upcoming-events"
      className="py-16 transition-colors duration-500 bg-surfaceLight dark:bg-surfaceDark"
    >
      <div className="container">
 
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border rounded-full bg-surfaceLight/80 dark:bg-surfaceDark/40 border-borderLight dark:border-borderDark backdrop-blur-xl">
            <Calendar className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              What’s Next
            </span>
          </div>
 
          <h2 className="mb-5 text-4xl font-black sm:text-5xl font-heading text-brandDark dark:text-white">
            Upcoming Events
          </h2>
 
          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Join us at upcoming conferences and conversations across India.
          </p>
        </div>
 
        {/* ================= EVENTS GRID ================= */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event, i) => {
            const Icon = event.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-[2rem]
                bg-surfaceLight/80 dark:bg-surfaceDark/40
                border border-borderLight dark:border-borderDark
                transition-all duration-500
                hover:-translate-y-1 hover:border-brandGold/40"
              >
                <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-brandGold/10 border-brandGold/30">
                  <Icon className="w-7 h-7 text-brandGold" />
                </div>
 
                <span className="text-xs font-bold tracking-wide uppercase text-brandGold">
                  {event.category}
                </span>
 
                <h3 className="mt-2 mb-4 text-xl font-bold text-brandDark dark:text-white">
                  {event.title}
                </h3>
 
                <div className="space-y-2 text-sm text-brandDark/60 dark:text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brandGold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brandGold" />
                    {event.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
 
 