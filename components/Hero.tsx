import Link from "next/link";
import { site, waDefault } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "./Icon";

const capabilityIcons = ["wrench", "crimp", "custom", "repair"] as const;

/**
 * Hero — 第一屏必须立刻告诉客户 Terra 是谁、做什么、能拿到什么
 * 白底 + 右侧液压软管产品图（hero-bg.jpg），文案放左侧空白区
 */
export function Hero({ locale = "en" }: { locale?: string }) {
  const t = getDictionary(locale);

  const capabilities = t.hero.capabilities.map((label, i) => ({
    icon: capabilityIcons[i] ?? "wrench",
    label,
  }));

  return (
    <section className="relative overflow-hidden bg-white text-primary">
      {/* 背景：白底 + 右侧软管产品图 */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* 左侧白色渐变遮罩：保证文案区纯白、深色文字清晰，右侧软管露出 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 34%, rgba(255,255,255,0.62) 55%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="container-x relative py-16 md:py-24">
        <div className="max-w-xl">
          <span className="tag-chip mb-5">{t.hero.tagline}</span>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-wide">
            {t.hero.title1}
            <br />
            <span className="text-accent">{t.hero.title2}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-steel-light leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/request-quote"
              className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              <Icon name="quote" className="w-5 h-5" />
              {t.hero.cta1}
            </Link>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded bg-[#25D366] px-7 py-3.5 font-semibold text-white hover:brightness-105 transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* 底部能力条 */}
      <div className="relative border-t border-primary/10 bg-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10">
          {capabilities.map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-4">
              <Icon name={item.icon as any} className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
