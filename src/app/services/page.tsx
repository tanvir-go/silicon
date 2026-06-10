"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  ShieldCheck, 
  Code, 
  Network, 
  Cpu, 
  Compass, 
  ArrowRight, 
  Check, 
  X 
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "cloud-devops",
    title: "Cloud Migration & DevOps Pipelines",
    shortDesc: "Migrate legacy backend infrastructures to secure multi-cloud servers configured with automated Terraform CI/CD pipelines.",
    longDesc: "Leverage advanced cloud infrastructure (AWS, Azure, GCP) to accelerate deployment pipelines, minimize system overhead, and ensure robust uptime. Our certified architects construct highly-available multi-region server clusters using automated DevOps containers.",
    iconName: "Cloud",
    features: ["Multi-Cloud Migrations", "Kubernetes Clustering", "Automated Terraform CI/CD", "Infrastructure Telemetry Audits"]
  },
  {
    id: "sec-audits",
    title: "Infrastructure Auditing & Cyber Assessment",
    shortDesc: "Hardening operational networks through professional penetration testing, comprehensive access controls, and compliance certifications.",
    longDesc: "Secure your operational boundaries and databases from threat actors. We execute mock penetration testing, construct zero-trust firewall configurations, audit server access credentials, and align layouts with ISO/IEC 27001 and GDPR compliance frameworks.",
    iconName: "ShieldCheck",
    features: ["Penetration Testing", "Security Operations (SOC)", "Vulnerability Auditing", "GDPR/ISO Compliance"]
  },
  {
    id: "systems-dev",
    title: "Bespoke Systems Development",
    shortDesc: "Engineering high-performance enterprise systems, custom backend REST/GraphQL APIs, and responsive, fluid frontend layers.",
    longDesc: "From multi-tenant administrative portals to custom database-driven applications, we construct resilient systems using scalable modern stacks. Every system features high-performance core APIs, fluid frontends, and fully responsive layouts.",
    iconName: "Code",
    features: ["Custom Software Platforms", "REST & GraphQL APIs", "Microservices Architecture", "Responsive Dashboard Layouts"]
  },
  {
    id: "sd-wan-net",
    title: "Unified SD-WAN Networking & Edge Routing",
    shortDesc: "Designing and routing secure, low-latency WAN networks and fiber-redundant cabling paths to optimize distributed branches.",
    longDesc: "Architect secure and modern wide-area network topologies that guarantee high-throughput, low-latency communication across scattered offices. We configure software-defined WAN boundaries, redundant fiber trunks, and automated failover gates.",
    iconName: "Network",
    features: ["WAN Architecture", "Edge Security Routing", "Failover Fiber Channels", "Network Virtualization Systems"]
  },
  {
    id: "ai-llm",
    title: "Generative AI & Specialized LLM Integrations",
    shortDesc: "Deploying, finetuning, and managing localized artificial intelligence pipelines and neural models for advanced business automation.",
    longDesc: "Empower your corporate workflows with cognitive machine learning. We construct localized natural language processing pipelines, specialized Large Language Model finetunings, and vector-search database indexing networks.",
    iconName: "Cpu",
    features: ["AI Pipeline Deployments", "Custom LLM Finetuning", "Cognitive Workflow Models", "Vector Search Integration"]
  },
  {
    id: "cio-advisory",
    title: "Executive Board CIO Advisory",
    shortDesc: "Bridging the gap between operational tech stacks and board-level strategy with dedicated advice, budgets, and security schemas.",
    longDesc: "Align operational technology spend with long-term business scale. Our seasoned advisors evaluate legacy architectures, deliver digital transformation roadmaps, plan secure network budgets, and audit business continuity frameworks.",
    iconName: "Compass",
    features: ["CIO Technical Advisory", "Tech Stack Assessments", "Operational Risk Auditing", "IT Budget Planning"]
  }
];

