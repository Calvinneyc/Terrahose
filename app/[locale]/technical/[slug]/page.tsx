import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechnicalGuidePage } from "@/components/TechnicalGuidePage";
import { technicalContent } from "@/data/content-technical";
import { getSiblings, getLocalized, technicalSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => technicalSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = technicalContent[slug];
  if (!content) return {};
  const c = getLocalized(content, locale);
  return { title: c.title, description: c.description };
}

export default async function TechnicalDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = technicalContent[slug];
  if (!content) notFound();
  const c = getLocalized(content, locale);
  const siblings = getSiblings(locale, "technical", slug);
  return <TechnicalGuidePage locale={locale} {...c} siblings={siblings} />;
}
