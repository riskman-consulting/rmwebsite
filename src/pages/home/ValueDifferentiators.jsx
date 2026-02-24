import React, { useEffect, useState } from "react";
import { Sparkles, Users, Target, Zap, Globe, Shield } from "lucide-react";
import { useHomePage } from "../../store/home";

const ValueDifferentiators = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const {fetchHomePage,valueDifferentiators}  = useHomePage()

  const values = [
    {
      icon: Sparkles,
      title: "Customized Solutions",
      description: "Tailored approaches designed specifically for your unique business challenges",
    },
    {
      icon: Target,
      title: "Integration of Analytics in Internal Audit",
      description: "Advanced data-driven insights to enhance audit effectiveness",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Industry veterans with deep domain expertise and proven track records",
    },
    {
      icon: Zap,
      title: "Efficiency through Virtual Execution",
      description: "Seamless remote delivery with maximum impact and minimal disruption",
    },
    {
      icon: Globe,
      title: "Industry & Domain Expertise",
      description: "Specialized knowledge across diverse sectors and business functions",
    },
    {
      icon: Shield,
      title: "Continuous Assurance and Consulting Service",
      description: "Ongoing support and strategic guidance throughout your journey",
    }
  ];

  console.log(valueDifferentiators);
  

  useEffect(()=>{
    if(!valueDifferentiators){
      fetchHomePage()
    }
  },[])

  return (
    <section className="relative w-full bg-bgLight dark:bg-bgDark pt-10 px-3  transition-colors duration-300">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brandGold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brandAccent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-start mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Our Strengths
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-brandDark dark:text-white">
            Our Value <span className="text-brandGold dark:text-brandAccent">Differentiators</span>
          </h2>

          <p className="max-w-3xl text-lg text-brandNavy dark:text-white/70">
            Discover what sets us apart and makes us the trusted partner for your business transformation journey
          </p>

          <div className="w-24 h-1 bg-brandGold dark:bg-brandAccent mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid - Back to original compact size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-surfaceLight dark:bg-surfaceDark rounded-3xl p-8 
                  transition-all duration-500 ease-out
                  ${isHovered ? 'shadow-2xl -translate-y-3 scale-105' : 'shadow-lg'}
                  border ${isHovered ? 'border-brandGold dark:border-brandAccent' : 'border-brandDark/10 dark:border-brandAccent/20'}
                  overflow-hidden backdrop-blur-sm
                `}>
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 opacity-5 dark:opacity-10 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        index === 0 ? '1552664730-d307ca884978' : // Customized solutions - blocks/patterns
                        index === 1 ? '1551288049-bebda4e38f71' : // Analytics - data/charts
                        index === 2 ? '1522071820-d9009dd7bf47' : // Team - people working
                        index === 3 ? '1504868584819-f8e8b4b6d7e3' : // Virtual execution - laptop
                        index === 4 ? '1454165804606-c3d57bc86b40' : // Domain expertise - business
                        '1450101499163-116c2c81e0e7' // Consulting - meeting
                      }?w=800&q=80')`
                    }}
                  />

                  {/* Corner Accent */}
                  <div className={`
                    absolute top-0 right-0 w-24 h-24 ${
                      index % 3 === 0 ? 'bg-brandGold' :
                      index % 3 === 1 ? 'bg-brandNavy' :
                      'bg-brandAccent'
                    }
                    opacity-5 rounded-bl-full
                  `}></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brandGold/20 dark:bg-brandAccent/20 blur-xl rounded-xl"></div>
                    <div className={`
                      relative inline-flex p-5 rounded-2xl ${
                        index % 3 === 0 ? 'bg-brandGold' :
                        index % 3 === 1 ? 'bg-brandNavy' :
                        'bg-brandAccent'
                      }
                      transform transition-all duration-500
                      ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                      shadow-xl
                    `}>
                      <Icon className="w-10 h-10 text-surfaceLight" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight mb-3 relative z-10">
                    {value.title}
                  </h3>
                  
                  <p className="text-brandDark/70 dark:text-brandLight/70 leading-relaxed relative z-10">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`
                    absolute bottom-0 left-0 h-1.5 ${
                      index % 3 === 0 ? 'bg-brandGold' :
                      index % 3 === 1 ? 'bg-brandNavy' :
                      'bg-brandAccent'
                    }
                    transition-all duration-500 rounded-tr-full
                    ${isHovered ? 'w-full' : 'w-0'}
                  `}></div>
                </div>

                {/* Floating Shadow on Hover */}
                <div className={`
                  absolute inset-0 ${
                    index % 3 === 0 ? 'bg-brandGold' :
                    index % 3 === 1 ? 'bg-brandNavy' :
                    'bg-brandAccent'
                  } rounded-2xl blur-xl
                  opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10
                `}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueDifferentiators;