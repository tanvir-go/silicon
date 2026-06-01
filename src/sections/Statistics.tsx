"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ value, duration = 1.2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Statistics() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            STANDARDS &amp; VELOCITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59] mt-3">
            We have introduced next-generation digital transformation standards
          </h2>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Empowering regional digital infrastructures by delivering secure systems architectures, robust multi-cloud environments, and bespoke AI pipelines designed to drive operational velocity.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Speaker Presenting Graphic (Vector style from screenshot) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-[460px] aspect-[4/3] bg-[#F0F4F7] rounded-2xl shadow-md p-6 flex items-center justify-center relative overflow-hidden">
              
              <svg viewBox="0 0 200 130" className="w-[90%] h-[90%]">
                {/* Boardroom Presentation Screen */}
                <rect x="25" y="10" width="80" height="50" rx="3" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
                {/* Bar Chart inside Screen */}
                <rect x="35" y="45" width="8" height="10" fill="#0F2C59" rx="1" />
                <rect x="48" y="35" width="8" height="20" fill="#0F2C59" rx="1" />
                <rect x="61" y="25" width="8" height="30" fill="#D32F2F" rx="1" />
                <rect x="74" y="40" width="8" height="15" fill="#3B82F6" rx="1" />
                <rect x="87" y="30" width="8" height="25" fill="#0F2C59" rx="1" />
                
                {/* Presenter / Speaker Character */}
                <circle cx="128" cy="40" r="7" fill="#FDBA74" />
                <path d="M118,48 C118,48 128,47 138,48 L141,75 L115,75 Z" fill="#0F2C59" />
                {/* Presenter Arm pointing */}
                <path d="M118,52 L105,42" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
                
                {/* Boardroom Table */}
                <ellipse cx="90" cy="115" rx="75" ry="12" fill="#E2E8F0" />
                
                {/* Audience Seated (Back View) */}
                {/* Audience 1 */}
                <circle cx="55" cy="92" r="6" fill="#FDBA74" />
                <path d="M45,98 C45,98 55,97 65,98 L67,115 L43,115 Z" fill="#475569" />
                
                {/* Audience 2 */}
                <circle cx="85" cy="90" r="6" fill="#FDBA74" />
                <path d="M75,96 C75,96 85,95 95,96 L97,115 L73,115 Z" fill="#0F2C59" />
 
                {/* Audience 3 */}
                <circle cx="115" cy="92" r="6" fill="#FDBA74" />
                <path d="M105,98 C105,98 115,97 125,98 L127,115 L103,115 Z" fill="#475569" />
                
                {/* Pointer rod */}
                <line x1="105" y1="42" x2="80" y2="35" stroke="#475569" strokeWidth="1.5" />
              </svg>
              
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
            
            {/* Card 1: Successful Projects (Colored Card) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121B54] via-[#0F174C] to-[#0A103E] border border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <Counter value={15} />+
                </div>
                <h4 className="font-bold text-sm sm:text-base text-white mt-3 tracking-wide">
                  Successful Projects
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200/80 mt-2 leading-relaxed font-medium">
                  Delivering IT solutions across industries with proven results.
                </p>
              </div>
            </div>

            {/* Card 2: Industry Expertise (White Card) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#0F2C59] tracking-tight">
                  <Counter value={5} />+ Years
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-800 mt-3 tracking-wide">
                  Industry Expertise
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                  A decade of experience in digital transformation.
                </p>
              </div>
            </div>

            {/* Card 3: Enterprise Clients (White Card) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#0F2C59] tracking-tight">
                  <Counter value={50} />+
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-800 mt-3 tracking-wide">
                  Enterprise Clients
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                  Trusted by leading businesses for mission-critical IT services.
                </p>
              </div>
            </div>

            {/* Card 4: Support & Monitoring (White Card) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#0F2C59] tracking-tight">
                  24/7
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-800 mt-3 tracking-wide">
                  Support & Monitoring
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                  Ensuring uninterrupted operations with reliable support.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
