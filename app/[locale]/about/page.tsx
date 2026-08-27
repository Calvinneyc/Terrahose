import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { getDictionary } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.nav.about, description: t.ui.about.heroDesc };
}

export default async function AboutRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
