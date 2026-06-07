"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Briefcase,
  Users,
  MessageSquare
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";

interface IndustryDetailData {
  title: string;
  subtitle: string;
  heroIllustration: React.ReactNode;
  accordionTitle: string;
  accordionGraphic: React.ReactNode;
  accordions: {
    title: string;
    desc: string;
  }[]; // exactly 6 items
  caseStudyTitle: string;
  caseStudySubtitle: string;
  caseStudyDesc: string;
  valueTitle: string;
  valueDesc: string;
  valueCards: {
    title: string;
    desc: string;
  }[]; // exactly 6 items
  relatedTitle: string;
  relatedProducts: {
    title: string;
    link: string;
  }[]; // exactly 3 items
}

const manufacturingContent: IndustryDetailData = {
  title: "Digital Manufacturing for IT and OT",
  subtitle: "Industry 4.0 solutions that help manufacturers transform product development, enable efficient collaboration and engineering, run smarter operations, and gain better insights from data across the enterprise.",
  heroIllustration: (
    <svg viewBox="0 0 500 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="30" width="400" height="260" rx="20" fill="#0F2C59" />
      <rect x="58" y="38" width="384" height="244" rx="14" fill="#FFFFFF" />
      <path d="M100 220 L160 160 L220 180 L300 130 L380 200" stroke="#3182CE" strokeWidth="4" strokeLinecap="round" />
      <circle cx="300" cy="130" r="6" fill="#D32F2F" />
      <rect x="180" y="70" width="140" height="40" rx="8" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="2" />
      <circle cx="200" cy="90" r="10" fill="#319795" />
      <circle cx="230" cy="90" r="10" fill="#D32F2F" />
    </svg>
  ),
  accordionTitle: "Proven experience in manufacturing excellence",
  accordionGraphic: (
    <svg viewBox="0 0 400 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="320" height="270" rx="20" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="4" />
      <circle cx="200" cy="150" r="50" fill="#000072" opacity="0.1" />
      <path d="M160 180 C180 150 220 150 240 180" stroke="#000072" strokeWidth="6" strokeLinecap="round" />
      <rect x="100" y="240" width="200" height="30" rx="6" fill="#3182CE" opacity="0.8" />
    </svg>
  ),
  accordions: [
    { title: "Accelerate product development", desc: "Speed time to market without compromising quality. High-performance compute combined with AI can enable manufacturers to automate processes, predict maintenance, improve uptime, and boost productivity." },
    { title: "Reduce product defects with AI-powered analytics", desc: "Deploy cognitive vision systems to scan production frames in real-time, catching deviations automatically." },
    { title: "Streamline plant connectivity", desc: "Bridge operational technology (OT) sensors and corporate IT servers through unified edge gateway networks." },
    { title: "Secure the IIoT infrastructure", desc: "Apply zero-trust boundary encryption to protect physical machinery controls from external cyber threats." },
    { title: "Get the digital transformation expertise you need", desc: "Engage SCL systems engineers to audit legacy server cabinets and lay out clear migration paths." },
    { title: "Take control of your SAP S/4HANA migration strategy", desc: "Re-platform database ledgers cleanly over cloud-native container clusters with zero transaction loss." }
  ],
  caseStudyTitle: "Danfoss advances innovation and sustainability",
  caseStudySubtitle: "Operational Efficiencies",
  caseStudyDesc: "An edge-to-cloud platform keeps the food business running and responds to their customer demands.",
  valueTitle: "Delivering business value to manufacturers",
  valueDesc: "Our edge-to-cloud industrial solutions enable digital transformation in manufacturing on all the processes that require faster connectivity and significant processing power.",
  valueCards: [
    { title: "Increased yield and revenue", desc: "Process control and automation relies on networks and compute platforms to move orders into production orders, and finally into product." },
    { title: "Cost reduction", desc: "Optimize network and compute infrastructure to lower operational costs by streamlining processes and improving efficiency." },
    { title: "Improved product quality", desc: "Reliable networks and compute power support advanced monitoring and control systems, reducing consistent product quality and reducing defects." },
    { title: "Faster time-to-market", desc: "Accelerated design, prototyping, and production processes through enhanced compute capabilities and network connectivity enable quicker delivery of new products to market." },
    { title: "Supply chain security", desc: "Enhanced visibility and control over supply chain operations through secure network and compute solutions reduce lead times and improve inventory management." },
    { title: "Worker safety", desc: "Real-time monitoring and analytics, enabled by reliable network and compute solutions, reduce the risk of accidents and improve overall workplace safety." }
  ],
  relatedTitle: "Related products for manufacturing",
  relatedProducts: [
    { title: "SCL ARUBA NETWORKING", link: "/solution-by-product/network" },
    { title: "SCL INFRASTRUCTURE", link: "/solution-by-product/compute" },
    { title: "SCL AI SOLUTIONS", link: "/solution-by-product/artificial-intelligence-ai" }
  ]
};

