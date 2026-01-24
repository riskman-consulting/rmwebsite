import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, Shield, Zap, TrendingUp, MessageSquare, Calendar, HeadphonesIcon } from "lucide-react";
import contactHeroImg from "../../assets/images/contact/hero-background.png";
import consultationImg from "../../assets/images/contact/consultation-team.png";
import contact from "../../assets/images/contact/contact.png"
 
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  const contactMethods = [
    {
      id: "email",
      icon: <Mail className="text-4xl" />,
      title: "Email Us",
      description: "Drop us an email anytime and we'll get back to you within 24 hours.",
      details: [
        "General Inquiries",
        "Support Requests",
        "Partnership Opportunities",
        "Feedback & Suggestions"
      ],
      contact: "info@riskman.in",
      action: "mailto:info@riskman.in",
    },
    {
      id: "phone",
      icon: <Phone className="text-4xl" />,
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance and consultations.",
      details: [
        "Emergency Support",
        "Technical Assistance",
        "Consultation Booking",
        "Account Management"
      ],
      contact: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      id: "visit",
      icon: <MapPin className="text-4xl" />,
      title: "Visit Us",
      description: "Come say hello at our office. We'd love to meet you in person.",
      details: [
        "In-Person Consultations",
        "Office Tours",
        "Workshop Sessions",
        "Team Meetings"
      ],
      contact: "Kolkata, West Bengal, India",
      action: null,
    },
  ];
 
  const whyContactReasons = [
    {
      icon: <Shield className="text-3xl" />,
      title: "Expert Guidance",
      description: "Get personalized advice from industry-leading risk management consultants.",
    },
    {
      icon: <Zap className="text-3xl" />,
      title: "Fast Response",
      description: "We respond to all inquiries within 24 hours to keep your project moving.",
    },
    {
      icon: <TrendingUp className="text-3xl" />,
      title: "Proven Results",
      description: "Join hundreds of satisfied clients who've transformed their risk strategies.",
    },
  ];
 
  const officeFeatures = [
    {
      icon: <MessageSquare className="text-3xl" />,
      title: "Free Consultation",
      description: "Initial 30-minute consultation at no cost"
    },
    {
      icon: <Calendar className="text-3xl" />,
      title: "Flexible Scheduling",
      description: "Book meetings at your convenience"
    },
    {
      icon: <HeadphonesIcon className="text-3xl" />,
      title: "Dedicated Support",
      description: "Personal account manager for every client"
    },
    {
      icon: <Award className="text-3xl" />,
      title: "Quality Assurance",
      description: "98% client satisfaction rate"
    }
  ];
 
  const services = [
    "Business Continuity Planning",
    "Risk Assessment & Analysis",
    "Compliance Management",
    "Crisis Management",
    "Cyber Security",
    "Other Services"
  ];
 
  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[70vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-bgLight/70 via-bgLight/60 to-bgLight/50 dark:from-bgDark/70 dark:via-bgDark/60 dark:to-bgDark/50" />
          <img
            src={contact}
            alt="Contact Us - Modern Office"
            className="object-cover object-top w-full h-full"
          />
        </div>
 
        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <p className="mb-4 text-lg font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Get in Touch
            </p>
 
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white">
              Contact
              <br />
              <span className="text-brandPrimary dark:text-brandAccent">
                Our Team
              </span>
            </h1>
 
            <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-brandNavy dark:text-gray-400">
              Ready to strengthen your business resilience? Let's discuss your unique challenges and craft tailored solutions
            </p>
          </div>
        </div>
      </section>
 
      {/* ================= CONTACT METHODS OVERVIEW ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              How to <span className="text-brandPrimary dark:text-brandAccent">Reach Us</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
              Choose the communication method that works best for you. We're here to help through
              multiple channels, ensuring you get the support you need.
            </p>
          </div>
 
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredMethod(method.id)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="relative p-8 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />
 
                <div className="relative z-10">
                  <div
                    className="flex items-center justify-center w-20 h-20 mb-6 transition-all duration-300 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark"
                  >
                    {method.icon}
                  </div>
 
                  <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {method.title}
                  </h3>
 
                  <p className="mb-6 leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/90">
                    {method.description}
                  </p>
 
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-bold text-brandDark dark:text-white">
                      Available For:
                    </h4>
                    <ul className="space-y-3">
                      {method.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/90"
                        >
                          <CheckCircle className="flex-shrink-0 mt-1 text-brandPrimary dark:text-brandAccent" size={14} />
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  <div className="pt-6 transition-colors duration-300 border-t border-borderLight dark:border-borderDark group-hover:border-brandGold dark:group-hover:border-brandAccent">
                    {method.action ? (
                      <a
                        href={method.action}
                        className="flex items-center gap-2 font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover:translate-x-1"
                      >
                        {method.contact}
                        <Send size={14} />
                      </a>
                    ) : (
                      <p className="font-semibold text-brandPrimary dark:text-brandAccent">
                        {method.contact}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= WHY CONTACT US ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Why <span className="text-brandPrimary dark:text-brandAccent">Connect With Us</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
              Experience the difference of working with dedicated risk management professionals
            </p>
          </div>
 
          <div className="grid gap-8 md:grid-cols-3">
            {whyContactReasons.map((reason, i) => (
              <div
                key={i}
                className="relative p-8 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />
 
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                    {reason.icon}
                  </div>
 
                  <h3 className="mb-4 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {reason.title}
                  </h3>
 
                  <p className="leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/90">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= CONTACT FORM WITH IMAGE ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: Form */}
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
                Send Us a
                <br />
                <span className="text-brandPrimary dark:text-brandAccent">
                  Message
                </span>
              </h2>
 
              <p className="mb-8 text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                Fill out the form below and our team will get back to you within 24 hours.
                We're committed to providing prompt, professional responses to all inquiries.
              </p>
 
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
 
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
 
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
 
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
 
                <div>
                  <label className="block mb-2 text-sm font-semibold text-brandDark dark:text-white">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 transition-all border resize-none bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl focus:border-brandPrimary dark:focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandPrimary/20 dark:focus:ring-brandAccent/20 text-brandDark dark:text-white"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
 
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="w-full px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle size={18} />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                  )}
                </button>
              </div>
            </div>
 
            {/* Right: Image with Office Hours */}
            <div className="relative">
              <div className="relative">
                <img
                  src={consultationImg}
                  alt="Professional Consultation Team"
                  className="relative object-cover w-full mb-8 border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark"
                />
              </div>
 
              {/* Office Hours Card */}
              <div className="relative p-6 overflow-hidden border shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                  <h3 className="text-xl font-bold text-brandDark dark:text-white">Office Hours</h3>
                </div>
                <div className="space-y-2 text-brandNavy dark:text-gray-400">
                  <p className="flex justify-between">
                    <span className="font-semibold text-brandDark dark:text-white">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-brandDark dark:text-white">Saturday:</span>
                    <span>Closed</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-brandDark dark:text-white">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= OFFICE FEATURES ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl text-brandDark dark:text-white">
            What We <span className="text-brandPrimary dark:text-brandAccent">Offer</span>
          </h2>
 
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {officeFeatures.map((feature, i) => (
              <div
                key={i}
                className="relative p-6 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />
 
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                    {feature.icon}
                  </div>
 
                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {feature.title}
                  </h3>
 
                  <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= LOCATION MAP ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Our <span className="text-brandPrimary dark:text-brandAccent">Location</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
              Visit our office or schedule a virtual consultation with our team
            </p>
          </div>
 
          <div className="overflow-hidden border shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
            <div className="relative flex items-center justify-center overflow-hidden h-96 bg-brandPrimary/5 dark:bg-brandAccent/5">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 shadow-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 rounded-3xl">
                  <MapPin className="w-12 h-12 text-brandPrimary dark:text-brandAccent" />
                </div>
                <h3 className="mb-3 text-3xl font-bold text-brandDark dark:text-white">RiskMan Consulting</h3>
                <p className="mb-6 text-xl text-brandNavy dark:text-gray-400">Kolkata, West Bengal, India</p>
                <button className="px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= CTA ================= */}
      <section className="text-center section-padding bg-surfaceLight/50 dark:bg-surfaceDark/50">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
          Ready to Get
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">
            Started
          </span>?
        </h2>
 
        <p className="max-w-2xl mx-auto mb-8 text-xl text-brandNavy dark:text-gray-400">
          Join hundreds of businesses that trust RiskMan Consulting to protect and grow their operations
        </p>
 
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
          >
            View Our Services
          </a>
          <a
            href="/about"
            className="inline-block px-8 py-4 text-lg font-bold transition-all duration-300 border-2 rounded-full border-brandPrimary dark:border-brandAccent text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark hover:scale-105"
          >
            Learn More About Us
          </a>
        </div>
      </section>
    </div>
  );
}