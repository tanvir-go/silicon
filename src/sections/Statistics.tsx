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
      
      {/* Background Year Watermark behind cards (Matches screenshot!) */}
      <div className="absolute right-6 bottom-10 text-[180px] sm:text-[240px] font-black text-slate-100/70 pointer-events-none select-none select-none tracking-tighter leading-none z-0">
        2026
      </div>

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
          <div className="lg:col-span-6 grid grid-cols-2 gap-5 relative z-10">
            
            {/* Stat Box 1 */}
            <div className="p-6 rounded-2xl bg-[#F0F4F7] shadow-md flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                <Counter value={15} />+
              </div>
              <h3 className="font-bold text-xs text-[#D32F2F] mt-2 tracking-wide uppercase">
                Successful Projects
              </h3>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                Premium custom cloud architectures deployed.
              </p>
            </div>

            {/* Stat Box 2 */}
            <div className="p-6 rounded-2xl bg-[#F0F4F7] shadow-md flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                <Counter value={5} />+
              </div>
              <h3 className="font-bold text-xs text-[#D32F2F] mt-2 tracking-wide uppercase">
                Years Experience
              </h3>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                Operating corporate-level IT system engineering.
              </p>
            </div>

            {/* Stat Box 3 */}
            <div className="p-6 rounded-2xl bg-[#F0F4F7] shadow-md flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                <Counter value={50} />+
              </div>
              <h3 className="font-bold text-xs text-[#D32F2F] mt-2 tracking-wide uppercase">
                Customers
              </h3>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                Satisfied regional bank, tech, and enterprise clients.
              </p>
            </div>

            {/* Stat Box 4 */}
            <div className="p-6 rounded-2xl bg-[#F0F4F7] shadow-md flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight">
                24/7
              </div>
              <h3 className="font-bold text-xs text-[#D32F2F] mt-2 tracking-wide uppercase">
                Support
              </h3>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                Providing persistent network threat containment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
