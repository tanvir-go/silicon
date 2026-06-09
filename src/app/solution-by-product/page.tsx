"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Server, Shield, Network, Settings, Code, Database, Zap, Heart, Globe, Building } from "lucide-react";

interface SolutionCard {
  title: string;
  desc: string;
  link: string;
}

const productTypes: SolutionCard[] = [
  {
    title: "Artificial Intelligence (AI)",
    desc: "Artificial Intelligence is transforming how organizations operate, compete, and innovate. Silicon Computing Ltd delivers scalable AI-ready infrastructure and solutions that help businesses build, deploy, and manage AI workloads efficiently—turning data into actionable intelligence faster.",
    link: "/solution-by-product/artificial-intelligence-ai"
  },
  {
    title: "Compute",
    desc: "Power your digital transformation with high-performance, reliable compute solutions from Silicon Computing Ltd. Our workload-optimized servers and compute platforms are designed to support modern applications, virtualization, and hybrid IT environments from edge to core.",
    link: "/solution-by-product/compute"
  },
  {
    title: "Private Cloud",
    desc: "Build secure and flexible private cloud environments across data centers, edge locations, and colocation facilities. Silicon Computing Ltd enables seamless workload mobility and centralized management, giving you full control of your infrastructure while maintaining cloud-like agility.",
    link: "/solution-by-product/security"
  },
  {
    title: "Networking",
    desc: "Enable high-speed, secure, and intelligent connectivity from edge to cloud. Silicon Computing Ltd offers enterprise-grade networking solutions designed to deliver consistent performance, enhanced security, and superior user experiences for today's connected world.",
    link: "/solution-by-product/network"
  },
  {
    title: "Services",
    desc: "From strategy and design to deployment and ongoing support, Silicon Computing Ltd provides end-to-end IT services. Our experts help you optimize operations, modernize infrastructure, and maximize the value of your technology investments.",
    link: "/services"
  },
  {
    title: "Software",
    desc: "Unlock the full potential of your data with innovative software solutions from Silicon Computing Ltd. Our software portfolio supports hybrid and edge environments, enabling better visibility, automation, and data-driven decision-making across your IT landscape.",
    link: "/solution-by-product/software"
  },
  {
    title: "Storage",
    desc: "Modernize your data infrastructure with scalable and secure storage solutions. Silicon Computing Ltd simplifies data storage, management, and protection across on-premises and hybrid cloud environments—ensuring performance, reliability, and business continuity.",
    link: "/solution-by-product/storage"
  },
  {
    title: "High-Performance Computing (HPC)",
    desc: "Drive advanced research, analytics, and AI workloads with high-performance computing solutions from Silicon Computing Ltd. Our HPC platforms are built to deliver faster insights, higher efficiency, and scalable performance for compute-intensive applications.",
    link: "/solution-by-product/supercomputing"
  }
];

const solutionsByTopic: SolutionCard[] = [
  {
    title: "Enterprise ERP & CRM Operations",
    desc: "Unify your corporate data structures, financial ledger divisions, and customer communication pathways. Our customized enterprise platforms eliminate operational silos, automate billing gateways, and provide real-time reporting metrics.",
    link: "/solution-by-product/erp-crm"
  },
  {
    title: "Zero-Trust Cybersecurity & Threat Isolation",
    desc: "Protect your organization's intellectual capital and transaction paths from high-velocity cyber threats. We implement zero-trust network boundaries, configure hardware-secured cryptoprocessors, and establish containment protocols.",
    link: "/solution-by-product/security"
  },
  {
    title: "Cognitive Machine Learning & Deep Vision",
    desc: "Leverage the power of custom neural networks trained on secure organizational registries. We deploy machine vision models, natural language database querying tools, and predictive analytics layers.",
    link: "/solution-by-product/artificial-intelligence-ai"
  },
  {
    title: "High-Availability Cloud & Kubernetes",
    desc: "Deploy high-performance, fault-tolerant infrastructure designed to maintain uninterrupted corporate presence. We structure multi-region active-active clusters on secure clouds.",
    link: "/solution-by-product/compute"
  },
  {
    title: "Unified Telecom & SD-WAN Design",
    desc: "Connect geographically dispersed operations, factories, and corporate offices with secure, high-speed telecom lines. We provide automated SD-WAN edge structures and redundant fiber routing.",
    link: "/solution-by-product/network"
  },
  {
    title: "Omni-Channel Retail Logistics & Supply Chain",
    desc: "Optimize global supply flows with sub-second inventory sync and dynamic fleet routing. We build high-throughput tracking dashboards and event-driven message brokers.",
    link: "/solution-by-product/software"
  }
];

const industries: SolutionCard[] = [
  {
    title: "Banking, Financial Services & Insurance",
    desc: "Scale transaction telemetry with multi-region active-active database partitioning, end-to-end encryption pipelines, and automated real-time fraud auditing routines.",
    link: "/industries/banking-and-finance"
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Integrate deep neural classifier networks trained on secure patient registries. Deploy hardened HIPAA-compliant EHR data pipelines and clinical diagnostic engines.",
    link: "/industries/healthcare"
  },
  {
    title: "Energy & SCADA Utilities",
    desc: "Protect power grids, water utilities, and SCADA controllers. Configure cryptographic edge boundary shields, zero-trust firewalls, and active SOC log tracking.",
    link: "/industries/energy-and-scada-utilities"
  },
  {
    title: "Retail & Omni-Channel Logistics",
    desc: "Synchronize multi-national inventory shifts with high-throughput event-driven message brokers. Compute dynamic shipping routes and optimize fleet routing.",
    link: "/industries/retail"
  },
  {
    title: "Telecommunications & Networking",
    desc: "Unify geographically dispersed corporate centers, remote terminals, and call nodes. Optimize WAN communication with fiber failover lines and SD-WAN routing.",
    link: "/industries/telecommunications"
  },
  {
    title: "Government & Public Sector",
    desc: "Secure public sector directories, establish zero-trust directory services, design sovereign cloud transitions, and deliver robust business continuity strategies.",
    link: "/industries/public-sector"
  }
];

