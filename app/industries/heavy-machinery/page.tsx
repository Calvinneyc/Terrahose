import { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["industries/heavy-machinery"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "construction", name: "Construction" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "industrial", name: "Industrial" },
];

export default function HeavyMachineryPage() {
  return (
    <IndustryPage
      tag="Industries"
      title="Heavy Machinery"
      iconName="machinery"
      description="High-pressure hydraulic hose for mining, quarrying, and heavy-duty mobile machinery. R13 and 4SH hose for the most demanding applications."
      challenges={[
        "Very high working pressures — substandard hose is dangerous",
        "Large bore hose (1-1/4\" to 2\") needed for big cylinders and motors",
        "Abrasion from rock, sand, and aggregate — hose cover wears quickly",
        "Heat from high-duty cycles — standard hose may fail prematurely",
        "Remote locations — equipment must be right first time",
      ]}
      solutions={[
        "R13 (six spiral, very high pressure) and 4SH hose in stock",
        "Large bore hose sizes up to 2\" ID",
        "Abrasion-resistant hose cover options (e.g., thick cover, steel spiral guard)",
        "Correct pressure rating for every application — we specify based on system pressure, not guess",
        "Fleet supply arrangements for mining and quarry operators",
      ]}
      commonEquipment={[
        "Mining excavators and loaders",
        "Quarry crushers and screeners",
        "Off-road dump trucks (ADT)",
        "Drilling rigs",
        "Tunnel boring machines",
        "Large marine equipment",
      ]}
      notes={[
        "For mining and quarry applications, correct pressure rating is critical — under-rated hose is a safety hazard.",
        "We do not substitute lower-rated hose for cost reasons. If the system is 350 bar, we supply 350 bar hose.",
        "Bulk supply and exchange programs available for large fleet operators.",
      ]}
      whatsappSubject="Hi Terra Hose, I need high-pressure hydraulic hose for heavy mining equipment. Can you help?"
      siblings={siblings}
    />
  );
}
