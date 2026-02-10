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
import Careers from './pages/careers'
import Footer from './components/layout/Footer'
import BlogList from './pages/blogs/BlogList'
import BlogTemplate from './templates/BlogTemplate'
import PrivacyPolicy from './pages/resources/Privacy'
import Terms from './pages/resources/Terms'
import BlogSingle from './pages/blogs/BlogSingle'
import './index.css'
import PCI_DSSPage from "./pages/pci-dss"

import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/common/ScrollToTop'
import Events from './pages/events/Events'
import ServicePage from './pages/services/Services'
import HeaderTemp from './temp-header/Header'
import TechSolutions from "./pages/tech-solutions/TechSolutions"
// import FinancialAdvisoryPage from './pages/financial-advisory/temp/FinancialAdvisoryPage'
import AITechnologyPage from "./pages/ai-technology"
import ITACPage from "./pages/itgc-itac/ITGCITACPage"
import GovernancePage from './pages/governance'








// Layout
import IsoLayout from './pages/iso/IsoLayout'
import SocLayout from "./pages/soc/SocLayout"
import RiskAdvisoryLayout from "./pages/risk-advisory/Layout"
import DigitalLayout from "./pages/digital/Layout"
import EventLayout from "./pages/events/EventLayout"
import ESGLayout from "./pages/esg/Layout"
import AboutLayout from "./pages/about/Layout"
import FinancialLayout from "./pages/financial-advisory/Layout"
import DataPrivacyLayout from "./pages/data-privacy/Layout"
import CPALayout from "./pages/cpa/Layout"

//   Soc Pages imports
import SocPage from './pages/soc/soc/SocPage'
import Soc1Page from './pages/soc/soc1/Soc1Page'
import SOC2Page from './pages/soc/soc2/Soc2Page'
import Soc3Page from './pages/soc/soc3/Soc3Page'

// ISO Pages imports
import ISO27001Page from './pages/iso/iso-27001'
import ISO27701Page from './pages/iso/iso-27701'
import ISO22301Page from './pages/iso/iso-22301/Index'
import ISO31000Page from './pages/iso/iso-31000'
import ISO42001Page from "./pages/iso/iso-42001"
import TisaxPage from "./pages/iso/tisax"
import ISO_AND_TISAX_Page from "./pages/iso/iso-tisax"

// Evvents Page
import EventAccomplshments from "./pages/events/accomplishments"
import EventCompanyJourney from "./pages/events/CompanyTimelineSection"
import EventMedia from './pages/events/media-coverage'
import EventPastEvent from "./pages/events/past-events"
import EventUpcomingEvent from "./pages/events/upcoming-events"

// ESG Pages
import ESGPage from "./pages/esg"
import ESGStrategyRoadmapPage from "./pages/esg/strategy-roadmap"
import ESGReportingDisclosurePage from "./pages/esg/reporting-disclosure"
import ESGCarbonFootprintPage from "./pages/esg/carbon-footprint"
import ESGSustainabilityAssurancePage from "./pages/esg/sustainability-assurance"

// Digital Transformation Pages
import DigitalTransformationHub from './pages/digital/digital'
import StrategicPMO from './pages/digital/strategies-pmo'
import ImplementationExcellence from './pages/digital/implement'
import SupportServices from './pages/digital/support'

// risk advisory Pages
import RiskAdvisoryPage from './pages/risk-advisory/RiskAdvisoryPage'
import RBIAPage from './pages/rbia/RBIAPage'
import BCPPage from "./pages/bcp-dr/BCPPage"
import CSAPage from "./pages/csa/CSAPage"
import TPRMPage from "./pages/tprm"
import ERMPage from './pages/erm/ERMPage'
import Sox_ItCofrPage from "./pages/sox-itcofr"

// financial Pages
import FinancialPage from "./pages/financial-advisory/temp/FinancialAdvisoryPage"
import FinancialCreditRisk from "./pages/financial-advisory/credit-risk-assessment"
import FinancialCreditPortfolio from "./pages/financial-advisory/credit-portfolio-management"
import FinancialLoanReview from "./pages/financial-advisory/loan-review-monitoring"
import FinancialCreditPolicy from "./pages/financial-advisory/credit-policy-framework"

// data privecy Pages
import DataPrivacyPage from "./pages/data-privacy/data-privacy"
import DPDPPage from "./pages/data-privacy/dpdp"
import GDPRPage from "./pages/data-privacy/gdpr"
import OtherPage from "./pages/data-privacy/others"

// CPA Pages
import CPAPage from "./pages/cpa/cpa"
import FinancialStatementPage from "./pages/cpa/financial-audits"
import InternalControlReview from "./pages/cpa/internal-control"
import ComplianceAudit from "./pages/cpa/compliance-audits"
import QualityAssurancePage from './pages/cpa/quality-assurance'



// cybersecurity
import CyberSecurityPage from "./pages/cybersecurity"

