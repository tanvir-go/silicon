"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f4f4f4] text-slate-600 border-t border-slate-200">
      
      {/* Upper footer directories */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Brand & Corporate Office Details */}
        <div className="md:col-span-6 flex flex-col gap-5 text-left">
          
          {/* Brand Logo Header */}
          <Link href="/" className="flex items-center group">
            <img src="/silicon.webp" alt="Silicon Computing Ltd Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Contact details list */}
          <div className="flex flex-col gap-3 text-xs text-slate-500 font-medium mt-1">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
              <span>BDBL Bhaban, (Level-9, West), 12 Kawran Bazar, Dhaka 1215</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#0F2C59] shrink-0" />
              <span>Phone: 09614556655</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#0F2C59] shrink-0" />
              <span>Email: sales@silicon.com.bd</span>
            </div>
          </div>

        </div>

        {/* Middle Column: Our Services */}
        <div className="md:col-span-3 flex flex-col gap-4 text-left">
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            OUR SERVICES
          </h4>
          
          <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
            {[
              { label: "Application", href: "/services/application" },
              { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
              { label: "Data & Database", href: "/services/data-database" },
              { label: "AI & IoT", href: "/services/ai-iot" },
              { label: "Cybersecurity", href: "/services/cybersecurity" },
              { label: "Managed IT & Consulting", href: "/services/managed-it-consulting" }
            ].map((srv, idx) => (
              <li key={idx}>
                <Link href={srv.href} className="hover:text-[#D32F2F] transition-colors duration-300">
                  {srv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Useful Links */}
        <div className="md:col-span-3 flex flex-col gap-4 text-left">
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            USEFUL LINKS
          </h4>

          <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold">
            {[
              { label: "Blog", href: "/blog" },
              { label: "News", href: "/news" },
              { label: "Articles", href: "/articles" },
              { label: "Our company", href: "/about" },
              { label: "Privacy & Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-conditions" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-[#D32F2F] transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Center Copyright row */}
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-400 font-semibold">
        <p>&copy; {currentYear} Silicon Computing Ltd.</p>
      </div>

    </footer>
  );
}
