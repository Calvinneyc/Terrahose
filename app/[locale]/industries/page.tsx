import Link from "next/link";
import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n";
import { industrySlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const iconMap: Record<string, IconName> = {
  construction: "construction",
  agriculture: "agriculture",
  manufacturing: "manufacturing",
  "heavy-machinery": "machinery",
  industrial: "industrial",
};

const learnMore = {
  en: "Learn More →",
  zh: "了解更多 →",
  ms: "Ketahui Lebih Lanjut →",
} as Record<string, string>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.industries.title, description: t.industries.desc };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = t.ui.common;

  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">{c.home}</Link>
            <span>/</span>
            <span className="text-steel/40">{c.industries}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">{t.industries.tag}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              {t.industries.title}
            </h1>
            <p className="mt-4 text-lg text-white/70">{t.industries.desc}</p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industrySlugs.map((slug) => (
            <Link
              key={slug}
              href={`/${locale}/industries/${slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Icon name={iconMap[slug] ?? "industrial"} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {t.industries.items[slug]}
              </h2>
              <div className="mt-5 text-sm font-medium text-accent group-hover:underline">
                {learnMore[locale] ?? learnMore.en}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
