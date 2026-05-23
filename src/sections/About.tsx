"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Corporate introduction */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            WHO WE ARE AND WHAT WE DO
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59]">
            About Us
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            We bridge the gap between complex digital technologies and tangible, high-performance business outcomes. Silicon Computing Ltd was established with a clear mandate: to help large-scale enterprises integrate state-of-the-art AI networks, transition successfully to secure cloud nodes, and protect intellectual capital using audited zero-trust cybersecurity configurations.
          </p>

          <p className="text-sm text-slate-500 leading-relaxed">
            Our approach pairs senior-level technical architects directly with corporate leaders. This transparency helps us deliver custom software ecosystems that are fully compliant, highly responsive, and built to scale globally.
          </p>

          <div className="mt-3">
            <Link href="/about">
              <button className="px-6 py-3 rounded-lg bg-[#0F2C59] hover:bg-[#0b1d3a] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg">
                LEARN MORE
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Exact 2x2 Collage from screenshot */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          
          {/* Top Left: Corporate collaboration group */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Corporate teamwork"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Top Right: Royal Blue Quote Box (Matches screenshot) */}
          <div className="rounded-2xl bg-[#0F2C59] p-6 text-white flex flex-col justify-between shadow-md aspect-square relative overflow-hidden group hover:scale-102 transition-transform duration-350">
            <div className="absolute top-2 right-2 text-white/5">
              <Quote className="w-20 h-20" />
            </div>
            
            <p className="text-xs sm:text-sm font-semibold italic leading-relaxed text-slate-100 relative z-10">
              "Silicon Computing Ltd has been a pioneer in developing high-performance digital systems, aligning complex technologies directly with board-level metrics."
            </p>
            
            <div className="border-t border-white/10 pt-3 relative z-10">
              <h5 className="font-extrabold text-xs text-white">Al-Hasan</h5>
              <p className="text-[9px] text-slate-300">CEO &amp; Founder, SCL</p>
            </div>
          </div>

          {/* Bottom Left: Corporate gathering / team interaction */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Technical synergy"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bottom Right: Collaboration / presentation */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Consultation workshop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
