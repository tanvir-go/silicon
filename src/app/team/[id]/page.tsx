"use client";

import React from "react";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, Mail, Linkedin, Twitter, GraduationCap, Code2, Award, ShieldAlert, CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { teamData } from "@/data/mockData";
import ContactSection from "@/sections/ContactSection";

export default function TeamMemberDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const member = teamData.find(
    (m) => m.id.toLowerCase() === id?.toLowerCase()
  );

  if (!member) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 flex flex-col items-center justify-center">
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-md max-w-md">
          <ShieldAlert className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
          <h2 className="text-xl font-extrabold text-[#0F2C59] mb-2">Member Not Found</h2>
          <p className="text-xs text-slate-500 mb-6">
            The team member profile you are trying to view does not exist or has been relocated.
          </p>
          <Link href="/team">
            <button className="px-6 py-2.5 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide shadow-md hover:bg-[#000072]/90 cursor-pointer transition-all flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-[#000072] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO TEAM</span>
          </Link>
        </div>

        {/* Profile Details Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Panel: Profile Card */}
          <div className="lg:col-span-4 bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center">
            
            {/* Image Wrapper */}
            <div className="w-44 h-44 rounded-full overflow-hidden mb-6 border-4 border-[#000072]/10 p-1 relative bg-slate-50 shadow-inner">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Member Details */}
            <h1 className="text-xl sm:text-2xl font-black text-[#0F2C59] mb-1.5 leading-tight">
              {member.name}
            </h1>
            <p className="text-xs font-black text-[#00B074] uppercase tracking-wider mb-4">
              {member.role}
            </p>

            <span className="bg-slate-50 border border-slate-100 text-slate-400 font-bold text-[9px] px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
              ID Badge: {member.badge}
            </span>

            {/* Contact Details */}
            <div className="w-full border-t border-slate-50 pt-6 flex flex-col gap-3">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#000072] transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{member.email}</span>
              </a>
              <div className="flex items-center justify-center gap-3.5 mt-2">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#000072]/10 hover:text-[#000072] flex items-center justify-center transition-colors text-slate-400"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#000072]/10 hover:text-[#000072] flex items-center justify-center transition-colors text-slate-400"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Story & Skills */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Story Panel */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-8 sm:p-10 shadow-sm">
              <h2 className="text-lg font-black text-[#0F2C59] mb-6 pb-2.5 border-b border-slate-50 uppercase tracking-wide flex items-center gap-2">
                <Award className="w-5 h-5 text-[#000072]" />
                Professional Story
              </h2>
              <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                {member.story.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Qualifications & Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              
              {/* Education Box */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-[#0F2C59] mb-4 flex items-center gap-2.5">
                  <GraduationCap className="w-4.5 h-4.5 text-[#000072]" />
                  Education &amp; Background
                </h3>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  {member.education}
                </p>
              </div>

              {/* Skills Box */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-[#0F2C59] mb-4 flex items-center gap-2.5">
                  <Code2 className="w-4.5 h-4.5 text-[#000072]" />
                  Expertise Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-extrabold"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#00B074]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
      <ContactSection />
    </main>
  );
}
