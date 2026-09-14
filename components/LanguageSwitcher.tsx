"use client";

import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { Icon } from "./Icon";

const shortNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ms: "BM",
};

export function LanguageSwitcher({ current }: { current: string }) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/20 p-0.5"
      role="group"
      aria-label="三语切换 / Language (3 languages)"
      title="三语切换：English / 中文 / Bahasa Melayu"
    >
      <Icon name="globe" className="w-4 h-4 text-white/60 ml-1.5 shrink-0" />
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <Link
            key={loc}
            href={`/${loc}`}
            title={localeNames[loc]}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              active ? "bg-accent text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {shortNames[loc]}
          </Link>
        );
      })}
    </div>
  );
}
