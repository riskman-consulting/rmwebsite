import React from "react";
import { motion } from "framer-motion";
import WhyChooseRiskManImage from "../../assets/images/home/whyChoose.png";

const WhyRiskMan = () => {
  const items = [
    { title: "Customized Solutions", description: "Tailoring services to unique client needs ensuring optimal outcomes." },
    { title: "Client-Centric Focus", description: "Our unwavering dedication to understanding and addressing client goals ensures satisfaction and success." },
    { title: "Continuous Improvement", description: "Constantly evolving and refining our processes to stay ahead of industry trends and client expectations." },
    { title: "Proven Track Record", description: "A solid history of delivering measurable results showcases our commitment to excellence." },
    { title: "Innovative Approach", description: "Utilizing cutting-edge technologies and methodologies to provide forward-thinking solutions." },
    { title: "Expertise and Experience", description: "Our seasoned professionals bring years of industry experience, guaranteeing top-tier solutions." },
    { title: "Ethical Standards", description: "Upholding the highest levels of integrity and transparency in all interactions." },
  ];

  // Logic: 3 Left, 3 Right, 1 Bottom Center (Under the image)
  const leftSide = items.slice(0, 3);
  const rightSide = items.slice(3, 6);
  const coreItem = items[6];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-bgLight dark:bg-[#030712] transition-colors duration-500">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandAccent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="mb-4 text-[11px] font-bold tracking-[0.4em] uppercase text-brandPrimary dark:text-brandAccent"
          >
            Our Core Values
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-black text-brandDark dark:text-white uppercase tracking-tighter font-heading">
            Why Global Leaders <br />
            <span className="text-brandPrimary dark:text-brandAccent italic">Partner with RiskMan</span>
          </h2>
        </div>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: 3 Items */}
          <div className="space-y-16 order-2 lg:order-1">
            {leftSide.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left lg:text-right group"
              >
                <h3 className="text-xl font-extrabold text-brandPrimary dark:text-brandAccent mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brandNavy/80 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER: Image + 7th Item (The Core) */}
          <div className="flex flex-col items-center gap-12 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-64 h-64 md:w-80 md:h-80 xl:w-[420px] xl:h-[420px]"
            >
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brandAccent/10 animate-[spin_30s_linear_infinite]" />
              
              <img 
                src={WhyChooseRiskManImage} 
                alt="RiskMan Leadership" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(255,192,0,0.15)]"
              />
            </motion.div>

            {/* THE SEVENTH ITEM: Integrated here as the "Foundation" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative p-8 text-center bg-brandPrimary/5 dark:bg-white/[0.03] border border-brandPrimary/10 dark:border-white/5 rounded-[2.5rem] backdrop-blur-sm max-w-sm lg:max-w-md group hover:border-brandAccent/40 transition-all duration-500"
            >
              <h3 className="text-xl font-black text-brandPrimary dark:text-brandAccent mb-3 uppercase tracking-widest">
                {coreItem.title}
              </h3>
              <p className="text-sm text-brandNavy/70 dark:text-slate-400 font-medium">
                {coreItem.description}
              </p>
              {/* Subtle underline decoration */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-brandAccent rounded-full translate-y-2 opacity-50" />
            </motion.div>
          </div>

          {/* RIGHT: 3 Items */}
          <div className="space-y-16 order-3">
            {rightSide.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-xl font-extrabold text-brandPrimary dark:text-brandAccent mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brandNavy/80 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyRiskMan;