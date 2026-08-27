import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { productContent } from "@/data/content-products";
import { getSiblings, getLocalized, productSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => productSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = productContent[slug];
  if (!content) return {};
  const c = getLocalized(content, locale);
  return { title: c.title, description: c.description };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = productContent[slug];
  if (!content) notFound();
  const c = getLocalized(content, locale);
  const siblings = getSiblings(locale, "products", slug);
  return <ProductCategoryPage locale={locale} {...c} siblings={siblings} />;
}
