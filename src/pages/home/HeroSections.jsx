import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import heroItRisk from "../../assets/images/hero-section/home/hero-it-risk.png";
import HeroRiskAdvisory from "../../assets/images/hero-section/home/hero-risk-advisory.webp";
import HeroConsulting from "../../assets/images/hero-section/home/hero-consulting.webp";
import {useHomePage} from "../../store/home"
import { Link } from "react-router-dom";

const SLIDES = [
  {
    badge: "Risk Assurance & Advisory",
    titleLine1: "Master the Landscape of",
    titleLine2: "Enterprise Uncertainty",
    desc: "Risk-based internal audits and robust ERM frameworks based on COSO standards to identify blind spots and ensure sustainable growth.",
    img: HeroRiskAdvisory,
    btn1: "Strengthen Governance",
    btn1Link: "/services/risk-advisory",
    btn2: "Consult Expert",
    btn2Link: "/contact",
    category: "advisory"
  },
  {
    badge: "IT Risk Management",
    titleLine1: "Securing the Digital Frontier",
    titleLine2: "with Strategic Assurance",
    desc: "SOC 1/2/3 assurance and NIST-aligned security frameworks to protect your enterprise and turn IT risk into a driver of digital trust.",
    img: heroItRisk,
    btn1: "Explore Solutions",
    btn1Link: "/services",
    btn2: "Get Assessment",
    btn2Link: "/contact",
    category: "security"
  },
  {
    badge: "Business Consulting",
    titleLine1: "Architecting Sustainable",
    titleLine2: "Value & Financial Precision",
    desc: "Expert ESG reporting, GHG accounting, and credit rating advisory to optimize your capital structure and protect organizational integrity.",
    img: HeroConsulting,
    btn1: "Drive Growth",
    btn1Link: "/services/esg",
    btn2: "Book Call",
    btn2Link: "/contact",
    category: "consulting"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const {heroSlides,fetchHomePage} = useHomePage()

  

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);


  useEffect(()=>{
    if(heroSlides.length<=0){
    fetchHomePage()
    }
  },[])

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startAutoSlide();
  };

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .ken-burns {
          animation: kenBurns 8s ease-out forwards;
        }
        .hero-bg {
          background-color: #001122;
        }
        .hero-gradient-overlay {
          background: linear-gradient(to right, #001122, rgba(0,17,34,0.15), transparent);
        }
        .badge-bg {
          background-color: rgba(255, 192, 0, 0.08);
          border-color: rgba(255, 192, 0, 0.2);
        }
        .btn-primary-hero {
          background-color: #FFC000;
          color: #001F3F;
          box-shadow: 0 8px 24px rgba(255, 192, 0, 0.25);
        }
        .btn-primary-hero:hover {
          background-color: #FFB800;
        }
        .btn-secondary-hero {
          border-color: rgba(255,192,0,0.25);
          color: rgba(245,245,245,0.85);
          background-color: rgba(255,192,0,0.04);
        }
        .btn-secondary-hero:hover {
          border-color: rgba(255,192,0,0.5);
          background-color: rgba(255,192,0,0.08);
        }
        .indicator-active {
          background-color: #FFC000;
          width: 3rem;
        }
        .indicator-inactive {
          background-color: rgba(255,192,0,0.2);
          width: 1rem;
        }
        .nav-arrow:hover {
          background-color: #FFC000;
          color: #001F3F;
        }
      `}</style>

      {/* SECTION */}
      <section className="relative flex flex-col w-full overflow-hidden hero-bg md:h-screen md:flex-row md:-top-10 lg:-top-20">

        {/* LEFT CONTENT AREA */}
        <div className="relative w-full md:w-[65%] md:h-full flex items-center z-20 px-6 md:px-12 lg:px-16 pt-10 pb-6 md:pt-0 md:pb-0 md:overflow-hidden hero-bg">

          {/* Grid pattern — brand navy tint */}
          {/* <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFC000" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div> */}

          {/* Radial glow — brand navy center */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, rgba(0,64,128,0.5) 0%, transparent 70%)"
            }}
          />

          {/* SLIDE CONTENT WRAPPER */}
          <div className="relative w-full max-w-2xl md:h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={`text-${index}`}
                className={`
                  transition-all duration-1000 w-full
                  md:absolute md:top-1/2 md:-translate-y-1/2
                  ${index === currentSlide
                    ? "opacity-100 translate-x-0 pointer-events-auto block"
                    : "opacity-0 -translate-x-12 pointer-events-none hidden md:block"
                  }
                `}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full badge-bg backdrop-blur-md">
                  <span className="text-brandAccent text-xs font-bold uppercase tracking-[0.2em]">
                    {slide.badge}
                  </span>
                </div>

                {/* Two-Line Heading */}
                <h1 className="mb-5">
                  <span className="block text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.15] text-brandLight tracking-tight mb-2">
                    {slide.titleLine1}
                  </span>
                  <span
                    className="block text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.15] tracking-tight"
                    style={{
                      background: "linear-gradient(90deg, #FFC000, #FFB800, #FFD44D)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="max-w-xl mb-8 text-sm leading-relaxed md:text-base" style={{ color: "rgba(245,245,245,0.6)" }}>
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center w-full gap-3">
                  <Link
                    to={slide.btn1Link}
                    className="relative flex items-center justify-center px-6 py-3 overflow-hidden text-sm font-bold transition-all duration-300 rounded-full shadow-lg btn-primary-hero group"
                  >
                    <span className="relative z-10">{slide.btn1Text}</span>
                    <ArrowRight className="relative z-10 w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 transition-transform duration-300 translate-y-full bg-white/10 group-hover:translate-y-0" />
                  </Link>
                  <Link
                    to={slide.btn2Link}
                    className="flex items-center justify-center px-6 py-3 text-sm font-bold transition-all duration-300 border rounded-full btn-secondary-hero backdrop-blur-sm"
                  >
                    {slide.btn2Text}
                  </Link>
                </div>

                {/* MOBILE INDICATORS */}
                <div className="flex items-center gap-4 mt-5 md:hidden">
                  <div className="flex gap-2">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrentSlide(i); startAutoSlide(); }}
                        className={`h-1 transition-all duration-500 rounded-full ${
                          i === currentSlide ? "indicator-active" : "indicator-inactive"
                        }`}
                        style={{
                          width: i === currentSlide ? "3rem" : "1rem",
                          backgroundColor: i === currentSlide ? "#FFC000" : "rgba(255,192,0,0.2)"
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,192,0,0.4)" }}>
                    0{currentSlide + 1} / 0{SLIDES.length}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* DESKTOP INDICATORS */}
          <div className="absolute items-center hidden gap-6 md:flex bottom-8 left-12">
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); startAutoSlide(); }}
                  className="h-1 transition-all duration-500 rounded-full"
                  style={{
                    width: i === currentSlide ? "3rem" : "1rem",
                    backgroundColor: i === currentSlide ? "#FFC000" : "rgba(255,192,0,0.2)"
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,192,0,0.4)" }}>
              0{currentSlide + 1} / 0{SLIDES.length}
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative w-full h-[280px] md:h-full md:w-[35%] overflow-hidden group">
          {SLIDES.map((slide, index) => (
            <div
              key={`img-${index}`}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? "ken-burns" : ""}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Brand-palette gradient overlay: deep navy → transparent */}
              <div className="absolute inset-0 hero-gradient-overlay" />
              {/* Bottom navy fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 md:hidden"
                style={{ background: "linear-gradient(to top, #001122, transparent)" }}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 z-30 flex items-center justify-center w-16 transition-opacity opacity-0 md:w-32 group-hover:opacity-100">
            <button
              onClick={prevSlide}
              className="p-3 transition-all rounded-full nav-arrow md:p-4 backdrop-blur-xl"
              style={{ backgroundColor: "rgba(0,17,34,0.6)", color: "#F5F5F5" }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-30 flex items-center justify-center w-16 transition-opacity opacity-0 md:w-32 group-hover:opacity-100">
            <button
              onClick={nextSlide}
              className="p-3 transition-all rounded-full nav-arrow md:p-4 backdrop-blur-xl"
              style={{ backgroundColor: "rgba(0,17,34,0.6)", color: "#F5F5F5" }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

      </section>
    </>
  );
}

