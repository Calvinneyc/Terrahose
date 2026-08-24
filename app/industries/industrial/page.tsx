import { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["industries/industrial"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "construction", name: "Construction" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "heavy-machinery", name: "Heavy Machinery" },
];

export default function IndustrialPage() {
  return (
    <IndustryPage
      tag="Industries"
      title="Industrial"
      iconName="industrial"
      description="Complete hydraulic hose service for industrial plants: factory maintenance, process plant, steel mill, and port equipment. Preventive maintenance and emergency repair."
      challenges={[
        "Complex hydraulic systems with multiple hose sizes and fitting types",
        "Planned shutdowns require fast turnaround on multiple hose assemblies",
        "Non-standard fittings on older industrial plant equipment",
        "Need for maintenance records and compliance documentation",
        "On-site hose assembly capability for large plant equipment",
      ]}
      solutions={[
        "Complete hose assembly service from specification to delivery",
        "Multi-hose orders for planned shutdowns — batch assembly",
        "Custom documentation: hose type, length, fitting, pressure rating, date, customer reference",
        "Identification service for non-standard fittings — bring or photograph the fitting",
        "Stocking program for repeat industrial customers — common hoses kept on shelf",
      ]}
      commonEquipment={[
        "Industrial plant hydraulic systems",
        "Steel mill and metal processing equipment",
        "Port and cargo handling equipment (cranes, forklifts)",
        "Power generation plant hydraulic systems",
        "Water and wastewater treatment plant equipment",
        "Chemical processing plant hydraulic circuits",
      ]}
      notes={[
        "For industrial clients with complex systems, we recommend an annual review — we help identify hoses that are approaching end-of-life before they fail.",
        "If your plant uses specialised hydraulic fluids (phosphate ester, high-temperature oil), tell us — hose material selection matters.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic hose service for our factory. Can you help with a planned maintenance order?"
      siblings={siblings}
    />
  );
}
