import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/accessories"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose", name: "Hydraulic Hose" },
  { slug: "hydraulic-fittings", name: "Hydraulic Fittings" },
  { slug: "ferrules", name: "Ferrules" },
  { slug: "adapters", name: "Adapters" },
  { slug: "o-rings-seals", name: "O-Rings & Seals" },
];

export default function AccessoriesPage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="Accessories"
      description="Hydraulic accessories: hose clamps, bend restrictors, hose guards, quick couplers, and protective sleeves."
      specs={[
        { label: "Hose Clamps", value: "Standard and heavy-duty worm drive clamps. Stainless steel options for corrosive environments." },
        { label: "Bend Restrictors", value: "Plastic or rubber. Prevents excessive bending near fittings. Required for some equipment manufacturers." },
        { label: "Hose Guards", value: "Steel or PVC spiral wrap. Protects hose cover from abrasion, heat, and mechanical damage." },
        { label: "Quick Couplers", value: "ISO 5675 (Agricultural) and ISO 7241-1 (Industrial) series. Allows fast hose connection/disconnection." },
        { label: "Protective Sleeves", value: "PVC, nylon, and rubber. Used where hose contacts sharp edges or high heat." },
      ]}
      types={[
        { name: "Hose Clamps", description: "Worm drive (Jubilee) clamps, T-bolt clamps for high-pressure applications." },
        { name: "Bend Restrictors", description: "Moulded plastic or rubber rings that clip over the hose near fittings." },
        { name: "Spiral Hose Guard", description: "Steel or PVC spiral wrap threaded over the hose for abrasion protection." },
        { name: "Quick Couplers", description: "Male/female quick-release hydraulic couplers. ISO standard patterns." },
        { name: "Protective Sleeves", description: "Heat-sleeve, abrasion-sleeve, and general-purpose protective covers." },
        { name: "Hose ID Tags", description: "Label tags to identify hose function in complex hydraulic systems." },
      ]}
      standards={["ISO 5675 (Agricultural quick couplers)", "ISO 7241-1 (Industrial quick couplers)", "SAE J1468 (Hose guard standard)"]}
      materials={["Zinc-plated steel", "Stainless steel (SS201 / SS304)", "PVC", "Nylon", "EPDM rubber"]}
      applications={["Protecting hose from abrasion in excavator boom/arm articulation", "Preventing hose damage near sharp edges", "Organizing multiple hoses in engine compartments", "Quick connection for agricultural implement changes", "High-heat environments (engine bay)"]}
      notes={["Bend restrictors are often required by equipment manufacturers to maintain warranty. Check your machine manual.", "For high-abrasion applications (mining, quarrying), consider spiral steel guard instead of PVC."]}
      whatsappSubject="Hi Terra Hose, I need hose accessories. What do you have for protecting hydraulic hose from abrasion?"
      siblings={siblings}
    />
  );
}
