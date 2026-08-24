import { site } from "@/lib/site";

export const about = {
  company: site.name,
  established: "Johor, Malaysia",
  description: `Terra Hose & Hydraulic Engineering is a specialist hydraulic hose assembly and fitting company based in Johor, Malaysia. We supply and fabricate hydraulic hose assemblies for a wide range of mobile and industrial applications.

Our core strength is hydraulic hose engineering — not just selling products, but helping customers identify the right hose, fitting, and assembly for their specific equipment. From excavators to factory presses, we have the technical knowledge and stock to deliver the right solution fast.`,

  capabilities: [
    "Hydraulic hose assembly (custom length, any fitting)",
    "Hose crimping with precision equipment",
    "Hose replacement and repair",
    "Hydraulic fitting identification (send a photo)",
    "Technical consultation for hydraulic systems",
    "Stock supply of hose, fittings, ferrules, and accessories",
  ],

  // 不虚构：以下是目前有真实依据的内容
  certifications: [], // 暂无 ISO 认证，不写

  location: {
    address: site.address,
    city: "Johor Bahru, Johor, Malaysia",
    postal: "81400",
  },

  hours: site.hours,

  // 关于我们的页面 sections
  sections: [
    {
      title: "What We Do",
      content: `We specialize in hydraulic hose assembly — the process of cutting hose to length, attaching the correct fittings (crimped or barbed), and delivering a ready-to-install hydraulic line.

Whether you need one custom hose for a workshop repair or a bulk order for a fleet, we can produce it. Our workshop stocks common hose types (SAE R1AT, R2AT, 4SP, 4SH) and a wide range of fittings in BSP, JIS, ORFS, and SAE flange patterns.`,
    },
    {
      title: "How We Help You",
      content: `Most customers come to us with one of three needs:

1. **Emergency replacement** — A hose has blown on their machine and they need a new one fast.
2. **Custom assembly** — They need a non-standard hose length or fitting combination that standard suppliers don't carry.
3. **Identification help** — They have a damaged fitting or hose but don't know what specification it is.

For all three, the fastest path is to WhatsApp us a photo. We can usually identify the part and give you a price within minutes.`,
    },
    {
      title: "Our Location",
      content: `Based in Kulai, Johor, we serve clients across Johor Bahru, Kulai, Skudai, Pasir Gudang, and surrounding areas. Workshop visits are welcome during business hours.

For clients outside Johor, we can arrange shipping for standard orders.`,
    },
  ],

  // 团队成员 — 仅列出真实岗位，不虚构人名
  team: [
    {
      role: "Founder & Hydraulic Engineer",
      note: "Technical lead, customer consultation, and custom assembly design.",
    },
    {
      role: "Workshop Technician",
      note: "Hose assembly, crimping, and quality inspection.",
    },
  ],
};
