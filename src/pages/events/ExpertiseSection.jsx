import React from "react";
import {
  Building2,
  Briefcase,
  FileText,
  Building,
  Shield,
  Monitor,
  Settings,
  DollarSign,
} from "lucide-react";

export default function ExpertiseSection() {
  const industries = [
    "Quick Commerce",
    "Digital & News Media",
    "Insurance",
    "Textile",
    "Automobile",
    "Pharmaceuticals",
    "IT",
    "Ed-tech",
    "FMCG",
    "Alco-Bev",
  ];

  const clients = [
    "Zomato",
    "Blinkit",
    "Feeding India",
    "CARE Health Insurance",
    "Schoolnet",
    "Pernod Ricard",
    "TG Minda",
    "HP Maxico",
    "Emami",
    "Tirupati Medicare",
    "Daido",
    "Granules",
  ];

  const expertiseAreas = [
    { icon: FileText, title: "Internal Audit" },
    { icon: Building, title: "Concurrent Audit" },
    { icon: DollarSign, title: "Transaction Audits" },
    { icon: Shield, title: "IFC & SOX Testing" },
    { icon: Monitor, title: "Digital Transformation" },
    { icon: Settings, title: "BRD & UAT Execution" },
  ];

  return (
    <section className="relative py-16 pt-8 transition-colors duration-500 bg-bgLight dark:bg-bgDark">
      <div className="container">

        {/* Top Grid */}
        <div className="grid gap-10 mx-auto mb-24 max-w-7xl lg:grid-cols-2">

          {/* Industries */}
          <div className="p-10 rounded-[2.5rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl
            transition-all duration-500
            hover:border-brandGold/40
            hover:shadow-[0_25px_60px_rgba(255,184,0,0.15)]">

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center border w-14 h-14 rounded-2xl bg-brandGold/10 border-brandGold/30">
                <Building2 className="w-7 h-7 text-brandGold" />
              </div>
              <h2 className="text-3xl font-black font-heading text-brandDark dark:text-white">
                Industries Covered
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {industries.map((industry, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium transition border rounded-full bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark text-brandDark/70 dark:text-white/70 hover:border-brandGold/40"
                >
                  {industry}
                </span>
              ))}
            </div>

            <div className="text-lg font-bold text-brandGold">
              10+ Industries
            </div>
          </div>

          {/* Clients */}
          <div className="p-10 rounded-[2.5rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl
            transition-all duration-500
            hover:border-brandGold/40
            hover:shadow-[0_25px_60px_rgba(255,184,0,0.15)]">

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center border w-14 h-14 rounded-2xl bg-brandGold/10 border-brandGold/30">
                <Briefcase className="w-7 h-7 text-brandGold" />
              </div>
              <h2 className="text-3xl font-black font-heading text-brandDark dark:text-white">
                Major Clients
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {clients.map((client, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium transition border rounded-full bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark text-brandDark/70 dark:text-white/70 hover:border-brandGold/40"
                >
                  {client}
                </span>
              ))}
            </div>

            <div className="text-lg font-bold text-brandGold">
              15+ Major Clients
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="max-w-7xl mx-auto p-12 rounded-[3rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          backdrop-blur-xl">

          <div className="text-center mb-14">
            <h2 className="mb-3 text-3xl font-black sm:text-4xl font-heading text-brandDark dark:text-white">
              Areas of Expertise
            </h2>
            <p className="text-lg text-brandDark/70 dark:text-white/60">
              Experience across audit, compliance, and digital transformation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl
                    bg-bgLight dark:bg-bgDark
                    border border-borderLight dark:border-borderDark
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-brandGold/40
                    hover:shadow-[0_20px_50px_rgba(255,184,0,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center transition-transform duration-300 border w-14 h-14 rounded-xl bg-brandGold/10 border-brandGold/30 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-brandGold" />
                    </div>
                    <h3 className="text-xl font-semibold text-brandDark dark:text-white">
                      {area.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}