"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/mockData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const selectTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const current = testimonialsData[activeIndex];

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden border-b border-slate-100 ">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-primary">
            What Our Partners Say About Us
          </h2>
        </div>

        {/* Testimonial Active Display Window */}
        <div className="relative min-h-[340px] sm:min-h-[280px] w-full flex items-center justify-center p-6 sm:p-10 rounded-3xl glass border shadow-xl">
          {/* Large Accent Quote Mark */}
          <div className="absolute top-6 left-6 text-slate-100 pointer-events-none">
            <Quote className="w-16 h-16 opacity-30 " />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center text-center gap-5 z-10"
            >
              {/* Star ratings */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: current.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-2xl">
                "{current.quote}"
              </p>

              {/* Client Info Card */}
              <div className="flex items-center gap-3.5 mt-2">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-xs text-slate-800 ">
                    {current.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 ">
                    {current.role}, <span className="font-bold text-primary-600 ">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right manual switch controls */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border cursor-pointer hover:scale-105 transition-all text-slate-600 z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border cursor-pointer hover:scale-105 transition-all text-slate-600 z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel pagination progress dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectTestimonial(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex 
                  ? "w-8 bg-primary-650 " 
                  : "w-2.5 bg-slate-250 hover:bg-slate-350"
              }`}
              aria-label={`Select testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
