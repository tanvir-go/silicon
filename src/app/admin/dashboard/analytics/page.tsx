"use client";

import React, { useState } from "react";
import { TrendingUp, Users, ShoppingCart, Percent, Clock, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";

export default function AnalyticsDashboardPage() {
  const [timeRange, setTimeRange] = useState("30");

  // Core metrics
  const metrics = [
    { label: "Total Site Visits", value: "148,920", change: "+12.4%", trend: "up", icon: Users, color: "text-[#0F2C59] bg-[#0F2C59]/10" },
    { label: "Conversion Rate", value: "2.84%", change: "+0.3%", trend: "up", icon: Percent, color: "text-emerald-600 bg-emerald-50" },
    { label: "Average Session", value: "4m 32s", change: "-1.2%", trend: "down", icon: Clock, color: "text-amber-600 bg-amber-50" },
    { label: "Fulfillment Orders", value: "482", change: "+8.9%", trend: "up", icon: ShoppingCart, color: "text-indigo-600 bg-indigo-50" }
  ];

  // Category sales breakdown
  const categorySales = [
    { name: "Compute Nodes", amount: 4800000, percentage: 45, color: "bg-[#0F2C59]" },
    { name: "Networking Hardware", amount: 3200000, percentage: 30, color: "bg-indigo-600" },
    { name: "Storage Blocks", amount: 1600000, percentage: 15, color: "bg-emerald-600" },
    { name: "Software Licenses", amount: 1060000, percentage: 10, color: "bg-violet-600" }
  ];

  // Traffic channel data
  const trafficChannels = [
    { source: "Direct (B2B RFP)", percentage: 48 },
    { source: "Organic Search", percentage: 26 },
    { source: "Referrals", percentage: 18 },
    { source: "Paid Campaigns", percentage: 8 }
  ];

  // Monthly revenue trend
  const revenueHistory = [
    { month: "Jan", revenue: 820000, height: "45%" },
    { month: "Feb", revenue: 1100000, height: "60%" },
    { month: "Mar", revenue: 950000, height: "52%" },
    { month: "Apr", revenue: 1400000, height: "78%" },
    { month: "May", revenue: 1850000, height: "100%" }
  ];

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-850 text-slate-800 tracking-widest uppercase">System Analytics</h2>
          <p className="text-slate-500 text-xs mt-1">Audit server hits, platform conversion matrices, and category performance</p>
        </div>
        
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3.5 outline-none focus:border-[#0F2C59] cursor-pointer"
        >
          <option value="7">Past 7 Days</option>
          <option value="30">Past 30 Days</option>
          <option value="90">Past 90 Days</option>
        </select>
      </div>

      {/* Top metrics grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">{m.label}</span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{m.value}</h3>
                <div className="flex items-center gap-1.5">
                  {m.trend === "up" ? (
                    <span className="inline-flex items-center text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5" /> {m.change}
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[9px] font-extrabold text-red-650 bg-red-50 px-1.5 py-0.5 rounded">
                      <ArrowDownRight className="w-2.5 h-2.5" /> {m.change}
                    </span>
                  )}
                  <span className="text-[9px] text-slate-400 font-medium">vs past period</span>
                </div>
              </div>
              <div className={`p-3.5 rounded-xl ${m.color}`}>
                <Icon className="w-5 h-5 shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Area Graph Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Revenue Synthesis Timeline</h3>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">৳ BDT / Month</span>
          </div>

          {/* Pure HTML/CSS Bar chart mimicking premium telemetry graphics */}
          <div className="h-56 flex items-end gap-6 sm:gap-12 pl-4 pr-4 border-b border-l border-slate-200 pt-6">
            {revenueHistory.map((h) => (
              <div key={h.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <span className="opacity-0 group-hover:opacity-100 bg-[#0F2C59] text-white font-bold text-[9px] py-1 px-2 rounded absolute -translate-y-12 transition-opacity duration-200 font-mono shadow-sm">
                  ৳ {(h.revenue / 1000).toLocaleString()}K
                </span>
                <div
                  className="w-full bg-gradient-to-t from-[#0F2C59] to-[#0F2C59]/80 group-hover:from-indigo-650 group-hover:to-indigo-500 rounded-t-lg transition-all duration-300 shadow-sm shadow-[#0F2C59]/10"
                  style={{ height: h.height }}
                ></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{h.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Channels Doughnut Representation */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Acquisition Channels</h3>
          </div>

          <div className="space-y-4">
            {trafficChannels.map((tc) => (
              <div key={tc.source} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>{tc.source}</span>
                  <span className="text-slate-900 font-extrabold">{tc.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${tc.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Performance & Diagnostics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category breakdown */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Catalog Performance</h3>
          </div>

          <div className="space-y-4">
            {categorySales.map((cat) => (
              <div key={cat.name} className="flex items-center gap-4 text-xs font-medium">
                <div className="flex-grow space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-800">{cat.name}</span>
                    <span className="font-bold text-slate-900">৳ {cat.amount.toLocaleString("en-BD")}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.percentage}%` }}></div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-slate-400 w-10 text-right">{cat.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostics & Anomaly List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Activity className="w-5 h-5 text-indigo-600 animate-pulse" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Health Telemetry</h3>
          </div>

          <div className="space-y-3.5 text-xs text-slate-655 text-slate-600 font-medium">
            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl leading-relaxed">
              <span className="text-[9px] font-bold text-emerald-800 uppercase block mb-0.5">Edge Node Latency</span>
              Avg response is 120ms (Optimal). Dhaka cloud cluster is operating normal.
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl leading-relaxed">
              <span className="text-[9px] font-bold text-indigo-850 block mb-0.5 uppercase">Crawler Index Frequency</span>
              Automated product crawler scanned catalog pages at 04:00 AM BDT.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
