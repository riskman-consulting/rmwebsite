
import React,{useState} from "react"
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import FrameworkSection from "./Framework";
import MethodologySection from "./Methodology";
import ExecutionMethodology from "./ExecutionMethodology";
import SOPSection from "./SOPSection";
import DeliverySection from "./DeliverySection";
import ValueSection from "./ValueSection";
import WhySection from "./WhySection";
import SOPDeliverables from "./SOPDeliverable";
import RelatedLinks from "../../components/sections/RelatedLinks";



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
      <Helmet>
        <title>Policy & SOP Formulation Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting helps organizations design and formulate governance-aligned policies, standard operating procedures, and internal frameworks to drive operational excellence and compliance." />
        <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/formulation-of-policies-and-sops" />
      </Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  
      
      <HeroSection/>
      <OverviewSection />
      <FrameworkSection />
      {/* <MethodologySection /> */}
      {/* <Divider /> */}

      <ExecutionMethodology/>

      <SOPSection/>


      {/* <SOPDeliverables/> */}
      {/* <SOPSection /> */}
      {/* <DeliverySection /> */}
      <RelatedLinks
        intro="Once your policies and SOPs are written, RiskMan GRC's policy management module handles review and approval, version control, publication and employee acknowledgements."
        links={[
          { label: "Policy and SOP management software", path: "/products/riskman-grc/policy" },
        ]}
      />

      <ValueSection />
      <WhySection />
    </div>
  );
}
