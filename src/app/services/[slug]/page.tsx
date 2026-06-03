"use client";

import React from "react";
import { useParams } from "next/navigation";
import { 
  MonitorSmartphone, Smartphone, PenTool, TerminalSquare, 
  Cloud, Server, Database, Shield, Cpu, Network, Briefcase, 
  Settings, Users, ShieldCheck, CheckCircle2, ArrowLeft 
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// Dynamic Content Mapping
// ----------------------------------------------------------------------

type ServiceContent = {
  heroTitle: string;
  heroSub: string;
  featureTitle: string;
  featureText: string;
  gridTitle: string;
  gridItems: { icon: React.ReactNode; text: string }[];
  whyList: string[];
  parent?: { name: string; slug: string };
};

const getServiceSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const defaultContent: ServiceContent = {
  heroTitle: "Empowering Businesses Through Smart Applications",
  heroSub: "We build powerful, scalable, and secure applications that accelerate your digital transformation journey.",
  featureTitle: "Transforming Ideas Into Intelligent Applications",
  featureText: "Our team blends innovation, technology, and experience to deliver high-performing, user-focused applications.",
  gridTitle: "Our Application Services",
  gridItems: [
    { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Web App Development" },
    { icon: <Smartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Mobile App Development" },
    { icon: <PenTool className="w-8 h-8 text-[#0F2C59]" />, text: "UI/UX Design" },
    { icon: <TerminalSquare className="w-8 h-8 text-[#0F2C59]" />, text: "Custom Software Solutions" }
  ],
  whyList: [
    "End-to-End Expertise",
    "Agile Development Approach",
    "Custom-Built Solutions",
    "Proven Track Record",
    "24/7 Monitoring and Support"
  ]
};

const serviceData: Record<string, ServiceContent> = {
  // Main Categories
  "application-services": defaultContent,
  "cloud-infrastructure-services": {
    heroTitle: "Next-Generation Cloud & Infrastructure",
    heroSub: "Migrate, modernize, and manage your enterprise workloads with our resilient cloud architectures.",
    featureTitle: "Building Scalable Digital Foundations",
    featureText: "We architect multi-cloud and hybrid environments that guarantee high availability and zero downtime.",
    gridTitle: "Cloud & Infrastructure Services",
    gridItems: [
      { icon: <Cloud className="w-8 h-8 text-[#0F2C59]" />, text: "Cloud Migration" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Infrastructure as Code" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Network Virtualization" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Compute Optimization" }
    ],
    whyList: [
      "Zero-Downtime Migrations",
      "Multi-Cloud Architecture",
      "Cost-Optimized Operations",
      "Enterprise SLA Guarantees",
      "24/7 Global NOC Support"
    ]
  },
  "data-database-services": {
    heroTitle: "Enterprise Data & Database Solutions",
    heroSub: "Unlock the value of your data with highly available, scalable, and secure database engineering.",
    featureTitle: "Architecting Data for the Future",
    featureText: "Our database engineers implement complex data pipelines and storage solutions tailored for high transaction volumes.",
    gridTitle: "Data Services",
    gridItems: [
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Database Administration" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Data Warehousing" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "ETL Pipelines" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Data Governance" }
    ],
    whyList: [
      "High Availability Setup",
      "Disaster Recovery Planning",
      "Performance Tuning",
      "Compliance & Security",
      "Real-Time Analytics"
    ]
  },
  "ai-iot-solutions": {
    heroTitle: "AI & IoT Solutions",
    heroSub: "Harness the power of intelligent edge computing and machine learning algorithms.",
    featureTitle: "Connecting Devices, Empowering Intelligence",
    featureText: "We deploy customized IoT hubs, write firmware telemetry synchronization systems, and train machine learning models for predictive maintenance.",
    gridTitle: "AI & IoT Services",
    gridItems: [
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Predictive Maintenance" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Smart Edge Computing" },
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Computer Vision Auditing" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "IoT Gateway Topologies" }
    ],
    whyList: [
      "Real-Time Sensor Sync",
      "Edge AI Acceleration",
      "Scalable Device Clusters",
      "End-to-End Encryption",
      "Proactive SLA Assurances"
    ]
  },
  "cybersecurity-services": {
    heroTitle: "Zero-Trust Cybersecurity Solutions",
    heroSub: "Defend your corporate perimeter with advanced threat intelligence and zero-trust architectures.",
    featureTitle: "Securing Digital Frontiers",
    featureText: "We provide comprehensive security audits, penetration testing, and continuous threat monitoring to protect your assets.",
    gridTitle: "Our Security Services",
    gridItems: [
      { icon: <Shield className="w-8 h-8 text-[#0F2C59]" />, text: "Threat Intelligence" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Zero-Trust Integration" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Network Defense" },
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Security Auditing" }
    ],
    whyList: [
      "Military-Grade Encryption",
      "Proactive Threat Hunting",
      "Compliance Frameworks",
      "Rapid Incident Response",
      "Endpoint Hardening"
    ]
  },
  "managed-it-consulting": {
    heroTitle: "Managed IT & Strategic Consulting",
    heroSub: "Align your operational technology spend with board-level business goals.",
    featureTitle: "Bespoke Consulting & Proactive Administration",
    featureText: "Our senior consultants design cloud budgets, audit cybersecurity compliance, and manage your day-to-day IT systems.",
    gridTitle: "Managed Services & Consulting",
    gridItems: [
      { icon: <Briefcase className="w-8 h-8 text-[#0F2C59]" />, text: "CIO Advisory Support" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "IT Budget Planning" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "24/7 Remote Monitoring" },
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Staff Augmentation" }
    ],
    whyList: [
      "Seasoned CIO Experts",
      "Cost-Efficient Audits",
      "Immediate Issue Response",
      "Zero Overhead Management",
      "Long-Term Digital Roadmap"
    ]
  },

  // Sub-services (Application Services)
  "web-app-development": {
    heroTitle: "High-Performance Web App Development",
    heroSub: "We build fast, secure, and modern web applications tailored to your business needs.",
    featureTitle: "Custom Web Solutions Engineered for Scale",
    featureText: "Our engineers develop robust frontends and scalable backends utilizing Next.js, React, Node.js, and other modern technologies to ensure peak performance.",
    gridTitle: "Web Development Capabilities",
    gridItems: [
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Next.js Framework Optimization" },
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Single Page Apps (SPA)" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Multi-Tenant SaaS Architectures" },
      { icon: <Smartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Progressive Web Apps (PWA)" }
    ],
    whyList: [
      "Tailored UI Design Systems",
      "SEO & Core Web Vitals Optimization",
      "High-Speed Page Response Times",
      "Secure REST/GraphQL API Designs",
      "Continuous Monitoring & Upgrades"
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },
  "mobile-app-development": {
    heroTitle: "Fluid Native & Cross-Platform Mobile Apps",
    heroSub: "Deliver premium mobile experiences on iOS and Android with optimized native performance.",
    featureTitle: "Engaging Mobile Experiences Designed to Perform",
    featureText: "We design and develop native iOS/Android apps and cross-platform Flutter/React Native solutions that engage users and run seamlessly.",
    gridTitle: "Mobile Engineering Capabilities",
    gridItems: [
      { icon: <Smartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Native iOS & Android Swift/Kotlin" },
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "React Native & Flutter Solutions" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Offline-First Local Data Syncing" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Secure Storage & Keychain Access" }
    ],
    whyList: [
      "Cross-Platform Code Reusability",
      "Pixel-Perfect UI/UX Implementation",
      "Device Hardware Feature Integration",
      "App Store & Google Play Optimization",
      "Zero-Latency API Request Caching"
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },
  "ui-ux-design": {
    heroTitle: "Premium UI/UX Design & User Research",
    heroSub: "We design user-centric interfaces that are beautiful, intuitive, and drive conversions.",
    featureTitle: "Human-Centered Design for Modern Interfaces",
    featureText: "Our designers combine behavioral psychology, research, and interactive prototyping to build interfaces that users love.",
    gridTitle: "Design Capabilities",
    gridItems: [
      { icon: <PenTool className="w-8 h-8 text-[#0F2C59]" />, text: "User Experience (UX) Research" },
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "User Interface (UI) Visual Design" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "High-Fidelity Prototyping" },
      { icon: <Briefcase className="w-8 h-8 text-[#0F2C59]" />, text: "Custom Component Design Systems" }
    ],
    whyList: [
      "Iterative Feedback Design Loops",
      "Unique Modern Brand Identity",
      "Accessible Interfaces (WCAG Aligned)",
      "Multi-Device Responsive Mockups",
      "Interactive Working Figma Prototypes"
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },
  "uiux-design": {
    heroTitle: "Premium UI/UX Design & User Research",
    heroSub: "We design user-centric interfaces that are beautiful, intuitive, and drive conversions.",
    featureTitle: "Human-Centered Design for Modern Interfaces",
    featureText: "Our designers combine behavioral psychology, research, and interactive prototyping to build interfaces that users love.",
    gridTitle: "Design Capabilities",
    gridItems: [
      { icon: <PenTool className="w-8 h-8 text-[#0F2C59]" />, text: "User Experience (UX) Research" },
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "User Interface (UI) Visual Design" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "High-Fidelity Prototyping" },
      { icon: <Briefcase className="w-8 h-8 text-[#0F2C59]" />, text: "Custom Component Design Systems" }
    ],
    whyList: [
      "Iterative Feedback Design Loops",
      "Unique Modern Brand Identity",
      "Accessible Interfaces (WCAG Aligned)",
      "Multi-Device Responsive Mockups",
      "Interactive Working Figma Prototypes"
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },

  "custom-software-solutions": {
    heroTitle: "Tailored Custom Software Solutions",
    heroSub: "Solve complex organizational challenges with bespoke software engineered from the ground up.",
    featureTitle: "Bespoke Enterprise Software Systems",
    featureText: "We design custom internal tools, business automation pipelines, and enterprise systems that align with your unique operational processes.",
    gridTitle: "Custom Capabilities",
    gridItems: [
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Internal Business Portals" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Workflow Automation Engines" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Legacy Software Modernization" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Specialized Enterprise Databases" }
    ],
    whyList: [
      "Custom Features Matching Workflows",
      "Highly Scalable Core Architectures",
      "Zero Shared Server Security Leak",
      "Integrations with Legacy Telemetry",
      "Agile Development Implementation"
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },

  // Sub-services (Cloud & Infrastructure)
  "cloud-migration": {
    heroTitle: "Seamless Enterprise Cloud Migration",
    heroSub: "Migrate your legacy servers and databases to secure, high-availability public or hybrid cloud environments.",
    featureTitle: "Zero-Downtime Cloud Migration Services",
    featureText: "Our certified cloud engineers map, prepare, and execute migration paths for complex enterprise systems without interrupting operational continuity.",
    gridTitle: "Migration Capabilities",
    gridItems: [
      { icon: <Cloud className="w-8 h-8 text-[#0F2C59]" />, text: "Lift & Shift Server Migration" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Application Containerization" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Hybrid Cloud Network Topologies" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Secure Database Replatforming" }
    ],
    whyList: [
      "Certified AWS/Azure/GCP Architects",
      "Zero-Downtime Migration Execution",
      "Full Data Integrity Validation",
      "Significant Server Budget Scaling",
      "Encrypted Transit Data Channels"
    ],
    parent: { name: "Cloud & Infrastructure Services", slug: "cloud-infrastructure-services" }
  },
  "infrastructure-as-code": {
    heroTitle: "Infrastructure as Code (IaC)",
    heroSub: "Automate provisioning, scaling, and configuration of your clouds with modular Terraform and Ansible scripts.",
    featureTitle: "Declarative, Automated Cloud Environments",
    featureText: "Eliminate manual configuration errors by defining your network topologies, load balancers, and clusters entirely as version-controlled code.",
    gridTitle: "IaC Capabilities",
    gridItems: [
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Terraform Provisioning Scripts" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Ansible Playbook Orchestration" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "GitOps Automated Pipelines" },
      { icon: <Cloud className="w-8 h-8 text-[#0F2C59]" />, text: "Multi-Cloud Modular Configs" }
    ],
    whyList: [
      "Fully Version-Controlled Infrastructure",
      "Highly Repeatable Environments",
      "Accelerated Disaster Recovery Setup",
      "Zero Cloud Configuration Drift",
      "Pre-Deployment Security Scans"
    ],
    parent: { name: "Cloud & Infrastructure Services", slug: "cloud-infrastructure-services" }
  },
  "network-virtualization": {
    heroTitle: "Next-Gen Network Virtualization",
    heroSub: "Decouple network control and hardware with high-performance software-defined networking (SDN).",
    featureTitle: "Secure, Flexible Virtual Networks",
    featureText: "Design virtual firewalls, routers, switches, and load balancers to dramatically lower hardware overhead and increase network agility.",
    gridTitle: "Virtualization Capabilities",
    gridItems: [
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Software-Defined Networking (SDN)" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Virtual Routing & Filtering Gates" },
      { icon: <Shield className="w-8 h-8 text-[#0F2C59]" />, text: "Micro-Segmented Security Zones" },
      { icon: <Cloud className="w-8 h-8 text-[#0F2C59]" />, text: "SD-WAN Corporate Topologies" }
    ],
    whyList: [
      "Elimination of Costly Hardware Routers",
      "Agile Software Network Provisioning",
      "Localized Microsegment Threat Isolation",
      "Intelligent Failover Server Routing",
      "Centralized Administration Hub"
    ],
    parent: { name: "Cloud & Infrastructure Services", slug: "cloud-infrastructure-services" }
  },
  "compute-optimization": {
    heroTitle: "Compute Optimization & Cost Reduction",
    heroSub: "Maximize compute utilization, tune node scaling, and cut cloud bill overhead up to 50%.",
    featureTitle: "High-Performance, Low-Cost Compute",
    featureText: "We audit your virtual machines, container sizing, and serverless compute pipelines to match resource allocations with actual processing demands.",
    gridTitle: "Compute Capabilities",
    gridItems: [
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Kubernetes Horizontal Pod Scaling" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Serverless Resource Orchestration" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Spot Instance Bid Optimization" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Detailed CPU/RAM Profile Logs" }
    ],
    whyList: [
      "Substantial Infrastructure Savings",
      "Accelerated Application Load Times",
      "Automated Capacity Scaling Policies",
      "Right-Sized Machine Deployments",
      "Continuous Optimization Tuning"
    ],
    parent: { name: "Cloud & Infrastructure Services", slug: "cloud-infrastructure-services" }
  },

  // Sub-services (Data & Database)
  "database-administration": {
    heroTitle: "Enterprise Database Administration (DBA)",
    heroSub: "Ensure maximum performance, automated replication, and zero data loss for relational and NoSQL databases.",
    featureTitle: "Certified Database Support & Management",
    featureText: "Our expert administrators configure backups, maintain read-replicas, manage connection pools, and secure credentials for critical databases.",
    gridTitle: "DBA Capabilities",
    gridItems: [
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Query Tuning & Indexing Rules" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Read-Replica Sync & Clustering" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Automated Snapshot Recovery" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Credential Access Control Audits" }
    ],
    whyList: [
      "High Uptime Transaction Speeds",
      "Proven Zero Data Loss Roadmaps",
      "Optimal Thread Pool Management",
      "Strict Server Firewall Shielding",
      "24/7 Remote DBA Surveillance"
    ],
    parent: { name: "Data & Database Services", slug: "data-database-services" }
  },
  "data-warehousing": {
    heroTitle: "Scalable Data Warehousing & Analytics",
    heroSub: "Consolidate scattered transactional databases into a unified, high-speed warehouse for executive intelligence.",
    featureTitle: "Single Source of Analytical Truth",
    featureText: "We architect high-performance warehouses on Snowflake, Redshift, or BigQuery to enable sub-second analytical reporting on petabytes of data.",
    gridTitle: "Warehousing Capabilities",
    gridItems: [
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Snowflake & BigQuery Deployments" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Columnar Analytical Storage Maps" },
      { icon: <Cloud className="w-8 h-8 text-[#0F2C59]" />, text: "Structured Data Lake Design" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "BI Tool Connect Integration" }
    ],
    whyList: [
      "Sub-Second Analytical Calculations",
      "Centralized Business Analytics Hub",
      "Independent Compute & Storage Scaling",
      "Optimal Cost Data Tiering Policies",
      "GDPR Masked Personal Data Columns"
    ],
    parent: { name: "Data & Database Services", slug: "data-database-services" }
  },
  "etl-pipelines": {
    heroTitle: "High-Throughput ETL & ELT Pipelines",
    heroSub: "Extract, transform, and load massive data streams in real-time with zero data loss or latency.",
    featureTitle: "Robust, Event-Driven Data Integration",
    featureText: "Connect disparate APIs, files, and databases with automated pipelines that clean, structure, and stream data to your analytics layers.",
    gridTitle: "ETL Capabilities",
    gridItems: [
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Real-Time Streaming Systems" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "High-Volume Batch Pipelines" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Schema Registry & Validations" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Apache Kafka Telemetry Brokers" }
    ],
    whyList: [
      "Real-Time Analytics Availability",
      "Automated Error Capture & Alerts",
      "Strict Schema Integrity Checks",
      "Highly Scalable Stream Servers",
      "Simplified API Data Extraction"
    ],
    parent: { name: "Data & Database Services", slug: "data-database-services" }
  },
  "data-governance": {
    heroTitle: "Data Governance, Auditing & Privacy",
    heroSub: "Comply with global regulations like GDPR, HIPAA, and CCPA by implementing strict data access controls.",
    featureTitle: "Compliant, Documented Data Assets",
    featureText: "We help organizations catalog data assets, audit access histories, mask sensitive user details, and satisfy regulatory criteria.",
    gridTitle: "Governance Capabilities",
    gridItems: [
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "User Access History Audits" },
      { icon: <Shield className="w-8 h-8 text-[#0F2C59]" />, text: "Sensitive Column Data Masking" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Regulatory Compliance Alignments" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Data Quality Metrics Tracking" }
    ],
    whyList: [
      "Avoidance of Regulatory Fines",
      "Clear Visual Data Lineage Mapping",
      "Fine-Grained Column Accessibility",
      "Improved Integrity of Business Logs",
      "Standardized Data Policies"
    ],
    parent: { name: "Data & Database Services", slug: "data-database-services" }
  },

  // Sub-services (AI & IoT Solutions)
  "predictive-maintenance": {
    heroTitle: "AI-Driven Predictive Maintenance",
    heroSub: "Identify hardware degradation before system failures disrupt operations.",
    featureTitle: "Continuous Asset Monitoring & Modeling",
    featureText: "We train deep learning models on sensor telemetry to forecast machinery decay, automating preemptive support alerts.",
    gridTitle: "Predictive Capabilities",
    gridItems: [
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Real-Time Sensor Telemetry Logs" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Anomaly Detection Neural Nets" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Preemptive Warning Dispatchers" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Historical System Failure Sets" }
    ],
    whyList: [
      "Dramatic Drop in System Downtime",
      "Optimized Asset Lifetimes",
      "Automated Warning Dispatches",
      "Minimized Physical Inspection Costs",
      "Accurate Failure Time Windows"
    ],
    parent: { name: "AI & IoT Solutions", slug: "ai-iot-solutions" }
  },
  "smart-edge-computing": {
    heroTitle: "Intelligent Edge Computing & Clusters",
    heroSub: "Process machine learning inferences locally at the edge to bypass network latency.",
    featureTitle: "Localized Edge Processing Topologies",
    featureText: "Deploy lightweight neural classifiers directly on localized hardware nodes, reducing central bandwidth requirements up to 80%.",
    gridTitle: "Edge Capabilities",
    gridItems: [
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Lightweight Inference Models" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Distributed Gateway Architectures" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Local Event Cache Systems" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Dynamic Node Sync Algorithms" }
    ],
    whyList: [
      "Sub-Millisecond Processing Speeds",
      "Massive Bandwidth Budget Savings",
      "Offline Standalone Operations",
      "Zero Central Database Exposure",
      "Modular Network Expansion"
    ],
    parent: { name: "AI & IoT Solutions", slug: "ai-iot-solutions" }
  },
  "computer-vision-auditing": {
    heroTitle: "Computer Vision & Quality Audits",
    heroSub: "Automate physical component checks and security scans with deep learning vision.",
    featureTitle: "Automated Visual Classification Systems",
    featureText: "Our custom CNN models analyze high-definition optical streams to isolate defects, track components, and verify security protocols.",
    gridTitle: "Vision Capabilities",
    gridItems: [
      { icon: <MonitorSmartphone className="w-8 h-8 text-[#0F2C59]" />, text: "Defect Isolation Classifiers" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Optical Character Readers (OCR)" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Zero-Trust Physical Boundary Scans" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Camera Network Integrations" }
    ],
    whyList: [
      "Continuous High-Speed Audit Checks",
      "99.8% Visual Defect Capture Rate",
      "Instant Alarm Trigger Dispatching",
      "Low Operational Manual Overhead",
      "Detailed Physical Event Reports"
    ],
    parent: { name: "AI & IoT Solutions", slug: "ai-iot-solutions" }
  },
  "iot-gateway-topologies": {
    heroTitle: "Secure IoT Gateway Topologies",
    heroSub: "Scale device deployment with secure hardware gateway controls and encryption.",
    featureTitle: "Robust, Secure Edge Connections",
    featureText: "We configure encrypted hardware connections and telemetry brokers to route messages between devices and cloud layers.",
    gridTitle: "Gateway Capabilities",
    gridItems: [
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Encrypted Telemetry Broker Routing" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Device Certificate Registries" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Firmware Remote Updates (OTA)" },
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Message Queue Load Balancers" }
    ],
    whyList: [
      "Tamper-Proof Device Authentication",
      "Scalable Telemetry Message Flows",
      "Secure Over-the-Air Updates",
      "No Shared Network Threat Leak",
      "Compliant Device Logging"
    ],
    parent: { name: "AI & IoT Solutions", slug: "ai-iot-solutions" }
  },

  // Sub-services (Cybersecurity)
  "threat-intelligence": {
    heroTitle: "Proactive Cybersecurity Threat Intelligence",
    heroSub: "Detect, block, and mitigate threat vectors using real-time threat intelligence feeds and AI engines.",
    featureTitle: "Continuous Threat Landscape Auditing",
    featureText: "We monitor global darknet activities, zero-day vulnerabilities, and anomalous system behaviors to proactively secure your perimeter.",
    gridTitle: "Intelligence Capabilities",
    gridItems: [
      { icon: <Shield className="w-8 h-8 text-[#0F2C59]" />, text: "Vulnerability Feeds Tracking" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "SIEM Alert Automations" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Anomalous Incident Analysis" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "AI Incident Orchestration Layers" }
    ],
    whyList: [
      "Proactive Firewall Mitigation",
      "Shortened Alert Containment Windows",
      "Immediate Incident Alert Dispatches",
      "Certified Security Analyst Teams",
      "Tailored System Threat Modeling"
    ],
    parent: { name: "Cybersecurity Services", slug: "cybersecurity-services" }
  },
  "zero-trust-integration": {
    heroTitle: "Zero-Trust Architecture Integration",
    heroSub: "Never trust, always verify. Secure your corporate assets by verifying every request, user, and device.",
    featureTitle: "State-of-the-Art Perimeterless Security",
    featureText: "We eliminate outdated network perimeter trust models, implementing micro-segmentation, identity-based access, and real-time posture validation.",
    gridTitle: "Zero-Trust Capabilities",
    gridItems: [
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Identity & Access Management (IAM)" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Device Health Attestation Scans" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Micro-Segmented Cloud Topologies" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Corporate Single Sign-On (SSO)" }
    ],
    whyList: [
      "Elimination of Lateral Intrusion Risk",
      "Multi-Factor Posture Check Gates",
      "Fully Secure Remote Employee Access",
      "Unified Identity Control Panels",
      "Simplified Compliance Logging Checks"
    ],
    parent: { name: "Cybersecurity Services", slug: "cybersecurity-services" }
  },
  "network-defense": {
    heroTitle: "Next-Generation Network Defense",
    heroSub: "Secure your physical and virtual network pipelines with advanced firewalls and intrusion prevention systems.",
    featureTitle: "Intelligent, Real-Time Network Protection",
    featureText: "We deploy and manage next-generation firewalls (NGFW), intrusion prevention systems (IPS), and web application firewalls (WAF).",
    gridTitle: "Defense Capabilities",
    gridItems: [
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Intrusion Prevention Systems (IPS)" },
      { icon: <Shield className="w-8 h-8 text-[#0F2C59]" />, text: "Web Application Firewalls (WAF)" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "DDoS Attack Traffic Isolation" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Secure Web Filtering Gates" }
    ],
    whyList: [
      "Sub-Second Packet Header Checks",
      "Highly Optimized WAF Policy Lists",
      "Instant Mitigation of Bulk Botnets",
      "Analysis of SSL Encrypted Streams",
      "24/7 Security Operations NOC"
    ],
    parent: { name: "Cybersecurity Services", slug: "cybersecurity-services" }
  },
  "security-auditing": {
    heroTitle: "Comprehensive Security Auditing & Pentesting",
    heroSub: "Identify software and network vulnerabilities before malicious actors do with comprehensive pentesting.",
    featureTitle: "Rigorous Security Assessments",
    featureText: "Our certified ethical hackers perform white-box and black-box penetration testing on applications, APIs, and cloud infrastructures.",
    gridTitle: "Auditing Capabilities",
    gridItems: [
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Ethical Penetration Testing" },
      { icon: <PenTool className="w-8 h-8 text-[#0F2C59]" />, text: "Source Code Security Checks" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "API Vulnerability Scanning" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Regulatory Compliance Audit Align" }
    ],
    whyList: [
      "Licensed Ethical Cyber Experts",
      "Detailed Remediate Fix Blueprints",
      "Strict No False-Positive Claims",
      "Board-Level Compliance Reports",
      "Post-Patch Vulnerability Verifications"
    ],
    parent: { name: "Cybersecurity Services", slug: "cybersecurity-services" }
  },

  // Sub-services (Managed IT & Consulting)
  "cio-advisory-support": {
    heroTitle: "CIO Advisory & Tech Strategy",
    heroSub: "Align technology spend directly with board-level business goals.",
    featureTitle: "Seasoned Executive Technical Advisory",
    featureText: "Our senior advisors evaluate your existing architectural layouts, identify risk domains, and build multi-year digital roadmap guidelines.",
    gridTitle: "Advisory Capabilities",
    gridItems: [
      { icon: <Briefcase className="w-8 h-8 text-[#0F2C59]" />, text: "Digital Roadmap Formulations" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Legacy Risk Domain Auditing" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Regulatory IT Policy Writing" },
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Vendor Contract Assessments" }
    ],
    whyList: [
      "Experienced Board-Level Advisors",
      "Clear Technological Milestones",
      "Independent Vendor Neutrality",
      "Minimized Unused Software Costs",
      "Enterprise Scale Continuity Plans"
    ],
    parent: { name: "Managed IT & Consulting", slug: "managed-it-consulting" }
  },
  "it-budget-planning": {
    heroTitle: "IT Budget Planning & Auditing",
    heroSub: "Right-size your software licenses and infrastructure capital to increase margins.",
    featureTitle: "Rigorous Financial Technology Audits",
    featureText: "We analyze database licensing, cloud instances, support contracts, and SaaS subscriptions to remove waste and optimize ROI.",
    gridTitle: "Budgeting Capabilities",
    gridItems: [
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Cloud Bill Resource Auditing" },
      { icon: <Database className="w-8 h-8 text-[#0F2C59]" />, text: "Database Licensing Optimization" },
      { icon: <Briefcase className="w-8 h-8 text-[#0F2C59]" />, text: "Vendor Spend Consolidations" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "ROI Calculations & Reports" }
    ],
    whyList: [
      "Average 25% Reduction in IT Waste",
      "Optimized Cloud License Caps",
      "Fact-Based Vendor Negotiation Logs",
      "Clear Tech Return Mapped Metrics",
      "Simplified Expense Tracking"
    ],
    parent: { name: "Managed IT & Consulting", slug: "managed-it-consulting" }
  },
  "24-7-remote-monitoring": {
    heroTitle: "24/7 Remote Monitoring & NOC Support",
    heroSub: "Maintain uninterrupted system uptime with continuous telemetry monitoring.",
    featureTitle: "Proactive Remote Operations NOC Support",
    featureText: "We configure monitoring metrics across servers, databases, and networks, reacting instantly to any anomaly alerts.",
    gridTitle: "Monitoring Capabilities",
    gridItems: [
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Continuous Server Metrics Scans" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Real-Time Network Latency Logs" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Instant Incident Alert Dispatchers" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Database Health System Checks" }
    ],
    whyList: [
      "Uninterrupted Operation Continuity",
      "Sub-Minute Incident Triage Times",
      "Automated System Check Routines",
      "Detailed Monthly Performance Files",
      "Proactive Outage Avoidances"
    ],
    parent: { name: "Managed IT & Consulting", slug: "managed-it-consulting" }
  },
  "247-remote-monitoring": {
    heroTitle: "24/7 Remote Monitoring & NOC Support",
    heroSub: "Maintain uninterrupted system uptime with continuous telemetry monitoring.",
    featureTitle: "Proactive Remote Operations NOC Support",
    featureText: "We configure monitoring metrics across servers, databases, and networks, reacting instantly to any anomaly alerts.",
    gridTitle: "Monitoring Capabilities",
    gridItems: [
      { icon: <Server className="w-8 h-8 text-[#0F2C59]" />, text: "Continuous Server Metrics Scans" },
      { icon: <Network className="w-8 h-8 text-[#0F2C59]" />, text: "Real-Time Network Latency Logs" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Instant Incident Alert Dispatchers" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Database Health System Checks" }
    ],
    whyList: [
      "Uninterrupted Operation Continuity",
      "Sub-Minute Incident Triage Times",
      "Automated System Check Routines",
      "Detailed Monthly Performance Files",
      "Proactive Outage Avoidances"
    ],
    parent: { name: "Managed IT & Consulting", slug: "managed-it-consulting" }
  },
  "staff-augmentation": {
    heroTitle: "IT Staff Augmentation & Expert Dispatch",
    heroSub: "Scale your engineering capability with specialized technicians and developers.",
    featureTitle: "Flexible Technical Team Scaling",
    featureText: "Access our pre-vetted pool of database administrators, cybersecurity analysts, and cloud developers to accelerate critical timelines.",
    gridTitle: "Augmentation Capabilities",
    gridItems: [
      { icon: <Users className="w-8 h-8 text-[#0F2C59]" />, text: "Pre-Vetted Database Developers" },
      { icon: <ShieldCheck className="w-8 h-8 text-[#0F2C59]" />, text: "Cybersecurity Analyst Dispatches" },
      { icon: <Cpu className="w-8 h-8 text-[#0F2C59]" />, text: "Cloud Architect Integrations" },
      { icon: <Settings className="w-8 h-8 text-[#0F2C59]" />, text: "Flexible Scaling Contracts" }
    ],
    whyList: [
      "Immediate Expert Engineer Matches",
      "Zero Recruiting Overhead Waste",
      "Fully Compliant Hires and Checks",
      "Seamless Workflow Integration",
      "Scalable Contract Durations"
    ],
    parent: { name: "Managed IT & Consulting", slug: "managed-it-consulting" }
  }
};

// ----------------------------------------------------------------------
// Component Render
// ----------------------------------------------------------------------

export default function ServicesDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Fallback to default if slug not in dictionary
  const content = serviceData[slug] || {
    ...defaultContent,
    heroTitle: `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Services`,
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Hero Section (Colorful Gradient Background) */}
      <section className="relative w-full bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] pt-36 pb-28 md:pt-48 md:pb-36 px-6 overflow-hidden">
        {/* Decorative Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        {/* Subtle Red Glow Accent */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#D32F2F]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          
          {content.parent && (
            <Link 
              href={`/services/${content.parent.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 text-[10px] font-bold tracking-widest uppercase transition-all mb-8 backdrop-blur"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Back to {content.parent.name}</span>
            </Link>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {content.heroTitle}
          </h1>
          <p className="text-sm md:text-lg text-slate-300 font-medium max-w-3xl leading-relaxed">
            {content.heroSub}
          </p>
        </div>
      </section>

      {/* 2. Feature Section (Left Text, Right Illustration) */}
      <section className="w-full bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6 lg:pr-10">
            <h2 className="text-2xl md:text-4xl font-black text-[#0F2C59] leading-tight">
              {content.featureTitle}
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
              {content.featureText}
            </p>
          </div>

          <div className="relative w-full aspect-video md:aspect-[4/3] flex items-center justify-center">
            {/* Abstract Graphic representing the illustration in the mockup */}
            <div className="relative w-full max-w-md h-full bg-[#F0F4F7] rounded-3xl flex items-center justify-center overflow-hidden shadow-lg border border-slate-100">
              {/* Decorative elements representing app UI */}
              <div className="absolute top-10 left-10 w-24 h-32 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col p-2 gap-2 transform -rotate-6">
                <div className="w-full h-8 bg-blue-100 rounded" />
                <div className="w-full h-3 bg-slate-100 rounded" />
                <div className="w-3/4 h-3 bg-slate-100 rounded" />
              </div>
              <div className="absolute bottom-10 right-10 w-32 h-24 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col p-3 gap-2 transform rotate-3">
                 <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100" />
                    <div className="flex-1 flex flex-col gap-1 justify-center">
                      <div className="w-full h-2 bg-slate-100 rounded" />
                      <div className="w-1/2 h-2 bg-slate-100 rounded" />
                    </div>
                 </div>
              </div>
              
              {/* Central figure abstract */}
              <div className="z-10 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border border-slate-100">
                 <MonitorSmartphone className="w-12 h-12 text-[#D32F2F]" />
                 <div className="w-20 h-2 bg-slate-200 rounded-full" />
                 <div className="w-12 h-2 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="w-full bg-[#FAFAFA] py-20 md:py-28 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59] mb-4">
              {content.gridTitle}
            </h2>
            <div className="w-16 h-1 bg-[#D32F2F] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {content.gridItems.map((item, idx) => {
              // If it's already a sub-service, keep cards static, otherwise link to sub-service page
              if (content.parent) {
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center gap-6 min-h-[220px]">
                    <div className="w-16 h-16 rounded-xl bg-[#F0F4F7] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0F2C59]">
                      {item.text}
                    </h3>
                  </div>
                );
              }

              const itemSlug = getServiceSlug(item.text);
              return (
                <Link 
                  href={`/services/${itemSlug}`} 
                  key={idx} 
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-center justify-center text-center gap-6 min-h-[220px] hover:border-primary-500/20 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#F0F4F7] group-hover:bg-[#000072]/10 group-hover:text-[#000072] flex items-center justify-center transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2C59] group-hover:text-[#000072] transition-colors duration-300">
                    {item.text}
                  </h3>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="w-full bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C59]">
              Why Choose <span className="text-[#D32F2F]">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
            
            {/* Left: Numbered List */}
            <div className="flex flex-col gap-6">
              {content.whyList.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-white p-4 rounded-xl hover:bg-[#F0F4F7] transition-colors duration-300 border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    <span className="text-xl font-black text-[#0F2C59]">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-700">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Graphic Map / Nodes */}
            <div className="relative w-full h-[400px] flex items-center justify-center">
              
              {/* Central Phone Outline */}
              <div className="relative w-[200px] h-[360px] border-[6px] border-slate-300 rounded-[2.5rem] bg-white flex flex-col items-center z-10 shadow-lg">
                <div className="w-16 h-1.5 bg-slate-300 rounded-full mt-4" />
                <div className="flex-1 w-full px-2 py-4">
                   <div className="w-full h-full border-2 border-slate-100 rounded-xl bg-slate-50" />
                </div>
                <div className="w-12 h-12 border-4 border-slate-200 rounded-full mb-4" />
              </div>

              {/* Connected Nodes */}
              <div className="absolute inset-0 z-0 hidden md:block">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
                
                {/* Node Points */}
                <div className="absolute top-[20%] right-[20%] w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                   <div className="w-3 h-3 bg-blue-400 rounded-full" />
                </div>
                <div className="absolute top-[50%] right-[10%] w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                   <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                </div>
                <div className="absolute top-[80%] right-[15%] w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                   <div className="w-3 h-3 bg-[#D32F2F] rounded-full" />
                </div>
              </div>
              
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
