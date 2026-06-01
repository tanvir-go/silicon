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
import { fadeInUp, staggerContainer } from "@/lib/utils";

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "cloud-devops",
    title: "Cloud Migration & DevOps Pipelines",
    shortDesc: "Migrate legacy backend infrastructures to secure multi-cloud servers configured with automated Terraform CI/CD pipelines.",
    longDesc: "Leverage advanced cloud infrastructure (AWS, Azure, GCP) to accelerate deployment pipelines, minimize system overhead, and ensure robust uptime. Our certified architects construct highly-available multi-region server clusters using automated DevOps containers.",
    icon: Cloud,
    features: ["Multi-Cloud Migrations", "Kubernetes Clustering", "Automated Terraform CI/CD", "Infrastructure Telemetry Audits"]
  },
  {
    id: "sec-audits",
    title: "Infrastructure Auditing & Cyber Assessment",
    shortDesc: "Hardening operational networks through professional penetration testing, comprehensive access controls, and compliance certifications.",
    longDesc: "Secure your operational boundaries and databases from threat actors. We execute mock penetration testing, construct zero-trust firewall configurations, audit server access credentials, and align layouts with ISO/IEC 27001 and GDPR compliance frameworks.",
    icon: ShieldCheck,
    features: ["Penetration Testing", "Security Operations (SOC)", "Vulnerability Auditing", "GDPR/ISO Compliance"]
  },
  {
    id: "systems-dev",
    title: "Bespoke Systems Development",
    shortDesc: "Engineering high-performance enterprise systems, custom backend REST/GraphQL APIs, and responsive, fluid frontend layers.",
    longDesc: "From multi-tenant administrative portals to custom database-driven applications, we construct resilient systems using scalable modern stacks. Every system features high-performance core APIs, fluid frontends, and fully responsive layouts.",
    icon: Code,
    features: ["Custom Software Platforms", "REST & GraphQL APIs", "Microservices Architecture", "Responsive Dashboard Layouts"]
  },
  {
    id: "sd-wan-net",
    title: "Unified SD-WAN Networking & Edge Routing",
    shortDesc: "Designing and routing secure, low-latency WAN networks and fiber-redundant cabling paths to optimize distributed branches.",
    longDesc: "Architect secure and modern wide-area network topologies that guarantee high-throughput, low-latency communication across scattered offices. We configure software-defined WAN boundaries, redundant fiber trunks, and automated failover gates.",
    icon: Network,
    features: ["WAN Architecture", "Edge Security Routing", "Failover Fiber Channels", "Network Virtualization Systems"]
  },
  {
    id: "ai-llm",
    title: "Generative AI & Specialized LLM Integrations",
    shortDesc: "Deploying, finetuning, and managing localized artificial intelligence pipelines and neural models for advanced business automation.",
    longDesc: "Empower your corporate workflows with cognitive machine learning. We construct localized natural language processing pipelines, specialized Large Language Model finetunings, and vector-search database indexing networks.",
    icon: Cpu,
    features: ["AI Pipeline Deployments", "Custom LLM Finetuning", "Cognitive Workflow Models", "Vector Search Integration"]
  },
  {
    id: "cio-advisory",
    title: "Executive Board CIO Advisory",
    shortDesc: "Bridging the gap between operational tech stacks and board-level strategy with dedicated advice, budgets, and security schemas.",
    longDesc: "Align operational technology spend with long-term business scale. Our seasoned advisors evaluate legacy architectures, deliver digital transformation roadmaps, plan secure network budgets, and audit business continuity frameworks.",
    icon: Compass,
    features: ["CIO Technical Advisory", "Tech Stack Assessments", "Operational Risk Auditing", "IT Budget Planning"]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <main className="min-h-screen bg-white  pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Professional Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-primary">
            Our Professional Technology Architectures
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            We provide deep-level technical engineering services and advisory support to secure, scale, and accelerate enterprise software structures.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08, 0.15)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp(0, 0.55)}
                className="group relative p-6 rounded-2xl bg-[#F0F4F7] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative z-10 flex flex-col gap-5">
                  {/* Icon capsule */}
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-accent-500 group-hover:text-white transition-all duration-300 w-12 h-12 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-slate-800 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2.5 leading-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <ul className="flex flex-col gap-2.5 border-t pt-4 border-slate-100 ">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 ">
                        <Check className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action trigger */}
                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">0{idx + 1}.</span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-655 hover:text-primary-750 cursor-pointer transition-colors duration-300"
                  >
                    Deep Dive
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
                className="w-full max-w-lg rounded-3xl p-6 bg-[#F0F4F7] shadow-2xl overflow-hidden relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border text-slate-500 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-5 pt-3">
                  {/* Header info */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-655 ">
                      {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-855 leading-tight">
                        {selectedService.title}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 block">
                        Technical Specifications
                      </span>
                    </div>
                  </div>

                  {/* Long description content */}
                  <p className="text-xs text-slate-605 leading-relaxed bg-[#F0F4F7] p-4 rounded-2xl">
                    {selectedService.longDesc}
                  </p>

                  {/* Core capabilities */}
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-705 mb-3 uppercase tracking-wider">
                      Included Capabilities
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 bg-[#F0F4F7]/50 px-3 py-2 rounded-xl">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA action trigger */}
                  <Link href="/contact" onClick={() => setSelectedService(null)} className="mt-2">
                    <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
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
