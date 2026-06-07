"use client";

import React from "react";
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
  Compass
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";
import { blogPostsData } from "@/data/mockData";

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
  benefits: {
    title: string;
    desc: string;
  }[]; // 4 benefits
  banner: {
    title: string;
    desc: string;
    image: string;
  };
  featured: {
    title: string;
    desc: string;
  }[]; // 4 solutions
  portfolio: {
    title: string;
    desc: string;
  }[]; // 12 items
  edgeToCloud: {
    title: string;
    desc: string;
  }[]; // 3 items
}

// Predefined rich content for Solution by Product pages
const solutionsContent: Record<string, SolutionData> = {
  "compute": {
    title: "Compute",
    subtitle: "Compute / Solutions",
    description: "Optimize workloads and scale your infrastructure with our state-of-the-art compute solutions. We deliver high-fidelity, zero-trust integrated architectures engineered for performance, scalability, and robust security.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Overload prevention and efficiency", desc: "Distribute workloads dynamically across high-availability clusters to prevent system overloading and optimize resource usage." },
      { title: "Robust security zero-trust model", desc: "Implement zero-trust security controls to isolate critical workloads and prevent unauthorized data transactions." },
      { title: "Simplified monitoring and management", desc: "Gain unified visibility into your compute resources with integrated monitoring dashboards and automated alerting." },
      { title: "Power your business operations", desc: "Drive high-performance computing capabilities to support data-intensive enterprise operations." }
    ],
    banner: {
      title: "Improving quality, inspection and analytics",
      desc: "Transform your data-intensive workloads with automated quality control, AI-driven visual inspection, and advanced predictive analysis.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Enterprise Server Solutions", desc: "Leverage enterprise-grade server infrastructure designed for high density, efficiency, and scale." },
      { title: "Infrastructure Monitoring & Management", desc: "Gain real-time metrics and absolute control over hardware nodes and software containers." },
      { title: "Remote Server Management", desc: "Control server environments remotely with secure IPMI and out-of-band administration tools." },
      { title: "Edge & Dynamic Compute Systems", desc: "Deploy lightweight compute nodes closer to your endpoints to minimize bandwidth latency." }
    ],
    portfolio: [
      { title: "High-performance compute nodes", desc: "Deploy dedicated computing frames for highly parallel mathematical processing." },
      { title: "Virtual Private Servers (VPS)", desc: "Isolate user spaces with strict hypervisor constraints and dedicated resource quotas." },
      { title: "Kubernetes clustering & orchestration", desc: "Manage containerized applications across resilient multi-zone server groups." },
      { title: "Bare-metal dedicated hardware", desc: "Direct hardware access without virtualization overhead for heavy workloads." },
      { title: "GPU acceleration for AI & ML", desc: "Accelerate deep learning training pipelines with high-throughput graphics processors." },
      { title: "Fault-tolerant compute zones", desc: "Ensure uninterrupted operations with active-active server configurations." },
      { title: "Serverless execution models", desc: "Execute micro-functions dynamically without managing local runtime environments." },
      { title: "Compute-as-a-service (CaaS)", desc: "Scale processing power up or down based on real-time operational telemetry." },
      { title: "Infrastructure backup & migration", desc: "Transition physical or virtual servers between on-premise and remote locations." },
      { title: "High-density cabinet integration", desc: "Optimize physical space and cooling efficiency with engineered server racks." },
      { title: "Liquid-cooling server solutions", desc: "Enhance thermal dissipation for high-density compute frames using active liquid loops." },
      { title: "Edge compute processing units", desc: "Process local sensor and telemetry data directly on-site to reduce latency." }
    ],
    edgeToCloud: [
      { title: "Unified Management", desc: "Unify operations across on-prem, edge, and cloud with a single pane of glass." },
      { title: "Transitions matching budget", desc: "Scale resources cost-effectively with flexible pricing models and pay-as-you-grow structures." },
      { title: "Modernized Hybrid IT", desc: "Bridge legacy hardware with modern hyperconverged layers for seamless operation." }
    ]
  },
  "storage": {
    title: "Storage",
    subtitle: "Storage / Solutions",
    description: "Deploy resilient, high-speed, and petabyte-scale storage infrastructures. Secure your corporate memory with automated tiering, robust encryption, and multi-zone backups.",
    heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Data Durability & Protection", desc: "Protect your data against hardware failures using advanced erasure coding and active replication." },
      { title: "Dynamic Tiering Optimization", desc: "Automatically transition inactive archives to low-cost cold storage layers to save budget." },
      { title: "Unified Access Protocols", desc: "Access object, block, and file storage systems through standardized secure APIs." },
      { title: "Unlimited Scale Potential", desc: "Grow your storage capacity seamlessly from terabytes to petabytes without operational downtime." }
    ],
    banner: {
      title: "Securing Data Integrity at Absolute Scale",
      desc: "Empower your databases and document repositories with modern flash arrays, automated snapshots, and active-active backups.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "All-Flash NVMe Arrays", desc: "Achieve sub-millisecond access times for transactional databases and high-frequency workloads." },
      { title: "Object Storage Services", desc: "Store unstructured data (videos, backups, logs) with flat namespaces and HTTP access APIs." },
      { title: "Hybrid Cloud Sync", desc: "Synchronize physical storage arrays with secure cloud buckets in real-time." },
      { title: "Disaster Recovery Archival", desc: "Maintain off-site, immutable backups protected from ransomware encryptors." }
    ],
    portfolio: [
      { title: "High-density NAS enclosures", desc: "Centralize file storage over local networks with automated user access boundaries." },
      { title: "SAN block storage networks", desc: "Dedicate high-speed fiber networks to transactional databases and VM drives." },
      { title: "Immutable WORM storage", desc: "Ensure files cannot be modified or deleted to align with compliance audits." },
      { title: "Erasure coded object buckets", desc: "Distribute data fragments across multiple locations to survive hardware failure." },
      { title: "Active replication systems", desc: "Sync storage pools between data centers to enable instant disaster recovery." },
      { title: "Encrypted drive integration", desc: "Protect physical storage media with hardware-based AES-256 encryption." },
      { title: "Automated snapshot scheduling", desc: "Take point-in-time images of volumes without performance degradation." },
      { title: "Thin provisioning algorithms", desc: "Allocate storage space dynamically to maximize physical drive utilization." },
      { title: "Legacy storage migration", desc: "Safely transfer massive archives from tape drives to modern cloud-native systems." },
      { title: "Deduplication & compression", desc: "Reduce storage footprint by removing duplicate data blocks and applying compression." },
      { title: "File-locking collaboration", desc: "Implement secure file locking across distributed teams to avoid collision." },
      { title: "Cold-storage tape library", desc: "Archive long-term compliance logs in low-power physical tape vaults." }
    ],
    edgeToCloud: [
      { title: "Centralized File Pools", desc: "Access and manage storage nodes globally from a unified administration console." },
      { title: "Hybrid Tiering Pipeline", desc: "Move data dynamically between physical appliances and remote cloud storage layers." },
      { title: "Zero-Loss Replication", desc: "Ensure transaction logs are safely committed to multiple geolocations instantly." }
    ]
  },
  "network": {
    title: "Network",
    subtitle: "Network / Solutions",
    description: "Build fast, secure, and resilient enterprise networking. Integrate software-defined boundaries, global load balancing, and low-latency routing for distributed offices.",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Micro-Segmentation Gates", desc: "Isolate corporate segments to prevent unauthorized lateral threat movements." },
      { title: "High-Throughput Routing", desc: "Ensure maximum bandwidth utilization with dynamic BGP route optimization." },
      { title: "Simplified Cloud Interconnects", desc: "Establish dedicated, secure tunnels between physical offices and cloud networks." },
      { title: "Intelligent Traffic Shaping", desc: "Prioritize critical operational traffic over standard web navigation requests." }
    ],
    banner: {
      title: "Unifying Distributed Corporate Operations",
      desc: "Connect branches, datacenters, and remote teams securely with SD-WAN and automated routing policies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Software-Defined WAN", desc: "Route traffic dynamically over public broadband or MPLS lines to minimize latency." },
      { title: "Global Load Balancing", desc: "Distribute user requests across multiple regional datacenters for high availability." },
      { title: "Zero-Trust Tunnels", desc: "Connect remote employees with encrypted end-to-end access boundaries." },
      { title: "Core Switch Architecture", desc: "Deploy high-density core switches supporting up to 400Gbps network backbones." }
    ],
    portfolio: [
      { title: "Dynamic routing protocols", desc: "Configure OSPF, BGP, and EIGRP paths for automated network convergence." },
      { title: "VLAN division isolation", desc: "Segment local area networks into secure virtual workgroups." },
      { title: "Redundant fiber trunks", desc: "Lay down physical failover paths to avoid connectivity disruptions." },
      { title: "BGP route optimization", desc: "Calculate optimal routes to reduce internet latency for client systems." },
      { title: "Edge gateway firewalls", desc: "Analyze incoming and outgoing traffic with deep packet inspection filters." },
      { title: "DNS resolution systems", desc: "Provide ultra-fast, secure name resolution with DDoS protection built-in." },
      { title: "Network address translation", desc: "Conserve IP ranges and hide internal network topologies from public scans." },
      { title: "Wireless mesh controllers", desc: "Coordinate corporate Wi-Fi access points with seamless roaming policies." },
      { title: "IP address management (IPAM)", desc: "Track, plan, and manage IP allocations across the entire organization." },
      { title: "Optical transport terminals", desc: "Transmit high-bandwidth data over long distances using dense wave multiplexing." },
      { title: "Bandwidth limit throttling", desc: "Shape bandwidth usage to guarantee resources for critical applications." },
      { title: "VPN network aggregators", desc: "Handle thousands of concurrent remote connections with hardware-accelerated encryption." }
    ],
    edgeToCloud: [
      { title: "Single Console Control", desc: "Manage routing tables, firewalls, and SD-WAN rules from one central portal." },
      { title: "Low-Latency Direct Connects", desc: "Bridge physical offices directly to cloud networks to bypass public internet risks." },
      { title: "Automated Fault Detection", desc: "Trigger failover tunnels automatically within milliseconds of a link failure." }
    ]
  },
  "security": {
    title: "Security",
    subtitle: "Security / Solutions",
    description: "Harden your endpoints, secure your transactions, and protect your intellectual capital. We implement zero-trust access, continuous threat monitoring, and automated incident containment.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Continuous Auditing & Monitoring", desc: "Scan configurations and file integrity in real-time to prevent compliance drift." },
      { title: "Zero-Trust Identity", desc: "Authenticate every access request using SSO, MFA, and device health checks." },
      { title: "Threat Intelligence Feed", desc: "Leverage global databases and machine learning to block attacks proactively." },
      { title: "Automated Incident Containment", desc: "Isolate compromised host nodes instantly to prevent lateral contamination." }
    ],
    banner: {
      title: "Isolating Threat Vectors at the Perimeter",
      desc: "Protect your databases, transaction gateways, and developer environments with automated boundary controls and active-defense systems.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Identity & Access Control (IAM)", desc: "Grant precise roles and resource permissions based on the principle of least privilege." },
      { title: "Endpoint Protection Systems", desc: "Deploy lightweight agents to monitor activity and block malware on employee devices." },
      { title: "Data Loss Prevention (DLP)", desc: "Enforce strict policies to prevent sensitive client data from leaving your network." },
      { title: "SIEM Security Operations", desc: "Consolidate event logs from all systems to detect anomalies and trigger alerts." }
    ],
    portfolio: [
      { title: "Multi-factor authentication (MFA)", desc: "Require secondary verification codes and hardware security keys for logins." },
      { title: "Hardware cryptography keys", desc: "Store secret keys inside dedicated hardware security modules (HSM)." },
      { title: "Intrusion detection systems", desc: "Monitor network packets for signatures of known hacking exploits." },
      { title: "Vulnerability assessment scans", desc: "Scan codebases and running systems for unpatched software flaws." },
      { title: "Web application firewall (WAF)", desc: "Filter malicious HTTP requests (SQLi, XSS) targeting your public websites." },
      { title: "DDoS mitigation systems", desc: "Absorb massive traffic spikes to keep your public APIs online." },
      { title: "Data database encryption", desc: "Encrypt data fields within databases to protect files from physical theft." },
      { title: "Zero-trust network boundaries", desc: "De-authorize internal network access until explicitly verified." },
      { title: "Secure email gateways", desc: "Scan email attachments and links to block phishing and malware campaigns." },
      { title: "Compliance alignment audits", desc: "Compile documentation and logs to pass SOC2, ISO27001, and HIPAA audits." },
      { title: "Automated red-team scripts", desc: "Simulate network attacks to test response procedures and boundaries." },
      { title: "Secure software pipelines", desc: "Scan developer code for secret leaks and library vulnerabilities." }
    ],
    edgeToCloud: [
      { title: "Central Policy Engine", desc: "Configure security policies in one place and push them to all devices globally." },
      { title: "Unified Identity Federation", desc: "Use a single corporate identity directory across all internal and cloud platforms." },
      { title: "Automated Isolation Loops", desc: "Isolate threat vectors automatically across hybrid systems within milliseconds." }
    ]
  },
  "software": {
    title: "Software",
    subtitle: "Software / Solutions",
    description: "Deliver intuitive, modern, and scalable software architectures. We build bespoke SaaS portals, API-first integrations, and event-driven microservices engineered for business outcomes.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "API-First Architecture", desc: "Ensure your systems are ready to connect with third-party vendors and client tools." },
      { title: "Rapid CI/CD Pipelines", desc: "Automate code testing and deployment to reduce release cycles from months to hours." },
      { title: "Elastic Microservices", desc: "Scale specific code components independently to manage traffic spikes cost-effectively." },
      { title: "Modern User Interfaces", desc: "Provide beautiful, responsive layouts that make work efficient and enjoyable." }
    ],
    banner: {
      title: "Modernizing Legacy Systems Safely",
      desc: "Deconstruct aging software monoliths into robust, cloud-native services with zero downtime during migration.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "Custom SaaS Hubs", desc: "Build multi-tenant customer hubs with granular billing plans and custom workspaces." },
      { title: "Event-Driven Systems", desc: "Sync systems instantly using high-throughput brokers like Apache Kafka." },
      { title: "Mobile App Ecosystems", desc: "Deploy responsive mobile platforms using React Native or Flutter frameworks." },
      { title: "Headless CMS Platforms", desc: "Decouple editorial content from display layers to speed up content delivery." }
    ],
    portfolio: [
      { title: "Bespoke customer databases", desc: "Structure user records with custom fields and rapid querying indices." },
      { title: "Automated billing gateways", desc: "Integrate Stripe or Adyen payment structures with automated invoicing." },
      { title: "Real-time chat channels", desc: "Add collaborative chat tools to customer portals using WebSockets." },
      { title: "Data translation pipelines", desc: "Convert file structures (XML, CSV, JSON) automatically between systems." },
      { title: "Developer testing suites", desc: "Run comprehensive unit, integration, and end-to-end tests automatically." },
      { title: "Visual analytics dashboards", desc: "Display system performance metrics in clean charts and tables." },
      { title: "Single sign-on integrations", desc: "Connect corporate directories (Okta, Azure AD) for quick user logins." },
      { title: "Serverless script running", desc: "Run business logic scripts dynamically without dedicated server overhead." },
      { title: "PDF reporting generators", desc: "Compile complex data tables into styled PDF invoices and audits." },
      { title: "Localization translation files", desc: "Support international users with dynamically localized languages." },
      { title: "Database caching layers", desc: "Store frequent database results in memory to speed up page loads." },
      { title: "System health monitoring", desc: "Track CPU usage, error logs, and response times in real-time." }
    ],
    edgeToCloud: [
      { title: "Global Service Fabric", desc: "Deploy software containers across geolocations for low latency." },
      { title: "Unified Configuration Maps", desc: "Manage environment variables and API keys securely across all servers." },
      { title: "Progressive App Releases", desc: "Deploy code changes to small groups of users first to verify stability." }
    ]
  },
  "database": {
    title: "Database",
    subtitle: "Database / Solutions",
    description: "Architect high-performance database environments. We deliver multi-region replication, sub-millisecond query optimization, and secure point-in-time data recovery.",
    heroImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Zero-Downtime Migration", desc: "Transfer massive production databases to new infrastructure without offline cycles." },
      { title: "Sub-Millisecond Query Response", desc: "Optimize indices and query syntax to eliminate bottleneck latency." },
      { title: "Geographic Sync Pipelines", desc: "Replicate transactions instantly across world regions to support global users." },
      { title: "Continuous Streaming Backups", desc: "Ensure absolute data survival with point-in-time transaction logging." }
    ],
    banner: {
      title: "Scaling Transactional Systems Uninterrupted",
      desc: "Maintain consistent database operations through traffic surges with automatic read-replica scaling and partitioning.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "High-Availability Clusters", desc: "Deploy active-passive database pairs with automatic failover triggers." },
      { title: "NoSQL Big Data Systems", desc: "Scale unstructured log files and catalog schemas across multiple servers." },
      { title: "In-Memory Caching Loops", desc: "Speed up database read speeds by serving assets from fast RAM pools." },
      { title: "Data Warehousing setups", desc: "Consolidate records from multiple departments into one search database." }
    ],
    portfolio: [
      { title: "Relational database tuning", desc: "Adjust buffer sizes and locking parameters on PostgreSQL or Oracle database servers." },
      { title: "Table partition indexing", desc: "Split massive tables into manageable chunks to keep queries fast." },
      { title: "Automated backup streaming", desc: "Stream database backup bytes to secure object storage continuously." },
      { title: "Multi-region replica synchronization", desc: "Configure replication lag alerts to ensure global datastores stay synced." },
      { title: "NoSQL database scaling", desc: "Set up MongoDB or Cassandra clusters with automatic shard balancing." },
      { title: "Transactional integrity enforcement", desc: "Enforce strict ACID compliance across distributed database nodes." },
      { title: "Historical data cold archiving", desc: "Move aged ledger entries to low-cost read-only storage engines." },
      { title: "GraphQL query resolvers", desc: "Translate front-end client queries into optimized database search commands." },
      { title: "Database performance diagnostic sweeps", desc: "Detect and rewrite slow queries that are holding up applications." },
      { title: "Data dictionary structure maps", desc: "Build clear schemas detailing tables, fields, and foreign key relations." },
      { title: "Connection pool balancing", desc: "Manage thousands of database connections without running out of server sockets." },
      { title: "SQL injection prevention filters", desc: "Validate input strings to block database hacking attempts." }
    ],
    edgeToCloud: [
      { title: "Unified Console Overview", desc: "Monitor database health, latency, and cache hits from a single dashboard." },
      { title: "Dynamic Read-Replica Scaling", desc: "Spin up additional read-only nodes dynamically during high traffic." },
      { title: "Seamless Migration Framework", desc: "Sync and switch production traffic to new servers with zero downtime." }
    ]
  },
  "supercomputing": {
    title: "Supercomputing",
    subtitle: "Supercomputing / Solutions",
    description: "Unleash extreme computing capacity. We design cluster computing systems, high-speed interconnect matrices, and liquid-cooled configurations for scientific and AI workloads.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "Massive Parallel Performance", desc: "Harness thousands of compute cores working in sync to solve complex math problems." },
      { title: "Ultra-Fast Switch Fabrics", desc: "Connect nodes using low-latency InfiniBand lines to prevent networking bottlenecks." },
      { title: "Thermal Management Engineering", desc: "Maintain stable core temperatures using specialized liquid cooling loops." },
      { title: "Automated Workload Schedulers", desc: "Optimize cluster use using queue managers like Slurm or Kubernetes." }
    ],
    banner: {
      title: "Powering the Next Wave of Discoveries",
      desc: "Accelerate weather prediction, molecular simulation, and generative AI training using custom supercomputing clusters.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: "High-Performance Clusters (HPC)", desc: "Build custom server matrices with optimized master and compute node designs." },
      { title: "GPU Accelerator Matrices", desc: "Cluster hundreds of high-throughput AI chips with fast memory interconnects." },
      { title: "InfiniBand Networking Fabrics", desc: "Link server nodes with low-latency, high-bandwidth interconnects." },
      { title: "Liquid Cooling Cabling", desc: "Remove heat directly from processing dies with efficient water loops." }
    ],
    portfolio: [
      { title: "Node allocation queue scheduling", desc: "Configure priority queues to maximize job execution speeds." },
      { title: "MPI code parallelization", desc: "Refactor application logic to run across multiple server nodes concurrently." },
      { title: "High-speed scratch storage pools", desc: "Provide terabytes of temporary storage with fast parallel write speeds." },
      { title: "Liquid cooling manifolds", desc: "Distribute coolant flows evenly across high-density server cabinets." },
      { title: "InfiniBand cable routing", desc: "Plan fiber pathways to ensure redundant network connections." },
      { title: "GPU tensor core tuning", desc: "Configure mathematical operations to run on fast AI hardware units." },
      { title: "Cluster health diagnostics", desc: "Track server temperatures, power draws, and errors continuously." },
      { title: "Persistent storage arrays", desc: "Save simulation results to high-capacity SAS or NVMe storage pools." },
      { title: "Linux cluster orchestration", desc: "Deploy custom operating system images to compute nodes in parallel." },
      { title: "Virtual desktop compute access", desc: "Let researchers launch graphic-heavy jobs from simple web portals." },
      { title: "Power supply redundancy blocks", desc: "Ensure compute grids never shut down due to utility failures." },
      { title: "Compiler optimization diagnostics", desc: "Compile software code with advanced flags to squeeze out extra speed." }
    ],
    edgeToCloud: [
      { title: "Central Queue Portal", desc: "Submit and monitor compute jobs on local and cloud clusters from one screen." },
      { title: "Hybrid Compute Scale", desc: "Burst heavy workloads to cloud HPC instances when local queues are full." },
      { title: "Integrated Storage Sync", desc: "Replicate final output files from cluster nodes to persistent data archives." }
    ]
  }
};

