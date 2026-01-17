import HeroSection from "./sections/HeroSection";
import TrustedCompanies from "./sections/TrustedCompanies";
import WeHelpSection from "./sections/WeHelpSection";
import SolutionsSection from "./sections/SolutionsSection";
import PartnerSection from "./sections/PartnerSection";
import HelpUsSection from "./sections/HelpUsSection";
import ProActiveSection from "./sections/ProActiveSection";
import RiskAnalysisSection from "./sections/RiskAnalysisSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ArticlesSection from "./sections/ArticlesSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

const MAP = {
  hero: HeroSection,
  trustedCompanies: TrustedCompanies,
  weHelp: WeHelpSection,
  solutions: SolutionsSection,
  partner: PartnerSection,
  helpUs: HelpUsSection,
  proActive: ProActiveSection,
  riskAnalysis: RiskAnalysisSection,
  testimonials: TestimonialsSection,
  articles: ArticlesSection,
  faq: FAQSection,
  cta: CTASection,
};

export default function SectionRenderer({ section }) {
  const Component = MAP[section.type];
  if (!Component) return null;
  return <Component data={section} />;
}