export default function SolutionByIndustryLandingPage() {
  const [openIdx, setOpenIdx] = useState<number>(0);

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
          <span className="text-primary-600 font-bold">Solution by Industries</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.15]">
              {manufacturingContent.title}
            </h1>
            <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              {manufacturingContent.subtitle}
            </p>
            <div className="mt-8">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-[#000072] hover:bg-[#000072]/90 text-white font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer inline-flex">
                Talk to Sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            {manufacturingContent.heroIllustration}
          </div>
        </div>
      </div>

      {/* 2. ACCORDION / CAPABILITIES SECTION */}
      <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              {manufacturingContent.accordionTitle}
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphics */}
            <div className="lg:col-span-5 w-full max-w-md">
              {manufacturingContent.accordionGraphic}
            </div>

            {/* Right Accordion Panel */}
            <div className="lg:col-span-7 flex flex-col gap-3 w-full">
              {manufacturingContent.accordions.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#F8FAFC]">
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-extrabold text-sm sm:text-base text-[#0F2C59] hover:bg-slate-100/50 transition-colors cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium bg-white">
                        {item.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CASE STUDY / STORIES BOX */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="rounded-3xl bg-slate-100 p-8 md:p-10 border border-slate-200 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-black uppercase text-[#D32F2F] tracking-widest">{manufacturingContent.caseStudySubtitle}</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2C59] mt-2">{manufacturingContent.caseStudyTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium leading-relaxed">{manufacturingContent.caseStudyDesc}</p>
          </div>
          <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-[#000072] hover:bg-[#000072]/90 text-white font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer transition-all duration-300 shadow-md shrink-0">
            Learn More <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 4. BUSINESS VALUE GRID */}
      <div className="w-full py-20 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
              {manufacturingContent.valueTitle}
            </h2>
            <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed font-medium">
              {manufacturingContent.valueDesc}
            </p>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-6 rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingContent.valueCards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 shadow-sm flex flex-col gap-3 text-left">
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. NEXT STEPS CALLOUT */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="rounded-3xl bg-gradient-to-tr from-[#0F2C59] to-[#000072] text-white p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Take the next steps
            </h2>
            <p className="text-slate-300 mt-4 text-xs sm:text-sm leading-relaxed">
              Ready to get started? Explore purchasing options or engage with SCL experts to determine the best solutions for your business needs.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase hover:bg-slate-50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-md">
              Chat now <MessageSquare className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 6. RELATED PRODUCTS SECTION */}
      <div className="w-full py-16 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-lg font-black text-[#0F2C59] mb-4">
            {manufacturingContent.relatedTitle}
          </h2>
          <div className="h-1 w-16 bg-[#D32F2F] mx-auto mb-10 rounded" />
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {manufacturingContent.relatedProducts.map((prod, idx) => (
              <Link 
                key={idx} 
                href={prod.link}
                className="px-6 py-3 rounded-xl border border-slate-200 shadow-sm bg-white hover:border-[#000072] text-[#000072] hover:text-[#D32F2F] transition-all duration-300 font-extrabold text-xs tracking-wider uppercase cursor-pointer"
              >
                {prod.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactSection />
    </main>
  );
}
