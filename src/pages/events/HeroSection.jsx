import React, { useEffect, useState, useRef } from 'react';
import { Calendar, ArrowRight, Image } from 'lucide-react';

const ParticlesBackground = ({ mouseX, mouseY }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(mX, mY) {
        this.x += this.speedX;
        this.y += this.speedY;
        const dx = mX * (this.density / 10);
        const dy = mY * (this.density / 10);
        this.x += (dx - (this.x - this.baseX)) * 0.01;
        this.y += (dy - (this.y - this.baseY)) * 0.01;
        if (this.x > canvas.width) { this.x = 0; this.baseX = 0; }
        else if (this.x < 0) { this.x = canvas.width; this.baseX = canvas.width; }
        if (this.y > canvas.height) { this.y = 0; this.baseY = 0; }
        else if (this.y < 0) { this.y = canvas.height; this.baseY = canvas.height; }
      }

      draw() {
        if (!ctx) return;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFB800';
        ctx.fillStyle = `rgba(255, 184, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); 
    init(); 
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[2] opacity-50 mix-blend-screen" />;
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [curtainProgress, setCurtainProgress] = useState(0);

  const milestones = [
    { year: '2020', label: 'Founded', color: 'text-[#FFB800]' },
    { year: '2025', label: '5 Years Strong', color: 'text-[#FFB800]' },
    { value: '4', label: 'Countries', color: 'text-[#FFB800]' },
    { value: '50+', label: 'Team Members', color: 'text-[#FFC000]' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60,
      });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / 300, 1);
      setCurtainProgress(progress);
      
      if (progress >= 1) {
        setScrollY(currentScroll - 300);
      } else {
        setScrollY(0);
      }
      
      if (progress >= 1 && !isLoaded) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  const effectiveScroll = isLoaded ? scrollY : 0;
  const bgY = Math.max(-280, 0 - (effectiveScroll * 0.28));
  const bgScale = Math.min(1.5, 1.15 + (effectiveScroll * 0.00035));
  const contentOpacity = Math.max(0, 1 - (effectiveScroll / 600));
  const contentScale = Math.max(0.85, 1 - (effectiveScroll / 4000));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000F1F]">
      {/* Curtain Reveal Animation */}
      {!isLoaded && (
        <div 
          className="fixed inset-0 z-[100] flex"
          style={{ 
            opacity: 1 - (curtainProgress * 0.3),
            pointerEvents: curtainProgress >= 1 ? 'none' : 'auto'
          }}
        >
          {/* Left Curtain */}
          <div 
            className="flex-1 bg-[#001226] border-r border-[#FFB800]/20 flex items-center justify-end relative overflow-hidden"
            style={{
              transform: `translateX(-${curtainProgress * 100}%)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            <div 
              className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent"
              style={{ opacity: curtainProgress }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFB800] to-transparent"
              style={{ 
                opacity: curtainProgress * 0.8,
                boxShadow: `0 0 20px ${curtainProgress * 10}px rgba(255, 184, 0, ${curtainProgress * 0.6})`
              }}
            />
          </div>

          {/* Right Curtain */}
          <div 
            className="flex-1 bg-[#001226] border-l border-[#FFB800]/20 flex items-center justify-start relative overflow-hidden"
            style={{
              transform: `translateX(${curtainProgress * 100}%)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            <div 
              className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent"
              style={{ opacity: curtainProgress }}
            />
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFB800] to-transparent"
              style={{ 
                opacity: curtainProgress * 0.8,
                boxShadow: `0 0 20px ${curtainProgress * 10}px rgba(255, 184, 0, ${curtainProgress * 0.6})`
              }}
            />
          </div>

          {/* Center Logo */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: 1 - (curtainProgress * 1.5),
              transform: `scale(${1 - (curtainProgress * 0.3)}) translateY(${curtainProgress * -30}px)`,
              filter: `blur(${curtainProgress * 4}px)`
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-[#FFB800]/30 rounded-full flex items-center justify-center mb-8 relative">
                <div 
                  className="absolute inset-[-4px] border-t-2 border-[#FFB800] rounded-full"
                  style={{
                    animation: `spin-slow ${8 - (curtainProgress * 4)}s linear infinite`
                  }}
                />
                <Calendar size={48} className="text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
              </div>
              <div className="text-center">
                <h2 
                  className="font-black text-5xl tracking-[0.2em] text-[#FFB800] mb-2"
                  style={{
                    textShadow: `0 0 ${30 - (curtainProgress * 20)}px rgba(255, 184, 0, 0.8)`
                  }}
                >
                  RISKMAN
                </h2>
                <p 
                  className="font-light text-2xl tracking-[0.4em] text-[#FFB800]/60"
                  style={{
                    letterSpacing: `${0.4 + (curtainProgress * 0.3)}em`
                  }}
                >
                  ANNIVERSARY
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          {curtainProgress < 0.2 && (
            <div 
              className="absolute flex flex-col items-center gap-3 -translate-x-1/2 bottom-12 left-1/2 animate-bounce-slow"
              style={{
                opacity: 1 - (curtainProgress * 5)
              }}
            >
              <span className="text-[#FFB800]/60 text-xs font-bold uppercase tracking-[0.3em]">Scroll to Enter</span>
              <div className="w-6 h-10 border-2 border-[#FFB800]/40 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-2 bg-[#FFB800] rounded-full animate-scroll-down" />
              </div>
            </div>
          )}
        </div>
      )}

      <ParticlesBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Parallax Background */}
      <div 
        className="absolute inset-0 transition-transform duration-100 origin-center pointer-events-none"
        style={{ 
          transform: `translateY(${bgY}px) scale(${bgScale})`,
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Riskman Anniversary"
            className="w-full h-full object-cover brightness-[0.3] saturate-[0.8] contrast-[1.1]"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#000F1F] via-[#000F1F]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000F1F] via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.15),transparent_70%)]" />
      </div>

      {/* Close Button */}
      <button className="absolute z-20 transition-colors top-8 right-8 text-white/80 hover:text-white">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div 
        className="relative z-10 w-full px-6 py-20 transition-all duration-300 md:px-12 lg:px-24 lg:py-0"
        style={{ 
          opacity: isLoaded ? contentOpacity : 1, 
          transform: isLoaded ? `scale(${contentScale})` : 'scale(1)'
        }}
      >
        <div className="container mx-auto text-center max-w-7xl">
          
          {/* Anniversary Badge */}
          <div 
            className="inline-flex items-center gap-4 px-6 py-3 mb-8 transition-all duration-1000 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 text-[#FFC000] shadow-2xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)'
            }}
          >
            <Calendar className="w-5 h-5 fill-[#FFC000]" />
            <span className="font-black text-sm tracking-[0.3em] uppercase">Celebrating 5 Years of Excellence</span>
          </div>

          {/* Main Heading */}
          <div 
            className="pt-10 mb-8 transition-all duration-1500"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(80px)'
            }}
          >
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Our Journey,</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFB800] font-serif italic tracking-tight font-medium mt-2">
              Our Milestones
            </h2>
          </div>

          {/* Subheading */}
          <p
            className="max-w-3xl mx-auto mb-12 text-lg font-light leading-relaxed transition-all duration-1000 text-white/60 sm:text-xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            From humble beginnings to international recognition, explore the remarkable story of Riskman Consulting's growth, achievements, and the incredible team behind our success
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col items-center justify-center gap-6 mb-20 transition-all duration-1000 sm:flex-row"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <button className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#FFB800] text-[#001F3F] rounded-2xl font-black text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_100px_rgba(255,184,0,0.4)]">
              <span className="relative z-10">Explore Our Journey</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-3" />
              <div className="absolute inset-0 transition-opacity duration-500 bg-white opacity-0 group-hover:opacity-30" />
            </button>
            
            <button className="group inline-flex items-center justify-center gap-4 px-12 py-5 bg-white/5 backdrop-blur-3xl text-white rounded-2xl font-black text-sm tracking-[0.2em] uppercase border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30">
              <Image size={18} className="transition-transform group-hover:scale-110" />
              <span>View Gallery</span>
            </button>
          </div>

          {/* Milestone Stats */}
          <div 
            className="grid max-w-6xl grid-cols-2 gap-8 mx-auto transition-all duration-1000 lg:grid-cols-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {milestones.map((milestone, i) => (
              <div 
                key={i} 
                className="group relative p-10 bg-white/[0.02] backdrop-blur-[100px] rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:bg-white/[0.1] hover:border-[#FFB800]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,184,0,0.15)] overflow-hidden"
              >
                <div className={`text-4xl sm:text-5xl font-bold ${milestone.color} mb-3 transition-all duration-500 group-hover:scale-110`}>
                  {milestone.year || milestone.value}
                </div>
                <div className="text-sm font-medium tracking-wider text-gray-400 uppercase transition-colors group-hover:text-white">
                  {milestone.label}
                </div>
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute flex-col items-center hidden gap-12 transition-opacity duration-1000 xl:flex bottom-20 right-20"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <span className="text-[#FFC000]/30 text-[12px] font-black uppercase tracking-[1.2em] [writing-mode:vertical-lr] mb-6">Discover More</span>
        <div className="w-px h-40 bg-gradient-to-b from-[#FFB800]/50 to-transparent relative">
          <div className="absolute top-0 left-[-5px] w-[11px] h-[11px] rounded-full bg-[#FFB800] shadow-[0_0_25px_#FFB800] animate-bounce-slow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(140px); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;