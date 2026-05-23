"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { ArrowLeft, User, Mail, Phone, Calendar, ShoppingBag, ShieldCheck, Award, Star, Heart, Loader2 } from "lucide-react";

export default function CustomerDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { customers, orders, loading } = useAdminState();

  const id = params?.id as string;

  const [customer, setCustomer] = useState<any>(null);
  const [customerOrders, setCustomerOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && customers.length > 0) {
      const cust = customers.find((c) => c.id === id);
      if (cust) {
        setCustomer(cust);
        // Find matching orders in database
        const matches = orders.filter((o) => o.customerEmail.toLowerCase() === cust.email.toLowerCase());
        setCustomerOrders(matches);
      }
    }
  }, [id, customers, orders, loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="w-8 h-8 text-[#0F2C59] animate-spin" />
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Syncing client details...</p>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto text-center space-y-4">
        <p className="text-slate-800 font-bold text-xs uppercase tracking-wider text-red-650">Error: Customer account not found</p>
        <p className="text-slate-500 text-xs leading-relaxed">The user record with ID "{id}" could not be found.</p>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  // Calculate stats
  const aov = customer.ordersCount > 0 ? customer.totalSpent / customer.ordersCount : 0;

  // Mock wishlist items based on ID
  const mockWishlist = [
    { title: "HPE ProLiant DL380 Gen10 Server", price: 420000 },
    { title: "Mikrotik CCR1016-12G Router", price: 78000 }
  ];

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 rounded-xl cursor-pointer transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
        </button>
        <div>
          <h2 className="text-sm font-bold text-slate-850 text-slate-800 tracking-widest uppercase">Client Profile</h2>
          <p className="text-slate-500 text-xs mt-1">Operator code: {customer.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side card: profile */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 bg-[#0F2C59]/10 rounded-xl flex items-center justify-center text-[#0F2C59] font-bold text-lg border border-[#0F2C59]/10">
                {customer.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{customer.name}</h3>
                <span className={`inline-block text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full mt-1 ${
                  customer.status === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}>
                  {customer.status}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="font-semibold select-all">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="font-semibold select-all">{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="font-semibold">Joined {customer.joinedDate}</span>
              </div>
            </div>
          </div>

          {/* Loyalty Program Summary Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Loyalty Rewards Program</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Loyalty Tier</span>
                  <p className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mt-0.5">{customer.loyaltyTier}</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Points Balance</span>
                  <p className="text-xs font-extrabold text-emerald-600 mt-0.5">{customer.loyaltyPoints} pts</p>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 text-center font-medium">
                Accruing 1 point per ৳ 100 spent. Active membership verified.
              </div>
            </div>
          </div>
        </div>

        {/* Right side details: LTV cards, order history, wishlist */}
        <div className="lg:col-span-2 space-y-6">
          {/* LTV & purchase metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Lifetime Value (LTV)</span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">৳ {customer.totalSpent.toLocaleString("en-BD")}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Purchase Frequency</span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">{customer.ordersCount} Orders</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Average Order (AOV)</span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">৳ {aov.toLocaleString("en-BD")}</h3>
            </div>
          </div>

          {/* Orders History datatable */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#0F2C59]" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Purchase History</h3>
            </div>

            {customerOrders.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs font-semibold uppercase">No billing records on file.</div>
            ) : (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2.5 px-5">Order Reference</th>
                    <th className="py-2.5 px-5">Date</th>
                    <th className="py-2.5 px-5">Total</th>
                    <th className="py-2.5 px-5">Payment</th>
                    <th className="py-2.5 px-5 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {customerOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-5 font-bold text-[#0F2C59] font-mono tracking-wide">{ord.id}</td>
                      <td className="py-3 px-5 text-slate-500 font-medium">{new Date(ord.date).toLocaleDateString()}</td>
                      <td className="py-3 px-5 font-bold text-slate-900">৳ {ord.total.toLocaleString("en-BD")}</td>
                      <td className="py-3 px-5 font-semibold text-emerald-600 uppercase text-[10px]">{ord.paymentStatus}</td>
                      <td className="py-3 px-5 text-right">
                        <button
                          onClick={() => router.push(`/admin/dashboard/orders/${ord.id}`)}
                          className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#0F2C59] hover:bg-[#0F2C59]/10 rounded border border-[#0F2C59]/10 cursor-pointer"
                        >
                          Invoice
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Wishlist & Reviews section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Wishlist */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Heart className="w-4 h-4 text-red-500" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Wishlist Items ({customer.wishlistCount})</h3>
              </div>
              <div className="space-y-3">
                {mockWishlist.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold text-slate-800 line-clamp-1">{item.title}</span>
                    <span className="font-bold text-slate-900 shrink-0">৳ {item.price.toLocaleString("en-BD")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Star className="w-4 h-4 text-amber-500" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product Reviews ({customer.reviewsCount})</h3>
              </div>
              <div className="space-y-3 text-xs leading-relaxed text-slate-650">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                    </div>
                    <span className="font-bold text-slate-800 text-[10px]">HPE ProLiant DL380</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">"Outstanding uptime and thermal performance. Highly adaptable for virtualization workloads."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
