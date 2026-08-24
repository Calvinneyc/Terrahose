/**
 * 服务数据 — 以后可替换为数据库/API
 */
export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // 图标 key（组件里映射为 SVG）
}

export const services: Service[] = [
  {
    slug: "hydraulic-hose-assembly",
    title: "Hydraulic Hose Assembly",
    short: "软管总成",
    description:
      "Provide sample or specification → Terra identifies → assembles → pressure tests → delivers. Complete hose assembly service.",
    icon: "wrench",
  },
  {
    slug: "hose-crimping",
    title: "Hose Crimping",
    short: "压管",
    description:
      "Precision crimping for hydraulic hoses up to heavy-duty sizes, using calibrated crimpers for a reliable, leak-free connection.",
    icon: "crimp",
  },
  {
    slug: "hose-replacement",
    title: "Hose Replacement",
    short: "换管",
    description:
      "Fast replacement of damaged or failed hydraulic hoses. Bring the old hose in or send a photo, we identify and match it.",
    icon: "replace",
  },
  {
    slug: "hydraulic-hose-repair",
    title: "Hydraulic Hose Repair",
    short: "维修",
    description:
      "On-the-spot repair and re-termination of hydraulic hose assemblies to minimise machine downtime.",
    icon: "repair",
  },
  {
    slug: "custom-hose-assembly",
    title: "Custom Hose Assembly",
    short: "定制总成",
    description:
      "Custom length, custom fittings and custom orientation. Built to your exact specification and application.",
    icon: "custom",
  },
  {
    slug: "onsite-emergency",
    title: "On-Site / Emergency Service",
    short: "现场/紧急服务",
    description:
      "Mobile hose replacement and emergency support for excavators, machinery and factory equipment.",
    icon: "truck",
  },
];
