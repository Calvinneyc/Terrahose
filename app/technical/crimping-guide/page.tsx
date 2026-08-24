import { Metadata } from "next";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";

export const metadata: Metadata = {
  title: "Hydraulic Hose Crimping Guide Malaysia | Crimp Diameter, Tolerance & QC | Terra Hose",
  description: "Complete hydraulic hose crimping guide: hose + insert + ferrule selection, correct crimp diameter by brand/type, crimp tolerance, cut-off length, orientation and QC checklist. Johor."
};

export default function CrimpingGuidePage() {
  return (
    <TechnicalGuidePage
      tag="Technical Guide"
      title="Hydraulic Hose Crimping Guide"
      tagline="Correct crimping = leak-free, safe assemblies — every time"
      description="Step-by-step guide to crimping hydraulic hose assemblies correctly. Covers hose + insert + ferrule selection, crimp diameter, crimp tolerance, cut-off length calculation, orientation, and quality control. Includes important note on brand-specific crimp data."
      identificationTitle="The Crimping Process — Step by Step"
      identificationDesc="Proper crimping is a systematic process. Skipping any step risks assembly failure, leaks, or dangerous hose rupture."
      identSteps={[
        {
          step: 1,
          title: "Select the Correct Hose, Insert and Ferrule",
          description: "All three components must be matched: Hose type (R1AT, R2AT, 4SP, etc.) determines the insert type. Ferrule must match the hose brand and type — a R2AT ferrule is not the same as a R1AT ferrule (different wall thickness and ID). Insert must match the fitting type (BSP, JIS, ORFS, etc.) AND the hose. NEVER mix ferrules or inserts between manufacturers or hose types.",
        },
        {
          step: 2,
          title: "Determine the Correct Crimp Diameter",
          description: "The crimp diameter (also called crimp O.D.) is the outer diameter of the ferrule after it has been compressed onto the hose and insert. This is THE most critical measurement. ⚠️ Crimp diameter varies by: hose brand + insert brand + ferrule brand. A Gates R2AT assembly has a different correct crimp diameter than a Parker R2AT assembly using the same ferrule brand. Always use the manufacturer's published crimp data for your specific combination — never guess or use a generic number.",
        },
        {
          step: 3,
          title: "Set the Crimp Die and Crimp Diameter on the Machine",
          description: "Set the correct die (crimp finger/segment) size on the machine based on the ferrule OD. Then make a test crimp and measure the result with calipers. Adjust the machine setting until the measured OD matches the correct crimp diameter from the manufacturer's data. Check: ferrule OD after crimp must be within ±0.1mm of the specified crimp diameter for that combination.",
        },
        {
          step: 4,
          title: "Calculate and Mark the Cut-Off Length (COL)",
          description: "Cut the hose to length. The cut-off length (COL) = total assembly length. You must account for: hose compression during crimping (~2-4mm per end), insert engagement length (check manufacturer data, typically 15-25mm), ferrule position on hose. A practical method: assemble dry (without glue) first, mark positions, measure, then cut hose to final length.",
        },
        {
          step: 5,
          title: "Assemble and Crimp",
          description: "Insert the fitting fully into the hose — verify the insert is bottomed out against the hose end. Slide the ferrule over the hose and position it against the insert shoulder. Clamp the assembly in the crimp machine. Apply full crimp pressure. Check the crimp visually: uniform hexagonal or circular shape, no visible gaps between ferrule and insert, ferrule fully compressed.",
        },
        {
          step: 6,
          title: "Quality Control Check",
          description: "After crimping: 1. Measure crimp OD at 3 points (120° apart) with calipers — all must be within tolerance. 2. Check ferrule is not deformed, cracked, or skewed. 3. Verify insert is still fully seated — no gaps between insert and hose. 4. For high-pressure assemblies: perform a pressure test to 1.5x working pressure if possible. 5. Apply identification tag (hose type, date, pressure rating).",
        },
      ]}
      specs={[
        { label: "Crimp Diameter Tolerance", value: "Typically ±0.1mm of specified crimp diameter. Some manufacturers allow ±0.15mm. Never exceed ±0.2mm." },
        { label: "Ferrule Position", value: "Ferrule must sit flush against the insert shoulder. Gap > 0.5mm = incorrect assembly." },
        { label: "Insert Engagement", value: "Insert must be fully bottomed in hose. Minimum engagement length specified by manufacturer — typically 15-25mm for R1AT/R2AT." },
        { label: "Crimp Machine Calibration", value: "Calibrate crimp machine regularly with a known test piece. Die wear changes over time — check monthly minimum." },
        { label: "Cut-Off Length Tolerance", value: "±1.5mm on overall assembly length for standard assemblies. Tighter tolerance for precision applications." },
        { label: "Hose Insertion Depth", value: "Always check the hose insertion depth chart for the specific insert brand. Insert too shallow = blow-off risk. Insert too deep = ferrule covers the stem hex (prevents tightening). ⚠️ CRITICAL: Never compress a hose that is inserted too far — it will damage the machine and the assembly." },
        { label: "Skiving (for 4SP / 4SH)", value: "Four spiral hose (4SP, 4SH, R13) requires external skiving: the rubber cover must be removed for the ferrule area before crimping. Skiving depth = ferrule length. Skiving too shallow = ferrule cannot grip, potential blow-off. Skiving too deep = weakened hose." },
        { label: "Non-Skived vs Skived", value: "R1AT / R2AT (braided): typically non-skived — insert pushes through the wire braid. 4SP / 4SH / R13 (spiral): MUST be skived. Some super-low-pressure applications of R2AT may also require skiving — check manufacturer." },
      ]}
      sections={[
        {
          title: "⚠️ Why Crimp Diameter Is NOT One Number for All Brands",
          content: `This is the most common cause of incorrect hose assemblies.

Every manufacturer publishes a crimp chart specifying the correct crimp diameter for each hose + insert + ferrule combination. These charts are brand-specific.

Example: A 1/2\" R2AT hose:
→ Gates G2 (with Gates crimp fitting + Gates ferrule): crimp OD = 27.0mm
→ Parker Parkerflex (with Parker fitting + Parker ferrule): crimp OD = 27.4mm
→ Semperit (with Semperit fitting + Semperit ferrule): crimp OD = 26.9mm

These numbers look close, but ±0.3mm on a 27mm ferrule is 3x the acceptable tolerance. Using the wrong crimp diameter can result in:
- Under-crimp: ferrule slips, hose blows off at high pressure
- Over-crimp: insert deforms, O-ring groove damaged, internal flow restriction

What to do: When ordering, always provide the hose brand/type and we will use the correct crimp data for that combination. If you have an existing assembly, measure the crimp OD with calipers as a starting reference — but verify against manufacturer data.`,
        },
        {
          title: "Common Crimp Problems and How to Fix Them",
          content: `Problem | Likely Cause | Fix
Ferrule slipping off | Under-crimped (diameter too large) | Reduce crimp die size, re-crimp
Insert deformed / O-ring damaged | Over-crimped (diameter too small) | Increase crimp die size, check correct die for this combination
Skiving marks / damage | Skive too deep or uneven | Adjust skiver depth, use correct blade
Crimp skewed (not round) | Die not centered, die worn | Check die alignment, replace worn dies
Ferrule gap visible | Insert not fully inserted before crimping | Re-assemble correctly, insert fully before crimping
Crimp OD correct but leak | Ferrule/insert mismatch (different manufacturers) | Use matched components from same system
Blow-off at fitting | Wrong insert for hose type, or wrong crimp diameter | Verify hose/insert/ferrule match, re-crimp with correct diameter`,
        },
        {
          title: "Crimping Equipment We Use",
          content: `At Terra Hose, we crimp using calibrated industrial crimping machines with:
→ Digital diameter readout for precise setting
→ Regular calibration against manufacturer test pieces
→ Full set of dies covering R1AT to R13 across all common sizes
→ Skiving equipment for 4SP, 4SH, and R13 hose
→ Calibrated digital calipers for QC measurement

For hose assemblies we make: we use the correct manufacturer crimp data for the specific hose brand and fitting brand in your assembly. We record the crimp OD for every assembly as part of our quality record.`,
        },
      ]}
      productLinks={[
        { name: "Hose Crimping Service", slug: "hose-crimping", reason: "We crimp your hose to the correct diameter using calibrated equipment and brand-specific crimp data" },
        { name: "Custom Hose Assembly", slug: "custom-hose-assembly", reason: "Full custom hose assemblies: cut, crimp, pressure test, deliver" },
        { name: "Hydraulic Hose (All Types)", slug: "hydraulic-hose", reason: "R1AT, R2AT, 4SP, 4SH, R13 — in all common sizes from 1/4\" to 2\"" },
        { name: "Ferrules", slug: "ferrules", reason: "Matched ferrules for all hose types — use the correct ferrule for your hose brand" },
      ]}
      bottomCta={{
        title: "Need a correctly crimped hose assembly?",
        desc: "We crimp to the exact manufacturer spec for your hose brand and fitting combination. No guessing, no generic crimp diameters. Send us your requirements or the old assembly photo — we'll quote on the correct replacement.",
        subject: "Hi Terra Hose, I need a custom hose assembly. Hose type: [R1AT/R2AT/4SP/etc.], Size: [dash size], Fitting type: [BSP/JIS/ORFS/etc.], Length: [mm or inches]. Can you quote?",
      }}
    />
  );
}
