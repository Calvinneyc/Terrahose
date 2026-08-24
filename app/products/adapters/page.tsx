import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/adapters"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose", name: "Hydraulic Hose" },
  { slug: "hydraulic-fittings", name: "Hydraulic Fittings" },
  { slug: "ferrules", name: "Ferrules" },
  { slug: "o-rings-seals", name: "O-Rings & Seals" },
  { slug: "accessories", name: "Accessories" },
];

export default function AdaptersPage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="Adapters"
      description="Hydraulic adapter fittings to connect different thread types and sizes. BSP, JIS, NPT, ORFS in various combinations."
      specs={[
        { label: "Thread Conversions", value: "BSP to JIS, BSP to NPT, BSP to ORFS, JIS to NPT, and more" },
        { label: "Materials", value: "Carbon steel (zinc plated), Stainless steel SS304/SS316" },
        { label: "Types", value: "Straight adapters, elbow adapters (45°/90°), tee adapters, bulkhead adapters" },
        { label: "Pressure Rating", value: "Up to 5000 psi (varies by thread combination and size)" },
      ]}
      types={[
        { name: "BSP to JIS Adapter", description: "Connects BSP fitting to JIS port. Critical: JIS and BSP have different thread pitches." },
        { name: "BSP to NPT Adapter", description: "Connects BSP fitting to NPT threaded port. Common when mixing US/UK equipment." },
        { name: "BSP to ORFS Adapter", description: "Connects BSP fitting to ORFS component." },
        { name: "Bulkhead Adapter", description: "Passes through a panel or tank wall. Has a locknut on one side." },
        { name: "Elbow Adapters", description: "90° and 45° adapters for tight spaces. Available in various thread combinations." },
      ]}
      standards={["BSPP / BSPT (ISO 1179 / ISO 7)", "JIS B2351", "NPT / NPTF (ANSI B1.20.1)", "ORFS (ISO 8434-3)"]}
      sizes={["1/4\"", "3/8\"", "1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\""]}
      materials={["Carbon Steel (Zinc Plated)", "Stainless Steel SS304"]}
      applications={["Connecting mixed-brand hydraulic components", "Adapting fittings to non-standard ports", "Workshop hose assembly repairs", "OEM to aftermarket fitting conversion"]}
      notes={["The most common adapter we sell is BSP to JIS — many customers accidentally buy JIS fittings when their equipment actually uses BSP.", "Taking a photo of the fitting or port before ordering helps us confirm the right adapter."]}
      whatsappSubject="Hi Terra Hose, I need an adapter to connect BSP to JIS fittings. What do you have?"
      siblings={siblings}
    />
  );
}
