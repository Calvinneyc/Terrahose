import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { locales, isLocale, getDictionary } from "@/lib/i18n";

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

  const localeAlternate = locales.map((loc) => ({
    url: `/${loc}`,
    lang: loc === "zh" ? "zh-CN" : loc === "ms" ? "ms-MY" : "en-MY",
  }));

  return {
    title: `${t.hero.title1} ${t.hero.title2}`,
    description: t.hero.desc,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(localeAlternate.map((l) => [l.lang, l.url])),
    },
    openGraph: {
      title: `${t.hero.title1} ${t.hero.title2}`,
      description: t.hero.desc,
      locale: locale === "zh" ? "zh_CN" : locale === "ms" ? "ms_MY" : "en_MY",
      alternateLocale: (locale === "zh" ? ["en_MY", "ms_MY"] : locale === "ms" ? ["en_MY", "zh_CN"] : ["zh_CN", "ms_MY"]),
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Terra Hose & Hydraulic Engineering — Hydraulic Hose, Fittings & Mobile Service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.hero.title1} ${t.hero.title2}`,
      description: t.hero.desc,
      images: ["/og-image.svg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const langMap: Record<string, string> = {
    zh: "zh-CN",
    ms: "ms-MY",
    en: "en-MY",
  };

  return (
    <html lang={langMap[locale] ?? "en-MY"}>
      <body className="flex flex-col min-h-screen">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <MobileCTA locale={locale} />
      </body>
    </html>
  );
}
