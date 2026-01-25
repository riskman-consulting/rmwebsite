import React from "react";
import {
  Cake,
  UtensilsCrossed,
  Image,
  Heart,
  Camera,
  Users,
  Calendar,
  Trophy,
} from "lucide-react";
import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import journeyImages from "../../assets/journey";





export default function TogethernessCelebration() {
  const highlights = [
    {
      icon: Cake,
      title: "The Grand Cake Cutting",
      description:
        "An emotional moment where the entire team came together to celebrate five years of dedication, trust, and shared success.",
      image:
        Riskman_Aniversary_5_year_images[0],
    },
    {
      icon: UtensilsCrossed,
      title: "Team Lunch Gatherings",
      description:
        "Shared meals, laughter, and stories that strengthened bonds beyond work and turned colleagues into family.",
      image:
          journeyImages.teamLunchDecember2023[0],
      },
    {
      icon: Image,
      title: "Memory Wall",
      description:
        "A curated wall of photographs capturing milestones, smiles, and moments that defined our journey.",
      image: journeyImages.teamLunchDecember2023[1],
    },
    {
      icon: Heart,
      title: "Gratitude & Reflections",
      description:
        "Heartfelt messages of appreciation, reflection, and excitement for the road ahead.",
      image:
        journeyImages.teamMemberBirthday[0],
    },
  ];

  const stats = [
    { icon: Camera, value: "91", label: "Photos Captured" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Calendar, value: "8", label: "Celebration Events" },
    { icon: Trophy, value: "5", label: "Years Together" },
  ];

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
            <Heart className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              Celebrating Together
            </span>
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            5 Years of Togetherness
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            Celebrating milestones, memories, and the bonds that make RiskMan a
            family.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid gap-8 mb-24 sm:grid-cols-2">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group rounded-[2.5rem] overflow-hidden
                bg-surfaceLight/80 dark:bg-surfaceDark/40
                border border-borderLight dark:border-borderDark
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div
                    className="absolute top-4 right-4 w-14 h-14 rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-brandGold" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-heading font-bold text-brandDark dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-brandDark/70 dark:text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className="p-10 sm:p-14 rounded-[3rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          backdrop-blur-xl"
        >
          <div className="mb-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-heading font-black text-brandDark dark:text-white">
              Our Celebration in Numbers
            </h3>
            <p className="mt-3 text-brandDark/60 dark:text-white/60">
              Every number tells a story of unity and shared success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-8 text-center rounded-[2rem]
                  bg-bgLight dark:bg-bgDark
                  border border-borderLight dark:border-borderDark
                  transition-all duration-300
                  hover:border-brandGold/40"
                >
                  <div
                    className="mx-auto mb-4 w-16 h-16 rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-brandGold" />
                  </div>

                  <div className="mb-1 text-4xl font-black text-brandGold">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-brandDark/60 dark:text-white/60">
                    {stat.label}
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
