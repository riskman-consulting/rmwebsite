import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const industriesData = [
  {
    title: "Energy & Utilities",
    description: "Specialized audit and assurance services ensuring regulatory compliance and operational resilience for global energy enterprises.",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
    path: "/industries/energy-utilities"
  },
  {
    title: "Retail & Consumer",
    description: "Strengthening governance, internal controls, and financial transparency across complex retail and consumer ecosystems.",
    icon: "cart",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
    path: "/industries/retail-consumer"
  },
  {
    title: "Healthcare",
    description: "Supporting healthcare organizations with HIPAA compliance, clinical risk, and performance assurance.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
    path: "/industries/healthcare"
  },
  {
    title: "Manufacturing",
    description: "Enhancing efficiency, supply chain controls, and environmental compliance across industrial manufacturing sectors.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
    path: "/industries/manufacturing"
  },
  {
    title: "Technology",
    description: "Helping fast-growth technology companies manage cybersecurity risk, global compliance, and digital scalability.",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
    path: "/industries/it-consulting"
  },
  {
    title: "Banking & Insurance",
    description: "Foundational audit and advisory solutions tailored for the high-stakes banking and financial insurance sectors.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
    path: "/industries/banking-insurance"
  },
];

const IconComponent = ({ type, className }) => {
  switch (type) {
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
  const [index, setIndex] = useState(industriesData.length);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const controls = useAnimation();

  const industries = [...industriesData, ...industriesData, ...industriesData];
  const cardWidth = 350;
  const cardGap = 32; // gap-8 = 2rem = 32px
  const offsetPerCard = cardWidth + cardGap;
  const totalItems = industriesData.length;

  const handleNext = useCallback(async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextIndex = index + 1;
    setIndex(nextIndex);

    await controls.start({
      x: -(nextIndex * offsetPerCard),
      transition: { type: "spring", stiffness: 100, damping: 20 }
    });

    if (nextIndex >= 2 * totalItems) {
      const resetIndex = nextIndex - totalItems;
      setIndex(resetIndex);
      await controls.set({ x: -(resetIndex * offsetPerCard) });
    }
    setIsTransitioning(false);
  }, [index, totalItems, offsetPerCard, controls, isTransitioning]);

  const handlePrev = useCallback(async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevIndex = index - 1;
    setIndex(prevIndex);

    await controls.start({
      x: -(prevIndex * offsetPerCard),
      transition: { type: "spring", stiffness: 100, damping: 20 }
    });

    if (prevIndex < totalItems) {
      const resetIndex = prevIndex + totalItems;
      setIndex(resetIndex);
      await controls.set({ x: -(resetIndex * offsetPerCard) });
    }
    setIsTransitioning(false);
  }, [index, totalItems, offsetPerCard, controls, isTransitioning]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  // Initial set to center
  useEffect(() => {
    controls.set({ x: -(index * offsetPerCard) });
  }, []);

  return (
    <section className="overflow-hidden transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container relative z-10">
        <div className="flex flex-col gap-12">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                <span className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent animate-pulse" />
                Specialized Sectors
              </div>

              <h2 className="text-5xl md:text-7xl font-bold font-heading text-brandDark dark:text-white leading-[1.1]">
                Built for <span className="text-brandPrimary dark:text-brandAccent">Critical</span> Industries.
              </h2>

              <p className="text-xl leading-relaxed text-brandNavy/70 dark:text-gray-400">
                We deliver tailored risk advisory and digital transformation solutions to the industries that power our world.
              </p>
            </motion.div>

            <div className="flex items-center gap-4">
              <Link
                to="/industries"
                className="flex items-center gap-4 font-bold group text-brandDark dark:text-white"
              >
                <span className="text-lg">Explore All Industries</span>
                <div className="flex items-center justify-center text-white transition-transform duration-300 rounded-full shadow-xl w-14 h-14 bg-brandPrimary dark:bg-brandAccent dark:text-brandDark group-hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>

          <div
            className="relative overflow-visible"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex gap-8"
              animate={controls}
            >
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  className={`relative flex-shrink-0 w-[350px] h-[520px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500`}
                >
                  <Link to={industry.path} className="block w-full h-full">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-brandDark/95 via-brandDark/40 to-transparent opacity-90 group-hover:opacity-100" />

                    <div className="absolute inset-4 border border-white/10 rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-brandAccent/30" />

                    <div className="absolute inset-0 flex flex-col justify-between p-10">
                      <div className="flex items-center justify-center w-16 h-16 transition-transform duration-500 transform shadow-2xl rounded-2xl bg-brandAccent text-brandDark rotate-3 group-hover:rotate-0">
                        <IconComponent type={industry.icon} className="w-8 h-8" />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white font-heading">
                          {industry.title}
                        </h3>
                        <p className="text-sm leading-relaxed transition-colors text-white/70 line-clamp-3 group-hover:text-white">
                          {industry.description}
                        </p>
                        <div className="flex items-center gap-2 text-brandAccent font-bold text-xs uppercase tracking-[0.2em] pt-2">
                          View details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-tr from-brandPrimary/20 to-transparent group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center pt-8">
            <div className="flex gap-2">
              {industriesData.map((_, i) => {
                const isActive = (index % totalItems) === i;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      const diff = i - (index % totalItems);
                      const targetIndex = index + diff;
                      setIndex(targetIndex);
                      controls.start({
                        x: -(targetIndex * offsetPerCard),
                        transition: { type: "spring", stiffness: 100, damping: 20 }
                      });
                      setIsAutoPlaying(false);
                    }}
                    className="h-2 transition-all duration-500 rounded-full"
                    style={{
                      width: isActive ? '40px' : '10px',
                      backgroundColor: isActive
                        ? 'var(--color-brandPrimary, #001F3F)'
                        : 'rgba(0,0,0,0.1)'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}