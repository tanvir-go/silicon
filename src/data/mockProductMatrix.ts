export interface ProductMatrixItem {
  id: string;
  domain: string;
  categories: string[];
  oems: string[];
  iconName: "Server" | "Cloud" | "Eye" | "Database" | "Network" | "ShieldAlert" | "ShieldCheck";
}

export const productMatrixData: ProductMatrixItem[] = [
  {
    id: "app-infra",
    domain: "Application Infrastructure",
    categories: ["Server", "Storage", "Virtualization", "Backup"],
    oems: ["Dell", "HPE", "Proxmox", "Virtuozzo", "Veeam", "Supermicro", "Redhat", "Suse", "Sangfor"],
    iconName: "Server"
  },
  {
    id: "cloud-devops",
    domain: "Cloud and DevOps",
    categories: ["Cloud DC/DR", "Cloud DB", "Backup", "CI/CD"],
    oems: ["AWS", "Google Cloud", "Azure", "Gitlab", "PaceCloud", "LxRoot"],
    iconName: "Cloud"
  },
  {
    id: "mgmt-monitoring",
    domain: "Management & Monitoring",
    categories: ["NMS", "ITSM", "App Monitoring", "Unified Monitoring"],
    oems: ["Atlassian", "Grafana", "Servana", "Freshworks"],
    iconName: "Eye"
  },
  {
    id: "db-warehouse",
    domain: "Database and Data Warehouse",
    categories: ["Database", "Business Analytics"],
    oems: ["Oracle", "EDB", "MySQL", "Supabase", "MSSQL"],
    iconName: "Database"
  },
  {
    id: "networking",
    domain: "Networking",
    categories: ["Switch", "Router", "Access Point"],
    oems: ["Cisco", "Juniper", "Aruba", "Cambium", "Alcatel Lucent"],
    iconName: "Network"
  },
  {
    id: "net-security",
    domain: "Network Security",
    categories: ["Firewall", "SDN"],
    oems: ["Fortinet", "Sophos", "Cisco", "Juniper"],
    iconName: "ShieldAlert"
  },
  {
    id: "cybersecurity",
    domain: "Cybersecurity",
    categories: ["SIEM", "SOC", "WAF", "Anti-DDoS", "End Point", "E-mail"],
    oems: ["Barracuda", "Entrust", "Kaspersky", "Acronis", "F5", "Wazuh"],
    iconName: "ShieldCheck"
  }
];
