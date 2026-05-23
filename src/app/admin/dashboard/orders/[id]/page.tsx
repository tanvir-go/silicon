"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { ArrowLeft, CreditCard, Truck, Calendar, ShoppingBag, CheckCircle2, Circle, AlertCircle, Loader2 } from "lucide-react";

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { orders, updateOrder, loading } = useAdminState();

  const id = params?.id as string;

  const [order, setOrder] = useState<any>(null);
  const [payStatus, setPayStatus] = useState<string>("");
  const [fulStatus, setFulStatus] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (!loading && orders.length > 0) {
      const ord = orders.find((o) => o.id === id);
      if (ord) {
        setOrder(ord);
        setPayStatus(ord.paymentStatus);
        setFulStatus(ord.fulfillmentStatus);
      }
    }
  }, [id, orders, loading]);

  const handleUpdateStatus = () => {
    if (!order) return;
    updateOrder(id, {
      paymentStatus: payStatus as any,
      fulfillmentStatus: fulStatus as any
    });
    setSuccessMsg("Order status updated successfully.");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="w-8 h-8 text-[#0F2C59] animate-spin" />
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Syncing order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto text-center space-y-4">
        <p className="text-slate-800 font-bold text-xs uppercase tracking-wider text-red-650">Error: Order record not found</p>
        <p className="text-slate-500 text-xs leading-relaxed">The order with reference code "{id}" could not be found.</p>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  // Determine stage for fulfillment track
  const getFulfillmentStep = (status: string) => {
    switch (status) {
      case "Unfulfilled": return 1;
      case "Processing": return 2;
      case "Completed": return 3;
      case "Cancelled": return 0;
      default: return 1;
    }
  };

  const currentStep = getFulfillmentStep(order.fulfillmentStatus);

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 rounded-xl cursor-pointer transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
          </button>
          <div>
            <h2 className="text-sm font-bold text-slate-850 text-slate-800 tracking-widest uppercase">Order {order.id}</h2>
            <p className="text-slate-500 text-xs mt-1">Placed on {new Date(order.date).toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={payStatus}
            onChange={(e) => setPayStatus(e.target.value)}
            className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3 outline-none focus:border-[#0F2C59]"
          >
            <option value="Pending">Payment: Pending</option>
            <option value="Paid">Payment: Paid</option>
            <option value="Failed">Payment: Failed</option>
            <option value="Refunded">Payment: Refunded</option>
          </select>
          <select
            value={fulStatus}
            onChange={(e) => setFulStatus(e.target.value)}
            className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3 outline-none focus:border-[#0F2C59]"
          >
            <option value="Unfulfilled">Fulfillment: Unfulfilled</option>
            <option value="Processing">Fulfillment: Processing</option>
            <option value="Completed">Fulfillment: Completed</option>
            <option value="Cancelled">Fulfillment: Cancelled</option>
          </select>
          <button
            onClick={handleUpdateStatus}
            className="px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#0F2C59]/10 cursor-pointer"
          >
            Save Status
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Progress Milestone Line Tracker */}
      {order.fulfillmentStatus !== "Cancelled" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">Fulfillment Progression</h3>
          
          <div className="relative flex justify-between items-center max-w-3xl mx-auto">
            {/* Background progress bar */}
            <div className="absolute left-0 right-0 h-1 bg-slate-100 -z-10 rounded-full"></div>
            <div
              className="absolute left-0 h-1 bg-emerald-500 -z-10 rounded-full transition-all duration-500"
              style={{ width: currentStep === 3 ? "100%" : currentStep === 2 ? "50%" : "0%" }}
            ></div>

            {/* Step 1: Placed */}
            <div className="flex flex-col items-center gap-2 bg-white px-2">
              <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-800">Order Registered</span>
            </div>

            {/* Step 2: Processing */}
            <div className="flex flex-col items-center gap-2 bg-white px-2">
              <div className={`p-1.5 rounded-full border ${
                currentStep >= 2
                  ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                  : "bg-slate-50 text-slate-400 border-slate-200"
              }`}>
                {currentStep >= 2 ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </div>
              <span className={`text-[10px] font-bold ${currentStep >= 2 ? "text-slate-800" : "text-slate-400"}`}>Config & Diagnostic</span>
            </div>

            {/* Step 3: Completed */}
            <div className="flex flex-col items-center gap-2 bg-white px-2">
              <div className={`p-1.5 rounded-full border ${
                currentStep >= 3
                  ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                  : "bg-slate-50 text-slate-400 border-slate-200"
              }`}>
                {currentStep >= 3 ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </div>
              <span className={`text-[10px] font-bold ${currentStep >= 3 ? "text-slate-800" : "text-slate-400"}`}>Dispatched & Shipped</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Purchased Items List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#0F2C59]" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Purchased Items</h3>
            </div>
            
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Item details</th>
                  <th className="py-3 px-5">Price</th>
                  <th className="py-3 px-5">Qty</th>
                  <th className="py-3 px-5 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {order.items.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-5 font-bold text-slate-900">{item.title}</td>
                    <td className="py-3.5 px-5 text-slate-600">৳ {item.price.toLocaleString("en-BD")}</td>
                    <td className="py-3.5 px-5 text-slate-700 font-bold">x {item.quantity}</td>
                    <td className="py-3.5 px-5 text-right font-bold text-slate-900">৳ {(item.price * item.quantity).toLocaleString("en-BD")}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-5 bg-slate-50/50 border-t border-slate-150 border-slate-100 space-y-2.5 text-xs text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-800">৳ {order.total.toLocaleString("en-BD")}</span>
              </div>
              <div className="flex justify-between">
                <span>Standard B2B Delivery</span>
                <span className="font-bold text-slate-800">৳ 2,000</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-slate-200 pt-2.5">
                <span>Total Amount Due</span>
                <span>৳ {(order.total + 2000).toLocaleString("en-BD")}</span>
              </div>
            </div>
          </div>

          {/* Timeline History */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">Operational History Log</h3>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {order.timeline.map((event: any, idx: number) => (
                <div key={idx} className="relative text-xs leading-relaxed">
                  <div className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full bg-[#0F2C59] border-2 border-white ring-4 ring-[#0F2C59]/10"></div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">{event.status}</span>
                    <span className="text-[9px] text-slate-400 block">{event.time}</span>
                    <p className="text-[11px] text-slate-600 mt-0.5 font-medium">{event.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer & Billing Metadata Card */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Customer Profile</h3>
            <div className="space-y-3.5 text-xs">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Full Name</span>
                <p className="font-bold text-slate-800">{order.customerName}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                <p className="font-semibold text-slate-700 select-all">{order.customerEmail}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Contact Phone</span>
                <p className="font-semibold text-slate-700 select-all">{order.customerPhone}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Delivery & Billing</h3>
            <div className="space-y-3.5 text-xs">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Fulfillment Method</span>
                <p className="font-bold text-slate-850 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-slate-400" />
                  DHL Standard B2B Cargo
                </p>
              </div>
              {order.trackingNumber && (
                <div className="space-y-0.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Tracking Reference</span>
                  <p className="font-bold text-[#0F2C59] font-mono select-all">{order.trackingNumber}</p>
                </div>
              )}
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Shipping Address</span>
                <p className="font-medium text-slate-700 leading-relaxed">{order.shippingAddress}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Payment Details</h3>
            <div className="space-y-3.5 text-xs">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Gateway Method</span>
                <p className="font-bold text-slate-850 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  {order.paymentMethod}
                </p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Payment Confirmation</span>
                <p className={`font-bold uppercase text-[10px] ${
                  order.paymentStatus === "Paid" ? "text-emerald-600" :
                  order.paymentStatus === "Pending" ? "text-amber-500" :
                  "text-red-600"
                }`}>
                  {order.paymentStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
