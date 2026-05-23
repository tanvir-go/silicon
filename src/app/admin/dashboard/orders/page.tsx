"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { Search, Eye, Filter, CheckCircle2, AlertTriangle, X, Clock, HelpCircle } from "lucide-react";

export default function OrdersListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { orders, loading } = useAdminState();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [fulfillmentFilter, setFulfillmentFilter] = useState("All");

  // Get status filter from URL if present
  useEffect(() => {
    const statusParam = searchParams.get("status");
    if (statusParam) {
      setFulfillmentFilter(statusParam);
    } else {
      setFulfillmentFilter("All");
    }
  }, [searchParams]);

  const filteredOrders = orders.filter((ord) => {
    const matchesSearch =
      ord.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesPayment = paymentFilter === "All" || ord.paymentStatus === paymentFilter;
    const matchesFulfillment = fulfillmentFilter === "All" || ord.fulfillmentStatus === fulfillmentFilter;
    
    return matchesSearch && matchesPayment && matchesFulfillment;
  });

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full">Paid</span>;
      case "Pending":
        return <span className="text-[9px] font-extrabold uppercase bg-amber-50 text-amber-600 border border-amber-100 py-0.5 px-2 rounded-full">Pending</span>;
      case "Failed":
        return <span className="text-[9px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-100 py-0.5 px-2 rounded-full">Failed</span>;
      case "Refunded":
        return <span className="text-[9px] font-extrabold uppercase bg-slate-100 text-slate-600 border border-slate-200 py-0.5 px-2 rounded-full">Refunded</span>;
      default:
        return null;
    }
  };

  const getFulfillmentBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 py-0.5 px-2 rounded-full"><CheckCircle2 className="w-2.5 h-2.5" /> Shipped</span>;
      case "Processing":
        return <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 py-0.5 px-2 rounded-full"><Clock className="w-2.5 h-2.5" /> Processing</span>;
      case "Unfulfilled":
        return <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-650 bg-amber-50 border border-amber-100 py-0.5 px-2 rounded-full"><AlertTriangle className="w-2.5 h-2.5" /> Unfulfilled</span>;
      case "Cancelled":
        return <span className="inline-flex items-center gap-1 text-[9px] font-bold text-red-650 bg-red-55/10 bg-red-50 border border-red-100 py-0.5 px-2 rounded-full"><X className="w-2.5 h-2.5" /> Cancelled</span>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing orders database...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header operations bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Orders Log</h2>
          <p className="text-slate-500 text-xs mt-1">Review checkout inquiries, verify banking logs, and configure fulfillment dispatch</p>
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
            placeholder="Search by order ID, customer name, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Payment Status Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Payment</label>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>

          {/* Fulfillment Status Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Fulfillment</label>
            <select
              value={fulfillmentFilter}
              onChange={(e) => setFulfillmentFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              <option value="All">All Fulfillments</option>
              <option value="Unfulfilled">Unfulfilled</option>
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
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
                <th className="py-4 px-6">Order Reference</th>
                <th className="py-4 px-6">Customer Details</th>
                <th className="py-4 px-6">Placement Date</th>
                <th className="py-4 px-6">Invoice Total</th>
                <th className="py-4 px-6">Payment</th>
                <th className="py-4 px-6">Fulfillment</th>
                <th className="py-4 px-6 text-right">View details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    No orders found matching parameters
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6 font-bold text-[#0F2C59] font-mono tracking-wide text-xs">
                      {ord.id}
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-slate-900 leading-none">{ord.customerName}</h4>
                        <p className="text-[10px] text-slate-550 text-slate-500 font-medium select-all leading-none">{ord.customerEmail}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-650 font-medium">
                      {new Date(ord.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-900 font-bold">
                      ৳ {ord.total.toLocaleString("en-BD")}
                    </td>
                    <td className="py-4 px-6">
                      {getPaymentBadge(ord.paymentStatus)}
                    </td>
                    <td className="py-4 px-6">
                      {getFulfillmentBadge(ord.fulfillmentStatus)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => router.push(`/admin/dashboard/orders/${ord.id}`)}
                        className="p-2 bg-slate-100 hover:bg-[#0F2C59]/10 text-slate-500 hover:text-[#0F2C59] rounded-xl cursor-pointer transition-colors border border-slate-200"
                        title="Inspect Order Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
