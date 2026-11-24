import { BrowserRouter as Router, StaticRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'
import { matchRoutes, createRoutesFromChildren } from 'react-router-dom'
import { lazyPage } from './utils/lazyPage'
import Header from './components/layout/Header'

import Home from './pages/home/Home'
// import ServicesList from './pages/services/ServicesList'
const IndustriesList = lazyPage(() => import('./pages/industries/IndustriesList'))
const IndustriesTemplate = lazyPage(() => import('./templates/IndustriesTemplate'))
const ServicesTemplate = lazyPage(() => import('./templates/ServiceTemplate'))
const Contact = lazyPage(() => import('./pages/contact/Contact'))
const About = lazyPage(() => import('./pages/about/About'))
const Careers = lazyPage(() => import('./pages/careers'))
const JobDetail = lazyPage(() => import('./pages/careers/JobDetail'))
import Footer from './components/footer-temp'
const BlogList = lazyPage(() => import('./pages/blogs/BlogList'))
const BlogTemplate = lazyPage(() => import('./templates/BlogTemplate'))
const PrivacyPolicy = lazyPage(() => import('./pages/resources/Privacy'))
const Terms = lazyPage(() => import('./pages/resources/Terms'))
const BlogSingle = lazyPage(() => import('./pages/blogs/BlogSingle'))
const NewsletterList = lazyPage(() => import('./pages/newsletter/NewsletterList'))
import './index.css'
const ConcurrentAuditPage = lazyPage(() => import('./pages/concurrent-audit'))
const PoliciesPage = lazyPage(() => import('./pages/policies'))

import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/common/ScrollToTop'
import PageViewTracker from './components/common/PageViewTracker'
// Studio is a large bundle - keep it out of the main site chunk.
const StudioPage = lazy(() => import('./pages/studio/StudioPage'))
import ThemeToggle from './components/common/ThemeToggle'
// import Events from './temp/MainEvent'
const Events = lazyPage(() => import('./pages/events/Events'))
const ServicePage = lazyPage(() => import('./pages/services/Services'))
import HeaderTemp from './temp-header/Header'
const TechSolutions = lazyPage(() => import('./pages/tech-solutions/TechSolutions'))
const RiskAdvisoryPage = lazyPage(() => import('./pages/risk-advisory/RiskAdvisoryPage'))
const FinancialAdvisoryPage = lazyPage(() => import('./pages/financial-advisory/temp/FinancialAdvisoryPage'))
const ERMPage = lazyPage(() => import('./pages/erm/ERMPage'))
// import RBIAPage from './pages/rbia/RBIAPage'
const RBIAPage = lazyPage(() => import('./pages/rbia/RBIAPage'))
const BCPPage = lazyPage(() => import('./pages/bcp-dr/BCPPage'))
const CSAPage = lazyPage(() => import('./pages/csa/CSAPage'))

// Digital Transformation
const DigitalTransformation = lazyPage(() => import('./pages/digital/DigitalTransformationPage'))
const StrategicPMO = lazyPage(() => import('./pages/digital/StrategicPMO'))
const ImplementationExcellence = lazyPage(() => import('./pages/digital/implementation-excellence'))
const SupportServices = lazyPage(() => import('./pages/digital/support-services'))

// import ESGPage from "./pages/esg/ESGPage"

const ISO27001 = lazyPage(() => import('./pages/iso/iso-27001'))
const IsoLayout = lazyPage(() => import('./pages/iso/IsoLayout'))
const TPRM = lazyPage(() => import('./pages/tprm/TPRMPage'))
const CybersecurityPage = lazyPage(() => import('./pages/cybersecurity/CybersecurityPage'))
const ITGCITACPage = lazyPage(() => import('./pages/itgc-itac/ITGCITACPage'))

// soc
const SOCPage = lazyPage(() => import('./pages/soc/soc/SocPage'))
const SOC1Page = lazyPage(() => import('./pages/soc/soc1/Soc1Page'))
const SOC2Page = lazyPage(() => import('./pages/soc/soc2/Soc2Page'))
const SOC3Page = lazyPage(() => import('./pages/soc/soc3/Soc3Page'))

/// ISO Pages
const ISOPage = lazyPage(() => import('./pages/iso/iso'))
const ISO27701Page = lazyPage(() => import('./pages/iso/iso-27701'))
const ISO22301Page = lazyPage(() => import('./pages/iso/iso-22301'))
const ISO31000Page = lazyPage(() => import('./pages/iso/iso-31000'))
const ISO42001Page = lazyPage(() => import('./pages/iso/iso-42001'))

// Layout 
const SocLayout = lazyPage(() => import('./pages/soc/SocLayout'))
const DigitalLayout = lazyPage(() => import('./pages/digital/Layout'))
const RiskAdvisoryLayout = lazyPage(() => import('./pages/risk-advisory/Layout'))
const ESGLayout = lazyPage(() => import('./pages/esg/Layout'))
const FinancialAdvisoryLayout = lazyPage(() => import('./pages/financial-advisory/Layout'))
const DataPrivacyLayout = lazyPage(() => import('./pages/data-privacy/Layout'))
const EventLayout = lazyPage(() => import('./pages/events/EventLayout'))
const CPALayout = lazyPage(() => import('./pages/cpa/Layout'))

// ESG Pages
const ESGPage = lazyPage(() => import('./pages/esg/ESGPage'))
const ESGStrategyRoadmapPage = lazyPage(() => import('./pages/esg/strategy-roadmap'))
const ESGReportingDisclosurePage = lazyPage(() => import('./pages/esg/reporting-disclosure'))
const ESGCarbonFootprintPage = lazyPage(() => import('./pages/esg/carbon-footprint'))
const ESGSustainabilityAssurancePage = lazyPage(() => import('./pages/esg/sustainability-assurance'))

// Financial Pages
const FinancialPage = lazyPage(() => import('./pages/financial-advisory/temp/FinancialAdvisoryPage'))
const FinancialCreditRisk = lazyPage(() => import('./pages/financial-advisory/credit-risk-assessment/CreditRiskAssessmentPage'))
const FinancialCreditPortfolio = lazyPage(() => import('./pages/financial-advisory/credit-portfolio-management'))
const FinancialLoanReview = lazyPage(() => import('./pages/financial-advisory/loan-review-monitoring'))
const FinancialCreditPolicy = lazyPage(() => import('./pages/financial-advisory/credit-policy-framework/CreditPolicyFrameworkPage'))

// Data Privacy
const DataPrivacyPage = lazyPage(() => import('./pages/data-privacy/data-privacy'))
const DPPDCompliancePage = lazyPage(() => import('./pages/data-privacy/dpdp'))
const GDPRCompliancePage = lazyPage(() => import('./pages/data-privacy/gdpr'))
const OtherRegulatoryCompliance = lazyPage(() => import('./pages/data-privacy/others'))

const SOXICOFRPage = lazyPage(() => import('./pages/sox-itcofr'))
const AiTechnology = lazyPage(() => import('./pages/AITechnology/AiTechnology'))
const ProductsLayout = lazyPage(() => import('./pages/products/Layout'))
const ProductPage = lazyPage(() => import('./pages/products/ProductPage'))
const GrcRiskBasedInternalAudit = lazyPage(() => import('./pages/products/riskman-grc/risk-based-internal-audit'))
const GrcControlTesting = lazyPage(() => import('./pages/products/riskman-grc/control-testing'))
const GrcPolicy = lazyPage(() => import('./pages/products/riskman-grc/policy'))
const GrcActionTakenReport = lazyPage(() => import('./pages/products/riskman-grc/action-taken-report'))
const GrcEnterpriseRiskManagement = lazyPage(() => import('./pages/products/riskman-grc/enterprise-risk-management'))
const GrcGlobalSox = lazyPage(() => import('./pages/products/riskman-grc/global-sox'))
const FAASLayout = lazyPage(() => import('./pages/faas/Layout'))
const FAASPage = lazyPage(() => import('./pages/faas/FAASPage'))
const FAASManagedServices = lazyPage(() => import('./pages/faas/managed-services'))
const FAASStrategicLeadership = lazyPage(() => import('./pages/faas/strategic-leadership'))
const FAASFinancialAdvisory = lazyPage(() => import('./pages/faas/financial-advisory'))
const FAASTransactionAuditReadiness = lazyPage(() => import('./pages/faas/transaction-audit-readiness'))
const FAASCostingPlantFinance = lazyPage(() => import('./pages/faas/costing-plant-finance'))
const FAASComplianceAssurance = lazyPage(() => import('./pages/faas/compliance-assurance'))



const EventAccomplshments = lazyPage(() => import('./pages/events/accomplishment'))
const EventCompanyJourney = lazyPage(() => import('./pages/events/CompanyTimelineSection'))
const EventMedia = lazyPage(() => import('./pages/events/media-coverage'))
const EventPastEvent = lazyPage(() => import('./pages/events/past-events'))
const EventUpcomingEvent = lazyPage(() => import('./pages/events/upcoming-events'))

const GovernancePage = lazyPage(() => import('./pages/governance/Governance'))
const TisaxPage = lazyPage(() => import('./pages/iso/tisax'))

const PCIDSSPage = lazyPage(() => import('./pages/pci-dss'))


// forensics-investigation
const ForensicsInvestigationPage = lazyPage(() => import('./pages/forensics-investigation'))
// Web Analytics
import {Analytics} from "@vercel/analytics/react"
// Speed Insights (real-visitor Core Web Vitals in the Vercel dashboard)
import { SpeedInsights } from "@vercel/speed-insights/react"
//CPA
const CPAPage = lazyPage(() => import('./pages/cpa/cpa'))
const FinancialStatementPage = lazyPage(() => import('./pages/cpa/financial-audits'))
const InternalControlReview = lazyPage(() => import('./pages/cpa/internal-control'))
const ComplianceAudit = lazyPage(() => import('./pages/cpa/compliance-audits'))
const QualityAssurancePage = lazyPage(() => import('./pages/cpa/quality-assurance'))
import { useHomePage } from './store/home'
const NotFound = lazyPage(() => import('./pages/NotFound'))
 



// Datatal transformation



const ROUTES = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />

          <Route path="/services/bcp-dr" element={<BCPPage />} />

          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />

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

          {/* Products — RiskMan GRC */}
          <Route path="/products" element={<ProductsLayout />}>
            <Route path="" element={<ProductPage />} />
            <Route path="riskman-grc" element={<ProductPage />} />
            <Route path="riskman-grc/risk-based-internal-audit" element={<GrcRiskBasedInternalAudit />} />
            <Route path="riskman-grc/control-testing" element={<GrcControlTesting />} />
            <Route path="riskman-grc/policy" element={<GrcPolicy />} />
            <Route path="riskman-grc/action-taken-report" element={<GrcActionTakenReport />} />
            <Route path="riskman-grc/enterprise-risk-management" element={<GrcEnterpriseRiskManagement />} />
            <Route path="riskman-grc/global-sox" element={<GrcGlobalSox />} />
          </Route>

          {/* Financial Accounting and Advisory Services (FAAS) Nested Routes */}
          <Route path="/services/faas" element={<FAASLayout />}>
            <Route path="" element={<FAASPage />} />
            <Route path="managed-services" element={<FAASManagedServices />} />
            <Route path="strategic-leadership" element={<FAASStrategicLeadership />} />
            <Route path="financial-advisory" element={<FAASFinancialAdvisory />} />
            <Route path="transaction-audit-readiness" element={<FAASTransactionAuditReadiness />} />
            <Route path="costing-plant-finance" element={<FAASCostingPlantFinance />} />
            <Route path="compliance-assurance" element={<FAASComplianceAssurance />} />
          </Route>

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
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobDetail />} />
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
)

