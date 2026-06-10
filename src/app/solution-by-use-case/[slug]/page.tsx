"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowRight, 
  ChevronRight, 
  Users, 
  Heart, 
  GraduationCap, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  Activity, 
  Clock,
  Cpu,
  Database,
  Layers,
  Server,
  Network,
  Zap,
  Globe,
  FileText,
  ChevronDown,
  TrendingUp,
  HelpCircle
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";

// Helper to format slug to title
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
  heroIllustration: React.ReactNode;
  evolveTitle: string;
  evolveDesc: string;
  evolveIllustration: React.ReactNode;
  benefits: {
    title: string;
    desc: string;
  }[]; // exactly 3 cards
  trial: {
    title: string;
    desc: string;
  };
  discoverTitle: string;
  discoverCards: {
    title: string;
    desc: string;
  }[]; // exactly 3 cards
  bottomTitle: string;
  bottomCards: {
    title: string;
    desc: string;
  }[]; // exactly 3 cards
  metrics: {
    value: string;
    label: string;
    description: string;
  }[]; // exactly 3 metrics
  faqs: {
    question: string;
    answer: string;
  }[]; // exactly 3 faqs
}

// Predefined detailed content matching the layout of the screenshot
const useCaseContent: Record<string, UseCaseData> = {
  "artificial-intelligence-ai": {
    title: "Accelerate Innovation with Clinical AI & Intelligent Telemetry",
    subtitle: "Scale machine learning workloads, neural classifiers, and predictive models on high-performance compute clusters designed for enterprise scale.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="150" y="80" width="200" height="180" rx="24" fill="#0F2C59" />
        <rect x="158" y="88" width="184" height="164" rx="16" fill="#FFFFFF" />
        {/* Graph representation */}
        <path d="M180 200 L210 170 L240 190 L280 140 L320 160" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="280" cy="140" r="8" fill="#000072" />
        <circle cx="210" cy="170" r="6" fill="#000072" />
        {/* Node connections */}
        <line x1="210" y1="170" x2="280" y2="140" stroke="#000072" strokeWidth="2" strokeDasharray="4 4" />
        {/* Brain CPU Illustration overlay */}
        <rect x="230" y="100" width="40" height="25" rx="4" fill="#000072" opacity="0.1" />
        <circle cx="250" cy="112" r="6" fill="#000072" />
      </svg>
    ),
    evolveTitle: "Powering the future of enterprise intelligence",
    evolveDesc: "Bridge the gap between raw data and actionable decisions. We provide the hardware acceleration and software pipelines to train and deploy deep learning models with zero-trust credentials.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <circle cx="250" cy="180" r="45" fill="#000072" opacity="0.9" />
        <path d="M235 180 L245 190 L265 170" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    benefits: [
      { title: "Enterprise AI Orchestration", desc: "Provision hardware accelerators, scale containerized workflows, and run distributed neural classifier workloads with minimal orchestration overhead." },
      { title: "Hardened Security Boundaries", desc: "Isolate clinical registers and customer profile databases behind rigorous zero-trust policies and end-to-end tokenization." },
      { title: "Automated Model Lifecycle", desc: "Deploy continuous training pipelines, track system weights, and run real-time telemetry checks on model inference latency." }
    ],
    trial: {
      title: "Request an AI Architecture Consultation",
      desc: "Work with our specialized system architects to map your model data requirements and size optimized AI infrastructure."
    },
    discoverTitle: "Empowering industries with customized machine learning workflows",
    discoverCards: [
      { title: "Clinical image recognition diagnostics", desc: "Integrate neural networks trained on secure diagnostic datasets to assist healthcare practitioners with micro-anomaly detection." },
      { title: "Predictive hardware telemetry", desc: "Track system vibration, temperature, and core network traffic to schedule preemptive hardware replacement windows." },
      { title: "Automated document indexing", desc: "Process millions of unstructured reports, extract metadata keys, and construct indexed document databases instantly." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "High-throughput GPU arrays", desc: "Deploy enterprise server racks configured with Nvidia and AMD hardware accelerators." },
      { title: "Private cloud AI storage", desc: "Pool high-speed SSD drives to feed multi-petabyte datasets directly into active training nodes." },
      { title: "MLOps consulting services", desc: "Optimize deployment loops and configure custom API inference containers for production apps." }
    ],
    metrics: [
      { value: "85%+", label: "Accuracy Increase", description: "Deep learning diagnostic accuracy compared to legacy framework diagnostics." },
      { value: "10x", label: "Training Acceleration", description: "Processing speedup using high-throughput multi-GPU hardware arrays." },
      { value: "35%", label: "Resource Savings", description: "Reduction in operational compute expenditures via dynamic cluster scheduling." }
    ],
    faqs: [
      { question: "How do you protect data security during AI training runs?", answer: "We isolate model files inside protected memory enclosures and sanitize custom data registers to block accidental leaks of PII." },
      { question: "What hardware accelerators do you build on?", answer: "We deploy systems using top-tier enterprise hardware accelerators from brands like Nvidia, AMD, and Intel." },
      { question: "Can these AI engines run in a hybrid model?", answer: "Yes. Our frameworks allow training datasets inside private cloud boundaries and deploying inference to localized edge platforms." }
    ]
  },
  "data-protection": {
    title: "Enterprise Multi-Cloud Data Protection & Compliance",
    subtitle: "Standardize secure tunnels, encrypt critical database records, and prevent data leaks across public and private cloud registries.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="180" y="80" width="140" height="150" rx="20" fill="#000072" />
        <circle cx="250" cy="145" r="30" fill="#FFFFFF" opacity="0.2" />
        {/* Lock icon */}
        <path d="M238 155 V145 C238 138 243 133 250 133 C257 133 262 138 262 145 V155 H266 V175 H234 V155 Z" fill="#FFFFFF" />
      </svg>
    ),
    evolveTitle: "Resilient security frameworks for absolute data sovereignty",
    evolveDesc: "Protect your intellectual property against insider threats, service dropouts, and regulatory violations with automatic replication and tokenized data masking.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="150" y="130" width="200" height="100" rx="8" fill="#3182CE" opacity="0.2" />
        <circle cx="250" cy="180" r="25" fill="#D32F2F" />
      </svg>
    ),
    benefits: [
      { title: "Zero-Trust Encryption Tunnels", desc: "Harden site-to-site tunnels with IPsec, configure TLS certificates, and encrypt payload files at rest and in transit." },
      { title: "Multi-Cloud Orchestration", desc: "Synchronize application databases across multiple sovereign cloud nodes, preventing platform vendor lock-in." },
      { title: "Compliance-Ready Archiving", desc: "Enforce retention policies, log configuration updates, and preserve audit histories to satisfy strict global regulations." }
    ],
    trial: {
      title: "Get a Data Protection Risk Assessment",
      desc: "Analyze your network configuration boundaries and secure vulnerable data ports against potential breaches."
    },
    discoverTitle: "Mitigate exposure with modern safety protocols",
    discoverCards: [
      { title: "Automated database masking", desc: "Sanitize customer logs and diagnostic registers to run software updates safely in staging environments." },
      { title: "Geo-redundant copy cycles", desc: "Run scheduled backup runs across geographically isolated facilities to avoid total hardware failures." },
      { title: "API endpoint verification", desc: "Harden connection interfaces with mandatory OAuth credentials and rate limiting protocols." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Tape and immutable vault storage", desc: "Configure offline write-once data pools to preserve historical registers." },
      { title: "Unified cloud credentials", desc: "Control administrative storage privileges from a single central authentication manager." },
      { title: "Security Operations Center (SOC)", desc: "Outsource network scanning and security monitoring to certified system specialists." }
    ],
    metrics: [
      { value: "100%", label: "Tunnels Encrypted", description: "All database transfers locked inside AES-256 encrypted protocols." },
      { value: "40%", label: "Capacity Optimized", description: "Decreased overall storage size needs via dynamic data compression." },
      { value: "5 min", label: "Restore Objectives", description: "Rapid database failover target successfully tested in client drills." }
    ],
    faqs: [
      { question: "How do you enforce compliance standards like GDPR?", answer: "We build automated compliance tags, write audit trails, and mask personal user data fields across database instances." },
      { question: "What is the typical database recovery window?", answer: "Using scheduled replication tunnels, failover timelines range from real-time active sync down to 5 minutes recovery objectives." },
      { question: "Can backups target multiple public clouds?", answer: "Yes. We configure storage tunnels that sync copies across AWS, Google Cloud, and private regional datacenters." }
    ]
  },
  "business-continuity": {
    title: "Zero-Downtime Business Continuity & Disaster Recovery",
    subtitle: "Maintain uninterrupted services, real-time sync, and remote workspace operations during major network or hardware disruptions.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <polygon points="120,220 380,220 330,170 170,170" fill="#2D3748" />
        <rect x="200" y="180" width="100" height="20" rx="4" fill="#000072" opacity="0.1" />
        <circle cx="160" cy="140" r="10" fill="#FBD38D" />
        <rect x="150" y="150" width="20" height="30" rx="4" fill="#3182CE" />
        <circle cx="210" cy="140" r="10" fill="#FBD38D" />
        <rect x="200" y="150" width="20" height="30" rx="4" fill="#4A5568" />
        <circle cx="290" cy="140" r="10" fill="#FBD38D" />
        <rect x="280" y="150" width="20" height="30" rx="4" fill="#E53E3E" />
        <circle cx="340" cy="140" r="10" fill="#FBD38D" />
        <rect x="330" y="150" width="20" height="30" rx="4" fill="#319795" />
      </svg>
    ),
    evolveTitle: "Helping businesses remain fully operational under any condition",
    evolveDesc: "Modern IT requires active-active topologies that transition workloads instantly. We keep your systems online so your employees stay productive and your customers stay connected.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="130" y="120" width="80" height="120" rx="8" fill="#3182CE" opacity="0.8" />
        <circle cx="280" cy="180" r="40" fill="#E53E3E" opacity="0.8" />
        <path d="M220 180 H240" stroke="#000072" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    benefits: [
      { title: "Instant Active-Active Failover", desc: "Mirror active database registers between isolated datacenter cabinets to support instant traffic redirection during hardware errors." },
      { title: "Remote Workspace Access", desc: "Provision protected virtual workspace panels so employees execute secure operations from home networks." },
      { title: "Automated Threat Containment", desc: "Isolate failing network devices automatically to prevent local disruptions from spreading across corporate branches." }
    ],
    trial: {
      title: "Evaluate Your Disaster Recovery Readiness",
      desc: "Schedule a trial evaluation with our certified engineering team to run simulation recovery drills."
    },
    discoverTitle: "Discover how we've helped with the real issues of new hybrid workplaces",
    discoverCards: [
      { title: "Secure remote desktop virtualization", desc: "Provide high-performance virtual workspace portals that protect operational databases from external endpoint threats." },
      { title: "Redundant communication networks", desc: "Integrate SD-WAN controllers with automated fallback switches to guarantee constant internet connection speeds." },
      { title: "Automated datacenter synchronization", desc: "Configure microservice pipelines to keep distributed storage files synchronized with zero record conflicts." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Secondary facility hot-sites", desc: "Secure redundant server cabinets configured to run critical software pipelines on standby." },
      { title: "Enterprise backup software", desc: "Automate system image snapshot tracking to recover database configurations instantly." },
      { title: "Cloud virtualization licenses", desc: "Scale application capacity boundaries dynamically using secure hybrid virtualization hypervisors." }
    ],
    metrics: [
      { value: "99.999%", label: "Uptime Guaranteed", description: "Active-active system availability index configured across isolated locations." },
      { value: "< 2 sec", label: "Failover Speed", description: "Automatic workspace redirection target during sudden server fail events." },
      { value: "Zero", label: "Data Records Lost", description: "Synchronized storage arrays guarantee no lost records on backup points." }
    ],
    faqs: [
      { question: "What is active-active database failover?", answer: "It runs instances in both servers simultaneously to balance traffic workloads, allowing instantaneous recovery if one side fails." },
      { question: "Do you configure secondary offline sites?", answer: "Yes. We design hot-sites equipped to run enterprise software systems automatically if the main site fails." },
      { question: "Can remote staff continue standard operations?", answer: "Absolutely. We provision virtual workspace portals loaded with strict security controls so tasks continue from home." }
    ]
  },
  "hpc": {
    title: "Supercomputing & High Performance Computing (HPC) Clusters",
    subtitle: "Power extreme engineering simulation, genomic research, and financial modeling with liquid-cooled nodes and low-latency interconnects.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        {/* Server racks in row */}
        <rect x="130" y="100" width="60" height="120" rx="8" fill="#0F2C59" />
        <rect x="220" y="100" width="60" height="120" rx="8" fill="#0F2C59" />
        <rect x="310" y="100" width="60" height="120" rx="8" fill="#000072" />
        {/* Indicator lights */}
        <circle cx="150" cy="120" r="4" fill="#3182CE" />
        <circle cx="240" cy="120" r="4" fill="#3182CE" />
        <circle cx="330" cy="120" r="4" fill="#27C93F" />
      </svg>
    ),
    evolveTitle: "Solve the world's most complex challenges at extreme scale",
    evolveDesc: "HPC demands specialized designs spanning high-throughput file systems and InfiniBand networking. We build turnkey clusters to handle petabyte-scale workloads with maximum efficiency.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <path d="M150 180 H350" stroke="#000072" strokeWidth="6" />
        <path d="M200 150 V210 M300 150 V210" stroke="#D32F2F" strokeWidth="4" />
      </svg>
    ),
    benefits: [
      { title: "Extreme Interconnect Bandwidth", desc: "Deploy InfiniBand architectures to minimize data latency and speed up node-to-node memory transfers." },
      { title: "Liquid-Cooled Architecture", desc: "Implement direct-to-chip liquid cooling systems to control thermal spikes and reduce datacenter energy costs." },
      { title: "Parallel Storage Management", desc: "Integrate high-speed storage pools to deliver parallel read-write performance to compute units." }
    ],
    trial: {
      title: "Schedule an HPC Workload Trial",
      desc: "Request a temporary compute partition to run resource-heavy calculations and evaluate scaling limits."
    },
    discoverTitle: "Accelerate your compute-heavy workflows",
    discoverCards: [
      { title: "Sub-millisecond queue optimization", desc: "Optimize cluster workload queues to maximize compute core efficiency and minimize idle run times." },
      { title: "Reservoir and geological mapping", desc: "Process spatial telemetry data to render high-resolution subsurface maps for energy firms." },
      { title: "Scalable bare-metal node clusters", desc: "Provision raw dedicated processors configured without software layers to maximize computing output." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "High-density rack enclosures", desc: "Secure custom server enclosures designed to handle high electrical power loads." },
      { title: "Hybrid HPC burst networks", desc: "Configure automated pathways to burst overflow workloads to secure cloud nodes." },
      { title: "Storage pool management", desc: "Integrate software-defined storage tools to pool disk storage dynamically." }
    ],
    metrics: [
      { value: "100 Gbps", label: "Interconnect Speeds", description: "High-speed InfiniBand switches routing processor communications." },
      { value: "50%", label: "Cooling Savings", description: "Reduced power usage via direct liquid-to-chip configurations." },
      { value: "PetaFLOPs", label: "Calculation Output", description: "Scale computing nodes dynamically to handle heavy analytical runs." }
    ],
    faqs: [
      { question: "What is direct liquid-to-chip cooling?", answer: "It feeds non-conductive liquid directly to processor thermal plates, removing heat faster than conventional fan cabinets." },
      { question: "How do you avoid storage write bottlenecks?", answer: "We deploy parallel storage filesystems like Lustre to route data chunks to computing units simultaneously." },
      { question: "Can we burst temporary workloads to cloud racks?", answer: "Yes. We configure secure tunnels to burst calculation queues to public bare-metal servers during demand spikes." }
    ]
  },
  "data-storage": {
    title: "Petabyte-Scale Unified Data Storage Systems",
    subtitle: "Optimize capacity, performance, and efficiency with secure SAN, NAS, and object storage pools integrated with automated tiering.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        {/* Layered disks */}
        <rect x="160" y="90" width="180" height="40" rx="12" fill="#0F2C59" />
        <rect x="160" y="140" width="180" height="40" rx="12" fill="#000072" />
        <rect x="160" y="190" width="180" height="40" rx="12" fill="#D32F2F" />
      </svg>
    ),
    evolveTitle: "Scale your storage pools with intelligent data management",
    evolveDesc: "From instant-access transaction databases to cold compliance archives, our storage solutions ensure your data is always protected and easily accessible at the right cost.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <circle cx="250" cy="180" r="30" fill="#000072" />
      </svg>
    ),
    benefits: [
      { title: "Intelligent Storage Tiering", desc: "Automatically migrate stale records to low-cost archival storage pools, preserving premium SSD space for active apps." },
      { title: "High-Throughput IOPS", desc: "Configure NVMe storage pools to deliver sub-millisecond data read-write speeds to transaction apps." },
      { title: "Hardened Erasure Coding", desc: "Protect files from multiple disk failures by distributing coded data blocks across isolated drive shelves." }
    ],
    trial: {
      title: "Run a Storage Assessment Scan",
      desc: "Analyze your existing directory structures to find duplicate logs, inactive files, and optimize storage costs."
    },
    discoverTitle: "Unlock the value of unstructured enterprise data",
    discoverCards: [
      { title: "Multi-protocol shared directories", desc: "Allow Windows and Linux servers to access files using SMB and NFS connectivity protocols simultaneously." },
      { title: "Long-term immutable vaulting", desc: "Lock down compliance logs against deletions and modifications to satisfy corporate audit guidelines." },
      { title: "Unified storage pane of glass", desc: "Monitor multi-cloud storage buckets, on-premises SAN drives, and remote backups from one screen." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Solid State Disk (SSD) pools", desc: "Upgrade storage chassis with enterprise-grade flash drives to maximize read-write speeds." },
      { title: "Deduplication hardware", desc: "Identify duplicate file data blocks in real time to squeeze more storage out of existing drives." },
      { title: "Remote cloud backup", desc: "Synchronize local file shares to secure cloud storage nodes to survive disaster events." }
    ],
    metrics: [
      { value: "50 PB+", label: "Capacity Limit", description: "Structured object pools scaling storage boundaries dynamically." },
      { value: "70%", label: "TCO Reduction", description: "Saved storage fees via automated rules moving stale files to cold vaults." },
      { value: "99.99%", label: "Drive Reliability", description: "Erasure coding structure preventing data losses from disk failures." }
    ],
    faqs: [
      { question: "How does automated storage tiering work?", answer: "It automatically moves infrequently accessed files to low-cost archival storage while keeping hot data on SSD drives." },
      { question: "Can we unify storage hardware brands?", answer: "Yes. Our software-defined storage layer integrates legacy SAN and NAS hardware into one virtual pool." },
      { question: "What is erasure coding storage safety?", answer: "It splits data files into blocks and writes parity info across different drives, allowing recovery even if multiple drives fail." }
    ]
  },
  "hci": {
    title: "Unified Hyperconverged Infrastructure (HCI)",
    subtitle: "Consolidate server compute, storage networks, and hypervisors into one unified software-defined platform.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="150" y="80" width="200" height="40" rx="8" fill="#0F2C59" />
        <rect x="150" y="130" width="200" height="40" rx="8" fill="#000072" />
        <rect x="150" y="180" width="200" height="40" rx="8" fill="#D32F2F" />
        <path d="M250 80 V220" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
    evolveTitle: "Simplify datacenter complexity with software-defined systems",
    evolveDesc: "Eliminate legacy silos and simplify operations. HCI pools compute and storage dynamically, letting you scale out by simply adding individual nodes.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="180" y="140" width="140" height="80" rx="8" fill="#3182CE" />
      </svg>
    ),
    benefits: [
      { title: "Dynamic Resource Allocation", desc: "Pool compute processors and storage space to shift allocations to active virtual machines automatically." },
      { title: "One-Click Lifecycle Updates", desc: "Update hypervisors, hardware BIOS configurations, and disk firmware with automated cluster workflows." },
      { title: "Reduced Datacenter Footprint", desc: "Consolidate multiple separate hardware switches, storage controllers, and servers into standard server chassis." }
    ],
    trial: {
      title: "Request a Turnkey HCI Demo",
      desc: "Schedule a virtual demo to see how easy it is to manage storage and virtual machines using our interface."
    },
    discoverTitle: "Streamline operations with cloud-like ease of use",
    discoverCards: [
      { title: "Centralized single pane of glass", desc: "Monitor virtual machine health, storage IOPS, and switch traffic profiles from a single dashboard." },
      { title: "Fast virtual machine deployment", desc: "Create, configure, and boot secure virtual environments in minutes using pre-configured OS templates." },
      { title: "Integrated backup utilities", desc: "Configure replication policies to copy VM snapshots to remote servers without buying external software licenses." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "High-density server hardware", desc: "Deploy powerful processors and memory modules to scale out your private cloud cluster." },
      { title: "Network switch integrations", desc: "Configure high-speed switches to prevent throughput limitations between computing units." },
      { title: "Hybrid cloud management panels", desc: "Extend hyperconverged platforms to manage off-site cloud servers using the same UI." }
    ],
    metrics: [
      { value: "30 min", label: "Cluster Install", description: "Deploy and configure raw server hardware into running virtual nodes quickly." },
      { value: "60%", label: "Cabinet Footprint", description: "Shrunk server cabinet rack space by pooling compute and disk drives." },
      { value: "1 Click", label: "Lifecycle Updates", description: "Update system BIOS, switch settings, and hypervisors with one click." }
    ],
    faqs: [
      { question: "What hypervisors do you support?", answer: "Our setups fully integrate with VMware ESXi, Microsoft Hyper-V, and open KVM software engines." },
      { question: "How is capacity expanded in hyperconverged systems?", answer: "Scaling is as simple as inserting a new server node into the chassis; the software instantly adds the compute and storage." },
      { question: "Is a dedicated SAN array required?", answer: "No. HCI virtualizes physical local server disk drives into a single pooled storage domain, eliminating external SAN costs." }
    ]
  },
  "ransomware-protection": {
    title: "Perimeter Threat Containment & Ransomware Shield",
    subtitle: "Prevent lateral movement, detect encryption payloads, and recover workloads with immutable, write-once backups.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="180" y="90" width="140" height="140" rx="70" fill="#000072" />
        <path d="M230 160 L245 175 L275 145" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    evolveTitle: "Proactive defenses to counter advanced cyber threats",
    evolveDesc: "Ransomware targets production data and backup catalogues alike. Our multi-layered framework isolates infected devices instantly and restores operations without paying ransom.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <circle cx="250" cy="180" r="30" fill="#D32F2F" />
      </svg>
    ),
    benefits: [
      { title: "Immutable Snapshots (WORM)", desc: "Write backups to secure write-once-read-many storage nodes that block modification and encryption attempts by hackers." },
      { title: "Automated Lateral Isolation", desc: "Monitor network traffic to identify suspicious file modifications and disconnect infected workstations automatically." },
      { title: "Instant Clean Recovery", desc: "Scan historical snapshots to locate clean restore points and boot secure virtual environments without delay." }
    ],
    trial: {
      title: "Schedule a Ransomware Vulnerability Check",
      desc: "Run a network analysis scan to locate security loopholes and evaluate your systems' response to encryption threats."
    },
    discoverTitle: "Defend your core database from intrusion",
    discoverCards: [
      { title: "Behavioral threat analytics", desc: "Monitor servers to identify bulk renaming patterns and encryption attempts, shutting down connections instantly." },
      { title: "Air-gapped backup replication", desc: "Copy secure system images to an off-line storage vault that remains physically isolated from the internet." },
      { title: "Instant server environment boot", desc: "Restore application operations in minutes by booting directly from secure, immutable backup servers." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Network micro-segmentation", desc: "Divide corporate networks into secure isolated zones to prevent viruses from spreading." },
      { title: "Identity access logs", desc: "Log user logins and database configuration updates using tamper-proof logs." },
      { title: "Endpoint tracking agents", desc: "Install lightweight monitoring software on employee laptops to block malware payloads." }
    ],
    metrics: [
      { value: "Zero", label: "Ransom Paid", description: "Restore uncompromised workspace configurations instantly to bypass lock extortion." },
      { value: "100%", label: "File Immutability", description: "Backups protected using WORM filesystem layers blocking modifications." },
      { value: "Sub-sec", label: "Threat Isolation", description: "Automated network containment isolating infected machines instantly." }
    ],
    faqs: [
      { question: "What does WORM storage safety mean?", answer: "Write-Once-Read-Many ensures files cannot be deleted, modified, or overwritten by ransomware even if admin access is breached." },
      { question: "How are threats detected in real time?", answer: "Our system tracks disk write behavior. When it notices rapid encryption signatures, it alerts security loops and isolates host nodes." },
      { question: "Does this solution include off-line air-gaps?", answer: "Yes. Backups are copied to physically air-gapped repositories that disconnect from the main network when idle." }
    ]
  },
  "application-performance": {
    title: "Enterprise Application Speed & Database Optimization",
    subtitle: "Eliminate server response bottlenecks, optimize SQL indices, and configure intelligent caching layers to speed up applications.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <path d="M150 200 C 200 120, 300 120, 350 200" stroke="#000072" strokeWidth="6" strokeLinecap="round" />
        <path d="M220 160 L280 160" stroke="#D32F2F" strokeWidth="4" />
      </svg>
    ),
    evolveTitle: "Deliver lightning-fast experiences to users globally",
    evolveDesc: "System latency directly impacts revenue. We analyze database query flows, API call durations, and resource provisioning to maximize application responsiveness.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <circle cx="250" cy="180" r="30" fill="#27C93F" />
      </svg>
    ),
    benefits: [
      { title: "Microservices Response Tuning", desc: "Profile API calls, reduce database payload sizes, and configure connection pools to optimize page load times." },
      { title: "Database Query Caching", desc: "Integrate high-speed in-memory databases to serve duplicate queries instantly, reducing server processor loads." },
      { title: "Load Balancing Infrastructure", desc: "Distribute incoming network traffic across multiple servers to prevent performance drops during peak times." }
    ],
    trial: {
      title: "Run an Application Performance Scan",
      desc: "Analyze your live databases to locate slow queries and isolate application performance issues."
    },
    discoverTitle: "Maintain peak speeds under high query loads",
    discoverCards: [
      { title: "Redis/Memcached cache setup", desc: "Store web pages and database queries in memory to avoid duplicate server Calculations." },
      { title: "Query profile diagnostics", desc: "Identify slow-running queries, create database indexes, and optimize query structure to speed up response times." },
      { title: "Sub-second API endpoints", desc: "Refactor backend API structures to deliver clean data to frontend applications in milliseconds." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Container optimization tools", desc: "Tune container runtime environments to reduce application memory consumption." },
      { title: "Global CDN integration", desc: "Cache static assets closer to users worldwide to speed up website load times." },
      { title: "Hardware load balancers", desc: "Deploy dedicated network devices to balance data traffic across server racks." }
    ],
    metrics: [
      { value: "80%", label: "Latency Dropped", description: "Accelerate software API responses and database queries dramatically." },
      { value: "3x", label: "Concurrent Scaling", description: "Increase max user handling capacity without adding server CPUs." },
      { value: "99.99%", label: "Query Success", description: "Eliminate transaction locking, deadlocks, and connection timeout errors." }
    ],
    faqs: [
      { question: "How do you detect slow database query flows?", answer: "We install lightweight database profilers that track execution paths and highlight unindexed database fields." },
      { question: "What in-memory databases do you implement?", answer: "We configure clusters using Redis and Memcached technologies to store duplicate request data." },
      { question: "Does this resolve latency across continents?", answer: "Yes. We integrate Content Delivery Networks (CDNs) to cache static operational files near your remote branches." }
    ]
  },
  "itsm": {
    title: "Automated IT Service Management (ITSM) Workflows",
    subtitle: "Coordinate incident response, track developer sprints, and manage technical support SLAs through automated ticket routing.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="160" y="90" width="180" height="35" rx="8" fill="#0F2C59" />
        <rect x="160" y="140" width="180" height="35" rx="8" fill="#000072" />
        <rect x="160" y="190" width="180" height="35" rx="8" fill="#D32F2F" />
      </svg>
    ),
    evolveTitle: "Standardize service delivery and boost productivity",
    evolveDesc: "Align IT operations directly with your company's core objectives. Build clear escalation paths, reduce manual updates, and resolve service issues faster.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="150" y="130" width="200" height="100" rx="8" fill="#3182CE" />
      </svg>
    ),
    benefits: [
      { title: "SLA Compliance Dashboards", desc: "Track ticket resolution times, verify response targets, and alert team leads to prevent service level violations." },
      { title: "Automated Ticket Assignment", desc: "Route technical issues to the correct support teams automatically using keywords and severity metrics." },
      { title: "Self-Service Support Portals", desc: "Enable employees to submit issues, check ticket status, and read help documents from a secure portal." }
    ],
    trial: {
      title: "Evaluate Your IT Service Workflows",
      desc: "Analyze your support operations to locate delay points and configure automated incident escalation rules."
    },
    discoverTitle: "Accelerate incident resolution times",
    discoverCards: [
      { title: "Root cause diagnostics", desc: "Track recurring issues to isolate underlying hardware errors, preventing future service dropouts." },
      { title: "Automated incident escalations", desc: "Escalate unresolved service tickets to higher-level support engineers automatically based on time limits." },
      { title: "Knowledge base search integration", desc: "Provide support teams and employees with fast search tools to find solutions to common issues." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Customer service tracking", desc: "Measure satisfaction ratings and gather feedback after support tickets are closed." },
      { title: "Automated server alerts", desc: "Generate support tickets automatically when monitoring tools detect server or switch errors." },
      { title: "Workflow orchestration tools", desc: "Automate user onboarding, software installs, and account updates across corporate directories." }
    ],
    metrics: [
      { value: "45%", label: "Resolution Speedup", description: "Decrease mean time to resolution via automated routing pipelines." },
      { value: "95%", label: "SLA Target Success", description: "Maintain customer response timelines with automated escalations." },
      { value: "50%", label: "Queries Deflected", description: "Redirect common issues to interactive self-service help libraries." }
    ],
    faqs: [
      { question: "Can this ITSM tool integrate with coding dashboards?", answer: "Yes. Incident tickets sync directly with development sprint backlogs in platforms like Jira and GitHub." },
      { question: "Does this follow ITIL v4 operations patterns?", answer: "Completely. The automation workflows are structured around standard ITIL incident, change, and catalog structures." },
      { question: "Can we write custom assignment rules?", answer: "Yes. You can route queries based on issue keywords, severity indices, user groups, or developer availability calendar schedules." }
    ]
  }
};

