"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import {
  Sparkles,
  Ticket,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  TrendingUp,
  Cpu,
  Mail,
  Sliders,
  DollarSign,
  ShieldCheck,
  Send,
  UserCheck,
  Settings,
  Truck,
  MessageSquare,
  Star,
  Eye,
  ArrowRight,
  User,
  Paperclip,
  Circle
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "admin" | "user";
  text: string;
  timestamp: string;
}

interface ChatSession {
  id: string;
  userName: string;
  userCompany: string;
  userRole: string;
  userStatus: "online" | "offline";
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: ChatMessage[];
}

export default function CatchAllDashboardPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const actionParam = searchParams.get("action");
  const {
    products,
    updateProduct,
    coupons,
    saveCoupons,
    suppliers,
    saveSuppliers,
    addActivity,
    loading
  } = useAdminState();

  const slug = (params?.slug as string[]) || [];
  const primarySection = slug[0] || "";
  const subSection = slug[1] || "";

  // Title formatting
  const formatTitle = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = formatTitle(subSection || primarySection);

  // States
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // AI Description Generator State
  const [aiProduct, setAiProduct] = useState("");
  const [aiTone, setAiTone] = useState("Professional");
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // AI SEO State
  const [seoKeywords, setSeoKeywords] = useState("");
  const [seoTarget, setSeoTarget] = useState("Homepage");
  const [seoResult, setSeoResult] = useState<any>(null);

  // Purchase Orders State
  const [purchaseOrders, setPurchaseOrders] = useState([
    { id: "po-1", supplier: "Cisco APAC Distributor", items: "15x Catalyst 9300 Switches", total: 2450000, date: "2026-05-10", status: "Delivered" },
    { id: "po-2", supplier: "HP Enterprise Bangladesh", items: "5x ProLiant DL380 Servers", total: 4200000, date: "2026-05-14", status: "Pending Delivery" },
    { id: "po-3", supplier: "MikroTik SIA", items: "30x Routerboard CCR1016", total: 1150000, date: "2026-05-18", status: "Approved" }
  ]);

  const handleApprovePO = (id: string) => {
    setPurchaseOrders(prev => prev.map(po => po.id === id ? { ...po, status: "Delivered" } : po));
    setSuccessMsg("Purchase order status marked as delivered.");
    addActivity("Updated purchase order status to delivered.");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // AI Sales Predictions State
  const [salesInsights, setSalesInsights] = useState<string[]>([]);
  const [insightsLoading, setInsightsLoading] = useState(false);

  // Coupon Form State
  const [couponCode, setCouponCode] = useState("");
  const [couponValue, setCouponValue] = useState(10);
  const [couponType, setCouponType] = useState<"percentage" | "fixed">("percentage");
  const [couponExpiry, setCouponExpiry] = useState("2026-12-31");

  // Supplier Form State
  const [supName, setSupName] = useState("");
  const [supContact, setSupContact] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [supPhone, setSupPhone] = useState("");

  // Support Tickets State
  const [tickets, setTickets] = useState([
    { id: "SCL-TKT-301", customer: "Tasnim Rahman", subject: "Cisco Switch firmware upgrade procedure", priority: "High", status: "Open", date: "2026-05-22" },
    { id: "SCL-TKT-302", customer: "Anik Hasan", subject: "Dell PowerEdge rail-kit missing bracket", priority: "Medium", status: "In Progress", date: "2026-05-23" },
    { id: "SCL-TKT-303", customer: "Rafiqul Islam", subject: "COD payment verification delay", priority: "Low", status: "Resolved", date: "2026-05-20" }
  ]);
  const [ticketReply, setTicketReply] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState("SCL-TKT-301");

  // Generic Mock State
  const [genericToggle, setGenericToggle] = useState(true);
  const [genericText, setGenericText] = useState("");

  // Live Chat States
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "chat-1",
      userName: "Sumaya Islam",
      userCompany: "BioTech Ltd",
      userRole: "IT Procurement Lead",
      userStatus: "online",
      lastMessage: "Please let me know how soon we can receive the quote.",
      lastMessageTime: "10:42 AM",
      unreadCount: 2,
      messages: [
        { id: "m1", sender: "user", text: "Hello Silicon Computing team, we are looking to procure 10 Cisco SG350 switches. Can we get a custom pricing quote?", timestamp: "10:30 AM" },
        { id: "m2", sender: "admin", text: "Hi Sumaya, welcome! Yes, we can certainly provide a volume discount for 10 units. I'll prepare a custom quote sheet for BioTech.", timestamp: "10:35 AM" },
        { id: "m3", sender: "user", text: "That sounds great, thank you! Please let me know how soon we can receive the quote.", timestamp: "10:42 AM" }
      ]
    },
    {
      id: "chat-2",
      userName: "Tanvir Ahmed",
      userCompany: "Silicon Computing Ltd",
      userRole: "Software Lead",
      userStatus: "online",
      lastMessage: "Yes, we did a traceroute. It seems the bottleneck is at the secondary uplink interface.",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      messages: [
        { id: "m4", sender: "user", text: "The latest server instance we deployed is encountering network latency spikes. Can you check if the router configuration needs updates?", timestamp: "Yesterday" },
        { id: "m5", sender: "admin", text: "Hello Tanvir. Let's look at the active packet logs on the CCR1016. Have you verified the routing paths?", timestamp: "Yesterday" },
        { id: "m6", sender: "user", text: "Yes, we did a traceroute. It seems the bottleneck is at the secondary uplink interface.", timestamp: "Yesterday" }
      ]
    },
    {
      id: "chat-3",
      userName: "Md. Bayeazid",
      userCompany: "Apex Energy",
      userRole: "Infrastructure Head",
      userStatus: "offline",
      lastMessage: "Perfect. We appreciate the prompt dispatch. I'll keep you posted once we start installation.",
      lastMessageTime: "2 days ago",
      unreadCount: 0,
      messages: [
        { id: "m7", sender: "user", text: "Hi, our infrastructure upgrade starts tomorrow. Is the delivery for the HPE ProLiant boards on track?", timestamp: "2 days ago" },
        { id: "m8", sender: "admin", text: "Hi Bayeazid! Yes, the shipment has left our warehouse and is scheduled for morning delivery at Apex Energy.", timestamp: "2 days ago" },
        { id: "m9", sender: "user", text: "Perfect. We appreciate the prompt dispatch. I'll keep you posted once we start installation.", timestamp: "2 days ago" }
      ]
    }
  ]);

  const [activeChatId, setActiveChatId] = useState("chat-1");
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clear unread count when chat is active
  useEffect(() => {
    if (activeChatId) {
      setChatSessions(prev =>
        prev.map(session =>
          session.id === activeChatId ? { ...session, unreadCount: 0 } : session
        )
      );
    }
  }, [activeChatId]);

  // Scroll to bottom of active chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatSessions, activeChatId]);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-8 h-8 border-2 border-[#0F2C59] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Syncing Panel Settings...</p>
      </div>
    );
  }

  // --- RENDERS ---

  // 1. AI Product Description Generator
  const renderAIDescription = () => {
    const handleGenerate = () => {
      if (!aiProduct) {
        setErrorMsg("Please select a target catalog item.");
        return;
      }
      setAiLoading(true);
      setErrorMsg("");
      
      setTimeout(() => {
        const prodObj = products.find((p) => p.id === aiProduct);
        const name = prodObj?.title || "Enterprise Hardware";
        const brand = prodObj?.brand || "Silicon Partner";
        const category = prodObj?.category || "Infrastructure";

        let desc = "";
        if (aiTone === "Professional") {
          desc = `The premium ${name} by ${brand} represents the pinnacle of enterprise-grade ${category.toLowerCase()} engineering. Tailored for intensive mission-critical workloads, it provides unmatched throughput, integrated security microarchitectures, and seamless node expansion capabilities designed to future-proof server infrastructure.`;
        } else if (aiTone === "Bold") {
          desc = `Engineered to outperform, the ${brand} ${name} obliterates performance bottlenecks. This is not just ${category.toLowerCase()}—it is a hyper-resilient powerhouse that delivers massive scaling potential and bulletproof telemetry diagnostics, designed to dominate high-demand computing spaces.`;
        } else if (aiTone === "Tech-focused") {
          desc = `Equipped with advanced diagnostic controllers, redundant power grids, and low-latency silicon paths, the ${brand} ${name} optimizes operational topology. This ${category.toLowerCase()} configuration supports advanced virtualization threads, high-speed interface options, and real-time cloud analytics synchronization.`;
        } else {
          desc = `Unleash new capabilities with the elegantly structured ${name} from ${brand}. Combining high energy efficiency with modern system control, this ${category.toLowerCase()} solution blends operational brilliance with robust design to elevate standard datacenter architectures.`;
        }

        setGeneratedDesc(desc);
        setAiLoading(false);
        addActivity(`AI Generated description for "${name}" in ${aiTone} tone.`);
      }, 1200);
    };

    const handleSave = () => {
      if (!aiProduct || !generatedDesc) return;
      updateProduct(aiProduct, { shortDesc: generatedDesc });
      setSuccessMsg("Catalog updated successfully with the generated description!");
      addActivity(`Applied AI Description to product catalog.`);
    };

    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Description Engine</h3>
        </div>

        {errorMsg && <p className="text-xs text-red-650 text-red-650 font-bold bg-red-50 p-3 rounded-xl">{errorMsg}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target Product Item</label>
              <select
                value={aiProduct}
                onChange={(e) => setAiProduct(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-800 outline-none"
              >
                <option value="">-- Choose Product --</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.brand} - {p.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Writing Tone</label>
              <div className="grid grid-cols-2 gap-2">
                {["Professional", "Bold", "Tech-focused", "Creative"].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setAiTone(tone)}
                    className={`py-2 px-3 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                      aiTone === tone
                        ? "bg-[#0F2C59] text-white border-[#0F2C59]"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={aiLoading}
              className="w-full py-2.5 bg-indigo-650 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-100"
            >
              {aiLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Synthesizing copy...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Generate Description
                </>
              )}
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Generated Outcome</label>
              <textarea
                value={generatedDesc}
                onChange={(e) => setGeneratedDesc(e.target.value)}
                placeholder="Click generate to initiate description synthesis..."
                rows={6}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3 text-xs text-slate-800 outline-none leading-relaxed"
              ></textarea>
            </div>

            {generatedDesc && (
              <button
                onClick={handleSave}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-100"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                Apply to Product Catalog
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 2. AI SEO Content Generator
  const renderAISeo = () => {
    const handleGenerateSeo = () => {
      if (!seoKeywords) return;
      setAiLoading(true);
      setTimeout(() => {
        setSeoResult({
          metaTitle: `${seoKeywords.split(",")[0].trim().toUpperCase()} Solutions | Silicon Computing Ltd`,
          metaDesc: `Unlock peak operational efficiency. Silicon Computing provides custom ${seoKeywords} configurations. High-resilience service agreements and expert support in Bangladesh. Contact us today.`,
          tags: seoKeywords.split(",").map((k) => k.trim().toLowerCase()).join(", ") + ", cloud architecture, dhaka servers, enterprise B2B"
        });
        setAiLoading(false);
        addActivity(`AI Generated SEO metadata for page: ${seoTarget}`);
      }, 1000);
    };

    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI SEO Content Generator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target Landing Page</label>
              <select
                value={seoTarget}
                onChange={(e) => setSeoTarget(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none"
              >
                <option value="Homepage">Homepage Banner & Hub</option>
                <option value="Product Page">B2B Hardware Catalog</option>
                <option value="Solutions Page">Enterprise Custom IT Solutions</option>
                <option value="Contact Page">Request Quote / RFP Desk</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target Keywords (Comma Separated)</label>
              <input
                type="text"
                placeholder="e.g. Cisco Switch, rack server price, dhaka IT support"
                value={seoKeywords}
                onChange={(e) => setSeoKeywords(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none"
              />
            </div>

            <button
              onClick={handleGenerateSeo}
              disabled={aiLoading || !seoKeywords}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-100"
            >
              {aiLoading ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              Synthesize SEO Meta Tags
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">SEO Blueprint Output</h4>
            {seoResult ? (
              <div className="space-y-3.5 text-xs">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Meta Title</span>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 font-bold select-all leading-tight">
                    {seoResult.metaTitle}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Meta Description</span>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-650 text-slate-600 leading-normal select-all">
                    {seoResult.metaDesc}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Meta Keywords Header</span>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-500 font-mono text-[10px] select-all">
                    {seoResult.tags}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-xs font-medium">
                Provide keywords and click generate to synthesize search engine configuration.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 3. AI Sales Insights
  const renderAiInsights = () => {
    const handleTriggerInsights = () => {
      setInsightsLoading(true);
      setTimeout(() => {
        setSalesInsights([
          "Q3 Demand Curve: Compute and server cluster products project a 14% growth month-over-month. Recommendation: Pre-order HPE ProLiant boards to hedge supply delay.",
          "Stock Velocity Anomaly: Mikrotik CCR1016 routers have exceeded normal stock turnover rates by 1.8x. Recommend establishing a minor promotion campaign to clear excess units.",
          "High LTV Clustering: 40% of LTV is generated by corporate accounts in the Dhanmondi/Gulshan areas. Suggest launching high-touch premium maintenance service subscriptions directly to verified clients."
        ]);
        setInsightsLoading(false);
        addActivity("Analyzed catalog sales data to generate AI Sales Insights.");
      }, 1500);
    };

    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Sales Insights Engine</h3>
          </div>
          <button
            onClick={handleTriggerInsights}
            disabled={insightsLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F2C59] text-white hover:bg-[#0b2143] rounded-xl text-[9px] font-bold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
          >
            {insightsLoading ? (
              <RefreshCw className="w-3 h-3 animate-spin" />
            ) : (
              <TrendingUp className="w-3 h-3" />
            )}
            Analyze Data
          </button>
        </div>

        <div className="space-y-4">
          {salesInsights.length > 0 ? (
            salesInsights.map((insight, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 text-xs leading-relaxed text-slate-700">
                <Cpu className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-indigo-950 text-[11px] uppercase tracking-wider">Telemetry Diagnostic Insight #{idx + 1}</h4>
                  <p className="text-[11px] font-medium text-slate-700">{insight}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-medium">
              Click "Analyze Data" to scan transaction history and output optimization paths.
            </div>
          )}
        </div>
      </div>
    );
  };

  // 4. Coupons Manager
  const renderCoupons = () => {
    const handleAddCoupon = (e: React.FormEvent) => {
      e.preventDefault();
      if (!couponCode.trim()) return;

      const newCoupon = {
        id: `cop-${Date.now()}`,
        code: couponCode.trim().toUpperCase(),
        discountType: couponType,
        value: Number(couponValue),
        expiryDate: couponExpiry,
        status: "Active" as any,
        usageCount: 0
      };

      const updated = [...coupons, newCoupon];
      saveCoupons(updated);
      setCouponCode("");
      setSuccessMsg(`Coupon "${newCoupon.code}" created successfully!`);
      addActivity(`Created promo coupon code: "${newCoupon.code}"`);
    };

    const handleDeleteCoupon = (id: string, code: string) => {
      if (confirm(`Remove promotion coupon: "${code}"?`)) {
        const updated = coupons.filter((c) => c.id !== id);
        saveCoupons(updated);
        setSuccessMsg(`Coupon code "${code}" removed.`);
        addActivity(`Deleted promotion coupon: "${code}"`);
      }
    };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coupon Creator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Ticket className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Coupon Setup</h3>
          </div>

          <form onSubmit={handleAddCoupon} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Coupon Code</label>
              <input
                type="text"
                required
                placeholder="e.g. SILICON20"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none transition-all uppercase"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Type</label>
                <select
                  value={couponType}
                  onChange={(e) => setCouponType(e.target.value as any)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 outline-none"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed (৳)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Value</label>
                <input
                  type="number"
                  required
                  min={1}
                  value={couponValue}
                  onChange={(e) => setCouponValue(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Expiry Date</label>
              <input
                type="date"
                required
                value={couponExpiry}
                onChange={(e) => setCouponExpiry(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#0F2C59]/10 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Register Coupon
            </button>
          </form>
        </div>

        {/* Coupons List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Promotion coupons Registry</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Coupon Code</th>
                  <th className="py-3 px-4">Discount</th>
                  <th className="py-3 px-4">Validity</th>
                  <th className="py-3 px-4">Usages</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4 text-right">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 divide-slate-100">
                {coupons.map((cop) => (
                  <tr key={cop.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800 tracking-wide font-mono uppercase">{cop.code}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">
                      {cop.discountType === "percentage" ? `${cop.value}% Off` : `৳${cop.value.toLocaleString()} Off`}
                    </td>
                    <td className="py-3 px-4 text-slate-500 font-medium">{cop.expiryDate}</td>
                    <td className="py-3 px-4 text-slate-700 font-bold">{cop.usageCount} times</td>
                    <td className="py-3 px-4">
                      <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full">
                        {cop.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDeleteCoupon(cop.id, cop.code)}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-100"
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
      </div>
    );
  };

  // 5. Suppliers Manager
  const renderSuppliers = () => {
    const handleAddSupplier = (e: React.FormEvent) => {
      e.preventDefault();
      if (!supName.trim()) return;

      const newSupplier = {
        id: `sup-${Date.now()}`,
        name: supName.trim(),
        contactPerson: supContact.trim() || "Account Manager",
        email: supEmail.trim() || "orders@supplier.com",
        phone: supPhone.trim() || "+880 1200000000",
        productsSupplied: ["Enterprise hardware"],
        status: "Active" as any
      };

      const updated = [...suppliers, newSupplier];
      saveSuppliers(updated);
      setSupName("");
      setSupContact("");
      setSupEmail("");
      setSupPhone("");
      setSuccessMsg(`Supplier "${newSupplier.name}" added successfully.`);
      addActivity(`Registered supplier: "${newSupplier.name}"`);
    };

    if (tabParam === "po") {
      return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#0F2C59]" />
              Purchase Orders (PO) Registry
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-4 px-6">PO Number</th>
                  <th className="py-4 px-6">Supplier Company</th>
                  <th className="py-4 px-6">Hardware Items</th>
                  <th className="py-4 px-6">Total Value</th>
                  <th className="py-4 px-6">Order Date</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {purchaseOrders.map(po => (
                  <tr key={po.id} className="hover:bg-slate-50/30">
                    <td className="py-4 px-6 font-bold text-slate-800 font-mono">{po.id.toUpperCase()}</td>
                    <td className="py-4 px-6 font-bold text-[#0F2C59]">{po.supplier}</td>
                    <td className="py-4 px-6 font-semibold text-slate-600">{po.items}</td>
                    <td className="py-4 px-6 font-extrabold text-slate-900">৳ {po.total.toLocaleString("en-BD")}</td>
                    <td className="py-4 px-6 text-slate-400 font-medium">{po.date}</td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        po.status === "Delivered" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                        po.status === "Pending Delivery" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                        "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}>
                        {po.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {po.status !== "Delivered" && (
                        <button
                          onClick={() => handleApprovePO(po.id)}
                          className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-250 border-emerald-200 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Mark Delivered
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Supplier Form */}
        <div className={`bg-white p-6 rounded-2xl border shadow-sm space-y-5 h-fit transition-all duration-300 ${
          actionParam === "add" ? "border-[#0F2C59] ring-4 ring-[#0F2C59]/10" : "border-slate-200"
        }`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Truck className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Register Supplier</h3>
          </div>

          <form onSubmit={handleAddSupplier} className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Company Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Cisco APAC Distributor"
                value={supName}
                onChange={(e) => setSupName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Contact Person</label>
              <input
                type="text"
                placeholder="e.g. Masud Feroz"
                value={supContact}
                onChange={(e) => setSupContact(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email</label>
                <input
                  type="email"
                  placeholder="name@corp.com"
                  value={supEmail}
                  onChange={(e) => setSupEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Phone</label>
                <input
                  type="text"
                  placeholder="+880 1..."
                  value={supPhone}
                  onChange={(e) => setSupPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Plus className="w-4 h-4" />
              Add Supplier
            </button>
          </form>
        </div>

        {/* Suppliers List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Registered suppliers</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Supplier Company</th>
                  <th className="py-3 px-4">Contact Officer</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {suppliers.map((sup) => (
                  <tr key={sup.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800">{sup.name}</td>
                    <td className="py-3 px-4 font-semibold text-slate-600">{sup.contactPerson}</td>
                    <td className="py-3 px-4 text-slate-500 font-medium select-all">{sup.email}</td>
                    <td className="py-3 px-4 text-slate-500 font-mono font-bold select-all">{sup.phone}</td>
                    <td className="py-3 px-4">
                      <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full">
                        {sup.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // 6. Support Tickets
  const renderSupportTickets = () => {
    const handleSendReply = (e: React.FormEvent) => {
      e.preventDefault();
      if (!ticketReply.trim()) return;

      const reply = ticketReply.trim();
      setTickets(prev => prev.map(t => {
        if (t.id === selectedTicketId) {
          return { ...t, status: "Resolved" };
        }
        return t;
      }));

      setTicketReply("");
      setSuccessMsg(`Reply successfully sent to ticket: ${selectedTicketId}. Ticket marked as Resolved.`);
      addActivity(`Sent support response to customer on ticket ${selectedTicketId}`);
    };

    const activeTkt = tickets.find(t => t.id === selectedTicketId) || tickets[0];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket Selector */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Active Support Tickets</h3>
          </div>
          <div className="space-y-2">
            {tickets.map(tkt => (
              <button
                key={tkt.id}
                onClick={() => setSelectedTicketId(tkt.id)}
                className={`w-full text-left p-3.5 border rounded-2xl transition-all cursor-pointer block ${
                  selectedTicketId === tkt.id
                    ? "bg-[#0F2C59]/5 border-[#0F2C59]/30 border shadow-sm"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">{tkt.id}</span>
                  <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    tkt.priority === "High" ? "bg-red-50 text-red-600 border border-red-100" :
                    tkt.priority === "Medium" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                    "bg-slate-100 text-slate-650"
                  }`}>
                    {tkt.priority}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug line-clamp-1">{tkt.subject}</h4>
                <div className="flex justify-between items-center mt-2.5 text-[9px] font-bold text-slate-400 uppercase">
                  <span>{tkt.customer}</span>
                  <span className={tkt.status === "Resolved" ? "text-emerald-600" : "text-amber-500"}>{tkt.status}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Reply Desk */}
        {activeTkt && (
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{activeTkt.subject}</h3>
                <p className="text-[10px] text-slate-500 font-medium mt-1">Ticket from: <span className="font-bold text-slate-850">{activeTkt.customer}</span> ({activeTkt.date})</p>
              </div>
              <span className="text-[9px] font-bold bg-[#0F2C59]/10 text-[#0F2C59] py-0.5 px-2 rounded font-mono uppercase">{activeTkt.id}</span>
            </div>

            <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl text-xs leading-relaxed text-slate-700">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Customer Message:</span>
              "Hi support, we are running into issues finalizing our deployment setup. Please review the diagnostic log file and confirm compatibility."
            </div>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Draft Response</label>
                <textarea
                  required
                  rows={5}
                  value={ticketReply}
                  onChange={(e) => setTicketReply(e.target.value)}
                  placeholder="Enter response copy..."
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3.5 text-xs text-slate-900 outline-none leading-relaxed"
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[9px] text-slate-400 font-semibold uppercase">Channel: Email Dispatch</span>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#0F2C59]/10 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Dispatch Response
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  };

  // 7. Generic Mock Control View
  const renderGeneric = () => {
    const handleRunSimulation = () => {
      addActivity(`Executed diagnostic test on channel: ${pageTitle}`);
      setSuccessMsg("Simulation completed successfully! Diagnostic results synced to the activity log.");
    };

    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{pageTitle} Console</h3>
          </div>
          <span className="text-[9px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded font-bold uppercase">Online & Synced</span>
        </div>

        <p className="text-[11px] text-slate-500 leading-normal font-medium">
          Configure active network parameters and settings for <span className="font-bold text-slate-800">{pageTitle}</span>. Changes committed are synced in memory to the sandbox local storage node.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <h4 className="text-xs font-bold text-slate-800">Activate Telemetry Logs</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Stream direct access queries for this module to operations log</p>
            </div>
            <button
              onClick={() => {
                setGenericToggle(!genericToggle);
                addActivity(`Toggled status of ${pageTitle} log telemetry.`);
              }}
              className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer ${
                genericToggle ? "bg-emerald-500" : "bg-slate-350 bg-slate-300"
              }`}
            >
              <div className={`w-4.5 h-4.5 bg-white rounded-full transition-transform ${
                genericToggle ? "translate-x-5.5" : "translate-x-0"
              }`}></div>
            </button>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Access Key Override</label>
            <input
              type="text"
              placeholder="e.g. dev_scl_pk_live_key_983210..."
              value={genericText}
              onChange={(e) => setGenericText(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-900 outline-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleRunSimulation}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-[#0F2C59] rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Simulate Connection Test
            </button>
            {genericText && (
              <button
                onClick={() => {
                  setSuccessMsg("Configuration keys committed to memory.");
                  addActivity(`Configured parameters for: ${pageTitle}`);
                }}
                className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm shadow-[#0F2C59]/10"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const messageText = chatInput.trim();
    const timestampStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg: ChatMessage = {
      id: `admin-msg-${Date.now()}`,
      sender: "admin",
      text: messageText,
      timestamp: timestampStr
    };

    setChatSessions(prev =>
      prev.map(session => {
        if (session.id === activeChatId) {
          return {
            ...session,
            lastMessage: messageText,
            lastMessageTime: timestampStr,
            messages: [...session.messages, newMsg]
          };
        }
        return session;
      })
    );

    setChatInput("");
    addActivity(`Sent live chat message to ${chatSessions.find(c => c.id === activeChatId)?.userName}`);

    const targetChatId = activeChatId;
    const activeSession = chatSessions.find(c => c.id === targetChatId);
    if (!activeSession) return;

    setIsTyping(targetChatId);

    setTimeout(() => {
      let replyText = "";
      if (activeSession.userName === "Sumaya Islam") {
        const replies = [
          "Received! I will share this with our finance team. Looking forward to the proposal.",
          "Thank you for the quick update. We'd also like to request details on the post-purchase maintenance warranty.",
          "Understood. We are hoping to finalize this order by the end of the week."
        ];
        const count = activeSession.messages.filter(m => m.sender === "admin").length;
        replyText = replies[count % replies.length];
      } else if (activeSession.userName === "Tanvir Ahmed") {
        const replies = [
          "Thanks, let me apply the configuration adjustment and monitor the traffic logs for the next hour.",
          "Acknowledged. I've sent the updated traceroute output to your technical desk.",
          "That resolved it! The latency is back to < 5ms. Thanks for the quick support."
        ];
        const count = activeSession.messages.filter(m => m.sender === "admin").length;
        replyText = replies[count % replies.length];
      } else if (activeSession.userName === "Md. Bayeazid") {
        const replies = [
          "Thank you! I will have our on-site team ready to receive the shipment.",
          "Excellent service as always. We'll verify the hardware tags upon arrival.",
          "We just finished unpacking, everything is in perfect condition."
        ];
        const count = activeSession.messages.filter(m => m.sender === "admin").length;
        replyText = replies[count % replies.length];
      } else {
        replyText = "Thanks for the details. I will review this and get back to you shortly.";
      }

      const clientMsg: ChatMessage = {
        id: `client-msg-${Date.now()}`,
        sender: "user",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatSessions(prev =>
        prev.map(session => {
          if (session.id === targetChatId) {
            return {
              ...session,
              lastMessage: replyText,
              lastMessageTime: clientMsg.timestamp,
              unreadCount: activeChatId === targetChatId ? 0 : session.unreadCount + 1,
              messages: [...session.messages, clientMsg]
            };
          }
          return session;
        })
      );

      setIsTyping(null);
      addActivity(`Received live chat response from ${activeSession.userName}`);
    }, 1500);
  };

  const renderLiveChat = () => {
    const activeSession = chatSessions.find(c => c.id === activeChatId);

    return (
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[580px]">
        {/* Left Sidebar: Active Sessions */}
        <div className="w-full md:w-80 border-r border-slate-200 flex flex-col h-full bg-slate-50/50">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#0F2C59]" />
              Active Channels
            </h3>
            <span className="text-[9px] font-extrabold bg-[#0F2C59]/15 text-[#0F2C59] px-2 py-0.5 rounded-full uppercase">
              Live
            </span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {chatSessions.map((session) => {
              const isActive = session.id === activeChatId;
              const isOnline = session.userStatus === "online";
              return (
                <button
                  key={session.id}
                  onClick={() => setActiveChatId(session.id)}
                  className={`w-full text-left p-3.5 flex items-center gap-3 transition-all border-l-4 ${
                    isActive
                      ? "bg-[#0F2C59]/5 border-l-[#0F2C59] shadow-sm"
                      : "hover:bg-slate-50 border-l-transparent"
                  }`}
                >
                  {/* User Avatar with Status indicator */}
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">
                      {session.userName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      isOnline ? "bg-emerald-500" : "bg-slate-400"
                    }`}></span>
                  </div>

                  {/* Session Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 truncate">{session.userName}</span>
                      <span className="text-[9px] text-slate-400 font-medium shrink-0">{session.lastMessageTime}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium block truncate mt-0.5">{session.userCompany}</span>
                    <p className="text-[10px] text-slate-450 truncate mt-1">
                      {isTyping === session.id ? (
                        <span className="text-[#0F2C59] font-semibold italic">typing...</span>
                      ) : (
                        session.lastMessage
                      )}
                    </p>
                  </div>

                  {/* Unread Indicator */}
                  {session.unreadCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#0F2C59] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {session.unreadCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Active Chat Window */}
        <div className="flex-1 flex flex-col h-full bg-white">
          {activeSession ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center font-bold text-xs">
                      {activeSession.userName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${
                      activeSession.userStatus === "online" ? "bg-emerald-500" : "bg-slate-400"
                    }`}></span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-none">{activeSession.userName}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 font-semibold">
                      {activeSession.userRole} @ <span className="text-slate-700 font-bold">{activeSession.userCompany}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[8px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                    activeSession.userStatus === "online" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-650"
                  }`}>
                    {activeSession.userStatus}
                  </span>
                </div>
              </div>

              {/* Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/20">
                {activeSession.messages.map((message) => {
                  const isAdmin = message.sender === "admin";
                  return (
                    <div key={message.id} className={`flex flex-col ${isAdmin ? "items-end" : "items-start"}`}>
                      <div className={`max-w-[70%] text-xs p-3 rounded-2xl ${
                        isAdmin
                          ? "bg-[#0F2C59] text-white rounded-tr-none shadow-sm"
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"
                      }`}>
                        <p className="leading-relaxed font-medium whitespace-pre-wrap">{message.text}</p>
                      </div>
                      <span className="text-[8px] text-slate-400 font-bold mt-1 px-1">
                        {isAdmin ? "You" : activeSession.userName} • {message.timestamp}
                      </span>
                    </div>
                  );
                })}

                {/* Simulated Typing Indicator */}
                {isTyping === activeSession.id && (
                  <div className="flex flex-col items-start">
                    <div className="bg-white text-slate-500 border border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="text-[10px] text-slate-400 font-semibold ml-1">{activeSession.userName} is typing...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Footer Input */}
              <div className="p-3 border-t border-slate-200 bg-slate-50/50">
                <form onSubmit={handleSendChatMessage} className="flex items-center gap-2">
                  <button
                    type="button"
                    title="Attach Files"
                    onClick={() => {
                      setSuccessMsg("File uploads are disabled in simulation mode.");
                      setTimeout(() => setSuccessMsg(""), 3000);
                    }}
                    className="p-2.5 hover:bg-slate-200 text-slate-400 hover:text-slate-650 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-300"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    required
                    placeholder={`Reply to ${activeSession.userName}...`}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 bg-white border border-slate-250 border-slate-200 focus:border-[#0F2C59] rounded-xl px-4 py-2.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 transition-all font-medium"
                  />
                  <button
                    type="submit"
                    title="Send Message"
                    className="p-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl transition-all cursor-pointer flex items-center justify-center shadow-md shadow-[#0F2C59]/10"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
              <MessageSquare className="w-12 h-12 text-slate-300 mb-3" />
              <p className="text-xs font-semibold uppercase tracking-wider">No Active Conversation</p>
              <p className="text-[11px] text-slate-400 text-center mt-1">Select a customer from the left panel to begin chatting.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const getActiveView = () => {
    // AI Tools
    if (primarySection === "ai") {
      if (subSection === "description") return renderAIDescription();
      if (subSection === "seo") return renderAISeo();
      if (subSection === "sales-insights") return renderAiInsights();
    }
    // Marketing Coupons
    if (primarySection === "marketing" && subSection === "coupons") {
      return renderCoupons();
    }
    // Suppliers List
    if (primarySection === "suppliers") {
      return renderSuppliers();
    }
    // Support Tickets
    if (primarySection === "support" && subSection === "tickets") {
      return renderSupportTickets();
    }
    // Support Live Chat
    if (primarySection === "support" && subSection === "chat") {
      return renderLiveChat();
    }
    // Fallback: Generic Mock
    return renderGeneric();
  };

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">{pageTitle} Panel</h2>
          <p className="text-slate-500 text-xs mt-1">
            Console node: /dashboard/{slug.join("/")}
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-[10px] font-bold uppercase tracking-wider border border-slate-200 transition-colors cursor-pointer"
        >
          Return to Hub
        </button>
      </div>

      {/* Success Notification Alert */}
      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Active Component */}
      <div>{getActiveView()}</div>
    </div>
  );
}
