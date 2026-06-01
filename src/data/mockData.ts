import { 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Code, 
  Network, 
  Compass, 
  TrendingUp, 
  Users, 
  Award, 
  HeartHandshake 
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: "Cloud" | "ShieldCheck" | "Cpu" | "Code" | "Network" | "Compass";
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: "TrendingUp" | "Users" | "Award" | "HeartHandshake";
}

export interface Statistic {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
  department: string;
  badge: string;
  story: string[];
  education: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "AI" | "Cloud" | "Security" | "Software";
  client: string;
  description: string;
  fullDetails: string;
  image: string;
  stats: string;
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

// 1. Services
export const servicesData: Service[] = [
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Scalable, secure, and fully automated cloud ecosystems designed for modern enterprises.",
    longDesc: "We engineer resilient multi-cloud architectures (AWS, Azure, GCP) that accelerate deployment pipelines, minimize overhead, and maximize uptime. Our automated DevOps tools integrate seamless continuous integration and deployment.",
    iconName: "Cloud",
    features: ["Multi-Cloud Migrations", "Kubernetes & Orchestration", "Serverless Architecture", "Cost Optimization"]
  },
  {
    id: "cyber-security",
    title: "Enterprise Cyber Security",
    shortDesc: "Proactive threat detection, vulnerability resolution, and global security compliance.",
    longDesc: "Protect your proprietary business capital with our 24/7 security audits, zero-trust infrastructure designs, penetration testing, and absolute alignment with GDPR, HIPAA, and ISO/IEC 27001 standards.",
    iconName: "ShieldCheck",
    features: ["Zero-Trust Networking", "Penetration Testing", "Security Operations (SOC)", "Regulatory Compliance"]
  },
  {
    id: "ai-solutions",
    title: "Artificial Intelligence & Analytics",
    shortDesc: "Bespoke machine learning models, predictive intelligence, and visual recognition tools.",
    longDesc: "Transform raw organizational telemetry into high-value strategic execution. We build custom deep learning models, natural language interfaces, predictive analytics engines, and fully custom generative AI environments.",
    iconName: "Cpu",
    features: ["Predictive Modeling", "Natural Language Processing", "Computer Vision Systems", "AI-Powered Automation"]
  },
  {
    id: "software-dev",
    title: "Software & Systems Development",
    shortDesc: "High-performance enterprise software, API structures, and premium web systems.",
    longDesc: "From multi-tenant SaaS hubs to mission-critical operational portals, we build durable software systems using robust, scalable stacks with flawless UI/UX, strong core APIs, and fully responsive layouts.",
    iconName: "Code",
    features: ["Custom SaaS Platforms", "Robust APIs & Integrations", "Mobile App Ecosystems", "Microservices Architecture"]
  },
  {
    id: "networking",
    title: "SD-WAN & Network Architecture",
    shortDesc: "High-throughput software-defined networking for distributed global enterprises.",
    longDesc: "Design and implement modern, secure network topologies that facilitate low-latency collaboration across distributed facilities. We provide automated SD-WAN configurations, redundant cabling architecture, and high-tech edge routers.",
    iconName: "Network",
    features: ["Software-Defined WAN", "Secure Edge Infrastructure", "Fiber Redundancy Schemes", "Network Virtualization"]
  },
  {
    id: "it-consultancy",
    title: "Strategic IT & AI Consultancy",
    shortDesc: "Experienced digital transformation advisors alignment with modern executive boards.",
    longDesc: "Bridge the gap between operational technology and board-level strategy. We evaluate corporate tech stacks, deliver actionable transformation roadmaps, audit security readiness, and optimize IT budgets.",
    iconName: "Compass",
    features: ["CIO Advisory Services", "Tech Stack Assessments", "Digital Roadmaps", "Risk Management Plans"]
  }
];

