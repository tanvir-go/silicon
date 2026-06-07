"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  title: string;
  desc: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    tag: "// COGNITIVE COMPUTE CORE",
    title: "Accelerating AI-Driven\nEnterprise Scale.",
    desc: "Transform your corporation with deep neural network pipelines and state-of-the-art supercomputing modules engineered to drive scaling.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    tag: "// ZERO-TRUST DEFENSE LAB",
    title: "Hyper-Secure Zero-Trust\nArchitectures.",
    desc: "Empower your corporate databases with zero-trust endpoint configurations and SCADA hardening engineered for total boundary security.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
    tag: "// SOVEREIGN MULTI-CLOUD",
    title: "Resilient Multi-Cloud\nInfrastructure.",
    desc: "Consolidate active-active SQL databases across global latency boundaries with automatic failovers and zero recovery-time objectives.",
  },
];

export default function Hero() {

  // Carousel slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    // Auto rotate slide deck every 6 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-[75vh] min-h-[520px] lg:h-[80vh] lg:min-h-[620px] flex items-center overflow-hidden bg-slate-950 pt-24 pb-12 select-none">
      
      {/* 1. Full-Bleed Carousel Images Background Panel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`
            }}
          />
        </AnimatePresence>
      </div>

      {/* 2. High-Contrast Gradient Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-950/40 pointer-events-none z-1" />

      {/* Blueprint grid lines on top of dark overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-1"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* 3. Immersive Content Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-12 items-center">
        
        {/* Left Aligned Content Deck */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4.5 text-left">
          
          {/* Animated Slide Tagline Badge */}
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.25em] text-[#D32F2F] uppercase">
                  {slides[currentSlide].tag}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Master Headline */}
          <div className="min-h-[100px] sm:min-h-[130px] lg:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white whitespace-pre-line"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Animated Description Paragraph */}
          <div className="min-h-[60px] sm:min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-medium"
              >
                {slides[currentSlide].desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link href="/contact">
              <button className="group px-6.5 py-4 rounded-md bg-[#D32F2F] hover:bg-[#b02222] text-white font-extrabold text-[11px] tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl">
                REQUEST CONSULTATION
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href="/solution-by-product">
              <button className="px-6.5 py-4 rounded-md border border-white/20 hover:border-white hover:bg-white/10 text-white font-black text-[11px] tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2">
                <Play className="w-3 h-3 text-[#D32F2F] fill-current" />
                DISCOVER SOLUTIONS
              </button>
            </Link>
          </motion.div>


        </div>

      </div>


    </section>
  );
}
