"use client";

import { useState, useEffect } from "react";
import { BlogPost, blogPostsData } from "@/data/mockData";
import { ShopProduct, shopProducts } from "@/data/mockProducts";

export interface Activity {
  id: string;
  text: string;
  time: string;
}

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
}

export interface OrderTimeline {
  status: string;
  time: string;
  note: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  total: number;
  paymentMethod: string;
  paymentStatus: "Paid" | "Pending" | "Failed" | "Refunded";
  fulfillmentStatus: "Unfulfilled" | "Processing" | "Completed" | "Cancelled";
  items: OrderItem[];
  shippingAddress: string;
  trackingNumber?: string;
  timeline: OrderTimeline[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  status: "Active" | "Inactive";
  ordersCount: number;
  totalSpent: number;
  loyaltyTier: "Bronze" | "Silver" | "Gold" | "Platinum";
  loyaltyPoints: number;
  reviewsCount: number;
  wishlistCount: number;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  productsSupplied: string[];
  status: "Active" | "Inactive";
}

export interface Coupon {
  id: string;
  code: string;
  discountType: "percentage" | "fixed";
  value: number;
  expiryDate: string;
  status: "Active" | "Expired" | "Scheduled";
  usageCount: number;
}

export interface GeneralSettings {
  siteName: string;
  siteEmail: string;
  currency: string;
  taxRate: number;
  shippingFee: number;
  twoFactorAuth: boolean;
  backupInterval: string;
}

// Initial Mock Data Sets
const initialOrders: Order[] = [
  {
    id: "SCL-ORD-1001",
    customerName: "MD Nasir Feroz",
    customerEmail: "nasir@silicon.com",
    customerPhone: "+880 1711-223344",
    date: "2026-05-20T10:30:00Z",
    total: 420000,
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    fulfillmentStatus: "Completed",
    shippingAddress: "House 12, Road 5, Dhanmondi, Dhaka",
    trackingNumber: "DHL-SCL-98210",
    items: [
      { productId: "hpe-proliant-dl380", title: "HPE ProLiant DL380 Gen10 Server", price: 420000, quantity: 1 }
    ],
    timeline: [
      { status: "Order Placed", time: "2026-05-20 10:30 AM", note: "Customer placed the order via bank transfer." },
      { status: "Payment Verified", time: "2026-05-20 11:15 AM", note: "Accounts department confirmed bank receipt." },
      { status: "Processing Completed", time: "2026-05-21 02:00 PM", note: "Hardware diagnostics and burn-in test passed." },
      { status: "Shipped", time: "2026-05-22 09:00 AM", note: "Handed over to DHL Express." }
    ]
  },
  {
    id: "SCL-ORD-1002",
    customerName: "Tasnim Rahman",
    customerEmail: "tasnim@gmail.com",
    customerPhone: "+880 1822-998877",
    date: "2026-05-22T14:15:00Z",
    total: 342000,
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    fulfillmentStatus: "Processing",
    shippingAddress: "Apt 4B, Building 24, Gulshan-2, Dhaka",
    items: [
      { productId: "cisco-catalyst-9300", title: "Cisco Catalyst 9300 Series Switch", price: 342000, quantity: 1 }
    ],
    timeline: [
      { status: "Order Placed", time: "2026-05-22 02:15 PM", note: "SSLCommerz transaction ID tx_882910." },
      { status: "Processing Started", time: "2026-05-23 09:30 AM", note: "Firmware setup and port configuration in progress." }
    ]
  },
  {
    id: "SCL-ORD-1003",
    customerName: "Anik Hasan",
    customerEmail: "anik@outlook.com",
    customerPhone: "+880 1912-345678",
    date: "2026-05-23T11:00:00Z",
    total: 504000,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    fulfillmentStatus: "Unfulfilled",
    shippingAddress: "Sector 4, Road 11, Uttara, Dhaka",
    items: [
      { productId: "dell-poweredge-r750", title: "Dell PowerEdge R750 Rack Server", price: 504000, quantity: 1 }
    ],
    timeline: [
      { status: "Order Placed", time: "2026-05-23 11:00 AM", note: "Awaiting supervisor confirmation for high-value COD." }
    ]
  },
  {
    id: "SCL-ORD-1004",
    customerName: "Rafiqul Islam",
    customerEmail: "rafiq@yahoo.com",
    customerPhone: "+880 1515-554433",
    date: "2026-05-18T09:00:00Z",
    total: 78000,
    paymentMethod: "Mobile Banking (bKash)",
    paymentStatus: "Failed",
    fulfillmentStatus: "Cancelled",
    shippingAddress: "Wari, Dhaka",
    items: [
      { productId: "mikrotik-ccr1016", title: "Mikrotik CCR1016-12G Router", price: 78000, quantity: 1 }
    ],
    timeline: [
      { status: "Order Attempt", time: "2026-05-18 09:00 AM", note: "bKash gateway reported timeout. Transaction failed." },
      { status: "Cancelled", time: "2026-05-18 09:30 AM", note: "Automatically cancelled due to lack of payment." }
    ]
  },
  {
    id: "SCL-ORD-1005",
    customerName: "Naila Zaman",
    customerEmail: "naila@silicon.com",
    customerPhone: "+880 1777-665544",
    date: "2026-05-15T16:45:00Z",
    total: 1020000,
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    fulfillmentStatus: "Completed",
    shippingAddress: "Banani, Dhaka",
    trackingNumber: "FEDEX-88390",
    items: [
      { productId: "ibm-flashsystem-5200", title: "IBM FlashSystem 5200", price: 1020000, quantity: 1 }
    ],
    timeline: [
      { status: "Order Placed", time: "2026-05-15 04:45 PM", note: "Order registered." },
      { status: "Paid", time: "2026-05-16 10:00 AM", note: "Bank deposit cleared." },
      { status: "Shipped", time: "2026-05-17 11:00 AM", note: "Delivered to FedEx." }
    ]
  }
];

const initialCustomers: Customer[] = [
  { id: "cust-1", name: "MD Nasir Feroz", email: "nasir@silicon.com", phone: "+880 1711-223344", joinedDate: "2025-01-10", status: "Active", ordersCount: 1, totalSpent: 420000, loyaltyTier: "Platinum", loyaltyPoints: 4200, reviewsCount: 3, wishlistCount: 5 },
  { id: "cust-2", name: "Tasnim Rahman", email: "tasnim@gmail.com", phone: "+880 1822-998877", joinedDate: "2025-02-15", status: "Active", ordersCount: 1, totalSpent: 342000, loyaltyTier: "Gold", loyaltyPoints: 3420, reviewsCount: 1, wishlistCount: 2 },
  { id: "cust-3", name: "Anik Hasan", email: "anik@outlook.com", phone: "+880 1912-345678", joinedDate: "2025-03-01", status: "Active", ordersCount: 1, totalSpent: 504000, loyaltyTier: "Platinum", loyaltyPoints: 5040, reviewsCount: 0, wishlistCount: 8 },
  { id: "cust-4", name: "Rafiqul Islam", email: "rafiq@yahoo.com", phone: "+880 1515-554433", joinedDate: "2025-03-12", status: "Inactive", ordersCount: 1, totalSpent: 78000, loyaltyTier: "Silver", loyaltyPoints: 780, reviewsCount: 0, wishlistCount: 0 },
  { id: "cust-5", name: "Naila Zaman", email: "naila@silicon.com", phone: "+880 1777-665544", joinedDate: "2025-04-05", status: "Active", ordersCount: 1, totalSpent: 1020000, loyaltyTier: "Platinum", loyaltyPoints: 10200, reviewsCount: 4, wishlistCount: 12 }
];

const initialSuppliers: Supplier[] = [
  { id: "sup-1", name: "HP Enterprise Bangladesh", contactPerson: "Masud Rana", email: "masud@hpe.com.bd", phone: "+880 1711-889900", productsSupplied: ["Compute", "Storage"], status: "Active" },
  { id: "sup-2", name: "Cisco Systems Asia", contactPerson: "Sarah Connor", email: "sarah@cisco.com", phone: "+65 6778-9900", productsSupplied: ["Networking"], status: "Active" },
  { id: "sup-3", name: "Dell Technologies BD", contactPerson: "Imran Khan", email: "imran@dell.com.bd", phone: "+880 1911-778899", productsSupplied: ["Compute"], status: "Active" }
];

const initialCoupons: Coupon[] = [
  { id: "cop-1", code: "SILICON10", discountType: "percentage", value: 10, expiryDate: "2026-12-31", status: "Active", usageCount: 42 },
  { id: "cop-2", code: "SERVER50K", discountType: "fixed", value: 50000, expiryDate: "2026-09-30", status: "Active", usageCount: 12 },
  { id: "cop-3", code: "WELCOME5", discountType: "percentage", value: 5, expiryDate: "2026-06-30", status: "Active", usageCount: 85 }
];

const defaultSettings: GeneralSettings = {
  siteName: "Silicon Computing Ltd",
  siteEmail: "info@silicon.com.bd",
  currency: "BDT",
  taxRate: 15,
  shippingFee: 2000,
  twoFactorAuth: false,
  backupInterval: "Daily"
};

export function useAdminState() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [settings, setSettings] = useState<GeneralSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  // Initialize and load from local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedBlogs = localStorage.getItem("scl_blogs");
        const storedProducts = localStorage.getItem("scl_products");
        const storedActivities = localStorage.getItem("scl_activities");
        const storedOrders = localStorage.getItem("scl_orders");
        const storedCustomers = localStorage.getItem("scl_customers");
        const storedSuppliers = localStorage.getItem("scl_suppliers");
        const storedCoupons = localStorage.getItem("scl_coupons");
        const storedSettings = localStorage.getItem("scl_settings");

