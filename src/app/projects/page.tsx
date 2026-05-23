"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Cloud, Shield, Database, ArrowRight, X, Layers, Briefcase, Award } from "lucide-react";
import { projectsData, Project } from "@/data/mockData";
import Link from "next/link";

const iconMap = {
  AI: Cpu,
  Cloud: Cloud,
  Security: Shield,
  Software: Database
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "AI" | "Cloud" | "Security" | "Software">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter items
  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-white  pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Our Success Portfolios
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-primary">
            Enterprise Case Studies &amp; Outcomes
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Explore how we have engineered scalable cloud databases, hardened critical SCADA utilities, and deployed deep neural networks to accelerate digital transformation.
          </p>
        </div>

        {/* Filtering Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {(["All", "AI", "Cloud", "Security", "Software"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide border cursor-pointer hover:scale-103 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#000072] to-[#000072]/80 border-[#000072] text-white shadow-md"
                  : "glass hover:bg-slate-100 text-slate-650 "
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with layout transitions */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = iconMap[project.category];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl glass border shadow-md hover-glow overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image panel */}
                    <div className="h-52 sm:h-60 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Category tag */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md">
                        <Icon className="w-3.5 h-3.5 text-accent-400" />
                        {project.category}
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest block mb-1">
                        Client: {project.client}
                      </span>
                      <h3 className="font-extrabold text-lg text-slate-800 leading-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer info: stats tag & trigger button */}
                  <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100 mt-2">
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold uppercase">
                      {project.stats}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-655 hover:text-primary-750 cursor-pointer transition-colors duration-300"
                    >
                      Read Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Full Case Study Detailed Drawer Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              
              {/* Modal container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#F0F4F7] shadow-2xl overflow-y-auto max-h-[90vh] relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border text-slate-500 cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-6 pt-2">
                  {/* Header info */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest block">
                      CASE STUDY SPECIFICATIONS
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1 pb-4 border-b border-slate-100 ">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        Client: <strong>{selectedProject.client}</strong>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-slate-400" />
                        Category: <strong>{selectedProject.category}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Detailed Content */}
                  <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-605 leading-relaxed bg-[#F0F4F7] p-5 rounded-2xl">
                    <h4 className="font-extrabold text-xs text-slate-805 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent-505" />
                      Key Achievement: {selectedProject.stats}
                    </h4>
                    <p>{selectedProject.fullDetails}</p>
                  </div>

                  {/* Technology chips grid */}
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-705 mb-3 uppercase tracking-wider">
                      Applied Technology Stacks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-bold text-primary-600 bg-primary-500/5 px-3.5 py-1.5 rounded-xl border border-primary-500/10 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry action */}
                  <Link href="/contact" onClick={() => setSelectedProject(null)} className="mt-2 shrink-0">
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      Discuss Similar Project Implementation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
