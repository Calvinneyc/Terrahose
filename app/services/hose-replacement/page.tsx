import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["services/hose-replacement"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose-assembly", name: "Hose Assembly" },
  { slug: "hose-crimping", name: "Hose Crimping" },
  { slug: "hydraulic-hose-repair", name: "Hose Repair" },
  { slug: "custom-hose-assembly", name: "Custom Assembly" },
];

export default function HoseReplacementPage() {
  return (
    <ServicePage
      tag="Our Services"
      title="Hose Replacement"
      tagline="Fast Turnaround"
      description="Quick hydraulic hose replacement service. When a hose blows or wears out, we get you back running with minimal downtime."
      process={[
        { step: 1, title: "Identify the failed hose", description: "Tell us or show us the damaged hose — size, length, and fitting types. If the fittings are still intact on the equipment, we can often use them as a template." },
        { step: 2, title: "Quote and confirmation", description: "We give you the price for the replacement assembly. No surprises." },
        { step: 3, title: "Assembly", description: "We cut the new hose to the exact length, crimp the fittings, and inspect the assembly." },
        { step: 4, title: "Collection or delivery", description: "Pick up from our workshop in Kulai, or arrange delivery (subject to location)." },
      ]}
      features={[
        "Same-day service for common sizes (R1AT 1/2\", 3/4\", etc.)",
        "No minimum order — single hose replacement welcome",
        "Can match the original hose specification or recommend an upgrade",
        "Also replaces fittings if damaged",
        "Workshop in Kulai, Johor",
      ]}
      applications={[
        "Excavator hose replacement (Hitachi, CAT, Komatsu, Volvo, Kobelco)",
        "Truck hydraulic line replacement",
        "Agricultural machinery hose swap",
        "Industrial equipment hose change",
      ]}
      notes={[
        "For emergency situations, WhatsApp us a photo immediately — we can often have the assembly ready before you arrive.",
        "We recommend replacing both the hose and any damaged O-rings at the same time to avoid repeat visits.",
      ]}
      whatsappSubject="Hi Terra Hose, my hydraulic hose has blown. I need a replacement urgently. Can you help?"
      siblings={siblings}
    />
  );
}
