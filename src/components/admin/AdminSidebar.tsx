"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Users,
  Boxes,
  Truck,
  Megaphone,
  Globe,
  CreditCard,
  BarChart3,
  Headphones,
  UserCheck,
  ShieldAlert,
  Settings,
  Cpu,
  Sparkles,
  LogOut,
  ChevronDown,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Create full path string for precise matching
  const currentFullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    Dashboard: true, // Expand Dashboard by default
  });

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("scl_admin_token");
      sessionStorage.removeItem("scl_admin_user");
    }
    router.push("/admin");
  };

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const menuGroups = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      items: [
        { name: "Overview", href: "/admin/dashboard" },
        { name: "Analytics", href: "/admin/dashboard/analytics" }
      ]
    },
    {
      name: "Products",
      icon: ShoppingBag,
      items: [
        { name: "All Products", href: "/admin/dashboard/products" },
        { name: "Add Product", href: "/admin/dashboard/products/add" },
        { name: "Inventory Management", href: "/admin/dashboard/inventory" }
      ]
    },
    {
      name: "Customers",
      icon: Users,
      items: [
        { name: "Customer List", href: "/admin/dashboard/customers" },
        { name: "Customer Reviews", href: "/admin/dashboard/customers?tab=reviews" },
        { name: "Wishlist Users", href: "/admin/dashboard/customers?tab=wishlist" },
        { name: "Loyalty Program", href: "/admin/dashboard/customers?tab=loyalty" }
      ]
    },
    {
      name: "Suppliers",
      icon: Truck,
      items: [
        { name: "Supplier List", href: "/admin/dashboard/suppliers" },
        { name: "Add Supplier", href: "/admin/dashboard/suppliers?action=add" },
        { name: "Purchase Orders", href: "/admin/dashboard/suppliers?tab=po" }
      ]
    },
    {
      name: "Marketing",
      icon: Megaphone,
      items: [
        { name: "Coupons", href: "/admin/dashboard/marketing/coupons" },
        { name: "Discount Campaigns", href: "/admin/dashboard/marketing/campaigns" },
        { name: "Flash Sales", href: "/admin/dashboard/marketing/flash" },
        { name: "Featured Products", href: "/admin/dashboard/marketing/featured" }
      ]
    },
    {
      name: "Content Management",
      icon: Globe,
      items: [
        { name: "Homepage Banner", href: "/admin/dashboard/content/banner" },
        { name: "Sliders", href: "/admin/dashboard/content/sliders" },
        { name: "Pages", href: "/admin/dashboard/pages" },
        { name: "Blog Management", href: "/admin/dashboard/blogs" },
        { name: "FAQ", href: "/admin/dashboard/content/faq" }
      ]
    },
    {
      name: "Payments",
      icon: CreditCard,
      items: [
        { name: "Transactions", href: "/admin/dashboard/payments/transactions" },
        { name: "Payment Methods", href: "/admin/dashboard/payments/methods" },
        { name: "Refund Requests", href: "/admin/dashboard/payments/refunds" }
      ]
    },
    {
      name: "Reports",
      icon: BarChart3,
      href: "/admin/dashboard/reports"
    },
    {
      name: "Support",
      icon: Headphones,
      items: [
        { name: "Contact Messages", href: "/admin/dashboard/support/messages" },
        { name: "Support Tickets", href: "/admin/dashboard/support/tickets" },
        { name: "Live Chat", href: "/admin/dashboard/support/chat" }
      ]
    },
    {
      name: "Staff Management",
      icon: UserCheck,
      items: [
        { name: "Admin Users", href: "/admin/dashboard/staff/users" },
        { name: "Roles & Permissions", href: "/admin/dashboard/staff/roles" },
        { name: "Activity Logs", href: "/admin/dashboard/staff/activities" }
      ]
    },
    {
      name: "Hiring",
      icon: Briefcase,
      items: [
        { name: "Recruitment Board", href: "/admin/dashboard/hiring" },
        { name: "View Career Page", href: "/career" }
      ]
    },
    {
      name: "Security",
      icon: ShieldAlert,
      items: [
        { name: "Login Activity", href: "/admin/dashboard/security/login-activity" },
        { name: "Two Factor Authentication", href: "/admin/dashboard/security/tfa" },
        { name: "Backup & Restore", href: "/admin/dashboard/security/backup" }
      ]
    },
    {
      name: "SEO & Pages",
      icon: Globe,
      href: "/admin/dashboard/pages"
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/admin/dashboard/settings"
    },
    {
      name: "Integrations",
      icon: Cpu,
      items: [
        { name: "Google Analytics", href: "/admin/dashboard/integrations/google-analytics" },
        { name: "Facebook Pixel", href: "/admin/dashboard/integrations/facebook-pixel" },
        { name: "Payment Gateway APIs", href: "/admin/dashboard/integrations/payments" },
        { name: "SMS Gateway", href: "/admin/dashboard/integrations/sms" }
      ]
    },
    {
      name: "AI Tools",
      icon: Sparkles,
      items: [
        { name: "AI Product Description Generator", href: "/admin/dashboard/ai/description" },
        { name: "AI SEO Content Generator", href: "/admin/dashboard/ai/seo" },
        { name: "AI Sales Insights", href: "/admin/dashboard/ai/sales-insights" }
      ]
    }
  ];

  // Auto-expand group that contains active link on mount or navigation change
  useEffect(() => {
    const activeGroup = menuGroups.find((group) =>
      group.items?.some((item) => {
        // Match exact or base path
        const itemPath = item.href.split("?")[0];
        return pathname === itemPath || currentFullPath === item.href;
      })
    );
    if (activeGroup) {
      setExpandedGroups((prev) => ({
        ...prev,
        [activeGroup.name]: true,
      }));
    }
  }, [pathname, currentFullPath]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col justify-between transition-transform duration-300 ease-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header Branding */}
          <div className="h-16 border-b border-slate-200 flex items-center px-6 gap-3 shrink-0">
            <div className="bg-[#0F2C59] p-1.5 rounded-lg text-white shadow-sm shadow-[#0F2C59]/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-slate-900 leading-none">SILICON</h2>
              <span className="text-[10px] text-[#0F2C59] font-bold tracking-wider uppercase">Console</span>
            </div>
          </div>

          {/* Navigation Links Scrollable Area */}
          <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto no-scrollbar scroll-smooth">
            {menuGroups.map((group) => {
              const GroupIcon = group.icon;
              const isExpanded = !!expandedGroups[group.name];
              
              if ("href" in group && group.href) {
                const isGroupActive = pathname === group.href.split("?")[0] || currentFullPath === group.href;
                return (
                  <Link
                    key={group.name}
                    href={group.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-150 border cursor-pointer",
                      isGroupActive
                        ? "bg-[#0F2C59]/5 text-[#0F2C59] border-[#0F2C59]/10 font-extrabold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent"
                    )}
                  >
                    <GroupIcon
                      className={cn(
                        "w-4 h-4 shrink-0",
                        isGroupActive ? "text-[#0F2C59]" : "text-slate-400"
                      )}
                    />
                    <span>{group.name}</span>
                  </Link>
                );
              }

              // Check if any child item is active
              const hasActiveChild = group.items ? group.items.some((item) => {
                const itemPath = item.href.split("?")[0];
                return pathname === itemPath || currentFullPath === item.href;
              }) : false;

              return (
                <div key={group.name} className="space-y-1">
                  {/* Group Header Button */}
                  <button
                    onClick={() => toggleGroup(group.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-150 border cursor-pointer",
                      hasActiveChild
                        ? "bg-[#0F2C59]/5 text-[#0F2C59] border-[#0F2C59]/10 font-extrabold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <GroupIcon
                        className={cn(
                          "w-4 h-4 shrink-0 transition-transform duration-250",
                          hasActiveChild ? "text-[#0F2C59]" : "text-slate-400"
                        )}
                      />
                      <span>{group.name}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                        isExpanded ? "transform rotate-180 text-[#0F2C59]" : ""
                      )}
                    />
                  </button>

                  {/* Nested Accordion Sub-items */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200 pl-4 border-l border-slate-100 ml-5 space-y-1",
                      isExpanded ? "max-h-[300px] opacity-100 mt-1 py-1" : "max-h-0 opacity-0 pointer-events-none"
                    )}
                  >
                    {group.items?.map((item) => {
                      const isItemActive = item.href.includes("?") || currentFullPath.includes("?")
                        ? currentFullPath === item.href
                        : pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-1.5 px-3 rounded-lg text-[11px] font-semibold transition-all duration-100",
                            isItemActive
                              ? "text-[#0F2C59] bg-[#0F2C59]/5 font-bold"
                              : "text-slate-505 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Footer Operator Info & Terminate Session */}
          <div className="p-4 border-t border-slate-200 bg-slate-50/50 shrink-0">
            <div className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#0F2C59]/10 border border-[#0F2C59]/10 flex items-center justify-center text-[#0F2C59] font-bold text-xs uppercase shrink-0">
                NF
              </div>
              <div className="overflow-hidden">
                <h4 className="text-[11px] font-bold text-slate-900 truncate leading-tight">MD Nasir Feroz</h4>
                <p className="text-[9px] text-slate-500 truncate leading-none mt-0.5">Super Admin</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 hover:border-red-100 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer text-slate-600"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
