import { useState } from "react";
 
import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
 

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
    path: "/industries/energy-utilities"
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
    path: "/industries/retail-consumer"
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
    path: "/industries/healthcare"
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
    path: "/industries/manufacturing"
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
    path: "/industries/it-consulting"
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
    path: "/industries/banking-insurance"
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
  const [hoveredCard, setHoveredCard] = useState(null);
 
  return (
    <section className="bg-bgLight dark:bg-bgDark py-4 sm:py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
       
        {/* Header Section */}
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-900 dark:bg-blue-400 animate-pulse" />
              Specialized Sectors
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
              Built for <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Critical</span> Industries
            </h2>
          </div>
        </div>
 
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group h-[450px] rounded-3xl overflow-hidden shadow-lg bg-gray-800 transition-all duration-500"
            >
              <a href={industry.path} className="block h-full w-full">
               
                {/* 1. Background Image with Blur/Dim on hover */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  style={{
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                    filter: hoveredCard === index ? 'brightness(0.3) blur(3px)' : 'brightness(0.7)',
                  }}
                />
 
                {/* 2. Consistent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
 
                {/* 3. Static Badges (Top) */}
                <div className="absolute top-5 left-5 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex items-center justify-center shadow-xl">
                  <IconComponent type={industry.icon} className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl">
                  <span className="font-bold text-black">{String(index + 1).padStart(2, '0')}</span>
                </div>
 
                {/* 4. Unified Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  {/* Title: Positioned to never overlap icons */}
                  <h3 className={`text-2xl font-black text-white transition-all duration-500 ${
                    hoveredCard === index ? 'mb-4 translate-y-0' : 'mb-0 translate-y-2'
                  }`}>
                    {industry.title}
                  </h3>
 
                  {/* Hidden Details: Fades in only on hover */}
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      hoveredCard === index ? 'opacity-100 max-h-[350px]' : 'opacity-0 max-h-0'
                    }`}
                  >
                    <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-tighter mb-3">
                      {industry.subtitle}
                    </h4>
                    <p className="text-sm text-gray-200 leading-relaxed mb-5 line-clamp-4">
                      {industry.description}
                    </p>
 
                    <div className="bg-white/10 backdrop-blur-md border-l-4 border-yellow-500 p-4 rounded-r-lg">
                     
                      <p className="text-xs text-white/90 leading-tight italic">
                        {industry.marquee}
                      </p>
                    </div>
                  </div>
                </div>
 
                {/* 5. Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1.5 bg-yellow-500 transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`} />
              </a>
            </div>
          ))}
        </div>

        {/* View All Industries Link - Bottom Right */}
        <div className="mt-12 flex justify-end">
          <a 
            href="/industries" 
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-full transition-all duration-300 hover:gap-5 group bg-[#1a2332] dark:bg-yellow-500 text-yellow-500 dark:text-[#1a2332] hover:shadow-2xl hover:scale-105"
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