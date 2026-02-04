import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { teamsImages } from '../../assets/teams';

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Vishal Sharma",
      position: "Senior Risk Analyst",
      quote: "RiskMan marked a strong presence at the IIA Conference 2025 – Bombay Chapter, engaging alongside leading global corporations and top consulting groups. The participation reflects RiskMan’s growing stature as a trusted partner in risk management, governance, and internal audit excellence.",
      tag: "Conference Participation",
      image: teamsImages.VishalSharma
    },
    {
      id: 2,
      name: "Yashvi Ganeriwal",
      position: "Senior Consultant",
      quote: "This image captures a professional engagement at the Indorama Indonesia site in December 2025, marking the completion of an internal audit focused on exchange of insights and a solution-oriented approach. The audit encouraged open discussions on key risks and operational priorities, leading to clear and practical outcomes.",
      tag: "International Exposure",
      image: teamsImages.Yashvi
    },
    // {
    //   id: 3,
    //   name: "Palak Kanojia.",
    //   position: "Compliance Specialist",
    //   quote: "Riskman gave me hands-on experience comparable to Big Four standards and significantly strengthened my analytical, professional, and corporate skill set.My articleship experience at Riskman Consulting has been extremely enriching and insightful. I got the opportunity to work on finance transformation assignments for a listed quick-commerce giant within the Zomato–Blinkit ecosystem. During this tenure, I worked closely with the Business Finance team and was involved in budget reconciliation, expense analysis, and identifying major cost-control areas, which helped me develop a strong practical understanding of management accounting and financial analysis",
    //   tag: "Career Development",
    //   image: teamsImages.Palak
    // },
    // {
    //   id: 4,
    //   name: "Vikram Patel",
    //   position: "Risk Consultant",
    //   quote: "The 5-year milestone celebration was emotional. Cutting the cake together, sharing memories, and looking at our journey photos made me realize how far we have come as a team.",
    //   tag: "Team Spirit",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    // },
    // {
    //   id: 5,
    //   name: "Meera Iyer",
    //   position: "Audit Associate",
    //   quote: "The mentorship and guidance I received here is unparalleled. Attending IIA conferences and presenting alongside industry leaders has boosted my confidence tremendously.",
    //   tag: "Mentorship",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    // }
  ];

  const next = () =>
    setCurrentSlide((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-16 transition-colors duration-500 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-5 text-4xl font-black sm:text-5xl font-heading text-brandDark dark:text-white">
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
            className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition -translate-x-6 -translate-y-1/2 border rounded-full top-1/2 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandGold/40"
          >
            <ChevronLeft className="w-6 h-6 text-brandGold" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition translate-x-6 -translate-y-1/2 border rounded-full top-1/2 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandGold/40"
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
            <div className="absolute font-black top-10 left-10 text-brandGold/10 text-8xl">
              “
            </div>

            <div className="relative flex flex-col gap-10 md:flex-row">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 overflow-hidden border-4 rounded-full md:w-28 md:h-28 border-brandGold/30">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-6 text-lg italic leading-relaxed sm:text-xl text-brandDark/80 dark:text-white/70">
                  {testimonials[currentSlide].quote}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xl font-bold text-brandDark dark:text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="font-medium text-brandGold">
                      {testimonials[currentSlide].position}
                    </div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-brandGold/10 border-brandGold/30"
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