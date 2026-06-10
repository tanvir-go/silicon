"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Cpu, Lock, Activity, Zap, Layers, Compass, ShieldCheck, Database, Server, Network 
} from "lucide-react";

interface UseCaseCard {
  title: string;
  tagline: string;
  desc: string;
  slug: string;
  iconName: string;
}

const useCases: UseCaseCard[] = [
  {
    title: "Artificial Intelligence (AI)",
    tagline: "Clinical AI Diagnostics & Predictive Telemetry",
    desc: "Deploy custom neural networks trained on secure patient registries. Scale machine vision pipelines and zero-trust diagnostic engines with specialized accelerators.",
    slug: "artificial-intelligence-ai",
    iconName: "Cpu"
  },
  {
    title: "Data Protection & Backup",
    tagline: "Multi-Cloud Backup & Data Masking",
    desc: "Standardize connection tunnels, automate scheduled snapshot replication, and encrypt files to secure critical datasets across hybrid registries.",
    slug: "data-protection",
    iconName: "Lock"
  },
  {
    title: "Business Continuity",
    tagline: "Zero-Downtime High Availability",
    desc: "Formulate active-active cross-region configurations and failover protocols to maintain application state and client connectivity during outages.",
    slug: "business-continuity",
    iconName: "Activity"
  },
  {
    title: "High Performance Computing (HPC)",
    tagline: "Supercomputing & Liquid Cooled Clusters",
    desc: "Deploy extreme computing node matrices with high-throughput interconnect fabrics designed for scientific research and compute-heavy workloads.",
    slug: "hpc",
    iconName: "Zap"
  },
  {
    title: "Data Storage & Archiving",
    tagline: "Petabyte-Scale Erasure Coded Pools",
    desc: "Manage enterprise storage with SAN and NAS architectures. Auto-tier older datasets to cold storage pools while keeping hot data at sub-millisecond access.",
    slug: "data-storage",
    iconName: "Database"
  },
  {
    title: "Hyperconverged Infrastructure (HCI)",
    tagline: "Unified Hypervisor Virtualization",
    desc: "Merge server compute nodes, core switching switches, and storage drives into one centralized virtualized pane of glass for simple administration.",
    slug: "hci",
    iconName: "Layers"
  },
  {
    title: "Ransomware Protection",
    tagline: "Immutable Archives & Perimeter Containment",
    desc: "Block encryption payloads using write-once-read-many (WORM) storage. Run micro-segmentation routines to isolate compromised host nodes instantly.",
    slug: "ransomware-protection",
    iconName: "ShieldCheck"
  },
  {
    title: "Application Performance",
    tagline: "Microservices & Caching Diagnostics",
    desc: "Accelerate software response speeds, configure connection pools, and profile database queries to eliminate memory bottlenecks and latency.",
    slug: "application-performance",
    iconName: "Server"
  },
  {
    title: "IT Service Management (ITSM)",
    tagline: "SLA Management & Ticket Workflows",
    desc: "Deploy structured incident ticketing models, coordinate developer tasks, and manage SLA levels to maintain internal systems reliability.",
    slug: "itsm",
    iconName: "Network"
  }
];

const getUseCaseIcon = (name: string, isHovered = false) => {
  const baseClass = "w-6 h-6 transition-all duration-300";
  switch (name) {
    case "Cpu":
      return <Cpu className={`${baseClass} ${isHovered ? "text-white" : "text-[#D32F2F]"}`} />;
    case "Lock":
      return <Lock className={`${baseClass} ${isHovered ? "text-white" : "text-blue-600"}`} />;
    case "Activity":
      return <Activity className={`${baseClass} ${isHovered ? "text-white" : "text-emerald-600"}`} />;
    case "Zap":
      return <Zap className={`${baseClass} ${isHovered ? "text-white" : "text-amber-500"}`} />;
    case "Database":
      return <Database className={`${baseClass} ${isHovered ? "text-white" : "text-teal-600"}`} />;
    case "Layers":
      return <Layers className={`${baseClass} ${isHovered ? "text-white" : "text-indigo-600"}`} />;
    case "ShieldCheck":
      return <ShieldCheck className={`${baseClass} ${isHovered ? "text-white" : "text-rose-600"}`} />;
    case "Server":
      return <Server className={`${baseClass} ${isHovered ? "text-white" : "text-sky-500"}`} />;
    case "Network":
      return <Network className={`${baseClass} ${isHovered ? "text-white" : "text-violet-600"}`} />;
    default:
      return <Compass className={`${baseClass} ${isHovered ? "text-white" : "text-slate-500"}`} />;
  }
};

