import { Award, Calendar, HeadphonesIcon, Mail, MapPin, MessageSquare, Phone, Shield, TrendingUp, Zap } from "lucide-react";

export const contactMethods = [
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
 
  export const whyContactReasons = [
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
 
  export const officeFeatures = [
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
 
  export const services = [
    "Business Continuity Planning",
    "Risk Assessment & Analysis",
    "Compliance Management",
    "Crisis Management",
    "Cyber Security",
    "Other Services"
  ];