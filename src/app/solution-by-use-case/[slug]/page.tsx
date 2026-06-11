"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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

const formatTitle = (slug: string) => {
  if (slug === "bfsi") return "Banking & Finance";
  if (slug === "hpc") return "High Performance Computing (HPC)";
  if (slug === "hci") return "Hyperconverged Infrastructure (HCI)";
  if (slug === "itsm") return "IT Service Management (ITSM)";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface UseCaseData {
  title: string;
  subtitle: string;
  conceptIntro: string;
  conceptPoints: string[];
  benefits: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  featured: {
    title: string;
    desc: string;
    vendor?: string;
  }[];
  portfolio: {
    title: string;
    desc: string;
  }[];
  edgeToCloud: {
    title: string;
    desc: string;
  }[];
  diagramLayers: string[];
  faqs: { q: string; a: string }[];
  caseStudies: {
    title: string;
    desc: string;
    metrics: string[];
    techs: string[];
    result: string;
  }[];
}

const useCaseContent: Record<string, UseCaseData> = {
  "artificial-intelligence-ai": {
    title: "Accelerate Innovation with Enterprise AI & Intelligent Telemetry",
    subtitle: "Scale machine learning workloads, neural classifiers, and predictive models on high-performance compute clusters designed for enterprise scale.",
    conceptIntro: "AI Infrastructure connects raw analytical datasets with high-throughput processing hubs, allowing models to run inferences in real time.",
    conceptPoints: [
      "GPU-Accelerated Computing Nodes",
      "Parallel Filesystem Storage Pools",
      "MLOps Container Orchestration",
      "Secure Edge Model Deployment",
      "Dynamic Processor Scheduling",
      "Model Inference Telemetry Logs"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Lower model execution expenditures up to 35% through dynamic GPU instance scheduling.", icon: "💰" },
      { title: "Improve System Performance", desc: "Accelerate model training times up to 10x using high-throughput GPU arrays.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Orchestrate container groups using Kubernetes to scale training workloads dynamically.", icon: "📈" },
      { title: "Improve Security", desc: "Protect private database rows and sensitive records behind secure credential boundaries.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Scale model inference deployments across geolocated cloud nodes to prevent outages.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Transition manual sorting procedures to automated cognitive vision systems.", icon: "🚀" }
    ],
    featured: [
      { title: "GPU-Accelerated Servers", desc: "Deploy high-density hardware loaded with Nvidia tensor core processors.", vendor: "NVIDIA, Supermicro" },
      { title: "Parallel Storage Infrastructure", desc: "Feed analytical datasets to compute nodes using low-latency filesystems.", vendor: "HPE, Dell Technologies" },
      { title: "MLOps Deployment Pipelines", desc: "Manage machine learning dependencies inside Docker and Kubernetes containers.", vendor: "Red Hat, GitLab" }
    ],
    portfolio: [
      { title: "Cognitive Vision Audits", desc: "Integrate neural networks to scan production items for visual defects." },
      { title: "Predictive Telemetry Alarms", desc: "Audit server temperatures and bandwidth to schedule replacement windows." },
      { title: "Air-gapped Training pools", desc: "Isolate client records within local geographical boundaries." }
    ],
    edgeToCloud: [
      { title: "Unified Management Interface", desc: "Monitor active training progress, core queues, and api response speeds." },
      { title: "Hybrid Processing Bursting", desc: "Burst heavy computing queues to public cloud instances when local systems are busy." },
      { title: "Dynamic Load Balancing", desc: "Distribute model queries to redundant edge devices automatically." }
    ],
    diagramLayers: [
      "Dynamic Application Queries",
      "API Gateway & Load Balancer",
      "Model Inference Nodes (GPU Containers)",
      "Parallel Data Lake Storage"
    ],
    faqs: [
      { q: "How do you protect database security during model training runs?", a: "We isolate training files inside protected memory enclosures and sanitize custom data registers to block leaks of personal data." },
      { q: "Can these AI engines run in a hybrid model?", a: "Yes. Our frameworks allow training datasets inside private cloud boundaries and deploying inference to localized edge platforms." }
    ],
    caseStudies: [
      {
        title: "Clinical Image Recognition Diagnostics",
        desc: "Integrated neural networks trained on secure diagnostic datasets to assist healthcare practitioners with micro-anomaly detection.",
        metrics: ["85% Accuracy Increase", "10x Training Acceleration"],
        techs: ["Nvidia GPUs", "Kubernetes", "PostgreSQL"],
        result: "Deep learning diagnostic accuracy improved compared to legacy framework diagnostics."
      }
    ]
  }
};

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

export default function UseCaseSlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getFallbackData = (slugStr: string): UseCaseData => {
    const title = formatTitle(slugStr);
    return {
      title: `Secure Enterprise ${title} Solutions`,
      subtitle: `Modernize infrastructure and protect dynamic systems using SCL validated blueprints.`,
      conceptIntro: `Enterprise ${title} provides the critical operational layout necessary to support business logic and query paths.`,
      conceptPoints: [
        "High Performance Configurations",
        "Secure Tunnel Architectures",
        "Automated Task Scheduling",
        "Unified Control Interfaces",
        "Compliance Framework Audits",
        "24/7 Remote Monitoring Support"
      ],
      benefits: [
        { title: "Reduce Operational Costs", desc: "Lower infrastructure charges by consolidating resource profiles.", icon: "💰" },
        { title: "Improve Performance", desc: "Accelerate query processing times using optimized system allocations.", icon: "⚡" },
        { title: "Increase Scalability", desc: "Scale compute networks up or down dynamically based on workflow traffic.", icon: "📈" },
        { title: "Improve Security", desc: "Isolate client rows behind next-generation cloud firewalls.", icon: "🔒" },
        { title: "Ensure High Availability", desc: "Guarantee persistent operations with redundant nodes and failovers.", icon: "🔄" },
        { title: "Enable Digital Transformation", desc: "Modernize legacy systems into compliant container groups.", icon: "🚀" }
      ],
      featured: [
        { title: "Enterprise Core Infrastructure", desc: "Deploy stable server models with multi-vendor support.", vendor: "HPE, Dell Technologies" },
        { title: "Virtualization & Hosting", desc: "Construct isolated secure partitions to manage app files.", vendor: "VMware, Red Hat" },
        { title: "Cloud Integration", desc: "Connect local databases directly to secure cloud repositories.", vendor: "AWS, Azure" }
      ],
      portfolio: [
        { title: "Telemetry & Logs Tracker", desc: "Monitor system operations, temperatures, and database loads." },
        { title: "Automated snapshot backups", desc: "Deploy cron script backups protecting file history logs." },
        { title: "Security Access Control", desc: "Restrict database column visibility using role permissions." }
      ],
      edgeToCloud: [
        { title: "Unified Management Dashboard", desc: "Audit server temperatures, connection latency, and core caches." },
        { title: "Hybrid infrastructure links", desc: "Move active server pools between locations without database errors." },
        { title: "Regulatory compliance files", desc: "Satisfy ISO 27001 parameters using strict credential logs." }
      ],
      diagramLayers: [
        "Client Request Portals",
        "Virtual Firewall & Load Balancer",
        "Dynamic Microservices Container Pods",
        "High-Availability SQL Database Storage"
      ],
      faqs: [
        { q: `What are the typical phases of deploying ${title} solutions?`, a: "We manage the entire cycle starting with assessment logs, design wireframes, hardware staging, virtualization setup, and managed NOC support." },
        { q: `How do you support multi-vendor environments?`, a: "Our certified engineers integrate systems across Cisco, Dell, HPE, and VMware layers seamlessly." }
      ],
      caseStudies: [
        {
          title: `Danfoss advances ${title} innovation`,
          desc: "An edge-to-cloud platform keeps the food business running and responds to their customer demands.",
          metrics: ["99.99% Uptime Verified", "30% Lower Computing Waste"],
          techs: ["AWS", "VMware ESXi", "Fortinet NGFW"],
          result: "Operations run securely with automated tracking and low response times."
        }
      ]
    };
  };

  const content = useCaseContent[slug] || getFallbackData(slug);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#000072]/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#D32F2F]/3 blur-[130px] pointer-events-none" />

      {/* 1. Premium Hero Section */}
      <section className="relative w-full bg-slate-50 pt-10 pb-20 md:pb-28 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-8 uppercase tracking-wider text-[10px] md:text-xs font-bold text-slate-400 flex items-center gap-2">
          <Link href="/" className="hover:text-[#000072] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/solution-by-use-case" className="hover:text-[#000072] transition-colors">Use Cases</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#000072] font-black">{formatTitle(slug)}</span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] md:text-xs font-black tracking-wider uppercase mb-6">
              Use Case Solution
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
              {content.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              {content.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#000072]/20 hover:bg-[#000072]/90 transition-all flex items-center gap-2 border-0">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all shadow-sm">
                Request Assessment
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
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">24/7 Support</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#000072]" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Multi-Vendor Expertise</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#D32F2F]" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Scalable Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0F2C59]/5 rounded-[2.5rem] border border-slate-200/50 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center p-8 gap-4">
              <div className="w-full flex flex-col gap-2 relative">
                {(content.diagramLayers || []).map((layer, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "w-full py-3.5 rounded-xl border flex items-center justify-between px-6 transition-all duration-300 shadow-sm font-black text-xs uppercase tracking-wider bg-white border-slate-200/60 text-slate-700"
                    )}
                  >
                    <span>{layer}</span>
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#000072] opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 2. What is [Service] Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
              Infrastructure Details
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59]">
              What is {formatTitle(slug)}?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-4 font-medium">
              {content.conceptIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.conceptPoints || []).map((pt, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col gap-3 text-left">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center text-[#000072]">
                  <CheckCircle2 className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F2C59]">{pt}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Enterprise deployment configurations configured to secure your data transaction pools.
                </p>
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
            Enterprise Outcomes Mapped to ROI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.benefits || []).map((outcome, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{outcome.icon || "🛡️"}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{outcome.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Solutions / Service Categories */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Portfolio Groups
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Core Solutions Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.featured || []).map((cat, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all text-left">
                <div>
                  <h3 className="text-base font-black text-[#0F2C59] mb-3">{cat.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-4">{cat.desc}</p>
                </div>
                <div className="border-t border-slate-150 pt-4 mt-4 text-[11px] font-bold">
                  {cat.vendor && <div><span className="text-[#000072]">Brands:</span> <span className="text-slate-600">{cat.vendor}</span></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Architecture Diagram Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            System Diagrams
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Visual Solution Blueprint
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Explore the multi-tier deployment flow mapping client queries to core data storage networks.
          </p>

          <div className="flex flex-col gap-4 border border-slate-150 rounded-3xl p-6 md:p-10 bg-white relative shadow-sm">
            {(content.diagramLayers || []).map((node, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveDiagramNode(node)}
                onMouseLeave={() => setActiveDiagramNode(null)}
                className={cn(
                  "py-4.5 px-6 rounded-2xl border text-center transition-all duration-300 font-extrabold text-xs uppercase tracking-wider bg-slate-50 relative cursor-default shadow-xs",
                  activeDiagramNode === node ? "scale-[1.02] shadow-md border-slate-400 bg-slate-100" : "border-slate-200"
                )}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Use Cases Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Enterprise Infrastructure Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Enterprise Database Hosting", desc: "Run SQL Server and PostgreSQL databases with high thread counts." },
              { title: "Big Data Processing", desc: "Manage parallel calculation nodes analyzing petabytes of text logs." },
              { title: "Disaster Recovery", desc: "Replicate server volumes to secure offsite vaults using veeam tools." }
            ].map((usecase, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all text-left flex flex-col gap-3">
                <h3 className="text-base font-black text-[#0F2C59]">{usecase.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{usecase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Solutions Section */}
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
            Technology Ecosystem
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

      {/* 9. Deployment Process Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Lifecycle Map
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Deployment Process Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {[
              { num: "01", title: "Assessment", desc: "Auditing active VM core usages." },
              { num: "02", title: "Design", desc: "Mapping virtual networks." },
              { num: "03", title: "Planning", desc: "Configuring server rack hardware." },
              { num: "04", title: "Deployment", desc: "Mounting physical nodes into cabinets." },
              { num: "05", title: "Optimization", desc: "Installing ESXi hypervisor pools." },
              { num: "06", title: "Monitoring", desc: "Adjusting load balancer allocations." },
              { num: "07", title: "Managed NOC", desc: "Routing alerts to our certified NOC." }
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

      {/* 10. Reliability / Security / Performance Section */}
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
              { title: "Performance Tuning", desc: "Audit CPU scaling flags and RAM frequency allocations to maximize compute speeds.", icon: "📈" }
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
              { title: "End-to-End Deployment", desc: "We coordinate everything from network topology maps down to local rack layouts." }
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

      {/* 12. Case Studies Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Optimization In Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(content.caseStudies || []).map((study, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-150 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-all">
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

      {/* 13. Statistics Section */}
      <section className="bg-[#0b1329] py-16 text-white border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10 text-center">
          <div>
            <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">650+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Deployments</span>
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

      {/* 14. FAQ Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
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
            {(content.faqs || []).map((faq, idx) => (
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

      {/* 15. CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Build a Secure, Scalable, Enterprise-Ready Infrastructure
          </h2>
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-medium">
            Contact our senior product engineers to audit your project and construct an implementation roadmap.
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
