import type { Locale } from "@/lib/i18n";

export interface IdentStep {
  step: number;
  title: string;
  description: string;
}
export interface GuideSection {
  title: string;
  content: string;
}
export interface ProductLink {
  name: string;
  slug: string;
  reason: string;
}

export interface TechnicalContent {
  tag: string;
  title: string;
  tagline: string;
  description: string;
  identificationTitle: string;
  identificationDesc: string;
  identSteps: IdentStep[];
  specs: { label: string; value: string }[];
  sections: GuideSection[];
  productLinks: ProductLink[];
  bottomCta: { title: string; desc: string; subject: string };
}

export const technicalContent: Record<string, Record<Locale, TechnicalContent>> = {
  "hose-size-guide": {
    en: {
      tag: "Technical Guide",
      title: "Hydraulic Hose Size Guide",
      tagline: "Know your hose before you order",
      description: "Everything you need to identify and specify the correct hydraulic hose size. Covers dash size, inner diameter (ID), outer diameter (OD), pressure ratings, and SAE standards.",
      identificationTitle: "How to Read a Hose Size",
      identificationDesc: "Follow these steps to identify or specify your hose correctly.",
      identSteps: [
        { step: 1, title: "Find the Dash Size", description: "Look for the dash number on the hose — usually printed on the outer cover. Common dash sizes: -4 (1/4\"), -6 (3/8\"), -8 (1/2\"), -10 (5/8\"), -12 (3/4\"), -16 (1\"), -20 (1-1/4\"), -24 (1-1/2\"), -32 (2\"). The dash number represents one-sixteenth of an inch." },
        { step: 2, title: "Check Inner Diameter (ID)", description: "ID is the bore size — the actual opening inside the hose. This is what matters most for flow. Common IDs: 6mm (1/4\"), 10mm (3/8\"), 12mm (1/2\"), 16mm (5/8\"), 19mm (3/4\"), 25mm (1\"), 32mm (1-1/4\"), 38mm (1-1/2\"), 50mm (2\")." },
        { step: 3, title: "Check Outer Diameter (OD)", description: "OD varies by hose type and pressure rating. R2AT (two braid) has a thicker cover than R1AT (one braid) — same ID but larger OD. Always check OD against your fitting and routing clearance." },
        { step: 4, title: "Match the Standard", description: "Identify the hose standard: SAE R1AT / R2AT (most common in mobile hydraulics), EN 853 1SN / 2SN (European equivalent), EN 856 4SP / 4SH (four spiral, higher pressure), SAE R13 (six spiral, very high pressure)." },
        { step: 5, title: "Check Working Pressure", description: "Every hose has a max working pressure (MWP) — never exceed it. R1AT: ~225 bar. R2AT: ~350 bar. 4SP: ~415 bar. 4SH: ~420 bar. R13: ~350 bar. Burst pressure is typically 4x working pressure." },
        { step: 6, title: "Check Bend Radius", description: "Bend radius is the minimum radius the hose can bend without kinking. Bending tighter than the minimum drastically reduces hose life. R2AT has a larger minimum bend radius than R1AT. Always route with the largest possible radius." },
      ],
      specs: [
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
      ],
      sections: [
        {
          title: "R1AT vs R2AT vs 4SP vs 4SH — Which to Use?",
          content: `R1AT (1SN): One wire braid. General purpose, medium pressure. Good balance of flexibility and durability. Most commonly replaced hose in mobile equipment.\n\nR2AT (2SN): Two wire braid. Higher pressure than R1AT. The outer cover is thicker, so OD is larger. Use when the system pressure is higher or when extra durability is needed (e.g., hose runs near sharp edges or is exposed to debris).\n\n4SP: Four spiral wire. High pressure, very strong. Used in severe-duty applications. Less flexible than braided hose — requires larger bend radius. Suitable for pressures up to ~415 bar.\n\n4SH: Four spiral wire, higher pressure than 4SP. Heavy-duty mining and construction equipment. Very robust but requires careful routing.\n\nR13: Six spiral wire. Very high pressure with excellent flexibility for its rating. Used in mining equipment, hydrostatic transmissions, and high-demand stationary hydraulics.`,
        },
        {
          title: "Size Conversion Table",
          content: `Metric ID (mm) | Inch ID | Dash Size | Common Use\n6mm | 1/4\" | -4 | Small cylinders, control lines\n10mm | 3/8\" | -6 | Most common — excavator boom, bucket\n12mm | 1/2\" | -8 | Main pressure lines\n16mm | 5/8\" | -10 | Return lines, larger cylinders\n19mm | 3/4\" | -12 | Main pressure and return\n25mm | 1\" | -16 | High-flow pressure lines\n32mm | 1-1/4\" | -20 | Large equipment return lines\n38mm | 1-1/2\" | -24 | Industrial large bore\n50mm | 2\" | -32 | Industrial suction/discharge\n\nNote: These are nominal IDs. Actual ID may vary slightly between manufacturers. Always verify against the hose manufacturer's data sheet.`,
        },
      ],
      productLinks: [
        { name: "Hydraulic Hose (R1AT / R2AT / 4SP / 4SH)", slug: "hydraulic-hose", reason: "Full range from 1/4\" to 2\" — cut to your exact length" },
        { name: "Hydraulic Fittings", slug: "hydraulic-fittings", reason: "BSP, JIS, ORFS, SAE fittings to match your hose and equipment" },
        { name: "Ferrules (Crimping Sleeves)", slug: "ferrules", reason: "Match the correct ferrule to your hose type and dash size" },
      ],
      bottomCta: {
        title: "Not sure which hose you need?",
        desc: "Send us the equipment model or a photo of the old hose — we'll identify the correct size, standard, and fitting, then quote you on the complete assembly.",
        subject: "Hi Terra Hose, I need help identifying a hydraulic hose size. Here are the details: [describe what you know]",
      },
    },
    zh: {
      tag: "技术指南",
      title: "液压软管尺寸指南",
      tagline: "下单前先了解您的软管",
      description: "识别并指定正确液压软管尺寸所需的一切。涵盖 Dash 尺寸、内径（ID）、外径（OD）、压力等级与 SAE 标准。",
      identificationTitle: "如何读懂软管尺寸",
      identificationDesc: "按以下步骤正确识别或指定您的软管。",
      identSteps: [
        { step: 1, title: "找到 Dash 尺寸", description: "在软管上找 Dash 编号——通常印在外胶层。常用 Dash 尺寸：-4（1/4\"）、-6（3/8\"）、-8（1/2\"）、-10（5/8\"）、-12（3/4\"）、-16（1\"）、-20（1-1/4\"）、-24（1-1/2\"）、-32（2\"）。Dash 编号代表十六分之一英寸。" },
        { step: 2, title: "检查内径（ID）", description: "内径是孔径——软管内部的实际开口。这对流量最为重要。常用内径：6mm（1/4\"）、10mm（3/8\"）、12mm（1/2\"）、16mm（5/8\"）、19mm（3/4\"）、25mm（1\"）、32mm（1-1/4\"）、38mm（1-1/2\"）、50mm（2\"）。" },
        { step: 3, title: "检查外径（OD）", description: "外径因软管类型和压力等级而异。R2AT（双层编织）外胶层比 R1AT（单层）厚——内径相同但外径更大。务必核对软管外径与接头及布线间隙。" },
        { step: 4, title: "匹配标准", description: "确认软管标准：SAE R1AT / R2AT（移动液压最常见）、EN 853 1SN / 2SN（欧洲等效）、EN 856 4SP / 4SH（四层缠绕、更高压力）、SAE R13（六层缠绕、超高压）。" },
        { step: 5, title: "检查工作压力", description: "每根软管都有最大工作压力（MWP）——切勿超压。R1AT：约 225 bar。R2AT：约 350 bar。4SP：约 415 bar。4SH：约 420 bar。R13：约 350 bar。爆破压力通常为工作压力的 4 倍。" },
        { step: 6, title: "检查弯曲半径", description: "弯曲半径是软管不折死的最小弯曲半径。弯得过紧会大幅缩短软管寿命。R2AT 的最小弯曲半径大于 R1AT。布线时始终取尽可能大的半径。" },
      ],
      specs: [
        { label: "Dash 尺寸 -4", value: "内径：1/4\"（6mm）| 外径：约 13mm（R1AT）/ 约 15mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -6", value: "内径：3/8\"（10mm）| 外径：约 16mm（R1AT）/ 约 18mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -8", value: "内径：1/2\"（13mm）| 外径：约 20mm（R1AT）/ 约 22mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -10", value: "内径：5/8\"（16mm）| 外径：约 23mm（R1AT）/ 约 25mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -12", value: "内径：3/4\"（19mm）| 外径：约 28mm（R1AT）/ 约 30mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -16", value: "内径：1\"（25mm）| 外径：约 35mm（R1AT）/ 约 38mm（R2AT）| 工作压力：225 / 350 bar" },
        { label: "Dash 尺寸 -20", value: "内径：1-1/4\"（32mm）| 外径：约 43mm | 工作压力：180 / 280 bar" },
        { label: "Dash 尺寸 -24", value: "内径：1-1/2\"（38mm）| 外径：约 50mm | 工作压力：130 / 210 bar" },
        { label: "Dash 尺寸 -32", value: "内径：2\"（50mm）| 外径：约 64mm | 工作压力：90 / 170 bar" },
        { label: "爆破压力", value: "通常为工作压力的 4 倍（测试至工作压力的 2 倍）" },
        { label: "温度范围", value: "-40°C 至 +100°C（标准 NBR 内胶层）" },
        { label: "常用标准", value: "SAE 100 R1AT/R2AT、EN 853 1SN/2SN、EN 856 4SP/4SH、SAE 100 R13" },
      ],
      sections: [
        {
          title: "R1AT vs R2AT vs 4SP vs 4SH——选哪种？",
          content: `R1AT（1SN）：单层钢丝编织。通用、中压。柔韧性与耐用性平衡良好。移动设备中最常更换的软管。\n\nR2AT（2SN）：双层钢丝编织。压力高于 R1AT。外胶层更厚，故外径更大。系统压力较高或需要额外耐用性时选用（如软管靠近锋利边缘或暴露于碎屑）。\n\n4SP：四层钢丝缠绕。高压、非常坚固。用于严苛工况。柔韧性不如编织软管——需要更大的弯曲半径。适合最高约 415 bar 的压力。\n\n4SH：四层钢丝缠绕，压力高于 4SP。重型矿山与工程机械。非常坚固但需仔细布线。\n\nR13：六层钢丝缠绕。超高压且柔韧性出色。用于矿山设备、静液压传动及高要求固定液压。`,
        },
        {
          title: "尺寸换算表",
          content: `公制内径 (mm) | 英制内径 | Dash 尺寸 | 常见用途\n6mm | 1/4\" | -4 | 小油缸、控制管路\n10mm | 3/8\" | -6 | 最常见——挖掘机大臂、铲斗\n12mm | 1/2\" | -8 | 主压力管路\n16mm | 5/8\" | -10 | 回油管路、较大油缸\n19mm | 3/4\" | -12 | 主压力与回油\n25mm | 1\" | -16 | 大流量压力管路\n32mm | 1-1/4\" | -20 | 大型设备回油管路\n38mm | 1-1/2\" | -24 | 工业大口径\n50mm | 2\" | -32 | 工业吸排管路\n\n注：以上为公称内径。实际内径在不同厂商间可能略有差异。务必对照软管厂商数据表核实。`,
        },
      ],
      productLinks: [
        { name: "液压软管（R1AT / R2AT / 4SP / 4SH）", slug: "hydraulic-hose", reason: "全系列从 1/4\" 到 2\"——按您的精确长度切割" },
        { name: "液压接头", slug: "hydraulic-fittings", reason: "BSP、JIS、ORFS、SAE 接头，匹配您的软管与设备" },
        { name: "套筒（压接套筒）", slug: "ferrules", reason: "为您的软管类型和 Dash 尺寸匹配正确的套筒" },
      ],
      bottomCta: {
        title: "不确定需要哪种软管？",
        desc: "把设备型号或旧软管照片发给我们——我们会识别正确的尺寸、标准与接头，然后给出整套总成报价。",
        subject: "你好 Terra Hose，我需要帮忙识别液压软管尺寸。详情如下：[描述您已知的信息]",
      },
    },
    ms: {
      tag: "Panduan Teknikal",
      title: "Panduan Saiz Hos Hidraulik",
      tagline: "Kenali hos anda sebelum memesan",
      description: "Semua yang anda perlu untuk kenal pasti dan tentukan saiz hos hidraulik yang betul. Meliputi saiz dash, diameter dalam (ID), diameter luar (OD), penarafan tekanan dan piawaian SAE.",
      identificationTitle: "Cara Membaca Saiz Hos",
      identificationDesc: "Ikuti langkah ini untuk kenal pasti atau tentukan hos anda dengan betul.",
      identSteps: [
        { step: 1, title: "Cari Saiz Dash", description: "Cari nombor dash pada hos — biasanya dicetak pada lapisan luar. Saiz dash biasa: -4 (1/4\"), -6 (3/8\"), -8 (1/2\"), -10 (5/8\"), -12 (3/4\"), -16 (1\"), -20 (1-1/4\"), -24 (1-1/2\"), -32 (2\"). Nombor dash mewakili satu per enam belas inci." },
        { step: 2, title: "Periksa Diameter Dalam (ID)", description: "ID ialah saiz lubang — bukaan sebenar di dalam hos. Ini paling penting untuk aliran. ID biasa: 6mm (1/4\"), 10mm (3/8\"), 12mm (1/2\"), 16mm (5/8\"), 19mm (3/4\"), 25mm (1\"), 32mm (1-1/4\"), 38mm (1-1/2\"), 50mm (2\")." },
        { step: 3, title: "Periksa Diameter Luar (OD)", description: "OD berbeza mengikut jenis hos dan penarafan tekanan. R2AT (dua jalinan) mempunyai lapisan luar lebih tebal daripada R1AT (satu jalinan) — ID sama tetapi OD lebih besar. Sentiasa periksa OD terhadap kelengkapan dan ruang laluan anda." },
        { step: 4, title: "Padankan Piawaian", description: "Kenal pasti piawaian hos: SAE R1AT / R2AT (paling biasa dalam hidraulik mudah alih), EN 853 1SN / 2SN (setara Eropah), EN 856 4SP / 4SH (empat lingkaran, tekanan lebih tinggi), SAE R13 (enam lingkaran, tekanan sangat tinggi)." },
        { step: 5, title: "Periksa Tekanan Kerja", description: "Setiap hos mempunyai tekanan kerja maksimum (MWP) — jangan sekali-kali melebihinya. R1AT: ~225 bar. R2AT: ~350 bar. 4SP: ~415 bar. 4SH: ~420 bar. R13: ~350 bar. Tekanan pecah biasanya 4x tekanan kerja." },
        { step: 6, title: "Periksa Jejari Lentur", description: "Jejari lentur ialah jejari minimum hos boleh bengkok tanpa terlipat. Membengkok lebih ketat daripada minimum mengurangkan hayat hos secara drastik. R2AT mempunyai jejari lentur minimum lebih besar daripada R1AT. Sentiasa lalu dengan jejari sebesar mungkin." },
      ],
      specs: [
        { label: "Saiz Dash -4", value: "ID: 1/4\" (6mm) | OD: ~13mm (R1AT) / ~15mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -6", value: "ID: 3/8\" (10mm) | OD: ~16mm (R1AT) / ~18mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -8", value: "ID: 1/2\" (13mm) | OD: ~20mm (R1AT) / ~22mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -10", value: "ID: 5/8\" (16mm) | OD: ~23mm (R1AT) / ~25mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -12", value: "ID: 3/4\" (19mm) | OD: ~28mm (R1AT) / ~30mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -16", value: "ID: 1\" (25mm) | OD: ~35mm (R1AT) / ~38mm (R2AT) | WP: 225 / 350 bar" },
        { label: "Saiz Dash -20", value: "ID: 1-1/4\" (32mm) | OD: ~43mm | WP: 180 / 280 bar" },
        { label: "Saiz Dash -24", value: "ID: 1-1/2\" (38mm) | OD: ~50mm | WP: 130 / 210 bar" },
        { label: "Saiz Dash -32", value: "ID: 2\" (50mm) | OD: ~64mm | WP: 90 / 170 bar" },
        { label: "Tekanan Pecah", value: "Biasanya 4x tekanan kerja (diuji kepada 2x tekanan kerja)" },
        { label: "Julat Suhu", value: "-40°C hingga +100°C (tiub dalam NBR standard)" },
        { label: "Piawaian Biasa", value: "SAE 100 R1AT/R2AT, EN 853 1SN/2SN, EN 856 4SP/4SH, SAE 100 R13" },
      ],
      sections: [
        {
          title: "R1AT vs R2AT vs 4SP vs 4SH — Mana Nak Guna?",
          content: `R1AT (1SN): Satu jalinan dawai. Kegunaan am, tekanan sederhana. Keseimbangan fleksibiliti dan ketahanan yang baik. Hos yang paling kerap diganti dalam peralatan mudah alih.\n\nR2AT (2SN): Dua jalinan dawai. Tekanan lebih tinggi daripada R1AT. Lapisan luar lebih tebal, jadi OD lebih besar. Guna apabila tekanan sistem lebih tinggi atau ketahanan tambahan diperlukan (cth. hos melalui tepi tajam atau terdedah kepada serpihan).\n\n4SP: Empat lingkaran dawai. Tekanan tinggi, sangat kuat. Digunakan dalam aplikasi tugas berat. Kurang fleksibel daripada hos berjalinan — memerlukan jejari lentur lebih besar. Sesuai untuk tekanan sehingga ~415 bar.\n\n4SH: Empat lingkaran dawai, tekanan lebih tinggi daripada 4SP. Peralatan perlombongan dan pembinaan tugas berat. Sangat teguh tetapi memerlukan laluan berhati-hati.\n\nR13: Enam lingkaran dawai. Tekanan sangat tinggi dengan fleksibiliti cemerlang untuk penarafannya. Digunakan dalam peralatan perlombongan, transmisi hidrostatik dan hidraulik pegun permintaan tinggi.`,
        },
        {
          title: "Jadual Penukaran Saiz",
          content: `ID Metrik (mm) | ID Inci | Saiz Dash | Kegunaan Biasa\n6mm | 1/4\" | -4 | Silinder kecil, talian kawalan\n10mm | 3/8\" | -6 | Paling biasa — boom jengkaut, baldi\n12mm | 1/2\" | -8 | Talian tekanan utama\n16mm | 5/8\" | -10 | Talian balik, silinder lebih besar\n19mm | 3/4\" | -12 | Tekanan utama dan balik\n25mm | 1\" | -16 | Talian tekanan aliran tinggi\n32mm | 1-1/4\" | -20 | Talian balik peralatan besar\n38mm | 1-1/2\" | -24 | Lubang besar industri\n50mm | 2\" | -32 | Sedutan/nyahcas industri\n\nNota: Ini ialah ID nominal. ID sebenar mungkin berbeza sedikit antara pengeluar. Sentiasa sahkan terhadap helaian data pengeluar hos.`,
        },
      ],
      productLinks: [
        { name: "Hos Hidraulik (R1AT / R2AT / 4SP / 4SH)", slug: "hydraulic-hose", reason: "Julat penuh dari 1/4\" hingga 2\" — potong mengikut panjang tepat anda" },
        { name: "Kelengkapan Hidraulik", slug: "hydraulic-fittings", reason: "Kelengkapan BSP, JIS, ORFS, SAE untuk padankan hos dan peralatan anda" },
        { name: "Ferul (Sarung Pengelim)", slug: "ferrules", reason: "Padankan ferul yang betul dengan jenis hos dan saiz dash anda" },
      ],
      bottomCta: {
        title: "Tak pasti hos mana yang anda perlukan?",
        desc: "Hantar model peralatan atau foto hos lama — kami akan kenal pasti saiz, piawaian dan kelengkapan yang betul, kemudian beri sebut harga untuk pemasangan lengkap.",
        subject: "Hai Terra Hose, saya perlukan bantuan mengenal pasti saiz hos hidraulik. Berikut butirannya: [terangkan apa yang anda tahu]",
      },
    },
  },

  "bsp-vs-jis": {
    en: {
      tag: "Technical Guide",
      title: "BSP vs JIS Thread Identification",
      tagline: "Don't mix up your threads — it costs you time and leaks",
      description: "Complete guide to identifying BSP (BSPP/BSPT), JIS (Japanese Industrial Standard), metric, and flare fittings. Step-by-step identification, thread pitch charts, and seat angle explanations.",
      identificationTitle: "How to Identify the Thread Type",
      identificationDesc: "Follow these steps in order — each one eliminates possibilities until you narrow down the correct thread type.",
      identSteps: [
        { step: 1, title: "Check the Thread Seat Angle", description: "The seat (the angled face where the fitting seals) tells you most of what you need to know. BSPP: 60° seat angle (flat face seat). BSPT (tapered): thread itself tapers, seals on the thread flanks. JIS (BSPP style): also 60° seat — looks very similar to BSPP. JIS (flare): 37° seat (JIS B 0202). Metric flare: 37° seat (looks similar to JIS). ORFS: flat face with O-ring — completely different seal mechanism." },
        { step: 2, title: "Count the Threads per Inch (TPI)", description: "Use a thread gauge or count threads against a ruler. BSP threads (British): -4 (1/4\"): 19 TPI | -6 (3/8\"): 19 TPI | -8 (1/2\"): 14 TPI | -10 (5/8\"): 14 TPI | -12 (3/4\"): 14 TPI | -16 (1\"): 11 TPI | -20 (1-1/4\"): 11 TPI. Metric threads: expressed in pitch (mm between threads), e.g., M14x1.5 (14mm OD, 1.5mm pitch)." },
        { step: 3, title: "Measure the Thread Outer Diameter (OD)", description: "Use calipers on the thread OD. BSP threads are measured in inches — 1/4\", 3/8\", 1/2\", 3/4\", 1\", etc. Metric threads are measured in mm — M10, M12, M14, M16, M18, M22, M27, M33, etc. JIS Metric: similar OD to BSP but different thread pitch — e.g., BSP 1/4\" = ~13.6mm OD; JIS 1/4\" = 14mm OD (very close, pitch differs)." },
        { step: 4, title: "Check if Tapered or Parallel (Straight)", description: "BSPT (British Standard Pipe Taper): tapered thread — OD decreases along the length. Used for ports and fittings that seal on the thread itself. BSPP (British Standard Pipe Parallel): parallel/straight thread — constant OD. Seals on a seat (flat face or cone). JIS BSPP: same parallel form as BSPP. JIS flare: parallel thread with 37° flare seat." },
        { step: 5, title: "Look for Identification Markings", description: "BSP fittings often marked with \"BSPP\" or \"BSPT\" or simply the size. JIS fittings often marked with \"JIS\" or a Japanese character. Metric fittings marked with \"M\" followed by diameter and pitch, e.g., \"M18x1.5\". ORFS fittings are always flat face with visible O-ring groove. SAE ORFS: marked \"ORFS\" or \"SAE\" on the fitting body." },
        { step: 6, title: "Cross-Reference with Your Equipment", description: "Japanese equipment (Hitachi, Komatsu, Kato): often use JIS threads. European equipment (Bosch Rexroth, Hydroline): usually BSP or metric. American equipment (Parker, Eaton): often SAE ORFS or SAE flange. When in doubt, send us a photo — we identify it for free." },
      ],
      specs: [
        { label: "BSPP (British Parallel)", value: "60° thread angle, parallel thread, seals on seat face. Sizes: 1/4\" to 2\". Common in European and Malaysian equipment." },
        { label: "BSPT (British Standard Pipe Taper)", value: "55° Whitworth thread form (tapered, seals on thread flanks). ISO 7-1 / BS 21. Sizes: 1/4\" to 2\"." },
        { label: "JIS BSPP (Japanese Parallel)", value: "60° thread angle (same as BSPP). Pitch differs slightly from BSP — NOT interchangeable! Must use JIS fittings for Japanese equipment." },
        { label: "JIS Flare (37°)", value: "37° flare seat, parallel thread. Similar to JIS BSPP but different seat angle. Common on older Japanese machinery." },
        { label: "Metric Flare (37°)", value: "37° flare seat, parallel thread. Different OD and pitch from JIS flare. European metric equipment." },
        { label: "Metric Straight", value: "Parallel metric thread. Identified by \"M\" marking and mm pitch. Common in German/Bosch Rexroth equipment." },
        { label: "NPT (National Pipe Taper)", value: "60° thread angle, tapered thread. NOT interchangeable with BSPT — different thread pitch and angle. Common in American equipment." },
        { label: "ORFS (O-Ring Face Seal)", value: "Flat face with O-ring. No thread sealing — O-ring does the sealing. Common in modern mobile hydraulics." },
      ],
      sections: [
        {
          title: "BSP vs JIS — Why It Matters",
          content: `BSP and JIS threads look almost identical to the untrained eye. Both are roughly 60° angle. Both use similar nominal sizes. But they are NOT interchangeable.\n\nThe thread pitch is different:\n- BSP 1/4\" (19 TPI) = 1.337mm pitch\n- JIS 1/4\" (19 TPI) = 1.337mm pitch (same!)\n\nBut the OD is slightly different:\n- BSP 1/4\" OD = ~13.6mm\n- JIS 1/4\" OD = 14mm\n\nAt larger sizes, the difference becomes more significant:\n- BSP 3/4\" OD = ~26.4mm\n- JIS 3/4\" OD = 27mm\n\nIf you thread a JIS fitting into a BSP port, you risk:\n1. Cross-threading and fitting damage\n2. Leaks due to poor seal\n3. Difficulty removing the fitting later\n\nIf you're working on Japanese equipment (Hitachi, Komatsu, Kato, TCM), always use genuine JIS fittings — don't substitute BSP.`,
        },
        {
          title: "Quick Identification Reference",
          content: `Look for the seat type:\n→ Flat face with O-ring groove = ORFS\n→ 60° flat seat, parallel thread = BSPP or JIS BSPP (check OD)\n→ 37° flare seat = JIS flare or metric flare\n→ Tapered thread (seals on thread) = BSPT or NPT\n\nCount TPI or check pitch:\n→ BSP: sizes in inches, TPI: 19 (small), 14 (medium), 11 (large)\n→ Metric: sizes in mm, pitch: 1.0, 1.5, 2.0mm etc.\n\nStill not sure? Send us a photo. We identify fittings for free — no obligation.`,
        },
      ],
      productLinks: [
        { name: "Hydraulic Fittings (BSP, JIS, Metric)", slug: "hydraulic-fittings", reason: "Full range of BSPP, BSPT, JIS and metric fittings in stock" },
        { name: "Adapters (BSP to JIS, NPT to BSP)", slug: "adapters", reason: "Adapt between different thread types when needed" },
        { name: "O-Rings & Seals", slug: "o-rings-seals", reason: "Replacement O-rings for ORFS and BSPP fitting seals" },
      ],
      bottomCta: {
        title: "Can't identify your fitting thread?",
        desc: "Send us a photo of the thread, fitting, or nameplate — we'll identify the thread type and quote you on the correct fitting.",
        subject: "Hi Terra Hose, I need help identifying this fitting thread type. [describe what you see or attach a photo]",
      },
    },
    zh: {
      tag: "技术指南",
      title: "BSP vs JIS 螺纹识别",
      tagline: "别搞混螺纹——它浪费您的时间还导致泄漏",
      description: "识别 BSP（BSPP/BSPT）、JIS（日本工业标准）、公制与扩口接头的完整指南。逐步识别、螺纹牙距表与密封面角度说明。",
      identificationTitle: "如何识别螺纹类型",
      identificationDesc: "按顺序执行以下步骤——每一步排除可能，直到锁定正确的螺纹类型。",
      identSteps: [
        { step: 1, title: "检查螺纹密封面角度", description: "密封面（接头密封的斜面）能告诉您大部分信息。BSPP：60° 密封角（平面座）。BSPT（锥管）：螺纹本身带锥度，靠螺纹牙侧密封。JIS（BSPP 式）：也是 60° 密封面——与 BSPP 极为相似。JIS（扩口）：37° 密封面（JIS B 0202）。公制扩口：37° 密封面（与 JIS 相似）。ORFS：带 O 型圈的平面——完全不同的密封机制。" },
        { step: 2, title: "数每英寸牙数（TPI）", description: "用螺纹规或对照直尺数牙数。BSP 螺纹（英制）：-4（1/4\"）：19 TPI | -6（3/8\"）：19 TPI | -8（1/2\"）：14 TPI | -10（5/8\"）：14 TPI | -12（3/4\"）：14 TPI | -16（1\"）：11 TPI | -20（1-1/4\"）：11 TPI。公制螺纹：以牙距（牙间 mm）表示，如 M14x1.5（14mm 外径、1.5mm 牙距）。" },
        { step: 3, title: "测量螺纹外径（OD）", description: "用卡尺量螺纹外径。BSP 螺纹以英寸计量——1/4\"、3/8\"、1/2\"、3/4\"、1\" 等。公制螺纹以 mm 计量——M10、M12、M14、M16、M18、M22、M27、M33 等。JIS 公制：外径与 BSP 相近但牙距不同——如 BSP 1/4\" = 约 13.6mm 外径；JIS 1/4\" = 14mm 外径（非常接近，牙距不同）。" },
        { step: 4, title: "检查锥管还是直管", description: "BSPT（英制锥管螺纹）：锥形螺纹——外径沿长度递减。用于靠螺纹自身密封的端口和接头。BSPP（英制直管螺纹）：平行/直螺纹——外径恒定。靠密封面（平面或锥面）密封。JIS BSPP：与 BSPP 相同的直管形式。JIS 扩口：带 37° 扩口密封面的直螺纹。" },
        { step: 5, title: "寻找识别标记", description: "BSP 接头常标 \"BSPP\" 或 \"BSPT\" 或仅标尺寸。JIS 接头常标 \"JIS\" 或日文字符。公制接头标 \"M\" 加直径和牙距，如 \"M18x1.5\"。ORFS 接头始终是带可见 O 型圈槽的平面。SAE ORFS：接头体上标 \"ORFS\" 或 \"SAE\"。" },
        { step: 6, title: "与设备对照", description: "日系设备（日立、小松、加藤）：常用 JIS 螺纹。欧系设备（博世力士乐、Hydroline）：通常 BSP 或公制。美系设备（派克、伊顿）：常用 SAE ORFS 或 SAE 法兰。拿不准就发照片——我们免费识别。" },
      ],
      specs: [
        { label: "BSPP（英制直管）", value: "60° 螺纹角，直螺纹，靠密封面密封。尺寸：1/4\" 至 2\"。常见于欧系与马来西亚设备。" },
        { label: "BSPT（英制锥管螺纹）", value: "55° 惠氏螺纹牙型（锥形，靠螺纹牙侧密封）。ISO 7-1 / BS 21。尺寸：1/4\" 至 2\"。" },
        { label: "JIS BSPP（日制直管）", value: "60° 螺纹角（同 BSPP）。牙距与 BSP 略有不同——不可互换！日系设备必须用 JIS 接头。" },
        { label: "JIS 扩口（37°）", value: "37° 扩口密封面，直螺纹。类似 JIS BSPP 但密封面角度不同。常见于较老日系机械。" },
        { label: "公制扩口（37°）", value: "37° 扩口密封面，直螺纹。外径与牙距不同于 JIS 扩口。欧系公制设备。" },
        { label: "公制直管", value: "平行公制螺纹。以 \"M\" 标记和 mm 牙距识别。常见于德系/博世力士乐设备。" },
        { label: "NPT（美制锥管）", value: "60° 螺纹角，锥形螺纹。不可与 BSPT 互换——牙距与角度不同。常见于美系设备。" },
        { label: "ORFS（O 型圈端面密封）", value: "带 O 型圈的平面。无螺纹密封——O 型圈完成密封。常见于现代移动液压。" },
      ],
      sections: [
        {
          title: "BSP vs JIS——为何重要",
          content: `BSP 与 JIS 螺纹在外行人眼里几乎一样。两者都是约 60° 角。两者名义尺寸相近。但它们不可互换。\n\n牙距不同：\n- BSP 1/4\"（19 TPI）= 1.337mm 牙距\n- JIS 1/4\"（19 TPI）= 1.337mm 牙距（相同！）\n\n但外径略有不同：\n- BSP 1/4\" 外径 = 约 13.6mm\n- JIS 1/4\" 外径 = 14mm\n\n尺寸越大，差异越明显：\n- BSP 3/4\" 外径 = 约 26.4mm\n- JIS 3/4\" 外径 = 27mm\n\n若把 JIS 接头拧入 BSP 端口，您将面临：\n1. 乱扣与接头损坏\n2. 密封不良导致泄漏\n3. 之后难以拆卸接头\n\n若维修日系设备（日立、小松、加藤、TCM），务必使用正品 JIS 接头——不要用 BSP 替代。`,
        },
        {
          title: "快速识别速查",
          content: `看密封面类型：\n→ 带 O 型圈槽的平面 = ORFS\n→ 60° 平面座、直螺纹 = BSPP 或 JIS BSPP（查外径）\n→ 37° 扩口密封面 = JIS 扩口或公制扩口\n→ 锥形螺纹（靠螺纹密封）= BSPT 或 NPT\n\n数 TPI 或查牙距：\n→ BSP：英寸尺寸，TPI：19（小）、14（中）、11（大）\n→ 公制：mm 尺寸，牙距：1.0、1.5、2.0mm 等\n\n仍不确定？发张照片。我们免费识别接头——无任何义务。`,
        },
      ],
      productLinks: [
        { name: "液压接头（BSP、JIS、公制）", slug: "hydraulic-fittings", reason: "现货 BSPP、BSPT、JIS 与公制接头全系列" },
        { name: "转接头（BSP 转 JIS、NPT 转 BSP）", slug: "adapters", reason: "需要时在不同螺纹类型之间转换" },
        { name: "密封件", slug: "o-rings-seals", reason: "ORFS 与 BSPP 接头密封的替换 O 型圈" },
      ],
      bottomCta: {
        title: "无法识别接头螺纹？",
        desc: "把螺纹、接头或铭牌的照片发给我们——我们会识别螺纹类型并为您报出正确接头的价格。",
        subject: "你好 Terra Hose，我需要帮忙识别这个接头的螺纹类型。[描述您所见或附上照片]",
      },
    },
    ms: {
      tag: "Panduan Teknikal",
      title: "Pengenalpastian Benang BSP vs JIS",
      tagline: "Jangan tersilap benang — ia membazir masa dan menyebabkan kebocoran",
      description: "Panduan lengkap untuk mengenal pasti BSP (BSPP/BSPT), JIS (Japanese Industrial Standard), metrik dan kelengkapan suar. Pengenalpastian langkah demi langkah, carta pic benang dan penjelasan sudut tempat duduk.",
      identificationTitle: "Cara Mengenal Pasti Jenis Benang",
      identificationDesc: "Ikuti langkah ini mengikut urutan — setiap satu menghapuskan kemungkinan sehingga anda mengecilkan jenis benang yang betul.",
      identSteps: [
        { step: 1, title: "Periksa Sudut Tempat Duduk Benang", description: "Tempat duduk (muka bersudut di mana kelengkapan mengedap) memberitahu anda kebanyakan yang perlu anda tahu. BSPP: sudut tempat duduk 60° (tempat duduk muka rata). BSPT (tirus): benang itu sendiri menirus, mengedap pada rusuk benang. JIS (gaya BSPP): juga tempat duduk 60° — kelihatan sangat serupa dengan BSPP. JIS (suar): tempat duduk 37° (JIS B 0202). Suar metrik: tempat duduk 37° (kelihatan serupa dengan JIS). ORFS: muka rata dengan cincin-O — mekanisme pengedap berbeza sepenuhnya." },
        { step: 2, title: "Kira Benang per Inci (TPI)", description: "Guna tolok benang atau kira benang terhadap pembaris. Benang BSP (British): -4 (1/4\"): 19 TPI | -6 (3/8\"): 19 TPI | -8 (1/2\"): 14 TPI | -10 (5/8\"): 14 TPI | -12 (3/4\"): 14 TPI | -16 (1\"): 11 TPI | -20 (1-1/4\"): 11 TPI. Benang metrik: dinyatakan dalam pic (mm antara benang), cth. M14x1.5 (OD 14mm, pic 1.5mm)." },
        { step: 3, title: "Ukur Diameter Luar Benang (OD)", description: "Guna angkup pada OD benang. Benang BSP diukur dalam inci — 1/4\", 3/8\", 1/2\", 3/4\", 1\", dsb. Benang metrik diukur dalam mm — M10, M12, M14, M16, M18, M22, M27, M33, dsb. JIS Metrik: OD serupa dengan BSP tetapi pic benang berbeza — cth. BSP 1/4\" = OD ~13.6mm; JIS 1/4\" = OD 14mm (sangat dekat, pic berbeza)." },
        { step: 4, title: "Periksa Sama Ada Tirus atau Selari (Lurus)", description: "BSPT (British Standard Pipe Taper): benang tirus — OD berkurang sepanjang panjangnya. Digunakan untuk port dan kelengkapan yang mengedap pada benang itu sendiri. BSPP (British Standard Pipe Parallel): benang selari/lurus — OD malar. Mengedap pada tempat duduk (muka rata atau kon). JIS BSPP: bentuk selari sama seperti BSPP. Suar JIS: benang selari dengan tempat duduk suar 37°." },
        { step: 5, title: "Cari Tanda Pengenalpastian", description: "Kelengkapan BSP selalunya ditanda \"BSPP\" atau \"BSPT\" atau sekadar saiz. Kelengkapan JIS selalunya ditanda \"JIS\" atau aksara Jepun. Kelengkapan metrik ditanda \"M\" diikuti diameter dan pic, cth. \"M18x1.5\". Kelengkapan ORFS sentiasa muka rata dengan alur cincin-O yang kelihatan. SAE ORFS: ditanda \"ORFS\" atau \"SAE\" pada badan kelengkapan." },
        { step: 6, title: "Rujuk Silang dengan Peralatan Anda", description: "Peralatan Jepun (Hitachi, Komatsu, Kato): sering menggunakan benang JIS. Peralatan Eropah (Bosch Rexroth, Hydroline): biasanya BSP atau metrik. Peralatan Amerika (Parker, Eaton): sering SAE ORFS atau bebibir SAE. Apabila ragu-ragu, hantar foto — kami kenal pastinya secara percuma." },
      ],
      specs: [
        { label: "BSPP (Selari British)", value: "Sudut benang 60°, benang selari, mengedap pada muka tempat duduk. Saiz: 1/4\" hingga 2\". Biasa dalam peralatan Eropah dan Malaysia." },
        { label: "BSPT (British Standard Pipe Taper)", value: "Bentuk benang Whitworth 55° (tirus, mengedap pada rusuk benang). ISO 7-1 / BS 21. Saiz: 1/4\" hingga 2\"." },
        { label: "JIS BSPP (Selari Jepun)", value: "Sudut benang 60° (sama seperti BSPP). Pic berbeza sedikit daripada BSP — TIDAK boleh ditukar ganti! Mesti guna kelengkapan JIS untuk peralatan Jepun." },
        { label: "Suar JIS (37°)", value: "Tempat duduk suar 37°, benang selari. Serupa dengan JIS BSPP tetapi sudut tempat duduk berbeza. Biasa pada jentera Jepun lama." },
        { label: "Suar Metrik (37°)", value: "Tempat duduk suar 37°, benang selari. OD dan pic berbeza daripada suar JIS. Peralatan metrik Eropah." },
        { label: "Lurus Metrik", value: "Benang metrik selari. Dikenal pasti melalui tanda \"M\" dan pic mm. Biasa dalam peralatan Jerman/Bosch Rexroth." },
        { label: "NPT (National Pipe Taper)", value: "Sudut benang 60°, benang tirus. TIDAK boleh ditukar ganti dengan BSPT — pic dan sudut benang berbeza. Biasa dalam peralatan Amerika." },
        { label: "ORFS (O-Ring Face Seal)", value: "Muka rata dengan cincin-O. Tiada pengedap benang — cincin-O yang mengedap. Biasa dalam hidraulik mudah alih moden." },
      ],
      sections: [
        {
          title: "BSP vs JIS — Kenapa Ia Penting",
          content: `Benang BSP dan JIS kelihatan hampir sama kepada mata yang tidak terlatih. Kedua-duanya kira-kira sudut 60°. Kedua-duanya guna saiz nominal yang serupa. Tetapi ia TIDAK boleh ditukar ganti.\n\nPic benang berbeza:\n- BSP 1/4\" (19 TPI) = pic 1.337mm\n- JIS 1/4\" (19 TPI) = pic 1.337mm (sama!)\n\nTetapi OD sedikit berbeza:\n- BSP 1/4\" OD = ~13.6mm\n- JIS 1/4\" OD = 14mm\n\nPada saiz lebih besar, perbezaan menjadi lebih ketara:\n- BSP 3/4\" OD = ~26.4mm\n- JIS 3/4\" OD = 27mm\n\nJika anda memasukkan kelengkapan JIS ke dalam port BSP, anda berisiko:\n1. Benang silang dan kerosakan kelengkapan\n2. Kebocoran akibat pengedap buruk\n3. Kesukaran menanggalkan kelengkapan kemudian\n\nJika anda bekerja pada peralatan Jepun (Hitachi, Komatsu, Kato, TCM), sentiasa guna kelengkapan JIS tulen — jangan ganti dengan BSP.`,
        },
        {
          title: "Rujukan Pengenalpastian Pantas",
          content: `Lihat jenis tempat duduk:\n→ Muka rata dengan alur cincin-O = ORFS\n→ Tempat duduk rata 60°, benang selari = BSPP atau JIS BSPP (periksa OD)\n→ Tempat duduk suar 37° = suar JIS atau suar metrik\n→ Benang tirus (mengedap pada benang) = BSPT atau NPT\n\nKira TPI atau periksa pic:\n→ BSP: saiz dalam inci, TPI: 19 (kecil), 14 (sederhana), 11 (besar)\n→ Metrik: saiz dalam mm, pic: 1.0, 1.5, 2.0mm dsb.\n\nMasih tak pasti? Hantar foto. Kami kenal pasti kelengkapan secara percuma — tanpa obligasi.`,
        },
      ],
      productLinks: [
        { name: "Kelengkapan Hidraulik (BSP, JIS, Metrik)", slug: "hydraulic-fittings", reason: "Julat penuh kelengkapan BSPP, BSPT, JIS dan metrik dalam stok" },
        { name: "Penyesuai (BSP ke JIS, NPT ke BSP)", slug: "adapters", reason: "Sesuaikan antara jenis benang berbeza apabila perlu" },
        { name: "Cincin-O & Pengedap", slug: "o-rings-seals", reason: "Cincin-O gantian untuk pengedap kelengkapan ORFS dan BSPP" },
      ],
      bottomCta: {
        title: "Tak dapat kenal pasti benang kelengkapan anda?",
        desc: "Hantar foto benang, kelengkapan atau plat nama — kami akan kenal pasti jenis benang dan beri sebut harga kelengkapan yang betul.",
        subject: "Hai Terra Hose, saya perlukan bantuan mengenal pasti jenis benang kelengkapan ini. [terangkan apa yang anda lihat atau lampirkan foto]",
      },
    },
  },

  "orfs-fittings": {
    en: {
      tag: "Technical Guide",
      title: "ORFS Fittings",
      tagline: "O-Ring Face Seal Explained",
      description: "ORFS (O-Ring Face Seal) fittings explained: how they work, why they outperform flare fittings, dash sizes, and how to identify and specify them correctly.",
      identificationTitle: "How ORFS Fittings Work",
      identificationDesc: "ORFS fittings seal on a flat face with an O-ring. Here's how the seal works and how to specify the correct fitting.",
      identSteps: [
        { step: 1, title: "Understand the Seal Mechanism", description: "ORFS fittings use a flat face with a groove that holds an O-ring. When the fitting is tightened, the O-ring is compressed against the mating flat face — creating a metal-to-metal contact plus O-ring seal. The O-ring does the sealing, NOT the threads." },
        { step: 2, title: "Identify the Dash Size", description: "ORFS fittings are specified by dash size, same as hose: -4 (1/4″), -6 (3/8″), -8 (1/2″), -10 (5/8″), -12 (3/4″), -16 (1″), -20 (1-1/4″), -24 (1-1/2″), -32 (2″). The dash number refers to the tube/hose size, not the thread." },
        { step: 3, title: "Check the Thread Type", description: "ORFS fittings use a UNF/UN thread form (SAE J1453 standard). The thread is straight (parallel), not tapered. Common thread sizes: -4: 9/16-18 UNF | -6: 11/16-16 UNF | -8: 13/16-16 UNF | -10: 1-14 UNS | -12: 1-3/16-12 UN | -16: 1-7/16-12 UN | -20: 1-11/16-12 UN | -24: 2-12 UN." },
        { step: 4, title: "Check the O-Ring Groove", description: "Every ORFS fitting has a visible O-ring groove on the flat face. The O-ring sits in this groove. When you look at an ORFS fitting, you should see: flat face + O-ring groove + O-ring. If you don't see a groove, it's not ORFS." },
        { step: 5, title: "Distinguish ORFS from SAE Flare (JIC)", description: "ORFS and SAE 37° flare (JIC) are often confused. ORFS: flat face with O-ring. JIC flare: 37° cone seat, no O-ring. Both use the same dash sizing and similar thread forms — but they are NOT interchangeable. Look for the flat face and O-ring." },
        { step: 6, title: "Check Torque and O-Ring Condition", description: "ORFS fittings need correct torque for a proper seal. The O-ring must be in good condition — a worn or cut O-ring will leak. Always replace the O-ring when reconnecting an ORFS fitting. We stock replacement O-rings." },
      ],
      specs: [
        { label: "-4 (1/4\")", value: "Thread: 9/16-18 UNF | O-ring: 0.364 ID x 0.070 CS | Torque: ~18-24 Nm" },
        { label: "-6 (3/8\")", value: "Thread: 11/16-16 UNF | O-ring: 0.487 ID x 0.070 CS | Torque: ~34-40 Nm" },
        { label: "-8 (1/2\")", value: "Thread: 13/16-16 UNF | O-ring: 0.609 ID x 0.070 CS | Torque: ~54-60 Nm" },
        { label: "-10 (5/8\")", value: "Thread: 1-14 UNS | O-ring: 0.755 ID x 0.070 CS | Torque: ~75-85 Nm" },
        { label: "-12 (3/4\")", value: "Thread: 1-3/16-12 UN | O-ring: 0.924 ID x 0.070 CS | Torque: ~110-125 Nm" },
        { label: "-16 (1\")", value: "Thread: 1-7/16-12 UN | O-ring: 1.171 ID x 0.070 CS | Torque: ~150-170 Nm" },
        { label: "-20 (1-1/4\")", value: "Thread: 1-11/16-12 UN | O-ring: 1.468 ID x 0.070 CS | Torque: ~200-230 Nm" },
        { label: "-24 (1-1/2\")", value: "Thread: 2-12 UN | O-ring: 1.718 ID x 0.070 CS | Torque: ~270-300 Nm" },
        { label: "Standard", value: "SAE J1453 (O-Ring Face Seal) — thread and O-ring dimensions" },
        { label: "O-Ring Material", value: "Nitrile (NBR) standard; Viton (FKM) for high temperature; EPDM for phosphate ester fluids" },
      ],
      sections: [
        {
          title: "Why ORFS Fittings Are Better",
          content: `ORFS fittings have become the standard for modern mobile hydraulics. Here's why:

1. Metal-to-metal contact: The flat faces contact metal-to-metal, which provides a positive stop and prevents over-tightening.

2. O-ring seal reliability: The O-ring absorbs vibration and movement better than metal-on-metal flare seats. Less prone to loosening under vibration.

3. High-pressure capability: ORFS fittings reliably handle pressures up to 6000 psi (420 bar) and beyond.

4. Reusable: Unlike flare fittings that can crack at the cone after repeated assembly, ORFS fittings can be disassembled and reassembled multiple times (just replace the O-ring).

5. Leak prevention: The O-ring seal is more forgiving of minor surface imperfections than metal-on-metal seals.

If your equipment uses ORFS fittings, don't substitute flare fittings — the seal mechanism is different and a substitution will leak.`,
        },
        {
          title: "Common Mistakes to Avoid",
          content: `1. Confusing ORFS with SAE 37° flare (JIC): Check for the O-ring groove. ORFS has one; flare doesn't.

2. Reusing a damaged O-ring: A cut, flattened, or hardened O-ring will not seal. Always replace.

3. Using the wrong O-ring material: Nitrile is standard, but high-temperature or chemical applications need Viton or EPDM.

4. Over-tightening: Metal-to-metal contact means the fitting stops when the faces meet. More torque doesn't improve the seal — it just distorts the fitting.

5. Using the wrong dash size: ORFS dash size refers to tube size, not thread. Double-check before ordering.`,
        },
      ],
      productLinks: [
        { name: "Hydraulic Fittings (incl. ORFS)", slug: "hydraulic-fittings", reason: "ORFS fittings in all dash sizes from -4 to -24" },
        { name: "O-Rings & Seals", slug: "o-rings-seals", reason: "Replacement ORFS O-rings — NBR, Viton, EPDM" },
        { name: "Adapters (ORFS to BSP/JIS)", slug: "adapters", reason: "Convert ORFS ports to other thread types" },
      ],
      bottomCta: {
        title: "Need ORFS fittings or O-rings?",
        desc: "Tell us the dash size and thread size, or send a photo of the fitting — we'll quote you on the correct ORFS fitting and replacement O-rings.",
        subject: "Hi Terra Hose, I need ORFS fittings. Dash size: [size], thread: [if known]. Can you help?",
      },
    },
    zh: {
      tag: "技术指南",
      title: "ORFS 接头",
      tagline: "O 型圈端面密封详解",
      description: "详解 ORFS（O 型圈端面密封）接头：工作原理、为何优于扩口接头、Dash 尺寸，以及如何正确识别和指定。",
      identificationTitle: "ORFS 接头如何工作",
      identificationDesc: "ORFS 接头靠带 O 型圈的平面密封。以下说明密封原理及如何指定正确接头。",
      identSteps: [
        { step: 1, title: "理解密封机制", description: "ORFS 接头使用带 O 型圈槽的平面。拧紧时，O 型圈被压向配合平面——形成金属对金属接触加 O 型圈密封。密封靠 O 型圈，而非螺纹。" },
        { step: 2, title: "识别 Dash 尺寸", description: "ORFS 接头以 Dash 尺寸标注，与软管相同：-4（1/4″）、-6（3/8″）、-8（1/2″）、-10（5/8″）、-12（3/4″）、-16（1″）、-20（1-1/4″）、-24（1-1/2″）、-32（2″）。Dash 编号指管/软管尺寸，而非螺纹。" },
        { step: 3, title: "检查螺纹类型", description: "ORFS 接头使用 UNF/UN 螺纹牙型（SAE J1453 标准）。螺纹为直螺纹（平行），非锥形。常用螺纹尺寸：-4：9/16-18 UNF | -6：11/16-16 UNF | -8：13/16-16 UNF | -10：1-14 UNS | -12：1-3/16-12 UN | -16：1-7/16-12 UN | -20：1-11/16-12 UN | -24：2-12 UN。" },
        { step: 4, title: "检查 O 型圈槽", description: "每个 ORFS 接头平面都有可见的 O 型圈槽。O 型圈就嵌在槽里。看 ORFS 接头时，应看到：平面 + O 型圈槽 + O 型圈。看不到槽就不是 ORFS。" },
        { step: 5, title: "区分 ORFS 与 SAE 扩口（JIC）", description: "ORFS 与 SAE 37° 扩口（JIC）常被混淆。ORFS：带 O 型圈的平面。JIC 扩口：37° 锥座，无 O 型圈。两者 Dash 尺寸相同、螺纹牙型相近——但不可互换。看平面和 O 型圈即可区分。" },
        { step: 6, title: "检查扭矩与 O 型圈状态", description: "ORFS 接头需正确扭矩才能良好密封。O 型圈必须状态良好——磨损或切口会导致泄漏。重新连接 ORFS 接头时务必更换 O 型圈。我们现货替换 O 型圈。" },
      ],
      specs: [
        { label: "-4（1/4\"）", value: "螺纹：9/16-18 UNF | O 型圈：0.364 内径 x 0.070 截面 | 扭矩：约 18-24 Nm" },
        { label: "-6（3/8\"）", value: "螺纹：11/16-16 UNF | O 型圈：0.487 内径 x 0.070 截面 | 扭矩：约 34-40 Nm" },
        { label: "-8（1/2\"）", value: "螺纹：13/16-16 UNF | O 型圈：0.609 内径 x 0.070 截面 | 扭矩：约 54-60 Nm" },
        { label: "-10（5/8\"）", value: "螺纹：1-14 UNS | O 型圈：0.755 内径 x 0.070 截面 | 扭矩：约 75-85 Nm" },
        { label: "-12（3/4\"）", value: "螺纹：1-3/16-12 UN | O 型圈：0.924 内径 x 0.070 截面 | 扭矩：约 110-125 Nm" },
        { label: "-16（1\"）", value: "螺纹：1-7/16-12 UN | O 型圈：1.171 内径 x 0.070 截面 | 扭矩：约 150-170 Nm" },
        { label: "-20（1-1/4\"）", value: "螺纹：1-11/16-12 UN | O 型圈：1.468 内径 x 0.070 截面 | 扭矩：约 200-230 Nm" },
        { label: "-24（1-1/2\"）", value: "螺纹：2-12 UN | O 型圈：1.718 内径 x 0.070 截面 | 扭矩：约 270-300 Nm" },
        { label: "标准", value: "SAE J1453（O 型圈端面密封）——螺纹与 O 型圈尺寸" },
        { label: "O 型圈材质", value: "丁腈（NBR）标准；Viton（FKM）耐高温；EPDM 用于磷酸酯流体" },
      ],
      sections: [
        {
          title: "为何 ORFS 接头更好",
          content: `ORFS 接头已成为现代移动液压的标准。原因如下：

1. 金属对金属接触：平面金属对金属接触提供正位止动，防止过度拧紧。

2. O 型圈密封可靠：O 型圈比金属对金属扩口座更能吸收振动与位移，抗振更不易松动。

3. 高压能力：ORFS 接头可可靠承受最高 6000 psi（420 bar）乃至更高压力。

4. 可重复使用：扩口接头反复装配后锥面可能开裂，而 ORFS 接头可多次拆装（只需更换 O 型圈）。

5. 防泄漏：O 型圈密封对轻微表面瑕疵比金属对金属密封更宽容。

若您的设备使用 ORFS 接头，不要用扩口接头替代——密封机制不同，替代会泄漏。`,
        },
        {
          title: "常见错误要避免",
          content: `1. 把 ORFS 与 SAE 37° 扩口（JIC）混淆：检查 O 型圈槽。ORFS 有，扩口没有。

2. 复用损坏的 O 型圈：切口、压扁或硬化的 O 型圈无法密封。务必更换。

3. 用错 O 型圈材质：丁腈为标准，但高温或化学应用需 Viton 或 EPDM。

4. 过度拧紧：金属对金属接触意味着平面接触即停止。更大扭矩不会改善密封——只会使接头变形。

5. 用错 Dash 尺寸：ORFS Dash 尺寸指管径而非螺纹。下单前务必核对。`,
        },
      ],
      productLinks: [
        { name: "液压接头（含 ORFS）", slug: "hydraulic-fittings", reason: "ORFS 接头全 Dash 尺寸，从 -4 到 -24" },
        { name: "密封件", slug: "o-rings-seals", reason: "ORFS 替换 O 型圈——NBR、Viton、EPDM" },
        { name: "转接头（ORFS 转 BSP/JIS）", slug: "adapters", reason: "将 ORFS 端口转换为其他螺纹类型" },
      ],
      bottomCta: {
        title: "需要 ORFS 接头或 O 型圈？",
        desc: "告诉我们 Dash 尺寸和螺纹尺寸，或发接头照片——我们会为您报出正确的 ORFS 接头和替换 O 型圈价格。",
        subject: "你好 Terra Hose，我需要 ORFS 接头。Dash 尺寸：[尺寸]，螺纹：[若已知]。能帮忙吗？",
      },
    },
    ms: {
      tag: "Panduan Teknikal",
      title: "Kelengkapan ORFS",
      tagline: "O-Ring Face Seal Diterangkan",
      description: "Kelengkapan ORFS (O-Ring Face Seal) diterangkan: cara ia berfungsi, kenapa ia lebih baik daripada kelengkapan suar, saiz dash, dan cara mengenal pasti serta menentukannya dengan betul.",
      identificationTitle: "Cara Kelengkapan ORFS Berfungsi",
      identificationDesc: "Kelengkapan ORFS mengedap pada muka rata dengan cincin-O. Berikut cara pengedap berfungsi dan cara menentukan kelengkapan yang betul.",
      identSteps: [
        { step: 1, title: "Fahami Mekanisme Pengedap", description: "Kelengkapan ORFS guna muka rata dengan alur yang memegang cincin-O. Apabila diketatkan, cincin-O dimampatkan terhadap muka rata pasangan — mewujudkan sentuhan logam-ke-logam plus pengedap cincin-O. Cincin-O yang mengedap, BUKAN benang." },
        { step: 2, title: "Kenal Pasti Saiz Dash", description: "Kelengkapan ORFS ditentukan mengikut saiz dash, sama seperti hos: -4 (1/4″), -6 (3/8″), -8 (1/2″), -10 (5/8″), -12 (3/4″), -16 (1″), -20 (1-1/4″), -24 (1-1/2″), -32 (2″). Nombor dash merujuk kepada saiz tiub/hos, bukan benang." },
        { step: 3, title: "Periksa Jenis Benang", description: "Kelengkapan ORFS guna bentuk benang UNF/UN (piawaian SAE J1453). Benang adalah lurus (selari), bukan tirus. Saiz benang biasa: -4: 9/16-18 UNF | -6: 11/16-16 UNF | -8: 13/16-16 UNF | -10: 1-14 UNS | -12: 1-3/16-12 UN | -16: 1-7/16-12 UN | -20: 1-11/16-12 UN | -24: 2-12 UN." },
        { step: 4, title: "Periksa Alur Cincin-O", description: "Setiap kelengkapan ORFS mempunyai alur cincin-O yang kelihatan pada muka rata. Cincin-O duduk dalam alur ini. Apabila anda melihat kelengkapan ORFS, anda patut nampak: muka rata + alur cincin-O + cincin-O. Jika tiada alur, ia bukan ORFS." },
        { step: 5, title: "Bezakan ORFS daripada Suar SAE (JIC)", description: "ORFS dan suar SAE 37° (JIC) sering dikelirukan. ORFS: muka rata dengan cincin-O. Suar JIC: tempat duduk kon 37°, tiada cincin-O. Kedua-duanya guna saiz dash sama dan bentuk benang serupa — tetapi ia TIDAK boleh ditukar ganti. Lihat muka rata dan cincin-O." },
        { step: 6, title: "Periksa Tork dan Keadaan Cincin-O", description: "Kelengkapan ORFS perlu tork betul untuk pengedap betul. Cincin-O mesti dalam keadaan baik — cincin-O haus atau terpotong akan bocor. Sentiasa ganti cincin-O apabila menyambung semula kelengkapan ORFS. Kami stok cincin-O gantian." },
      ],
      specs: [
        { label: "-4 (1/4\")", value: "Benang: 9/16-18 UNF | Cincin-O: 0.364 ID x 0.070 CS | Tork: ~18-24 Nm" },
        { label: "-6 (3/8\")", value: "Benang: 11/16-16 UNF | Cincin-O: 0.487 ID x 0.070 CS | Tork: ~34-40 Nm" },
        { label: "-8 (1/2\")", value: "Benang: 13/16-16 UNF | Cincin-O: 0.609 ID x 0.070 CS | Tork: ~54-60 Nm" },
        { label: "-10 (5/8\")", value: "Benang: 1-14 UNS | Cincin-O: 0.755 ID x 0.070 CS | Tork: ~75-85 Nm" },
        { label: "-12 (3/4\")", value: "Benang: 1-3/16-12 UN | Cincin-O: 0.924 ID x 0.070 CS | Tork: ~110-125 Nm" },
        { label: "-16 (1\")", value: "Benang: 1-7/16-12 UN | Cincin-O: 1.171 ID x 0.070 CS | Tork: ~150-170 Nm" },
        { label: "-20 (1-1/4\")", value: "Benang: 1-11/16-12 UN | Cincin-O: 1.468 ID x 0.070 CS | Tork: ~200-230 Nm" },
        { label: "-24 (1-1/2\")", value: "Benang: 2-12 UN | Cincin-O: 1.718 ID x 0.070 CS | Tork: ~270-300 Nm" },
        { label: "Piawaian", value: "SAE J1453 (O-Ring Face Seal) — dimensi benang dan cincin-O" },
        { label: "Bahan Cincin-O", value: "Nitrile (NBR) standard; Viton (FKM) untuk suhu tinggi; EPDM untuk bendalir ester fosfat" },
      ],
      sections: [
        {
          title: "Kenapa Kelengkapan ORFS Lebih Baik",
          content: `Kelengkapan ORFS telah menjadi standard untuk hidraulik mudah alih moden. Sebabnya:

1. Sentuhan logam-ke-logam: Muka rata bersentuhan logam-ke-logam, memberikan hentian positif dan mencegah ketat berlebihan.

2. Kebolehpercayaan pengedap cincin-O: Cincin-O menyerap getaran dan pergerakan lebih baik daripada tempat duduk suar logam-ke-logam. Kurang mudah longgar di bawah getaran.

3. Keupayaan tekanan tinggi: Kelengkapan ORFS boleh andal menahan tekanan sehingga 6000 psi (420 bar) dan lebih.

4. Boleh guna semula: Tidak seperti kelengkapan suar yang boleh retak pada kon selepas pemasangan berulang, kelengkapan ORFS boleh dibuka dan dipasang semula berbilang kali (hanya ganti cincin-O).

5. Pencegahan kebocoran: Pengedap cincin-O lebih bertoleransi terhadap ketidaksempurnaan permukaan kecil daripada pengedap logam-ke-logam.

Jika peralatan anda guna kelengkapan ORFS, jangan ganti dengan kelengkapan suar — mekanisme pengedap berbeza dan penggantian akan bocor.`,
        },
        {
          title: "Kesilapan Biasa Yang Perlu Dielakkan",
          content: `1. Mengelirukan ORFS dengan suar SAE 37° (JIC): Periksa alur cincin-O. ORFS ada; suar tiada.

2. Guna semula cincin-O yang rosak: Cincin-O terpotong, leper atau keras tidak akan mengedap. Sentiasa ganti.

3. Guna bahan cincin-O yang salah: Nitrile ialah standard, tetapi aplikasi suhu tinggi atau kimia perlukan Viton atau EPDM.

4. Ketat berlebihan: Sentuhan logam-ke-logam bermakna kelengkapan berhenti apabila muka bertemu. Lebih tork tidak memperbaiki pengedap — ia hanya mengherot kelengkapan.

5. Guna saiz dash yang salah: Saiz dash ORFS merujuk kepada saiz tiub, bukan benang. Semak semula sebelum memesan.`,
        },
      ],
      productLinks: [
        { name: "Kelengkapan Hidraulik (termasuk ORFS)", slug: "hydraulic-fittings", reason: "Kelengkapan ORFS dalam semua saiz dash dari -4 hingga -24" },
        { name: "Cincin-O & Pengedap", slug: "o-rings-seals", reason: "Cincin-O ORFS gantian — NBR, Viton, EPDM" },
        { name: "Penyesuai (ORFS ke BSP/JIS)", slug: "adapters", reason: "Tukar port ORFS kepada jenis benang lain" },
      ],
      bottomCta: {
        title: "Perlukan kelengkapan ORFS atau cincin-O?",
        desc: "Beritahu kami saiz dash dan saiz benang, atau hantar foto kelengkapan — kami akan beri sebut harga kelengkapan ORFS dan cincin-O gantian yang betul.",
        subject: "Hai Terra Hose, saya perlukan kelengkapan ORFS. Saiz dash: [saiz], benang: [jika diketahui]. Boleh tolong?",
      },
    },
  },

  "sae-flange": {
    en: {
      tag: "Technical Guide",
      title: "SAE Flange Fittings",
      tagline: "Code 61 & Code 62 Explained",
      description: "SAE flange fittings (SAE J518) explained: Code 61 vs Code 62, bolt circle diameters (BCD), flange sizes, and how to specify them correctly for high-pressure, high-flow applications.",
      identificationTitle: "How to Identify an SAE Flange",
      identificationDesc: "SAE flanges are identified by size, pressure code, and bolt circle diameter. Follow these steps to specify the correct flange.",
      identSteps: [
        { step: 1, title: "Determine the Flange Size", description: "SAE flanges come in standard sizes: 1/2″, 3/4″, 1″, 1-1/4″, 1-1/2″, 2″, 2-1/2″, 3″. The size refers to the nominal bore of the flange, which corresponds to the hose/tube size." },
        { step: 2, title: "Identify the Pressure Code (Code 61 vs Code 62)", description: "Code 61 (3000 psi series): standard pressure flange. Code 62 (6000 psi series): high pressure flange with a thicker flange head and larger bolt circle. Look at the flange thickness and bolt pattern — Code 62 has a larger bolt circle diameter (BCD) for the same size." },
        { step: 3, title: "Measure the Bolt Circle Diameter (BCD)", description: "The BCD is the diameter of the circle that passes through the centers of the bolt holes. Code 61 1/2″: 30.2mm BCD | Code 62 1/2″: 31.8mm BCD. Code 61 3/4″: 38.1mm | Code 62 3/4″: 41.3mm. Code 61 1″: 44.4mm | Code 62 1″: 47.6mm. Measuring BCD is the most reliable way to distinguish Code 61 from Code 62." },
        { step: 4, title: "Count the Bolt Holes", description: "All SAE flanges have 4 bolt holes (4-bolt pattern). Some special flanges (2-bolt flange clamps for heavy-duty) exist but the standard SAE J518 flange is always 4-bolt." },
        { step: 5, title: "Check the O-Ring Groove", description: "SAE flanges seal with an O-ring in a groove on the flange face. The O-ring sits in the groove and seals against the mating port face. Check that the O-ring groove and O-ring are present and in good condition." },
        { step: 6, title: "Check Bolt Size", description: "Flange bolts are sized by diameter and thread. Code 61 uses UNC bolts (imperial). Code 62 uses slightly larger bolts for the higher pressure. Bolt sizes: 1/2″ flange: 5/16″ bolt | 3/4″: 3/8″ | 1″: 3/8″ | 1-1/4″: 7/16″ | 1-1/2″: 1/2″ | 2″: 1/2″." },
      ],
      specs: [
        { label: "1/2\" Flange", value: "Code 61: 30.2mm BCD, 5/16″ bolt | Code 62: 31.8mm BCD, 5/16″ bolt" },
        { label: "3/4\" Flange", value: "Code 61: 38.1mm BCD, 3/8″ bolt | Code 62: 41.3mm BCD, 3/8″ bolt" },
        { label: "1\" Flange", value: "Code 61: 44.4mm BCD, 3/8″ bolt | Code 62: 47.6mm BCD, 3/8″ bolt" },
        { label: "1-1/4\" Flange", value: "Code 61: 50.8mm BCD, 7/16″ bolt | Code 62: 54.0mm BCD, 7/16″ bolt" },
        { label: "1-1/2\" Flange", value: "Code 61: 60.3mm BCD, 1/2″ bolt | Code 62: 63.5mm BCD, 1/2″ bolt" },
        { label: "2\" Flange", value: "Code 61: 71.4mm BCD, 1/2″ bolt | Code 62: 79.4mm BCD, 5/8″ bolt" },
        { label: "2-1/2\" Flange", value: "Code 61: 84.1mm BCD, 1/2″ bolt | Code 62: 90.5mm BCD, 5/8″ bolt" },
        { label: "3\" Flange", value: "Code 61: 95.2mm BCD, 5/8″ bolt | Code 62: 108.0mm BCD, 3/4″ bolt" },
        { label: "Standard", value: "SAE J518 (Code 61 and Code 62) — flange dimensions" },
        { label: "Pressure Rating", value: "Code 61: up to 34.5 MPa (5000 psi) working | Code 62: up to 41.4 MPa (6000 psi) working" },
      ],
      sections: [
        {
          title: "Code 61 vs Code 62 — Which One?",
          content: `Code 61 and Code 62 flanges look similar but are NOT interchangeable. Here are the key differences:

Code 61 (3000 psi series):
- Standard pressure flange
- Thinner flange head
- Smaller bolt circle diameter (BCD)
- Used in most general hydraulic applications

Code 62 (6000 psi series):
- High pressure flange
- Thicker flange head (about 1.5x thicker than Code 61)
- Larger BCD for the same nominal size
- Used in high-pressure applications (heavy machinery, presses)

For the same nominal size, Code 62 always has a larger BCD. If you're replacing a flange and not sure which code, measure the BCD and compare against the specs above.`,
        },
        {
          title: "How to Measure BCD",
          content: `Bolt Circle Diameter (BCD) is the diameter of the circle passing through the centers of all bolt holes.

How to measure:
1. Measure the distance between the centers of two bolt holes that are diagonally opposite (for 4-bolt flanges).
2. This diagonal distance is the BCD.

Alternatively:
1. Measure the distance between the centers of two adjacent bolt holes.
2. For 4-bolt flanges, multiply this distance by 1.414 (√2) to get the BCD.

Example: If adjacent bolt holes are 21.3mm apart, BCD = 21.3 x 1.414 = 30.1mm (approximately 30.2mm — this is a Code 61 1/2″ flange).

Accurate BCD measurement is the most reliable way to identify the flange. When in doubt, send us a photo with a ruler for scale.`,
        },
      ],
      productLinks: [
        { name: "Hydraulic Fittings (incl. SAE Flange)", slug: "hydraulic-fittings", reason: "SAE flange fittings in all sizes, Code 61 and Code 62" },
        { name: "Hydraulic Hose (R13 / 4SH)", slug: "hydraulic-hose", reason: "High-pressure hose for flange-connected systems" },
        { name: "O-Rings & Seals", slug: "o-rings-seals", reason: "Replacement flange O-rings" },
      ],
      bottomCta: {
        title: "Need an SAE flange fitting?",
        desc: "Tell us the flange size, pressure code (or measure the BCD), and we'll quote you on the correct flange, O-ring and bolts.",
        subject: "Hi Terra Hose, I need SAE flange fittings. Size: [size], Code 61 or 62: [if known]. Can you help?",
      },
    },
    zh: {
      tag: "技术指南",
      title: "SAE 法兰接头",
      tagline: "Code 61 与 Code 62 详解",
      description: "详解 SAE 法兰接头（SAE J518）：Code 61 与 Code 62、螺栓孔分布圆直径（BCD）、法兰尺寸，以及如何为高压大流量应用正确指定。",
      identificationTitle: "如何识别 SAE 法兰",
      identificationDesc: "SAE 法兰按尺寸、压力等级与螺栓孔分布圆直径识别。按以下步骤指定正确的法兰。",
      identSteps: [
        { step: 1, title: "确定法兰尺寸", description: "SAE 法兰有标准尺寸：1/2″、3/4″、1″、1-1/4″、1-1/2″、2″、2-1/2″、3″。尺寸指法兰公称孔径，对应软管/管径。" },
        { step: 2, title: "识别压力等级（Code 61 vs Code 62）", description: "Code 61（3000 psi 系列）：标准压力法兰。Code 62（6000 psi 系列）：高压法兰，法兰头更厚、螺栓孔分布圆更大。看法兰厚度和螺栓孔布局——同尺寸下 Code 62 的螺栓孔分布圆直径（BCD）更大。" },
        { step: 3, title: "测量螺栓孔分布圆直径（BCD）", description: "BCD 是穿过所有螺栓孔中心的圆的直径。Code 61 1/2″：30.2mm BCD | Code 62 1/2″：31.8mm BCD。Code 61 3/4″：38.1mm | Code 62 3/4″：41.3mm。Code 61 1″：44.4mm | Code 62 1″：47.6mm。测量 BCD 是区分 Code 61 与 Code 62 最可靠的方法。" },
        { step: 4, title: "数螺栓孔数", description: "所有 SAE 法兰都是 4 螺栓孔（4 孔布局）。存在特殊法兰（重型双螺栓法兰夹），但标准 SAE J518 法兰始终是 4 螺栓孔。" },
        { step: 5, title: "检查 O 型圈槽", description: "SAE 法兰靠法兰面凹槽中的 O 型圈密封。O 型圈嵌在槽中，压向配合端口面密封。检查 O 型圈槽与 O 型圈是否存在且状态良好。" },
        { step: 6, title: "检查螺栓尺寸", description: "法兰螺栓按直径和螺纹标注。Code 61 用 UNC 螺栓（英制）。Code 62 因压力更高用略大的螺栓。螺栓尺寸：1/2″ 法兰：5/16″ 螺栓 | 3/4″：3/8″ | 1″：3/8″ | 1-1/4″：7/16″ | 1-1/2″：1/2″ | 2″：1/2″。" },
      ],
      specs: [
        { label: "1/2\" 法兰", value: "Code 61：30.2mm BCD，5/16″ 螺栓 | Code 62：31.8mm BCD，5/16″ 螺栓" },
        { label: "3/4\" 法兰", value: "Code 61：38.1mm BCD，3/8″ 螺栓 | Code 62：41.3mm BCD，3/8″ 螺栓" },
        { label: "1\" 法兰", value: "Code 61：44.4mm BCD，3/8″ 螺栓 | Code 62：47.6mm BCD，3/8″ 螺栓" },
        { label: "1-1/4\" 法兰", value: "Code 61：50.8mm BCD，7/16″ 螺栓 | Code 62：54.0mm BCD，7/16″ 螺栓" },
        { label: "1-1/2\" 法兰", value: "Code 61：60.3mm BCD，1/2″ 螺栓 | Code 62：63.5mm BCD，1/2″ 螺栓" },
        { label: "2\" 法兰", value: "Code 61：71.4mm BCD，1/2″ 螺栓 | Code 62：79.4mm BCD，5/8″ 螺栓" },
        { label: "2-1/2\" 法兰", value: "Code 61：84.1mm BCD，1/2″ 螺栓 | Code 62：90.5mm BCD，5/8″ 螺栓" },
        { label: "3\" 法兰", value: "Code 61：95.2mm BCD，5/8″ 螺栓 | Code 62：108.0mm BCD，3/4″ 螺栓" },
        { label: "标准", value: "SAE J518（Code 61 与 Code 62）——法兰尺寸" },
        { label: "压力等级", value: "Code 61：最高 34.5 MPa（5000 psi）工作压力 | Code 62：最高 41.4 MPa（6000 psi）工作压力" },
      ],
      sections: [
        {
          title: "Code 61 vs Code 62——选哪种？",
          content: `Code 61 与 Code 62 法兰外观相似但不可互换。关键区别如下：

Code 61（3000 psi 系列）：
- 标准压力法兰
- 法兰头较薄
- 螺栓孔分布圆直径（BCD）较小
- 用于大多数通用液压应用

Code 62（6000 psi 系列）：
- 高压法兰
- 法兰头较厚（约为 Code 61 的 1.5 倍厚）
- 同名义尺寸下 BCD 更大
- 用于高压应用（重型机械、压机）

同名义尺寸下，Code 62 的 BCD 始终更大。若更换法兰且不确定等级，测量 BCD 并对照上表。`,
        },
        {
          title: "如何测量 BCD",
          content: `螺栓孔分布圆直径（BCD）是穿过所有螺栓孔中心的圆的直径。

测量方法：
1. 测量对角两个螺栓孔中心之间的距离（对 4 孔法兰）。
2. 该对角距离即 BCD。

另一种方法：
1. 测量相邻两个螺栓孔中心之间的距离。
2. 对 4 孔法兰，将该距离乘以 1.414（√2）得到 BCD。

示例：若相邻螺栓孔相距 21.3mm，BCD = 21.3 x 1.414 = 30.1mm（约 30.2mm——这是 Code 61 1/2″ 法兰）。

精确测量 BCD 是识别法兰最可靠的方法。拿不准时，发张带直尺参照的照片给我们。`,
        },
      ],
      productLinks: [
        { name: "液压接头（含 SAE 法兰）", slug: "hydraulic-fittings", reason: "SAE 法兰接头全尺寸，Code 61 与 Code 62" },
        { name: "液压软管（R13 / 4SH）", slug: "hydraulic-hose", reason: "法兰连接系统用高压软管" },
        { name: "密封件", slug: "o-rings-seals", reason: "法兰替换 O 型圈" },
      ],
      bottomCta: {
        title: "需要 SAE 法兰接头？",
        desc: "告诉我们法兰尺寸、压力等级（或测量 BCD），我们会为您报出正确的法兰、O 型圈和螺栓价格。",
        subject: "你好 Terra Hose，我需要 SAE 法兰接头。尺寸：[尺寸]，Code 61 或 62：[若已知]。能帮忙吗？",
      },
    },
    ms: {
      tag: "Panduan Teknikal",
      title: "Kelengkapan Bebibir SAE",
      tagline: "Code 61 & Code 62 Diterangkan",
      description: "Kelengkapan bebibir SAE (SAE J518) diterangkan: Code 61 vs Code 62, diameter bulatan bolt (BCD), saiz bebibir, dan cara menentukannya dengan betul untuk aplikasi tekanan tinggi dan aliran tinggi.",
      identificationTitle: "Cara Mengenal Pasti Bebibir SAE",
      identificationDesc: "Bebibir SAE dikenal pasti melalui saiz, kod tekanan dan diameter bulatan bolt. Ikuti langkah ini untuk menentukan bebibir yang betul.",
      identSteps: [
        { step: 1, title: "Tentukan Saiz Bebibir", description: "Bebibir SAE datang dalam saiz standard: 1/2″, 3/4″, 1″, 1-1/4″, 1-1/2″, 2″, 2-1/2″, 3″. Saiz merujuk kepada lubang nominal bebibir, yang sepadan dengan saiz hos/tiub." },
        { step: 2, title: "Kenal Pasti Kod Tekanan (Code 61 vs Code 62)", description: "Code 61 (siri 3000 psi): bebibir tekanan standard. Code 62 (siri 6000 psi): bebibir tekanan tinggi dengan kepala bebibir lebih tebal dan bulatan bolt lebih besar. Lihat ketebalan bebibir dan corak bolt — Code 62 mempunyai diameter bulatan bolt (BCD) lebih besar untuk saiz sama." },
        { step: 3, title: "Ukur Diameter Bulatan Bolt (BCD)", description: "BCD ialah diameter bulatan yang melalui pusat semua lubang bolt. Code 61 1/2″: 30.2mm BCD | Code 62 1/2″: 31.8mm BCD. Code 61 3/4″: 38.1mm | Code 62 3/4″: 41.3mm. Code 61 1″: 44.4mm | Code 62 1″: 47.6mm. Mengukur BCD ialah cara paling andal untuk membezakan Code 61 daripada Code 62." },
        { step: 4, title: "Kira Bilangan Lubang Bolt", description: "Semua bebibir SAE mempunyai 4 lubang bolt (corak 4-bolt). Terdapat bebibir khas (pengapit bebibir 2-bolt untuk tugas berat) tetapi bebibir SAE J518 standard sentiasa 4-bolt." },
        { step: 5, title: "Periksa Alur Cincin-O", description: "Bebibir SAE mengedap dengan cincin-O dalam alur pada muka bebibir. Cincin-O duduk dalam alur dan mengedap terhadap muka port pasangan. Periksa alur dan cincin-O ada serta dalam keadaan baik." },
        { step: 6, title: "Periksa Saiz Bolt", description: "Bolt bebibir ditentukan mengikut diameter dan benang. Code 61 guna bolt UNC (imperial). Code 62 guna bolt lebih besar sedikit untuk tekanan lebih tinggi. Saiz bolt: bebibir 1/2″: bolt 5/16″ | 3/4″: 3/8″ | 1″: 3/8″ | 1-1/4″: 7/16″ | 1-1/2″: 1/2″ | 2″: 1/2″." },
      ],
      specs: [
        { label: "Bebibir 1/2\"", value: "Code 61: 30.2mm BCD, bolt 5/16″ | Code 62: 31.8mm BCD, bolt 5/16″" },
        { label: "Bebibir 3/4\"", value: "Code 61: 38.1mm BCD, bolt 3/8″ | Code 62: 41.3mm BCD, bolt 3/8″" },
        { label: "Bebibir 1\"", value: "Code 61: 44.4mm BCD, bolt 3/8″ | Code 62: 47.6mm BCD, bolt 3/8″" },
        { label: "Bebibir 1-1/4\"", value: "Code 61: 50.8mm BCD, bolt 7/16″ | Code 62: 54.0mm BCD, bolt 7/16″" },
        { label: "Bebibir 1-1/2\"", value: "Code 61: 60.3mm BCD, bolt 1/2″ | Code 62: 63.5mm BCD, bolt 1/2″" },
        { label: "Bebibir 2\"", value: "Code 61: 71.4mm BCD, bolt 1/2″ | Code 62: 79.4mm BCD, bolt 5/8″" },
        { label: "Bebibir 2-1/2\"", value: "Code 61: 84.1mm BCD, bolt 1/2″ | Code 62: 90.5mm BCD, bolt 5/8″" },
        { label: "Bebibir 3\"", value: "Code 61: 95.2mm BCD, bolt 5/8″ | Code 62: 108.0mm BCD, bolt 3/4″" },
        { label: "Piawaian", value: "SAE J518 (Code 61 dan Code 62) — dimensi bebibir" },
        { label: "Penarafan Tekanan", value: "Code 61: sehingga 34.5 MPa (5000 psi) kerja | Code 62: sehingga 41.4 MPa (6000 psi) kerja" },
      ],
      sections: [
        {
          title: "Code 61 vs Code 62 — Mana Satu?",
          content: `Bebibir Code 61 dan Code 62 kelihatan serupa tetapi TIDAK boleh ditukar ganti. Perbezaan utama:

Code 61 (siri 3000 psi):
- Bebibir tekanan standard
- Kepala bebibir lebih nipis
- Diameter bulatan bolt (BCD) lebih kecil
- Digunakan dalam kebanyakan aplikasi hidraulik am

Code 62 (siri 6000 psi):
- Bebibir tekanan tinggi
- Kepala bebibir lebih tebal (kira-kira 1.5x lebih tebal daripada Code 61)
- BCD lebih besar untuk saiz nominal sama
- Digunakan dalam aplikasi tekanan tinggi (jentera berat, penekan)

Untuk saiz nominal sama, Code 62 sentiasa mempunyai BCD lebih besar. Jika anda menggantikan bebibir dan tak pasti kodnya, ukur BCD dan bandingkan dengan spesifikasi di atas.`,
        },
        {
          title: "Cara Mengukur BCD",
          content: `Diameter Bulatan Bolt (BCD) ialah diameter bulatan yang melalui pusat semua lubang bolt.

Cara mengukur:
1. Ukur jarak antara pusat dua lubang bolt yang bertentangan menyerong (untuk bebibir 4-bolt).
2. Jarak menyerong ini ialah BCD.

Sebagai alternatif:
1. Ukur jarak antara pusat dua lubang bolt bersebelahan.
2. Untuk bebibir 4-bolt, darab jarak ini dengan 1.414 (√2) untuk dapatkan BCD.

Contoh: Jika lubang bolt bersebelahan berjarak 21.3mm, BCD = 21.3 x 1.414 = 30.1mm (kira-kira 30.2mm — ini ialah bebibir Code 61 1/2″).

Pengukuran BCD tepat ialah cara paling andal untuk mengenal pasti bebibir. Apabila ragu-ragu, hantar foto dengan pembaris untuk skala.`,
        },
      ],
      productLinks: [
        { name: "Kelengkapan Hidraulik (termasuk Bebibir SAE)", slug: "hydraulic-fittings", reason: "Kelengkapan bebibir SAE dalam semua saiz, Code 61 dan Code 62" },
        { name: "Hos Hidraulik (R13 / 4SH)", slug: "hydraulic-hose", reason: "Hos tekanan tinggi untuk sistem sambungan bebibir" },
        { name: "Cincin-O & Pengedap", slug: "o-rings-seals", reason: "Cincin-O bebibir gantian" },
      ],
      bottomCta: {
        title: "Perlukan kelengkapan bebibir SAE?",
        desc: "Beritahu kami saiz bebibir, kod tekanan (atau ukur BCD), dan kami akan beri sebut harga bebibir, cincin-O dan bolt yang betul.",
        subject: "Hai Terra Hose, saya perlukan kelengkapan bebibir SAE. Saiz: [saiz], Code 61 atau 62: [jika diketahui]. Boleh tolong?",
      },
    },
  },

  "crimping-guide": {
    en: {
      tag: "Technical Guide",
      title: "Crimping Guide",
      tagline: "Get the Crimp Right Every Time",
      description: "The complete guide to hydraulic hose crimping: correct crimp diameter, ferrule selection, skive vs no-skive, crimp measurement, and common mistakes that cause leaks.",
      identificationTitle: "How to Crimp Hydraulic Hose",
      identificationDesc: "Correct crimping is critical for a leak-free, safe hose assembly. Follow these steps in order.",
      identSteps: [
        { step: 1, title: "Select the Correct Ferrule and Fitting", description: "The ferrule (outer sleeve) and fitting (insert) must match the hose type and dash size. Using the wrong ferrule is a common cause of blow-offs. Match: hose type (R1AT/R2AT/4SP/4SH) + dash size + skive or no-skive." },
        { step: 2, title: "Cut the Hose Cleanly", description: "Use a proper hose cutting machine or fine-tooth saw. A clean, square cut is essential. A jagged or angled cut prevents the fitting from seating properly and can introduce debris into the hydraulic system." },
        { step: 3, title: "Skive If Required", description: "Skiving removes the outer cover (and sometimes inner tube) at the fitting area. No-skive ferrules don't require this. Skive ferrule: remove the outer cover to expose the wire reinforcement. No-skive ferrule: crimp directly over the cover. Check which type your ferrule requires." },
        { step: 4, title: "Mark the Insertion Depth", description: "Mark the hose where the fitting insert will fully seat. Push the fitting insert into the hose until it stops — the fitting must be fully inserted so the ferrule crimps over the correct area. Incomplete insertion is a common cause of leaks." },
        { step: 5, title: "Crimp with the Correct Die Set", description: "Select the die set for your hose and fitting. The die closes to a specific diameter — this is the crimp diameter. Use the manufacturer's crimp chart for the exact crimp diameter for your hose-fitting combination. Never guess." },
        { step: 6, title: "Verify the Crimp Diameter", description: "After crimping, measure the ferrule OD at the crimp point with a caliper (or crimp gauge). Compare against the manufacturer's specification. If it's outside tolerance, adjust the die and re-crimp on a new assembly. Record the measurement." },
      ],
      specs: [
        { label: "R1AT / 1SN Crimp", value: "Single wire braid. Ferrule crimped directly over braid (skive) or cover (no-skive). Typical crimp OD for -6 (3/8″): ~25-27mm." },
        { label: "R2AT / 2SN Crimp", value: "Double wire braid. Requires higher crimp force. Crimp OD slightly larger than R1AT for same dash size." },
        { label: "4SP / 4SH Crimp", value: "Four spiral wire. Very stiff — needs heavy-duty die sets. Crimp diameter is critical; too loose causes blow-off." },
        { label: "R13 Crimp", value: "Six spiral wire. Highest pressure. Requires dedicated crimp settings. Do not interchange with 4SH settings." },
        { label: "Skive vs No-Skive", value: "Skive: cover removed before crimp. No-skive: crimp over cover. Ferrule type determines method." },
        { label: "Crimp Diameter Tolerance", value: "Typically ±0.1mm to ±0.2mm. Beyond tolerance = leak or blow-off risk." },
        { label: "Measurement Tools", value: "Digital caliper or crimp gauge. Measure ferrule OD at the crimp point." },
        { label: "Crimp Chart Source", value: "Hose manufacturer's data sheet or crimp chart (per hose type and dash size)." },
      ],
      sections: [
        {
          title: "Why Crimp Diameter Matters",
          content: `The crimp diameter is the single most important parameter in hose assembly. Here's what happens when it's wrong:

Too tight (under-crimped diameter):
- The ferrule bites too deep into the hose cover and reinforcement
- The wire reinforcement can be damaged or cut
- The hose may fail prematurely at the crimp point
- The inner tube may be crushed, restricting flow

Too loose (over-crimped diameter):
- The ferrule doesn't grip the hose sufficiently
- Under pressure, the fitting can blow off the hose
- This is a serious safety hazard

Correct crimp diameter:
- The ferrule grips the hose cover and reinforcement securely
- The inner tube is not crushed
- The assembly retains full working pressure with a safety margin

Always use the manufacturer's crimp chart. Crimp diameter varies by hose type (R1AT vs R2AT vs 4SP), dash size, and ferrule type. A crimp diameter that works for R1AT may be wrong for R2AT even at the same dash size.`,
        },
        {
          title: "Common Crimping Mistakes",
          content: `1. Using the wrong die set: Each hose-ferrule combination needs the correct die. Using the wrong die produces the wrong crimp diameter.

2. Not verifying with a caliper: Visual inspection is not enough. Always measure the crimp diameter.

3. Incomplete fitting insertion: If the fitting insert isn't fully seated, the ferrule crimps over the wrong area — leaks result.

4. Mixing skive and no-skive: A skive ferrule over a no-skive hose (or vice versa) produces an unreliable crimp.

5. Ignoring the crimp chart: Guessing the crimp diameter is dangerous. Always reference the manufacturer's chart.

6. Crimping over a dirty hose: Debris and contaminants in the hose end up in the hydraulic system.

If you're unsure about crimping, bring your hose to us — we crimp using calibrated equipment and manufacturer-specified settings.`,
        },
      ],
      productLinks: [
        { name: "Hose Crimping Service", slug: "hose-crimping", reason: "We crimp your hose with calibrated equipment and correct settings" },
        { name: "Hydraulic Hose Assembly", slug: "hydraulic-hose-assembly", reason: "Complete assembly from hose cutting to crimping" },
        { name: "Ferrules (Crimping Sleeves)", slug: "ferrules", reason: "Correct ferrule for your hose type and dash size" },
      ],
      bottomCta: {
        title: "Need crimping done right?",
        desc: "Bring us your hose and fittings, or let us supply everything. We crimp with calibrated equipment and verify every assembly.",
        subject: "Hi Terra Hose, I need hose crimping. Hose type: [R1AT/R2AT/4SP], size: [dash size]. Can you help?",
      },
    },
    zh: {
      tag: "技术指南",
      title: "压接指南",
      tagline: "每次压接都一次到位",
      description: "液压软管压接完整指南：正确的压接直径、套筒选择、剥胶 vs 免剥胶、压接测量，以及导致泄漏的常见错误。",
      identificationTitle: "如何压接液压软管",
      identificationDesc: "正确的压接对无泄漏、安全的软管总成至关重要。按顺序执行以下步骤。",
      identSteps: [
        { step: 1, title: "选择正确的套筒与接头", description: "套筒（外圈）与接头（芯子）必须匹配软管类型与 Dash 尺寸。用错套筒是脱落（blow-off）的常见原因。匹配：软管类型（R1AT/R2AT/4SP/4SH）+ Dash 尺寸 + 剥胶或免剥胶。" },
        { step: 2, title: "干净切割软管", description: "使用专用切管机或细齿锯。干净、垂直的切口至关重要。锯齿状或斜切口会导致接头无法正确就位，并可能把碎屑带入液压系统。" },
        { step: 3, title: "如需则剥胶", description: "剥胶是去除接头区域的软管外胶层（有时含内胶层）。免剥胶套筒无需此步骤。剥胶套筒：去除外胶层露出钢丝增强层。免剥胶套筒：直接压接在外胶层上。确认套筒需要哪种方式。" },
        { step: 4, title: "标记插入深度", description: "在软管上标记接头芯子完全就位的位置。将接头芯子推入软管直至到底——接头必须完全插入，套筒才能压接在正确区域。插入不到位是泄漏的常见原因。" },
        { step: 5, title: "用正确模具压接", description: "为您的软管与接头选择模具。模具闭合到特定直径——即压接直径。使用厂商压接表查软管-接头组合的精确压接直径。切勿猜测。" },
        { step: 6, title: "核验压接直径", description: "压接后用卡尺（或压接量规）测量压接点处套筒外径。对照厂商规格。若超出公差，调整模具并在新总成上重新压接。记录测量值。" },
      ],
      specs: [
        { label: "R1AT / 1SN 压接", value: "单层钢丝编织。套筒直接压接在编织层（剥胶）或外胶层（免剥胶）上。-6（3/8″）典型压接外径：约 25-27mm。" },
        { label: "R2AT / 2SN 压接", value: "双层钢丝编织。需更高压接力。同 Dash 尺寸下压接外径略大于 R1AT。" },
        { label: "4SP / 4SH 压接", value: "四层钢丝缠绕。非常硬——需重型模具。压接直径关键；过松会导致脱落。" },
        { label: "R13 压接", value: "六层钢丝缠绕。压力最高。需专用压接设置。不可与 4SH 设置互换。" },
        { label: "剥胶 vs 免剥胶", value: "剥胶：压接前去除外胶层。免剥胶：直接压接在外胶层上。套筒类型决定方式。" },
        { label: "压接直径公差", value: "通常 ±0.1mm 至 ±0.2mm。超出公差 = 泄漏或脱落风险。" },
        { label: "测量工具", value: "数显卡尺或压接量规。测量压接点处套筒外径。" },
        { label: "压接表来源", value: "软管厂商数据表或压接表（按软管类型与 Dash 尺寸）。" },
      ],
      sections: [
        {
          title: "为何压接直径如此重要",
          content: `压接直径是软管总成中最重要的参数。压接不当的后果如下：

过紧（压接直径偏小）：
- 套筒咬入软管外胶层和增强层过深
- 钢丝增强层可能受损或被切断
- 软管可能在压接点过早失效
- 内胶层可能被压溃，限制流量

过松（压接直径偏大）：
- 套筒未能充分抱紧软管
- 受压时接头可能从软管脱落
- 这是严重的安全隐患

正确的压接直径：
- 套筒牢固抱紧软管外胶层与增强层
- 内胶层不被压溃
- 总成保持满额工作压力并留有安全余量

务必使用厂商压接表。压接直径随软管类型（R1AT vs R2AT vs 4SP）、Dash 尺寸和套筒类型而异。适用于 R1AT 的压接直径，即使 Dash 尺寸相同，对 R2AT 也可能是错误的。`,
        },
        {
          title: "常见压接错误",
          content: `1. 用错模具：每种软管-套筒组合都需要正确模具。用错模具会产生错误的压接直径。

2. 不用卡尺核验：目视检查不够。务必测量压接直径。

3. 接头插入不到位：若接头芯子未完全就位，套筒会压接在错误区域——导致泄漏。

4. 剥胶与免剥胶混用：剥胶套筒用在免剥胶软管上（或反之）会产生不可靠的压接。

5. 忽略压接表：猜测压接直径很危险。务必参照厂商表。

6. 压接脏软管：软管内的碎屑和污染物最终会进入液压系统。

若对压接没把握，把软管带给我们——我们使用校准设备和厂商指定设置进行压接。`,
        },
      ],
      productLinks: [
        { name: "软管压接服务", slug: "hose-crimping", reason: "我们用校准设备和正确设置为您压接软管" },
        { name: "液压软管总成", slug: "hydraulic-hose-assembly", reason: "从软管切割到压接的完整总成" },
        { name: "套筒（压接套筒）", slug: "ferrules", reason: "为您的软管类型和 Dash 尺寸匹配正确的套筒" },
      ],
      bottomCta: {
        title: "需要把压接做对？",
        desc: "把软管和接头带来，或让我们全套供应。我们用校准设备压接并核验每个总成。",
        subject: "你好 Terra Hose，我需要软管压接。软管类型：[R1AT/R2AT/4SP]，尺寸：[Dash 尺寸]。能帮忙吗？",
      },
    },
    ms: {
      tag: "Panduan Teknikal",
      title: "Panduan Pengelim",
      tagline: "Dapatkan Pengelim Betul Setiap Kali",
      description: "Panduan lengkap pengelim hos hidraulik: diameter pengelim betul, pemilihan ferul, skive vs tanpa skive, pengukuran pengelim, dan kesilapan biasa yang menyebabkan kebocoran.",
      identificationTitle: "Cara Mengemil Hos Hidraulik",
      identificationDesc: "Pengelim yang betul adalah kritikal untuk pemasangan hos bebas bocor dan selamat. Ikuti langkah ini mengikut urutan.",
      identSteps: [
        { step: 1, title: "Pilih Ferul dan Kelengkapan yang Betul", description: "Ferul (sarung luar) dan kelengkapan (insert) mesti padan dengan jenis hos dan saiz dash. Menggunakan ferul yang salah ialah punca biasa tertanggal. Padankan: jenis hos (R1AT/R2AT/4SP/4SH) + saiz dash + skive atau tanpa skive." },
        { step: 2, title: "Potong Hos dengan Bersih", description: "Guna mesin pemotong hos yang betul atau gergaji gigi halus. Potongan bersih dan segi tepat adalah penting. Potongan bergerigi atau condong menghalang kelengkapan duduk betul dan boleh membawa serpihan ke dalam sistem hidraulik." },
        { step: 3, title: "Skive Jika Diperlukan", description: "Skiving membuang lapisan luar (dan kadangkala tiub dalam) pada kawasan kelengkapan. Ferul tanpa skive tidak memerlukan ini. Ferul skive: buang lapisan luar untuk dedahkan tetulang dawai. Ferul tanpa skive: kemil terus atas lapisan. Periksa jenis yang diperlukan ferul anda." },
        { step: 4, title: "Tanda Kedalaman Pemasukan", description: "Tanda hos di mana insert kelengkapan akan duduk sepenuhnya. Tolak insert kelengkapan ke dalam hos sehingga berhenti — kelengkapan mesti dimasukkan sepenuhnya supaya ferul dikemil atas kawasan betul. Pemasukan tidak lengkap ialah punca biasa kebocoran." },
        { step: 5, title: "Kemil dengan Set Die yang Betul", description: "Pilih set die untuk hos dan kelengkapan anda. Die menutup kepada diameter tertentu — ini ialah diameter pengelim. Guna carta pengelim pengeluar untuk diameter pengelim tepat bagi kombinasi hos-kelengkapan anda. Jangan sekali-kali meneka." },
        { step: 6, title: "Sahkan Diameter Pengelim", description: "Selepas mengemil, ukur OD ferul pada titik pengelim dengan angkup (atau tolok pengelim). Bandingkan dengan spesifikasi pengeluar. Jika di luar toleransi, laraskan die dan kemil semula pada pemasangan baharu. Rekod ukuran." },
      ],
      specs: [
        { label: "Pengelim R1AT / 1SN", value: "Jalinan dawai tunggal. Ferul dikemil terus atas jalinan (skive) atau lapisan (tanpa skive). OD pengelim biasa untuk -6 (3/8″): ~25-27mm." },
        { label: "Pengelim R2AT / 2SN", value: "Jalinan dawai berganda. Memerlukan daya pengelim lebih tinggi. OD pengelim sedikit lebih besar daripada R1AT untuk saiz dash sama." },
        { label: "Pengelim 4SP / 4SH", value: "Empat lingkaran dawai. Sangat keras — perlu set die tugas berat. Diameter pengelim kritikal; terlalu longgar menyebabkan tertanggal." },
        { label: "Pengelim R13", value: "Enam lingkaran dawai. Tekanan tertinggi. Memerlukan tetapan pengelim khusus. Jangan tukar ganti dengan tetapan 4SH." },
        { label: "Skive vs Tanpa Skive", value: "Skive: lapisan dibuang sebelum kemil. Tanpa skive: kemil atas lapisan. Jenis ferul menentukan kaedah." },
        { label: "Toleransi Diameter Pengelim", value: "Biasanya ±0.1mm hingga ±0.2mm. Melebihi toleransi = risiko bocor atau tertanggal." },
        { label: "Alat Pengukuran", value: "Angkup digital atau tolok pengelim. Ukur OD ferul pada titik pengelim." },
        { label: "Sumber Carta Pengelim", value: "Helaian data pengeluar hos atau carta pengelim (mengikut jenis hos dan saiz dash)." },
      ],
      sections: [
        {
          title: "Kenapa Diameter Pengelim Penting",
          content: `Diameter pengelim ialah parameter paling penting dalam pemasangan hos. Inilah yang berlaku apabila ia salah:

Terlalu ketat (diameter pengelim kurang):
- Ferul menggigit terlalu dalam ke dalam lapisan hos dan tetulang
- Tetulang dawai boleh rosak atau terpotong
- Hos mungkin gagal awal pada titik pengelim
- Tiub dalam mungkin terhimpit, menyekat aliran

Terlalu longgar (diameter pengelim lebih):
- Ferul tidak mencengkam hos secukupnya
- Di bawah tekanan, kelengkapan boleh tertanggal daripada hos
- Ini ialah bahaya keselamatan yang serius

Diameter pengelim yang betul:
- Ferul mencengkam lapisan hos dan tetulang dengan selamat
- Tiub dalam tidak terhimpit
- Pemasangan mengekalkan tekanan kerja penuh dengan margin keselamatan

Sentiasa guna carta pengelim pengeluar. Diameter pengelim berbeza mengikut jenis hos (R1AT vs R2AT vs 4SP), saiz dash dan jenis ferul. Diameter pengelim yang sesuai untuk R1AT mungkin salah untuk R2AT walaupun pada saiz dash sama.`,
        },
        {
          title: "Kesilapan Pengelim Biasa",
          content: `1. Menggunakan set die yang salah: Setiap kombinasi hos-ferul perlukan die yang betul. Menggunakan die salah menghasilkan diameter pengelim yang salah.

2. Tidak sahkan dengan angkup: Pemeriksaan visual tidak mencukupi. Sentiasa ukur diameter pengelim.

3. Pemasukan kelengkapan tidak lengkap: Jika insert kelengkapan tidak duduk sepenuhnya, ferul dikemil atas kawasan salah — kebocoran berlaku.

4. Mencampur skive dan tanpa skive: Ferul skive atas hos tanpa skive (atau sebaliknya) menghasilkan pengelim tidak boleh diharap.

5. Abaikan carta pengelim: Meneka diameter pengelim adalah berbahaya. Sentiasa rujuk carta pengeluar.

6. Mengemil atas hos kotor: Serpihan dan pencemar dalam hos berakhir dalam sistem hidraulik.

Jika anda tak pasti tentang pengelim, bawa hos anda kepada kami — kami mengemil menggunakan peralatan yang ditentukur dan tetapan yang ditentukan pengeluar.`,
        },
      ],
      productLinks: [
        { name: "Perkhidmatan Pengelim Hos", slug: "hose-crimping", reason: "Kami mengemil hos anda dengan peralatan ditentukur dan tetapan betul" },
        { name: "Pemasangan Hos Hidraulik", slug: "hydraulic-hose-assembly", reason: "Pemasangan lengkap dari pemotongan hos hingga pengelim" },
        { name: "Ferul (Sarung Pengelim)", slug: "ferrules", reason: "Ferul betul untuk jenis hos dan saiz dash anda" },
      ],
      bottomCta: {
        title: "Perlukan pengelim yang betul?",
        desc: "Bawa hos dan kelengkapan anda, atau biar kami bekalkan semuanya. Kami mengemil dengan peralatan ditentukur dan sahkan setiap pemasangan.",
        subject: "Hai Terra Hose, saya perlukan pengelim hos. Jenis hos: [R1AT/R2AT/4SP], saiz: [saiz dash]. Boleh tolong?",
      },
    },
  },
};
