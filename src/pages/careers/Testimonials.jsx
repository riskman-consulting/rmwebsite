import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCareerStore } from "../../store/career";
import { sanityClient } from "../../api/sanity";
import imageUrlBuilder from "@sanity/image-url";

// 🔥 Create image builder
const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials, fetchCareerPage } = useCareerStore();

  // Fetch data
  useEffect(() => {
    fetchCareerPage();
  }, [fetchCareerPage]);

  // Auto slide
  useEffect(() => {
    if (!testimonials.length) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(id);
  }, [testimonials]);

  // Prevent crash
  if (!testimonials.length) return null;

  const next = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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

        {/* Card Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          <div className="p-10 rounded-[2.5rem] border backdrop-blur-xl bg-surfaceLight dark:bg-surfaceDark shadow-lg">
            
            <div className="flex items-start gap-8">
              
              {/* Left Side */}
              <div className="flex-shrink-0">
                <img
                  src={
                    t.image
                      ? urlFor(t.image)
                          .width(300)
                          .height(300)
                          .fit("crop")
                          .url()
                      : "/placeholder.png"
                  }
                  alt={t.name}
                  className="object-cover w-32 h-32 border-4 rounded-full border-brandGold/30"
                />

                <div className="mt-4">
                  <div className="text-xl font-bold text-brandDark dark:text-brandAccent">
                    {t.name}
                  </div>
                  {t.position && (
                    <div className="text-brandGold dark:text-white">
                      {t.position}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="flex-1">
                <p className="text-lg italic leading-relaxed text-brandPrimary dark:text-white/70">
                  {t.quote}
                </p>

                {t.tag && (
                  <div className="flex items-center gap-1 mt-6 text-sm">
                    <Star className="w-4 h-4 fill-brandGold text-brandGold" />
                    {t.tag}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
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
              className={`w-[8px] h-[8px] rounded-full transition ${
                currentSlide === i
                  ? "bg-brandGold"
                  : "bg-zinc-400/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}