import { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["industries/construction"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "agriculture", name: "Agriculture" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "heavy-machinery", name: "Heavy Machinery" },
  { slug: "industrial", name: "Industrial" },
];

export default function ConstructionPage() {
  return (
    <IndustryPage
      tag="Industries"
      title="Construction"
      iconName="construction"
      description="Hydraulic hose and fitting solutions for excavators, bulldozers, cranes, and all construction equipment. Fast replacement service to keep your job site running."
      challenges={[
        "Hose blow-offs on excavator booms — common in high-wear articulation points",
        "Downtime costs money — equipment standing is lost productivity",
        "Difficulty identifying the correct hose spec on older machines",
        "Non-standard fittings on older or imported equipment",
        "Emergency replacements needed on-site or at short notice",
      ]}
      solutions={[
        "Same-day hose assembly for common excavator hose sizes",
        "WhatsApp photo identification — send a photo, we identify the part",
        "Wide range of fittings including BSP, JIS (common in Japanese equipment)",
        "Bulk ordering available for fleet maintenance programs",
        "Advice on hose routing to reduce future wear points",
      ]}
      commonEquipment={[
        "Excavators (Hitachi, CAT, Komatsu, Volvo, Kobelco, Kato, Sany, XCMG)",
        "Bulldozers (CAT, Komatsu, Shantui)",
        "Mobile cranes (Grove, Terex, Sany)",
        "Wheel loaders (Volvo, CAT, Komatsu, XCMG)",
        "Concrete pumps (Putzmeister, Sany, Zoomlion)",
        "Road rollers and pavers",
      ]}
      notes={[
        "Japanese excavators (Hitachi, Kato, Komatsu) often use JIS fittings — not BSP. Sending a photo helps us confirm.",
        "For construction fleet operators, we can set up a standing order arrangement for common replacement hoses.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic hose for a construction excavator. Can you help?"
      siblings={siblings}
    />
  );
}
