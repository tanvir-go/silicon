"use client";

import React, { useState } from "react";
import { Globe, Save, Search, Sparkles, RefreshCw, CheckCircle2, ChevronRight, Eye, FileText, Settings, Key, Link2 } from "lucide-react";
import { useAdminState } from "@/hooks/useAdminState";

interface PageSEO {
  route: string;
  name: string;
  h1Tag: string;
  h2Tag: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  lastUpdated: string;
}

export default function PagesManagerPage() {
  const { addActivity } = useAdminState();

  // Pages SEO Configuration State
  const [pages, setPages] = useState<PageSEO[]>([
    {
      route: "/",
      name: "Homepage",
      h1Tag: "Next-Gen Enterprise Computing Solutions",
      h2Tag: "What Makes Silicon Computing Ltd Unique",
      metaTitle: "Silicon Computing Ltd - Leading IT Solutions & Enterprise Infrastructure",
      metaDescription: "Empowering businesses through innovation, cloud, databases, networking, and zero-trust cybersecurity solutions in Bangladesh.",
      metaKeywords: "IT Company, Private Cloud, Multi-Cloud, Data Management, Database Services, Systems storage, Networking, Cybersecurity, Dhaka, Bangladesh",
      canonicalUrl: "https://siliconcomputing.com/",
      lastUpdated: "2026-06-08 14:20"
    },
    {
      route: "/about",
      name: "About Us",
      h1Tag: "Empowering Global Enterprise Scaling",
      h2Tag: "Our Identity & Journey",
      metaTitle: "About Us - Silicon Computing Ltd",
      metaDescription: "Silicon Computing Ltd is a next-generation IT solutions company delivering private cloud, data management, and cybersecurity.",
      metaKeywords: "About Silicon, IT company history, Nasir Feroz, Dhaka IT enterprise, AI IoT solutions",
      canonicalUrl: "https://siliconcomputing.com/about",
      lastUpdated: "2026-06-10 17:55"
    },
    {
      route: "/services",
      name: "Services",
      h1Tag: "Advanced Enterprise IT Services",
      h2Tag: "Empowering Operations with Specialized Engineering Solutions",
      metaTitle: "Our Services - Silicon Computing Ltd",
      metaDescription: "Comprehensive cloud consulting, database optimization, app modernization, and cyberdefense support for enterprise operations.",
      metaKeywords: "Cloud migration, database tuning, app support, infrastructure integration, network maintenance",
      canonicalUrl: "https://siliconcomputing.com/services",
      lastUpdated: "2026-06-09 11:45"
    },
    {
      route: "/contact",
      name: "Contact Us",
      h1Tag: "Initiate B2B Technical Integration",
      h2Tag: "Connect with Senior Architects",
      metaTitle: "Contact Us - Silicon Computing Ltd",
      metaDescription: "Get in touch with our B2B consultation team in Dhaka for cloud, databases, and network hardware implementation.",
      metaKeywords: "Contact Silicon, IT support Dhaka, office address, phone email, get quote",
      canonicalUrl: "https://siliconcomputing.com/contact",
      lastUpdated: "2026-06-05 09:15"
    },
    {
      route: "/career",
      name: "Careers & Openings",
      h1Tag: "Shape the Future of Global Compute Infrastructure",
      h2Tag: "Why Build Your Technical Journey at Silicon?",
      metaTitle: "Careers & Current Openings - Silicon Computing Ltd",
      metaDescription: "Explore career opportunities, senior engineering jobs, internship openings, and technical roles at Silicon Computing.",
      metaKeywords: "Work at Silicon, IT jobs Bangladesh, developer positions, cloud architect openings",
      canonicalUrl: "https://siliconcomputing.com/career",
      lastUpdated: "2026-06-10 17:56"
    },
    {
      route: "/solution-by-product",
      name: "Solutions by Product",
      h1Tag: "Enterprise Hardware & Software Ecosystems",
      h2Tag: "Explore Compute, Storage, & Security Portfolios",
      metaTitle: "Solutions by Product Category - Silicon Computing Ltd",
      metaDescription: "High-performance compute nodes, network fabrics, data storage systems, and firewall architectures from global OEM leaders.",
      metaKeywords: "Compute storage network, Cisco Fortinet, QSAN server hardware, software licenses",
      canonicalUrl: "https://siliconcomputing.com/solution-by-product",
      lastUpdated: "2026-06-07 15:30"
    },
    {
      route: "/solution-by-use-case",
      name: "Solutions by Use Case",
      h1Tag: "Targeted Infrastructure Use Cases",
      h2Tag: "Tailored Technical Architecture for Real-world Challenges",
      metaTitle: "Solutions by Use Case - Silicon Computing Ltd",
      metaDescription: "Empower your workflows with tailored database clusters, zero-latency network endpoints, high-availability storage pools, and secure web access gateways.",
      metaKeywords: "Database clusters, low-latency, virtualization clusters, disaster recovery, cloud migration",
      canonicalUrl: "https://siliconcomputing.com/solution-by-use-case",
      lastUpdated: "2026-06-07 16:10"
    },
    {
      route: "/solution-by-industry",
      name: "Solutions by Industry",
      h1Tag: "Industry-Vertical Infrastructure Solutions",
      h2Tag: "Engineered Frameworks Built for Vertical Outcomes",
      metaTitle: "Solutions by Industry - Silicon Computing Ltd",
      metaDescription: "Tailored IT solutions for FinTech, Healthcare, Logistics, Government, and Higher Education sectors in Bangladesh.",
      metaKeywords: "FinTech IT, hospital cloud, academic servers, public sector computing, smart infrastructure",
      canonicalUrl: "https://siliconcomputing.com/solution-by-industry",
      lastUpdated: "2026-06-08 10:15"
    },
    {
      route: "/industries",
      name: "Industries Directory",
      h1Tag: "Ecosystems We Service",
      h2Tag: "Accelerating Modernization Across Diverse Markets",
      metaTitle: "Serviced Industries Directory - Silicon Computing Ltd",
      metaDescription: "Explore our industry portfolio, delivering technical assistance, hardware, and integration models to multiple growth fields.",
      metaKeywords: "Academic servers, banking systems, factory automation, hospital hardware, ISP integration",
      canonicalUrl: "https://siliconcomputing.com/industries",
      lastUpdated: "2026-06-08 10:30"
    },
    {
      route: "/blog",
      name: "Blogs & Articles",
      h1Tag: "Silicon Insights & Technical Chronicles",
      h2Tag: "Deep Dives into Systems Engineering and Enterprise Tech",
      metaTitle: "Blogs & Articles - Silicon Computing Ltd",
      metaDescription: "Keep pace with industry news, systems guidelines, server benchmarks, and security vulnerabilities compiled by our engineers.",
      metaKeywords: "IT blog, server benchmarks, tech news Bangladesh, systems tutorials",
      canonicalUrl: "https://siliconcomputing.com/blog",
      lastUpdated: "2026-06-10 11:27"
    },
    {
      route: "/team",
      name: "Management Team",
      h1Tag: "Led by Systems Visionaries",
      h2Tag: "Dedicated to Customer Success and Structural Excellence",
      metaTitle: "Our Management Team - Silicon Computing Ltd",
      metaDescription: "Meet the executive team, engineers, and directors steering Silicon Computing toward technical and customer milestones.",
      metaKeywords: "Silicon directors, board members, senior engineering leadership, Nasir Feroz",
      canonicalUrl: "https://siliconcomputing.com/team",
      lastUpdated: "2026-06-03 14:10"
    },
    {
      route: "/projects",
      name: "Key Projects",
      h1Tag: "Architectural Implementations and Case Histories",
      h2Tag: "Demonstrated Technical Milestones & Enterprise Deployments",
      metaTitle: "Our Key Projects - Silicon Computing Ltd",
      metaDescription: "Review case studies on our major implementations, server setups, fiber-optic migrations, and government datacenters.",
      metaKeywords: "datacenter projects, cloud migrations, local database audits, government systems setup",
      canonicalUrl: "https://siliconcomputing.com/projects",
      lastUpdated: "2026-06-04 15:50"
    },
    {
      route: "/mission-vision-values",
      name: "Mission, Vision & Values",
      h1Tag: "Our Corporate Mandate & Operational Philosophy",
      h2Tag: "Core Operational Philosophies Steering Digital Enablement",
      metaTitle: "Mission, Vision & Values - Silicon Computing Ltd",
      metaDescription: "Understand the core values, long-term technical vision, and strategic goals that dictate our business partnerships.",
      metaKeywords: "Silicon mission, corporate vision, client core values, Bangladesh tech vision",
      canonicalUrl: "https://siliconcomputing.com/mission-vision-values",
      lastUpdated: "2026-06-04 11:00"
    },
    {
      route: "/privacy-policy",
      name: "Privacy Policy",
      h1Tag: "Data Privacy & Information Security Policy",
      h2Tag: "Securing Personal and Corporate Telemetry Records",
      metaTitle: "Privacy Policy - Silicon Computing Ltd",
      metaDescription: "Learn how we protect client telemetry, configure security cookies, handle data storage, and conform to local privacy laws.",
      metaKeywords: "data security, privacy cookie terms, telemetry policies",
      canonicalUrl: "https://siliconcomputing.com/privacy-policy",
      lastUpdated: "2026-06-01 08:00"
    },
    {
      route: "/terms-conditions",
      name: "Terms & Conditions",
      h1Tag: "Standard Service Agreement & Terms of Use",
      h2Tag: "Governing Operational Engagements and Service Agreements",
      metaTitle: "Terms & Conditions - Silicon Computing Ltd",
      metaDescription: "Read the operational terms, warranty limits, support SLA agreements, and liability restrictions for Silicon Computing.",
      metaKeywords: "service legal terms, hardware support SLAs, warranty restrictions",
      canonicalUrl: "https://siliconcomputing.com/terms-conditions",
      lastUpdated: "2026-06-01 08:00"
    }
  ]);

  // Selected Page to Edit
  const [selectedRoute, setSelectedRoute] = useState<string>("/");
  const activePage = pages.find((p) => p.route === selectedRoute) || pages[0];

  // Temp form states
  const [h1Tag, setH1Tag] = useState(activePage.h1Tag);
  const [h2Tag, setH2Tag] = useState(activePage.h2Tag);
  const [metaTitle, setMetaTitle] = useState(activePage.metaTitle);
  const [metaDescription, setMetaDescription] = useState(activePage.metaDescription);
  const [metaKeywords, setMetaKeywords] = useState(activePage.metaKeywords);
  const [canonicalUrl, setCanonicalUrl] = useState(activePage.canonicalUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync inputs when selected page changes
  const handleSelectPage = (route: string) => {
    setSelectedRoute(route);
    const target = pages.find((p) => p.route === route);
    if (target) {
      setH1Tag(target.h1Tag);
      setH2Tag(target.h2Tag);
      setMetaTitle(target.metaTitle);
      setMetaDescription(target.metaDescription);
      setMetaKeywords(target.metaKeywords);
      setCanonicalUrl(target.canonicalUrl);
      setSaveSuccess(false);
    }
  };

  // Submit / Save settings handler
  const handleSaveSEO = (e: React.FormEvent) => {
    e.preventDefault();
    const nowStr = new Date().toISOString().replace("T", " ").substring(0, 16);

    setPages((prev) =>
      prev.map((p) =>
        p.route === selectedRoute
          ? {
              ...p,
              h1Tag,
              h2Tag,
              metaTitle,
              metaDescription,
              metaKeywords,
              canonicalUrl,
              lastUpdated: nowStr
            }
          : p
      )
    );

    addActivity(`Updated SEO tags & metadata for page: ${activePage.name} (${selectedRoute})`);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left">
      {/* Welcome & Info Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0F2C59] via-[#1b3f74] to-[#0c2446] text-white relative overflow-hidden shadow-lg border border-[#0F2C59]/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl text-[#0F2C59]"></div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">SEO &amp; Page Metadata Manager</h2>
          <p className="text-slate-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            Configure search engine optimization variables, edit target H1 &amp; H2 heading tags, define page titles, write meta descriptions, and assign canonical routes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Pages Directory List (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Globe className="w-5 h-5 text-[#0F2C59]" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Pages Directory</h3>
            </div>

            <div className="space-y-2.5">
              {pages.map((p) => {
                const isSelected = p.route === selectedRoute;
                return (
                  <button
                    key={p.route}
                    onClick={() => handleSelectPage(p.route)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-xs font-bold transition-all duration-200 text-left ${
                      isSelected
                        ? "bg-[#0F2C59]/5 text-[#0F2C59] border-[#0F2C59]/20 shadow-sm"
                        : "border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 text-slate-650"
                    }`}
                  >
                    <div>
                      <span className="block font-bold text-slate-800 leading-snug">{p.name}</span>
                      <span className="font-mono text-[10px] text-slate-400 font-semibold">{p.route}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-400 font-semibold hidden sm:inline">Updated: {p.lastUpdated.split(" ")[0]}</span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 ${isSelected ? "text-[#0F2C59] translate-x-0.5" : ""}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: SEO Form & Preview Editor (Col 8) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#0F2C59]" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  SEO Tags for: <span className="text-[#0F2C59] font-black">{activePage.name}</span>
                </h3>
              </div>
              
              {saveSuccess && (
                <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-black uppercase tracking-wider animate-pulse">
                  <CheckCircle2 className="w-4 h-4" />
                  SEO Updated
                </div>
              )}
            </div>

            <form onSubmit={handleSaveSEO} className="space-y-5 text-xs text-left text-slate-600 font-semibold">
              
              {/* Canonical URL & Target Route */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Page Route (Read-Only)</label>
                  <input
                    type="text"
                    disabled
                    value={activePage.route}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-slate-50 text-slate-450 font-mono font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                    <Link2 className="w-3.5 h-3.5" />
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://siliconcomputing.com/..."
                    value={canonicalUrl}
                    onChange={(e) => setCanonicalUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                  />
                </div>
              </div>

              {/* H1 Heading Tag & H2 Subheading Tag */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    H1 Heading Tag
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter page primary h1 tag text"
                    value={h1Tag}
                    onChange={(e) => setH1Tag(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    H2 Subheading Tag
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter page secondary h2 tag text"
                    value={h2Tag}
                    onChange={(e) => setH2Tag(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                  />
                </div>
              </div>

              {/* Meta Title */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#0f2c59]" />
                  Meta Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Search Engine Title tag"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                />
              </div>

              {/* Meta Description */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Meta Description
                </label>
                <textarea
                  placeholder="Provide page summary snippet for Google search outputs..."
                  rows={3}
                  required
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium resize-none leading-relaxed"
                />
              </div>

              {/* Meta Keywords */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                  <Key className="w-3.5 h-3.5" />
                  SEO Keywords
                </label>
                <input
                  type="text"
                  placeholder="comma-separated tags e.g. Cloud, Datacenter, IT Company"
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0F2C59] hover:bg-[#0b2143] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer border-0 shadow-sm flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  Save SEO Settings
                </button>
              </div>

            </form>
          </div>

          {/* Search Result Simulator Panel */}
          <div className="bg-slate-900 p-6 rounded-2xl text-white space-y-4 text-left border border-slate-800">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Google Search Result Simulator</span>
            
            <div className="space-y-1">
              <span className="text-[11px] text-[#A1A1AA] flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#10B981]" />
                {canonicalUrl || "https://siliconcomputing.com/"}
              </span>
              <h4 className="text-lg font-semibold text-[#818CF8] hover:underline cursor-pointer">
                {metaTitle || "Meta Title Preview..."}
              </h4>
              <p className="text-xs text-[#D1D5DB] leading-relaxed max-w-2xl font-medium">
                {metaDescription || "Meta description preview will be displayed here in search outputs."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
