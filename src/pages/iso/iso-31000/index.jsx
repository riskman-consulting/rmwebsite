import Hero from './Herosection';
import Framework from './Framework';
import Process from './Process';
import Governance from './Governance';
import CTA from './CTA';
import FAQ from './FAQ';

import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">

      
                  <Helmet>
                      <title>The International Organization for Standardization 31000 Services | RiskMan</title>
                      <meta
                          name="description"
                          content="Master organizational uncertainty with RiskMan’s ISO 31000 consulting. We provide tools to identify, analyze, and mitigate enterprise-wide risks."
                      />
                      <link
                          rel="canonical"
                          href="https://www.riskman.in/iso-31000"
                      />
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