// 2. Why Choose Us Features
export const whyChooseUsData: Feature[] = [
  {
    id: "digital-trans",
    title: "End-to-End Digital Transformation",
    description: "We handle everything from initial architectural planning to custom coding, 24/7 active security protection, and long-term cloud management.",
    iconName: "TrendingUp"
  },
  {
    id: "exp-pros",
    title: "Experienced Professionals",
    description: "Our staff consists of certified senior architects, cybersecurity specialists, and AI researchers with decades of enterprise experience.",
    iconName: "Users"
  },
  {
    id: "proven-track",
    title: "Proven Track Record",
    description: "We have delivered custom operational architectures, database migrations, and predictive AI solutions to Fortune 500 companies globally.",
    iconName: "Award"
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    description: "We build dedicated team channels, run weekly syncs, maintain 100% transparency, and craft custom solutions shaped by your exact metrics.",
    iconName: "HeartHandshake"
  }
];

// 3. Statistics
export const statisticsData: Statistic[] = [
  {
    id: "stat-customers",
    value: "250+",
    numericValue: 250,
    suffix: "+",
    label: "Customers",
    description: "Global enterprise clients and medium businesses."
  },
  {
    id: "stat-projects",
    value: "15+",
    numericValue: 15,
    suffix: "+",
    label: "Successful Projects",
    description: "Major system, AI, and cloud launches."
  },
  {
    id: "stat-experience",
    value: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering state-of-the-art tech innovations."
  },
  {
    id: "stat-support",
    value: "24/7",
    numericValue: 24,
    suffix: "/7",
    label: "Support",
    description: "Continuous server monitoring and operations."
  },
  {
    id: "stat-specialists",
    value: "40+",
    numericValue: 40,
    suffix: "+",
    label: "Specialists",
    description: "Full-time engineers, researchers, and leads."
  }
];

