import type { Metadata } from "next";
import { waLink } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { getDictionary, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    breadcrumb: "Request a Quote",
    tag: "No Obligation",
    title: "Request a Quote",
    desc: "Tell us what you need — we respond fast, usually within the hour during business hours. WhatsApp is the fastest way to get a quote.",
    fastestTitle: "Fastest Way to Get a Quote",
    fastestDesc: "Click any template below — it opens WhatsApp with a pre-filled message. Mon–Sat, 8:30 AM – 6:00 PM.",
    directContact: "Direct Contact",
    whatsappBtn: "WhatsApp +60 16-772 8500",
    callBtn: "📞 Call +60 16-772 8500",
    whatNext: "What Happens Next?",
    steps: [
      "We receive your message instantly via WhatsApp",
      "We check stock and prepare a quotation",
      "You receive our reply — usually within 1 hour",
      "Confirm order — we assemble and deliver fast",
    ],
    visitWorkshop: "Visit Our Workshop",
    walkIns: "Walk-ins welcome during business hours",
    hoursNote: "Mon–Sat: 8:30 AM – 6:00 PM\nSun: Closed",
  },
  zh: {
    breadcrumb: "索取报价",
    tag: "无义务",
    title: "索取报价",
    desc: "告诉我们您的需求——我们快速回复，营业时间内通常一小时内。WhatsApp 是获取报价的最快方式。",
    fastestTitle: "获取报价的最快方式",
    fastestDesc: "点击下方任意模板——它会在 WhatsApp 中打开并预填消息。周一至周六 8:30–18:00。",
    directContact: "直接联系",
    whatsappBtn: "WhatsApp +60 16-772 8500",
    callBtn: "📞 致电 +60 16-772 8500",
    whatNext: "接下来会发生什么？",
    steps: [
      "我们即时通过 WhatsApp 收到您的消息",
      "我们查询库存并准备报价",
      "您收到我们的回复——通常 1 小时内",
      "确认订单——我们快速组装并交付",
    ],
    visitWorkshop: "到访我们的车间",
    walkIns: "营业时间内欢迎到店",
    hoursNote: "周一至周六：8:30–18:00\n周日：休息",
  },
  ms: {
    breadcrumb: "Minta Sebut Harga",
    tag: "Tiada Obligasi",
    title: "Minta Sebut Harga",
    desc: "Beritahu kami apa yang anda perlukan — kami respons pantas, biasanya dalam masa sejam pada waktu perniagaan. WhatsApp ialah cara terpantas untuk dapatkan sebut harga.",
    fastestTitle: "Cara Terpantas Dapatkan Sebut Harga",
    fastestDesc: "Klik mana-mana templat di bawah — ia membuka WhatsApp dengan mesej pra-isi. Isnin–Sabtu, 8:30 pagi – 6:00 petang.",
    directContact: "Hubungan Terus",
    whatsappBtn: "WhatsApp +60 16-772 8500",
    callBtn: "📞 Hubungi +60 16-772 8500",
    whatNext: "Apa Seterusnya?",
    steps: [
      "Kami terima mesej anda serta-merta melalui WhatsApp",
      "Kami semak stok dan sediakan sebut harga",
      "Anda terima balasan kami — biasanya dalam 1 jam",
      "Sahkan pesanan — kami pasang dan hantar pantas",
    ],
    visitWorkshop: "Lawati Bengkel Kami",
    walkIns: "Kunjungan terus dialu-alukan pada waktu perniagaan",
    hoursNote: "Isnin–Sabtu: 8:30 pagi – 6:00 petang\nAhad: Tutup",
  },
} as Record<string, any>;

