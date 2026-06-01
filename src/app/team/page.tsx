"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Calculator, Box, Cpu, ShieldCheck, Palette, TrendingUp, Compass, ArrowRight, Mail, Linkedin, Briefcase, Layers
} from "lucide-react";
import { teamData, TeamMember } from "@/data/mockData";
import Link from "next/link";
import ContactSection from "@/sections/ContactSection";

const tabCategories = [
  { id: "all", label: "ALL DEPARTMENTS", icon: Layers },
  { id: "management", label: "MANAGEMENT", icon: Compass },
  { id: "hr-admin", label: "HR & ADMIN", icon: Users },
  { id: "accounts-finance", label: "ACCOUNTS & FINANCE", icon: Calculator },
  { id: "supply-chain", label: "SUPPLY CHAIN (SCM)", icon: Box },
  { id: "engineering", label: "ENGINEERING", icon: Cpu },
  { id: "enterprise-support", label: "ENTERPRISE SUPPORT", icon: ShieldCheck },
  { id: "creative", label: "CREATIVE", icon: Palette },
  { id: "business", label: "BUSINESS", icon: TrendingUp },
  { id: "techno-sales", label: "TECHNO SALES", icon: Briefcase }
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMembers = activeTab === "all"
    ? teamData
    : teamData.filter(
        (member) => member.department.toLowerCase() === activeTab.toLowerCase()
      );

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            Executive &amp; Operations Board
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            The Leadership &amp; Engineering Team
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Meet the experienced technologists, project consultants, and operations managers directing high-performance multi-cloud networks at SCL.
          </p>
        </div>

        {/* Tab Selection Bar (Strictly Two Rows of Tabs) */}
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-md mb-16 max-w-5xl mx-auto flex flex-col items-center gap-3">
          
          {/* Row 1: First 5 Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
            {tabCategories.slice(0, 5).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black tracking-wide uppercase transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0F2C59] text-white shadow-md"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Row 2: Next 4 Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
            {tabCategories.slice(5).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black tracking-wide uppercase transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0F2C59] text-white shadow-md"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Members Dynamic Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-6xl mx-auto"
            >
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Rounded profile photo wrapper with its own group hover state */}
                      <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-5 relative bg-slate-50 border border-slate-100 group">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay: Email and LinkedIn Floating Panel on Right Edge */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20">
                          <a
                            href={`mailto:${member.email}`}
                            className="w-9 h-9 rounded-xl bg-white/95 text-[#0F2C59] hover:bg-[#000072] hover:text-white flex items-center justify-center shadow-md transition-all scale-95 hover:scale-105"
                            title="Send Email"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/95 text-[#0F2C59] hover:bg-[#000072] hover:text-white flex items-center justify-center shadow-md transition-all scale-95 hover:scale-105"
                            title="LinkedIn Profile"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Name and Role */}
                      <h3 className="text-base font-extrabold text-[#0F2C59] mb-1.5 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-black text-[#00B074] uppercase tracking-wider leading-relaxed">
                        {member.role}
                      </p>
                    </div>

                    {/* Bottom bar with Details link and Badge */}
                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                      <Link
                        href={`/team/${member.id}`}
                        className="flex items-center gap-1.5 text-xs font-black text-slate-400 hover:text-[#000072] transition-colors"
                      >
                        <span>VIEW STORY</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <span className="bg-slate-50 border border-slate-100 text-slate-400 font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest">
                        {member.badge}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16 flex flex-col items-center">
                  <p className="text-sm font-bold text-slate-400">No members configured under this department yet.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      <ContactSection />
    </main>
  );
}
