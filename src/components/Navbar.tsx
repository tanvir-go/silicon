"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const getSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Products", href: "/collections/product", hasDropdown: true },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/solution-by-industry" },
  { label: "Blogs", href: "/blog" },
  { label: "Company", href: "/about", hasDropdown: true },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  // Scroll listener to toggle solid white vs transparent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active link state to prevent shared layoutId collisions
  const getIsActive = (label: string): boolean => {
    if (label === "Solutions") return pathname === "/solution-by-product";
    if (label === "Services") return pathname === "/services";
    if (label === "Products") return pathname === "/collections/product";
    if (label === "Industries") return pathname === "/solution-by-industry";
    if (label === "Blogs") return pathname === "/blog";
    if (label === "Company") return pathname === "/about" || pathname === "/team";
    if (label === "Contact us") return pathname === "/contact";
    return false;
  };

  // SOLUTIONS Mega Menu content
  const renderSolutionsMenu = () => (
    <div className="grid grid-cols-3 gap-8">
      {/* Column 1: Solution by Product */}
      <div className="flex flex-col gap-4 text-left border-r border-slate-100 pr-4">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          Solution by Product
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
          {["Compute", "Storage", "Network", "Security", "Software", "Database", "Supercomputing"].map((item) => (
            <li key={item}>
              <Link href={`/solution-by-product/${getSlug(item)}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link href="/solution-by-product" onClick={() => setHoveredMenu(null)} className="text-[#D32F2F] hover:underline flex items-center gap-1 font-bold">
              &gt; View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2: Solution by Use Case */}
      <div className="flex flex-col gap-4 text-left border-r border-slate-100 pr-4">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          Solution by Use Case
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
          {[
            "Artificial Intelligence (AI)",
            "Data Protection",
            "Business Continuity",
            "High Performance Computing (HPC)",
            "Data Storage",
            "Hyperconverged Infrastructure (HCI)",
            "Ransomware Protection",
            "Application Performance",
            "IT Service Management (ITSM)"
          ].map((item) => (
            <li key={item}>
              <Link href={`/solution-by-use-case/${getSlug(item)}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link href="/solution-by-use-case" onClick={() => setHoveredMenu(null)} className="text-[#D32F2F] hover:underline flex items-center gap-1 font-bold">
              &gt; View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3: Solution by Industries */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          Solution by Industries
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
          {[
            "Banking and Finance",
            "Manufacturing",
            "Healthcare",
            "Education",
            "Retail",
            "Public Sector"
          ].map((item) => (
            <li key={item}>
              <Link href={`/solution-by-industry/${getSlug(item)}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link href="/solution-by-industry" onClick={() => setHoveredMenu(null)} className="text-[#D32F2F] hover:underline flex items-center gap-1 font-bold">
              &gt; View All
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  // PRODUCTS Mega Menu content
  const renderProductsMenu = () => (
    <div className="grid grid-cols-3 gap-6">
      {/* Column 1: Product types */}
      <div className="flex flex-col gap-4 text-left border-r border-slate-100 pr-3">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          Product types
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
          {[
            "Artificial Intelligence (AI)",
            "Data Protection",
            "Business Continuity",
            "High Performance Computing (HPC)",
            "Data Storage",
            "Hyperconverged Infrastructure (HCI)",
            "Ransomware Protection",
            "Application Performance",
            "IT Service Management (ITSM)"
          ].map((item) => (
            <li key={item}>
              <Link href={`/collections/${getSlug(item)}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link href="/collections/product" onClick={() => setHoveredMenu(null)} className="text-[#D32F2F] hover:underline flex items-center gap-1 font-bold">
              &gt; View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2: Product brands */}
      <div className="flex flex-col gap-4 text-left border-r border-slate-100 pr-3">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          Product brands
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
          {["HPE", "Dell", "Lenovo", "Cisco", "Huawei", "Broadcom", "IBM", "Intel", "Micron", "Oracle"].map((brand) => (
            <li key={brand}>
              <Link href={`/collections/${brand.toLowerCase()}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {brand}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: All products and solutions */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider">
          All products and solutions
        </h4>
        <ul className="flex flex-col gap-2.5 text-xs text-[#0F2C59] font-black">
          {[
            { label: "Product types", href: "/collections/product" },
            { label: "Solutions by topic", href: "/solution-by-product" },
            { label: "Industries", href: "/solution-by-industry" }
          ].map((item) => (
            <li key={item.label}>
              <Link href={item.href} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // SERVICES Mega Menu content
  const renderServicesMenu = () => (
    <div className="grid grid-cols-12 gap-8 items-center">
      {/* Left side Links: 40% */}
      <div className="col-span-5 flex flex-col gap-4 text-left border-r border-slate-100 pr-6">
        <h4 className="text-base font-black text-[#0F2C59] tracking-tight">
          Services
        </h4>
        <ul className="flex flex-col gap-3 text-xs text-slate-500 font-semibold">
          {[
            "Application Services",
            "Cloud & Infrastructure Services",
            "Data & Database Services",
            "AI & IoT Solutions",
            "Cybersecurity Services",
            "Managed IT & Consulting"
          ].map((item) => (
            <li key={item}>
              <Link href={`/services/${getSlug(item)}`} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-2 pt-2 border-t border-slate-100/60">
            <Link href="/services" onClick={() => setHoveredMenu(null)} className="text-[#D32F2F] hover:underline flex items-center gap-1 font-bold">
              &gt; View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side Mock panels/dashboard visual mockup: 60% */}
      <div className="col-span-7 pl-4">
        <div className="relative h-[220px] w-full flex items-center justify-center bg-[#F0F4F7]/50 rounded-2xl p-6 overflow-hidden select-none">
          <div className="relative w-full max-w-[240px] h-full flex flex-col justify-center items-center">
            {/* Overlapping Mock Dashboard panels */}
            <div className="absolute top-2 w-[85%] h-[70%] bg-slate-100/50 border border-slate-200/30 rounded-xl shadow-sm opacity-60 scale-95 translate-y-[-8px]" />
            <div className="absolute top-6 w-[92%] h-[75%] bg-[#F0F4F7] rounded-xl shadow-md opacity-85 scale-98 translate-y-[-4px]" />
            <div className="absolute top-10 w-full h-[78%] bg-[#F0F4F7] rounded-xl shadow-lg p-3.5 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[7px] font-black text-slate-350 uppercase tracking-widest">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center shrink-0">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-2 w-[70%] bg-slate-100 rounded" />
                  <div className="h-1.5 w-[45%] bg-slate-100 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mt-2 border-t pt-2 border-slate-100 ">
                <div className="h-5 bg-gradient-to-tr from-[#0F2C59]/10 to-[#D32F2F]/10 rounded flex items-center justify-center text-[7px] font-black text-[#0F2C59]">
                  SLA
                </div>
                <div className="h-5 bg-emerald-500/10 rounded flex items-center justify-center text-[7px] font-black text-emerald-600">
                  99.9%
                </div>
                <div className="h-5 bg-[#D32F2F]/10 rounded flex items-center justify-center text-[7px] font-black text-[#D32F2F]">
                  API
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C59] " />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 " />
          </div>
        </div>
      </div>
    </div>
  );

  // COMPANY Mega Menu content
  const renderCompanyMenu = () => (
    <div className="grid grid-cols-12 gap-8 items-center">
      {/* Left side Links: 40% */}
      <div className="col-span-5 flex flex-col gap-4 text-left border-r border-slate-100 pr-6">
        <h4 className="text-base font-black text-[#0F2C59] tracking-tight">
          About Us
        </h4>
        <ul className="flex flex-col gap-3 text-xs text-slate-500 font-semibold">
          {[
            { label: "Our Company", href: "/about" },
            { label: "Team", href: "/team" },
            { label: "Career", href: "/career" },
            { label: "Mission vision values", href: "/mission-vision-values" }
          ].map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} onClick={() => setHoveredMenu(null)} className="hover:text-[#D32F2F] transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side exact 2x2 photo collage: 60% */}
      <div className="col-span-7 pl-4">
        <div className="grid grid-cols-2 gap-3.5">
          <div className="flex flex-col gap-3.5">
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] border border-slate-150">
              <img
                src="/about1.webp"
                alt="Corporate teamwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] border border-slate-150">
              <img
                src="/about2.webp"
                alt="Technical synergy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center h-full">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-slate-200 shadow-md flex items-center justify-center shrink-0">
              <img
                src="/Nasir Feroz.png"
                alt="MD Nasir Feroz CEO"
                className="w-full h-full object-cover animate-pulse"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] border border-slate-150 w-full">
              <img
                src="/about3.webp"
                alt="Consultation workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200" 
          : "py-5 bg-white border-b border-slate-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center group shrink-0">
          <img src="/silicon.webp" alt="Silicon Computing Ltd Logo" className="h-9 xl:h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5.5 shrink-0">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.label);
            return (
              <div
                key={link.label}
                onMouseEnter={() => link.hasDropdown && setHoveredMenu(link.label)}
                onMouseLeave={() => link.hasDropdown && setHoveredMenu(null)}
                className="relative py-3 cursor-pointer group/nav"
              >
                <Link
                  href={link.href}
                  onClick={() => setHoveredMenu(null)}
                  className={cn(
                    "inline-flex items-center gap-0.5 xl:gap-1 text-[10px] xl:text-[11px] font-extrabold tracking-wider xl:tracking-widest transition-all duration-300 uppercase",
                    isActive
                      ? "text-[#D32F2F]"
                      : "text-[#0F2C59] hover:text-[#D32F2F]"
                  )}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown 
                      className={cn(
                        "w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0 transition-transform duration-300", 
                        hoveredMenu === link.label ? "rotate-180 text-[#D32F2F]" : "text-[#0F2C59]"
                      )} 
                    />
                  )}
                </Link>
                
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D32F2F]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Controls & Support Ticket */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4.5 shrink-0">
          {/* Search Trigger */}
          <button className="text-[#0F2C59] hover:text-[#D32F2F] transition-colors duration-300 cursor-pointer">
            <Search className="w-4 h-4" />
          </button>

          {/* Support Ticket Button */}
          <Link href="/contact?support=true">
            <button className="px-3 xl:px-4 py-1.5 xl:py-2 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 font-black text-[9px] xl:text-[10px] tracking-wide rounded transition-all duration-300 cursor-pointer whitespace-nowrap">
              RAISE SUPPORT TICKET
            </button>
          </Link>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-[#0F2C59] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Dropdown Floating Mega Menu container (Desktop) */}
        <AnimatePresence>
          {hoveredMenu && (
            <div
              onMouseEnter={() => setHoveredMenu(hoveredMenu)}
              onMouseLeave={() => setHoveredMenu(null)}
              className="absolute top-full left-0 right-0 mx-auto z-40 pt-4 px-6 flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={cn(
                  "bg-white border border-slate-200/80 rounded-3xl p-8 shadow-2xl relative w-full",
                  hoveredMenu === "Solutions" && "max-w-4xl",
                  hoveredMenu === "Products" && "max-w-5xl",
                  hoveredMenu === "Services" && "max-w-5xl",
                  hoveredMenu === "Company" && "max-w-5xl"
                )}
              >
                {hoveredMenu === "Solutions" && renderSolutionsMenu()}
                {hoveredMenu === "Products" && renderProductsMenu()}
                {hoveredMenu === "Services" && renderServicesMenu()}
                {hoveredMenu === "Company" && renderCompanyMenu()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden w-full bg-white border-b border-slate-200 absolute top-full left-0 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = getIsActive(link.label);
                const isExpanded = mobileExpandedMenu === link.label;

                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => {
                        if (link.hasDropdown) {
                          setMobileExpandedMenu(isExpanded ? null : link.label);
                        } else {
                          setIsMobileMenuOpen(false);
                          window.location.href = link.href;
                        }
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 rounded-lg font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-between uppercase",
                        isActive
                          ? "bg-slate-50/80 text-[#D32F2F] font-extrabold"
                          : "text-[#0F2C59] hover:bg-slate-50/50"
                      )}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && (
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-250", isExpanded && "rotate-180")} />
                      )}
                    </button>

                    {/* Accordion Expand (Collapsible list on mobile) */}
                    <AnimatePresence>
                      {link.hasDropdown && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 flex flex-col gap-2.5 mt-2 mb-4 border-l border-slate-100"
                        >
                          {link.label === "Solutions" && (
                            <>
                              <Link href="/solution-by-product" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Solutions by Product</Link>
                              <Link href="/solution-by-product" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Solutions by Use Case</Link>
                              <Link href="/solution-by-industry" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Solutions by Industries</Link>
                            </>
                          )}
                          {link.label === "Products" && (
                            <>
                              <Link href="/collections/product" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Product Types</Link>
                              <Link href="/collections/product" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Product Brands</Link>
                              <Link href="/collections/product" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Featured Products</Link>
                            </>
                          )}
                          {link.label === "Services" && (
                            <>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Application Services</Link>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Cloud & Infrastructure</Link>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Data & Database</Link>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">AI & IoT Solutions</Link>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Cybersecurity Services</Link>
                              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Managed IT & Consulting</Link>
                            </>
                          )}
                          {link.label === "Company" && (
                            <>
                              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Our Company</Link>
                              <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Team</Link>
                              <Link href="/career" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Career</Link>
                              <Link href="/mission-vision-values" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-slate-500 font-bold">Mission Vision Values</Link>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                <button className="w-full py-3 rounded-lg bg-[#0F2C59] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md">
                  REQUEST CONSULTATION
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
