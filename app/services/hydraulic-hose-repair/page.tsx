import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["services/hydraulic-hose-repair"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose-assembly", name: "Hose Assembly" },
  { slug: "hose-crimping", name: "Hose Crimping" },
  { slug: "hose-replacement", name: "Hose Replacement" },
  { slug: "custom-hose-assembly", name: "Custom Assembly" },
];

export default function HydraulicHoseRepairPage() {
  return (
    <ServicePage
      tag="Our Services"
      title="Hydraulic Hose Repair"
      tagline="Workshop Service"
      description="Hydraulic hose repair at our workshop in Kulai, Johor. Fix leaks, replace damaged sections, re-crimp fittings — often saving the cost of a full replacement."
      process={[
        { step: 1, title: "Assess the damage", description: "Bring the hose or equipment to our workshop, or send a photo via WhatsApp. We assess whether repair is feasible or if full replacement is needed." },
        { step: 2, title: "Repair or replace", description: "If the hose body is damaged (abrasion, kink), replacement is usually required. If only the fitting is damaged (stripped thread, cracked body), repair may be possible by replacing just the fitting." },
        { step: 3, title: "Complete the work", description: "We repair the hose assembly and pressure-test it if needed before you collect." },
      ]}
      features={[
        "Fitting replacement (if fitting thread is damaged but hose body is OK)",
        "Ferrule re-crimping (if the original crimp failed)",
        "O-ring and seal replacement",
        "Ad-hoc repair assessment — we tell you honestly if repair is viable",
      ]}
      applications={[
        "Stripped BSP or JIS thread on a fitting",
        "Damaged ferrule from incorrect crimping",
        "Leaking fitting that needs re-seating",
        "Worn O-ring seat on a BSPP fitting",
      ]}
      notes={[
        "We give honest advice — if the hose is too worn for repair, we tell you. A repair that fails is more expensive in the long run.",
        "WhatsApp a photo before coming — we can often tell you on the spot if repair is possible.",
      ]}
      whatsappSubject="Hi Terra Hose, I have a hydraulic fitting that seems damaged. Can you repair it?"
      siblings={siblings}
    />
  );
}
