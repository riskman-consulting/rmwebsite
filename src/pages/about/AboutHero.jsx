import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Hero1 from "../../assets/images/Hero1.jpg";
import Hero2 from "../../assets/images/Hero2.jpg";
import Hero3 from "../../assets/images/Hero3.jpg";
import Hero4 from "../../assets/images/Hero4.jpg";

const AboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const particlesRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: Hero1,
      badge: "About RiskMan",
      title: "Build confidence,",
      highlight: "enable clarity & impact",
      description: "Strategic advisory, risk management & sustainable growth through innovative solutions and trusted partnerships.",
    },
    {
      id: 2,
      image: Hero2,
      badge: "Our Mission",
      title: "Sustainable growth,",
      highlight: "better future for all",
      description: "Embracing technology and innovation while being client and people focused, building trust through efficient execution.",
    },
    {
      id: 3,
      image: Hero3,
      badge: "Our Vision",
      title: "Leading consulting firm,",
      highlight: "quality & excellence",
      description: "Becoming a trusted partner in India and globally through sustainable quality services aligned to our mission.",
    },
    {
      id: 4,
      image: Hero4,
      badge: "Our Goal",
      title: "Excellence driven,",
      highlight: "impact focused outcomes",
      description: "Delivering measurable results through innovative strategies, expert guidance, and commitment to client success.",
    },
  ];

  // Particle Animation
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += 0.02;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const pulseOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 192, 0, ${pulseOpacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Particle Canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-[5] pointer-events-none opacity-30 dark:opacity-50"
      />

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover object-top w-full h-full"
              />
              {/* Reduced overlay - Image more visible */}
              <div className="absolute inset-0 bg-brandDark/50 dark:bg-brandDark/60" />
            </div>

            {/* Content - Using Container */}
            <div className="container relative z-20 flex items-center h-full">
              <div className="max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700 delay-100 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <span className="text-brandGold dark:text-brandAccent">✦</span>
                  <span className="text-sm font-bold tracking-wider uppercase text-white/90">{slide.badge}</span>
                </div>

                {/* Title */}
                <h1
                  className={`mb-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] transition-all duration-700 delay-200 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <span className="block mb-2">{slide.title}</span>
                  <span className="block text-transparent bg-gradient-to-r from-brandGold via-brandAccent to-brandGold bg-clip-text animate-gradient">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className={`max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-white/80 md:text-xl transition-all duration-700 delay-300 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-400 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg group bg-brandGold text-brandDark hover:bg-brandAccent hover:scale-105 hover:shadow-2xl hover:shadow-brandGold/40">
                    <span>Our Story</span>
                    <ArrowRight 
                      size={20} 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 rounded-full border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50">
                    Meet Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-30 p-3 transition-all duration-300 -translate-y-1/2 border rounded-full left-6 top-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:scale-110 max-md:hidden"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 p-3 transition-all duration-300 -translate-y-1/2 border rounded-full right-6 top-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:scale-110 max-md:hidden"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute z-30 flex gap-3 transform -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 h-2.5 bg-brandGold dark:bg-brandAccent"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
        <div
          className="h-full bg-brandGold dark:bg-brandAccent"
          style={{
            animation: "progress 5s linear infinite",
          }}
        />
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10 pointer-events-none z-[6] max-md:hidden animate-float">
        <div className="w-full h-full border-2 rounded-full border-brandAccent" />
      </div>
      <div className="absolute bottom-32 left-20 w-20 h-20 opacity-10 pointer-events-none z-[6] max-md:hidden animate-float-delayed">
        <div className="w-full h-full rotate-45 border-2 border-brandGold" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(60deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutHero;