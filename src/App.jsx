import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'

import Home from './pages/home/Home'
// import ServicesList from './pages/services/ServicesList'
import IndustriesList from './pages/industries/IndustriesList'
import IndustriesTemplate from './templates/IndustriesTemplate'
import ServicesTemplate from './templates/ServiceTemplate'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Careers from './pages/careers';
import Footer from './components/footer-temp'
import BlogList from './pages/blogs/BlogList'
import BlogTemplate from './templates/BlogTemplate'
import PrivacyPolicy from './pages/resources/Privacy'
import Terms from './pages/resources/Terms'
import BlogSingle from './pages/blogs/BlogSingle'
import NewsletterList from './pages/newsletter/NewsletterList'
import './index.css'
import ConcurrentAuditPage from './pages/concurrent-audit'
import PoliciesPage from "./pages/policies";

import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/common/ScrollToTop'
import ThemeToggle from './components/common/ThemeToggle'
// import Events from './temp/MainEvent'
import Events from './pages/events/Events'
import ServicePage from './pages/services/Services'
import HeaderTemp from './temp-header/Header'
import TechSolutions from "./pages/tech-solutions/TechSolutions"
import RiskAdvisoryPage from './pages/risk-advisory/RiskAdvisoryPage'
import FinancialAdvisoryPage from './pages/financial-advisory/temp/FinancialAdvisoryPage'
import ERMPage from './pages/erm/ERMPage'
// import RBIAPage from './pages/rbia/RBIAPage'
import RBIAPage from './pages/rbia/RBIAPage'
import BCPPage from "./pages/bcp-dr/BCPPage"
import CSAPage from "./pages/csa/CSAPage"

// Digital Transformation
import DigitalTransformation from './pages/digital/DigitalTransformationPage'
import StrategicPMO from './pages/digital/StrategicPMO'
import ImplementationExcellence from './pages/digital/implementation-excellence'
import SupportServices from './pages/digital/support-services'

// import ESGPage from "./pages/esg/ESGPage"

import ESGTempPage from "./pages/temp-esg";
import ISO27001 from './pages/iso/iso-27001'
import IsoLayout from './pages/iso/IsoLayout'
import TPRM from './pages/tprm/TPRMPage'
import CybersecurityPage from './pages/cybersecurity/CybersecurityPage'
import ITGCITACPage from './pages/itgc-itac/ITGCITACPage'

// soc
import SOCPage from "./pages/soc/soc/SocPage"
import SOC1Page from "./pages/soc/soc1/Soc1Page"
import SOC2Page from "./pages/soc/soc2/Soc2Page"
import SOC3Page from "./pages/soc/soc3/Soc3Page"

/// ISO Pages
import ISOPage from "./pages/iso/iso"
import ISO27701Page from "./pages/iso/iso-27701/"
import ISO22301Page from "./pages/iso/iso-22301"
import ISO31000Page from "./pages/iso/iso-31000"
import ISO42001Page from "./pages/iso/iso-42001"

// Layout 
import SocLayout from "./pages/soc/SocLayout"
import DigitalLayout from "./pages/digital/Layout"
import RiskAdvisoryLayout from "./pages/risk-advisory/Layout"
import ESGLayout from "./pages/esg/Layout"
import FinancialAdvisoryLayout from "./pages/financial-advisory/Layout"
import DataPrivacyLayout from "./pages/data-privacy/Layout"
import EventLayout from "./pages/events/EventLayout";
import CPALayout from "./pages/cpa/Layout"

// ESG Pages
import ESGPage from "./pages/esg/ESGPage"
import ESGStrategyRoadmapPage from "./pages/esg/strategy-roadmap"
import ESGReportingDisclosurePage from "./pages/esg/reporting-disclosure"
import ESGCarbonFootprintPage from "./pages/esg/carbon-footprint"
import ESGSustainabilityAssurancePage from "./pages/esg/sustainability-assurance"

