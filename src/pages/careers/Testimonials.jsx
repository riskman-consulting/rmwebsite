import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "./data";

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const next = () =>
    setCurrentSlide((p) => (p + 1) % testimonials.length);

  const prev = () =>
    setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentSlide];

  return (
    <section className="relative py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center text-brandDark dark:text-brandAccent">
          <h2 className="mb-5 text-4xl font-black sm:text-5xl">
            Voices from Our Team
          </h2>
          <p className="text-lg opacity-70 text-brandNavy dark:text-white">
            Experiences that reflect growth, trust, and shared success.
          </p>
        </div>

        {/* ===== Card Wrapper ===== */}
        <div className="relative max-w-5xl mx-auto">

          {/* Card - Horizontal Layout */}
          <div className="p-10 rounded-[2.5rem] border backdrop-blur-xl bg-surfaceLight dark:bg-surfaceDark shadow-lg">
            
            <div className="flex items-start gap-8">
              
              {/* Left Side - Image and Info */}
              <div className="flex-shrink-0">
                {/* Avatar */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-32 h-32 border-4 rounded-full border-brandGold/30"
                />
                
                {/* Name and Position below image */}
                <div className="mt-4">
                  <div className="text-xl font-bold text-brandDark dark:text-brandAccent">{t.name}</div>
                  {t.position && (
                    <div className=" text-brandGold dark:text-white">{t.position}</div>
                  )}
                </div>
              </div>

              {/* Right Side - Quote and Tag */}
              <div className="flex-1">
                {/* Quote */}
                <p className="text-lg italic leading-relaxed text-brandPrimary dark:text-white/70">
                  {t.quote}
                </p>

                {/* Tag at bottom right */}
                {t.tag && (
                  <div className="flex items-center gap-1 mt-6 text-sm">
                    <Star className="w-4 h-4 fill-brandGold text-brandGold" />
                    {t.tag}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* ===== Side Navigation Buttons ===== */}

          <button
            onClick={prev}
            className="absolute flex items-center justify-center w-12 h-12 transition -translate-y-1/2 border rounded-full shadow -left-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute flex items-center justify-center w-12 h-12 transition -translate-y-1/2 border rounded-full shadow -right-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center w-20 gap-3 mx-auto mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-[1px] h-[1px] rounded-full transition ${
                currentSlide === i
                  ? "bg-brandGold "
                  : "bg-zinc-400/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}