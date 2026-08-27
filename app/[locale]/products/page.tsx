import Link from "next/link";
import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { productSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const iconMap: Record<string, IconName> = {
  "hydraulic-hose": "wrench",
  "hydraulic-fittings": "crimp",
  ferrules: "crimp",
  adapters: "replace",
  "o-rings-seals": "wrench",
  accessories: "construction",
};

const list = {
  en: {
    viewProducts: "View Products →",
    more: "more",
    cantFind: "Can't find what you need?",
    cantFindDesc:
      "We stock many more sizes and types not listed here. Send us a WhatsApp message with what you need — hose size, fitting type, or a photo of the part.",
    whatsappUs: "WhatsApp Us",
  },
  zh: {
    viewProducts: "查看产品 →",
    more: "更多",
    cantFind: "找不到您需要的？",
    cantFindDesc:
      "我们现货还有很多未列出的尺寸和型号。把您的需求（软管尺寸、接头类型或零件照片）发到 WhatsApp。",
    whatsappUs: "WhatsApp 咨询",
  },
  ms: {
    viewProducts: "Lihat Produk →",
    more: "lagi",
    cantFind: "Tak jumpa apa yang anda perlukan?",
    cantFindDesc:
      "Kami stok banyak lagi saiz dan jenis yang tidak disenaraikan di sini. Hantar mesej WhatsApp dengan keperluan anda — saiz hos, jenis kelengkapan atau foto bahagian.",
    whatsappUs: "WhatsApp Kami",
  },
} as Record<string, { viewProducts: string; more: string; cantFind: string; cantFindDesc: string; whatsappUs: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.products.title, description: t.products.desc };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = t.ui.common;
  const L = list[locale] ?? list.en;
  const items = productSlugs.map((slug) => ({ slug, ...t.products.items[slug] }));

  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">{c.home}</Link>
            <span>/</span>
            <span className="text-steel/40">{c.products}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">{t.products.tag}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              {t.products.title}
            </h1>
            <p className="mt-4 text-lg text-white/70">{t.products.desc}</p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${locale}/products/${cat.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Icon name={iconMap[cat.slug] ?? "wrench"} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {cat.name}
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-accent/70 mt-0.5">{cat.sub}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel/80">{cat.desc}</p>
              <div className="mt-5 text-sm font-medium text-accent group-hover:underline">
                {L.viewProducts}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-100 bg-white p-6 shadow-card">
          <h3 className="font-display text-lg font-semibold text-primary mb-2">{L.cantFind}</h3>
          <p className="text-sm text-steel/70 mb-4">{L.cantFindDesc}</p>
          <a
            href={waLink("Hi Terra Hose, I'm looking for hydraulic products. Can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            {L.whatsappUs}
          </a>
        </div>
      </div>
    </>
  );
}