// Financial Pages
import FinancialPage from "./pages/financial-advisory/temp/FinancialAdvisoryPage"
import FinancialCreditRisk from "./pages/financial-advisory/credit-risk-assessment/CreditRiskAssessmentPage"
import FinancialCreditPortfolio from "./pages/financial-advisory/credit-portfolio-management"
import FinancialLoanReview from "./pages/financial-advisory/loan-review-monitoring"
import FinancialCreditPolicy from "./pages/financial-advisory/credit-policy-framework/CreditPolicyFrameworkPage"

// Data Privacy
import DataPrivacyPage from "./pages/data-privacy/data-privacy"
import DPPDCompliancePage from "./pages/data-privacy/dpdp"
import GDPRCompliancePage from "./pages/data-privacy/gdpr"
import OtherRegulatoryCompliance from './pages/data-privacy/others'

import SOXICOFRPage from "./pages/sox-itcofr"
import AiTechnology from './pages/AITechnology/AiTechnology'



import EventAccomplshments from "./pages/events/accomplishment"
import EventCompanyJourney from "./pages/events/CompanyTimelineSection"
import EventMedia from './pages/events/media-coverage'
import EventPastEvent from "./pages/events/past-events"
import EventUpcomingEvent from "./pages/events/upcoming-events"

import GovernancePage from "./pages/governance/Governance";
import TisaxPage from './pages/iso/tisax'

import PCIDSSPage from './pages/pci-dss'


// forensics-investigation
import ForensicsInvestigationPage from "./pages/forensics-investigation"

//CPA
import CPAPage from "./pages/cpa/cpa"
import FinancialStatementPage from "./pages/cpa/financial-audits"
import InternalControlReview from "./pages/cpa/internal-control"
import ComplianceAudit from "./pages/cpa/compliance-audits"
import QualityAssurancePage from './pages/cpa/quality-assurance'
import { useHomePage } from './store/home'
import NotFound from './pages/NotFound'
 



// Datatal transformation



