"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import ContactSection from "@/sections/ContactSection";

const formatTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function IndustriesDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug ? formatTitle(slug) : "Loading...";

  return (
    <main className="min-h-screen bg-white pt-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
              Industry Focus
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-[1.1]">
              {title}
            </h1>
            <p className="text-slate-500 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl">
              Elevate your corporate infrastructure tailored for the {title.toLowerCase()} sector. We deliver high-fidelity, zero-trust integrated architectures engineered for performance, scalability, and robust security.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-lg transition-all flex items-center gap-2">
                Deploy Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-[#F0F4F7] text-[#0F2C59] font-extrabold text-xs tracking-wide hover:bg-slate-100 transition-all flex items-center gap-2">
                Talk to Sales
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="rounded-3xl bg-[#F0F4F7] shadow-xl p-8 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                  <span className="text-[#0F2C59] font-black text-xl">{title.charAt(0)}</span>
                </div>
                <h3 className="font-extrabold text-2xl text-[#0F2C59]">{title}</h3>
                <p className="text-xs text-slate-500 mt-2">Next-Gen Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F2C59]">Core Architecture & Benefits</h2>
            <p className="text-slate-500 mt-3 text-sm">Deploying {title.toLowerCase()} provides massive operational leverage.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-8 rounded-3xl bg-[#F0F4F7] shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#0F2C59]">Benefit #{item}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Streamline workloads, minimize latency, and enforce comprehensive zero-trust security parameters across the entire stack.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
