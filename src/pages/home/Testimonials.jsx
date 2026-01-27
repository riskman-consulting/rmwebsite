import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Soumen Sarkar",
      role: "Managing Director | Nexval",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898439/s-sarkar_tpw74c.webp",
      text: "From the outset, Riskman demonstrated unparalleled dedication to understanding our organizations unique challenges and objectives.",
      color: "bg-brandDark",
      textColor: "text-white",
      zIndex:1,
    },
    {
      id: 2,
      name: "Swapan Kumar Manna",
      role: "CEO, Oneskai",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898439/s-manna_dassro.webp",
      text: "RiskMan has been instrumental in strengthening our internal controls and regulatory compliance. Their expert guidance helped us align with industry best practices.",
      color: "bg-brandAccent",
      textColor: "text-brandDark",
      zIndex:2,
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "CEO, Global Manufacturing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
      text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
      color: "bg-white dark:bg-surfaceDark",
      textColor: "text-brandDark dark:text-white",
      zIndex:3,
    },
    {
      id: 4,
      name: "Emily Thompson",
      role: "VP Operations, RetailMax",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
      text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
      color: "bg-brandPrimary",
      textColor: "text-white",
      zIndex:4,
    },
  ];

  // Auto-rotate
  // Cycle through testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative z-10 flex items-center w-full min-h-screen py-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT SIDE - Typography */}
          <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase font-bold text-brandNavy dark:text-brandAccent">
              Testimonials
            </p>
            
            <h2 className="mb-8 text-4xl font-black leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
              What Our <span className="text-transparent bg-gradient-to-r from-brandGold to-brandAccent bg-clip-text">Clients</span> Say
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-brandNavy dark:text-white/70">
              We don't just identify gaps; we build the bridges to fill them.
              Our clients' feedback reflects our commitment to excellence and
              strategic transformation.
            </p>

            {/* Navigation Dots */}
            <div className="flex justify-center p-3  lg:justify-start">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? "bg-brandAccent w-8" 
                      : "bg-brandNavy/20 dark:bg-white/20 hover:bg-brandNavy/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Stacked Carousel */}
          <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="popLayout">
              {testimonials.map((item, index) => {
                // Calculate relative position based on activeIndex
                const offset = (index - activeIndex + testimonials.length) % testimonials.length;
                const isActive = offset === 0;
                const isNext = offset === 1;
                const isPrev = offset === testimonials.length - 1;
                
                // Only render active, next, and prev (or all if needed, but keeping DOM light)
                // Actually, for the stack effect, we render all but position them.
                
                // Stack logic:
                // Active: z-50, scale 1, rotate 0
                // Next: z-40, scale 0.9, rotate 5deg, x + 20
                // Others: hidden or stacked behind
                
                let zIndex = 0;
                let scale = 0.8;
                let rotate = 0;
                let x = 0;
                let y = 0;
                let opacity = 0;

                if (isActive) {
                  zIndex = 50;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                } else if (offset === 1) {
                  zIndex = 40;
                  scale = 0.9;
                  rotate = 6;
                  x = 40;
                  y = -10;
                  opacity = 0.7;
                } else if (offset === 2) {
                  zIndex = 30;
                  scale = 0.85;
                  rotate = -6;
                  x = -40;
                  y = -20;
                  opacity = 0.5;
                } else {
                  zIndex = 20;
                  scale = 0.8;
                  rotate = 3;
                  x = 0;
                  y = -30;
                  opacity = 0.3;
                }

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={false}
                    animate={{
                      zIndex,
                      scale,
                      rotate,
                      x,
                      y,
                      opacity
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onClick={() => handleCardClick(index)}
                    className={`absolute w-full max-w-[320px] md:max-w-sm p-6 md:p-8 rounded-[2rem] shadow-2xl cursor-pointer ${item.color}`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 md:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          className={item.textColor === "text-white" ? "text-brandAccent" : "text-brandDark"}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className={`mb-6 md:mb-8 text-base md:text-lg font-medium leading-relaxed ${item.textColor} opacity-90`}>
                      "{item.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 overflow-hidden rounded-full md:w-12 md:h-12 ring-2 ring-white/20">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className={`text-xs md:text-sm font-bold uppercase tracking-wider ${item.textColor}`}>
                          {item.name}
                        </h4>
                        <p className={`text-[10px] md:text-xs font-medium opacity-70 ${item.textColor}`}>
                          {item.role.split(',')[0]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;