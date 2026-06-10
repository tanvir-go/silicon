"use client";

import React, { useState } from "react";
import { Briefcase, Bell, Plus, Trash2, Mail, Phone, FileText, CheckCircle2, XCircle, AlertCircle, Search, Users, Calendar, MapPin, DollarSign, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useAdminState } from "@/hooks/useAdminState";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experienceLevel: string;
  salaryRange: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  deadline: string;
  applicants: number;
  status: string;
}

export default function HiringDashboardPage() {
  const { addActivity } = useAdminState();

  // Career Openings state with rich details (Job Circulars)
  const [jobs, setJobs] = useState<JobOpening[]>([
    { 
      id: "JOB-101", 
      title: "Senior DevOps Engineer", 
      department: "Infrastructure", 
      type: "Full-Time", 
      location: "Dhaka (Hybrid)",
      experienceLevel: "Senior (5+ Years)",
      salaryRange: "120,000 - 160,000 BDT",
      responsibilities: "Manage Kubernetes clusters, automate AWS CI/CD pipelines, configure Docker container systems, optimize zero-downtime server scaling metrics.",
      requirements: "Solid experience in AWS, Terraform, Docker, Kubernetes, Jenkins, Linux systems Administration, and Prometheus/Grafana monitoring tools.",
      benefits: "Festival bonus, health insurance, daily lunch facility, flexible working hours, annual profit share.",
      deadline: "2026-06-30",
      applicants: 14, 
      status: "Active" 
    },
    { 
      id: "JOB-102", 
      title: "AI Research Scientist", 
      department: "Engineering", 
      type: "Full-Time", 
      location: "Dhaka (On-site)",
      experienceLevel: "Lead (3+ Years)",
      salaryRange: "150,000 - 200,000 BDT",
      responsibilities: "Train and deploy deep learning models, optimize local LLM models, write Python services using PyTorch, integrate generative AI pipelines into corporate ERP.",
      requirements: "M.Sc. or Ph.D. in CS/AI, strong expertise in Python, PyTorch, HuggingFace, RAG applications, vector databases, and fine-tuning open-source LLMs.",
      benefits: "Festival bonus, travel allowance, high-end workstations, fully subsidized learning courses, remote work options.",
      deadline: "2026-06-25",
      applicants: 8, 
      status: "Active" 
    },
    { 
      id: "JOB-103", 
      title: "Frontend Engineer (React)", 
      department: "Product", 
      type: "Contract", 
      location: "Remote",
      experienceLevel: "Mid-level (3+ Years)",
      salaryRange: "80,000 - 110,000 BDT",
      responsibilities: "Develop responsive React/Next.js components, integrate REST APIs, maintain utility functions, perform pixel-perfect TailwindCSS code optimizations.",
      requirements: "Strong JavaScript/TypeScript foundation, expertise in React, Next.js, TailwindCSS, State Management, and web accessibility standards.",
      benefits: "Remote workspace allowance, flexible scheduling, performance bonuses.",
      deadline: "2026-07-15",
      applicants: 23, 
      status: "Paused" 
    }
  ]);

  // Career notification alerts state
  const [careerNotifications, setCareerNotifications] = useState([
    { id: "CN-001", message: "Hiring campaign for Senior DevOps Engineer ends in 3 days.", date: "Today" },
    { id: "CN-002", message: "New resume submission received for AI Research Scientist.", date: "Yesterday" }
  ]);

  // Job Applicants/Responses State
  const [applicants, setApplicants] = useState([
    { id: "APP-001", name: "Tanvir Rahman", email: "tanvir@example.com", phone: "+880 1712-345678", role: "Senior DevOps Engineer", resume: "tanvir_devops_resume.pdf", status: "Reviewing", date: "Today" },
    { id: "APP-002", name: "Sumi Akter", email: "sumi.akter@gmail.com", phone: "+880 1823-456789", role: "AI Research Scientist", resume: "sumi_ai_cv.pdf", status: "Shortlisted", date: "Yesterday" },
    { id: "APP-003", name: "Rakib Hasan", email: "rakib.h@outlook.com", phone: "+880 1934-567890", role: "Frontend Engineer (React)", resume: "rakib_react_dev.pdf", status: "Interviewed", date: "2 days ago" },
    { id: "APP-004", name: "Farhana Yasmin", email: "farhana.y@example.com", phone: "+880 1545-678901", role: "Senior DevOps Engineer", resume: "farhana_infra_cv.pdf", status: "Pending", date: "3 days ago" }
  ]);

  // Form states for adding rich job circulars
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobDept, setNewJobDept] = useState("Engineering");
  const [newJobType, setNewJobType] = useState("Full-Time");
  const [newJobLocation, setNewJobLocation] = useState("Dhaka (Hybrid)");
  const [newJobExp, setNewJobExp] = useState("Senior (5+ Years)");
  const [newJobSalary, setNewJobSalary] = useState("Negotiable");
  const [newJobResponsibilities, setNewJobResponsibilities] = useState("");
  const [newJobRequirements, setNewJobRequirements] = useState("");
  const [newJobBenefits, setNewJobBenefits] = useState("");
  const [newJobDeadline, setNewJobDeadline] = useState("");

  // Form states for notification alerts
  const [newNotifText, setNewNotifText] = useState("");

  // Search, Filter, and Expand states
  const [selectedJobFilter, setSelectedJobFilter] = useState("All");
  const [applicantSearch, setApplicantSearch] = useState("");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim()) return;
    const newId = `JOB-${Math.floor(100 + Math.random() * 900)}`;
    const newJob: JobOpening = {
      id: newId,
      title: newJobTitle,
      department: newJobDept,
      type: newJobType,
      location: newJobLocation,
      experienceLevel: newJobExp,
      salaryRange: newJobSalary,
      responsibilities: newJobResponsibilities || "To be updated",
      requirements: newJobRequirements || "To be updated",
      benefits: newJobBenefits || "Festival Bonus, Health Cover",
      deadline: newJobDeadline || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      applicants: 0,
      status: "Active"
    };
    setJobs(prev => [...prev, newJob]);
    addActivity(`Posted new career circular: ${newJobTitle} (${newId})`);
    
    // Reset inputs
    setNewJobTitle("");
    setNewJobResponsibilities("");
    setNewJobRequirements("");
    setNewJobBenefits("");
    setNewJobDeadline("");
  };

  const handleToggleJobStatus = (id: string) => {
    setJobs(prev => prev.map(job => {
      if (job.id === id) {
        const nextStatus = job.status === "Active" ? "Paused" : "Active";
        addActivity(`Updated status of circular ${job.title} to ${nextStatus}`);
        return { ...job, status: nextStatus };
      }
      return job;
    }));
  };

  const handleDeleteJob = (id: string, title: string) => {
    setJobs(prev => prev.filter(job => job.id !== id));
    addActivity(`Deleted career circular ${title} (${id})`);
  };

  const handleAddNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotifText.trim()) return;
    const newId = `CN-${Math.floor(100 + Math.random() * 900)}`;
    const newNotif = {
      id: newId,
      message: newNotifText,
      date: "Just Now"
    };
    setCareerNotifications(prev => [newNotif, ...prev]);
    addActivity(`Broadcasted recruitment alert: "${newNotifText}"`);
    setNewNotifText("");
  };

  const handleDeleteNotification = (id: string) => {
    setCareerNotifications(prev => prev.filter(n => n.id !== id));
    addActivity(`Removed recruitment notification: ${id}`);
  };

  const handleUpdateApplicantStatus = (id: string, newStatus: string) => {
    setApplicants(prev => prev.map(app => {
      if (app.id === id) {
        addActivity(`Updated applicant ${app.name} status to ${newStatus}`);
        return { ...app, status: newStatus };
      }
      return app;
    }));
  };

  const toggleExpandJob = (id: string) => {
    setExpandedJobId(prev => (prev === id ? null : id));
  };

  // Filtered applicants
  const filteredApplicants = applicants.filter(app => {
    const matchesJob = selectedJobFilter === "All" || app.role === selectedJobFilter;
    const matchesSearch = app.name.toLowerCase().includes(applicantSearch.toLowerCase()) || 
                          app.email.toLowerCase().includes(applicantSearch.toLowerCase()) ||
                          app.role.toLowerCase().includes(applicantSearch.toLowerCase());
    return matchesJob && matchesSearch;
  });

  return (
    <div className="space-y-8 text-left">
      {/* Page Title Header */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0F2C59] via-[#1b3f74] to-[#0c2446] text-white relative overflow-hidden shadow-lg border border-[#0F2C59]/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl text-[#0F2C59]"></div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Recruitment &amp; Careers Circular Hub</h2>
          <p className="text-slate-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            Manage comprehensive career circulars, configure job responsibilities/specifications, publish announcements, and review applicant details.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Left Side: Job Openings List & Detailed Views (Col 8) */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Active Job Openings List */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0F2C59]" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Active Career Circulars</h3>
              </div>
              <span className="text-[10px] font-black bg-[#0F2C59]/10 text-[#0F2C59] px-2.5 py-0.5 rounded-full">
                {jobs.length} Published Roles
              </span>
            </div>

            {/* Circular Listings Grid */}
            <div className="space-y-4">
              {jobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div 
                    key={job.id} 
                    className={`border rounded-2xl transition-all duration-300 ${
                      isExpanded 
                        ? "border-[#0F2C59]/30 bg-slate-50/20 shadow-md" 
                        : "border-slate-200 hover:border-slate-350 bg-white hover:shadow-sm"
                    }`}
                  >
                    {/* Header Row */}
                    <div 
                      onClick={() => toggleExpandJob(job.id)}
                      className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-slate-800 text-base leading-snug">{job.title}</h4>
                          <span className="text-[9px] bg-[#0F2C59]/5 text-[#0F2C59] font-bold px-2 py-0.5 rounded">{job.department}</span>
                          <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{job.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 font-semibold text-[11px]">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                          <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> {job.experienceLevel}</span>
                          <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {job.salaryRange}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3.5 border-t sm:border-0 pt-3 sm:pt-0 shrink-0">
                        <div className="text-right">
                          <span className="font-extrabold text-[#0F2C59] block text-xs">{job.applicants} applied</span>
                          <span className="text-[9px] text-slate-400 block font-semibold">Deadline: {job.deadline}</span>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleJobStatus(job.id);
                          }}
                          className={`text-[9px] font-black uppercase py-1 px-3.5 rounded-full cursor-pointer transition-colors border ${
                            job.status === "Active"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-250 hover:bg-emerald-100"
                              : "bg-amber-50 text-amber-600 border-amber-250 hover:bg-amber-100"
                          }`}
                        >
                          {job.status}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteJob(job.id, job.title);
                          }}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors border-0 bg-transparent cursor-pointer"
                          title="Delete circular"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Content Segment */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-3 border-t border-slate-100 space-y-4 bg-slate-50/50 rounded-b-2xl text-xs text-slate-700">
                        
                        {/* Responsibilities Block */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Core Responsibilities</span>
                          <p className="bg-white p-3 rounded-lg border border-slate-150 font-medium leading-relaxed">{job.responsibilities}</p>
                        </div>

                        {/* Requirements Block */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Skills &amp; Requirements</span>
                          <p className="bg-white p-3 rounded-lg border border-slate-150 font-medium leading-relaxed">{job.requirements}</p>
                        </div>

                        {/* Benefits Block */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Compensation &amp; Offerings</span>
                          <p className="bg-white p-3 rounded-lg border border-slate-150 font-medium leading-relaxed">{job.benefits}</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1 font-semibold text-slate-500">
                          <div>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">ID Code</span>
                            <span className="font-mono text-[11px] text-slate-800">{job.id}</span>
                          </div>
                          <div>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Target Experience</span>
                            <span className="text-slate-800">{job.experienceLevel}</span>
                          </div>
                          <div>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Salary Band</span>
                            <span className="text-slate-800">{job.salaryRange}</span>
                          </div>
                          <div>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Applications Close</span>
                            <span className="text-slate-850 flex items-center gap-1 text-slate-800"><Calendar className="w-3.5 h-3.5 text-[#D32F2F]" /> {job.deadline}</span>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hiring Responses / Applications Portal */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0F2C59]" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Candidate Submissions ({filteredApplicants.length})</h3>
              </div>

              {/* Filtering Controls */}
              <div className="flex items-center gap-2.5">
                <select
                  value={selectedJobFilter}
                  onChange={(e) => setSelectedJobFilter(e.target.value)}
                  className="px-2 py-1.5 border border-slate-200 rounded-lg outline-none bg-white text-[10px] font-bold text-slate-700"
                >
                  <option value="All">All Roles</option>
                  {jobs.map(j => (
                    <option key={j.id} value={j.title}>{j.title}</option>
                  ))}
                </select>
                
                <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                  <input
                    type="text"
                    placeholder="Search candidate..."
                    value={applicantSearch}
                    onChange={(e) => setApplicantSearch(e.target.value)}
                    className="bg-transparent border-0 outline-none text-[10px] w-24 sm:w-36 font-semibold"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredApplicants.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <Briefcase className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <p className="text-xs font-semibold">No candidates match your active filters</p>
                </div>
              ) : (
                filteredApplicants.map((app) => (
                  <div key={app.id} className="p-4 border border-slate-200 rounded-xl space-y-3.5 text-xs text-left bg-slate-50/30 hover:bg-slate-50/60 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{app.name}</span>
                          <span className="text-[9px] bg-[#0F2C59]/5 text-[#0F2C59] font-bold px-2 py-0.5 rounded-full">{app.role}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 font-semibold text-[11px] mt-1">
                          <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {app.email}</span>
                          <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {app.phone}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <select
                          value={app.status}
                          onChange={(e) => handleUpdateApplicantStatus(app.id, e.target.value)}
                          className={`px-2 py-1 rounded-md text-[9px] font-black uppercase border outline-none bg-white cursor-pointer ${
                            app.status === "Shortlisted" ? "text-emerald-600 border-emerald-200 bg-emerald-50/20" :
                            app.status === "Interviewed" ? "text-blue-600 border-blue-200 bg-blue-50/20" :
                            app.status === "Rejected" ? "text-rose-600 border-rose-200 bg-rose-50/20" :
                            "text-amber-600 border-amber-200 bg-amber-50/20"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewing">Reviewing</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Interviewed">Interviewed</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100/80 pt-3 text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-slate-450" />
                        <span>Attached Resume:</span>
                        <a href="#" className="text-[#0F2C59] hover:underline font-bold flex items-center gap-0.5">
                          {app.resume}
                        </a>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">{app.date} • {app.id}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Expandable circular / Job Form Panel (Col 4) */}
        <div className="xl:col-span-4 space-y-8">
          
          {/* Post New Circular Panel */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <Plus className="w-5 h-5 text-[#0F2C59]" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Create Job Circular</h3>
            </div>
            
            <form onSubmit={handleAddJob} className="space-y-4 text-xs font-semibold text-slate-600">
              
              {/* Job Title */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase">Role Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Backend Engineer"
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                />
              </div>

              {/* Department & Type */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Department</label>
                  <select
                    value={newJobDept}
                    onChange={(e) => setNewJobDept(e.target.value)}
                    className="w-full px-2 py-2 border border-slate-200 rounded-lg outline-none bg-white text-slate-700 font-semibold"
                  >
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Infrastructure</option>
                    <option>HR</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Job Type</label>
                  <select
                    value={newJobType}
                    onChange={(e) => setNewJobType(e.target.value)}
                    className="w-full px-2 py-2 border border-slate-200 rounded-lg outline-none bg-white text-slate-700 font-semibold"
                  >
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              {/* Location & Experience Level */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dhaka (Hybrid)"
                    value={newJobLocation}
                    onChange={(e) => setNewJobLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Experience</label>
                  <select
                    value={newJobExp}
                    onChange={(e) => setNewJobExp(e.target.value)}
                    className="w-full px-2 py-2 border border-slate-200 rounded-lg outline-none bg-white text-slate-700 font-semibold"
                  >
                    <option>Entry Level</option>
                    <option>Junior (1-2 Years)</option>
                    <option>Mid-level (3-5 Years)</option>
                    <option>Senior (5+ Years)</option>
                    <option>Lead (8+ Years)</option>
                    <option>Executive / Director</option>
                  </select>
                </div>
              </div>

              {/* Salary & Deadline */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Salary Band</label>
                  <input
                    type="text"
                    placeholder="Negotiable / Range"
                    value={newJobSalary}
                    onChange={(e) => setNewJobSalary(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase">Apply Deadline</label>
                  <input
                    type="date"
                    required
                    value={newJobDeadline}
                    onChange={(e) => setNewJobDeadline(e.target.value)}
                    className="w-full px-2 py-1.5 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] text-slate-700 font-semibold"
                  />
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase">Core Responsibilities</label>
                <textarea
                  placeholder="Summarize main tasks & workflows..."
                  rows={2}
                  value={newJobResponsibilities}
                  onChange={(e) => setNewJobResponsibilities(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium resize-none"
                />
              </div>

              {/* Skills/Requirements */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase">Job Requirements</label>
                <textarea
                  placeholder="Target skills, education, tools..."
                  rows={2}
                  value={newJobRequirements}
                  onChange={(e) => setNewJobRequirements(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium resize-none"
                />
              </div>

              {/* Benefits & Perks */}
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase">Benefits &amp; Allowances</label>
                <textarea
                  placeholder="Bonus schemes, health cover, leaves..."
                  rows={2}
                  value={newJobBenefits}
                  onChange={(e) => setNewJobBenefits(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white focus:border-[#0F2C59] font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0F2C59] hover:bg-[#0b2143] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer border-0 shadow-sm mt-1"
              >
                Publish Job Circular
              </button>
            </form>
          </div>

          {/* Hiring Alerts Broadcast Panel */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <Bell className="w-5 h-5 text-[#0F2C59] animate-pulse" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recruitment Alerts</h3>
            </div>

            <form onSubmit={handleAddNotification} className="flex gap-2">
              <input
                type="text"
                placeholder="Broadcast recruitment update..."
                value={newNotifText}
                onChange={(e) => setNewNotifText(e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg outline-none bg-white text-xs focus:border-[#0F2C59] font-medium"
              />
              <button
                type="submit"
                className="px-3.5 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg cursor-pointer border-0"
              >
                Post
              </button>
            </form>

            <div className="space-y-3 pt-2">
              {careerNotifications.length === 0 ? (
                <p className="text-xs text-slate-400 font-semibold italic">No active announcements</p>
              ) : (
                careerNotifications.map((notif) => (
                  <div key={notif.id} className="flex items-start justify-between p-3.5 border border-slate-150 rounded-xl bg-slate-50 text-xs text-left gap-3">
                    <div className="flex-1 space-y-0.5">
                      <p className="text-slate-700 font-semibold leading-relaxed">{notif.message}</p>
                      <span className="text-[9px] text-slate-400 font-medium block">{notif.date} • {notif.id}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteNotification(notif.id)}
                      className="text-slate-400 hover:text-red-650 transition-colors p-1 rounded-lg hover:bg-slate-150 border-0 bg-transparent cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