const getIconBgClass = (name: string) => {
  switch (name) {
    case "Cpu": return "bg-red-50 border-red-100 group-hover:bg-red-100/80 group-hover:border-red-200";
    case "Lock": return "bg-blue-50 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200";
    case "Activity": return "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200";
    case "Zap": return "bg-amber-50 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200";
    case "Database": return "bg-teal-50 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200";
    case "Layers": return "bg-indigo-50 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200";
    case "ShieldCheck": return "bg-rose-50 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200";
    case "Server": return "bg-sky-50 border-sky-100 group-hover:bg-sky-100/80 group-hover:border-sky-200";
    case "Network": return "bg-violet-50 border-violet-100 group-hover:bg-violet-100/80 group-hover:border-violet-200";
    default: return "bg-slate-50 border-slate-100 group-hover:bg-slate-100/80 group-hover:border-slate-200";
  }
};

export default function SolutionByUseCasePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section with Illustration */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="flex-1 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
              Solution by Use Case
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F2C59] leading-tight">
              Outcome-Based Use Case Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-500 mt-6 leading-relaxed max-w-xl font-medium">
              Silicon Computing Ltd designs and deploys optimized technology frameworks specifically aligned to the dynamic objectives, workloads, and security profiles of modern enterprise environments.
            </p>
          </div>

          {/* Premium Tech Graphic */}
          <div className="flex-1 w-full max-w-md flex justify-center">
            <svg 
              viewBox="0 0 500 350" 
              className="w-full h-auto select-none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main frame representing cloud/datacenter dashboard */}
              <rect x="30" y="40" width="440" height="270" rx="28" fill="#0F2C59" />
              <rect x="38" y="48" width="424" height="254" rx="20" fill="#FFFFFF" />
              
              {/* Window controls */}
              <circle cx="68" cy="68" r="6" fill="#FF5F56" />
              <circle cx="88" cy="68" r="6" fill="#FFBD2E" />
              <circle cx="108" cy="68" r="6" fill="#27C93F" />
              <line x1="410" y1="68" x2="430" y2="68" stroke="#E2E8F0" strokeWidth="3" />
              
              {/* Grid backdrop */}
              <path d="M40 120 H460 M40 190 H460 M40 260 H460" stroke="#F1F5F9" strokeWidth="2" />
              <path d="M150 90 V290 M290 90 V290 M400 90 V290" stroke="#F1F5F9" strokeWidth="2" />

              {/* Data streams / Connection lines */}
              <path d="M80 150 Q 180 110, 220 180 T 360 140" stroke="#000072" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
              <path d="M80 220 Q 180 240, 240 160 T 380 230" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

              {/* Floating Node Widgets */}
              <rect x="310" y="80" width="110" height="45" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="335" cy="102" r="10" fill="#3182CE" />
              <rect x="355" y="94" width="50" height="6" rx="3" fill="#000072" />
              <rect x="355" y="104" width="30" height="4" rx="2" fill="#94A3B8" />

              <rect x="60" y="225" width="130" height="50" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="88" cy="250" r="12" fill="#E2E8F0" />
              <rect x="110" y="242" width="60" height="6" rx="3" fill="#D32F2F" />
              <rect x="110" y="252" width="40" height="4" rx="2" fill="#94A3B8" />

              {/* Large Central Shield/Lock to represent enterprise security */}
              <circle cx="250" cy="180" r="32" fill="#0F2C59" />
              <path d="M242 184 V176 C242 171.5 245.5 168 250 168 C254.5 168 258 171.5 258 176 V184 M238 184 H262 V196 H238 Z" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => {
            return (
              <Link 
                key={idx} 
                href={`/solution-by-use-case/${useCase.slug}`}
                className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm transition-all duration-300 ${getIconBgClass(useCase.iconName)}`}>
                    {/* Render static icon matching use case */}
                    {getUseCaseIcon(useCase.iconName, false)}
                  </div>
                  <h3 className="font-extrabold text-lg text-[#0F2C59] group-hover:text-[#000072] transition-colors leading-snug">
                    {useCase.title}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-[#D32F2F] tracking-wider block mt-1">
                    {useCase.tagline}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed mt-4 font-medium">
                    {useCase.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#000072] group-hover:text-[#D32F2F] transition-colors flex items-center gap-1.5">
                    View Blueprint <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}

