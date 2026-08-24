/**
 * 站点全局配置 — 单一数据源
 * 所有组件从这里读取公司信息，避免硬编码分散
 */
export const site = {
  name: "TERRA HOSE & HYDRAULIC ENGINEERING",
  shortName: "Terra Hose",
  tagline: "Hydraulic Hose Assembly & Hydraulic Fittings",
  description:
    "Professional hydraulic hose assembly and hydraulic fittings engineering in Johor, Malaysia. Custom hose assembly, crimping, replacement and on-site service.",
  phone: "+60167728500",
  phoneDisplay: "+60 16-772 8500",
  whatsapp: "60167728500",
  email: "terra.engrg@gmail.com",
  address: "190-5, Jalan Saleng 10, Kulai, Johor 81400, Malaysia",
  addressShort: "Kulai, Johor, Malaysia",
  region: "Johor Bahru",
  // 营业时间
  hours: "Mon–Sat: 8:30 AM – 6:00 PM",
} as const;

/** WhatsApp 预填消息链接 */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** 默认 WhatsApp 咨询消息 */
export const waDefault = waLink(
  `Hi Terra Hose, I'd like to enquire about hydraulic hose / fittings.`
);

/** 电话链接 */
export const telLink = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
