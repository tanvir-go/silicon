"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import {
  TrendingUp,
  ShoppingBag,
  Eye,
  Users,
  AlertTriangle,
  Ticket,
  LifeBuoy,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Undo2,
  DollarSign,
  ChevronRight
} from "lucide-react";

export default function OverviewPage() {
  const router = useRouter();
  const {
    products,
    orders,
    activities,
    coupons,
    customers,
    addActivity,
    updateOrder,
    loading
  } = useAdminState();

  // Refund requests state (simulating inline actions)
  const [refundRequests, setRefundRequests] = useState([
    { id: "RFD-001", customer: "Anik Hasan", item: "Mikrotik Router CCR1016", amount: 78000, reason: "Firmware incompatibilities", status: "Pending" },
    { id: "RFD-002", customer: "Tasnim Rahman", item: "Cisco Catalyst 9300 Switch", amount: 165000, reason: "Duplicate purchase order", status: "Pending" }
  ]);

  const [bidReplies, setBidReplies] = useState<Record<string, string>>({});



  const handleRefundAction = (id: string, action: "Approve" | "Reject") => {
    setRefundRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: action === "Approve" ? "Approved" : "Rejected" } : r))
    );
    const target = refundRequests.find((r) => r.id === id);
    addActivity(`${action}d refund request ${id} for ৳ ${target?.amount.toLocaleString()} (${target?.customer}).`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider animate-pulse">Initializing Overview Hub...</p>
      </div>
    );
  }

  // Widget 1: Sales Metrics Calculations
  const grossSales = orders.filter((o) => o.paymentStatus === "Paid").reduce((acc, o) => acc + o.total, 0);
  const totalOrdersCount = orders.length;
  const activeClients = customers.length;
  const averageOrderValue = totalOrdersCount > 0 ? grossSales / totalOrdersCount : 0;

  // Widget 2: Order Fulfillment Status Counts
  const completedOrders = orders.filter((o) => o.fulfillmentStatus === "Completed").length;
  const processingOrders = orders.filter((o) => o.fulfillmentStatus === "Processing").length;
  const pendingOrders = orders.filter((o) => o.fulfillmentStatus === "Unfulfilled").length;

  // Widget 4: Low Stock Alert Counter
  const lowStockProducts = products.filter((p) => p.stockStatus === "Low Stock" || ((p as any).quantity !== undefined && (p as any).quantity <= 5));

  // Widget 6: Top-selling Products leaderboard (simulation based on catalog values)
  const topProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  // Widget 8: Support Tickets Queue
  const supportTickets = [
    { id: "TKT-991", user: "Tasnim Rahman", topic: "Cisco firmware patch", priority: "High", date: "Today" },
    { id: "TKT-992", user: "Rafiqul Islam", topic: "Dell rail-kit dimensions", priority: "Medium", date: "Yesterday" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0F2C59] via-[#1b3f74] to-[#0c2446] text-white relative overflow-hidden shadow-lg border border-[#0F2C59]/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl text-[#0F2C59]"></div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Welcome Back, Nasir</h2>
          <p className="text-slate-100 text-xs md:text-sm max-w-xl leading-relaxed">
            Silicon Computing Ltd administration dashboard. Manage catalog listings, confirm B2B invoices, and monitor system diagnostics.
          </p>
        </div>
      </div>

      {/* Widget 1 & 4 & 7: Top Quick Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Gross Sales */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gross Revenue</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">৳ {grossSales.toLocaleString("en-BD")}</h3>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 py-0.5 px-1.5 rounded inline-block mt-1">+14.2% MoM growth</span>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average Order Value</span>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-650 border border-indigo-150 border-indigo-100">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">৳ {averageOrderValue.toLocaleString("en-BD")}</h3>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase inline-block mt-1">calculated over B2B sales</span>
          </div>
        </div>

        {/* Widget 4: Low Stock Alert Counter */}
        <div
          onClick={() => router.push("/admin/dashboard/inventory")}
          className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 transition-colors shadow-sm flex flex-col justify-between cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Low Stock Items</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-500 border border-amber-100 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{lowStockProducts.length} warnings</h3>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase inline-block mt-1">Click to view stock list</span>
          </div>
        </div>

        {/* Widget 7: Active Coupons Tracker */}
        <div
          onClick={() => router.push("/admin/dashboard/marketing/coupons")}
          className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-violet-400 transition-colors shadow-sm flex flex-col justify-between cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Coupons</span>
            <div className="p-2 rounded-xl bg-violet-50 text-violet-600 border border-violet-100">
              <Ticket className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{coupons.length} codes active</h3>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase inline-block mt-1">Manage promotion codes</span>
          </div>
        </div>
      </div>

      {/* Widget 2 & 5 & 8 & 9: Operations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Double-Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Widget 3: Recent Transactions Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#0F2C59]" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recent Transactions</h3>
              </div>
              <Link href="/admin/dashboard/orders" className="text-[9px] font-bold text-[#0F2C59] uppercase tracking-wider flex items-center gap-0.5 hover:underline">
                View All <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-5">ID</th>
                    <th className="py-3 px-5">Customer</th>
                    <th className="py-3 px-5">Fulfillment</th>
                    <th className="py-3 px-5 text-right">Invoice Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.slice(0, 4).map((ord) => (
                    <tr
                      key={ord.id}
                      onClick={() => router.push(`/admin/dashboard/orders/${ord.id}`)}
                      className="hover:bg-slate-50/50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-5 font-bold text-[#0F2C59] font-mono">{ord.id}</td>
                      <td className="py-3 px-5 text-slate-700 font-semibold">{ord.customerName}</td>
                      <td className="py-3 px-5">
                        <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                          ord.fulfillmentStatus === "Completed" ? "bg-emerald-50 text-emerald-600" :
                          ord.fulfillmentStatus === "Processing" ? "bg-blue-50 text-blue-600" :
                          "bg-amber-50 text-amber-600"
                        }`}>{ord.fulfillmentStatus}</span>
                      </td>
                      <td className="py-3 px-5 text-right font-bold text-slate-900">৳ {ord.total.toLocaleString("en-BD")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Widget 5: Pending Refund Requests */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Undo2 className="w-5 h-5 text-red-500" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Pending Refund Requests</h3>
            </div>

            <div className="space-y-3">
              {refundRequests.map((ref) => (
                <div key={ref.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{ref.customer}</span>
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wide">{ref.id}</span>
                    </div>
                    <p className="text-slate-500 text-[11px] font-medium">Item: <span className="font-semibold text-slate-700">{ref.item}</span> (৳ {ref.amount.toLocaleString()})</p>
                    <p className="text-[10px] text-slate-405 text-slate-400 italic">"Reason: {ref.reason}"</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {ref.status === "Pending" ? (
                      <>
                        <button
                          onClick={() => handleRefundAction(ref.id, "Reject")}
                          className="px-3 py-1.5 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100 rounded-lg text-[9px] font-bold uppercase tracking-wider cursor-pointer text-slate-600"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleRefundAction(ref.id, "Approve")}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Approve
                        </button>
                      </>
                    ) : (
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        ref.status === "Approved" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-55/10 bg-red-50 text-red-600 border border-red-100"
                      }`}>
                        {ref.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 5.5: B2B Corporate Bid Requests */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <TrendingUp className="w-5 h-5 text-[#0F2C59]" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex-1">B2B Corporate Bid Queue</h3>
              <span className="text-[10px] font-black bg-[#0F2C59]/10 text-[#0F2C59] px-2 py-0.5 rounded-full">
                {orders.filter(o => o.paymentMethod === 'Corporate Bid').length} Bids
              </span>
            </div>

            <div className="space-y-4">
              {orders.filter(o => o.paymentMethod === 'Corporate Bid').length === 0 ? (
                <p className="text-xs text-slate-400 py-4 text-center font-bold">No active B2B corporate bid requests</p>
              ) : (
                orders.filter(o => o.paymentMethod === 'Corporate Bid').map((bid) => {
                  const hasReply = bid.timeline.some((t: any) => t.status === "Admin Reply");
                  const latestReply = [...bid.timeline].reverse().find((t: any) => t.status === "Admin Reply");

                  return (
                    <div key={bid.id} className="p-4 border border-slate-200 rounded-xl space-y-3 text-xs text-left">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{bid.customerName}</span>
                            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wide">{bid.id}</span>
                          </div>
                          <p className="text-slate-550 text-slate-500 text-[10px] font-medium">{bid.customerEmail} | {bid.customerPhone}</p>
                        </div>
                        <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                          hasReply ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                        }`}>
                          {hasReply ? "Replied" : "Awaiting Quote"}
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-150/50 space-y-1.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Requested Items</span>
                        {bid.items.map((item: any, idx: number) => (
                          <div key={idx} className="flex justify-between font-semibold text-slate-700">
                            <span>{item.title}</span>
                            <span className="text-[#0F2C59]">Qty: {item.quantity} | Total: ৳ {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                        <div className="pt-1.5 border-t border-slate-200 mt-1">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Custom Specs / Notes</span>
                          <p className="text-[11px] text-slate-600 font-medium italic mt-0.5">"{bid.shippingAddress}"</p>
                        </div>
                      </div>

                      {hasReply && latestReply && (
                        <div className="bg-emerald-55/10 bg-emerald-50 p-3 rounded-lg border border-emerald-100 space-y-1 text-slate-700">
                          <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block">Your Reply / Bid Offer ({latestReply.time})</span>
                          <p className="text-[11px] font-medium">{latestReply.note}</p>
                        </div>
                      )}

                      <div className="flex flex-col gap-2 pt-1">
                        <textarea
                          placeholder={hasReply ? "Send a follow-up reply or counter-offer..." : "Type official bid pricing offer, implementation SLA, and discounts..."}
                          rows={2}
                          value={bidReplies[bid.id] || ""}
                          onChange={(e) => setBidReplies(prev => ({ ...prev, [bid.id]: e.target.value }))}
                          className="w-full px-3 py-2 rounded-lg border border-slate-250 border-slate-200 bg-white outline-none focus:border-[#0F2C59] text-xs resize-none"
                        />
                        <button
                          onClick={() => {
                            const replyText = bidReplies[bid.id];
                            if (!replyText) return;
                            updateOrder(bid.id, {
                              timeline: [
                                ...bid.timeline,
                                {
                                  status: "Admin Reply",
                                  time: new Date().toLocaleString(),
                                  note: replyText
                                }
                              ]
                            });
                            addActivity(`Replied to Corporate Bid ${bid.id} for ${bid.customerName}`);
                            setBidReplies(prev => ({ ...prev, [bid.id]: "" }));
                          }}
                          className="self-end px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white font-extrabold uppercase tracking-wider rounded-lg text-[9px] cursor-pointer border-0"
                        >
                          Send Official Reply
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          </div>

        {/* Right Single-Column */}
        <div className="space-y-6">
          {/* Widget 2: Order Fulfillment Status Summary */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Fulfillment Progression</h3>
            <div className="space-y-3 text-xs font-medium">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Shipped / Completed</span>
                <span className="font-bold text-emerald-600">{completedOrders} orders</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(completedOrders/totalOrdersCount)*100}%` }}></div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-600">Processing</span>
                <span className="font-bold text-blue-600">{processingOrders} orders</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(processingOrders/totalOrdersCount)*100}%` }}></div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-600">Unfulfilled</span>
                <span className="font-bold text-amber-500">{pendingOrders} orders</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(pendingOrders/totalOrdersCount)*100}%` }}></div>
              </div>
            </div>
          </div>

          {/* Widget 6: Top-selling Leaderboard */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Top Selling hardware</h3>
            <div className="space-y-3">
              {topProducts.map((p, idx) => (
                <div key={`${p.id}-${idx}`} className="flex justify-between items-center text-xs gap-3">
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-slate-800 truncate leading-tight">{p.title}</h4>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">{p.brand}</span>
                  </div>
                  <span className="font-extrabold text-slate-900 shrink-0">৳ {p.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 8: Support Tickets */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <LifeBuoy className="w-4.5 h-4.5 text-indigo-500" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Support tickets</h3>
            </div>
            <div className="space-y-3 text-xs">
              {supportTickets.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="flex justify-between items-start border-b border-slate-50 pb-2.5 last:border-0 last:pb-0">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-800 leading-snug">{t.topic}</h4>
                    <p className="text-[9px] text-slate-400 font-medium">From: {t.user} ({t.date})</p>
                  </div>
                  <span className="text-[8px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-100 px-1.5 py-0.5 rounded-full shrink-0">
                    {t.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 9: Activity Logs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Console Operations Log</h3>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest">Active</span>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto no-scrollbar">
              {activities.slice(0, 5).map((act, index) => (
                <div key={`${act.id}-${index}`} className="flex gap-2 text-[10px] leading-relaxed border-b border-slate-50 pb-2 last:border-0 last:pb-0 font-medium text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2C59] shrink-0 mt-1.5"></div>
                  <div className="space-y-0.5">
                    <p className="text-slate-700 font-semibold">{act.text}</p>
                    <span className="text-[9px] text-slate-400 font-medium block">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
