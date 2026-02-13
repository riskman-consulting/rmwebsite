import React from 'react';
import ServiceCard from './ServiceCard';

import networkSecurityImg from "../../assets/images/pci-dss/network-security.png"
import dataprotectImg from "../../assets/images/pci-dss/data-protect.png"
import vulnerabilityImg from "../../assets/images/pci-dss/vulnerability.png"
import accessControlImg from "../../assets/images/pci-dss/access-control.png"
import monitoringImg from "../../assets/images/pci-dss/monitoring.png"
import policyImg from "../../assets/images/pci-dss/policy-compliance.png"





const ServicesSection = () => {
  const services = [
    {
      title: "Secure Networks",
      description: "Establish a robust digital perimeter that prevents unauthorized access while facilitating legitimate business transactions.",
      image: networkSecurityImg,
      features: [
        { title: "Network Security Controls", desc: "" },
        { title: "System Hardening", desc: "" }
      ]
    },
    {
      title: "Protect Data",
      description: "Multi-layered defense strategy protecting data during storage and while traversing public digital networks.",
      image: dataprotectImg,
      features: [
        { title: "Encryption Standards", desc: "" },
        { title: "Transmission Security", desc: "" }
      ]
    },
    {
      title: "Vulnerability Management",
      description: "Proactive defense mechanisms to counter evolving digital threats and patch internal system weaknesses.",
      image: vulnerabilityImg,
      features: [
        { title: "Malware Protection", desc: "" },
        { title: "Secure Development", desc: "" }
      ]
    },
    {
      title: "Access Control",
      description: "Restrict access to sensitive environments ensuring only authorized personnel interact with critical systems.",
      image: accessControlImg,
      features: [
        { title: "Need-to-Know Access", desc: "" },
        { title: "Identity Management", desc: "" }
      ]
    },
    {
      title: "Monitor & Test",
      description: "Constant vigilance through automated tracking and periodic security testing to identify vulnerabilities.",
      image: monitoringImg,
      features: [
        { title: "Audit Trail Monitoring", desc: "" },
        { title: "Security Testing", desc: "" }
      ]
    },
    {
      title: "Security Policy",
      description: "Comprehensive policy framework ensuring all personnel understand their security responsibilities.",
      image: policyImg,
      features: [
        { title: "Strategic Documentation", desc: "" },
        { title: "Risk Assessments", desc: "" }
      ]
    }
  ];

  return (
    <section id="services" className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark/50">
      <div className="container px-6 lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="block mb-2 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandGold">Our Expertise</span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            PCI DSS Control Objectives
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We provide end-to-end coverage for all six pillars of the Payment Card Industry Data Security Standard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
