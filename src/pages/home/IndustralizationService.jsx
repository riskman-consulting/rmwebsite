import { useState, useRef, useEffect } from "react";
import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Energy & Utilities",
    description: "Specialized audit and assurance services ensuring regulatory compliance and operational resilience.",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
  },
  {
    title: "Retail",
    description: "Strengthening governance, controls, and financial transparency across retail operations.",
    icon: "cart",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  },
  {
    title: "Healthcare",
    description: "Supporting healthcare organizations with compliance, risk, and performance assurance.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop"
  },
  {
    title: "Manufacturing",
    description: "Enhancing efficiency, controls, and compliance across complex manufacturing ecosystems.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop"
  },
  {
    title: "Technology",
    description: "Helping technology-driven businesses manage risk, compliance, and scalability.",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
  },
  {
    title: "Real Estate",
    description: "Delivering audit and advisory solutions tailored for real estate and infrastructure sectors.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
  },
];

const IconComponent = ({ type, className }) => {
  switch(type) {
    case 'zap': return <Zap className={className} />;
    case 'cart': return <ShoppingCart className={className} />;
    case 'heart': return <HeartPulse className={className} />;
    case 'factory': return <Factory className={className} />;
    case 'monitor': return <Monitor className={className} />;
    case 'home': return <Home className={className} />;
    default: return <Zap className={className} />;
  }
};

export default function IndustrySpecialization() {
  const scrollRef = useRef(null);
  const [hover, setHover] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState(new Set());

  // Reveal first card on mount with slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealedCards(new Set([0]));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = 400;
        const visibleIndex = Math.round(scrollPosition / cardWidth);
        setCurrentIndex(visibleIndex);
        
        // Reveal cards as they come into view
        setRevealedCards(prev => new Set([...prev, visibleIndex]));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current && hover === null) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentScroll = scrollRef.current.scrollLeft;
        
        if (currentScroll >= maxScroll - 50) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        } else {
          const nextIndex = (currentIndex + 1) % industries.length;
          scrollRef.current.scrollTo({
            left: 400 * nextIndex,
            behavior: 'smooth'
          });
          setCurrentIndex(nextIndex);
          setRevealedCards(prev => new Set([...prev, nextIndex]));
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, hover]);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 400 * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      setRevealedCards(prev => new Set([...prev, index]));
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      {/* ANIMATED ARROW PATTERN BACKGROUND - LEFT SIDE */}
      <div className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="arrow-float"
              style={{
                animationDelay: `${i * 0.4}s`
              }}
            >
              <ChevronDown className="w-20 h-20 text-blue-900 dark:text-yellow-400 rotate-[-90deg]" strokeWidth={2} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE - CONTENT */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-white">
                Built for Critical
                <br />
                Industries.
              </h2>
              
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                We support companies in Food, Pharma, Retail, and Manufacturing with Tailored Logistics.
              </p>
            </div>

            <Link 
              to="/industries" 
              className="relative inline-flex px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 bg-blue-900 group dark:bg-yellow-400 dark:text-gray-900 rounded-xl hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Know Our Industries
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE - HORIZONTAL SCROLLING CARDS WITH CURTAIN EFFECT */}
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(null)}
            >
              {industries.map((industry, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 overflow-hidden cursor-pointer rounded-2xl group"
                  style={{
                    width: '360px',
                    height: '520px',
                    scrollSnapAlign: 'start',
                    backgroundColor: '#1e3a8a'
                  }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {/* IMAGE WITH CURTAIN REVEAL EFFECT */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="object-cover w-full h-full"
                      style={{
                        filter: 'brightness(0.85)'
                      }}
                    />
                    
                    {/* CURTAIN OVERLAY - Slides away when card is revealed during scroll */}
                    <div 
                      className="absolute inset-0 z-20 transition-all ease-in-out duration-1200"
                      style={{
                        background: 'linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%)',
                        transform: revealedCards.has(i) ? 'translateX(100%)' : 'translateX(0)',
                        transformOrigin: 'left'
                      }}
                    />
                    
                    {/* Dark gradient overlay on image */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)'
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-8">
                    {/* ICON BOX */}
                    <div
                      className="flex items-center justify-center w-16 h-16 text-gray-900 transition-all duration-500 bg-yellow-400 shadow-lg rounded-xl group-hover:scale-110 group-hover:rotate-6"
                    >
                      <IconComponent type={industry.icon} className="w-8 h-8" />
                    </div>

                    {/* TEXT */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {industry.title}
                      </h3>
                      
                      {/* DESCRIPTION - Only appears on hover */}
                      <p 
                        className="text-sm leading-relaxed transition-all duration-500 text-white/90"
                        style={{
                          opacity: hover === i ? 1 : 0,
                          transform: hover === i ? 'translateY(0)' : 'translateY(20px)',
                          maxHeight: hover === i ? '200px' : '0px',
                          overflow: 'hidden'
                        }}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM ACCENT LINE - appears on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 bg-yellow-400"
                    style={{
                      width: hover === i ? '100%' : '0%'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* SCROLL NAVIGATION DOTS */}
            <div className="flex justify-center gap-3 mt-8">
              {industries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className="relative h-2 transition-all duration-300 rounded-full"
                  style={{
                    width: currentIndex === i ? '40px' : '16px',
                    backgroundColor: currentIndex === i 
                      ? '#facc15' 
                      : 'rgba(0,0,0,0.2)'
                  }}
                />
              ))}
            </div>

            {/* NAVIGATION ARROWS */}
            <button 
              onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
              className="absolute left-0 flex items-center justify-center w-12 h-12 transition-transform -translate-x-6 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-800 hover:scale-110 disabled:opacity-30"
              disabled={currentIndex === 0}
            >
              <ArrowRight className="w-5 h-5 text-gray-900 rotate-180 dark:text-white" />
            </button>
            
            <button 
              onClick={() => scrollToIndex(Math.min(industries.length - 1, currentIndex + 1))}
              className="absolute right-0 flex items-center justify-center w-12 h-12 transition-transform translate-x-6 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-800 hover:scale-110 disabled:opacity-30"
              disabled={currentIndex === industries.length - 1}
            >
              <ArrowRight className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float-arrow {
          0%, 100% {
            transform: translateX(-30px);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateX(30px);
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
        }
        
        .arrow-float {
          animation: float-arrow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}