"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowRight, Facebook, Youtube, Linkedin, ShieldCheck, Cpu, Clock, Compass, Users, Cloud, Database, Server, Shield, Sparkles, Building2, Flame } from "lucide-react";
import { scaleUp } from "@/lib/utils";
import Link from "next/link";
import ContactSection from "@/sections/ContactSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] pt-36 pb-24 relative overflow-hidden">
      
      {/* Premium Background Ambience & Gradient Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-[#000072]/5 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[45%] aspect-square rounded-full bg-gradient-to-bl from-[#D32F2F]/4 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-[#000072]/3 via-[#D32F2F]/2 to-transparent blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000072/[0.03]_1px,transparent_1px),linear-gradient(to_bottom,#000072/[0.03]_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-28 relative">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#000072]/5 to-[#D32F2F]/5 border border-[#000072]/10 text-[#000072] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D32F2F] animate-pulse" />
            Our Identity &amp; Journey
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#0F2C59] leading-[1.1] mb-6">
            Empowering Global <br />
            <span className="bg-gradient-to-r from-[#000072] via-[#0F2C59] to-[#D32F2F] bg-clip-text text-transparent">Enterprise Scaling</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-500 mt-6 leading-relaxed max-w-2xl mx-auto font-medium">
            Silicon Computing Ltd bridges the gap between sophisticated, high-performance technology structures and executive board outcomes. Here is our story and roadmaps.
          </p>
        </div>

        {/* Value Pillars Grid (Ultra-Modern Glassmorphic Cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Continuous Engineering Quality", 
              desc: "We hire only certified senior cloud architects and system developers to maintain absolute structural integrity.",
              icon: Cpu,
              accent: "from-[#000072] to-[#0F2C59]",
              border: "group-hover:border-[#000072]/30"
            },
            { 
              title: "Zero-Trust Security Integration", 
              desc: "Every system, database partition, and API endpoint we construct has proactive security containment as standard.",
              icon: ShieldCheck,
              accent: "from-[#D32F2F] to-[#0F2C59]",
              border: "group-hover:border-[#D32F2F]/30"
            },
            { 
              title: "Transparency & weekly Syncs", 
              desc: "No complex tech-speak; we establish direct team channels and coordinate weekly syncs based on your business metrics.",
              icon: Clock,
              accent: "from-[#000072] to-[#D32F2F]",
              border: "group-hover:border-[#000072]/30"
            }
          ].map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,114,0.06)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Hover Gradient Light */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000072]/5 to-[#D32F2F]/5 text-[#000072] flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-5 h-5 text-[#000072]" />
                  </div>
                  <h3 className="font-extrabold text-xl text-[#0F2C59] leading-tight mb-4 group-hover:text-[#000072] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Silicon Computing Ltd Grid Section (Editorial Layout) */}
        <div className="mb-32">
          <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 p-8 sm:p-12 lg:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.03)] grid lg:grid-cols-12 gap-8 lg:gap-20 items-start relative overflow-hidden">
            {/* Absolute decorative gradient dots */}
            <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-gradient-to-br from-[#000072]/5 to-[#D32F2F]/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Left Side: Modern image wrapper */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group lg:sticky lg:top-36">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#000072]/20 to-[#D32F2F]/20 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white p-2 shadow-sm">
                <img
                  src="/about1.webp"
                  alt="Silicon Computing Ltd Team"
                  className="w-full h-full object-cover rounded-[1.75rem] group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg text-white">
                <p className="text-[10px] font-black tracking-widest text-[#D32F2F] uppercase">Silicon HQ</p>
                <p className="text-xs font-bold text-slate-300">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Right Side: Text content & Social Links */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D32F2F]/5 text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D32F2F]/10">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2C59] tracking-tight mb-8 leading-[1.1]">
                  About Silicon Computing Ltd
                </h2>
                
                {/* Text Block & Core Highlights */}
                <div className="text-slate-500 leading-relaxed font-medium space-y-6 text-sm sm:text-base">
                  <p className="text-slate-600 font-semibold text-base">
                    Silicon Computing Ltd is a next-generation IT solutions company,
                    established in 2021 in Dhaka, Bangladesh, with a vision to empower
                    businesses through innovation, intelligence, and reliability.
                  </p>
                  <p>
                    We specialize in delivering cutting-edge technologies that transform the
                    way organizations operate and grow in the digital era. From app
                    modernization to end-to-end app maintenance, our solutions help
                    businesses stay agile and future-ready. We harness the power of
                    Artificial Intelligence (AI) and Internet of Things (IoT) to drive
                    automation, intelligence, and efficiency across industries.
                  </p>

                  {/* Core Expertise Visual Bento Badges */}
                  <div className="grid sm:grid-cols-2 gap-4 py-6 my-2">
                    {[
                      { title: "Private & Multi-Cloud", desc: "Secure, scalable IT setups", icon: Cloud, bg: "bg-[#000072]/5 text-[#000072]" },
                      { title: "Data & Databases", desc: "Structured, reliable insights", icon: Database, bg: "bg-indigo-50 text-indigo-600" },
                      { title: "Servers & Storage", desc: "Mission-critical workloads", icon: Server, bg: "bg-emerald-50 text-emerald-600" },
                      { title: "Cybersecurity Frameworks", desc: "Advanced resilient defenses", icon: Shield, bg: "bg-rose-50 text-rose-600" }
                    ].map((item, idx) => {
                      const SubIcon = item.icon;
                      return (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors duration-300">
                          <div className={`p-2.5 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                            <SubIcon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F2C59]">{item.title}</h4>
                            <p className="text-xs text-slate-400 font-semibold mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p>
                    At Silicon, we believe technology should adapt to business needs, not the
                    other way around. That's why we partner with clients to design and
                    deploy customized IT solutions that align with their long-term goals.
                    Whether it's modernizing legacy systems, building intelligent
                    applications, or managing complex IT environments, we bring
                    expertise, innovation, and trust to every engagement.
                  </p>
                  <p>
                    As a proud Bangladeshi company with global aspirations, Silicon Computing Ltd is
                    committed to driving digital transformation, fostering sustainability,
                    and shaping the future of technology for businesses across industries.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-12 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Connect with us:</span>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 hover:bg-[#000072] hover:border-[#000072] hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-4.5 h-4.5" />
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 hover:bg-[#D32F2F] hover:border-[#D32F2F] hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-4.5 h-4.5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 hover:bg-[#0F2C59] hover:border-[#0F2C59] hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4.5 h-4.5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                    <Building2 className="w-4 h-4 text-[#000072]" />
                    <span>Est. 2021 • Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 p-10 sm:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.02)] mb-32 grid sm:grid-cols-3 gap-8 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="pt-4 sm:pt-0">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#000072] to-[#0F2C59] bg-clip-text text-transparent mb-3 tracking-tighter">150+</div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Enterprise Clients</div>
          </div>
          <div className="pt-6 sm:pt-0 sm:px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#000072] to-[#D32F2F] bg-clip-text text-transparent mb-3 tracking-tighter">99.9%</div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Service SLA Uptime</div>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#D32F2F] to-[#0F2C59] bg-clip-text text-transparent mb-3 tracking-tighter">20+</div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Tech Alliances</div>
          </div>
        </div>

        {/* Interactive Join CTA Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp(0, 0.6)}
          className="p-10 sm:p-16 lg:p-24 rounded-[3rem] bg-[#0A0F24] text-white relative overflow-hidden border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.3)] max-w-5xl mx-auto text-center"
        >
          {/* Futuristic grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-60 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#000072]/40 blur-[130px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-[400px] h-[400px] bg-[#D32F2F]/20 blur-[130px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-[#D32F2F]" />
              Accelerate Growth
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] max-w-2xl">
              Ready to Accelerate Your <br />
              <span className="bg-gradient-to-r from-indigo-200 via-slate-100 to-rose-200 bg-clip-text text-transparent">Enterprise AI Growth?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-medium">
              Connect directly with our senior cloud architects and AI engineers to map out a resilient digital transformation blueprint.
            </p>
            <Link href="/contact" className="mt-4 group">
              <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#000072] via-[#000072]/90 to-[#0F2C59] text-white font-extrabold text-sm tracking-wider shadow-xl hover:shadow-[#000072]/30 transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-[1.02]">
                Get Consultation
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform duration-300 text-[#D32F2F]" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
      <ContactSection />
    </main>
  );
}

