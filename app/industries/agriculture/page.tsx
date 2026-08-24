import { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["industries/agriculture"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "construction", name: "Construction" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "heavy-machinery", name: "Heavy Machinery" },
  { slug: "industrial", name: "Industrial" },
];

export default function AgriculturePage() {
  return (
    <IndustryPage
      tag="Industries"
      title="Agriculture"
      iconName="agriculture"
      description="Hydraulic hose solutions for tractors, harvesters, sprayers, and agricultural machinery. Durable fittings built for mud, dust, and outdoor conditions."
      challenges={[
        "Seasonal rushes — harvest time means urgent replacements when equipment fails",
        "Equipment operates in dusty, muddy, high-humidity conditions",
        "Older tractors may have NPT (American) thread fittings mixed with BSP",
        "Small operators may need just one or two hoses — not a full kit",
        "Fittings corroded by fertiliser and chemical exposure",
      ]}
      solutions={[
        "Quick turnaround for common agricultural hose sizes",
        "Stainless steel fittings available for corrosive chemical environments",
        "Flexible order quantities — one hose or bulk",
        "WhatsApp photo identification for non-standard fittings",
        "Advice on fitting materials for fertiliser spray equipment",
      ]}
      commonEquipment={[
        "Agricultural tractors (John Deere, Kubota, New Holland, Massey Ferguson, Yanmar)",
        "Combine harvesters",
        "Field sprayers (boom spray systems)",
        "Rice transplanters",
        "Sugarcane harvesters",
        "Trailers with hydraulic tipper systems",
      ]}
      notes={[
        "For spray equipment that handles fertiliser or chemical solutions, the O-ring material is important — tell us the fluid type.",
        "Small agricultural operations: we supply single hoses, no minimum order.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic hose for a farm tractor. Can you help?"
      siblings={siblings}
    />
  );
}
