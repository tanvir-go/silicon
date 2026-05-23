"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  ShieldAlert, 
  Cpu, 
  Cloud, 
  Network, 
  Layers, 
  ArrowRight, 
  Check, 
  X,
  Award,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/utils";

interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<any>;
  features: string[];
  metrics: string;
}

const solutionsList: SolutionItem[] = [
  {
    id: "erp-crm",
    title: "Enterprise ERP & CRM Operations",
    shortDesc: "Comprehensive business resource planning and custom customer workflows integrated with legacy telemetry.",
    longDesc: "Unify your corporate data structures, financial ledger divisions, and customer communication pathways. Our customized enterprise platforms eliminate operational silos, automate billing gateways, and provide real-time reporting metrics directly to executive dashboards.",
    icon: Briefcase,
    features: ["Custom CRM Systems", "Integrated Ledger divisions", "Automated Billing Channels", "Workflow Orchestration Systems"],
    metrics: "45% Operations Latency Drop"
  },
  {
    id: "sec-ops",
    title: "Zero-Trust Cybersecurity & Threat Isolation",
    shortDesc: "Absolute endpoint protection, hardware cryptography, and software boundaries designed to isolate SCADA transactions.",
    longDesc: "Protect your organization's intellectual capital and transaction paths from high-velocity cyber threats. We implement zero-trust network boundaries, configure hardware-secured cryptoprocessors, audit SCADA control grids, and establish proactive containment protocols.",
    icon: ShieldCheck,
    features: ["Zero-Trust Boundaries", "SCADA Hardware Shielding", "SIEM Real-Time Monitoring", "Regulatory Audit Alignment"],
    metrics: "100% Threat Containment"
  },
  {
    id: "cog-ai",
    title: "Cognitive Machine Learning & Deep Vision",
    shortDesc: "Bespoke deep residual neural networks, predictive analytical engines, and custom generative AI interfaces.",
    longDesc: "Leverage the power of custom neural networks trained on secure organizational registries. We deploy machine vision models, natural language database querying tools, predictive analytics layers, and custom LLM finetuning environments.",
    icon: Cpu,
    features: ["Neural Classification Models", "Natural Language Queries", "Predictive Analytics Layers", "Generative Agent Pipelines"],
    metrics: "99.4% Predictive Accuracy"
  },
  {
    id: "cloud-ops",
    title: "High-Availability Cloud & Kubernetes",
    shortDesc: "Resilient microservices, multi-region database clusters, and automated continuous deployment setups.",
    longDesc: "Deploy high-performance, fault-tolerant infrastructure designed to maintain uninterrupted corporate presence. We structure multi-region active-active clusters on secure clouds, write automated Terraform scripts, and cut infrastructure costs.",
    icon: Cloud,
    features: ["Kubernetes Clustering", "Multi-Cloud Redundancy", "Infrastructure-as-Code", "Cost Optimization Audits"],
    metrics: "99.99% Uptime Guarantee"
  },
  {
    id: "sd-wan",
    title: "Unified Telecom & SD-WAN Design",
    shortDesc: "Secure, low-latency WAN software-defined boundaries and automated routing for distributed branches.",
    longDesc: "Connect geographically dispersed operations, factories, and corporate offices with secure, high-speed telecom lines. We provide automated SD-WAN edge structures, redundant fiber routing, and advanced firewalls.",
    icon: Network,
    features: ["Software-Defined WAN", "Secure Edge Telemetry", "Fiber Failover Channels", "Segmented Routing Gates"],
    metrics: "60% Network Latency Cut"
  },
  {
    id: "logistics-supply",
    title: "Omni-Channel Retail Logistics & Supply Chain",
    shortDesc: "High-performance tracking dashboards, sub-second supply telemetry, and event-driven architectures with Apache Kafka.",
    longDesc: "Optimize global supply flows with sub-second inventory sync and dynamic fleet routing. We build high-throughput tracking dashboards, event-driven message brokers, and secure portals to sync warehouse centers and consumer nodes.",
    icon: Layers,
    features: ["Event-Driven Supply Sync", "Kafka Telemetry Brokers", "Warehouse Portal Engines", "Mobile Logistics Apps"],
    metrics: "Sub-Second Supply Sync"
  }
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <main className="min-h-screen bg-white  pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-primary">
            Outcome-Based Corporate Solutions
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Silicon Computing Ltd designs and deploys custom operational solutions structured to drive executive board outcomes, minimize system latency, and secure critical infrastructure.
          </p>
        </div>

        {/* Interactive Solutions Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08, 0.15)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutionsList.map((sol) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.id}
                variants={fadeInUp(0, 0.55)}
                className="group relative p-6 rounded-2xl bg-[#F0F4F7] hover-glow transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div className="relative z-10 flex flex-col gap-5">
                  {/* Icon capsule */}
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-accent-500 group-hover:text-white transition-all duration-300 w-12 h-12 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-slate-800 leading-tight">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                      {sol.shortDesc}
                    </p>
                  </div>

                  {/* Highlight Checklist */}
                  <ul className="flex flex-col gap-2.5 border-t pt-4 border-slate-100 ">
                    {sol.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 ">
                        <Check className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action trigger */}
                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold uppercase">
                    {sol.metrics}
                  </span>
                  <button
                    onClick={() => setSelectedSolution(sol)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-655 hover:text-primary-750 cursor-pointer transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Solutions Deep-Dive Drawer Modal */}
        <AnimatePresence>
          {selectedSolution && (
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
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border text-slate-500 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-5 pt-3">
                  {/* Header info */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-655 ">
                      {React.createElement(selectedSolution.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-855 leading-tight">
                        {selectedSolution.title}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 block">
                        Enterprise Solutions Telemetry
                      </span>
                    </div>
                  </div>

                  {/* Long description content */}
                  <p className="text-xs text-slate-605 leading-relaxed bg-[#F0F4F7] p-4 rounded-2xl">
                    {selectedSolution.longDesc}
                  </p>

                  {/* Core capabilities */}
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-705 mb-3 uppercase tracking-wider">
                      Included Capabilities
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {selectedSolution.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 bg-[#F0F4F7]/50 px-3 py-2 rounded-xl">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA action trigger */}
                  <Link href="/contact" onClick={() => setSelectedSolution(null)} className="mt-2">
                    <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      Inquire About This Solution
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
