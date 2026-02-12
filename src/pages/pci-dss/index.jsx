import React from 'react';

import Hero from './Herosection';
import ServicesSection from './Services';
import CTA from './CTA';
import FAQ from './FAQ';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark">
    
      <main>
        <Hero />
        <ServicesSection />
        <CTA />
        <FAQ />
      </main>
   
    </div>
  );
}

export default App;