type TabType = "productTypes" | "solutionsByTopic" | "industries";

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("productTypes");

  const getActiveCards = (): SolutionCard[] => {
    switch (activeTab) {
      case "productTypes":
        return productTypes;
      case "solutionsByTopic":
        return solutionsByTopic;
      case "industries":
        return industries;
      default:
        return productTypes;
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F2C59] leading-tight">
              Silicon Computing Ltd Products, Services & Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-500 mt-6 leading-relaxed max-w-xl font-medium">
              Delivering secure, scalable, and intelligent IT products and services to support modern edge-to-cloud environments.
            </p>
          </div>
          
          {/* Flat Vector Illustration Mockup (Matching original screenshot) */}
          <div className="flex-1 w-full max-w-md flex justify-center">
            <svg 
              viewBox="0 0 500 350" 
              className="w-full h-auto select-none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="50" y="40" width="380" height="250" rx="24" fill="#0F2C59" />
              <rect x="58" y="48" width="364" height="234" rx="16" fill="#FFFFFF" />
              
              {/* Header inside screen */}
              <circle cx="78" cy="64" r="5" fill="#E2E8F0" />
              <circle cx="94" cy="64" r="5" fill="#E2E8F0" />
              <circle cx="110" cy="64" r="5" fill="#E2E8F0" />
              <line x1="390" y1="64" x2="402" y2="64" stroke="#E2E8F0" strokeWidth="2" />
              
              {/* Graphs / Dashboards Mockup */}
              <rect x="78" y="88" width="80" height="40" rx="8" fill="#F0F4F8" />
              <circle cx="100" cy="108" r="12" stroke="#3182CE" strokeWidth="4" />
              <circle cx="136" cy="108" r="12" stroke="#D32F2F" strokeWidth="4" />
              
              <rect x="170" y="88" width="80" height="40" rx="8" fill="#F0F4F8" />
              <path d="M180 116 L195 102 L210 110 L235 96" stroke="#3182CE" strokeWidth="3" strokeLinecap="round" />
              
              <rect x="262" y="88" width="80" height="40" rx="8" fill="#F0F4F8" />
              <line x1="274" y1="112" x2="330" y2="112" stroke="#E2E8F0" strokeWidth="3" />
              <line x1="274" y1="102" x2="310" y2="102" stroke="#0F2C59" strokeWidth="3" />
              
              <rect x="78" y="144" width="264" height="110" rx="12" fill="#F8FAFC" />
              <rect x="94" y="164" width="40" height="8" rx="4" fill="#E2E8F0" />
              <rect x="94" y="178" width="80" height="6" rx="3" fill="#E2E8F0" />
              <rect x="94" y="190" width="120" height="6" rx="3" fill="#CBD5E0" />
              
              {/* Gears Illustration */}
              <circle cx="360" cy="180" r="28" fill="#E2E8F0" />
              <circle cx="360" cy="180" r="12" fill="#FFFFFF" />
              <circle cx="390" cy="220" r="20" fill="#CBD5E0" />
              <circle cx="390" cy="220" r="8" fill="#FFFFFF" />
              
              {/* Flat design characters */}
              {/* Character 1 (Sitting with laptop) */}
              <rect x="240" y="215" width="20" height="30" rx="6" fill="#F56565" />
              <circle cx="250" cy="200" r="8" fill="#FBD38D" />
              <rect x="235" y="228" width="30" height="5" rx="2.5" fill="#3182CE" />
              
              {/* Character 2 (Working on ladder) */}
              <line x1="320" y1="130" x2="320" y2="250" stroke="#CBD5E0" strokeWidth="4" />
              <line x1="336" y1="130" x2="336" y2="250" stroke="#CBD5E0" strokeWidth="4" />
              <line x1="320" y1="150" x2="336" y2="150" stroke="#CBD5E0" strokeWidth="2" />
              <line x1="320" y1="180" x2="336" y2="180" stroke="#CBD5E0" strokeWidth="2" />
              <line x1="320" y1="210" x2="336" y2="210" stroke="#CBD5E0" strokeWidth="2" />
              
              <rect x="315" y="150" width="15" height="25" rx="5" fill="#4299E1" />
              <circle cx="322" cy="140" r="6" fill="#FBD38D" />
            </svg>
          </div>
        </div>

        {/* Tab Controls Section */}
        <div className="flex justify-center mb-12 border-b border-slate-200">
          <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab("productTypes")}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "productTypes"
                  ? "bg-[#000072] text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              PRODUCT TYPES
            </button>
            <button
              onClick={() => setActiveTab("solutionsByTopic")}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "solutionsByTopic"
                  ? "bg-[#000072] text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              SOLUTIONS BY TOPIC
            </button>
            <button
              onClick={() => setActiveTab("industries")}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "industries"
                  ? "bg-[#000072] text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              INDUSTRIES
            </button>
          </div>
        </div>

        {/* Cards Layout Grid (2 Columns) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {getActiveCards().map((card, idx) => (
            <Link 
              key={idx} 
              href={card.link}
              className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                <h3 className="font-extrabold text-lg text-[#0F2C59] group-hover:text-[#000072] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-4 font-medium">
                  {card.desc}
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#000072] group-hover:text-[#D32F2F] transition-colors flex items-center gap-1.5">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
