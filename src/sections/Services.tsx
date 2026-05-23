"use client";

import React from "react";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            OUR GUARANTEE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59] mt-3">
            We guarantee reliable IT solutions for your business success
          </h2>
        </div>

        {/* Three Value Pillars Grid (Matches screenshot!) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pillar 1: High-Performance */}
          <div className="group p-8 rounded-2xl bg-[#F0F4F7] shadow-md hover:shadow-xl hover:transition-all duration-300 flex flex-col items-center text-center gap-5">
            <div className="p-4 rounded-full bg-[#F4F7FC] text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
            
            <h3 className="font-extrabold text-lg text-[#0F2C59] tracking-tight">
              High-Performance
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Delivering customized systems engineered with minimal hardware footprints, extremely low API latency index, and highly optimized processing threads.
            </p>
          </div>

          {/* Pillar 2: Quick Delivery */}
          <div className="group p-8 rounded-2xl bg-[#F0F4F7] shadow-md hover:shadow-xl hover:transition-all duration-300 flex flex-col items-center text-center gap-5">
            <div className="p-4 rounded-full bg-[#F4F7FC] text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            
            <h3 className="font-extrabold text-lg text-[#0F2C59] tracking-tight">
              Quick Delivery
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Allocating dedicated systems architects immediately to scope, compile, and deploy enterprise-level workloads in highly optimized cycles.
            </p>
          </div>

          {/* Pillar 3: Premium Security */}
          <div className="group p-8 rounded-2xl bg-[#F0F4F7] shadow-md hover:shadow-xl hover:transition-all duration-300 flex flex-col items-center text-center gap-5">
            <div className="p-4 rounded-full bg-[#F4F7FC] text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <h3 className="font-extrabold text-lg text-[#0F2C59] tracking-tight">
              Premium Security
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Structuring custom private servers, zero-trust network credentials, and active SIEM telemetry capture for complete compliance audit.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
