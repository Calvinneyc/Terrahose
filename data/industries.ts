/**
 * 行业应用数据 — 以后可替换为数据库/API
 */
export interface Industry {
  slug: string;
  name: string;
  icon: string;
}

export const industries: Industry[] = [
  { slug: "construction", name: "Construction", icon: "construction" },
  { slug: "agriculture", name: "Agriculture", icon: "agriculture" },
  { slug: "manufacturing", name: "Manufacturing", icon: "manufacturing" },
  { slug: "heavy-machinery", name: "Heavy Machinery", icon: "machinery" },
  { slug: "industrial", name: "Industrial", icon: "industrial" },
];

/**
 * 为什么选 Terra — 具体能力（不是空话）
 */
export const whyTerra: string[] = [
  "Professional Hose Assembly",
  "Wide Range of Hydraulic Fittings",
  "Technical Hose Identification",
  "Precision Crimping",
  "Quality Inspection & Pressure Testing",
  "Fast Turnaround",
  "Custom Hose Assembly",
  "Engineering Support",
];
