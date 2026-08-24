import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/o-rings-seals"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose", name: "Hydraulic Hose" },
  { slug: "hydraulic-fittings", name: "Hydraulic Fittings" },
  { slug: "ferrules", name: "Ferrules" },
  { slug: "adapters", name: "Adapters" },
  { slug: "accessories", name: "Accessories" },
];

export default function ORingsSealsPage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="O-Rings & Seals"
      description="Hydraulic O-rings, backup rings, u-cups, and hydraulic seals for fittings, pumps, and cylinders. Various materials for different fluids and temperatures."
      specs={[
        { label: "Common Materials", value: "NBR (Nitrile), Viton (FKM), PTFE (Teflon), Polyurethane (PU)" },
        { label: "Temperature Range", value: "NBR: -30°C to +100°C | Viton: -20°C to +200°C | PTFE: -200°C to +260°C" },
        { label: "Applications", value: "BSPP O-ring seats, ORFS face seals, cylinder seals, pump seals, valve seats" },
        { label: "Standard Sizes", value: "Metric and Imperial O-ring sizes in stock. Non-standard sizes can be ordered." },
      ]}
      types={[
        { name: "NBR O-Rings (Nitrile)", description: "Most common hydraulic O-ring. Good oil and fuel resistance. Not suitable for phosphate ester fluids (HFD) or high temperatures." },
        { name: "Viton/FKM O-Rings", description: "High temperature and chemical resistance. Used in demanding hydraulic systems. More expensive than NBR." },
        { name: "PTFE O-Rings", description: "Chemically inert. Wide temperature range. Low friction. Can be used where rubber fails. Less elastic — needs proper housing." },
        { name: "Backup Rings", description: "Used behind O-rings in high-pressure applications to prevent extrusion into the gap." },
        { name: "U-Cups / Rod Seals", description: "Used in hydraulic cylinders to seal the piston rod." },
        { name: "Parker O-Rings", description: "We stock Parker O-Rings for ORFS fittings — the most reliable choice for face seal connections." },
      ]}
      standards={["AS568 (Imperial O-ring sizes)", "ISO 3601 (Metric O-ring sizes)", "SAE J515 (ORFS O-ring material specifications)"]}
      materials={["NBR (Nitrile / Buna-N)", "FKM (Viton)", "PTFE (Teflon)", "Polyurethane (PU)", "Silicone (high temp)"]}
      applications={["BSPP fitting O-ring seats", "ORFS fitting face seals", "Hydraulic cylinder seals", "Pump and motor shaft seals", "Valve seat seals", "High-pressure hydraulic systems"]}
      notes={["For ORFS fittings, always use Parker NBR or Viton O-rings — cheap imitations cause leaks.", "When ordering, tell us the fitting size and the fluid type (mineral oil, bio-fluid, phosphate ester) so we can recommend the right material."]}
      whatsappSubject="Hi Terra Hose, I need O-rings for hydraulic fittings. What material and size do I need?"
      siblings={siblings}
    />
  );
}