// 4. Management Team
export const teamData: TeamMember[] = [
  {
    id: "md-nasir-feroz",
    name: "MD Nasir Feroz",
    role: "CEO",
    bio: "Executive technology visionary driving AI adoption, cloud operations, and multi-tenant architectures.",
    image: "/md nasir feroz.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "nasir.feroz@siliconcomputing.com",
    department: "management",
    badge: "SF-24",
    education: "M.Sc. in Computer Science & Engineering",
    skills: ["AI Strategy", "Enterprise Architecture", "Multi-Tenant Platforms", "Strategic Planning"],
    story: [
      "MD Nasir Feroz serves as the Chief Executive Officer at Silicon Computing Ltd, orchestrating next-generation IT solutions and high-performance server architectures.",
      "With over a decade of leadership in systems design and executive management, Nasir has successfully steered the business through rapid scaling and international partnership integrations."
    ]
  },
  {
    id: "md-bayeazid-hossain",
    name: "Md. Bayeazid Hossain",
    role: "CHIEF MARKETING OFFICER",
    bio: "Experienced marketeer leading global positioning, client relationships, and technological brand advocacy.",
    image: "/Md. Bayeazid Hossain.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "bayeazid.hossain@siliconcomputing.com",
    department: "management",
    badge: "SF-24",
    education: "MBA in Marketing & Technology Management",
    skills: ["Brand Strategy", "Corporate Relations", "Market Analytics", "Growth Orchestration"],
    story: [
      "Md. Bayeazid Hossain manages global marketing, corporate communications, and enterprise client relations as Chief Marketing Officer.",
      "His strategic vision ensures that Silicon Computing's state-of-the-art server solutions and hardware partnerships are positioned correctly to maximize B2B enterprise reach."
    ]
  },
  {
    id: "md-ashiqur-rahman",
    name: "MD Ashiqur Rahman",
    role: "COO",
    bio: "Operational lead structuring cloud deployment workflows, support Desk SLAs, and supply chains.",
    image: "/MD Ashiqur Rahman.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "ashiqur.rahman@siliconcomputing.com",
    department: "management",
    badge: "SF-24",
    education: "B.Sc. in Operations Management & Systems",
    skills: ["Operational Efficiency", "Support SLAs", "Datacenter Management", "Cloud Delivery"],
    story: [
      "MD Ashiqur Rahman serves as Chief Operating Officer, managing day-to-day datacenter operations, support desk SLAs, and resource allocations.",
      "Under his operational leadership, SCL has maintained a flawless 99.9% uptime index across customer cloud installations and local microservices."
    ]
  },
  {
    id: "md-monjurul-islam",
    name: "MD Monjurul Islam",
    role: "TECHNICAL ADVISOR (VOLUNTARILY)",
    bio: "Expert systems advisor providing strategic advisory on hardware integration, compute, and security standards.",
    image: "/MD Monjurul Islam.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "monjurul.islam@siliconcomputing.com",
    department: "management",
    badge: "SF-24",
    education: "Ph.D. in High-Performance Computing",
    skills: ["High-Performance Compute", "Hardware Integration", "Security Standards", "Cryptographic Topologies"],
    story: [
      "MD Monjurul Islam provides vital voluntary technical counsel, steering SCL's hardware architecture, datacenter cabling, and security protocols.",
      "His technical expertise ensures that SCL designs zero-trust boundaries that successfully survive complex threat audits and vulnerability indices."
    ]
  },
  {
    id: "abdullah-al-mahmud",
    name: "Abdullah Al Mahmud",
    role: "EXECUTIVE, HR & ADMIN",
    bio: "HR leader managing administrative workflows, talent acquisition, and workplace culture.",
    image: "/Abdullah Al Mahmud).webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mahmud.hr@siliconcomputing.com",
    department: "hr-admin",
    badge: "SF-24",
    education: "B.Sc. in Human Resource Management",
    skills: ["Talent Acquisition", "Employee Relations", "Office Administration", "Workplace Culture"],
    story: [
      "Abdullah Al Mahmud coordinates administrative tasks, coordinates employee onboarding, and promotes a highly collaborative developer culture.",
      "His efforts are focused on attracting top-tier senior AI architects and DevOps engineers to sustain our technical delivery excellence."
    ]
  },
  {
    id: "khandakar-nahid-hasan",
    name: "Khandakar Nahid Hasan",
    role: "ASSISTANT MANAGER ACCOUNTS & FINANCE",
    bio: "Financial strategist supervising budget allocations, cloud resource billing, and corporate invoicing.",
    image: "/Khandakar Nahid Hasan.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "nahid.finance@siliconcomputing.com",
    department: "accounts-finance",
    badge: "SF-24",
    education: "Chartered Accountant (CA) & MBA in Finance",
    skills: ["Corporate Finance", "Budgeting", "Resource Invoicing", "Cost Governance"],
    story: [
      "Khandakar Nahid Hasan supervises corporate budgeting, client hardware financing layouts, and SaaS recurring invoicing streams.",
      "He collaborates closely with engineering leads to evaluate cloud billing optimization, lowering client operational expenditure (OpEx)."
    ]
  },
  {
    id: "mustafizur-rahman",
    name: "Mustafizur Rahman",
    role: "OFFICE ASSISTANT",
    bio: "Dedicated administrative assistant ensuring smooth day-to-day facilities operations.",
    image: "/Mustafizur Rahman.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mustafizur@siliconcomputing.com",
    department: "supply-chain",
    badge: "SF-24",
    education: "Diploma in Business Administration",
    skills: ["Facilities Maintenance", "Logistics Coordination", "Inventory Support", "Operations Assistance"],
    story: [
      "Mustafizur Rahman provides essential administrative support, assisting with inventory tracking and facility maintenance tasks.",
      "His attention to detail keeps our physical workspace and testing labs organized, allowing engineering groups to operate productively."
    ]
  },
  {
    id: "nasir-uddin-boxso",
    name: "Nasir Uddin Boxso",
    role: "ASST. MANAGER, SCM",
    bio: "Supply chain manager handling international hardware procurements and server logistics.",
    image: "/Nasir Uddin Boxso.svg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "nasir.scm@siliconcomputing.com",
    department: "supply-chain",
    badge: "SF-24",
    education: "B.Sc. in Supply Chain & Logistics",
    skills: ["SCM Operations", "Vendor Negotiation", "Inventory Control", "Import / Export Logics"],
    story: [
      "Nasir Uddin Boxso manages international hardware supply chains, negotiating directly with manufacturer networks (HPE, Dell, Cisco).",
      "His role ensures that specialized servers, storage drives, and enterprise networking hardware arrive safely and on-schedule."
    ]
  },
  {
    id: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    role: "SOFTWARE ENGINEER | WEB DEV",
    bio: "Senior software engineer specializing in high-performance frontend interfaces and React systems.",
    image: "/Tanvir Ahmed.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "tanvir@siliconcomputing.com",
    department: "engineering",
    badge: "SF-24",
    education: "B.Sc. in Computer Science & Engineering",
    skills: ["React / Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    story: [
      "Tanvir Ahmed develops state-of-the-art user interfaces and component libraries, building clean, performant React layouts.",
      "His focus on micro-animations and aesthetic precision helps translate complex telemetry metrics into beautiful dashboard modules."
    ]
  },
  {
    id: "mohammad-sajjad-khan",
    name: "Mohammad Sajjad Khan",
    role: "ASSISTANT MANAGER",
    bio: "Engineering assistant manager directing project sprints and API microservices integrations.",
    image: "/Mohammad Sajjad Khan.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sajjad.khan@siliconcomputing.com",
    department: "engineering",
    badge: "SF-24",
    education: "B.Sc. in Software Engineering",
    skills: ["Project Management", "Microservices", "REST & GraphQL APIs", "DevOps Orchestration"],
    story: [
      "Mohammad Sajjad Khan coordinates system integrations, handles developer sprints, and aligns API development with user requirements.",
      "Sajjad's oversight keeps project deliverables aligned with zero-trust parameters and strict client launch timelines."
    ]
  },
  {
    id: "iftakhar-hossain",
    name: "Iftakhar Hossain",
    role: "HEAD OF PROJECT CONSULTANT",
    bio: "Principal technology consultant designing multi-cloud blueprints and database schemas.",
    image: "/Iftakhar Hossain.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "iftakhar@siliconcomputing.com",
    department: "engineering",
    badge: "SF-24",
    education: "M.Sc. in Software Architecture",
    skills: ["Cloud Consulting", "Database Scaling", "Enterprise Topologies", "Client Strategy"],
    story: [
      "Iftakhar Hossain collaborates with enterprise clients to design secure database partitioning, network routing, and server migrations.",
      "He leverages a decade of system integration expertise to craft durable blueprints for corporate compute and analytics workloads."
    ]
  },
  {
    id: "marion-moon",
    name: "Marion Moon",
    role: "SOFTWARE ENGINEER",
    bio: "Developer focusing on backend data handling, serverless setups, and analytics pipelines.",
    image: "/Marion Moon.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "marion@siliconcomputing.com",
    department: "engineering",
    badge: "SF-24",
    education: "B.Sc. in Computer Engineering",
    skills: ["Node.js / Go", "SQL & NoSQL", "Serverless Lambdas", "Telemetry Pipelines"],
    story: [
      "Marion Moon builds robust backend routes, serverless systems, and event-driven data streaming structures (e.g. Apache Kafka).",
      "She ensures backend databases and telemetry networks scale efficiently with low-latency and absolute data confidentiality."
    ]
  },
  {
    id: "yusuf-khan",
    name: "Yusuf Khan",
    role: "SUPPORT ENGINEER",
    bio: "Support specialist ensuring smooth datacenter diagnostics and hardware customer inquiries.",
    image: "/Yusuf Khan.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "yusuf.support@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "B.Sc. in Computer Science",
    skills: ["System Administration", "SLA Support", "Hardware Diagnostic", "Client Support"],
    story: [
      "Yusuf Khan coordinates on-site customer inquiries and server diagnostic sweeps inside SCL datacenters.",
      "His technical support and rapid response ensure that customer service ticket resolutions align perfectly with SLA guidelines."
    ]
  },
  {
    id: "md-jannatul-sheikh",
    name: "Md. Jannatul Sheikh",
    role: "ASST. MANAGER",
    bio: "IT operations lead overseeing support pipelines and incident response coordination.",
    image: "/Md. Jannatul Sheikh.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "jannatul.ops@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "B.Sc. in Electrical & Electronic Engineering",
    skills: ["IT Operations", "Team Coordination", "Incident Response", "Hardware Testing"],
    story: [
      "Md. Jannatul Sheikh coordinates support workflows, schedules server maintenance cycles, and oversees internal IT operations.",
      "His leadership maintains clean coordination between hardware installation teams and client account managers."
    ]
  },
  {
    id: "md-mufraz-al-remak",
    name: "Md. Mufraz Al-Remak",
    role: "SOLUTION ENGINEER",
    bio: "Systems installation engineer handling datacenter server racks configuration and network topologies.",
    image: "/Md. Mufraz Al- Remak.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mufraz.eng@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "B.Sc. in Systems Engineering",
    skills: ["System Cabling", "Datacenter Rack Config", "Network Topologies", "Hardware Engineering"],
    story: [
      "Md. Mufraz Al-Remak manages physical layout blueprints, configures server rack configurations, and maps fiber connection topologies.",
      "Mufraz has successfully deployed dozens of SD-WAN edge nodes and hyper-converged hardware configurations for enterprise clients."
    ]
  },
  {
    id: "abdullah-al-mamun",
    name: "Abdullah Al Mamun",
    role: "ASSISTANT MANAGER NETWORK & SECURITY",
    bio: "Security administrator protecting local hardware compute networks and checking zero-trust compliance parameters.",
    image: "/Abdullah Al Mamun.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mamun.security@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "M.Sc. in Network Security & Information Systems",
    skills: ["Network Security", "Firewall Configuration", "Intrusion Detection", "Zero-Trust Frameworks"],
    story: [
      "Abdullah Al Mamun supervises security configurations, runs network firewalls, and audits data compliance boundaries.",
      "His technical controls protect proprietary databases from unauthorized external telemetry probes."
    ]
  },
  {
    id: "fakhrul-hassan-shawal",
    name: "Fakhrul Hassan Shawal",
    role: "ASST. SOLUTION ENGINEER",
    bio: "Hardware technician monitoring server logs and assisting with datacenter migrations.",
    image: "/Fakhrul Hassan Shawal.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "shawal.tech@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "Diploma in Software & Hardware Systems",
    skills: ["Hardware Installation", "Datacenter Monitoring", "Troubleshooting", "Server Configuration"],
    story: [
      "Fakhrul Hassan Shawal tracks physical server operations, coordinates diagnostic scripts, and handles hardware integrations.",
      "His vigilance helps resolve network hardware issues, ensuring customer computing frames remain active."
    ]
  },
  {
    id: "md-mizanur-rahman",
    name: "Md Mizanur Rahman",
    role: "SENIOR MANAGER ENTERPRISE SOLUTION",
    bio: "Systems architect directing high-availability cloud configurations and enterprise solutions deployment.",
    image: "/Md Mizanur Rahman.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mizanur.solutions@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "B.Sc. in Information Technology",
    skills: ["Enterprise Solutions", "Cloud Governance", "Budget Optimizations", "High Availability Clusters"],
    story: [
      "Md Mizanur Rahman directs the deployment of enterprise database configurations and distributed computing services.",
      "His strategic architectures ensure that client operational budgets are optimized and backup infrastructures run cleanly."
    ]
  },
  {
    id: "am-fahim",
    name: "A.M. Fahim",
    role: "JR. SOLUTION ENGINEER",
    bio: "Junior systems engineer assisting with Linux operations and server cabling setups.",
    image: "/A.M. Fahim.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "fahim.eng@siliconcomputing.com",
    department: "enterprise-support",
    badge: "SF-24",
    education: "B.Sc. in Computer Science",
    skills: ["Datacenter Operations", "Linux Systems", "Cabling Infrastructure", "Server Integration"],
    story: [
      "A.M. Fahim tracks datacenter logs, installs server cabling configurations, and assists senior engineers with systems testing.",
      "Fahim maintains clean hardware directories and organizes our diagnostics logs files."
    ]
  },
  {
    id: "khokon-debnath",
    name: "Khokon Debnath",
    role: "HEAD OF CREATIVE",
    bio: "Creative director leading visual strategy, brand identity, and user interface designs for high-performance enterprise systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "khokon.creative@siliconcomputing.com",
    department: "creative",
    badge: "SF-24",
    education: "B.FA. in Graphic Communication & Design",
    skills: ["Visual Strategy", "Brand Identity", "UI/UX Leadership", "Design Systems"],
    story: [
      "Khokon Debnath directs the visual identity and brand execution across all Silicon Computing platforms and enterprise partnerships.",
      "With over a decade of design leadership, he oversees custom layout systems, interactive dashboards, and multimedia collateral."
    ]
  },
  {
    id: "md-nasimul-alam",
    name: "Md Nasimul Alam",
    role: "AGM, STRATEGIC SALES",
    bio: "Sales director managing strategic partnerships, hardware client agreements, and computing solutions delivery.",
    image: "/Md Nasimul Alam.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "nasimul.sales@siliconcomputing.com",
    department: "techno-sales",
    badge: "SF-24",
    education: "MBA in Business Administration & Marketing",
    skills: ["Strategic Sales", "Key Account Management", "B2B Negotiations", "Hardware Financing"],
    story: [
      "Md Nasimul Alam directs sales strategies, negotiates enterprise compute packages, and forms tech deployment alliances.",
      "His guidance helps corporate clients size their physical storage and GPU computing frames to match resource parameters."
    ]
  },
  {
    id: "sohana-tabasum",
    name: "Sohana Tabasum",
    role: "SR. EXECUTIVE BUSINESS DEVELOPMENT",
    bio: "Senior development lead shaping client outreach pipelines and enterprise server contract options.",
    image: "/Sohana Tabasum.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sohana.bd@siliconcomputing.com",
    department: "business",
    badge: "SF-24",
    education: "M.BA. in International Business",
    skills: ["Business Development", "Client Engagement", "Enterprise SaaS Sales", "Strategic Partnerships"],
    story: [
      "Sohana Tabasum shapes outreach strategy, presents SCL's cloud migration methodologies to corporate boards, and monitors client success metrics.",
      "Her diligence facilitates smooth onboarding and maintains long-term trust with our key enterprise accounts."
    ]
  },
  {
    id: "md-sadekur-rahman-shokal",
    name: "MD Sadekur Rahman Shokal",
    role: "JR. EXECUTIVE, SALES",
    bio: "Sales associate managing customer relations, product walkthroughs, and computing system quotes.",
    image: "/MD Sadekur Rahman Shokal.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sadekur.sales@siliconcomputing.com",
    department: "techno-sales",
    badge: "SF-24",
    education: "B.BA in Marketing",
    skills: ["Sales Pipelines", "Lead Generation", "Product Demos", "Customer Relations"],
    story: [
      "MD Sadekur Rahman Shokal manages sales telemetry, follows up with incoming leads, and coordinates systems configuration quotes.",
      "Sadekur's focus on user requirements helps connect incoming client technical teams with SCL design architects."
    ]
  },
  {
    id: "mimona-khan-nuran",
    name: "Mimona Khan Nuran",
    role: "ASSISTANT MANAGER BUSINESS DEVELOPMENT",
    bio: "Business manager structuring hardware pricing proposals and customer service level agreements.",
    image: "/Mimona Khan Nuran.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mimona.bd@siliconcomputing.com",
    department: "business",
    badge: "SF-24",
    education: "B.BA in Business Management",
    skills: ["Business Strategy", "Client Consultations", "Hardware Sizing Pricing", "SLA Negotiations"],
    story: [
      "Mimona Khan Nuran evaluates market expansion avenues, crafts detailed hardware pricing models, and manages SLA documents.",
      "She ensures that all client proposals align with corporate security compliance directives and hardware deployment speeds."
    ]
  },
  {
    id: "sumaya-islam-suma",
    name: "Sumaya Islam Suma",
    role: "EXECUTIVE BUSINESS DEVELOPMENT",
    bio: "Development coordinator managing market analytics and corporate sales proposals.",
    image: "/Sumaya Islam Suma.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sumaya.bd@siliconcomputing.com",
    department: "business",
    badge: "SF-24",
    education: "B.BA. in Finance",
    skills: ["Market Analysis", "B2B Outreach", "Proposal Writing", "Corporate Relations"],
    story: [
      "Sumaya Islam Suma tracks industry trends, prepares financial proposals, and supports the strategic business team's B2B outreach campaigns.",
      "Suma's analytic assets help identify emerging requirements for high-performance GPU hosting and secure hybrid cloud solutions."
    ]
  },
  {
    id: "nahid-kawsar",
    name: "Nahid Kawsar",
    role: "DEPUTY MANAGER, SALES",
    bio: "Sales manager directing corporate accounts retention and cloud subscription renewals.",
    image: "/Nahid Kawsar.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "nahid.sales@siliconcomputing.com",
    department: "techno-sales",
    badge: "SF-24",
    education: "M.BA in Sales & Operations",
    skills: ["Sales Management", "Pricing Orchestration", "Hardware Distribution Logics", "Client Retention"],
    story: [
      "Nahid Kawsar leads client account reviews, manages recurring billing updates, and coordinates cloud licensing renewals.",
      "His close consultation helps current clients scale up compute nodes dynamically while matching corporate financial guardrails."
    ]
  }
];

