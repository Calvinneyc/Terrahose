import { Metadata } from "next";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["products/ferrules"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose", name: "Hydraulic Hose" },
  { slug: "hydraulic-fittings", name: "Hydraulic Fittings" },
  { slug: "adapters", name: "Adapters" },
  { slug: "o-rings-seals", name: "O-Rings & Seals" },
  { slug: "accessories", name: "Accessories" },
];

export default function FerrulesPage() {
  return (
    <ProductCategoryPage
      tag="Products"
      title="Ferrules"
      description="Hose ferrules (crimping sleeves) for secure hose-to-fitting attachment. Match the ferrule to the hose type and size."
      specs={[
        { label: "Material", value: "Carbon steel (zinc plated), Stainless steel (for high-temp or corrosive applications)" },
        { label: "Compatibility", value: "Match ferrule to hose type: R1AT/R2AT ferrules vs 4SP/4SH ferrules have different bite depths" },
        { label: "Process", value: "Crimped onto hose using a hose crimping machine" },
        { label: "Size Range", value: "6mm to 50mm (1/4\" to 2\")" },
      ]}
      types={[
        { name: "Standard Skive Ferrules", description: "Requires the hose cover to be stripped back before crimping. Provides excellent grip." },
        { name: "No-Skive Ferrules", description: "No need to strip the hose cover. Quicker assembly. Common for R1AT/R2AT." },
        { name: "4SP/4SH Ferrules", description: "Thicker wall ferrules for four-spiral hose. Must match the specific hose series." },
        { name: "Stainless Steel Ferrules", description: "For corrosive fluids or high-temperature environments." },
      ]}
      standards={["DIN 20039", "ISO 12151-1"]}
      sizes={["6mm", "10mm", "13mm", "16mm", "19mm", "25mm", "32mm", "38mm", "50mm"]}
      materials={["Carbon Steel (Zinc Plated)", "Stainless Steel SS304"]}
      applications={["Hydraulic hose assembly (always needed)", "Repair of damaged ferrules", "Custom hose fabrication"]}
      notes={[
        "Ferrules must match the hose type — a R1AT ferrule is not the same as a 4SP ferrule even if the OD looks similar.",
        "When in doubt, tell us the hose type and size and we'll supply the correct ferrule.",
      ]}
      whatsappSubject="Hi Terra Hose, I need ferrules. What size for a 1/2 inch hydraulic hose?"
      siblings={siblings}
    />
  );
}
