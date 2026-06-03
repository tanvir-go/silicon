"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ArrowRight, BookOpen, Calendar, Layers } from "lucide-react";
import { useAdminState } from "@/hooks/useAdminState";
import Link from "next/link";

export default function BlogPage() {
  const { blogs, loading } = useAdminState();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract categories dynamically from the actual blog state merged with defaults
  const defaultCategories = ["AI & Innovation", "Cyber Security", "Cloud Operations"];
  const categories = ["All", ...Array.from(new Set([...defaultCategories, ...blogs.map((b) => b.category)]))];

  // Filter posts
  const filteredPosts = blogs.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-32 pb-24 flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing Blog Index...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden text-slate-800">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-655 text-xs font-bold tracking-wider uppercase mb-4">
            Insights &amp; Telemetry
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F2C59] leading-tight">
            Technology Briefings &amp; Analytics
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed font-medium">
            Read executive breakdowns on server container scheduling, zero-trust network endpoints, and scalable deep learning methodologies compiled by our operations leads.
          </p>
        </div>

        {/* Filtering Controls Row */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between pb-8 mb-12 border-b border-slate-200/50 ">
          {/* Category Selectors */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs tracking-wide border cursor-pointer hover:scale-103 transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#0F2C59] to-[#0F2C59]/80 border-[#0F2C59] text-white shadow-sm"
                    : "glass bg-white hover:bg-slate-50 border-slate-200 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Query Input Search */}
          <div className="relative w-full md:max-w-xs flex items-center bg-[#F0F4F7] p-1.5 rounded-xl focus-within:transition-colors duration-300">
            <Search className="w-4 h-4 text-slate-400 ml-2" />
            <input
              type="text"
              placeholder="Search briefings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-2.5 py-1.5 text-xs text-slate-800 outline-none placeholder-slate-400"
            />
          </div>
        </div>

        {/* Spotlight featured item */}
        {filteredPosts.length > 0 && searchQuery === "" && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden mb-16 grid lg:grid-cols-12 gap-6 p-6"
          >
            {/* Feature Image Left */}
            <Link 
              href={`/blog/${filteredPosts[0].id}`} 
              className="lg:col-span-6 h-60 sm:h-80 w-full rounded-2xl overflow-hidden relative cursor-pointer block"
            >
              <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors duration-300 z-10" />
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0F2C59] text-white text-[9px] font-bold tracking-wider uppercase backdrop-blur-md">
                Spotlight Story
              </div>
            </Link>

            {/* Feature Content Right */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                  <span className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-655 font-bold uppercase">
                    {filteredPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {filteredPosts[0].date}
                  </span>
                </div>
                
                <Link href={`/blog/${filteredPosts[0].id}`}>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight hover:text-[#0F2C59] transition-colors">
                    {filteredPosts[0].title}
                  </h3>
                </Link>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {filteredPosts[0].excerpt}
                </p>
              </div>

              {/* Author & trigger */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={filteredPosts[0].author.avatar}
                    alt={filteredPosts[0].author.name}
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <div>
                    <h5 className="font-extrabold text-[11px] text-slate-800 leading-none">
                      {filteredPosts[0].author.name}
                    </h5>
                    <span className="text-[9px] text-slate-400 mt-1 block font-semibold">{filteredPosts[0].author.role}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${filteredPosts[0].id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2C59] hover:text-[#0c244a] cursor-pointer transition-colors duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Normal Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {(filteredPosts.length > 0 && searchQuery === "" && selectedCategory === "All" 
              ? filteredPosts.slice(1) 
              : filteredPosts
            ).map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image */}
                  <Link href={`/blog/${post.id}`} className="h-48 w-full overflow-hidden relative cursor-pointer block">
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors duration-300 z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0F2C59] text-white text-[9px] font-bold tracking-wider uppercase backdrop-blur-md">
                      {post.category}
                    </div>
                  </Link>

                  {/* Copy details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[9px] text-slate-500 mb-2 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <h4 className="font-extrabold text-sm text-slate-800 leading-snug mb-3 hover:text-[#0F2C59] transition-colors">
                        {post.title}
                      </h4>
                    </Link>
                    
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card footer author & trigger */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border"
                    />
                    <span className="font-extrabold text-[10px] text-slate-700 leading-none">
                      {post.author.name}
                    </span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2C59] hover:text-[#0c244a] cursor-pointer transition-colors duration-300"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty search results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-extrabold text-lg text-slate-800">No Briefings Found</h3>
            <p className="text-xs text-slate-500 mt-1">Please refine your search criteria or selector values.</p>
          </div>
        )}

      </div>
    </main>
  );
}
