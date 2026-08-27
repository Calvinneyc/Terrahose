import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { serviceContent } from "@/data/content-services";
import { getSiblings, getLocalized, serviceSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs
      .filter((slug) => slug !== "onsite-emergency")
      .map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = serviceContent[slug];
  if (!content) return {};
  const c = getLocalized(content, locale);
  return { title: c.title, description: c.description };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = serviceContent[slug];
  if (!content) notFound();
  const c = getLocalized(content, locale);
  const siblings = getSiblings(locale, "services", slug);
  return <ServicePage locale={locale} {...c} siblings={siblings} />;
}
