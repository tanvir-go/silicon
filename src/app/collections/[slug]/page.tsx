"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Shield, Star, Tag, Server, Check, 
  Building2, Layers, Cpu, Database, Network, Globe, Box, Award, ShieldCheck,
  Share2, Phone, MessageSquare, Plus, Minus, Info, ChevronDown, X
} from "lucide-react";
import { useParams } from "next/navigation";
import ContactSection from "@/sections/ContactSection";
import { useAdminState } from "@/hooks/useAdminState";
import { cn } from "@/lib/utils";

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
  const { products, addOrder, loading } = useAdminState();

  // States for interactive UI elements
  const [quantity, setQuantity] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState<"overview" | "specs" | "comparison">("overview");
  const [activeImage, setActiveImage] = React.useState("");
  const [copiedLink, setCopiedLink] = React.useState(false);
  const [showBidModal, setShowBidModal] = React.useState(false);
  const [bidSubmitted, setBidSubmitted] = React.useState(false);
  const [bidForm, setBidForm] = React.useState({ name: "", email: "", phone: "", notes: "" });
  const [accordionOpen, setAccordionOpen] = React.useState<Record<string, boolean>>({
    general: true,
    performance: false,
    warranty: false,
  });
  const [currentBrandPage, setCurrentBrandPage] = React.useState(1);

  // Sync active image when product loads
  React.useEffect(() => {
    const product = products.find(p => p.id === slug);
    if (product) {
      setActiveImage(product.image);
    }
  }, [products, slug]);

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
              <>
                {(() => {
                  const itemsPerPageBrand = 12;
                  const totalBrandPages = Math.ceil(brandProducts.length / itemsPerPageBrand);
                  const startIdx = (currentBrandPage - 1) * itemsPerPageBrand;
                  const visibleBrandProducts = brandProducts.slice(startIdx, startIdx + itemsPerPageBrand);
                  
                  const getBrandPageNumbers = () => {
                    const pages: (number | string)[] = [];
                    const maxVisible = 5;
                    if (totalBrandPages <= maxVisible) {
                      for (let i = 1; i <= totalBrandPages; i++) pages.push(i);
                    } else {
                      if (currentBrandPage <= 3) {
                        pages.push(1, 2, 3, 4, "...", totalBrandPages);
                      } else if (currentBrandPage >= totalBrandPages - 2) {
                        pages.push(1, "...", totalBrandPages - 3, totalBrandPages - 2, totalBrandPages - 1, totalBrandPages);
                      } else {
                        pages.push(1, "...", currentBrandPage - 1, currentBrandPage, currentBrandPage + 1, "...", totalBrandPages);
                      }
                    }
                    return pages;
                  };

                  return (
                    <>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleBrandProducts.map((product) => (
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
                                  <button className="px-4 py-2 rounded-lg bg-[#000072] text-white font-extrabold text-[10px] uppercase tracking-wide hover:bg-[#000072]/90 transition-colors cursor-pointer border-0">
                                    Get Quote
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {totalBrandPages > 1 && (
                        <div className="flex items-center justify-center gap-3 mt-12 pb-6">
                          {currentBrandPage > 1 && (
                            <button 
                              onClick={() => { setCurrentBrandPage(prev => Math.max(prev - 1, 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                              className="w-12 h-12 rounded-2xl bg-white border border-slate-100/80 text-[#0F2C59] hover:bg-slate-50 flex items-center justify-center transition-all duration-300 font-extrabold cursor-pointer shadow-sm text-sm"
                            >
                              &lt;
                            </button>
                          )}
                          {getBrandPageNumbers().map((page, idx) => {
                            if (page === "...") {
                              return (
                                <span key={idx} className="w-12 h-12 flex items-center justify-center text-slate-400 font-bold text-sm tracking-widest">
                                  ...
                                </span>
                              );
                            }
                            return (
                              <button
                                key={idx}
                                onClick={() => { setCurrentBrandPage(Number(page)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                className={cn(
                                  "w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm",
                                  currentBrandPage === page
                                    ? "bg-[#000066] text-white border-0"
                                    : "bg-white border border-slate-100/80 text-[#0F2C59] hover:bg-slate-50"
                                )}
                              >
                                {page}
                              </button>
                            );
                          })}
                          {currentBrandPage < totalBrandPages && (
                            <button 
                              onClick={() => { setCurrentBrandPage(prev => Math.min(prev + 1, totalBrandPages)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                              className="w-12 h-12 rounded-2xl bg-white border border-slate-100/80 text-[#0F2C59] hover:bg-slate-50 flex items-center justify-center transition-all duration-300 font-extrabold cursor-pointer shadow-sm text-sm"
                            >
                              &gt;
                            </button>
                          )}
                        </div>
                      )}
                    </>
                  );
                })()}
              </>
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
                          <button className="px-4 py-2 rounded-lg bg-[#000072] text-white font-extrabold text-[10px] uppercase tracking-wide hover:bg-[#000072]/90 transition-colors cursor-pointer border-0">
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
        <Server className="w-20 h-20 text-slate-300 mb-6 animate-pulse" />
        <h1 className="text-4xl font-extrabold text-[#0F2C59] mb-4">Product Not Found</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">The hardware or software license you are looking for does not exist in our current enterprise catalog.</p>
        <Link href="/collections/product" className="px-8 py-4 rounded-xl bg-[#0F2C59] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-[#0a1e3f] transition-all">
          Return to Catalog
        </Link>
      </main>
    );
  }

  // Derive related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Derive products for comparison
  const comparisonProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 2);
  if (comparisonProducts.length < 2) {
    const backup = products.filter(p => p.id !== product.id).slice(0, 2 - comparisonProducts.length);
    comparisonProducts.push(...backup);
  }



  // Handle Share link copy
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Accordion Toggle helper
  const toggleAccordion = (section: string) => {
    setAccordionOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Generate category-based specifications list
  const getSpecs = () => {
    switch (product.category) {
      case "Compute":
        return {
          "Brand": product.brand,
          "Form Factor": "2U Rackmount Architecture",
          "Processor": "Dual-Socket Intel Xeon Scalable or AMD EPYC",
          "Memory Capacity": "Up to 3TB DDR5 (32x DIMM slots)",
          "RAID Controller": "Broadcom MegaRAID Tri-Mode (12G SAS/SATA/PCIe)",
          "Networking": "OCP 3.0 FlexLOM slot + dual 10GbE SFP+ Base-T ports",
          "Power Supply": "Dual Hot-Plug Redundant Titanium High Efficiency (800W/1600W)",
          "Management Suite": "HPE iLO 5 / Dell iDRAC9 Enterprise Remote Console"
        };
      case "Storage":
        return {
          "Brand": product.brand,
          "Drive Bays": "24x 2.5\" SFF Hot-Plug NVMe/SAS Drive Slots",
          "Raw Capacity": "Up to 368TB (using high-density flash arrays)",
          "Interface speed": "12Gb/s SAS / 16Gb/s Fibre Channel / 100Gb NVMe-oF",
          "Expansion": "Supports up to 8 additional storage shelves",
          "Controller Configuration": "Active-Active dual controller hot-swappable architecture",
          "Caching Memory": "64GB DDR4 High-Throughput caching buffer",
          "System Host I/O": "FCoE, iSCSI, SAS Host Interface Connectivity"
        };
      case "Networking":
        return {
          "Brand": product.brand,
          "Ports": "48x 10/100/1000 Base-T PoE+ or 100G SFP+ Uplinks",
          "ASIC Technology": "Unified Access Data Plane (UADP 2.0)",
          "Switching Fabric": "Up to 920 Gbps non-blocking capacity",
          "Stacking bandwidth": "Supports stacking up to 8 switches (480 Gbps)",
          "Power Budget": "370W / 740W PoE+ Power allocations",
          "Cooling": "Redundant N+1 Hot-Swap Smart Cooling Fans",
          "Software Licences": "Network Advantage, Cisco DNA Essentials/Advantage"
        };
      case "Software":
      default:
        return {
          "Brand": product.brand,
          "License Model": "Per-Core Perpetual or Dynamic Annual Term Subscription",
          "Platform Support": "Bare-Metal ESXi, RedHat Linux, Windows Server, VMware Cloud",
          "Management Interface": "VCF SDDC / vCenter Server Appliance Console",
          "Security Protocol": "FIPS 140-2 compliance, TLS 1.3 encrypted controls",
          "High Availability": "Automated HA clusters with proactive fault management",
          "Support Level": "24/7 Production Level Technical Response SLA",
          "Updates Frequency": "Quarterly critical lifecycle and hotfix updates"
        };
    }
  };

  const productSpecs = getSpecs();

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bidForm.name || !bidForm.email || !bidForm.phone) {
      alert("Please fill in Name, Email, and Phone fields.");
      return;
    }
    
    addOrder({
      customerName: bidForm.name,
      customerEmail: bidForm.email,
      customerPhone: bidForm.phone,
      date: new Date().toISOString(),
      total: product.price * quantity,
      paymentMethod: "Corporate Bid",
      paymentStatus: "Pending",
      fulfillmentStatus: "Unfulfilled",
      shippingAddress: bidForm.notes || "No special configuration requirements.",
      items: [
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity
        }
      ]
    });
    
    setBidSubmitted(true);
    setTimeout(() => {
      setBidSubmitted(false);
      setShowBidModal(false);
      setBidForm({ name: "", email: "", phone: "", notes: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Visual background enhancements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#000072]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 bg-white py-3.5 px-6 rounded-2xl border border-slate-100 shadow-sm">
          <Link href="/" className="hover:text-[#000072] transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="/collections/product" className="hover:text-[#000072] transition-colors">Procurement Catalog</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400 capitalize">{product.category}</span>
          <span className="text-slate-300">/</span>
          <span className="text-[#0F2C59] font-bold line-clamp-1">{product.title}</span>
        </nav>

        {/* 2. Product Title & Quick Info Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F2C59] leading-tight mb-4">
            {product.title}
          </h1>
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-400">Availability:</span>
              <span className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                product.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 
                product.stockStatus === 'Low Stock' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
              }`}>
                {product.stockStatus}
              </span>
            </div>
            <div className="w-px h-3.5 bg-slate-200 hidden sm:block" />
            <div>
              <span className="font-semibold text-slate-400">Product Code:</span>
              <span className="font-bold text-[#0F2C59] ml-1 uppercase">{`SIL-PROC-${product.id.substring(0, 8)}`}</span>
            </div>
            <div className="w-px h-3.5 bg-slate-200 hidden sm:block" />
            <div>
              <span className="font-semibold text-slate-400">Brand:</span>
              <span className="font-extrabold text-[#000072] ml-1 uppercase tracking-wide">{product.brand}</span>
            </div>
            <div className="w-px h-3.5 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-slate-400">Rating:</span>
              <div className="flex items-center gap-0.5 ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                ))}
              </div>
              <span className="font-bold text-[#0F2C59] ml-1">({product.rating})</span>
            </div>
          </div>
        </div>

        {/* 3. Main Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: Interactive Media Gallery (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-3xl border border-slate-100 p-8 flex items-center justify-center min-h-[350px] shadow-sm relative group overflow-hidden">
              <img 
                src={activeImage || product.image} 
                alt={product.title} 
                className="w-full h-full max-h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-[#0F2C59] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md w-max">
                  {product.brand}
                </span>
                <span className="bg-white/95 backdrop-blur text-slate-800 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm w-max flex items-center gap-1 border border-slate-100">
                  <Tag className="w-3 h-3 text-[#000072]" />
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveImage(product.image)}
                className={`w-20 h-20 rounded-xl bg-white border-2 flex items-center justify-center p-2 shadow-sm transition-all shrink-0 ${activeImage === product.image ? 'border-[#000072] ring-2 ring-[#000072]/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <img src={product.image} className="max-h-full max-w-full object-contain rounded-md" />
              </button>
              <button 
                onClick={() => setActiveImage("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400")}
                className={`w-20 h-20 rounded-xl bg-white border-2 flex items-center justify-center p-2 shadow-sm transition-all shrink-0 ${activeImage.includes("photo-1558494949") ? 'border-[#000072] ring-2 ring-[#000072]/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400" className="max-h-full max-w-full object-cover rounded-md" />
              </button>
              <button 
                onClick={() => setActiveImage("https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=400")}
                className={`w-20 h-20 rounded-xl bg-white border-2 flex items-center justify-center p-2 shadow-sm transition-all shrink-0 ${activeImage.includes("photo-1597852074816") ? 'border-[#000072] ring-2 ring-[#000072]/20' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <img src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=400" className="max-h-full max-w-full object-cover rounded-md" />
              </button>
            </div>

            {/* Share Panel */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mt-2">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Share Product:</span>
              <button onClick={handleCopyLink} className="text-slate-500 hover:text-[#000072] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 border-0">
                <Check className={`w-3.5 h-3.5 text-emerald-600 ${copiedLink ? 'block' : 'hidden'}`} />
                <span>{copiedLink ? "Link Copied!" : "Copy Link"}</span>
              </button>
              <a href={`mailto:?subject=Corporate IT Bid Inquiry: ${product.title}&body=Check out this product from Silicon Computing Ltd: `} className="text-slate-500 hover:text-[#000072] text-xs font-bold flex items-center gap-1.5 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                Email Details
              </a>
            </div>
          </div>

          {/* Middle: Feature Highlights (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black uppercase tracking-wider">
                  Verified Enterprise Asset
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {product.shortDesc}
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-150 pb-2">
                  Key Specifications
                </h3>
                <ul className="flex flex-col gap-3">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-semibold bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm hover:border-[#000072]/30 hover:shadow-md transition-all">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#000072]/5 border border-[#000072]/10 p-4 rounded-2xl flex items-center gap-3.5 mt-4">
              <ShieldCheck className="w-8 h-8 text-[#000072] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#0F2C59]">3-Year Authorized Warranty</h4>
                <p className="text-[10px] font-semibold text-slate-500 mt-0.5">Replacement components are covered under authorized corporate SLA contract.</p>
              </div>
            </div>
          </div>

          {/* Right: B2B Quotation Card (3 Columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-150 shadow-lg p-6 flex flex-col relative sticky top-32">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-emerald-505 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                Fast Quote Response
              </div>
              
              <div className="border-b border-slate-100 pb-5 mb-5 text-center sm:text-left">
                <span className="text-[11px] font-black text-[#000072] uppercase tracking-widest block">B2B Procurement</span>
                <span className="text-xl font-extrabold text-[#0F2C59] mt-1 block">
                  Submit Bid Request
                </span>
                <span className="text-[9px] font-bold text-slate-400 mt-1 block leading-tight">Request custom configuration and bulk pricing.</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-[10px] font-black text-slate-800 uppercase tracking-wider mb-2 block">Inquiry Quantity</label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-250 text-slate-650 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer font-bold border-0"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center bg-transparent border-0 text-sm font-bold text-[#0F2C59] focus:outline-none focus:ring-0" 
                  />
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-250 text-slate-650 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer font-bold border-0"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* B2B Action Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <button 
                  onClick={() => setShowBidModal(true)}
                  disabled={product.stockStatus === "Out of Stock"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/75 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
                >
                  <ArrowRight className="w-4 h-4" />
                  Request Corporate Bid
                </button>

                <a 
                  href={`tel:+8801700000000`}
                  className="w-full py-3.5 rounded-xl border border-slate-205 text-[#0F2C59] font-extrabold text-xs uppercase tracking-wide hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Call Procurement Team
                </a>
              </div>

              {/* Trust assurances checklist */}
              <div className="border-t border-slate-100 pt-5 flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Factory-Direct Geniuine Partner</span>
                </div>
                <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated B2B Logistics Routing</span>
                </div>
                <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Secure Escrow & Invoice Bidding</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4. Tab Navigation and Detail Section (Overview & Why Buy From Silicon Computing) */}
        <div className="border-b border-slate-200 mb-8 bg-slate-100/60 p-1 rounded-xl w-fit border border-slate-200/50">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-0 ${activeTab === 'overview' ? 'bg-[#000072] text-white shadow-md' : 'text-slate-600 hover:text-[#0F2C59] hover:bg-slate-50'}`}
          >
            Product Overview
          </button>
          <button 
            onClick={() => setActiveTab("specs")}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-0 ${activeTab === 'specs' ? 'bg-[#000072] text-white shadow-md' : 'text-slate-600 hover:text-[#0F2C59] hover:bg-slate-50'}`}
          >
            Technical Specifications
          </button>
          <button 
            onClick={() => setActiveTab("comparison")}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-0 ${activeTab === 'comparison' ? 'bg-[#000072] text-white shadow-md' : 'text-slate-600 hover:text-[#0F2C59] hover:bg-slate-50'}`}
          >
            Product Matrix Compare
          </button>
        </div>

        {/* Tab 1: Detailed Overview Layout */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Detailed Description Column (8 Columns) */}
            <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#0F2C59] mb-4">Enterprise Implementation Profile</h2>
              <p className="text-sm text-slate-505 leading-relaxed mb-6">
                Silicon Computing Ltd supplies custom configuration blueprints designed to optimize network infrastructure budgets. We maintain primary partner relationships with top OEMs, managing hardware staging and enterprise warranty SLAs.
              </p>
              <p className="text-sm text-slate-505 leading-relaxed mb-8">
                {`This specific ${product.category} component integrates seamlessly into hyperconverged stacks and hybrid cloud datacenters. Supported by full hardware encryption and zero-trust firmware verification protocols, it maximizes operational uptime for critical transactional databases and corporate workloads.`}
              </p>

              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4">Hardware Integration Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-slate-100 p-4 rounded-2xl bg-slate-50/50">
                  <h4 className="text-xs font-bold text-[#0F2C59] mb-1">Direct Factory Procurement</h4>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">Direct partner channels bypass distributor overheads, guaranteeing certified original parts and bulk bidding rates.</p>
                </div>
                <div className="border border-slate-100 p-4 rounded-2xl bg-slate-50/50">
                  <h4 className="text-xs font-bold text-[#0F2C59] mb-1">Staging & Config Support</h4>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">Our system engineers mount, configure RAID controllers, write custom configurations, and execute stress tests prior to delivery.</p>
                </div>
                <div className="border border-slate-100 p-4 rounded-2xl bg-slate-50/50">
                  <h4 className="text-xs font-bold text-[#0F2C59] mb-1">Next-Business-Day Support</h4>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">Enterprise support tiers offer NBD local parts replacement and onsite installation, backed by certified service level contracts.</p>
                </div>
                <div className="border border-slate-100 p-4 rounded-2xl bg-slate-50/50">
                  <h4 className="text-xs font-bold text-[#0F2C59] mb-1">Warranty Traceability</h4>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">Serial tracing validates factory warranties directly via manufacturer backend catalogs, guaranteeing genuine hardware.</p>
                </div>
              </div>
            </div>

            {/* Why buy panel (4 Columns) */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">Why Buy From Silicon Computing?</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2C59]">24/7 Enterprise Support SLA</h4>
                      <p className="text-[10px] font-semibold text-slate-400 leading-relaxed mt-0.5">Certified team is on standby to solve performance bottlenecks and server hardware faults.</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2C59]">Original Certified Hardware</h4>
                      <p className="text-[10px] font-semibold text-slate-400 leading-relaxed mt-0.5">No grey market components. All products are backed by authorized direct OEM partnerships.</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2C59]">Custom Staging Infrastructure</h4>
                      <p className="text-[10px] font-semibold text-slate-400 leading-relaxed mt-0.5">Pre-delivery hardware configuration, firmware updates, and stress-tests performed at our local site.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-100 mt-6 text-center">
                <span className="text-[9px] font-black uppercase text-slate-400 block tracking-widest mb-1.5">Authorized B2B Partner</span>
                <span className="text-xs font-bold text-[#0F2C59] leading-tight block">Silicon Computing Ltd is ISO 20000 & 9001 certified.</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Accordion Technical Specifications */}
        {activeTab === "specs" && (
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-16 flex flex-col gap-4">
            <h2 className="text-xl font-extrabold text-[#0F2C59] mb-4">Technical Datasheet Specifications</h2>
            
            {/* Accordion 1: General Specs */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleAccordion("general")}
                className="w-full p-5 bg-slate-50 flex items-center justify-center text-left hover:bg-slate-100 transition-colors font-bold text-xs uppercase tracking-wider text-[#0F2C59] border-0 cursor-pointer"
              >
                <div className="flex-1 flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#000072]" />
                  <span>General Product Architecture</span>
                </div>
                <span className="text-slate-400 font-black text-sm">{accordionOpen.general ? "▲" : "▼"}</span>
              </button>
              {accordionOpen.general && (
                <div className="p-6 bg-white border-t border-slate-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs font-semibold">
                    {Object.entries(productSpecs).slice(0, 4).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-2.5 border-b border-slate-100">
                        <span className="text-slate-400 uppercase tracking-wider text-[10px]">{key}</span>
                        <span className="text-[#0F2C59] font-bold text-right pl-4">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Performance Specs */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleAccordion("performance")}
                className="w-full p-5 bg-slate-50 flex items-center justify-center text-left hover:bg-slate-100 transition-colors font-bold text-xs uppercase tracking-wider text-[#0F2C59] border-0 cursor-pointer"
              >
                <div className="flex-1 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#000072]" />
                  <span>Performance & Scalability Metrics</span>
                </div>
                <span className="text-slate-400 font-black text-sm">{accordionOpen.performance ? "▲" : "▼"}</span>
              </button>
              {accordionOpen.performance && (
                <div className="p-6 bg-white border-t border-slate-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs font-semibold">
                    {Object.entries(productSpecs).slice(4).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-2.5 border-b border-slate-100">
                        <span className="text-slate-400 uppercase tracking-wider text-[10px]">{key}</span>
                        <span className="text-[#0F2C59] font-bold text-right pl-4">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Warranty Details */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleAccordion("warranty")}
                className="w-full p-5 bg-slate-50 flex items-center justify-center text-left hover:bg-slate-100 transition-colors font-bold text-xs uppercase tracking-wider text-[#0F2C59] border-0 cursor-pointer"
              >
                <div className="flex-1 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#000072]" />
                  <span>Support & Service Level Warranty (SLA)</span>
                </div>
                <span className="text-slate-400 font-black text-sm">{accordionOpen.warranty ? "▲" : "▼"}</span>
              </button>
              {accordionOpen.warranty && (
                <div className="p-6 bg-white border-t border-slate-100 text-xs font-semibold text-slate-500 leading-relaxed">
                  <p className="mb-4">All hardware procurement handled by Silicon Computing Ltd is protected by a standard factory original 3-Year local component replacement warranty. SLA contracts include:</p>
                  <ul className="flex flex-col gap-2.5 pl-4 list-disc font-medium text-slate-400">
                    <li>24/7 Telephone & Email technical support routing directly to certified system engineers.</li>
                    <li>Next-Business-Day localized dispatch for hot-swappable enterprise component replacements.</li>
                    <li>Optional firmware updates and remote diagnostic analysis checks during standard scheduled downtime windows.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Comparison Table */}
        {activeTab === "comparison" && (
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-16 overflow-x-auto">
            <h2 className="text-xl font-extrabold text-[#0F2C59] mb-6">Enterprise Hardware Matrix Comparison</h2>
            
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 text-xs font-black uppercase text-slate-400 tracking-wider">Features</th>
                  <th className="py-4 px-4 text-sm font-extrabold text-[#000072] max-w-[250px]">{product.title} (This Product)</th>
                  {comparisonProducts.map((compP, index) => (
                    <th key={index} className="py-4 px-4 text-sm font-extrabold text-[#0F2C59] max-w-[250px]">{compP.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-650">
                <tr className="border-b border-slate-100">
                  <td className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Brand</td>
                  <td className="py-4 px-4 text-[#000072] font-bold uppercase">{product.brand}</td>
                  {comparisonProducts.map((compP, index) => (
                    <td key={index} className="py-4 px-4 uppercase font-bold">{compP.brand}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Category</td>
                  <td className="py-4 px-4 text-[#0F2C59] font-bold">{product.category}</td>
                  {comparisonProducts.map((compP, index) => (
                    <td key={index} className="py-4 px-4 font-bold">{compP.category}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Stock Status</td>
                  <td className="py-4 px-4 font-bold text-emerald-600">{product.stockStatus}</td>
                  {comparisonProducts.map((compP, index) => (
                    <td key={index} className={`py-4 px-4 font-bold ${compP.stockStatus === 'In Stock' ? 'text-emerald-600' : 'text-amber-600'}`}>{compP.stockStatus}</td>
                  ))}
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Key Capability</td>
                  <td className="py-4 px-4 text-[#0F2C59] leading-relaxed max-w-[250px]">{product.features[0]}</td>
                  {comparisonProducts.map((compP, index) => (
                    <td key={index} className="py-4 px-4 leading-relaxed max-w-[250px]">{compP.features[0]}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Action</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-black text-[#000072] uppercase tracking-wider bg-[#000072]/5 px-2.5 py-1.5 rounded-lg border border-[#000072]/10">Selected Asset</span>
                  </td>
                  {comparisonProducts.map((compP, index) => (
                    <td key={index} className="py-4 px-4">
                      <Link href={`/collections/${compP.id}`} className="text-[10px] font-black text-[#0F2C59] hover:text-[#000072] hover:underline uppercase tracking-wider">View Catalog Detail →</Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* 5. Recommended / Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2C59] mb-6">
              Recommended B2B Infrastructure Solutions
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <div 
                  key={prod.id} 
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/collections/${prod.id}`} className="h-40 bg-slate-50 relative overflow-hidden block">
                    <img src={prod.image} alt={prod.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#0F2C59] text-white text-[9px] font-black uppercase px-2.5 py-1 rounded shadow-sm">
                      {prod.brand}
                    </span>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <Link href={`/collections/${prod.id}`}>
                      <h3 className="font-extrabold text-[#0F2C59] text-sm leading-tight hover:text-[#000072] transition-colors mb-2 line-clamp-2">
                        {prod.title}
                      </h3>
                    </Link>
                    <p className="text-[11px] text-slate-500 font-semibold mb-4 line-clamp-2 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {prod.stockStatus}
                      </span>
                      <Link href={`/collections/${prod.id}`}>
                        <button className="px-3.5 py-2 rounded-lg bg-[#000072] text-white font-extrabold text-[9px] uppercase tracking-wide hover:bg-[#000072]/90 transition-colors cursor-pointer border-0">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <ContactSection />

      {showBidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#F0F4F7] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-200">
            {/* Close Button */}
            <button 
              onClick={() => setShowBidModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border-0"
            >
              <X className="w-5 h-5" />
            </button>

            {!bidSubmitted ? (
              <form onSubmit={handleBidSubmit} className="flex flex-col gap-4 text-left text-xs sm:text-sm text-slate-700">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-black text-[#000072] uppercase tracking-widest">B2B Request</span>
                  <h3 className="text-lg font-black text-[#0F2C59] mt-1">Request Corporate Bid</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Submit custom bidding specs for <strong className="text-slate-700">{product.title}</strong> (Qty: {quantity})</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-extrabold text-xs text-slate-700">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Contact Person Name"
                    value={bidForm.name} 
                    onChange={e => setBidForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#000072]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-extrabold text-xs text-slate-700">Corporate Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required 
                    placeholder="company@email.com"
                    value={bidForm.email} 
                    onChange={e => setBidForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#000072]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-extrabold text-xs text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required 
                    placeholder="01xxxxxxxxx"
                    value={bidForm.phone} 
                    onChange={e => setBidForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#000072]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-extrabold text-xs text-slate-700">Special Specifications / Custom Requirements</label>
                  <textarea 
                    rows={3} 
                    placeholder="Describe any custom RAM, storage, warranty configurations..."
                    value={bidForm.notes} 
                    onChange={e => setBidForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#000072] resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-[#000072] to-[#000072]/85 hover:from-[#000072]/90 text-white font-extrabold uppercase tracking-wider rounded-xl shadow-lg mt-2 cursor-pointer border-0"
                >
                  Submit Corporate Bid Request
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-800">Bid Registered Successfully</h3>
                  <p className="text-xs text-slate-500 mt-2 max-w-[280px] mx-auto leading-relaxed">
                    Your request has been cataloged under B2B Bids. You can monitor and expect replies on the admin dashboard.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
