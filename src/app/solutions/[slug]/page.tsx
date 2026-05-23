"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import ContactSection from "@/sections/ContactSection";

const formatTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const defaultBenefits = [
  { title: "High Scalability", desc: "Instantly scale your operations to meet enterprise demand without compromising on speed or reliability." },
  { title: "Zero-Trust Security", desc: "Enforce comprehensive security parameters across your entire stack to protect critical corporate assets." },
  { title: "Optimized Performance", desc: "Streamline workloads and minimize latency through modern, efficient architectural paradigms." },
  { title: "Seamless Integration", desc: "Easily connect with your existing infrastructure through standardized APIs and flexible deployment options." },
  { title: "24/7 Monitoring", desc: "Gain comprehensive visibility into your systems with real-time analytics, logging, and proactive alerts." },
  { title: "Cost Optimization", desc: "Reduce total cost of ownership through efficient resource allocation and automated lifecycle management." }
];

const solutionsData: Record<string, { title: string, desc: string }[]> = {
  "compute": [
    { title: "Hyper-Threaded Workloads", desc: "Leverage advanced compute environments optimized for multi-threaded, parallel processing tasks." },
    { title: "Edge Processing", desc: "Push compute closer to your data sources to dramatically reduce latency and bandwidth consumption." },
    { title: "Dynamic Provisioning", desc: "Automatically allocate compute resources based on real-time traffic and application demands." },
    { title: "Serverless Architecture", desc: "Execute code without provisioning or managing servers, paying only for the compute time consumed." },
    { title: "Container Orchestration", desc: "Manage thousands of containers seamlessly with built-in load balancing, auto-scaling, and self-healing." },
    { title: "High-Availability Clusters", desc: "Ensure your critical applications never go offline with distributed, multi-zone compute clustering." }
  ],
  "storage": [
    { title: "Petabyte Scalability", desc: "Seamlessly grow your storage footprint from terabytes to petabytes without architectural overhauls." },
    { title: "Automated Tiering", desc: "Intelligently move data between hot and cold storage layers based on access frequency." },
    { title: "Data Resiliency", desc: "Ensure your data survives hardware failures with built-in redundancy and erasure coding." },
    { title: "Object Storage Solutions", desc: "Store massive amounts of unstructured data efficiently with scalable object storage protocols." },
    { title: "Ultra-Fast NVMe", desc: "Accelerate data-intensive workloads like database processing with all-flash NVMe arrays." },
    { title: "Disaster Recovery", desc: "Rapidly restore operations with instant snapshotting and geographically distributed backups." }
  ],
  "network": [
    { title: "Software-Defined Networking", desc: "Centralize network control and dynamically route traffic to optimize bandwidth and uptime." },
    { title: "Micro-Segmentation", desc: "Isolate workloads logically to prevent lateral movement of threats within the corporate network." },
    { title: "Ultra-Low Latency", desc: "Achieve microsecond latency for mission-critical trading algorithms and real-time processing." },
    { title: "Global Load Balancing", desc: "Distribute incoming traffic across global data centers for high availability and regional performance." },
    { title: "BGP Routing Optimization", desc: "Ensure the fastest, most reliable paths are taken for data packet delivery across the internet." },
    { title: "Secure SD-WAN", desc: "Connect remote branch offices securely and efficiently over standard broadband connections." }
  ],
  "security": [
    { title: "Threat Intelligence", desc: "Utilize global threat feeds and machine learning to proactively identify and block attacks." },
    { title: "Identity & Access Management", desc: "Implement robust IAM protocols with SSO and MFA for all corporate resources." },
    { title: "Continuous Auditing", desc: "Automatically scan for compliance drift and vulnerabilities in real-time." },
    { title: "Endpoint Protection", desc: "Secure all corporate devices, from laptops to mobile phones, against malware and targeted attacks." },
    { title: "Data Loss Prevention (DLP)", desc: "Prevent unauthorized exfiltration of sensitive corporate data through rigorous policy enforcement." },
    { title: "Automated Incident Response", desc: "Dramatically reduce response times by automating mitigation steps upon threat detection." }
  ],
  "software": [
    { title: "Microservices Architecture", desc: "Decouple monolithic applications into resilient, independently deployable microservices." },
    { title: "CI/CD Pipelines", desc: "Automate testing and deployment to dramatically accelerate time-to-market." },
    { title: "API-First Design", desc: "Build extensible platforms ready for third-party integration and ecosystem expansion." },
    { title: "Test-Driven Development", desc: "Ensure code quality and reduce bugs by implementing rigorous unit and integration testing." },
    { title: "Legacy Modernization", desc: "Safely refactor and migrate aging legacy systems to modern, cloud-native architectures." },
    { title: "User-Centric UI/UX", desc: "Deliver software that not only functions flawlessly but provides an intuitive, highly engaging user experience." }
  ],
  "database": [
    { title: "High Availability", desc: "Deploy multi-zone database clusters ensuring zero downtime during critical operations." },
    { title: "Real-Time Replication", desc: "Sync data across geographic regions instantly for disaster recovery and global access." },
    { title: "Query Optimization", desc: "Implement advanced indexing and partitioning to speed up analytical workloads." },
    { title: "NoSQL Flexibility", desc: "Handle diverse, unstructured data structures efficiently with highly scalable NoSQL solutions." },
    { title: "Automated Backups", desc: "Never lose data with automated point-in-time recovery and continuous backup streaming." },
    { title: "In-Memory Caching", desc: "Dramatically accelerate read operations by leveraging in-memory databases like Redis or Memcached." }
  ],
  "artificial-intelligence-ai": [
    { title: "Predictive Analytics", desc: "Harness historical data to forecast trends and automate complex business decisions." },
    { title: "Model Deployment", desc: "Streamline the MLOps lifecycle from training to production serving with enterprise scale." },
    { title: "Natural Language Processing", desc: "Implement sophisticated conversational agents and document analysis pipelines." },
    { title: "Computer Vision", desc: "Automate visual inspections, facial recognition, and object tracking with state-of-the-art neural networks." },
    { title: "Generative AI", desc: "Accelerate content creation, code generation, and product design using powerful large language models." },
    { title: "Edge AI Inference", desc: "Run lightweight, optimized machine learning models directly on edge devices for real-time decision making." }
  ]
};

export default function SolutionsDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug ? formatTitle(slug) : "Loading...";
  const benefits = solutionsData[slug] || defaultBenefits;

  return (
    <main className="min-h-screen bg-white pt-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
              Enterprise Solution
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.1]">
              {title}
            </h1>
            <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl">
              Elevate your corporate infrastructure with our state-of-the-art {title.toLowerCase()} implementations. We deliver high-fidelity, zero-trust integrated architectures engineered for performance, scalability, and robust security.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-lg transition-all flex items-center gap-2">
                Deploy Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-[#F0F4F7] text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-100 transition-all flex items-center gap-2">
                Talk to Sales
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="rounded-3xl bg-[#F0F4F7] shadow-xl p-8 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                  <span className="text-[#0F2C59] font-black text-xl">{title.charAt(0)}</span>
                </div>
                <h3 className="font-extrabold text-2xl text-[#0F2C59]">{title}</h3>
                <p className="text-xs text-slate-500 mt-2">Next-Gen Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59]">Core Architecture & Benefits</h2>
            <p className="text-slate-500 mt-3 text-sm">Deploying {title.toLowerCase()} provides massive operational leverage.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#F0F4F7] shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#0F2C59]">{benefit.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
