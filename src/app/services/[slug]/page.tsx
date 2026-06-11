"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { 
  MonitorSmartphone, Smartphone, PenTool, TerminalSquare, 
  Cloud, Server, Database, Shield, Cpu, Network, Briefcase, 
  Settings, Users, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight,
  Activity, Star, Sparkles, Building2, Zap, Rocket, Plus, Minus,
  Lock, RefreshCw, Layers, HelpCircle, HardDrive
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// ----------------------------------------------------------------------
// Dynamic Content Mapping for Service Pages
// ----------------------------------------------------------------------

type OutcomeItem = {
  title: string;
  desc: string;
  icon: string;
};

type TechnologyItem = {
  name: string;
  category: string;
};

type TimelineStep = {
  num: string;
  title: string;
  desc: string;
};

type DiagramLayer = {
  title: string;
  color: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type CaseStudyItem = {
  title: string;
  desc: string;
  metrics: string[];
  techs: string[];
  result: string;
};

type ServiceContent = {
  heroTitle: string;
  heroSub: string;
  featureTitle: string;
  featureText: string;
  gridTitle: string;
  gridItems: { icon: React.ReactNode; text: string; desc?: string }[];
  whyList: string[];
  outcomes: OutcomeItem[];
  technologies: TechnologyItem[];
  timeline: TimelineStep[];
  diagram: DiagramLayer[];
  faqs: FAQItem[];
  caseStudies: CaseStudyItem[];
  stats: { value: string; label: string }[];
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

const defaultOutcomes: OutcomeItem[] = [
  { title: "Reduce Infrastructure Cost", desc: "Cut resource waste up to 35% through precise sizing audits.", icon: "💰" },
  { title: "Improve System Performance", desc: "Achieve fast processing response times and low database latency.", icon: "⚡" },
  { title: "Enhance Enterprise Security", desc: "Enforce zero-trust boundaries and multi-layer encryption controls.", icon: "🔒" },
  { title: "Scale Seamlessly", desc: "Handle high transaction volumes without server outages or latency.", icon: "📈" },
  { title: "Maximize Efficiency", desc: "Automate repetitive deployment tasks and monitoring checks.", icon: "⚙️" },
  { title: "Drive Digital Growth", desc: "Modernize legacy database models to integrate with modern web nodes.", icon: "🚀" }
];

const defaultTechs: TechnologyItem[] = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Amazon Web Services (AWS)", category: "Cloud" },
  { name: "Terraform", category: "DevOps" },
  { name: "Kubernetes", category: "Containers" }
];

const defaultTimeline: TimelineStep[] = [
  { num: "01", title: "Assessment", desc: "Evaluating current software stacks and codebase dependencies." },
  { num: "02", title: "Planning", desc: "Formulating workflow diagrams and implementation blueprints." },
  { num: "03", title: "Development", desc: "Writing optimized modules and deploying initial test gates." },
  { num: "04", title: "Validation", desc: "Executing automated quality checks and schema testing." },
  { num: "05", title: "Deployment", desc: "Launching core container pools with active load balancers." },
  { num: "06", title: "Managed NOC", desc: "Routing system analytics to our 24/7 technical monitoring." }
];

const defaultDiagram: DiagramLayer[] = [
  { title: "Global CDN & DNS Routing", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
  { title: "Web Application Firewall (WAF)", color: "bg-rose-500/10 border-rose-400 text-rose-800" },
  { title: "Auto-Scaling Container Instances", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
  { title: "Caching & Message Queues", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
  { title: "Multi-Zone Distributed Database", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" }
];

const defaultFAQs: FAQItem[] = [
  { q: "What is your project development methodology?", a: "We employ an Agile Scrum framework, organizing timelines into bi-weekly sprints to ensure transparent feedback and regular build reviews." },
  { q: "How do you guarantee the security of our application?", a: "Every repository is audited against OWASP Top 10 vulnerabilities, compiled behind secure WAFs, and utilizes fine-grained IAM controls." },
  { q: "Do you provide post-deployment support?", a: "Yes. We offer continuous SLA monitoring, patch deployments, server health reviews, and custom database optimization plans." }
];

const defaultCaseStudies: CaseStudyItem[] = [
  {
    title: "Global Supply Chain Automation",
    desc: "Migrated legacy logistic tools into a multi-tenant web application backed by PostgreSQL database sets.",
    metrics: ["40% Faster Order Process", "Zero Outage Deployment"],
    techs: ["Next.js", "Node.js", "Docker"],
    result: "Operations run securely with automated inventory tracking and low api response times."
  },
  {
    title: "FinTech Transaction Gateway",
    desc: "Designed an offline-first mobile banking application with end-to-end biometric verification keys.",
    metrics: ["99.99% Uptime Verified", "3x User Engagement Peak"],
    techs: ["Flutter", "GraphQL", "AWS"],
    result: "Smooth transaction logs that synchronize instantly once internet connection is validated."
  }
];

const defaultStats = [
  { value: "450+", label: "Projects Completed" },
  { value: "99.9%", label: "System Uptime" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" }
];

const defaultContent: ServiceContent = {
  heroTitle: "Empowering Businesses Through Smart Applications",
  heroSub: "We build powerful, scalable, and secure applications that accelerate your digital transformation journey.",
  featureTitle: "Transforming Ideas Into Intelligent Applications",
  featureText: "Our team blends innovation, technology, and experience to deliver high-performing, user-focused applications.",
  gridTitle: "Our Application Services",
  gridItems: [
    { icon: <MonitorSmartphone className="w-6 h-6" />, text: "Web App Development", desc: "Create modern web applications using premium React and Next.js structures." },
    { icon: <Smartphone className="w-6 h-6" />, text: "Mobile App Development", desc: "Build optimized native and cross-platform mobile apps for iOS and Android." },
    { icon: <PenTool className="w-6 h-6" />, text: "UI/UX Design", desc: "Design interfaces aligned with accessibility guidelines that maximize conversions." },
    { icon: <TerminalSquare className="w-6 h-6" />, text: "Custom Software Solutions", desc: "Engineer tailored systems to automate workflow pipelines." }
  ],
  whyList: [
    "End-to-End Technical Expertise",
    "Agile Software Development Methodology",
    "Tailored Enterprise System Designs",
    "ISO 27001 Security Standard Audits",
    "24/7 System Health NOC Support"
  ],
  outcomes: defaultOutcomes,
  technologies: defaultTechs,
  timeline: defaultTimeline,
  diagram: defaultDiagram,
  faqs: defaultFAQs,
  caseStudies: defaultCaseStudies,
  stats: defaultStats
};

const serviceData: Record<string, ServiceContent> = {
  "application-services": defaultContent,
  
  "web-app-development": {
    heroTitle: "High-Performance Web App Development",
    heroSub: "Build fast, secure, and responsive web applications customized to your enterprise scale.",
    featureTitle: "Custom Web Solutions Engineered for Infinite Scale",
    featureText: "Our development team utilizes Next.js, React, Node.js, and modern APIs to deploy applications featuring fast load speeds, clean modular codes, and high reliability.",
    gridTitle: "Web Development Capabilities",
    gridItems: [
      { icon: <Cpu className="w-6 h-6" />, text: "Next.js Framework Optimization", desc: "Maximize page load speeds and SEO indexing with modern server-side rendering configurations." },
      { icon: <MonitorSmartphone className="w-6 h-6" />, text: "Single Page Apps (SPA)", desc: "Build dynamic, app-like experiences utilizing React and robust routing frameworks." },
      { icon: <Server className="w-6 h-6" />, text: "Multi-Tenant SaaS Architectures", desc: "Isolate client workspaces securely behind unified databases and routing networks." },
      { icon: <Smartphone className="w-6 h-6" />, text: "Progressive Web Apps (PWA)", desc: "Enable offline functionality, push notifications, and home screen installation files." }
    ],
    whyList: [
      "Custom Typography & Design System Alignment",
      "Core Web Vitals & LightSpeed Page Audits",
      "Scalable RESTful & GraphQL API Integrations",
      "Automated CI/CD Deployment Orchestration",
      "Rigorous Vulnerability & Code Security Scans"
    ],
    outcomes: [
      { title: "Core Web Vitals Optimization", desc: "Achieve Google Lighthouse scores above 95 with static assets pre-rendering.", icon: "⚡" },
      { title: "Reduced Cloud Bills", desc: "Optimize server resources by using serverless function modules and CDNs.", icon: "💰" },
      { title: "Enterprise-Grade Security", desc: "Mitigate SQL injections, XSS attacks, and CSRF attempts dynamically.", icon: "🔒" },
      { title: "High Concurrent Traffic", desc: "Scale frontend nodes horizontally to support thousands of active visitors.", icon: "📈" },
      { title: "Simplified Integrations", desc: "Connect ERPs, CRM APIs, and user identity platforms with custom bridges.", icon: "🔌" },
      { title: "Lower Code Maintenance", desc: "Write clean TypeScript structures to minimize runtime console exceptions.", icon: "⚙️" }
    ],
    technologies: [
      { name: "Next.js", category: "Frontend Framework" },
      { name: "React.js", category: "UI Library" },
      { name: "Node.js (Express)", category: "Backend Runtime" },
      { name: "TypeScript", category: "Type Security" },
      { name: "PostgreSQL", category: "Relational Database" },
      { name: "Tailwind CSS", category: "Styling Utility" },
      { name: "Docker", category: "Containerization" },
      { name: "AWS Cloudfront", category: "Asset CDN" }
    ],
    timeline: [
      { num: "01", title: "UX Scoping", desc: "Creating functional wireframes and database schema diagrams." },
      { num: "02", title: "API Design", desc: "Writing clean OpenAPI specifications and server routes." },
      { num: "03", title: "Frontend Build", desc: "Compiling responsive web pages matching Figma files." },
      { num: "04", title: "Backend Assembly", desc: "Linking business logic databases and encryption systems." },
      { num: "05", title: "Load Testing", desc: "Simulating heavy traffic spikes to verify server stability." },
      { num: "06", title: "Deployment", desc: "Releasing production bundles on AWS with active CDN caches." }
    ],
    diagram: [
      { title: "Global Request Entry (Route 53)", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
      { title: "Static Assets (AWS S3 & CloudFront Cache)", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
      { title: "Dynamic Web App Tier (Next.js Server Node)", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
      { title: "Relational Database Cluster (PostgreSQL Aurora)", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" }
    ],
    faqs: [
      { q: "Why do you recommend Next.js over normal React?", a: "Next.js offers Server-Side Rendering (SSR) and Static Site Generation (SSG), which drastically improve search engine crawler indexing and page response times." },
      { q: "How do you handle data security in web apps?", a: "We enforce HTTPS protocols, encrypt credentials using bcrypt hashes, write strict CORS rules, and deploy web applications behind cloud firewalls." },
      { q: "Can you modernize a legacy web application?", a: "Yes. We analyze legacy systems, map data structures, and rebuild the application onto modern containers while preserving existing database logs." }
    ],
    caseStudies: [
      {
        title: "Retail Hub Multi-Tenant Platform",
        desc: "Designed and implemented a Next.js e-commerce portal linking local warehouses with active payment endpoints.",
        metrics: ["3.2s Page Load Cut to 0.8s", "45% Customer Signup Rise"],
        techs: ["Next.js", "GraphQL", "PostgreSQL"],
        result: "The new platform handles seasonal shopping rushes without server latency alerts."
      }
    ],
    stats: [
      { value: "180+", label: "Web Apps Launched" },
      { value: "< 1s", label: "Average Response Time" },
      { value: "95+", label: "Lighthouse Score" },
      { value: "99.99%", label: "Uptime Guaranteed" }
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },

  "mobile-app-development": {
    heroTitle: "Native & Cross-Platform Mobile Apps",
    heroSub: "Deliver fluid mobile experiences on iOS and Android with optimized native performance.",
    featureTitle: "Mobile Applications Built for Engagement & Performance",
    featureText: "We develop native Swift/Kotlin systems and cross-platform Flutter/React Native solutions that engage users, run offline, and sync telemetry instantly.",
    gridTitle: "Mobile Development Capabilities",
    gridItems: [
      { icon: <Smartphone className="w-6 h-6" />, text: "Native iOS & Android Swift/Kotlin", desc: "Build highly optimized native codes with direct access to hardware APIs." },
      { icon: <MonitorSmartphone className="w-6 h-6" />, text: "React Native & Flutter Solutions", desc: "Write reusable single-codebase apps for iOS and Android platforms." },
      { icon: <Database className="w-6 h-6" />, text: "Offline-First Local Data Syncing", desc: "Cache server data locally, syncing seamlessly when connectivity restores." },
      { icon: <ShieldCheck className="w-6 h-6" />, text: "Secure Device Storage Integration", desc: "Store personal keys and tokens behind biometric locks and keychains." }
    ],
    whyList: [
      "Smooth 120Hz Layout Transitions & Gestures",
      "Optimized App Bundle File Size Limits",
      "App Store & Google Play Console Submission Management",
      "Secure Encrypted Push Notification Delivery",
      "Device Camera, GPS, & Bluetooth Sensor Linking"
    ],
    outcomes: [
      { title: "Fluid User Journey", desc: "Guarantee high-performance render speeds using native UI engines.", icon: "📱" },
      { title: "Offline System Access", desc: "Allow users to read and draft logs without active network signals.", icon: "⚡" },
      { title: "Biometric Data Security", desc: "Verify identities using FaceID and Android fingerprint APIs.", icon: "🔒" },
      { title: "Minimized Code Splitting", desc: "Deploy React Native systems sharing 85% of logic codebase.", icon: "⚙️" },
      { title: "Accurate GPS Tracking", desc: "Integrate mapping APIs to trace device routes efficiently.", icon: "📍" },
      { title: "App Store Approvals", desc: "Pass store audit procedures successfully on initial submissions.", icon: "🏆" }
    ],
    technologies: [
      { name: "Swift (iOS)", category: "Native Language" },
      { name: "Kotlin (Android)", category: "Native Language" },
      { name: "Flutter", category: "Cross-Platform Framework" },
      { name: "React Native", category: "Cross-Platform Framework" },
      { name: "SQLite / Room", category: "Local Cache Database" },
      { name: "Firebase (FCM)", category: "Push Alerts Gateway" },
      { name: "GraphQL", category: "Data Sync API" }
    ],
    timeline: [
      { num: "01", title: "Wireframing", desc: "Drafting tap-interaction layouts and user flow loops." },
      { num: "02", title: "Local DB Mapping", desc: "Defining SQLite caching rules and entity maps." },
      { num: "03", title: "Code Assembly", desc: "Programming features and connecting native platform APIs." },
      { num: "04", title: "Integration Testing", desc: "Executing automated testing on iOS/Android emulators." },
      { num: "05", title: "Beta Test Dispatches", desc: "Deploying test builds via TestFlight and Google Play Console." },
      { num: "06", title: "Store Submission", desc: "Publishing final application bundles onto app marketplaces." }
    ],
    diagram: [
      { title: "User Device UI Layer (iOS/Android Native)", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
      { title: "Local Cache Gate (SQLite / Secure Keychain)", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
      { title: "API Gateway (GraphQL with AppSync)", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
      { title: "Dynamic Logic Backend (Node.js Container)", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" }
    ],
    faqs: [
      { q: "Should we build our app using React Native or Native SDKs?", a: "React Native is ideal for projects requiring unified business logic and budget efficiency. For games or deep hardware sensor access, native Swift/Kotlin is recommended." },
      { q: "How do you handle push notifications?", a: "We integrate Google Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs) to route alerts safely to device system locks." },
      { q: "Can my app function without an active internet connection?", a: "Yes. We construct offline-first storage pipelines that save operations in a local SQLite file, syncing it to your databases once connectivity returns." }
    ],
    caseStudies: [
      {
        title: "Logistics Fleet Tracker",
        desc: "Designed and released a Flutter application logging vehicle locations and sensor data offline.",
        metrics: ["30% Fleet Efficiency Rise", "100k+ Active Mobile Installs"],
        techs: ["Flutter", "GraphQL", "SQLite"],
        result: "Drivers view instructions and map coordinates smoothly in remote, offline areas."
      }
    ],
    stats: [
      { value: "90+", label: "Mobile Apps Released" },
      { value: "4.8 ★", label: "Average App Rating" },
      { value: "99.9%", label: "Sync Consistency" },
      { value: "10M+", label: "App Store Downloads" }
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },

  "ui-ux-design": {
    heroTitle: "Premium UI/UX Design & Prototyping",
    heroSub: "Design intuitive, beautiful, and accessibility-compliant user interfaces that increase conversions.",
    featureTitle: "Human-Centered Design Engineered for Conversion",
    featureText: "Our designers merge user research, visual design tokens, and interactive Figma prototyping to build systems that users find intuitive, reducing operational churn.",
    gridTitle: "Design Capabilities",
    gridItems: [
      { icon: <PenTool className="w-6 h-6" />, text: "User Experience (UX) Research", desc: "Audit target audiences and map detailed user journey guidelines." },
      { icon: <MonitorSmartphone className="w-6 h-6" />, text: "User Interface (UI) Visual Design", desc: "Create modern visual systems featuring consistent colors and spacing rules." },
      { icon: <Settings className="w-6 h-6" />, text: "High-Fidelity Prototyping", desc: "Build interactive Figma prototypes demonstrating clicks and transitions." },
      { icon: <Briefcase className="w-6 h-6" />, text: "Custom Component Design Systems", desc: "Define reusable design elements, easing frontend developer code integration." }
    ],
    whyList: [
      "Rigorous Accessibility Compliance (WCAG 2.1 AA Aligned)",
      "Vibrant Modern Typography & Harmonious Colors",
      "Interactive Working Prototype Walkthrough Files",
      "Detailed Layout Specifications for Developer Hand-offs",
      "Regular Feedback Loops & User Testing Sessions"
    ],
    outcomes: [
      { title: "Increased Conversion Rates", desc: "Optimize buttons and input paths to improve checkout completions.", icon: "📈" },
      { title: "Reduced Support Overhead", desc: "Create layouts that minimize user confusion and error logs.", icon: "⚡" },
      { title: "Consistent Brand Visuals", desc: "Establish design tokens across web, mobile, and print.", icon: "🎨" },
      { title: "Faster Code Integration", desc: "Deliver structured UI components matching Tailwind specifications.", icon: "⚙️" },
      { title: "Improved Web Accessibility", desc: "Ensure pages compile safely for screen-readers and visual checks.", icon: "🔒" },
      { title: "Data-Backed Layouts", desc: "Design interfaces verified by screen tracking and user feedback logs.", icon: "🔬" }
    ],
    technologies: [
      { name: "Figma", category: "Collaborative Design Tool" },
      { name: "Adobe Illustrator", category: "Vector Graphics" },
      { name: "Framer", category: "High-Fidelity Prototyping" },
      { name: "Principle", category: "Micro-Animations" },
      { name: "Zeplin", category: "Developer Handoff Hub" },
      { name: "Miro", category: "User Journey Mindmaps" }
    ],
    timeline: [
      { num: "01", title: "User Research", desc: "Auditing client requirements and plotting persona flow maps." },
      { num: "02", title: "Wireframing", desc: "Drafting basic structural grid lines without color assets." },
      { num: "03", title: "Visual System", desc: "Defining typography sizing guidelines and brand colors." },
      { num: "04", title: "High-Fi Design", desc: "Crafting beautiful pages and configuring active button variables." },
      { num: "05", title: "Interactions", desc: "Wiring transitions, scroll animations, and interactive forms." },
      { num: "06", title: "Handoff Documentation", desc: "Exporting components to Figma libraries for development." }
    ],
    diagram: [
      { title: "User Persona Research & Auditing", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
      { title: "Wireframing & Navigation Blueprint Mapping", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
      { title: "High-Fidelity Interactive Layout (Figma)", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
      { title: "Tailwind UI Tokens & React Component Library Handoff", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" }
    ],
    faqs: [
      { q: "What is your developer handoff process?", a: "We provide complete Figma files with structured components, auto-layout guides, typography styles, and exported vector icons ready for React integration." },
      { q: "How do you ensure accessibility in your designs?", a: "We audit contrast ratios, design keyboard-accessible components, and write structural labels mapping WCAG 2.1 AA parameters." },
      { q: "Do you build prototypes we can click through?", a: "Yes. Every project includes high-fidelity Figma prototypes representing user flows like login, search, and checkout." }
    ],
    caseStudies: [
      {
        title: "FinTech Dashboard Redesign",
        desc: "Redesigned a dense financial analytics interface to optimize telemetry readability and transactions.",
        metrics: ["28% Activity Retention Peak", "60% Onboarding Delay Cut"],
        techs: ["Figma", "Framer", "WCAG Audit"],
        result: "Clean visual structures allow financial managers to verify alerts without scanning errors."
      }
    ],
    stats: [
      { value: "240+", label: "Design Systems Built" },
      { value: "40%+", label: "Conversion Lift" },
      { value: "WCAG", label: "AA Compliant" },
      { value: "100%", label: "Figma Developer Handoff" }
    ],
    parent: { name: "Application Services", slug: "application-services" }
  },

  "custom-software-solutions": {
    heroTitle: "Tailored Custom Software Solutions",
    heroSub: "Solve complex business challenges with bespoke systems engineered from the ground up.",
    featureTitle: "Bespoke Software Architectures Built for Business Automation",
    featureText: "When off-the-shelf software falls short, we design custom database structures, API middleware systems, and backend automation scripts that align with your workflows.",
    gridTitle: "Custom Capabilities",
    gridItems: [
      { icon: <Server className="w-6 h-6" />, text: "Internal Business Portals", desc: "Consolidate operations into secure dashboards managing client databases." },
      { icon: <Settings className="w-6 h-6" />, text: "Workflow Automation Engines", desc: "Connect scattered software pipelines to trigger tasks automatically." },
      { icon: <Cpu className="w-6 h-6" />, text: "Legacy Software Modernization", desc: "Rewrite slow legacy codes into modern containers, preserving core assets." },
      { icon: <Database className="w-6 h-6" />, text: "Specialized Enterprise Databases", desc: "Design high-performance database schema setups tailored for high transaction volumes." }
    ],
    whyList: [
      "Custom Developed Logic Matching Business Steps",
      "Highly Scalable Cloud Instance Layouts",
      "Strict Security Separation (No Shared Multi-Tenant Risks)",
      "Direct API Connections with Legacy ERP Telemetry",
      "Dedicated Technical Scrum Support Teams"
    ],
    outcomes: [
      { title: "Zero Subscription Waste", desc: "Replace expensive recurring licenses with owned custom software.", icon: "💰" },
      { title: "Complete System Control", desc: "Design features that align directly with your internal operations.", icon: "⚙️" },
      { title: "Unified Software Ecosystem", desc: "Integrate ERPs, local databases, and public cloud services.", icon: "🔌" },
      { title: "Improved Data Security", desc: "Protect private database rows from shared cloud security exposures.", icon: "🔒" },
      { title: "Automated Data Processing", desc: "Save time by letting cron scripts handle monthly generation processes.", icon: "⚡" },
      { title: "Flexible Future Scopes", desc: "Upgrade software structures without third-party vendor restrictions.", icon: "📈" }
    ],
    technologies: [
      { name: "Go (Golang)", category: "High-Concurrency Language" },
      { name: "Java (Spring Boot)", category: "Enterprise Backend" },
      { name: "Python", category: "Data Automation" },
      { name: "Kubernetes", category: "Container Orchestration" },
      { name: "Apache Kafka", category: "Message Broker" },
      { name: "PostgreSQL / MySQL", category: "Relational Database" },
      { name: "Docker", category: "Container Deployment" }
    ],
    timeline: [
      { num: "01", title: "Workflow Audit", desc: "Analyzing current manual tasks and database logs." },
      { num: "02", title: "System Blueprinting", desc: "Mapping service-to-service structures and data paths." },
      { num: "03", title: "Core Coding", desc: "Compiling microservices, database schemas, and administrative views." },
      { num: "04", title: "Unit Testing", desc: "Writing tests to verify logic loops and boundary limits." },
      { num: "05", title: "Integration Validation", desc: "Connecting middleware APIs with legacy database tables." },
      { num: "06", title: "Launch & NOC", desc: "Deploying secure container groups backed by automated snapshot systems." }
    ],
    diagram: [
      { title: "Secure User Portal (Next.js Admin Page)", color: "bg-sky-500/10 border-sky-400 text-sky-800" },
      { title: "API Gateway & Load Balancer", color: "bg-amber-500/10 border-amber-400 text-amber-800" },
      { title: "Business Logic Microservices (Golang Containers)", color: "bg-indigo-500/10 border-indigo-400 text-indigo-800" },
      { title: "Distributed SQL Storage Engine (PostgreSQL Primary/Replica)", color: "bg-emerald-500/10 border-emerald-400 text-emerald-800" }
    ],
    faqs: [
      { q: "Do we own the source code of the custom software?", a: "Yes. Once the project is completed, the full source code repository, documentation, and database schemas are handed over to your organization." },
      { q: "How do you handle integrations with legacy databases?", a: "We create secure middleware connectors and APIs that query, clean, and sync legacy data arrays without interrupting live systems." },
      { q: "What support agreements do you offer?", a: "We provide monthly SLA support agreements featuring continuous updates, server checks, and prompt technician routing." }
    ],
    caseStudies: [
      {
        title: "Airport Telemetry Hub",
        desc: "Designed and deployed custom telemetry software tracking passenger terminal security checkpoints.",
        metrics: ["Zero Data Collision Incidents", "35% Shorter Terminal Queues"],
        techs: ["Go", "Kafka", "PostgreSQL"],
        result: "Custom dashboards display real-time crowd metrics, alerting managers before blockages occur."
      }
    ],
    stats: [
      { value: "120+", label: "Custom Systems Deployed" },
      { value: "100%", label: "IP Ownership Transfer" },
      { value: "24/7", label: "SLA Support Contracts" },
      { value: "0", label: "Third-Party License Fees" }
    ],
    parent: { name: "Application Services", slug: "application-services" }
  }
};

const getBrandsForSlug = (slug: string) => {
  const applicationServicesBrands = [
    { name: "Atlassian", src: "/OEMS/Atlassian.png", height: "h-12" },
    { name: "GitLab", src: "/OEMS/GitLab.png", height: "h-12" },
    { name: "Adobe", src: "/OEMS/Adobe.png", height: "h-12" },
    { name: "Freshworks", src: "/OEMS/Freshworks.png", height: "h-12" },
    { name: "Microsoft SQL Server", src: "/OEMS/Microsoft SQL Server.png", height: "h-14" },
  ];

  const cloudInfrastructureBrands = [
    { name: "HPE", src: "/OEMS/HPE.png", height: "h-14" },
    { name: "Huawei", src: "/OEMS/Huawei.png", height: "h-14" },
    { name: "Lenovo", src: "/OEMS/Lenovo.jpg", height: "h-10" },
    { name: "Supermicro", src: "/OEMS/supermicro.png", height: "h-12" },
    { name: "Virtuozzo", src: "/OEMS/virtuozzo.png", height: "h-12" },
    { name: "Synology", src: "/OEMS/synology.jpg", height: "h-12" },
    { name: "QSAN", src: "/OEMS/QSAN.jpg", height: "h-14" },
  ];

  const securityBrands = [
    { name: "Fortinet", src: "/OEMS/Fortinet.png", height: "h-10" },
    { name: "Sophos", src: "/OEMS/Sophos.png", height: "h-12" },
    { name: "Kaspersky", src: "/OEMS/Kaspersky.png", height: "h-12" },
    { name: "Barracuda", src: "/OEMS/Barracuda.png", height: "h-12" },
    { name: "Entrust", src: "/OEMS/Entrust.png", height: "h-12" },
    { name: "Sangfor", src: "/OEMS/Sangor.png", height: "h-12" },
    { name: "Juniper Security", src: "/OEMS/Juniper Security.png", height: "h-12" },
    { name: "F5", src: "/OEMS/F5.png", height: "h-12" },
  ];

  const networkingBrands = [
    { name: "juniper", src: "/OEMS/juniper.png", height: "h-12" },
    { name: "Aruba", src: "/OEMS/aruba.webp", height: "h-10" },
    { name: "Cambium Networks", src: "/OEMS/Cambium Networks.webp", height: "h-10" },
    { name: "Alcatel-Lucent", src: "/OEMS/Alcatel-Lucent Enterprise.png", height: "h-12" },
    { name: "R&M", src: "/OEMS/R&M.png", height: "h-10" },
    { name: "Fortinet", src: "/OEMS/Fortinet.png", height: "h-10" },
  ];

  const defaultBrands = [
    { name: "HPE", src: "/OEMS/HPE.png", height: "h-14" },
    { name: "Huawei", src: "/OEMS/Huawei.png", height: "h-14" },
    { name: "Lenovo", src: "/OEMS/Lenovo.jpg", height: "h-10" },
    { name: "Fortinet", src: "/OEMS/Fortinet.png", height: "h-10" },
    { name: "Microsoft SQL Server", src: "/OEMS/Microsoft SQL Server.png", height: "h-14" },
  ];

  const slugLower = (slug || "").toLowerCase();

  if (
    slugLower.includes("web-app") ||
    slugLower.includes("mobile-app") ||
    slugLower.includes("ui-ux") ||
    slugLower.includes("software") ||
    slugLower.includes("systems-dev") ||
    slugLower.includes("application")
  ) {
    return applicationServicesBrands;
  }

  if (
    slugLower.includes("cloud") ||
    slugLower.includes("infra") ||
    slugLower.includes("compute")
  ) {
    return cloudInfrastructureBrands;
  }

  if (
    slugLower.includes("sec-audits") ||
    slugLower.includes("security") ||
    slugLower.includes("cyber")
  ) {
    return securityBrands;
  }

  if (
    slugLower.includes("net") ||
    slugLower.includes("routing") ||
    slugLower.includes("wan")
  ) {
    return networkingBrands;
  }

  return defaultBrands;
};

export default function ServicesDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // Fallback to default if slug not in dictionary
  const content = serviceData[slug] || {
    ...defaultContent,
    heroTitle: `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Services`,
  };

  const pageBrands = getBrandsForSlug(slug);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      
      {/* 1. Hero Section (Modern Split Layout - Premium Light Background) */}
      <section className="relative w-full bg-slate-50 pt-36 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {content.parent && (
              <Link 
                href={`/services/${content.parent.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 text-[10px] font-bold tracking-widest uppercase transition-all mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D32F2F]" />
                <span>Back to {content.parent.name}</span>
              </Link>
            )}
            
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/15 text-[#D32F2F] text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D32F2F] animate-pulse" />
              Enterprise Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2C59] tracking-tight leading-[1.1] mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              {content.heroSub}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#000072]/20 hover:bg-[#000072]/90 transition-all flex items-center gap-2 border-0">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all shadow-sm">
                Request Assessment
              </Link>
            </div>

            {/* Trust Indicators / Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 opacity-95 border-t border-slate-200/60 pt-8 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">ISO 27001 Certified</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Enterprise Performance</span>
              </div>
            </div>
          </div>

          {/* Right Side: Graphic Stack representation */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0F2C59]/5 rounded-[2.5rem] border border-slate-200/50 backdrop-blur-sm shadow-xl flex items-center justify-center p-8">
              <div className="w-full flex flex-col gap-2 relative">
                {content.diagram.map((layer, idx) => (
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

      {/* 2. Trusted By Section */}
      <section className="bg-white py-16 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-10">
            AUTHORIZED ENTERPRISE TECHNOLOGY PARTNER & OEM ECOSYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-85 transition-opacity">
            {pageBrands.map((brand, bIdx) => (
              <img 
                key={bIdx}
                src={brand.src} 
                alt={brand.name} 
                className={cn("object-contain grayscale-0 hover:grayscale transition-all cursor-default", brand.height)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Outcomes (Benefits) Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Business Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Value Delivered Through Custom Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.outcomes.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{benefit.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{benefit.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Services Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Core Service Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Featured Platform Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.gridItems.map((srv, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-slate-200 transition-all text-left group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 text-[#000072] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#000072] group-hover:text-white transition-colors duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#0F2C59] mb-3 group-hover:text-[#000072] transition-colors">{srv.text}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">{srv.desc || "Modern frameworks built to automate deployment cycles."}</p>
                </div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-3 rounded-xl bg-white border border-slate-200 hover:border-[#000072] text-[#000072] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                    Request Info <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Solutions & Capabilities Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Solutions & Capabilities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Robust code models engineered to satisfy high-volume business operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.gridItems.map((sol, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4 text-left hover:shadow-md transition-all">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#000072]">
                  {sol.icon}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0F2C59] mb-1">{sol.text}</h3>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{sol.desc || "Bespoke technology modules configured for custom flows."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Ecosystem Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Supported Technology Ecosystem
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {content.technologies.map((tech, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 flex flex-col items-center gap-1 hover:bg-slate-100 transition-colors">
                <span>{tech.name}</span>
                <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process / Methodology Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Milestone Map
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Development & Delivery Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {content.timeline.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 bg-white border border-slate-100 p-5 rounded-2xl shadow-xs">
                <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-[#000072] flex items-center justify-center font-black text-[#000072] text-xs mb-4">
                  {step.num}
                </div>
                <h3 className="text-xs font-black text-[#0F2C59] mb-2">{step.title}</h3>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interactive Architecture Diagram */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Architectures
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Solution Flow Blueprints
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Explore the multi-tier deployment topology linking dynamic users with database layers.
          </p>

          <div className="flex flex-col gap-4 border border-slate-150 rounded-3xl p-6 md:p-10 bg-slate-50 relative">
            {content.diagram.map((node, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveDiagramNode(node.title)}
                onMouseLeave={() => setActiveDiagramNode(null)}
                className={cn(
                  "py-4 px-6 rounded-2xl border text-center transition-all duration-300 font-extrabold text-xs uppercase tracking-wider bg-white relative cursor-default shadow-xs",
                  node.color,
                  activeDiagramNode === node.title ? "scale-[1.02] shadow-md border-slate-400" : ""
                )}
              >
                {node.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industry Solutions Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Domain Segments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Industry Solutions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Banking & Finance", desc: "Active transaction ledgers securing user logs.", icon: "🏦" },
              { title: "Government", desc: "Highly secure private clouds and audit logs.", icon: "🏛️" },
              { title: "Healthcare", desc: "HIPAA compliant storage arrays.", icon: "🏥" },
              { title: "Education", desc: "LMS structures handling class traffic.", icon: "🏫" },
              { title: "Telecommunications", desc: "API routes syncing local edge signals.", icon: "📡" },
              { title: "Manufacturing", desc: "Industrial IoT telemetry pipelines.", icon: "🏭" },
              { title: "Retail & E-commerce", desc: "Payment gateways handling seasonal rushes.", icon: "🛒" },
              { title: "Logistics", desc: "Offline-first tracking logs.", icon: "🚚" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="text-sm font-black text-[#0F2C59]">{ind.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why Choose Us Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Why Choose Silicon Computing Ltd
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyList.map((reason, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl font-bold text-[#000072]">0{idx + 1}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{reason}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Engineered with strict code reviews and security guidelines.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Featured Case Studies Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.caseStudies.map((study, idx) => (
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

      {/* 12. Statistics Section */}
      <section className="bg-[#0b1329] py-16 text-white border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-3xl md:text-4.5xl font-black text-white block mb-1">{stat.value}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FAQ Section */}
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
            {content.faqs.map((faq, idx) => (
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

      {/* 14. Enterprise CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Ready to Build Next-Gen Applications?
          </h2>
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-medium">
            Contact our senior product engineers to audit your project wireframes and construct an implementation roadmap.
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
