import en from "@/messages/en.json";
import zh from "@/messages/zh.json";
import ms from "@/messages/ms.json";

/** 支持的语言 */
export const locales = ["en", "zh", "ms"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** 语言显示名（用于切换器） */
export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ms: "Bahasa Melayu",
};

const dictionaries = { en, zh, ms } as const;

export type Dictionary = typeof en;

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries.en;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
