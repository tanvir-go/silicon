"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, Server, Database, Shield, Cpu, Network, Briefcase, 
  Settings, Users, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft,
  Activity, Star, Sparkles, Building2, Zap, Rocket, Plus, Minus,
  Lock, RefreshCw, Layers, HelpCircle, HardDrive
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Dynamic Content Mapping for Cloud & Infrastructure
// ----------------------------------------------------------------------

const categoriesList = [
  { text: "Cloud Migration", slug: "cloud-migration" },
  { text: "Infrastructure as Code", slug: "infrastructure-as-code" },
  { text: "Network Virtualization", slug: "network-virtualization" },
  { text: "Compute Optimization", slug: "compute-optimization" }
];

export default function CloudInfrastructureServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      
      {/* 1. Hero Section (Modern Split Layout - Premium Light Background) */}
      <section className="relative w-full bg-slate-50 pt-36 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden border-b border-slate-100">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/15 text-[#D32F2F] text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-md">
              <Cloud className="w-3.5 h-3.5 text-[#D32F2F] animate-pulse" />
              Enterprise Cloud Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2C59] tracking-tight leading-[1.1] mb-6">
              Build Secure, Scalable & <span className="text-[#D32F2F]">Future-Ready</span> Cloud Infrastructure
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              Design, deploy and manage enterprise cloud, hybrid cloud, networking, security and data center solutions that accelerate business growth.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#000072]/20 hover:bg-[#000072]/90 transition-all flex items-center gap-2 border-0">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all shadow-sm">
                Request Assessment
              </Link>
            </div>

            {/* Trust Indicators / Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 opacity-95 border-t border-slate-200/60 pt-8 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Enterprise Solutions</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Hybrid Cloud Experts</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">24/7 Monitoring</span>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Cloud Infrastructure Graph */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-8 gap-4">
              
              {/* Stack Illustration representing Cloud -> Compute -> Storage -> Network -> Security -> Applications */}
              <div className="w-full flex flex-col gap-2 relative">
                {[
                  { title: "Applications", color: "bg-sky-500/10 border-sky-400 text-sky-300" },
                  { title: "Security Layer", color: "bg-rose-500/10 border-rose-400 text-rose-300" },
                  { title: "Network Virtualization", color: "bg-indigo-500/10 border-indigo-400 text-indigo-300" },
                  { title: "Storage Volumes", color: "bg-emerald-500/10 border-emerald-400 text-emerald-300" },
                  { title: "Compute Nodes", color: "bg-amber-500/10 border-amber-400 text-amber-300" },
                  { title: "Multi-Cloud Foundation", color: "bg-blue-500/20 border-blue-400 text-blue-200" }
                ].map((layer, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "w-full py-3 rounded-xl border flex items-center justify-between px-6 transition-all duration-300 shadow-sm font-black text-xs uppercase tracking-wider",
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

      {/* 2. Infrastructure Metrics Section */}
      <section className="bg-slate-100 py-16 text-slate-800 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black text-[#0F2C59] block mb-1">500+</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cloud Deployments</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black text-[#0F2C59] block mb-1">150+</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enterprise Customers</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black text-[#0F2C59] block mb-1">10+</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Technology Partners</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black text-[#0F2C59] block mb-1">850+</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Infrastructure Projects</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black text-[#0F2C59] block mb-1">24/7/365</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Support Availability</span>
          </div>
        </div>
      </section>

      {/* 3. Technology Partner Showcase */}
      <section className="bg-white py-16 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-10">
            AUTHORIZED ENTERPRISE TECHNOLOGY PARTNER & OEM ECOSYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-80 transition-opacity">
            <img src="/OEMS/HPE.png" alt="HPE" className="h-14 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/Huawei.png" alt="Huawei" className="h-14 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/Lenovo.jpg" alt="Lenovo" className="h-10 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/supermicro.png" alt="Supermicro" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/virtuozzo.png" alt="Virtuozzo" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/synology.jpg" alt="Synology" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/QSAN.jpg" alt="QSAN" className="h-14 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
          </div>
        </div>
      </section>

      {/* 4. Existing Services Redesign (Premium Cards) */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Core Service Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Next-Generation Cloud & Infrastructure Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud Migration", desc: "Zero-downtime application and database replatforming to AWS, Azure, GCP, or hybrid topologies.", slug: "cloud-migration", icon: <Cloud /> },
              { title: "Infrastructure as Code", desc: "Automate server, load balancer, and cluster resource deployments with modular Terraform configurations.", slug: "infrastructure-as-code", icon: <Server /> },
              { title: "Network Virtualization", desc: "Lower operational overhead up to 60% by designing virtual firewalls and routing fabrics.", slug: "network-virtualization", icon: <Network /> },
              { title: "Compute Optimization", desc: "Tune horizontal pod scaling and VMs to maximize node capacity and reduce cloud spend.", slug: "compute-optimization", icon: <Cpu /> }
            ].map((srv, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-slate-200 transition-all text-left group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 text-[#000072] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#000072] group-hover:text-white transition-colors duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#0F2C59] mb-3 group-hover:text-[#000072] transition-colors">{srv.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <Link href={`/services/${srv.slug}`} className="w-full">
                  <button className="w-full py-3 rounded-xl bg-white border border-slate-200 hover:border-[#000072] text-[#000072] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Infrastructure Solutions Grid */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            System Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Infrastructure Solutions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Proven configurations engineered to support high-density transaction processing and secure local node traffic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud Infrastructure", desc: "Deploy scalable core compute nodes on AWS, Azure, or GCP.", icon: <Cloud className="text-sky-500" /> },
              { title: "Hybrid Cloud", desc: "Integrate on-premise hardware databases with public clouds.", icon: <Layers className="text-indigo-500" /> },
              { title: "Private Cloud", desc: "Dedicated bare-metal architectures fully isolated behind boundaries.", icon: <Server className="text-emerald-500" /> },
              { title: "Enterprise Networking", desc: "Configure low-latency SD-WAN and Catalyst switches.", icon: <Network className="text-blue-500" /> },
              { title: "Data Center Solutions", desc: "High-density server racks and power redundancy consulting.", icon: <Building2 className="text-amber-500" /> },
              { title: "Virtualization", desc: "Unify servers using VMware ESXi and Hyper-V hypervisors.", icon: <Cpu className="text-rose-500" /> },
              { title: "Disaster Recovery", desc: "Zero-data-loss replication systems and hot standby gates.", icon: <RefreshCw className="text-teal-500" /> },
              { title: "Security Infrastructure", desc: "Integrate Fortinet and Palo Alto next-gen firewalls.", icon: <Shield className="text-[#000072]" /> }
            ].map((sol, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 text-left hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {sol.icon}
                </div>
                <h3 className="text-sm font-extrabold text-[#0F2C59]">{sol.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Interactive Architecture Diagram */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Blueprint Diagram
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Interactive Cloud Architecture
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Explore how data flows through a micro-segmented, zero-trust cloud network deployment.
          </p>

          <div className="flex flex-col gap-4 border border-slate-100 rounded-3xl p-6 md:p-10 bg-[#FAFAFA] relative">
            {[
              { id: "internet", label: "01. Global WAN Gateways / Internet", color: "border-sky-200 text-sky-800 bg-sky-50/50" },
              { id: "security", label: "02. Next-Gen Security Layer (NGFW/WAF)", color: "border-rose-200 text-rose-800 bg-rose-50/50" },
              { id: "load-balancer", label: "03. High-Availability Load Balancer", color: "border-indigo-200 text-indigo-800 bg-indigo-50/50" },
              { id: "app-layer", label: "04. Auto-Scaling Application Container Cluster", color: "border-blue-200 text-blue-800 bg-blue-50/50" },
              { id: "db-layer", label: "05. Multi-Zone Relational / NoSQL Database Layer", color: "border-emerald-200 text-emerald-800 bg-emerald-50/50" },
              { id: "storage-layer", label: "06. Scalable Object Storage & Cache Pools", color: "border-amber-200 text-amber-800 bg-amber-50/50" },
              { id: "backup-layer", label: "07. Immutable Offsite Backup & Cold Recovery Storage", color: "border-slate-350 text-slate-800 bg-slate-100/50" }
            ].map((node) => (
              <div 
                key={node.id}
                onMouseEnter={() => setActiveDiagramNode(node.id)}
                onMouseLeave={() => setActiveDiagramNode(null)}
                className={cn(
                  "py-4.5 px-6 rounded-2xl border text-center transition-all duration-300 font-extrabold text-xs uppercase tracking-wider relative cursor-default shadow-xs",
                  node.color,
                  activeDiagramNode === node.id ? "scale-[1.02] shadow-md border-slate-400" : ""
                )}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Business Outcomes (Benefits) Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Business Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Delivering Value Through Custom Architectures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reduce Infrastructure Costs", desc: "Cut cloud monthly bills up to 35% through instance profiling and node containerization.", icon: "💰" },
              { title: "Improve Scalability", desc: "Set auto-scaling rules that handle transaction spikes without system latency or crash logs.", icon: "📈" },
              { title: "Increase Security", desc: "Enforce zero-trust networks, microsegmented cloud bounds, and secure credentials.", icon: "🔒" },
              { title: "Ensure Business Continuity", desc: "Implement active-active multi-region databases and automated disaster failover grids.", icon: "🔄" },
              { title: "Improve Performance", desc: "Decrease static resource delivery latency using distributed Cloudflare caching configurations.", icon: "⚡" },
              { title: "Accelerate Digital Transformation", desc: "Modernize legacy database scripts to integrate with modern web components and API channels.", icon: "🚀" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{benefit.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{benefit.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cloud Migration Journey Timeline */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Milestone Map
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Cloud Migration Journey
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-slate-200 z-0" />
            {[
              { num: "01", title: "Assessment", desc: "Auditing database dependencies." },
              { num: "02", title: "Planning", desc: "Drafting replication structures." },
              { num: "03", title: "Migration", desc: "Executing secure cloud replatform." },
              { num: "04", title: "Validation", desc: "Confirming data schema integrity." },
              { num: "05", title: "Optimization", desc: "Tuning server allocations." },
              { num: "06", title: "Managed Services", desc: "24/7 technical NOC monitoring." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#000072] shadow-sm flex items-center justify-center font-black text-[#000072] text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="text-xs font-black text-[#0F2C59] mb-1">{step.title}</h3>
                <p className="text-[10px] text-slate-400 font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden flex flex-col gap-8 text-left max-w-md mx-auto pl-4 relative">
            <div className="absolute top-0 bottom-0 left-[26px] w-[2px] bg-slate-200" />
            {[
              { num: "01", title: "Assessment", desc: "Auditing existing server logs and database dependencies." },
              { num: "02", title: "Planning", desc: "Formulating network configurations and replication steps." },
              { num: "03", title: "Migration", desc: "Executing secure containerization and cloud push." },
              { num: "04", title: "Validation", desc: "Running data schema integrity and packet checks." },
              { num: "05", title: "Optimization", desc: "Adjusting spot instances and right-sizing VM clusters." },
              { num: "06", title: "Managed Services", desc: "Routing telemetry to our 24/7 technical monitoring NOC." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#000072] shadow-sm flex items-center justify-center font-black text-[#000072] text-xs">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#0F2C59] mt-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Silicon Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Why Choose Silicon Computing Ltd
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Certified Engineers", desc: "Our infrastructure team consists of AWS, Azure, and Oracle certified network architects.", icon: "🎓" },
              { title: "Enterprise Expertise", desc: "Over 8 years managing high-throughput servers for banks, government offices, and ISPs.", icon: "🏆" },
              { title: "Multi-Vendor Support", desc: "We integrate components across Cisco, HPE, Dell, and Huawei architectures seamlessly.", icon: "⚙️" },
              { title: "End-to-End Delivery", desc: "We coordinate routing maps down to on-premise fiber layout cabling configurations.", icon: "🔌" },
              { title: "Security-Driven Approach", desc: "Every environment is designed matching strict ISO/IEC 27001 zero-trust policies.", icon: "🔒" },
              { title: "24/7 Technical Support", desc: "Certified support desks ready to resolve network alerts within minutes.", icon: "🛠️" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{item.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Industry Solutions Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Domain Segments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Industry Solutions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Banking & Finance", desc: "Active-Active clusters with secure backup logs.", icon: "🏦" },
              { title: "Government", desc: "Highly secure private clouds and networks.", icon: "🏛️" },
              { title: "Healthcare", desc: "HIPAA compliant encrypted storage storage.", icon: "🏥" },
              { title: "Education", desc: "LMS infrastructure scaling capabilities.", icon: "🏫" },
              { title: "Telecommunications", desc: "Edge routing switches handling high packet flows.", icon: "📡" },
              { title: "Manufacturing", desc: "Telemetry network configurations for plant gates.", icon: "🏭" },
              { title: "Retail", desc: "Dynamic checkout load balancers.", icon: "🛒" },
              { title: "Logistics", desc: "Secure distributed routing panels.", icon: "🚚" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="text-sm font-black text-[#0F2C59]">{ind.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Featured Case Studies Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Success Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Bank of Asia Hybrid Infrastructure",
                desc: "Migrated transaction databases to private bare-metal nodes backed by AWS cloud.",
                metrics: ["99.99% Uptime Verified", "30% Lower Computing Waste"],
                techs: ["AWS", "VMware ESXi", "Fortinet NGFW"],
                result: "Fully compliant hybrid network secure from external SQL injections."
              },
              {
                title: "ISPs Catalyst Network Overhaul",
                desc: "Re-cabled and configured core routing systems using software-defined networking.",
                metrics: ["60% Network Latency Cut", "Zero outage rollout"],
                techs: ["Cisco SD-WAN", "HPE ProLiant", "Ansible"],
                result: "SD-WAN routing handles spikes smoothly with zero telemetry lag."
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-all">
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

      {/* 12. Managed Services Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Continuous Operations
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Managed Services & NOC Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Infrastructure Monitoring", desc: "24/7 metrics analysis detecting anomalous bandwidth and server CPU loads.", icon: <Activity /> },
              { title: "Managed Cloud", desc: "Continuous VM optimization, Terraform patches, and cost evaluations.", icon: <Cloud /> },
              { title: "Security Operations", desc: "Firewall rule auditing, IAM key rotation, and vulnerability scans.", icon: <ShieldCheck /> },
              { title: "Backup Management", desc: "Automated incremental snapshot replication to secure offline storage.", icon: <HardDrive /> },
              { title: "Capacity Planning", desc: "Forecast compute growth to plan database migrations preemptively.", icon: <Layers /> },
              { title: "Technical Support", desc: "Direct channel hotline dispatches with guaranteed SLA response times.", icon: <Settings /> }
            ].map((mSrv, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/50 text-[#000072] flex items-center justify-center">
                  {mSrv.icon}
                </div>
                <h3 className="text-base font-black text-[#0F2C59]">{mSrv.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{mSrv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Enterprise FAQ Accordion */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: "Which cloud platforms do you support?", a: "We primarily support AWS, Microsoft Azure, and Google Cloud Platform, as well as on-premise hypervisors like VMware ESXi and Hyper-V." },
              { q: "Do you offer hybrid cloud architectures?", a: "Yes. We specialize in configuring secure hybrid tunnels linking local bare-metal databases with public cloud nodes." },
              { q: "Can you migrate legacy systems?", a: "We excel at legacy migrations. Our team reviews old codebase structures and moves them into modern, containerized clusters without data loss." },
              { q: "How secure are your cloud infrastructures?", a: "Every deployment follows strict zero-trust identity controls, micro-segmentation, and is audited against ISO/IEC 27001 parameters." },
              { q: "What support SLA contracts are available?", a: "We offer monthly SLA support options featuring 24/7/365 telemetry monitoring and emergency technician routing." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 bg-white text-left flex items-center justify-between font-black text-slate-800 hover:text-[#000072] transition-colors cursor-pointer border-0"
                >
                  <span className="text-xs sm:text-sm">{faq.q}</span>
                  {activeFaq === idx ? <Minus className="w-4 h-4 text-[#D32F2F] shrink-0" /> : <Plus className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white border-t border-slate-100"
                    >
                      <p className="px-6 py-5 text-xs text-slate-500 font-semibold leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Redesigned CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-medium">
            Partner with Silicon to build secure, scalable, and high-performance cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#000072]/90 shadow-xl transition-all flex items-center gap-2 border-0">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-extrabold text-xs tracking-wider uppercase hover:bg-white/10 transition-all">
              Request Proposal
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
