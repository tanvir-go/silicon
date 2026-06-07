"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  HeartHandshake, 
  Zap, 
  Layers, 
  Network, 
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  FileText,
  Flame,
  Globe2,
  Building,
  Target
} from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/utils";

interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<any>;
  shortDesc: string;
  longDesc: string;
  features: string[];
  metric: string;
  metricLabel: string;
  caseStudyTitle: string;
  caseStudySnippet: string;
}

const industriesList: IndustryItem[] = [
  {
    id: "bfsi",
    title: "Banking, Financial Services & Insurance",
    tagline: "High-Throughput Ledger & Fraud Protection",
    icon: TrendingUp,
    shortDesc: "Scale transaction telemetry with multi-region active-active database partitioning, end-to-end encryption pipelines, and automated real-time fraud auditing routines.",
    longDesc: "Modern banking demands absolute integrity and lightning-fast speeds. We engineer secure, multi-region distributed databases (PostgreSQL/Kubernetes) that process millions of telemetry operations, surviving red-team penetration probes. Our financial ERP setups eliminate administrative silos, automate billing gateways, and unify ledgers.",
    features: [
      "Multi-Region Database Partitioning (Active-Active)",
      "Continuous Real-Time Fraud Detection Systems",
      "GDPR & SOC2 Compliant Client Data Gateways",
      "Legacy COBOL Ledger System Cloud Migrations"
    ],
    metric: "42%",
    metricLabel: "OpEx Reduction in Cloud Ledgers",
    caseStudyTitle: "Federal Trust & Loan Core Migration",
    caseStudySnippet: "Re-engineered a legacy core banking layout into a modern, distributed microservices network spread securely across AWS and Azure."
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "Clinical AI Diagnostics & Patient Telemetry",
    icon: HeartHandshake,
    shortDesc: "Integrate deep neural classifier networks trained on secure patient registries. Deploy hardened HIPAA-compliant EHR data pipelines.",
    longDesc: "Empower medical institutions with cognitive artificial intelligence. We construct secure clinical diagnostic engines that evaluate high-resolution medical imaging to assist specialists in identifying tumors early. Every gateway incorporates HIPAA protocols to mask telemetry and secure patient electronic health records (EHR).",
    features: [
      "Clinical AI Imaging Diagnostic Assist (99.4% Acc.)",
      "HIPAA-Compliant Encrypted Telemetry Gateways",
      "Unified Electronic Health Record (EHR) Sync",
      "Secure Edge Hospital Telemetry Orchestrations"
    ],
    metric: "60%",
    metricLabel: "Diagnostic Imaging Speed Increase",
    caseStudyTitle: "BioTech Health Corp Diagnostic Engine",
    caseStudySnippet: "Developed a computer vision diagnostic suite that analyzes high-resolution imaging to assist oncologists with early tumor identification."
  },
  {
    id: "energy",
    title: "Energy & SCADA Utilities",
    tagline: "Zero-Trust Infrastructure & Grid Protection",
    icon: Zap,
    shortDesc: "Protect power grids, water utilities, and SCADA controllers. Configure cryptographic edge boundary shields, zero-trust firewalls, and active SOC log tracking.",
    longDesc: "National infrastructure requires robust cybersecurity. SCL hardens energy grid telemetry endpoints using software-defined boundaries and centralized threat analytics. We secure SCADA hardware controllers with hardware cryptoprocessors, providing 24/7 Security Operations Center dashboards for automated threat containment.",
    features: [
      "SCADA Hardware Controller Cryptoshielding",
      "Zero-Trust Policy Network Isolation perimeters",
      "Automated Active Threat Containment Gates",
      "24/7 SIEM SOC Telemetry Grid Monitoring"
    ],
    metric: "100%",
    metricLabel: "Active Threat Isolation Index",
    caseStudyTitle: "Apex Energy Zero-Trust Telemetry",
    caseStudySnippet: "Hardened distributed energy grid telemetry endpoints using software-defined boundaries and centralized threat analytics."
  },
  {
    id: "logistics",
    title: "Retail & Omni-Channel Logistics",
    tagline: "Real-Time Inventory & Kafka Message Brokers",
    icon: Layers,
    shortDesc: "Synchronize multi-national inventory shifts with high-throughput event-driven message brokers. Compute dynamic shipping routes.",
    longDesc: "Accelerate global supply chains. We deploy event-driven architectures utilizing Apache Kafka and Redis to update warehouse telemetry with sub-second latency. SCL builds customized web and mobile systems that coordinate logistics hubs, automate delivery routing algorithms, and streamline storefront supply nodes.",
    features: [
      "Apache Kafka High-Throughput Event Brokers",
      "Sub-Second Warehouse Inventory Sync Latency",
      "Dynamic Routing Math for Delivery Fleets",
      "Secure Supplier & Partner Exchange Portals"
    ],
    metric: "Sub-Sec",
    metricLabel: "Global Supply Inventory Latency",
    caseStudyTitle: "Vanguard Global Omni-Channel System",
    caseStudySnippet: "Designed a real-time warehouse inventory, tracking, and customer logistics portal coordinating multi-national distributions."
  },
  {
    id: "telecom",
    title: "Telecommunications & Networking",
    tagline: "Unified SD-WAN Routing & Virtualization",
    icon: Network,
    shortDesc: "Unify geographically dispersed corporate centers, remote terminals, and call nodes. Optimize WAN communication with fiber failover lines.",
    longDesc: "Construct fail-safe, high-speed telecom lines connecting dispersed operational centers, offices, and server clusters. We customize SD-WAN edge configurations, configure fiber cabling paths with redundant failovers, and virtualize firewalls to eliminate data leakage.",
    features: [
      "Software-Defined WAN Routing Topologies",
      "Fail-Safe Fiber Cables & Routing Failover Gates",
      "Segmented Virtualized Edge Firewalls",
      "Low-Latency Edge Node Virtualization Clusters"
    ],
    metric: "60%",
    metricLabel: "Reduction in WAN Routing Latency",
    caseStudyTitle: "High-Throughput Branch Interconnect",
    caseStudySnippet: "Designed and routed secure, low-latency WAN networks and fiber-redundant cabling paths to optimize distributed branches."
  },
  {
    id: "government",
    title: "Government & Public Sector",
    tagline: "Citizen Identity Portals & Sovereign Cloud",
    icon: Award,
    shortDesc: "Secure public sector directories, establish zero-trust directory services, and design long-term cloud transition timetables.",
    longDesc: "Digital transformation for government divisions demands security and legacy compatibility. We engineer sovereign cloud networks that isolate administrative datasets, establish secure multi-factor citizen identity directory gateways, and deliver robust business continuity strategies.",
    features: [
      "Sovereign Cloud Migration Architectures",
      "Multi-Factor Citizen Identity Directories",
      "Public-Facing Portal Telemetry Shields",
      "Business Continuity Auditing & Risk Management"
    ],
    metric: "99.99%",
    metricLabel: "Administrative Portal Portal Uptime",
    caseStudyTitle: "Sovereign Civic Registry Cloud",
    caseStudySnippet: "Migrated secure civic registers to a partitioned, sovereign cloud network with granular access logs and continuous backups."
  }
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState<string>("bfsi");

  const currentIndustry = industriesList.find((ind) => ind.id === activeTab) || industriesList[0];

  return (
    <main className="min-h-screen bg-white  pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold tracking-wider uppercase mb-4">
            <Building className="w-3.5 h-3.5" />
            Vertical Industry Architectures
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            Tailored Industry Solutions
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed font-medium">
            Silicon Computing Ltd engineers outcome-based technology frameworks specifically aligned to the regulatory demands, operational scale, and data security profiles of key industrial sectors.
          </p>
        </div>

        {/* Dynamic Sector Explorer Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sector Buttons list (lg:col-span-4) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-1">
              Select Industrial Sector
            </span>
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              const isActive = ind.id === activeTab;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center gap-4.5 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-[#0F2C59] border-[#0F2C59] text-white shadow-xl"
                      : "bg-white border-slate-200/80 hover:border-slate-350 text-slate-700 "
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "bg-[#0F2C59]/5 text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white"
                  }`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[13px] sm:text-sm tracking-tight leading-snug">
                      {ind.title}
                    </h3>
                    <p className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${
                      isActive ? "text-[#D32F2F] " : "text-slate-400"
                    }`}>
                      {ind.metric} {ind.metricLabel.split(" ")[0]}
                    </p>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute right-4 w-2 h-2 rounded-full bg-[#D32F2F]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Sector details display panel (lg:col-span-8) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#F0F4F7] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6"
              >
                {/* Panel Header */}
                <div className="flex flex-col gap-1 border-b pb-4.5 border-slate-100 ">
                  <span className="text-[10px] px-3 py-1 rounded bg-[#D32F2F]/10 text-[#D32F2F] font-bold uppercase tracking-wider self-start">
                    Active Sector Blueprint
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0F2C59] mt-2">
                    {currentIndustry.title}
                  </h2>
                  <p className="text-xs text-[#D32F2F] font-bold uppercase tracking-wider mt-0.5">
                    {currentIndustry.tagline}
                  </p>
                </div>

                {/* Detailed description */}
                <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                  {currentIndustry.longDesc}
                </p>

                {/* Custom Statistics Counter display */}
                <div className="flex gap-4.5 items-center p-5 rounded-2xl bg-gradient-to-tr from-[#0F2C59]/5 to-[#D32F2F]/5 border border-slate-200/50 ">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#D32F2F] tracking-tight">
                    {currentIndustry.metric}
                  </div>
                  <div className="text-xs font-bold text-[#0F2C59] leading-snug">
                    {currentIndustry.metricLabel}
                  </div>
                </div>

                {/* Features checklist */}
                <div>
                  <h4 className="font-extrabold text-xs text-slate-705 mb-3.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#D32F2F]" />
                    Engineered Features &amp; Integrations
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {currentIndustry.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Study Link details */}
                <div className="p-4.5 rounded-2xl bg-[#F0F4F7] flex flex-col gap-2 mt-2">
                  <span className="text-[10px] font-black text-[#0F2C59] ] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Success Study: {currentIndustry.caseStudyTitle}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {currentIndustry.caseStudySnippet}
                  </p>
                </div>

                {/* Discuss portal CTA */}
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  <Link 
                    href={`/industries/${
                      currentIndustry.id === "bfsi" ? "banking-and-finance" :
                      currentIndustry.id === "logistics" ? "retail" :
                      currentIndustry.id === "telecom" ? "telecommunications-and-networking" :
                      currentIndustry.id === "government" ? "public-sector" :
                      currentIndustry.id
                    }`}
                  >
                    <button className="w-full py-4 rounded-xl border-2 border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      View Full Solution Blueprint
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  <Link 
                    href={`/contact?industry=${encodeURIComponent(currentIndustry.title)}`}
                  >
                    <button className="w-full py-4 rounded-xl bg-[#0F2C59] hover:bg-[#0b1d3a] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg">
                      Inquire for Sector Deployment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global CTA transformation section */}
        <section className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#0F2C59] text-white relative overflow-hidden shadow-2xl">
          {/* Geometric decorative accent */}
          <div className="absolute right-0 top-0 w-60 h-60 bg-gradient-to-bl from-[#D32F2F]/20 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="max-w-2xl text-left relative z-10 flex flex-col gap-5">
            <span className="text-[10px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
              Operational Accelerations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Accelerate Your Enterprise Sector Outcome?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Consult with our certified senior architects, cybersecurity researchers, and machine learning leads to align your software architecture directly with board metrics.
            </p>
            <div className="mt-2">
              <Link href="/contact">
                <button className="px-6.5 py-3.5 rounded-xl bg-[#F0F4F7] hover:bg-slate-100 text-[#0F2C59] font-black text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:scale-103">
                  Schedule Executive Consultation
                  <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