const quoteTemplates = [
  {
    labels: {
      en: "Custom Hose Assembly",
      zh: "定制软管总成",
      ms: "Pemasangan Hos Tersuai",
    },
    subject: `Hi Terra Hose, I'd like to request a quote for a custom hose assembly.
Hose type: [e.g., SAE R2AT / EN 853 2SN]
Size: [dash size or ID/OD]
Fitting type: [e.g., BSP, JIS, ORFS]
Quantity: [number of assemblies]
Length: [mm or inches each]
Other notes: [any special requirements]`,
  },
  {
    labels: {
      en: "Hydraulic Fittings",
      zh: "液压接头",
      ms: "Kelengkapan Hidraulik",
    },
    subject: `Hi Terra Hose, I'd like to request a quote for hydraulic fittings.
Fitting type: [e.g., BSP elbow, ORFS male, SAE flange]
Size: [e.g., 1/2" BSP, -8 ORFS]
Quantity: [number needed]
Other notes: [any special requirements]`,
  },
  {
    labels: {
      en: "Hose Replacement (On-Site)",
      zh: "软管更换（现场）",
      ms: "Penggantian Hos (Di Tapak)",
    },
    subject: `Hi Terra Hose, I'd like to request a quote for on-site hose replacement service.
Equipment: [e.g., Hitachi ZX200 Excavator]
Number of hoses: [how many need replacing]
Location: [area in Johor]
Preferred timing: [ASAP / this week / etc.]`,
  },
  {
    labels: {
      en: "Hose Crimping Service",
      zh: "软管压接服务",
      ms: "Perkhidmatan Pengelim Hos",
    },
    subject: `Hi Terra Hose, I'd like to request a quote for hose crimping service.
Hose type: [e.g., R2AT / 4SP]
Quantity: [number of hoses]
Ferrule needed: [yes / no / I have ferrules]
Can deliver to workshop: [yes / no]`,
  },
  {
    labels: {
      en: "Bulk / Repeat Order",
      zh: "批量 / 重复订单",
      ms: "Pesanan Pukal / Ulangan",
    },
    subject: `Hi Terra Hose, I'd like to request a quote for a bulk or repeat order.
Description: [what you need]
Estimated quantity: [number per month or per order]
Frequency: [one-time / monthly / quarterly]
Current supplier: [who you're currently buying from]`,
  },
];

const waIconPath =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const L = copy[locale] ?? copy.en;
  return { title: L.title, description: L.desc };
}

export default async function RequestQuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = t.ui.common;
  const L = copy[locale] ?? copy.en;

  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <a href={`/${locale}`} className="hover:text-accent transition-colors">{c.home}</a>
            <span>/</span>
            <span className="text-steel/40">{L.breadcrumb}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="tag-chip mb-4">{L.tag}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              {L.title}
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">{L.desc}</p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl bg-accent p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                {L.fastestTitle}
              </h2>
              <p className="text-sm text-white/80 mb-6">{L.fastestDesc}</p>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {quoteTemplates.map((tpl) => (
                  <a
                    key={tpl.labels.en}
                    href={waLink(tpl.subject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-primary hover:bg-zinc-50 hover:shadow-lg transition-all text-left"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366] shrink-0" fill="currentColor">
                      <path d={waIconPath} />
                    </svg>
                    <span>{tpl.labels[locale as keyof typeof tpl.labels] ?? tpl.labels.en}</span>
                    <span className="ml-auto text-xs text-steel/50">→</span>
                  </a>
                ))}
              </div>
            </div>

            <QuoteForm locale={locale} />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-3">{L.directContact}</h3>
              <a
                href={waLink("Hi Terra Hose, I'd like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d={waIconPath} />
                </svg>
                {L.whatsappBtn}
              </a>
              <a
                href="tel:+60167728500"
                className="flex items-center justify-center gap-2 rounded border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {L.callBtn}
              </a>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">{L.whatNext}</h3>
              <ul className="space-y-3">
                {L.steps.map((text: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{i + 1}</div>
                    <span className="text-sm text-steel/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-1">{L.visitWorkshop}</h3>
              <p className="text-xs text-steel/60 mb-3">{L.walkIns}</p>
              <p className="text-sm text-steel/80 leading-relaxed">
                190-5, Jalan Saleng 10,<br />
                Kulai, Johor 81400,<br />
                Malaysia
              </p>
              <p className="mt-2 text-xs text-steel/60 whitespace-pre-line">{L.hoursNote}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
