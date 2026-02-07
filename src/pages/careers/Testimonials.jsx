import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import { testimonials } from "./data";

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Auto slide
  useEffect(() => {
    if (openModal) return;
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [openModal]);

  const next = () =>
    setCurrentSlide((p) => (p + 1) % testimonials.length);

  const prev = () =>
    setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentSlide];

  return (
    <section className="relative py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-5 text-4xl font-black sm:text-5xl">
            Voices from Our Team
          </h2>
          <p className="text-lg opacity-70">
            Experiences that reflect growth, trust, and shared success.
          </p>
        </div>

        {/* ===== Card Wrapper (important for button positioning) ===== */}
        <div className="relative max-w-3xl mx-auto">

          {/* Card */}
          <div className="p-10 rounded-[2.5rem] border backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 shadow-lg">

            {/* Avatar */}
            <img
              src={t.image}
              alt={t.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-brandGold/30"
            />

            {/* Quote */}
            <p className="mt-6 text-lg italic leading-relaxed line-clamp-5">
              {t.quote}
            </p>

            {/* Read more */}
            {t.quote.length > 220 && (
              <button
                onClick={() => setOpenModal(true)}
                className="mt-3 text-brandGold font-semibold"
              >
                Read more →
              </button>
            )}

            {/* Info */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                <div className="font-bold text-xl">{t.name}</div>
                {t.position && (
                  <div className="text-brandGold">{t.position}</div>
                )}
              </div>

              {t.tag && (
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-brandGold text-brandGold" />
                  {t.tag}
                </div>
              )}
            </div>
          </div>

          {/* ===== Side Navigation Buttons ===== */}

          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white/90 dark:bg-zinc-800 flex items-center justify-center shadow hover:scale-105 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white/90 dark:bg-zinc-800 flex items-center justify-center shadow hover:scale-105 transition"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === i
                  ? "bg-brandGold scale-125"
                  : "bg-zinc-400/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Modal ===== */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-xl w-full p-8 bg-white dark:bg-zinc-900 rounded-2xl relative shadow-xl">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 opacity-70 hover:opacity-100"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-4">{t.name}</h3>
            <p className="leading-relaxed whitespace-pre-line">
              {t.quote}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}