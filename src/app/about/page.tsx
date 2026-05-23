"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Cloud, Cpu, Code, Award, ArrowRight, Server, Database, Network } from "lucide-react";
import { timelineMilestones } from "@/data/mockData";
import { scaleUp } from "@/lib/utils";
import Link from "next/link";
import ContactSection from "@/sections/ContactSection";

const iconMap = {
  Compass,
  ShieldCheck,
  Cloud,
  Cpu,
  Code
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            Our Identity &amp; Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            Empowering Global Enterprise Scaling
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Silicon Computing Ltd bridges the gap between sophisticated, high-performance technology structures and executive board outcomes. Here is our story and roadmaps.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Continuous Engineering Quality", desc: "We hire only certified senior cloud architects and system developers to maintain absolute structural integrity." },
            { title: "Zero-Trust Security Integration", desc: "Every system, database partition, and API endpoint we construct has proactive security containment as standard." },
            { title: "Transparency & weekly Syncs", desc: "No complex tech-speak; we establish direct team channels and coordinate weekly syncs based on your business metrics." }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="p-3 w-12 h-12 rounded-xl bg-[#000072]/10 text-[#000072] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-[#0F2C59] leading-tight">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Corporate Timeline Section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Milestones of Innovation
            </h2>
            <p className="text-xs text-slate-550 mt-2">
              A historical look at the timeline markers shaping our digital outcomes.
            </p>
          </div>

          {/* Vertical Line Container */}
          <div className="relative border-l-2 border-dashed border-slate-200 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:border-l-2 md:before:border-dashed md:before:border-slate-200 md:before:max-w-4xl mx-auto flex flex-col gap-12">
            
            {timelineMilestones.map((milestone, idx) => {
              const Icon = iconMap[milestone.icon as keyof typeof iconMap] || Compass;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* Circle Node Icon */}
                  <div className="absolute left-[-17px] top-1 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-[#000072] to-[#000072]/80 flex items-center justify-center shadow-lg z-10">
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>

                  {/* Timeline card, shifting sides */}
                  <div className={`md:col-span-1 ${isEven ? "md:text-right md:order-1" : "md:col-start-2 md:order-2"}`}>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm inline-block max-w-[380px] w-full text-left">
                      <span className="font-extrabold text-base text-[#000072] block mb-1">
                        {milestone.year}
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F2C59] mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm mb-24 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#000072] mb-1">150+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#000072] mb-1">99.9%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Service SLA Uptime</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#000072] mb-1">20+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Global Tech Alliances</div>
          </div>
        </div>

        {/* Interactive Join CTA Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp(0, 0.6)}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-white/5 shadow-2xl max-w-4xl mx-auto text-center"
        >
          <div className="absolute -inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#000072]/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Accelerate Your Enterprise AI Growth?
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect directly with our senior cloud architects and AI engineers to map out a resilient digital transformation blueprint.
            </p>
            <Link href="/contact" className="mt-2">
              <button className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-sm tracking-wide shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
      <ContactSection />
    </main>
  );
}
