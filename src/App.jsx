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
import Events from './temp/MainEvent'
import ServicePage from './pages/services/Services'
import HeaderTemp from "../src/components/layout/temp/Header"
import HeaderNew from "./components/layout/Header"

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
      {/* <HeaderTemp/> */}
      <HeaderNew/>
      <Toaster position="top-right" />
      
      <main className="pt-[20px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:id" element={<ServicesTemplate />} />
          <Route path="/industries" element={<IndustriesList />} />
          <Route path="/industries/:id" element={<IndustriesTemplate />} />
          <Route path="/insights" element={<BlogList />} />
          <Route path="/insights/:slug" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events/>}/>
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  )
}

export default App