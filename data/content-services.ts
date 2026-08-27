import type { Locale } from "@/lib/i18n";

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceContent {
  tag: string;
  title: string;
  tagline: string;
  description: string;
  process: ServiceStep[];
  features: string[];
  applications: string[];
  notes: string[];
  whatsappSubject: string;
}

export const serviceContent: Record<string, Record<Locale, ServiceContent>> = {
  "hydraulic-hose-assembly": {
    en: {
      tag: "Our Services",
      title: "Hydraulic Hose Assembly",
      tagline: "Core Service",
      description: "Custom hydraulic hose assembly: we cut hose to your exact length, attach fittings (crimped), and deliver a ready-to-install hydraulic line.",
      process: [
        { step: 1, title: "Identify the hose specification", description: "Tell us the hose size (e.g., 1/2 inch), length, working pressure, and equipment model. If you don't know, send a photo and we'll identify it." },
        { step: 2, title: "Select the correct fittings", description: "We match the fittings to your equipment's port thread type: BSP, JIS, ORFS, or SAE flange. Correct fitting selection is critical — we handle this for you." },
        { step: 3, title: "Cut and assemble", description: "The hose is cut to length, fittings are attached, and the assembly is crimped using precision crimping equipment with correct crimp diameter." },
        { step: 4, title: "Quality check", description: "Every assembly is inspected for correct crimp, fitting alignment, and visual integrity before delivery." },
      ],
      features: [
        "Custom length — no standard cut-length restrictions",
        "Wide fitting range: BSP, JIS, ORFS, SAE flange",
        "SAE R1AT, R2AT, 4SP, 4SH, R13 hose in stock",
        "One-off order or bulk — no minimum",
        "Same-day assembly for common sizes",
        "Ferrules and O-rings included in fitting price",
      ],
      applications: [
        "Excavator hydraulic lines",
        "Truck hydraulic systems",
        "Agricultural equipment (tractors, harvesters)",
        "Industrial presses and machinery",
        "Mining equipment hydraulic circuits",
        "Marine hydraulic systems",
      ],
      notes: [
        "The most important information: hose size (ID), length needed, and fitting thread type on both ends.",
        "If the equipment uses JIS fittings, we need to know — JIS and BSP look similar but are not interchangeable.",
        "WhatsApp us a photo of the old hose or the equipment port — we can usually identify the right specification within minutes.",
      ],
      whatsappSubject: "Hi Terra Hose, I need a custom hydraulic hose assembly. Can you help?",
    },
    zh: {
      tag: "我们的服务",
      title: "液压软管总成",
      tagline: "核心服务",
      description: "定制液压软管总成：按您的精确长度切割软管、装配接头（压接），交付即可安装的液压管路。",
      process: [
        { step: 1, title: "确认软管规格", description: "告诉我们软管尺寸（如 1/2 英寸）、长度、工作压力和设备型号。若不清楚，发张照片我们帮您识别。" },
        { step: 2, title: "选择正确的接头", description: "我们根据设备端口的螺纹类型匹配接头：BSP、JIS、ORFS 或 SAE 法兰。正确的接头选择至关重要——我们为您把关。" },
        { step: 3, title: "切割与装配", description: "软管按长度切割、装配接头，并使用精密压接设备以正确压接直径完成压接。" },
        { step: 4, title: "质检", description: "每个总成在交付前都经过压接、接头对位与外观完整性检查。" },
      ],
      features: [
        "定长定制——无标准切割长度限制",
        "接头种类齐全：BSP、JIS、ORFS、SAE 法兰",
        "现货 SAE R1AT、R2AT、4SP、4SH、R13 软管",
        "单件或批量——无最低起订量",
        "常用尺寸当天完成总成",
        "套筒与 O 型圈已含在接头价格内",
      ],
      applications: [
        "挖掘机液压管路",
        "卡车液压系统",
        "农业设备（拖拉机、收割机）",
        "工业压机与机械",
        "矿山设备液压回路",
        "船舶液压系统",
      ],
      notes: [
        "最关键的信息：软管尺寸（内径）、所需长度、两端接头螺纹类型。",
        "若设备使用 JIS 接头请务必告知——JIS 与 BSP 外观相似但不能互换。",
        "把旧软管或设备端口的照片发到 WhatsApp，我们通常几分钟内就能确认正确规格。",
      ],
      whatsappSubject: "你好 Terra Hose，我需要定制液压软管总成，能帮忙吗？",
    },
    ms: {
      tag: "Perkhidmatan Kami",
      title: "Pemasangan Hos Hidraulik",
      tagline: "Perkhidmatan Teras",
      description: "Pemasangan hos hidraulik tersuai: kami potong hos mengikut panjang tepat anda, pasang kelengkapan (dikemil), dan hantar talian hidraulik sedia dipasang.",
      process: [
        { step: 1, title: "Kenal pasti spesifikasi hos", description: "Beritahu kami saiz hos (cth. 1/2 inci), panjang, tekanan kerja, dan model peralatan. Jika tak tahu, hantar foto dan kami akan kenal pastinya." },
        { step: 2, title: "Pilih kelengkapan yang betul", description: "Kami padankan kelengkapan dengan jenis benang port peralatan anda: BSP, JIS, ORFS atau bebibir SAE. Pemilihan kelengkapan yang betul adalah kritikal — kami uruskan untuk anda." },
        { step: 3, title: "Potong dan pasang", description: "Hos dipotong mengikut panjang, kelengkapan dipasang, dan pemasangan dikemil menggunakan peralatan pengelim ketepatan dengan diameter pengelim yang betul." },
        { step: 4, title: "Pemeriksaan kualiti", description: "Setiap pemasangan diperiksa untuk pengelim betul, penjajaran kelengkapan dan integriti visual sebelum penghantaran." },
      ],
      features: [
        "Panjang tersuai — tiada sekatan panjang potong standard",
        "Julat kelengkapan luas: BSP, JIS, ORFS, bebibir SAE",
        "Hos SAE R1AT, R2AT, 4SP, 4SH, R13 dalam stok",
        "Pesanan sekali atau pukal — tiada minimum",
        "Pemasangan hari sama untuk saiz biasa",
        "Ferul dan cincin-O termasuk dalam harga kelengkapan",
      ],
      applications: [
        "Talian hidraulik jengkaut",
        "Sistem hidraulik lori",
        "Peralatan pertanian (traktor, penuai)",
        "Penekan dan jentera industri",
        "Litar hidraulik peralatan perlombongan",
        "Sistem hidraulik marin",
      ],
      notes: [
        "Maklumat paling penting: saiz hos (ID), panjang diperlukan, dan jenis benang kelengkapan pada kedua-dua hujung.",
        "Jika peralatan menggunakan kelengkapan JIS, kami perlu tahu — JIS dan BSP kelihatan serupa tetapi tidak boleh ditukar ganti.",
        "WhatsApp kami foto hos lama atau port peralatan — kami biasanya boleh kenal pasti spesifikasi betul dalam beberapa minit.",
      ],
      whatsappSubject: "Hai Terra Hose, saya perlukan pemasangan hos hidraulik tersuai. Boleh tolong?",
    },
  },

  "hose-crimping": {
    en: {
      tag: "Our Services",
      title: "Hose Crimping",
      tagline: "Precision Assembly",
      description: "Professional hydraulic hose crimping with calibrated equipment. Correct crimp diameter ensures leak-free, safe hydraulic connections.",
      process: [
        { step: 1, title: "Check the hose and fitting specification", description: "We verify the hose type (R1AT, 4SP, etc.) and fitting to determine the correct ferrule and crimp diameter." },
        { step: 2, title: "Set up the crimping machine", description: "Crimp diameter is set using the correct die set and manufacturer crimp chart for the specific hose-fitting combination." },
        { step: 3, title: "Crimp the ferrule", description: "The ferrule is placed over the hose, fittings inserted, and the assembly is crimped to the specified diameter." },
        { step: 4, title: "Verify crimp quality", description: "We check the crimp diameter with a caliper and inspect for defects before releasing the assembly." },
      ],
      features: [
        "Calibrated crimping equipment with correct die sets",
        "Crimp charts for all major hose manufacturers",
        "R1AT/R2AT, 4SP/4SH, R13 hose crimping",
        "Correct ferrule-to-hose matching",
        "Crimp diameter verification",
        "Skive and no-skive ferrule process",
      ],
      applications: [
        "Hydraulic hose assemblies for all equipment types",
        "Repair assemblies with new ferrules",
        "Custom hose fabrication",
        "Aftermarket hose replacement",
      ],
      notes: [
        "Incorrect crimp diameter is the most common cause of hydraulic hose assembly failures (leaks or blow-offs). We use manufacturer-specified crimp settings.",
        "Different hose brands may have slightly different crimp diameters even for the same size — we adjust accordingly.",
        "We crimp fittings from other suppliers too — bring your fittings and hose to us.",
      ],
      whatsappSubject: "Hi Terra Hose, I need hose crimping service. Do you crimp 1/2 inch hydraulic hose?",
    },
    zh: {
      tag: "我们的服务",
      title: "软管压接",
      tagline: "精密装配",
      description: "使用校准设备的专业液压软管压接。正确的压接直径确保无泄漏、安全的液压连接。",
      process: [
        { step: 1, title: "核对软管与接头规格", description: "我们确认软管类型（R1AT、4SP 等）与接头，以确定正确的套筒和压接直径。" },
        { step: 2, title: "设置压接机", description: "针对特定软管-接头组合，使用正确的模具和厂商压接表设置压接直径。" },
        { step: 3, title: "压接套筒", description: "套筒套在软管上、插入接头，将总成压接到指定直径。" },
        { step: 4, title: "核验压接质量", description: "用卡尺检查压接直径并检查缺陷后才交付总成。" },
      ],
      features: [
        "校准的压接设备与正确模具",
        "各大软管厂商压接表",
        "R1AT/R2AT、4SP/4SH、R13 软管压接",
        "正确的套筒-软管匹配",
        "压接直径核验",
        "剥胶与免剥胶套筒工艺",
      ],
      applications: [
        "各类设备的液压软管总成",
        "新套筒的维修总成",
        "定制软管制作",
        "售后软管更换",
      ],
      notes: [
        "压接直径错误是液压软管总成失效（泄漏或脱落）最常见的原因。我们使用厂商指定的压接设置。",
        "即使是相同尺寸，不同软管品牌的压接直径也可能略有差异——我们相应调整。",
        "我们也压接其他供应商的接头——把您的接头和软管带来即可。",
      ],
      whatsappSubject: "你好 Terra Hose，我需要软管压接服务，你们压接 1/2 英寸液压软管吗？",
    },
    ms: {
      tag: "Perkhidmatan Kami",
      title: "Pengelim Hos",
      tagline: "Pemasangan Ketepatan",
      description: "Pengelim hos hidraulik profesional dengan peralatan yang ditentukur. Diameter pengelim yang betul memastikan sambungan hidraulik bebas bocor dan selamat.",
      process: [
        { step: 1, title: "Periksa spesifikasi hos dan kelengkapan", description: "Kami sahkan jenis hos (R1AT, 4SP, dsb.) dan kelengkapan untuk menentukan ferul dan diameter pengelim yang betul." },
        { step: 2, title: "Sediakan mesin pengelim", description: "Diameter pengelim ditetapkan menggunakan set die yang betul dan carta pengelim pengeluar untuk kombinasi hos-kelengkapan tertentu." },
        { step: 3, title: "Kemil ferul", description: "Ferul diletakkan pada hos, kelengkapan dimasukkan, dan pemasangan dikemil kepada diameter yang ditentukan." },
        { step: 4, title: "Sahkan kualiti pengelim", description: "Kami periksa diameter pengelim dengan angkup dan memeriksa kecacatan sebelum melepaskan pemasangan." },
      ],
      features: [
        "Peralatan pengelim yang ditentukur dengan set die betul",
        "Carta pengelim untuk semua pengeluar hos utama",
        "Pengelim hos R1AT/R2AT, 4SP/4SH, R13",
        "Padanan ferul-ke-hos yang betul",
        "Pengesahan diameter pengelim",
        "Proses ferul skive dan tanpa skive",
      ],
      applications: [
        "Pemasangan hos hidraulik untuk semua jenis peralatan",
        "Pemasangan pembaikan dengan ferul baharu",
        "Pembuatan hos tersuai",
        "Penggantian hos pasaran ganti",
      ],
      notes: [
        "Diameter pengelim yang salah ialah punca paling biasa kegagalan pemasangan hos hidraulik (bocor atau tertanggal). Kami gunakan tetapan pengelim yang ditetapkan pengeluar.",
        "Jenama hos berbeza mungkin mempunyai diameter pengelim yang sedikit berbeza walaupun untuk saiz sama — kami laraskan sewajarnya.",
        "Kami juga mengemil kelengkapan daripada pembekal lain — bawa kelengkapan dan hos anda kepada kami.",
      ],
      whatsappSubject: "Hai Terra Hose, saya perlukan perkhidmatan pengelim hos. Adakah anda mengemil hos hidraulik 1/2 inci?",
    },
  },

  "hose-replacement": {
    en: {
      tag: "Our Services",
      title: "Hose Replacement",
      tagline: "Fast Turnaround",
      description: "Quick hydraulic hose replacement service. When a hose blows or wears out, we get you back running with minimal downtime.",
      process: [
        { step: 1, title: "Identify the failed hose", description: "Tell us or show us the damaged hose — size, length, and fitting types. If the fittings are still intact on the equipment, we can often use them as a template." },
        { step: 2, title: "Quote and confirmation", description: "We give you the price for the replacement assembly. No surprises." },
        { step: 3, title: "Assembly", description: "We cut the new hose to the exact length, crimp the fittings, and inspect the assembly." },
        { step: 4, title: "Collection or delivery", description: "Pick up from our workshop in Kulai, or arrange delivery (subject to location)." },
      ],
      features: [
        "Same-day service for common sizes (R1AT 1/2\", 3/4\", etc.)",
        "No minimum order — single hose replacement welcome",
        "Can match the original hose specification or recommend an upgrade",
        "Also replaces fittings if damaged",
        "Workshop in Kulai, Johor",
      ],
      applications: [
        "Excavator hose replacement (Hitachi, CAT, Komatsu, Volvo, Kobelco)",
        "Truck hydraulic line replacement",
        "Agricultural machinery hose swap",
        "Industrial equipment hose change",
      ],
      notes: [
        "For emergency situations, WhatsApp us a photo immediately — we can often have the assembly ready before you arrive.",
        "We recommend replacing both the hose and any damaged O-rings at the same time to avoid repeat visits.",
      ],
      whatsappSubject: "Hi Terra Hose, my hydraulic hose has blown. I need a replacement urgently. Can you help?",
    },
    zh: {
      tag: "我们的服务",
      title: "软管更换",
      tagline: "快速交付",
      description: "快速液压软管更换服务。软管爆裂或磨损时，我们让您以最短停机时间恢复运转。",
      process: [
        { step: 1, title: "确认失效软管", description: "告诉我们或展示损坏的软管——尺寸、长度和接头类型。若设备上的接头完好，我们常可将其作为模板。" },
        { step: 2, title: "报价与确认", description: "我们给出更换总成的价格，无任何隐藏费用。" },
        { step: 3, title: "装配", description: "新软管按精确长度切割、压接接头并检查总成。" },
        { step: 4, title: "自取或配送", description: "到我们古来的车间自取，或安排配送（视地区而定）。" },
      ],
      features: [
        "常用尺寸当天服务（R1AT 1/2\"、3/4\" 等）",
        "无最低起订量——单根软管更换也欢迎",
        "可匹配原软管规格或推荐升级",
        "接头损坏也可一并更换",
        "车间位于柔佛古来",
      ],
      applications: [
        "挖掘机软管更换（日立、卡特、小松、沃尔沃、神钢）",
        "卡车液压管路更换",
        "农业机械软管更换",
        "工业设备软管更换",
      ],
      notes: [
        "紧急情况请立即发照片到 WhatsApp——我们常能在您到达前准备好总成。",
        "建议同时更换软管和损坏的 O 型圈，避免重复跑一趟。",
      ],
      whatsappSubject: "你好 Terra Hose，我的液压软管爆了，急需更换，能帮忙吗？",
    },
    ms: {
      tag: "Perkhidmatan Kami",
      title: "Penggantian Hos",
      tagline: "Pemulihan Pantas",
      description: "Perkhidmatan penggantian hos hidraulik pantas. Apabila hos pecah atau haus, kami kembalikan anda beroperasi dengan masa henti minimum.",
      process: [
        { step: 1, title: "Kenal pasti hos yang gagal", description: "Beritahu atau tunjukkan hos yang rosak — saiz, panjang dan jenis kelengkapan. Jika kelengkapan masih utuh pada peralatan, kami selalunya boleh gunakannya sebagai templat." },
        { step: 2, title: "Sebut harga dan pengesahan", description: "Kami beri harga untuk pemasangan penggantian. Tiada kejutan." },
        { step: 3, title: "Pemasangan", description: "Kami potong hos baharu mengikut panjang tepat, kemil kelengkapan dan periksa pemasangan." },
        { step: 4, title: "Ambil sendiri atau penghantaran", description: "Ambil di bengkel kami di Kulai, atau atur penghantaran (tertakluk kepada lokasi)." },
      ],
      features: [
        "Perkhidmatan hari sama untuk saiz biasa (R1AT 1/2\", 3/4\", dsb.)",
        "Tiada pesanan minimum — penggantian satu hos dialu-alukan",
        "Boleh padan spesifikasi hos asal atau syorkan peningkatan",
        "Juga menggantikan kelengkapan jika rosak",
        "Bengkel di Kulai, Johor",
      ],
      applications: [
        "Penggantian hos jengkaut (Hitachi, CAT, Komatsu, Volvo, Kobelco)",
        "Penggantian talian hidraulik lori",
        "Penukaran hos jentera pertanian",
        "Penukaran hos peralatan industri",
      ],
      notes: [
        "Untuk kecemasan, WhatsApp kami foto segera — kami selalunya boleh siapkan pemasangan sebelum anda tiba.",
        "Kami syorkan ganti hos dan mana-mana cincin-O yang rosak pada masa sama untuk elak lawatan berulang.",
      ],
      whatsappSubject: "Hai Terra Hose, hos hidraulik saya telah pecah. Saya perlukan penggantian segera. Boleh tolong?",
    },
  },

  "hydraulic-hose-repair": {
    en: {
      tag: "Our Services",
      title: "Hydraulic Hose Repair",
      tagline: "Workshop Service",
      description: "Hydraulic hose repair at our workshop in Kulai, Johor. Fix leaks, replace damaged sections, re-crimp fittings — often saving the cost of a full replacement.",
      process: [
        { step: 1, title: "Assess the damage", description: "Bring the hose or equipment to our workshop, or send a photo via WhatsApp. We assess whether repair is feasible or if full replacement is needed." },
        { step: 2, title: "Repair or replace", description: "If the hose body is damaged (abrasion, kink), replacement is usually required. If only the fitting is damaged (stripped thread, cracked body), repair may be possible by replacing just the fitting." },
        { step: 3, title: "Complete the work", description: "We repair the hose assembly and pressure-test it if needed before you collect." },
      ],
      features: [
        "Fitting replacement (if fitting thread is damaged but hose body is OK)",
        "Ferrule re-crimping (if the original crimp failed)",
        "O-ring and seal replacement",
        "Ad-hoc repair assessment — we tell you honestly if repair is viable",
      ],
      applications: [
        "Stripped BSP or JIS thread on a fitting",
        "Damaged ferrule from incorrect crimping",
        "Leaking fitting that needs re-seating",
        "Worn O-ring seat on a BSPP fitting",
      ],
      notes: [
        "We give honest advice — if the hose is too worn for repair, we tell you. A repair that fails is more expensive in the long run.",
        "WhatsApp a photo before coming — we can often tell you on the spot if repair is possible.",
      ],
      whatsappSubject: "Hi Terra Hose, I have a hydraulic fitting that seems damaged. Can you repair it?",
    },
    zh: {
      tag: "我们的服务",
      title: "液压软管维修",
      tagline: "车间服务",
      description: "在柔佛古来车间提供液压软管维修。修复泄漏、更换损坏段、重新压接接头——往往省下整根更换的费用。",
      process: [
        { step: 1, title: "评估损坏", description: "把软管或设备带到车间，或通过 WhatsApp 发照片。我们评估是维修可行还是需要整根更换。" },
        { step: 2, title: "维修或更换", description: "若软管管体损坏（磨损、折死），通常需要更换。若仅接头损坏（螺纹滑丝、管体开裂），可仅更换接头完成维修。" },
        { step: 3, title: "完成工作", description: "我们维修软管总成，必要时在您取件前做压力测试。" },
      ],
      features: [
        "接头更换（接头螺纹损坏但管体完好时）",
        "套筒重新压接（原压接失效时）",
        "O 型圈与密封件更换",
        "临时维修评估——我们如实告知维修是否可行",
      ],
      applications: [
        "接头 BSP 或 JIS 螺纹滑丝",
        "压接不当导致的套筒损坏",
        "需要重新对位的泄漏接头",
        "BSPP 接头上磨损的 O 型圈座",
      ],
      notes: [
        "我们如实建议——若软管磨损过度不宜维修，我们会直说。失败的维修长期成本更高。",
        "来之前先发照片到 WhatsApp——我们常能当场判断是否可维修。",
      ],
      whatsappSubject: "你好 Terra Hose，我的液压接头好像坏了，能维修吗？",
    },
    ms: {
      tag: "Perkhidmatan Kami",
      title: "Pembaikan Hos Hidraulik",
      tagline: "Perkhidmatan Bengkel",
      description: "Pembaikan hos hidraulik di bengkel kami di Kulai, Johor. Baiki kebocoran, ganti bahagian rosak, kemil semula kelengkapan — selalunya menjimatkan kos penggantian penuh.",
      process: [
        { step: 1, title: "Nilai kerosakan", description: "Bawa hos atau peralatan ke bengkel kami, atau hantar foto melalui WhatsApp. Kami nilai sama ada pembaikan boleh dilakukan atau penggantian penuh diperlukan." },
        { step: 2, title: "Baiki atau ganti", description: "Jika badan hos rosak (lelasan, lipatan), penggantian biasanya diperlukan. Jika hanya kelengkapan rosak (benang terhakis, badan retak), pembaikan mungkin boleh dilakukan dengan menggantikan kelengkapan sahaja." },
        { step: 3, title: "Siapkan kerja", description: "Kami baiki pemasangan hos dan uji tekanan jika perlu sebelum anda mengambilnya." },
      ],
      features: [
        "Penggantian kelengkapan (jika benang kelengkapan rosak tetapi badan hos OK)",
        "Pengelim semula ferul (jika pengelim asal gagal)",
        "Penggantian cincin-O dan pengedap",
        "Penilaian pembaikan ad-hoc — kami beritahu secara jujur jika pembaikan boleh dilakukan",
      ],
      applications: [
        "Benang BSP atau JIS terhakis pada kelengkapan",
        "Ferul rosak akibat pengelim yang salah",
        "Kelengkapan bocor yang perlu duduk semula",
        "Tempat duduk cincin-O haus pada kelengkapan BSPP",
      ],
      notes: [
        "Kami beri nasihat jujur — jika hos terlalu haus untuk dibaiki, kami beritahu. Pembaikan yang gagal lebih mahal dalam jangka panjang.",
        "WhatsApp foto sebelum datang — kami selalunya boleh beritahu serta-merta jika pembaikan boleh dilakukan.",
      ],
      whatsappSubject: "Hai Terra Hose, saya ada kelengkapan hidraulik yang nampak rosak. Boleh baiki?",
    },
  },

  "custom-hose-assembly": {
    en: {
      tag: "Our Services",
      title: "Custom Hose Assembly",
      tagline: "Non-Standard Applications",
      description: "Custom hydraulic hose assemblies for non-standard applications: special lengths, non-common fitting combinations, or unique pressure/temperature requirements.",
      process: [
        { step: 1, title: "Understand your requirement", description: "Tell us the application — what machine, what function, what pressure, what fluid. The more technical detail you provide, the better we can specify the right hose." },
        { step: 2, title: "Select hose and fittings", description: "We recommend the correct hose specification (e.g., R2AT vs 4SP for the pressure) and fitting types for your specific ports." },
        { step: 3, title: "Custom assembly", description: "Cut to exact length, crimp fittings, inspect, and deliver. For special requirements, we source the right hose from our supplier network." },
        { step: 4, title: "Documentation", description: "We can label the assembly with hose type, date, and your reference number for maintenance records." },
      ],
      features: [
        "Non-standard lengths (very short or very long)",
        "Non-common fitting combinations (e.g., JIS to ORFS elbow)",
        "Special hose types: high-temperature, chemical-resistant, marine-rated",
        "SAE 100 R13 and 4SH for high-pressure applications",
        "Custom labeling and documentation",
        "One-off prototype assemblies",
      ],
      applications: [
        "Non-standard equipment with unique port configurations",
        "Custom machinery OEM builds",
        "Marine hydraulic systems (saltwater-resistant hose and fittings)",
        "High-temperature hydraulic systems (steam, thermal oil)",
        "Food-grade hydraulic lines (special materials required — contact us to discuss)",
      ],
      notes: [
        "For non-standard applications, we may need to source specific hose or fittings — lead time varies.",
        "Tell us the machine model, port thread type, and working pressure — these three pieces of information cover most of what we need to quote.",
        "For chemical applications (phosphate ester, bio-degradable fluids), the hose material needs to be specified carefully — contact us before ordering.",
      ],
      whatsappSubject: "Hi Terra Hose, I need a custom hydraulic hose assembly for a special application. Can you help?",
    },
    zh: {
      tag: "我们的服务",
      title: "定制软管总成",
      tagline: "非标应用",
      description: "面向非标应用的定制液压软管总成：特殊长度、非常规接头组合，或独特的压力/温度要求。",
      process: [
        { step: 1, title: "了解您的需求", description: "告诉我们应用场景——什么机器、什么功能、什么压力、什么流体。您提供的技术细节越多，我们越能指定正确的软管。" },
        { step: 2, title: "选择软管与接头", description: "我们推荐正确的软管规格（如按压力选 R2AT 还是 4SP）和适合您端口的接头类型。" },
        { step: 3, title: "定制装配", description: "按精确长度切割、压接接头、检查并交付。特殊需求我们从供应商网络采购合适的软管。" },
        { step: 4, title: "文档记录", description: "我们可为总成标注软管类型、日期和您的参考编号，便于维护记录。" },
      ],
      features: [
        "非标长度（极短或极长）",
        "非常规接头组合（如 JIS 转 ORFS 弯头）",
        "特殊软管类型：耐高温、耐化学、船舶级",
        "SAE 100 R13 与 4SH 用于高压应用",
        "定制标签与文档",
        "一次性原型总成",
      ],
      applications: [
        "端口配置独特的非标设备",
        "定制机械 OEM 制造",
        "船舶液压系统（耐海水软管与接头）",
        "高温液压系统（蒸汽、导热油）",
        "食品级液压管路（需特殊材质——请联系我们商讨）",
      ],
      notes: [
        "非标应用我们可能需要采购特定软管或接头——交货期视情况而定。",
        "告诉我们机器型号、端口螺纹类型和工作压力——这三项信息已覆盖报价所需的大部分内容。",
        "化学类应用（磷酸酯、可生物降解流体）需谨慎指定软管材质——下单前请联系我们。",
      ],
      whatsappSubject: "你好 Terra Hose，我需要用于特殊应用的定制液压软管总成，能帮忙吗？",
    },
    ms: {
      tag: "Perkhidmatan Kami",
      title: "Pemasangan Hos Tersuai",
      tagline: "Aplikasi Bukan Standard",
      description: "Pemasangan hos hidraulik tersuai untuk aplikasi bukan standard: panjang khas, kombinasi kelengkapan luar biasa, atau keperluan tekanan/suhu unik.",
      process: [
        { step: 1, title: "Fahami keperluan anda", description: "Beritahu kami aplikasinya — mesin apa, fungsi apa, tekanan apa, bendalir apa. Lebih banyak butiran teknikal anda berikan, lebih baik kami boleh tentukan hos yang betul." },
        { step: 2, title: "Pilih hos dan kelengkapan", description: "Kami syorkan spesifikasi hos yang betul (cth. R2AT vs 4SP mengikut tekanan) dan jenis kelengkapan untuk port khusus anda." },
        { step: 3, title: "Pemasangan tersuai", description: "Potong mengikut panjang tepat, kemil kelengkapan, periksa dan hantar. Untuk keperluan khas, kami dapatkan hos yang betul daripada rangkaian pembekal kami." },
        { step: 4, title: "Dokumentasi", description: "Kami boleh label pemasangan dengan jenis hos, tarikh dan nombor rujukan anda untuk rekod penyelenggaraan." },
      ],
      features: [
        "Panjang bukan standard (sangat pendek atau sangat panjang)",
        "Kombinasi kelengkapan luar biasa (cth. siku JIS ke ORFS)",
        "Jenis hos khas: suhu tinggi, tahan kimia, gred marin",
        "SAE 100 R13 dan 4SH untuk aplikasi tekanan tinggi",
        "Pelabelan dan dokumentasi tersuai",
        "Pemasangan prototaip sekali sahaja",
      ],
      applications: [
        "Peralatan bukan standard dengan konfigurasi port unik",
        "Binaan OEM jentera tersuai",
        "Sistem hidraulik marin (hos dan kelengkapan tahan air masin)",
        "Sistem hidraulik suhu tinggi (wap, minyak terma)",
        "Talian hidraulik gred makanan (bahan khas diperlukan — hubungi kami untuk bincang)",
      ],
      notes: [
        "Untuk aplikasi bukan standard, kami mungkin perlu dapatkan hos atau kelengkapan khusus — masa penghantaran berbeza.",
        "Beritahu kami model mesin, jenis benang port dan tekanan kerja — tiga maklumat ini meliputi kebanyakan keperluan sebut harga kami.",
        "Untuk aplikasi kimia (ester fosfat, bendalir boleh bio-urai), bahan hos perlu ditentukan dengan teliti — hubungi kami sebelum memesan.",
      ],
      whatsappSubject: "Hai Terra Hose, saya perlukan pemasangan hos hidraulik tersuai untuk aplikasi khas. Boleh tolong?",
    },
  },
};
