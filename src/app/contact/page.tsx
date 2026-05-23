"use client";

import React from "react";
import ContactSection from "@/sections/ContactSection";
import { Mail, Phone, ShieldCheck, HeartHandshake, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white  pt-32 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Direct Channels
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-primary">
            Reach Our Corporate Divisions
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Connect directly with our designated support lines and mailbox channels to streamline your inquiry path.
          </p>
        </div>

        {/* Department Breakdown Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              icon: HeartHandshake, 
              title: "Sales &amp; Partnerships", 
              email: "sales@siliconcomputing.com", 
              phone: "+880 2 12345678 Ext: 101",
              desc: "Enterprise AI implementations, cloud migrations, and digital roadmap scoping inquiries." 
            },
            { 
              icon: ShieldCheck, 
              title: "Technical Operations", 
              email: "ops@siliconcomputing.com", 
              phone: "+880 2 12345678 Ext: 102",
              desc: "Active client deployment support, SCADA grid security monitoring, and server credentials setup." 
            },
            { 
              icon: FileText, 
              title: "Executive Board Desk", 
              email: "board@siliconcomputing.com", 
              phone: "+880 2 12345678 Ext: 100",
              desc: "Strategic investments, global partnerships, press releases, and executive advisory desk." 
            }
          ].map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#F0F4F7] shadow-sm flex flex-col gap-4"
            >
              <div className="p-3 w-11 h-11 rounded-xl bg-primary-500/10 text-primary-650 flex items-center justify-center shrink-0">
                <dept.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-805 leading-tight">
                  <span dangerouslySetInnerHTML={{ __html: dept.title }} />
                </h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  {dept.desc}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-1 flex flex-col gap-2 font-mono text-[10px] text-slate-500">
                <span className="flex items-center gap-2 hover:text-primary-600 transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5" />
                  <a href={`mailto:${dept.email}`}>{dept.email}</a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  {dept.phone}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Master Contact Section (form + map) */}
      <ContactSection />
    </main>
  );
}
