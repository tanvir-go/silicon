"use client";

import React, { useState } from "react";
import { useAdminState } from "@/hooks/useAdminState";
import { Plus, Search, Edit2, Trash2, X, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/mockData";

export default function BlogsManagerPage() {
  const { blogs, addBlog, updateBlog, deleteBlog, loading } = useAdminState();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  
  // Form State
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("AI & Innovation");
  const [readTime, setReadTime] = useState("5 min read");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800");
  const [authorName, setAuthorName] = useState("MD Nasir Feroz");
  const [authorRole, setAuthorRole] = useState("CEO");

  // Filter blog posts
  const categories = ["All", ...Array.from(new Set(blogs.map(b => b.category)))];
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleOpenAddModal = () => {
    setEditId(null);
    setTitle("");
    setExcerpt("");
    setContent("");
    setCategory("AI & Innovation");
    setReadTime("5 min read");
    setImageUrl("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800");
    setAuthorName("MD Nasir Feroz");
    setAuthorRole("CEO");
    setModalOpen(true);
  };

  const handleOpenEditModal = (blog: BlogPost) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setCategory(blog.category);
    setReadTime(blog.readTime);
    setImageUrl(blog.image);
    setAuthorName(blog.author.name);
    setAuthorRole(blog.author.role);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const blogData = {
      title,
      excerpt,
      content,
      category,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      readTime,
      image: imageUrl,
      author: {
        name: authorName,
        role: authorRole,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
      }
    };

    if (editId) {
      updateBlog(editId, blogData);
    } else {
      addBlog(blogData);
    }
    
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      deleteBlog(id);
    }
  };

  const presetImages = [
    { name: "Security Network", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { name: "Blade Servers", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
    { name: "Silicon Microchip", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { name: "Cloud Compute", url: "https://images.unsplash.com/photo-1606130456676-e10db7497ecb?auto=format&fit=crop&q=80&w=800" },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing Blog Index...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Operations Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Blogs Catalog</h2>
          <p className="text-slate-500 text-xs mt-1">Publish articles, release updates, and business insight logs</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold tracking-wider uppercase shadow-md shadow-[#0F2C59]/10 active:scale-98 transition-all duration-150 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Create Blog Post
        </button>
      </div>

      {/* Filters Panel */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search articles by title or excerpt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
          />
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-2.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Category Filter</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] transition-colors cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Datatable Wrapper */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Article Description</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Publish Date</th>
                <th className="py-4 px-6">Read Period</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    No articles found matching parameters
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0 shadow-inner"
                        />
                        <div className="max-w-xs md:max-w-md overflow-hidden">
                          <h4 className="text-xs font-bold text-slate-900 leading-tight truncate group-hover:text-[#0F2C59] transition-colors">{blog.title}</h4>
                          <p className="text-[10px] text-slate-500 truncate mt-1 font-medium leading-none">{blog.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[9px] font-bold bg-[#0F2C59]/10 text-[#0F2C59] border border-[#0F2C59]/10 py-1 px-2.5 rounded-full uppercase tracking-wider">
                        {blog.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {blog.date}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {blog.readTime}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          onClick={() => handleOpenEditModal(blog)}
                          className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-slate-200"
                          title="Edit Article Details"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="p-2 bg-slate-100 hover:bg-red-50 rounded-xl text-slate-500 hover:text-[#D32F2F] transition-colors cursor-pointer border border-slate-200 hover:border-red-100"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Dialog Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar animate-scaleUp text-slate-800">
            {/* Close Trigger */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 pb-3 border-b border-slate-100">
              {editId ? "Update Article Console Parameters" : "Publish Corporate Insights Node"}
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title Input */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-semibold">Article Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Navigating AI Implementations: A Guide for Boards"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-semibold">Short Summary (Excerpt)</label>
                <input
                  type="text"
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="e.g. Learn how modern enterprise boards are selecting machine learning technologies..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
                />
              </div>

              {/* Category & Read Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-semibold">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl py-2.5 px-3 outline-none focus:border-[#0F2C59] transition-colors cursor-pointer"
                  >
                    <option value="AI & Innovation">AI & Innovation</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Corporate Operations">Corporate Operations</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-semibold">Estimated Read Duration</label>
                  <input
                    type="text"
                    required
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-semibold">Cover Asset Image URL</label>
                <input
                  type="url"
                  required
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all font-mono focus:ring-4 focus:ring-[#0F2C59]/5"
                  placeholder="https://example.com/image.jpg"
                />
                {/* Preset Suggestions */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {presetImages.map((img) => (
                    <button
                      key={img.name}
                      type="button"
                      onClick={() => setImageUrl(img.url)}
                      className={`text-[9px] border rounded-lg py-1.5 px-2 font-bold truncate hover:bg-slate-55 transition-all cursor-pointer ${
                        imageUrl === img.url ? "border-[#0F2C59] text-[#0F2C59] bg-[#0F2C59]/5" : "border-slate-200 text-slate-400 bg-white"
                      }`}
                    >
                      {img.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-550 text-slate-500 uppercase tracking-widest font-semibold">Author Operator Name</label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-555 text-slate-500 uppercase tracking-widest font-semibold">Author Designation Role</label>
                  <input
                    type="text"
                    required
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>
              </div>

              {/* Article Content Textarea */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-555 text-slate-500 uppercase tracking-widest font-semibold">Article Body Content (Markdown Supported)</label>
                <textarea
                  required
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write the full content of the blog post here..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3.5 text-xs text-slate-900 outline-none transition-colors resize-y min-h-[120px] focus:ring-4 focus:ring-[#0F2C59]/5"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer border border-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-md shadow-[#0F2C59]/10"
                >
                  {editId ? "Save Changes" : "Publish Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
