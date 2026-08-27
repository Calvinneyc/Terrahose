import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/IndustryPage";
import { industryContent } from "@/data/content-industries";
import { getSiblings, getLocalized, industrySlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

const iconMap: Record<string, string> = {
  construction: "construction",
  agriculture: "agriculture",
  manufacturing: "manufacturing",
  "heavy-machinery": "machinery",
  industrial: "industrial",
};

export function generateStaticParams() {
  return locales.flatMap((locale) => industrySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = industryContent[slug];
  if (!content) return {};
  const c = getLocalized(content, locale);
  return { title: c.title, description: c.description };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = industryContent[slug];
  if (!content) notFound();
  const c = getLocalized(content, locale);
  const siblings = getSiblings(locale, "industries", slug);
  return (
    <IndustryPage
      locale={locale}
      iconName={iconMap[slug] ?? "industrial"}
      {...c}
      siblings={siblings}
    />
  );
}
