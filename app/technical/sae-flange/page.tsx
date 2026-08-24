import { Metadata } from "next";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";

export const metadata: Metadata = {
  title: "SAE Flange Guide Malaysia | Code 61 vs Code 62, 3000 PSI vs 6000 PSI | Terra Hose",
  description: "SAE Code 61 and Code 62 flange identification guide: 3000 PSI vs 6000 PSI, flange sizes, straight/45°/90° configurations, and application guide. Johor."
};

export default function SAEFlangePage() {
  return (
    <TechnicalGuidePage
      tag="Technical Guide"
      title="SAE Flange Fittings"
      tagline="Code 61 vs Code 62 — the high-pressure connection standard"
      description="Complete guide to SAE Code 61 and Code 62 flanges: 3000 PSI vs 6000 PSI, flange size identification, port patterns, and how to select the right flange for your hydraulic system."
      identificationTitle="How to Identify an SAE Flange"
      identificationDesc="SAE flanges are used in high-pressure hydraulic lines where a bolted, leak-free connection is required."
      identSteps={[
        {
          step: 1,
          title: "Count the Bolt Holes",
          description: "All SAE flanges use 4 bolt holes in a square pattern around the centre bore. Count the holes: 4 holes = SAE flange (BSP flanges typically have 4 holes too, but the bolt pattern dimensions differ). The hole count alone doesn't distinguish Code 61 from Code 62 — both have 4 holes.",
        },
        {
          step: 2,
          title: "Measure the Bolt Circle Diameter (BCD)",
          description: "Measure the diameter of the circle passing through the centre of the 4 bolt holes. This is the key distinguishing measurement: Code 61 flange BCD is smaller than Code 62 for the same nominal size. e.g., 1\" Code 61: BCD = 52.4mm. 1\" Code 62: BCD = 57.2mm. The Code 62 flange also has larger bolt holes.",
        },
        {
          step: 3,
          title: "Measure the Flange Face OD",
          description: "Code 61: smaller flange OD for a given size. Code 62: larger flange OD and thicker material for higher pressure. At 1\" size: Code 61 OD ≈ 63mm; Code 62 OD ≈ 70mm. The Code 62 flange has visibly thicker material and larger bolt holes (M10 vs M8 for 1\" size).",
        },
        {
          step: 4,
          title: "Check the Pressure Rating (PSI)",
          description: "Code 61 (3000 PSI / 207 bar): standard pressure rating. Used for general mobile and industrial hydraulic systems. Code 62 (6000 PSI / 414 bar): high pressure. Used in severe-duty, high-pressure systems — often mining, marine, and heavy construction. Never substitute Code 61 for Code 62 in a high-pressure system.",
        },
        {
          step: 5,
          title: "Identify the Configuration",
          description: "SAE flanges come in several configurations: Straight (code 61C / 62C): flange connects to port or another flange. 45° Elbow (code 61A / 62A): exits at 45°. 90° Elbow (code 61B / 62B): exits at 90°. The configuration letter is part of the SAE standard designation.",
        },
        {
          step: 6,
          title: "Check the Flange Size",
          description: "SAE flange size is designated by the nominal bore: size 8 (1/2\" bore), size 12 (3/4\" bore), size 16 (1\" bore), size 20 (1-1/4\" bore), size 24 (1-1/2\" bore), size 32 (2\" bore), size 40 (2-1/2\" bore), size 48 (3\" bore). Note: the flange size refers to the bore, not the port thread or hose ID.",
        },
      ]}
      specs={[
        { label: "Code 61 — 3000 PSI", value: "Standard pressure series. BCD smaller, flange OD smaller, bolt holes smaller. Used in general mobile hydraulics: excavators, tractors, trucks. Common sizes: 8 to 48." },
        { label: "Code 62 — 6000 PSI", value: "High pressure series. BCD larger, flange OD larger, thicker material, larger bolt holes. Used in severe-duty: mining, marine, high-pressure presses. NOT interchangeable with Code 61." },
        { label: "Flange Size 8", value: "1/2\" bore. Code 61 BCD: 40.5mm, OD: 53mm. Code 62 BCD: 40.5mm, OD: 56mm." },
        { label: "Flange Size 12", value: "3/4\" bore. Code 61 BCD: 50.8mm, OD: 63mm. Code 62 BCD: 50.8mm, OD: 63mm." },
        { label: "Flange Size 16", value: "1\" bore. Code 61 BCD: 52.4mm, OD: 63mm. Code 62 BCD: 57.2mm, OD: 70mm." },
        { label: "Flange Size 20", value: "1-1/4\" bore. Code 61 BCD: 58.7mm, OD: 70mm. Code 62 BCD: 66.7mm, OD: 79mm." },
        { label: "Flange Size 24", value: "1-1/2\" bore. Code 61 BCD: 70.0mm, OD: 80mm. Code 62 BCD: 79.4mm, OD: 94mm." },
        { label: "Flange Size 32", value: "2\" bore. Code 61 BCD: 77.8mm, OD: 88mm. Code 62 BCD: 96.8mm, OD: 101mm." },
        { label: "Config: Straight (C)", value: "Flange face perpendicular to hose axis. Used to connect to a port or in-line connection." },
        { label: "Config: 45° Elbow (A)", value: "Flange face at 45° to hose axis. Used to change direction with minimum bending stress." },
        { label: "Config: 90° Elbow (B)", value: "Flange face at 90° to hose axis. Most common elbow configuration." },
        { label: "BCD / OD Key", value: "BCD = Bolt Circle Diameter (centre-to-centre of opposite bolt holes). OD = Flange Outside Diameter (overall face diameter)." },
        { label: "Port Standard", value: "SAE J518 (Code 61/62 flanges). ISO 6162-1 (Code 61). ISO 6162-2 (Code 62). BSPP flange ports also exist (ISO 6164)." },
        { label: "Technical Disclaimer", value: "Dimensions shown are representative SAE J518 / ISO 6162 interface dimensions. Actual fitting/component geometry may vary by manufacturer and design. Verify against the applicable manufacturer's drawing before ordering." },
      ]}
      sections={[
        {
          title: "How to Identify an SAE Flange",
          content: `Use this checklist to identify a hydraulic SAE flange:

1. **Measure the nominal bore** — the hose connection size (1/2", 3/4", 1", etc.)
2. **Measure the bolt circle diameter (BCD)** — the diameter through the centre of the 4 bolt holes
3. **Measure the flange outside diameter (OD)** — the overall flange face diameter
4. **Count the bolt holes** — SAE flanges always have 4 bolt holes
5. **Determine Code 61 or Code 62** — compare your BCD and OD measurements against this table
6. **Verify before ordering** — confirm against the equipment manufacturer's flange drawing

Not sure which flange you need? Send us a photo via WhatsApp and we can help identify it.`,
        },
        {
          title: "Code 61 vs Code 62 — Key Differences at a Glance",
          content: `Feature | Code 61 | Code 62
Pressure Rating | 3000 PSI (207 bar) | 6000 PSI (414 bar)
Flange OD | Smaller for same size | Larger, heavier
Bolt Circle (BCD) | Smaller | Larger (at 1\"+ sizes)
Bolt Hole Size | M8 (smaller sizes) | M10 (smaller sizes)
Material Thickness | Standard | Thicker / heavier
Application | General mobile / industrial | Mining, marine, high-pressure
Interchangeable | No | No

Critical: A Code 61 flange cannot safely be used in a Code 62 system. The bolt hole sizes and BCD dimensions differ — even if you force it on, the connection will not be mechanically sound and will leak or fail.

Similarly, do not substitute Code 61 fittings in a Code 62 application.`,
        },
        {
          title: "How to Select the Right Flange",
          content: `Step 1: Identify the pressure requirement
→ System pressure ≤ 250 bar: Code 61 is sufficient
→ System pressure 250–350 bar: Check manufacturer spec — Code 61 or Code 62
→ System pressure > 350 bar: Code 62 required

Step 2: Measure or identify the flange size
→ Measure the bore of the hose or port connection
→ Match to SAE flange size (8 = 1/2\", 12 = 3/4\", 16 = 1\", etc.)

Step 3: Choose the configuration
→ Straight: for port connections and in-line runs
→ 45° Elbow: directional change where 90° is too sharp
→ 90° Elbow: most common for routing around components

Step 4: Specify the hose end
→ SAE Code 61/62 flange fittings are crimped onto the hose end
→ Always specify: flange size + configuration + hose type + hose length`,
        },
      ]}
      productLinks={[
        { name: "Hydraulic Fittings (SAE Flange)", slug: "hydraulic-fittings", reason: "Code 61 and Code 62 flange fittings — straight, 45°, 90° configurations" },
        { name: "Hydraulic Hose (4SP / 4SH)", slug: "hydraulic-hose", reason: "High-pressure hose suitable for SAE flange connections" },
        { name: "Adapters", slug: "adapters", reason: "Flange adapters to connect different flange sizes or types" },
      ]}
      bottomCta={{
        title: "Need a SAE flange assembly?",
        desc: "Tell us the flange size (Code 61 or 62), configuration (straight/45°/90°), hose type and length — or send us the old part photo. We quote fast.",
        subject: "Hi Terra Hose, I need SAE flange fittings. Code: [61/62], Size: [SAE size], Config: [straight/45°/90°], Qty: [number]. Can you quote?",
      }}
    />
  );
}