// 5. Project Portfolio
export const projectsData: Project[] = [
  {
    id: "ai-medical",
    title: "AI-Powered Medical Diagnostic Engine",
    category: "AI",
    client: "BioTech Health Corp",
    description: "Developed a computer vision diagnostic suite that analyzes high-resolution imaging to assist oncologists with early tumor identification.",
    fullDetails: "Integrating deep residual neural networks (ResNet-101) trained on encrypted medical registries, we delivered a cloud-based diagnostic dashboard that reduces analysis time by 60% with an accuracy index of 99.4%. Fully compliant with HIPAA policies and integrated with hospital EHR networks.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
    stats: "99.4% Accuracy Index",
    techStack: ["PyTorch", "Python", "React", "Docker", "AWS SageMaker"]
  },
  {
    id: "cloud-bank",
    title: "Secure Multi-Cloud Core Banking System",
    category: "Cloud",
    client: "Federal Trust & Loan",
    description: "Re-engineered a legacy core banking layout into a modern, distributed microservices network spread securely across AWS and Azure.",
    fullDetails: "Designed a multi-region active-active database partition leveraging PostgreSQL and Kubernetes clusters. Developed fully automated CI/CD terraform scripts, reduced operational transaction fees by 42%, and survived automated red-team simulations with zero penetration indices.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800&h=500",
    stats: "42% OpEx Reduction",
    techStack: ["Kubernetes", "AWS EKS", "Terraform", "Go", "PostgreSQL"]
  },
  {
    id: "sec-energy",
    title: "Zero-Trust SCADA Infrastructure Security",
    category: "Security",
    client: "Apex Energy Utilities",
    description: "Hardened distributed energy grid telemetry endpoints using software-defined boundaries and centralized threat analytics.",
    fullDetails: "Fitted SCADA hardware controllers with secure cryptoprocessors and zero-trust firewall configurations. Established a state-of-the-art Security Operations Center dashboard which processes millions of telemetry operations, providing automated containment protocols.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=500",
    stats: "100% Threat Containment",
    techStack: ["Rust", "Ansible", "ELK Stack", "Grafana", "Cisco Zero-Trust"]
  },
  {
    id: "soft-retail",
    title: "Enterprise Omni-Channel Logistics System",
    category: "Software",
    client: "Vanguard Global Commerce",
    description: "Designed a real-time warehouse inventory, tracking, and customer logistics portal coordinating multi-national distributions.",
    fullDetails: "Built a customized web and mobile ecosystem that coordinates 12 logistics hubs using dynamic routing algorithms. Implemented event-driven architectures with Apache Kafka to update supply chains with sub-second latency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
    stats: "Sub-Second Inventory Latency",
    techStack: ["Next.js", "Node.js", "Apache Kafka", "Redis", "TypeScript"]
  }
];

