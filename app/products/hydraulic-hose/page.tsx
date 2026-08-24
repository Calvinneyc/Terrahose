import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/hydraulic-hose"];
  return {
    title: p.title,
    description: p.description,
  };
}

const siblings = [
  { slug: "hydraulic-fittings", name: "Hydraulic Fittings" },
  { slug: "ferrules", name: "Ferrules" },
  { slug: "adapters", name: "Adapters" },
  { slug: "o-rings-seals", name: "O-Rings & Seals" },
  { slug: "accessories", name: "Accessories" },
];

export default function HydraulicHosePage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="Hydraulic Hose"
      description={'High-pressure hydraulic hose in SAE and EN standards. From 1/4" to 2" ID. Used in excavators, trucks, presses, and industrial machinery.'}
      specs={[
        { label: "Standards", value: 'SAE 100 R1AT / R2AT, EN 853 1SN / 2SN, EN 856 4SP / 4SH, SAE 100 R13' },
        { label: "Size Range", value: '1/4" (6mm) to 2" (50mm) ID' },
        { label: "Working Pressure", value: "Up to 350 bar (R13)" },
        { label: "Temperature Range", value: "-40°C to +100°C (standard NBR)" },
        { label: "Cover", value: "Synthetic rubber, weather and abrasion resistant" },
        { label: "Reinforcement", value: "One or two wire braid (R1AT/R2AT), four spiral (4SP/4SH), four/six spiral (R13)" },
        { label: "Inner Tube", value: 'Oil-resistant synthetic rubber (NBR)' },
      ]}
      types={[
        { name: "SAE 100 R1AT", description: "One wire braid. General purpose hydraulic hose. Medium pressure." },
        { name: "SAE 100 R2AT", description: "Two wire braid. Higher pressure than R1AT. Most common in mobile hydraulics." },
        { name: "EN 853 1SN", description: "European equivalent to SAE R1AT. One wire braid, same pressure rating." },
        { name: "EN 853 2SN", description: "European equivalent to SAE R2AT. Two wire braid." },
        { name: "EN 856 4SP", description: "Four spiral wire. High pressure. Used in severe duty applications." },
        { name: "EN 856 4SH", description: "Four spiral wire, higher pressure than 4SP. Heavy duty equipment." },
        { name: "SAE 100 R13", description: "Six spiral wire, very high pressure. Mining and heavy equipment." },
      ]}
      standards={[
        "SAE 100 R1AT / R2AT",
        "EN 853 1SN / 2SN",
        "EN 856 4SP / 4SH",
        "SAE 100 R13",
        "ISO 1436",
        "ISO 3862",
      ]}
      sizes={[
        "1/4\" (6mm)", "3/8\" (10mm)", "1/2\" (13mm)",
        "5/8\" (16mm)", "3/4\" (19mm)", "1\" (25mm)",
        "1-1/4\" (32mm)", "1-1/2\" (38mm)", "2\" (50mm)",
      ]}
      materials={["Synthetic Rubber (NBR)", "Steel Wire Braid/Spiral", "Synthetic Rubber Cover (CR)"]}
      applications={[
        "Excavators and backhoes (Hitachi, CAT, Komatsu, Volvo)",
        "Hydraulic presses and injection moulding machines",
        "Truck hydraulic systems",
        "Industrial manufacturing equipment",
        "Agricultural tractors and harvesters",
        "Mining and quarrying machinery",
      ]}
      notes={[
        "Prices vary by hose type (R1AT vs R13), size, and length.",
        "Custom length cut to your exact requirement — no minimum order.",
        "Tell us your equipment model and we'll identify the correct hose.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hydraulic hose. Can you give me a price?"
      siblings={siblings}
    />
  );
}
