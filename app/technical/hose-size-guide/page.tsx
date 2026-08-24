import { Metadata } from "next";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";

export const metadata: Metadata = {
  title: "Hydraulic Hose Size Guide Malaysia | Dash Size, ID/OD, Pressure & Bend Radius | Terra Hose",
  description: "Complete hydraulic hose size guide: dash size, ID/OD, SAE R1AT/R2AT/4SP/4SH pressure ratings, bend radius and size conversion. Johor, Malaysia."
};

export default function HoseSizeGuidePage() {
  return (
    <TechnicalGuidePage
      tag="Technical Guide"
      title="Hydraulic Hose Size Guide"
      tagline="Know your hose before you order"
      description="Everything you need to identify and specify the correct hydraulic hose size. Covers dash size, inner diameter (ID), outer diameter (OD), pressure ratings, and SAE standards."
      identificationTitle="How to Read a Hose Size"
      identificationDesc="Follow these steps to identify or specify your hose correctly."
      identSteps={[
        {
          step: 1,
          title: "Find the Dash Size",
          description: "Look for the dash number on the hose — usually printed on the outer cover. Common dash sizes: -4 (1/4\"), -6 (3/8\"), -8 (1/2\"), -10 (5/8\"), -12 (3/4\"), -16 (1\"), -20 (1-1/4\"), -24 (1-1/2\"), -32 (2\"). The dash number represents one-sixteenth of an inch.",
        },
        {
          step: 2,
          title: "Check Inner Diameter (ID)",
          description: "ID is the bore size — the actual opening inside the hose. This is what matters most for flow. Common IDs: 6mm (1/4\"), 10mm (3/8\"), 12mm (1/2\"), 16mm (5/8\"), 19mm (3/4\"), 25mm (1\"), 32mm (1-1/4\"), 38mm (1-1/2\"), 50mm (2\").",
        },
        {
          step: 3,
          title: "Check Outer Diameter (OD)",
          description: "OD varies by hose type and pressure rating. R2AT (two braid) has a thicker cover than R1AT (one braid) — same ID but larger OD. Always check OD against your fitting and routing clearance.",
        },
        {
          step: 4,
          title: "Match the Standard",
          description: "Identify the hose standard: SAE R1AT / R2AT (most common in mobile hydraulics), EN 853 1SN / 2SN (European equivalent), EN 856 4SP / 4SH (four spiral, higher pressure), SAE R13 (six spiral, very high pressure).",
        },
        {
          step: 5,
          title: "Check Working Pressure",
          description: "Every hose has a max working pressure (MWP) — never exceed it. R1AT: ~225 bar. R2AT: ~350 bar. 4SP: ~415 bar. 4SH: ~420 bar. R13: ~350 bar. Burst pressure is typically 4x working pressure.",
        },
        {
          step: 6,
          title: "Check Bend Radius",
          description: "Bend radius is the minimum radius the hose can bend without kinking. Bending tighter than the minimum drastically reduces hose life. R2AT has a larger minimum bend radius than R1AT. Always route with the largest possible radius.",
        },
      ]}
      specs={[
        { label: "Dash Size -4", value: "ID: 1/4\" (6mm) | OD: ~13mm (R1AT) / ~15mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -6", value: "ID: 3/8\" (10mm) | OD: ~16mm (R1AT) / ~18mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -8", value: "ID: 1/2\" (13mm) | OD: ~20mm (R1AT) / ~22mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -10", value: "ID: 5/8\" (16mm) | OD: ~23mm (R1AT) / ~25mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -12", value: "ID: 3/4\" (19mm) | OD: ~28mm (R1AT) / ~30mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -16", value: "ID: 1\" (25mm) | OD: ~35mm (R1AT) / ~38mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Dash Size -20", value: "ID: 1-1/4\" (32mm) | OD: ~43mm | WP: 180 / 280 bar" },
        { label: "Dash Size -24", value: "ID: 1-1/2\" (38mm) | OD: ~50mm | WP: 130 / 210 bar" },
        { label: "Dash Size -32", value: "ID: 2\" (50mm) | OD: ~64mm | WP: 90 / 170 bar" },
        { label: "Burst Pressure", value: "Typically 4x working pressure (tested to 2x working pressure)" },
        { label: "Temperature Range", value: "-40°C to +100°C (standard NBR inner tube)" },
        { label: "Common Standards", value: "SAE 100 R1AT/R2AT, EN 853 1SN/2SN, EN 856 4SP/4SH, SAE 100 R13" },
      ]}
      sections={[
        {
          title: "R1AT vs R2AT vs 4SP vs 4SH — Which to Use?",
          content: `R1AT (1SN): One wire braid. General purpose, medium pressure. Good balance of flexibility and durability. Most commonly replaced hose in mobile equipment.

R2AT (2SN): Two wire braid. Higher pressure than R1AT. The outer cover is thicker, so OD is larger. Use when the system pressure is higher or when extra durability is needed (e.g., hose runs near sharp edges or is exposed to debris).

4SP: Four spiral wire. High pressure, very strong. Used in severe-duty applications. Less flexible than braided hose — requires larger bend radius. Suitable for pressures up to ~415 bar.

4SH: Four spiral wire, higher pressure than 4SP. Heavy-duty mining and construction equipment. Very robust but requires careful routing.

R13: Six spiral wire. Very high pressure with excellent flexibility for its rating. Used in mining equipment, hydrostatic transmissions, and high-demand stationary hydraulics.`,
        },
        {
          title: "Size Conversion Table",
          content: `Metric ID (mm) | Inch ID | Dash Size | Common Use
6mm | 1/4\" | -4 | Small cylinders, control lines
10mm | 3/8\" | -6 | Most common — excavator boom, bucket
12mm | 1/2\" | -8 | Main pressure lines
16mm | 5/8\" | -10 | Return lines, larger cylinders
19mm | 3/4\" | -12 | Main pressure and return
25mm | 1\" | -16 | High-flow pressure lines
32mm | 1-1/4\" | -20 | Large equipment return lines
38mm | 1-1/2\" | -24 | Industrial large bore
50mm | 2\" | -32 | Industrial suction/discharge

Note: These are nominal IDs. Actual ID may vary slightly between manufacturers. Always verify against the hose manufacturer's data sheet.`,
        },
      ]}
      productLinks={[
        { name: "Hydraulic Hose (R1AT / R2AT / 4SP / 4SH)", slug: "hydraulic-hose", reason: "Full range from 1/4\" to 2\" — cut to your exact length" },
        { name: "Hydraulic Fittings", slug: "hydraulic-fittings", reason: "BSP, JIS, ORFS, SAE fittings to match your hose and equipment" },
        { name: "Ferrules (Crimping Sleeves)", slug: "ferrules", reason: "Match the correct ferrule to your hose type and dash size" },
      ]}
      bottomCta={{
        title: "Not sure which hose you need?",
        desc: "Send us the equipment model or a photo of the old hose — we'll identify the correct size, standard, and fitting, then quote you on the complete assembly.",
        subject: "Hi Terra Hose, I need help identifying a hydraulic hose size. Here are the details: [describe what you know]",
      }}
    />
  );
}
