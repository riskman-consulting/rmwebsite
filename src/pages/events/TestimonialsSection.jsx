import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Senior Risk Analyst",
      quote: "Working at Riskman for the past 3 years has been transformative. The international assignments to Vietnam and Indonesia gave me exposure I never imagined. Our 5-year celebration reminded me why I love this team.",
      tag: "International Exposure",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Internal Audit Manager",
      quote: "The growth journey from a small team to 50+ professionals has been incredible. Every conference, every client meeting, and every team lunch has strengthened our bond. Proud to be part of this family.",
      tag: "Team Growth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Anita Desai",
      position: "Compliance Specialist",
      quote: "From articleship to leading projects in Myanmar and China, Riskman has invested in my career. The collaborative culture and continuous learning opportunities make every day exciting.",
      tag: "Career Development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Vikram Patel",
      position: "Risk Consultant",
      quote: "The 5-year milestone celebration was emotional. Cutting the cake together, sharing memories, and looking at our journey photos made me realize how far we have come as a team.",
      tag: "Team Spirit",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Meera Iyer",
      position: "Audit Associate",
      quote: "The mentorship and guidance I received here is unparalleled. Attending IIA conferences and presenting alongside industry leaders has boosted my confidence tremendously.",
      tag: "Mentorship",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:py-20">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Voices from Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 md:text-xl">
            Hear what our team members have to say about their journey with Riskman
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:-translate-x-12 hover:bg-slate-100 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 transition-transform text-slate-800 group-hover:scale-110" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:translate-x-12 hover:bg-slate-100 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 transition-transform text-slate-800 group-hover:scale-110" />
          </button>

          {/* Testimonial Card */}
          <div className="relative p-8 overflow-hidden border bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-3xl md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-teal-400/20">
              <svg className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            <div className="relative">
              <div className="flex flex-col items-start gap-8 mb-8 md:flex-row">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 overflow-hidden rounded-full md:w-28 md:h-28 ring-4 ring-teal-400/30">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <p className="mb-6 text-lg italic leading-relaxed md:text-xl text-slate-200">
                    {testimonials[currentSlide].quote}
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Name and Position */}
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-white">
                        {testimonials[currentSlide].name}
                      </h3>
                      <p className="font-medium text-teal-400">
                        {testimonials[currentSlide].position}
                      </p>
                    </div>

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-teal-600/20 border-teal-400/30">
                      <Star className="w-4 h-4 text-teal-400 fill-teal-400" />
                      <span className="text-sm font-medium text-teal-300">
                        {testimonials[currentSlide].tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-3 bg-teal-400'
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}