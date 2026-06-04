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
    "id": "hpe-proliant-dl380",
    "title": "HPE ProLiant DL380 Gen10 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 420000,
    "image": "/placeholder.png",
    "rating": 4.9,
    "stockStatus": "In Stock",
    "shortDesc": "Adaptable for diverse workloads and environments, the secure 2P 2U HPE ProLiant DL380 Gen10 delivers world-class performance.",
    "features": [
      "Dual Intel Xeon Scalable Processors",
      "Up to 3TB RAM Support",
      "Integrated Lights-Out (iLO 5)",
      "Redundant Power Supplies"
    ]
  },
  {
    "id": "cisco-catalyst-9300",
    "title": "Cisco Catalyst 9300 Series Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 342000,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "Lead your network transformation with Cisco's most advanced stackable enterprise switching platform.",
    "features": [
      "48-Port PoE+",
      "UADP 2.0 ASIC",
      "Encrypted Traffic Analytics",
      "Wi-Fi 6 Support Ready"
    ]
  },
  {
    "id": "dell-poweredge-r750",
    "title": "Dell PowerEdge R750 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 504000,
    "image": "/placeholder.png",
    "rating": 4.9,
    "stockStatus": "Low Stock",
    "shortDesc": "Enterprise server powered by 3rd Generation Intel Xeon Scalable processors to address demanding workloads.",
    "features": [
      "PCIe Gen 4.0 Support",
      "Up to 24 NVMe Drives",
      "iDRAC9 Enterprise",
      "Liquid Cooling Options"
    ]
  },
  {
    "id": "ibm-flashsystem-5200",
    "title": "IBM FlashSystem 5200",
    "category": "Storage",
    "brand": "IBM",
    "price": 1020000,
    "image": "/placeholder.png",
    "rating": 4.7,
    "stockStatus": "In Stock",
    "shortDesc": "Compact, powerful storage solution designed to provide enterprise capabilities to businesses of all sizes.",
    "features": [
      "End-to-End NVMe",
      "IBM Storage Insights",
      "1U Rack Configuration",
      "AI-Driven Tiering"
    ]
  },
  {
    "id": "mikrotik-ccr1016",
    "title": "Mikrotik CCR1016-12G Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 78000,
    "image": "/placeholder.png",
    "rating": 4.6,
    "stockStatus": "In Stock",
    "shortDesc": "Industrial grade router with a cutting edge 16 core CPU capable of processing millions of packets per second.",
    "features": [
      "16-Core Tilera CPU",
      "12x Gigabit Ethernet",
      "Color LCD Touchscreen",
      "1U Rackmount"
    ]
  },
  {
    "id": "oracle-db-enterprise",
    "title": "Oracle Database Enterprise License",
    "category": "Software",
    "brand": "Oracle",
    "price": 5700000,
    "image": "/placeholder.png",
    "rating": 4.9,
    "stockStatus": "In Stock",
    "shortDesc": "The world’s #1 enterprise database, enabling customers to securely manage mission-critical transactional data.",
    "features": [
      "Active Data Guard",
      "Real Application Clusters",
      "Advanced Security",
      "In-Memory Analytics"
    ]
  },
  {
    "id": "lenovo-thinksystem",
    "title": "Lenovo ThinkSystem SR650 V2",
    "category": "Compute",
    "brand": "Lenovo",
    "price": 372000,
    "image": "/placeholder.png",
    "rating": 4.7,
    "stockStatus": "Out of Stock",
    "shortDesc": "The ideal 2-socket, 2U rack server for small businesses up to large enterprises requiring industry-leading reliability.",
    "features": [
      "AnyBay Drive Routing",
      "XClarity Management",
      "Intel Optane Support",
      "High-Efficiency Titanium PSUs"
    ]
  },
  {
    "id": "broadcom-symantec",
    "title": "Symantec Endpoint Protection",
    "category": "Software",
    "brand": "Broadcom",
    "price": 6500,
    "image": "/placeholder.png",
    "rating": 4.5,
    "stockStatus": "In Stock",
    "shortDesc": "Comprehensive defense against malware and targeted attacks for physical and virtual endpoints.",
    "features": [
      "Machine Learning Prevention",
      "Behavioral Isolation",
      "Zero-Day Exploit Protection",
      "Cloud-Managed Console"
    ]
  },
  {
    "id": "dell-poweredge-r7725xd-rack-server",
    "title": "Dell PowerEdge R7725xd Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 632932,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R7725xd Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-c6615-rack-server",
    "title": "Dell PowerEdge C6615 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 359364,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge C6615 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r360-rack-server",
    "title": "Dell PowerEdge R360 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 338238,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R360 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r260-rack-server",
    "title": "Dell PowerEdge R260 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 693050,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R260 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r7615-rack-server-1",
    "title": "Dell PowerEdge R7615 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 475021,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R7615 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r6615-rack-server-1",
    "title": "Dell PowerEdge R6615 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 374685,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R6615 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r470",
    "title": "Dell PowerEdge R470 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 455374,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R470 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r7715-rack-server",
    "title": "Dell PowerEdge R7715 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 372972,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R7715 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r6715-server",
    "title": "Dell PowerEdge R6715 Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 413414,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R6715 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r570-rack-server",
    "title": "Dell PowerEdge R570 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 621558,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Data Center Rack Server",
      "Model: PowerEdge R570 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xa-server",
    "title": "Dell PowerEdge R760xa Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 507159,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge R760xa Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe8640",
    "title": "Dell PowerEdge XE8640 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 179205,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE8640 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe9640-rack-server",
    "title": "Dell PowerEdge XE9640 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 421258,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE9640 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe9680-rack-server",
    "title": "Dell PowerEdge XE9680 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 255740,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE9680 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe9685l-rack-server",
    "title": "Dell PowerEdge XE9685L Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 677022,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE9685L Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe7740-server-1",
    "title": "Dell PowerEdge XE7740 Rcak Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 725672,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE7740 Rcak Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-xe7745-rack-server",
    "title": "Dell PowerEdge XE7745 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 389904,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ai server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: AI Server",
      "Model: PowerEdge XE7745 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-tanzu",
    "title": "VMware Tanzu",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 98042,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Enterprise Software & Licensing",
      "Model: VMware Tanzu",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-live-recovery",
    "title": "VMware Live Recovery",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 77734,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: VMware Live Recovery",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-avi-load-balancer",
    "title": "VMware Avi Load Balancer",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 63517,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: VMware Avi Load Balancer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-private-ai-foundation-with-nvidia",
    "title": "VMware Private AI Foundation with NVIDIA",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 26275,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: VMware Private AI Foundation with NVIDIA",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "data-services-by-data-services-manager",
    "title": "Data Services by Data Services Manager",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 69528,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Data Services by Data Services Manager",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vcf-automation",
    "title": "VCF Automation",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 103868,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: VCF Automation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vcfvmware-aria-operations",
    "title": "VCF(VMware Aria Operations)",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 24548,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: VCF(VMware Aria Operations)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "network-by-nsx",
    "title": "Network By NSX",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 478377,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Network By NSX",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "storage-by-vsan",
    "title": "Storage by vSAN",
    "category": "Storage",
    "brand": "Silicon Computing Ltd.",
    "price": 245026,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Enterprise Storage Drive",
      "Model: Storage by vSAN",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "compute-by-vsphere",
    "title": "Compute by vSphere",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 148534,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Enterprise Software & Licensing",
      "Model: Compute by vSphere",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-networking-instant-on-switch-20p-gigabit-cl4-4p-gigabit-cl6-poe-2p-10gbt-2p-sfp-370w-1960",
    "title": "HPE Networking Instant On Switch 20p Gigabit CL4 4p Gigabit CL6 PoE 2p 10GBT 2p SFP+ 370W 1960",
    "category": "Networking",
    "brand": "Aruba",
    "price": 100868,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: HPE Networking Instant On Switch 20p Gigabit CL4 4p Gigabit CL6 PoE 2p 10GBT 2p SFP+ 370W 1960",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-networking-instant-on-switch-24p-gigabit-cl4-poe-4p-sfp-195w-1930",
    "title": "HPE Networking Instant On Switch 24p Gigabit CL4 PoE 4p SFP+ 195W 1930",
    "category": "Networking",
    "brand": "Aruba",
    "price": 373955,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: HPE Networking Instant On Switch 24p Gigabit CL4 PoE 4p SFP+ 195W 1930",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-networking-instant-on-switch-24p-gigabit-cl4-poe-4p-sfp-370w-1930",
    "title": "HPE Networking Instant On Switch 24p Gigabit CL4 PoE 4p SFP+ 370W 1930",
    "category": "Networking",
    "brand": "Aruba",
    "price": 346012,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: HPE Networking Instant On Switch 24p Gigabit CL4 PoE 4p SFP+ 370W 1930",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-aruba-networking-ap-503-rw-10-pack-dual-radio-2x2-2-wi-fi-6-campus-access-point",
    "title": "HPE ARUBA NETWORKING AP-503 (RW) 10-PACK DUAL RADIO 2X2:2 WI-FI 6 CAMPUS ACCESS POINT",
    "category": "Networking",
    "brand": "Aruba",
    "price": 238122,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Wireless Collaboration Access Point",
      "Model: HPE ARUBA NETWORKING AP-503 (RW) 10-PACK DUAL RADIO 2X2:2 WI-FI 6 CAMPUS ACCESS POINT",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "aruba-2930f-24g-4sfp-switch",
    "title": "ARUBA 2930F 24G 4SFP SWITCH",
    "category": "Networking",
    "brand": "Aruba",
    "price": 289752,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: ARUBA 2930F 24G 4SFP SWITCH",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-aruba-networking-cx-6000-24g-class4-poe-4sfp-370w-switch",
    "title": "HPE Aruba Networking CX 6000 24G Class4 PoE 4SFP 370W Switch",
    "category": "Networking",
    "brand": "Aruba",
    "price": 382806,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: HPE  Networking CX 6000 24G Class4 PoE 4SFP 370W Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-aruba-networking-cx-6000-24g-4sfp-switch",
    "title": "HPE Aruba Networking CX 6000 24G 4SFP Switch",
    "category": "Networking",
    "brand": "Aruba",
    "price": 108062,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: HPE  Networking CX 6000 24G 4SFP Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-aruba-networking-ap-515-rw-dual-radio-4x4-2x2-802-11ax-internal-antennas-unified-campus-ap",
    "title": "HPE Aruba Networking AP-515 (RW) Dual Radio 4x4/2x2 802.11ax Internal Antennas Unified Campus AP",
    "category": "Networking",
    "brand": "Aruba",
    "price": 115944,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Wireless Collaboration Access Point",
      "Model: HPE  Networking AP-515 (RW) Dual Radio 4x4/2x2 802.11ax Internal Antennas Unified Campus AP",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "aruba-2930f-24g-poe-4sfp-switch",
    "title": "ARUBA 2930F 24G POE+ 4SFP SWITCH",
    "category": "Networking",
    "brand": "Aruba",
    "price": 222607,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Aruba certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Aruba",
      "Device Type: Managed Switch",
      "Model: ARUBA 2930F 24G POE+ 4SFP SWITCH",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x32-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 709479,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x32-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 452859,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x28-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X28 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 266031,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X28 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x28-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X28 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 418624,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X28 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x24-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 281424,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x24-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 328343,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 525514,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 340926,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x8-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 495605,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x8-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 197122,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x32-core-gold-rack-server",
    "title": "Dell PowerEdge R760xs (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 728441,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x28-core-gold-rack-server",
    "title": "Dell PowerEdge R760xs (2X28 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 660668,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X28 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x24-core-gold-rack-server",
    "title": "Dell PowerEdge R760xs (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 325974,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-gold-rack-server",
    "title": "Dell PowerEdge R760xs (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 512079,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x8-core-gold-rack-server",
    "title": "Dell PowerEdge R760xs (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 625884,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760xs (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x20-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 225452,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x20-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 430084,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 481809,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 440303,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x12-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X12 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 410550,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X12 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x10-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760xs (2X10 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 331023,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X10 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x10-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X10 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 715947,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X10 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x8-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 612937,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x8-core-silver-rack-server",
    "title": "Dell PowerEdge R760xs (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 461799,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x20-core-silver-rack-server",
    "title": "Dell PowerEdge R760xs (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 581162,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x16-core-silver-rack-server",
    "title": "Dell PowerEdge R760xs (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 468582,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vsphere-essential-plus-kit",
    "title": "vSphere Essential Plus Kit",
    "category": "Software",
    "brand": "VMware",
    "price": 161304,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Enterprise Software & Licensing",
      "Model: vSphere Essential Plus Kit",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x12-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760xs (2X12 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 371310,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X12 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x10-core-silver-rack-server",
    "title": "Dell PowerEdge R760xs (2X10 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 564949,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X10 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-2x12-core-silver-rack-server",
    "title": "Dell PowerEdge R760xs (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 432279,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760xs (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-standard-1",
    "title": "VMware vSphere Standard",
    "category": "Software",
    "brand": "VMware",
    "price": 248954,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Enterprise Software & Licensing",
      "Model: vSphere Standard",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x20-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760 (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 315486,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x12-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760 (2X12 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 298798,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X12 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x8-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760 (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 694007,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x16-core-silver-rack-server-2",
    "title": "Dell PowerEdge R760 (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 323698,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x32-core-gold-rack-server-3",
    "title": "Dell PowerEdge R760 (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 301566,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x32-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760 (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 232787,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x24-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760 (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 495620,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x24-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760 (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 445646,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x8-core-gold-rack-server",
    "title": "Dell PowerEdge R760 (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 605615,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x16-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760 (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 665663,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x16-core-gold-rack-server",
    "title": "Dell PowerEdge R760 (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 198370,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x8-core-gold-rack-server-2",
    "title": "Dell PowerEdge R760 (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 568435,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x8-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760 (2X8 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 693662,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X8 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x20-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760 (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 504516,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x16-core-silver-rack-server",
    "title": "Dell PowerEdge R760 (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 404355,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x8-core-silver-rack-server",
    "title": "Dell PowerEdge R760 (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 479279,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x12-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760 (2X12 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 669317,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X12 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x64-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X64 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 359746,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X64 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x60-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X60 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 610928,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X60 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x56-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X56 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 617046,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X56 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x52-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X52 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 150456,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X52 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x48-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X48 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 565303,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X48 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x40-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X40 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 527597,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X40 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x36-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X36 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 180322,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X36 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x32-core-platinum-rack-server",
    "title": "Dell PowerEdge R760 (2X32 Core Platinum) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 286432,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate platinum featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Platinum",
      "Model: PowerEdge R760 (2X32 Core Platinum) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x32-core-gold-rack-server-1",
    "title": "Dell PowerEdge R760 (2X32 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 703604,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X32 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x28-core-gold-rack-server",
    "title": "Dell PowerEdge R760 (2X28 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 181007,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X28 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x24-core-gold-rack-server",
    "title": "Dell PowerEdge R760 (2X24 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 533840,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X24 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x32-core-gold-rack-server",
    "title": "Dell PowerEdge R760 (2X16 Core Gold) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 335398,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R760 (2X16 Core Gold) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x20-core-silver-rack-server",
    "title": "Dell PowerEdge R760 (2X20 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 423114,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X20 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x16-core-silver-rack-server-1",
    "title": "Dell PowerEdge R760 (2X16 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 202263,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X16 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "bdcom-s1006-4p-4-port-poe-switch",
    "title": "BDCOM S1006-4P 4-Port PoE Switch",
    "category": "Networking",
    "brand": "BDCOM",
    "price": 384114,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original BDCOM certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: BDCOM",
      "Device Type: Managed Switch",
      "Model: S1006-4P 4-Port PoE Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "bdcom-s1008-d-8-ports-unmanaged-switch",
    "title": "BDCOM S1008-D 8 Ports Unmanaged Switch",
    "category": "Networking",
    "brand": "BDCOM",
    "price": 365922,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original BDCOM certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: BDCOM",
      "Device Type: Managed Switch",
      "Model: S1008-D 8 Ports Unmanaged Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "bdcom-s2900-48p6x-48-port-poe-gigabit-managed-switch",
    "title": "BDCOM S2900-48P6X 48-Port POE Gigabit Managed Switch",
    "category": "Networking",
    "brand": "BDCOM",
    "price": 410228,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original BDCOM certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: BDCOM",
      "Device Type: Managed Switch",
      "Model: S2900-48P6X 48-Port POE Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x12-core-silver-rack-server",
    "title": "Dell PowerEdge R760 (2X12 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 155503,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X12 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760-2x-8-core-silver-rack-server",
    "title": "Dell PowerEdge R760 (2X8 Core Silver) Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 648825,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R760 (2X8 Core Silver) Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-1150",
    "title": "Cisco Firepower FPR-1150",
    "category": "Networking",
    "brand": "Cisco",
    "price": 183508,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-1150",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-1140",
    "title": "Cisco Firepower FPR-1140",
    "category": "Networking",
    "brand": "Cisco",
    "price": 162960,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-1140",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-1120",
    "title": "Cisco Firepower FPR-1120",
    "category": "Networking",
    "brand": "Cisco",
    "price": 420316,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-1120",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-1010",
    "title": "Cisco Firepower FPR-1010",
    "category": "Networking",
    "brand": "Cisco",
    "price": 204812,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-1010",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-9300-sm-56-x-3",
    "title": "Cisco Firepower 9300 SM-56 x 3",
    "category": "Networking",
    "brand": "Cisco",
    "price": 383381,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower 9300 SM-56 x 3",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-9300-sm-56",
    "title": "Cisco Firepower 9300 SM-56",
    "category": "Networking",
    "brand": "Cisco",
    "price": 241977,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower 9300 SM-56",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-9300-sm-48",
    "title": "Cisco Firepower FPR- 9300 SM-48",
    "category": "Networking",
    "brand": "Cisco",
    "price": 322444,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR- 9300 SM-48",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-9300",
    "title": "Cisco Firepower FPR-9300 SM-40",
    "category": "Networking",
    "brand": "Cisco",
    "price": 311212,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-9300 SM-40",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-3140",
    "title": "Cisco Firepower FPR- 3140",
    "category": "Networking",
    "brand": "Cisco",
    "price": 119988,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR- 3140",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-frp-3130",
    "title": "Cisco Firepower FRP-3130",
    "category": "Networking",
    "brand": "Cisco",
    "price": 131141,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FRP-3130",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-3120",
    "title": "Cisco Firepower FPR-3120",
    "category": "Networking",
    "brand": "Cisco",
    "price": 151371,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-3120",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-3110",
    "title": "Cisco Firepower FPR-3110",
    "category": "Networking",
    "brand": "Cisco",
    "price": 166387,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-3110",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-3105",
    "title": "Cisco Firepower FPR-3105",
    "category": "Networking",
    "brand": "Cisco",
    "price": 439900,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-3105",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-frp-4145",
    "title": "Cisco Firepower FRP-4145",
    "category": "Networking",
    "brand": "Cisco",
    "price": 169865,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FRP-4145",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-4125",
    "title": "Cisco Firepower FPR-4125",
    "category": "Networking",
    "brand": "Cisco",
    "price": 422317,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-4125",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-4115",
    "title": "Cisco Firepower FPR-4115",
    "category": "Networking",
    "brand": "Cisco",
    "price": 92008,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-4115",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-3020-firewall",
    "title": "Palo Alto PA-3020 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 126669,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-3020 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-3050-firewall",
    "title": "Palo Alto PA-3050 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 151600,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-3050 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5020-firewall",
    "title": "Palo Alto PA-5020 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 292688,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5020 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "paloalto-pa-5050-firewall",
    "title": "PaloAlto PA-5050 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 308013,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PaloAlto PA-5050 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5060-firewall",
    "title": "Palo Alto PA-5060 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 379227,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5060 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5445-firewall",
    "title": "Palo Alto PA-5445 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 244150,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5445 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5440-firewall",
    "title": "Palo Alto PA-5440 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 412874,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5440 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5410-firewall",
    "title": "Palo Alto PA-5410 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 432758,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5410 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5420-firewall",
    "title": "Palo Alto PA-5420 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 265151,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5420 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5450-firewall",
    "title": "Palo Alto PA-5430 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 271280,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5430 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-3260-firewall",
    "title": "Palo Alto PA-3260 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 237811,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-3260 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-3250-firewall",
    "title": "Palo Alto PA-3250 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 386555,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-3250 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-3220-firewall",
    "title": "Palo Alto PA-3220 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 308785,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-3220 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5280-firewall",
    "title": "Palo Alto PA-5280 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 225507,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5280 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5260-firewall",
    "title": "Palo Alto PA-5260 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 327529,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5260 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5250-firewall",
    "title": "Palo Alto PA-5250 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 85635,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5250 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-5220-firewall",
    "title": "Palo Alto PA-5220 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 416956,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-5220 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-7000-dpc-a-firewall",
    "title": "Palo Alto PA-7000- DPC-A Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 160052,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-7000- DPC-A Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-7000-100gnpc-a-firewall",
    "title": "Palo Alto PA-7000-100GNPC-A Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 148557,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-7000-100GNPC-A Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-7050-firewall",
    "title": "Palo Alto PA-7050 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 331535,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-7050 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "palo-alto-pa-7080-firewall",
    "title": "Palo Alto PA-7080 Firewall",
    "category": "Networking",
    "brand": "Palo Alto",
    "price": 283219,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Palo Alto certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Palo Alto",
      "Device Type: Network Security Firewall",
      "Model: PA-7080 Firewall",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-4112",
    "title": "Cisco Firepower FPR-4112",
    "category": "Networking",
    "brand": "Cisco",
    "price": 428314,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-4112",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-sd-red-60",
    "title": "Sophos SD-RED 60",
    "category": "Networking",
    "brand": "Sophos",
    "price": 262654,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: B2B IT Solution",
      "Model: SD-RED 60",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-sd-red-20",
    "title": "Sophos SD-RED 20",
    "category": "Networking",
    "brand": "Sophos",
    "price": 92029,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: B2B IT Solution",
      "Model: SD-RED 20",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-7500",
    "title": "Sophos XGS 7500",
    "category": "Networking",
    "brand": "Sophos",
    "price": 197208,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 7500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-6500",
    "title": "Sophos XGS 6500",
    "category": "Networking",
    "brand": "Sophos",
    "price": 77670,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 6500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-5500",
    "title": "Sophos XGS 5500",
    "category": "Networking",
    "brand": "Sophos",
    "price": 249753,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 5500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-4500",
    "title": "Sophos XGS 4500",
    "category": "Networking",
    "brand": "Sophos",
    "price": 287327,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 4500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-4300",
    "title": "Sophos XGS 4300",
    "category": "Networking",
    "brand": "Sophos",
    "price": 91751,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 4300",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-3300",
    "title": "Sophos XGS 3300",
    "category": "Networking",
    "brand": "Sophos",
    "price": 221494,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 3300",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-3100",
    "title": "Sophos XGS 3100",
    "category": "Networking",
    "brand": "Sophos",
    "price": 287452,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 3100",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-107-107w",
    "title": "Sophos XGS 107 / 107w",
    "category": "Networking",
    "brand": "Sophos",
    "price": 232313,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 107 / 107w",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-87-87w",
    "title": "Sophos XGS 87/87w",
    "category": "Networking",
    "brand": "Sophos",
    "price": 141619,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 87/87w",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-136-136w",
    "title": "Sophos XGS 136/136w",
    "category": "Networking",
    "brand": "Sophos",
    "price": 390185,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 136/136w",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sophos-xgs-126-126w",
    "title": "Sophos XGS 126/126w",
    "category": "Networking",
    "brand": "Sophos",
    "price": 135379,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 126/126w",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "xgs-116-116w",
    "title": "Sophos XGS 116 / 116w",
    "category": "Networking",
    "brand": "Sophos",
    "price": 290368,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Sophos certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Sophos",
      "Device Type: Network Security Firewall",
      "Model: XGS 116 / 116w",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3001f-fg-3001f-dc",
    "title": "FG-3001F/FG-3001F-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 192864,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3001F/FG-3001F-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3000f-fg-3000f-dc",
    "title": "FG-3000F/FG-3000F-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 190381,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3000F/FG-3000F-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3201f",
    "title": "FG-3201F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 322198,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3201F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3200f",
    "title": "FG-3200F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 133276,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3200F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3501f",
    "title": "FG-3501F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 160217,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3501F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3500f",
    "title": "FG-3500F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 175854,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3500F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3701f",
    "title": "FG-3701F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 185518,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3701F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-3700f",
    "title": "FG-3700F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 200267,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-3700F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4201f-dc",
    "title": "FG-4201F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 286310,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4201F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4200f-dc",
    "title": "FG-4200F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 389527,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4200F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4401f-dc",
    "title": "FG 4401F/-DC",
    "category": "Compute",
    "brand": "FortiGate",
    "price": 691866,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG 4401F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4400f-dc",
    "title": "FG-4400F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 436701,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4400F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4801f-dc",
    "title": "FG-4801F-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 92050,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4801F-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4800f-dc",
    "title": "FG-4800F-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 255063,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4800F-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4801f",
    "title": "FG-4801F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 364850,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4801F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-4800",
    "title": "FG-4800F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 204984,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-4800F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-6501f-dc",
    "title": "FG-6501F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 259779,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-6501F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-6500f-dc",
    "title": "FG-6500F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 252118,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-6500F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-6301f-dc",
    "title": "FG-6301F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 224003,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-6301F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-6300f-dc",
    "title": "FG-6300F/-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 114832,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-6300F/-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fg-6001f",
    "title": "FG-6001F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 364000,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: FG-6001F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortigate-7081f-2-dc",
    "title": "FortiGate 7081F-2-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 308725,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: 7081F-2-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortigate-7081f-dc",
    "title": "FortiGate 7081F-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 159605,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: 7081F-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortigate-7121f-2-dc",
    "title": "FortiGate 7121F-2-DC",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 316521,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: 7121F-2-DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortigate-7081f",
    "title": "FortiGate-7081F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 393695,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: -7081F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortigate-7121f",
    "title": "FortiGate 7121F",
    "category": "Networking",
    "brand": "FortiGate",
    "price": 267322,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original FortiGate certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: FortiGate",
      "Device Type: B2B IT Solution",
      "Model: 7121F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "jabra-panacast-50-video-bar-system",
    "title": "Jabra PanaCast 50 Video Bar System",
    "category": "Networking",
    "brand": "Jabra",
    "price": 143433,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Jabra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Jabra",
      "Device Type: Wireless Collaboration Access Point",
      "Model: PanaCast 50 Video Bar System",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "jabra-panacast-50-room-system",
    "title": "Jabra PanaCast 50 Room System",
    "category": "Networking",
    "brand": "Jabra",
    "price": 153396,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Jabra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Jabra",
      "Device Type: Wireless Collaboration Access Point",
      "Model: PanaCast 50 Room System",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "financial",
    "title": "Financial",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 717527,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Financial",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pharmaceutical",
    "title": "Pharmaceutical",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 184647,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Pharmaceutical",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "academic",
    "title": "Academic",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 260995,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Academic",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "manufacturing",
    "title": "Manufacturing",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 618838,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Manufacturing",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "banking",
    "title": "Banking",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 180612,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Banking",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "healthcare",
    "title": "Healthcare",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 393413,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Healthcare",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "learning-productivity-software",
    "title": "Learning & Productivity Software",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 20588,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate learning & productivity software featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Learning & Productivity Software",
      "Model: Learning & Productivity Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "accounting-software-1",
    "title": "Accounting Software",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 67198,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate accounting software featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Accounting Software",
      "Model: Accounting Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "supply-chain-management",
    "title": "Supply Chain Management Software",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 209591,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate supply chain management featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Supply Chain Management",
      "Model: Supply Chain Management Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "user-focused-software",
    "title": "User Focused Software",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 221745,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate user focused software featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: User Focused Software",
      "Model: User Focused Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "enterprise-process-management-software",
    "title": "Enterprise & Process Management Software",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 143243,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise & process management software featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Enterprise & Process Management Software",
      "Model: Enterprise & Process Management Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "api-development",
    "title": "API Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 31175,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate api development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: API Development",
      "Model: API Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "saas-development",
    "title": "SaaS Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 246123,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate saas development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: SaaS Development",
      "Model: SaaS Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cloud-development",
    "title": "Cloud Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 206432,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cloud development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Cloud Development",
      "Model: Cloud Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "database-development",
    "title": "Database Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 177112,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate database development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Database Development",
      "Model: Database Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mobile-app-development",
    "title": "Mobile App Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 151587,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate mobile app development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Mobile App Development",
      "Model: Mobile App Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "web-development",
    "title": "Web Development",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 93230,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate web development featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Web Development",
      "Model: Web Development",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "software-consulting",
    "title": "Software Consulting",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 68290,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software consulting featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Software Consulting",
      "Model: Software Consulting",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "security-monitoring-and-threat-detection",
    "title": "Security monitoring and threat detection",
    "category": "Networking",
    "brand": "Silicon Computing Ltd.",
    "price": 131264,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed security services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Security Services",
      "Model: Security monitoring and threat detection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "network-security-management",
    "title": "Network Security Management",
    "category": "Networking",
    "brand": "Silicon Computing Ltd.",
    "price": 311373,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed security services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Security Services",
      "Model: Network Security Management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "compliance-management",
    "title": "Compliance Management",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 41555,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed security services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Security Services",
      "Model: Compliance Management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vulnerability-management",
    "title": "Vulnerability management",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 179975,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed security services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Security Services",
      "Model: Vulnerability management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "security-infrastructure-planning",
    "title": "Security infrastructure planning",
    "category": "Networking",
    "brand": "Silicon Computing Ltd.",
    "price": 239415,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed security services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Security Services",
      "Model: Security infrastructure planning",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "container-management",
    "title": "Container management",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 195142,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate devops managed services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: DevOps Managed Services",
      "Model: Container management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "configuration-management",
    "title": "Configuration management",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 196307,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate devops managed services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: DevOps Managed Services",
      "Model: Configuration management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ci-cd-pipelines",
    "title": "CI/CD pipelines",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 724307,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate devops managed services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: DevOps Managed Services",
      "Model: CI/CD pipelines",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "iac-infrastructure-as-code",
    "title": "IaC (Infrastructure as Code)",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 564148,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate devops managed services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: DevOps Managed Services",
      "Model: IaC (Infrastructure as Code)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "application-security",
    "title": "Application security",
    "category": "Networking",
    "brand": "Silicon Computing Ltd.",
    "price": 288769,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed application services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Application Services",
      "Model: Application security",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "it-management-training-services",
    "title": "IT Management & Training services",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 137194,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed application services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Application Services",
      "Model: IT Management & Training services",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "application-improvement-initiatives",
    "title": "Application Improvement Initiatives",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 419679,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed application services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Application Services",
      "Model: Application Improvement Initiatives",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "application-troubleshooting",
    "title": "Application troubleshooting",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 331983,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed application services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Application Services",
      "Model: Application troubleshooting",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "application-performance-monitoring",
    "title": "Application Performance Monitoring",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 729498,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed application services featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Application Services",
      "Model: Application Performance Monitoring",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cloud-development-optimization",
    "title": "Cloud Development & Optimization",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 45988,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cloud automation featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Cloud Automation",
      "Model: Cloud Development & Optimization",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cloud-deployment",
    "title": "Cloud Deployment",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 279371,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cloud automation featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Cloud Automation",
      "Model: Cloud Deployment",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cloud-migration",
    "title": "Cloud Migration",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 320970,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cloud automation featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Cloud Automation",
      "Model: Cloud Migration",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cloud-consulting",
    "title": "Cloud Consulting",
    "category": "Software",
    "brand": "Silicon Computing Ltd.",
    "price": 95168,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cloud automation featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Cloud Automation",
      "Model: Cloud Consulting",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "network-infrasturcture-assessment",
    "title": "Network Infrastructure Assessment",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 327718,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate it infrastructure featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: IT Infrastructure",
      "Model: Network Infrastructure Assessment",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "storage-infrastructure-assessment",
    "title": "Storage Infrastructure Assessment",
    "category": "Storage",
    "brand": "Silicon Computing Ltd.",
    "price": 230713,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate it infrastructure featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: IT Infrastructure",
      "Model: Storage Infrastructure Assessment",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "server-infrastructure-assessment",
    "title": "Server infrastructure assessment",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 632040,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate it infrastructure featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: IT Infrastructure",
      "Model: Server infrastructure assessment",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-960gb-enterprise-sata-ssd",
    "title": "DELL EMC 960GB ENTERPRISE SATA SSD",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 119800,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Enterprise Storage Drive",
      "Model: DELL EMC 960GB ENTERPRISE SATA SSD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-960gb-enterprise-sas-ssd",
    "title": "DELL EMC 960GB ENTERPRISE SAS SSD",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 231525,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Enterprise Storage Drive",
      "Model: DELL EMC 960GB ENTERPRISE SAS SSD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-1-92-tb-enterprise-sata-ssd",
    "title": "DELL EMC 1.92 TB ENTERPRISE SATA SSD",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 93948,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Enterprise Storage Drive",
      "Model: DELL EMC 1.92 TB ENTERPRISE SATA SSD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "e-learning-app",
    "title": "E-Learning App",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 257297,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: E-Learning App",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "booking-and-ticketing-apps",
    "title": "Booking and Ticketing App",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 328899,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Booking and Ticketing App",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "m-commerce-app",
    "title": "Customize M-Commerce App",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 625694,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Customize M-Commerce App",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "healthcare-mobile-app",
    "title": "Healthcare Mobile App",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 231137,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Healthcare Mobile App",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mobile-banking-billing-app",
    "title": "Mobile Banking & Billing App",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 222812,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Mobile Banking & Billing App",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "web-apps",
    "title": "Web Apps",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 237401,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Web Apps",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ecommerce",
    "title": "E-commerce",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 572717,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: E-commerce",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "websites",
    "title": "Websites",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 742068,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Websites",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "web-portals",
    "title": "Web Portals",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 637531,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Web Portals",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "saas-ux-design",
    "title": "SaaS UX design",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 649672,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: SaaS UX design",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "web-mobile-app-ux-design",
    "title": "Web & mobile app UX design",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 660889,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Web & mobile app UX design",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ecommerce-ux-design",
    "title": "E-commerce UX design",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 250466,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: E-commerce UX design",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-2960-x-24-port-lan-lite-switch",
    "title": "Cisco Catalyst 2960-X 24 Port LAN Lite Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 339836,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: Catalyst 2960-X 24 Port LAN Lite Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-24p-4x-eu-24-port-gigabit-poe-managed-switch",
    "title": "Cisco CBS350-24P-4X-EU 24 Port Gigabit PoE+ Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 401869,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-24P-4X-EU 24 Port Gigabit PoE+ Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-c1000-24p-4g-l-24-port-gigabit-poe-switch",
    "title": "Cisco C1000-24P-4G-L 24 Port Gigabit POE Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 432344,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: C1000-24P-4G-L 24 Port Gigabit POE Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-24s-4g-eu-24-port-sfp-gigabit-managed-network-switch",
    "title": "Cisco CBS350-24S-4G-EU 24-Port SFP Gigabit Managed Network Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 168612,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-24S-4G-EU 24-Port SFP Gigabit Managed Network Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-48t-4g-eu-48-port-ge-gigabit-managed-switch",
    "title": "Cisco CBS350-48T-4G-EU 48 Port GE Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 351458,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-48T-4G-EU 48 Port GE Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf350-48p-k9-eu-48-port-10-100-managed-poe-network-switch",
    "title": "Cisco SF350-48P-K9-EU 48-Port 10/100 Managed PoE Network Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 376234,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: SF350-48P-K9-EU 48-Port 10/100 Managed PoE Network Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-24t-4x-eu-24-port-gigabit-managed-switch",
    "title": "Cisco CBS350-24T-4X-EU 24-Port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 104480,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-24T-4X-EU 24-Port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-24p-4g-eu-24-port-gigabit-poe-sfp-managed-switch",
    "title": "Cisco CBS350-24P-4G-EU 24-Port Gigabit PoE+ SFP Managed Switch",
    "category": "Networking",
    "brand": "Silicon Computing Ltd.",
    "price": 281482,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: Managed Switch",
      "Model: Cisco CBS350-24P-4G-EU 24-Port Gigabit PoE+ SFP Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-c1000-24t-4g-l-24-port-network-switch",
    "title": "Cisco Catalyst C1000-24T-4G-L 24-Port Network Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 271500,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: Catalyst C1000-24T-4G-L 24-Port Network Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-c1000fe-48t-4g-l-48-port-gigabit-managed-switch-1",
    "title": "Cisco C1000FE-48T-4G-L 48 Port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 193331,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: C1000FE-48T-4G-L 48 Port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-8s-e-2g-10-port-gigabit-managed-switch",
    "title": "Cisco CBS350-8S-E-2G 10-Port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 71710,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-8S-E-2G 10-Port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-16p-2g-uk-16-port-l3-ge-managed-poe-switch",
    "title": "Cisco CBS350-16P-2G-UK 16 Port L3 GE Managed PoE Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 226164,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-16P-2G-UK 16 Port L3 GE Managed PoE Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-c1000-48t-4g-l-48-gigabit-ethernet-network-switch",
    "title": "Cisco Catalyst C1000-48T-4G-L 48 Gigabit Ethernet Network Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 324302,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: Catalyst C1000-48T-4G-L 48 Gigabit Ethernet Network Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-24t-4g-eu-24-port-gigabit-managed-switch",
    "title": "Cisco CBS350-24T-4G-EU 24-Port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 212227,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-24T-4G-EU 24-Port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-c1000-16p-2g-l-16-port-poe-ethernet-managed-switch",
    "title": "Cisco Catalyst C1000-16P-2G-L 16-Port PoE Ethernet Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 302083,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: Catalyst C1000-16P-2G-L 16-Port PoE Ethernet Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf350-24p-k9-eu-24-port-10-100-poe-managed-switch",
    "title": "Cisco SF350-24P-K9-EU 24-Port 10/100 PoE Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 279338,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: SF350-24P-K9-EU 24-Port 10/100 PoE Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-8p-2g-eu-10-port-business-series-managed-network-switch",
    "title": "Cisco CBS350-8P-2G-EU 10-port Business Series Managed Network Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 330872,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-8P-2G-EU 10-port Business Series Managed Network Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs350-8p-2g-eu-8-port-ge-poe-gigabit-managed-switch",
    "title": "Cisco CBS350-8P-2G-EU 8-port GE PoE+ Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 115088,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: CBS350-8P-2G-EU 8-port GE PoE+ Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-c1000fe-24t-4g-l-catalyst-1000-series-24-port-managed-switch",
    "title": "Cisco C1000FE-24T-4G-L Catalyst 1000 Series 24-Port Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 290197,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Managed Switch",
      "Model: C1000FE-24T-4G-L Catalyst 1000 Series 24-Port Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs110-24t-eu-24-port-unmanaged-switch",
    "title": "Cisco CBS110-24T-EU 24 Port Unmanaged Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 200364,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unmanaged switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Unmanaged Switch",
      "Model: CBS110-24T-EU 24 Port Unmanaged Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-cbs110-8t-d-110-series-8-port-unmanaged-desktop-switch",
    "title": "Cisco CBS110-8T-D 110 Series 8 Port Unmanaged Desktop Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 285829,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unmanaged switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Unmanaged Switch",
      "Model: CBS110-8T-D 110 Series 8 Port Unmanaged Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf95d-08-as-8-port-unmanaged-desktop-switch",
    "title": "Cisco SF95D-08-AS 8-Port Unmanaged Desktop Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 221981,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unmanaged switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Unmanaged Switch",
      "Model: SF95D-08-AS 8-Port Unmanaged Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9516-switch",
    "title": "Cisco Nexus 9516 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 274904,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nexus 9500 series switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Nexus 9500 Series Switch",
      "Model: Nexus 9516 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9508-switch",
    "title": "Cisco Nexus 9508 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 292379,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nexus 9500 series switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Nexus 9500 Series Switch",
      "Model: Nexus 9508 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9504-switch",
    "title": "Cisco Nexus 9504 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 247881,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nexus 9500 series switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Nexus 9500 Series Switch",
      "Model: Nexus 9504 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-9408-switch",
    "title": "Nexus 9408 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 80813,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nexus 9400 series switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Nexus 9400 Series Switch",
      "Model: Nexus 9408 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93108tc-fx3-switch",
    "title": "Nexus 93108TC-FX3 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 164624,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93108TC-FX3 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-9348gc-fx3ph-switch",
    "title": "Nexus 9348GC-FX3PH Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 96689,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 9348GC-FX3PH Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-9348gc-fx3-switch",
    "title": "Nexus 9348GC-FX3 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 318963,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 9348GC-FX3 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93216tc-fx2-switch",
    "title": "Nexus 93216TC-FX2 Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 72659,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93216TC-FX2 Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93108tc-fx3p-switch-1",
    "title": "Nexus 93108TC-FX3P Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 95934,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93108TC-FX3P Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93108tc-fx3p-switch",
    "title": "Nexus 93108TC-FX3P Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 341259,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93108TC-FX3P Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93108tc-fx-switch",
    "title": "Nexus 93108TC-FX Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 153591,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93108TC-FX Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-9348gc-fxp-switch",
    "title": "Nexus 9348GC-FXP Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 342539,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 9348GC-FXP Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93108tc-ex-switch",
    "title": "Nexus 93108TC-EX Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 444706,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93108TC-EX Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nexus-93120tx-switch",
    "title": "Nexus 93120TX Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 402671,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300 1/10g baset switches featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300 1/10G BaseT Switches",
      "Model: Nexus 93120TX Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9332d-h2r-switch",
    "title": "Cisco Nexus 9332D-H2R Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 217524,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9332d-h2r switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9332D-H2R Switch",
      "Model: Nexus 9332D-H2R Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9332d-gx2b-switch",
    "title": "Cisco Nexus 9332D-GX2B Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 302735,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx2 series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX2 Series",
      "Model: Nexus 9332D-GX2B Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9348d-gx2a-switch",
    "title": "Cisco Nexus 9348D-GX2A Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 392632,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx2 series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX2 Series",
      "Model: Nexus 9348D-GX2A Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9364d-gx2a-switch",
    "title": "Cisco Nexus 9364D-GX2A Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 155837,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx2 series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX2 Series",
      "Model: Nexus 9364D-GX2A Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9364c-switch",
    "title": "Cisco Nexus 9364C Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 297172,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX Series",
      "Model: Nexus 9364C Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-93600cd-switch",
    "title": "Cisco Nexus 93600CD Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 271938,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX Series",
      "Model: Nexus 93600CD Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9316d-switch",
    "title": "Cisco Nexus 9316D Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 126054,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9300-gx series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9300-GX Series",
      "Model: Nexus 9316D Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "backup-exec-for-microsoft-azure",
    "title": "BACKUP EXEC FOR MICROSOFT AZURE",
    "category": "Software",
    "brand": "Veritas",
    "price": 135657,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate backup exce featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: Backup Exce",
      "Model: BACKUP EXEC FOR MICROSOFT AZURE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "backup-exec-for-microsoft-365",
    "title": "BACKUP EXEC FOR MICROSOFT 365",
    "category": "Software",
    "brand": "Veritas",
    "price": 162334,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate backup exce featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: Backup Exce",
      "Model: BACKUP EXEC FOR MICROSOFT 365",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "backup-exec-for-amazon-web-services",
    "title": "BACKUP EXEC FOR AMAZON WEB SERVICES",
    "category": "Software",
    "brand": "Veritas",
    "price": 23292,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate backup exce featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: Backup Exce",
      "Model: BACKUP EXEC FOR AMAZON WEB SERVICES",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "integrated-data-loss-prevention",
    "title": "Integrated Data Loss Prevention",
    "category": "Compute",
    "brand": "Trend Micro",
    "price": 447538,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Trend Micro certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Trend Micro",
      "Device Type: B2B IT Solution",
      "Model: Integrated Data Loss Prevention",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "f5-nginx-app-protect-dos",
    "title": "F5 NGINX App Protect DoS",
    "category": "Compute",
    "brand": "NGINX",
    "price": 318996,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: F5  App Protect DoS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rackstation-rs422",
    "title": "Synology RackStation RS422+",
    "category": "Compute",
    "brand": "Synology",
    "price": 575538,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: RackStation RS422+",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds2422",
    "title": "Synology DiskStation DS2422+",
    "category": "Compute",
    "brand": "Synology",
    "price": 179199,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: DiskStation DS2422+",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rackstation-rs2821rp",
    "title": "Synology RackStation RS2821RP+",
    "category": "Compute",
    "brand": "Synology",
    "price": 742184,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: RackStation RS2821RP+",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds1621xs",
    "title": "Synology DiskStation DS1621xs+",
    "category": "Compute",
    "brand": "Synology",
    "price": 333562,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: DiskStation DS1621xs+",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rackstation-rs4021xs",
    "title": "Synology RackStation RS4021xs+",
    "category": "Compute",
    "brand": "Synology",
    "price": 662954,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: RackStation RS4021xs+",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-sa3200d",
    "title": "Synology SA3200D",
    "category": "Compute",
    "brand": "Synology",
    "price": 354661,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: SA3200D",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-sa6400",
    "title": "Synology SA6400",
    "category": "Compute",
    "brand": "Synology",
    "price": 214416,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: SA6400",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-sa3400",
    "title": "Synology SA3400",
    "category": "Compute",
    "brand": "Silicon Computing Ltd.",
    "price": 408959,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Silicon Computing Ltd. certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Silicon Computing Ltd.",
      "Device Type: B2B IT Solution",
      "Model: Synology SA3400",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-high-density-hd6500",
    "title": "Synology High Density HD6500",
    "category": "Compute",
    "brand": "Synology",
    "price": 244159,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: High Density HD6500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-flashstation-fs2500",
    "title": "Synology FlashStation FS2500",
    "category": "Compute",
    "brand": "Synology",
    "price": 217216,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: FlashStation FS2500",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-flashstation-fs3410",
    "title": "Synology FlashStation FS3410",
    "category": "Compute",
    "brand": "Synology",
    "price": 629760,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: FlashStation FS3410",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-flashstation-fs3600",
    "title": "Synology FlashStation FS3600",
    "category": "Compute",
    "brand": "Synology",
    "price": 296275,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: FlashStation FS3600",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-flashstation-fs6400",
    "title": "Synology FlashStation FS6400",
    "category": "Compute",
    "brand": "Synology",
    "price": 658066,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: FlashStation FS6400",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-virtual-edition",
    "title": "BIG-IP Virtual Edition",
    "category": "Compute",
    "brand": "F5",
    "price": 311185,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip virtual edition featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Virtual Edition",
      "Model: BIG-IP Virtual Edition",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-iq-centralized-management",
    "title": "BIG-IQ Centralized Management",
    "category": "Software",
    "brand": "F5",
    "price": 120469,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IQ Centralized Management",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-container-ingress-services",
    "title": "BIG-IP Container Ingress Services",
    "category": "Software",
    "brand": "F5",
    "price": 140516,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IP Container Ingress Services",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-automation-toolchain",
    "title": "BIG-IP Automation Toolchain",
    "category": "Compute",
    "brand": "F5",
    "price": 631845,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IP Automation Toolchain",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-policy-enforcement-manager-pem",
    "title": "BIG-IP Policy Enforcement Manager (PEM)",
    "category": "Compute",
    "brand": "F5",
    "price": 287631,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IP Policy Enforcement Manager (PEM)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-local-traffic-manager",
    "title": "BIG-IP Local Traffic Manager",
    "category": "Compute",
    "brand": "F5",
    "price": 713161,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IP Local Traffic Manager",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-dns",
    "title": "BIG-IP DNS",
    "category": "Compute",
    "brand": "F5",
    "price": 607870,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip application delivery featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Application Delivery",
      "Model: BIG-IP DNS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-next-service-communication-proxy-scp-for-5g",
    "title": "BIG-IP Next Service Communication Proxy (SCP) for 5G",
    "category": "Software",
    "brand": "F5",
    "price": 135350,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip next featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Next",
      "Model: BIG-IP Next Service Communication Proxy (SCP) for 5G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-next-service-proxy-for-kubernetes",
    "title": "BIG-IP Next Service Proxy for Kubernetes",
    "category": "Software",
    "brand": "F5",
    "price": 93436,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip next featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Next",
      "Model: BIG-IP Next Service Proxy for Kubernetes",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-next-cloud-native-network-functions-cnfs",
    "title": "BIG-IP Next Cloud-Native Network Functions (CNFs)",
    "category": "Compute",
    "brand": "F5",
    "price": 220766,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip next featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Next",
      "Model: BIG-IP Next Cloud-Native Network Functions (CNFs)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-next",
    "title": "BIG-IP Next",
    "category": "Compute",
    "brand": "F5",
    "price": 411913,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip next featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Next",
      "Model: BIG-IP Next",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-ssl-orchestrator",
    "title": "BIG-IP SSL Orchestrator",
    "category": "Compute",
    "brand": "F5",
    "price": 640396,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP SSL Orchestrator",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-ddos-hybrid-defender",
    "title": "BIG-IP DDoS Hybrid Defender",
    "category": "Compute",
    "brand": "F5",
    "price": 281529,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP DDoS Hybrid Defender",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-carrier-grade-network-address-translation-cgnat",
    "title": "BIG-IP Carrier-Grade Network Address Translation (CGNAT)",
    "category": "Compute",
    "brand": "F5",
    "price": 251206,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP Carrier-Grade Network Address Translation (CGNAT)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-advanced-waf",
    "title": "BIG-IP Advanced WAF",
    "category": "Compute",
    "brand": "F5",
    "price": 314816,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP Advanced WAF",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "big-ip-advanced-firewall-manager",
    "title": "BIG-IP Advanced Firewall Manager",
    "category": "Networking",
    "brand": "F5",
    "price": 251514,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP Advanced Firewall Manager",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "f5-big-ip-access-policy-manager",
    "title": "F5 BIG-IP Access Policy Manager",
    "category": "Compute",
    "brand": "F5",
    "price": 743820,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate big-ip security featuring original F5 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: F5",
      "Device Type: BIG-IP Security",
      "Model: BIG-IP Access Policy Manager",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "server-pam",
    "title": "Server PAM",
    "category": "Compute",
    "brand": "Delinea",
    "price": 157988,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Delinea certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Delinea",
      "Device Type: Rack Server",
      "Model: Server PAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-premium",
    "title": "Veeam Premium",
    "category": "Compute",
    "brand": "Veeam",
    "price": 502732,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Premium",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-advanced",
    "title": "Veeam Advanced",
    "category": "Compute",
    "brand": "Veeam",
    "price": 155635,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Advanced",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-foundation",
    "title": "Veeam Foundation",
    "category": "Compute",
    "brand": "Veeam",
    "price": 337295,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Foundation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powervault-me5084-storage",
    "title": "Dell Powervault ME5084 Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 83391,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me5 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME5",
      "Model: Dell Powervault ME5084 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powervault-me5024-storage",
    "title": "Dell PowerVault ME5024 Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 116775,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me5 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME5",
      "Model: Dell PowerVault ME5024 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-me5012-storage",
    "title": "Dell PowerVault ME5012 Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 81120,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me5 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME5",
      "Model: Dell PowerVault ME5012 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "me4084-san-das-storgae-array",
    "title": "Dell PowerVault ME4084 SAN/DAS Storgae ARRAY",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 373725,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me4 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME4",
      "Model: Dell PowerVault ME4084 SAN/DAS Storgae ARRAY",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "me4024-san-das-storage-array",
    "title": "Dell Powervault ME4024 SAN/DAS Storage ARRAY",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 174501,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me4 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME4",
      "Model: Dell Powervault ME4024 SAN/DAS Storage ARRAY",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "me4012-san-das-storage-array",
    "title": "Dell Powervault ME4012 SAN/DAS Storage Array",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 213032,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powervault me4 featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerVault ME4",
      "Model: Dell Powervault ME4012 SAN/DAS Storage Array",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netbackup-flex-appliances-1",
    "title": "NetBackup Flex Appliances",
    "category": "Software",
    "brand": "Veritas",
    "price": 205475,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate netbackup featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: NetBackup",
      "Model: NetBackup Flex Appliances",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netbackup-access-appliances",
    "title": "NetBackup Access Appliances",
    "category": "Software",
    "brand": "Veritas",
    "price": 86016,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate netbackup featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: NetBackup",
      "Model: NetBackup Access Appliances",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netbackup-flex-scale-appliances",
    "title": "NetBackup Flex Scale Appliances",
    "category": "Software",
    "brand": "Veritas",
    "price": 233477,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate netbackup featuring original Veritas certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veritas",
      "Device Type: NetBackup",
      "Model: NetBackup Flex Scale Appliances",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mobile-security",
    "title": "Mobile Security",
    "category": "Networking",
    "brand": "Trend Micro",
    "price": 174350,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Trend Micro certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Trend Micro",
      "Device Type: B2B IT Solution",
      "Model: Mobile Security",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "industrial-endpoint-security",
    "title": "Industrial Endpoint Security",
    "category": "Networking",
    "brand": "Trend Micro",
    "price": 391446,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Trend Micro certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Trend Micro",
      "Device Type: B2B IT Solution",
      "Model: Industrial Endpoint Security",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "workload-security",
    "title": "Workload Security",
    "category": "Networking",
    "brand": "Trend Micro",
    "price": 118791,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Trend Micro certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Trend Micro",
      "Device Type: B2B IT Solution",
      "Model: Workload Security",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "xdr-for-endpoint",
    "title": "XDR for Endpoint",
    "category": "Compute",
    "brand": "Trend Micro",
    "price": 644534,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Trend Micro certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Trend Micro",
      "Device Type: B2B IT Solution",
      "Model: XDR for Endpoint",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nginx-unit",
    "title": "NGINX Unit",
    "category": "Compute",
    "brand": "NGINX",
    "price": 357409,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: Unit",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nginx-amplify",
    "title": "NGINX Amplify",
    "category": "Compute",
    "brand": "NGINX",
    "price": 579479,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: Amplify",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "f5-nginx-management-suite",
    "title": "F5 NGINX Management Suite",
    "category": "Software",
    "brand": "NGINX",
    "price": 81415,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: F5  Management Suite",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nginx-gateway-fabric",
    "title": "NGINX Gateway Fabric",
    "category": "Compute",
    "brand": "NGINX",
    "price": 700513,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: Gateway Fabric",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "f5-nginx-app-protect",
    "title": "F5 NGINX App Protect",
    "category": "Compute",
    "brand": "NGINX",
    "price": 433831,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: F5  App Protect",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nginx-ingress-controller",
    "title": "NGINX Ingress Controller",
    "category": "Compute",
    "brand": "NGINX",
    "price": 381788,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: Ingress Controller",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "f5-nginx-plus",
    "title": "F5 NGINX Plus",
    "category": "Compute",
    "brand": "NGINX",
    "price": 659658,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original NGINX certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NGINX",
      "Device Type: B2B IT Solution",
      "Model: F5  Plus",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-c250-all-flash-san-storage",
    "title": "NetApp AFF C250 All Flash SAN Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 184457,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF C-series",
      "Model: AFF C250 All Flash SAN Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-c400-all-flash-san-storage",
    "title": "NetApp AFF C400 All Flash SAN Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 146224,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF C-series",
      "Model: AFF C400 All Flash SAN Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-c800-all-flash-san-storage",
    "title": "NetApp AFF C800 All Flash SAN Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 157256,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF C-series",
      "Model: AFF C800 All Flash SAN Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-fas2820-storage",
    "title": "NetApp FAS2820 Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 116067,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate fas series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: FAS Series",
      "Model: FAS2820 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-fas2750-storage",
    "title": "NetApp FAS2750 Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 223251,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate fas series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: FAS Series",
      "Model: FAS2750 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-fas8300-storage",
    "title": "NetApp FAS8300 Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 210767,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate fas series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: FAS Series",
      "Model: FAS8300 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-fas8700-storage",
    "title": "Netapp FAS8700 storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 217413,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate fas series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: FAS Series",
      "Model: Netapp FAS8700 storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-fas9500-storage",
    "title": "Netapp FAS9500 Storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 349887,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate fas series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: FAS Series",
      "Model: Netapp FAS9500 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-storeeasy-1000-storage-1",
    "title": "HPE StoreEasy 1000 Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 166515,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe storeeasy featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE StoreEasy",
      "Model: StoreEasy 1000 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-msa-1060-storage",
    "title": "HPE MSA 1060 Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 190568,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe msa featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE MSA",
      "Model: MSA 1060 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r350-rack-server-1",
    "title": "Dell PowerEdge R350 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 217595,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R350 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl110-gen11-server",
    "title": "HPE ProLiant DL110 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 639320,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL110 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml30-gen11-server",
    "title": "HPE ProLiant ML30 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 732374,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant ML30 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl20-gen11-server",
    "title": "HPE ProLiant DL20 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 481901,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL20 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl345-gen11-server",
    "title": "HPE ProLiant DL345 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 375990,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL345 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl360-gen11-server",
    "title": "HPE ProLiant DL360 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 186771,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL360 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl320-gen11-server",
    "title": "HPE ProLiant DL320 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 497637,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL320 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl560-gen11-server",
    "title": "HPE ProLiant DL560 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 187422,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL560 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380a-gen11-server",
    "title": "HPE ProLiant DL380a Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 161410,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380a Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-gen11-server",
    "title": "HPE ProLiant DL380 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 167199,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml110-gen11-server",
    "title": "HPE ProLiant ML110 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 191670,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant ML110 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml350-gen11-server",
    "title": "HPE ProLiant ML350 Gen11 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 565022,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant ML350 Gen11 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-a400-all-flash-san-storage",
    "title": "NetApp AFF A400 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 159313,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF A-series",
      "Model: AFF A400 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-a800-all-flash-san-storage",
    "title": "NetApp AFF A800 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 204548,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF A-series",
      "Model: AFF A800 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-aff-a900-all-flash-san-storage",
    "title": "NetApp AFF A900 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 197427,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate aff a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: AFF A-series",
      "Model: AFF A900 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-c800-all-flash-san-storage",
    "title": "NetApp ASA C800 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 327942,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA C-series",
      "Model: ASA C800 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-c250-all-flash-san-storage",
    "title": "NetApp ASA C250 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 318258,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA C-series",
      "Model: ASA C250 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-c400-all-flash-san-storage",
    "title": "NetApp ASA C400 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 272828,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa c-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA C-series",
      "Model: ASA C400 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-a400-all-flash-san-storage",
    "title": "NetApp ASA A400 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 312939,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA A-series",
      "Model: ASA A400 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-a800-all-flash-san-storage",
    "title": "NetApp ASA A800 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 192894,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA A-series",
      "Model: ASA A800 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netapp-asa-a900-all-flash-san-storage",
    "title": "NetApp ASA A900 All Flash SAN storage",
    "category": "Storage",
    "brand": "NetApp",
    "price": 214695,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate asa a-series featuring original NetApp certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NetApp",
      "Device Type: ASA A-series",
      "Model: ASA A900 All Flash SAN storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-hat5310-18tb-sata-iii-3-5-enterprise-hdd",
    "title": "Synology HAT5310 18TB SATA III 3.5\" Enterprise HDD",
    "category": "Storage",
    "brand": "Synology",
    "price": 223699,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: HAT5310 18TB SATA III 3.5\" Enterprise HDD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-hat3300-6t-3-5-sata-hdd-6tb",
    "title": "Synology HAT3300-6T 3.5\" SATA HDD 6TB",
    "category": "Storage",
    "brand": "Synology",
    "price": 169430,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: B2B IT Solution",
      "Model: HAT3300-6T 3.5\" SATA HDD 6TB",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds1821-8-bay-nas-enclosure-1",
    "title": "Synology DiskStation DS1821+ 8-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 313299,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS1821+ 8-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds1621-6-bay-nas-enclosure-1",
    "title": "Synology DiskStation DS1621+ 6-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 324473,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS1621+ 6-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds923-desktop-storage",
    "title": "Synology DiskStation DS923+ Desktop Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 226373,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS923+ Desktop Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds423-4-bays-desktop-storage",
    "title": "Synology DiskStation DS423+ 4 Bays Desktop Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 274647,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS423+ 4 Bays Desktop Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds224-2-bays-desktop-storage",
    "title": "Synology DiskStation DS224+ 2 Bays Desktop Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 150188,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS224+ 2 Bays Desktop Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds223j-2-bay-nas-enclosure",
    "title": "Synology DiskStation DS223j 2-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 153817,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS223j 2-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds124-1-bay-nas-enclosure",
    "title": "Synology DiskStation DS124 1-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 173060,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS124 1-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-simplivity-325",
    "title": "HPE SimpliVity 325",
    "category": "Compute",
    "brand": "HPE",
    "price": 219513,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe simplivity featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE SimpliVity",
      "Model: SimpliVity 325",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-simplivity-380",
    "title": "HPE SimpliVity 380",
    "category": "Compute",
    "brand": "HPE",
    "price": 623940,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe simplivity featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE SimpliVity",
      "Model: SimpliVity 380",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-msa-2052-san-storage",
    "title": "HPE MSA 2052 SAN Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 311438,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe msa featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE MSA",
      "Model: MSA 2052 SAN Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-msa-2062-storage",
    "title": "HPE MSA 2062 Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 109105,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe msa featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE MSA",
      "Model: MSA 2062 Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-storeever-msl-entry-level-tape-automation",
    "title": "HPE StoreEver MSL Entry-level Tape Automation",
    "category": "Compute",
    "brand": "HPE",
    "price": 745361,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe storeever featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE StoreEver",
      "Model: StoreEver MSL Entry-level Tape Automation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-storeonce-systems",
    "title": "HPE StoreOnce Systems",
    "category": "Compute",
    "brand": "HPE",
    "price": 347299,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe storeonce featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE StoreOnce",
      "Model: StoreOnce Systems",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-92348gc-x-switch",
    "title": "Cisco Nexus 92348GC-X Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 151360,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9200 switch series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9200 Switch Series",
      "Model: Nexus 92348GC-X Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-nexus-9232e-switch",
    "title": "Cisco Nexus 9232E Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 343063,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9200 switch series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9200 Switch Series",
      "Model: Nexus 9232E Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-greenlake-for-block-storage",
    "title": "HPE GreenLake for Block Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 91660,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe greenlake featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE GreenLake",
      "Model: GreenLake for Block Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-greenlake-for-file-storage",
    "title": "HPE GreenLake for File Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 85839,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe greenlake featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE GreenLake",
      "Model: GreenLake for File Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-alletra-storage-9000",
    "title": "HPE Alletra Storage 9000",
    "category": "Storage",
    "brand": "HPE",
    "price": 122344,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe alletra featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE Alletra",
      "Model: Alletra Storage 9000",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-alletra-storage-6000",
    "title": "HPE Alletra Storage 6000",
    "category": "Storage",
    "brand": "HPE",
    "price": 299793,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe alletra featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE Alletra",
      "Model: Alletra Storage 6000",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-2140",
    "title": "Cisco Firepower FPR-2140",
    "category": "Networking",
    "brand": "Cisco",
    "price": 97004,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-2140",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-alletra-storage-5000",
    "title": "HPE Alletra Storage 5000",
    "category": "Storage",
    "brand": "HPE",
    "price": 199574,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate hpe alletra featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: HPE Alletra",
      "Model: Alletra Storage 5000",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-2130",
    "title": "Cisco Firepower FPR-2130",
    "category": "Networking",
    "brand": "Cisco",
    "price": 332935,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-2130",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-2120",
    "title": "Cisco Firepower FPR-2120",
    "category": "Networking",
    "brand": "Cisco",
    "price": 326613,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-2120",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-firepower-fpr-2110",
    "title": "Cisco Firepower FPR-2110",
    "category": "Networking",
    "brand": "Cisco",
    "price": 177219,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network security firewall featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Security Firewall",
      "Model: Firepower FPR-2110",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "amazon-ec2",
    "title": "Amazon EC2 - Elastic Compute Cloud",
    "category": "Compute",
    "brand": "AWS",
    "price": 603813,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original AWS certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: AWS",
      "Device Type: B2B IT Solution",
      "Model: Amazon EC2 - Elastic Compute Cloud",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fusion-360",
    "title": "Fusion 360",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 527073,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: Fusion 360",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "bim-360",
    "title": "BIM 360",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 185062,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: BIM 360",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "3ds-max",
    "title": "3DS Max",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 598039,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: 3DS Max",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "civil-3d",
    "title": "Civil 3D",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 455512,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: Civil 3D",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "revit-lt",
    "title": "Revit LT",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 547079,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: Revit LT",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "revit-bim-software-for-designers-builders-and-doers",
    "title": "Revit: BIM Software For Designers, Builders, And Doers",
    "category": "Software",
    "brand": "Autodesk",
    "price": 19329,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: Enterprise Software & Licensing",
      "Model: Revit: BIM Software For Designers, Builders, And Doers",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "autocad-lt",
    "title": "AutoCAD LT",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 644595,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: AutoCAD LT",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "autocad-2d-and-3d-cad-software-with-design-automation",
    "title": "AutoCAD: 2D And 3D CAD Software With Design Automation",
    "category": "Software",
    "brand": "Autodesk",
    "price": 213888,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: Enterprise Software & Licensing",
      "Model: AutoCAD: 2D And 3D CAD Software With Design Automation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "autodesk-me-media-entertainment-collection",
    "title": "Autodesk ME (Media & Entertainment) Collection",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 166939,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: ME (Media & Entertainment) Collection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "autodesk-pdm-product-design-manufacturing-collection",
    "title": "Autodesk PDM (Product Design & Manufacturing) Collection",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 319559,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: PDM (Product Design & Manufacturing) Collection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "autodesk-aec-architecture-engineering-construction-collection",
    "title": "Autodesk AEC (Architecture, Engineering & Construction) Collection",
    "category": "Compute",
    "brand": "Autodesk",
    "price": 291351,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Autodesk certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Autodesk",
      "Device Type: B2B IT Solution",
      "Model: AEC (Architecture, Engineering & Construction) Collection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sign-software",
    "title": "Sign Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 130140,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Enterprise Software & Licensing",
      "Model: Sign Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "documents-software",
    "title": "Documents Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 237140,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate documents featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Documents",
      "Model: Documents Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "spreadsheet-bi-software",
    "title": "Spreadsheet (BI) Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 131856,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Enterprise Software & Licensing",
      "Model: Spreadsheet (BI) Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "expenses-software",
    "title": "Expenses Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 220245,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Enterprise Software & Licensing",
      "Model: Expenses Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "invoicing-software",
    "title": "Invoicing Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 132586,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate invoicing featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Invoicing",
      "Model: Invoicing Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "animate-cc-and-flash-professional-cc",
    "title": "Animate CC And Flash Professional CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 569231,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Animate CC And Flash Professional CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "after-effects-cc",
    "title": "After Effects CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 639044,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: After Effects CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-stock-small",
    "title": "Adobe Stock Small",
    "category": "Compute",
    "brand": "Adobe",
    "price": 375449,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Stock Small",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-premiere-pro-cc",
    "title": "Adobe Premiere Pro CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 407735,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Premiere Pro CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-photoshop-cc",
    "title": "Adobe Photoshop CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 688081,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Photoshop CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-indesign-cc",
    "title": "Adobe InDesign CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 632807,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: InDesign CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-incopy-cc",
    "title": "Adobe InCopy CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 191496,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: InCopy CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-illustrator-cc",
    "title": "Adobe Illustrator CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 341710,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Illustrator CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-dreamweaver-cc",
    "title": "Adobe Dreamweaver CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 400939,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Dreamweaver CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-creative-cloud-for-teams-all-apps-1",
    "title": "Adobe Creative Cloud For Teams – All Apps",
    "category": "Compute",
    "brand": "Adobe",
    "price": 227712,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Creative Cloud For Teams – All Apps",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-audition-cc",
    "title": "Adobe Audition CC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 160471,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Audition CC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-acrobat-standard-dc",
    "title": "Adobe Acrobat Standard DC",
    "category": "Compute",
    "brand": "Adobe",
    "price": 333616,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Acrobat Standard DC",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "accounting-software",
    "title": "Accounting Software",
    "category": "Software",
    "brand": "Odoo",
    "price": 73422,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate accounting featuring original Odoo certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Odoo",
      "Device Type: Accounting",
      "Model: Accounting Software",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "manageengine-log360",
    "title": "ManageEngine Log360",
    "category": "Compute",
    "brand": "ManageEngine",
    "price": 272968,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cyber security featuring original ManageEngine certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ManageEngine",
      "Device Type: Cyber Security",
      "Model: Log360",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "tenable-nessus®-professional",
    "title": "Tenable Nessus® Professional",
    "category": "Compute",
    "brand": "Tenable",
    "price": 344492,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cyber security featuring original Tenable certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Tenable",
      "Device Type: Cyber Security",
      "Model: Nessus® Professional",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-880f-all-flash-storage",
    "title": "Dell EMC Unity XT 880F All-Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 333350,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Unity XT 880F All-Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-680f-all-flash-storage",
    "title": "Dell EMC Unity XT 680F All-Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 167160,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Unity XT 680F All-Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-880-hybrid-flash-storage-1",
    "title": "Dell Emc Unity XT 880 Hybrid Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 92324,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Dell Emc Unity XT 880 Hybrid Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-880-hybrid-flash-storage",
    "title": "Dell Emc Unity XT 880 Hybrid Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 294408,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Dell Emc Unity XT 880 Hybrid Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-680-hybrid-flash-storage",
    "title": "Dell Emc Unity XT 680 Hybrid Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 83706,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Dell Emc Unity XT 680 Hybrid Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-480-hybrid-flash-storage",
    "title": "Dell Emc Unity XT 480 Hybrid Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 225277,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Dell Emc Unity XT 480 Hybrid Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powerstore-9200t",
    "title": "Dell PowerStore 9200T",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 661028,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: Dell PowerStore 9200T",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powerstore-5200t",
    "title": "Dell PowerStore 5200T",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 424979,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: Dell PowerStore 5200T",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powerstore-3200t",
    "title": "Dell PowerStore 3200T",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 377215,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: Dell PowerStore 3200T",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "copy-of-dell-emc-unity-xt-380f",
    "title": "Dell EMC Unity XT 380F",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 353044,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Unity XT 380F",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powerstore-1200t",
    "title": "Dell PowerStore 1200T",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 203090,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: Dell PowerStore 1200T",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-powerstore-500t",
    "title": "Dell Powerstore 500T",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 300373,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: Dell Powerstore 500T",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-380",
    "title": "Dell EMC Unity XT 380",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 589292,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Unity XT 380",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-g10-intel-xeon-gold-6326-2x16c-cto-server",
    "title": "HPE Proliant DL380 G10 Plus Intel Xeon-Gold 6326 2x16c CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 408428,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 G10 Plus Intel Xeon-Gold 6326 2x16c CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-g10-intel-xeon-silver-4314-2x16c-cto-server",
    "title": "HPE Proliant DL380 G10 Plus Intel Xeon-Silver 4314 2x16c CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 585933,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 G10 Plus Intel Xeon-Silver 4314 2x16c CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-g10-intel-xeon-gold-5317-2x12c-cto-server",
    "title": "HPE Proliant DL380 G10 Plus Intel Xeon-Gold 5317 2x12c CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 635955,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 G10 Plus Intel Xeon-Gold 5317 2x12c CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-g10-2xintel-xeon-silver-4310-2x12c-cto-server",
    "title": "HPE Proliant DL380 G10 Plus 2xIntel Xeon-Silver 4310 2x12c CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 627733,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 G10 Plus 2xIntel Xeon-Silver 4310 2x12c CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-dl380-gen10-plus-dual-processor-cto-server",
    "title": "HPE Proliant DL380 G10 Plus Intel Xeon-Silver(Dual) 4309Y 2x8c CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 654116,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 G10 Plus Intel Xeon-Silver(Dual) 4309Y 2x8c CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-dl380-gen10-plus-cto-server",
    "title": "HPE DL380 Gen10 Plus CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 171833,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: DL380 Gen10 Plus CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl20-gen10-plus-4sff-cto-server",
    "title": "HPE ProLiant DL20 Gen10 Plus 4SFF CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 211359,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL20 Gen10 Plus 4SFF CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml30-gen10-plus-8sff-hot-plug-cto-server",
    "title": "HPE ProLiant ML30 Gen10 Plus 8SFF Hot Plug CTO Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 507771,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant ML30 Gen10 Plus 8SFF Hot Plug CTO Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-10-pro-64-bit-dvd-oem-fqc-08929",
    "title": "Microsoft Windows 10 Pro 64-Bit DVD – OEM (FQC-08929)",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 712446,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: B2B IT Solution",
      "Model: Windows 10 Pro 64-Bit DVD – OEM (FQC-08929)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-os-5-user-1-server",
    "title": "Kaspersky OS 5 User 1 Server",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 338725,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Rack Server",
      "Model: Kaspersky OS 5 User 1 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-os-10-user-1-server",
    "title": "Kaspersky OS 10 User 1 Server",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 228074,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Rack Server",
      "Model: Kaspersky OS 10 User 1 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-standard-1-user-1-year-2023",
    "title": "Kaspersky Standard 1-User 1-Year 2023",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 416386,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: B2B IT Solution",
      "Model: Kaspersky Standard 1-User 1-Year 2023",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-plus-3-user-1-year-2023",
    "title": "Kaspersky Plus 3-User 1-Year 2023",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 619479,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: B2B IT Solution",
      "Model: Kaspersky Plus 3-User 1-Year 2023",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-plus-1-user-1-year-2023",
    "title": "Kaspersky Plus 1-User 1-Year 2023",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 316190,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: B2B IT Solution",
      "Model: Kaspersky Plus 1-User 1-Year 2023",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rackstation-rs3621rpxs-12-bay-server-storage",
    "title": "Synology RackStation RS3621RPxs 12-Bay Server Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 115904,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Rack Server",
      "Model: RackStation RS3621RPxs 12-Bay Server Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds1823xs-8-bay-nas-enclosure",
    "title": "Synology DiskStation DS1823xs+ 8-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 255539,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS1823xs+ 8-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rackstation-rs820rp-4-bay-nas-enclosure",
    "title": "Synology RackStation RS820RP+ 4-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 161835,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: RackStation RS820RP+ 4-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds1522-5-bay-nas-enclosure",
    "title": "Synology DiskStation DS1522+ 5-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 342828,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS1522+ 5-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds223-2-bay-nas-enclosure",
    "title": "Synology DiskStation DS223 2-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 109991,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS223 2-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds220j-2-bay-nas-enclosure",
    "title": "Synology DiskStation DS220j 2-Bay NAS Storage",
    "category": "Storage",
    "brand": "Synology",
    "price": 162987,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Enterprise Storage Drive",
      "Model: DiskStation DS220j 2-Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-rks-02-sliding-rail-kit-for-synology-rackmount-servers",
    "title": "Synology RKS-02 Sliding Rail Kit for Synology Rackmount Servers",
    "category": "Compute",
    "brand": "Synology",
    "price": 676981,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Rack Server",
      "Model: RKS-02 Sliding Rail Kit for Synology Rackmount Servers",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "synology-diskstation-ds120j-1-bay-nas-server",
    "title": "Synology DiskStation DS120j 1-Bay NAS Server",
    "category": "Compute",
    "brand": "Synology",
    "price": 514622,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Synology certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Synology",
      "Device Type: Rack Server",
      "Model: DiskStation DS120j 1-Bay NAS Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pantum-bp5100dn-single-function-mono-laser-printer-with-duplex-network-40-ppm",
    "title": "Pantum BP5100DN Single Function Mono Laser Printer With Duplex & Network (40 PPM)",
    "category": "Compute",
    "brand": "Pantum",
    "price": 521617,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Pantum certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Pantum",
      "Device Type: B2B IT Solution",
      "Model: BP5100DN Single Function Mono Laser Printer With Duplex & Network (40 PPM)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-intel-xeon-e-2124-processor-16gb-udimm-2x1tb-hard-drive-2-hot-plug-1u-rack-server",
    "title": "Dell PowerEdge R340 Intel Xeon E-2124 Processor 16GB UDIMM 2x1TB Hard Drive 2 Hot Plug 1U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 516368,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 Intel Xeon E-2124 Processor 16GB UDIMM 2x1TB Hard Drive 2 Hot Plug 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-proliant-dl380-gen-10-2x-intel-xeon-4208-processor-32gb-ram-4x1-2tb-hdd-rack-server",
    "title": "HPE ProLiant DL380 Gen 10 2x Intel Xeon 4208 Processor 32GB RAM 4x1.2TB HDD Rack Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 557615,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380 Gen 10 2x Intel Xeon 4208 Processor 32GB RAM 4x1.2TB HDD Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-proliant-dl20-gen-10-intel-xeon-e-2124-processor-16gb-ram-2x1tb-hdd-1u-rack-server",
    "title": "HPE Proliant DL20 Gen 10 Intel Xeon E-2124 Processor 16GB RAM 2x1TB HDD 1U Rack Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 740409,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL20 Gen 10 Intel Xeon E-2124 Processor 16GB RAM 2x1TB HDD 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-ml30-gen-10-intel-xeon-e-2124-processor-16gb-ram-2x1tb-hdd-tower-server",
    "title": "HPE ML30 Gen 10 Intel Xeon E-2124 Processor 16GB RAM 2x1TB HDD Tower Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 531779,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ML30 Gen 10 Intel Xeon E-2124 Processor 16GB RAM 2x1TB HDD Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-proliant-ml30-gen-10-intel-xeon-e-2224-processor-16gb-udimm-2x1tb-hard-disk-drive-integrated-matrox-g200-graphics-tower-server",
    "title": "HPE ProLiant ML30 Gen 10 Intel Xeon E-2224 Processor 16GB UDIMM 2x1TB Hard Disk Drive Integrated Matrox G200 Graphics Tower Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 291427,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: E-Series",
      "Model: ProLiant ML30 Gen 10 Intel Xeon E-2224 Processor 16GB UDIMM 2x1TB Hard Disk Drive Integrated Matrox G200 Graphics Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r620-1u-server",
    "title": "Dell PowerEdge R620 1U Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 748040,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R620 1U Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-intel-xeon-e-2134-processor-16gb-udimm-2x1tb-storage-1u-rack-server",
    "title": "Dell PowerEdge R340 Intel Xeon E-2134 Processor 16GB UDIMM 2X1TB Storage 1U Rack Server",
    "category": "Storage",
    "brand": "Dell",
    "price": 134725,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 Intel Xeon E-2134 Processor 16GB UDIMM 2X1TB Storage 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-power-edge-2x-intel-xeon-silver-4210-32gb-rdimm-2x1-8tb-sas-storage-server",
    "title": "Dell Power Edge 2x Intel Xeon Silver 4210 32GB RDIMM 2x1.8TB SAS Storage Server",
    "category": "Storage",
    "brand": "Dell",
    "price": 229055,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: Power Edge 2x Intel Xeon Silver 4210 32GB RDIMM 2x1.8TB SAS Storage Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-power-edge-r740-2xintel-xeon-silver-4216-processor-64gb-rdimm-2x2-4tb-hard-drive-matrox-g200-graphics-server",
    "title": "Dell Power Edge R740 2XIntel Xeon Silver 4216 Processor 64GB RDIMM 2x2.4TB Hard Drive Matrox G200 Graphics Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 418375,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: Power Edge R740 2XIntel Xeon Silver 4216 Processor 64GB RDIMM 2x2.4TB Hard Drive Matrox G200 Graphics Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t20-intel-pentium-g3220-processor-4gb-udimm-1x500gb-hard-disk-drive-integrated-graphics-tower-server",
    "title": "Dell PowerEdge T20 Intel Pentium G3220 Processor 4GB UDIMM 1x500GB Hard Disk Drive Integrated Graphics Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 302106,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate pentium featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Pentium",
      "Model: PowerEdge T20 Intel Pentium G3220 Processor 4GB UDIMM 1x500GB Hard Disk Drive Integrated Graphics Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-t440-2x-intel-xeon-silver-4210-processor-16gb-rdimm-2-x-1-2tb-hard-disk-drive-matrox-g200-graphics-tower-server",
    "title": "Dell EMC PowerEdge T440 2x Intel Xeon Silver 4210 Processor 16GB RDIMM 2 x 1.2TB Hard Disk Drive Matrox G200 Graphics Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 638627,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: EMC PowerEdge T440 2x Intel Xeon Silver 4210 Processor 16GB RDIMM 2 x 1.2TB Hard Disk Drive Matrox G200 Graphics Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t140-intel-xeon-e2234-processor-8gb-udimm-2x1tb-hard-drive-tower-server",
    "title": "Dell PowerEdge T140 Intel Xeon E2234 Processor 8GB UDIMM 2x1TB Hard Drive Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 445135,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge T140 Intel Xeon E2234 Processor 8GB UDIMM 2x1TB Hard Drive Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r740-2-x-intel-xeon-silver-4210r-processor-32gb-rdimm-2x-2-4tb-hard-drive-server",
    "title": "Dell PowerEdge R740 2 x Intel Xeon Silver 4210R Processor 32GB RDIMM 2x 2.4TB Hard Drive Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 356024,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740 2 x Intel Xeon Silver 4210R Processor 32GB RDIMM 2x 2.4TB Hard Drive Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r740-2xintel-xeon-silver-4212r-processor-32gb-rdimm-2-x-2-4tb-hard-drive-server",
    "title": "Dell PowerEdge R740 2xIntel Xeon Silver 4212R Processor 32GB RDIMM 2 x 2.4TB Hard Drive Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 660866,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740 2xIntel Xeon Silver 4212R Processor 32GB RDIMM 2 x 2.4TB Hard Drive Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-power-edge-r740-2-x-intel-xeon-silver-4216-processor-32gb-rdimm-2-x-2-4tb-hdd-2u-rack-server",
    "title": "Dell EMC Power Edge R740 2 x Intel Xeon Silver 4216 Processor 32GB RDIMM 2 x 2.4TB HDD 2U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 476526,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: EMC Power Edge R740 2 x Intel Xeon Silver 4216 Processor 32GB RDIMM 2 x 2.4TB HDD 2U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-power-edge-r740-2-x-intel-xeon-gold-5220r-processor-128gb-rdimm-2-x-480gb-ssd-2u-rack-server",
    "title": "Dell EMC Power Edge R740 2 x Intel Xeon Gold 5220R Processor 128GB RDIMM 2 x 480GB SSD 2U Rack Server",
    "category": "Storage",
    "brand": "Dell",
    "price": 284750,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: EMC Power Edge R740 2 x Intel Xeon Gold 5220R Processor 128GB RDIMM 2 x 480GB SSD 2U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asus-rs300-e10-rs4-intel-xeon-e-2236-processor-16gb-udimm-2tb-hdd-integrated-aspeed-ast2500-with-32mb-vram-graphics-1u-rack-server",
    "title": "Asus RS300-E10-RS4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST2500 with 32MB VRAM Graphics 1U Rack Server",
    "category": "Compute",
    "brand": "Asus",
    "price": 511282,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Asus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asus",
      "Device Type: Rack Server",
      "Model: RS300-E10-RS4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST2500 with 32MB VRAM Graphics 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asus-rs300-e10-rs4-intel-xeon-e-2236-processor-16gb-udimm-2tb-hdd-integrated-aspeed-ast2500-with-32mb-vram-graphics-rack-server",
    "title": "Asus RS300-E10-RS4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST2500 with 32MB VRAM Graphics Rack Server",
    "category": "Compute",
    "brand": "Asus",
    "price": 491251,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Asus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asus",
      "Device Type: Rack Server",
      "Model: RS300-E10-RS4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST2500 with 32MB VRAM Graphics Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asus-ts100-e10-pi4-intel-xeon-e-2236-processor-16gb-udimm-2tb-hdd-integrated-aspeed-ast-2510-graphics-tower-server",
    "title": "Asus TS100-E10-PI4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST 2510 Graphics Tower Server",
    "category": "Compute",
    "brand": "Asus",
    "price": 642376,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Asus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asus",
      "Device Type: Rack Server",
      "Model: TS100-E10-PI4 Intel Xeon E-2236 Processor 16GB UDIMM 2TB HDD Integrated Aspeed AST 2510 Graphics Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asus-ts100-e10-pi4-intel-xeon-e-2236-processor-16gb-udimm-2x1tb-hdd-integrated-aspeed-ast-2510-graphics-tower-server",
    "title": "Asus TS100-E10-PI4 Intel Xeon E-2236 Processor 16GB UDIMM 2x1TB HDD Integrated Aspeed AST 2510 Graphics Tower Server",
    "category": "Compute",
    "brand": "Asus",
    "price": 514832,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Asus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asus",
      "Device Type: Rack Server",
      "Model: TS100-E10-PI4 Intel Xeon E-2236 Processor 16GB UDIMM 2x1TB HDD Integrated Aspeed AST 2510 Graphics Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-t150-intel-xeon-e-2314-processor-16gb-rdimm-2-x-2tb-hdd-tower-server",
    "title": "Dell PowerEdge T150 Intel Xeon E-2314 Processor 16GB RDIMM 2 x 2TB HDD Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 601024,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge T150 Intel Xeon E-2314 Processor 16GB RDIMM 2 x 2TB HDD Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t20-intel-pentium-processor-g3220-4gb-ram-500gb-hdd-tower-server",
    "title": "Dell PowerEdge T20 Intel Pentium Processor G3220 4GB RAM 500GB HDD Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 533779,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate pentium featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Pentium",
      "Model: PowerEdge T20 Intel Pentium Processor G3220 4GB RAM 500GB HDD Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-1u-intel-xeon-e-2134-3-5ghz-16gb-ram-2x-1tb-hdd-rack-server",
    "title": "Dell PowerEdge R340 1U Intel Xeon E-2134 3.5GHz 16GB RAM 2x 1TB HDD Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 299440,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 1U Intel Xeon E-2134 3.5GHz 16GB RAM 2x 1TB HDD Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredger220-rack-4-core-server",
    "title": "DELL POWEREDGER220 RACK 4-CORE SERVER",
    "category": "Compute",
    "brand": "Dell",
    "price": 164823,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: DELL POWEREDGER220 RACK 4-CORE SERVER",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t310-tower-server-intel-xeon-e3-1220-3-0ghz-8m-cache",
    "title": "DELL POWEREDGE T310 TOWER SERVER, INTEL XEON E3-1220, 3.0GHZ, 8M CACHE",
    "category": "Compute",
    "brand": "Dell",
    "price": 307271,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: DELL POWEREDGE T310 TOWER SERVER, INTEL XEON E3-1220, 3.0GHZ, 8M CACHE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t130-tower-server",
    "title": "DELL POWEREDGE T130 TOWER SERVER",
    "category": "Compute",
    "brand": "Dell",
    "price": 628275,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: DELL POWEREDGE T130 TOWER SERVER",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rn626x00-readynas-6-bay-desktop-storage",
    "title": "NETGEAR RN626X00 ReadyNAS 6 Bay Desktop Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 152503,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: NETGEAR RN626X00 ReadyNAS 6 Bay Desktop Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-453u-rp-nas-server",
    "title": "QNAP TS-453U-RP NAS Server",
    "category": "Compute",
    "brand": "Qnap",
    "price": 402154,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: Rack Server",
      "Model: QNAP TS-453U-RP NAS Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t140-tower-server",
    "title": "Dell PowerEdge T140 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 532386,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge T140 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pantum-p2506w-single-function-mono-laser-printer-with-wi-fi-22-ppm",
    "title": "Pantum P2506W Single Function Mono Laser Printer With Wi-Fi (22 PPM)",
    "category": "Compute",
    "brand": "Pantum",
    "price": 680126,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Pantum certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Pantum",
      "Device Type: B2B IT Solution",
      "Model: P2506W Single Function Mono Laser Printer With Wi-Fi (22 PPM)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pantum-p2500w-single-function-mono-laser-printer",
    "title": "Pantum P2500W Single Function Mono Laser Printer",
    "category": "Compute",
    "brand": "Pantum",
    "price": 461061,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Pantum certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Pantum",
      "Device Type: B2B IT Solution",
      "Model: P2500W Single Function Mono Laser Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pantum-p2506-single-function-mono-laser-printer-22-ppm",
    "title": "Pantum P2506 Single Function Mono Laser Printer (22 PPM)",
    "category": "Compute",
    "brand": "Pantum",
    "price": 287235,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Pantum certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Pantum",
      "Device Type: B2B IT Solution",
      "Model: P2506 Single Function Mono Laser Printer (22 PPM)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "pantum-p2500-single-function-mono-laser-printer",
    "title": "Pantum P2500 Single Function Mono Laser Printer",
    "category": "Compute",
    "brand": "Pantum",
    "price": 721384,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate prin featuring original Pantum certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Pantum",
      "Device Type: prin",
      "Model: P2500 Single Function Mono Laser Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "wiredcorded-zebra-ls1203-7azu0100zy-barcode-scanner-linear-laser",
    "title": "Wired(Corded) Zebra LS1203 7AZU0100ZY Barcode Scanner, Linear Laser",
    "category": "Compute",
    "brand": "Zebra",
    "price": 660364,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Scanner",
      "Model: Wired(Corded)  LS1203 7AZU0100ZY Barcode Scanner, Linear Laser",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-ds9908-2d-usb-corded-presentation-barcode-scanner-ds9908-sr00004zzww",
    "title": "Zebra DS9908 (2D) USB Corded Presentation Barcode Scanner DS9908-SR00004ZZWW",
    "category": "Compute",
    "brand": "Zebra",
    "price": 517551,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Scanner",
      "Model: DS9908 (2D) USB Corded Presentation Barcode Scanner DS9908-SR00004ZZWW",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "li4278-trbu0100zy-zebra-1d-wireless-sbarcode-scanner-li4278",
    "title": "LI4278-TRBU0100ZY#ZEBRA 1D Wireless SBarcode Scanner LI4278",
    "category": "Compute",
    "brand": "Zebra",
    "price": 666611,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Scanner",
      "Model: LI4278-TRBU0100ZY#ZEBRA 1D Wireless SBarcode Scanner LI4278",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ls2208-sr20007r-y-zebra-ls2208-scanner-with-stand-usb-1d-barcode-reader",
    "title": "LS2208-SR20007R-Y #Zebra LS2208 Scanner with Stand,USB,1D Barcode Reader",
    "category": "Compute",
    "brand": "Zebra",
    "price": 164141,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Scanner",
      "Model: LS2208-SR20007R-Y # LS2208 Scanner with Stand,USB,1D Barcode Reader",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ds2208-sr7u2100azk-zebra-ds2208-scanner-usb-2d-barcode-reader-without-stand",
    "title": "DS2208-SR7U2100AZK #Zebra DS2208 Scanner,USB,2D Barcode Reader (without stand)",
    "category": "Compute",
    "brand": "Zebra",
    "price": 353425,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Scanner",
      "Model: DS2208-SR7U2100AZK # DS2208 Scanner,USB,2D Barcode Reader (without stand)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zt42163-t0g0000z-zt-421-300dpi-label-printer",
    "title": "ZT42163-T0G0000Z#ZT-421,300dpi Label Printer",
    "category": "Compute",
    "brand": "Zebra",
    "price": 239970,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZT42163-T0G0000Z#ZT-421,300dpi Label Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zc32-000c000in0-id-card-printer-zc300-dual-sided-india-cord-usb-ethernet-windows-driver-only-service-warranty-with-out-printer-head",
    "title": "ZC32-000C000IN0 # ID Card Printer ZC300, Dual Sided  India Cord, USB & Ethernet, Windows Driver (ONLY SERVICE WARRANTY WITH OUT PRINTER HEAD)",
    "category": "Software",
    "brand": "Zebra",
    "price": 40896,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZC32-000C000IN0 # ID Card Printer ZC300, Dual Sided  India Cord, USB & Ethernet, Windows Driver (ONLY SERVICE WARRANTY WITH OUT PRINTER HEAD)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zt51043-t0g0000z-zebra-label-printer-zt-510-300-dpi-4-inch",
    "title": "ZT51043-T0G0000Z#Zebra Label Printer ZT 510 ,300 dpi ,4 INCH",
    "category": "Compute",
    "brand": "Zebra",
    "price": 190918,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZT51043-T0G0000Z# Label Printer ZT 510 ,300 dpi ,4 INCH",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "prtg-hosted-monitor",
    "title": "PRTG Hosted Monitor",
    "category": "Compute",
    "brand": "Paessler",
    "price": 361204,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Paessler certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Paessler",
      "Device Type: B2B IT Solution",
      "Model: PRTG Hosted Monitor",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "prtg-enterprise-monitor",
    "title": "PRTG Enterprise Monitor",
    "category": "Compute",
    "brand": "Paessler",
    "price": 451751,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Paessler certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Paessler",
      "Device Type: B2B IT Solution",
      "Model: PRTG Enterprise Monitor",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "prtg-network-monitor",
    "title": "PRTG Network Monitor",
    "category": "Compute",
    "brand": "Paessler",
    "price": 683542,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Paessler certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Paessler",
      "Device Type: B2B IT Solution",
      "Model: PRTG Network Monitor",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-6-essentials-plus-kit-for-3-hosts-max-2-processors-per-host",
    "title": "VMware vSphere 6 Essentials Plus Kit for 3 hosts (Max 2 processors per host)",
    "category": "Software",
    "brand": "VMware",
    "price": 192173,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Enterprise Software & Licensing",
      "Model: vSphere 6 Essentials Plus Kit for 3 hosts (Max 2 processors per host)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cambium-cnpilot-e510-wi-fi-5-outdoor-directional-access-point",
    "title": "Cambium CnPilot E510 Wi-Fi 5 Outdoor Directional Access Point",
    "category": "Networking",
    "brand": "Cambium",
    "price": 119471,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Cambium certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cambium",
      "Device Type: Wireless Collaboration Access Point",
      "Model: CnPilot E510 Wi-Fi 5 Outdoor Directional Access Point",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cambium-cnpilot-e600-wi-fi-access-point",
    "title": "Cambium CnPilot E600 Wi-Fi Access Point",
    "category": "Networking",
    "brand": "Cambium",
    "price": 163268,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Cambium certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cambium",
      "Device Type: Wireless Collaboration Access Point",
      "Model: CnPilot E600 Wi-Fi Access Point",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cambium-cnpilot-e410-wi-fi-5-indoor-access-point",
    "title": "Cambium CnPilot E410 Wi-Fi 5 Indoor Access Point",
    "category": "Networking",
    "brand": "Cambium",
    "price": 164238,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wireless collaboration access point featuring original Cambium certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cambium",
      "Device Type: Wireless Collaboration Access Point",
      "Model: CnPilot E410 Wi-Fi 5 Indoor Access Point",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t350-tower-server-1",
    "title": "Dell PowerEdge T350 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 565093,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge T350 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t560-tower-server",
    "title": "Dell PowerEdge T560 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 680603,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: B",
      "Model: PowerEdge T560 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t550-tower-server",
    "title": "Dell PowerEdge T550 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 354348,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge T550 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r960-rack-server",
    "title": "Dell PowerEdge R960 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 237927,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R960 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r860-rack-server",
    "title": "Dell PowerEdge R860 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 665689,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R860 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r660xs-rack-server",
    "title": "Dell PowerEdge R660xs Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 378466,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R660xs Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r760xs-rack-server",
    "title": "Dell PowerEdge R760xs Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 449211,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R760xs Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "power-guard-pg1200va-cs-1200va-offline-ups-with-plastic-body",
    "title": "Power Guard PG1200VA-CS 1200VA Offline UPS with Plastic Body",
    "category": "Compute",
    "brand": "Power Guard",
    "price": 596608,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Power Guard certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Power Guard",
      "Device Type: B2B IT Solution",
      "Model: PG1200VA-CS 1200VA Offline UPS with Plastic Body",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r660-rack-server",
    "title": "Dell PowerEdge R660 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 723560,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R660 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r7615-rack-server",
    "title": "Dell PowerEdge R7615 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 593652,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R7615 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "power-guard-1200va-cs-offline-ups-plastic-body",
    "title": "Power Guard 1200VA CS Offline UPS (Plastic Body)",
    "category": "Compute",
    "brand": "Power Guard",
    "price": 525763,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Power Guard certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Power Guard",
      "Device Type: B2B IT Solution",
      "Model: 1200VA CS Offline UPS (Plastic Body)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r6615-rack-server",
    "title": "Dell PowerEdge R6615 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 198405,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R6615 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "power-guard-650va-cs-offline-ups-plastic-body",
    "title": "Power Guard 650VA CS Offline UPS (Plastic Body)",
    "category": "Compute",
    "brand": "Power Guard",
    "price": 411302,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Power Guard certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Power Guard",
      "Device Type: B2B IT Solution",
      "Model: 650VA CS Offline UPS (Plastic Body)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-perc-5-e-256mb-raid-controller-for-powervault-md1000-dm479",
    "title": "Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 DM479",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 746397,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 DM479",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-perc-5-e-256mb-raid-controller-for-powervault-md1000-gp297",
    "title": "Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 GP297",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 608326,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 GP297",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-perc-5-e-256mb-raid-controller-for-powervault-md1000-ut568",
    "title": "Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 UT568",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 365799,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 UT568",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-perc-5-e-256mb-raid-controller-for-powervault-md1000-xm768",
    "title": "Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 XM768",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 275408,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell PERC 5/E 256MB RAID Controller for PowerVault MD1000 XM768",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-u8735-n-3-7v-raid-controller-battery-li-ion-new",
    "title": "Dell U8735-N 3.7V RAID Controller Battery Li-ion - NEW",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 555487,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell U8735-N 3.7V RAID Controller Battery Li-ion - NEW",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-nu209-poweredge-perc-5-i-6-i-h700-3-7v-raid-controller-li-ion-battery-new",
    "title": "Dell NU209 PowerEdge PERC 5/i 6/i H700 3.7V RAID Controller Li-ion Battery - NEW",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 632066,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: Dell NU209 PowerEdge PERC 5/i 6/i H700 3.7V RAID Controller Li-ion Battery - NEW",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-perc-4e-dc-u320-64-bit-scsi-pci-e-raid-controller-128mb-x6847",
    "title": "Dell PERC 4e/DC U320 64-bit SCSI PCI-E RAID Controller 128MB X6847",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 719236,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell PERC 4e/DC U320 64-bit SCSI PCI-E RAID Controller 128MB X6847",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-wy335-perc-6-i-sas-raid-controller",
    "title": "Dell WY335 PERC 6/i SAS RAID Controller",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 326748,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell WY335 PERC 6/i SAS RAID Controller",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-sas-6-ir-raid-0-1-controller-card-yk838",
    "title": "Dell PowerEdge SAS 6/iR RAID 0, 1 Controller Card YK838",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 125214,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: Dell PowerEdge SAS 6/iR RAID 0, 1 Controller Card YK838",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-t954j-perc-6-i-sas-raid-controller",
    "title": "Dell T954J PERC 6/i SAS RAID Controller",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 301612,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell T954J PERC 6/i SAS RAID Controller",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-h726f-perc-6-i-sas-raid-controller",
    "title": "Dell H726F PERC 6/i SAS RAID Controller",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 284844,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell H726F PERC 6/i SAS RAID Controller",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-dx481-perc-6-i-sas-raid-controller",
    "title": "Dell DX481 Perc 6/i SAS RAID Controller",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 256399,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: Dell DX481 Perc 6/i SAS RAID Controller",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-perc-6-i-sas-raid-controller-adapter-card-pci-e-yw946",
    "title": "Dell PowerEdge PERC 6/i SAS RAID Controller Adapter Card PCI-E YW946",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 308120,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: Dell PowerEdge PERC 6/i SAS RAID Controller Adapter Card PCI-E YW946",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-t774h-poweredge-perc-6-i-sas-raid-controller-adapter-card-pci-e",
    "title": "Dell T774H PowerEdge PERC 6/i SAS RAID Controller Adapter Card PCI-E",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 207155,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: Dell T774H PowerEdge PERC 6/i SAS RAID Controller Adapter Card PCI-E",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-vpn-secure-connection",
    "title": "Kaspersky VPN Secure Connection",
    "category": "Compute",
    "brand": "kaspersky",
    "price": 240694,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: B2B IT Solution",
      "Model: Kaspersky VPN Secure Connection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-ls1203-7azu0100zy-barcode-scanner",
    "title": "Zebra LS1203 7AZU0100ZY Barcode Scanner",
    "category": "Compute",
    "brand": "Zebra",
    "price": 597294,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: LS1203 7AZU0100ZY Barcode Scanner",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-ls2208-single-line-laser-barcode-scanner-with-stand",
    "title": "Zebra LS2208 Single Line Laser Barcode Scanner with Stand",
    "category": "Compute",
    "brand": "Zebra",
    "price": 219206,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: LS2208 Single Line Laser Barcode Scanner with Stand",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-ds9308-1d-2d-qr-usb-barcode-scanner",
    "title": "Zebra DS9308 1D-2D-QR USB Barcode Scanner",
    "category": "Compute",
    "brand": "Zebra",
    "price": 274955,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: DS9308 1D-2D-QR USB Barcode Scanner",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zc100-zc300-black-ribbon-2000-print-800300-301in-1",
    "title": "Zebra ZC100/ZC300 Black Ribbon (2000 Print) 800300-301in",
    "category": "Compute",
    "brand": "Zebra",
    "price": 355216,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZC100/ZC300 Black Ribbon (2000 Print) 800300-301in",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-wax-resin-ribbon-110mmx300m-4-33inx984ft",
    "title": "Zebra Wax/Resin Ribbon 110mmx300m (4.33inx984ft)",
    "category": "Compute",
    "brand": "Zebra",
    "price": 366539,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Wax/Resin Ribbon 110mmx300m (4.33inx984ft)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zc100-zc300-ymcko-color-ribbon-300-print-800300-253",
    "title": "Zebra ZC100/ZC300 YMCKO Color Ribbon (300 Print) 800300-252",
    "category": "Compute",
    "brand": "Zebra",
    "price": 292830,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZC100/ZC300 YMCKO Color Ribbon (300 Print) 800300-252",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zxp3-printhead-p1031925-70",
    "title": "Zebra ZXP3 Printhead P1031925-070",
    "category": "Compute",
    "brand": "Zebra",
    "price": 443401,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZXP3 Printhead P1031925-070",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-3300-premium-wax-resin-ribbon-156mmx450m-6-14inx1476ft",
    "title": "Zebra 3300 Premium Wax-Resin Ribbon 156mmx450m (6.14inx1476ft)",
    "category": "Compute",
    "brand": "Zebra",
    "price": 743854,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: 3300 Premium Wax-Resin Ribbon 156mmx450m (6.14inx1476ft)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ribbon-color-ymcko-750-images-for-zxp-7-800077-742in",
    "title": "Ribbon Color-YMCKO, 750 Images FOR ZXP-7 800077-742IN",
    "category": "Compute",
    "brand": "Zebra",
    "price": 347605,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Ribbon Color-YMCKO, 750 Images FOR ZXP-7 800077-742IN",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-ds2278-cordless-handheld-1d-2d-barcode-scanner",
    "title": "Zebra DS2278 Cordless Handheld 1D 2D Barcode Scanner",
    "category": "Compute",
    "brand": "Zebra",
    "price": 347769,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: DS2278 Cordless Handheld 1D 2D Barcode Scanner",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-cleaning-kit-105999-701-for-zxp-series-7",
    "title": "Zebra Cleaning Kit 105999-701 for ZXP Series 7",
    "category": "Compute",
    "brand": "Zebra",
    "price": 401607,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Cleaning Kit 105999-701 for ZXP Series 7",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-blank-white-pvc-card-30-mil",
    "title": "Zebra Blank White PVC Card 30 mil",
    "category": "Compute",
    "brand": "Zebra",
    "price": 219343,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Blank White PVC Card 30 mil",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-printer-motherboard-zt-400-series-kit-main-logic-boardp1058930-100",
    "title": "Zebra Printer Motherboard ZT 400 Series (Kit Main Logic Board)P1058930-100",
    "category": "Compute",
    "brand": "Zebra",
    "price": 540166,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Printer Motherboard ZT 400 Series (Kit Main Logic Board)P1058930-100",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-printer-head-zm-400-203-dpi",
    "title": "Zebra Printer Head ZM 400 203 dpi",
    "category": "Compute",
    "brand": "Zebra",
    "price": 656813,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Printer Head ZM 400 203 dpi",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zt410-printhead-300-dpi-p1058930-010",
    "title": "Zebra ZT410 Printhead 300 DPI- P1058930-010",
    "category": "Compute",
    "brand": "Zebra",
    "price": 508949,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZT410 Printhead 300 DPI- P1058930-010",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zt410-printhead-203dpi-p1058930-009",
    "title": "ZEBRA ZT410 PRINTHEAD (203DPI)- P1058930-009",
    "category": "Compute",
    "brand": "Zebra",
    "price": 191910,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZEBRA ZT410 PRINTHEAD (203DPI)- P1058930-009",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zt230-printhead-300dpi-p1037974-011",
    "title": "ZEBRA ZT230 PRINTHEAD (300DPI)- P1037974-011",
    "category": "Compute",
    "brand": "Zebra",
    "price": 683468,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZEBRA ZT230 PRINTHEAD (300DPI)- P1037974-011",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zc300-dual-sided-id-card-printer",
    "title": "Zebra ZC300 Dual-Sided ID Card Printer",
    "category": "Compute",
    "brand": "Zebra",
    "price": 711279,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZC300 Dual-Sided ID Card Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-label-printer-zt-510-300-dpi-4-inch",
    "title": "Zebra Label Printer ZT 510 300 dpi 4 INCH",
    "category": "Compute",
    "brand": "Zebra",
    "price": 293272,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: Label Printer ZT 510 300 dpi 4 INCH",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zt42162-t0g0000z-zt-421-203dpi-label-printer",
    "title": "Zebra ZT42162 421,203dpi Label Printer",
    "category": "Compute",
    "brand": "Zebra",
    "price": 398757,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZT42162 421,203dpi Label Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-tt-zt411-4-barcode-printer-300-dpi",
    "title": "Zebra TT ZT411 4\" Barcode Printer (300 DPI)",
    "category": "Compute",
    "brand": "Zebra",
    "price": 528039,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: TT ZT411 4\" Barcode Printer (300 DPI)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-tt-zt411-4-barcode-printer-203dpi",
    "title": "Zebra TT ZT411 4\" Barcode Printer (203DPI)",
    "category": "Compute",
    "brand": "Zebra",
    "price": 413098,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: TT ZT411 4\" Barcode Printer (203DPI)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zt-230-203-dpi-barcode-printer",
    "title": "Zebra ZT 230, 203 DPI Barcode Printer",
    "category": "Compute",
    "brand": "Zebra",
    "price": 659673,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZT 230, 203 DPI Barcode Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zd230-barcode-label-printer",
    "title": "Zebra ZD230 Barcode Label Printer",
    "category": "Compute",
    "brand": "Zebra",
    "price": 706957,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZD230 Barcode Label Printer",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-zxp-series-3-id-printer-cleaning-kit",
    "title": "Zebra ZXP Series 3 ID Printer Cleaning Kit",
    "category": "Compute",
    "brand": "Zebra",
    "price": 721275,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: B2B IT Solution",
      "Model: ZXP Series 3 ID Printer Cleaning Kit",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "samsung-8gb-ddr3-1333mhz-ecc-ram",
    "title": "SAMSUNG 8GB DDR3 1333MHZ ECC RAM",
    "category": "Compute",
    "brand": "Samsung",
    "price": 568516,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Samsung certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Samsung",
      "Device Type: B2B IT Solution",
      "Model: SAMSUNG 8GB DDR3 1333MHZ ECC RAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "micron-32gb-ddr4-2400mhz-ecc-ram",
    "title": "MICRON 32GB DDR4 2400MHZ ECC RAM",
    "category": "Compute",
    "brand": "MICRON",
    "price": 258984,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original MICRON certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: MICRON",
      "Device Type: B2B IT Solution",
      "Model: 32GB DDR4 2400MHZ ECC RAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "micron-16gb-ddr4-2400mhz-ecc-ram",
    "title": "MICRON 16GB DDR4 2400MHZ ECC RAM",
    "category": "Compute",
    "brand": "MICRON",
    "price": 628186,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original MICRON certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: MICRON",
      "Device Type: B2B IT Solution",
      "Model: 16GB DDR4 2400MHZ ECC RAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "micron-16gb-ddr3l-1600mhz-ecc-ram",
    "title": "MICRON 16GB DDR3L 1600MHZ ECC RAM",
    "category": "Compute",
    "brand": "MICRON",
    "price": 357994,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original MICRON certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: MICRON",
      "Device Type: B2B IT Solution",
      "Model: 16GB DDR3L 1600MHZ ECC RAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-32gb-ddr4-rdimm-2400bus-server-ram",
    "title": "DELL 32GB DDR4 RDIMM 2400BUS SERVER RAM",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 401101,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: DELL 32GB DDR4 RDIMM 2400BUS SERVER RAM",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-6tb-7-2k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "HP 6TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 204778,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 6TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-600gb-15k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "HP 600GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 154001,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 600GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-600gb-15k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "HP 600GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 109406,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 600GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-600gb-10k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "HP 600GB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 185125,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 600GB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-300gb-15k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "HP 300GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HP",
    "price": 333940,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HP certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HP",
      "Device Type: Rack Server",
      "Model: 300GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-300gb-15k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "HP 300GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 184003,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 300GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-300gb-10k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "HP 300GB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 133143,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 300GB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-2tb-7-2k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "HP 2TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 142648,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 2TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-1tb-7-2k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "HP 1TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 120832,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 1TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-1tb-7-2k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "HP 1TB 7.2K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 178223,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 1TB 7.2K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-1-2tb-10k-rpm-sas-2-5-inch-server-hard-drive-1",
    "title": "HP 1.2TB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "HPE",
    "price": 256935,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: HP 1.2TB 10K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-6tb-7-2k-rpm-sas-12gbps-3-5-inch-hot-plug-hard-drive",
    "title": "DELL 6TB 7.2K RPM SAS 12GBPS 3.5 INCH HOT-PLUG HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 211701,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 6TB 7.2K RPM SAS 12GBPS 3.5 INCH HOT-PLUG HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-600gb-15k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "DELL 600GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 258178,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: DELL 600GB 15K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-600gb-15k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "DELL 600GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 221135,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: DELL 600GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-300gb-15k-rpm-sas-2-5-inch-server-hard-drive",
    "title": "DELL 300GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 173079,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: DELL 300GB 15K RPM SAS 2.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-300gb-10k-rpm-sas-2-5-inch-hard-drive",
    "title": "DELL 300GB 10K RPM SAS 2.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 126077,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 300GB 10K RPM SAS 2.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-2tb-7-2k-rpm-sas-3-5-inch-server-hard-drive",
    "title": "DELL 2TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 347995,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Rack Server",
      "Model: DELL 2TB 7.2K RPM SAS 3.5 INCH SERVER HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-2tb-7-2k-rpm-sas-2-5-inch-hard-drive",
    "title": "DELL 2TB 7.2K RPM SAS 2.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 75675,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 2TB 7.2K RPM SAS 2.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-2-4tb-10k-rpm-sas-2-5-inch-hard-drive",
    "title": "DELL 2.4TB 10K RPM SAS 2.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 141777,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 2.4TB 10K RPM SAS 2.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-1tb-7-2k-rpm-sas-3-5-inch-hard-drive",
    "title": "DELL 1TB 7.2K RPM SAS 3.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 228682,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 1TB 7.2K RPM SAS 3.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-1-8tb-10k-rpm-sas-2-5-inch-hard-drive",
    "title": "DELL 1.8TB 10K RPM SAS 2.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 176789,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 1.8TB 10K RPM SAS 2.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-1-2tb-10k-rpm-sas-2-5-inch-hard-drive",
    "title": "DELL 1.2TB 10K RPM SAS 2.5 INCH HARD DRIVE",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 279596,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: B2B IT Solution",
      "Model: DELL 1.2TB 10K RPM SAS 2.5 INCH HARD DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as6512rd-lockerstor-12rd-nas-storage",
    "title": "Asustor AS6512RD Lockerstor 12RD NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 277372,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: Enterprise Storage Drive",
      "Model: AS6512RD Lockerstor 12RD NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as6602t-nas-storage",
    "title": "Asustor AS6602T NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 107899,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: Enterprise Storage Drive",
      "Model: AS6602T NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml350-gen10-server",
    "title": "HPE ProLiant ML350 Gen10 server",
    "category": "Compute",
    "brand": "HPE",
    "price": 447729,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant ML350 Gen10 server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl360-gen10-plus-server",
    "title": "HPE ProLiant DL360 Gen10 Plus server",
    "category": "Compute",
    "brand": "HPE",
    "price": 650272,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL360 Gen10 Plus server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-ucs-c240-m6-2u-sff-rack-server-12-core",
    "title": "Cisco UCS C240 M6 2U SFF Rack Server (12 Core)",
    "category": "Compute",
    "brand": "Cisco",
    "price": 425040,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Rack Server",
      "Model: UCS C240 M6 2U SFF Rack Server (12 Core)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-ucs-c240-m6-2u-sff-rack-server-10-core",
    "title": "Cisco UCS C240 M6 2U SFF Rack Server (10 Core)",
    "category": "Compute",
    "brand": "Cisco",
    "price": 646841,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Rack Server",
      "Model: UCS C240 M6 2U SFF Rack Server (10 Core)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-generation-10-plus-2-x-intel-xeon-silver-4314-64gb-ram-3-x-hpe-2-4tb-hdd-server",
    "title": "HPE ProLiant DL380 Generation 10 PLUS 2 x Intel Xeon-Silver 4314 64GB RAM 3 x HPE 2.4TB HDD Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 239317,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380 Generation 10 PLUS 2 x Intel Xeon-Silver 4314 64GB RAM 3 x HPE 2.4TB HDD Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-generation-10-plus-2-x-intel-xeon-silver-4310-64gb-ram-3-x-hpe-2-4tb-hdd-server",
    "title": "HPE ProLiant DL380 Generation 10 PLUS 2 x Intel Xeon-Silver 4310 64GB RAM 3 x HPE 2.4TB HDD Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 214932,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380 Generation 10 PLUS 2 x Intel Xeon-Silver 4310 64GB RAM 3 x HPE 2.4TB HDD Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-gen-10-plus-rack-server",
    "title": "HPE ProLiant DL380 Gen10 Plus Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 693094,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: ProLiant DL380 Gen10 Plus Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-t440-tower-server",
    "title": "Dell EMC PowerEdge T440 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 736972,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: EMC PowerEdge T440 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r750-rack-server",
    "title": "Dell PowerEdge R750 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 597246,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R750 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r750-12c-rack-server",
    "title": "Dell PowerEdge R750 12c Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 686848,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Rack Server",
      "Model: PowerEdge R750 12c Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r750xs-rack-server",
    "title": "Dell PowerEdge R750xs Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 436737,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R750xs Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r450-rack-server",
    "title": "Dell PowerEdge R450 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 662796,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R450 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t150-tower-server",
    "title": "Dell PowerEdge T150 Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 399945,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge T150 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asus-ts100-e10-pi4-intel-xeon-e-2236-tower-server",
    "title": "ASUS TS100-E10-PI4 Intel Xeon E-2236 Tower Server",
    "category": "Compute",
    "brand": "Asus",
    "price": 603664,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Asus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asus",
      "Device Type: Rack Server",
      "Model: ASUS TS100-E10-PI4 Intel Xeon E-2236 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "red-hat-enterprise-linux-server-premium-annual-subscription",
    "title": "Red Hat Enterprise Linux Server Premium (Annual Subscription)",
    "category": "Compute",
    "brand": "Linux",
    "price": 153499,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Linux certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Linux",
      "Device Type: Rack Server",
      "Model: Red Hat Enterprise  Server Premium (Annual Subscription)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsan-enterprise-1-processor-1yr-e-ltu",
    "title": "VMware vSAN Enterprise 1 Processor 1yr E-LTU",
    "category": "Software",
    "brand": "VMware",
    "price": 131663,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSAN Enterprise 1 Processor 1yr E-LTU",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsan-standard-1-processor-1-year-e-ltu-1",
    "title": "VMware vSAN Standard 1 Processor 1-year E-LTU",
    "category": "Software",
    "brand": "VMware",
    "price": 100523,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSAN Standard 1 Processor 1-year E-LTU",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "red-hat-enterprise-linux-server-standard-annual-subscription",
    "title": "Red Hat Enterprise Linux Server Standard (Annual Subscription)",
    "category": "Compute",
    "brand": "Linux",
    "price": 527512,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Linux certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Linux",
      "Device Type: Rack Server",
      "Model: Red Hat Enterprise  Server Standard (Annual Subscription)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zimbra-collaboration-suite-professional-edition",
    "title": "Zimbra Collaboration Suite (Professional Edition)",
    "category": "Compute",
    "brand": "Zimbra",
    "price": 614441,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zimbra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zimbra",
      "Device Type: Email-Solution",
      "Model: Collaboration Suite (Professional Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zimbra-collaboration-suite-standard-edition",
    "title": "Zimbra Collaboration Suite (Standard Edition)",
    "category": "Compute",
    "brand": "Zimbra",
    "price": 585693,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Zimbra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zimbra",
      "Device Type: B2B IT Solution",
      "Model: Collaboration Suite (Standard Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zoho-mail-standard",
    "title": "Zoho Mail Standard",
    "category": "Compute",
    "brand": "Zoho Mail",
    "price": 398965,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zoho Mail certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zoho Mail",
      "Device Type: Email-Solution",
      "Model: Standard",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zoho-mail-professional",
    "title": "Zoho Mail Professional",
    "category": "Compute",
    "brand": "Zoho Mail",
    "price": 501529,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zoho Mail certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zoho Mail",
      "Device Type: Email-Solution",
      "Model: Professional",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zoho-mail-lite-5gb",
    "title": "Zoho Mail Lite- 5GB",
    "category": "Compute",
    "brand": "Zoho Mail",
    "price": 612392,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zoho Mail certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zoho Mail",
      "Device Type: Email-Solution",
      "Model: Lite- 5GB",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zoho-mail-premium",
    "title": "Zoho Mail Premium",
    "category": "Compute",
    "brand": "Zoho Mail",
    "price": 644561,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zoho Mail certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zoho Mail",
      "Device Type: Email-Solution",
      "Model: Premium",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zoho-mail-lite-10gb",
    "title": "Zoho Mail Lite-10 GB",
    "category": "Compute",
    "brand": "Zoho Mail",
    "price": 535094,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate email-solution featuring original Zoho Mail certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zoho Mail",
      "Device Type: Email-Solution",
      "Model: Lite-10 GB",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-install-configure-manage-v7-on-demand",
    "title": "VMware vSphere: Install, Configure, Manage [V7] - On Demand",
    "category": "Software",
    "brand": "VMware",
    "price": 170480,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSphere: Install, Configure, Manage [V7] - On Demand",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-backup-server-premium-subscription-1-year",
    "title": "Proxmox Backup Server Premium Subscription 1 year",
    "category": "Software",
    "brand": "Proxmox",
    "price": 182557,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Backup Server Premium Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-backup-server-standard-subscription-1-year",
    "title": "Proxmox Backup Server Standard Subscription 1 year",
    "category": "Software",
    "brand": "Proxmox",
    "price": 92996,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Backup Server Standard Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-backup-server-basic-subscription-1-year",
    "title": "Proxmox Backup Server Basic Subscription 1 year",
    "category": "Software",
    "brand": "Proxmox",
    "price": 248856,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Backup Server Basic Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-premium-subscription-1-year-1",
    "title": "Proxmox Mail Gateway Premium Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 152951,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Premium Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-standard-subscription-1-year-1",
    "title": "Proxmox Mail Gateway Standard Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 358042,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Standard Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-basic-subscription-1-year-1",
    "title": "Proxmox Mail Gateway Basic Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 225888,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Basic Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-backup-server-community-subscription-1-year",
    "title": "Proxmox Backup Server Community Subscription 1 year",
    "category": "Software",
    "brand": "Proxmox",
    "price": 81482,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Backup Server Community Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-premium-subscription-1-year",
    "title": "Proxmox Mail Gateway Premium Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 660082,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Premium Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-standard-subscription-1-year",
    "title": "Proxmox Mail Gateway Standard Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 724166,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Standard Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-basic-subscription-1-year",
    "title": "Proxmox Mail Gateway Basic Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 322482,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Basic Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-mail-gateway-community-subscription-1-year",
    "title": "Proxmox Mail Gateway Community Subscription 1 year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 434393,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Mail Gateway Community Subscription 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-premium-subscription-4-cpus-year",
    "title": "Proxmox VE Premium Subscription 4 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 675667,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Premium Subscription 4 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-premium-subscription-2-cpus-year",
    "title": "Proxmox VE Premium Subscription 2 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 167674,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Premium Subscription 2 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-premium-subscription-1-cpu-year",
    "title": "Proxmox VE Premium Subscription 1 CPU/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 403368,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Premium Subscription 1 CPU/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-standard-subscription-4-cpus-year",
    "title": "Proxmox VE Standard Subscription 4 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 269473,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Standard Subscription 4 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-standard-subscription-2-cpus-year",
    "title": "Proxmox VE Standard Subscription 2 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 230787,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Standard Subscription 2 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-standard-subscription-1-cpu-year",
    "title": "Proxmox VE Standard Subscription 1 CPU/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 744420,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Standard Subscription 1 CPU/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-basic-subscription-4-cpus-year",
    "title": "Proxmox VE Basic Subscription 4 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 392022,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Basic Subscription 4 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-basic-subscription-2-cpus-year",
    "title": "Proxmox VE Basic Subscription 2 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 307616,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Basic Subscription 2 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-basic-subscription-1-cpu-year",
    "title": "Proxmox VE Basic Subscription 1 CPU/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 269743,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Basic Subscription 1 CPU/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-community-subscription-4-cpus-year",
    "title": "Proxmox VE Community Subscription 4 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 640700,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Community Subscription 4 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-community-subscription-2-cpus-year",
    "title": "Proxmox VE Community Subscription 2 CPUs/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 226137,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Community Subscription 2 CPUs/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "proxmox-ve-community-subscription-1-cpu-year",
    "title": "Proxmox VE Community Subscription 1 CPU/year",
    "category": "Compute",
    "brand": "Proxmox",
    "price": 728757,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original Proxmox certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Proxmox",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: VE Community Subscription 1 CPU/year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-1232pxu-rp-4g",
    "title": "QNAP TS-1232PXU-RP-4G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 581240,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-1232PXU-RP-4G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-231p3-2g",
    "title": "QNAP TS-231P3-2G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 277574,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-231P3-2G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-432pxu-rp-2g",
    "title": "QNAP TS-432PXU-RP-2G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 729608,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-432PXU-RP-2G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-462-2g",
    "title": "QNAP TS-462-2G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 257569,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-462-2G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-664-8g",
    "title": "QNAP TS-664-8G 6 Bay NAS Storage",
    "category": "Storage",
    "brand": "Qnap",
    "price": 103796,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: Enterprise Storage Drive",
      "Model: QNAP TS-664-8G 6 Bay NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-832pxu-rp-4g",
    "title": "QNAP TS-832PXU-RP-4G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 476313,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-832PXU-RP-4G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-873a-8g",
    "title": "QNAP TS-873A-8G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 594865,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-873A-8G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-h1886xu-rp-r2-d1622-32g",
    "title": "QNAP TS-H1886XU-RP-R2-D1622-32G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 732075,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-H1886XU-RP-R2-D1622-32G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-h1887xu-rp-e2336-32g",
    "title": "QNAP TS-H1887XU-RP-E2336-32G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 733028,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-H1887XU-RP-E2336-32G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-h2287xu-rp-e2336-32g",
    "title": "QNAP TS-H2287XU-RP-E2336-32G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 500094,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-H2287XU-RP-E2336-32G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "qnap-ts-h3087xu-rp-e2378-64g",
    "title": "QNAP TS-H3087XU-RP-E2378-64G",
    "category": "Compute",
    "brand": "Qnap",
    "price": 256450,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Qnap certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Qnap",
      "Device Type: B2B IT Solution",
      "Model: QNAP TS-H3087XU-RP-E2378-64G",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-management-pack-for-microsoft-system-center",
    "title": "Veeam Management Pack for Microsoft System Center",
    "category": "Software",
    "brand": "Veeam",
    "price": 191634,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Management Pack for Microsoft System Center",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-disaster-recovery-orchestrator",
    "title": "Veeam Disaster Recovery Orchestrator",
    "category": "Storage",
    "brand": "Veeam",
    "price": 258843,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Disaster Recovery Orchestrator",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-one",
    "title": "Veeam ONE",
    "category": "Compute",
    "brand": "Veeam",
    "price": 274258,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: ONE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-for-google-cloud",
    "title": "Veeam Backup for Google Cloud",
    "category": "Software",
    "brand": "Veeam",
    "price": 90565,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup for Google Cloud",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-for-microsoft-azure",
    "title": "Veeam Backup for Microsoft Azure",
    "category": "Software",
    "brand": "Veeam",
    "price": 120020,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup for Microsoft Azure",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kasten-k10-by-veeam",
    "title": "Kasten K10 by Veeam",
    "category": "Compute",
    "brand": "Veeam",
    "price": 570217,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Kasten K10 by",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-for-aws",
    "title": "Veeam Backup for AWS",
    "category": "Software",
    "brand": "Veeam",
    "price": 153277,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup for AWS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-for-salesforce",
    "title": "Veeam Backup for Salesforce",
    "category": "Software",
    "brand": "Veeam",
    "price": 185153,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup for Salesforce",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-for-microsoft-365",
    "title": "Veeam Backup for Microsoft 365",
    "category": "Software",
    "brand": "Veeam",
    "price": 176212,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup for Microsoft 365",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-availability-suite",
    "title": "Veeam Availability Suite",
    "category": "Compute",
    "brand": "Veeam",
    "price": 170947,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Availability Suite",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-replication",
    "title": "Veeam Backup & Replication",
    "category": "Software",
    "brand": "Veeam",
    "price": 231854,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup & Replication",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-workstation-17-player",
    "title": "VMware Workstation 17 Player",
    "category": "Software",
    "brand": "VMware",
    "price": 182665,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Workstation 17 Player",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-workstation-17-pro",
    "title": "VMware Workstation 17 Pro",
    "category": "Software",
    "brand": "VMware",
    "price": 195253,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Workstation 17 Pro",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-fusion-13-player",
    "title": "VMware Fusion 13 Player",
    "category": "Software",
    "brand": "VMware",
    "price": 239884,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Fusion 13 Player",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-fusion-13-pro",
    "title": "VMware Fusion 13 Pro",
    "category": "Software",
    "brand": "VMware",
    "price": 153289,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Fusion 13 Pro",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-essentials-plus-kit",
    "title": "VMware vSphere Essentials Plus Kit",
    "category": "Software",
    "brand": "VMware",
    "price": 21582,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSphere Essentials Plus Kit",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-enterprise-plus",
    "title": "VMware vSphere Enterprise Plus",
    "category": "Software",
    "brand": "VMware",
    "price": 68451,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSphere Enterprise Plus",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-essentials-kit",
    "title": "VMware vSphere Essentials Kit",
    "category": "Software",
    "brand": "VMware",
    "price": 184481,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSphere Essentials Kit",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-customer-connect-learning-premium-subscription",
    "title": "VMware Customer Connect Learning Premium Subscription",
    "category": "Software",
    "brand": "VMware",
    "price": 21690,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: Customer Connect Learning Premium Subscription",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-home-office-security-pack-new-1-year-5-user-1",
    "title": "ESET Home Office Security Pack New 1-year 5-user",
    "category": "Networking",
    "brand": "Eset",
    "price": 154513,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Home Office Security Pack New 1-year 5-user",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-3-user-with-3-year-license-2021-edition",
    "title": "ESET Internet Security 3 User with 3 year License (2021 Edition)",
    "category": "Networking",
    "brand": "Eset",
    "price": 107860,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security 3 User with 3 year License (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-smart-security-premium-2019-edition-one-user",
    "title": "ESET Smart Security Premium 2019 Edition (One user)",
    "category": "Networking",
    "brand": "Eset",
    "price": 373801,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Smart Security Premium 2019 Edition (One user)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-replication-enterprise-plus-10-instance-universal-license-3-year-subscription-upfront-billing-production-24-7-support",
    "title": "Veeam Backup & Replication Enterprise Plus 10 Instance Universal License 3 Year Subscription Upfront Billing & Production (24/7) Support",
    "category": "Software",
    "brand": "Veeam",
    "price": 239644,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: Enterprise Software & Licensing",
      "Model: Backup & Replication Enterprise Plus 10 Instance Universal License 3 Year Subscription Upfront Billing & Production (24/7) Support",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-replication-enterprise-plus-10-instance-universal-license-1-year-subscription-upfront-billing-production-24-7-support",
    "title": "Veeam Backup & Replication Enterprise Plus 10 Instance Universal License 1 Year Subscription Upfront Billing & Production (24/7) Support",
    "category": "Software",
    "brand": "Veeam",
    "price": 218055,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise software & licensing featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: Enterprise Software & Licensing",
      "Model: Backup & Replication Enterprise Plus 10 Instance Universal License 1 Year Subscription Upfront Billing & Production (24/7) Support",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-replication-standard",
    "title": "Veeam Backup and Replication Standard",
    "category": "Software",
    "brand": "Veeam",
    "price": 66231,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup and Replication Standard",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "veeam-backup-and-replication-enterprise-plus",
    "title": "Veeam Backup and Replication Enterprise Plus",
    "category": "Software",
    "brand": "Veeam",
    "price": 89152,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Veeam certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Veeam",
      "Device Type: B2B IT Solution",
      "Model: Backup and Replication Enterprise Plus",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortigaterugged-35d-fgr-35d",
    "title": "FORTINET FORTIGATERUGGED-35D FGR-35D",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 253254,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FORTINET FORTIGATERUGGED-35D FGR-35D",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-single-user-with-03-years-license-1",
    "title": "ESET Internet Security Single User with 03 Years License",
    "category": "Networking",
    "brand": "Eset",
    "price": 129978,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security Single User with 03 Years License",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortiap-231f-2x2-mu-mimo-access-point-with-tri-radio-fap-231f-a",
    "title": "FORTINET FortiAP 231F 2x2 MU-MIMO Access Point with Tri Radio (FAP-231F-A)",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 139871,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FORTINET FortiAP 231F 2x2 MU-MIMO Access Point with Tri Radio (FAP-231F-A)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortigate-80f-10-gbps-firewall-throughput-900-mbps-threat-protection",
    "title": "Fortinet FortiGate 80F | 10 Gbps Firewall Throughput | 900 Mbps Threat Protection",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 319770,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FortiGate 80F | 10 Gbps Firewall Throughput | 900 Mbps Threat Protection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortigate-100f-20-gbps-firewall-throughput-1-gbps-threat-protection",
    "title": "Fortinet FortiGate 100F | 20 Gbps Firewall Throughput | 1 Gbps Threat Protection",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 346296,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FortiGate 100F | 20 Gbps Firewall Throughput | 1 Gbps Threat Protection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortigate-60f-10-gbps-firewall-throughput-700-mbps-threat-protection",
    "title": "Fortinet FortiGate 60F | 10 Gbps Firewall Throughput | 700 Mbps Threat Protection",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 281848,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FortiGate 60F | 10 Gbps Firewall Throughput | 700 Mbps Threat Protection",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fortinet-fortigate-40f-hardware",
    "title": "FORTINET FortiGate 40F Hardware",
    "category": "Networking",
    "brand": "Fortinet",
    "price": 99409,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate firewall featuring original Fortinet certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fortinet",
      "Device Type: Firewall",
      "Model: FORTINET FortiGate 40F Hardware",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-single-user-for-1-year-with-free-backpack",
    "title": "ESET Internet Security Single User for 1 Year with a Free ESET Backpack",
    "category": "Networking",
    "brand": "Eset",
    "price": 395373,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security Single User for 1 Year with a Free ESET Backpack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-small-office-security-5-user-1-server",
    "title": "Kaspersky Small Office Security 5 User 1 Server",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 227838,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Small Office Security 5 User 1 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-small-office-security-10-user-1-server",
    "title": "Kaspersky Small Office Security 10 User 1 Server",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 137819,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Small Office Security 10 User 1 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-small-office-security-1-server-5-user-1-fileserver-5desktops-5mobiles",
    "title": "Kaspersky Small Office Security 1Server 5 User(1 FileServer+5Desktops+5Mobiles)",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 98551,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Small Office Security 1Server 5 User(1 FileServer+5Desktops+5Mobiles)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-small-office-security-1-server-10-user-1-fileserver-10desktops-10mobiles",
    "title": "Kaspersky Small Office Security 1 Server 10 User (1 FileServer+10Desktops+10Mobiles)",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 68092,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Small Office Security 1 Server 10 User (1 FileServer+10Desktops+10Mobiles)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-3-user-for-1-year-with-a-free-eset-backpack-1",
    "title": "ESET Internet Security 3 User for 1 Year with a Free ESET Backpack",
    "category": "Networking",
    "brand": "Eset",
    "price": 108753,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security 3 User for 1 Year with a Free ESET Backpack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-anti-virus-2021-1-user-1-year-license-pc",
    "title": "Kaspersky Anti-Virus 2021 (1 User | 1 Year License | PC)",
    "category": "Software",
    "brand": "kaspersky",
    "price": 26775,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Anti-Virus 2021 (1 User | 1 Year License | PC)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-anti-virus-2021-3-user-1-year-license-pc",
    "title": "Kaspersky Anti-Virus 2021 (3 User | 1 Year License | PC)",
    "category": "Software",
    "brand": "kaspersky",
    "price": 221241,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Anti-Virus 2021 (3 User | 1 Year License | PC)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-internet-security-2022-1-user-1-year-license-pc-mac",
    "title": "Kaspersky Internet Security 2022 (1 User | 1 Year License | PC / Mac)",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 178013,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Internet Security 2022 (1 User | 1 Year License | PC / Mac)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-internet-security-for-android-1-device-1-year-license-smart-phone-tablet",
    "title": "Kaspersky Internet Security For Android (1 Device | 1 Year License | Smart Phone / Tablet)",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 258628,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Endpoint Security",
      "Model: Kaspersky Internet Security For Android (1 Device | 1 Year License | Smart Phone / Tablet)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-safe-kids-1-parent-account-1-year-license-pc-mac-mobile",
    "title": "Kaspersky Safe Kids (1 Parent Account | 1 Year License | PC / Mac / Mobile)",
    "category": "Software",
    "brand": "kaspersky",
    "price": 180825,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Antivirus",
      "Model: Kaspersky Safe Kids (1 Parent Account | 1 Year License | PC / Mac / Mobile)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-antivirus-for-2-user-2021",
    "title": "ESET Internet Security Antivirus For 2 User (2021 Edition)",
    "category": "Networking",
    "brand": "Eset",
    "price": 185365,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security Antivirus For 2 User (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-cyber-security-pro-internet-security-mac",
    "title": "ESET Cyber Security Pro Internet Security for Mac",
    "category": "Networking",
    "brand": "Eset",
    "price": 139174,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Cyber Security Pro Internet Security for Mac",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-one-user-1",
    "title": "ESET Internet Security One User",
    "category": "Networking",
    "brand": "Eset",
    "price": 129068,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security One User",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "kaspersky-total-security-one-user-1-year",
    "title": "Kaspersky Total Security One-User 1 year",
    "category": "Networking",
    "brand": "kaspersky",
    "price": 344414,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original kaspersky certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: kaspersky",
      "Device Type: Antivirus",
      "Model: Kaspersky Total Security One-User 1 year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-nod32-antivirus-3-user-for-1-year-2021",
    "title": "ESET NOD32 Antivirus 3 User for 1 Year (2021 Edition)",
    "category": "Compute",
    "brand": "Eset",
    "price": 532633,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET NOD32 Antivirus 3 User for 1 Year (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-nod32-antivirus-2021",
    "title": "ESET NOD32 Antivirus (2021 Edition)",
    "category": "Compute",
    "brand": "Eset",
    "price": 165510,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET NOD32 Antivirus (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "as6512rd-asustor-nas-drive",
    "title": "AS6512RD ASUSTOR NAS DRIVE",
    "category": "Compute",
    "brand": "Asustor",
    "price": 726800,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS6512RD ASUSTOR NAS DRIVE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-server-standard-2022-2-core",
    "title": "Microsoft Windows Server Standard 2022 - 2 Core License Pack (CSP Perpetual)",
    "category": "Software",
    "brand": "Microsoft",
    "price": 80578,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Rack Server",
      "Model: Windows Server Standard 2022 - 2 Core License Pack (CSP Perpetual)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "windows-server-2022-standard-16-core-license-pack-1",
    "title": "Windows Server 2022 Standard - 16 Core License Pack",
    "category": "Software",
    "brand": "Microsoft",
    "price": 144702,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Rack Server",
      "Model: Windows Server 2022 Standard - 16 Core License Pack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-server-2019-standard-oei-dvd-2",
    "title": "Microsoft Windows Server 2019 Standard OEI DVD",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 504583,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Rack Server",
      "Model: Windows Server 2019 Standard OEI DVD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "windows-ggwa-windows-11-professional",
    "title": "Windows GGWA - Windows 11 Professional - Legalization GetGenuine (CSP Perpetual)",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 155161,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: B2B IT Solution",
      "Model: Windows GGWA - Windows 11 Professional - Legalization GetGenuine (CSP Perpetual)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-761880-001-smart-array-p840-12gbps-pcie-2-port-scsi-raid-controller-card",
    "title": "HPE 761880-001 Smart Array P840 12Gbps PCIE 2-Port SCSI RAID Controller Card",
    "category": "Compute",
    "brand": "HPE",
    "price": 536149,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server spare parts featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Server Spare Parts",
      "Model: 761880-001 Smart Array P840 12Gbps PCIE 2-Port SCSI RAID Controller Card",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "server-troubleshooting-assessment",
    "title": "Server Troubleshooting & Assessment",
    "category": "Compute",
    "brand": "Servicing24",
    "price": 616038,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server support featuring original Servicing24 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Servicing24",
      "Device Type: Server Support",
      "Model: Server Troubleshooting & Assessment",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "server-raid-configuration-and-red-hat-linux-os-installation",
    "title": "Server RAID Configuration and Red Hat Linux OS Installation",
    "category": "Compute",
    "brand": "Servicing24",
    "price": 438366,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server support featuring original Servicing24 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Servicing24",
      "Device Type: Server Support",
      "Model: Server RAID Configuration and Red Hat Linux OS Installation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "server-raid-configuration-and-windows-server-os-installation",
    "title": "Server RAID Configuration and Windows Server OS Installation",
    "category": "Compute",
    "brand": "Servicing24",
    "price": 339747,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate service & support featuring original Servicing24 certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Servicing24",
      "Device Type: Service & Support",
      "Model: Server RAID Configuration and Windows Server OS Installation",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-1-point-2tb-10k-rpm-sas-2-5-inch-sff-server-hdd",
    "title": "HPE 1.2TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512n Server HDD",
    "category": "Storage",
    "brand": "HPE",
    "price": 213400,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate 1.2 tb featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: 1.2 TB",
      "Model: 1.2TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512n Server HDD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-1-point-8tb-10k-rpm-sas-server-hdd",
    "title": "HPE 1.8TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512e Server HDD",
    "category": "Storage",
    "brand": "HPE",
    "price": 318078,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate 1.8 tb featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: 1.8 TB",
      "Model: 1.8TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512e Server HDD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-2-point-5-tb-10k-rpm-sas-server-hdd",
    "title": "HPE 2.4TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512e Server HDD",
    "category": "Storage",
    "brand": "HPE",
    "price": 109811,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate 2.4 tb featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: 2.4 TB",
      "Model: 2.4TB 10K RPM SAS 2.5 INCH SFF 12G Enterprise 512e Server HDD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "logitech-rally-mic-pod-hub",
    "title": "Logitech Rally Mic Pod Hub",
    "category": "Compute",
    "brand": "Logitech",
    "price": 184491,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate mic pod featuring original Logitech certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Logitech",
      "Device Type: Mic Pod",
      "Model: Rally Mic Pod Hub",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-storeeasy-1660-nas-storage",
    "title": "HPE StoreEasy 1660 NAS Storage",
    "category": "Storage",
    "brand": "HPE",
    "price": 307416,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas storage featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: NAS Storage",
      "Model: StoreEasy 1660 NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-fresco-cc-for-teams",
    "title": "Adobe Fresco CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 303318,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Fresco CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-substance-3d-collection-for-teams",
    "title": "Adobe Substance 3D Collection for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 369793,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Substance 3D Collection for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-incopy-cc-for-teams",
    "title": "Adobe InCopy CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 286563,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: InCopy CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-acrobat-sign-for-business",
    "title": "Adobe Acrobat Sign for Business",
    "category": "Compute",
    "brand": "Adobe",
    "price": 274662,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Acrobat Sign for Business",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-framemaker-for-teams",
    "title": "Adobe FrameMaker for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 726090,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: FrameMaker for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-animate-cc-pro-for-teams",
    "title": "Adobe Animate CC - Pro for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 744605,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Animate CC - Pro for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-dimension-for-teams",
    "title": "Adobe Dimension for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 579520,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Dimension for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-audition-cc-pro-for-teams",
    "title": "Adobe Audition CC - Pro for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 466923,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Audition CC - Pro for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-indesign-cc-for-teams",
    "title": "Adobe InDesign CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 438758,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: InDesign CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-after-effects-cc-for-teams",
    "title": "Adobe After Effects CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 422221,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: After Effects CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-lightroom-cc-pro-for-teams",
    "title": "Adobe Lightroom CC - Pro for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 615947,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Lightroom CC - Pro for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-dreamweaver-cc-for-teams",
    "title": "Adobe Dreamweaver CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 688592,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Dreamweaver CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-xd-cc-for-teams",
    "title": "Adobe XD CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 290573,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: XD CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-creative-cloud-for-teams-all-apps",
    "title": "Adobe Creative Cloud for Teams All Apps",
    "category": "Compute",
    "brand": "Adobe",
    "price": 502842,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Creative Cloud for Teams All Apps",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-sql-server-2022-standard-2-core-license-pack-csp-perpetual",
    "title": "Microsoft SQL Server 2022 Standard 2 Core License Pack (CSP Perpetual)",
    "category": "Software",
    "brand": "Microsoft",
    "price": 125155,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate sql server featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: SQL Server",
      "Model: SQL Server 2022 Standard 2 Core License Pack (CSP Perpetual)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-sql-server-2022-standard-csp-perpetual",
    "title": "Microsoft SQL Server 2022 Standard (CSP Perpetual)",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 423925,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate sql server featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: SQL Server",
      "Model: SQL Server 2022 Standard (CSP Perpetual)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-acrobat-standard-dc-for-teams",
    "title": "Adobe Acrobat Standard DC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 277989,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Acrobat Standard DC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-smart-security-premium-2019-edition-03-user",
    "title": "ESET Smart Security Premium 2019 Edition ( Three user )",
    "category": "Networking",
    "brand": "Eset",
    "price": 418815,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Smart Security Premium 2019 Edition ( Three user )",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-acrobat-pro-dc-for-teams",
    "title": "Adobe Acrobat Pro DC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 176852,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Acrobat Pro DC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-premiere-pro-cc-pro-for-teams",
    "title": "Adobe Premiere Pro CC - Pro for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 354928,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Premiere Pro CC - Pro for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-multi-device-security-pack-for-3-user",
    "title": "ESET Multi-Device Security Pack for 3 User",
    "category": "Networking",
    "brand": "Eset",
    "price": 286205,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Multi-Device Security Pack for 3 User",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-illustrator-cc-for-teams",
    "title": "Adobe Illustrator CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 664473,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Illustrator CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-home-office-security-pack-new-1-year-5-user",
    "title": "ESET Home Office Security Pack New 1-year 5-user",
    "category": "Networking",
    "brand": "Eset",
    "price": 366442,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Home Office Security Pack New 1-year 5-user",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "adobe-photoshop-cc-for-teams",
    "title": "Adobe Photoshop CC for Teams",
    "category": "Compute",
    "brand": "Adobe",
    "price": 668848,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Adobe certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Adobe",
      "Device Type: B2B IT Solution",
      "Model: Photoshop CC for Teams",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-5-user-1-year",
    "title": "ESET Internet Security 5 User 1 Year",
    "category": "Networking",
    "brand": "Eset",
    "price": 318363,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security 5 User 1 Year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-3-user-1-year",
    "title": "ESET Internet Security 3 User 1 Year",
    "category": "Networking",
    "brand": "Eset",
    "price": 438881,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security 3 User 1 Year",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "windows-server-2022-datacenter-16-core-license-pack",
    "title": "Windows Server 2022 Datacenter - 16 Core License Pack",
    "category": "Software",
    "brand": "Microsoft",
    "price": 245418,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate windows featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Windows",
      "Model: Windows Server 2022 Datacenter - 16 Core License Pack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-server-2022-remote-desktop-services-1-device-cal-csp-perpetual",
    "title": "Microsoft Windows Server 2022 Remote Desktop Services - 1 Device CAL (CSP Perpetual)",
    "category": "Software",
    "brand": "Microsoft",
    "price": 34165,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate windows featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Windows",
      "Model: Windows Server 2022 Remote Desktop Services - 1 Device CAL (CSP Perpetual)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "windows-server-2022-user-cal",
    "title": "Windows Server 2022 - User CAL",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 223570,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate windows featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Windows",
      "Model: Windows Server 2022 - User CAL",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "windows-server-2022-device-cal",
    "title": "Windows Server 2022 - Device CAL",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 333652,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate windows featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Windows",
      "Model: Windows Server 2022 - Device CAL",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-2-user-for-1-year-with-a-free-eset-backpack",
    "title": "ESET Internet Security 2 User for 1 Year with a Free ESET Backpack",
    "category": "Networking",
    "brand": "Eset",
    "price": 398766,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Internet Security 2 User for 1 Year with a Free ESET Backpack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-3-user-for-1-year-with-a-free-eset-backpack",
    "title": "ESET Internet Security 3 User for 1 Year with a Free ESET Backpack",
    "category": "Networking",
    "brand": "Eset",
    "price": 442993,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Internet Security 3 User for 1 Year with a Free ESET Backpack",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-antivirus-for-2-user-2021-edition",
    "title": "ESET Internet Security Antivirus For 2 User (2021 Edition)",
    "category": "Networking",
    "brand": "Eset",
    "price": 249442,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Internet Security Antivirus For 2 User (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-cyber-security-pro-internet-security-for-mac",
    "title": "ESET Cyber Security Pro Internet Security for Mac",
    "category": "Networking",
    "brand": "Eset",
    "price": 271673,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Cyber Security Pro Internet Security for Mac",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-one-user",
    "title": "ESET Internet Security One User",
    "category": "Networking",
    "brand": "Eset",
    "price": 262479,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Internet Security One User",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-nod32-antivirus-3-user-for-1-year-2021-edition",
    "title": "ESET NOD32 Antivirus 3 User for 1 Year (2021 Edition)",
    "category": "Compute",
    "brand": "Eset",
    "price": 226165,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET NOD32 Antivirus 3 User for 1 Year (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-mobile-security-for-android-2022",
    "title": "ESET Mobile Security for Android 2021",
    "category": "Networking",
    "brand": "Eset",
    "price": 215143,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET Mobile Security for Android 2021",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "office-ltsc-professional-plus-2021",
    "title": "Office LTSC Professional Plus 2021",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 343788,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: Office LTSC Professional Plus 2021",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "office-ltsc-standard-2021",
    "title": "Office LTSC Standard 2021",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 467218,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: Office LTSC Standard 2021",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-internet-security-one-user-only-key",
    "title": "ESET Internet Security One User (Only Key)",
    "category": "Networking",
    "brand": "Eset",
    "price": 146826,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Internet Security One User (Only Key)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "office-home-and-business-2021-english-apac-em-medialess",
    "title": "Office Home and Business 2021 English APAC EM Medialess",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 488148,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: Office Home and Business 2021 English APAC EM Medialess",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-nod32-antivirus-2021-edition",
    "title": "ESET NOD32 Antivirus (2021 Edition)",
    "category": "Compute",
    "brand": "Eset",
    "price": 200368,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate antivirus featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Antivirus",
      "Model: ESET NOD32 Antivirus (2021 Edition)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-office-home-and-business-2020",
    "title": "Microsoft Office Home and Business 2019",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 544127,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: Office Home and Business 2019",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-office-home-and-business-2016-for-mac",
    "title": "Microsoft Office Home and Business 2016 for Mac",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 232882,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: Office Home and Business 2016 for Mac",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-365-family-for-6-user-1-year-subscription",
    "title": "Microsoft 365 Family For 6 User (1 Year Subscription)",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 610351,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate software featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Software",
      "Model: 365 Family For 6 User (1 Year Subscription)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ms-office-365-personal",
    "title": "Microsoft 365 Personal For 1 User (01 Year Subscription)",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 322902,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate office 365 featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Office 365",
      "Model: 365 Personal For 1 User (01 Year Subscription)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-11-professional-64-bit-eng",
    "title": "Microsoft Windows 11 Professional 64 Bit ENG",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 349655,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: B2B IT Solution",
      "Model: Windows 11 Professional 64 Bit ENG",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-10-professional-64bit-eng",
    "title": "Microsoft Windows 10 Professional 64bit ENG",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 242650,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: B2B IT Solution",
      "Model: Windows 10 Professional 64bit ENG",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "apc-20kva-easy-on-line-ups",
    "title": "APC 20KVA Easy On Line UPS",
    "category": "Compute",
    "brand": "APC",
    "price": 518688,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original APC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: APC",
      "Device Type: Online UPS",
      "Model: 20KVA Easy On Line UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "apc-3kva-rackmount-easy-on-line-ups",
    "title": "APC 3KVA Rackmount Easy On-Line UPS",
    "category": "Compute",
    "brand": "APC",
    "price": 349755,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original APC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: APC",
      "Device Type: Online UPS",
      "Model: 3KVA Rackmount Easy On-Line UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs310tp-managed-desktop-switch",
    "title": "Netgear GS310TP 8-Port Gigabit PoE+ 2 SFP Managed  Desktop Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 420255,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS310TP 8-Port Gigabit PoE+ 2 SFP Managed  Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs108lp-8-port-pro-safe-gigabit-poe-unmanaged-switch",
    "title": "Netgear GS108LP 8 Port Pro Safe Gigabit PoE Unmanaged Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 226621,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS108LP 8 Port Pro Safe Gigabit PoE Unmanaged Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs108pe-8-port-gigabit-plus-switch",
    "title": "Netgear GS108PE 8-Port Gigabit Plus Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 370819,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS108PE 8-Port Gigabit Plus Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs308p-8-port-gigabit-switch",
    "title": "Netgear GS308P 8-Port Gigabit Unmanage Desktop Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 256012,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS308P 8-Port Gigabit Unmanage Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs305p-5-port-gigabit-switch",
    "title": "Netgear GS305P 5-Port Gigabit Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 89487,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS305P 5-Port Gigabit Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-gs308-8-port-gigabit-switch",
    "title": "Netgear GS308 8-Port Gigabit Switch",
    "category": "Networking",
    "brand": "Netgear",
    "price": 367651,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate managed switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Managed Switch",
      "Model: GS308 8-Port Gigabit Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "eset-mobile-security-for-android-2021",
    "title": "ESET Mobile Security for Android 2021",
    "category": "Networking",
    "brand": "Eset",
    "price": 246321,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate endpoint security featuring original Eset certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Eset",
      "Device Type: Endpoint Security",
      "Model: ESET Mobile Security for Android 2021",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vmware-vsphere-standard",
    "title": "VMware vSphere Standard",
    "category": "Software",
    "brand": "VMware",
    "price": 39234,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate data center virtualization & cloud infrastructure featuring original VMware certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: VMware",
      "Device Type: Data Center Virtualization & Cloud Infrastructure",
      "Model: vSphere Standard",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-office-365-visio-plan-1-csp-annual-subscription",
    "title": "Microsoft Office 365 Visio Plan 1 (CSP) Annual Subscription",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 505542,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate office 365 featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: Office 365",
      "Model: Office 365 Visio Plan 1 (CSP) Annual Subscription",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-tiber-ng-10kva-online-ups",
    "title": "Zigor Tiber NG 10KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 605664,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Tiber NG 10KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-tiber-ng-6kva-online-ups",
    "title": "Zigor Tiber NG 6KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 720677,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Tiber NG 6KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-tiber-ng-3kva-online-ups",
    "title": "Zigor Tiber NG 3KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 204714,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Tiber NG 3KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-tiber-ng-2kva-online-ups",
    "title": "Zigor Tiber NG 2KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 599792,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Tiber NG 2KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-tiber-ng-1kva-online-ups",
    "title": "Zigor Tiber NG 1KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 330101,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Tiber NG 1KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t140-intel-xeon-e-2224-tower-server",
    "title": "Dell PowerEdge T140 Intel Xeon E-2224 Tower Server",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 530218,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Server",
      "Model: Dell PowerEdge T140 Intel Xeon E-2224 Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-office-home-and-business-2019",
    "title": "Microsoft Office Home and Business 2019",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 440534,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ms office featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: MS Office",
      "Model: Office Home and Business 2019",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "microsoft-windows-10-professional-64bit-eng-intl-1pk-dsp-oem-dvd",
    "title": "Microsoft Windows 10 Professional 64bit Eng INTL 1PK DSP OEM DVD",
    "category": "Compute",
    "brand": "Microsoft",
    "price": 575619,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate os featuring original Microsoft certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Microsoft",
      "Device Type: OS",
      "Model: Windows 10 Professional 64bit Eng INTL 1PK DSP OEM DVD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-c1111-8p-integrated-8-port-router",
    "title": "Cisco C1111-8P Integrated 8 Port Router",
    "category": "Networking",
    "brand": "Cisco",
    "price": 393986,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: C1111-8P Integrated 8 Port Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-air-ap1832i-d-k9-indoor-access-point",
    "title": "Cisco AIR-AP1832I-D-K9 Indoor Access Point",
    "category": "Networking",
    "brand": "Cisco",
    "price": 413464,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate wi-fi network access point featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Wi-Fi Network Access Point",
      "Model: AIR-AP1832I-D-K9 Indoor Access Point",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf350-24p-24-port-10-100mbps-poe-managed-switch",
    "title": "Cisco SF350-24P 24-Port 10/100Mbps POE Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 360493,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate poe switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: PoE Switch",
      "Model: SF350-24P 24-Port 10/100Mbps POE Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "nec-mc453xg-4500-lumens-xga-projector",
    "title": "NEC MC453XG 4500 Lumens XGA Projector",
    "category": "Compute",
    "brand": "NEC",
    "price": 643340,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate projector featuring original NEC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: NEC",
      "Device Type: Projector",
      "Model: MC453XG 4500 Lumens XGA Projector",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "santak-castle-c2k-2000va-online-ups",
    "title": "SANTAK Castle C2K 2000VA Online UPS (Standard Backup)",
    "category": "Software",
    "brand": "Santak",
    "price": 228748,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Santak certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Santak",
      "Device Type: Online UPS",
      "Model: SANTAK Castle C2K 2000VA Online UPS (Standard Backup)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "santak-castle-c1ks-1000va-online-ups",
    "title": "SANTAK Castle C1KS 1000VA Online UPS (Long Backup)",
    "category": "Software",
    "brand": "Santak",
    "price": 52077,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Santak certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Santak",
      "Device Type: Online UPS",
      "Model: SANTAK Castle C1KS 1000VA Online UPS (Long Backup)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "santak-castle-c1k-1000va-online-ups",
    "title": "SANTAK Castle C1K 1000VA Online UPS (Standard Backup)",
    "category": "Software",
    "brand": "Santak",
    "price": 131003,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Santak certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Santak",
      "Device Type: Online UPS",
      "Model: SANTAK Castle C1K 1000VA Online UPS (Standard Backup)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-cx-1000va-offline-ups",
    "title": "VERTIV ITON CX 1000VA offline UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 649612,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: B2B IT Solution",
      "Model: VERTIV ITON CX 1000VA offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-ita2-30kva-online-ups",
    "title": "Vertiv Liebert ITA2 30KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 197055,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert ITA2 30KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-ita2-20kva-online-ups",
    "title": "Vertiv Liebert ITA2 20KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 530870,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert ITA2 20KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-ita2-10kva-online-ups",
    "title": "Vertiv Liebert ITA2 10KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 710175,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert ITA2 10KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-ita2-6kva-online-ups",
    "title": "Vertiv Liebert ITA2 6KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 462595,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert ITA2 6KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rr4312x0-rackmount-storage",
    "title": "Netgear RR4312X0 Ready NAS Business Rackmount Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 315471,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RR4312X0 Ready NAS Business Rackmount Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rr331200-rackmount-storage",
    "title": "Netgear RR331200 ReadyNAS 12 Bay Rackmount Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 216301,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RR331200 ReadyNAS 12 Bay Rackmount Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rn3138-rackmount-storage",
    "title": "Netgear RN3138 ReadyNas 4 BAY Rackmount Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 76811,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RN3138 ReadyNas 4 BAY Rackmount Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rr231200-readynas-rackmount-storage",
    "title": "Netgear RR231200 ReadyNas 12 Bays Rackmount Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 103985,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RR231200 ReadyNas 12 Bays Rackmount Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-rr230400-rackmount-storage",
    "title": "Netgear RR230400 ReadyNAS 4 BAY Rackmount Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 184384,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RR230400 ReadyNAS 4 BAY Rackmount Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-readynas-626x-6-bay-storage",
    "title": "Netgear RN626X00 ReadyNAS 626X 6 Bay Storage",
    "category": "Storage",
    "brand": "Netgear",
    "price": 164488,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Enterprise Storage Drive",
      "Model: RN626X00 ReadyNAS 626X 6 Bay Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-liebert-gxt-mt-cx-1kva-online-ups",
    "title": "Vertiv Liebert GXT MT+CX 1KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 572004,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert GXT MT+CX 1KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-ng-1kva-online-ups",
    "title": "ZIGOR VOLGA NG+ 1KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 572116,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: ZIGOR VOLGA NG+ 1KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-ottawa-pro-online-ups",
    "title": "ZIGOR Ottawa Pro Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 656932,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: ZIGOR Ottawa Pro Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-1-8tb-10k-rpm-sas-12gbps-2-5-inch-hot-plug-drive",
    "title": "DELL 1.8TB 10K RPM SAS 12Gbps 2.5 Inch Hot-Plug Drive",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 160947,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: NAS & SAN Storage",
      "Model: DELL 1.8TB 10K RPM SAS 12Gbps 2.5 Inch Hot-Plug Drive",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-power-edge-t140-xeon-e-2134-intel-processor-tower-server",
    "title": "Dell Power Edge T140 Xeon E-2134 Intel Processor Tower Server",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 348863,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Server",
      "Model: Dell Power Edge T140 Xeon E-2134 Intel Processor Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-power-edge-t140-xeon-e-2124-intel-processor-tower-server",
    "title": "Dell Power Edge T140 Xeon E-2124 Intel Processor Tower Server",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 738588,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Server",
      "Model: Dell Power Edge T140 Xeon E-2124 Intel Processor Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-e-2224-16gb-2tb-sata-tower-server",
    "title": "Dell PowerEdge R340 E-2224 16GB 2TB SATA Tower Server",
    "category": "Storage",
    "brand": "Dell",
    "price": 94542,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 E-2224 16GB 2TB SATA Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-e-2234-16gb-2tb-sata-tower-server",
    "title": "Dell PowerEdge R340 E-2234 16GB 2TB SATA Rack Server",
    "category": "Storage",
    "brand": "Dell",
    "price": 172138,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 E-2234 16GB 2TB SATA Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-t20-intel-pentium-g3220-4gb-tower-server",
    "title": "Dell PowerEdge T20 Intel Pentium G3220 4GB Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 362463,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate pentium featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Pentium",
      "Model: PowerEdge T20 Intel Pentium G3220 4GB Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r450-2-x-intel-xeon-silver-4309y-processor-1u-rack-server",
    "title": "Dell PowerEdge R450 2 X Intel Xeon Silver 4309Y Processor 1U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 609186,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R450 2 X Intel Xeon Silver 4309Y Processor 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r750-2-x-intel-xeon-silver-4309y-processor-2u-rack-server",
    "title": "Dell PowerEdge R750 2 X Intel Xeon Silver 4309Y Processor 2U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 488418,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R750 2 X Intel Xeon Silver 4309Y Processor 2U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r750-2-x-intel-xeon-silver-4310-processor-2u-rack-server",
    "title": "Dell PowerEdge R750 2 X Intel Xeon Silver 4310 Processor 2U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 494216,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R750 2 X Intel Xeon Silver 4310 Processor 2U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r750-2-x-intel-xeon-silver-4314-processor-2u-rack-server",
    "title": "Dell PowerEdge R750 2 X Intel Xeon Silver 4314 Processor 2U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 195194,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R750 2 X Intel Xeon Silver 4314 Processor 2U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-650va-offline-ups",
    "title": "Vertiv ITon 650VA Offline UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 455594,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate offline ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Offline UPS",
      "Model: ITon 650VA Offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-gxt-mt-10kva-online-ups",
    "title": "Vertiv Liebert GXT MT+ 10KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 501840,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert GXT MT+ 10KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-gxt-mt-6kva-online-ups",
    "title": "Vertiv Liebert GXT MT+ 6KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 480551,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert GXT MT+ 6KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "vertiv-gxt-mt-cx-3kva-online-ups",
    "title": "Vertiv Liebert GXT MT+CX 3KVA Online UPS",
    "category": "Compute",
    "brand": "Vertiv",
    "price": 333380,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Vertiv certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Vertiv",
      "Device Type: Online UPS",
      "Model: Liebert GXT MT+CX 3KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl20-generation-10-server",
    "title": "HPE ProLiant DL20 Gen10 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 679071,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: E-Series",
      "Model: ProLiant DL20 Gen10 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-ng-2kva-online-ups",
    "title": "Zigor Volga NG+2 2KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 223820,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Volga NG+2 2KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-generation-10-plus-64gb-ram-3-x-hpe-1-2tb-hdd-server",
    "title": "HPE ProLiant DL380 Generation 10 PLUS 64GB RAM 3 X HPE 1.2TB HDD Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 529389,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Server",
      "Model: ProLiant DL380 Generation 10 PLUS 64GB RAM 3 X HPE 1.2TB HDD Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-ml30-generation-10-16gb-ram-2-x-hpe-1tb-4lff-cto-server",
    "title": "HPE ProLiant ML30 Gen10 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 197056,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: E-Series",
      "Model: ProLiant ML30 Gen10 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-volga-ng-3-3kva-online-ups",
    "title": "Zigor Volga NG+3 3KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 165257,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Volga NG+3 3KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-scv3020-storage-array",
    "title": "Dell SCv3020 Storage Array",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 222567,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Enterprise Storage Drive",
      "Model: Dell SCv3020 Storage Array",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-unity-xt-480f-all-flash-storage-dell-emc-unity-xt-480f-all-flash-storage",
    "title": "Dell EMC Unity XT 480F All-Flash Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 154563,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate unity xt featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Unity XT",
      "Model: Unity XT 480F All-Flash Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-powerstore-3000t-storage",
    "title": "Dell EMC PowerStore 3000T Storage",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 207344,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate powerstore featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: PowerStore",
      "Model: PowerStore 3000T Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-deba-pro-1550-offline-ups",
    "title": "Zigor Deba Pro 1550 (1500VA) Offline UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 443786,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate offline ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Offline UPS",
      "Model: Deba Pro 1550 (1500VA) Offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-deba-pro-2050-2000va-offline-ups",
    "title": "Zigor Deba Pro 2050 (2000VA) Offline UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 471386,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate offline ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Offline UPS",
      "Model: Deba Pro 2050 (2000VA) Offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-deba-pro-1250-1200va-offline-ups",
    "title": "Zigor Deba Pro 1250 (1200VA) Offline UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 208684,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate offline ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Offline UPS",
      "Model: Deba Pro 1250 (1200VA) Offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-me4024-storage-array-dell-emc-me4024-storage-array",
    "title": "Dell EMC ME4024 Storage Array",
    "category": "Storage",
    "brand": "Dell EMC",
    "price": 121923,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate enterprise storage drive featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Enterprise Storage Drive",
      "Model: ME4024 Storage Array",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-deba-pro-700-650va-offline-ups",
    "title": "Zigor Deba Pro 700 (650VA) Offline UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 700833,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate offline ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Offline UPS",
      "Model: Deba Pro 700 (650VA) Offline UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as6204rs-elite-performance-and-functionality-nas-storage",
    "title": "Asustor AS6204RS Elite Performance and Functionality NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 160911,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS6204RS Elite Performance and Functionality NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as7116rdx-lockerstor-16r-pro-16-bay-nas-enclosure",
    "title": "Asustor AS7116RDX Lockerstor 16R Pro 16-Bay NAS Enclosure",
    "category": "Compute",
    "brand": "Asustor",
    "price": 532946,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS7116RDX Lockerstor 16R Pro 16-Bay NAS Enclosure",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as7112rdx-12r-pro-nas-storage",
    "title": "Asustor AS7112RDX Lockerstor 12R Pro NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 338186,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS7112RDX Lockerstor 12R Pro NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as7110t-nas-storage",
    "title": "Asustor AS7110T NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 184457,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS7110T NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as6508t-lockerstor-8-nas-storage",
    "title": "Asustor AS6508T LockerStor 8 NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 178819,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS6508T LockerStor 8 NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as6604t-nas-storage",
    "title": "Asustor AS6604T NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 90981,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS6604T NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-as5304t-storage",
    "title": "Asustor AS5304T NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 260688,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: AS5304T NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-drivestor-4-pro-as3304t",
    "title": "Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS",
    "category": "Compute",
    "brand": "Asustor",
    "price": 320788,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: DRIVESTOR 4 Pro AS3304T 4-Bay NAS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "asustor-drivestor-2-pro-as3302t",
    "title": "Asustor DRIVESTOR 2 Pro AS3302T NAS Storage",
    "category": "Storage",
    "brand": "Asustor",
    "price": 322302,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate nas & san storage featuring original Asustor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Asustor",
      "Device Type: NAS & SAN Storage",
      "Model: DRIVESTOR 2 Pro AS3302T NAS Storage",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r740-2-x-intel-xeon-silver-4210r-processor-10-core-rack-server",
    "title": "Dell PowerEdge R740 2 x Intel Xeon Silver 4210R Processor 10 Core Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 605646,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740 2 x Intel Xeon Silver 4210R Processor 10 Core Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r440-rack-server",
    "title": "Dell PowerEdge R440 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 409850,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R440 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r740-2-x-intel-xeon-silver-4216-processor-16-core-rack-server",
    "title": "Dell PowerEdge R740 2 x Intel Xeon Silver 4216 Processor 16 Core Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 213456,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740 2 x Intel Xeon Silver 4216 Processor 16 Core Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-t440-8-core-3tb-tower-server",
    "title": "Dell PowerEdge T440 8 Core 3TB Tower Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 370546,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge T440 8 Core 3TB Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-t140-8gb-tower-server",
    "title": "Dell EMC PowerEdge T140 8GB Tower Server",
    "category": "Compute",
    "brand": "Dell EMC",
    "price": 398654,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server featuring original Dell EMC certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell EMC",
      "Device Type: Server",
      "Model: PowerEdge T140 8GB Tower Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r740xd-2-x-intel-xeon-silver-4214r-processor-12-core-rack-server",
    "title": "Dell PowerEdge R740XD 2 x Intel Xeon Silver 4214R Processor 12 Core Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 321694,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740XD 2 x Intel Xeon Silver 4214R Processor 12 Core Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r740-2-x-intel-xeon-silver-4214r-processor-12-core-rack-server",
    "title": "Dell PowerEdge R740 2 x Intel Xeon Silver 4214R Processor 12 Core Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 271800,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: PowerEdge R740 2 x Intel Xeon Silver 4214R Processor 12 Core Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r940-rack-server",
    "title": "Dell PowerEdge R940 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 656006,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate gold featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Gold",
      "Model: PowerEdge R940 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-poweredge-r340-1u-rack-server",
    "title": "Dell PowerEdge R340 1U Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 621501,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate e-series featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: E-Series",
      "Model: PowerEdge R340 1U Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-2960-plus-24-port-lan-switch",
    "title": "Cisco Catalyst 2960 Plus 24 Port LAN Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 385430,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: Catalyst 2960 Plus 24 Port LAN Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf300-24p-24-port-10-100-poe-managed-switch",
    "title": "Cisco SF300-24P 24-Port 10/100 PoE Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 413496,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SF300-24P 24-Port 10/100 PoE Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-2960x-48ts-ll-catalyst-ethernet-switch",
    "title": "Cisco 2960X-48TS-LL Catalyst Ethernet Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 308105,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate cisco nexus 9200 switch series featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Cisco Nexus 9200 Switch Series",
      "Model: 2960X-48TS-LL Catalyst Ethernet Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-catalyst-2960-x-24-port-lan-switch",
    "title": "Cisco Catalyst 2960-X 24 Port LAN Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 449079,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: Catalyst 2960-X 24 Port LAN Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sg350-28p-28-port-gigabit-poe-managed-switch",
    "title": "Cisco SG350-28P 28-Port Gigabit PoE Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 325663,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SG350-28P 28-Port Gigabit PoE Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sg350-52-52-port-gigabit-managed-switch",
    "title": "Cisco SG350-52 52-port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 218112,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SG350-52 52-port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-ws-c2960-24tc-l-2960-24-10-100-catalyst-switch",
    "title": "Cisco WS-C2960-24TC-L 2960 24 10/100 Catalyst Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 157276,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: WS-C2960-24TC-L 2960 24 10/100 Catalyst Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf350-48-48-port-10-100-managed-switch",
    "title": "Cisco SF350-48 48-port 10/100 Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 434951,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SF350-48 48-port 10/100 Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sg350-10sfp-10-port-gigabit-managed-sfp-switch",
    "title": "Cisco SG350-10SFP 10-port Gigabit Managed SFP Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 205909,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SG350-10SFP 10-port Gigabit Managed SFP Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sg350-28-28-port-gigabit-managed-switch",
    "title": "Cisco SG350-28 28-Port Gigabit Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 171809,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SG350-28 28-Port Gigabit Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf95d-16-16-port-10-100-desktop-switch",
    "title": "Cisco SF95D-16 16-Port 10/100 Desktop Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 130919,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SF95D-16 16-Port 10/100 Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf95-24-as-24-port-smb-non-managed-switch-1",
    "title": "Cisco SF95-24-AS 24-Port SMB Non Managed Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 241007,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SF95-24-AS 24-Port SMB Non Managed Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sg95d-08-8-port-gigabit-desktop-switch",
    "title": "Cisco SG95D-08 8-Port Gigabit Desktop Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 173016,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SG95D-08 8-Port Gigabit Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-sf95d-08-8-port-10-100-desktop-switch",
    "title": "Cisco SF95D-08 8-Port 10/100 Desktop Switch",
    "category": "Networking",
    "brand": "Cisco",
    "price": 93285,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Network Switch",
      "Model: SF95D-08 8-Port 10/100 Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-ccr1016-12s-1s-cloud-core-industrial-grade-10g-router",
    "title": "Mikrotik CCR1016-12S-1S+ Cloud Core Industrial Grade 10G Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 417113,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ethernet router featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: Ethernet Router",
      "Model: CCR1016-12S-1S+ Cloud Core Industrial Grade 10G Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-ccr1009-7g-1c-pc-8-port-gigabit-ethernet-router",
    "title": "Mikrotik CCR1009-7G-1C-PC 8 Port Gigabit Ethernet Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 317502,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ethernet router featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: Ethernet Router",
      "Model: CCR1009-7G-1C-PC 8 Port Gigabit Ethernet Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-ccr2004-1g-12s-2xs-ethernet-router",
    "title": "Mikrotik CCR2004-1G-12S+2XS Ethernet Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 100912,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ethernet router featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: Ethernet Router",
      "Model: CCR2004-1G-12S+2XS Ethernet Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-c1111-4p-isr-1100-4-ports-dual-ge-wan-ethernet-router",
    "title": "Cisco C1111-4P ISR 1100 4 Ports Dual GE WAN Ethernet Router",
    "category": "Networking",
    "brand": "Cisco",
    "price": 104320,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate router featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: Router",
      "Model: C1111-4P ISR 1100 4 Ports Dual GE WAN Ethernet Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-rv160w-2-antenna-vpn-router-black",
    "title": "Cisco RV160W 2 Antenna VPN Router (Black)",
    "category": "Networking",
    "brand": "Cisco",
    "price": 199627,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate vpn router featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: VPN Router",
      "Model: RV160W 2 Antenna VPN Router (Black)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-orbi-rbs350-ax1800-wifi-6-dual-band-mesh-add-on-satellite",
    "title": "NETGEAR Orbi RBS350 AX1800 WiFi 6 Dual-band Mesh Add-on Satellite",
    "category": "Compute",
    "brand": "Netgear",
    "price": 376216,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate router featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: Router",
      "Model: NETGEAR Orbi RBS350 AX1800 WiFi 6 Dual-band Mesh Add-on Satellite",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mercusys-ms108g-8-port-10-100-1000mbps-desktop-switch",
    "title": "Mercusys MS108G 8 Port 10/100/1000Mbps Desktop Switch",
    "category": "Networking",
    "brand": "Mercusys",
    "price": 432350,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate desktop switch featuring original Mercusys certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mercusys",
      "Device Type: Desktop Switch",
      "Model: MS108G 8 Port 10/100/1000Mbps Desktop Switch",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "netgear-jgs516pe-16-port-gigabit-smart-managed-plus-switch-8-port-poe",
    "title": "Netgear JGS516PE 16 Port Gigabit Smart Managed Plus Switch (8 Port PoE)",
    "category": "Networking",
    "brand": "Netgear",
    "price": 115112,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate poe switch featuring original Netgear certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Netgear",
      "Device Type: PoE Switch",
      "Model: JGS516PE 16 Port Gigabit Smart Managed Plus Switch (8 Port PoE)",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-crs106-1c-5s-smart-switch-with-400mhz-cpu-128mb-ram",
    "title": "Mikrotik CRS106-1C-5S Smart Switch With 400MHz CPU 128MB Ram",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 141311,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate network switch featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: Network Switch",
      "Model: CRS106-1C-5S Smart Switch With 400MHz CPU 128MB Ram",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zkteco-mb30-mult-biometric-time-attendance-and-access-control-terminal",
    "title": "ZKTeco MB30 Mult-Biometric Time Attendance and Access Control Terminal",
    "category": "Compute",
    "brand": "ZKTeco",
    "price": 550853,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original ZKTeco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ZKTeco",
      "Device Type: B2B IT Solution",
      "Model: MB30 Mult-Biometric Time Attendance and Access Control Terminal",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zkteco-mb560-vl-multi-biometric-identification-access-control-terminal",
    "title": "ZKTeco MB560-VL Multi-biometric Identification Access Control Terminal",
    "category": "Compute",
    "brand": "ZKTeco",
    "price": 631605,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate access control terminal featuring original ZKTeco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ZKTeco",
      "Device Type: Access Control Terminal",
      "Model: MB560-VL Multi-biometric Identification Access Control Terminal",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zkteco-mb360-fingerprint-time-attendance-terminal",
    "title": "ZKTeco MB360 Fingerprint Time Attendance Terminal",
    "category": "Compute",
    "brand": "ZKTeco",
    "price": 371845,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate time attendance terminal featuring original ZKTeco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ZKTeco",
      "Device Type: Time Attendance Terminal",
      "Model: MB360 Fingerprint Time Attendance Terminal",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zkteco-iclock9000-g-gprs-3g-time-attendance-terminal-machine",
    "title": "ZKTeco iClock9000-G (GPRS/3G) Time Attendance Terminal Machine",
    "category": "Compute",
    "brand": "ZKTeco",
    "price": 461823,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate attendance terminal machine featuring original ZKTeco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ZKTeco",
      "Device Type: Attendance Terminal Machine",
      "Model: iClock9000-G (GPRS/3G) Time Attendance Terminal Machine",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "onspot-osf93-access-control",
    "title": "Onspot OSF93 Access Control",
    "category": "Compute",
    "brand": "Onspot",
    "price": 351581,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate access control machine featuring original Onspot certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Onspot",
      "Device Type: Access Control Machine",
      "Model: OSF93 Access Control",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zkteco-lmb-180z-bracket",
    "title": "ZKTeco LMB-180Z Bracket",
    "category": "Compute",
    "brand": "ZKTeco",
    "price": 640129,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate bracket featuring original ZKTeco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: ZKTeco",
      "Device Type: Bracket",
      "Model: LMB-180Z Bracket",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ofitech-os2502ci-paper-shredder",
    "title": "Ofitech OS2502Ci Paper Shredder",
    "category": "Compute",
    "brand": "Ofitech",
    "price": 261452,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate paper shredder featuring original Ofitech certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Ofitech",
      "Device Type: Paper Shredder",
      "Model: OS2502Ci Paper Shredder",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "ofitech-os1201d-paper-shredder",
    "title": "Ofitech OS1201D Paper Shredder",
    "category": "Compute",
    "brand": "Ofitech",
    "price": 735412,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate paper shredder featuring original Ofitech certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Ofitech",
      "Device Type: Paper Shredder",
      "Model: OS1201D Paper Shredder",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hitachi-hils75205-75-uhd-interactive-flat-panel-display",
    "title": "Hitachi HILS75205 75\" UHD Interactive Flat Panel Display",
    "category": "Compute",
    "brand": "Hitachi",
    "price": 176362,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate interactive board featuring original Hitachi certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Hitachi",
      "Device Type: Interactive Board",
      "Model: HILS75205 75\" UHD Interactive Flat Panel Display",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "honeywell-voyager-1250g-general-duty-scanner",
    "title": "Honeywell Voyager 1250g General Duty Scanner",
    "category": "Compute",
    "brand": "Honeywell Voyager",
    "price": 356743,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate barcode scanner featuring original Honeywell Voyager certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Honeywell Voyager",
      "Device Type: Barcode Scanner",
      "Model: 1250g General Duty Scanner",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zebra-symbol-ls2208-general-purpose-barcode-scanner",
    "title": "Zebra SYMBOL LS2208 GENERAL PURPOSE BARCODE SCANNER",
    "category": "Compute",
    "brand": "Zebra",
    "price": 383467,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate barcode scanner featuring original Zebra certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zebra",
      "Device Type: Barcode Scanner",
      "Model: SYMBOL LS2208 GENERAL PURPOSE BARCODE SCANNER",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "sewoo-nbs-7250-1d-barcode-scanner",
    "title": "SEWOO NBS-7250 1D Barcode Scanner",
    "category": "Compute",
    "brand": "SEWOO",
    "price": 585053,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate barcode scanner featuring original SEWOO certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: SEWOO",
      "Device Type: Barcode Scanner",
      "Model: NBS-7250 1D Barcode Scanner",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "infocus-in112xa-svga-3800-lumens-projector",
    "title": "InFocus IN112xa SVGA 3800 LUMENS Projector",
    "category": "Compute",
    "brand": "InFocus",
    "price": 610299,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate projector featuring original InFocus certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: InFocus",
      "Device Type: Projector",
      "Model: IN112xa SVGA 3800 LUMENS Projector",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "grandstream-gxv3350-high-end-hd-video-ip-phone",
    "title": "Grandstream GXV3350 High End HD Video IP Phone",
    "category": "Networking",
    "brand": "Grandstream",
    "price": 86189,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Grandstream certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Grandstream",
      "Device Type: IP Phone",
      "Model: GXV3350 High End HD Video IP Phone",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "grandstream-gxp1760w-mid-range-ip-phone",
    "title": "Grandstream GXP1760W Mid-Range IP Phone",
    "category": "Compute",
    "brand": "Grandstream",
    "price": 415892,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Grandstream certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Grandstream",
      "Device Type: IP Phone",
      "Model: GXP1760W Mid-Range IP Phone",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-7821-ip-phone-with-multiplatform-phone-firmware",
    "title": "Cisco 7821 IP Phone with Multiplatform Phone firmware",
    "category": "Compute",
    "brand": "Cisco",
    "price": 403419,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: IP Phone",
      "Model: 7821 IP Phone with Multiplatform Phone firmware",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "grandstream-grp2602p-basic-hd-ip-phone",
    "title": "Grandstream GRP2602P Basic HD IP Phone",
    "category": "Compute",
    "brand": "Grandstream",
    "price": 441593,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Grandstream certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Grandstream",
      "Device Type: IP Phone",
      "Model: GRP2602P Basic HD IP Phone",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "fanvil-x3sp-v2-poe-ip-phone",
    "title": "Fanvil X3SP V2 PoE IP Phone",
    "category": "Compute",
    "brand": "Fanvil",
    "price": 400214,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Fanvil certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Fanvil",
      "Device Type: IP Phone",
      "Model: X3SP V2 PoE IP Phone",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "cisco-6821-ip-phone-for-mpp-systems",
    "title": "Cisco 6821 IP Phone for MPP Systems",
    "category": "Compute",
    "brand": "Cisco",
    "price": 678711,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate ip phone featuring original Cisco certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Cisco",
      "Device Type: IP Phone",
      "Model: 6821 IP Phone for MPP Systems",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "dell-emc-poweredge-r740-rack-server",
    "title": "Dell EMC PowerEdge R740 Rack Server",
    "category": "Compute",
    "brand": "Dell",
    "price": 749519,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate silver featuring original Dell certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Dell",
      "Device Type: Silver",
      "Model: EMC PowerEdge R740 Rack Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "bdcom-epon-olt-p3616-2-te",
    "title": "BDCOM EPON OLT P3616-2 TE",
    "category": "Compute",
    "brand": "BDCOM",
    "price": 274537,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original BDCOM certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: BDCOM",
      "Device Type: B2B IT Solution",
      "Model: EPON OLT P3616-2 TE",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-ccr1036-8g-2s-10g-1u-rackmount-8-port-gigabit-ethernet-router",
    "title": "Mikrotik CCR1036-8G-2S+ 10G 1U Rackmount 8 Port Gigabit Ethernet Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 235772,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: B2B IT Solution",
      "Model: CCR1036-8G-2S+ 10G 1U Rackmount 8 Port Gigabit Ethernet Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "mikrotik-ccr1016-12g-router",
    "title": "Mikrotik CCR1016-12G Router",
    "category": "Networking",
    "brand": "Mikrotik",
    "price": 273225,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate b2b it solution featuring original Mikrotik certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Mikrotik",
      "Device Type: B2B IT Solution",
      "Model: CCR1016-12G Router",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-proliant-dl380-gen10-server",
    "title": "HPE Proliant DL380 Gen10 Server",
    "category": "Compute",
    "brand": "HPE",
    "price": 390729,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate rack server featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Rack Server",
      "Model: Proliant DL380 Gen10 Server",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hpe-300gb-2-5-inch-sff-sas-6gb-s-10k-rpm-512n-dp-enterprise-hdd",
    "title": "HPE 300GB 2.5-inch SFF SAS 6Gb/s 10K RPM 512n DP Enterprise HDD",
    "category": "Storage",
    "brand": "HPE",
    "price": 83910,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server hdd featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Server HDD",
      "Model: 300GB 2.5-inch SFF SAS 6Gb/s 10K RPM 512n DP Enterprise HDD",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "hp-653955-001-hp-300gb-sas-6g-10k-sff-hard-drive",
    "title": "HPE 653955-001 - HPE 300GB SAS 6G 10K SFF Hard drive",
    "category": "Storage",
    "brand": "HPE",
    "price": 104991,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server spare parts featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Server Spare Parts",
      "Model: 653955-001 - HPE 300GB SAS 6G 10K SFF Hard drive",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "1-2tb-hot-plug-sas-hdd-10k-6g-dp-2-5in-sf",
    "title": "1.2TB hot-plug SAS HDD 10K 6G DP, 2.5in SFF",
    "category": "Storage",
    "brand": "HPE",
    "price": 311029,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate server spare parts featuring original HPE certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: HPE",
      "Device Type: Server Spare Parts",
      "Model: 1.2TB hot-plug SAS HDD 10K 6G DP, 2.5in SFF",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  },
  {
    "id": "zigor-volga-ng-2-2kva-online-ups",
    "title": "Zigor Volga NG+2 2KVA Online UPS",
    "category": "Compute",
    "brand": "Zigor",
    "price": 374758,
    "image": "/placeholder.png",
    "rating": 4.8,
    "stockStatus": "In Stock",
    "shortDesc": "High-efficiency corporate online ups featuring original Zigor certification, optimized performance, and full enterprise warranty support.",
    "features": [
      "Manufacturer: Zigor",
      "Device Type: Online UPS",
      "Model: Volga NG+2 2KVA Online UPS",
      "Warranty: 3-Year Authorized Local Warranty",
      "Availability: Configured to Order (CTO)"
    ]
  }
];
