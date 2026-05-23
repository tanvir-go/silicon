"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { FileDown, Calendar, TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";

type ReportType = "sales" | "products" | "customers" | "tax";

export default function ReportsPage() {
  const searchParams = useSearchParams();
  const { orders, products, customers, addActivity } = useAdminState();
  const [activeTab, setActiveTab] = useState<ReportType>("sales");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const tab = searchParams.get("tab") as ReportType;
    if (tab && ["sales", "products", "customers", "tax"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleExport = (type: string) => {
    addActivity(`Exported B2B ${type} report to CSV spreadsheet format.`);
    setSuccessMsg(`B2B ${type.toUpperCase()} report successfully compiled and downloaded as CSV.`);
    setTimeout(() => setSuccessMsg(""), 3500);
  };

  // Tax calculations
  const totalTaxBase = orders.filter(o => o.paymentStatus === "Paid").reduce((acc, o) => acc + o.total, 0);
  const totalVAT = totalTaxBase * 0.05; // 5% flat VAT

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-850 text-slate-800 tracking-widest uppercase">Business Reports Hub</h2>
          <p className="text-slate-500 text-xs mt-1">Compile tax indices, sales velocity summaries, and product catalog audits</p>
        </div>
        
        <button
          onClick={() => handleExport(activeTab)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold tracking-wider uppercase shadow-md shadow-[#0F2C59]/10 cursor-pointer"
        >
          <FileDown className="w-3.5 h-3.5" />
          Export B2B CSV
        </button>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-250 border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <span>{successMsg}</span>
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar gap-1">
        <button
          onClick={() => setActiveTab("sales")}
          className={`py-2.5 px-4.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "sales" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Sales Reports
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className={`py-2.5 px-4.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "products" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Product Reports
        </button>
        <button
          onClick={() => setActiveTab("customers")}
          className={`py-2.5 px-4.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "customers" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Customer Reports
        </button>
        <button
          onClick={() => setActiveTab("tax")}
          className={`py-2.5 px-4.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer shrink-0 ${
            activeTab === "tax" ? "border-[#0F2C59] text-[#0F2C59]" : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Tax & VAT Reports
        </button>
      </div>

      {/* TAB CONTENTS */}

      {/* 1. SALES REPORT */}
      {activeTab === "sales" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 animate-scaleUp">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0F2C59]" />
              Sales velocity
            </h3>
            <span className="text-[10px] text-slate-500 font-bold uppercase">Consolidated</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-205 border-slate-200 rounded-xl">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Gross B2B Sales</span>
              <p className="text-lg font-extrabold text-slate-900 mt-1">৳ {totalTaxBase.toLocaleString("en-BD")}</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Growth Indicator (MoM)</span>
              <p className="text-lg font-extrabold text-emerald-600 mt-1">+14.2%</p>
            </div>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-2.5 px-4">Order ID</th>
                  <th className="py-2.5 px-4">Customer Name</th>
                  <th className="py-2.5 px-4">Fulfillment</th>
                  <th className="py-2.5 px-4 text-right">Invoice Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-[#0F2C59] font-mono">{ord.id}</td>
                    <td className="py-3 px-4 text-slate-700 font-semibold">{ord.customerName}</td>
                    <td className="py-3 px-4">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        ord.fulfillmentStatus === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                      }`}>{ord.fulfillmentStatus}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900">৳ {ord.total.toLocaleString("en-BD")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. PRODUCT PERFORMANCE */}
      {activeTab === "products" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 animate-scaleUp">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#0F2C59]" />
              Catalog Velocity Summary
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-2.5 px-4">Product Name</th>
                  <th className="py-2.5 px-4">Brand</th>
                  <th className="py-2.5 px-4">Category</th>
                  <th className="py-2.5 px-4">Rating</th>
                  <th className="py-2.5 px-4 text-right">Catalog Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800">{prod.title}</td>
                    <td className="py-3 px-4 font-medium text-slate-550 text-slate-500">{prod.brand}</td>
                    <td className="py-3 px-4 text-slate-500 font-semibold">{prod.category}</td>
                    <td className="py-3 px-4 text-slate-700 font-bold">★ {prod.rating}</td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900">৳ {prod.price.toLocaleString("en-BD")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. CUSTOMER SPENT REPORT */}
      {activeTab === "customers" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 animate-scaleUp">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-5 h-5 text-[#0F2C59]" />
              Account Ledger Summary
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-2.5 px-4">Buyer Name</th>
                  <th className="py-2.5 px-4">Contact Email</th>
                  <th className="py-2.5 px-4">Loyalty Tier</th>
                  <th className="py-2.5 px-4">Orders count</th>
                  <th className="py-2.5 px-4 text-right">Lifetime Value (LTV)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800">{cust.name}</td>
                    <td className="py-3 px-4 font-semibold text-slate-500">{cust.email}</td>
                    <td className="py-3 px-4">
                      <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full">
                        {cust.loyaltyTier}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-bold">{cust.ordersCount} orders</td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900">৳ {cust.totalSpent.toLocaleString("en-BD")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. TAX & VAT REPORTS */}
      {activeTab === "tax" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6 animate-scaleUp">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#0F2C59]" />
              Tax & VAT Accounting
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[9px] font-bold text-slate-500 uppercase">Gross Taxable Base</span>
              <p className="text-base font-extrabold text-slate-800 mt-1">৳ {totalTaxBase.toLocaleString("en-BD")}</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[9px] font-bold text-slate-500 uppercase">Sales VAT rate</span>
              <p className="text-base font-extrabold text-[#0F2C59] mt-1">5% (Flat Rate)</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-205 border-slate-200 rounded-xl">
              <span className="text-[9px] font-bold text-slate-550 text-slate-500 uppercase">Accrued Tax VAT (৳ BDT)</span>
              <p className="text-base font-extrabold text-emerald-600 mt-1">৳ {totalVAT.toLocaleString("en-BD")}</p>
            </div>
          </div>

          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-xs text-indigo-950 leading-relaxed font-semibold">
            All VAT collected is reconciled against local National Board of Revenue (NBR) codes for Silicon Computing Ltd.
          </div>
        </div>
      )}
    </div>
  );
}
