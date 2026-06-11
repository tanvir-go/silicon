"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Shield, 
  Activity, 
  Cpu, 
  Zap, 
  Cloud, 
  Database, 
  Network, 
  Lock, 
  Server, 
  Sparkles, 
  Layout, 
  BarChart, 
  Clock, 
  Briefcase,
  Users,
  Star,
  ShieldCheck,
  Building2,
  Layers,
  HelpCircle,
  Plus,
  Minus,
  MonitorSmartphone
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ComputeBrandLogos = [
  { name: "Sangfor", logo: "Sangfor", logoUrl: "/OEMS/Sangor.png" },
  { name: "Dell Technologies", logo: "DELL", logoUrl: "https://www.vectorlogo.zone/logos/dell/dell-icon.svg" },
  { name: "HPE", logo: "HPE", logoUrl: "/OEMS/HPE.png" },
  { name: "Supermicro", logo: "Supermicro", logoUrl: "/OEMS/supermicro.png" },
  { name: "Lenovo", logo: "LENOVO", logoUrl: "/OEMS/Lenovo.jpg" },
  { name: "Virtuozzo", logo: "Virtuozzo", logoUrl: "/OEMS/virtuozzo.png" },
  { name: "Microsoft", logo: "Microsoft", logoUrl: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
  { name: "Red Hat", logo: "Red Hat", logoUrl: "https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" },
  { name: "SUSE", logo: "SUSE", logoUrl: "https://www.vectorlogo.zone/logos/suse/suse-icon.svg" }
];

export default function ComputeInfrastructurePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden font-sans text-slate-800">
      
      {/* 1. Premium Hero Section */}
      <section className="relative w-full bg-slate-50 pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] md:text-xs font-black tracking-wider uppercase mb-6">
              Compute Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
              Enterprise Compute Infrastructure for <span className="text-[#D32F2F]">Modern Digital</span> Workloads
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              Design, deploy, and optimize scalable compute environments that power enterprise applications, cloud workloads, virtualization, AI, and data-intensive systems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#000072]/20 hover:bg-[#000072]/90 transition-all flex items-center gap-2 border-0">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all shadow-sm">
                Design Compute Infrastructure
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 opacity-95 border-t border-slate-200/60 pt-8 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Enterprise Ready</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">High Availability</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#000072]" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Multi-Vendor Expertise</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#D32F2F]" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0F2C59]/5 rounded-[2.5rem] border border-slate-200/50 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center p-8 gap-4">
              <div className="w-full flex flex-col gap-2 relative">
                {[
                  { title: "Applications Layer", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
                  { title: "Virtualization Layer", color: "bg-rose-500/10 border-rose-400 text-rose-800" },
                  { title: "Compute (Servers/Hardware)", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
                  { title: "Storage Systems Layer", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" },
                  { title: "Networking Fabric Layer", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
                  { title: "Hybrid Cloud Layer", color: "bg-blue-500/20 border-blue-400 text-blue-900" }
                ].map((layer, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "w-full py-3 rounded-xl border flex items-center justify-between px-6 transition-all duration-300 shadow-sm font-black text-xs uppercase tracking-wider bg-white",
                      layer.color
                    )}
                  >
                    <span>{layer.title}</span>
                    <CheckCircle2 className="w-4 h-4 shrink-0 opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners / Integrated Global Brands Section */}
      <section className="w-full py-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase font-black text-[#D32F2F] tracking-widest block mb-2">Technology Partners</span>
          <h2 className="text-3xl font-black text-[#0F2C59] tracking-tight">
            Integrated Global Brands
          </h2>
          <div className="h-1 w-12 bg-[#D32F2F] mx-auto mt-4 rounded mb-10" />
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {ComputeBrandLogos.map((brand, idx) => (
              <div key={idx} className="px-5 py-3 rounded-2xl border border-slate-100 shadow-sm bg-white hover:border-[#000072]/20 hover:shadow-md transition-all duration-300 select-none flex items-center justify-center w-[180px] h-20 group">
                {brand.logoUrl ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name} 
                    className="max-h-10 max-w-[85%] object-contain filter grayscale-0 group-hover:grayscale opacity-100 group-hover:opacity-75 transition-all duration-300"
                  />
                ) : (
                  <span className="text-xs md:text-sm font-black text-slate-400 group-hover:text-[#0F2C59] transition-colors uppercase tracking-widest">
                    {brand.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What is Compute Infrastructure Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
              Infrastructure 101
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59]">
              What is Compute Infrastructure?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-4 font-medium">
              Understand the core computing elements that process application logic, manage virtualization, and orchestrate database workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Physical Servers", desc: "Enterprise hardware nodes containing high-density multi-core CPUs and fast RAM layouts.", icon: <Server /> },
              { title: "Processing Power", desc: "Raw computing power optimized to parse mathematical operations and execute code loops.", icon: <Cpu /> },
              { title: "Virtualization Layers", desc: "Hypervisor models dividing single hardware chips into multiple secure isolated guest OS nodes.", icon: <Layers /> },
              { title: "Cloud Compute", desc: "Dynamic Virtual Machines hosted on public clouds and managed via Terraform automation scripts.", icon: <Cloud /> },
              { title: "Edge Computing", desc: "Compact computing units running models locally to lower WAN communication delays.", icon: <Activity /> },
              { title: "HPC Clusters", desc: "Supercomputing frames executing parallel scientific algorithms and machine learning training.", icon: <Zap /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center text-[#000072]">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#0F2C59]">{item.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Outcomes Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Business Value
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Outcomes Mapped to ROI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reduce Infrastructure Costs", desc: "Cut server budget waste up to 35% using instance right-sizing and virtualization pooling.", icon: "💰" },
              { title: "Improve System Performance", desc: "Execute heavy database queries with sub-second response times and zero CPU throttles.", icon: "⚡" },
              { title: "Enable Cloud Scalability", desc: "Configure horizontal autoscaling policies handling concurrent user spikes dynamically.", icon: "📈" },
              { title: "Support AI & Data Workloads", desc: "Process tensor data pipelines easily with high-density GPU computing clusters.", icon: "🔬" },
              { title: "Improve Uptime & Reliability", desc: "Ensure operational continuity with failover routing rules and active-active server backups.", icon: "🛡️" },
              { title: "Modernize Legacy Systems", desc: "Transition physical legacy architectures into lightweight container clusters seamlessly.", icon: "🚀" }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{outcome.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{outcome.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compute Architecture Visualization */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Architectures
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Compute Layer Blueprint
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Explore the multi-layer deployment topology mapping dynamic application requests to bare metal compute arrays.
          </p>

          <div className="flex flex-col gap-4 border border-slate-150 rounded-3xl p-6 md:p-10 bg-slate-50 relative">
            {[
              { id: "apps", title: "Applications Layer (Microservices / Web Apps)", color: "border-sky-200 text-sky-800 bg-sky-50/50" },
              { id: "virt", title: "Virtualization Layer (VMware ESXi / Hyper-V)", color: "border-rose-200 text-rose-800 bg-rose-50/50" },
              { id: "compute", title: "Compute Tier (HPE ProLiant / Dell PowerEdge / Lenovo)", color: "border-indigo-200 text-indigo-800 bg-indigo-50/50" },
              { id: "storage", title: "Storage Systems (SAN / NAS / All-Flash Arrays)", color: "border-emerald-200 text-emerald-800 bg-emerald-50/50" },
              { id: "net", title: "Networking Layer (SD-WAN / Cisco Routing Core)", color: "border-amber-200 text-amber-800 bg-amber-50/50" },
              { id: "cloud", title: "Hybrid Cloud Integration (AWS / Azure)", color: "border-slate-350 text-slate-800 bg-slate-100/50" }
            ].map((node) => (
              <div 
                key={node.id}
                onMouseEnter={() => setActiveDiagramNode(node.id)}
                onMouseLeave={() => setActiveDiagramNode(null)}
                className={cn(
                  "py-4.5 px-6 rounded-2xl border text-center transition-all duration-300 font-extrabold text-xs uppercase tracking-wider relative cursor-default bg-white shadow-xs",
                  node.color,
                  activeDiagramNode === node.id ? "scale-[1.02] shadow-md border-slate-400" : ""
                )}
              >
                {node.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Compute Solutions Categories */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Core Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Solutions Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise Servers", desc: "High-density cabinet configurations managing core workloads.", oems: "Dell PowerEdge, HPE ProLiant, Lenovo Systems", usecase: "ERP backend databases, local Active Directory domains." },
              { title: "Virtualization Infrastructure", desc: "Divide bare-metal hardware into multiple virtual partitions.", oems: "VMware vSphere, Microsoft Hyper-V", usecase: "High-density VM host clustering, isolated sandbox networks." },
              { title: "Hyperconverged Infrastructure (HCI)", desc: "Consolidate compute, storage, and networking into one cluster.", oems: "Sangfor HCI, Nutanix Solutions", usecase: "Rapid multi-datacenter replication setups." },
              { title: "Cloud Compute Solutions", desc: "Dynamic server VMs hosted on public clouds and managed via Terraform.", oems: "AWS EC2, Microsoft Azure Compute", usecase: "Elastic web applications, multi-region database replication." },
              { title: "High Performance Computing (HPC)", desc: "Accelerated computing modules designed to parse big data sets.", oems: "NVIDIA Tensor GPU nodes, Supermicro Servers", usecase: "Deep learning neural network model training." },
              { title: "Edge Compute Solutions", desc: "Compact computing units running applications close to devices.", oems: "HPE Edgeline, Lenovo Edge Frames", usecase: "Real-time visual quality audits, device telemetry brokers." }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all text-left">
                <div>
                  <h3 className="text-base font-black text-[#0F2C59] mb-3">{cat.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-4">{cat.desc}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4 text-[11px] font-bold">
                  <div className="mb-2"><span className="text-[#000072]">Brands:</span> <span className="text-slate-600">{cat.oems}</span></div>
                  <div><span className="text-[#D32F2F]">Use Case:</span> <span className="text-slate-500 font-medium">{cat.usecase}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Use Cases Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Deployments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Workload Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise Apps Hosting", desc: "Secure hosting of ERP modules and core email directories.", icon: <Building2 /> },
              { title: "AI & Machine Learning", desc: "Feeding GPU accelerators to train complex deep learning models.", icon: <Cpu /> },
              { title: "Virtual Desktop (VDI)", desc: "Host remote employee screens securely inside corporate boundaries.", icon: <MonitorSmartphone /> },
              { title: "Database Hosting", desc: "Run SQL Server and PostgreSQL databases with high thread counts.", icon: <Database /> },
              { title: "Cloud Migration Workloads", desc: "Transition physical server layouts to AWS EC2 instances.", icon: <Cloud /> },
              { title: "Big Data Processing", desc: "Manage parallel calculation nodes analyzing petabytes of text logs.", icon: <BarChart /> },
              { title: "ERP Systems", desc: "Configure high-availability SAP and Oracle compute nodes.", icon: <Server /> },
              { title: "Security Integrations", desc: "Deploy virtual firewalls checking bandwidth headers.", icon: <Lock /> }
            ].map((usecase, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all text-left flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center text-[#000072]">
                  {usecase.icon}
                </div>
                <h3 className="text-xs font-black text-[#0F2C59]">{usecase.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{usecase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Applications Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Domain Segments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Industry Computing Blueprints
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Banking & Finance", desc: "Low latency computing nodes running transactional ledgers safely.", icon: "🏦" },
              { title: "Government", desc: "Isolated physical racks matching ISO security audit metrics.", icon: "🏛️" },
              { title: "Healthcare", desc: "Secure virtualization nodes hosting encrypted medical charts.", icon: "🏥" },
              { title: "Telecommunications", desc: "Edge routing gates handling high network package rates.", icon: "📡" },
              { title: "Education", desc: "Flexible container groups scaling LMS software during exam hours.", icon: "🏫" },
              { title: "Manufacturing", desc: "Firmware telemetry nodes logging factory sensor signals.", icon: "🏭" },
              { title: "Retail & E-commerce", desc: "Dynamic web compute instances handling customer checkout queues.", icon: "🛒" },
              { title: "Logistics", desc: "Offline tracking systems compiling routing coordinates.", icon: "🚚" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="text-sm font-black text-[#0F2C59]">{ind.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technology Ecosystem Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Technology Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left max-w-5xl mx-auto">
            {[
              { cat: "Hardware", items: ["Dell PowerEdge", "HPE ProLiant", "Lenovo Systems"] },
              { cat: "Virtualization", items: ["VMware ESXi", "Microsoft Hyper-V", "Sangfor aSV"] },
              { cat: "Cloud", items: ["AWS EC2", "Azure Compute", "Hybrid Tunnels"] },
              { cat: "Networking", items: ["Cisco Core", "Juniper Routing", "SD-WAN Gates"] },
              { cat: "Security", items: ["Fortinet WAF", "Sophos Endpoints", "IAM Directories"] }
            ].map((group, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col gap-3 shadow-xs">
                <h3 className="text-xs font-black text-[#000072] uppercase tracking-wider">{group.cat}</h3>
                <div className="h-0.5 w-6 bg-[#D32F2F] rounded" />
                <ul className="flex flex-col gap-2">
                  {group.items.map((it, itIdx) => (
                    <li key={itIdx} className="text-[11px] font-extrabold text-slate-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#D32F2F] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Compute Deployment Lifecycle */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Lifecycle Map
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Deployment Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {[
              { num: "01", title: "Assessment", desc: "Auditing active VM core usages." },
              { num: "02", title: "Design", desc: "Mapping virtual networks." },
              { num: "03", title: "Selection", desc: "Configuring server rack hardware." },
              { num: "04", title: "Deployment", desc: "Mounting physical nodes into cabinets." },
              { num: "05", title: "Virtualization", desc: "Installing ESXi hypervisor pools." },
              { num: "06", title: "Optimization", desc: "Adjusting load balancer allocations." },
              { num: "07", title: "NOC Support", desc: "Routing alerts to our certified NOC." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10 bg-white border border-slate-150 p-4 rounded-xl shadow-xs">
                <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-[#000072] flex items-center justify-center font-black text-[#000072] text-[11px] mb-3">
                  {step.num}
                </div>
                <h3 className="text-[10px] font-black text-[#0F2C59] mb-1">{step.title}</h3>
                <p className="text-[9px] text-slate-400 font-semibold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Reliability & Performance Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Resilience
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Reliability & Performance Engineering
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "High Availability Systems", desc: "Set up active clustered VM nodes that handle hardware errors without downtime.", icon: "🔄" },
              { title: "Failover Architecture", desc: "Configure hot standby servers that take over database transactions instantly.", icon: "⚡" },
              { title: "Performance Tuning", desc: "Audit CPU scaling flags and RAM frequency allocations to maximize compute speeds.", icon: "📈" },
              { title: "Load Balancing", desc: "Distribute incoming customer requests across multiple server locations.", icon: "⚖️" },
              { title: "Disaster Recovery", desc: "Replicate server volumes to secure offsite vaults using veeam tools.", icon: "🛡️" },
              { title: "Security Hardening", desc: "Compile secure firmware layouts and isolate backend networks.", icon: "🔒" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{item.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Why Choose Silicon Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Why Partner With Silicon Computing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Certified Infrastructure Engineers", desc: "Our technicians hold AWS, VMware, and Dell technical certification credentials." },
              { title: "Multi-Vendor Expertise", desc: "We coordinate and integrate systems across Cisco, HPE, Dell, and VMware layers." },
              { title: "End-to-End Deployment", desc: "We coordinate everything from network topology maps down to local rack layouts." },
              { title: "Enterprise Experience", desc: "Over 8 years managing mission-critical hardware pools for ISPs and banking systems." },
              { title: "24/7 Managed NOC Support", desc: "Telemetry monitoring dispatches alerting our network technicians in minutes." },
              { title: "Security-Focused Designs", desc: "Construct secure compute bounds aligned with strict ISO 27001 zero-trust policies." }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xs font-black text-[#000072]">ADVANTAGE 0{idx + 1}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{adv.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Statistics Section */}
      <section className="bg-[#0b1329] py-16 text-white border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10 text-center">
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">650+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compute Deployments</span>
          </div>
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">180+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise Clients</span>
          </div>
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">920+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Infrastructure Projects</span>
          </div>
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">12+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technology Partners</span>
          </div>
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">8+ Years</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industry Service</span>
          </div>
        </div>
      </section>

      {/* 13. Case Studies Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Compute Optimization In Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Bank of Asia Core Virtualization",
                desc: "Migrated transaction database systems from physical hardware onto VMware ESXi virtualization pools.",
                metrics: ["99.999% Uptime Verified", "35% Lower Hardware Budget"],
                techs: ["VMware vSphere", "HPE ProLiant", "SAN Storage"],
                result: "Secure isolated VM groups protected against database network spikes."
              },
              {
                title: "ISP CDN Cache Optimization",
                desc: "Configured load balancers and edge compute gateways to route high packet streams dynamically.",
                metrics: ["60% Network Latency Cut", "0% Packet Drop Rate"],
                techs: ["Cisco routing Core", "Lenovo Edge Nodes", "Terraform"],
                result: "Edge systems parse requests locally, avoiding centralized database overhead."
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-150 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <h3 className="text-lg font-black text-[#0F2C59] mb-3">{study.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mb-6 leading-relaxed">{study.desc}</p>
                  
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {study.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md border border-emerald-200/50">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6">
                  <p className="text-[11px] text-slate-600 font-bold leading-relaxed mb-4">
                    <strong className="text-[#000072]">Result:</strong> {study.result}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techs.map((t, tIdx) => (
                      <span key={tIdx} className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Build a High-Performance Enterprise Compute Infrastructure
          </h2>
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-medium">
            Deploy scalable, multi-vendor compute resources managed by certified network architects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#000072]/90 shadow-xl transition-all flex items-center gap-2 border-0">
              Talk to an Infrastructure Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-extrabold text-xs tracking-wider uppercase hover:bg-white/10 transition-all">
              Request Compute Design
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