function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const {heroSlides,fetchHomePage} = useHomePage()

  // Apply theme to document
  useEffect(() => {
    
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);


  

  return (
    <Router>
      <ScrollToTop />
      {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}
      {/* <Header theme={theme} setTheme={setTheme} /> */}
      <HeaderTemp />
      <Toaster position="top-right" />

      {/* CRITICAL FIX: Add pt-[128px] to account for fixed header 
          - Announcement banner: 48px (top-0)
          - Navbar: 80px (top-[48px])
          - Total: 128px
      */}
      <main className="pt-[128px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />

          <Route path="/services/bcp-dr" element={<BCPPage />} />
          
          <Route path="/services/esg" element={<ESGTempPage />} />


          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />

          <Route path='/services/iso-certifications' element={<IsoLayout />}>
            <Route path='iso-27001' element={<ISO27001 />} />
          </Route>

          // soc routes
          <Route path='/services/soc-services' element={<SocLayout />}>
            <Route path='' element={<SOCPage />} />
            <Route path='soc-1' element={<SOC1Page />} />
            <Route path='soc-2' element={<SOC2Page />} />
            <Route path='soc-3' element={<SOC3Page />} />
          </Route>

          // iso routes
          <Route path="/services/iso-certifications" element={<IsoLayout />}>
            <Route path='' element={<ISOPage />} />
            <Route path='iso-27001' element={<ISO27001 />} />
            <Route path='iso-27701' element={<ISO27701Page />} />
            <Route path='iso-22301' element={<ISO22301Page />} />
            <Route path='iso-31000' element={<ISO31000Page />} />
            <Route path='iso-42001' element={<ISO42001Page />} />
            <Route path='tisax' element={<TisaxPage/>} />
          </Route>

          <Route path="/services/forensics-investigation" element={<ForensicsInvestigationPage/>}  />

          // Digital Transformation Nested Routes

          <Route path='/services/digital-transformation' element={<DigitalLayout />}>
            <Route path='' element={<DigitalTransformation />} />
            <Route path='strategic-pmo' element={<StrategicPMO />} />
            <Route path='implementation' element={<ImplementationExcellence />} />
            <Route path='support-services' element={<SupportServices />} />
          </Route>

          // Risk Advisory Nested Routes
          <Route path='/services/risk-advisory' element={<RiskAdvisoryLayout />}>
            <Route path='' element={<RiskAdvisoryPage />} />
            <Route path='csa' element={<CSAPage />} />
            <Route path='erm' element={<ERMPage />} />
            <Route path='rbia' element={<RBIAPage />} />
            <Route path='tprm' element={<TPRM />} />
            <Route path='sox-icofr-ifc' element={<SOXICOFRPage />} />
            <Route path='concurrent-audits' element={<ConcurrentAuditPage/>} />
            <Route path='formulation-of-policies-and-sops' element={<PoliciesPage/>} />

          </Route>

          <Route path ="/services/ai-technology" element={<AiTechnology/>} />

          // ESG Nested Routes
          <Route path='/services/esg' element={<ESGLayout />}>
            <Route path='' element={<ESGPage />} />
            <Route path='strategy-roadmap' element={<ESGStrategyRoadmapPage />} />
            <Route path='reporting-disclosure' element={<ESGReportingDisclosurePage />} />
            <Route path='carbon-footprint' element={<ESGCarbonFootprintPage />} />
            <Route path='sustainability-assurance' element={<ESGSustainabilityAssurancePage />} />
          </Route>

          {/* Financial Advisory Nested Routes */}
          <Route  path="/services/financial-advisory" element={<FinancialAdvisoryLayout />} >
            <Route path="" element={<FinancialPage />} />
            <Route path='credit-risk-assessment' element={<FinancialCreditRisk />} />
            <Route path='credit-portfolio-management' element={<FinancialCreditPortfolio />} />
            <Route path='loan-review-monitoring' element={<FinancialLoanReview />} />
            <Route path='credit-policy-framework' element={<FinancialCreditPolicy />} />
          </Route>

          // Data Privacy Nested Routes
          <Route path="/services/data-privacy" element={<DataPrivacyLayout />}>
            <Route path="" element={<DataPrivacyPage />} />
            <Route path='dpdp' element={<DPPDCompliancePage />} />
            <Route path='gdpr' element={<GDPRCompliancePage />} />
            <Route path='other' element={<OtherRegulatoryCompliance />} />
          </Route>


          <Route path='/events' element={<EventLayout />}>
            <Route path='' element={<Events />} />
            <Route path='upcoming-events' element={<EventUpcomingEvent />} />
            <Route path='past-events' element={<EventPastEvent />} />
            <Route path='accomplishments' element={<EventAccomplshments />} />
            <Route path='emerging-awards' element={<h1>Emerging Awards</h1>} />
            <Route path='company-journey' element={<EventCompanyJourney />} />
            <Route path='media-coverage' element={<EventMedia />} />

          </Route>


          // CPA Routes
          <Route path='/services/cpa-us-assurance' element={<CPALayout/>}  >
            <Route path=''  element={<CPAPage/>} />
            <Route path='financial-statement-audits'  element={<FinancialStatementPage/>} />
            <Route path='internal-control-reviews' element={<InternalControlReview/>} />
            <Route path='compliance-audits' element={<ComplianceAudit/>} />
            <Route path='quality-assurance'  element={<QualityAssurancePage/>}  />
          </Route>


          <Route path="/services/itgc-itac" element={<ITGCITACPage />} />

          <Route path="/services/pci-dss-compliance" element={<PCIDSSPage/>} />

          {/* <Route path="/services/:id" element={<ServicesTemplate />} /> */}
          <Route path="/industries" element={<IndustriesList />} />
          <Route path="/industries/:id" element={<IndustriesTemplate />} />
          <Route path="/insights" element={<BlogList />} />
          <Route path="/insights/:slug" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/newsletter" element={<NewsletterList />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/solutions" element={<TechSolutions />} />

          <Route path="/governance" element={<GovernancePage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App