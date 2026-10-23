import Link from "next/link";
import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n";
import { serviceSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { waDefault } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const iconMap: Record<string, IconName> = {
  "hydraulic-hose-assembly": "wrench",
  "hose-crimping": "crimp",
  "hose-replacement": "replace",
  "hydraulic-hose-repair": "repair",
  "custom-hose-assembly": "custom",
  "onsite-emergency": "truck",
};

const learnMore = {
  en: "Learn More →",
  zh: "了解更多 →",
  ms: "Ketahui Lebih Lanjut →",
} as Record<string, string>;

const mobileLabels = {
  en: { tag: "🚐 New Service", cta: "Book Mobile Service →", desc: "We arrive at your site with hoses, fittings and crimper — replace, test and you're back running." },
  zh: { tag: "🚐 新服务", cta: "预约上门服务 →", desc: "我们带着软管、接头和压接设备到达现场——更换、测压，设备立即恢复运转。" },
  ms: { tag: "🚐 Perkhidmatan Baharu", cta: "Tempah Perkhidmatan Mudah Alih →", desc: "Kami tiba di tapak anda dengan hos, kelengkapan dan pengelim — ganti, uji dan anda kembali beroperasi." },
} as Record<string, { tag: string; cta: string; desc: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.services.title, description: t.services.desc };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = t.ui.common;
  const mobile = t.services.items["onsite-emergency"];
  const ml = mobileLabels[locale] ?? mobileLabels.en;
  const items = serviceSlugs
    .map((slug) => ({ slug, ...t.services.items[slug] }));

  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">{c.home}</Link>
            <span>/</span>
            <span className="text-steel/40">{c.services}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">{t.services.tag}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              {t.services.title}
            </h1>
            <p className="mt-4 text-lg text-white/70">{t.services.desc}</p>
          </div>
        </div>
      </section>

      {/* MOBILE SERVICE HERO BANNER */}
      <section className="bg-accent py-12 text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold mb-4">
                {ml.tag}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {mobile.title}
              </h2>
              <p className="mt-3 text-lg text-white/85 leading-relaxed">
                {ml.desc}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${locale}/services/onsite-emergency`}
                  className="flex items-center justify-center gap-2 rounded bg-white px-6 py-3 font-bold text-accent hover:bg-orange-50 transition-colors"
                >
                  {ml.cta}
                </Link>
                <a
                  href={waDefault}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded border-2 border-white/60 px-6 py-3 font-bold hover:bg-white/10 transition-colors"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  {locale === "zh" ? "WhatsApp 联系我们" : locale === "ms" ? "WhatsApp Kami" : "WhatsApp Us Now"}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔧", label: locale === "zh" ? "软管现货" : locale === "ms" ? "Stok Hos" : "Hose Stock" },
                { icon: "⚙️", label: locale === "zh" ? "各类接头" : locale === "ms" ? "Semua Kelengkapan" : "All Fittings" },
                { icon: "💨", label: locale === "zh" ? "压接设备" : locale === "ms" ? "Mesin Pengelim" : "Crimping Equipment" },
                { icon: "✅", label: locale === "zh" ? "现场测压" : locale === "ms" ? "Uji Tekanan Di Tapak" : "On-site Pressure Test" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.slug} className={`group rounded-xl border bg-white shadow-card hover:shadow-card-hover transition-all ${
              s.slug === "onsite-emergency"
                ? "border-accent ring-2 ring-accent/20"
                : "border-gray-100"
            }`}>
              <Link
                href={`/${locale}/services/${s.slug}`}
                aria-labelledby={`service-title-${s.slug}`}
                className="block rounded-t-xl p-7 pb-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <Icon name={iconMap[s.slug] ?? "wrench"} className="w-6 h-6" />
                </div>
                <h2 id={`service-title-${s.slug}`} className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wider text-accent/70 mt-0.5">{s.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel/80">{s.desc}</p>
              </Link>
              <div className="px-7 pb-6">
                <Link
                  href={`/${locale}/services/${s.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {learnMore[locale] ?? learnMore.en}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
