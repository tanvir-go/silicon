"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { 
  Search, Eye, Filter, UserCheck, Award, TrendingUp,
  Star, MessageSquare, Heart, CheckCircle, Trash2, ArrowRight
} from "lucide-react";

export default function CustomersListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") || "list";
  const { customers, loading, addActivity } = useAdminState();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [successMsg, setSuccessMsg] = useState("");

  // Customer Reviews State
  const [reviews, setReviews] = useState([
    { id: "rev-1", customer: "Anik Hasan", product: "HPE ProLiant DL380 Gen10", rating: 5, comment: "Exceptional computing capacity. The board-level cooling is solid under peak workloads.", date: "2026-05-18", status: "Approved" },
    { id: "rev-2", customer: "Tasnim Rahman", product: "Cisco Catalyst 9300 Switch", rating: 4, comment: "Good throughput. Config was straightforward but rail kits took a bit of time to adapt.", date: "2026-05-20", status: "Pending" },
    { id: "rev-3", customer: "Rafiqul Islam", product: "Mikrotik Routerboard CCR1016", rating: 5, comment: "Best price-to-performance router for our Dhaka branch office branch network expansion.", date: "2026-05-15", status: "Approved" }
  ]);

  // Wishlists State
  const [wishlist, setWishlist] = useState([
    { id: "wish-1", customer: "Nalla Zaman", product: "HPE ProLiant DL380 Gen10", dateAdded: "2026-05-22", stock: "In Stock" },
    { id: "wish-2", customer: "Anik Hasan", product: "Mikrotik Routerboard CCR1016", dateAdded: "2026-05-24", stock: "Low Stock" },
    { id: "wish-3", customer: "Tasnim Rahman", product: "Cisco Catalyst 9300 Switch", dateAdded: "2026-05-25", stock: "Out of Stock" }
  ]);

  // Loyalty points values mapping
  const [loyaltyPoints, setLoyaltyPoints] = useState<Record<string, number>>({
    "MD Nasir Feroz": 4500,
    "Tasnim Rahman": 3200,
    "Anik Hasan": 5100,
    "Rafiqul Islam": 800,
    "Nalla Zaman": 9800
  });

  // Action Handlers
  const handleApproveReview = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "Approved" } : r));
    setSuccessMsg("Review approved and published to product page.");
    addActivity("Approved customer review on product.");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleDeleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
    setSuccessMsg("Review removed successfully.");
    addActivity("Deleted customer review.");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleSendAlert = (customer: string, product: string) => {
    setSuccessMsg(`Discount email notification dispatched to ${customer} for ${product}!`);
    addActivity(`Dispatched product discount notification to ${customer}.`);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleAwardPoints = (name: string) => {
    setLoyaltyPoints(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + 500
    }));
    setSuccessMsg(`Awarded 500 loyalty points to ${name}!`);
    addActivity(`Awarded 500 bonus loyalty points to ${name}.`);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

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

  // --- SUB-RENDERERS ---

  const renderClientLedger = () => {
    return (
      <>
        {/* Filters and search panel */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
                      <td className="py-4 px-6 text-xs font-bold text-slate-700">
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
      </>
    );
  };

  const renderReviewsTab = () => {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#0F2C59]" />
            Product Quality Reviews
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Customer</th>
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Comment</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviews.map(rev => (
                <tr key={rev.id} className="hover:bg-slate-50/30">
                  <td className="py-4 px-6 font-bold text-slate-800">{rev.customer}</td>
                  <td className="py-4 px-6 font-semibold text-slate-600">{rev.product}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? "fill-amber-500 text-amber-500" : "text-slate-200"}`} />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500 max-w-sm italic">"{rev.comment}"</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{rev.date}</td>
                  <td className="py-4 px-6">
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      rev.status === "Approved" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}>
                      {rev.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    {rev.status === "Pending" && (
                      <button
                        onClick={() => handleApproveReview(rev.id)}
                        className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg font-bold text-[10px] uppercase transition-colors cursor-pointer"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteReview(rev.id)}
                      className="p-1 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg border border-transparent hover:border-red-100 transition-colors cursor-pointer inline-flex items-center"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderWishlistTab = () => {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            Saved Interest Items
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Buyer Name</th>
                <th className="py-4 px-6">Desired Product</th>
                <th className="py-4 px-6">Date Added</th>
                <th className="py-4 px-6">Inventory Status</th>
                <th className="py-4 px-6 text-right">Marketing Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {wishlist.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/30">
                  <td className="py-4 px-6 font-bold text-slate-800">{item.customer}</td>
                  <td className="py-4 px-6 font-semibold text-slate-600">{item.product}</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{item.dateAdded}</td>
                  <td className="py-4 px-6">
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      item.stock === "In Stock" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                      item.stock === "Low Stock" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                      "bg-red-50 text-red-600 border border-red-105 border-red-100"
                    }`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleSendAlert(item.customer, item.product)}
                      disabled={item.stock === "Out of Stock"}
                      className="px-3 py-1.5 bg-[#0F2C59] hover:bg-[#0b2143] disabled:opacity-50 text-white rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1 shadow-sm"
                    >
                      <ArrowRight className="w-3 h-3" />
                      Send Discount Alert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderLoyaltyTab = () => {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#0F2C59]" />
            Premium Loyalty Ledger
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Buyer Name</th>
                <th className="py-4 px-6">Loyalty Program Tier</th>
                <th className="py-4 px-6">Loyalty Points Balance</th>
                <th className="py-4 px-6">Assigned Privileges</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customers.map(cust => (
                <tr key={cust.id} className="hover:bg-slate-50/30">
                  <td className="py-4 px-6 font-bold text-slate-800">{cust.name}</td>
                  <td className="py-4 px-6">
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${getTierBadgeColor(cust.loyaltyTier)}`}>
                      {cust.loyaltyTier}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-700 font-mono text-sm">
                    {(loyaltyPoints[cust.name] || 0).toLocaleString()} Points
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {cust.loyaltyTier === "Platinum" ? "15% flat discount, priority cargo dispatch" :
                     cust.loyaltyTier === "Gold" ? "10% flat discount, 24/7 technical hotline" :
                     cust.loyaltyTier === "Silver" ? "5% flat discount, priority supply allocation" :
                     "Standard terms, email diagnostic support"}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleAwardPoints(cust.name)}
                      className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      + Award 500 Points
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const getPageTitle = () => {
    switch (tabParam) {
      case "reviews":
        return "Customer Reviews";
      case "wishlist":
        return "Wishlist Users";
      case "loyalty":
        return "Loyalty Program";
      default:
        return "Client Ledger";
    }
  };

  const getPageDescription = () => {
    switch (tabParam) {
      case "reviews":
        return "Approve, moderate, or remove buyer product quality feedback";
      case "wishlist":
        return "Audit items saved by B2B buyers and dispatch promotional incentives";
      case "loyalty":
        return "Review and manage membership tiers, loyalty points, and privileges";
      default:
        return "Manage B2B buyers, inspect loyalty profiles, and audit review counts";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">{getPageTitle()}</h2>
          <p className="text-slate-500 text-xs mt-1">{getPageDescription()}</p>
        </div>
      </div>

      {/* Success Notification Alert */}
      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-250 border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Render Active Tab */}
      {tabParam === "reviews" && renderReviewsTab()}
      {tabParam === "wishlist" && renderWishlistTab()}
      {tabParam === "loyalty" && renderLoyaltyTab()}
      {tabParam === "list" && renderClientLedger()}
    </div>
  );
}
