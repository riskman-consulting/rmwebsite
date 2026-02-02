


import React from "react";
import { ArrowRight } from "lucide-react";
 
export default function SingleSlide() {
  const teamAvatars = [
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/Shanta_Pal_fyz3dq.webp",
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895926/pranshul_jxkf7z.webp",
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895921/Vishal_Sharma_qfwz3c.webp"

    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1769154641/sukant_sir_nelcot.webp",
    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906764/Arpit_Garg_Image_dlfmvh.webp"
  ];

  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-[#001122]">
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero1.webp"
          alt="Strategic consulting"
          className="object-cover w-full h-full object-[70%_center]" // Focus shifted right to make space for text
        />
        {/* 2. THE UI GRADIENT (Teal/Dark Blue to Transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-bgDark/100 to-transparent" />
      </div>
 
      {/* 3. CONTENT LAYER */}
      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="max-w-3xl">
          {/* Headline - Styled like the image */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            RiskMan Consulting: <br />
            <span className="font-medium opacity-90 text-[#FFC000] dark:text-[#FFC000]">
              Your Partner in Sustainable Growth
            </span>
          </h1>
 
          {/* Body Text */}
          <p className="max-w-xl mt-8 text-lg leading-relaxed md:text-xl text-white/80">
            Strategic risk advisory driven by <strong className="text-white">propreneurs</strong>.
            We deliver customized solutions that secure sustainable growth and
            create enduring value for global enterprises.
          </p>
 
          {/* Action Buttons - Left Aligned */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white uppercase tracking-wider transition-all bg-[#004080] hover:bg-[#0056b3] border border-white/10"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
 
            <a
              href="/about#introduction"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all border border-white/30 backdrop-blur-sm hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
 
          {/* 4. SOCIAL PROOF / AVATAR GROUP (Bottom element from image) */}
          <div className="flex items-center gap-4 mt-16 md:mt-24">
            <div className="flex -space-x-4">
              {teamAvatars.map((image,i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#001a17] overflow-hidden">
                  <img src={image} alt="Expert" />
                </div>
              ))}
            </div>
            <div className="text-white/90">
              <p className="text-sm font-bold leading-tight tracking-tight uppercase">
                Enabling digital evolution
              </p>
              <p className="text-xs opacity-70">Securing global enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}