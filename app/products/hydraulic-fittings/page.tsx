import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/hydraulic-fittings"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose", name: "Hydraulic Hose" },
  { slug: "ferrules", name: "Ferrules" },
  { slug: "adapters", name: "Adapters" },
  { slug: "o-rings-seals", name: "O-Rings & Seals" },
  { slug: "accessories", name: "Accessories" },
];

export default function HydraulicFittingsPage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="Hydraulic Fittings"
      description="Hydraulic adapter fittings in BSP, JIS, ORFS, and SAE flange patterns. Elbows, tees, straight fittings, and flanges. Brass and steel options."
      specs={[
        { label: "Thread Types", value: "BSP (British Standard Pipe), JIS (Japanese Industrial Standard), ORFS, NPT" },
        { label: "Flange Type", value: "SAE Code 61 and Code 62 flange (3000 psi / 6000 psi)" },
        { label: "Materials", value: "Carbon steel (zinc plated), Stainless steel (SS304/SS316), Brass" },
        { label: "Connection Styles", value: "Male/Female fittings, Elbows 45°/90°, Tees, Crosses, Caps, Plugs" },
        { label: "Sealing Types", value: "BSPP (parallel) with O-ring seat, BSPT (tapered), ORFS (face seal), Flange (split flange)" },
        { label: "Pressure Rating", value: "Up to 6000 psi (SAE Code 62 flange)" },
      ]}
      types={[
        { name: "BSP Fittings", description: "British Standard Pipe. The most common fitting type in Malaysia. BSPP (parallel) seals with O-ring; BSPT (tapered) seals with thread." },
        { name: "JIS Fittings", description: "Japanese Industrial Standard. Common in Japanese equipment (Hitachi, Komatsu, Kato). Often confused with BSP — know the difference before ordering." },
        { name: "ORFS Fittings", description: "O-Ring Face Seal. Flat face seal. Common in modern equipment. Leak-free when correctly assembled." },
        { name: "SAE Flange", description: "SAE Code 61 (standard) and Code 62 (high pressure). Split flange connection for high-flow hydraulic circuits." },
        { name: "NPT Fittings", description: "National Pipe Tapered Thread. American standard. Less common in Malaysian equipment but found in some imported machinery." },
      ]}
      standards={["BSPP (ISO 1179)", "BSPT (ISO 7)", "JIS B2351", "ORFS (ISO 8434-3)", "SAE Code 61 / Code 62 (ISO 6162)", "NPT (ANSI/ASME B1.20.1)"]}
      sizes={["1/4\"", "3/8\"", "1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\""]}
      materials={["Carbon Steel (Zinc Plated)", "Stainless Steel SS304", "Stainless Steel SS316", "Brass"]}
      applications={["Excavator hydraulic circuits", "Agricultural equipment hydraulics", "Industrial press machines", "Truck hydraulic systems", "Injection moulding machines"]}
      notes={[
        "JIS fittings look similar to BSP but are NOT interchangeable — different thread pitch. Sending a photo via WhatsApp helps us identify correctly.",
        "BSP vs JIS is the most common misidentification issue. We can help you confirm the correct fitting.",
        "ORFS fittings need the correct O-ring material for the fluid type (NBR, Viton, etc.).",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic fittings. Can you help identify what I need? I can send a photo."
      siblings={siblings}
    />
  );
}