// Generates fallback Use Case content dynamically (in case of other slugs)
const getFallbackUseCaseData = (slug: string): UseCaseData => {
  const title = formatTitle(slug);
  return {
    title: title,
    subtitle: `Find optimized solutions, strategic frameworks, and technical assets engineered specifically to support ${title.toLowerCase()} workloads.`,
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <rect x="180" y="100" width="140" height="140" rx="20" fill="#000072" opacity="0.1" />
        <circle cx="250" cy="170" r="30" fill="#000072" opacity="0.15" />
      </svg>
    ),
    evolveTitle: `Helping businesses evolve and thrive with modern ${title}`,
    evolveDesc: `Our custom frameworks help organizations deploy next-generation tools, secure corporate directories, and improve overall system scaling with zero operational downtime.`,
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <circle cx="250" cy="180" r="35" fill="#3182CE" opacity="0.8" />
      </svg>
    ),
    benefits: [
      { title: "Enterprise Scalability", desc: `Instantly scale your systems to match workloads, user queues, and active database transactions.` },
      { title: "Zero-Trust Architecture", desc: "Isolate endpoints and corporate environments behind cryptoprocessor boundaries and MFA checks." },
      { title: "Operational Automation", desc: "Automate system diagnostics, backup transfers, and resource configuration gates." }
    ],
    trial: {
      title: "Workload Assessment Evaluation",
      desc: "Request a custom evaluation from our solutions architects to map your legacy architectures and optimize resource use."
    },
    discoverTitle: `Discover how we've helped with the real issues of modern ${title.toLowerCase()} setups`,
    discoverCards: [
      { title: "Enable end-to-end telemetry monitoring", desc: "Integrate unified dashboards to check database hits, query latency, and server health from one panel." },
      { title: "Reduce cloud infrastructure expenditure", desc: "Identify and clean up idle storage buckets, oversized virtual servers, and duplicate licenses." },
      { title: "Harden peripheral data endpoints", desc: "Deploy lightweight host agents to intercept network security threats before they compromise systems." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Financial & Asset Optimization", desc: "Track, analyze, and scale software assets to stay within corporate budget parameters." },
      { title: "Hybrid Cloud Integration", desc: "Bridge physical datacenter frames with secure public cloud resources seamlessly." },
      { title: "Continuous Technical Support", desc: "Access 24/7 incident response, help desk queues, and certified systems architects." }
    ],
    metrics: [
      { value: "40%+", label: "Efficiency Gained", description: "Average resource optimization across simulated workload sets." },
      { value: "100%", label: "Secure Tunnels", description: "Configured endpoints are protected behind zero-trust credentials." },
      { value: "24/7", label: "System Uptime", description: "Continuous remote monitoring ensures instant warning signals." }
    ],
    faqs: [
      { question: "What does workload optimization involve?", answer: "We scan system files and memory registers to balance CPU allocation, clear duplicate caches, and limit server downtime." },
      { question: "How does the zero-trust pipeline operate?", answer: "It validates identity credentials at every access hop, avoiding vulnerable system bypass channels." },
      { question: "Who provides support during outages?", answer: "Our certified system engineers operate monitoring operations around the clock to isolate and resolve network alerts." }
    ]
  };
};

