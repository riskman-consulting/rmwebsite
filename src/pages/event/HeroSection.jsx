import React, { useEffect, useState, useRef } from "react";
import { Calendar, ArrowRight, Image } from "lucide-react";

/* ===================== PARTICLES ===================== */
const ParticlesBackground = ({ mouseX, mouseY }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.6 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.4 + 0.15;
      }
      update(mx, my) {
        this.x += this.speedX + mx * 0.002;
        this.y += this.speedY + my * 0.002;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.fillStyle = `rgba(255,184,0,${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });
      raf = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40 mix-blend-screen"
    />
  );
};

/* ===================== HERO ===================== */
export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [scroll, setScroll] = useState(0);

  const milestones = [
    { value: "2020", label: "Founded" },
    { value: "2025", label: "5 Years Strong" },
    { value: "4", label: "Countries" },
    { value: "50+", label: "Team Members" },
  ];

  /* mouse throttle */
  useEffect(() => {
    let raf;
    const move = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setMouse({
          x: (e.clientX / window.innerWidth - 0.5) * 40,
          y: (e.clientY / window.innerHeight - 0.5) * 40,
        });
        raf = null;
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* scroll */
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
      if (window.scrollY > 80) setLoaded(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgY = Math.max(-200, -scroll * 0.25);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
      bg-bgLight dark:bg-bgDark transition-colors duration-500">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${bgY}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          className="w-full h-full object-cover brightness-[0.85] dark:brightness-[0.35]"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t
          from-bgLight via-bgLight/60 to-transparent
          dark:from-bgDark dark:via-bgDark/60" />
      </div>

      <ParticlesBackground mouseX={mouse.x} mouseY={mouse.y} />

      {/* Content */}
      <div className="relative z-10 container text-center">

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          backdrop-blur-xl transition-all duration-700
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
        >
          <Calendar className="w-5 h-5 text-brandGold" />
          <span className="text-sm tracking-[0.3em] font-black uppercase text-brandGold">
            Celebrating 5 Years
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          font-heading font-black leading-[0.95]
          transition-all duration-1000
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <span className="text-brandDark dark:text-white">
            Our Journey,
          </span>
        </h1>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          italic font-serif text-brandGold">
          Our Milestones
        </h2>

        {/* Sub */}
        <p className="max-w-3xl mx-auto mt-8 text-lg sm:text-xl
          text-brandDark/70 dark:text-white/60 leading-relaxed">
          From humble beginnings to global recognition — a story built on trust,
          growth, and people.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-14">
          <button className="px-12 py-5 rounded-2xl
            bg-brandGold text-brandDark
            font-black tracking-[0.2em] uppercase
            hover:scale-[1.03] active:scale-[0.97]
            transition-all duration-300
            shadow-[0_15px_50px_rgba(255,184,0,0.45)]">
            Explore Journey <ArrowRight className="inline ml-2" />
          </button>

          <button className="px-12 py-5 rounded-2xl
            bg-surfaceLight/70 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            text-brandDark dark:text-white
            font-black tracking-[0.2em] uppercase
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition">
            <Image className="inline mr-2" /> View Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem]
              bg-surfaceLight/70 dark:bg-surfaceDark/40
              border border-borderLight dark:border-borderDark
              backdrop-blur-xl
              hover:border-brandGold/40
              hover:shadow-[inset_0_0_30px_rgba(255,184,0,0.15)]
              transition-all duration-500"
            >
              <div className="text-5xl font-bold text-brandGold mb-2">
                {m.value}
              </div>
              <div className="text-sm uppercase tracking-wider
                text-brandDark/60 dark:text-white/60">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
