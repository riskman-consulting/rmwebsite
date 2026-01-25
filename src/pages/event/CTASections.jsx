import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  ArrowRight,
  Calendar,
  MapPin,
  Flag,
  Shield,
  Users,
  Network,
} from "lucide-react";

export default function CTASections() {
  const [email, setEmail] = useState("");

  const upcomingEvents = [
    {
      icon: Flag,
      category: "Conference",
      title: "IIA Global Conference 2025",
      date: "March 2025",
      location: "Mumbai, India",
    },
    {
      icon: Shield,
      category: "Summit",
      title: "Risk Management Summit",
      date: "April 2025",
      location: "Singapore",
    },
    {
      icon: Users,
      category: "Team Event",
      title: "Team Building Retreat",
      date: "May 2025",
      location: "Goa, India",
    },
    {
      icon: Network,
      category: "Networking",
      title: "Annual Client Appreciation",
      date: "June 2025",
      location: "Mumbai, India",
    },
  ];

  const handleSubscribe = () => {
    if (!email) return;
    alert("Thank you for subscribing!");
    setEmail("");
  };

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
            Stay Connected
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Upcoming conversations, gatherings, and ways to stay engaged with
            RiskMan.
          </p>
        </div>

        {/* ================= UPCOMING EVENTS ================= */}
        <div className="grid gap-6 mb-20 md:grid-cols-2 lg:grid-cols-4">
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
                <div
                  className="w-14 h-14 mb-4 rounded-2xl
                  bg-brandGold/10 border border-brandGold/30
                  flex items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-brandGold" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wide text-brandGold">
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

        {/* ================= CTA GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* -------- Newsletter -------- */}
          <div
            className="p-10 rounded-[3rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark"
          >
            <div
              className="w-16 h-16 mb-6 rounded-2xl
              bg-brandGold/10 border border-brandGold/30
              flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-brandGold" />
            </div>

            <h3 className="mb-3 text-3xl font-heading font-black text-brandDark dark:text-white">
              Stay Updated
            </h3>

            <p className="mb-6 text-lg text-brandDark/60 dark:text-white/60">
              Subscribe to receive updates on events, insights, and milestones.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl
                  bg-bgLight dark:bg-bgDark
                  border border-borderLight dark:border-borderDark
                  text-brandDark dark:text-white
                  placeholder:text-brandDark/40 dark:placeholder:text-white/40
                  focus:outline-none focus:border-brandGold/50"
              />

              <button
                onClick={handleSubscribe}
                className="w-full px-6 py-4 font-bold rounded-xl
                  bg-brandGold text-brandDark
                  hover:scale-105 transition-transform"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* -------- LinkedIn -------- */}
          <div
            className="p-10 rounded-[3rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark"
          >
            <div
              className="w-16 h-16 mb-6 rounded-2xl
              bg-brandGold/10 border border-brandGold/30
              flex items-center justify-center"
            >
              <Linkedin className="w-8 h-8 text-brandGold" />
            </div>

            <h3 className="mb-3 text-3xl font-heading font-black text-brandDark dark:text-white">
              Follow Our Journey
            </h3>

            <p className="mb-6 text-lg text-brandDark/60 dark:text-white/60">
              Join us on LinkedIn for professional insights, events, and stories
              from our journey.
            </p>

            <a
              href="https://www.linkedin.com/company/riskman-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl
              bg-bgLight dark:bg-bgDark
              border border-borderLight dark:border-borderDark
              hover:border-brandGold/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 text-brandGold" />
                <span className="font-bold text-brandDark dark:text-white">
                  RiskMan Consulting
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-brandGold" />
            </a>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "5K+", label: "Followers" },
                { value: "200+", label: "Posts" },
                { value: "50K+", label: "Impressions" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 text-center rounded-xl
                  bg-bgLight dark:bg-bgDark
                  border border-borderLight dark:border-borderDark"
                >
                  <div className="text-2xl font-black text-brandGold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brandDark/60 dark:text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