export default function UseCaseDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = useCaseContent[slug] || getFallbackUseCaseData(slug);

  // FAQ state management
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/solution-by-use-case" className="hover:text-primary-600 transition-colors">Use Cases</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#000072] font-black">{formatTitle(slug)}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F2C59] leading-[1.15]">
              {content.title}
            </h1>
            <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              {content.subtitle}
            </p>
            <div className="mt-8">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-[#000072] hover:bg-[#000072]/90 text-white font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer inline-flex">
                Talk to Sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            {content.heroIllustration}
          </div>
        </div>
      </div>

      {/* 2. EVOLVE / THRIVE SECTION */}
      <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full max-w-lg order-2 lg:order-1">
              {content.evolveIllustration}
            </div>
            <div className="flex-1 text-left order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-[#0F2C59] leading-tight">
                {content.evolveTitle}
              </h2>
              <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed font-medium">
                {content.evolveDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BENEFITS TARGET CARDS */}
      <div className="w-full py-20 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#000072]/5 text-[#000072] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW SECTION: KEY METRICS & BUSINESS VALUE */}
      <div className="w-full py-20 bg-[#0F2C59] text-white relative overflow-hidden z-10">
        {/* Ambience graphic background */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-wider uppercase mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#D32F2F]" /> Impact & Performance
            </span>
            <h2 className="text-3xl font-black tracking-tight">Key Value Metrics Realized</h2>
            <p className="text-sm text-slate-350 mt-4 leading-relaxed font-medium text-slate-300">
              Validated operational results achieved across our production client integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.metrics.map((metric, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col justify-between items-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-black text-[#D32F2F] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <h3 className="font-extrabold text-sm text-white mb-2 tracking-wide uppercase">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-350 leading-relaxed font-medium text-slate-300">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 4. TRIAL BANNER */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="rounded-3xl bg-slate-100 p-8 md:p-10 border border-slate-200 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-[#0F2C59]">{content.trial.title}</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium">{content.trial.desc}</p>
          </div>
          <Link href="/contact" className="px-5 py-3 rounded-xl bg-[#000072] hover:bg-[#000072]/90 text-white font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer transition-all duration-300">
            More <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5. HELPED DISCOVER ISSUES */}
      <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-3xl font-extrabold text-[#0F2C59] leading-tight">
                {content.discoverTitle}
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mt-4 rounded" />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {content.discoverCards.map((card, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 text-left flex flex-col gap-2 hover:bg-slate-50 transition-colors duration-200">
                  <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: INTERACTIVE FAQ ACCORDION */}
      <div className="w-full py-20 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/5 text-[#000072] text-[10px] font-bold tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> FAQ
            </span>
            <h2 className="text-3xl font-black text-[#0F2C59] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Common operational and architectural inquiries regarding this deployment model.
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#000072] cursor-pointer"
                  >
                    <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-350 ${isOpen ? "rotate-180 text-[#000072]" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-slate-100 text-xs md:text-sm text-slate-500 leading-relaxed font-medium bg-[#F8FAFC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 6. WHAT ELSE MIGHT HELP */}
      <div className="w-full py-20 bg-[#F8FAFC] border-t border-slate-150 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              {content.bottomTitle}
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.bottomCards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 text-left">
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactSection />
    </main>
  );
}


