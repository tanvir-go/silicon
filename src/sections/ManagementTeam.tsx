"use client";

import React from "react";

interface Member {
  name: string;
  role: string;
  image: string;
}

const executives: Member[] = [
  {
    name: "Mahfuzur Rahman",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Al-Hasan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Zakir Hossain",
    role: "Director of Cyber Security",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

export default function ManagementTeam() {
  return (
    <section id="team" className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold tracking-widest text-[#D32F2F] uppercase">
            EXECUTIVE BOARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2C59] mt-3">
            Our Management
          </h2>
        </div>

        {/* 3 Executive profiles side-by-side (Matches screenshot!) */}
        <div className="grid sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {executives.map((member, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-center text-center hover:scale-102 transition-transform duration-300"
            >
              
              {/* Circular Avatar Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 shadow-md mb-4 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Executive Metadata */}
              <h3 className="font-extrabold text-base text-[#0F2C59] tracking-tight leading-snug">
                {member.name}
              </h3>
              
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
