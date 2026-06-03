"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, Calendar, Clock, ShieldAlert 
} from "lucide-react";
import Link from "next/link";
import { useAdminState } from "@/hooks/useAdminState";
import ContactSection from "@/sections/ContactSection";

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { blogs, loading } = useAdminState();

  const post = blogs.find(
    (b) => b.id.toLowerCase() === id?.toLowerCase()
  );

  // Dynamic SEO implementation for browser client
  useEffect(() => {
    if (post) {
      document.title = post.metaTitle || `${post.title} | Silicon Computing Ltd`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.metaDescription || post.excerpt);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (post.keywords) {
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', post.keywords);
      }
    }
  }, [post]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Loading briefing details...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-16 flex flex-col items-center justify-center">
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-md max-w-md">
          <ShieldAlert className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
          <h2 className="text-xl font-extrabold text-[#0F2C59] mb-2">Briefing Not Found</h2>
          <p className="text-xs text-slate-500 mb-6">
            The briefing article you are trying to view does not exist or has been archived.
          </p>
          <Link href="/blog">
            <button className="px-6 py-2.5 rounded-xl bg-[#0F2C59] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#0b2143] cursor-pointer transition-all flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              Back to Briefings
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 relative overflow-hidden text-slate-800">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#0F2C59]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-black text-slate-455 hover:text-[#0F2C59] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO BRIEFINGS</span>
          </Link>
        </div>

        {/* Blog Post Content Area */}
        <article className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-10 shadow-sm flex flex-col gap-6">
          {/* Header Metadata */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3.5 text-[10px] font-mono text-slate-500">
              <span className="px-2 py-0.5 rounded bg-[#0F2C59]/10 text-[#0F2C59] font-bold uppercase">
                {post.category}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Main Image Banner */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-slate-50 border border-slate-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Section */}
          <div className="bg-[#F8FAFC] border-l-4 border-[#0F2C59] p-5 rounded-r-2xl">
            <p className="text-xs sm:text-sm font-semibold italic text-slate-700 leading-relaxed">
              "{post.excerpt}"
            </p>
          </div>

          {/* Body Content */}
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 whitespace-pre-line font-medium border-t border-slate-50 pt-6">
            {post.content}
          </div>

          {/* Author footer card */}
          <div className="border-t border-slate-100 pt-6 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border shadow-sm"
              />
              <div>
                <h5 className="font-extrabold text-xs text-slate-850 leading-none">
                  {post.author.name}
                </h5>
                <span className="text-[10px] text-slate-400 mt-1 block font-semibold">{post.author.role}</span>
              </div>
            </div>
          </div>
        </article>

      </div>
      <ContactSection />
    </main>
  );
}
