"use client";

import React from "react";
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
  Clock 
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
}

// Predefined detailed content matching the layout of the screenshot
const useCaseContent: Record<string, UseCaseData> = {
  "business-continuity": {
    title: "Maintain productivity and business continuity",
    subtitle: "Find solutions for work, learning, and business continuity in challenging times, so you can maintain dynamic connectivity.",
    heroIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Collaborative Meeting Flat SVG */}
        <ellipse cx="250" cy="220" rx="180" ry="80" fill="#E2E8F0" opacity="0.6" />
        <polygon points="120,220 380,220 330,170 170,170" fill="#2D3748" />
        {/* Table items */}
        <rect x="200" y="180" width="100" height="20" rx="4" fill="#000072" opacity="0.1" />
        {/* Characters */}
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
    evolveTitle: "Helping businesses evolve and thrive for the future of work",
    evolveDesc: "Workplaces are evolving designed for safe, remote collaboration. We provide the tools to scale operations, improve security, and bridge the gap between physical and digital worlds.",
    evolveIllustration: (
      <svg viewBox="0 0 500 350" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="80" width="300" height="200" rx="16" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="130" y="120" width="80" height="120" rx="8" fill="#3182CE" opacity="0.8" />
        <circle cx="280" cy="180" r="40" fill="#E53E3E" opacity="0.8" />
        {/* Arrows and links */}
        <path d="M220 180 H240" stroke="#000072" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    benefits: [
      { title: "Small and mid-sized businesses", desc: "Acquire specialized remote working software to stay active and productive. We support key application frameworks so teams work from anywhere in digital workspaces." },
      { title: "Healthcare professionals and first responders", desc: "For hospitals and first responders, run calculations securely, synchronize records instantly, and access real-time dashboards with zero performance dropouts." },
      { title: "Virtual education and call centers", desc: "Deploy high-performance systems to security boundary-isolated classrooms, online networks, and customer support call centers protected by strict HIPAA and compliance models." }
    ],
    trial: {
      title: "Advanced Trial License",
      desc: "Advance license trial capabilities that scaling user workloads without system boundaries so they run anywhere."
    },
    discoverTitle: "Discover how we've helped with the real issues of new hybrid workplaces",
    discoverCards: [
      { title: "Enable secure remote working with Virtual Desktop Infrastructure", desc: "Choose optimal endpoints and virtual software layouts to navigate dynamic workloads, remote teams, and offline data access safely." },
      { title: "Maintain worker productivity through collaboration apps", desc: "Integrate platforms like Teams and Slack with local security policies to avoid database leakage or document collision." },
      { title: "Maintain IT Operations through remote management and IT automation solutions", desc: "Automate server diagnostics and updates remotely, reducing administrative overhead." }
    ],
    bottomTitle: "What else might help your business?",
    bottomCards: [
      { title: "Financial asset management services", desc: "Evaluate legacy setups and optimize cloud billing loops to decrease overall software spending." },
      { title: "SCL Remote Storage", desc: "Securely scale storage arrays to hold petabytes of backups and telemetry logs." },
      { title: "SCL Software for Backup and Recovery", desc: "Run scheduled point-in-time snapshots to enable zero-loss database restore loops." }
    ]
  }
};

// Generates fallback Use Case content dynamically
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
    ]
  };
};

export default function UseCaseDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = useCaseContent[slug] || getFallbackUseCaseData(slug);

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
          <span className="text-primary-600 font-bold">{formatTitle(slug)}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.15]">
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
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm flex flex-col gap-4">
                <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. TRIAL BANNER */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
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

      {/* 5. HELVED DISCOVER ISSUES */}
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
                <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 text-left flex flex-col gap-2">
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

      {/* 6. WHAT ELSE MIGHT HELP */}
      <div className="w-full py-20 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59] tracking-tight">
              {content.bottomTitle}
            </h2>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.bottomCards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-150 shadow-sm flex flex-col gap-3 text-left">
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
