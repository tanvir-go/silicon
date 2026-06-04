"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { Plus, X, PlusCircle, CheckCircle, ArrowLeft, UploadCloud, Globe, FileDown, AlertTriangle } from "lucide-react";

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

    setSuccessMsg(`Successfully imported ${selectedCrawlIndices.length} products from the crawled listing page!`);
    setCrawlerOpen(false);
    setCrawledData(null);
    setSelectedCrawlIndices([]);
    setTimeout(() => {
      router.push("/admin/dashboard/products");
    }, 1500);
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

    setSuccessMsg(`Successfully imported ${parsedItems.length} products!`);
    setCsvOpen(false);
    setCsvFile(null);
    setParsedItems([]);
    setTimeout(() => {
      router.push("/admin/dashboard/products");
    }, 1500);
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
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
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
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
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
            type="button"
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

      {/* CSV Import Modal */}
      {csvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar animate-scaleUp text-slate-805">
            {/* Close Trigger */}
            <button
              type="button"
              onClick={() => setCsvOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-655 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
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
                type="button"
                onClick={downloadSampleCSV}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F2C59]/10 hover:bg-[#0F2C59]/15 text-[#0F2C59] border border-[#0F2C59]/10 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
              >
                <FileDown className="w-3.5 h-3.5" />
                Template
              </button>
            </div>

            {/* Dropzone Area */}
            <div className="border-2 border-dashed border-slate-200 hover:border-[#0F2C59]/50 rounded-2xl p-8 text-center bg-slate-50/20 hover:bg-slate-50/50 transition-colors relative cursor-pointer group">
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-3">
                <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-[#0F2C59] transition-colors" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-800">
                    {csvFile ? csvFile.name : "Select or drag CSV file"}
                  </p>
                  <p className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider">
                    {csvFile ? `${(csvFile.size / 1024).toFixed(2)} KB` : "Supports standard .csv format up to 5MB"}
                  </p>
                </div>
              </div>
            </div>

            {csvError && (
              <div className="mt-4 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-800 text-[11px]">
                <AlertTriangle className="w-4.5 h-4.5 text-red-650 shrink-0 mt-0.5" />
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
                          <td className="py-2 px-4 font-semibold text-slate-808">৳{item.price.toLocaleString("en-BD")}</td>
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
                    type="button"
                    onClick={() => {
                      setCsvFile(null);
                      setParsedItems([]);
                    }}
                    className="text-[10px] font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider cursor-pointer"
                  >
                    Clear File
                  </button>
                  <button
                    type="button"
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
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 animate-scaleUp text-slate-805">
            {/* Close Trigger */}
            <button
              type="button"
              onClick={() => setCrawlerOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-655 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xs font-bold text-slate-905 uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0F2C59]" />
              Enterprise Product Web Crawler
            </h3>

            <p className="text-[11px] text-slate-500 mb-5 leading-relaxed font-medium">
              Enter any enterprise hardware or software product page URL. The server-side scraper will attempt to fetch and parse title descriptions, category groupings, pricing parameters, and visual cover images.
            </p>

            <form onSubmit={handleCrawl} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-600 uppercase tracking-wider block">Target Product Link</label>
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
                <AlertTriangle className="w-4.5 h-4.5 text-red-655 shrink-0 mt-0.5" />
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
    </div>
  );
}
