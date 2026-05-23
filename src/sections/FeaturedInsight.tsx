"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedInsight() {
  return (
    <section className="relative w-full bg-[#0F2C59] text-white overflow-hidden pb-16 z-10">
      
      {/* Decorative Wavy Divider Curve (Top background) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Radial ambient glow to elevate corporate style */}
      <div className="absolute -top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Four Key Stats Grid (Matches screenshot!) */}
        <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-6 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F0F4F7]/5 backdrop-blur-sm shadow-inner">
            <span className="text-3xl font-black text-white tracking-tight">250+</span>
            <span className="text-[10px] font-bold text-slate-350 mt-1 uppercase tracking-wider">
              Customers
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F0F4F7]/5 backdrop-blur-sm shadow-inner">
            <span className="text-3xl font-black text-white tracking-tight">4</span>
            <span className="text-[10px] font-bold text-slate-350 mt-1 uppercase tracking-wider">
              Successful Projects
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F0F4F7]/5 backdrop-blur-sm shadow-inner">
            <span className="text-3xl font-black text-white tracking-tight">40+</span>
            <span className="text-[10px] font-bold text-slate-350 mt-1 uppercase tracking-wider">
              Specialists
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F0F4F7]/5 backdrop-blur-sm shadow-inner">
            <span className="text-3xl font-black text-white tracking-tight">3</span>
            <span className="text-[10px] font-bold text-slate-350 mt-1 uppercase tracking-wider">
              Experience Years
            </span>
          </div>

        </div>

        {/* Right Side: Driving Digital Transformation Content */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5 text-left">
          
          <span className="text-[11px] font-extrabold tracking-widest text-[#ef4444] uppercase">
            WHY CHOOSE US
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Driving Digital Transformation<br />
            in Bangladesh
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Silicon Computing Ltd is one of the leading IT consultancy firms in Bangladesh, delivering robust AI pipelines, zero-trust cybersecurity networks, and continuous cloud migrations. We empower regional large enterprises to transition successfully to scalable systems designed to automate workflows and mitigate corporate risk.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0F2C59] font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer">
                JOIN US
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-3 rounded-lg bg-transparent border border-white/20 hover:border-white/50 text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer">
                LEARN MORE
                <ArrowRight className="w-4 h-4 text-[#ef4444]" />
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* 5. Smooth Bottom Waving Divider Curve (Matches screenshot exactly!) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-white fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

    </section>
  );
}
