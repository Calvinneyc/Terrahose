import { getDictionary, type Locale } from "@/lib/i18n";

/** 各板块 slug 列表（保持与 messages 字典 key 一致） */
export const productSlugs = [
  "hydraulic-hose",
  "hydraulic-fittings",
  "ferrules",
  "adapters",
  "o-rings-seals",
  "accessories",
] as const;

export const serviceSlugs = [
  "hydraulic-hose-assembly",
  "hose-crimping",
  "hose-replacement",
  "hydraulic-hose-repair",
  "custom-hose-assembly",
  "onsite-emergency",
] as const;

export const industrySlugs = [
  "construction",
  "agriculture",
  "manufacturing",
  "heavy-machinery",
  "industrial",
] as const;

export const technicalSlugs = [
  "hose-size-guide",
  "bsp-vs-jis",
  "orfs-fittings",
  "sae-flange",
  "crimping-guide",
] as const;

/** 生成「其他同板块页面」链接（自动按 locale 取名，排除当前页） */
export function getSiblings(
  locale: string,
  kind: "products" | "services" | "industries" | "technical",
  currentSlug: string
): { slug: string; name: string }[] {
  const t = getDictionary(locale);
  const list: { slug: string; name: string }[] = [];

  if (kind === "products") {
    for (const slug of productSlugs) {
      if (slug !== currentSlug) list.push({ slug, name: t.products.items[slug].name });
    }
  } else if (kind === "services") {
    for (const slug of serviceSlugs) {
      if (slug !== currentSlug && slug !== "onsite-emergency")
        list.push({ slug, name: t.services.items[slug].title });
    }
  } else if (kind === "industries") {
    for (const slug of industrySlugs) {
      if (slug !== currentSlug) list.push({ slug, name: t.industries.items[slug] });
    }
  } else if (kind === "technical") {
    const titles = t.technical.items.map((x) => x.title);
    technicalSlugs.forEach((slug, i) => {
      if (slug !== currentSlug) list.push({ slug, name: titles[i] ?? slug });
    });
  }
  return list;
}

export function getLocalized<T>(
  content: Record<Locale, T> | Record<string, T>,
  locale: string
): T {
  return (content as Record<string, T>)[locale] ?? (content as Record<string, T>).en;
}
