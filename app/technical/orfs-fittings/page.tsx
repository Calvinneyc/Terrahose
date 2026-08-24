import { Metadata } from "next";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";

export const metadata: Metadata = {
  title: "ORFS Hydraulic Fittings Malaysia | O-Ring Face Seal Guide | Terra Hose",
  description: "Complete ORFS (O-Ring Face Seal) identification guide: how ORFS works, male vs female fittings, O-ring types, and application guide. Johor, Malaysia."
};

export default function ORFSFittingsPage() {
  return (
    <TechnicalGuidePage
      tag="Technical Guide"
      title="ORFS Hydraulic Fittings"
      tagline="O-Ring Face Seal — the modern standard for leak-free hydraulics"
      description="ORFS (O-Ring Face Seal) fittings provide a leak-free seal in high-pressure hydraulic systems. Learn how ORFS works, how to identify ORFS fittings, male vs female types, and O-ring compatibility."
      identificationTitle="How to Identify an ORFS Fitting"
      identificationDesc="ORFS fittings have very distinctive visual features that make them easy to identify once you know what to look for."
      identSteps={[
        {
          step: 1,
          title: "Look for the Flat Face with O-Ring Groove",
          description: "The defining feature of ORFS. The face of the fitting has a machined groove (called the face seal) that contains an O-ring. When the fitting is tightened against a flat surface (the port), the O-ring compresses to form a leak-proof seal. This is NOT like BSP or JIS fittings that seal on a cone or thread.",
        },
        {
          step: 2,
          title: "Check for Three-Hole or Four-Hole Flange Pattern",
          description: "ORFS tube fittings ( swivel nut type ) have a flat face with 3 or 4 bolt holes around the O-ring groove — similar to a small SAE flange. The bolt holes align with matching ports on equipment manifolds. This distinguishes ORFS from BSP or JIS fittings which use threaded connections.",
        },
        {
          step: 3,
          title: "Identify Male vs Female ORFS",
          description: "ORFS Male: the fitting with the O-ring on its face connects to a port (female port). ORFS Female: the swivel nut type — the O-ring is on the fitting face that mates with the port. In hose assemblies: ORFS male fittings are crimped onto the hose and seal against the port face; ORFS female (swivel) fittings have a nut that swivels for easy connection.",
        },
        {
          step: 4,
          title: "Check the O-Ring Type",
          description: "ORFS O-rings are typically NBR (Nitrile/Buna-N, colour-coded black) for petroleum-based hydraulic fluid, or EPDM (Ethylene Propylene, colour-coded black or green) for phosphate ester fluid (Skydrol). Using the wrong O-ring material causes rapid swelling or hardening and leaks.",
        },
        {
          step: 5,
          title: "Identify the Size Designation",
          description: "ORFS fittings are designated by tube OD: -4 (1/4\" OD), -6 (3/8\" OD), -8 (1/2\" OD), -10 (5/8\" OD), -12 (3/4\" OD), -16 (1\" OD), -20 (1-1/4\" OD), -24 (1-1/2\" OD). Note: ORFS size is based on tube OD, not thread size — this differs from BSP sizing which is based on pipe bore.",
        },
        {
          step: 6,
          title: "Look for the Hex or Nut",
          description: "ORFS swivel female fittings have a hexagonal nut (flat wrench faces) that tightens against the port face. The fitting body or nut is usually marked with the size and \"ORFS\" or \"SAE\". Common brand markings: Parker (Parkrimp), Eaton (Aeroquip), Gates.",
        },
      ]}
      specs={[
        { label: "Seal Mechanism", value: "O-ring on flat face — no thread sealing. The O-ring (not the threads) carries the pressure and prevents leaks." },
        { label: "Working Pressure", value: "Up to 6,000 PSI (414 bar) depending on size and material. Larger sizes have lower pressure ratings." },
        { label: "Temperature Range", value: "NBR O-ring: -40°C to +120°C. EPDM O-ring: -40°C to +150°C (for Skydrol / phosphate ester fluid)." },
        { label: "Common O-Ring Material", value: "NBR (Nitrile/Buna-N): petroleum-based hydraulic oil. EPDM: phosphate ester fluid (Skydrol). Never mix EPDM with petroleum oil." },
        { label: "ORFS Tube (Male) Fitting", value: "Crimped onto hose. O-ring on face seals against the port. Non-swivel — orientation set at crimping." },
        { label: "ORFS Swivel (Female) Fitting", value: "Nut swivels. O-ring on face seals against port. Allows orientation adjustment during assembly." },
        { label: "Sizes Available", value: "-4 (1/4\") to -24 (1-1/2\") OD. Most common in mobile hydraulics: -6, -8, -10, -12, -16." },
        { label: "Common Standard", value: "SAE J1453 (primary standard). Also ISO 8434-3. Supersedes older 4-bolt flange fittings in many modern applications." },
        { label: "Port Type Required", value: "ORFS ports require a flat-face port (SAE J1926 or ISO 11926). Cannot connect ORFS to BSP or NPT ports without an adapter." },
      ]}
      sections={[
        {
          title: "Why ORFS Has Become the Modern Standard",
          content: `ORFS fittings solve three major problems that plagued older fitting types:

1. Thread leakage: BSP and NPT fittings rely on thread engagement and sealant (PTFE tape, paste) to seal — any over-tightening, under-tightening, or vibration can cause leaks. ORFS seals with a precision O-ring — no thread sealing required.

2. Assembly orientation: Swivel ORFS fittings can be oriented by hand before tightening, making routing easier than BSP fittings.

3. Vibration resistance: The O-ring absorbs vibration-induced movement without degrading the seal. ORFS is now standard on most new mobile hydraulic equipment worldwide.

The main limitation: ORFS requires a flat-face port. You cannot thread an ORFS male directly into a BSP or NPT tapered port — you need an adapter. This is why many older machines still use BSP throughout.`,
        },
        {
          title: "ORFS Fitting Types at a Glance",
          content: `Type | Description | Hose End?
ORFS Male (Tube) | O-ring on face, crimped to hose, non-swivel | Yes — hose end
ORFS Swivel Female | Nut swivels, O-ring on face | Yes — hose end
ORFS Port (Straight Thread) | Male fitting with O-ring for flat-face port | No — port connection
ORFS Elbow / Tee | 90° or 45° elbow with ORFS ends | Yes — hose end
ORFS to BSP Adapter | Converts ORFS port connection to BSP thread | Adapter

Always specify: fitting type + ORFS size + hose type (R1AT or R2AT) + hose length when ordering.`,
        },
      ]}
      productLinks={[
        { name: "Hydraulic Fittings (ORFS)", slug: "hydraulic-fittings", reason: "Full range of ORFS fittings in stock — male, female, elbows, tees" },
        { name: "O-Rings & Seals", slug: "o-rings-seals", reason: "Replacement NBR and EPDM O-rings for ORFS fittings" },
        { name: "Adapters (ORFS to BSP)", slug: "adapters", reason: "ORFS to BSP adapters for connecting ORFS to BSP systems" },
        { name: "Hydraulic Hose (R2AT for ORFS)", slug: "hydraulic-hose", reason: "R2AT preferred for ORFS assemblies at higher pressures" },
      ]}
      bottomCta={{
        title: "Need ORFS fittings or O-rings?",
        desc: "Tell us the ORFS size, fitting type (male/female/elbow), and hose type — or send a photo of what you need. We stock common ORFS fittings in Johor.",
        subject: "Hi Terra Hose, I need ORFS fittings. Size: [ORFS size], Type: [male/female/elbow], Qty: [number]. Can you check stock and give me a price?",
      }}
    />
  );
}
