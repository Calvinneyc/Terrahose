import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["services/hose-crimping"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose-assembly", name: "Hose Assembly" },
  { slug: "hose-replacement", name: "Hose Replacement" },
  { slug: "hydraulic-hose-repair", name: "Hose Repair" },
  { slug: "custom-hose-assembly", name: "Custom Assembly" },
];

export default function HoseCrimpingPage() {
  return (
    <ServicePage
      tag="Our Services"
      title="Hose Crimping"
      tagline="Precision Assembly"
      description="Professional hydraulic hose crimping with calibrated equipment. Correct crimp diameter ensures leak-free, safe hydraulic connections."
      process={[
        { step: 1, title: "Check the hose and fitting specification", description: "We verify the hose type (R1AT, 4SP, etc.) and fitting to determine the correct ferrule and crimp diameter." },
        { step: 2, title: "Set up the crimping machine", description: "Crimp diameter is set using the correct die set and manufacturer crimp chart for the specific hose-fitting combination." },
        { step: 3, title: "Crimp the ferrule", description: "The ferrule is placed over the hose, fittings inserted, and the assembly is crimped to the specified diameter." },
        { step: 4, title: "Verify crimp quality", description: "We check the crimp diameter with a caliper and inspect for defects before releasing the assembly." },
      ]}
      features={[
        "Calibrated crimping equipment with correct die sets",
        "Crimp charts for all major hose manufacturers",
        "R1AT/R2AT, 4SP/4SH, R13 hose crimping",
        "Correct ferrule-to-hose matching",
        "Crimp diameter verification",
        "Skive and no-skive ferrule process",
      ]}
      applications={[
        "Hydraulic hose assemblies for all equipment types",
        "Repair assemblies with new ferrules",
        "Custom hose fabrication",
        "Aftermarket hose replacement",
      ]}
      notes={[
        "Incorrect crimp diameter is the most common cause of hydraulic hose assembly failures (leaks or blow-offs). We use manufacturer-specified crimp settings.",
        "Different hose brands may have slightly different crimp diameters even for the same size — we adjust accordingly.",
        "We crimp fittings from other suppliers too — bring your fittings and hose to us.",
      ]}
      whatsappSubject="Hi Terra Hose, I need hose crimping service. Do you crimp 1/2 inch hydraulic hose?"
      siblings={siblings}
    />
  );
}
