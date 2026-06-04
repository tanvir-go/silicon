"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image: string;
}

const executives: Member[] = [
  {
    name: "MD Nasir Feroz",
    role: "CEO",
    image: "/md nasir feroz.webp"
  },
  {
    name: "MD Ashiqur Rahman",
    role: "COO",
    image: "/MD Ashiqur Rahman.webp"
  },
  {
    name: "Md. Bayeazid Hossain",
    role: "Chief Marketing Officer",
    image: "/Md. Bayeazid Hossain.webp"
  },
  {
    name: "MD Monjurul Islam",
    role: "Technical Advisor (Voluntarily)",
    image: "/MD Monjurul Islam.webp"
  },
  {
    name: "Md Mizanur Rahman",
    role: "Senior Manager-Enterprise Solution",
    image: "/Md Mizanur Rahman.webp"
  }
];

export default function ManagementTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      let newItems = 3;
      if (window.innerWidth < 640) {
        newItems = 1;
      } else if (window.innerWidth < 1024) {
        newItems = 2;
      }
      setItemsPerView(newItems);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, executives.length - newItems)));
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, executives.length - itemsPerView);
  const showControls = maxIndex > 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="team" className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800">
            Our <span className="text-[#0F2C59]">Management</span>
          </h2>
        </div>

        {/* Carousel Slider Wrapper */}
        <div className="relative max-w-5xl mx-auto px-12">
          
          {/* Navigation Controls */}
          {showControls && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 shadow-md transition-all duration-300 z-20 bg-white text-[#0F2C59] hover:bg-slate-50 hover:scale-105 cursor-pointer"
                aria-label="Previous management member"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 shadow-md transition-all duration-300 z-20 bg-white text-[#0F2C59] hover:bg-slate-50 hover:scale-105 cursor-pointer"
                aria-label="Next management member"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Viewport */}
          <div className="overflow-hidden mx-[-12px]">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              {executives.map((member, idx) => (
                <div 
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 flex flex-col items-center justify-center text-center h-full">
                    
                    {/* Circular Avatar Photo */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-sm mb-6 flex items-center justify-center bg-slate-50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Executive Metadata */}
                    <div className="text-xs sm:text-[13px] text-slate-700 leading-snug font-semibold">
                      <span className="font-bold text-slate-800">{member.name}</span>
                      <span className="text-slate-400 font-normal"> - {member.role}</span>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel Pagination Progress Dots */}
        {showControls && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? "w-6 bg-[#0F2C59]" 
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
