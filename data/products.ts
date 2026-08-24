/**
 * 产品分类数据 — 以后可替换为数据库/API
 * 首页只展示分类，详细规格进产品数据库
 */
export interface ProductCategory {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
  items: string[]; // 该分类下的代表型号/规格
}

export const productCategories: ProductCategory[] = [
  {
    slug: "hydraulic-hose",
    name: "Hydraulic Hose",
    nameZh: "液压软管",
    description: "High-pressure hydraulic hoses for mobile and industrial applications.",
    items: ["SAE 100 R1AT", "SAE 100 R2AT", "EN 853 1SN", "EN 853 2SN", "EN 856 4SP", "EN 856 4SH", "SAE 100 R13"],
  },
  {
    slug: "hydraulic-fittings",
    name: "Hydraulic Fittings",
    nameZh: "液压接头",
    description: "Wide range of hydraulic fittings and couplings in all thread standards.",
    items: ["JIC 37°", "ORFS", "BSP / BSPP / BSPT", "JIS Metric", "SAE O-Ring Boss", "NPT"],
  },
  {
    slug: "ferrules",
    name: "Ferrules",
    nameZh: "套筒",
    description: "Crimp ferrules and sleeves for secure hose terminations.",
    items: ["Interlock Ferrules", "Skive Ferrules", "No-Skive Ferrules"],
  },
  {
    slug: "adapters",
    name: "Adapters",
    nameZh: "转接头",
    description: "Adapters and connectors to bridge different thread and port types.",
    items: ["SAE Flange Code 61", "SAE Flange Code 62", "BSP to JIC", "Metric to BSP"],
  },
  {
    slug: "o-rings-seals",
    name: "O-Rings & Seals",
    nameZh: "密封件",
    description: "Hydraulic O-rings, seals and sealing kits for leak-free systems.",
    items: ["NBR O-Rings", "Viton O-Rings", "Seal Kits", "Bonded Washers"],
  },
  {
    slug: "accessories",
    name: "Accessories",
    nameZh: "配件",
    description: "Hose clamps, protection sleeves and hydraulic accessories.",
    items: ["Hose Clamps", "Spiral Guards", "Fire Sleeves", "Quick Couplers"],
  },
];
