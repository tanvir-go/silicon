"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Shield, Star, Tag, Server, Check, 
  Building2, Layers, Cpu, Database, Network, Globe, Box, Award, ShieldCheck
} from "lucide-react";
import { useParams } from "next/navigation";
import ContactSection from "@/sections/ContactSection";
import { useAdminState } from "@/hooks/useAdminState";

// Brands Metadata Dictionary
const BRANDS_DATA: Record<string, { name: string; tag: string; desc: string; capabilities: string[] }> = {
  hpe: {
    name: "HPE",
    tag: "Hewlett Packard Enterprise",
    desc: "Deploy world-class compute, storage, and networking architectures. As a leading enterprise partner, Silicon Computing Ltd provides complete configuration, localized delivery, and certified SLA support for all HPE ProLiant servers and Synergy blades.",
    capabilities: ["ProLiant & Synergy Architecture", "GreenLake Cloud Integration", "Pointnext Service Support"]
  },
  dell: {
    name: "Dell",
    tag: "Dell Technologies",
    desc: "Accelerate your digital transformation with Dell's comprehensive server, storage, and client ecosystems. We configure custom PowerEdge architectures and PowerStore arrays engineered for enterprise virtualization, databases, and HPC workloads.",
    capabilities: ["PowerEdge Server Optimization", "PowerStore All-Flash Clusters", "iDRAC Systems Management"]
  },
  lenovo: {
    name: "Lenovo",
    tag: "Lenovo Enterprise Solutions",
    desc: "Power your business with industry-leading reliability and security. Our team provides configuration and localized lifecycle deployment for Lenovo ThinkSystem servers and ThinkAgile hyperconverged platforms.",
    capabilities: ["ThinkSystem Scale-Out Servers", "ThinkAgile HCI Architectures", "NeXtScale Supercomputing Nodes"]
  },
  cisco: {
    name: "Cisco",
    tag: "Cisco Systems",
    desc: "Unify your multi-cloud and enterprise network security fabric. Silicon Computing Ltd offers certified Cisco Catalyst switching, routing, Meraki SD-WAN, and zero-trust security integrations tailored for enterprise campus and datacenters.",
    capabilities: ["Catalyst Campus Switching", "SD-WAN Routing Optimization", "Zero-Trust Security Integration"]
  },
  huawei: {
    name: "Huawei",
    tag: "Huawei Technologies",
    desc: "Deploy ultra-efficient infrastructure for modern intelligent networks. We source, install, and optimize Huawei FusionServer systems, OceanStor storage arrays, and network switches for high-density computing environments.",
    capabilities: ["FusionServer Compute Systems", "OceanStor Intelligent Storage", "Enterprise Campus Switching"]
  },
  broadcom: {
    name: "Broadcom",
    tag: "Broadcom Enterprise & Symantec",
    desc: "Secure and scale your global IT assets. We offer complete corporate software licensing, integration, and technical support for Broadcom (VMware) virtualization suites and Symantec endpoint defense systems.",
    capabilities: ["VMware Virtualization & Cloud", "Symantec Endpoint Defense", "Enterprise Software Licensing"]
  },
  ibm: {
    name: "IBM",
    tag: "International Business Machines",
    desc: "Harness hybrid cloud architectures and quantum-ready security. Silicon Computing Ltd delivers high-performance IBM FlashSystem storage, z16 mainframe environments, and AI-driven automated middleware deployment.",
    capabilities: ["FlashSystem NVMe Arrays", "IBM Cloud Paks Integration", "Mainframe Systems Consultation"]
  },
  intel: {
    name: "Intel",
    tag: "Intel Corporation",
    desc: "Power critical database and machine learning workloads with state-of-the-art silicon. We supply and configure Intel Xeon Scalable processor blades, Optane memory systems, and AI acceleration suites for enterprise clusters.",
    capabilities: ["Xeon Scalable Architecture", "Optane Memory Integration", "oneAPI Toolkits Integration"]
  },
  micron: {
    name: "Micron",
    tag: "Micron Technology",
    desc: "Accelerate data-intensive workloads with enterprise-grade solid-state memory and flash storage. We integrate high-speed Micron DDR5 memory modules and NVMe SSDs into database servers for latency-critical operations.",
    capabilities: ["DDR5 High-Density RAM", "PCIe NVMe Solid State Storage", "Database Performance Tuning"]
  },
  oracle: {
    name: "Oracle",
    tag: "Oracle Corporation",
    desc: "Unleash the full capability of the world's most powerful database software and systems. Silicon Computing Ltd handles Oracle Database Enterprise licensing, Real Application Clusters (RAC), and Exadata engineered systems integration.",
    capabilities: ["Enterprise Database Licensing", "Real Application Clusters (RAC)", "Exadata Hardware Integration"]
  }
};

