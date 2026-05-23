export interface ShopProduct {
  id: string;
  title: string;
  category: "Compute" | "Networking" | "Storage" | "Software";
  brand: string;
  price: number;
  image: string;
  rating: number;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  shortDesc: string;
  features: string[];
}

export const shopProducts: ShopProduct[] = [
  {
    id: "hpe-proliant-dl380",
    title: "HPE ProLiant DL380 Gen10 Server",
    category: "Compute",
    brand: "HPE",
    price: 420000,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    stockStatus: "In Stock",
    shortDesc: "Adaptable for diverse workloads and environments, the secure 2P 2U HPE ProLiant DL380 Gen10 delivers world-class performance.",
    features: ["Dual Intel Xeon Scalable Processors", "Up to 3TB RAM Support", "Integrated Lights-Out (iLO 5)", "Redundant Power Supplies"]
  },
  {
    id: "cisco-catalyst-9300",
    title: "Cisco Catalyst 9300 Series Switch",
    category: "Networking",
    brand: "Cisco",
    price: 342000,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    stockStatus: "In Stock",
    shortDesc: "Lead your network transformation with Cisco's most advanced stackable enterprise switching platform.",
    features: ["48-Port PoE+", "UADP 2.0 ASIC", "Encrypted Traffic Analytics", "Wi-Fi 6 Support Ready"]
  },
  {
    id: "dell-poweredge-r750",
    title: "Dell PowerEdge R750 Rack Server",
    category: "Compute",
    brand: "Dell",
    price: 504000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    stockStatus: "Low Stock",
    shortDesc: "Enterprise server powered by 3rd Generation Intel Xeon Scalable processors to address demanding workloads.",
    features: ["PCIe Gen 4.0 Support", "Up to 24 NVMe Drives", "iDRAC9 Enterprise", "Liquid Cooling Options"]
  },
  {
    id: "ibm-flashsystem-5200",
    title: "IBM FlashSystem 5200",
    category: "Storage",
    brand: "IBM",
    price: 1020000,
    image: "https://images.unsplash.com/photo-1606130456676-e10db7497ecb?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    stockStatus: "In Stock",
    shortDesc: "Compact, powerful storage solution designed to provide enterprise capabilities to businesses of all sizes.",
    features: ["End-to-End NVMe", "IBM Storage Insights", "1U Rack Configuration", "AI-Driven Tiering"]
  },
  {
    id: "mikrotik-ccr1016",
    title: "Mikrotik CCR1016-12G Router",
    category: "Networking",
    brand: "Mikrotik",
    price: 78000,
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    stockStatus: "In Stock",
    shortDesc: "Industrial grade router with a cutting edge 16 core CPU capable of processing millions of packets per second.",
    features: ["16-Core Tilera CPU", "12x Gigabit Ethernet", "Color LCD Touchscreen", "1U Rackmount"]
  },
  {
    id: "oracle-db-enterprise",
    title: "Oracle Database Enterprise License",
    category: "Software",
    brand: "Oracle",
    price: 5700000,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    stockStatus: "In Stock",
    shortDesc: "The world’s #1 enterprise database, enabling customers to securely manage mission-critical transactional data.",
    features: ["Active Data Guard", "Real Application Clusters", "Advanced Security", "In-Memory Analytics"]
  },
  {
    id: "lenovo-thinksystem",
    title: "Lenovo ThinkSystem SR650 V2",
    category: "Compute",
    brand: "Lenovo",
    price: 372000,
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    stockStatus: "Out of Stock",
    shortDesc: "The ideal 2-socket, 2U rack server for small businesses up to large enterprises requiring industry-leading reliability.",
    features: ["AnyBay Drive Routing", "XClarity Management", "Intel Optane Support", "High-Efficiency Titanium PSUs"]
  },
  {
    id: "broadcom-symantec",
    title: "Symantec Endpoint Protection",
    category: "Software",
    brand: "Broadcom",
    price: 6500,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    stockStatus: "In Stock",
    shortDesc: "Comprehensive defense against malware and targeted attacks for physical and virtual endpoints.",
    features: ["Machine Learning Prevention", "Behavioral Isolation", "Zero-Day Exploit Protection", "Cloud-Managed Console"]
  }
];
