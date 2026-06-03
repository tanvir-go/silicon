"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-start">
          
          {/* Top Left: Corporate collaboration group */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] w-full self-end border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="/about1.webp"
              alt="Corporate teamwork"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
 
          {/* Top Right: Royal Blue Quote Box (Matches screenshot) */}
          <div className="rounded-2xl bg-[#000080] p-5 sm:p-6 text-white flex flex-col justify-between shadow-md aspect-square hover:scale-102 transition-transform duration-350">
            <p className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed text-slate-100">
              At <strong className="text-white font-extrabold">Silicon Computing Ltd</strong>, we are dedicated to delivering secure, reliable, and innovative IT solutions that empower your business to grow and succeed.
            </p>
            
            <div className="flex items-center gap-3 pt-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                <img
                  src="/Nasir Feroz.png"
                  alt="Nasir Feroz"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h5 className="font-extrabold text-xs sm:text-sm text-white leading-tight">Nasir Feroz</h5>
                <p className="text-[9px] sm:text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">CEO</p>
              </div>
            </div>
          </div>
 
          {/* Bottom Left: Corporate gathering / team interaction */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] w-full border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="/about2.webp"
              alt="Technical synergy"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
 
          {/* Bottom Right: Collaboration / presentation */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square border border-slate-100 hover:scale-102 transition-transform duration-350">
            <img
              src="/about3.webp"
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
