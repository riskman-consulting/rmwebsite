import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronUp,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import Subscriber from "../common/Subscriber"

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      alert("Thank you for subscribing!");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/riskman", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/riskman", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/riskman", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/riskman", label: "Twitter" },
  ];

  return (
    <footer className="transition-colors duration-300 border-t bg-surfaceLight dark:bg-surfaceDark text-brandDark dark:text-white border-borderLight dark:border-borderDark">
      {/* ✅ MATCH HEADER CONTAINER */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 py-16">
        
        {/* Top Section: Logo + Newsletter */}
        <div className="flex flex-col items-start justify-between gap-12 pb-16 border-b border-borderLight dark:border-borderDark lg:flex-row">
          
          {/* Left: Logo + Description */}
          <div className="max-w-sm">
            {/* <Link to="/" className="inline-block">
              <img
                src="/rm.png"
                alt="RiskMan"
                className="h-10 mb-6 transition-transform hover:scale-105 dark:hidden"
              />
              <img
                src="/riskman-logo-white.svg"
                alt="RiskMan"
                className="hidden h-10 mb-6 transition-transform hover:scale-105 dark:block"
              />
            </Link> */}

             <Link to="/" className="flex items-center flex-shrink-0 h-16 w-36">
                          <img
                            className="object-contain h-12 dark:hidden"
                            src="/rm.png"
                            alt="Riskman"
                          />
                          <img
                            className="hidden object-contain h-12 w-28 dark:block"
                            src="/riskman-logo-white.svg"
                            alt="Riskman"
                          />
                        </Link>
            
            <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
              RiskMan Assurance and Advisory provides expert advisory in audit, risk, compliance, 
              cybersecurity, and digital transformation — helping businesses grow with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a 
                href="mailto:info@riskman.in" 
                className="flex items-center gap-2 text-sm transition-colors text-brandNavy dark:text-gray-400 hover:text-brandPrimary dark:hover:text-brandAccent"
              >
                <Mail size={16} />
                <span>info@riskman.in</span>
              </a>
              {/* <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 text-sm transition-colors text-brandNavy dark:text-gray-400 hover:text-brandPrimary dark:hover:text-brandAccent"
              >
                <Phone size={16} />
                <span>+91</span>
              </a> */}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg bg-brandPrimary/10 dark:bg-brandAccent/20 text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="w-full max-w-md">
            <h3 className="mb-3 text-lg font-semibold text-brandDark dark:text-white">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-sm text-brandNavy dark:text-gray-400">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Subscriber/>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
          
          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark dark:text-white">Enterprise Services</h4>
            <ul className="space-y-2 text-sm text-brandNavy dark:text-gray-400">
              <li><Link to="/services/risk-advisory" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Risk Advisory</Link></li>
              <li><Link to="/services/digital-transformation" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Digital Transformation</Link></li>
              <li><Link to="/services/esg" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Sustainability & ESG</Link></li>
              <li><Link to="/services/financial-advisory" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Financial Advisory</Link></li>
              <li><Link to="/services/ai-technology" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">AI & Technology</Link></li>
              <li><Link to="/services/forensics-investigation" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Forensics and Investigation</Link></li>
              {/* <li><Link to="/services/it-risk-management" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">IT Risk Management</Link></li> */}
            </ul>
          </div>

          {}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark dark:text-white">IT Risk Management</h4>
            <ul className="space-y-2 text-sm text-brandNavy dark:text-gray-400">
              <li><Link to="/services/soc-services" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">SOC Compliances</Link></li>
              <li><Link to="/services/iso-certifications" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">ISO & TISAX Readiness</Link></li>
              <li><Link to="/services/pci-dss-compliance" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">PCI DSS</Link></li>
              <li><Link to="/services/itgc-itac" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">ITGC and ITAC</Link></li>
              <li><Link to="/services/bcp-dr" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">BCP/DR</Link></li>
              <li><Link to="/services/cybersecurity" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Cybersecurity</Link></li>
              <li><Link to="/services/data-privacy" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Data Privacy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark dark:text-white">Company</h4>
            <ul className="space-y-2 text-sm text-brandNavy dark:text-gray-400">
              <li><Link to="/about" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">About Us</Link></li>
              <li><Link to="/about/#co-founders" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Leadership Team</Link></li>
              <li><Link to="/careers" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Careers</Link></li>
              <li><Link to="/governance" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Governance</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark dark:text-white">Support</h4>
            <ul className="space-y-2 text-sm text-brandNavy dark:text-gray-400">
              <li><Link to="/contact" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Contact</Link></li>
              <li><Link to="/privacy-policy" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-sm border-t text-brandNavy dark:text-gray-400 border-borderLight dark:border-borderDark md:flex-row">
          <p>RiskMan Consulting © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Terms of Use</Link>
            <Link to="/contact" className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent">Contact</Link>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed z-50 p-4 text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-r from-brandPrimary to-brandNavy dark:bg-gradient-to-r dark:from-brandAccent dark:to-brandGold dark:text-brandDark hover:shadow-brandPrimary/50 dark:hover:shadow-brandAccent/50 bottom-6 right-6 md:bottom-8 md:right-8"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}