// 6. Testimonials
export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Sarah Jenkins",
    role: "VP of Medical Operations",
    company: "BioTech Health Corp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Silicon Computing Ltd delivered a complex AI diagnostic system on schedule. Their technical competence, compliance diligence, and outstanding support changed how our research clinics operate.",
    rating: 5
  },
  {
    id: "test-2",
    name: "James Henderson",
    role: "Chief Information Officer",
    company: "Federal Trust & Loan",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Migrating core banking applications to the cloud is a logistical nightmare. The senior cloud architects at Silicon Computing mapped our journey seamlessly, securing our infrastructure flawlessly.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Marcus Vance",
    role: "Head of Infrastructure",
    company: "Apex Energy Utilities",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Their zero-trust implementation successfully protected our SCADA endpoints from active network threat probes during an independent system audit. We recommend Zakir and his security staff.",
    rating: 5
  }
];

// 7. Blog / Insights
export const blogPostsData: BlogPost[] = [
  {
    id: "insight-ai",
    title: "Navigating AI Implementations: A Guide for Boards",
    excerpt: "Learn how modern enterprise boards are selecting machine learning technologies and avoiding deployment overhead.",
    content: "Deploying AI at enterprise scale requires balancing technical potential with strict business alignment and compliance guardrails. In this guide, we break down model selection, operational costs, training cycles, data masking protocols, and standard corporate key performance indicators.",
    category: "AI & Innovation",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400",
    author: {
      name: "Mahfuz Rahman",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: "insight-security",
    title: "The Imperative of Zero-Trust Network Boundaries",
    excerpt: "With remote access and connected hardware terminals expanding, the traditional firewall perimeter is dead.",
    content: "Zero-trust model assumes that every access request is untrusted by default, even if it originates inside the corporate network. We analyze software-defined boundaries, identity federation, cryptographic hardware keys, and how to execute this security pivot without disrupting developer velocity.",
    category: "Cyber Security",
    date: "April 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400",
    author: {
      name: "Zakir Hossain",
      role: "Director of Cyber Security",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: "insight-cloud",
    title: "Sovereign Cloud Migrations for Highly Regulated Sectors",
    excerpt: "Discover the multi-region setups, encrypted pipelines, and compliance frameworks needed for secure data handling.",
    content: "Moving financial or health services telemetry into public servers demands precise regulatory compliance. We share best practices on data residency orchestration, granular database encryption schemes, automated server auditing logs, and cost governance methods inside Kubernetes infrastructures.",
    category: "Cloud Operations",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
    author: {
      name: "MD Nasir Feroz",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80"
    }
  }
];

// 8. Timeline Milestones for About Page
export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: "Foundation & Vision",
    description: "Silicon Computing Ltd is founded with a mission to deliver end-to-end digital transformation and robust system architecture to enterprise clients.",
    icon: "Compass"
  },
  {
    year: "2022",
    title: "SCADA Grid Partnerships",
    description: "Secured SCADA utilities for critical energy networks and formed our dedicated Threat Intelligence & Cyber Security Center.",
    icon: "ShieldCheck"
  },
  {
    year: "2023",
    title: "Multi-Cloud Migrations",
    description: "Expanded core database operations, helping major banking institutions deploy microservice topologies securely over AWS and Azure.",
    icon: "Cloud"
  },
  {
    year: "2024",
    title: "AI Research Hub Launch",
    description: "Established our Artificial Intelligence & Analytics Division, engineering deep learning and predictive medical telemetry tools.",
    icon: "Cpu"
  },
  {
    year: "2025",
    title: "Enterprise Solutions Scale",
    description: "Grown to over 40 technical specialists and delivered premium custom SaaS operations to more than 250 global clients.",
    icon: "Code"
  }
];
