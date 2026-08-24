import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["services/hydraulic-hose-assembly"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hose-crimping", name: "Hose Crimping" },
  { slug: "hose-replacement", name: "Hose Replacement" },
  { slug: "hydraulic-hose-repair", name: "Hose Repair" },
  { slug: "custom-hose-assembly", name: "Custom Assembly" },
];

export default function HydraulicHoseAssemblyPage() {
  return (
    <ServicePage
      tag="Our Services"
      title="Hydraulic Hose Assembly"
      tagline="Core Service"
      description="Custom hydraulic hose assembly: we cut hose to your exact length, attach fittings (crimped), and deliver a ready-to-install hydraulic line."
      process={[
        { step: 1, title: "Identify the hose specification", description: "Tell us the hose size (e.g., 1/2 inch), length, working pressure, and equipment model. If you don't know, send a photo and we'll identify it." },
        { step: 2, title: "Select the correct fittings", description: "We match the fittings to your equipment's port thread type: BSP, JIS, ORFS, or SAE flange. Correct fitting selection is critical — we handle this for you." },
        { step: 3, title: "Cut and assemble", description: "The hose is cut to length, fittings are attached, and the assembly is crimped using precision crimping equipment with correct crimp diameter." },
        { step: 4, title: "Quality check", description: "Every assembly is inspected for correct crimp, fitting alignment, and visual integrity before delivery." },
      ]}
      features={[
        "Custom length — no standard cut-length restrictions",
        "Wide fitting range: BSP, JIS, ORFS, SAE flange",
        "SAE R1AT, R2AT, 4SP, 4SH, R13 hose in stock",
        "One-off order or bulk — no minimum",
        "Same-day assembly for common sizes",
        "Ferrules and O-rings included in fitting price",
      ]}
      applications={[
        "Excavator hydraulic lines",
        "Truck hydraulic systems",
        "Agricultural equipment (tractors, harvesters)",
        "Industrial presses and machinery",
        "Mining equipment hydraulic circuits",
        "Marine hydraulic systems",
      ]}
      notes={[
        "The most important information: hose size (ID), length needed, and fitting thread type on both ends.",
        "If the equipment uses JIS fittings, we need to know — JIS and BSP look similar but are not interchangeable.",
        "WhatsApp us a photo of the old hose or the equipment port — we can usually identify the right specification within minutes.",
      ]}
      whatsappSubject="Hi Terra Hose, I need a custom hydraulic hose assembly. Can you help?"
      siblings={siblings}
    />
  );
}