// Product Types Metadata Dictionary
const TYPES_DATA: Record<string, { title: string; category: "Compute" | "Networking" | "Storage" | "Software"; desc: string; benefits: { title: string; desc: string }[] }> = {
  "artificial-intelligence-ai": {
    title: "Artificial Intelligence (AI)",
    category: "Software",
    desc: "Empower your organization with deep learning models, natural language processing pipelines, and AI-driven workflow automation. We deploy high-throughput GPU clusters and enterprise AI software suites that scale with ease.",
    benefits: [
      { title: "Predictive Analytics", desc: "Harness historical data to forecast trends and automate complex business decisions." },
      { title: "Model Deployment", desc: "Streamline the MLOps lifecycle from training to production serving with enterprise scale." },
      { title: "Natural Language Processing", desc: "Implement sophisticated conversational agents and document analysis pipelines." },
      { title: "Computer Vision", desc: "Automate visual inspections, facial recognition, and object tracking with state-of-the-art neural networks." }
    ]
  },
  "data-protection": {
    title: "Data Protection",
    category: "Storage",
    desc: "Ensure comprehensive data integrity, automatic replication, and encrypted storage configurations that satisfy global corporate standards. Protect your database from unauthorized modification and hardware failures.",
    benefits: [
      { title: "End-to-End Encryption", desc: "Secure data at rest and in transit using advanced AES-256 standard protocols." },
      { title: "Automated Offsite Backup", desc: "Replicate critical snapshots automatically to localized secure storage repositories." },
      { title: "Granular Recovery", desc: "Restore single items, databases, or whole VM environments within minutes." },
      { title: "Regulatory Compliance", desc: "Meet strict compliance criteria including GDPR, HIPAA, and local regulations." }
    ]
  },
  "business-continuity": {
    title: "Business Continuity",
    category: "Software",
    desc: "Minimize downtime with multi-datacenter failover systems, automated system replication, and hot-standby cloud environments. Maintain operations through hardware failures and network disruptions.",
    benefits: [
      { title: "Automated Failover", desc: "Instantly switch traffic to secondary systems without service interruption." },
      { title: "Real-Time Synchronization", desc: "Maintain read-to-write parity across active-active clusters." },
      { title: "Disaster Auditing", desc: "Perform non-disruptive disaster recovery testing periodically to check readiness." },
      { title: "Uptime SLA Guarantees", desc: "Ensure your critical line-of-business applications achieve 99.99% availability." }
    ]
  },
  "high-performance-computing-hpc": {
    title: "High Performance Computing (HPC)",
    category: "Compute",
    desc: "Design and implement supercomputing clusters, low-latency fabrics, and hyper-threaded compute environments for complex simulations, rendering, and scientific computational research.",
    benefits: [
      { title: "Parallel Processing Nodes", desc: "Coordinate thousands of cores to compute complex datasets in parallel." },
      { title: "InfiniBand Networking", desc: "Utilize ultra-low latency interconnects to maximize node-to-node throughput." },
      { title: "Dynamic Load Scheduler", desc: "Allocate computing cycles intelligently using advanced SLURM schedulers." },
      { title: "Thermal Performance", desc: "Deploy liquid-cooled server racks optimized for sustained high workloads." }
    ]
  },
  "data-storage": {
    title: "Data Storage",
    category: "Storage",
    desc: "Scale storage capacity from terabytes to petabytes using unified SAN/NAS systems, hyper-fast NVMe arrays, and scalable object storage. Intelligently tier cold data to optimize hardware budgets.",
    benefits: [
      { title: "NVMe Speed Optimization", desc: "Accelerate critical database transaction rates using all-flash NVMe systems." },
      { title: "Petabyte-Scale Growth", desc: "Scale storage volumes without interrupting active user connections." },
      { title: "Dynamic Tiering", desc: "Move data automatically between hot, warm, and cold storage pools." },
      { title: "Deduplication & Compression", desc: "Save up to 60% disk space using inline deduplication technologies." }
    ]
  },
  "hyperconverged-infrastructure-hci": {
    title: "Hyperconverged Infrastructure (HCI)",
    category: "Compute",
    desc: "Unify server compute, software-defined storage, and networking into a single scalable block. Simplify datacenter operations with software-centric infrastructure management.",
    benefits: [
      { title: "Unified Control Interface", desc: "Manage compute, storage, and networking from a single dashboard." },
      { title: "Linear Scalability", desc: "Add nodes dynamically to scale performance and disk capacity simultaneously." },
      { title: "Software-Defined Storage", desc: "Pool local server drives into virtual shared storage arrays." },
      { title: "Reduced Footprint", desc: "Lower power, cooling, and rack space costs up to 40%." }
    ]
  },
  "ransomware-protection": {
    title: "Ransomware Protection",
    category: "Software",
    desc: "Defend your corporate files with immutable snapshots, zero-trust network access, and real-time behavioral malware threat intelligence. Block intrusion before file encryption can begin.",
    benefits: [
      { title: "Immutable Snapshots", desc: "Store read-only system backups that cannot be modified or deleted by ransomware." },
      { title: "Zero-Trust Network Access", desc: "Enforce continuous authentication for every file access request." },
      { title: "Behavioral Detection", desc: "Identify and isolate anomalous file modification activity instantly." },
      { title: "Rapid System Restore", desc: "Revert system files to their pre-attack state with clean, verified backups." }
    ]
  },
  "application-performance": {
    title: "Application Performance",
    category: "Software",
    desc: "Optimize system performance, minimize database query latency, and leverage load-balanced application servers to deliver responsive user experiences across all corporate portals.",
    benefits: [
      { title: "Application Monitoring", desc: "Track transactions, database queries, and API response times." },
      { title: "Caching Architectures", desc: "Deploy distributed in-memory databases like Redis for high-speed read operations." },
      { title: "Auto-Scaling Servers", desc: "Provision computing instances dynamically during traffic surges." },
      { title: "Bottleneck Analysis", desc: "Utilize advanced profilers to pinpoint code-level and network bottlenecks." }
    ]
  },
  "it-service-management-itsm": {
    title: "IT Service Management (ITSM)",
    category: "Software",
    desc: "Align IT services with corporate business needs. We deploy automated support desks, ITIL service management frameworks, and asset tracking portals that maximize internal staff productivity.",
    benefits: [
      { title: "ITIL Compliance", desc: "Implement standardized service workflows including incident and change management." },
      { title: "Support Ticket Automation", desc: "Assign support tickets dynamically using intelligent routing rules." },
      { title: "Enterprise Asset Tracking", desc: "Track corporate hardware lifecycle and software license audits." },
      { title: "Self-Service Support", desc: "Empower staff to resolve issues using automated knowledge bases." }
    ]
  }
};

