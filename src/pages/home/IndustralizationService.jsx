import { useEffect, useState } from "react";
 
import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
import { useHomePage } from "../../store/home";
 

const industriesData = [
  {
    id: "energy",
    title: "Energy & Utilities",
    subtitle: "Navigating the Transition to a Sustainable Future",
    description: "As the sector pivots toward decarbonization and grid modernization, we help energy leaders manage the dual challenges of regulatory evolution and operational risk. Our expertise in ESG Advisory and GHG Accounting ensures transparency, while our internal audit frameworks safeguard critical infrastructure.",
    marquee: "Trusted by industry giants such as Coal India, Renewables, and India Power.",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
    tag: "ENERGY SECTOR",
    // path: "/industries/energy-utilities"
  },
  {
    id: "retail",
    title: "Retail & Consumer",
    subtitle: "Building Agility in a Hyper-Connected Market",
    description: "In an era of rapid digital shift and supply chain volatility, we provide the assurance necessary to protect brand reputation and consumer trust. We focus on Process Mining to optimize lean operations and Data Privacy to secure the expanding digital footprint of modern retail.",
    marquee: "Partnering with market leaders like Zomato, Blinkit, Spencer's, Khadim, and Pernod Ricard.",
    icon: "cart",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
    tag: "RETAIL INDUSTRY",
    // path: "/industries/retail-consumer"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Ensuring Integrity in High-Stakes Environments",
    description: "The healthcare sector faces a rigorous landscape of data protection (DPDP/HIPAA) and financial compliance. We deliver specialized IT Risk Management and Forensic Investigations to ensure your operations meet the highest standards of integrity and patient data security.",
    marquee: "Providing strategic assurance for organizations like Care Health.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
    tag: "HEALTHCARE SECTOR",
    // path: "/industries/healthcare"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Mining",
    subtitle: "Optimizing Performance Through Digital Transformation",
    description: "From Industry 4.0 integrations to global supply chain disruptions, we help manufacturers modernize safely. Our team focuses on Robotic Process Automation (RPA) and Risk-Based Internal Audits to enhance cost-efficiency and operational transparency.",
    marquee: "Proven track record with industrial heavyweights including Jindal, Electrosteel, Indorama, and Kariwala.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
    tag: "MANUFACTURING",
    // path: "/industries/manufacturing"
  },
  {
    id: "technology",
    title: "Technology & Ed-Tech",
    subtitle: "Securing the Frontier of Innovation",
    description: "For high-growth tech firms, speed must be balanced with security. We provide the SOC 1/2/3 and ISO 27001 certifications that global clients demand, ensuring your platforms are built on a foundation of trust and robust cybersecurity.",
    marquee: "Empowering innovators such as Nexval, Innovist, and leading Ed-Tech & Vocational Training ventures.",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
    tag: "TECH INDUSTRY",
    // path: "/industries/it-consulting"
  },
  {
    id: "banking",
    title: "Banking & Financial Services",
    subtitle: "Driving Stability in a Changing Regulatory Landscape",
    description: "With leadership experience from the World Bank and the Big 4, we offer unparalleled depth in Credit Rating Advisory, Debt Structuring, and IFC/SOX compliance. We help financial institutions navigate evolving ESG regulations and digital operational resilience.",
    marquee: "Leveraging decades of experience with global institutions like The World Bank and IDFC FIRST Bank.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
    tag: "FINANCIAL SERVICES",
    // path: "/industries/banking-insurance"
  },
];


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

  

  const [hoverTimer, setHoverTimer] = useState(null);

  

  const handleImageHover = (path) => {
    // Navigate to the page after hovering on image
    const timer = setTimeout(() => {
      window.location.href = path;
    }, 1000);
    setHoverTimer(timer);
  };

  const handleImageLeave = () => {
    // Cancel navigation if mouse leaves image
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
  };

  useEffect(()=>{
    fetchIndustries()
  },[])
 
  return (
    <section className="py-4 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 sm:py-8">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
       
        {/* Header Section */}
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-blue-900 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              <span className="w-2 h-2 bg-blue-900 rounded-full dark:bg-blue-400 animate-pulse" />
              Specialized Sectors
            </div>
            <h2 className="mb-6 text-4xl font-black text-gray-900 dark:text-white">
              Built for <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Critical</span> Industries
            </h2>
          </div>
        </div>
 
        {/* The Grid */}
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries?.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-3xl dark:bg-gray-800"
            >
              {/* Image Section */}
              <div 
                className="relative h-64 overflow-hidden cursor-auto"
                onMouseEnter={() => {
                  setHoveredCard(index);
                  // handleImageHover(industry.path);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  handleImageLeave();
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
                <div className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-xl top-5 left-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                  <IconComponent type={industry.icon} className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="absolute z-20 flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-xl top-5 right-5">
                  <span className="font-bold text-black">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1.5 bg-yellow-500 transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Content Section - Always Visible */}
              <div className="flex flex-col flex-1 p-6 transition-all duration-500 bg-white dark:bg-gray-800 group-hover:shadow-xl">
                <h3 className="mb-2 text-2xl font-black text-gray-900 dark:text-white">
                  {industry.title}
                </h3>
                
                <h4 className="mb-3 text-sm font-bold tracking-tight text-yellow-600 uppercase dark:text-yellow-400">
                  {industry.subtitle}
                </h4>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {industry.description}
                </p>
                
                <div className="p-4 mt-auto bg-gray-100 border-l-4 border-yellow-500 rounded-r-lg dark:bg-gray-700/50 backdrop-blur-md">
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
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-yellow-500 transition-all duration-300 bg-gray-800 rounded-full hover:gap-5 group dark:bg-yellow-500 dark:text-gray-900 hover:shadow-2xl hover:scale-105"
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