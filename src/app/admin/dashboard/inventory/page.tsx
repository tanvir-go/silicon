"use client";

import React, { useState } from "react";
import { useAdminState } from "@/hooks/useAdminState";
import { Boxes, AlertTriangle, CheckCircle, ArrowDown, ArrowUp, RefreshCw } from "lucide-react";

export default function InventoryPage() {
  const { products, updateProduct, addActivity, loading } = useAdminState();
  const [filterTab, setFilterTab] = useState<"All" | "Low" | "Out">("All");
  
  // Custom stock numbers state (simulating quantities if they aren't explicitly saved as a field)
  // Let's store dynamic quantities in localStorage or generate them based on stockStatus
  const getProductQuantity = (prod: any) => {
    if (prod.quantity !== undefined) return prod.quantity;
    // Default fallback based on stock status
    if (prod.stockStatus === "In Stock") return 45;
    if (prod.stockStatus === "Low Stock") return 4;
    return 0;
  };

  const handleAdjustStock = (prodId: string, currentQty: number, adjustment: number) => {
    const newQty = Math.max(0, currentQty + adjustment);
    
    // Auto calculate stockStatus based on quantity threshold
    let newStatus: "In Stock" | "Low Stock" | "Out of Stock" = "In Stock";
    if (newQty === 0) {
      newStatus = "Out of Stock";
    } else if (newQty <= 5) {
      newStatus = "Low Stock";
    }

    // Save
    updateProduct(prodId, {
      quantity: newQty,
      stockStatus: newStatus
    } as any);

    const prod = products.find(p => p.id === prodId);
    const title = prod ? prod.title : "Catalog Item";
    addActivity(`Adjusted stock of "${title}" to ${newQty} units (${newStatus}).`);
  };

  const filteredProducts = products.filter((prod) => {
    const qty = getProductQuantity(prod);
    const status = prod.stockStatus;

    if (filterTab === "Low") {
      return status === "Low Stock" || (qty > 0 && qty <= 5);
    }
    if (filterTab === "Out") {
      return status === "Out of Stock" || qty === 0;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <LoaderComponent />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Warehouse Inventory Manager</h2>
        <p className="text-slate-500 text-xs mt-1">Audit stock levels, update item quantities, and review warning alerts</p>
      </div>

      {/* Tabs selectors */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setFilterTab("All")}
          className={`py-2 px-4.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            filterTab === "All"
              ? "bg-[#0F2C59] text-white border-[#0F2C59]"
              : "bg-white text-slate-655 text-slate-600 border-slate-200 hover:bg-slate-50"
          }`}
        >
          All Stock List
        </button>
        <button
          onClick={() => setFilterTab("Low")}
          className={`py-2 px-4.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            filterTab === "Low"
              ? "bg-amber-500 text-white border-amber-500"
              : "bg-white text-amber-600 border-amber-200 hover:bg-amber-50"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Low Stock Warnings
        </button>
        <button
          onClick={() => setFilterTab("Out")}
          className={`py-2 px-4.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            filterTab === "Out"
              ? "bg-red-600 text-white border-red-600"
              : "bg-white text-red-650 text-red-600 border-red-200 hover:bg-red-50"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Out of Stock
        </button>
      </div>

      {/* Datatable list */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Product Item</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6 text-center">Qty Remaining</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Catalog Value</th>
                <th className="py-4 px-6 text-right">In-line adjustments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    All clear. No warnings triggered.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((prod) => {
                  const qty = getProductQuantity(prod);
                  return (
                    <tr key={prod.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img src={prod.image} alt={prod.title} className="w-10 h-10 object-cover rounded-lg border border-slate-200 bg-slate-50 shrink-0" />
                          <div>
                            <h4 className="font-bold text-slate-800 leading-tight">{prod.title}</h4>
                            <span className="text-[9px] font-bold text-slate-400 font-mono tracking-wide">{prod.brand}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-500">
                        {prod.category}
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-slate-900 text-sm">
                        {qty}
                      </td>
                      <td className="py-4 px-6">
                        {qty === 0 ? (
                          <span className="text-[9px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-100 py-0.5 px-2.5 rounded-full">Out of Stock</span>
                        ) : qty <= 5 ? (
                          <span className="text-[9px] font-extrabold uppercase bg-amber-50 text-amber-600 border border-amber-100 py-0.5 px-2.5 rounded-full">Low Stock</span>
                        ) : (
                          <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2.5 rounded-full">In Stock</span>
                        )}
                      </td>
                      <td className="py-4 px-6 font-extrabold text-slate-900">
                        ৳ {prod.price.toLocaleString("en-BD")}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleAdjustStock(prod.id, qty, -1)}
                            disabled={qty === 0}
                            className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-red-600 disabled:opacity-30 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                            title="De-allocate unit"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleAdjustStock(prod.id, qty, 1)}
                            className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-emerald-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                            title="Allocate unit"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LoaderComponent() {
  return (
    <>
      <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing inventories...</p>
    </>
  );
}
