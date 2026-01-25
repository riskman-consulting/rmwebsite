import React, { useState } from "react";
import {
  Globe,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function InternationalAssignments() {
  const [activeCountry, setActiveCountry] = useState("indonesia");

  const countries = {
    indonesia: {
      code: "ID",
      name: "Indonesia",
      city: "Jakarta",
      period: "2022 – Present",
      description:
        "Leading risk assessment and internal audit engagements for large Indonesian organizations across manufacturing and financial sectors.",
      projects: "12+",
      consultants: "8",
      image:
        "https://images.unsplash.com/photo-1555899434-94d1eb5b5a4f?w=900&q=80",
      highlights: [],
    },
    vietnam: {
      code: "VN",
      name: "Vietnam",
      city: "Ho Chi Minh City",
      period: "2022 – Present",
      description:
        "Delivering internal audit and compliance advisory services focused on operational efficiency and governance.",
      projects: "15+",
      consultants: "10",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&q=80",
      highlights: [
        "Operational audits",
        "Supply chain risk management",
        "IT systems audits",
        "Regulatory compliance support",
      ],
    },
    myanmar: {
      code: "MM",
      name: "Myanmar",
      city: "Yangon",
      period: "2022 – 2024",
      description:
        "Strategic risk consulting for emerging businesses operating in complex regulatory environments.",
      projects: "8+",
      consultants: "6",
      image:
        "https://images.unsplash.com/photo-1552304664-7d2e8b9a4ec8?w=900&q=80",
      highlights: [
        "Risk framework development",
        "Compliance program setup",
        "Internal control systems",
        "Audit methodology training",
      ],
    },
    china: {
      code: "CN",
      name: "China",
      city: "Shanghai",
      period: "2023 – Present",
      description:
        "Advanced risk assurance services for multinational corporations navigating complex regulatory requirements.",
      projects: "10+",
      consultants: "12",
      image:
        "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=900&q=80",
      highlights: [
        "Cross-border compliance",
        "Enterprise risk management",
        "Digital transformation audits",
        "Strategic advisory services",
      ],
    },
  };

  const current = countries[activeCountry];

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            <Globe className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              Global Presence
            </span>
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            International Assignments
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            Delivering risk, audit, and advisory engagements across key Asian
            markets with on-ground expertise.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 max-w-7xl mx-auto lg:grid-cols-2">

          {/* Left – Details */}
          <div
            className="p-10 rounded-[2.5rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            {/* Country Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {Object.entries(countries).map(([key, c]) => (
                <button
                  key={key}
                  onClick={() => setActiveCountry(key)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all
                    ${
                      activeCountry === key
                        ? "bg-brandGold text-brandDark shadow-[0_10px_30px_rgba(255,184,0,0.35)]"
                        : "bg-bgLight dark:bg-bgDark text-brandDark/60 dark:text-white/60 border border-borderLight dark:border-borderDark hover:border-brandGold/40"
                    }`}
                >
                  {c.code} · {c.name}
                </button>
              ))}
            </div>

            {/* Country Info */}
            <h3 className="text-3xl font-heading font-black text-brandDark dark:text-white mb-4">
              {current.name}
            </h3>

            <div className="flex flex-wrap gap-4 mb-5 text-brandDark/70 dark:text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brandGold" />
                {current.city}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brandGold" />
                {current.period}
              </div>
            </div>

            <p className="mb-6 text-brandDark/70 dark:text-white/60 leading-relaxed">
              {current.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                className="p-6 rounded-2xl
                bg-bgLight dark:bg-bgDark
                border border-borderLight dark:border-borderDark"
              >
                <div className="text-3xl font-black text-brandGold">
                  {current.projects}
                </div>
                <div className="text-sm text-brandDark/60 dark:text-white/60">
                  Projects Completed
                </div>
              </div>

              <div
                className="p-6 rounded-2xl
                bg-bgLight dark:bg-bgDark
                border border-borderLight dark:border-borderDark"
              >
                <div className="text-3xl font-black text-brandGold">
                  {current.consultants}
                </div>
                <div className="text-sm text-brandDark/60 dark:text-white/60">
                  Consultants On Ground
                </div>
              </div>
            </div>

            {/* Highlights */}
            {current.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-brandDark dark:text-white">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {current.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-brandDark/70 dark:text-white/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brandGold mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right – Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden
            border border-borderLight dark:border-borderDark">
            <img
              src={current.image}
              alt={current.city}
              className="w-full h-full min-h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <div className="text-6xl font-black text-white/20">
                {current.code}
              </div>
              <div className="text-3xl font-heading font-black text-white">
                {current.city}
              </div>
              <div className="font-semibold text-brandGold">
                {current.name}
              </div>
            </div>
          </div>
        </div>

        {/* Global Banner */}
        <div className="max-w-7xl mx-auto mt-20">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8
            p-10 rounded-[2.5rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center
                bg-brandGold/10 border border-brandGold/30"
              >
                <Users className="w-8 h-8 text-brandGold" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-brandDark dark:text-white">
                  Global Team Excellence
                </h3>
                <p className="text-brandDark/60 dark:text-white/60">
                  36+ consultants deployed across 4 countries
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="px-8 py-4 rounded-2xl text-center
                bg-bgLight dark:bg-bgDark
                border border-borderLight dark:border-borderDark"
              >
                <div className="text-3xl font-black text-brandGold">45+</div>
                <div className="text-sm text-brandDark/60 dark:text-white/60">
                  Total Projects
                </div>
              </div>

              <div
                className="px-8 py-4 rounded-2xl text-center
                bg-bgLight dark:bg-bgDark
                border border-borderLight dark:border-borderDark"
              >
                <div className="text-3xl font-black text-brandGold">4</div>
                <div className="text-sm text-brandDark/60 dark:text-white/60">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
