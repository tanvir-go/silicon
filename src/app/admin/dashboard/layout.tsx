"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("scl_admin_token");
      if (token !== "authenticated") {
        router.push("/admin");
      } else {
        setAuthorized(true);
      }
      setLoading(false);
    }
  }, [router]);

  // Determine section title based on route
  const getPageTitle = () => {
    if (pathname.includes("/blogs")) return "Manage Blogs Catalog";
    if (pathname.includes("/products")) return "Manage Product Catalog";
    if (pathname.includes("/settings")) return "Console Settings";
    return "Operations Overview";
  };

  if (loading || !authorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase">Verifying Security Credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      {/* Sidebar Navigation */}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Pane */}
      <div className="flex-grow flex flex-col min-w-0 lg:pl-64">
        {/* Core Header */}
        <AdminHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} title={getPageTitle()} />
        
        {/* Panel View */}
        <main className="flex-grow p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
