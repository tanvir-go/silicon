"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Laptop } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: 4 values grid */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            WHY SCL
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59]">
            What Makes Silicon Computing Ltd Unique
          </h2>

          {/* 2x2 Grid of advantages */}
          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            
            {/* Advantage 1 */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-black text-[#D32F2F] flex items-center gap-1.5">
                <span>1.</span>
                <span className="text-[#0F2C59]">End-to-End Digital Transformation</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We engineer scalable custom pipelines from raw telemetry scopes to automated enterprise dashboards.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-black text-[#D32F2F] flex items-center gap-1.5">
                <span>2.</span>
                <span className="text-[#0F2C59]">Experienced Professionals</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct integration of senior cloud architects, AI engineers, and audited security specialists.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-black text-[#D32F2F] flex items-center gap-1.5">
                <span>3.</span>
                <span className="text-[#0F2C59]">Proven Track Record</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                A solid history of delivering resilient SCADA nodes, zero-trust cloud vaults, and ERP integrations.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-black text-[#D32F2F] flex items-center gap-1.5">
                <span>4.</span>
                <span className="text-[#0F2C59]">Client-Centric Approach</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We align complex technological solutions to match specific operational velocity and board metrics.
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-4">
            <Link href="/services">
              <button className="px-6 py-3 rounded-lg bg-[#0F2C59] hover:bg-[#0b1d3a] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg">
                LEARN MORE
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a 
              href="/Silicon computing Ltd Company Profile (v2).pdf" 
              download 
              target="_blank" 
              className="px-6 py-3 rounded-lg border-2 border-[#D32F2F] hover:bg-red-50 text-[#D32F2F] font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              COMPANY PROFILE &darr;
            </a>
          </div>
        </div>

        {/* Right Column: Premium Laptop / Workspace Mockup from screenshot */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[480px]">
            {/* The Laptop mockup wrapping */}
            <div className="relative bg-[#F0F4F7] rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              
              {/* Laptop Screen Content Display */}
              <div className="w-full h-full rounded-2xl bg-[#F0F4F7] relative overflow-hidden flex flex-col justify-between p-4">
                
                {/* Simulated Web Dashboard Header */}
                <div className="flex items-center justify-between border-b pb-2 border-slate-200">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[8px] font-mono text-slate-400">scl-dashboard.com</span>
                </div>

                {/* Flat Vector Illustration: Developer sitting at desk (Matches screenshot!) */}
                <div className="flex-1 flex items-center justify-center py-4 relative">
                  <svg viewBox="0 0 200 120" className="w-[85%] h-[85%]">
                    {/* Desk */}
                    <rect x="20" y="95" width="160" height="4" fill="#CBD5E1" rx="2" />
                    {/* Monitor Screen on Desk */}
                    <rect x="50" y="45" width="40" height="28" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
                    <rect x="52" y="47" width="36" height="20" fill="#38BDF8" rx="1" />
                    {/* Monitor Stand */}
                    <rect x="67" y="73" width="6" height="15" fill="#64748B" />
                    <ellipse cx="70" cy="88" rx="10" ry="2" fill="#475569" />
                    
                    {/* Keyboard & Mouse */}
                    <rect x="52" y="92" width="14" height="2" fill="#94A3B8" />
                    <circle cx="72" cy="92" r="1.5" fill="#94A3B8" />

                    {/* Developer Avatar (sitting in chair) */}
                    {/* Office Chair */}
                    <path d="M125,70 L140,70 L142,95 L120,95 Z" fill="#64748B" />
                    <rect x="128" y="95" width="4" height="15" fill="#334155" />
                    <rect x="120" y="110" width="20" height="2" fill="#334155" />
                    
                    {/* Character Body */}
                    <circle cx="115" cy="40" r="8" fill="#FDBA74" /> {/* Head */}
                    <path d="M102,48 L128,48 L132,75 L98,75 Z" fill="#0F2C59" /> {/* Torso */}
                    
                    {/* Table lamp */}
                    <rect x="25" y="65" width="2" height="30" fill="#64748B" />
                    <path d="M20,65 L32,65 L28,55 L24,55 Z" fill="#EF4444" />
                    {/* Glow */}
                    <path d="M15,95 L26,65 L38,95 Z" fill="#FEF08A" opacity="0.2" />

                    {/* Interactive workflow items / floating icons */}
                    <circle cx="150" cy="35" r="7" fill="#E2E8F0" />
                    <path d="M148,35 H152 M150,33 V37" stroke="#10B981" strokeWidth="1.5" />

                    <circle cx="170" cy="55" r="7" fill="#E2E8F0" />
                    <rect x="167" y="53" width="6" height="4" fill="#3B82F6" rx="0.5" />

                    <circle cx="160" cy="80" r="7" fill="#E2E8F0" />
                    <circle cx="160" cy="80" r="3" fill="#D32F2F" />
                  </svg>
                </div>

                {/* Dashboard bottom bar status */}
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-mono pt-1.5 border-t border-slate-100">
                  <span>CAPACITY: 98% OK</span>
                  <span>SYSTEM ONLINE</span>
                </div>

              </div>

            </div>

            {/* Flat Stand overlay at bottom representing laptop base */}
            <div className="w-[60%] h-2 bg-slate-350 mx-auto rounded-b-xl shadow-lg border border-slate-400/50" />
          </div>
        </div>

      </div>
    </section>
  );
}
