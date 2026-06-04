"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { Plus, Search, Edit2, Trash2, X, Star, AlertTriangle, CheckCircle, Globe, UploadCloud, FileText, FileDown } from "lucide-react";
import { ShopProduct } from "@/data/mockProducts";

export default function ProductsManagerPage() {
  const router = useRouter();
  const { products, addProduct, updateProduct, deleteProduct, loading } = useAdminState();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Crawler Modal States
  const [crawlerOpen, setCrawlerOpen] = useState(false);
  const [crawlUrl, setCrawlUrl] = useState("");
  const [crawlLoading, setCrawlLoading] = useState(false);
  const [crawlError, setCrawlError] = useState("");
  const [crawledData, setCrawledData] = useState<any>(null);
  const [selectedCrawlIndices, setSelectedCrawlIndices] = useState<number[]>([]);

  // CSV Import States
  const [csvOpen, setCsvOpen] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [parsedItems, setParsedItems] = useState<any[]>([]);
  const [csvError, setCsvError] = useState("");
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);

  // Form State
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

  const categories = ["All", "Compute", "Networking", "Storage", "Software"];
  const stockStatuses = ["All", "In Stock", "Low Stock", "Out of Stock"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
    const matchesStock = stockFilter === "All" || product.stockStatus === stockFilter;
    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleOpenAddModal = () => {
    setEditId(null);
    setTitle("");
    setBrand("");
    setPrice(0);
    setCategory("Compute");
    setStockStatus("In Stock");
    setShortDesc("");
    setImageUrl("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800");
    setRating(4.8);
    setFeatures([]);
    setCurrentFeatureInput("");
    setModalOpen(true);
  };

  const handleOpenEditModal = (product: ShopProduct) => {
    setEditId(product.id);
    setTitle(product.title);
    setBrand(product.brand);
    setPrice(product.price);
    setCategory(product.category);
    setStockStatus(product.stockStatus);
    setShortDesc(product.shortDesc);
    setImageUrl(product.image);
    setRating(product.rating);
    setFeatures(product.features || []);
    setCurrentFeatureInput("");
    setModalOpen(true);
  };

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

    const productData = {
      title,
      brand,
      price: Number(price),
      category,
      stockStatus,
      shortDesc,
      image: imageUrl,
      rating: Number(rating),
      features: features.length > 0 ? features : ["Enterprise grade diagnostics", "Silicon core optimized"]
    };

    if (editId) {
      updateProduct(editId, productData);
    } else {
      addProduct(productData);
    }

    setModalOpen(false);
  };

  // Web Crawler Actions
  const handleCrawl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!crawlUrl.trim()) return;

    setCrawlLoading(true);
    setCrawlError("");
    setCrawledData(null);
    setSelectedCrawlIndices([]);

    try {
      const res = await fetch(`/api/crawl?url=${encodeURIComponent(crawlUrl.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to crawl target product link");
      }
      setCrawledData(data);
      if (data.type === "multiple" && data.products) {
        setSelectedCrawlIndices(data.products.map((_: any, idx: number) => idx));
      }
    } catch (err: any) {
      setCrawlError(err.message || "Unable to scrap metadata. Please check the URL and try again.");
    } finally {
      setCrawlLoading(false);
    }
  };

  const handleImportCrawled = () => {
    if (!crawledData) return;

    setEditId(null);
    setTitle(crawledData.title);
    setBrand(crawledData.brand);
    setPrice(crawledData.price);
    setCategory(crawledData.category);
    setStockStatus("In Stock");
    setShortDesc(crawledData.shortDesc);
    setImageUrl(crawledData.image);
    setRating(crawledData.rating || 4.8);
    setFeatures(crawledData.features || []);
    setCurrentFeatureInput("");

    setCrawlerOpen(false);
    setModalOpen(true);
  };

  const handleBulkImportCrawled = () => {
    if (!crawledData || !crawledData.products || selectedCrawlIndices.length === 0) return;

    selectedCrawlIndices.forEach((idx: number) => {
      const item = crawledData.products[idx];
      addProduct({
        title: item.title,
        brand: item.brand,
        price: Number(item.price),
        category: item.category,
        stockStatus: "In Stock",
        shortDesc: item.shortDesc,
        image: item.image,
        rating: item.rating || 4.8,
        features: item.features || []
      });
    });

    setCrawlerOpen(false);
    setCrawledData(null);
    setSelectedCrawlIndices([]);
  };

  // CSV Importer Logic Helpers
  const parseCSV = (text: string) => {
    const lines = text.split(/\r?\n/);
    if (lines.length === 0 || !lines[0].trim()) return { headers: [], rows: [] };

    const splitCSVLine = (line: string): string[] => {
      const result: string[] = [];
      let current = "";
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' || char === "'") {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          result.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      result.push(current);
      return result;
    };

    const headers = splitCSVLine(lines[0]);
    const rows: any[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const values = splitCSVLine(line);
      const rowObj: any = {};
      headers.forEach((header, index) => {
        const cleanHeader = header.trim().replace(/^["']|["']$/g, "");
        const val = values[index] !== undefined ? values[index].trim().replace(/^["']|["']$/g, "") : "";
        rowObj[cleanHeader] = val;
      });
      rows.push(rowObj);
    }

    return { headers, rows };
  };

  const handleCSVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCsvFile(file);
    setCsvError("");
    setParsedItems([]);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      try {
        const { headers, rows } = parseCSV(text);
        const cleanHeaders = headers.map(h => h.trim().replace(/^["']|["']$/g, ""));
        setCsvHeaders(cleanHeaders);

        const required = ["title", "brand", "price", "category", "stockStatus", "shortDesc"];
        const missing = required.filter(field => !cleanHeaders.includes(field));

        if (missing.length > 0) {
          throw new Error(`Missing required CSV header columns: ${missing.join(", ")}`);
        }

        const validatedRows = rows.map((row, index) => {
          const rowPrice = Number(row.price);
          const validatedPrice = isNaN(rowPrice) ? 150000 : rowPrice;

          let validatedCategory = "Compute";
          if (["Compute", "Networking", "Storage", "Software"].includes(row.category)) {
            validatedCategory = row.category;
          }

          let validatedStock = "In Stock";
          if (["In Stock", "Low Stock", "Out of Stock"].includes(row.stockStatus)) {
            validatedStock = row.stockStatus;
          }

          let validatedFeatures = ["Enterprise grade specs"];
          if (row.features) {
            const splitFeats = row.features.split(";").map((f: string) => f.trim()).filter(Boolean);
            if (splitFeats.length > 0) {
              validatedFeatures = splitFeats;
            }
          }

          return {
            id: `csv-${Date.now()}-${index}`,
            title: row.title || `Hardware Line Entry ${index + 1}`,
            brand: row.brand || "Silicon Partner",
            price: validatedPrice,
            category: validatedCategory as any,
            stockStatus: validatedStock as any,
            shortDesc: row.shortDesc || "Automated catalog import configuration.",
            image: row.image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            rating: Number(row.rating) || 4.8,
            features: validatedFeatures
          };
        });

        setParsedItems(validatedRows);

      } catch (err: any) {
        setCsvError(err.message || "Failed to process CSV file. Ensure valid headers are used.");
      }
    };
    reader.readAsText(file);
  };

  const handleBulkImport = () => {
    if (parsedItems.length === 0) return;

    parsedItems.forEach(item => {
      addProduct({
        title: item.title,
        brand: item.brand,
        price: item.price,
        category: item.category,
        stockStatus: item.stockStatus,
        shortDesc: item.shortDesc,
        image: item.image,
        rating: item.rating,
        features: item.features
      });
    });

    setCsvOpen(false);
    setCsvFile(null);
    setParsedItems([]);
  };

  const downloadSampleCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "title,brand,price,category,stockStatus,shortDesc,image,features\n"
      + "\"Cisco Catalyst 9300 Switch\",\"Cisco Systems\",342000,\"Networking\",\"In Stock\",\"Stackable enterprise switch configuration.\",\"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800\",\"24 Ports PoE;StackPower support;480 Gbps\"\n"
      + "\"HPE ProLiant DL380 Gen10 Server\",\"HP Enterprise\",420000,\"Compute\",\"Low Stock\",\"2U rack server optimized for virtualization workloads.\",\"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800\",\"Intel Xeon 4210R;64GB RAM;2x 1.2TB SAS\"\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "scl_products_template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product catalog item? This action cannot be undone.")) {
      deleteProduct(id);
    }
  };

  const getStockBadge = (status: "In Stock" | "Low Stock" | "Out of Stock") => {
    switch (status) {
      case "In Stock":
        return (
          <span className="flex items-center gap-1 text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full uppercase tracking-wider">
            <CheckCircle className="w-2.5 h-2.5" />
            In Stock
          </span>
        );
      case "Low Stock":
        return (
          <span className="flex items-center gap-1 text-[9px] font-bold bg-amber-50 text-amber-600 border border-amber-100 py-0.5 px-2 rounded-full uppercase tracking-wider">
            <AlertTriangle className="w-2.5 h-2.5" />
            Low Stock
          </span>
        );
      case "Out of Stock":
        return (
          <span className="flex items-center gap-1 text-[9px] font-bold bg-red-50 text-red-600 border border-red-100 py-0.5 px-2 rounded-full uppercase tracking-wider">
            <X className="w-2.5 h-2.5" />
            Out Stock
          </span>
        );
    }
  };

  const presetImages = [
    { name: "DL380 Server", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
    { name: "Cisco Switch", url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
    { name: "Server Rack Detail", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { name: "Storage Block", url: "https://images.unsplash.com/photo-1606130456676-e10db7497ecb?auto=format&fit=crop&q=80&w=800" }
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing Product Inventory...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header operations bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Products Catalog</h2>
          <p className="text-slate-500 text-xs mt-1">Upload servers, network configurations, storage systems, and licenses</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setCsvFile(null);
              setCsvError("");
              setParsedItems([]);
              setCsvOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0F2C59] border border-slate-200 rounded-xl text-[10px] font-bold tracking-wider uppercase shadow-sm active:scale-98 transition-all duration-150 cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            CSV Import
          </button>
          <button
            onClick={() => {
              setCrawlUrl("");
              setCrawlError("");
              setCrawledData(null);
              setCrawlerOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0F2C59] border border-slate-200 rounded-xl text-[10px] font-bold tracking-wider uppercase shadow-sm active:scale-98 transition-all duration-150 cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            Crawl & Import
          </button>
          <button
            onClick={() => router.push("/admin/dashboard/products/add")}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold tracking-wider uppercase shadow-md shadow-[#0F2C59]/10 active:scale-98 transition-all duration-150 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Upload Product
          </button>
        </div>
      </div>

      {/* Filters and search panel */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search products by brand, title, specs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Stock Status Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Stock</label>
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              {stockStatuses.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Datatable list */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Hardware Details</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Catalog Price</th>
                <th className="py-4 px-6">Stock Level</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    No hardware configurations found matching parameters
                  </td>
                </tr>
              ) : (
                filteredProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0 shadow-inner"
                        />
                        <div className="max-w-xs md:max-w-md overflow-hidden">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-extrabold uppercase bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                              {prod.brand}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 leading-tight truncate group-hover:text-[#0F2C59] transition-colors">
                              {prod.title}
                            </h4>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-1.5 font-medium leading-none">
                            {prod.shortDesc}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[9px] font-bold bg-[#0F2C59]/10 text-[#0F2C59] border border-[#0F2C59]/10 py-1 px-2.5 rounded-full uppercase tracking-wider">
                        {prod.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-900 font-bold">
                      ৳ {prod.price.toLocaleString("en-BD")}
                    </td>
                    <td className="py-4 px-6">
                      {getStockBadge(prod.stockStatus)}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {prod.rating.toFixed(1)}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          onClick={() => router.push(`/admin/dashboard/products/edit/${prod.id}`)}
                          className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-slate-200"
                          title="Edit Product Details"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(prod.id)}
                          className="p-2 bg-slate-100 hover:bg-red-50 rounded-xl text-slate-500 hover:text-red-600 transition-colors cursor-pointer border border-slate-200 hover:border-red-100"
                          title="Delete Product"
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

      {/* CSV Import Modal */}
      {csvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar animate-scaleUp text-slate-800">
            {/* Close Trigger */}
            <button
              onClick={() => setCsvOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <UploadCloud className="w-4 h-4 text-[#0F2C59]" />
              CSV Catalog Bulk Importer
            </h3>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">CSV Data Template</h4>
                <p className="text-[10px] text-slate-500 font-medium">Download the standard formatting template to avoid header mapping issues.</p>
              </div>
              <button
                onClick={downloadSampleCSV}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F2C59]/10 hover:bg-[#0F2C59]/15 text-[#0F2C59] border border-[#0F2C59]/10 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
              >
                <FileDown className="w-3.5 h-3.5" />
                Template
              </button>
            </div>

            {/* Dropzone Area */}
            <div className="border-2 border-dashed border-slate-250 border-slate-200 hover:border-[#0F2C59]/50 rounded-2xl p-8 text-center bg-slate-50/20 hover:bg-slate-50/50 transition-colors relative cursor-pointer group">
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-3">
                <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-[#0F2C59] transition-colors" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-850 text-slate-800">
                    {csvFile ? csvFile.name : "Select or drag CSV file"}
                  </p>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {csvFile ? `${(csvFile.size / 1024).toFixed(2)} KB` : "Supports standard .csv format up to 5MB"}
                  </p>
                </div>
              </div>
            </div>

            {csvError && (
              <div className="mt-4 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-800 text-[11px]">
                <AlertTriangle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                <span>{csvError}</span>
              </div>
            )}

            {parsedItems.length > 0 && (
              <div className="mt-6 space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Parsed Catalog Rows ({parsedItems.length})
                  </h4>
                  <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full uppercase tracking-wider">
                    Validated successfully
                  </span>
                </div>

                {/* Previews Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden max-h-56 overflow-y-auto no-scrollbar">
                  <table className="w-full text-left border-collapse text-[10px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-2.5 px-4">Title</th>
                        <th className="py-2.5 px-4">Brand</th>
                        <th className="py-2.5 px-4">Category</th>
                        <th className="py-2.5 px-4">Price</th>
                        <th className="py-2.5 px-4">Stock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {parsedItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="py-2 px-4 font-bold text-slate-800 truncate max-w-[180px]">{item.title}</td>
                          <td className="py-2 px-4 text-slate-600 font-medium">{item.brand}</td>
                          <td className="py-2 px-4">
                            <span className="text-[8px] bg-slate-100 text-slate-600 border border-slate-200 py-0.5 px-2 rounded-full uppercase font-bold">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-2 px-4 font-semibold text-slate-800">৳{item.price.toLocaleString("en-BD")}</td>
                          <td className="py-2 px-4">
                            <span className="text-[8px] bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-1.5 rounded uppercase font-bold">
                              {item.stockStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 flex justify-end gap-3.5 border-t border-slate-200/60 font-semibold">
                  <button
                    onClick={() => {
                      setCsvFile(null);
                      setParsedItems([]);
                    }}
                    className="text-[10px] font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider cursor-pointer"
                  >
                    Clear File
                  </button>
                  <button
                    onClick={handleBulkImport}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-md shadow-[#0F2C59]/10 transition-colors cursor-pointer"
                  >
                    Import Products
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Crawl URL Modal */}
      {crawlerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 animate-scaleUp text-slate-800">
            {/* Close Trigger */}
            <button
              onClick={() => setCrawlerOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0F2C59]" />
              Enterprise Product Web Crawler
            </h3>

            <p className="text-[11px] text-slate-500 mb-5 leading-relaxed font-medium">
              Enter any enterprise hardware or software product page URL. The server-side scraper will attempt to fetch and parse title descriptions, category groupings, pricing parameters, and visual cover images.
            </p>

            <form onSubmit={handleCrawl} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-600 uppercase tracking-wider block">Target Product link</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={crawlUrl}
                    onChange={(e) => setCrawlUrl(e.target.value)}
                    placeholder="https://www.dell.com/en-us/shop/dell-poweredge-servers"
                    className="flex-grow bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5 placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={crawlLoading}
                    className="px-5 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] disabled:opacity-50 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {crawlLoading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Scraping...
                      </>
                    ) : (
                      "Crawl"
                    )}
                  </button>
                </div>
              </div>
            </form>

            {crawlError && (
              <div className="mt-4 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-800 text-[11px]">
                <AlertTriangle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                <span>{crawlError}</span>
              </div>
            )}

            {crawledData && crawledData.type === "multiple" && (
              <div className="mt-6 space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Detected Catalog Products ({crawledData.products.length})
                  </h4>
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedCrawlIndices.length === crawledData.products.length) {
                        setSelectedCrawlIndices([]);
                      } else {
                        setSelectedCrawlIndices(crawledData.products.map((_: any, idx: number) => idx));
                      }
                    }}
                    className="text-[9px] font-bold text-[#0F2C59] hover:underline uppercase tracking-wider"
                  >
                    {selectedCrawlIndices.length === crawledData.products.length ? "Deselect All" : "Select All"}
                  </button>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden max-h-56 overflow-y-auto no-scrollbar">
                  <table className="w-full text-left border-collapse text-[10px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-2 px-3 w-8">Select</th>
                        <th className="py-2 px-3">Product</th>
                        <th className="py-2 px-3">Brand</th>
                        <th className="py-2 px-3">Category</th>
                        <th className="py-2 px-3">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {crawledData.products.map((item: any, idx: number) => {
                        const isSelected = selectedCrawlIndices.includes(idx);
                        return (
                          <tr key={idx} className="hover:bg-slate-50/50 cursor-pointer" onClick={() => {
                            if (isSelected) {
                              setSelectedCrawlIndices(selectedCrawlIndices.filter((i: number) => i !== idx));
                            } else {
                              setSelectedCrawlIndices([...selectedCrawlIndices, idx]);
                            }
                          }}>
                            <td className="py-2 px-3 align-middle" onClick={(e) => e.stopPropagation()}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedCrawlIndices([...selectedCrawlIndices, idx]);
                                  } else {
                                    setSelectedCrawlIndices(selectedCrawlIndices.filter((i: number) => i !== idx));
                                  }
                                }}
                                className="w-3.5 h-3.5 rounded border-slate-350 text-[#0F2C59] focus:ring-[#0F2C59] cursor-pointer"
                              />
                            </td>
                            <td className="py-2 px-3 font-bold text-slate-800 flex items-center gap-2 max-w-[150px] truncate">
                              <img src={item.image} alt={item.title} className="w-6 h-6 rounded object-cover border border-slate-200 bg-white" />
                              <span className="truncate">{item.title}</span>
                            </td>
                            <td className="py-2 px-3 text-slate-600 font-medium">{item.brand}</td>
                            <td className="py-2 px-3">
                              <span className="text-[8px] bg-slate-100 text-slate-650 border border-slate-200 py-0.5 px-2 rounded-full uppercase font-bold">
                                {item.category}
                              </span>
                            </td>
                            <td className="py-2 px-3 font-semibold text-slate-808">৳{item.price.toLocaleString("en-BD")}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 flex justify-end gap-3.5 border-t border-slate-200/60 font-semibold">
                  <button
                    type="button"
                    onClick={() => {
                      setCrawledData(null);
                      setSelectedCrawlIndices([]);
                    }}
                    className="text-[10px] font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider cursor-pointer"
                  >
                    Clear Selection
                  </button>
                  <button
                    type="button"
                    onClick={handleBulkImportCrawled}
                    disabled={selectedCrawlIndices.length === 0}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                  >
                    Import Selected ({selectedCrawlIndices.length})
                  </button>
                </div>
              </div>
            )}

            {crawledData && crawledData.type !== "multiple" && (
              <div className="mt-6 border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-4 text-left">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200/60 pb-1.5">
                  Crawled Metadata Preview
                </h4>
                
                <div className="flex gap-3">
                  <img
                    src={crawledData.image}
                    alt={crawledData.title}
                    className="w-14 h-14 rounded-lg object-cover border border-slate-200 bg-white shadow-inner"
                  />
                  <div className="overflow-hidden space-y-1">
                    <span className="text-[9px] font-extrabold uppercase bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">
                      {crawledData.brand}
                    </span>
                    <h5 className="text-[11px] font-bold text-slate-900 truncate leading-tight mt-1" title={crawledData.title}>
                      {crawledData.title}
                    </h5>
                    <p className="text-[10px] text-slate-900 font-bold">৳ {crawledData.price.toLocaleString("en-BD")}</p>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-normal line-clamp-2">
                  {crawledData.shortDesc}
                </p>

                {crawledData.features && crawledData.features.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Specs Detected:</span>
                    <div className="flex flex-wrap gap-1">
                      {crawledData.features.slice(0, 3).map((feat: string, i: number) => (
                        <span key={i} className="text-[8px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium truncate max-w-[155px]">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex justify-end gap-3.5 border-t border-slate-200/60 font-semibold">
                  <button
                    type="button"
                    onClick={() => setCrawledData(null)}
                    className="text-[10px] font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider cursor-pointer"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={handleImportCrawled}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                  >
                    Import & Edit in Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
              {editId ? "Update Product Catalog Entry" : "Register New Hardware Configuration"}
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Product Catalog Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Dell PowerEdge R750 Server"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Manufacturer Brand</label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Dell Enterprise"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>
              </div>

              {/* Price, Category, stock grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Price in Taka (৳)</label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="e.g. 504000"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl py-2.5 px-3 outline-none focus:border-[#0F2C59] cursor-pointer"
                  >
                    <option value="Compute">Compute</option>
                    <option value="Networking">Networking</option>
                    <option value="Storage">Storage</option>
                    <option value="Software">Software</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Stock Level Status</label>
                  <select
                    value={stockStatus}
                    onChange={(e) => setStockStatus(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl py-2.5 px-3 outline-none focus:border-[#0F2C59] cursor-pointer"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
              </div>

              {/* Cover Asset Image URL */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-semibold">Hardware Asset Image URL</label>
                <input
                  type="url"
                  required
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors font-mono focus:ring-4 focus:ring-[#0F2C59]/5"
                  placeholder="https://example.com/rack.jpg"
                />
                {/* Preset Suggestions */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {presetImages.map((img) => (
                    <button
                      key={img.name}
                      type="button"
                      onClick={() => setImageUrl(img.url)}
                      className={`text-[9px] border rounded-lg py-1.5 px-2 font-bold truncate hover:bg-slate-50 transition-all cursor-pointer ${
                        imageUrl === img.url ? "border-[#0F2C59] text-[#0F2C59] bg-[#0F2C59]/5" : "border-slate-200 text-slate-400 bg-white"
                      }`}
                    >
                      {img.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Short description */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Short Description / Subheading</label>
                <input
                  type="text"
                  required
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="e.g. Enterprise server powered by 3rd Gen Intel Xeon Processors to address demanding compute..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                />
              </div>

              {/* Rating and Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-bold">Diagnostics Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    required
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-bold">Key Specifications / Features</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentFeatureInput}
                      onChange={(e) => setCurrentFeatureInput(e.target.value)}
                      placeholder="e.g. Dual Intel Xeon Scale Processors"
                      className="flex-grow bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-colors focus:ring-4 focus:ring-[#0F2C59]/5"
                    />
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="px-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      Add
                    </button>
                  </div>

                  {/* List of features */}
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar">
                    {features.length === 0 ? (
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">No specs loaded. Standard presets will apply.</span>
                    ) : (
                      features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 py-1 px-2.5 rounded-lg text-[10px] text-slate-700 font-semibold">
                          <span className="truncate max-w-[150px]">{feat}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFeature(idx)}
                            className="text-red-500 hover:text-red-600 font-bold shrink-0 cursor-pointer"
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
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
                  {editId ? "Save Changes" : "Publish Hardware"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
