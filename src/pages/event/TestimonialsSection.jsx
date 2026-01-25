import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {teamsImages} from "../../assets/teams";

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Vishal Sharma",
      position: "Senior  Consultant Analytics",
      quote:"RiskMan marked a strong presence at the IIA Conference 2025 – Bombay Chapter, engaging alongside leading global corporations and top consulting groups. The participation reflects RiskMan’s growing stature as a trusted partner in risk management, governance, and internal audit excellence.",
      image: teamsImages.VishalSharma,
    },
    {
      name: "Yashvi Generiwal",
      position: "Senior Risk Consultant",
      quote:
        "This image captures a professional engagement at the Indorama Indonesia site in December 2025, marking the completion of an internal audit focused on exchange of insights and a solution-oriented approach. The audit encouraged open discussions on key risks and operational priorities, leading to clear and practical outcomes.",
      image:teamsImages.YashviGeneriwal,
    },
    {
      name: "Anita Desai",
      position: "Compliance Specialist",
      quote:
        "From articleship to leading projects in Myanmar and China, RiskMan has invested deeply in my professional journey.",
      tag: "Career Development",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "Vikram Patel",
      position: "Risk Consultant",
      quote:
        "The five-year celebration made me realize how far we’ve come together — professionally and personally.",
      tag: "Team Spirit",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Meera Iyer",
      position: "Audit Associate",
      quote:
        "Mentorship here is unmatched. Presenting at IIA conferences alongside industry leaders boosted my confidence immensely.",
      tag: "Mentorship",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  const next = () =>
    setCurrentSlide((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Voices from Our Team
          </h2>
          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Experiences that reflect growth, trust, and shared success at
            RiskMan.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 -translate-x-6 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full flex items-center justify-center
              bg-surfaceLight dark:bg-surfaceDark
              border border-borderLight dark:border-borderDark
              hover:border-brandGold/40 transition"
          >
            <ChevronLeft className="w-6 h-6 text-brandGold" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-10 translate-x-6 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full flex items-center justify-center
              bg-surfaceLight dark:bg-surfaceDark
              border border-borderLight dark:border-borderDark
              hover:border-brandGold/40 transition"
          >
            <ChevronRight className="w-6 h-6 text-brandGold" />
          </button>

          {/* Card */}
          <div
            className="p-10 sm:p-14 rounded-[2.5rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            {/* Quote mark */}
            <div className="absolute top-10 left-10 text-brandGold/10 text-8xl font-black">
              “
            </div>

            <div className="relative flex flex-col md:flex-row gap-10">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden
                  border-4 border-brandGold/30">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-6 text-lg sm:text-xl italic leading-relaxed
                  text-brandDark/80 dark:text-white/70">
                  {testimonials[currentSlide].quote}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-xl font-bold text-brandDark dark:text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-brandGold font-medium">
                      {testimonials[currentSlide].position}
                    </div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-brandGold/10 border border-brandGold/30"
                  >
                    <Star className="w-4 h-4 text-brandGold fill-brandGold" />
                    <span className="text-sm font-semibold text-brandGold">
                      {testimonials[currentSlide].tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-3 rounded-full transition-all
                  ${
                    currentSlide === i
                      ? "w-8 bg-brandGold"
                      : "w-3 bg-borderLight dark:bg-borderDark"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
