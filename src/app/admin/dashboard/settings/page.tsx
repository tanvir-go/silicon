"use client";

import React, { useState, useEffect } from "react";
import { useAdminState } from "@/hooks/useAdminState";
import { Database, ShieldAlert, CheckCircle, Cpu, ShieldCheck, Settings, Bell, DollarSign } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { isConfigured, firebaseConfig } from "@/lib/firebase";

type SettingsTab = "profile" | "configs" | "database" | "system";

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const { resetAllData, loading, addActivity } = useAdminState();
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const [successMsg, setSuccessMsg] = useState("");
  const [dbSize, setDbSize] = useState("0.00 KB");

  // Sync activeTab with search param tabParam
  useEffect(() => {
    if (tabParam) {
      if (tabParam === "general") {
        setActiveTab("profile");
      } else if (["shipping", "currency", "tax", "email", "notifications", "seo"].includes(tabParam)) {
        setActiveTab("configs");
      } else if (tabParam === "database") {
        setActiveTab("database");
      } else if (tabParam === "system") {
        setActiveTab("system");
      }
    }
  }, [tabParam]);

  // Global configurations state
  const [currencySymbol, setCurrencySymbol] = useState("৳");
  const [baseShipping, setBaseShipping] = useState(2000);
  const [taxRate, setTaxRate] = useState(5);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [stockThreshold, setStockThreshold] = useState(5);
  const [seoTitleTemplate, setSeoTitleTemplate] = useState("%title% | Silicon Computing Ltd");
  const [seoDefaultKeywords, setSeoDefaultKeywords] = useState("B2B servers, Dhaka IT support");
  const [googleVerification, setGoogleVerification] = useState("google-site-verification-12345");

  // Load configs from local storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCurrency = localStorage.getItem("scl_config_currency");
      const savedShipping = localStorage.getItem("scl_config_shipping");
      const savedTax = localStorage.getItem("scl_config_tax");
      const savedStock = localStorage.getItem("scl_config_stock_threshold");
      const savedSeoTitle = localStorage.getItem("scl_config_seo_title");
      const savedSeoKeywords = localStorage.getItem("scl_config_seo_keywords");
      const savedGoogleVerification = localStorage.getItem("scl_config_google_verification");
      
      if (savedCurrency) setCurrencySymbol(savedCurrency);
      if (savedShipping) setBaseShipping(Number(savedShipping));
      if (savedTax) setTaxRate(Number(savedTax));
      if (savedStock) setStockThreshold(Number(savedStock));
      if (savedSeoTitle) setSeoTitleTemplate(savedSeoTitle);
      if (savedSeoKeywords) setSeoDefaultKeywords(savedSeoKeywords);
      if (savedGoogleVerification) setGoogleVerification(savedGoogleVerification);
    }
  }, []);

  // Calculate local storage utilization
  const calculateDbSize = () => {
    if (typeof window !== "undefined") {
      try {
        let total = 0;
        const keys = ["scl_blogs", "scl_products", "scl_activities", "scl_orders", "scl_customers", "scl_coupons", "scl_suppliers"];
        keys.forEach(k => {
          const item = localStorage.getItem(k);
          if (item) {
            total += (item.length + k.length) * 2; // character length in bytes (2 bytes per char in UTF-16)
          }
        });
        setDbSize((total / 1024).toFixed(2) + " KB");
      } catch (e) {
        setDbSize("Error calculating");
      }
    }
  };

  useEffect(() => {
    calculateDbSize();
  }, [loading]);

  const handleReset = () => {
    if (confirm("Restore administrative catalog settings? This will clear all custom additions, modifications, and activity history.")) {
      resetAllData();
      calculateDbSize();
      setSuccessMsg("Database restored successfully to default system catalogs.");
      addActivity("Flushed B2B sandboxed database and restored default templates.");
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  const handleSaveConfigs = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_config_currency", currencySymbol);
      localStorage.setItem("scl_config_shipping", baseShipping.toString());
      localStorage.setItem("scl_config_tax", taxRate.toString());
      localStorage.setItem("scl_config_stock_threshold", stockThreshold.toString());
      localStorage.setItem("scl_config_seo_title", seoTitleTemplate);
      localStorage.setItem("scl_config_seo_keywords", seoDefaultKeywords);
      localStorage.setItem("scl_config_google_verification", googleVerification);
      
      setSuccessMsg("Global configurations committed successfully.");
      addActivity("Updated administrative global system settings.");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing settings panel...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Page Title */}
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-sm font-bold text-slate-850 text-slate-800 tracking-widest uppercase">Console Settings</h2>
        <p className="text-slate-500 text-xs mt-1">Configure global parameters, customize telemetry, and manage databases</p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar gap-1">
        <button
          onClick={() => setActiveTab("profile")}
          className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "profile" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          General & Profile
        </button>
        <button
          onClick={() => setActiveTab("configs")}
          className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "configs" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Global configurations
        </button>
        <button
          onClick={() => setActiveTab("database")}
          className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "database" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Database Emulator
        </button>
        <button
          onClick={() => setActiveTab("system")}
          className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "system" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          System Diagnostics
        </button>
      </div>

      {/* TAB CONTENT */}

      {/* 1. PROFILE */}
      {activeTab === "profile" && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm animate-scaleUp">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <ShieldCheck className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Operator Profile</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Active Operator</span>
              <div className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 px-3.5 rounded-xl select-all font-mono">
                MD Nasir Feroz
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Assigned Console Role</span>
              <div className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 px-3.5 rounded-xl select-all font-mono">
                Super Administrator
              </div>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Console Access Email</span>
              <div className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 px-3.5 rounded-xl select-all font-mono">
                admin@silicon.com
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. CONFIGS */}
      {activeTab === "configs" && (
        <form onSubmit={handleSaveConfigs} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm animate-scaleUp">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Settings className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Global Configuration Parameters</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">System Currency Symbol</label>
              <input
                type="text"
                required
                value={currencySymbol}
                onChange={(e) => setCurrencySymbol(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Base B2B Cargo Shipping Rate (৳)</label>
              <input
                type="number"
                required
                min={0}
                value={baseShipping}
                onChange={(e) => setBaseShipping(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Default VAT / Sales Tax Rate (%)</label>
              <input
                type="number"
                required
                min={0}
                max={100}
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Low Stock Threshold Warning Limit</label>
              <input
                type="number"
                required
                min={1}
                value={stockThreshold}
                onChange={(e) => setStockThreshold(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div>
                <h4 className="text-xs font-bold text-slate-800">Email Telemetry Notifications</h4>
                <p className="text-[9px] text-slate-500 mt-0.5">Dispatch automated alerts for out-of-stock items and server metrics</p>
              </div>
              <button
                type="button"
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer ${
                  emailAlerts ? "bg-emerald-500" : "bg-slate-300"
                }`}
              >
                <div className={`w-4.5 h-4.5 bg-white rounded-full transition-transform ${
                  emailAlerts ? "translate-x-5.5" : "translate-x-0"
                }`}></div>
              </button>
            </div>
            <div className="sm:col-span-2 border-t border-slate-100 pt-5 mt-2 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Search Engine Optimization (SEO) & Webmaster</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Default Title Template</label>
                  <input
                    type="text"
                    required
                    value={seoTitleTemplate}
                    onChange={(e) => setSeoTitleTemplate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                    placeholder="%title% | Silicon Computing Ltd"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Google Site Verification ID</label>
                  <input
                    type="text"
                    value={googleVerification}
                    onChange={(e) => setGoogleVerification(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                    placeholder="google-site-verification-..."
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Default Metadata Keywords</label>
                  <textarea
                    rows={2}
                    value={seoDefaultKeywords}
                    onChange={(e) => setSeoDefaultKeywords(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3 text-xs text-slate-900 outline-none leading-relaxed"
                    placeholder="B2B servers, Dhaka IT support..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#0F2C59]/10 cursor-pointer"
            >
              Commit configurations
            </button>
          </div>
        </form>
      )}

      {/* 3. DATABASE */}
      {activeTab === "database" && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm animate-scaleUp">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Database className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Database Connection Status</h3>
          </div>
          
          <div className="space-y-4">
            {isConfigured ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex gap-3 text-xs text-emerald-800 leading-relaxed font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-950 uppercase tracking-wider mb-1 text-[11px]">Database Connectivity Online</h4>
                  <p className="text-[10px] text-emerald-700 font-medium leading-relaxed">
                    The console is connected to your live Google Firebase database project: <span className="font-mono bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-900 font-bold select-all">{firebaseConfig.projectId}</span>. 
                    All data updates (products, orders, blogs, coupons) are synced dynamically in real-time to Cloud Firestore.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3 text-xs text-amber-800 leading-relaxed font-semibold">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-950 uppercase tracking-wider mb-1 text-[11px]">Database Operating in Local Fallrap / Fallback</h4>
                  <p className="text-[10px] text-amber-700 font-medium leading-relaxed">
                    The database is operating in local fallback mode because actual Firebase environment credentials are not fully configured in your <span className="font-mono bg-amber-100 px-1 py-0.5 rounded text-amber-900 font-bold">.env.local</span> file.
                  </p>
                  <p className="text-[10px] text-amber-650 mt-2 font-medium">
                    To connect your database, copy the Firebase app settings from the Firebase Console for project <span className="font-bold text-amber-900 select-all">silicon-website-283da</span> and update the variables in your local environment file.
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Storage Footprint</span>
                <p className="text-sm font-extrabold text-slate-800 mt-1 font-mono">{isConfigured ? "Synced (Cloud Firestore)" : dbSize}</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Active Project Node</span>
                <p className="text-xs font-bold text-[#0F2C59] mt-1.5 font-mono select-all truncate">{firebaseConfig.projectId}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-150 border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800">Sync Default Datasets</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Restore and write default B2B catalogs, blogs, and configurations to target node</p>
              </div>
              <button
                onClick={handleReset}
                className="py-2.5 px-4 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
              >
                Reset Catalogs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. SYSTEM */}
      {activeTab === "system" && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm animate-scaleUp">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Cpu className="w-5 h-5 text-indigo-500" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">System Telemetry</h3>
          </div>
          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-semibold">Next.js Framework Node</span>
              <span className="font-mono text-slate-900 text-[11px] font-bold">16.2.6 (App Router)</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-semibold">React Core Engine</span>
              <span className="font-mono text-slate-900 text-[11px] font-bold">19.2.4 (Canary)</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-semibold">CSS Core Engine</span>
              <span className="font-mono text-slate-900 text-[11px] font-bold">Tailwind CSS v4.0</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Diagnostic Buffer Limits</span>
              <span className="font-mono text-slate-900 text-[11px] font-bold">30 Log entries max</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
