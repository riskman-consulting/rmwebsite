import Hero from './Herosection';
import Framework from './Framework';
import Process from './Process';
import Governance from './Governance';
import CTA from './CTA';
import FAQ from './FAQ';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
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