// ForensicsInvestigationPage
import ForensicsInvestigationPage from './pages/forensics-investigation'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  console.log('App rendered, theme:', theme); // Debug log

  // Apply theme to document
  useEffect(() => {
    console.log('Theme changed to:', theme); // Debug log
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />

      <HeaderTemp />
      <Toaster position="top-right" />


      <main className="pt-[128px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/bcp-dr" element={<BCPPage />} />
          <Route path="/services/cybersecurity" element={<CyberSecurityPage />} />
          <Route path='/services/pci-dss-compliance' element={<PCI_DSSPage />} />

          // Digital routes
          <Route path='/services/digital-transformation' element={<DigitalLayout />} >
            <Route path='' element={<DigitalTransformationHub />} />
            <Route path='strategic-pmo' element={<StrategicPMO />} />
            <Route path='implementation' element={<ImplementationExcellence />} />
            <Route path='support-services' element={<SupportServices />} />
          </Route>

          <Route path='/services/itgc-itac' element={<ITACPage />} />
          <Route path="/services/ai-technology" element={<AITechnologyPage />} />
          <Route path='/governance' element={<GovernancePage />} />



          // financial Pages
          <Route path="/services/financial-advisory" element={<FinancialLayout />} >
            <Route path='' element={<FinancialPage />} />
            <Route path='credit-risk-assessment' element={<FinancialCreditRisk />} />
            <Route path='credit-policy-framework' element={<FinancialCreditPolicy />} />
          </Route>
           // ISO Routes define
          <Route path="/services/iso-certifications" element={<IsoLayout />}>
            <Route />
            <Route path='' element={<ISO_AND_TISAX_Page />} />
            <Route path="iso-27001" element={<ISO27001Page />} />
            <Route path="iso-27701" element={<ISO27701Page />} />
            <Route path="iso-22301" element={<ISO22301Page />} />
            <Route path="iso-31000" element={<ISO31000Page />} />
            <Route path="iso-42001" element={<ISO42001Page />} />
            <Route path='tisax' element={<TisaxPage />} />
          </Route>

          // CPA Routes
          <Route path='/services/cpa-us-assurance' element={<CPALayout/>}  >
            <Route path=''  element={<CPAPage/>} />
            <Route path='financial-statement-audits'  element={<FinancialStatementPage/>} />
            <Route path='internal-control-reviews' element={<InternalControlReview/>} />
            <Route path='compliance-audits' element={<ComplianceAudit/>} />
            <Route path='quality-assurance'  element={<QualityAssurancePage/>}  />
          </Route>

          // SOC Routes define
          <Route path="/services/soc-services" element={<SocLayout />} >
            <Route path='' element={<SocPage />} />
            <Route path="soc-1" element={<Soc1Page />} />
            <Route path="soc-2" element={<SOC2Page />} />
            <Route path="soc-3" element={<Soc3Page />} />
          </Route>

          // Risk-Advisory
          <Route path='services/risk-advisory' element={<RiskAdvisoryLayout />}>
            <Route path='' element={<RiskAdvisoryPage />} />
            <Route path='rbia' element={<RBIAPage />} />
            <Route path='erm' element={<ERMPage />} />
            <Route path='csa' element={<CSAPage />} />
            <Route path='tprm' element={<TPRMPage />} />
            <Route path='sox-icofr-ifc' element={<Sox_ItCofrPage />} />
            <Route path='csa' element={<CSAPage />} />
            <Route path='concurrent-audits' element={<h2>Concurrent Audits</h2>} />
            <Route path='formulation-of-policies-and-sops' element={<h1>Formulation of Policies and SOPS</h1>} />
          </Route>

          // Event Routes
          <Route path='/events' element={<EventLayout />}>
            <Route path='' element={<Events />} />
            <Route path='upcoming-events' element={<EventUpcomingEvent />} />
            <Route path='past-events' element={<EventPastEvent />} />
            <Route path='accomplishments' element={<EventAccomplshments />} />
            <Route path='emerging-awards' element={<h1>Emerging Awards</h1>} />
            <Route path='company-journey' element={<EventCompanyJourney />} />
            <Route path='media-coverage' element={<EventMedia />} />

          </Route>

          // ESG Pages
          <Route path='/services/esg' element={<ESGLayout />}  >
            <Route path='' element={<ESGPage />} />
            <Route path='strategy-roadmap' element={<ESGStrategyRoadmapPage />} />
            <Route path='reporting-disclosure' element={<ESGReportingDisclosurePage />} />
            <Route path='carbon-footprint' element={<ESGCarbonFootprintPage />} />
            <Route path='sustainability-assurance' element={<ESGSustainabilityAssurancePage />} />
          </Route>


          // Data Privary
          <Route path='/services/data-privacy' element={<DataPrivacyLayout />} >
            <Route path='' element={<DataPrivacyPage />} />
            <Route path='dpdp'  element={<DPDPPage/>} />
            <Route path='gdpr'  element={<GDPRPage/>} />
            <Route path='other' element={<OtherPage/>} />
          </Route>

          <Route path="/about" element={<AboutLayout />} >
            <Route path='' element={<div className='flex flex-col justify-center items-center'>

              <About />
            </div>} />
          </Route>
          <Route path='/services/forensics-investigation'  element={<ForensicsInvestigationPage/>} />
          <Route path="/industries" element={<IndustriesList />} />
          <Route path="/industries/:id" element={<IndustriesTemplate />} />
          <Route path="/insights" element={<BlogList />} />
          <Route path="/insights/:slug" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/solutions" element={<TechSolutions />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App