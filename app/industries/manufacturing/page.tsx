import { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["industries/manufacturing"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "construction", name: "Construction" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "heavy-machinery", name: "Heavy Machinery" },
  { slug: "industrial", name: "Industrial" },
];

export default function ManufacturingPage() {
  return (
    <IndustryPage
      tag="Industries"
      title="Manufacturing"
      iconName="manufacturing"
      description="Hydraulic hose and fitting solutions for industrial manufacturing: presses, injection moulding machines, CNC equipment, and production line hydraulic systems."
      challenges={[
        "Planned maintenance preferred — but breakdowns happen and cause production delays",
        "Hydraulic presses and injection moulding machines often use high-pressure hose (4SH, R13)",
        "Some OEM equipment uses proprietary or non-standard fitting patterns",
        "Need documentation for maintenance records and compliance",
        "Machine downtime has high financial cost",
      ]}
      solutions={[
        "Stock of high-pressure hose (4SP, 4SH, R13) for press and moulding machine applications",
        "ORFS fittings for modern manufacturing equipment",
        "Custom assembly with reference numbering for maintenance tracking",
        "Predictive maintenance consultation — we help plan hose replacement schedules",
        "Bulk and standing order arrangements for factory maintenance programs",
      ]}
      commonEquipment={[
        "Hydraulic presses (C-frame, 4-post)",
        "Injection moulding machines",
        "CNC machining centre coolant and hydraulic systems",
        "Power presses and stamping lines",
        "Industrial robot hydraulic systems",
        "Automated assembly lines",
      ]}
      notes={[
        "For manufacturing clients, we recommend a hose inventory program — keeping common replacement hoses in stock reduces emergency downtime.",
        "Tell us the machine's hydraulic schematic or fitting pattern if available — it helps us get the right specification first time.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic hose for a manufacturing press. Can you help?"
      siblings={siblings}
    />
  );
}
