import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
import { useHomePage } from "../../store/home";
import { useNavigate } from "react-router-dom";
 



const IconComponent = ({ type, className }) => {
  const icons = {
    zap: <Zap className={className} />,
    cart: <ShoppingCart className={className} />,
    heart: <HeartPulse className={className} />,
    factory: <Factory className={className} />,
    monitor: <Monitor className={className} />,
    home: <Home className={className} />,
  };
  return icons[type] || <Zap className={className} />;
};
 
export function IndustryGrid() {
  const {fetchIndustries,industries,loading} = useHomePage()
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchIndustries()
  },[])
 
  return (
    <section className="py-16 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
       
        {/* Header Section */}
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-brandPrimary uppercase bg-brandPrimary/10 rounded-full dark:bg-brandAccent/10 dark:text-brandAccent">
              <span className="w-2 h-2 bg-brandPrimary rounded-full dark:bg-brandAccent animate-pulse" />
              Specialized Sectors
            </div>
            <h2 className="mb-6 font-heading text-3xl md:text-4xl font-bold text-brandDark dark:text-white">
              Built for <span className="text-transparent bg-gradient-to-r from-brandAccent to-brandGold bg-clip-text">Critical</span> Industries
            </h2>
          </div>
        </div>
 
        {/* The Grid */}
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries?.map((industry, index) => (
            <div
              key={index}
              onClick={()=> navigate(`/services`)}
              className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-bgLight shadow-lg cursor-pointer group rounded-3xl dark:bg-bgDark"
            >
              {/* Image Section */}
              <div 
                className="relative h-64 overflow-hidden"
                onMouseEnter={() => {
                  setHoveredCard(index);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                }}
              >
                <img
                  src={industry?.headerImage?.asset?.url}
                  alt={industry.title}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: hoveredCard === index ? 'brightness(0.7)' : 'brightness(0.9)',
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-xl top-5 left-5 bg-white/90 dark:bg-bgDark/90 backdrop-blur-md">
                  <IconComponent type={industry.icon} className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                </div>
                <div className="absolute z-20 flex items-center justify-center w-10 h-10 bg-brandAccent rounded-full shadow-xl top-5 right-5">
                  <span className="font-bold text-brandDark">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1.5 bg-brandAccent transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Content Section - Always Visible */}
              <div className="flex flex-col flex-1 p-6 transition-all duration-500 bg-bgLight dark:bg-bgDark group-hover:shadow-xl">
                <h3 className="mb-1.5 text-base font-black text-brandDark dark:text-white">
                  {industry.title}
                </h3>

                <h4 className="mb-2 text-[10px] font-bold tracking-tight text-brandPrimary uppercase dark:text-brandAccent">
                  {industry.subtitle}
                </h4>

                <div className="mb-4 text-xs leading-relaxed text-gray-700 dark:text-gray-300 [&_p]:text-xs [&_p]:leading-relaxed">
                  {industry.description && <PortableText value={industry.description} />}
                </div>
                
                <div className="p-4 mt-auto bg-surfaceLight border-l-4 border-brandAccent rounded-r-lg dark:bg-surfaceDark backdrop-blur-md">
                  <p className="text-xs italic leading-tight text-gray-800 dark:text-gray-200">
                    {industry.marquee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Industries Link */}
        <div className="flex justify-end mt-12">
          <a 
            href="/industries" 
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-brandAccent transition-all duration-300 bg-brandDark rounded-full hover:gap-5 group dark:bg-brandAccent dark:text-brandDark hover:shadow-2xl hover:scale-105"
          >
            View All Industries
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
 
export default IndustryGrid;