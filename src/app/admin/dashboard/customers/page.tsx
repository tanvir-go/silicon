"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { Search, Eye, Filter, UserCheck, Award, TrendingUp } from "lucide-react";

export default function CustomersListPage() {
  const router = useRouter();
  const { customers, loading } = useAdminState();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.phone.includes(searchTerm);
      
    const matchesTier = tierFilter === "All" || cust.loyaltyTier === tierFilter;
    const matchesStatus = statusFilter === "All" || cust.status === statusFilter;
    
    return matchesSearch && matchesTier && matchesStatus;
  });

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-purple-50 text-purple-650 border border-purple-100";
      case "Gold":
        return "bg-amber-50 text-amber-600 border border-amber-100";
      case "Silver":
        return "bg-slate-100 text-slate-650 border border-slate-200";
      default:
        return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Syncing customer records...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">Client Ledger</h2>
          <p className="text-slate-500 text-xs mt-1">Manage B2B buyers, inspect loyalty profiles, and audit review counts</p>
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
            placeholder="Search by buyer name, email, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2.5 pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:ring-4 focus:ring-[#0F2C59]/5"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Loyalty Tier Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Loyalty Tier</label>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              <option value="All">All Tiers</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
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
                <th className="py-4 px-6">Buyer Name</th>
                <th className="py-4 px-6">Email / Phone</th>
                <th className="py-4 px-6">Loyalty Program</th>
                <th className="py-4 px-6">Billing Count</th>
                <th className="py-4 px-6">Total LTV</th>
                <th className="py-4 px-6">Membership status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    No client records found matching search queries
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6 font-bold text-slate-800 text-xs">
                      {cust.name}
                    </td>
                    <td className="py-4 px-6 text-xs">
                      <div className="space-y-0.5">
                        <span className="font-semibold text-slate-700 select-all block leading-none">{cust.email}</span>
                        <span className="font-mono text-slate-400 text-[10px] select-all block leading-none">{cust.phone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${getTierBadgeColor(cust.loyaltyTier)}`}>
                        {cust.loyaltyTier}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs font-bold text-slate-705 text-slate-700">
                      {cust.ordersCount} Orders
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-900 font-extrabold">
                      ৳ {cust.totalSpent.toLocaleString("en-BD")}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        cust.status === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}>
                        {cust.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => router.push(`/admin/dashboard/customers/${cust.id}`)}
                        className="p-2 bg-slate-100 hover:bg-[#0F2C59]/10 text-slate-500 hover:text-[#0F2C59] rounded-xl cursor-pointer transition-colors border border-slate-200"
                        title="View Profile Details"
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