// Generates fallback data for other slugs dynamically
const getFallbackData = (slug: string): SolutionData => {
  const title = formatTitle(slug);
  return {
    title: title,
    subtitle: `${title} / Solutions`,
    description: `Optimize, automate, and protect your corporate processes with our industry-leading ${title.toLowerCase()} configurations. We build high-fidelity architectures designed to match enterprise-level efficiency and scalability parameters.`,
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    benefits: [
      { title: "High Scalability", desc: "Instantly scale your operations to meet enterprise demand without compromising on speed or reliability." },
      { title: "Zero-Trust Security", desc: "Enforce comprehensive security parameters across your entire stack to protect critical corporate assets." },
      { title: "Optimized Performance", desc: "Streamline workloads and minimize latency through modern, efficient architectural paradigms." },
      { title: "Seamless Integration", desc: "Easily connect with your existing infrastructure through standardized APIs and flexible deployment options." }
    ],
    banner: {
      title: `Accelerating your ${title} workloads`,
      desc: `Transform your legacy operational nodes into responsive software-defined pipelines equipped with automation and zero-trust safeguards.`,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    featured: [
      { title: `Core ${title} Solutions`, desc: `Deploy robust baseline configurations matching standard corporate requirements.` },
      { title: "Monitoring & Operations Controls", desc: "Gain total visibility into workload health metrics and active databases." },
      { title: "Secure Gateway Tunnels", desc: "Establish encrypted network routes to verify and protect transaction data." },
      { title: "Dynamic Load Balance Control", desc: "Redistribute server loads automatically during massive customer spikes." }
    ],
    portfolio: [
      { title: `Bespoke ${title} frameworks`, desc: "Tailor processing gates and layouts to your exact business metrics." },
      { title: "Automated event pipelines", desc: "Process and route telemetry data between systems with sub-second latency." },
      { title: "Hardware-enforced encryption", desc: "Protect files and fields using active cryptoprocessors." },
      { title: "Failover clustering loops", desc: "Ensure persistent database availability with active-active server pairs." },
      { title: "Unified control dashboards", desc: "Display critical metrics in real-time widgets and logs grids." },
      { title: "API integration boundaries", desc: "Standardize data exchanges with clean JSON endpoints and keys." },
      { title: "Historical logging archives", desc: "Compile full transaction files for compliance audits." },
      { title: "User security access control", desc: "Manage employee access boundaries using least privilege roles." },
      { title: "Hybrid scale configurations", desc: "Bridge on-premise hardware frames with secure cloud instances." },
      { title: "Resource budget optimization", desc: "Tune cache layouts to lower active cloud database charges." },
      { title: "System error diagnostics", desc: "Detect processing bottleneck files before they slow down portals." },
      { title: "Continuous backup schedules", desc: "Stream database transaction backup logs to immutable object vaults." }
    ],
    edgeToCloud: [
      { title: "Unified Management Console", desc: "Monitor all system nodes from a single browser-accessible control screen." },
      { title: "Pay-as-you-grow licensing", desc: "Keep development charges aligned with your actual operational capacity." },
      { title: "Hybrid Infrastructure Bridge", desc: "Modernize legacy database models without having to rewrite software." }
    ]
  };
};

interface UseCaseData {
  title: string;
  subtitle: string;
  description: string;
  introTitle: string;
  introDesc: string;
  cards: {
    title: string;
    desc: string;
  }[]; // 3 cards
  trialTitle: string;
  trialDesc: string;
  stackedCards: {
    title: string;
    desc: string;
  }[]; // 3 cards
  relatedCards: {
    title: string;
    desc: string;
    link: string;
  }[]; // 3 cards
}

// Predefined rich content for Solution by Use Case pages (Matching Business Continuity layout)
const useCasesContent: Record<string, UseCaseData> = {
  "business-continuity": {
    title: "Maintain productivity and business continuity",
    subtitle: "Solutions / Business Continuity",
    description: "Build dynamic, secure, and high-performance remote workspaces for employees to access resources from anywhere.",
    introTitle: "Helping businesses evolve and thrive for the future of work",
    introDesc: "With a hybrid workforce, standard networks must scale to support remote connections without compromising on security or performance, bridging the gap between physical and digital spaces.",
    cards: [
      { title: "Small and midsized businesses", desc: "Introduce secure and remote working solutions to keep your employees productive. We provide the tools they need to stay connected and collaborate in a secure digital environment." },
      { title: "Healthcare professionals and first responders", desc: "For hospital and first responders, access to medical records and patient systems is time-critical. We deliver secure, fast, and continuous access for critical healthcare workers." },
      { title: "Virtual education and call centers", desc: "High-performance capability is necessary to support distance learning and remote call centers. Silicon Computing Ltd ensures secure access to applications." }
    ],
    trialTitle: "Advanced Trial License",
    trialDesc: "Advanced features & trial capabilities that accelerate multi-user environments. Try for 60 days free.",
    stackedCards: [
      { title: "Enable secure remote working with Virtual Desktop Infrastructure", desc: "Deliver secure virtual desktops to remote employees. Our solutions ensure application access is fast, reliable, and secure across any device." },
      { title: "Maintain worker productivity through collaboration apps", desc: "Unify communications and productivity tools to help teams work together. We integrate video, messaging, and document sharing in a secure workspace." },
      { title: "Maintain IT operations through remote management and IT automation solutions", desc: "Monitor and manage IT environments from anywhere. SCL designs out-of-band server administration and automated threat response setups." }
    ],
    relatedCards: [
      { title: "Professional cloud management services", desc: "Let our certified engineers manage your cloud migrations, database scaling, and daily operations.", link: "/services" },
      { title: "HPE Remote Storage", desc: "Leverage enterprise storage networks that scale dynamically to match your remote data access needs.", link: "/solutions/storage" },
      { title: "HPE Software for Backup and Recovery", desc: "Secure your corporate memory with automated immutable backup policies and point-in-time recovery.", link: "/solutions/software" }
    ]
  }
};

const getFallbackUseCaseData = (slug: string): UseCaseData => {
  const title = formatTitle(slug);
  return {
    title: `Optimize workflow and ${title.toLowerCase()}`,
    subtitle: `Solutions / ${title}`,
    description: `Build secure, flexible, and high-performance workflows customized for modern ${title.toLowerCase()} requirements.`,
    introTitle: `Evolving and thriving through modern ${title.toLowerCase()}`,
    introDesc: `Integrate secure software interfaces and workload optimization strategies tailored directly to your organization's ${title.toLowerCase()} specifications.`,
    cards: [
      { title: "Enterprise & Corporate scale", desc: "Scale resources to meet massive customer needs with built-in access controls." },
      { title: "Specialized service professionals", desc: "Deliver fast, secure, and remote tools for distributed operations teams." },
      { title: "Flexible workspaces & terminals", desc: "Coordinate multiple remote user workspaces with unified telemetry logs." }
    ],
    trialTitle: "Workload Sandbox Evaluation",
    trialDesc: "Evaluate our full software-defined toolkits and integrations inside a secure testing sandbox environment.",
    stackedCards: [
      { title: `Enable secure ${title.toLowerCase()} configurations`, desc: "Define access boundaries and firewall gates to isolate and protect active operational channels." },
      { title: "Facilitate seamless team collaborations", desc: "Unify ledger entries and reporting grids to let different units work together efficiently." },
      { title: "Automate system health diagnostics", desc: "Trigger automated alerts and containment loops to protect databases from threat vectors." }
    ],
    relatedCards: [
      { title: "Cloud migration assistance", desc: "Transition legacy databases and databases to secure active-active cloud clusters.", link: "/services" },
      { title: "High-density cabinet compute", desc: "Deploy dedicated hardware nodes designed to run heavy analytical calculations.", link: "/solutions/compute" },
      { title: "Zero-trust edge gateways", desc: "Install secure routers and SD-WAN configurations at branch network edges.", link: "/solutions/network" }
    ]
  };
};

// Sleek Brand Logo icons/renderers
const BrandLogos = [
  { name: "Cisco", logo: "CISCO" },
  { name: "Dell", logo: "DELL" },
  { name: "HPE", logo: "HPE" },
  { name: "IBM", logo: "IBM" },
  { name: "Huawei", logo: "HUAWEI" },
  { name: "Broadcom", logo: "BROADCOM" },
  { name: "Micron", logo: "MICRON" },
  { name: "Lenovo", logo: "LENOVO" },
  { name: "Intel", logo: "intel" },
  { name: "Oracle", logo: "ORACLE" }
];

export default function SolutionsDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Decide layout mode: Product page vs Use Case page
  const productSlugs = ["compute", "storage", "network", "security", "software", "database", "supercomputing"];
  const isProductLayout = productSlugs.includes(slug.toLowerCase());

  // Filter relevant blog posts for this solution dynamically by category
  const getRelevantPosts = (slugString: string) => {
    const norm = (slugString || "").toLowerCase();
    let targetCat = "";
    if (norm.includes("ai") || norm.includes("artificial") || norm.includes("machine") || norm.includes("cognitive")) {
      targetCat = "AI & Innovation";
    } else if (norm.includes("security") || norm.includes("protection") || norm.includes("sec")) {
      targetCat = "Cyber Security";
    } else {
      targetCat = "Cloud Operations";
    }
    const matched = blogPostsData.filter(
      (post) => post.category.toLowerCase() === targetCat.toLowerCase()
    );
    return matched.length > 0 ? matched : blogPostsData;
  };

  const relevantPosts = getRelevantPosts(slug);

  // PRODUCT LAYOUT RENDERING MODE
  if (isProductLayout) {
    const content = solutionsContent[slug] || getFallbackData(slug);
    return (
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden font-sans text-slate-800">
        
        {/* Background Ambience Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

        {/* 1. HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-primary-600 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-600 font-bold">{formatTitle(slug)}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.15]">
                {content.title}
              </h1>
              <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/85 hover:from-[#000072]/90 hover:to-[#000072]/75 text-white font-extrabold text-xs tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
                  Deploy Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-50 shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer">
                  Talk to Sales
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl">
              <div className="rounded-3xl bg-white shadow-xl p-3 relative overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-100">
                <img 
                  src={content.heroImage} 
                  alt={content.title}
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. BENEFITS SECTION */}
        <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                Benefits of Silicon {formatTitle(slug)}
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md hover:border-slate-200 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug">{benefit.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BANNER SECTION */}
        <div className="w-full relative z-10 overflow-hidden py-24 bg-slate-900 border-b border-slate-850">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${content.banner.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/80 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl">
              {content.banner.title}
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
              {content.banner.desc}
            </p>
          </div>
        </div>

        {/* 4. FEATURED SOLUTIONS SECTION */}
        <div className="w-full py-20 relative z-10 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                Featured {formatTitle(slug)} Solutions
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.featured.map((sol, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{sol.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. ADDITIONAL PORTFOLIO GRID */}
        <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                Additional {formatTitle(slug).toLowerCase()} portfolio
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.portfolio.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3">
                  <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. SOLUTIONS ACROSS EDGE TO CLOUD */}
        <div className="w-full py-20 bg-[#F8FAFC] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[#0F2C59]">
                {formatTitle(slug)} solutions across edge to cloud
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {content.edgeToCloud.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm flex flex-col gap-3">
                  <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. BRANDS ROW */}
        <div className="w-full py-16 bg-white border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-xs font-black tracking-widest text-[#0F2C59] uppercase mb-8">
              Brands Partnered
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {BrandLogos.map((brand, idx) => (
                <div key={idx} className="px-6 py-3 rounded-xl border border-slate-100 shadow-sm bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 select-none">
                  <span className="text-xs md:text-sm font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">
                    {brand.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. GET STARTED CALLOUT */}
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="rounded-3xl bg-gradient-to-tr from-[#0F2C59] to-[#000072] text-white p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Get Started with Silicon {formatTitle(slug)}
              </h2>
              <p className="text-slate-300 mt-4 text-xs sm:text-sm leading-relaxed">
                Ready to optimize your {formatTitle(slug).toLowerCase()} infrastructure? Reach out to our solutions architects today to discuss your technical requirements and custom operational pipelines.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-md">
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 9. NEWS & RESOURCES SECTION */}
        <div className="w-full py-20 bg-[#F8FAFC] border-t border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
                {formatTitle(slug)} news and resources
              </h2>
              <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantPosts.map((post) => (
                <article key={post.id} className="rounded-3xl bg-white border border-slate-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-black uppercase text-[#D32F2F] tracking-widest">{post.category}</span>
                      <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug mt-2.5 group-hover:text-[#D32F2F] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-2.5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[10px] text-slate-400 font-bold">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-xs font-extrabold text-[#000072] group-hover:text-[#D32F2F] transition-colors flex items-center gap-1">
                      Read Article <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>
    );
  }

  // USE CASE LAYOUT RENDERING MODE (Business Continuity Style)
  const content = useCasesContent[slug.toLowerCase()] || getFallbackUseCaseData(slug);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/solutions" className="hover:text-primary-600 transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary-600 font-bold">{formatTitle(slug)}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.15]">
              {content.title}
            </h1>
            <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              {content.description}
            </p>
          </div>
          
          {/* Mockup Vector Illustration */}
          <div className="flex-1 w-full max-w-md">
            <svg 
              viewBox="0 0 500 350" 
              className="w-full h-auto select-none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Meeting Room Table Mockup */}
              <ellipse cx="250" cy="200" rx="160" ry="60" fill="#E2E8F0" />
              <ellipse cx="250" cy="195" rx="150" ry="50" fill="#0F2C59" />
              
              {/* Sitting Characters Mockups */}
              <circle cx="160" cy="150" r="10" fill="#FBD38D" />
              <rect x="150" y="165" width="20" height="30" rx="4" fill="#3182CE" />
              
              <circle cx="210" cy="140" r="10" fill="#FBD38D" />
              <rect x="200" y="155" width="20" height="35" rx="4" fill="#48BB78" />
              
              <circle cx="290" cy="140" r="10" fill="#FBD38D" />
              <rect x="280" y="155" width="20" height="35" rx="4" fill="#ED8936" />
              
              <circle cx="340" cy="150" r="10" fill="#FBD38D" />
              <rect x="330" y="165" width="20" height="30" rx="4" fill="#E53E3E" />
              
              {/* Presenter Standing */}
              <circle cx="380" cy="130" r="12" fill="#FBD38D" />
              <rect x="370" y="148" width="20" height="50" rx="6" fill="#000072" />
              
              {/* Laptop mockups on table */}
              <rect x="180" y="190" width="16" height="10" rx="2" fill="#E2E8F0" />
              <rect x="300" y="190" width="16" height="10" rx="2" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Intro section: Helping businesses evolve */}
      <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Folder briefcase mock */}
            <div className="flex-1 w-full max-w-md flex justify-center">
              <svg 
                viewBox="0 0 500 350" 
                className="w-full h-auto select-none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Briefcase/Folder mockup */}
                <rect x="100" y="80" width="300" height="200" rx="16" fill="#ED8936" fillOpacity="0.1" stroke="#ED8936" strokeWidth="4" />
                <rect x="120" y="100" width="260" height="160" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                
                {/* Floating elements */}
                <circle cx="150" cy="140" r="14" fill="#3182CE" />
                <path d="M145 140 L155 140 M150 135 L150 145" stroke="#FFFFFF" strokeWidth="3" />
                
                <rect x="180" y="130" width="80" height="8" rx="4" fill="#E2E8F0" />
                <rect x="180" y="144" width="140" height="6" rx="3" fill="#E2E8F0" />
                
                {/* Characters working */}
                <circle cx="340" cy="220" r="8" fill="#FBD38D" />
                <rect x="330" y="232" width="20" height="28" rx="4" fill="#48BB78" />
              </svg>
            </div>

            <div className="flex-1 text-left">
              <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
                {content.introTitle}
              </h2>
              <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed font-medium">
                {content.introDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Three Cards Grid */}
      <div className="w-full py-20 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {content.cards.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-[#000072] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trial Promo Banner */}
      <div className="w-full py-16 bg-[#F0F4F7] border-y border-slate-150 relative z-10 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59] tracking-tight">
            {content.trialTitle}
          </h2>
          <p className="text-slate-500 mt-3 text-xs sm:text-sm font-semibold max-w-xl">
            {content.trialDesc}
          </p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide hover:bg-[#000072]/90 shadow-sm transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer">
              More
            </Link>
          </div>
        </div>
      </div>

      {/* Stacked Vertical list panel */}
      <div className="w-full py-20 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              Discover how we've helped with the real issues of new hybrid workplaces
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="flex flex-col gap-6">
            {content.stackedCards.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 shadow-sm flex flex-col gap-3">
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: What else might help */}
      <div className="w-full py-20 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              What else might help your business?
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {content.relatedCards.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link}
                className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left group"
              >
                <h3 className="font-extrabold text-base text-[#0F2C59] group-hover:text-[#000072] transition-colors leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <span className="text-xs font-black text-[#000072] group-hover:text-[#D32F2F] transition-colors mt-auto inline-flex items-center gap-1.5 cursor-pointer">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Row */}
      <div className="w-full py-16 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xs font-black tracking-widest text-[#0F2C59] uppercase mb-8">
            Brands Partnered
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {BrandLogos.map((brand, idx) => (
              <div key={idx} className="px-6 py-3 rounded-xl border border-slate-100 shadow-sm bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 select-none">
                <span className="text-xs md:text-sm font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News & Resources */}
      <div className="w-full py-20 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              {formatTitle(slug)} news and resources
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantPosts.map((post) => (
              <article key={post.id} className="rounded-3xl bg-white border border-slate-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-[#D32F2F] tracking-widest">{post.category}</span>
                    <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug mt-2.5 group-hover:text-[#D32F2F] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2.5 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[10px] text-slate-400 font-bold">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-xs font-extrabold text-[#000072] group-hover:text-[#D32F2F] transition-colors flex items-center gap-1">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
