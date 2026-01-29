import React, { useEffect, useState, useRef } from "react";
import { Calendar, ArrowRight, Image, Globe, Users, Award, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/journey/ai/bg1.webp";
import bg2 from "../../assets/journey/ai/bg2.webp";
import bg3 from "../../assets/journey/ai/bg3.webp";
import bg4 from "../../assets/journey/ai/bg4.webp";
import bg5 from "../../assets/journey/ai/bg5.webp";
 
const backgrounds = [bg1, bg2, bg3, bg4, bg5];
 
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
        this.opacity = Math.random() * 0.35 + 0.15;
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
      const count = Math.floor((canvas.width * canvas.height) / 20000);
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
      className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-50 mix-blend-screen z-10"
    />
  );
};
 
/* ===================== HERO ===================== */
export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [currentBg, setCurrentBg] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
 
  const milestones = [
    { value: "2020", label: "Founded", icon: Award },
    { value: "2025", label: "5 Years Strong", icon: Calendar },
    { value: "4", label: "Countries", icon: Globe },
    { value: "50+", label: "Team Members", icon: Users },
  ];
 
  /* Background Slideshow */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
 
  /* Mouse movement (throttled) */
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
 
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-500">
      {/* Background Slideshow with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={backgrounds[currentBg]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.9] dark:brightness-[0.4]"
            alt="Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-bgLight/90 via-bgLight/50 to-transparent dark:from-bgDark/95 dark:via-bgDark/60 dark:to-bgDark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bgLight via-transparent to-transparent dark:from-bgDark dark:via-transparent" />
      </motion.div>
 
      <ParticlesBackground mouseX={mouse.x} mouseY={mouse.y} />
 
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen pt-20 text-center">
       
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-brandGold to-[#D4AF37] shadow-[0_4px_20px_rgba(255,184,0,0.3)] border border-white/20">
            <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">
              Celebrating 5 Years
            </span>
          </div>
        </motion.div>
 
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl font-heading font-black leading-[0.95] tracking-tight mb-4"
        >
          <span className="text-brandDark dark:text-white drop-shadow-lg">
            Our Journey
          </span>
        </motion.h1>
 
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-brandGold mb-12 drop-shadow-md"
        >
          Our Milestones
        </motion.h2>
 
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-brandGold to-[#D4AF37] text-brandDark font-black tracking-widest uppercase shadow-[0_10px_30px_rgba(255,184,0,0.3)] hover:scale-105 transition-transform duration-300 border border-white/20">
            Explore Journey
          </button>
 
          <button className="px-10 py-4 rounded-xl bg-brandDark/90 dark:bg-surfaceDark/80 border border-brandGold text-brandGold font-bold tracking-widest uppercase hover:bg-brandDark transition-colors duration-300 shadow-lg">
            View Gallery
          </button>
        </motion.div>
 
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid mb-10 grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
        >
          {milestones.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-brandGold/30 bg-brandDark/80 dark:bg-surfaceDark/60 backdrop-blur-md flex flex-col items-center justify-center group hover:border-brandGold/60 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {m.value}
              </div>
              <div className="text-sm font-medium text-white/80 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
 
        {/* Background Controls (Optional Visual Indicator) */}
        <div className="absolute -top-5  bottom-8 flex gap-2 z-30">
          {backgrounds.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBg(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentBg === i ? "bg-brandGold w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 
 