"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useAdminState } from "@/hooks/useAdminState";
import { db, isConfigured } from "@/lib/firebase";
import { 
  collection, doc, getDocs, setDoc, deleteDoc, writeBatch, onSnapshot 
} from "firebase/firestore";
import {
  Sparkles, Ticket, Plus, Trash2, AlertCircle, CheckCircle, RefreshCw,
  TrendingUp, Cpu, Mail, Sliders as SlidersIcon, DollarSign, ShieldCheck,
  Send, UserCheck, Settings, Truck, MessageSquare, Star, Eye, ArrowRight,
  User, Paperclip, Circle, Calendar, Zap, Heart, Award, Image as ImageIcon,
  FileText, HelpCircle, RotateCcw, Key, Lock, HardDrive, Activity,
  ToggleLeft, ToggleRight, Edit, Shield, Copy, Check, CreditCard
} from "lucide-react";

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
    activities,
    loading: adminStateLoading
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

  // Core notifications state
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Loading state for slug-specific data fetching
  const [slugLoading, setSlugLoading] = useState(true);

  // Generic Mock State
  const [genericToggle, setGenericToggle] = useState(true);
  const [genericText, setGenericText] = useState("");

  // ----------------------------------------------------
  // DATA STATES FOR ALL 21 CONSOLES
  // ----------------------------------------------------
  
  // 1. Discount Campaigns
  const [campaigns, setCampaigns] = useState<any[]>([]);
  // 2. Flash Sales
  const [flashSales, setFlashSales] = useState<any[]>([]);
  // 3. Featured Products List (IDs)
  const [featuredProductIds, setFeaturedProductIds] = useState<string[]>([]);
  // 4. Homepage Banner
  const [bannerConfig, setBannerConfig] = useState<any>({
    title: "Enterprise Solutions & Compute Clusters",
    subtitle: "Premium IT Hardware & Support for Bangladesh",
    ctaText: "Request B2B Quote",
    ctaLink: "/contact",
    bgImageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
  });
  // 5. Sliders
  const [sliders, setSliders] = useState<any[]>([]);
  // 6. Pages
  const [cmsPages, setCmsPages] = useState<any[]>([]);
  // 7. FAQ
  const [faqs, setFaqs] = useState<any[]>([]);
  // 8. Transactions
  const [transactions, setTransactions] = useState<any[]>([]);
  // 9. Payment Methods Config
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  // 10. Refund Requests
  const [refundRequests, setRefundRequests] = useState<any[]>([]);
  // 11. Contact Messages
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  // 12. Admin Users
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  // 13. Roles & Permissions Configuration
  const [rolesConfig, setRolesConfig] = useState<any[]>([]);
  // 15. Login Activity Logs
  const [loginActivity, setLoginActivity] = useState<any[]>([]);
  // 16. Two Factor Authentication settings
  const [tfaConfig, setTfaConfig] = useState<any>({
    enabled: false,
    phone: "",
    status: "Inactive",
    backupCodes: ["9821-0812", "4521-7891", "6672-0192", "3411-9018"]
  });
  // 17. Backup files list
  const [backups, setBackups] = useState<any[]>([]);
  // 18. Google Analytics config
  const [googleAnalytics, setGoogleAnalytics] = useState<any>({
    measurementId: "G-0R6S76NBDJ",
    enabled: true,
    trackConversions: true
  });
  // 19. Facebook Pixel config
  const [facebookPixel, setFacebookPixel] = useState<any>({
    pixelId: "123456789012345",
    enabled: false,
    trackAddtoCart: true
  });
  // 20. Payment Gateway APIs keys
  const [gatewayApis, setGatewayApis] = useState<any>({
    sslStoreId: "silicon_com_live",
    sslStorePassword: "••••••••••••••••",
    bkashAppKey: "bkash_key_prod_9018",
    bkashAppSecret: "••••••••••••••••",
    sandboxMode: true
  });
  // 21. SMS Gateway config
  const [smsGateway, setSmsGateway] = useState<any>({
    provider: "Greenweb BD",
    apiKey: "gw_api_key_889201",
    senderId: "SILICONCOMP",
    enabled: true
  });

  // ----------------------------------------------------
  // INITIALIZATION AND FIRESTORE SYNC LOGIC
  // ----------------------------------------------------
  useEffect(() => {
    let unsubscribes: (() => void)[] = [];

    const initConsoleData = async () => {
      setSlugLoading(true);

      // Define default data sets
      const defaultCampaigns = [
        { id: "camp-1", title: "Eid Mubarak Tech Upgrade", discountPercent: 15, status: "Active", startDate: "2026-06-01", endDate: "2026-06-15", banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
        { id: "camp-2", title: "Year-End Enterprise Clearance", discountPercent: 20, status: "Scheduled", startDate: "2026-12-15", endDate: "2026-12-31", banner: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" }
      ];

      const defaultFlashSales = [
        { id: "flash-1", productId: "hpe-proliant-dl380", title: "Midnight Madness HPE Sale", price: 390000, limit: 3, sold: 1, startTime: "2026-06-04T00:00", endTime: "2026-06-04T23:59", status: "Active" }
      ];

      const defaultFeatured = ["hpe-proliant-dl380", "cisco-catalyst-9300", "dell-poweredge-r750"];

      const defaultSliders = [
        { id: "slide-1", title: "Next-Gen Enterprise Rack Servers", description: "HPE ProLiant and Dell PowerEdge servers configured to order.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", btnText: "View Compute Catalog", btnLink: "/collections/compute", order: 1 },
        { id: "slide-2", title: "Cisco Catalyst High Speed Switched Networks", description: "Redefine connectivity with stackable PoE switches.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200", btnText: "View Networking", btnLink: "/collections/networking", order: 2 }
      ];

      const defaultPages = [
        { id: "page-1", title: "About Silicon Computing Ltd", slug: "about", content: "# About Us\n\nSilicon Computing Ltd is the premier provider of B2B server, networking, and cloud storage systems in Bangladesh.", status: "Published", lastModified: "2026-05-18" },
        { id: "page-2", title: "Enterprise Service Level Agreement (SLA)", slug: "sla", content: "# Service Level Agreement\n\nWe provide 24/7/365 hardware replacement guarantee for verified enterprise client clusters.", status: "Draft", lastModified: "2026-05-24" }
      ];

      const defaultFaqs = [
        { id: "faq-1", question: "Do you offer warranty & diagnostic assistance in Bangladesh?", answer: "Yes, we offer 3-year local warranty support with direct certified diagnostic field engineers.", category: "Support", status: "Active" },
        { id: "faq-2", question: "Can we request a custom B2B configuration quote?", answer: "Absolutely. Head to the contact desk or click 'Request B2B Quote' to upload specs.", category: "Sales", status: "Active" }
      ];

      const defaultTransactions = [
        { id: "tx-5001", orderId: "SCL-ORD-1001", customerName: "MD Nasir Feroz", gateway: "Bank Transfer", amount: 420000, status: "Success", date: "2026-05-20" },
        { id: "tx-5002", orderId: "SCL-ORD-1002", customerName: "Tasnim Rahman", gateway: "SSLCommerz (VISA)", amount: 342000, status: "Success", date: "2026-05-22" },
        { id: "tx-5003", orderId: "SCL-ORD-1003", customerName: "Anik Hasan", gateway: "Cash on Delivery", amount: 504000, status: "Pending", date: "2026-05-23" },
        { id: "tx-5004", orderId: "SCL-ORD-1004", customerName: "Rafiqul Islam", gateway: "bKash Checkout", amount: 78000, status: "Failed", date: "2026-05-18" }
      ];

      const defaultPaymentMethods = [
        { id: "ssl", name: "SSLCommerz Gateway", description: "Credit cards, Debit cards, Net banking", enabled: true, logo: "💳" },
        { id: "bkash", name: "bKash Tokenized Wallet", description: "Direct bKash payment gateway access", enabled: true, logo: "📱" },
        { id: "rocket", name: "DBBL Rocket Wallet", description: "Rocket mobile finance channel integration", enabled: false, logo: "📱" },
        { id: "bank", name: "Direct Bank Transfer", description: "City Bank or DBBL Corporate Accounts", enabled: true, logo: "🏦" },
        { id: "cod", name: "Cash on Delivery", description: "Applicable only inside Dhaka Metropolitan", enabled: true, logo: "🚚" }
      ];

      const defaultRefunds = [
        { id: "ref-101", orderId: "SCL-ORD-1004", customerName: "Rafiqul Islam", reason: "Order failed but amount deducted from wallet", amount: 78000, status: "Pending", date: "2026-05-19" },
        { id: "ref-102", orderId: "SCL-ORD-1002", customerName: "Tasnim Rahman", reason: "Change of requirements before firmware setup", amount: 342000, status: "Rejected", date: "2026-05-23" }
      ];

      const defaultMessages = [
        { id: "msg-1", name: "Rashedul Islam", email: "rashed@technobd.com", subject: "Quotation request for 5x Dell PowerEdge R750", message: "Hello, please email the PDF quotation with corporate pricing for five units of PowerEdge R750.", date: "2026-06-03", status: "Unread" },
        { id: "msg-2", name: "Tariqul Hasan", email: "tariq@dhakabank.com.bd", subject: "SLA Support SLA Inquiry", message: "Do you have dedicated engineers stationed in Chittagong for urgent server issues?", date: "2026-06-02", status: "Read" }
      ];

      const defaultAdmins = [
        { email: "admin@silicon.com", name: "MD Nasir Feroz", role: "Super Administrator", status: "Active" },
        { email: "silicon.website.bd@gmail.com", name: "Nasir Feroz", role: "Super Administrator", status: "Active" },
        { email: "support@silicon.com", name: "Tanvir Ahmed", role: "Support Lead", status: "Active" },
        { email: "operator@silicon.com", name: "Staff Operator", role: "Manager", status: "Inactive" }
      ];

      const defaultRoles = [
        { name: "Super Administrator", description: "Full access to dashboard and security overrides", permissions: { products: true, marketing: true, payments: true, security: true, integrations: true } },
        { name: "Manager", description: "Can manage product catalog, campaigns, and pages", permissions: { products: true, marketing: true, payments: false, security: false, integrations: false } },
        { name: "Support Lead", description: "Access support tickets, live chat, and messages", permissions: { products: false, marketing: false, payments: false, security: false, integrations: false } }
      ];

      const defaultLogins = [
        { id: "login-1", email: "admin@silicon.com", ip: "103.230.104.5", browser: "Chrome / Windows 11", status: "Success", timestamp: "2026-06-04 00:15" },
        { id: "login-2", email: "silicon.website.bd@gmail.com", ip: "192.168.10.15", browser: "Safari / macOS", status: "Success", timestamp: "2026-06-03 23:42" },
        { id: "login-3", email: "operator@silicon.com", ip: "203.82.90.11", browser: "Firefox / Linux", status: "Failed (Wrong Pass)", timestamp: "2026-06-03 12:10" }
      ];

      const defaultBackups = [
        { id: "bak-1", filename: "scl_prod_db_backup_20260531.json", size: "482 KB", date: "2026-05-31 03:00" },
        { id: "bak-2", filename: "scl_prod_db_backup_20260603.json", size: "512 KB", date: "2026-06-03 03:00" }
      ];

      // helper mapping to register local states
      const mapping = [
        { col: "campaigns", stateSetter: setCampaigns, def: defaultCampaigns },
        { col: "flashSales", stateSetter: setFlashSales, def: defaultFlashSales },
        { col: "featuredProducts", stateSetter: setFeaturedProductIds, def: defaultFeatured },
        { col: "sliders", stateSetter: setSliders, def: defaultSliders },
        { col: "pages", stateSetter: setCmsPages, def: defaultPages },
        { col: "faqs", stateSetter: setFaqs, def: defaultFaqs },
        { col: "transactions", stateSetter: setTransactions, def: defaultTransactions },
        { col: "paymentMethods", stateSetter: setPaymentMethods, def: defaultPaymentMethods },
        { col: "refundRequests", stateSetter: setRefundRequests, def: defaultRefunds },
        { col: "contactMessages", stateSetter: setContactMessages, def: defaultMessages },
        { col: "adminUsers", stateSetter: setAdminUsers, def: defaultAdmins },
        { col: "rolesConfig", stateSetter: setRolesConfig, def: defaultRoles },
        { col: "loginActivity", stateSetter: setLoginActivity, def: defaultLogins },
        { col: "backups", stateSetter: setBackups, def: defaultBackups }
      ];

      // Single Configuration docs
      const singleDocs = [
        { col: "settings", docId: "homepage_banner", stateSetter: setBannerConfig, def: bannerConfig },
        { col: "settings", docId: "tfa", stateSetter: setTfaConfig, def: tfaConfig },
        { col: "settings", docId: "google_analytics", stateSetter: setGoogleAnalytics, def: googleAnalytics },
        { col: "settings", docId: "facebook_pixel", stateSetter: setFacebookPixel, def: facebookPixel },
        { col: "settings", docId: "gateway_apis", stateSetter: setGatewayApis, def: gatewayApis },
        { col: "settings", docId: "sms_gateway", stateSetter: setSmsGateway, def: smsGateway }
      ];

      if (isConfigured) {
        try {
          // Sync Multi-Document Collections
          for (const item of mapping) {
            const unsub = onSnapshot(collection(db, item.col), (snap) => {
              if (snap.empty) {
                // Seed to Firestore
                const batch = writeBatch(db);
                item.def.forEach((docData: any) => {
                  let docId = "";
                  let payload = docData;
                  if (typeof docData === "string") {
                    docId = docData;
                    payload = { id: docData };
                  } else {
                    docId = docData.id || docData.email || docData.name;
                  }
                  if (docId) {
                    batch.set(doc(db, item.col, docId), payload);
                  }
                });
                batch.commit().catch(console.error);
                (item.stateSetter as any)(item.def);
                localStorage.setItem(`scl_${item.col}`, JSON.stringify(item.def));
              } else {
                const list: any[] = [];
                snap.forEach((d) => list.push(d.data()));
                if (item.col === "featuredProducts") {
                  const featuredIds = list.map((i: any) => i.id);
                  (item.stateSetter as any)(featuredIds);
                  localStorage.setItem(`scl_${item.col}`, JSON.stringify(featuredIds));
                } else {
                  (item.stateSetter as any)(list);
                  localStorage.setItem(`scl_${item.col}`, JSON.stringify(list));
                }
              }
            });
            unsubscribes.push(unsub);
          }

          // Sync Single Document Configurations
          for (const item of singleDocs) {
            const unsub = onSnapshot(doc(db, item.col, item.docId), (snap) => {
              if (!snap.exists()) {
                setDoc(doc(db, item.col, item.docId), item.def).catch(console.error);
                (item.stateSetter as any)(item.def);
                localStorage.setItem(`scl_single_${item.col}_${item.docId}`, JSON.stringify(item.def));
              } else {
                const val = snap.data();
                (item.stateSetter as any)(val);
                localStorage.setItem(`scl_single_${item.col}_${item.docId}`, JSON.stringify(val));
              }
            });
            unsubscribes.push(unsub);
          }

          setSlugLoading(false);
          return;
        } catch (e) {
          console.error("Firestore loading failed, using localStorage fallback", e);
        }
      }

      // LocalStorage Fallback Loader
      try {
        for (const item of mapping) {
          const stored = localStorage.getItem(`scl_${item.col}`);
          if (stored) {
            (item.stateSetter as any)(JSON.parse(stored));
          } else {
            localStorage.setItem(`scl_${item.col}`, JSON.stringify(item.def));
            (item.stateSetter as any)(item.def);
          }
        }

        for (const item of singleDocs) {
          const stored = localStorage.getItem(`scl_single_${item.col}_${item.docId}`);
          if (stored) {
            (item.stateSetter as any)(JSON.parse(stored));
          } else {
            localStorage.setItem(`scl_single_${item.col}_${item.docId}`, JSON.stringify(item.def));
            (item.stateSetter as any)(item.def);
          }
        }
      } catch (err) {
        console.error("Local storage error:", err);
      } finally {
        setSlugLoading(false);
      }
    };

    initConsoleData();

    return () => {
      unsubscribes.forEach((unsub) => unsub());
    };
  }, []);

  // Helper function to save changes to firestore or localstorage
  const commitCollectionChanges = async (col: string, data: any[]) => {
    localStorage.setItem(`scl_${col}`, JSON.stringify(data));
    if (isConfigured) {
      try {
        // Simple rewrite batch or set doc
        for (const item of data) {
          const docId = item.id || item.email || item.name;
          if (docId) {
            await setDoc(doc(db, col, docId), item);
          }
        }
      } catch (err) {
        console.error(`Firebase write failed for ${col}:`, err);
      }
    }
  };

  const commitSingleDoc = async (col: string, docId: string, data: any) => {
    localStorage.setItem(`scl_single_${col}_${docId}`, JSON.stringify(data));
    if (isConfigured) {
      try {
        await setDoc(doc(db, col, docId), data);
      } catch (err) {
        console.error(`Firebase write failed for ${col}/${docId}:`, err);
      }
    }
  };

  const deleteDocItem = async (col: string, docId: string) => {
    if (isConfigured) {
      try {
        await deleteDoc(doc(db, col, docId));
      } catch (err) {
        console.error(`Firebase delete failed for ${col}/${docId}:`, err);
      }
    }
  };

  // ----------------------------------------------------
  // AI DESCRIPTIONS GENERATOR STATES & FUNCTIONS
  // ----------------------------------------------------
  const [aiProduct, setAiProduct] = useState("");
  const [aiTone, setAiTone] = useState("Professional");
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // AI SEO State
  const [seoKeywords, setSeoKeywords] = useState("");
  const [seoTarget, setSeoTarget] = useState("Homepage");
  const [seoResult, setSeoResult] = useState<any>(null);

  // AI Sales Predictions State
  const [salesInsights, setSalesInsights] = useState<string[]>([]);
  const [insightsLoading, setInsightsLoading] = useState(false);

  // Support Tickets State (Synced locally)
  const [tickets, setTickets] = useState([
    { id: "SCL-TKT-301", customer: "Tasnim Rahman", subject: "Cisco Switch firmware upgrade procedure", priority: "High", status: "Open", date: "2026-05-22" },
    { id: "SCL-TKT-302", customer: "Anik Hasan", subject: "Dell PowerEdge rail-kit missing bracket", priority: "Medium", status: "In Progress", date: "2026-05-23" },
    { id: "SCL-TKT-303", customer: "Rafiqul Islam", subject: "COD payment verification delay", priority: "Low", status: "Resolved", date: "2026-05-20" }
  ]);
  const [ticketReply, setTicketReply] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState("SCL-TKT-301");

  // Live Chat States
  const [chatSessions, setChatSessions] = useState<any[]>([
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
    }
  ]);
  const [activeChatId, setActiveChatId] = useState("chat-1");
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Forms state controls
  const [campaignForm, setCampaignForm] = useState({ id: "", title: "", discountPercent: 10, status: "Active", startDate: "", endDate: "", banner: "" });
  const [flashForm, setFlashForm] = useState({ id: "", productId: "", title: "", price: 0, limit: 1, sold: 0, startTime: "", endTime: "", status: "Active" });
  const [sliderForm, setSliderForm] = useState({ id: "", title: "", description: "", image: "", btnText: "View More", btnLink: "", order: 1 });
  const [pageForm, setPageForm] = useState({ id: "", title: "", slug: "", content: "", status: "Published" });
  const [faqForm, setFaqForm] = useState({ id: "", question: "", answer: "", category: "General", status: "Active" });
  const [adminUserForm, setAdminUserForm] = useState({ email: "", name: "", role: "Manager", status: "Active" });

  // Coupon configuration forms
  const [couponCode, setCouponCode] = useState("");
  const [couponValue, setCouponValue] = useState(10);
  const [couponType, setCouponType] = useState<"percentage" | "fixed">("percentage");
  const [couponExpiry, setCouponExpiry] = useState("2026-12-31");

  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // --- ACTIONS ---
  
  // 1. Discount Campaigns Actions
  const handleSaveCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    let updatedCampaigns = [];
    if (editingItemId) {
      updatedCampaigns = campaigns.map(c => c.id === editingItemId ? { ...campaignForm, id: editingItemId } : c);
      setSuccessMsg("Campaign updated successfully.");
      addActivity(`Updated discount campaign: "${campaignForm.title}"`);
    } else {
      const newCamp = { ...campaignForm, id: `camp-${Date.now()}` };
      updatedCampaigns = [...campaigns, newCamp];
      setSuccessMsg("New campaign registered successfully.");
      addActivity(`Created discount campaign: "${campaignForm.title}"`);
    }
    setCampaigns(updatedCampaigns);
    commitCollectionChanges("campaigns", updatedCampaigns);
    setEditingItemId(null);
    setIsAddingNew(false);
    setCampaignForm({ id: "", title: "", discountPercent: 10, status: "Active", startDate: "", endDate: "", banner: "" });
  };

  const handleEditCampaign = (camp: any) => {
    setCampaignForm(camp);
    setEditingItemId(camp.id);
    setIsAddingNew(true);
  };

  const handleDeleteCampaign = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete campaign: "${name}"?`)) {
      const updated = campaigns.filter(c => c.id !== id);
      setCampaigns(updated);
      commitCollectionChanges("campaigns", updated);
      deleteDocItem("campaigns", id);
      setSuccessMsg("Campaign deleted.");
      addActivity(`Deleted campaign: "${name}"`);
    }
  };

  // 2. Flash Sales Actions
  const handleSaveFlashSale = async (e: React.FormEvent) => {
    e.preventDefault();
    let updated = [];
    if (editingItemId) {
      updated = flashSales.map(f => f.id === editingItemId ? { ...flashForm, id: editingItemId } : f);
      setSuccessMsg("Flash sale updated.");
      addActivity(`Updated flash sale config: "${flashForm.title}"`);
    } else {
      const newFlash = { ...flashForm, id: `flash-${Date.now()}` };
      updated = [...flashSales, newFlash];
      setSuccessMsg("New flash sale created.");
      addActivity(`Created flash sale config: "${flashForm.title}"`);
    }
    setFlashSales(updated);
    commitCollectionChanges("flashSales", updated);
    setEditingItemId(null);
    setIsAddingNew(false);
    setFlashForm({ id: "", productId: "", title: "", price: 0, limit: 1, sold: 0, startTime: "", endTime: "", status: "Active" });
  };

  const handleDeleteFlashSale = async (id: string) => {
    if (confirm("Delete this flash sale promotion?")) {
      const updated = flashSales.filter(f => f.id !== id);
      setFlashSales(updated);
      commitCollectionChanges("flashSales", updated);
      deleteDocItem("flashSales", id);
      setSuccessMsg("Flash sale deleted.");
      addActivity("Deleted flash sale promotion");
    }
  };

  // 3. Featured Products Toggle
  const handleToggleFeatured = (prodId: string) => {
    let updated = [];
    if (featuredProductIds.includes(prodId)) {
      updated = featuredProductIds.filter(id => id !== prodId);
      setSuccessMsg("Removed from featured list.");
      addActivity(`Removed product ID ${prodId} from Featured List`);
    } else {
      updated = [...featuredProductIds, prodId];
      setSuccessMsg("Marked product as Featured.");
      addActivity(`Added product ID ${prodId} to Featured List`);
    }
    setFeaturedProductIds(updated);
    commitCollectionChanges("featuredProducts", updated.map(id => ({ id })));
  };

  // 4. Homepage Banner Save
  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    commitSingleDoc("settings", "homepage_banner", bannerConfig);
    setSuccessMsg("Homepage banner configurations updated.");
    addActivity("Updated homepage banner settings.");
  };

  // 5. Sliders Actions
  const handleSaveSlider = async (e: React.FormEvent) => {
    e.preventDefault();
    let updated = [];
    if (editingItemId) {
      updated = sliders.map(s => s.id === editingItemId ? { ...sliderForm, id: editingItemId } : s);
      setSuccessMsg("Slide updated.");
    } else {
      const newSlide = { ...sliderForm, id: `slide-${Date.now()}` };
      updated = [...sliders, newSlide];
      setSuccessMsg("Slide added.");
    }
    setSliders(updated);
    commitCollectionChanges("sliders", updated);
    setEditingItemId(null);
    setIsAddingNew(false);
    setSliderForm({ id: "", title: "", description: "", image: "", btnText: "View More", btnLink: "", order: 1 });
    addActivity("Configured homepage carousel sliders.");
  };

  const handleDeleteSlider = async (id: string) => {
    if (confirm("Delete this slider slide?")) {
      const updated = sliders.filter(s => s.id !== id);
      setSliders(updated);
      commitCollectionChanges("sliders", updated);
      deleteDocItem("sliders", id);
      setSuccessMsg("Slide removed.");
      addActivity("Removed carousel slider slide");
    }
  };

  // 6. CMS Pages Actions
  const handleSavePage = async (e: React.FormEvent) => {
    e.preventDefault();
    let updated = [];
    const dateStr = new Date().toISOString().split("T")[0];
    if (editingItemId) {
      updated = cmsPages.map(p => p.id === editingItemId ? { ...pageForm, id: editingItemId, lastModified: dateStr } : p);
      setSuccessMsg("Page revised successfully.");
      addActivity(`Edited content page: "${pageForm.title}"`);
    } else {
      const newPage = { ...pageForm, id: `page-${Date.now()}`, lastModified: dateStr };
      updated = [...cmsPages, newPage];
      setSuccessMsg("New content page published.");
      addActivity(`Created content page: "${pageForm.title}"`);
    }
    setCmsPages(updated);
    commitCollectionChanges("pages", updated);
    setEditingItemId(null);
    setIsAddingNew(false);
    setPageForm({ id: "", title: "", slug: "", content: "", status: "Published" });
  };

  const handleDeletePage = async (id: string, name: string) => {
    if (confirm(`Delete page "${name}"?`)) {
      const updated = cmsPages.filter(p => p.id !== id);
      setCmsPages(updated);
      commitCollectionChanges("pages", updated);
      deleteDocItem("pages", id);
      setSuccessMsg("Page deleted.");
      addActivity(`Deleted page: "${name}"`);
    }
  };

  // 7. FAQ Actions
  const handleSaveFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    let updated = [];
    if (editingItemId) {
      updated = faqs.map(f => f.id === editingItemId ? { ...faqForm, id: editingItemId } : f);
      setSuccessMsg("FAQ updated.");
    } else {
      const newFaq = { ...faqForm, id: `faq-${Date.now()}` };
      updated = [...faqs, newFaq];
      setSuccessMsg("FAQ created.");
    }
    setFaqs(updated);
    commitCollectionChanges("faqs", updated);
    setEditingItemId(null);
    setIsAddingNew(false);
    setFaqForm({ id: "", question: "", answer: "", category: "General", status: "Active" });
    addActivity("Modified help center FAQs.");
  };

  const handleDeleteFaq = async (id: string) => {
    if (confirm("Delete this FAQ?")) {
      const updated = faqs.filter(f => f.id !== id);
      setFaqs(updated);
      commitCollectionChanges("faqs", updated);
      deleteDocItem("faqs", id);
      setSuccessMsg("FAQ deleted.");
    }
  };

  // 8. Transactions Update Status
  const handleUpdateTransactionStatus = (id: string, newStatus: string) => {
    const updated = transactions.map(t => t.id === id ? { ...t, status: newStatus } : t);
    setTransactions(updated);
    commitCollectionChanges("transactions", updated);
    setSuccessMsg(`Transaction status updated to ${newStatus}.`);
    addActivity(`Updated payment transaction ${id} status to ${newStatus}`);
  };

  // 9. Payment Methods Actions
  const handleTogglePaymentMethod = (id: string) => {
    const updated = paymentMethods.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p);
    setPaymentMethods(updated);
    commitCollectionChanges("paymentMethods", updated);
    setSuccessMsg("Payment method settings updated.");
    addActivity(`Toggled status of payment gateway: ${id}`);
  };

  // 10. Refund Request Updates
  const handleUpdateRefundStatus = (id: string, newStatus: string) => {
    const updated = refundRequests.map(r => r.id === id ? { ...r, status: newStatus } : r);
    setRefundRequests(updated);
    commitCollectionChanges("refundRequests", updated);
    setSuccessMsg(`Refund request marked as ${newStatus}.`);
    addActivity(`Updated refund request ${id} status to ${newStatus}`);
  };

  // 11. Contact Messages Status updates
  const handleMarkMessageRead = (id: string) => {
    const updated = contactMessages.map(m => m.id === id ? { ...m, status: "Read" } : m);
    setContactMessages(updated);
    commitCollectionChanges("contactMessages", updated);
    addActivity("Marked user contact request as read.");
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm("Delete this message?")) {
      const updated = contactMessages.filter(m => m.id !== id);
      setContactMessages(updated);
      commitCollectionChanges("contactMessages", updated);
      deleteDocItem("contactMessages", id);
      setSuccessMsg("Message deleted.");
    }
  };

  // 12. Admin Users Actions
  const handleSaveAdminUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminUserForm.email.includes("@")) {
      setErrorMsg("Invalid email address.");
      return;
    }
    let updated = [];
    if (editingItemId) {
      updated = adminUsers.map(u => u.email === editingItemId ? adminUserForm : u);
      setSuccessMsg("Admin staff user details saved.");
    } else {
      updated = [...adminUsers, adminUserForm];
      setSuccessMsg("New admin staff user registered.");
    }
    setAdminUsers(updated);
    commitCollectionChanges("adminUsers", updated);
    setEditingItemId(null);
    setIsAddingNew(false);
    setAdminUserForm({ email: "", name: "", role: "Manager", status: "Active" });
    addActivity(`Registered/Updated administrative node for: ${adminUserForm.email}`);
  };

  const handleDeleteAdminUser = async (email: string) => {
    if (email === "admin@silicon.com" || email === "silicon.website.bd@gmail.com") {
      alert("Super administrators cannot be removed.");
      return;
    }
    if (confirm(`Remove administrator login access for ${email}?`)) {
      const updated = adminUsers.filter(u => u.email !== email);
      setAdminUsers(updated);
      commitCollectionChanges("adminUsers", updated);
      deleteDocItem("adminUsers", email);
      setSuccessMsg("Admin user removed.");
      addActivity(`Revoked admin access for: ${email}`);
    }
  };

  // 13. Roles & Permissions actions
  const handleTogglePermission = (roleName: string, permissionKey: string) => {
    const updated = rolesConfig.map(role => {
      if (role.name === roleName) {
        return {
          ...role,
          permissions: {
            ...role.permissions,
            [permissionKey]: !role.permissions[permissionKey]
          }
        };
      }
      return role;
    });
    setRolesConfig(updated);
    commitCollectionChanges("rolesConfig", updated);
    setSuccessMsg(`Permissions updated for role: ${roleName}`);
    addActivity(`Updated permissions grid configurations for: ${roleName}`);
  };

  // 16. Two Factor Authentication Save
  const handleSaveTfa = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = { ...tfaConfig, status: tfaConfig.enabled ? "Active" : "Inactive" };
    setTfaConfig(updated);
    commitSingleDoc("settings", "tfa", updated);
    setSuccessMsg("Two-factor security parameters synced.");
    addActivity(`Toggled Two-Factor admin authentication to ${updated.status}`);
  };

  // 17. Backup & Restore actions
  const handleCreateBackup = () => {
    const backupName = `scl_backup_${new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14)}.json`;
    const newBackup = {
      id: `bak-${Date.now()}`,
      filename: backupName,
      size: `${(Math.random() * 200 + 400).toFixed(0)} KB`,
      date: new Date().toISOString().replace("T", " ").slice(0, 16)
    };
    const updated = [newBackup, ...backups];
    setBackups(updated);
    commitCollectionChanges("backups", updated);
    setSuccessMsg("System database snapshot created successfully.");
    addActivity(`Committed full backup snapshot: ${backupName}`);
  };

  const handleRestoreBackup = (filename: string) => {
    if (confirm(`Do you wish to restore the database system using snapshot "${filename}"? All unsaved local updates will be overwritten.`)) {
      setSuccessMsg(`Restored system backup state from: ${filename}`);
      addActivity(`Restored database state from backup: ${filename}`);
    }
  };

  // 18. Google Analytics Save
  const handleSaveGA = (e: React.FormEvent) => {
    e.preventDefault();
    commitSingleDoc("settings", "google_analytics", googleAnalytics);
    setSuccessMsg("Google Analytics integrations updated.");
    addActivity("Saved Google Analytics tracking parameters.");
  };

  // 19. Facebook Pixel Save
  const handleSavePixel = (e: React.FormEvent) => {
    e.preventDefault();
    commitSingleDoc("settings", "facebook_pixel", facebookPixel);
    setSuccessMsg("Facebook Pixel integrations updated.");
    addActivity("Saved Facebook Pixel parameters.");
  };

  // 20. Payment Gateway APIs Save
  const handleSaveGatewayApis = (e: React.FormEvent) => {
    e.preventDefault();
    commitSingleDoc("settings", "gateway_apis", gatewayApis);
    setSuccessMsg("Gateway credentials and sandbox overrides committed.");
    addActivity("Updated secure payment API gateway keys.");
  };

  // 21. SMS Gateway Save
  const handleSaveSMS = (e: React.FormEvent) => {
    e.preventDefault();
    commitSingleDoc("settings", "sms_gateway", smsGateway);
    setSuccessMsg("SMS notifications gateway setup saved.");
    addActivity("Saved B2B SMS notification settings.");
  };

  // Chat session reply handling
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const messageText = chatInput.trim();
    const timestampStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
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
        const count = activeSession.messages.filter((m: any) => m.sender === "admin").length;
        replyText = replies[count % replies.length];
      } else if (activeSession.userName === "Tanvir Ahmed") {
        const replies = [
          "Thanks, let me apply the configuration adjustment and monitor the traffic logs for the next hour.",
          "Acknowledged. I've sent the updated traceroute output to your technical desk.",
          "That resolved it! The latency is back to < 5ms. Thanks for the quick support."
        ];
        const count = activeSession.messages.filter((m: any) => m.sender === "admin").length;
        replyText = replies[count % replies.length];
      } else {
        replyText = "Thanks for the details. I will review this and get back to you shortly.";
      }

      const clientMsg = {
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

  // Reply Support Tickets
  const handleSendTicketReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketReply.trim()) return;

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

  // Sync activeChat unread count
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
      const timer = setTimeout(() => setSuccessMsg(""), 4500);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => setErrorMsg(""), 4500);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  // ----------------------------------------------------
  // 28 HOISTED RENDER METHODS (FUNCTION DECLARATIONS)
  // ----------------------------------------------------

  function renderAIDescription() {
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
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-indigo-650" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Description Engine</h3>
        </div>

        {errorMsg && <p className="text-xs text-red-650 font-bold bg-red-50 p-3 rounded-xl">{errorMsg}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
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

            <div className="space-y-1.5">
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
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-750 disabled:opacity-50 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-100"
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
            <div className="space-y-1.5">
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
  }

  function renderAISeo() {
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
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-emerald-650" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI SEO Content Generator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target Landing Page</label>
              <select
                value={seoTarget}
                onChange={(e) => setSeoTarget(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-805 outline-none"
              >
                <option value="Homepage">Homepage Banner & Hub</option>
                <option value="Product Page">B2B Hardware Catalog</option>
                <option value="Solutions Page">Enterprise Custom IT Solutions</option>
                <option value="Contact Page">Request Quote / RFP Desk</option>
              </select>
            </div>

            <div className="space-y-1.5">
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
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-650 leading-normal select-all">
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
  }

  function renderAiInsights() {
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
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-650" />
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
                  <h4 className="font-bold text-indigo-950 text-[11px] uppercase tracking-wider">Telemetry Diagnostic Insight #{insight}</h4>
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
  }

  function renderCoupons() {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Coupon Creator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Ticket className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Coupon Setup</h3>
          </div>

          <form onSubmit={handleAddCoupon} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Coupon Code</label>
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
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Type</label>
                <select
                  value={couponType}
                  onChange={(e) => setCouponType(e.target.value as any)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-805 outline-none"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed (৳)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Value</label>
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

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Expiry Date</label>
              <input
                type="date"
                required
                value={couponExpiry}
                onChange={(e) => setCouponExpiry(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-805 outline-none"
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
            <h3 className="text-xs font-bold text-slate-905 uppercase tracking-wider">Promotion coupons Registry</h3>
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
              <tbody className="divide-y divide-slate-100">
                {coupons.map((cop) => (
                  <tr key={cop.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800 tracking-wide font-mono uppercase">{cop.code}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">
                      {cop.discountType === "percentage" ? `${cop.value}% Off` : `৳${cop.value.toLocaleString()} Off`}
                    </td>
                    <td className="py-3 px-4 text-slate-505 font-medium">{cop.expiryDate}</td>
                    <td className="py-3 px-4 text-slate-700 font-bold">{cop.usageCount} times</td>
                    <td className="py-3 px-4">
                      <span className="text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100 py-0.5 px-2 rounded-full">
                        {cop.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDeleteCoupon(cop.id, cop.code)}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-650 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-100"
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
  }

  function renderSuppliers() {
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

    const handleApprovePO = (id: string) => {
      setPurchaseOrders(prev => prev.map(po => po.id === id ? { ...po, status: "Delivered" } : po));
      setSuccessMsg("Purchase order status marked as delivered.");
      addActivity("Updated purchase order status to delivered.");
    };

    const [purchaseOrders, setPurchaseOrders] = useState([
      { id: "po-1", supplier: "Cisco APAC Distributor", items: "15x Catalyst 9300 Switches", total: 2450000, date: "2026-05-10", status: "Delivered" },
      { id: "po-2", supplier: "HP Enterprise Bangladesh", items: "5x ProLiant DL380 Servers", total: 4200000, date: "2026-05-14", status: "Pending Delivery" },
      { id: "po-3", supplier: "MikroTik SIA", items: "30x Routerboard CCR1016", total: 1150000, date: "2026-05-18", status: "Approved" }
    ]);

    const [supName, setSupName] = useState("");
    const [supContact, setSupContact] = useState("");
    const [supEmail, setSupEmail] = useState("");
    const [supPhone, setSupPhone] = useState("");

    if (tabParam === "po") {
      return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-905 uppercase tracking-wider flex items-center gap-1.5">
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
                          className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-250 hover:bg-emerald-200 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Supplier Form */}
        <div className={`bg-white p-6 rounded-2xl border shadow-sm space-y-5 h-fit transition-all duration-300 ${
          actionParam === "add" ? "border-[#0F2C59] ring-4 ring-[#0F2C59]/10" : "border-slate-200"
        }`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Truck className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Register Supplier</h3>
          </div>

          <form onSubmit={handleAddSupplier} className="space-y-3.5">
            <div className="space-y-1.5">
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
            <div className="space-y-1.5">
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
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email</label>
                <input
                  type="email"
                  placeholder="name@corp.com"
                  value={supEmail}
                  onChange={(e) => setSupEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
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
                    <td className="py-3 px-4 text-slate-505 font-medium select-all">{sup.email}</td>
                    <td className="py-3 px-4 text-slate-505 font-mono font-bold select-all">{sup.phone}</td>
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
  }

  function renderSupportTickets() {
    const activeTkt = tickets.find(t => t.id === selectedTicketId) || tickets[0];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
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
                <h4 className="text-xs font-bold text-slate-805 leading-snug line-clamp-1">{tkt.subject}</h4>
                <div className="flex justify-between items-center mt-2.5 text-[9px] font-bold text-slate-455 uppercase">
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
                <h3 className="text-xs font-bold text-slate-909 uppercase tracking-wider">{activeTkt.subject}</h3>
                <p className="text-[10px] text-slate-500 font-medium mt-1 font-semibold">Ticket from: <span className="font-bold text-slate-800">{activeTkt.customer}</span> ({activeTkt.date})</p>
              </div>
              <span className="text-[9px] font-bold bg-[#0F2C59]/10 text-[#0F2C59] py-0.5 px-2 rounded font-mono uppercase">{activeTkt.id}</span>
            </div>

            <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl text-xs leading-relaxed text-slate-700">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Customer Message:</span>
              "Hi support, we are running into issues finalizing our deployment setup. Please review the diagnostic log file and confirm compatibility."
            </div>

            <form onSubmit={handleSendTicketReply} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">Draft Response</label>
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
  }

  function renderLiveChat() {
    const activeSession = chatSessions.find(c => c.id === activeChatId);

    return (
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[580px] animate-scaleUp">
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
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">
                      {session.userName.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      isOnline ? "bg-emerald-500" : "bg-slate-400"
                    }`}></span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 truncate">{session.userName}</span>
                      <span className="text-[9px] text-slate-400 font-medium shrink-0">{session.lastMessageTime}</span>
                    </div>
                    <span className="text-[10px] text-slate-505 font-medium block truncate mt-0.5">{session.userCompany}</span>
                    <p className="text-[10px] text-slate-450 truncate mt-1">
                      {isTyping === session.id ? (
                        <span className="text-[#0F2C59] font-semibold italic">typing...</span>
                      ) : (
                        session.lastMessage
                      )}
                    </p>
                  </div>

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
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center font-bold text-xs">
                      {activeSession.userName.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${
                      activeSession.userStatus === "online" ? "bg-emerald-500" : "bg-slate-400"
                    }`}></span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-none">{activeSession.userName}</h4>
                    <p className="text-[10px] text-slate-505 mt-1 font-semibold">
                      {activeSession.userRole} @ <span className="text-slate-700 font-bold">{activeSession.userCompany}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/20">
                {activeSession.messages.map((message: any) => {
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

                {isTyping === activeSession.id && (
                  <div className="flex flex-col items-start">
                    <div className="bg-white text-slate-505 border border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="text-[10px] text-slate-400 font-semibold ml-1">{activeSession.userName} is typing...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-slate-200 bg-slate-50/50">
                <form onSubmit={handleSendChatMessage} className="flex items-center gap-2">
                  <button
                    type="button"
                    title="Attach Files"
                    onClick={() => {
                      setSuccessMsg("File uploads are disabled in simulation mode.");
                    }}
                    className="p-2.5 hover:bg-slate-200 text-slate-400 hover:text-slate-655 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-300"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    required
                    placeholder={`Reply to ${activeSession.userName}...`}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 bg-white border border-slate-250 focus:border-[#0F2C59] rounded-xl px-4 py-2.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 transition-all font-medium"
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
            <div className="flex-1 flex flex-col items-center justify-center text-slate-455 p-8">
              <MessageSquare className="w-12 h-12 text-slate-300 mb-3" />
              <p className="text-xs font-semibold uppercase tracking-wider">No Active Conversation</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  function renderCampaigns() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Campaign Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Zap className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {editingItemId ? "Edit Campaign" : "Register Campaign"}
            </h3>
          </div>
          <form onSubmit={handleSaveCampaign} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Campaign Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Eid Mubarak Upgrade"
                value={campaignForm.title}
                onChange={(e) => setCampaignForm({ ...campaignForm, title: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Discount %</label>
                <input
                  type="number"
                  required
                  min={1}
                  max={100}
                  value={campaignForm.discountPercent}
                  onChange={(e) => setCampaignForm({ ...campaignForm, discountPercent: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Status</label>
                <select
                  value={campaignForm.status}
                  onChange={(e) => setCampaignForm({ ...campaignForm, status: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                >
                  <option value="Active">Active</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Start Date</label>
                <input
                  type="date"
                  required
                  value={campaignForm.startDate}
                  onChange={(e) => setCampaignForm({ ...campaignForm, startDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">End Date</label>
                <input
                  type="date"
                  required
                  value={campaignForm.endDate}
                  onChange={(e) => setCampaignForm({ ...campaignForm, endDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Banner Image URL</label>
              <input
                type="text"
                placeholder="https://..."
                value={campaignForm.banner}
                onChange={(e) => setCampaignForm({ ...campaignForm, banner: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Save
              </button>
              {editingItemId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingItemId(null);
                    setCampaignForm({ id: "", title: "", discountPercent: 10, status: "Active", startDate: "", endDate: "", banner: "" });
                  }}
                  className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-650 rounded-xl text-[10px] font-bold uppercase tracking-wider border border-slate-200 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Campaigns List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Discount Campaigns</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Campaign Details</th>
                  <th className="py-3 px-4">Discount</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {campaigns.map((camp) => (
                  <tr key={camp.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800">
                      <div>{camp.title}</div>
                      {camp.banner && (
                        <a href={camp.banner} target="_blank" rel="noreferrer" className="text-[9px] text-[#0F2C59] underline font-medium">View Banner</a>
                      )}
                    </td>
                    <td className="py-3 px-4 font-extrabold text-slate-700">{camp.discountPercent}% OFF</td>
                    <td className="py-3 px-4 text-slate-505 font-medium">
                      {camp.startDate} to {camp.endDate}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        camp.status === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                        camp.status === "Scheduled" ? "bg-blue-50 text-blue-600 border border-blue-100" :
                        "bg-red-50 text-red-600 border border-red-100"
                      }`}>
                        {camp.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right flex justify-end gap-1.5">
                      <button
                        onClick={() => handleEditCampaign(camp)}
                        className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-200"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteCampaign(camp.id, camp.title)}
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
  }

  function renderFlashSales() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Flash Sale Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Zap className="w-5 h-5 text-amber-500" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Register Flash Sale</h3>
          </div>
          <form onSubmit={handleSaveFlashSale} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Flash Sale Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Midnight Madness Sale"
                value={flashForm.title}
                onChange={(e) => setFlashForm({ ...flashForm, title: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Target Product</label>
              <select
                value={flashForm.productId}
                onChange={(e) => {
                  const prod = products.find(p => p.id === e.target.value);
                  setFlashForm({ ...flashForm, productId: e.target.value, price: prod ? prod.price * 0.8 : 0 });
                }}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              >
                <option value="">-- Choose Product --</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.title} (৳{p.price.toLocaleString()})</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Promo Price (৳)</label>
                <input
                  type="number"
                  required
                  value={flashForm.price}
                  onChange={(e) => setFlashForm({ ...flashForm, price: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Max Quantity Limit</label>
                <input
                  type="number"
                  required
                  min={1}
                  value={flashForm.limit}
                  onChange={(e) => setFlashForm({ ...flashForm, limit: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Start Time</label>
                <input
                  type="datetime-local"
                  required
                  value={flashForm.startTime}
                  onChange={(e) => setFlashForm({ ...flashForm, startTime: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">End Time</label>
                <input
                  type="datetime-local"
                  required
                  value={flashForm.endTime}
                  onChange={(e) => setFlashForm({ ...flashForm, endTime: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Save Flash Sale
            </button>
          </form>
        </div>

        {/* Flash Sales List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Active Flash Sales</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Sale Title / Item</th>
                  <th className="py-3 px-4">Promo Price</th>
                  <th className="py-3 px-4">Sold Limit</th>
                  <th className="py-3 px-4">Timeline</th>
                  <th className="py-3 px-4 text-right">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {flashSales.map((fs) => {
                  const prod = products.find(p => p.id === fs.productId);
                  return (
                    <tr key={fs.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-800">
                        <div>{fs.title}</div>
                        <span className="text-[10px] text-slate-450 font-medium">{prod?.title || fs.productId}</span>
                      </td>
                      <td className="py-3 px-4 font-extrabold text-slate-900">৳{fs.price.toLocaleString()}</td>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        {fs.sold} / {fs.limit} units
                      </td>
                      <td className="py-3 px-4 text-slate-505 font-medium text-[10px]">
                        {fs.startTime.replace("T", " ")} to {fs.endTime.replace("T", " ")}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDeleteFlashSale(fs.id)}
                          className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-100"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function renderFeaturedProducts() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            Featured Products Catalog Matrix
          </h3>
        </div>
        <p className="text-slate-500 text-xs font-medium">
          Toggle which equipment displays inside the featured carousel banners on the front-page. A maximum of 6 elements is recommended.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((prod) => {
            const isFeatured = featuredProductIds.includes(prod.id);
            return (
              <div key={prod.id} className={`p-4 border rounded-2xl transition-all flex flex-col justify-between ${
                isFeatured ? "bg-[#0F2C59]/5 border-[#0F2C59]/30 ring-2 ring-[#0F2C59]/10" : "bg-white border-slate-200 hover:border-slate-350"
              }`}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                      {prod.category}
                    </span>
                    {isFeatured && (
                      <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-100">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 leading-snug line-clamp-2">{prod.title}</h4>
                  <p className="text-[10px] text-slate-450 mt-1 font-semibold">{prod.brand} • ৳{prod.price.toLocaleString()}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] text-slate-400 font-semibold">ID: {prod.id}</span>
                  <button
                    onClick={() => handleToggleFeatured(prod.id)}
                    className={`px-3 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                      isFeatured
                        ? "bg-amber-100 hover:bg-amber-200 text-amber-800"
                        : "bg-[#0F2C59] hover:bg-[#0b2143] text-white"
                    }`}
                  >
                    {isFeatured ? "Un-feature" : "Feature"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderHomepageBanner() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-scaleUp">
        {/* Settings Panel */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#0F2C59]" />
              Hero Banner Editor
            </h3>
          </div>
          <form onSubmit={handleSaveBanner} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Banner Title</label>
              <input
                type="text"
                required
                value={bannerConfig.title}
                onChange={(e) => setBannerConfig({ ...bannerConfig, title: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-905 outline-none font-semibold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Subtitle Copy</label>
              <textarea
                required
                rows={3}
                value={bannerConfig.subtitle}
                onChange={(e) => setBannerConfig({ ...bannerConfig, subtitle: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3.5 text-xs text-slate-900 outline-none leading-relaxed"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Button Label</label>
                <input
                  type="text"
                  required
                  value={bannerConfig.ctaText}
                  onChange={(e) => setBannerConfig({ ...bannerConfig, ctaText: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Button Link</label>
                <input
                  type="text"
                  required
                  value={bannerConfig.ctaLink}
                  onChange={(e) => setBannerConfig({ ...bannerConfig, ctaLink: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Background Image URL</label>
              <input
                type="text"
                required
                value={bannerConfig.bgImageUrl}
                onChange={(e) => setBannerConfig({ ...bannerConfig, bgImageUrl: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Commit Banner config
            </button>
          </form>
        </div>

        {/* Real-time Preview */}
        <div className="space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Live Render Preview</span>
          <div
            className="h-[380px] rounded-2xl overflow-hidden relative flex flex-col justify-end p-8 bg-cover bg-center shadow-lg border border-slate-200"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85)), url(${bannerConfig.bgImageUrl})` }}
          >
            <div className="space-y-3.5 max-w-md">
              <span className="text-[9px] font-bold tracking-widest bg-emerald-500 text-white px-2 py-0.5 rounded uppercase">B2B Core Banner</span>
              <h2 className="text-xl font-bold text-white leading-tight font-sans tracking-wide">{bannerConfig.title}</h2>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">{bannerConfig.subtitle}</p>
              <a
                href={bannerConfig.ctaLink}
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                {bannerConfig.ctaText}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderSliders() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Slider Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ImageIcon className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Configure Slider</h3>
          </div>
          <form onSubmit={handleSaveSlider} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Slide Title</label>
              <input
                type="text"
                required
                value={sliderForm.title}
                onChange={(e) => setSliderForm({ ...sliderForm, title: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Slide Description</label>
              <textarea
                required
                rows={2}
                value={sliderForm.description}
                onChange={(e) => setSliderForm({ ...sliderForm, description: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3 text-xs text-slate-900 outline-none animate-scaleUp"
              ></textarea>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Image URL</label>
              <input
                type="text"
                required
                value={sliderForm.image}
                onChange={(e) => setSliderForm({ ...sliderForm, image: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Button Text</label>
                <input
                  type="text"
                  required
                  value={sliderForm.btnText}
                  onChange={(e) => setSliderForm({ ...sliderForm, btnText: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Button Link</label>
                <input
                  type="text"
                  required
                  value={sliderForm.btnLink}
                  onChange={(e) => setSliderForm({ ...sliderForm, btnLink: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Display Order</label>
              <input
                type="number"
                required
                min={1}
                value={sliderForm.order}
                onChange={(e) => setSliderForm({ ...sliderForm, order: Number(e.target.value) })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Save Slide
            </button>
          </form>
        </div>

        {/* Sliders list */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Homepage Slider Carousel</h3>
          </div>
          <div className="space-y-3">
            {sliders.sort((a, b) => a.order - b.order).map((slide) => (
              <div key={slide.id} className="p-4 border border-slate-200 rounded-xl flex items-center gap-4 hover:border-slate-350">
                <div className="w-20 h-14 rounded-lg bg-cover bg-center bg-slate-100 border shrink-0" style={{ backgroundImage: `url(${slide.image})` }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-[#0F2C59]/10 text-[#0F2C59] px-2 py-0.5 rounded font-mono">Order {slide.order}</span>
                    <h4 className="text-xs font-bold text-slate-805 truncate">{slide.title}</h4>
                  </div>
                  <p className="text-[10px] text-slate-450 truncate mt-0.5">{slide.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteSlider(slide.id)}
                  className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-100 shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderPages() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Page Editor Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit lg:col-span-1">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Create/Modify Page</h3>
          </div>
          <form onSubmit={handleSavePage} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Page Title</label>
              <input
                type="text"
                required
                value={pageForm.title}
                onChange={(e) => setPageForm({ ...pageForm, title: e.target.value, slug: pageForm.slug || e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-") })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Url Slug</label>
              <input
                type="text"
                required
                value={pageForm.slug}
                onChange={(e) => setPageForm({ ...pageForm, slug: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Page Content</label>
              <textarea
                required
                rows={6}
                value={pageForm.content}
                onChange={(e) => setPageForm({ ...pageForm, content: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3 text-xs text-slate-900 outline-none font-mono leading-relaxed"
              ></textarea>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Status</label>
              <select
                value={pageForm.status}
                onChange={(e) => setPageForm({ ...pageForm, status: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Save Page
            </button>
          </form>
        </div>

        {/* CMS Page Registry */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">CMS Pages Registry</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Title / Route</th>
                  <th className="py-3 px-4">Last Modified</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cmsPages.map((pg) => (
                  <tr key={pg.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800">
                      <div>{pg.title}</div>
                      <span className="text-[10px] text-slate-400 font-medium font-mono">/{pg.slug}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-505 font-medium">{pg.lastModified}</td>
                    <td className="py-3 px-4">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        pg.status === "Published" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                        "bg-amber-50 text-amber-600 border border-amber-100"
                      }`}>
                        {pg.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right flex justify-end gap-1.5 mt-2">
                      <button
                        onClick={() => {
                          setPageForm(pg);
                          setEditingItemId(pg.id);
                        }}
                        className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-200"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeletePage(pg.id, pg.title)}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-650 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-100"
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
  }

  function renderFAQ() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* FAQ Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <HelpCircle className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Modify FAQ Node</h3>
          </div>
          <form onSubmit={handleSaveFaq} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Question</label>
              <input
                type="text"
                required
                value={faqForm.question}
                onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Answer Details</label>
              <textarea
                required
                rows={3}
                value={faqForm.answer}
                onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl p-3 text-xs text-slate-900 outline-none leading-relaxed"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Category</label>
                <input
                  type="text"
                  required
                  value={faqForm.category}
                  onChange={(e) => setFaqForm({ ...faqForm, category: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Status</label>
                <select
                  value={faqForm.status}
                  onChange={(e) => setFaqForm({ ...faqForm, status: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Save FAQ Item
            </button>
          </form>
        </div>

        {/* FAQs list */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Helpdesk FAQs Registry</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.id} className="p-4 border border-slate-200 rounded-xl hover:border-slate-350 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase mr-2">{f.category}</span>
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      f.status === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                    }`}>{f.status}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        setFaqForm(f);
                        setEditingItemId(f.id);
                      }}
                      className="p-1 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteFaq(f.id)}
                      className="p-1 hover:bg-red-50 text-slate-400 hover:text-red-650 rounded transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-800">Q: {f.question}</h4>
                <p className="text-[11px] text-slate-550 leading-relaxed font-medium">A: {f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderTransactions() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-[#0F2C59]" />
            Transactions Registry Ledger
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-3 px-4">TX ID</th>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-slate-800">{tx.id}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-[#0F2C59]">{tx.orderId}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{tx.customerName}</td>
                  <td className="py-3 px-4 text-slate-505 font-medium">{tx.gateway}</td>
                  <td className="py-3 px-4 font-extrabold text-slate-900">৳{tx.amount.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      tx.status === "Success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                      tx.status === "Pending" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                      "bg-red-50 text-red-600 border border-red-100"
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-1">
                      {tx.status !== "Success" && (
                        <button
                          onClick={() => handleUpdateTransactionStatus(tx.id, "Success")}
                          className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[9px] font-bold uppercase transition-colors"
                        >
                          Approve
                        </button>
                      )}
                      {tx.status !== "Failed" && (
                        <button
                          onClick={() => handleUpdateTransactionStatus(tx.id, "Failed")}
                          className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded text-[9px] font-bold uppercase transition-colors"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderPaymentMethods() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-[#0F2C59]" />
            B2B Active Payment Channels
          </h3>
        </div>
        <p className="text-slate-500 text-xs font-medium">
          Toggle which payment gateway APIs or offline options are visible to corporate purchasing officers at B2B checkouts.
        </p>
        <div className="divide-y divide-slate-100">
          {paymentMethods.map((pm) => (
            <div key={pm.id} className="py-4 flex items-center justify-between hover:bg-slate-50/30 px-2 rounded-xl transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 select-none">
                  {pm.logo}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    {pm.name}
                    <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.2 rounded border ${
                      pm.enabled ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-100 text-slate-400"
                    }`}>
                      {pm.enabled ? "Enabled" : "Disabled"}
                    </span>
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">{pm.description}</p>
                </div>
              </div>
              <button
                onClick={() => handleTogglePaymentMethod(pm.id)}
                className="p-1 cursor-pointer focus:outline-none transition-transform"
              >
                {pm.enabled ? (
                  <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
                ) : (
                  <ToggleLeft className="w-9 h-9 text-slate-300" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderRefundRequests() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <RotateCcw className="w-4 h-4 text-red-500" />
            Refund Claims Ledger
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-3 px-4">Claim ID</th>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Refund Reason</th>
                <th className="py-3 px-4">Refund Value</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {refundRequests.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-slate-800">{ref.id}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-[#0F2C59]">{ref.orderId}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{ref.customerName}</td>
                  <td className="py-3 px-4 text-slate-500 font-medium italic">"{ref.reason}"</td>
                  <td className="py-3 px-4 font-extrabold text-slate-900">৳{ref.amount.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      ref.status === "Approved" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                      ref.status === "Pending" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                      "bg-red-50 text-red-600 border border-red-100"
                    }`}>
                      {ref.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {ref.status === "Pending" && (
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => handleUpdateRefundStatus(ref.id, "Approved")}
                          className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[9px] font-bold uppercase transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleUpdateRefundStatus(ref.id, "Rejected")}
                          className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded text-[9px] font-bold uppercase transition-colors"
                        >
                          Reject
                        </button>
                      </div>
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

  function renderContactMessages() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#0F2C59]" />
            B2B RFPs & Contact Messages
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-3 px-4">Sender Details</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Message Body</th>
                <th className="py-3 px-4">Received</th>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {contactMessages.map((msg) => (
                <tr key={msg.id} className={`hover:bg-slate-50/50 ${msg.status === "Unread" ? "bg-blue-50/20 font-semibold" : ""}`}>
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-805">{msg.name}</div>
                    <span className="text-[10px] text-slate-450 font-medium font-mono block select-all">{msg.email}</span>
                  </td>
                  <td className="py-3 px-4 text-[#0F2C59] font-bold">{msg.subject}</td>
                  <td className="py-3 px-4 text-slate-600 max-w-xs truncate" title={msg.message}>
                    "{msg.message}"
                  </td>
                  <td className="py-3 px-4 text-slate-450 font-medium">{msg.date}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[8px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      msg.status === "Unread" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-500"
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right flex justify-end gap-1 mt-2">
                    {msg.status === "Unread" && (
                      <button
                        onClick={() => handleMarkMessageRead(msg.id)}
                        className="p-1 hover:bg-slate-100 text-[#0F2C59] rounded border border-slate-200"
                        title="Mark Read"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="p-1 hover:bg-red-50 text-red-500 rounded border border-transparent hover:border-red-100"
                      title="Delete Message"
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
  }

  function renderAdminUsers() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scaleUp">
        {/* Admin Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <UserCheck className="w-5 h-5 text-[#0F2C59]" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {editingItemId ? "Edit Admin Node" : "Register Admin Staff"}
            </h3>
          </div>
          <form onSubmit={handleSaveAdminUser} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed"
                value={adminUserForm.name}
                onChange={(e) => setAdminUserForm({ ...adminUserForm, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Node Address</label>
              <input
                type="email"
                required
                disabled={!!editingItemId}
                placeholder="operator@silicon.com"
                value={adminUserForm.email}
                onChange={(e) => setAdminUserForm({ ...adminUserForm, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Assigned Role</label>
                <select
                  value={adminUserForm.role}
                  onChange={(e) => setAdminUserForm({ ...adminUserForm, role: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                >
                  {rolesConfig.map(role => (
                    <option key={role.name} value={role.name}>{role.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Status</label>
                <select
                  value={adminUserForm.status}
                  onChange={(e) => setAdminUserForm({ ...adminUserForm, status: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Save Admin
            </button>
          </form>
        </div>

        {/* Admin Staff Matrix */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Superadmin & Operator Accounts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <th className="py-3 px-4">Operator Name</th>
                  <th className="py-3 px-4">Node email</th>
                  <th className="py-3 px-4">Role Assigned</th>
                  <th className="py-3 px-4">Security state</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adminUsers.map((user) => (
                  <tr key={user.email} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-805">{user.name}</td>
                    <td className="py-3 px-4 text-slate-505 font-mono select-all">{user.email}</td>
                    <td className="py-3 px-4 text-[#0F2C59] font-bold">{user.role}</td>
                    <td className="py-3 px-4">
                      <span className={`text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                        user.status === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                      }`}>{user.status}</span>
                    </td>
                    <td className="py-3 px-4 text-right flex justify-end gap-1.5 mt-2">
                      <button
                        onClick={() => {
                          setAdminUserForm(user);
                          setEditingItemId(user.email);
                        }}
                        className="p-1.5 hover:bg-slate-100 text-slate-500 rounded border border-slate-200"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteAdminUser(user.email)}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-650 rounded border border-transparent hover:border-red-100"
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
  }

  function renderRolesPermissions() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#0F2C59]" />
            Security Roles & Permissions Configuration Grid
          </h3>
        </div>
        <p className="text-slate-500 text-xs font-medium">
          Modify telemetry override toggles for individual system operators. Changes propagate instantly to active B2B staff sessions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6">Role Title</th>
                <th className="py-4 px-6">Catalog Controls</th>
                <th className="py-4 px-6">Marketing & Promos</th>
                <th className="py-4 px-6">Ledger / Payments</th>
                <th className="py-4 px-6">Security Configs</th>
                <th className="py-4 px-6">API Integrations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {rolesConfig.map((role) => (
                <tr key={role.name} className="hover:bg-slate-50/50">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-805">{role.name}</div>
                    <span className="text-[9px] text-slate-400 font-medium block mt-1">{role.description}</span>
                  </td>
                  {["products", "marketing", "payments", "security", "integrations"].map((permKey) => (
                    <td key={permKey} className="py-4 px-6">
                      <button
                        onClick={() => handleTogglePermission(role.name, permKey)}
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors cursor-pointer ${
                          role.permissions[permKey]
                            ? "bg-[#0F2C59] border-[#0F2C59] text-white"
                            : "bg-white border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {role.permissions[permKey] && <Check className="w-3 h-3" />}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderActivityLogs() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#0F2C59]" />
            Administrative Activity Logs
          </h3>
          <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#0F2C59]/10 text-[#0F2C59]">
            Realtime Audit Trail
          </span>
        </div>
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 divide-y divide-slate-100">
          {activities.map((act) => (
            <div key={act.id} className="pt-3 pb-1 flex justify-between gap-4 text-xs font-medium text-slate-650">
              <div className="flex gap-2.5 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C59] mt-1.5 shrink-0" />
                <span>{act.text}</span>
              </div>
              <span className="text-[10px] text-slate-450 font-bold shrink-0">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderLoginActivity() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#0F2C59]" />
            Login Authentication Audits
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-3 px-4">Operator Email</th>
                <th className="py-3 px-4">IP Address</th>
                <th className="py-3 px-4">Browser / Device Environment</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4 text-right">Result Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loginActivity.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-805">{log.email}</td>
                  <td className="py-3 px-4 font-mono text-[10px] select-all font-semibold text-slate-600">{log.ip}</td>
                  <td className="py-3 px-4 text-slate-505 font-medium">{log.browser}</td>
                  <td className="py-3 px-4 text-slate-450 font-bold">{log.timestamp}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`text-[8px] font-extrabold uppercase py-0.5 px-2 rounded-full ${
                      log.status === "Success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                    }`}>{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderTFA() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-scaleUp">
        {/* Settings */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0F2C59]" />
              Two-Factor Authentication (2FA) Setup
            </h3>
          </div>
          <form onSubmit={handleSaveTfa} className="space-y-3.5">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div>
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Two-Factor Authentication</label>
                <span className="text-[9px] text-slate-450 font-medium">Protect your admin accounts with 2FA verification.</span>
              </div>
              <button
                type="button"
                onClick={() => setTfaConfig({ ...tfaConfig, enabled: !tfaConfig.enabled })}
                className="focus:outline-none transition-transform"
              >
                {tfaConfig.enabled ? (
                  <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
                ) : (
                  <ToggleLeft className="w-9 h-9 text-slate-300" />
                )}
              </button>
            </div>
            {tfaConfig.enabled && (
              <div className="space-y-1.5 animate-scaleUp">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Verification Phone Number</label>
                <input
                  type="text"
                  required
                  placeholder="+880 17..."
                  value={tfaConfig.phone}
                  onChange={(e) => setTfaConfig({ ...tfaConfig, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
            )}
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Commit MFA Security Parameters
            </button>
          </form>
        </div>

        {/* Backup Keys */}
        {tfaConfig.enabled && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-scaleUp">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Emergency Recovery Keys</h4>
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
              If you lose access to your verification device, you can use these keys to authenticate. Keep them stored safely.
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs text-slate-700 font-bold bg-slate-50 p-4 border rounded-xl">
              {tfaConfig.backupCodes.map((code: string) => (
                <div key={code} className="p-2 bg-white border rounded text-center select-all">{code}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  function renderBackupRestore() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-scaleUp">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <HardDrive className="w-4 h-4 text-[#0F2C59]" />
            Database Backups & Snapshot Recovery
          </h3>
          <button
            onClick={handleCreateBackup}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm shadow-[#0F2C59]/10"
          >
            <Plus className="w-3.5 h-3.5" />
            Snapshot Database
          </button>
        </div>
        <p className="text-slate-500 text-xs font-medium">
          Create full encrypted JSON backups of the catalogs, logs, and settings to prevent database loss.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <th className="py-3 px-4">Backup Filename</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4 text-right">Recovery Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {backups.map((bak) => (
                <tr key={bak.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-slate-805 select-all">{bak.filename}</td>
                  <td className="py-3 px-4 font-semibold text-slate-600">{bak.size}</td>
                  <td className="py-3 px-4 text-slate-450 font-bold">{bak.date}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleRestoreBackup(bak.filename)}
                      className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-250 hover:bg-emerald-200 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Restore Snapshot
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderGoogleAnalytics() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 animate-scaleUp max-w-xl">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-indigo-605" />
            Google Analytics Integration
          </h3>
        </div>
        <form onSubmit={handleSaveGA} className="space-y-3.5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">GA4 Measurement ID</label>
            <input
              type="text"
              required
              placeholder="G-XXXXXXXXXX"
              value={googleAnalytics.measurementId}
              onChange={(e) => setGoogleAnalytics({ ...googleAnalytics, measurementId: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none font-mono"
            />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Enabled Tracking</label>
              <span className="text-[9px] text-slate-450 font-medium">Allow Google tag manager scripts to inject in frontend.</span>
            </div>
            <button
              type="button"
              onClick={() => setGoogleAnalytics({ ...googleAnalytics, enabled: !googleAnalytics.enabled })}
              className="focus:outline-none transition-transform"
            >
              {googleAnalytics.enabled ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Track Conversions</label>
              <span className="text-[9px] text-slate-450 font-medium">Record purchasing behavior and custom B2B cart goals.</span>
            </div>
            <button
              type="button"
              onClick={() => setGoogleAnalytics({ ...googleAnalytics, trackConversions: !googleAnalytics.trackConversions })}
              className="focus:outline-none transition-transform"
            >
              {googleAnalytics.trackConversions ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Save GA Integrations
          </button>
        </form>
      </div>
    );
  }

  function renderFacebookPixel() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 animate-scaleUp max-w-xl">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-pink-600" />
            Meta Facebook Pixel Integration
          </h3>
        </div>
        <form onSubmit={handleSavePixel} className="space-y-3.5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Pixel ID Code</label>
            <input
              type="text"
              required
              placeholder="e.g. 1234567890"
              value={facebookPixel.pixelId}
              onChange={(e) => setFacebookPixel({ ...facebookPixel, pixelId: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none font-mono"
            />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Enabled Tracking</label>
              <span className="text-[9px] text-slate-450 font-medium">Inject Meta Pixel scripts on standard client routers.</span>
            </div>
            <button
              type="button"
              onClick={() => setFacebookPixel({ ...facebookPixel, enabled: !facebookPixel.enabled })}
              className="focus:outline-none transition-transform"
            >
              {facebookPixel.enabled ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Track Add to Cart Events</label>
              <span className="text-[9px] text-slate-450 font-medium">Report client cart adds to Meta Ads Manager platform.</span>
            </div>
            <button
              type="button"
              onClick={() => setFacebookPixel({ ...facebookPixel, trackAddtoCart: !facebookPixel.trackAddtoCart })}
              className="focus:outline-none transition-transform"
            >
              {facebookPixel.trackAddtoCart ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Save Meta Integrations
          </button>
        </form>
      </div>
    );
  }

  function renderGatewayApis() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 animate-scaleUp max-w-xl">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Key className="w-4 h-4 text-slate-700" />
            Secure Payment Gateway API Credentials
          </h3>
        </div>
        <form onSubmit={handleSaveGatewayApis} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">SSLCommerz Store ID</label>
              <input
                type="text"
                required
                value={gatewayApis.sslStoreId}
                onChange={(e) => setGatewayApis({ ...gatewayApis, sslStoreId: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">SSL Store Password</label>
              <input
                type="password"
                required
                value={gatewayApis.sslStorePassword}
                onChange={(e) => setGatewayApis({ ...gatewayApis, sslStorePassword: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">bKash App API Key</label>
              <input
                type="text"
                required
                value={gatewayApis.bkashAppKey}
                onChange={(e) => setGatewayApis({ ...gatewayApis, bkashAppKey: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">bKash App Secret Key</label>
              <input
                type="password"
                required
                value={gatewayApis.bkashAppSecret}
                onChange={(e) => setGatewayApis({ ...gatewayApis, bkashAppSecret: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Sandbox Testing Mode</label>
              <span className="text-[9px] text-slate-450 font-medium">Bypass real checkout fees and trigger simulated transactions.</span>
            </div>
            <button
              type="button"
              onClick={() => setGatewayApis({ ...gatewayApis, sandboxMode: !gatewayApis.sandboxMode })}
              className="focus:outline-none transition-transform"
            >
              {gatewayApis.sandboxMode ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Save Gateway API Credentials
          </button>
        </form>
      </div>
    );
  }

  function renderSMS() {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 animate-scaleUp max-w-xl">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-violet-650" />
            SMS Gateway dispatch Setup
          </h3>
        </div>
        <form onSubmit={handleSaveSMS} className="space-y-3.5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">SMS Gateway Provider</label>
            <select
              value={smsGateway.provider}
              onChange={(e) => setSmsGateway({ ...smsGateway, provider: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2.5 px-3.5 text-xs text-slate-905 outline-none font-semibold"
            >
              <option value="Greenweb BD">Greenweb SMS BD (Default)</option>
              <option value="Teletalk SMS">Teletalk Government SMS Corporate API</option>
              <option value="Twilio Global">Twilio B2B API gateway</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">SMS API Secret Key</label>
            <input
              type="text"
              required
              value={smsGateway.apiKey}
              onChange={(e) => setSmsGateway({ ...smsGateway, apiKey: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Approved Sender ID Mask</label>
            <input
              type="text"
              required
              value={smsGateway.senderId}
              onChange={(e) => setSmsGateway({ ...smsGateway, senderId: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0F2C59] rounded-xl py-2 px-3 text-xs text-slate-900 outline-none font-semibold"
            />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Enabled Dispatch</label>
              <span className="text-[9px] text-slate-450 font-medium">Automatically dispatch B2B order notifications via SMS.</span>
            </div>
            <button
              type="button"
              onClick={() => setSmsGateway({ ...smsGateway, enabled: !smsGateway.enabled })}
              className="focus:outline-none transition-transform"
            >
              {smsGateway.enabled ? (
                <ToggleRight className="w-9 h-9 text-[#0F2C59]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-300" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Save SMS Integrations
          </button>
        </form>
      </div>
    );
  }

  function renderGeneric() {
    const handleRunSimulation = () => {
      addActivity(`Executed diagnostic test on channel: ${pageTitle}`);
      setSuccessMsg("Simulation completed successfully! Diagnostic results synced to the activity log.");
    };

    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-2xl space-y-6 animate-scaleUp">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <SlidersIcon className="w-5 h-5 text-[#0F2C59]" />
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
              <h4 className="text-xs font-bold text-slate-850">Activate Telemetry Logs</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Stream direct access queries for this module to operations log</p>
            </div>
            <button
              onClick={() => {
                setGenericToggle(!genericToggle);
                addActivity(`Toggled status of ${pageTitle} log telemetry.`);
              }}
              className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer ${
                genericToggle ? "bg-emerald-500" : "bg-slate-300"
              }`}
            >
              <div className={`w-4.5 h-4.5 bg-white rounded-full transition-transform ${
                genericToggle ? "translate-x-5.5" : "translate-x-0"
              }`}></div>
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider block">Access Key Override</label>
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
  }

  // --- CORE VIEW ROUTER ---
  const getActiveView = () => {
    // 1. AI Tools
    if (primarySection === "ai") {
      if (subSection === "description") return renderAIDescription();
      if (subSection === "seo") return renderAISeo();
      if (subSection === "sales-insights") return renderAiInsights();
    }
    // 2. Marketing
    if (primarySection === "marketing") {
      if (subSection === "coupons") return renderCoupons();
      if (subSection === "campaigns") return renderCampaigns();
      if (subSection === "flash") return renderFlashSales();
      if (subSection === "featured") return renderFeaturedProducts();
    }
    // 3. Content Management
    if (primarySection === "content") {
      if (subSection === "banner") return renderHomepageBanner();
      if (subSection === "sliders") return renderSliders();
      if (subSection === "pages") return renderPages();
      if (subSection === "faq") return renderFAQ();
    }
    // 4. Payments
    if (primarySection === "payments") {
      if (subSection === "transactions") return renderTransactions();
      if (subSection === "methods") return renderPaymentMethods();
      if (subSection === "refunds") return renderRefundRequests();
    }
    // 5. Suppliers
    if (primarySection === "suppliers") {
      return renderSuppliers();
    }
    // 6. Support
    if (primarySection === "support") {
      if (subSection === "messages") return renderContactMessages();
      if (subSection === "tickets") return renderSupportTickets();
      if (subSection === "chat") return renderLiveChat();
    }
    // 7. Staff Management
    if (primarySection === "staff") {
      if (subSection === "users") return renderAdminUsers();
      if (subSection === "roles") return renderRolesPermissions();
      if (subSection === "activities") return renderActivityLogs();
    }
    // 8. Security
    if (primarySection === "security") {
      if (subSection === "login-activity") return renderLoginActivity();
      if (subSection === "tfa") return renderTFA();
      if (subSection === "backup") return renderBackupRestore();
    }
    // 9. Integrations
    if (primarySection === "integrations") {
      if (subSection === "google-analytics") return renderGoogleAnalytics();
      if (subSection === "facebook-pixel") return renderFacebookPixel();
      if (subSection === "payments") return renderGatewayApis();
      if (subSection === "sms") return renderSMS();
    }

    // Default Fallback
    return renderGeneric();
  };

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800 tracking-widest uppercase">{pageTitle} Panel</h2>
          <p className="text-slate-505 text-xs mt-1">
            Console node: /dashboard/{slug.join("/")}
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-650 rounded-xl text-[10px] font-bold uppercase tracking-wider border border-slate-200 transition-colors cursor-pointer"
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

      {/* Error Notification Alert */}
      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-800 text-xs font-semibold leading-none shadow-sm animate-scaleUp">
          <AlertCircle className="w-4 h-4 text-red-650 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Active Component */}
      <div>{getActiveView()}</div>
    </div>
  );
}