export default function ProductsDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { products, loading } = useAdminState();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7F9] pt-32 pb-24 flex items-center justify-center">
        <div className="text-slate-500 font-extrabold text-sm animate-pulse">Loading Details...</div>
      </div>
    );
  }

  // 1. BRAND PAGE ROUTING
  if (BRANDS_DATA[slug]) {
    const brand = BRANDS_DATA[slug];
    const brandProducts = products.filter(p => p.brand.toLowerCase() === slug);

    return (
      <main className="min-h-screen bg-[#F5F7F9] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#000072]/5 blur-[125px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Banner (Solutions Page Style) */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-bold tracking-wider uppercase mb-4">
                Authorized Enterprise Partner
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
                {brand.name} Solutions Hub
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                {brand.desc}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link href={`/contact?inquiry=${encodeURIComponent(brand.name + " Custom Bid Inquiry")}`} className="px-6 py-3 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wide shadow-lg hover:bg-[#000072]/90 transition-all flex items-center gap-2">
                  Request Bidding <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-6 py-3 rounded-xl bg-slate-100 text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-200 transition-all">
                  Talk to Sales
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-3xl bg-[#F0F4F7] shadow-xl p-8 relative overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-100">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-[#000072]" />
                  </div>
                  <h3 className="font-extrabold text-2xl text-[#0F2C59]">{brand.name} Enterprise</h3>
                  <p className="text-xs text-slate-500 mt-2">Next-Gen Implementation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {brand.capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#000072]/10 text-[#000072] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0F2C59] mb-1">{cap}</h3>
                  <p className="text-[11px] font-semibold text-slate-400">Enterprise Certified Deployment</p>
                </div>
              </div>
            ))}
          </div>

          {/* Matching Products Grid */}
          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2C59] mb-6">
              Available {brand.name} Catalog
            </h2>

            {brandProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/collections/${product.id}`} className="h-44 bg-slate-50 relative overflow-hidden block">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-[#0F2C59] text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-sm">
                        {product.category}
                      </span>
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <Link href={`/collections/${product.id}`}>
                        <h3 className="font-extrabold text-[#0F2C59] text-base leading-tight hover:text-[#000072] transition-colors mb-2 line-clamp-2">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 font-semibold mb-4 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          {product.stockStatus}
                        </span>
                        <Link href={`/contact?inquiry=${encodeURIComponent(product.title)}`}>
                          <button className="px-4 py-2 rounded-lg bg-[#000072] text-white font-extrabold text-[10px] uppercase tracking-wide hover:bg-[#000072]/90 transition-colors cursor-pointer">
                            Get Quote
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12 text-center shadow-sm flex flex-col items-center justify-center">
                <Box className="w-12 h-12 text-slate-350 mb-4 animate-pulse" />
                <h3 className="text-lg font-bold text-[#0F2C59] mb-2">Custom Procurement Available</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
                  Silicon Computing Ltd maintains direct channels with {brand.name} global logistics. We handle bulk enterprise hardware procurement, local shipping channels, and technical warranties.
                </p>
                <Link href={`/contact?inquiry=${encodeURIComponent(brand.name + " Custom Bid Inquiry")}`}>
                  <button className="px-6 py-3 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide hover:bg-[#000072]/90 transition-colors shadow-md shadow-[#000072]/15 cursor-pointer flex items-center gap-2">
                    Request custom {brand.name} bidding <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <ContactSection />
      </main>
    );
  }

  // 2. PRODUCT TYPE / CATEGORY PAGE ROUTING
  if (TYPES_DATA[slug]) {
    const type = TYPES_DATA[slug];
    
    // Filter products whose category matches or shortDesc matches type keywords
    const categoryProducts = products.filter(p => 
      p.category === type.category || 
      p.title.toLowerCase().includes(slug.split("-")[0]) ||
      p.shortDesc.toLowerCase().includes(slug.split("-")[0])
    );

    return (
      <main className="min-h-screen bg-[#F5F7F9] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#000072]/5 blur-[125px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Banner (Solutions Page Style) */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-bold tracking-wider uppercase mb-4">
                Target Architecture Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
                {type.title}
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                {type.desc}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#solutions-catalog" className="px-6 py-3 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wide shadow-lg hover:bg-[#000072]/90 transition-all flex items-center gap-2">
                  View Catalog <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="px-6 py-3 rounded-xl bg-slate-100 text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-200 transition-all">
                  Consult Engineers
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-3xl bg-[#F0F4F7] shadow-xl p-8 relative overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-100">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-[#000072]" />
                  </div>
                  <h3 className="font-extrabold text-2xl text-[#0F2C59]">{type.title}</h3>
                  <p className="text-xs text-slate-500 mt-2">Enterprise Architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {type.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-[#0F2C59]">{benefit.title}</h3>
                <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Matching Products Grid */}
          <div className="mb-16">
            <h2 id="solutions-catalog" className="text-xl sm:text-2xl font-black text-[#0F2C59] mb-6">
              Recommended Hardware & Software Licenses
            </h2>

            {categoryProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/collections/${product.id}`} className="h-44 bg-slate-50 relative overflow-hidden block">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-[#0F2C59] text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-sm">
                        {product.brand}
                      </span>
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <Link href={`/collections/${product.id}`}>
                        <h3 className="font-extrabold text-[#0F2C59] text-base leading-tight hover:text-[#000072] transition-colors mb-2 line-clamp-2">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 font-semibold mb-4 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          {product.stockStatus}
                        </span>
                        <Link href={`/contact?inquiry=${encodeURIComponent(product.title)}`}>
                          <button className="px-4 py-2 rounded-lg bg-[#000072] text-white font-extrabold text-[10px] uppercase tracking-wide hover:bg-[#000072]/90 transition-colors cursor-pointer">
                            Get Quote
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12 text-center shadow-sm flex flex-col items-center justify-center">
                <Box className="w-12 h-12 text-slate-350 mb-4 animate-pulse" />
                <h3 className="text-lg font-bold text-[#0F2C59] mb-2">Request Architecture Blueprint</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
                  Our system architects design zero-trust integration models matching this specific category. Request a custom solution map for your datacenter.
                </p>
                <Link href="/contact">
                  <button className="px-6 py-3 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide hover:bg-[#000072]/90 transition-colors shadow-md shadow-[#000072]/15 cursor-pointer flex items-center gap-2">
                    Consult our engineers <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <ContactSection />
      </main>
    );
  }

  // 3. PRODUCT DETAILS ROUTING (FALLBACK)
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F5F7F9] pt-40 pb-24 flex flex-col items-center justify-center text-center px-6">
        <Server className="w-20 h-20 text-slate-300 mb-6" />
        <h1 className="text-4xl font-extrabold text-[#0F2C59] mb-4">Product Not Found</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">The hardware or software license you are looking for does not exist in our current enterprise catalog.</p>
        <Link href="/collections/product" className="px-8 py-4 rounded-xl bg-[#0F2C59] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-[#0a1e3f] transition-all">
          Return to Catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F7F9] pt-32 pb-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row mb-16">
          
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2 bg-slate-50 relative border-r border-slate-100 p-8 flex items-center justify-center min-h-[400px]">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-inner"
            />
            <div className="absolute top-10 left-10 flex flex-col gap-2">
              <span className="bg-[#0F2C59] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg w-max">
                {product.brand}
              </span>
              <span className="bg-white/90 backdrop-blur text-slate-800 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg w-max flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {product.category}
              </span>
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0F2C59] leading-tight mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-[#000072] underline cursor-pointer">Read Internal Reviews</span>
              
              <div className="w-px h-4 bg-slate-200 mx-2" />
              
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                product.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 
                product.stockStatus === 'Low Stock' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
              }`}>
                {product.stockStatus}
              </span>
            </div>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {product.shortDesc}
            </p>

            <div className="mb-10 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-4">Hardware / Software Capabilities</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-xl">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link href={`/contact?inquiry=${encodeURIComponent(product.title)}`} className="flex-1">
                <button 
                  disabled={product.stockStatus === "Out of Stock"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-sm uppercase tracking-wide shadow-xl shadow-[#000072]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                  {product.stockStatus === "Out of Stock" ? "Currently Unavailable" : "Request Enterprise Quote"}
                </button>
              </Link>
              <button className="px-8 py-4 rounded-xl bg-slate-100 border border-slate-200 text-[#0F2C59] font-extrabold text-sm uppercase tracking-wide hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm whitespace-nowrap">
                <Shield className="w-4 h-4 mr-2" /> Data Sheet
              </button>
            </div>
            
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-100 opacity-60">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-600"><Check className="w-3.5 h-3.5 text-[#000072]" /> ISO Certified</div>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-600"><Check className="w-3.5 h-3.5 text-[#000072]" /> Global SLA</div>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-600"><Check className="w-3.5 h-3.5 text-[#000072]" /> 24/7 Support</div>
            </div>
          </div>
        </div>

      </div>

      <ContactSection />
    </main>
  );
}
