"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, Eye, Heart, ShieldCheck, Cpu, Code, Target, Award, Lightbulb, Users
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function MissionVisionValuesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D32F2F]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 animate-fade-in">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            <Target className="w-3.5 h-3.5" />
            Corporate Identity
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            Our Purpose &amp; Promise
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Silicon Computing Ltd is guided by core statements that influence how we configure networks, deploy cloud platforms, and support database clusters.
          </p>
        </div>

        {/* Mission & Vision Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#000072]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#000072]/10 text-[#000072] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#0F2C59] mb-4">Our Mission</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                To empower global enterprises and local organizations with robust, next-generation compute, storage, and AI-driven software architectures. We bridge the gap between complex datacenter logic and real-world board outcomes through continuous engineering excellence.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#000072]">
              <span>Continuous Engineering Quality</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D32F2F]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D32F2F]/10 text-[#D32F2F] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#0F2C59] mb-4">Our Vision</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                To be recognized as the world's most trusted partner for enterprise IT integration, zero-trust cloud architectures, and intelligence solutions. We envision a future where secure computing and hardware accessibility are seamlessly scaled for organizations of all sizes.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#D32F2F]">
              <span>Zero-Trust Infrastructure Foundation</span>
            </div>
          </motion.div>

        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Our Core Values
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              The fundamental pillars that govern our operations, communication, and system deliveries.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={staggerContainer(0.05, 0.1)}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Lightbulb,
                title: "Continuous Innovation",
                desc: "We stay ahead of emerging technology trends to configure architectures optimized for performance."
              },
              {
                icon: ShieldCheck,
                title: "Zero-Trust Security",
                desc: "Every system, cluster partition, and API endpoint we deploy adheres to absolute security standards."
              },
              {
                icon: Users,
                title: "Client-Centric Success",
                desc: "We prioritize long-term client outcomes, offering dedicated SLAs and 24/7 localized support desk channels."
              },
              {
                icon: Award,
                title: "Radical Transparency",
                desc: "We operate without hidden terms, providing clear engineering blueprints and straightforward budgeting."
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  variants={fadeInUp(0, 0.4)}
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000072]/10 text-[#000072] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0F2C59]">{value.title}</h3>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Identity Pledge Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-white/5 shadow-2xl max-w-4xl mx-auto text-center"
        >
          <div className="absolute -inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#000072]/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Our Commitment to Technology
            </h2>
            <p className="text-xs text-slate-450 leading-relaxed">
              We pledge to design sustainable, secure, and highly scalable computing systems that minimize network latency while maximizing organization outcome. From specialized server clusters to international cloud integrations, our values remain at the forefront.
            </p>
          </div>
        </motion.div>

      </div>
      <ContactSection />
    </main>
  );
}
