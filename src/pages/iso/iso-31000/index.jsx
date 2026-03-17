import { Helmet } from "react-helmet-async";
import Hero from './HeroSection';
import Framework from './Framework';
import Process from './Process';
import Governance from './Governance';
import CTA from './CTA';
import FAQ from './FAQ';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      <Helmet>
        <title>ISO 31000 Risk Management Framework | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting helps organizations implement ISO 31000 risk management frameworks, establishing systematic processes to identify, assess, and treat risks across all operations." />
        <link rel="canonical" href="https://www.riskman.in/services/iso-certifications/iso-31000" />
      </Helmet>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Framework />
        <Process />
        <Governance />
        <FAQ />
        <CTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;