
import React,{useState} from "react"
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import FrameworkSection from "./Framework";
import MethodologySection from "./Methodology";
import ExecutionMethodology from "./ExecutionMethodology";
import SOPSection from "./SOPSection";
import DeliverySection from "./DeliverySection";
import ValueSection from "./ValueSection";
import WhySection from "./WhySection";
import { Divider } from "../../components/ui/SectionComponents";
import SOPDeliverables from "./SOPDeliverable";



export default function RiskManPoliciesPage() {
  const [activeNav, setActiveNav] = useState("overview");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ["overview", "framework", "methodology", "sop", "delivery", "value", "why"];
  //     for (let i = sections.length - 1; i >= 0; i--) {
  //       const el = document.getElementById(sections[i]);
  //       if (el && el.getBoundingClientRect().top < 200) {
  //         setActiveNav(sections[i]);
  //         break;
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollTo = (id) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-slate-800 dark:text-slate-200 selection:bg-brandAccent selection:text-brandDark">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  
      
      <HeroSection/>
      <OverviewSection />
      <Divider />
      <FrameworkSection />
      <Divider />
      {/* <MethodologySection /> */}
      {/* <Divider /> */}

      <ExecutionMethodology/>
      <Divider/>

      <SOPSection/>


      <SOPDeliverables/>
      {/* <SOPSection /> */}
      <Divider />
      {/* <DeliverySection /> */}
      <Divider />
      <ValueSection />
      <Divider />
      <WhySection />
    </div>
  );
}
