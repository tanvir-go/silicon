"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Award, HeartHandshake } from "lucide-react";

const chooseUsFeatures = [
  {
    title: "End-to-End Transformation",
    description: "We handle everything from architectural planning to custom coding, 24/7 security protection, and long-term cloud management.",
    icon: TrendingUp,
    iconColor: "text-blue-400 bg-blue-500/10",
  },
  {
    title: "Experienced Professionals",
    description: "Our staff consists of certified senior architects, cybersecurity specialists, and AI researchers with decades of experience.",
    icon: Users,
    iconColor: "text-emerald-400 bg-emerald-500/10",
  },
  {
    title: "Proven Track Record",
    description: "We have delivered custom operational architectures, database migrations, and predictive AI solutions globally.",
    icon: Award,
    iconColor: "text-amber-400 bg-amber-500/10",
  },
  {
    title: "Client-Centric Approach",
    description: "We build dedicated channels, run weekly syncs, maintain 100% transparency, and craft custom solutions shaped by your metrics.",
    icon: HeartHandshake,
    iconColor: "text-rose-400 bg-rose-500/10",
  }
];

export default function FeaturedInsight() {
  return (
    <section className="relative w-full bg-[#0F2C59] text-white overflow-hidden pb-16 z-10">
      
      {/* Decorative Wavy Divider Curve (Top background) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Radial ambient glow to elevate corporate style */}
      <div className="absolute -top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Four Premium Benefit Cards */}
        <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {chooseUsFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${feat.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-2 font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Driving Digital Transformation Content */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-5 text-left">
          
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
