"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Heart, Cpu, Activity, Layers, Lock, Zap } from "lucide-react";

interface UseCaseCard {
  title: string;
  tagline: string;
  desc: string;
  slug: string;
  icon: React.ComponentType<any>;
}

const useCases: UseCaseCard[] = [
  {
    title: "Artificial Intelligence (AI)",
    tagline: "Clinical AI Diagnostics & Predictive Telemetry",
    desc: "Integrate deep neural classifier networks trained on secure patient registries. Deploy clinical diagnostic engines with zero-trust credentials.",
    slug: "artificial-intelligence-ai",
    icon: Cpu
  },
  {
    title: "Data Protection",
    tagline: "Multi-Cloud Backup & Data Masking",
    desc: "Protect critical datasets across cloud registries. Standardize connection tunnels and encrypt files to avoid integrity leaks.",
    slug: "data-protection",
    icon: Lock
  },
  {
    title: "Business Continuity",
    tagline: "Maintain productivity and business continuity",
    desc: "Find solutions for work, learning, and business continuity in challenging times, so you can maintain dynamic connectivity.",
    slug: "business-continuity",
    icon: Activity
  },
  {
    title: "High Performance Computing (HPC)",
    tagline: "Supercomputing & Liquid Cooled Clusters",
    desc: "Deploy extreme computing node matrices with high-throughput interconnect fabrics designed for scientific research workloads.",
    slug: "hpc",
    icon: Zap
  },
  {
    title: "Data Storage",
    tagline: "Petabyte-Scale Erasure Coded Pools",
    desc: "Secure corporate memory with NAS and SAN arrays. Auto-tier archives between hot, warm, and cold pools to save resources.",
    slug: "data-storage",
    icon: Layers
  },
  {
    title: "Hyperconverged Infrastructure (HCI)",
    tagline: "Unified Hypervisor Virtualization",
    desc: "Merge server compute, network switches, and storage pools into one hyperconverged management pane of glass.",
    slug: "hci",
    icon: Compass
  },
  {
    title: "Ransomware Protection",
    tagline: "Immutable Archives & Perimeter Containment",
    desc: "Block encryption attacks with immutable snapshots and automated containment loops that lock down host nodes instantly.",
    slug: "ransomware-protection",
    icon: ShieldCheck
  },
  {
    title: "Application Performance",
    tagline: "Microservices & Caching Diagnostics",
    desc: "Accelerate software response speeds, configure connections pools, and optimize SQL indices to remove system latency.",
    slug: "application-performance",
    icon: Activity
  },
  {
    title: "IT Service Management (ITSM)",
    tagline: "SLA Management & Ticket Workflows",
    desc: "Deploy incident tracking models, coordinate developer sprints, and manage technical support desk SLAs.",
    slug: "itsm",
    icon: Layers
  }
];

export default function SolutionByUseCasePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            Solution by Use Case
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F2C59] leading-tight">
            Outcome-Based Use Case Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed font-medium">
            Silicon Computing Ltd designs and deploys optimized technology frameworks specifically aligned to the dynamic objectives, workloads, and security profiles of modern enterprise environments.
          </p>
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <Link 
                key={idx} 
                href={`/solution-by-use-case/${useCase.slug}`}
                className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#000072]/10 text-[#000072] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#000072] group-hover:text-white">
                    <Icon className="w-6 h-6" />
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
