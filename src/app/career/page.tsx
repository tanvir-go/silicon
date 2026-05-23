"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, GraduationCap, Heart, Laptop, ArrowRight, Check, X, FileText, Send, HelpCircle
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const openPositions: Job[] = [
  {
    id: "senior-ai-architect",
    title: "Senior AI / ML Architect",
    department: "Engineering",
    location: "Dhaka, BD (Hybrid)",
    type: "Full-time",
    experience: "5+ Years",
    description: "Lead the design, training, and deployment of large-scale machine learning models and deep learning APIs for global corporate procurement channels.",
    requirements: [
      "Extensive experience with PyTorch, TensorFlow, or JAX frameworks.",
      "Proven history of serving LLMs and scaling vector databases (e.g., Pinecone, Milvus).",
      "Solid cloud infrastructure knowledge (AWS, GCP, or Azure/OCI orchestration)."
    ]
  },
  {
    id: "cloud-security-consultant",
    title: "Enterprise Cloud Security Consultant",
    department: "Cybersecurity",
    location: "Dhaka, BD (Hybrid)",
    type: "Full-time",
    experience: "4+ Years",
    description: "Conduct zero-trust architecture assessments, implement secure Kubernetes setups, and construct unified firewall rules for large-scale financial and enterprise workloads.",
    requirements: [
      "Industry certifications (CISSP, CCSP, or GCP Professional Cloud Security Engineer).",
      "Hands-on experience with service meshes (Istio, Linkerd) and network security policies.",
      "Deep understanding of regulatory compliance standards (GDPR, ISO 27001)."
    ]
  },
  {
    id: "fullstack-nextjs-developer",
    title: "Senior Full-Stack Developer (Next.js & Go)",
    department: "Engineering",
    location: "Dhaka, BD (Hybrid)",
    type: "Full-time",
    experience: "3+ Years",
    description: "Build clean, performant React components, integrate distributed database caching, and construct high-performance microservices APIs in Go.",
    requirements: [
      "Exceptional command of React 18/19, Next.js (App Router), and TypeScript.",
      "Familiarity with writing clean, optimized backend code in Go (Golang) or Node.js.",
      "Experience with TailwindCSS, Framer Motion, and design system integration."
    ]
  }
];

export default function CareerPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });

  const handleApplyClick = (job: Job) => {
    setAppliedJob(job);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setAppliedJob(null);
        setFormData({ name: "", email: "", resume: "", note: "" });
      }, 2500);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#000072]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-black tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Careers at Silicon Computing Ltd
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            Build the Future of Enterprise IT
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            We are looking for senior architects, engineers, and digital pioneers who want to solve complex database, cloud, and AI engineering challenges for organizations worldwide.
          </p>
        </div>

        {/* Culture & Benefits Grid */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Our Culture &amp; Benefits
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              We design our workplace to support technical growth, physical well-being, and work-life balance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Laptop,
                title: "Flexible Hybrid Setup",
                desc: "Work from our modern office in Dhaka or from home up to 2 days a week to stay productive."
              },
              {
                icon: GraduationCap,
                title: "Education & Certifications",
                desc: "We cover 100% of certification fees for AWS, GCP, Azure, Oracle, and security certifications."
              },
              {
                icon: Heart,
                title: "Health & Wellness",
                desc: "Comprehensive health insurance plans, wellness stipends, and periodic team fitness activities."
              },
              {
                icon: HelpCircle,
                title: "Innovators Sandbox",
                desc: "10% dedicated time for research, side projects, and experimentation with next-gen AI tech."
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#000072]/10 text-[#000072] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0F2C59]">{benefit.title}</h3>
                  <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions Accordion */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Current Openings
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Select a role to view specific requirements and apply.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {openPositions.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div key={job.id} className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all duration-300">
                  
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div>
                      <h3 className="text-base font-extrabold text-[#0F2C59] hover:text-[#000072] transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-semibold text-slate-400">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span className="text-[#000072] font-bold">{job.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-bold text-[#000072]">
                      <span>{isExpanded ? "Collapse" : "View Details"}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-100"
                      >
                        <div className="p-6 bg-slate-50/30 flex flex-col gap-6">
                          <div>
                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Role Overview</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Key Requirements</h4>
                            <ul className="flex flex-col gap-2.5">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                              Job Type: {job.type}
                            </span>
                            <button
                              onClick={() => handleApplyClick(job)}
                              className="px-6 py-2.5 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide hover:bg-[#000072]/90 shadow-md cursor-pointer"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Apply Modal Form */}
        <AnimatePresence>
          {appliedJob && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setAppliedJob(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Form Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-lg bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden p-6 sm:p-8"
              >
                <button
                  onClick={() => setAppliedJob(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {formSubmitted ? (
                  <div className="text-center py-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0F2C59]">Application Received</h3>
                    <p className="text-xs text-slate-500 max-w-sm mt-2 leading-relaxed">
                      Thank you for applying to the <strong>{appliedJob.title}</strong> role. Our talent acquisition team will review your qualifications and reach out shortly.
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#000072] tracking-wider mb-1 block">
                      {appliedJob.department} Department
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F2C59] mb-6">
                      Apply for {appliedJob.title}
                    </h3>

                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-wide block mb-1">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#000072]/20"
                          placeholder="e.g. Tanvir Rahman"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-wide block mb-1">Email Address</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#000072]/20"
                          placeholder="e.g. tanvir@domain.com"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-wide block mb-1">Resume / LinkedIn Profile URL</label>
                        <input
                          required
                          type="url"
                          value={formData.resume}
                          onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#000072]/20"
                          placeholder="e.g. https://linkedin.com/in/username"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-wide block mb-1">Introduce Yourself</label>
                        <textarea
                          rows={3}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#000072]/20"
                          placeholder="Tell us why you are interested in this position..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#000072] text-white font-extrabold text-xs uppercase tracking-wide hover:bg-[#000072]/90 shadow-md cursor-pointer transition-colors mt-2"
                      >
                        Submit Application
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
      <ContactSection />
    </main>
  );
}
