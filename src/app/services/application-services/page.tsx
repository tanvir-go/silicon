"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MonitorSmartphone, Smartphone, PenTool, TerminalSquare, 
  CheckCircle2, ArrowRight, ShieldCheck, Code, Globe, 
  Cpu, Database, Layers, ArrowLeft, ChevronDown, ChevronUp, Plus, Minus,
  Activity, Star, Sparkles, Building2, Zap, Rocket, HelpCircle, Users
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Dynamic Content Mapping for SEO preservation & compatibility
// ----------------------------------------------------------------------

const categoriesList = [
  { text: "Web App Development", slug: "web-app-development" },
  { text: "Mobile App Development", slug: "mobile-app-development" },
  { text: "UI/UX Design", slug: "ui-ux-design" },
  { text: "Custom Software Solutions", slug: "custom-software-solutions" }
];

export default function ApplicationServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      
      {/* 1. Hero Section (Modern Split Layout - Premium Light Background) */}
      <section className="relative w-full bg-slate-50 pt-36 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden border-b border-slate-100">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/15 text-[#D32F2F] text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D32F2F] animate-pulse" />
              Enterprise Application Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2C59] tracking-tight leading-[1.1] mb-6">
              Empowering Businesses Through <span className="text-[#D32F2F]">Smart Applications</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed mb-8">
              We build powerful, scalable, and secure applications that accelerate your digital transformation journey. From global enterprises to growing startups, our systems are engineered for high-availability.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#000072]/20 hover:bg-[#000072]/90 transition-all flex items-center gap-2 border-0">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all shadow-sm">
                Download Company Profile
              </a>
            </div>

            {/* Trust Indicators / Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 opacity-90 border-t border-slate-200/60 pt-8 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">ISO 27001 Certified</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Side: Graphic Mockup & Floating Icons */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0F2C59]/5 rounded-[2.5rem] border border-slate-200/50 backdrop-blur-sm shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-5 grayscale mix-blend-overlay" />
              
              {/* Central Premium Dashboard Representation */}
              <div className="z-10 bg-white border border-slate-200 p-6 rounded-3xl shadow-2xl w-5/6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#D32F2F]" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Console</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                  <div className="flex-1">
                    <div className="w-16 h-2 bg-slate-300 rounded animate-pulse" />
                    <div className="w-10 h-1.5 bg-slate-200 rounded mt-1.5" />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-8 h-2 bg-slate-300 rounded" />
                    <div className="w-12 h-4 bg-slate-200 rounded mt-2" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-8 h-2 bg-slate-300 rounded" />
                    <div className="w-12 h-4 bg-slate-200 rounded mt-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Technology Badges */}
            <div className="absolute top-10 left-4 bg-white/95 text-slate-900 border border-slate-200/50 p-3 rounded-2xl shadow-xl flex items-center gap-2 -rotate-6">
              <Cpu className="w-5 h-5 text-[#D32F2F]" />
              <span className="text-[10px] font-black uppercase tracking-wider">Microservices</span>
            </div>
            <div className="absolute bottom-12 right-2 bg-white/95 text-slate-900 border border-slate-200/50 p-3 rounded-2xl shadow-xl flex items-center gap-2 rotate-6">
              <Database className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-wider">Scalable DB</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="bg-white py-20 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-12">
            AUTHORIZED ENTERPRISE TECHNOLOGY PARTNER & OEM ECOSYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-75 transition-opacity">
            <img src="/OEMS/Atlassian.png" alt="Atlassian" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/GitLab.png" alt="GitLab" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/Adobe.png" alt="Adobe" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/Freshworks.png" alt="Freshworks" className="h-12 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
            <img src="/OEMS/Microsoft SQL Server.png" alt="Microsoft SQL Server" className="h-16 object-contain grayscale-0 hover:grayscale transition-all cursor-default" />
          </div>
        </div>
      </section>

      {/* 3. Business Outcomes Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Business Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Delivering Business Value Through Custom Applications
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            We target measurable operational metrics to ensure every platform we design provides long-term technical value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Transformation", desc: "Re-engineer legacy infrastructure and workflows to operate efficiently under unified modern frameworks.", icon: <Sparkles className="text-[#000072]" /> },
              { title: "Process Automation", desc: "Minimize manual entry, automate logs, and streamline operations with intelligent, automated scripts.", icon: <Zap className="text-amber-500" /> },
              { title: "Customer Experience Enhancement", desc: "Build responsive, premium, and easy-to-use user journeys that elevate customer retention rates.", icon: <Rocket className="text-emerald-500" /> },
              { title: "Operational Efficiency", desc: "Lower support ticket response latency and consolidate administrative functions under a single panel.", icon: <Activity className="text-sky-500" /> },
              { title: "Business Scalability", desc: "Scale resources, database instances, and API nodes dynamically to handle transaction surges.", icon: <Layers className="text-indigo-500" /> },
              { title: "Secure Enterprise Systems", desc: "Enforce zero-trust identity policies and keep database fields compliant with ISO 27001 auditing standards.", icon: <ShieldCheck className="text-rose-500" /> }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F2C59]">{outcome.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enhance Existing Services Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Core Service Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Our Application Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web App Development", desc: "Scalable multi-tenant SaaS interfaces and responsive enterprise portals built on React and Next.js.", slug: "web-app-development", icon: <MonitorSmartphone /> },
              { title: "Mobile App Development", desc: "Native iOS/Android and cross-platform Flutter/React Native solutions engineered to run cleanly on all devices.", slug: "mobile-app-development", icon: <Smartphone /> },
              { title: "UI/UX Design", desc: "Human-centered user journeys, behavioral wireframing, and custom design systems matching your corporate layout.", slug: "ui-ux-design", icon: <PenTool /> },
              { title: "Custom Software Solutions", desc: "Bespoke internal platforms, server architectures, and API frameworks tailored to resolve complex data challenges.", slug: "custom-software-solutions", icon: <TerminalSquare /> }
            ].map((srv, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-200 transition-all text-left">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 text-[#000072] flex items-center justify-center mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#0F2C59] mb-3">{srv.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <Link href={`/services/${srv.slug}`} className="w-full">
                  <button className="w-full py-3 rounded-xl bg-white border border-slate-200 hover:border-[#000072] text-[#000072] hover:text-[#000072] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Solutions We Build Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            System Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Solutions We Build
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            Enterprise platforms architected, secured, and customized to integrate with your existing corporate infrastructures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ERP Solutions", desc: "Automate accounting, inventories, and manufacturing logs.", icon: <Building2 className="text-[#000072]" /> },
              { title: "CRM Platforms", desc: "Streamline customer queries, pipelines, and data indexing.", icon: <Users className="text-emerald-500" /> },
              { title: "HRM Systems", desc: "Manage employee files, track shifts, and automate payouts.", icon: <ShieldCheck className="text-blue-500" /> },
              { title: "Enterprise Portals", desc: "Unified dashboards connecting internal databases and portals.", icon: <Layers className="text-sky-500" /> },
              { title: "SaaS Applications", desc: "Multi-tenant cloud suites designed to monetize easily.", icon: <Globe className="text-indigo-500" /> },
              { title: "Mobile Applications", desc: "High-performance apps for iOS and Android devices.", icon: <Smartphone className="text-rose-500" /> },
              { title: "E-Commerce Platforms", desc: "Scalable B2B or B2C payment gateways and cart systems.", icon: <MonitorSmartphone className="text-purple-500" /> },
              { title: "AI-Powered Solutions", desc: "Integrate vector databases and predictive neural models.", icon: <Cpu className="text-amber-500" /> }
            ].map((sol, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 text-left hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {sol.icon}
                </div>
                <h3 className="text-sm font-extrabold text-[#0F2C59]">{sol.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Ecosystem Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-4">
            Our Enterprise Technology Stack
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-medium">
            We leverage industry-standard languages and frameworks to deliver scalable, secure code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { category: "Frontend", techs: ["React", "Next.js", "Angular", "Vue"] },
              { category: "Backend", techs: ["Laravel", "Node.js", ".NET", "Java"] },
              { category: "Mobile", techs: ["Flutter", "React Native"] },
              { category: "Database", techs: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"] },
              { category: "Cloud & Devops", techs: ["AWS", "Azure", "Google Cloud", "Terraform"] }
            ].map((stack, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-4">
                <h3 className="text-xs font-black uppercase text-[#000072] tracking-wider border-b border-slate-200/60 pb-2">
                  {stack.category}
                </h3>
                <div className="flex flex-col gap-2">
                  {stack.techs.map((t, tIdx) => (
                    <div key={tIdx} className="bg-white border border-slate-200/50 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-between shadow-xs">
                      {t}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Development Process Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Milestone Map
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Development Process
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-7 gap-4 relative">
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-slate-200 z-0" />
            {[
              { num: "01", title: "Discovery", desc: "Gathering specs." },
              { num: "02", title: "Business Analysis", desc: "Mapping scope." },
              { num: "03", title: "UI/UX Design", desc: "Interactive wireframes." },
              { num: "04", title: "Development", desc: "Writing optimized code." },
              { num: "05", title: "Quality Assurance", desc: "Rigorous testing." },
              { num: "06", title: "Deployment", desc: "CI/CD server rollouts." },
              { num: "07", title: "Support & Maintenance", desc: "SLA monitoring." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#000072] shadow-sm flex items-center justify-center font-black text-[#000072] text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="text-xs font-black text-[#0F2C59] mb-1">{step.title}</h3>
                <p className="text-[10px] text-slate-400 font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden flex flex-col gap-8 text-left max-w-md mx-auto pl-4 relative">
            <div className="absolute top-0 bottom-0 left-[26px] w-[2px] bg-slate-200" />
            {[
              { num: "01", title: "Discovery", desc: "Gathering specifications & targets." },
              { num: "02", title: "Business Analysis", desc: "Drafting technical scope of work." },
              { num: "03", title: "UI/UX Design", desc: "Developing Figma prototypes." },
              { num: "04", title: "Development", desc: "Executing modular, testable code." },
              { num: "05", title: "Quality Assurance", desc: "Mock penetration & load testing." },
              { num: "06", title: "Deployment", desc: "Automated zero-downtime server push." },
              { num: "07", title: "Support & Maintenance", desc: "24/7 technical monitoring." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#000072] shadow-sm flex items-center justify-center font-black text-[#000072] text-xs">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#0F2C59] mt-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industry Expertise Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Domain Segments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Industry Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Banking & Finance", desc: "Secure transaction ledgers & portals.", icon: "🏦" },
              { title: "Government", desc: "Audited public sector systems.", icon: "🏛️" },
              { title: "Healthcare", desc: "HIPAA compliant record portals.", icon: "🏥" },
              { title: "Education", desc: "Distributed LMS interfaces.", icon: "🏫" },
              { title: "Retail", desc: "High-volume checkout processing.", icon: "🛒" },
              { title: "Manufacturing", desc: "Logistics control telemetry maps.", icon: "🏭" },
              { title: "Telecommunications", desc: "API routers handling thousands/sec.", icon: "📡" },
              { title: "Logistics", desc: "Real-time fleet tracking networks.", icon: "🚚" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="text-sm font-black text-[#0F2C59]">{ind.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Featured Case Studies Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Success Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Apex Finance Core Migration",
                desc: "Re-engineered core loan processing systems to Next-Gen microservices.",
                metrics: ["60% Faster Operations", "99.9% Uptime Secured"],
                techs: ["Java", ".NET", "PostgreSQL"],
                result: "Successfully migrated over 1.2M client profiles with zero network outage."
              },
              {
                title: "Global Cargo Tracking Hub",
                desc: "Developed a distributed logistics system coordinating vehicle tracking logs.",
                metrics: ["40% Cost Reduction", "2.4M API queries/day"],
                techs: ["Node.js", "MongoDB", "Google Cloud"],
                result: "Optimized route dispatch latency and cut server overhead substantially."
              }
            ].map((study, idx) => (
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

      {/* 10. Why Choose Silicon Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-[10px] font-black tracking-wider uppercase mb-3">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Why Choose Silicon Computing Ltd
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Certified Professionals", desc: "Our team consists of AWS/Azure certified system architects and experienced backend engineers.", icon: "🎓" },
              { title: "Proven Enterprise Experience", desc: "Over 8 years deploying high-capacity software structures for large institutions.", icon: "🏆" },
              { title: "End-to-End Development", desc: "We manage everything from conceptual UI/UX wireframing down to raw server CI/CD pipeline routing.", icon: "⚙️" },
              { title: "Security-First Approach", desc: "Every system is constructed under zero-trust guidelines and microsegmented firewalls.", icon: "🔒" },
              { title: "Agile Delivery Model", desc: "Short, transparent two-week sprints keep you in absolute control of milestones.", icon: "🗓️" },
              { title: "Long-Term Support", desc: "Dedicated corporate SLA contracts guarantee response times for system support query runs.", icon: "🛠️" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-base font-black text-[#0F2C59]">{item.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Engagement Models Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-[10px] font-black tracking-wider uppercase mb-3">
            Flexible Collaboration
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2C59] mb-16">
            Engagement Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Dedicated Team", desc: "Hire full-time developers and system engineers dedicated to your project.", rate: "Strategic SLA Model" },
              { title: "Fixed Cost Project", desc: "Pre-defined budget mapped to detailed scope of work milestones.", rate: "Milestone Billed" },
              { title: "Time & Material", desc: "Flexible billing model aligned with evolving agile requirements.", rate: "Hourly Billed" },
              { title: "Managed Services", desc: "Outsource continuous system updates, backups, and security monitoring.", rate: "Monthly Recurring" }
            ].map((model, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-150 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-all">
                <div>
                  <h3 className="text-base font-black text-[#0F2C59] mb-2">{model.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">{model.desc}</p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#000072] bg-[#000072]/5 px-2.5 py-1 rounded-md">
                    {model.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Statistics Section (Dark Premium Layout) */}
      <section className="bg-[#0b1329] py-16 text-white overflow-hidden relative border-y border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black tracking-tight text-white block mb-1">120+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Projects Delivered</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black tracking-tight text-white block mb-1">45+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise Clients</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black tracking-tight text-white block mb-1">12+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Partners</span>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4.5xl font-black tracking-tight text-white block mb-1">8+</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Scale</span>
          </div>
        </div>
      </section>

      {/* 13. FAQ Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
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
            {[
              { q: "How long does a project take?", a: "A standard enterprise MVP web or mobile layout takes between 8 to 12 weeks. Large-scale database migrations or complex custom CRM/ERP integrations are planned in multi-phase blueprints." },
              { q: "Which technologies do you use?", a: "We primarily utilize React, Next.js, Laravel, Node.js, Flutter, PostgreSQL, MySQL, and major cloud engines like AWS, Azure, and Google Cloud." },
              { q: "Do you provide post-launch support?", a: "Yes, we write dedicated corporate SLA agreements covering database backup maintenance, server resource optimization, security updates, and hotline troubleshooting support." },
              { q: "Can you modernize legacy applications?", a: "We excel at auditing outdated software and migrating legacy frameworks into modern, containerized server nodes while maintaining 100% data preservation." },
              { q: "Do you provide source code?", a: "Upon project completion and billing finalization, complete ownership of the git repositories and codebase is handed over to your organization." },
              { q: "How do you ensure security?", a: "Every pipeline is built under strict OWASP Top 10 defenses, zero-trust endpoint authentications, and regular third-party security scans." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 bg-[#F8FAFC] text-left flex items-center justify-between font-black text-slate-800 hover:text-[#000072] transition-colors cursor-pointer border-0"
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

      {/* 14. Conversion-Focused CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0F2C59] via-[#0a1e3f] to-[#050f20] text-white overflow-hidden relative border-t border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Ready to Transform Your Business with Enterprise Applications?
          </h2>
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-medium">
            Consult our certified architects to schedule a complete systems audit or request a detailed custom proposal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#000072] text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#000072]/90 shadow-xl transition-all flex items-center gap-2 border-0">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
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
