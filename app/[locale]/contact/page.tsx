import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
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
  return { title: t.nav.contact, description: t.ui.contact.heroDesc };
}

export default async function ContactRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactPage locale={locale} />;
}
