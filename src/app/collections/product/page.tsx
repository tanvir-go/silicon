"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ArrowRight, Check, X, Filter, ShoppingCart, Star, Box, SlidersHorizontal, Package, Tag, Shield
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { fadeInUp, staggerContainer } from "@/lib/utils";

import { ShopProduct, shopProducts } from "@/data/mockProducts";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const brandParam = searchParams.get("brand");
  const searchParam = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Quick View Modal
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

  // Sync state with URL query parameters
  useEffect(() => {
    setSearchQuery(searchParam || "");
    
    // Normalize case and match against available categories
    if (categoryParam) {
      const match = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      setSelectedCategories(match ? [match] : [categoryParam]);
    } else {
      setSelectedCategories([]);
    }

    if (brandParam) {
      const match = brands.find(b => b.toLowerCase() === brandParam.toLowerCase());
      setSelectedBrands(match ? [match] : [brandParam]);
    } else {
      setSelectedBrands([]);
    }
  }, [categoryParam, brandParam, searchParam]);

  // Derive unique categories and brands for the sidebar
  const categories = useMemo(() => Array.from(new Set(shopProducts.map(p => p.category))), []);
  const brands = useMemo(() => Array.from(new Set(shopProducts.map(p => p.brand))), []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategories, selectedBrands]);

  const toggleFilter = (type: "category" | "brand", value: string) => {
    if (type === "category") {
      setSelectedCategories(prev => prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]);
    } else {
      setSelectedBrands(prev => prev.includes(value) ? prev.filter(b => b !== value) : [...prev, value]);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F7F9] pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000072]/10 text-[#000072] text-xs font-bold tracking-wider uppercase mb-3">
              <Package className="w-3.5 h-3.5" />
              Corporate IT Procurement
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F2C59]">
              Enterprise Hardware & Software
            </h1>
          </div>
          
          <button 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters & Sorting
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar Filters */}
          <aside className={`w-full lg:w-64 shrink-0 flex flex-col gap-8 ${mobileFiltersOpen ? 'block' : 'hidden lg:flex'}`}>
            
            {/* Search */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-3">Search Catalog</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Find servers, routers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F5F7F9] text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#000072]/30 transition-all"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-4">Categories</h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter("category", cat)}
                    />
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-[#000072] border-[#000072]' : 'border-slate-300 group-hover:border-[#000072]'}`}>
                      {selectedCategories.includes(cat) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[#0F2C59] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-4">Brands</h3>
              <div className="flex flex-col gap-3">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleFilter("brand", brand)}
                    />
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-[#000072] border-[#000072]' : 'border-slate-300 group-hover:border-[#000072]'}`}>
                      {selectedBrands.includes(brand) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-[#0F2C59] transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filters End */}
          </aside>

          {/* Right Product Grid */}
          <div className="flex-1">
            {/* Active Filters Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold text-slate-500">
                Showing {filteredProducts.length} results
              </p>
              {(selectedCategories.length > 0 || selectedBrands.length > 0 || searchQuery !== "") && (
                <button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-[#D32F2F] hover:underline cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.05, 0.1)}
                className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div 
                    variants={fadeInUp(0, 0.4)}
                    key={product.id} 
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
                  >
                    {/* Image Container */}
                    <Link 
                      href={`/collections/${product.id}`}
                      className="h-48 w-full bg-slate-100 relative overflow-hidden cursor-pointer block"
                    >
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 text-[10px] font-black uppercase text-[#0F2C59]">
                        <Tag className="w-3 h-3" />
                        {product.brand}
                      </div>
                    </Link>

                    {/* Content Container */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Link href={`/collections/${product.id}`} className="block">
                          <h3 
                            className="font-extrabold text-[#0F2C59] text-base leading-tight hover:text-[#000072] transition-colors cursor-pointer line-clamp-2"
                          >
                            {product.title}
                          </h3>
                        </Link>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                        ))}
                        <span className="text-[10px] font-bold text-slate-400 ml-1">({product.rating})</span>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {product.shortDesc}
                      </p>

                      <div className="mt-auto flex flex-col gap-4">
                        <div className="flex items-end justify-end">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                            product.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 
                            product.stockStatus === 'Low Stock' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                          }`}>
                            {product.stockStatus}
                          </span>
                        </div>

                        <button 
                          onClick={() => { setSelectedProduct(product); }}
                          disabled={product.stockStatus === "Out of Stock"}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-xs tracking-wide shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4" />
                          {product.stockStatus === "Out of Stock" ? "Unavailable" : "Get Quote"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <Box className="w-16 h-16 text-slate-200 mb-4" />
                <h3 className="text-xl font-extrabold text-[#0F2C59] mb-2">No products found</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Try adjusting your filters, searching for a different keyword, or expanding your price range.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modern E-Commerce Quick View Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left: Huge Product Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-50 relative border-r border-slate-100">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-[#0F2C59] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg w-max">
                      {selectedProduct.brand}
                    </span>
                    <span className="bg-white/90 backdrop-blur text-slate-800 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg w-max flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>

                {/* Right: Product Details & Cart Action */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 overflow-y-auto flex flex-col">
                  <Link href={`/collections/${selectedProduct.id}`}>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59] leading-tight mb-2 hover:text-[#000072] transition-colors cursor-pointer">
                      {selectedProduct.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#000072] underline cursor-pointer">Read 24 Reviews</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {selectedProduct.shortDesc}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                    <div className="flex gap-3 mt-2">
                      <Link href={`/contact?inquiry=${encodeURIComponent(selectedProduct.title)}`} className="flex-1">
                        <button 
                          disabled={selectedProduct.stockStatus === "Out of Stock"}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-[#000072]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowRight className="w-5 h-5" />
                          {selectedProduct.stockStatus === "Out of Stock" ? "Out of Stock" : "Request a Quote"}
                        </button>
                      </Link>
                      <button className="w-14 h-14 shrink-0 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors flex items-center justify-center shadow-sm">
                        <Shield className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 mt-3 opacity-60">
                      <div className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-600"><Check className="w-3 h-3 text-emerald-600" /> Secure Checkout</div>
                      <div className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-600"><Check className="w-3 h-3 text-emerald-600" /> Enterprise Warranty</div>
                      <div className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-600"><Check className="w-3 h-3 text-emerald-600" /> Fast Shipping</div>
                    </div>
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

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F7F9] pt-32 pb-24 flex items-center justify-center">
        <div className="text-slate-500 font-extrabold text-sm animate-pulse">Loading Procurement Catalog...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