const getServiceIcon = (name: string, isHovered = false) => {
  const baseClass = "w-6 h-6 transition-colors duration-300";
  switch (name) {
    case "Cloud":
      return <Cloud className={`${baseClass} ${isHovered ? "text-white" : "text-sky-500"}`} />;
    case "ShieldCheck":
      return <ShieldCheck className={`${baseClass} ${isHovered ? "text-white" : "text-rose-600"}`} />;
    case "Code":
      return <Code className={`${baseClass} ${isHovered ? "text-white" : "text-blue-600"}`} />;
    case "Network":
      return <Network className={`${baseClass} ${isHovered ? "text-white" : "text-indigo-600"}`} />;
    case "Cpu":
      return <Cpu className={`${baseClass} ${isHovered ? "text-white" : "text-[#D32F2F]"}`} />;
    default:
      return <Compass className={`${baseClass} ${isHovered ? "text-white" : "text-teal-600"}`} />;
  }
};

const getIconBgClass = (name: string) => {
  switch (name) {
    case "Cloud": return "bg-sky-50 border-sky-105 group-hover:bg-sky-100/80 group-hover:border-sky-200";
    case "ShieldCheck": return "bg-rose-50 border-rose-105 group-hover:bg-rose-100/80 group-hover:border-rose-200";
    case "Code": return "bg-blue-50 border-blue-105 group-hover:bg-blue-100/80 group-hover:border-blue-200";
    case "Network": return "bg-indigo-50 border-indigo-105 group-hover:bg-indigo-100/80 group-hover:border-indigo-200";
    case "Cpu": return "bg-red-50 border-red-105 group-hover:bg-red-100/80 group-hover:border-red-200";
    default: return "bg-teal-50 border-teal-105 group-hover:bg-teal-100/80 group-hover:border-teal-200";
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            Professional IT Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F2C59] leading-tight">
            Our Professional Technology Architectures
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed font-medium">
            We provide deep-level technical engineering services and advisory support to secure, scale, and accelerate enterprise software structures.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Icon capsule */}
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm transition-all duration-300 ${getIconBgClass(service.iconName)}`}>
                  {getServiceIcon(service.iconName, false)}
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-[#0F2C59] group-hover:text-[#000072] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Highlights checklist */}
                <ul className="flex flex-col gap-2.5 border-t pt-5 mt-5 border-slate-100">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer action trigger */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-400">0{idx + 1}.</span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#000072] group-hover:text-[#D32F2F] cursor-pointer transition-colors duration-300"
                >
                  Deep Dive
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Deep-Dive Drawer Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              
              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full max-w-lg rounded-3xl p-8 bg-white border border-slate-150 shadow-2xl overflow-hidden relative text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border text-slate-500 cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-6 pt-2">
                  {/* Header info */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[#000072]/5 text-[#000072]">
                      {React.createElement(
                        selectedService.iconName === "Cloud" ? Cloud :
                        selectedService.iconName === "ShieldCheck" ? ShieldCheck :
                        selectedService.iconName === "Code" ? Code :
                        selectedService.iconName === "Network" ? Network :
                        selectedService.iconName === "Cpu" ? Cpu : Compass, 
                        { className: "w-6 h-6" }
                      )}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-[#0F2C59] leading-tight">
                        {selectedService.title}
                      </h3>
                      <span className="text-[10px] text-[#D32F2F] font-bold uppercase tracking-wider mt-1 block">
                        Technical Specifications
                      </span>
                    </div>
                  </div>

                  {/* Long description content */}
                  <p className="text-xs text-slate-500 leading-relaxed font-medium bg-[#F8FAFC] border border-slate-100 p-5 rounded-2xl">
                    {selectedService.longDesc}
                  </p>

                  {/* Core capabilities */}
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0F2C59] mb-4 uppercase tracking-wider">
                      Included Capabilities
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 bg-[#F8FAFC] border border-slate-100 px-4 py-2.5 rounded-xl font-semibold">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA action trigger */}
                  <Link href="/contact" onClick={() => setSelectedService(null)} className="mt-2">
                    <button className="w-full py-4 rounded-xl bg-[#000072] hover:bg-[#000072]/90 text-white font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      Inquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}

