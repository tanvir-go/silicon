"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Bell, Database, ExternalLink } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
  title: string;
}

export default function AdminHeader({ onMenuToggle, title }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: "1", text: "Product 'Lenovo ThinkSystem' inventory depleted", time: "12 min ago" },
    { id: "2", text: "New blog post drafted: 'Navigating AI...'", time: "1 hour ago" },
    { id: "3", text: "Console diagnostics backup completed", time: "4 hours ago" },
  ];

  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
      {/* Left section: Mobile drawer trigger & page title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer transition-colors"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-bold text-slate-800 tracking-wider uppercase">{title}</h1>
      </div>
 
      {/* Right section: System telemetry details and shortcuts */}
      <div className="flex items-center gap-3">
        {/* Connection Sandbox Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
          <Database className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest">Sandbox DB Mode</span>
        </div>
 
        {/* Server Active Pulse Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-[9px] font-bold text-green-700 uppercase tracking-widest">Node active</span>
        </div>
 
        {/* View Main Website Shortcut */}
        <Link
          href="/"
          target="_blank"
          className="p-2 rounded-xl text-slate-500 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
        >
          <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-wider">Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
 
        {/* Notifications Alert Hub */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative cursor-pointer"
            title="Console Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#0F2C59] rounded-full"></span>
          </button>
 
          {showNotifications && (
            <>
              {/* Overlay to dismiss */}
              <div className="fixed inset-0 z-40 cursor-default" onClick={() => setShowNotifications(false)} />
              
              <div className="absolute right-0 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-4 overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">System Alerts</h4>
                  <span className="text-[9px] bg-[#0F2C59]/10 text-[#0F2C59] px-1.5 py-0.5 rounded font-bold uppercase">3 Events</span>
                </div>
                <div className="space-y-3">
                  {notifications.map((item) => (
                    <div key={item.id} className="text-[11px] border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                      <p className="text-slate-700 font-medium">{item.text}</p>
                      <span className="text-[9px] text-slate-400 mt-1 block">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
