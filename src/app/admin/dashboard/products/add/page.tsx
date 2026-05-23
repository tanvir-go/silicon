"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { Plus, X, PlusCircle, CheckCircle, ArrowLeft } from "lucide-react";

export default function AddProductPage() {
  const router = useRouter();
  const { addProduct } = useAdminState();

  // Form states
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState<"Compute" | "Networking" | "Storage" | "Software">("Compute");
  const [stockStatus, setStockStatus] = useState<"In Stock" | "Low Stock" | "Out of Stock">("In Stock");
  const [shortDesc, setShortDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800");
  const [rating, setRating] = useState(4.8);
  const [features, setFeatures] = useState<string[]>([]);
  const [currentFeatureInput, setCurrentFeatureInput] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const categories = ["Compute", "Networking", "Storage", "Software"];
  const stockStatuses = ["In Stock", "Low Stock", "Out of Stock"];

  const presetImages = [
    { name: "DL380 Server", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
    { name: "Cisco Switch", url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
    { name: "Server Rack Detail", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { name: "Storage Block", url: "https://images.unsplash.com/photo-1606130456676-e10db7497ecb?auto=format&fit=crop&q=80&w=800" }
  ];

  const handleAddFeature = () => {
    if (currentFeatureInput.trim()) {
      setFeatures([...features, currentFeatureInput.trim()]);
      setCurrentFeatureInput("");
    }
  };

  const handleRemoveFeature = (idx: number) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !brand.trim() || price <= 0 || !shortDesc.trim()) {
      setErrorMsg("Please fill out all required fields and ensure price is greater than zero.");
      return;
    }

    const newProduct = {
      title,
      brand,
      price: Number(price),
      category,
      stockStatus,
      shortDesc,
      image: imageUrl,
      rating: Number(rating),
      features: features.length > 0 ? features : ["Enterprise grade specs", "Silicon core optimized"]
    };

    addProduct(newProduct);
    setSuccessMsg("Product successfully registered in local catalog database.");
    setErrorMsg("");

    setTimeout(() => {
      router.push("/admin/dashboard/products");
    }, 1500);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5 flex items-center gap-4">
        <button
          onClick={() => router.push("/admin/dashboard/products")}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 rounded-xl cursor-pointer transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
        </button>
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Register New Product</h2>
          <p className="text-slate-500 text-xs mt-1">Upload servers, network configurations, storage systems, and licenses</p>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <X className="w-4 h-4 text-red-650 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Grid Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Attributes */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">Core Specs</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-550 text-slate-500 uppercase tracking-wider">Product Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Cisco Catalyst 9300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Brand Partner *</label>
              <input
                type="text"
                required
                placeholder="e.g. Cisco Systems"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none cursor-pointer focus:border-[#0F2C59]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Catalog Price (৳ BDT) *</label>
              <input
                type="number"
                required
                min={0}
                placeholder="0"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none transition-all font-bold"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Stock Status *</label>
              <select
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value as any)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none cursor-pointer focus:border-[#0F2C59]"
              >
                {stockStatuses.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Initial Star Rating</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Short Description *</label>
            <textarea
              required
              rows={4}
              placeholder="Provide a summary of standard specs, node interface options, and usage environments..."
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3.5 text-xs text-slate-950 outline-none leading-relaxed"
            ></textarea>
          </div>
        </div>

        {/* Media & Features Builder */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 h-fit">
          {/* Cover Image Selector */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Cover Media</h3>
            
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Custom Image URL</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Or select a preset</span>
              <div className="grid grid-cols-2 gap-2">
                {presetImages.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setImageUrl(preset.url)}
                    className={`p-1.5 border rounded-lg overflow-hidden transition-all text-left flex flex-col items-center gap-1.5 cursor-pointer ${
                      imageUrl === preset.url ? "border-[#0F2C59] bg-[#0F2C59]/5" : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <img src={preset.url} alt={preset.name} className="w-full h-12 object-cover rounded-md border border-slate-150" />
                    <span className="text-[8px] font-bold text-slate-600 truncate w-full text-center">{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Specs / Features Builder */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Technical Specs</h3>
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Redundant Power Supply"
                  value={currentFeatureInput}
                  onChange={(e) => setCurrentFeatureInput(e.target.value)}
                  className="flex-grow bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="p-2 bg-[#0F2C59] text-white rounded-xl hover:bg-[#0b2143] transition-colors cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto no-scrollbar pt-1">
                {features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[9px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 py-1 px-2.5 rounded-full"
                  >
                    {feat}
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(idx)}
                      className="text-slate-400 hover:text-red-650 cursor-pointer"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#0F2C59]/10 cursor-pointer"
          >
            Register Product catalog
          </button>
        </div>
      </form>
    </div>
  );
}
