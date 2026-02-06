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
import Careers from './pages/about/Careers'
import Footer from './components/layout/Footer'
import BlogList from './pages/blogs/BlogList'
import BlogTemplate from './templates/BlogTemplate'
import PrivacyPolicy from './pages/resources/Privacy'
import Terms from './pages/resources/Terms'
import BlogSingle from './pages/blogs/BlogSingle'
import './index.css'

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


import TPRMPage from "./pages/tprm"

import DigitalTransformationHub from './pages/digital/DigitalTransformation'
import StrategicPMO from './pages/digital/StrategicPMO'
import ImplementationExcellence from './pages/digital/ImplementationExcellence'
import SupportServices from './pages/digital/SupportServices'
import EGSPage from "./pages/esg"


// Layout
import IsoLayout from './pages/iso/IsoLayout'
import SocLayout from "./pages/soc/SocLayout"
import RiskAdvisoryLayout from "./pages/risk-advisory/Layout"
import DigitalLayout from "./pages/digital/Layout"
import EventLayout from "./pages/events/EventLayout"

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

// Evvents Page
import EventAccomplshments from "./pages/events/accomplishments"
import EventCompanyJourney from "./pages/events/CompanyTimelineSection"
import EventMedia from './pages/events/media-coverage'
import EventPastEvent from "./pages/events/past-events"
import EventUpcomingEvent from "./pages/events/upcoming-events"



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
          {/* <Route path="/services/risk-advisory/csa" element={<CSAPage />} /> */}
          {/* <Route path="/services/risk-advisory" element={<RiskAdvisoryPage />} /> */}
          {/* <Route path="/services/risk-advisory/erm" element={<ERMPage />} /> */}
          <Route path="/services/financial-advisory" element={<FinancialAdvisoryPage />} />
          {/* <Route path="/services/risk-advisory/rbia" element={<RBIAPage />} /> */}
          <Route path="/services/esg" element={<EGSPage />} />

          // Digital routes
          <Route path='/services/digital-transformation' element={<DigitalLayout />} >
            <Route path='' element={<DigitalTransformationHub />} />
            <Route path='strategic-pmo' element={<StrategicPMO />} />
            <Route path='implementation' element={<ImplementationExcellence />} />
            <Route path='support-services' element={<SupportServices />} />
          </Route>



           // ISO Routes define
          <Route path="/services/iso-certifications" element={<IsoLayout />}>
            <Route path="iso-27001" element={<ISO27001Page />} />
            <Route path="iso-27701" element={<ISO27701Page />} />
            <Route path="iso-22301" element={<ISO22301Page />} />
            <Route path="iso-31000" element={<ISO31000Page />} />
            <Route path="iso-42001" element={<ISO42001Page />} />
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
            <Route path='sox-icofr-ifc' element={<h2>SOX/ICOFR/IFC</h2>} />
            <Route path='csa' element={<h2>CSA</h2>} />
            <Route path='concurrent-audits' element={<h2>Concurrent Audits</h2>} />
            <Route path='formulation-of-policies-and-sops' element={<h1>Formulation of Policies and SOPS</h1>} />
          </Route>

          // Event Routes
          <Route path='/events' element={<EventLayout />}>
            <Route path='' element={<Events/>} />
            <Route path='upcoming-events'  element={<EventUpcomingEvent/>} /> 
            <Route path='past-events' element={<EventPastEvent/>} /> 
            <Route path='accomplishments' element={<EventAccomplshments/>} /> 
            <Route path='emerging-awards' element={<h1>Emerging Awards</h1>} /> 
            <Route path='company-journey' element={<EventCompanyJourney/>} /> 
            <Route path='media-coverage' element={<EventMedia/>} /> 

          </Route>


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