        if (storedBlogs) {
          setBlogs(JSON.parse(storedBlogs));
        } else {
          localStorage.setItem("scl_blogs", JSON.stringify(blogPostsData));
          setBlogs(blogPostsData);
        }

        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        } else {
          localStorage.setItem("scl_products", JSON.stringify(shopProducts));
          setProducts(shopProducts);
        }

        if (storedOrders) {
          setOrders(JSON.parse(storedOrders));
        } else {
          localStorage.setItem("scl_orders", JSON.stringify(initialOrders));
          setOrders(initialOrders);
        }

        if (storedCustomers) {
          setCustomers(JSON.parse(storedCustomers));
        } else {
          localStorage.setItem("scl_customers", JSON.stringify(initialCustomers));
          setCustomers(initialCustomers);
        }

        if (storedSuppliers) {
          setSuppliers(JSON.parse(storedSuppliers));
        } else {
          localStorage.setItem("scl_suppliers", JSON.stringify(initialSuppliers));
          setSuppliers(initialSuppliers);
        }

        if (storedCoupons) {
          setCoupons(JSON.parse(storedCoupons));
        } else {
          localStorage.setItem("scl_coupons", JSON.stringify(initialCoupons));
          setCoupons(initialCoupons);
        }

        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        } else {
          localStorage.setItem("scl_settings", JSON.stringify(defaultSettings));
          setSettings(defaultSettings);
        }

        if (storedActivities) {
          setActivities(JSON.parse(storedActivities));
        } else {
          const defaultLogs: Activity[] = [
            { id: "1", text: "Dashboard initialized in local mock database mode", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            { id: "2", text: "Successfully loaded default system Catalogs", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ];
          localStorage.setItem("scl_activities", JSON.stringify(defaultLogs));
          setActivities(defaultLogs);
        }
      } catch (err) {
        console.error("Failed to load mock data from localStorage", err);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const saveBlogs = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_blogs", JSON.stringify(newBlogs));
    }
  };

  const saveProducts = (newProducts: ShopProduct[]) => {
    setProducts(newProducts);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_products", JSON.stringify(newProducts));
    }
  };

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_orders", JSON.stringify(newOrders));
    }
  };

  const saveCustomers = (newCustomers: Customer[]) => {
    setCustomers(newCustomers);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_customers", JSON.stringify(newCustomers));
    }
  };

  const saveSuppliers = (newSuppliers: Supplier[]) => {
    setSuppliers(newSuppliers);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_suppliers", JSON.stringify(newSuppliers));
    }
  };

  const saveCoupons = (newCoupons: Coupon[]) => {
    setCoupons(newCoupons);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_coupons", JSON.stringify(newCoupons));
    }
  };

  const saveSettings = (newSettings: GeneralSettings) => {
    setSettings(newSettings);
    if (typeof window !== "undefined") {
      localStorage.setItem("scl_settings", JSON.stringify(newSettings));
    }
  };

  const addActivity = (text: string) => {
    const newAct: Activity = {
      id: Date.now().toString(),
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    };
    setActivities((prev) => {
      const updated = [newAct, ...prev].slice(0, 30);
      if (typeof window !== "undefined") {
        localStorage.setItem("scl_activities", JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Blog CRUD actions
  const addBlog = (blog: Omit<BlogPost, "id">) => {
    const generatedId = blog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") || `blog-${Date.now()}`;
      
    const newBlog: BlogPost = { ...blog, id: generatedId };
    const updated = [newBlog, ...blogs];
    saveBlogs(updated);
    addActivity(`Created blog post: "${newBlog.title}"`);
    return newBlog;
  };

  const updateBlog = (id: string, updatedFields: Partial<BlogPost>) => {
    const updated = blogs.map((b) => (b.id === id ? { ...b, ...updatedFields } : b));
    saveBlogs(updated);
    const existing = blogs.find((b) => b.id === id);
    addActivity(`Updated blog post: "${updatedFields.title || existing?.title}"`);
  };

  const deleteBlog = (id: string) => {
    const existing = blogs.find((b) => b.id === id);
    const updated = blogs.filter((b) => b.id !== id);
    saveBlogs(updated);
    addActivity(`Deleted blog post: "${existing?.title || id}"`);
  };

  // Product CRUD actions
  const addProduct = (product: Omit<ShopProduct, "id">) => {
    const generatedId = product.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") || `prod-${Date.now()}`;
      
    const newProduct: ShopProduct = { ...product, id: generatedId };
    const updated = [newProduct, ...products];
    saveProducts(updated);
    addActivity(`Uploaded new product: "${newProduct.title}"`);
    return newProduct;
  };

  const updateProduct = (id: string, updatedFields: Partial<ShopProduct>) => {
    const updated = products.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
    saveProducts(updated);
    const existing = products.find((p) => p.id === id);
    addActivity(`Updated product catalog: "${updatedFields.title || existing?.title}"`);
  };

  const deleteProduct = (id: string) => {
    const existing = products.find((p) => p.id === id);
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
    addActivity(`Deleted product catalog item: "${existing?.title || id}"`);
  };

  // Order actions
  const addOrder = (order: Omit<Order, "id" | "timeline">) => {
    const orderId = `SCL-ORD-${1000 + orders.length + 1}`;
    const newOrder: Order = {
      ...order,
      id: orderId,
      timeline: [{ status: "Order Placed", time: new Date().toLocaleString(), note: "Manual order created via admin panel." }]
    };
    const updated = [newOrder, ...orders];
    saveOrders(updated);
    addActivity(`Created manual order: ${orderId}`);
    return newOrder;
  };

  const updateOrder = (id: string, updatedFields: Partial<Order>) => {
    const updated = orders.map((o) => {
      if (o.id === id) {
        const changes: Partial<Order> = { ...updatedFields };
        const newTimeline = [...o.timeline];
        if (updatedFields.fulfillmentStatus && updatedFields.fulfillmentStatus !== o.fulfillmentStatus) {
          newTimeline.push({
            status: `Fulfillment: ${updatedFields.fulfillmentStatus}`,
            time: new Date().toLocaleString(),
            note: `Status updated from ${o.fulfillmentStatus} to ${updatedFields.fulfillmentStatus}.`
          });
        }
        if (updatedFields.paymentStatus && updatedFields.paymentStatus !== o.paymentStatus) {
          newTimeline.push({
            status: `Payment: ${updatedFields.paymentStatus}`,
            time: new Date().toLocaleString(),
            note: `Payment updated from ${o.paymentStatus} to ${updatedFields.paymentStatus}.`
          });
        }
        return { ...o, ...changes, timeline: newTimeline };
      }
      return o;
    });
    saveOrders(updated);
    addActivity(`Updated Order status for ${id}`);
  };

  // Customer actions
  const updateCustomer = (id: string, updatedFields: Partial<Customer>) => {
    const updated = customers.map((c) => (c.id === id ? { ...c, ...updatedFields } : c));
    saveCustomers(updated);
    const existing = customers.find((c) => c.id === id);
    addActivity(`Updated Customer info for "${existing?.name}"`);
  };

  // Inventory actions
  const adjustStock = (productId: string, quantity: number, status: "In Stock" | "Low Stock" | "Out of Stock") => {
    const updated = products.map((p) => {
      if (p.id === productId) {
        return { ...p, stockStatus: status };
      }
      return p;
    });
    saveProducts(updated);
    const target = products.find((p) => p.id === productId);
    addActivity(`Adjusted stock status of "${target?.title}" to ${status}`);
  };

  const resetAllData = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("scl_blogs");
      localStorage.removeItem("scl_products");
      localStorage.removeItem("scl_orders");
      localStorage.removeItem("scl_customers");
      localStorage.removeItem("scl_suppliers");
      localStorage.removeItem("scl_coupons");
      localStorage.removeItem("scl_settings");
      localStorage.removeItem("scl_activities");
      
      setBlogs(blogPostsData);
      setProducts(shopProducts);
      setOrders(initialOrders);
      setCustomers(initialCustomers);
      setSuppliers(initialSuppliers);
      setCoupons(initialCoupons);
      setSettings(defaultSettings);
      
      const resetLog: Activity[] = [
        { id: Date.now().toString(), text: "Database catalogs reset to default settings", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ];
      setActivities(resetLog);
      
      localStorage.setItem("scl_blogs", JSON.stringify(blogPostsData));
      localStorage.setItem("scl_products", JSON.stringify(shopProducts));
      localStorage.setItem("scl_orders", JSON.stringify(initialOrders));
      localStorage.setItem("scl_customers", JSON.stringify(initialCustomers));
      localStorage.setItem("scl_suppliers", JSON.stringify(initialSuppliers));
      localStorage.setItem("scl_coupons", JSON.stringify(initialCoupons));
      localStorage.setItem("scl_settings", JSON.stringify(defaultSettings));
      localStorage.setItem("scl_activities", JSON.stringify(resetLog));
    }
  };

  return {
    blogs,
    products,
    activities,
    orders,
    customers,
    suppliers,
    coupons,
    settings,
    loading,
    addBlog,
    updateBlog,
    deleteBlog,
    addProduct,
    updateProduct,
    deleteProduct,
    addOrder,
    updateOrder,
    updateCustomer,
    adjustStock,
    saveSettings,
    saveSuppliers,
    saveCoupons,
    addActivity,
    resetAllData
  };
}
