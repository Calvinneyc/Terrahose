import { Metadata } from "next";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";

export const metadata: Metadata = {
  title: "BSP vs JIS Thread Identification Guide Malaysia | BSPP BSPT JIS Metric | Terra Hose",
  description: "How to identify BSP, BSPP, BSPT, JIS and metric hydraulic threads. Step-by-step guide with thread pitch, seat angle and identification tips. Johor."
};

export default function BSPvsJISPage() {
  return (
    <TechnicalGuidePage
      tag="Technical Guide"
      title="BSP vs JIS Thread Identification"
      tagline="Don't mix up your threads — it costs you time and leaks"
      description="Complete guide to identifying BSP (BSPP/BSPT), JIS (Japanese Industrial Standard), metric, and flare fittings. Step-by-step identification, thread pitch charts, and seat angle explanations."
      identificationTitle="How to Identify the Thread Type"
      identificationDesc="Follow these steps in order — each one eliminates possibilities until you narrow down the correct thread type."
      identSteps={[
        {
          step: 1,
          title: "Check the Thread Seat Angle",
          description: "The seat (the angled face where the fitting seals) tells you most of what you need to know. BSPP: 60° seat angle (flat face seat). BSPT (tapered): thread itself tapers, seals on the thread flanks. JIS (BSPP style): also 60° seat — looks very similar to BSPP. JIS (flare): 37° seat (JIS B 0202). Metric flare: 37° seat (looks similar to JIS). ORFS: flat face with O-ring — completely different seal mechanism.",
        },
        {
          step: 2,
          title: "Count the Threads per Inch (TPI)",
          description: "Use a thread gauge or count threads against a ruler. BSP threads (British): -4 (1/4\"): 19 TPI | -6 (3/8\"): 19 TPI | -8 (1/2\"): 14 TPI | -10 (5/8\"): 14 TPI | -12 (3/4\"): 14 TPI | -16 (1\"): 11 TPI | -20 (1-1/4\"): 11 TPI. Metric threads: expressed in pitch (mm between threads), e.g., M14x1.5 (14mm OD, 1.5mm pitch).",
        },
        {
          step: 3,
          title: "Measure the Thread Outer Diameter (OD)",
          description: "Use calipers on the thread OD. BSP threads are measured in inches — 1/4\", 3/8\", 1/2\", 3/4\", 1\", etc. Metric threads are measured in mm — M10, M12, M14, M16, M18, M22, M27, M33, etc. JIS Metric: similar OD to BSP but different thread pitch — e.g., BSP 1/4\" = ~13.6mm OD; JIS 1/4\" = 14mm OD (very close, pitch differs).",
        },
        {
          step: 4,
          title: "Check if Tapered or Parallel (Straight)",
          description: "BSPT (British Standard Pipe Taper): tapered thread — OD decreases along the length. Used for ports and fittings that seal on the thread itself. BSPP (British Standard Pipe Parallel): parallel/ straight thread — constant OD. Seals on a seat (flat face or cone). JIS BSPP: same parallel form as BSPP. JIS flare: parallel thread with 37° flare seat.",
        },
        {
          step: 5,
          title: "Look for Identification Markings",
          description: "BSP fittings often marked with \"BSPP\" or \"BSPT\" or simply the size. JIS fittings often marked with \"JIS\" or a Japanese character. Metric fittings marked with \"M\" followed by diameter and pitch, e.g., \"M18x1.5\". ORFS fittings are always flat face with visible O-ring groove. SAE ORFS: marked \"ORFS\" or \"SAE\" on the fitting body.",
        },
        {
          step: 6,
          title: "Cross-Reference with Your Equipment",
          description: "Japanese equipment (Hitachi, Komatsu, Kato): often use JIS threads. European equipment (Bosch Rexroth, Hydroline): usually BSP or metric. American equipment (Parker, Eaton): often SAE ORFS or SAE flange. When in doubt, send us a photo — we identify it for free.",
        },
      ]}
      specs={[
        { label: "BSPP (British Parallel)", value: "60° thread angle, parallel thread, seals on seat face. Sizes: 1/4\" to 2\". Common in European and Malaysian equipment." },
        { label: "BSPT (British Standard Pipe Taper)", value: "55° Whitworth thread form (tapered, seals on thread flanks). ISO 7-1 / BS 21. Sizes: 1/4\" to 2\"." },
        { label: "JIS BSPP (Japanese Parallel)", value: "60° thread angle (same as BSPP). Pitch differs slightly from BSP — NOT interchangeable! Must use JIS fittings for Japanese equipment." },
        { label: "JIS Flare (37°)", value: "37° flare seat, parallel thread. Similar to JIS BSPP but different seat angle. Common on older Japanese machinery." },
        { label: "Metric Flare (37°)", value: "37° flare seat, parallel thread. Different OD and pitch from JIS flare. European metric equipment." },
        { label: "Metric Straight", value: "Parallel metric thread. Identified by \"M\" marking and mm pitch. Common in German/Bosch Rexroth equipment." },
        { label: "NPT (National Pipe Taper)", value: "60° thread angle, tapered thread. NOT interchangeable with BSPT — different thread pitch and angle. Common in American equipment." },
        { label: "ORFS (O-Ring Face Seal)", value: "Flat face with O-ring. No thread sealing — O-ring does the sealing. Common in modern mobile hydraulics." },
      ]}
      sections={[
        {
          title: "BSP vs JIS — Why It Matters",
          content: `BSP and JIS threads look almost identical to the untrained eye. Both are roughly 60° angle. Both use similar nominal sizes. But they are NOT interchangeable.

The thread pitch is different:
- BSP 1/4\" (19 TPI) = 1.337mm pitch
- JIS 1/4\" (19 TPI) = 1.337mm pitch (same!)

But the OD is slightly different:
- BSP 1/4\" OD = ~13.6mm
- JIS 1/4\" OD = 14mm

At larger sizes, the difference becomes more significant:
- BSP 3/4\" OD = ~26.4mm
- JIS 3/4\" OD = 27mm

If you thread a JIS fitting into a BSP port, you risk:
1. Cross-threading and fitting damage
2. Leaks due to poor seal
3. Difficulty removing the fitting later

If you're working on Japanese equipment (Hitachi, Komatsu, Kato, TCM), always use genuine JIS fittings — don't substitute BSP.`,
        },
        {
          title: "Quick Identification Reference",
          content: `Look for the seat type:
→ Flat face with O-ring groove = ORFS
→ 60° flat seat, parallel thread = BSPP or JIS BSPP (check OD)
→ 37° flare seat = JIS flare or metric flare
→ Tapered thread (seals on thread) = BSPT or NPT

Count TPI or check pitch:
→ BSP: sizes in inches, TPI: 19 (small), 14 (medium), 11 (large)
→ Metric: sizes in mm, pitch: 1.0, 1.5, 2.0mm etc.

Still not sure? Send us a photo. We identify fittings for free — no obligation.`,
        },
      ]}
      productLinks={[
        { name: "Hydraulic Fittings (BSP, JIS, Metric)", slug: "hydraulic-fittings", reason: "Full range of BSPP, BSPT, JIS and metric fittings in stock" },
        { name: "Adapters (BSP to JIS, NPT to BSP)", slug: "adapters", reason: "Adapt between different thread types when needed" },
        { name: "O-Rings & Seals", slug: "o-rings-seals", reason: "Replacement O-rings for ORFS and BSPP fitting seals" },
      ]}
      bottomCta={{
        title: "Can't identify your fitting thread?",
        desc: "Send us a photo of the thread, fitting, or nameplate — we'll identify the thread type and quote you on the correct fitting.",
        subject: "Hi Terra Hose, I need help identifying this fitting thread type. [describe what you see or attach a photo]",
      }}
    />
  );
}
