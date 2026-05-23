"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BusinessSolutions() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: IT Solutions Text Block */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left relative z-10">
          
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            ENTERPRISE SOLUTIONS
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59]">
            IT Solutions for greater efficiency and growth
          </h2>

          <p className="text-sm text-slate-650 leading-relaxed font-medium">
            Accelerating your enterprise IT infrastructure with cutting-edge technical services, custom CRM/ERP integrations, and robust database architectures designed to eliminate workflow bottlenecks and drive corporate growth.
          </p>

          {/* Quick Checklist Bullets */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              "High-performance custom ERP systems built to automate logistics.",
              "Secure multi-cloud container orchestration using Kubernetes namespaces.",
              "Persistent zero-trust boundary configuration and threat management."
            ].map((bullet, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-500 font-semibold">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link href="/services">
              <button className="px-6 py-3 rounded-lg bg-[#0F2C59] hover:bg-[#0b1d3a] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg">
                LEARN MORE
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Three Overlapping Sleek Browser Dashboards (Matches screenshot!) */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[350px]">
          <div className="relative w-full max-w-[440px] h-[300px]">
            
            {/* Dashboard 1 (Back-left, slightly smaller) */}
            <div className="absolute top-0 left-0 w-[75%] bg-[#F0F4F7] rounded-xl shadow-md p-3 select-none pointer-events-none scale-95 opacity-60 z-0">
              <div className="flex gap-1.5 border-b pb-2 border-slate-100">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <div className="h-24 bg-[#F0F4F7] rounded-lg mt-3 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-[#0F2C59] animate-spin" />
              </div>
            </div>

            {/* Dashboard 2 (Middle-right, slightly lower) */}
            <div className="absolute top-8 right-0 w-[80%] bg-[#F0F4F7] rounded-xl shadow-lg p-4 select-none pointer-events-none z-10 hover:scale-102 transition-transform duration-300">
              <div className="flex items-center justify-between border-b pb-2.5 border-slate-150">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="text-[7px] font-mono text-slate-400">capacity_index</span>
              </div>
              
              <div className="flex flex-col gap-2 mt-3 text-[9px] font-semibold text-slate-600">
                <div className="flex justify-between border-b pb-1.5 border-slate-100">
                  <span>Server Pod Host A</span>
                  <span className="text-emerald-500 font-bold">100% SECURE</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-slate-100">
                  <span>SCADA Boundary Shield</span>
                  <span className="text-emerald-500 font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>Database Key Rotation</span>
                  <span className="text-amber-500 font-bold">OPTIMIZED</span>
                </div>
              </div>
            </div>

            {/* Dashboard 3 (Front-center, overlapping everything, beautifully styled!) */}
            <div className="absolute bottom-0 left-6 w-[80%] bg-[#F0F4F7] rounded-xl shadow-2xl p-4 z-20 hover:scale-102 transition-transform duration-300">
              <div className="flex items-center justify-between border-b pb-2.5 border-slate-150">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="text-[7px] font-mono text-slate-400">scl_enterprise_portal</span>
              </div>

              {/* Graphical simulation inside dashboard */}
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]" />
                  <span className="text-[9px] font-bold text-slate-700">Enterprise AI Engine Analytics</span>
                </div>
                
                {/* Horizontal status progress loads */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex justify-between text-[7px] text-slate-400 font-mono">
                    <span>INFERENCE VELOCITY</span>
                    <span>99.4%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0F2C59] to-[#D32F2F] w-[94%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
