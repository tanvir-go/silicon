"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ArrowRight, X, Calendar, BookOpen, Layers } from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/mockData";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "AI & Innovation" | "Cyber Security" | "Cloud Operations">("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Extract categories dynamically
  const categories = ["All", "AI & Innovation", "Cyber Security", "Cloud Operations"] as const;

  // Filter posts
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white  pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/5 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Insights &amp; Telemetry
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-primary">
            Technology Briefings &amp; Analytics
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
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
                    ? "bg-gradient-to-r from-[#000072] to-[#000072]/80 border-[#000072] text-white shadow-sm"
                    : "glass hover:bg-slate-100 text-slate-655 "
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

        {/* Spotlight featured item (only when query and category are clear, showing first post) */}
        {filteredPosts.length > 0 && searchQuery === "" && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl glass border shadow-lg hover-glow overflow-hidden mb-16 grid lg:grid-cols-12 gap-6 p-6"
          >
            {/* Feature Image Left */}
            <div className="lg:col-span-6 h-60 sm:h-80 w-full rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 z-10" />
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[9px] font-bold tracking-wider uppercase backdrop-blur-md">
                Spotlight Story
              </div>
            </div>

            {/* Feature Content Right */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                  <span className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-655 font-bold uppercase">
                    {filteredPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {filteredPosts[0].date}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-xl sm:text-2xl text-slate-808 leading-tight">
                  {filteredPosts[0].title}
                </h3>
                
                <p className="text-xs text-slate-550 leading-relaxed">
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
                    <span className="text-[9px] text-slate-500">{filteredPosts[0].author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(filteredPosts[0])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-650 hover:text-primary-750 cursor-pointer transition-colors duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
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
                className="group relative rounded-3xl glass border shadow-md hover-glow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[9px] font-bold tracking-wider uppercase backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  {/* Copy details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[9px] text-slate-505 mb-2">
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
                    
                    <h4 className="font-extrabold text-sm text-slate-805 leading-snug mb-3">
                      {post.title}
                    </h4>
                    
                    <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">
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
                  
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-655 hover:text-primary-750 cursor-pointer transition-colors duration-300"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty search results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-extrabold text-lg text-slate-800 ">No Briefings Found</h3>
            <p className="text-xs text-slate-550 mt-1">Please refine your search criteria or selector values.</p>
          </div>
        )}

        {/* Full Briefing Reader Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#F0F4F7] shadow-2xl overflow-y-auto max-h-[90vh] relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center border text-slate-500 cursor-pointer z-10"
                  aria-label="Close reader"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-6 pt-2">
                  {/* Header Stamps */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3.5 text-[10px] font-mono text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-655 font-bold uppercase">
                        {selectedPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-805 leading-tight">
                      {selectedPost.title}
                    </h3>
                  </div>

                  {/* Main image banner */}
                  <div className="h-56 sm:h-72 w-full rounded-2xl overflow-hidden relative shadow-md">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Comprehensive copy */}
                  <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-605 leading-relaxed bg-[#F0F4F7] p-5 rounded-2xl">
                    <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-accent-505" />
                      EXECUTIVE SUMMARY &amp; BRIEFING
                    </h4>
                    <p className="font-semibold text-slate-700 italic mb-2">
                      "{selectedPost.excerpt}"
                    </p>
                    <p>{selectedPost.content}</p>
                  </div>

                  {/* Author block details */}
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedPost.author.avatar}
                        alt={selectedPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div>
                        <h5 className="font-extrabold text-xs text-slate-805 leading-none">
                          {selectedPost.author.name}
                        </h5>
                        <span className="text-[10px] text-slate-500 mt-1 block">{selectedPost.author.role}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPost(null)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs tracking-wide transition-all duration-300 cursor-pointer"
                    >
                      Close Reader
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