/**
 * Loads the code for the page(s) matching `pathname`. main.jsx waits for this
 * before the first render, so the prerendered markup is replaced by the real
 * page directly, without a loading state in between.
 */
export function preloadRoute(pathname) {
  const matches = matchRoutes(createRoutesFromChildren(ROUTES.props.children), pathname) || []
  return Promise.all(
    matches.map((m) => m.route.element?.type?.preload?.()).filter(Boolean)
  ).catch(() => {})
}

function SiteShell() {
  const { pathname } = useLocation()

  // Sanity Studio owns the whole viewport under /cms - no site header/footer.
  if (pathname === '/cms' || pathname.startsWith('/cms/')) {
    return (
      <Suspense fallback={<div style={{ padding: '2rem', fontFamily: 'system-ui' }}>Loading Studio…</div>}>
        <StudioPage />
      </Suspense>
    )
  }

  return (
    <>
      <HeaderTemp />
      <Toaster position="top-right" />

      {/* CRITICAL FIX: Add pt-[123px] to account for fixed header 
          - Announcement banner: 43px (top-0)
          - Navbar: 80px (top-[43px])
          - Total: 123px
      */}
      <main className="pt-[123px]">
        {/* Pages load on demand. On navigation the current page stays on
            screen until the next one's chunk arrives (router transitions). */}
        <Suspense fallback={<div className="min-h-screen" />}>
          {ROUTES}
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </main>

      <Footer />
    </>
  )
}

// `location` is only passed by src/entry-server.jsx, which renders each route
// to HTML at build time; in the browser the app runs on BrowserRouter as before.
function App({ location }) {
  const [theme, setTheme] = useState(() =>
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "light"
  );
  const {heroSlides,fetchHomePage} = useHomePage()

  // Apply theme to document
  useEffect(() => {
    
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);


  

  if (location) {
    return (
      <StaticRouter location={location}>
        <ScrollToTop />
        <SiteShell />
      </StaticRouter>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <PageViewTracker />
      <SiteShell />
    </Router>
  )
}

export default App