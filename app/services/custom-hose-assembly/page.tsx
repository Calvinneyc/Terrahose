import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages["services/custom-hose-assembly"];
  return { title: p.title, description: p.description };
}

const siblings = [
  { slug: "hydraulic-hose-assembly", name: "Hose Assembly" },
  { slug: "hose-crimping", name: "Hose Crimping" },
  { slug: "hose-replacement", name: "Hose Replacement" },
  { slug: "hydraulic-hose-repair", name: "Hose Repair" },
];

export default function CustomHoseAssemblyPage() {
  return (
    <ServicePage
      tag="Our Services"
      title="Custom Hose Assembly"
      tagline="Non-Standard Applications"
      description="Custom hydraulic hose assemblies for non-standard applications: special lengths, non-common fitting combinations, or unique pressure/temperature requirements."
      process={[
        { step: 1, title: "Understand your requirement", description: "Tell us the application — what machine, what function, what pressure, what fluid. The more technical detail you provide, the better we can specify the right hose." },
        { step: 2, title: "Select hose and fittings", description: "We recommend the correct hose specification (e.g., R2AT vs 4SP for the pressure) and fitting types for your specific ports." },
        { step: 3, title: "Custom assembly", description: "Cut to exact length, crimp fittings, inspect, and deliver. For special requirements, we source the right hose from our supplier network." },
        { step: 4, title: "Documentation", description: "We can label the assembly with hose type, date, and your reference number for maintenance records." },
      ]}
      features={[
        "Non-standard lengths (very short or very long)",
        "Non-common fitting combinations (e.g., JIS to ORFS elbow)",
        "Special hose types: high-temperature, chemical-resistant, marine-rated",
        "SAE 100 R13 and 4SH for high-pressure applications",
        "Custom labeling and documentation",
        "One-off prototype assemblies",
      ]}
      applications={[
        "Non-standard equipment with unique port configurations",
        "Custom machinery OEM builds",
        "Marine hydraulic systems (saltwater-resistant hose and fittings)",
        "High-temperature hydraulic systems (steam, thermal oil)",
        "Food-grade hydraulic lines (special materials required — contact us to discuss)",
      ]}
      notes={[
        "For non-standard applications, we may need to source specific hose or fittings — lead time varies.",
        "Tell us the machine model, port thread type, and working pressure — these three pieces of information cover most of what we need to quote.",
        "For chemical applications (phosphate ester, bio-degradable fluids), the hose material needs to be specified carefully — contact us before ordering.",
      ]}
      whatsappSubject="Hi Terra Hose, I need a custom hydraulic hose assembly for a special application. Can you help?"
      siblings={siblings}
    />
  );
}
