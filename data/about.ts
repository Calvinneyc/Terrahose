import { site } from "@/lib/site";

export interface AboutSection {
  title: string;
  content: string;
}

export interface TeamMember {
  role: string;
  note: string;
}

export interface AboutContent {
  description: string;
  capabilities: string[];
  sections: AboutSection[];
  team: TeamMember[];
}

export const about = {
  company: site.name,
  established: "Johor, Malaysia",

  // 语言无关的信息
  location: {
    address: site.address,
    city: "Johor Bahru, Johor, Malaysia",
    postal: "81400",
  },
  hours: site.hours,

  localized: {
    en: {
      description: `Terra Hose & Hydraulic Engineering is a specialist hydraulic hose assembly and fitting company based in Johor, Malaysia. We supply and fabricate hydraulic hose assemblies for a wide range of mobile and industrial applications.

Our core strength is hydraulic hose engineering — not just selling products, but helping customers identify the right hose, fitting, and assembly for their specific equipment. From excavators to factory presses, we have the technical knowledge and stock to deliver the right solution fast.`,
      capabilities: [
        "Hydraulic hose assembly (custom length, any fitting)",
        "Hose crimping with precision equipment",
        "Hose replacement and repair",
        "Hydraulic fitting identification (send a photo)",
        "Technical consultation for hydraulic systems",
        "Stock supply of hose, fittings, ferrules, and accessories",
      ],
      sections: [
        {
          title: "What We Do",
          content: `We specialize in hydraulic hose assembly — the process of cutting hose to length, attaching the correct fittings (crimped or barbed), and delivering a ready-to-install hydraulic line.

Whether you need one custom hose for a workshop repair or a bulk order for a fleet, we can produce it. Our workshop stocks common hose types (SAE R1AT, R2AT, 4SP, 4SH) and a wide range of fittings in BSP, JIS, ORFS, and SAE flange patterns.`,
        },
        {
          title: "How We Help You",
          content: `Most customers come to us with one of three needs:

1. **Emergency replacement** — A hose has blown on their machine and they need a new one fast.
2. **Custom assembly** — They need a non-standard hose length or fitting combination that standard suppliers don't carry.
3. **Identification help** — They have a damaged fitting or hose but don't know what specification it is.

For all three, the fastest path is to WhatsApp us a photo. We can usually identify the part and give you a price within minutes.`,
        },
        {
          title: "Our Location",
          content: `Based in Kulai, Johor, we serve clients across Johor Bahru, Kulai, Skudai, Pasir Gudang, and surrounding areas. Workshop visits are welcome during business hours.

For clients outside Johor, we can arrange shipping for standard orders.`,
        },
      ],
      team: [
        {
          role: "Founder & Hydraulic Engineer",
          note: "Technical lead, customer consultation, and custom assembly design.",
        },
        {
          role: "Workshop Technician",
          note: "Hose assembly, crimping, and quality inspection.",
        },
      ],
    },
    zh: {
      description: `Terra Hose & Hydraulic Engineering 是位于马来西亚柔佛的专业液压软管总成与接头公司。我们为各种移动和工业应用供应并制作液压软管总成。

我们的核心优势是液压软管工程——不只是销售产品，而是帮助客户为其特定设备识别正确的软管、接头和总成。从挖掘机到工厂压机，我们拥有技术知识和库存，能快速交付正确的解决方案。`,
      capabilities: [
        "液压软管总成（定制长度，任意接头）",
        "精密设备软管压接",
        "软管更换与维修",
        "液压接头识别（发张照片即可）",
        "液压系统技术咨询",
        "软管、接头、套筒与配件现货供应",
      ],
      sections: [
        {
          title: "我们做什么",
          content: `我们专注于液压软管总成——即按长度切割软管、装配正确的接头（压接或倒钩式），并交付可直接安装的液压管路。

无论您是为车间维修定制一根软管，还是为车队批量订购，我们都能生产。我们的车间现货常见软管类型（SAE R1AT、R2AT、4SP、4SH）以及 BSP、JIS、ORFS 和 SAE 法兰规格的各种接头。`,
        },
        {
          title: "我们如何帮您",
          content: `大多数客户带着三种需求之一来找我们：

1. **紧急更换**——机器上的软管爆裂，急需一根新的。
2. **定制总成**——需要标准供应商没有的非标软管长度或接头组合。
3. **识别帮助**——接头或软管损坏，但不知道是什么规格。

对这三种情况，最快的办法是把照片发到 WhatsApp。我们通常几分钟内就能识别零件并报价。`,
        },
        {
          title: "我们的位置",
          content: `我们位于柔佛古来，服务新山、古来、士姑来、巴西古当及周边地区的客户。营业时间内欢迎到访车间。

对于柔佛以外的客户，标准订单我们可以安排发货。`,
        },
      ],
      team: [
        {
          role: "创始人 & 液压工程师",
          note: "技术负责人，客户咨询与定制总成设计。",
        },
        {
          role: "车间技师",
          note: "软管总成、压接与质量检验。",
        },
      ],
    },
    ms: {
      description: `Terra Hose & Hydraulic Engineering ialah syarikat pakar pemasangan hos hidraulik dan kelengkapan yang berpangkalan di Johor, Malaysia. Kami membekal dan membuat pemasangan hos hidraulik untuk pelbagai aplikasi mudah alih dan industri.

Kekuatan teras kami ialah kejuruteraan hos hidraulik — bukan sekadar menjual produk, tetapi membantu pelanggan mengenal pasti hos, kelengkapan dan pemasangan yang betul untuk peralatan khusus mereka. Dari jengkaut hingga penekan kilang, kami ada pengetahuan teknikal dan stok untuk menghantar penyelesaian betul dengan pantas.`,
      capabilities: [
        "Pemasangan hos hidraulik (panjang tersuai, apa-apa kelengkapan)",
        "Pengelim hos dengan peralatan ketepatan",
        "Penggantian dan pembaikan hos",
        "Pengenalpastian kelengkapan hidraulik (hantar foto)",
        "Perundingan teknikal untuk sistem hidraulik",
        "Bekalan stok hos, kelengkapan, ferul dan aksesori",
      ],
      sections: [
        {
          title: "Apa Yang Kami Buat",
          content: `Kami pakar dalam pemasangan hos hidraulik — proses memotong hos mengikut panjang, memasang kelengkapan yang betul (dikemil atau berbarb), dan menghantar talian hidraulik sedia dipasang.

Sama ada anda perlukan satu hos tersuai untuk pembaikan bengkel atau pesanan pukal untuk armada, kami boleh menghasilkannya. Bengkel kami stok jenis hos biasa (SAE R1AT, R2AT, 4SP, 4SH) dan pelbagai kelengkapan dalam corak BSP, JIS, ORFS dan bebibir SAE.`,
        },
        {
          title: "Bagaimana Kami Membantu Anda",
          content: `Kebanyakan pelanggan datang kepada kami dengan satu daripada tiga keperluan:

1. **Penggantian kecemasan** — Hos telah pecah pada mesin mereka dan mereka perlukan yang baharu dengan pantas.
2. **Pemasangan tersuai** — Mereka perlukan panjang hos atau kombinasi kelengkapan bukan standard yang tidak dibawa pembekal standard.
3. **Bantuan pengenalpastian** — Mereka ada kelengkapan atau hos rosak tetapi tidak tahu spesifikasinya.

Untuk ketiga-tiganya, laluan terpantas ialah WhatsApp kami foto. Kami biasanya boleh kenal pasti bahagian dan beri harga dalam beberapa minit.`,
        },
        {
          title: "Lokasi Kami",
          content: `Berpangkalan di Kulai, Johor, kami berkhidmat kepada pelanggan di Johor Bahru, Kulai, Skudai, Pasir Gudang dan kawasan sekitar. Kunjungan bengkel dialu-alukan pada waktu perniagaan.

Untuk pelanggan di luar Johor, kami boleh atur penghantaran untuk pesanan standard.`,
        },
      ],
      team: [
        {
          role: "Pengasas & Jurutera Hidraulik",
          note: "Ketua teknikal, perundingan pelanggan dan reka bentuk pemasangan tersuai.",
        },
        {
          role: "Juruteknik Bengkel",
          note: "Pemasangan hos, pengelim dan pemeriksaan kualiti.",
        },
      ],
    },
  } as Record<string, AboutContent>,
};
