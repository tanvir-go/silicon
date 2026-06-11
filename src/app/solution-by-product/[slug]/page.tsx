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

// Helper to format slug to title
const formatTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  conceptIntro: string;
  conceptPoints: string[];
  benefits: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  banner: {
    title: string;
    desc: string;
    image: string;
  };
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
  caseStudies?: {
    title: string;
    desc: string;
    metrics: string[];
    techs: string[];
    result: string;
  }[];
}

const solutionsContent: Record<string, SolutionData> = {
  "storage": {
    title: "Enterprise Storage Solutions",
    subtitle: "Storage / Solutions",
    description: "Deploy resilient, high-speed, and petabyte-scale storage infrastructures. Secure your corporate memory with automated tiering, robust encryption, and multi-zone backups.",
    heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Storage infrastructure forms the bedrock of enterprise data archives, supporting file shares, virtual machines, and real-time transaction history logs.",
    conceptPoints: [
      "SAN Block Storage Networks",
      "NAS Centralized File Pools",
      "All-Flash NVMe Disk Arrays",
      "Immutable Object Cloud Buckets",
      "Dynamic Archival Data Tiering",
      "Active Disaster Recovery Sync"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Lower hardware spend up to 40% with dynamic compression and deduplication engines.", icon: "💰" },
      { title: "Improve System Performance", desc: "Sub-millisecond access times for SQL databases utilizing all-flash arrays.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Scale capacity seamlessly from terabytes to petabytes without system downtime.", icon: "📈" },
      { title: "Improve Security", desc: "Protect files from deletion with hardware-enforced write-once-read-many (WORM) controls.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Sync storage systems across geographical zones to survive hardware outages.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Migrate historical tape vaults to accessible secure cloud repositories.", icon: "🚀" }
    ],
    banner: {
      title: "Securing Data Integrity at Absolute Scale",
      desc: "Empower your databases and document repositories with modern flash arrays, automated snapshots, and active-active backups.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "SAN / NAS Environments", desc: "Host virtual machine drives and file archives on high-throughput arrays.", vendor: "QSAN, Dell Technologies" },
      { title: "Backup Storage Vaults", desc: "Automate incremental snapshots and store immutable replicas.", vendor: "Veeam, Acronis" },
      { title: "Cloud Storage Sync", desc: "Establish low-latency tunnels replicating local directories to cloud buckets.", vendor: "AWS, Azure, Synology" }
    ],
    portfolio: [
      { title: "All-Flash NVMe Arrays", desc: "Deliver high IOPs throughput for transactional databases." },
      { title: "Immutable backup snapshots", desc: "Prevent ransomware encryption by locking storage rows." },
      { title: "Dynamic storage tiering", desc: "Automatically migrate cold data to low-cost archival pools." }
    ],
    edgeToCloud: [
      { title: "Hybrid File Synchronization", desc: "Bridge on-premise file shares with cloud storage pools." },
      { title: "Unified Management Console", desc: "Monitor temperatures, latency, and cache sizes from one page." },
      { title: "Multi-Zone DR Replica Loops", desc: "Commit file updates to multiple servers instantly." }
    ],
    diagramLayers: [
      "User Applications & Interfaces",
      "Storage Area Network (SAN/NAS Controllers)",
      "High-Speed All-Flash Array Nodes",
      "Offsite Backup & Cloud Object Buckets"
    ],
    faqs: [
      { q: "How do you protect stored data from ransomware?", a: "We utilize immutable backups and write-once-read-many (WORM) storage configurations that prevent data modification or deletion during attack events." },
      { q: "What is the difference between SAN and NAS?", a: "SAN (Storage Area Network) provides block-level storage access for databases and VMs, while NAS (Network Attached Storage) provides file-level access for file sharing." }
    ]
  },
  "network": {
    title: "Enterprise Networking Solutions",
    subtitle: "Network / Solutions",
    description: "Build fast, secure, and resilient enterprise networking. Integrate software-defined boundaries, global load balancing, and low-latency routing for distributed offices.",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Enterprise networking provides the communication fabric linking local branches, private datacenters, remote employees, and public cloud applications.",
    conceptPoints: [
      "Software-Defined WAN (SD-WAN)",
      "Core Switch Architectures",
      "VLAN Virtual Separation",
      "Dynamic Routing Protocols",
      "Low-Latency Fiber Trunks",
      "Zero-Trust Tunnels"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Cut MPLS link budgets up to 50% by routing traffic over dynamic broadband connections.", icon: "💰" },
      { title: "Improve System Performance", desc: "Minimize application latency using automated routing path calculation.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Add new branches and cloud networks instantly with software controls.", icon: "📈" },
      { title: "Improve Security", desc: "Encrypt all branch-to-branch communications inside IPSec VPN gates.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Mitigate link disruptions utilizing active backup paths and automatic failover.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Unify distributed workspaces with single-pane cloud administration hubs.", icon: "🚀" }
    ],
    banner: {
      title: "Connecting Distributed Enterprises Securely",
      desc: "Deploy resilient network cores, redundant switches, and secure gateways engineered for high throughput.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Routing / Switching Fabric", desc: "Deploy high-density core switches and switches handling up to 100G loops.", vendor: "Cisco, Juniper" },
      { title: "SD-WAN Connectors", desc: "Route branch traffic dynamically across public broadband and private lines.", vendor: "Aruba, Sangfor" },
      { title: "LAN / WAN Enclosures", desc: "Configure structured cabling and physical fiber runs securely.", vendor: "R&M, Alcatel-Lucent" }
    ],
    portfolio: [
      { title: "BGP Route Optimizations", desc: "Calculate low-latency internet paths for dynamic application loops." },
      { title: "Zero-Trust Tunnels", desc: "Authenticate remote workers securely without exposing internal networks." },
      { title: "Dynamic Load Balancing", desc: "Distribute gateway requests across redundant network interfaces." }
    ],
    edgeToCloud: [
      { title: "Unified Branch Telemetry", desc: "Trace packet traffic and connection status from a single screen." },
      { title: "Hybrid Cloud Interconnects", desc: "Establish private low-latency connections linking local racks to public clouds." },
      { title: "Micro-Segmented Security Zones", desc: "Isolate client devices to stop lateral threat propagation." }
    ],
    diagramLayers: [
      "Branch Offices & Remote Users",
      "SD-WAN Gateways & Virtual Routers",
      "High-Density Core Switch Backbone",
      "Private Datacenter & Cloud Instances"
    ],
    faqs: [
      { q: "What is SD-WAN and how does it help?", a: "SD-WAN separates network control from hardware, allowing traffic routing over multiple paths (broadband, LTE, MPLS) based on quality, lowering costs and increasing reliability." },
      { q: "How do you protect networks from DDoS attacks?", a: "We install next-generation firewalls (NGFW) and cloud scrubbing gates that identify and filter anomalous packet surges before they reach host servers." }
    ]
  },
  "security": {
    title: "Zero-Trust Infrastructure Security",
    subtitle: "Security / Solutions",
    description: "Defend your corporate perimeter and cloud assets. Implement next-generation firewalls, identity management (IAM), and endpoint validation controls.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Security infrastructure enforces the zero-trust paradigm: never trust, always verify, ensuring all users, devices, and applications are continuously audited.",
    conceptPoints: [
      "Next-Gen Firewalls (NGFW)",
      "Zero-Trust Identity Control",
      "Web Application Firewalls (WAF)",
      "Endpoint Threat Protection",
      "SIEM Event Logging",
      "Vulnerability Audit Scans"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Avoid regulatory penalties and breach remediation costs with active protection.", icon: "💰" },
      { title: "Improve System Performance", desc: "Filter malicious bots and spam traffic to reduce server load.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Manage employee access permissions globally using single sign-on (SSO).", icon: "📈" },
      { title: "Improve Security", desc: "Protect files and network segments with granular access rules.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Mitigate service disruptions by blocking application-level attacks.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Expose secure database APIs to third-party partners without leakage risks.", icon: "🚀" }
    ],
    banner: {
      title: "Hardening Digital Boundaries Continuously",
      desc: "Monitor security anomalies and configure threat detection rules using AI-driven telemetry.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Next-Gen Firewalls", desc: "Block lateral network threats with deep packet inspection rules.", vendor: "Fortinet, Palo Alto" },
      { title: "Zero Trust & IAM", desc: "Authenticate device health and user identities before routing traffic.", vendor: "Entrust, Cisco Security" },
      { title: "Endpoint & SIEM Security", desc: "Trace active file logs and security events across server groups.", vendor: "Wazuh, Sophos" }
    ],
    portfolio: [
      { title: "Micro-Segmented Cloud Nets", desc: "Isolate application layers behind independent firewall policies." },
      { title: "Vulnerability Scanning", desc: "Scan databases and repository codes for exposed credentials." },
      { title: "SSL Decryption Inspection", desc: "Inspect encrypted packet headers for embedded malware payloads." }
    ],
    edgeToCloud: [
      { title: "Central Security Panel", desc: "Trace user login locations, threat logs, and compliance metrics from one screen." },
      { title: "Active Threat Containment", desc: "Isolate compromised virtual servers automatically when an alert triggers." },
      { title: "Audited Compliance Reports", desc: "Maintain structured logs mapping PCI-DSS and ISO 27001 parameters." }
    ],
    diagramLayers: [
      "User Access Point (SSO/MFA Authenticated)",
      "Identity Posture & Device Health Validation",
      "Next-Gen Firewall & WAF Inspection",
      "Segmented Target Databases & App Clusters"
    ],
    faqs: [
      { q: "What is a Zero-Trust architecture?", a: "Zero-Trust assumes threats are inside the network. It requires continuous verification of every user, device, and request, rather than trusting by default." },
      { q: "How does endpoint protection differ from firewalls?", a: "Firewalls inspect traffic between networks, while endpoint protection runs directly on devices (servers, laptops) to block file-level malware executions." }
    ]
  },
  "software": {
    title: "Enterprise Operating Systems & Software",
    subtitle: "Software / Solutions",
    description: "Standardize your runtime environments with supported operating systems, container platforms, and DevOps collaboration tools.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Enterprise software provides the compliant, certified operating systems, container platforms, and developer systems running business logic.",
    conceptPoints: [
      "Supported Linux OS (RHEL/SUSE)",
      "Kubernetes Container Platforms",
      "DevOps Automation & Pipelines",
      "Collaboration Software Hubs",
      "IT Service Portals (ITSM)",
      "Infrastructure Monitoring UI"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Consolidate operating licenses to reduce compliance waste.", icon: "💰" },
      { title: "Improve System Performance", desc: "Run optimized operating system kernels that reduce RAM overhead.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Orchestrate container groups using Kubernetes to scale apps dynamically.", icon: "📈" },
      { title: "Improve Security", desc: "Apply security patches automatically to block operating system exploits.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Deploy container groups across multiple regions to avoid single point failures.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Transition from manual script runs to version-controlled CI/CD systems.", icon: "🚀" }
    ],
    banner: {
      title: "Standardizing Compliant Software Foundations",
      desc: "Accelerate software deployments utilizing certified operating systems and GitOps automation models.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Enterprise OS Platforms", desc: "Deploy stable Linux and Windows environments backed by active SLAs.", vendor: "Red Hat (RHEL), Microsoft, SUSE" },
      { title: "Kubernetes & DevOps", desc: "Manage container clusters and automate software release pipelines.", vendor: "Kubernetes, GitLab" },
      { title: "Collaboration & ITSM Tools", desc: "Support developers with collaborative boards and ticketing systems.", vendor: "Atlassian, Freshworks" }
    ],
    portfolio: [
      { title: "GitOps Pipeline Design", desc: "Automate code deployments from Git repositories directly to production servers." },
      { title: "Telemetry & Logs (Grafana)", desc: "Audit server CPU usage, response times, and application errors visually." },
      { title: "System Patch Management", desc: "Schedule automated software patches to keep packages secure." }
    ],
    edgeToCloud: [
      { title: "Unified Software Telemetry", desc: "Audit cluster versions, active containers, and software licenses from one console." },
      { title: "Hybrid Container Bridges", desc: "Move running container instances between local servers and public clouds." },
      { title: "Sovereign OS Isolation", desc: "Run private isolated operating system environments for compliance audits." }
    ],
    diagramLayers: [
      "Developer Code Push (GitLab)",
      "Automated CI/CD Test Pipelines",
      "Kubernetes Container Pod Cluster",
      "Stable Linux Kernel (RHEL/SUSE) Bare Metal Host"
    ],
    faqs: [
      { q: "Why should we use Red Hat Enterprise Linux (RHEL) over free variants?", a: "RHEL provides enterprise SLA support, validated package stability, and compliance certifications crucial for running financial and medical databases." },
      { q: "What is GitOps?", a: "GitOps uses Git repositories as the single source of truth for infrastructure and software configurations, automating deployment directly from repository logs." }
    ]
  },
  "database": {
    title: "Enterprise Database Solutions",
    subtitle: "Database / Solutions",
    description: "Power transactional business portals with high-availability relational, NoSQL, and columnar database clusters.",
    heroImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Database infrastructure stores, processes, and queries your critical structured and unstructured records with high consistency.",
    conceptPoints: [
      "Relational SQL Databases",
      "Distributed NoSQL Engines",
      "Data Warehouse Warehouses",
      "High Availability Clustering",
      "Active replication syncs",
      "Database access audits"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Consolidate databases onto consolidated clusters to lower CPU license fees.", icon: "💰" },
      { title: "Improve System Performance", desc: "Optimize index structures to return query results in milliseconds.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Add read replicas dynamically to handle massive query volumes.", icon: "📈" },
      { title: "Improve Security", desc: "Encrypt database tables at rest and mask columns containing sensitive data.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Deploy database groups across multiple regions with automatic failovers.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Consolidate scattered server databases into a single cloud warehouse.", icon: "🚀" }
    ],
    banner: {
      title: "Powering High-Throughput Transactions Safely",
      desc: "Configure replication loops, verify database schema integrity, and tune connection pools.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Relational SQL Clusters", desc: "Run core ACID transactions on stable relational database platforms.", vendor: "Oracle, PostgreSQL, Microsoft SQL" },
      { title: "Distributed NoSQL & APIs", desc: "Store unstructured records and scale query speeds dynamically.", vendor: "MongoDB, Supabase" },
      { title: "Columnar Warehouses", desc: "Execute complex analytical computations on petabytes of records.", vendor: "EnterpriseDB, PostgreSQL" }
    ],
    portfolio: [
      { title: "Read-Replica Sync Loops", desc: "Distribute read traffic to secondary databases to lower primary server loads." },
      { title: "Automated snapshot backup", desc: "Deploy cron scripts saving point-in-time recovery data safely." },
      { title: "Database connection pools", desc: "Manage active threads to avoid database crashes during query spikes." }
    ],
    edgeToCloud: [
      { title: "Unified Data Console", desc: "Audit table space sizes, query response times, and slow queries from one screen." },
      { title: "Hybrid Data Replication", desc: "Replicate database rows between local servers and public cloud SQL instances." },
      { title: "Sovereign Database Columns", desc: "Isolate client records within local geographical borders." }
    ],
    diagramLayers: [
      "Application Client Queries",
      "Load Balancer & Connection Pool Manager",
      "Primary SQL Writer Database Node",
      "Secondary Read-Replicas & Archive Storage"
    ],
    faqs: [
      { q: "How do you optimize slow database queries?", a: "We run query plan diagnostics, identify missing table indexes, configure table partitions, and optimize cache allocations on the server." },
      { q: "How do you handle database disaster recovery?", a: "We establish active-passive database replication loops, sending incremental logs to an offsite backup location to allow rapid failover." }
    ]
  },
  "supercomputing": {
    title: "Supercomputing & HPC Solutions",
    subtitle: "Supercomputing / Solutions",
    description: "Accelerate scientific calculations, molecular modeling, and deep learning neural networks with high-density GPU computing clusters.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    conceptIntro: "Supercomputing combines high-density accelerators, InfiniBand networks, and parallel storage systems to compute complex calculations.",
    conceptPoints: [
      "High-Density GPU Clusters",
      "Low-Latency InfiniBand Switch",
      "Parallel Storage Pools",
      "MLOps Training Pipelines",
      "Distributed Compute Schedulers",
      "Thermal Liquid Cooling"
    ],
    benefits: [
      { title: "Reduce Operational Costs", desc: "Lower training budgets by scheduling jobs on spot computing instances.", icon: "💰" },
      { title: "Improve System Performance", desc: "Accelerate scientific model runs using parallel GPU processing cores.", icon: "⚡" },
      { title: "Increase Scalability", desc: "Scale compute networks from single nodes to massive multi-server clusters.", icon: "📈" },
      { title: "Improve Security", desc: "Protect private datasets using hardware-enforced cryptographic boundaries.", icon: "🔒" },
      { title: "Ensure High Availability", desc: "Orchestrate compute groups using container models to bypass node errors.", icon: "🔄" },
      { title: "Enable Digital Transformation", desc: "Transition from legacy CPU calculations to modern parallel processing loops.", icon: "🚀" }
    ],
    banner: {
      title: "Engineering Infinite Computing Performance",
      desc: "Deploy pre-configured GPU racks, high-speed InfiniBand switches, and parallel storage volumes.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "GPU Acceleration Nodes", desc: "Install high-density GPU servers engineered for parallel workloads.", vendor: "NVIDIA, Supermicro" },
      { title: "HPC Computing Racks", desc: "Configure multi-node servers built for high performance compute requirements.", vendor: "Dell Technologies, HPE, Lenovo" },
      { title: "Parallel Storage & Networks", desc: "Connect servers using high-throughput InfiniBand networks.", vendor: "Kubernetes, Red Hat, SUSE" }
    ],
    portfolio: [
      { title: "GPU Core Allocations", desc: "Audit node temperatures and workload queues from a single dashboard." },
      { title: "Parallel Lustre Storage", desc: "Feed datasets directly into compute nodes with multi-gigabit speeds." },
      { title: "Containerized HPC Jobs", desc: "Manage research workloads using container models to preserve dependencies." }
    ],
    edgeToCloud: [
      { title: "Unified HPC Portal", desc: "Track active jobs, node usage, and thermal metrics from a single page." },
      { title: "Hybrid Cluster Bursting", desc: "Burst heavy computing queues to public cloud instances when local nodes are full." },
      { title: "Secure Dataset Enclosures", desc: "Sanitize customer records before feeding files to analytical models." }
    ],
    diagramLayers: [
      "Job Scheduler (Slurm / Kubernetes)",
      "High-Speed InfiniBand Networking Switch",
      "High-Density GPU Compute Nodes",
      "Parallel Lustre SSD Storage Array"
    ],
    faqs: [
      { q: "What is InfiniBand and why is it used in HPC?", a: "InfiniBand is a high-speed communications link that offers extremely high throughput and sub-microsecond latency, critical for linking GPU nodes in a cluster." },
      { q: "How do you manage heat in supercomputing racks?", a: "We configure specialized high-density airflow racks and liquid cooling loops that dissipate heat directly from CPU and GPU chips." }
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

const StorageBrandLogos = [
  { name: "QSAN", logo: "QSAN", logoUrl: "/OEMS/QSAN.jpg" },
  { name: "Dell Technologies", logo: "DELL", logoUrl: "https://www.vectorlogo.zone/logos/dell/dell-icon.svg" },
  { name: "HPE", logo: "HPE", logoUrl: "/OEMS/HPE.png" },
  { name: "Veeam", logo: "Veeam", logoUrl: "/OEMS/Veeam.png" },
  { name: "Sangfor", logo: "Sangfor", logoUrl: "/OEMS/Sangor.png" },
  { name: "Acronis", logo: "Acronis", logoUrl: "/OEMS/acronis.png" },
  { name: "Virtuozzo", logo: "Virtuozzo", logoUrl: "/OEMS/virtuozzo.png" },
  { name: "Huawei", logo: "Huawei", logoUrl: "/OEMS/Huawei.png" },
  { name: "Synology", logo: "Synology", logoUrl: "/OEMS/synology.jpg" }
];

const NetworkBrandLogos = [
  { name: "Cisco", logo: "Cisco", logoUrl: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
  { name: "Juniper", logo: "Juniper", logoUrl: "/OEMS/juniper.png" },
  { name: "Aruba", logo: "Aruba", logoUrl: "/OEMS/aruba.webp" },
  { name: "Cambium Networks", logo: "Cambium", logoUrl: "/OEMS/Cambium Networks.webp" },
  { name: "Alcatel-Lucent Enterprise", logo: "Alcatel-Lucent", logoUrl: "/OEMS/Alcatel-Lucent Enterprise.png" },
  { name: "R&M", logo: "R&M", logoUrl: "/OEMS/R&M.png" },
  { name: "ZKTeco", logo: "ZKTeco", logoUrl: "/OEMS/ZKTeco.png" }
];

const SecurityBrandLogos = [
  { name: "Fortinet", logo: "Fortinet", logoUrl: "/OEMS/Fortinet.png" },
  { name: "Sophos", logo: "Sophos", logoUrl: "/OEMS/Sophos.png" },
  { name: "Cisco Security", logo: "Cisco Security", logoUrl: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
  { name: "Juniper Security", logo: "Juniper Security", logoUrl: "/OEMS/Juniper Security.png" },
  { name: "Barracuda", logo: "Barracuda", logoUrl: "/OEMS/Barracuda.png" },
  { name: "Entrust", logo: "Entrust", logoUrl: "/OEMS/Entrust.png" },
  { name: "Kaspersky", logo: "Kaspersky", logoUrl: "/OEMS/Kaspersky.png" },
  { name: "F5", logo: "F5", logoUrl: "/OEMS/F5.png" },
  { name: "Wazuh", logo: "Wazuh", logoUrl: "https://wazuh.com/brand-assets/Wazuh-Logo.svg" },
  { name: "Sangfor", logo: "Sangfor", logoUrl: "/OEMS/Sangor.png" },
  { name: "Acronis", logo: "Acronis", logoUrl: "/OEMS/acronis.png" }
];

const SoftwareBrandLogos = [
  { name: "Microsoft", logo: "Microsoft", logoUrl: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
  { name: "Red Hat", logo: "Red Hat", logoUrl: "https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" },
  { name: "SUSE", logo: "SUSE", logoUrl: "https://www.vectorlogo.zone/logos/suse/suse-icon.svg" },
  { name: "Adobe", logo: "Adobe", logoUrl: "/OEMS/Adobe.png" },
  { name: "GitLab", logo: "GitLab", logoUrl: "/OEMS/GitLab.png" },
  { name: "Kubernetes", logo: "Kubernetes", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
  { name: "Grafana", logo: "Grafana", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg" },
  { name: "Atlassian", logo: "Atlassian", logoUrl: "/OEMS/Atlassian.png" },
  { name: "Freshworks", logo: "Freshworks", logoUrl: "/OEMS/Freshworks.png" },
  { name: "Silicon (Own Solutions)", logo: "Silicon", logoUrl: "/silicon.webp" }
];

const DatabaseBrandLogos = [
  { name: "Oracle", logo: "Oracle", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "EnterpriseDB (EDB)", logo: "EDB", logoUrl: "/OEMS/EnterpriseDB.png" },
  { name: "MySQL", logo: "MySQL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" },
  { name: "Supabase", logo: "Supabase", logoUrl: "/OEMS/Supabase.png" },
  { name: "Microsoft SQL Server", logo: "MSSQL", logoUrl: "/OEMS/Microsoft SQL Server.png" },
  { name: "PostgreSQL", logo: "PostgreSQL", logoUrl: "/OEMS/PostgreSQL.png" },
  { name: "MongoDB", logo: "MongoDB", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" }
];

const SupercomputingBrandLogos = [
  { name: "NVIDIA", logo: "NVIDIA", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Dell Technologies", logo: "DELL", logoUrl: "https://www.vectorlogo.zone/logos/dell/dell-icon.svg" },
  { name: "HPE", logo: "HPE", logoUrl: "/OEMS/HPE.png" },
  { name: "Supermicro", logo: "Supermicro", logoUrl: "/OEMS/supermicro.png" },
  { name: "Lenovo", logo: "LENOVO", logoUrl: "/OEMS/Lenovo.jpg" },
  { name: "Red Hat", logo: "Red Hat", logoUrl: "https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" },
  { name: "SUSE", logo: "SUSE", logoUrl: "https://www.vectorlogo.zone/logos/suse/suse-icon.svg" },
  { name: "Kubernetes", logo: "Kubernetes", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
  { name: "AWS", logo: "AWS", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft Azure", logo: "Azure", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "Google Cloud", logo: "GCP", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" }
];

export default function SolutionsDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getFallbackData = (slugStr: string): SolutionData => {
    const title = formatTitle(slugStr);
    return {
      title: `${title} Infrastructure Solutions`,
      subtitle: `${title} / Solutions`,
      description: `Optimize dynamic workloads and secure your data paths with our state-of-the-art ${title} solutions.`,
      heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
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
      banner: {
        title: `Build Secure and Scalable ${title} Architectures`,
        desc: "Partner with Silicon to engineer resilient systems designed for high throughput and zero data loss.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
      },
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
      ]
    };
  };

  const content = solutionsContent[slug] || getFallbackData(slug);
  
  // Resolve brands partnered dynamically per product category
  let brands = ComputeBrandLogos;
  if (slug === "storage") brands = StorageBrandLogos;
  else if (slug === "network") brands = NetworkBrandLogos;
  else if (slug === "security") brands = SecurityBrandLogos;
  else if (slug === "software") brands = SoftwareBrandLogos;
  else if (slug === "database") brands = DatabaseBrandLogos;
  else if (slug === "supercomputing") brands = SupercomputingBrandLogos;

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
          <Link href="/solution-by-product" className="hover:text-[#000072] transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#000072] font-black">{formatTitle(slug)}</span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] md:text-xs font-black tracking-wider uppercase mb-6">
              Enterprise Solution
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
              {content.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              {content.description}
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

      {/* Technology Partners / Integrated Global Brands Section */}
      <section className="w-full py-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase font-black text-[#D32F2F] tracking-widest block mb-2">Technology Partners</span>
          <h2 className="text-3xl font-black text-[#0F2C59] tracking-tight">
            Integrated Global Brands
          </h2>
          <div className="h-1 w-12 bg-[#D32F2F] mx-auto mt-4 rounded mb-10" />
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {brands.map((brand, idx) => (
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
