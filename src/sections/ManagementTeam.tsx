"use client";

import React from "react";

interface Member {
  name: string;
  role: string;
  image: string;
}

const executives: Member[] = [
  {
    name: "MD Nasir Feroz",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "MD Ashiqur Rahman",
    role: "COO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Md. Bayeazid Hossain",
    role: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

export default function ManagementTeam() {
  return (
    <section id="team" className="relative w-full py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800">
            Our <span className="text-[#0F2C59]">Management</span>
          </h2>
        </div>

        {/* 3 Executive profiles side-by-side in high-fidelity cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {executives.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 flex flex-col items-center justify-center text-center"
            >
              
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
          ))}
        </div>

      </div>
    </section>
  );
}
